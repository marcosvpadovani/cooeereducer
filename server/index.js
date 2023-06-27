require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "https://cooee-reducer.onrender.com",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

const BASE_SEARCH_URL = "https://pt.clubcooee.com/users/friends/";
const BASE_DELETE_URL =
  "https://pt.clubcooee.com/users/rosterchange/-PR3TTY/ignore";

const TOTAL_GRID_COLUMNS = 48;

app.use("/get_friends_name/:total/:name", async (req, res) => {
  const { total, name } = req.params;

  if (!total || !name)
    return res.status(400).json({
      message: "Please, provide us how much friends and your nickname.",
    });

  const totalPage = Math.round(Number(total) / TOTAL_GRID_COLUMNS);
  let names = [];

  try {
    for (let i = 0; i < totalPage; i++) {
      const res = await axios.get(`${BASE_SEARCH_URL}${name}/${i}`);

      const $ = cheerio.load(res.data);

      const friends = $(".gallery--item").toArray();

      friends.forEach((frnd) => {
        const name = frnd.attributes;

        name.forEach((attr) => {
          if (attr.name === "data-widget-url") {
            const name = attr.value.split("/")[3].trim();

            names = [...names, name];
          }
        });
      });

      if (i > totalPage) break;
    }

    return res.status(200).json({ friends: names });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
});

app.use("*", (req, res) => {
  return res.status(404).json({ message: "Not Server" });
});

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));

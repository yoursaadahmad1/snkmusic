const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");

const PEXELS_API_KEY = "tbfbH04Koh7Bnxa6j1JhXS3f5kN8Qs8S3ptu26WgVzxIt4F6NpPs2gqr"; // 🔁 Replace this with your actual key
const OUTPUT_DIR = path.join(__dirname, "downloaded-images");

// 🖼️ Array of search queries
const searchQueries = [
  "music",
  "singer",
  "concert",
  "instrument",
  "avatar",
  "guitar",
  "song",
];

async function fetchImageUrl(query) {
  try {
    const response = await axios.get("https://api.pexels.com/v1/search", {
      headers: {
        Authorization: PEXELS_API_KEY,
      },
      params: {
        query,
        per_page: 20,
      },
    });

    const photo = response.data.photos?.[0];
    return photo ? photo.src.original : null;
  } catch (error) {
    console.error(`❌ Error fetching "${query}":`, error.message);
    return null;
  }
}

async function downloadImage(url, filename) {
  const writer = fs.createWriteStream(path.join(OUTPUT_DIR, filename));

  const response = await axios({
    url,
    method: "GET",
    responseType: "stream",
  });

  return new Promise((resolve, reject) => {
    response.data.pipe(writer);
    writer.on("finish", resolve);
    writer.on("error", reject);
  });
}

async function main() {
  await fs.ensureDir(OUTPUT_DIR);

  for (const query of searchQueries) {
    const imageUrl = await fetchImageUrl(query);
    if (imageUrl) {
      const extension = path.extname(imageUrl).split("?")[0] || ".jpg";
      const filename = `${query}${extension}`;
      console.log(`⬇️ Downloading "${query}" to ${filename}`);
      await downloadImage(imageUrl, filename);
    } else {
      console.log(`⚠️ No image found for "${query}"`);
    }
  }

  console.log("✅ All downloads complete!");
}

main();

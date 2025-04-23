const functions = require("firebase-functions");
const axios = require("axios");

exports.generateNewsVideo = functions.pubsub
  .schedule("every 60 minutes")
  .onRun(async (context) => {
    console.log("Fetching latest news...");
    const response = await axios.get(
      "https://newsdata.io/api/1/news?apikey=YOUR_API_KEY&language=en"
    );

    const topHeadline = response.data.results[0]?.title;
    const summary = response.data.results[0]?.description;

    console.log("Top Headline:", topHeadline);
    console.log("Summary:", summary);

    // Add your video generation and upload logic here later
    return null;
  });￼Enter

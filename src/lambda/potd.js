import fetch from "node-fetch";

const POTD_URL = `https://api.nasa.gov/planetary/apod`;
const API_KEY = process.env.NASA_API_KEY;

export async function handler(event, context) {
  try {
    console.log(API_KEY);
    const response = await fetch(`${POTD_URL}?api_key=${API_KEY}`, {
      timeout: 2000
    }).then(res => res.json());
    return {
      statusCode: 200,
      body: JSON.stringify(response)
    };
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify(err) // Could be a custom message or object i.e. JSON.stringify(err)
    };
  }
}

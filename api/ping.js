// api/ping.js

export default async function handler(req, res) {
  try {
    const response = await fetch('https://your-backend.onrender.com');
    const text = await response.text();
    res.status(200).send("✅ Backend pinged successfully: " + text.slice(0, 50));
  } catch (err) {
    res.status(500).send("❌ Failed to ping backend: " + err.message);
  }
}

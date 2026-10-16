
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve the dashboard
app.use(express.static(__dirname));
app.use(express.json({ limit: "20kb" }));

app.get("/api/status", (req, res) => {
  res.json({
    ok: true,
    message: "Dashboard server is running",
    botConnected: false
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dashboard.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Dashboard server listening on port ${PORT}`);
});

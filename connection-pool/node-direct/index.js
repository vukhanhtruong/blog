const express = require("express");
const mysql = require("mysql2");

const app = express();
const host = "0.0.0.0";
const port = 3000;

// to avoid caching for testing
app.set("etag", false);

app.get("/", (req, res) => {
  const db = mysql.createConnection({
    host: "db",
    user: "user",
    password: "pass",
    database: "sampledb",
  });
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      console.error("DB error:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json(results);
  });
  db.end();
});

app.listen(port, host, () => {
  console.log(`Direct app listening at http://${host}:${port}`);
});

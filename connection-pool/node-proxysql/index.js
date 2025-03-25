const express = require("express");
const mysql = require("mysql2");

const app = express();
const port = 3000;

// to avoid caching for testing
app.set("etag", false);

app.get("/", (req, res) => {
  const db = mysql.createConnection({
    host: "proxysql",
    port: 6033,
    user: "user",
    password: "pass",
    database: "sampledb",
  });
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      console.error("ProxySQL DB error:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json(results);
  });
  db.end();
});

app.listen(port, () => {
  console.log(`ProxySQL app listening at http://localhost:${port}`);
});

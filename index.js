const express = require("express");
const fetch = require("node-fetch");
const app = express();

const webhookURL = process.env.WEBHOOK_URL;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("FubCraft VIP başvuru sayfası aktif.");
});

app.post("/vip", async (req, res) => {
  const { username, vip } = req.body;

  if (!username || !vip) {
    return res.status(400).send("Eksik bilgi!");
  }

  await fetch(webhookURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content: `🛒 **Yeni VIP başvurusu geldi!**\nOyuncu: **${username}**\nVIP Paketi: **${vip}**`
    })
  });

  res.send("Başvuru alındı!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Sunucu çalışıyor:", port);
});

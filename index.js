const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// JSON verisi almak için
app.use(express.json());

// index.html dosyasını sun
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// VIP başvurusunu alacak POST endpoint
app.post('/', (req, res) => {
  const { username, papara } = req.body;
  console.log(`VIP Başvurusu: Kullanıcı=${username}, Papara=${papara}`);

  // Burada Discord webhook'a istek atılacak (şimdilik console log)

  res.status(200).json({ message: 'Başvuru alındı' });
});

// Sunucuyu başlat
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor`);
});

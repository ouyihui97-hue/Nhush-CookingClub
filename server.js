const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 提供打包後的靜態檔案
app.use(express.static(path.join(__dirname, 'frontend-react', 'dist')));

// 所有路由導向 index.html (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend-react', 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🍳 烹飪社團網站已啟動！`);
  console.log(`🌐 請前往: http://localhost:${PORT}`);
});

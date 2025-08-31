const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 提供 React build 出來的檔案
app.use(express.static(path.join(__dirname, 'frontend-react', 'dist')));

// SPA 入口
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend-react', 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🍳 烹飪社團網站已啟動！`);
  console.log(`🌐 請前往: http://localhost:${PORT}`);
});

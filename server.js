const express = require('express');
const app = express();

// Rota básica
app.get('/', (req, res) => {
  res.send('Webhook rodando com sucesso!');
});

// Escutando na porta fornecida pelo Render ou 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});


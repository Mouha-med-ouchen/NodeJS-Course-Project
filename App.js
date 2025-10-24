const express = require('express');
const app = express(); // مهم جدًا ()
const port = 3000;

app.get('/', (req, res) => {
    res.send('hello mohamed');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

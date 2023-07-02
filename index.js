const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const jsonParser = bodyParser.json();
const PORT = process.env.PORT || 8000;

const innosabiRouter = require('./routes/innosabi');

app.use(jsonParser);
app.use(cors());
app.use('/api/suggestion', innosabiRouter);

app.listen(PORT, () => console.log(`App started on port ${PORT}`));

module.exports = app;

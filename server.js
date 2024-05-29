const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const images = require('./controllers/images');

dotenv.config();

console.log('OpenAI API Key:', process.env.OPENAI_API_KEY); // Check if the key is loaded

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/generate-image', images.generateImage);

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  
});

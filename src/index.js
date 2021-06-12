require('dotenv').config();
const app = require('express')();
const cors = require('cors');
const responseCreator = require('./utils/responseCreator');
const { endpoints, endpointsOverview } = require('./utils/endpoints');
const feedid = require('feedid');

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate=59');
  next();
});

endpoints.forEach((endpoint) => {
  app.get(`/${endpoint.primary.toLowerCase()}/:category`, async (req, res) => {
    const { category } = req.params;

    try {
      const response = await feedid[endpoint.primary][category]();
      return res.send(responseCreator(response));
    } catch (error) {
      return res.status(404).send(responseCreator());
    }
  });
});

app.get('/', (req, res) => {
  return res.send({
    maintainer: 'Renova Muhamad Reza',
    github: '',
    endpoints: endpointsOverview,
  });
});

app.all('*', (req, res) => {
  return res.status(200).send(responseCreator());
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

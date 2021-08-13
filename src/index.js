require('dotenv').config();
const app = require('express')();
const cors = require('cors');
const { endpoints, endpointsOverview } = require('./utils/endpoints');
const feedid = require('feedid');

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate=59');
  next();
});

endpoints.forEach((endpoint) => {
  app.get(`/${endpoint.primary}/:category`, async (req, res) => {
    const { category } = req.params;

    try {
      const response = await feedid[endpoint.primary][category]();
      return res.send(response);
    } catch (error) {
      return res
        .status(404)
        .send({ data: null, message: 'Not found', success: false });
    }
  });
});

app.get('/', (req, res) => {
  return res.send({
    maintainer: 'R.M Reza',
    github: 'https://github.com/renomureza/api-berita-indonesia',
    endpoints: endpointsOverview,
  });
});

app.all('*', (req, res) => {
  return res
    .status(404)
    .send({ data: null, message: 'Not found', success: false });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

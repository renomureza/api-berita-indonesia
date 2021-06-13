const BASE_URL = process.env.BASE_URL || '';

const endpoints = [
  {
    primary: 'cnbc',
    paths: [
      'terbaru',
      'investment',
      'news',
      'market',
      'eterpreneur',
      'syariah',
      'tech',
      'lifestyle',
      'opini',
      'profil',
    ],
  },
  {
    primary: 'cnn',
    paths: [
      'terbaru',
      'nasiona',
      'internasional',
      'ekonomi',
      'olahraga',
      'teknologi',
      'hiburan',
      'gayahidup',
    ],
  },
  {
    primary: 'detik',
    paths: [
      'terbaru',
      'finance',
      'hot',
      'inet',
      'sport',
      'oto',
      'travel',
      'food',
      'health',
      'wolipop',
    ],
  },
  {
    primary: 'kumparan',
    paths: ['terbaru'],
  },
  {
    primary: 'merdeka',
    paths: [
      'terbaru',
      'jakarta',
      'dunia',
      'gaya',
      'olahraga',
      'teknologi',
      'otomotif',
      'khas',
      'sehat',
      'jabar',
      'jatim',
      'jateng',
      'sumut',
    ],
  },
  {
    primary: 'okezone',
    paths: [
      'terbaru',
      'celebrity',
      'sports',
      'otomotif',
      'economy',
      'techno',
      'lifestyle',
      'bola',
    ],
  },
  {
    primary: 'sindonews',
    paths: [
      'terbaru',
      'nasional',
      'metro',
      'ekbis',
      'international',
      'daerah',
      'sports',
      'otomotif',
      'tekno',
      'sains',
      'edukasi',
      'lifestyle',
      'kalam',
    ],
  },
  {
    primary: 'suara',
    paths: [
      'terbaru',
      'bisnis',
      'bola',
      'lifestyle',
      'entertainment',
      'otomotif',
      'tekno',
      'health',
    ],
  },
  {
    primary: 'tempo',
    paths: [
      'nasional',
      'bisnis',
      'metro',
      'dunia',
      'bola',
      'cantik',
      'tekno',
      'otomotif',
      'seleb',
      'gaya',
      'travel',
      'difabel',
      'creativelab',
      'inforial',
      'event',
    ],
  },
];

const endpointsOverview = endpoints.map((endpoint) => {
  return {
    name: endpoint.primary,
    paths: endpoint.paths.map((pathName) => {
      return {
        name: pathName,
        path: `${BASE_URL}/${endpoint.primary.toLowerCase()}/${pathName}/`,
      };
    }),
  };
});

module.exports = { endpoints, endpointsOverview };

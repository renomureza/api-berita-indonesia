const fs = require('fs');
const path = require('path');
const { endpoints } = require('../utils/endpoints');

const readmeFilePath = path.join(process.cwd(), 'README.md');

(() => {
  const textReadme = fs.readFileSync(readmeFilePath, { encoding: 'utf8' });
  const readmeArr = textReadme.split('\n');
  const insertIndex = readmeArr.indexOf('## Daftar Route') + 1;
  const enpointsToText = endpoints
    .map((endpoint) => {
      return `
- \`/${endpoint.primary}/:kategori\`
  - :kategori -${endpoint.paths.map(
    (path) => ` \`${path.toString().toLowerCase()}\``
  )}`;
    })
    .join('');
  readmeArr.splice(insertIndex, 0, enpointsToText);
  const generatedReadmeText = readmeArr.join('\n');
  fs.writeFileSync(readmeFilePath, generatedReadmeText, { encoding: 'utf-8' });
})();

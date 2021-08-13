# API Berita Indonesia

## Deskripsi

API Berita Indonesia adalah API yang menampilkan berita Indonesia dari CNN, CNBC, Tribun, OkeZone dll. Untuk datanya sendiri berasal dari RSS masing-masing situs kemudian diubah ke tipe JSON Rest API.

## Demo

[https://api-berita-indonesia.vercel.app/](https://api-berita-indonesia.vercel.app/)

## Daftar Route

- `/antara/:kategori`
  - :kategori - `terbaru`, `politik`, `hukum`, `ekonomi`, `bola`, `olahraga`, `humaniora`, `lifestyle`, `hiburan`, `dunia`, `tekno`, `otomotif`
- `/cnbc/:kategori`
  - :kategori - `terbaru`, `investment`, `news`, `market`, `entrepreneur`, `syariah`, `tech`, `lifestyle`, `opini`, `profil`
- `/cnn/:kategori`
  - :kategori - `terbaru`, `nasional`, `internasional`, `ekonomi`, `olahraga`, `teknologi`, `hiburan`, `gayahidup`
- `/jpnn/:kategori`
  - :kategori - `terbaru`
- `/kumparan/:kategori`
  - :kategori - `terbaru`
- `/merdeka/:kategori`
  - :kategori - `terbaru`, `jakarta`, `dunia`, `gaya`, `olahraga`, `teknologi`, `otomotif`, `khas`, `sehat`, `jateng`
- `/okezone/:kategori`
  - :kategori - `terbaru`, `celebrity`, `sports`, `otomotif`, `economy`, `techno`, `lifestyle`, `bola`
- `/republika/:kategori`
  - :kategori - `terbaru`, `news`, `daerah`, `khazanah`, `islam`, `internasional`, `bola`, `leisure`
- `/sindonews/:kategori`
  - :kategori - `terbaru`, `nasional`, `metro`, `ekbis`, `international`, `daerah`, `sports`, `otomotif`, `tekno`, `sains`, `edukasi`, `lifestyle`, `kalam`
- `/suara/:kategori`
  - :kategori - `terbaru`, `bisnis`, `bola`, `lifestyle`, `entertainment`, `otomotif`, `tekno`, `health`
- `/tempo/:kategori`
  - :kategori - `nasional`, `bisnis`, `metro`, `dunia`, `bola`, `cantik`, `tekno`, `otomotif`, `seleb`, `gaya`, `travel`, `difabel`, `creativelab`, `inforial`, `event`
- `/tribun/:kategori`
  - :kategori - `terbaru`, `bisnis`, `superskor`, `sport`, `seleb`, `lifestyle`, `travel`, `parapuan`, `otomotif`, `techno`, `kesehatan`

## Instalasi

1. Clone: `git clone https://github.com/renomureza/api-berita-indonesia.git`
2. Install dependecies: `npm i`
3. Run server: `npm start`, or run dev server: `npm run dev`

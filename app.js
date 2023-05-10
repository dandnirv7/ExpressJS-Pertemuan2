require("dotenv").config();
const express = require("express");
const app = express();
const DB_PORT = process.env.DB_PORT || 8001;
const route = require("./biodataRoutes");

app.use("/", route);

app.get("/biodata", (req, res) => {
  const nama = req.query.nama;
  const tempatLahir = req.query["tempat-lahir"];
  const tanggalLahir = req.query["tanggal-lahir"];
  const alamat = req.query.alamat;

  const biodata = {
    nama: nama,
    "tempat-lahir": tempatLahir,
    "tanggal-lahir": tanggalLahir,
    alamat: alamat,
  };

  res.send(biodata);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/biodata", (req, res) => {
  const nama = req.body.nama;
  const tempatLahir = req.body["tempat-lahir"];
  const tanggalLahir = req.body["tanggal-lahir"];
  const alamat = req.body.alamat;

  const biodata = {
    nama: nama,
    "tempat-lahir": tempatLahir,
    "tanggal-lahir": tanggalLahir,
    alamat: alamat,
  };

  res.send(biodata);
});

app.listen(DB_PORT, () => {
  console.log(`Server listening on port: ${DB_PORT}`);
});

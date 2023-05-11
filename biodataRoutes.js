const express = require("express");
const router = express.Router();

router.use(
  (timeLog = (req, res, next) => {
    console.log("Requested URI Path: ", req.url);
    next();
  })
);

router.get("/", (req, res) => {
  res.send("Biodata Home Page");
});

router.get("/biodata", (req, res) => {
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

router.post("/biodata", (req, res) => {
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

module.exports = router;

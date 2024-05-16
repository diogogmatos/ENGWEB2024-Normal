var express = require("express");
var router = express.Router();
var axios = require("axios");

/* GET home page. */
router.get("/", function (req, res, next) {
  axios
    .get("http://localhost:16000/contratos")
    .then((response) => {
      res.render("index", {
        title: "Portal dos Contratos Públicos",
        contratos: response.data,
      });
    })
    .catch((error) => {
      console.log("Erro: " + error);
      res.write("<p>" + error + "</p>");
    });
});

router.get("/:id", function (req, res, next) {
  axios
    .get("http://localhost:16000/contratos/" + req.params.id)
    .then((response) => {
      res.render("contrato", {
        title: "Contrato" + response.data._id,
        contrato: response.data,
      });
    })
    .catch((error) => {
      console.log("Erro: " + error);
      res.write("<p>" + error + "</p>");
    });
});

module.exports = router;

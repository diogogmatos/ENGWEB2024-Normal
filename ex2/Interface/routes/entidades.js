var express = require("express");
var router = express.Router();
var axios = require("axios");

router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/:id", function (req, res, next) {
  axios
    .get("http://localhost:16000/contratos?entidade=" + req.params.id)
    .then((response) => {
      res.render("entidade", {
        title: "Entidade " + req.params.id,
        contratos: response.data,
        somatorio: response.data
          .reduce(
            (acc, contrato) => acc + parseFloat(contrato.precoContratual.replace(',', '.')),
            0.0
          )
          .toFixed(2),
      });
    })
    .catch((error) => {
      console.log("Erro: " + error);
      res.write("<p>" + error + "</p>");
    });
});

module.exports = router;

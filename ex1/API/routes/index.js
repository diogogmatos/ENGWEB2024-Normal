var express = require("express");
var router = express.Router();

const contratosController = require("../controllers/contrato");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/contratos", function (req, res, next) {
  if (Object.keys(req.query)[0] === "entidade") {
    console.log(req.query.entidade.replaceAll('"', ""));
    contratosController
      .find({ NIPC_entidade_comunicante: req.query.entidade.replaceAll('"', "") })
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        console.log(error.toString());
        res.status(500);
      });
  } else if (Object.keys(req.query)[0] === "tipo") {
    console.log(req.query.tipo.replaceAll('"', ""));
    contratosController
      .find({ tipoprocedimento: req.query.tipo.replaceAll('"', "") })
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        console.log(error.toString());
        res.status(500);
      });
  } else {
    contratosController
      .list()
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        console.log(error.toString());
        res.status(500);
      });
  }
});

router.get("/contratos/entidades", function (req, res, next) {
  contratosController
    .listEntities()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error.toString());
      res.status(500);
    });
});

router.get("/contratos/tipos", function (req, res, next) {
  contratosController
    .listProcedureTypes()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error.toString());
      res.status(500);
    });
});

router.get("/contratos/:id", function (req, res, next) {
  contratosController
    .get(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error.toString());
      res.status(500);
    });
});

router.post("/contratos", function (req, res, next) {
  contratosController
    .insert(req.body)
    .then(() => {
      res.json(req.body);
    })
    .catch((error) => {
      console.log(error.toString());
      res.status(500);
    });
});

router.delete("/contratos/:id", function (req, res, next) {
  contratosController
    .remove(req.params.id)
    .then(() => {
      res.json(req.params.id);
    })
    .catch((error) => {
      console.log(error.toString());
      res.status(500);
    });
});

router.put("/contratos/:id", function (req, res, next) {
  contratosController
    .update(req.params.id, req.body)
    .then(() => {
      res.json(req.body);
    })
    .catch((error) => {
      console.log(error.toString());
      res.status(500);
    });
});

module.exports = router;

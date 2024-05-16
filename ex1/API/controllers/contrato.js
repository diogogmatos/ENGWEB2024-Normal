const Contrato = require("../models/contrato");

module.exports.list = () => {
  return Contrato.find().exec();
};

module.exports.get = (id) => {
  return Contrato.findById(id).exec();
};

module.exports.find = (params) => {
  return Contrato.find(params).exec();
};

module.exports.listEntities = () => {
    return Contrato.distinct("entidade_comunicante").sort().exec();
}

module.exports.listProcedureTypes = () => {
    return Contrato.distinct("tipoprocedimento").sort().exec();
}

module.exports.insert = (something) => {
  return Contrato.create(something);
};

module.exports.remove = (id) => {
  return Contrato.deleteOne({ _id: id });
};

module.exports.update = (id, something) => {
  return Contrato.findByIdAndUpdate(id, something);
};

var express = require("express");
var router = express.Router();
var Controller = require("../controllers/googleSheet");

router.post("/addData", Controller.addData);

router.get("/getAllData", Controller.getAllData);

router.get("/getDataById", Controller.getDataById);

router.put("/updateById", Controller.updateById);

router.delete("/deleteById", Controller.deleteById);

module.exports = router;

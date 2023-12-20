const { Gsheet } = require("gsheet-to-db")

const gdata = new Gsheet( // chage credential
  "./example-35.json",// path of keys.json file
  "1JmpRfmEfSdVAxAu2SRvzsn-ts-3F_1xtlg",// sheet'Id
  "sheet1" // name of sheet 
)

exports.getAllData = async (req, res) => {
  try {
    let data = await gdata.findAll()
    return res
      .status(200)
      .json({ Status: 1, Message: "Fetched Successfully", Data: data })
  }
  catch (error) {
    return res
      .status(403)
      .json({ Status: 0, Message: "somthing want wrong", });
  }
};

exports.getDataById = async (req, res) => {
  try {
    const { id } = req.query
    let data = await gdata.findById(id)
    return res
      .status(200)
      .json({ Status: 1, Message: "Fetched Successfully", Data: data })
  }
  catch (error) {
    return res
      .status(403)
      .json({ Status: 0, Message: "somthing want wrong", });
  }
}

exports.updateById = async (req, res) => {
  try {
    const { id } = req.query;
    let data = await gdata.updateById(id, req.body)
    console.log(data.status)
    return res
      .status(200)
      .json({ status: 1, Message: `Successfully Updated With ID ${id}` });
  } catch (error) {
    return res
      .status(403)
      .json({ Status: 0, Message: "somthing want wrong", });
  }
};

exports.deleteById = async (req, res) => {
  try {
    const { id } = req.query;
    let data = await gdata.deleteById(id)
    if (data.status === 200) {
      return res
        .status(200)
        .json({ status: 1, Message: `deleted successful ${id} ` });
    }

  } catch (error) {
    return res
      .status(403)
      .json({ Status: 0, Message: "somthing want wrong", });
  }
};

exports.addData = async (req, res) => {

  try {
    let data = await gdata.create(req.body)
    if (data.status === 200) {

      return res
        .status(200)
        .json({ status: 1, Message: `Successfully submitted!` });
    }
  } catch (error) {
    return res
      .status(403)
      .json({ Status: 0, Message: "somthing want wrong", });
  }
};



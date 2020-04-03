const templates = require("../template");
const model = require("../model");

function deleteHandler(req, res) {
  // let id = (req.header.match(/\?id=\d+/) || "").match(/\d+/) || "")
  let id = req.url.match(/\d+/);
  model.deletePost(id, res);  
//   let data = ""; 
  // req.on("data", chunk => data+=chunk);
  // req.on("end", ()=>{
  //   model.deletePost(data, res);
  // }); 
}

module.exports = deleteHandler;

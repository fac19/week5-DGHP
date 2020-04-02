const templates = require("../template");
const model = require("../model");

function deleteHandler(req) {
  let data = ""; 
  req.on("data", chunk => data+=chunk);
  req.on("end", ()=>{
    model.deletePost(data);
  }); 
}

module.exports = deleteHandler;

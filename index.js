var textract = require("textract")

textract.fromFileWithPath("./sicp.pdf", processText)

function processText(err, text){
  if (err){
    console.error("There was an error", err);
    return;
  }
  //console.log(text)
 var fixedString = text.replace(/He/gi, "They");
console.log(fixedString)
}

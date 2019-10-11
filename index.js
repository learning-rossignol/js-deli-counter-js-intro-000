
var katzDeliLine = [];

function takeANumber(line, name) {
  return `Welcome, ${name}. You are number ${line.length + 1} in line.`
}

function nowServing(line) {
  let next = line[0];
  line.shift();
  return next;
}


function currentLine( line){

  let sfx = (line.length === 0) ? " empty" : ": " + (line.length - 1);
  return

  function enumLine() {
    var store = "";
    for (let i=0; i < line.length; i++) {
      let pfx = ((store === "") ? "" : ", ");
      store +=  `${pfx}${i + 1}. ${line[i]}`
    }
  }
}

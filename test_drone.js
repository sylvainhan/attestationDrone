var z = [
["reponses2"],
["reponses3"],
["reponses3"],
["reponses2"],
["reponses3"],
["reponses1"],
["reponses3"],
["reponses2"],
["reponses1"],
["reponses1"],
["reponses3"],
["reponses0", "reponses2", "reponses3"],
["reponses1", "reponses2", "reponses3"],
["reponses3"],
["reponses3"],
["reponses3"],
["reponses3"],
["reponses0", "reponses1", "reponses2", "reponses3"],
["reponses0"],
["reponses0"]
];


// change 'reponses to reponses0, 1, 2 ou 3'
var x = document.querySelectorAll("label");
for (var i=0; i<x.length; i++) {
    if ( x[i].htmlFor == "reponses") {
        x[i].click();
    } 
}

var y = document.querySelectorAll("button");
y[0].click();

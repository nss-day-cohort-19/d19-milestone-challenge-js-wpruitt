console.log("Javascript Milestone")
var seed = []
var space = [" "]
//var ast = document.getElementById("treeType").value
var brake = ["\n"]
var treeParams = {}
var enter = document.getElementById("treeHeight").addEventListener("keydown", function(){
	console.log("event", event);
	if (event.key === "Enter"){
		treeParams = {treeHeight : document.getElementById("treeHeight").value, treeType : document.getElementById("treeType").value};
		if ((document.getElementById("treeHeight").value === "") || (document.getElementById("treeType").value === "")){
		alert("Your tree is either still a seed, invisible!");
	}
	tree(treeParams["treeHeight"], treeParams["treeType"]);
	}
})
var enter = document.getElementById("treeType").addEventListener("keydown", function(){
	console.log("event", event);
	if (event.key === "Enter"){
		treeParams = {treeHeight : document.getElementById("treeHeight").value, treeType : document.getElementById("treeType").value};
		if ((document.getElementById("treeHeight").value === "") || (document.getElementById("treeType").value === "")){
		alert("Your tree is either still a seed, or invisible!");
	}
	tree(treeParams["treeHeight"], treeParams["treeType"]);
	}
	
})
var enter = document.getElementById("growTree").addEventListener("click", function(){
	console.log("event", event);
	treeParams = {treeHeight : document.getElementById("treeHeight").value, treeType : document.getElementById("treeType").value};
		if ((document.getElementById("treeHeight").value === "") || (document.getElementById("treeType").value === "")){
		alert("Your tree is either still a seed, or invisible!");
	}
	tree(treeParams["treeHeight"], treeParams["treeType"]);
})
function tree(treeHeight, treeType){
	var a = 1;
	var h = 0;
	var s = ((treeHeight*2)-2)
	while (h < treeHeight){
		for (var sp = s; sp >= 0; sp-=2){
			seed += space;
		}
		s-=2;
		for (var ar = 1; ar <= a; ar+=1){
			seed += treeParams["treeType"];
		}
		a+=2;
		seed += brake;
		h += 1
}
console.log(seed);
}
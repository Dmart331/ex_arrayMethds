var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

newPlanets = planets.map(function(item){ var planets = item.split(""); planets[0] = planets[0].toUpperCase(); var upperCased = planets.join(''); return upperCased;});

var newerPlanets = newPlanets.filter(function(element){if(element.includes("e")===true){ return element}});
console.log(newerPlanets)

planets.forEach(planetName);
console.log(newPlanets);

function planetName(){
	var el = document.getElementById("planets");
	el.innerHTML =  newPlanets;
}



var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

newWords = words.reduce(function(a , b){ return a + " " + b });
console.log(newWords);

	
 

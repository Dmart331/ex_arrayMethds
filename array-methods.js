var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

newPlanets = planets.map(function(item){ var planets = item.split(""); planets[0] = planets[0].toUpperCase(); var upperCased = planets.join(''); return upperCased;});
planets.forEach(planetName);
console.log(newPlanets);

function planetName(){
	var el = document.getElementById("planets");
	el.innerHTML =  newPlanets;
}

// Use the filter method to create a new array that contains planets with the letter 'e'
var newerPlanets = planets.filter(function(element){if(element.includes("e")===true){ return element}});
console.log(newerPlanets)

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

newWords = words.reduce(function(a , b){ return a + " " + b });
console.log(newWords);

	
// A map function will take care of that for you.

 

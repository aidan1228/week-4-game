
var heroSelection = [
"Yoda",
"Obi-Wan",
"Qui-Gon Jinn",
"Young Anakin"
];

var villains = [
"Darth Maul",
"Darth Sidious",
"Droid Squadron",
"Neimoidian Overlords"
];

function reset(){
	for(var i = 0; i < heroSelection; i++){
		var hero = $("<div>");
		hero.addClass("hero");
		// hero.attr("data-points", hero)
		hero.text(heroSelection[i]);
		$("#heros").append(hero);
	}
}

$(document).ready(function() {
	reset();
	
});

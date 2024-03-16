var joueur = "X";
var cases = document.getElementsByTagName("td");


for (var i = 0; i < cases.length; i++) {
	cases[i].onclick = function() {
		if (this.innerHTML === "") {
			this.innerHTML = joueur;
			if (gagne(joueur)) {
				alert("Le joueur " +joueur + " a gagné !");
				reset();
			} else if (matchNul()) {
				alert("Match nul ! Il n'y a aucun vainqueur.");
				reset();
			} else {
				joueur = (joueur === "X") ? "O" : "X";
			}
		}
	};
}

function gagne(joueur) {
	if (
		(cases[0].innerHTML === joueur && cases[1].innerHTML === joueur && cases[2].innerHTML === joueur) ||
		(cases[3].innerHTML === joueur && cases[4].innerHTML === joueur && cases[5].innerHTML === joueur) ||
		(cases[6].innerHTML === joueur && cases[7].innerHTML === joueur && cases[8].innerHTML === joueur) ||
		(cases[0].innerHTML === joueur && cases[3].innerHTML === joueur && cases[6].innerHTML === joueur) ||
		(cases[1].innerHTML === joueur && cases[4].innerHTML === joueur && cases[7].innerHTML === joueur) ||
		(cases[2].innerHTML === joueur && cases[5].innerHTML === joueur && cases[8].innerHTML === joueur) ||
		(cases[0].innerHTML === joueur && cases[4].innerHTML === joueur && cases[8].innerHTML === joueur) ||
		(cases[2].innerHTML === joueur && cases[4].innerHTML === joueur && cases[6].innerHTML === joueur)
	) {
		return true;
	} else {
		return false;
	}
}

function matchNul() {
	for (var i = 0; i < cases.length; i++) {
		if (cases[i].innerHTML === "") {
			return false;
		}
	}
	return true;
}

function reset() {
	for (var i = 0; i < cases.length; i++) {
		cases[i].innerHTML = "";
	}
	joueur = "X";
}

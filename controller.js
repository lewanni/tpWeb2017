
//var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	//this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function(dnd) {
		// update color + épaisseur
		this.currColour = document.getElementById("colour").value;
		this.currLineWidth = document.getElementById("spinnerWidth").value;

		// choix de la forme choisi en fonction de la selection radio sur la page canvas.html
		if (document.getElementById("butRect").checked) {
<<<<<<< HEAD
			//this.currEditingMode = editingMode.rect;
			this.currentshape = new Rectangle(dnd.x_init,dnd.y_init,0,0,this.currColour,this.currLineWidth);
			console.log("Forme 'rectangle' choisi");
		} else if (document.getElementById("butLine").checked) {
			//this.currEditingMode = editingMode.line;
			this.currentshape = new Ligne(dnd.x_init,dnd.y_init,dnd.x_final,dnd.y_final,this.currColour,this.currLineWidth);
			console.log("Forme 'ligne' choisi");
		}
	}.bind(this);

	this.onInteractionUpdate = function(dnd) {
		// update des données d'une ligne/rectangle
		if(document.getElementById("butLine").checked) {
			//this.currEditingMode = editingMode.line;
			this.currentshape.x2 = dnd.x_final;
			this.currentshape.y2 = dnd.y_final;
		} else if (document.getElementById("butRect").checked) {
			//this.currEditingMode = editingMode.rect;
			this.currentshape.hauteur = dnd.y_final - dnd.y_init;
			this.currentshape.largeur = dnd.x_final - dnd.x_init;
		}
	}.bind(this);

	this.onInteractionEnd = function() {
		this.currentshape.paint(ctx);
		console.log("Une forme a été dessinée");
		// update du notre tableau de formes
		drawing.addForm(this.currentshape);
		// reinitialise la forme à null/0
=======
			this.currentshape = new Rectangle(dnd.x_init,dnd.y_init,0,0,this.currColour,this.currLineWidth);
			console.log("Forme 'rectangle' choisi");
		} else if (document.getElementById("butLine").checked) {
			this.currentshape = new Ligne(dnd.x_init,dnd.y_init,dnd.x_final,dnd.y_final,this.currColour,this.currLineWidth);
			console.log("Forme 'ligne' choisi");
		}
	}.bind(this);

	this.onInteractionUpdate = function(dnd) {
		// update des données d'une ligne/rectangle
		if(document.getElementById("butLine").checked) {
			this.currentshape.x2 = dnd.x_final;
			this.currentshape.y2 = dnd.y_final;
		} else if (document.getElementById("butRect").checked) {
			this.currentshape.hauteur = dnd.y_final - dnd.y_init;
			this.currentshape.largeur = dnd.x_final - dnd.x_init;
		}
	}.bind(this);

	this.onInteractionEnd = function() {
		this.currentshape.paint(ctx);
		//Ajout des formes dans notre tableau de formes
		drawing.addForm(this.currentshape);
		// reinitialise la forme à null
>>>>>>> branch 'master' of https://github.com/lewanni/tpWeb2017
		this.currentShape = 0;
	}.bind(this);
};

// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
  this.x_init = 0;
  this.y_init = 0;
  this.x_final = 0;
  this.y_final = 0;
  this.press = false; // pression sur souris oui ou no
  this.nb_action = 0;

  // Developper les 3 fonctions gérant les événements
  this.pression = function(evt) {
    this.nb_action++;
    this.presse = true;
		var mouseXY = getMousePosition(canvas, evt);
		this.x_init = mouseXY.x;
		this.y_init = mouseXY.y;
    console.log(this.nb_action + " : Pression = x : " + this.x_init + " y : "+ this.y_init);
    interactor.onInteractionStart(this);
  }.bind(this);

  this.deplacements = function(evt) {
    if (this.presse) {
      this.nb_action++;
      var mouseXY = getMousePosition(canvas, evt);
      this.x_final = mouseXY.x;
  		this.y_final = mouseXY.y;
      console.log(this.nb_action + " : Déplacement = x : " + this.x_final + " y : "+ this.y_final);
      interactor.onInteractionUpdate(this);
    }
  }.bind(this);

  this.relachement = function(evt) {
    this.nb_action++;
    var mouseXY = getMousePosition(canvas, evt);
    this.x_final = mouseXY.x;
    this.y_final = mouseXY.y;
		this.presse = false;
    console.log(this.nb_action + " : Relachement = x : " + this.x_final + " y : "+ this.y_final);
    interactor.onInteractionEnd();
  }.bind(this);

	// Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.pression, false);
	canvas.addEventListener('mousemove', this.deplacements, false);
	canvas.addEventListener('mouseup', this.relachement, false);
}


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  }
}

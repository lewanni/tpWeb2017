
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing() {
  this.lsForms = new Array();

  this.getForms = function() {
    return this.lsForms;
  }.bind(this);

  this.addForm = function(form) {
		this.lsForms.push(form);
	}.bind(this);
}

function Forme(couleur, epaisseur) {
  this.couleur = couleur;
  this.epaisseur = epaisseur;
}

function Rectangle(x, y, hauteur, largeur, couleur, epaisseur) {
  Forme.call(this, couleur, epaisseur);
  this.x = x;
  this.y = y;
  this.hauteur = hauteur;
  this.largeur = largeur;
}

function Ligne(x1, y1, x2, y2, couleur, epaisseur) {
  Forme.call(this, couleur, epaisseur);
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}

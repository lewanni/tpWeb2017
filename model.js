
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing() {
  this.lsForms = new Array();

  this.getForms = function() {
    return this.lsForms;
  }.bind(this);

  this.addForm = function(form){
		this.lsForms.push(form);
	}.bind(this);
}

function Forme(x_init, y_init, x_final, y_final, epaisseur, couleur) {
  this.x_init = x_init;
  this.y_init = y_init;
  this.x_final = x_final;
  this.y_final = y_final;
  this.epaisseur = epaisseur;
  this.couleur = couleur;

  this.getXinit = function() {
    return this.x_init;
  }.bind(this);

  this.getYinit = function() {
    return this.y_init;
  }.bind(this);

  this.getXfinal = function() {
    return this.x_final;
  }.bind(this);

  this.getYfinal = function() {
    return this.y_final;
  }.bind(this);

  this.getEpaisseur = function() {
    return this.epaisseur;
  }.bind(this);

  this.getColor = function() {
    return this.couleur;
  }.bind(this);
}

function Rectangle(x1, y1, x2, y2, epaisseur, couleur) {
  Forme.call(this, x1, y1, x2, y2, epaisseur, couleur);
  this.x = x1;
  this.y = y1;
  this.largeur = y2 - y1;
  this.hauteur = x2 - x1;
}

function Ligne(x1, y1, x2, y2, epaisseur, couleur) {
  Forme.call(this, x1, y1, x2, y2, epaisseur, couleur);
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}

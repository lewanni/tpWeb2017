
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Forme.prototype.paint = function(ctx){
	ctx.strokeStyle = this.couleur;
	ctx.lineWidth = this.epaisseur;
}

Rectangle.prototype.paint = function(ctx) {
  //TODO Manager color
  ctx.strokeStyle = this.couleur;
	ctx.lineWidth = this.epaisseur;
  ctx.rect(this.x, this.y, this.largeur, this.hauteur);
  ctx.stroke();
};

Ligne.prototype.paint = function(ctx) {
  //TODO Manager color
  ctx.beginPath();
  ctx.strokeStyle = this.couleur;
	ctx.lineWidth = this.epaisseur;
  ctx.moveTo(this.x1, this.y1);
  ctx.lineTo(this.x2, this.y2);
  ctx.stroke();
};

Drawing.prototype.paint = function(ctx) {
  //console.log(this.getForms());
  ctx.fillStyle = '#F0F0F0'; // set canvas' background color
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  // this.getForms().forEach(function(eltDuTableau) {
  //   // now fill the canvas
  //   eltDuTableau.paint(ctx);
  // });
};

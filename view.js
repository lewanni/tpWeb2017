
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Rectangle.prototype.paint = function(ctx) {
  //TODO Manager color
  ctx.lineWidth = this.getEpaisseur();
  ctx.strokeStyle = this.getColor();
  ctx.rect(this.getXinit(), this.getYinit(), this.getXfinal(), this.getYfinal());
  ctx.stroke();
};

Ligne.prototype.paint = function(ctx) {
  //TODO Manager color
  ctx.beginPath();
  ctx.lineWidth = this.getEpaisseur();
  ctx.strokeStyle = this.getColor();
  ctx.moveTo(this.getXinit(), this.getYinit());
  ctx.lineTo(this.getXfinal(), this.getYfinal());
  ctx.stroke();
};

Drawing.prototype.paint = function(ctx) {
  console.log(this.getForms());
  ctx.fillStyle = '#F0F0F0'; // set canvas' background color
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  this.getForms().forEach(function(eltDuTableau) {
    // now fill the canvas
    eltDuTableau.paint(ctx);
  });
};

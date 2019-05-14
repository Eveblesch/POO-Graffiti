class Point
{
    constructor(x,y)
    {
      this.x=x;
      this.y=y;
    }
    afficher(canva,couleur,taille)
    {
      canva.beginPath();
      canva.arc(this.x, this.y, taille, 0, 2 * Math.PI, false);
      canva.fillStyle = couleur;
      canva.fill();
    }
    reset(a,b)
    {
      this.x=a;
      this.y=b;
    }
}

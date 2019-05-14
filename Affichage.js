class Affichage
{
  constructor(id, recup,context, width, height)
  {
    this.id = id;
    this.recup = document.getElementById(this.id);
    this.context = this.recup.getContext("2d");
    this.width = width;
    this.height = height;
  }
}

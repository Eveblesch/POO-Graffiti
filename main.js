let drawing = new Drawing("ecriture",null,null,300,300);
let lectureCanvas = new Drawing("lecture",null,null,300,300);
let dessin = new Dessin(300);
let caracteristiquesCanva = new Drawing("caracteristiques",null,null,800,480);

//De base, on met le type de données sur Lettre
let choix=1;
choixCanvas(choix);

//fonction qui permet de passer du canva pour les lettres à celui pour les chiffres
function choixCanvas(arg)
{
  lectureCanvas.context.clearRect(0,0,lectureCanvas.width,lectureCanvas.height);
  caracteristiquesCanva.context.clearRect(0,0,caracteristiquesCanva.width,caracteristiquesCanva.height);
  drawing.context.clearRect(0, 0, drawing.width, drawing.height);
  drawing.context.fillStyle = "black";
  drawing.context.font = "10px Arial";
  if(arg==1)
  {
    drawing.context.fillText("Lettres", 250, 280);
    localStorage.setItem('type', 1);
    choix=localStorage.getItem("type");
  }
  else
  {
    drawing.context.fillText("Chiffres", 250, 280);
    localStorage.setItem('type', 2);
    choix=localStorage.getItem("type");
  }
}

//Fonction qui récupère la position de la souris
function getMousePos(evt) 
{
    var rect = drawing.recup.getBoundingClientRect();
    return{
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

var estAppuye = false;
drawing.recup.onmousedown =function(ev)
{
    estAppuye = true;
}

drawing.recup.onmouseup = function(ev)
{
    estAppuye = false;
}

let pHG = new Point(300,300);
let pHD = new Point(0,300);
let pBG = new Point(300,0);
let pBD = new Point(0,0);
let compteurPoint=0;

//Fonction qui encadre la lettre dessinée, ce qui permet de dssiner une lettre de n'importe quelle taille
drawing.recup.onmousemove = e =>
{
    if(!estAppuye) return;
    console.log(compteurPoint);
    //POINT Haut gauche  ROUGE
    if(getMousePos(e).x < pHG.x)
    {
        pHG.x = getMousePos(e).x;
        pBG.x = getMousePos(e).x;
    }

    //POINT Haut Droit BLEU
    if(getMousePos(e).x > pHD.x)
    {
        pHD.x = getMousePos(e).x;
        pBD.x = getMousePos(e).x;
    }

    //POINT bas gauche PURPLE
    if(getMousePos(e).y > pBG.y)
    {
        pBG.y = getMousePos(e).y;
        pBD.y = getMousePos(e).y;
    }

    //POINT bas droit ROSE
    if(getMousePos(e).y < pHD.y)
    {
        pHG.y = getMousePos(e).y;
        pHD.y = getMousePos(e).y;
    }

    var point=new Point(Math.round(getMousePos(e).x),Math.round(getMousePos(e).y));
    point.afficher(drawing.context,"#000000",3);
    compteurPoint+=1;
    dessin.tableau[point.x][point.y]=1;
    dessin.tableau[point.x+1][point.y]=1;
    dessin.tableau[point.x-1][point.y]=1;
    dessin.tableau[point.x][point.y+1]=1;
    dessin.tableau[point.x][point.y-1]=1;
}

//Fonction associée au bouton Clear qui va effacer les canvas
document.getElementById('effacer').onclick = function()
{
    drawing.context.clearRect(0, 0, drawing.width, drawing.height);
    lectureCanvas.context.clearRect(0, 0, lectureCanvas.width, lectureCanvas.height);
    caracteristiquesCanva.context.clearRect(0,0,caracteristiquesCanva.width,caracteristiquesCanva.height);

    pHG.reset(300,300);
    pHD.reset(0,300);
    pBG.reset(300,0);
    pBG.reset(300,0);
    pBD.reset(0,0);

    dessin.reinitialisation();
    choixCanvas(choix);

    dessin.nbrDe1=0;
    compteurPoint=0;
    valider=0;
};

function lecture(arg)
{
    lectureCanvas.context.font = "200px Arial";
    lectureCanvas.context.fillText(arg, 70, 220);
};
let valider=0;

document.getElementById('valider').onclick = function()
{
    if(valider==1)
    {
      alert("Veuillez d'abord appuyer sur le bouton [CLEAR] avant de valider");
    }
    else
    {
      valider=1;
      
      if(compteurPoint<=15)
      {
        alert("Pas assez précis");
      }

      else
      {
        pHG.afficher(drawing.context,"red",6);
        pHD.afficher(drawing.context,"blue",6);
        pBG.afficher(drawing.context,"purple",6);
        pBD.afficher(drawing.context,"pink",6);

        //AFFICHER LA ZONE DE CALCUL
        drawing.context.beginPath();
        drawing.context.moveTo(pHG.x, pHG.y);
        drawing.context.lineTo(pHD.x, pHD.y);
        drawing.context.moveTo(pHD.x, pHD.y);
        drawing.context.lineTo(pBD.x, pBD.y);
        drawing.context.moveTo(pBD.x, pBD.y);
        drawing.context.lineTo(pBG.x, pBG.y);
        drawing.context.moveTo(pBG.x, pBG.y);
        drawing.context.lineTo(pHG.x, pHG.y);
        drawing.context.stroke();

        //LETTRES
        if(choix==1)
        {
          dessin.affecter_valeur(pHG.x, pHG.y, pHD.x, pHD.y, pBG.x, pBG.y, pBD.x, pBD.y);
          console.log("Nombre de 1 : "+dessin.nbrDe1);
          dessin.afficher_tableau20LETTRE();
          // console.log(dessin.estDansA());
          let tableauLettre=new Array(26);
          tableauLettre=[dessin.estDansA(),dessin.estDansB(),dessin.estDansC(),dessin.estDansD(),
                        dessin.estDansE(),dessin.estDansF(),dessin.estDansG(),dessin.estDansH(),
                        dessin.estDansI(),dessin.estDansJ(),dessin.estDansK(),dessin.estDansL(),
                        dessin.estDansM(),dessin.estDansN(), dessin.estDansO(),dessin.estDansP(),
                        dessin.estDansQ(),dessin.estDansR(),dessin.estDansS(),dessin.estDansT(),
                        dessin.estDansU(),dessin.estDansV(),dessin.estDansW(),dessin.estDansX(),
                        dessin.estDansY(), dessin.estDansZ()];

          var maximum =0;
          var lettreASCII =0;
          var res="";
          console.log(tableauLettre[25]);
          console.log(tableauLettre[26]);
          for (var i = 0; i < tableauLettre.length; i++)
          {
            if(tableauLettre[i]>maximum)
            {
              res = String.fromCharCode(65+i)+" -> "+tableauLettre[i]+" % de ressemblance";

              maximum=tableauLettre[i];
              lettreASCII=65+i;
            }
          }

          caracteristiquesCanva.context.fillStyle = "red";
          caracteristiquesCanva.context.font = "25px Arial";
          caracteristiquesCanva.context.fillText(res, 17,50);

          var lettreSTRING=String.fromCharCode(lettreASCII);
          lecture(lettreSTRING);
        }

        //CHIFFRES
        if(choix==2)
        {
          dessin.affecter_valeur(pHG.x, pHG.y, pHD.x, pHD.y, pBG.x, pBG.y, pBD.x, pBD.y);
          dessin.afficher_tableau20LETTRE();

          let tableauChiffre=new Array(10);
          tableauChiffre=[dessin.estDans0(),dessin.estDans1(),dessin.estDans2(),dessin.estDans3()
          ,dessin.estDans4(),dessin.estDans5(),dessin.estDans6(),dessin.estDans7(),dessin.estDans8(),
          dessin.estDans9()];

          var maximum =0;
          var res="";
          var resultat=0;

          for (var i = 0; i < tableauChiffre.length; i++)
          {
            if(tableauChiffre[i]>maximum)
            {
              res = i+" -> Ressemblance à : "+tableauChiffre[i]+" %";
              maximum=tableauChiffre[i];
              resultat=i;
            }
          }

          caracteristiquesCanva.context.fillStyle = "red";
          caracteristiquesCanva.context.font = "25px Arial";
          caracteristiquesCanva.context.fillText(res, 17,50);

          lecture(resultat);
        }
      }
  }

};

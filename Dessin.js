class Dessin
{
    constructor(taille)
    {
      this.taille=taille;
      this.tableau=new Array(300);
      for (var i = 0; i < this.tableau.length; i++) 
      {
          this.tableau[i] = new Array(300);
          for (var j = 0; j < 300; j++) 
          {
              this.tableau[i][j] = 0;
          }
      }

      this.tableau20LETTRE=new Array(20);
      for (var i = 0; i < this.tableau20LETTRE.length; i++) 
      {
          this.tableau20LETTRE[i] = new Array(20);
          for (var j = 0; j < 20; j++) 
          {
              this.tableau20LETTRE[i][j] = 0;
          }
      }

      this.nbrDe1=0;
    }

    reinitialisation()
    {
      for (var i = 0; i < this.tableau.length; i++) 
      {
          this.tableau[i] = new Array(300);
          for (var j = 0; j < 300; j++) 
          {
              this.tableau[i][j] = 0;
          }
      }

      for (var i = 0; i < this.tableau20LETTRE.length; i++) 
      {
          this.tableau20LETTRE[i] = new Array(20);
          for (var j = 0; j < 20; j++) 
          {
              this.tableau20LETTRE[i][j] = 0;
          }
      }
    }

    //Celle ci te donne le tableau que tu ecriras
    afficher_tableau20LETTRE()
    {
      let res = "";
      for(var i=0;i<20;i++)
      {
        //Ducoup c'est la ligne là
        res+= "tabF20[" + i + "] = ["
        for(var j=0;j<20;j++)
        {
            if (j == 19){
                res += this.tableau20LETTRE[i][j];
            }
            else 
            {
                res += this.tableau20LETTRE[i][j] + ", ";
            }
        }
       res += "];\n";
      }
      console.log(res);
    }

    afficher_tableau()
    {
      let res = "";
      for(var i=0;i<300;i++)
      {

        res+= "tableau[" + i + "] = ["
        for(var j=0;j<300;j++)
        {
            if (j == 299){
                res += this.tableau[i][j];
            }
            else 
            {
                res += this.tableau[i][j] + ", ";
            }
        }
       res += "];\n";
      }
      console.log(res);
    }

    affecter_valeur(x1, y1, x2, y2 , x3, y3, x4, y4)
    {
      //POUR LA COORDONNEE DE Y
      let interY = (-((y2 - y4) /20)) >= 1 ? -((y2 - y4) /20) : 1; //on divise la hauteur en 20
      let posY = y1;
      for (var y = 0; y < 20; y++) {

          let interX = ((x2 - x1) /20) >= 1 ? (x2 - x1) /20 : 1; //on divise la largeur en 20
          let posX = x1;

          // console.log("x:" + interX + " y:" + interY);
          for (var x = 0; x < 20; x++) 
          {
              //On regarde chaque "pixel" (en 20x20) et on regarde si il est plutot dessiné ou plutot pas
              let somme=0;
              for (var i = 0; i <interY; i++) 
              {
                  for (var j = 0; j < interX; j++) 
                  {
                      let x = Math.trunc(posX + j);
                      let y = Math.trunc(posY + i);

                      somme += this.tableau[x][y];
                  }
              }

              somme /= interX;

              this.tableau20LETTRE[y][x] = somme > 0.5 ? 1 : 0;

              posX += interX;
          }
          posY += interY;

      }
      //Compter le nombre de 1 dans le tableau
      for(var k=0;k<20;k++)
      {
        for(var l=0;l<20;l++)
        {
          if(this.tableau20LETTRE[k][l]==1)
          {
            this.nbrDe1+=1;
          }
        }
      }
    }

    comparer_tab(test, original) 
    {
        let pourcent = 400;
        for (var y = 0; y < test.length; y++) 
        {
            for (var x = 0; x < test[y].length; x++) 
            {
                if (test[x][y] != original[x][y])
                    pourcent -= 1;
            }
        }
        return pourcent / 4;
    }

    estDansA()
    {
      let pourcentage=0;
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabA1);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabA2);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabA3);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabA4);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabA5);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabA6);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabA7);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabA8);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabA9);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabA10);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabA11);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabA12);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabA13);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabA14);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabA15);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabA16);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabA17);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabA18);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabA19);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabA20);
      pourcentage=pourcentage/20;
      return pourcentage;
    }

    estDansB()
    {
      let pourcentage=0;
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabB1);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabB2);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabB3);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabB4);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabB5);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabB6);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabB7);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabB8);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabB9);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabB10);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabB11);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabB12);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabB13);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabB14);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabB15);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabB16);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabB17);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabB18);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabB19);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabB20);

      pourcentage=pourcentage/20;
      if(this.nbrDe1>90 && this.nbrDe1<110)
      {
        pourcentage+=5;
      }
      return pourcentage;
    }
    estDansC()
    {
      let pourcentage=0;
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabC1);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabC2);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabC3);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabC4);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabC5);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabC6);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabC7);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabC8);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabC9);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabC10);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabC11);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabC12);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabC13);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabC14);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabC15);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabC16);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabC17);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabC18);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabC19);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabC20);
      pourcentage=(pourcentage/20)-5;
      return pourcentage;
    }

    estDansD()
    {
      let pourcentage=0;
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabD1);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabD2);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabD3);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabD4);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabD5);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabD6);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabD7);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabD8);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabD9);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabD10);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabD11);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabD12);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabD13);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabD14);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabD15);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabD16);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabD17);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabD18);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabD19);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabD20);
      pourcentage=pourcentage/20;
      return pourcentage;
    }

    estDansE()
    {
      let pourcentage=0;
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabE1);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabE2);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabE3);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabE4);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabE5);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabE6);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabE7);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabE8);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabE9);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabE10);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabE11);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabE12);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabE13);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabE14);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabE15);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabE16);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabE17);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabE18);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabE19);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabE20);
      pourcentage=pourcentage/20;

      if(this.nbrDe1>65 && this.nbrDe1<85)
      {
        pourcentage+=5;
      }
      return pourcentage;
    }


    estDansF()
    {
      let pourcentage=0;
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabF1);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabF2);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabF3);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabF4);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabF5);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabF6);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabF7);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabF8);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabF9);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabF10);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabF11);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabF12);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabF13);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabF14);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabF15);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabF16);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabF17);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabF18);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabF19);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabF20);
      pourcentage=(pourcentage/20)-5;

      return pourcentage;
    }

    estDansG()
    {
      let pourcentage=0;
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabG1);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabG2);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabG3);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabG4);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabG5);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabG6);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabG7);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabG8);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabG9);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabG10);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabG11);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabG12);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabG13);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabG14);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabG15);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabG16);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabG17);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabG18);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabG19);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabG20);
      pourcentage=pourcentage/20;
      return pourcentage;
    }

    estDansH()
    {
      let pourcentage=0;
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabH1);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabH2);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabH3);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabH4);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabH5);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabH6);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabH7);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabH8);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabH9);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabH10);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabH11);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabH12);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabH13);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabH14);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabH15);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabH16);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabH17);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabH18);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabH19);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabH20);

      pourcentage=pourcentage/20;

      if(this.nbrDe1>65 && this.nbrDe1<85)
      {
        pourcentage+=5;
      }

      return pourcentage;
    }

    estDansI()
    {
      let pourcentage=0;
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabI1);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabI2);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabI3);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabI4);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabI5);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabI6);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabI7);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabI8);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabI9);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabI10);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabI11);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabI12);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabI13);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabI14);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabI15);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabI16);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabI17);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabI18);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabI19);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabI20);
      pourcentage=(pourcentage/20);
      if(this.nbrDe1>50 && this.nbrDe1<70)
      {
        pourcentage+=5;
      }
      return pourcentage;
    }

    estDansJ()
    {
      let pourcentage=0;
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabJ1);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabJ2);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabJ3);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabJ4);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabJ5);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabJ6);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabJ7);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabJ8);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabJ9);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabJ10);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabJ11);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabJ12);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabJ13);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabJ14);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabJ15);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabJ16);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabJ17);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabJ18);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabJ19);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabJ20);
      pourcentage=(pourcentage/20)-4;
      return pourcentage;
    }

    estDansK()
    {
      let pourcentage=0;
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabK1);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabK2);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabK3);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabK4);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabK5);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabK6);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabK7);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabK8);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabK9);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabK10);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabJ11);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabJ12);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabJ13);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabJ14);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabJ15);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabJ16);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabJ17);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabJ18);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabJ19);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabJ20);

      pourcentage=pourcentage/20;

      if(this.nbrDe1>65 && this.nbrDe1<85)
      {
        pourcentage+=5;
      }
      return pourcentage;
    }

    estDansL()
    {
      let pourcentage=0;
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabL1);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabL2);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabL3);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabL4);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabL5);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabL6);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabL7);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabL8);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabL9);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabL10);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabL11);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabL12);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabL13);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabL14);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabL15);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabL16);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabL17);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabL18);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabL19);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabL20);
      pourcentage=(pourcentage/20)-5;
      return pourcentage;
    }

    estDansM()
    {
      let pourcentage=0;
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabM1);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabM2);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabM3);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabM4);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabM5);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabM6);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabM7);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabM8);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabM9);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabM10);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabM11);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabM12);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabM13);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabM14);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabM15);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabM16);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabM17);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabM18);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabM19);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabM20);
      pourcentage=pourcentage/20;
      return pourcentage;
    }

    estDansN()
    {
      let pourcentage=0;
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabN1);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabN2);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabN3);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabN4);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabN5);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabN6);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabN7);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabN8);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabN9);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabN10);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabN11);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabN12);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabN13);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabN14);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabN15);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabN16);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabN17);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabN18);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabN19);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabN20);
      pourcentage=pourcentage/20;
      return pourcentage;
    }

    estDansO()
    {
      let pourcentage=0;
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabO1);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabO2);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabO3);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabO4);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabO5);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabO6);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabO7);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabO8);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabO9);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabO10);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabO11);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabO12);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabO13);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabO14);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabO15);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabO16);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabO17);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabO18);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabO19);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabO20);
      pourcentage=pourcentage/20;
      return pourcentage;
    }

    estDansP()
    {
      let pourcentage=0;
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabP1);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabP2);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabP3);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabP4);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabP5);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabP6);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabP7);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabP8);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabP9);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabP10);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabP11);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabP12);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabP13);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabP14);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabP15);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabP16);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabP17);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabP18);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabP19);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabP20);
      pourcentage=pourcentage/20;
      if(this.nbrDe1>60 && this.nbrDe1<80)
      {
        pourcentage+=5;
      }
      return pourcentage;
    }

    estDansQ()
    {
      let pourcentage=0;
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabQ1);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabQ2);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabQ3);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabQ4);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabQ5);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabQ6);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabQ7);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabQ8);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabQ9);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabQ10);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabQ11);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabQ12);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabQ13);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabQ14);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabQ15);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabQ16);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabQ17);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabQ18);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabQ19);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabQ20);
      pourcentage=pourcentage/20;
      return pourcentage;
    }

    estDansR()
    {
      let pourcentage=0;
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabR1);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabR2);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabR3);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabR4);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabR5);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabR6);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabR7);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabR8);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabR9);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabR10);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabR11);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabR12);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabR13);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabR14);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabR15);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabR16);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabR17);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabR18);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabR19);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabR20);
      pourcentage=pourcentage/20;
      if(this.nbrDe1>90 && this.nbrDe1<110)
      {
        pourcentage+=5;
      }
      return pourcentage;
    }

    estDansS()
    {
      let pourcentage=0;
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabS1);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabS2);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabS3);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabS4);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabS5);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabS6);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabS7);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabS8);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabS9);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabS10);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabS11);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabS12);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabS13);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabS14);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabS15);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabS16);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabS17);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabS18);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabS19);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabS20);
      pourcentage=pourcentage/20;
      return pourcentage;
    }

    estDansT()
    {
      let pourcentage=0;
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabT1);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabT2);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabT3);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabT4);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabT5);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabT6);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabT7);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabT8);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabT9);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabT10);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabT11);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabT12);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabT13);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabT14);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabT15);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabT16);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabT17);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabT18);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabT19);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabT20);
      pourcentage=(pourcentage/20)-4;
      return pourcentage;
    }

    estDansU()
    {
      let pourcentage=0;
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabU1);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabU2);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabU3);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabU4);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabU5);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabU6);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabU7);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabU8);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabU9);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabU10);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabU11);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabU12);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabU13);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabU14);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabU15);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabU16);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabU17);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabU18);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabU19);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabU20);
      pourcentage=(pourcentage/20)-5;
      return pourcentage;
    }

    estDansV()
    {
      let pourcentage=0;
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabV1);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabV2);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabV3);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabV4);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabV5);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabV6);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabV7);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabV8);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabV9);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabV10);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabV11);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabV12);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabV13);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabV14);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabV15);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabV16);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabV17);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabV18);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabV19);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabV20);
      pourcentage=pourcentage/20;
      return pourcentage;
    }

    estDansW()
    {
      let pourcentage=0;
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabW1);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabW2);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabW3);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabW4);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabW5);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabW6);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabW7);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabW8);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabW9);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabW10);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabW11);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabW12);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabW13);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabW14);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabW15);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabW16);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabW17);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabW18);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabW19);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabW20);
      pourcentage=(pourcentage/20)+3;
      return pourcentage;
    }

    estDansX()
    {
      let pourcentage=0;
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabX1);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabX2);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabX3);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabX4);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabX5);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabX6);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabX7);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabX8);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabX9);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabX10);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabX11);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabX12);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabX13);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabX14);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabX15);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabX16);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabX17);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabX18);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabX19);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabX20);


      pourcentage=pourcentage/20;
      return pourcentage;
    }

    estDansY()
    {
      let pourcentage=0;
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabY1);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabY2);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabY3);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabY4);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabY5);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabY6);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabY7);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabY8);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabY9);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabY10);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabY11);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabY12);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabY13);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabY14);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabY15);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabY16);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabY17);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabY18);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabY19);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabY20);
      pourcentage=pourcentage/20;
      return pourcentage;
    }

    estDansZ()
    {
      let pourcentage=0;
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabZ1);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabZ2);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabZ3);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabZ4);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabZ5);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabZ6);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabZ7);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabZ8);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabZ9);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabZ10);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabZ11);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabZ12);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabZ13);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabZ14);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabZ15);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabZ16);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabZ17);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabZ18);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabZ19);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tabZ20);


      pourcentage=pourcentage/20;
      return pourcentage;
    }

    estDans0()
    {
      let pourcentage=0;
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab01);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab02);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab03);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab04);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab05);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab06);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab07);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab08);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab09);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab010);

      pourcentage=pourcentage/10;
      return pourcentage;
    }

    estDans1()
    {
      let pourcentage=0;
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab11);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab12);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab13);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab14);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab15);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab16);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab17);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab18);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab19);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab110);

      pourcentage=pourcentage/10;
      return pourcentage;
    }

    estDans2()
    {
      let pourcentage=0;
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab21);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab22);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab23);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab24);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab25);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab26);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab27);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab28);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab29);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab210);

      pourcentage=(pourcentage/10);
      return pourcentage;
    }

    estDans3()
    {
      let pourcentage=0;
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab31);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab32);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab33);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab34);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab35);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab36);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab37);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab38);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab39);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab310);

      pourcentage=(pourcentage/10);
      return pourcentage;
    }

    estDans4()
    {
      let pourcentage=0;
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab41);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab42);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab43);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab44);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab45);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab46);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab47);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab48);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab49);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab410);

      pourcentage=pourcentage/10;
      pourcentage-=5;
      return pourcentage;
    }

    estDans5()
    {
      let pourcentage=0;
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab51);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab52);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab53);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab54);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab55);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab56);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab57);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab58);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab59);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab510);

      pourcentage=pourcentage/10;
      return pourcentage;
    }

    estDans6()
    {
      let pourcentage=0;
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab61);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab62);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab63);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab64);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab65);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab66);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab67);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab68);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab69);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab610);

      pourcentage=pourcentage/10;
      return pourcentage;
    }

    estDans7()
    {
      let pourcentage=0;
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab71);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab72);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab73);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab74);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab75);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab76);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab77);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab78);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab79);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab710);

      pourcentage=(pourcentage/10)-4;
      return pourcentage;
    }

    estDans8()
    {
      let pourcentage=0;
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab81);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab82);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab83);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab84);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab85);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab86);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab87);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab88);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab89);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab810);

      pourcentage=(pourcentage/10)+4;
      return pourcentage;
    }

    estDans9()
    {
      let pourcentage=0;
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab91);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab92);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab93);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab94);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab95);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab96);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab97);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab98);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab99);
      pourcentage+=this.comparer_tab(this.tableau20LETTRE,tab910);

      pourcentage=pourcentage/10;
      return pourcentage;
    }
}

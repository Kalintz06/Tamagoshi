function tamagoshi() {
    let energie = 10;
    let faim = 0;
    let joie = 5; 


function action(){
    let choix;
    choix = prompt(
        `
          -----------------------------------
          Que voulez vous faire ?
          -----------------------------------
          1/ jouer
          2/ nourrir
          ------------------------------------
      `
      );


      if (choix == 1);{

          energie = energie -2;
          faim = faim +1;
          joie = joie +1;

        alert("vous avez nourri votre animal, il reste" + energie + joie + faim);
        
      }else {
        energie <= 0
        alert("votre animal est completement décédé");
      }
      if (choix == 2);{

          energie = energie +2;
          faim = faim -1;
          joie = joie -1;
          alert("vous avez nourri votre animal, il reste" + energie + joie + faim);
      
        }else {
            faim > 5
            alert("votre animal est completement décédé");
        }

    }


tamagoshi()


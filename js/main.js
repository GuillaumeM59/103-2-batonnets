 var elGameContainer = document.getElementById("gameContainer");
 var elScene = document.createElement("div");
 var elPlateau = document.createElement("div");
 var elJoueur1 = document.createElement("p");
 var elJoueur2 = document.createElement("p");
 var elJ1ret1= document.createElement("button");
 var elJ1ret2 = document.createElement("button");
 var elJ1ret3 = document.createElement("button");
 var elJ2ret1 = document.createElement("button");
 var elJ2ret2 = document.createElement("button");
 var elJ2ret3 = document.createElement("button");
 var batonnets=[];
 var slots=[];
 var currentBat=0;


var init= function() {
for (i=0; i<20; i++) {
  slots[i]=document.createElement("div");
  slots[i].className="slots";
  slots[i].style.width="2%";
  slots[i].style.left= 1.5+ i*5 +"%";
  elPlateau.appendChild(slots[i]);
}

for (i=0; i<20; i++) {
  batonnets[i]=document.createElement("div");
  batonnets[i].className="batonnets";
  batonnets[i].style.width="2%";
  batonnets[i].style.left= 1.5+ i*5 +"%";
  elPlateau.appendChild(batonnets[i]);
}

 elScene.className="scene";
elPlateau.className="plateau";

elJoueur1.innerHTML="Joueur 1";
elJoueur1.className="player";
elJoueur1.style.top="0";
elJoueur2.innerHTML="Joueur 2";
elJoueur2.className="player";
elJoueur2.style.bottom="0";
elJ1ret1.innerHTML="1";
elJ1ret2.innerHTML="2";
elJ1ret3.innerHTML="3";
elJ2ret1.innerHTML="1";
elJ2ret2.innerHTML="2";
elJ2ret3.innerHTML="3";

elJ1ret1.className="rmvButton";
elJ1ret2.className="rmvButton";
elJ1ret3.className="rmvButton";
elJ2ret1.className="rmvButton";
elJ2ret2.className="rmvButton";
elJ2ret3.className="rmvButton";


 elGameContainer.appendChild(elScene);
 elScene.appendChild(elJoueur1);
 elJoueur1.appendChild(elJ1ret1);
 elJoueur1.appendChild(elJ1ret2);
 elJoueur1.appendChild(elJ1ret3);
 elScene.appendChild(elPlateau);
 elScene.appendChild(elJoueur2);
 elJoueur2.appendChild(elJ2ret1);
 elJoueur2.appendChild(elJ2ret2);
 elJoueur2.appendChild(elJ2ret3);

 currentBat=19;

rmvButtonJ2();

var j1r1=function() { J1play(1);};
var j1r2=function() { J1play(2);};
var j1r3=function() { J1play(3);};
var j2r1=function() { J2play(1);};
var j2r2=function() { J2play(2);};
var j2r3=function() { J2play(3);};

elJ1ret1.addEventListener("click",j1r1,false);
elJ1ret2.addEventListener("click",j1r2,false);
elJ1ret3.addEventListener("click",j1r3,false);
elJ2ret1.addEventListener("click",j2r1,false);
elJ2ret2.addEventListener("click",j2r2,false);
elJ2ret3.addEventListener("click",j2r3,false);
};


var goUp = function(numero) {
  batonnets[numero].style.top="-30%";
};
var goDn = function(numero) {
  batonnets[numero].style.top="80%";
};

var addButtonJ1 = function (){
  if(currentBat>2){elJ1ret3.style.display="inline-block";}
  if(currentBat>1){elJ1ret2.style.display="inline-block";}
  if(currentBat>0){elJ1ret1.style.display="inline-block";}
};

var addButtonJ2 = function (){
  if(currentBat>0){elJ2ret1.style.display="inline-block";}
  if(currentBat>1){elJ2ret2.style.display="inline-block";}
  if(currentBat>2){elJ2ret3.style.display="inline-block";}
};

var rmvButtonJ1 = function (){
  elJ1ret1.style.display="none";
  elJ1ret2.style.display="none";
  elJ1ret3.style.display="none";
};

var rmvButtonJ2 = function (){
  elJ2ret1.style.display="none";
  elJ2ret2.style.display="none";
  elJ2ret3.style.display="none";
};

var J1play = function(nombre) {
  rmvButtonJ1();
  for (i=1;i<=nombre;i++){
    goUp(currentBat);
    currentBat--;
  }
  if (currentBat===0){
    alert("Player 1 win");
  }
  else {
    addButtonJ2();
  }
};

var J2play = function(nombre) {
  rmvButtonJ2();
  for (i=1;i<=nombre;i++){
    goDn(currentBat);
    currentBat--;
  }
  if (currentBat===0){
    alert("Player 2 win");
  }
  else {
    addButtonJ1();
  }

};




init();

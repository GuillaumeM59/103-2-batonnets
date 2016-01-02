//
// 2 PLAYERS
//

// VAR FOR CONTENT
 var elGameContainer = document.getElementById("gameContainer");
 var elScene = document.createElement("div");
 var elPlateau = document.createElement("div");
 var elJoueur1 = document.createElement("p");
 var elJoueur2 = document.createElement("p");
 var speed = 5;
 var animtimer;

// VAR FOR ACTIONS BUTTONS
 var elJ1ret1= document.createElement("button");
 var elJ1ret2 = document.createElement("button");
 var elJ1ret3 = document.createElement("button");
 var elJ2ret1 = document.createElement("button");
 var elJ2ret2 = document.createElement("button");
 var elJ2ret3 = document.createElement("button");
 var elrestart= document.createElement("button");

// VAR FOR MECANIC
 var batonnets=[];
 var slots=[];
 var currentBat=0;

// FUNCTION TO CREATE GAME AND INIT 2Players
var initV2= function() {
    // CREATE GREY EMPTY SLOTS
for (i=0; i<20; i++) {
  slots[i]=document.createElement("div");
  slots[i].className="slots";
  slots[i].style.width="2%";
  slots[i].style.left= 1.5+ i*5 +"%";
  elPlateau.appendChild(slots[i]);
}
    // CREATE BATONNETS
for (i=0; i<20; i++) {
  batonnets[i]=document.createElement("div");
  batonnets[i].className="batonnets";
  batonnets[i].style.width="2%";
  batonnets[i].style.left= 1.5+ i*5 +"%";
  elPlateau.appendChild(batonnets[i]);
}

    // STYLE OF ELEMENTS
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
elrestart.innerHTML="Rejouer";

elJ1ret1.className="rmvButton";
elJ1ret2.className="rmvButton";
elJ1ret3.className="rmvButton";
elJ2ret1.className="rmvButton";
elJ2ret2.className="rmvButton";
elJ2ret3.className="rmvButton";
elrestart.className="restartbtn";

    // ADD ELEMENTS TO HTML
 elGameContainer.appendChild(elScene);
 elScene.appendChild(elJoueur1);
 elJoueur1.appendChild(elJ1ret1);
 elJoueur1.appendChild(elJ1ret2);
 elJoueur1.appendChild(elJ1ret3);
 elScene.appendChild(elPlateau);
 elPlateau.appendChild(elrestart);
 elScene.appendChild(elJoueur2);
 elJoueur2.appendChild(elJ2ret1);
 elJoueur2.appendChild(elJ2ret2);
 elJoueur2.appendChild(elJ2ret3);

  // UNSHOW RESTART BTN
elrestart.style.display="none";
  // START DECREASES COUNTER
 currentBat=19;
  // UNSHOW P2 ACTIONS BUTTONS
rmvButtonJ2();
};

// FUNCTIONS FOR MOVING BATONNETS IN PLAYER SIDE

var goUp = function(numero) {
  var batnum= batonnets[numero];
    var top = 25;
  var initanimup = function() {
    var pas = -1;
      batnum.style.top=top+pas+"%";
      top += pas;
      if (top<=-30){
        clearTimeout(animtimer);
      }
  };
  var animtimer = setInterval(initanimup,speed);
};

var goDn = function(numero) {
  var batnum= batonnets[numero];
    var top = 25;
  var initanimDn = function() {
    var pas = 1;
      batnum.style.top=top+pas+"%";
      top += pas;
      if (top>=80){
        clearTimeout(animtimerd);
      }
  };
  var animtimerd = setInterval(initanimDn,speed);
};


// FUNCTIONS TO REMOVE OR ADD BUTTONS THAT ALLOW TO PLAY
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

// DON'T ALLLOW P1 TO PLAY
var rmvButtonJ1 = function (){
  elJ1ret1.style.display="none";
  elJ1ret2.style.display="none";
  elJ1ret3.style.display="none";
};

// DON'T ALLLOW P2 TO PLAY
var rmvButtonJ2 = function (){
  elJ2ret1.style.display="none";
  elJ2ret2.style.display="none";
  elJ2ret3.style.display="none";
};

// ACTION WHEN P1 RUN
var J1play = function(nombre) {
  rmvButtonJ1();
  for (i=1;i<=nombre;i++){
    goUp(currentBat);
    currentBat--;
  }
  if (currentBat===0){
    alert("Player 1 win");
    elrestart.style.display="block";
  }
  else {
    addButtonJ2();
  }
};

// ACTION WHEN P2 RUN
var J2play = function(nombre) {
  rmvButtonJ2();
  for (i=1;i<=nombre;i++){
    goDn(currentBat);
    currentBat--;
  }
  if (currentBat===0){
    alert("Player 2 win");
    elrestart.style.display="block";
  }
  else {
    addButtonJ1();
  }
};

// ACTION FOR addEventListener ON EACH BTN
var j1r1=function() { J1play(1);};
var j1r2=function() { J1play(2);};
var j1r3=function() { J1play(3);};
var j2r1=function() { J2play(1);};
var j2r2=function() { J2play(2);};
var j2r3=function() { J2play(3);};

// RESTART GAME AFTER WIN
var reinitV2=function() {
  for (i=0; i<20; i++) {
    elPlateau.removeChild(batonnets[i]);
  }
  batonnets=[];
  initV2();
  addButtonJ1();
};

// INIT THE GAME
initV2();

// ADD LISTENERS
elJ1ret1.addEventListener("click",j1r1,false);
elJ1ret2.addEventListener("click",j1r2,false);
elJ1ret3.addEventListener("click",j1r3,false);
elJ2ret1.addEventListener("click",j2r1,false);
elJ2ret2.addEventListener("click",j2r2,false);
elJ2ret3.addEventListener("click",j2r3,false);
elrestart.addEventListener("click",reinitV2,false);
///////////////////////////////////////////////////////////////////

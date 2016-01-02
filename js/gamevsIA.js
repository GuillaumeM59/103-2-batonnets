

///////////////////////////////////////////////////////
//1 VS IA
//////////////////////////////////////////////////////

// VAR FOR CONTENT
 var elGameContainerIA = document.getElementById("gameContainerIA");
 var elSceneIA = document.createElement("div");
 var elPlateauIA = document.createElement("div");
 var elJoueur1IA = document.createElement("p");
 var elJoueurIA = document.createElement("p");

// VAR FOR ACTIONS BUTTONS
 var elJ1ret1IA= document.createElement("button");
 var elJ1ret2IA = document.createElement("button");
 var elJ1ret3IA = document.createElement("button");
 var elrestartIA= document.createElement("button");

// VAR FOR MECANIC
 var batonnetsIA=[];
 var slotsIA=[];
 var currentBatIA=0;

 var initIA= function() {
     // CREATE GREY EMPTY SLOTS
 for (i=0; i<20; i++) {
   slotsIA[i]=document.createElement("div");
   slotsIA[i].className="slots";
   slotsIA[i].style.width="2%";
   slotsIA[i].style.left= 1.5+ i*5 +"%";
   elPlateauIA.appendChild(slotsIA[i]);
 }
     // CREATE BATONNETS
 for (i=0; i<20; i++) {
   batonnetsIA[i]=document.createElement("div");
   batonnetsIA[i].className="batonnets";
   batonnetsIA[i].style.width="2%";
   batonnetsIA[i].style.left= 1.5+ i*5 +"%";
   elPlateauIA.appendChild(batonnetsIA[i]);
 }

     // STYLE OF ELEMENTS
  elSceneIA.className="scene";
 elPlateauIA.className="plateau";

 elJoueur1IA.innerHTML="Joueur 1";
 elJoueur1IA.className="player";
 elJoueur1IA.style.top="0";
 elJoueurIA.innerHTML="Ordinateur";
 elJoueurIA.className="player";
 elJoueurIA.style.bottom="0";

 elJ1ret1IA.innerHTML="1";
 elJ1ret2IA.innerHTML="2";
 elJ1ret3IA.innerHTML="3";
 elrestartIA.innerHTML="Rejouer";

 elJ1ret1IA.className="rmvButton";
 elJ1ret2IA.className="rmvButton";
 elJ1ret3IA.className="rmvButton";
 elrestartIA.className="restartbtn";

     // ADD ELEMENTS TO HTML
  elGameContainerIA.appendChild(elSceneIA);
  elSceneIA.appendChild(elJoueur1IA);
  elJoueur1IA.appendChild(elJ1ret1IA);
  elJoueur1IA.appendChild(elJ1ret2IA);
  elJoueur1IA.appendChild(elJ1ret3IA);
  elSceneIA.appendChild(elPlateauIA);
  elPlateauIA.appendChild(elrestartIA);
  elSceneIA.appendChild(elJoueurIA);

  // UNSHOW RESTART BTN
elrestartIA.style.display="none";
  // START DECREASES COUNTER
 currentBatIA=19;
};

var goUpIA = function(numero) {
  var batnum= batonnetsIA[numero];
    var top = 25;
  var initanimupIA = function() {
    var pas = -1;
      batnum.style.top=top+pas+"%";
      top += pas;
      if (top<=-30){
        clearTimeout(animtimerIA);
      }
  };
  var animtimerIA = setInterval(initanimupIA,speed);
};
var goDnIA = function(numero) {
  var batnum= batonnetsIA[numero];
    var top = 25;
  var initanimDnIA = function() {
    var pas = 1;
      batnum.style.top=top+pas+"%";
      top += pas;
      if (top>=80){
        clearTimeout(animtimerdIA);
      }
    };
    var animtimerdIA = setInterval(initanimDnIA,speed);
};

// FUNCTIONS TO REMOVE OR ADD BUTTONS THAT ALLOW TO PLAY
var addButtonJ1IA = function (){
  if(currentBatIA>2){elJ1ret3IA.style.display="inline-block";}
  if(currentBatIA>1){elJ1ret2IA.style.display="inline-block";}
  if(currentBatIA>0){elJ1ret1IA.style.display="inline-block";}
};

// DON'T ALLLOW P1 TO PLAY
var rmvButtonJ1IA = function (){
  elJ1ret1IA.style.display="none";
  elJ1ret2IA.style.display="none";
  elJ1ret3IA.style.display="none";
};

// ACTION WHEN P1 RUN
var J1playIA = function(nombre) {
  rmvButtonJ1IA();
  for (i=1;i<=nombre;i++){
    goUpIA(currentBatIA);
    currentBatIA--;
  }
  if (currentBatIA===0){
    alert("Player 1 win");
    elrestartIA.style.display="block";
  }
  else {
    IAPlay();
  }
};

// ACTION WHEN P2 RUN
var IAPlay = function() {
  var nombreIA=0;
  if (currentBatIA<4) { nombreIA=currentBatIA;
  } else if (currentBatIA>4 && currentBatIA<=7) {
    nombreIA=currentBatIA-4;
  } else if (currentBatIA>7 && currentBatIA<=10) {
    nombreIA=currentBatIA-7;
  } else if (currentBatIA>10 && currentBatIA<=13) {
    nombreIA=currentBatIA-10;
  } else {
    nombreIA= Math.floor(Math.random()*3)+1;
  }
  for (i=1;i<=nombreIA;i++){
    goDnIA(currentBatIA);
    currentBatIA--;
  }
  if (currentBatIA===0){
    alert("Ordinateur a retiré "+nombreIA+" bâtonnet(s)");
    alert("Ordinateur win");
    elrestartIA.style.display="block";
  }
  else {
    addButtonJ1IA();
    alert("Ordinateur a retiré "+nombreIA+" bâtonnet(s)");
  }
};

// ACTION FOR addEventListener ON EACH BTN
var j1r1IA=function() { J1playIA(1);};
var j1r2IA=function() { J1playIA(2);};
var j1r3IA=function() { J1playIA(3);};

// RESTART GAME AFTER WIN
var reinitIA=function() {
  for (i=0; i<20; i++) {
    elPlateauIA.removeChild(batonnetsIA[i]);
  }
  batonnetsIA=[];
  initIA();
  addButtonJ1IA();
};

// INIT THE GAME
initIA();

// ADD LISTENERS
elJ1ret1IA.addEventListener("click",j1r1IA,false);
elJ1ret2IA.addEventListener("click",j1r2IA,false);
elJ1ret3IA.addEventListener("click",j1r3IA,false);
elrestartIA.addEventListener("click",reinitIA,false);

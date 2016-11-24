

function Tester(){
  var mot = document.getElementById("reponse").value;
  var gra = document.getElementById("mot1");
  var min = document.getElementById("mot2");
  var maj = document.getElementById("mot3");
  var nombre = document.getElementById("nbcv");
  var inverse = document.getElementById("reverse");
  var palindrome = document.getElementById("palin");

  // --------Afficher le mot en gras et en couleur---------------- //
  gra.innerHTML = mot;
  gra.style.color = "red";
  gra.style.fontWeight = "bold";

  // --------Afficher le mot en minuscules------------------------ //
  min.innerHTML = mot.toLowerCase();

  // --------Afficher le mot en majuscules------------------------ //
  maj.innerHTML = mot.toUpperCase();

  // --------Afficher le nombre de voyelles et de consonnes------- //
  var lettres = mot.toLowerCase().split('');
  var voy = 0;
  for (var i = 0; i < lettres.length; i++) {
    if (lettres[i]=="a"||lettres[i]=="e"||lettres[i]=="i"||lettres[i]=="o"||lettres[i]=="u"||lettres[i]=="y"||lettres[i]=="é"||lettres[i]=="è"||lettres[i]=="à"||lettres[i]=="ù"||lettres[i]=="ê"){
      voy = voy+1;
    }
  }
  var cons = lettres.length - voy;
  nombre.innerHTML = voy + " voyelles et " + cons + " consonnes";

  // --------Afficher le mot à l'envers--------------------------- //
  var inv = "";
  for (var j = mot.length-1; j >= 0; j--) {
    inv+=mot[j];
  }
  inverse.innerHTML = inv;

  // --------Afficher s'il s'agit d'un palindrome ou non---------- //
  if(inv.toLowerCase()==mot.toLowerCase()){
    palindrome.innerHTML = "Oui";
  }
  else{
    palindrome.innerHTML = "Non";
  }
}

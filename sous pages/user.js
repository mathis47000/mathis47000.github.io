function myFunction() {
  var txt;
  var mot = prompt("Mot de passe:", "");
  if (mot == "oui") {
    document.location.href="sous pages/secret.html";
  }
  
}
function myFunctions() {
  var txt;
  var mot = prompt("Mot de passe:", "");
  if (mot == "oui") {
    document.location.href="secret.html";
  }
  
}

var win; 
      function openW() { 
        if (win==null) {
         win = window.open("sound.html", "", "top=800,left=0,height=10,width=300"); 
      }
    }
       function openW2() { 
        if (win==null) {
         win = window.open("sous pages/sound.html", "", "top=800,left=0,height=10,width=300"); 
      }
    }

    
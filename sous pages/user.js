function myFunction() {
  var txt;
  var mot = prompt("Mot de passe:", "");
  if (mot == "oui") {
    document.location.href="sous pages/secret.html";
  }
  
}
function myFunction2() {
  var txt;
  var mot = prompt("Mot de passe:", "");
  if (mot == "oui") {
    document.location.href="secret.html";
  }
  
}

var win; 
      function openW() { 
        if (win==null) {
         win = window.open("image/fond.mp3", "", "top=800,left=0,height=10,width=300"); 
      }
    }
       function openW2() { 
        if (win==null) {
         win = window.open("sous pages/image/fond.mp3", "", "top=800,left=0,height=10,width=300"); 
      }
    }

    
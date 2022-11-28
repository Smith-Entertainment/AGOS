let opc = document.getElementsByClassName("aba");
let aberto = false;

function abrir_cronog(){
    if(!aberto)
    {
      document.getElementById("cronogramas").style.display = "block";
      aberto = true;
    }
    else
    {
      document.getElementById("cronogramas").style.display = "none";
      aberto = false;
    }
}

opc[0].addEventListener("click", abrir_cronog);
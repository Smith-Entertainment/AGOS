let opc = document.getElementsByClassName("aba");
let opc_ft = document.getElementsByClassName("aba_ft")
let fotos_ft = document.getElementsByClassName ("ft_")
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



function abrir_fotos(){
  if(!aberto)
  {
    document.getElementById("Fotos").style.display = "block";

    aberto = true;
  }
  else
  {
    document.getElementById("Fotos").style.display = "none";
    aberto = false;
  }
}

function abrir_ft1(){
  if(!aberto)
  {
    fotos_ft[0].style.display = "flex";
    aberto = true;
  }
  else
  {
    fotos_ft[0].style.display = "none";
    aberto = false;
  }
}
function abrir_ft2(){
  if(!aberto)
  {
    fotos_ft[1].style.display = "flex";
    aberto = true;
  }
  else
  {
    fotos_ft[1].style.display = "none";
    aberto = false;
  }
}

opc_ft[0].addEventListener("click", abrir_ft1);
opc_ft[1].addEventListener("click", abrir_ft2);
opc[0].addEventListener("click", abrir_cronog);
opc[2].addEventListener("click", abrir_fotos); 
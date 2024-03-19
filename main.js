const form = document.getElementById("form");
const campoAInput = document.querySelector("campoA");
const campoBInput = document.querySelector("campoB");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  if(campoA.value === "") {
    alert("Por favor, digite um valor!");
    return;

  }

  if (campoB.value < campoA.value) {
    alert("Valor inválido! Campo B está menor que campo A!");
    return;

  }
  if (campoB.value > campoA.value) {
    alert("Valor válido! Campo B está maior que campo A!");
    return;

    campoAInput.value= '';
    campoBInput.value='';

    
  }
  
  
});


   

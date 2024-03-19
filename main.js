const form = document.getElementById("form");
const campoAInput = document.getElementById("campoA");
const campoBInput = document.getElementById("campoB");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  
  if(campoA.value === "") {
    alert("Por favor, digite um valor!");
    

  }
  

  if (parseInt(campoB.value) < parseInt(campoA.value)) {
    alert("Valor inválido! Campo B está menor que campo A!");
    

  }
  if (campoB.value > campoA.value) {
    alert("Valor válido! Campo B está maior que campo A!");

    campoAInput.value='';
    campoBInput.value='';
    return;

   
  }
  

  
  
});


   

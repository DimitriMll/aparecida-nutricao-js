var titulo = document.querySelector(".titulo"); // seleciona a classe titulo

//titulo.textContent = "Alterando título da página com JavaScript"; // seleciona o conteúdo da classe título e altera ele

var pacientes = document.querySelectorAll(".paciente"); // seleciona todos pacientes e retorna em um array

for (var i = 0; i < pacientes.length; i++) { //pega paciente a paciente e transforma em um array, daí vai de elemento em elemento, pacientes[i], pra ir calculando e validando imc. SHOW
  
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso"); // seleciona a classe info-peso
  var peso = tdPeso.textContent; // seleciona o conteúdo de tdPeso ou info-peso

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  var pesoValido = validaPeso(peso);
  var alturaValida = validaAltura(altura);

  if (!pesoValido) {
    console.log("Peso inválido!");
    pesoValido = false;
    tdImc.textContent = "Peso inválido!";
    paciente.classList.add("paciente-invalido"); //add classe pra modificar o estilo lá no index.css
  }

  if (!alturaValida) {
    console.log("Altura inválida!");
    alturaValida = false;
    tdImc.textContent = "Altura inválida!";
    paciente.classList.add("paciente-invalido"); //add classe pra modificar o estilo lá no index.css
  }

  if (alturaValida && pesoValido) {
    var imc = calculaImc(peso,altura);
    tdImc.textContent = imc;
  }
}

function validaPeso(peso) {
  if(peso >=0 && peso <1000){
    return true;
  }else {
    return false;
  }
}

function validaAltura(altura){
  if(altura >=0 && altura <=3.00){
    return true;
  }else {
    return false;
  }
}

function calculaImc(peso,altura) {
  var imc = 0;
  imc = peso / (altura*altura);
  return imc.toFixed(2);
}



/*
console.log(paciente); //tr primeiro paciente com todos dados
console.log(tdPeso); // td que contém o peso
console.log(peso); // somente o valor do peso
console.log(tdAltura); // td que contém a altura
console.log(altura); // somente o valor da tdAltura
*/

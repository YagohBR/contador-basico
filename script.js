let contador = 10;

function atualizarContador() {
  document.getElementById('contador').textContent = contador;
}

function aumentar() {
  contador++;
  atualizarContador();
}

function diminuir() {
    if (contador>10){
  contador--;
  atualizarContador();
    }
}

function resetar() {
  contador = 10;
  atualizarContador();
}
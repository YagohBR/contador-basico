let contador = 0;

function atualizarContador() {
  document.getElementById('contador').textContent = contador;
}

function aumentar() {
  contador++;
  atualizarContador();
}

function diminuir() {
  contador--;
  atualizarContador();
    }

function resetar() {
  contador = 0;
  atualizarContador();
}
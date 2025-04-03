let amigos = [];
let amigo = document.getElementById("nome-amigo");

function adicionar() {
  let lista = document.getElementById("lista-amigos");
  if (amigo.value.trim() === "") {
    alert("O nome do amigo não pode estar vazio.");
    return;
  }

  amigos.push(amigo.value);
  if (lista.textContent == "") {
    lista.textContent = amigo.value;
  } else {
    lista.textContent = lista.textContent + ", " + amigo.value;
  }

  amigo.value = "";
}

function sortear() {
  if (amigos.length < 4) {
    alert("É necessário pelo menos 4 pessoas para realizar o sorteio.");
    return;
  }
  embaralha(amigos);
  let sorteio = document.getElementById("lista-sorteio");

  for (i = 0; i < amigos.length; i++) {
    sorteio.innerHTML =
      sorteio.innerHTML +
      amigos[i] +
      " --> " +
      amigos[(i + 1) % amigos.length] +
      "<br>";
  }
}

function embaralha(lista) {
  for (let indice = lista.length; indice; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * indice);

    // atribuição via destructuring
    [lista[indice - 1], lista[indiceAleatorio]] = [
      lista[indiceAleatorio],
      lista[indice - 1],
    ];
  }
}

function reiniciar() {
  amigos = [];
  amigo.value = "";
  document.getElementById("lista-amigos").textContent = "";
  document.getElementById("lista-sorteio").textContent = "";
}

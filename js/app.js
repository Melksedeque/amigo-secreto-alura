let amigos = [];

function adicionar() {
  let amigo = document.getElementById("nome-amigo").value;
  let lista = document.getElementById("lista-amigos");

  amigos.push(amigo);
  if (lista.textContent == "") {
    lista.textContent = amigo;
  } else {
    lista.textContent = lista.textContent + ", " + amigo;
  }

  amigo = "";
}

function sortear() {
  embaralha(amigos);
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

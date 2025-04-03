function adicionar() {
  let amigo = document.getElementById("nome-amigo").value;
  let lista = document.getElementById("lista-amigos");

  if (lista.textContent == "") {
    lista.textContent = amigo;
  } else {
    lista.textContent = lista.textContent + ", " + amigo;
  }
}

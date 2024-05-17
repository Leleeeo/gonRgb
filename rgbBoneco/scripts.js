function aleatoria() {
  const cor = `rgb(${Math.round(Math.random() * 256)}, ${Math.round(
    Math.random() * 256
  )}, ${Math.round(Math.random() * 256)})`;
  document.body.style.background = cor;
}

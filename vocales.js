function contarVocales(texto) {
  let contadorVocales = 0;
  let vocal = ["a", "e", "i", "o", "u"]
    
  for(let i = 0; i < texto.length; ++i) {
    if (vocal.indexOf(texto[i]) >= 0) {
      ++contadorVocales;
    }
  }

  return contadorVocales;
}

console.log(contarVocales("programa"));
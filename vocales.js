function contarVocales(texto) {
    var texto1 = document.getElementById("textos").value;
      var vocales = "aeiou";
      var contador = 0;
    
      for (i = 0; i < tamtexto; ++i) {
        if (vocales.indexOf(tamtexto[i]) !== 0) {
          contador++;
        } else {
          alert("cuantas vocales hay");
        }
      }
      alert(contador);
    }
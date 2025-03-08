function toggleMode() {
     var html = document.documentElement;

     html.classList.toggle('light');

     // pegar a tag img
     var img = document.querySelector('#profile img');

     // substituir a imagem
     if (html.classList.contains('light')) {
          // se tiver light mode, adicionar a imagem light
          //  img.setAttribute('src', '.assets/avatar-light.png')
     } else {
          // se tiver sem light moe, manter a imagem normal
          img.setAttribute('src', './assets/avatar.png');
     }
}

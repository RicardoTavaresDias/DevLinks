

function toggleMode() {
  const html = document.documentElement

  //realizando uma função para executar no momento do click
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }

  //Outra forma que faz mesma coisa
  //html.classList.toggle('light')

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar_dia.png")
    
    //realizando mesmo procedimento na descrição do ALT da imagem
    img.setAttribute("alt", "Foto de perfil com oculos escuro, esta dia")

  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar_noite.png")

    //realizando mesmo procedimento na descrição do ALT da imagem
    img.setAttribute("alt", "Foto de perfil com oculos de grau, esta noite")
  }

}
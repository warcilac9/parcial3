console.log("Hola mundo");

let $btnLight = document.querySelector("#btn-light");
let $btnDark = document.querySelector("#btn-dark");

$btnLight.addEventListener("click", function (e) {
  document.body.style.backgroundColor = "beige";
  document.body.style.color = "black";
});

$btnDark.addEventListener("click", (e) => {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
});


/* AJAX y JSON*/ 

async function obtenerDatosGitHub() {
    let respuesta = await fetch("https://api.github.com/users/warcilac9");
    let datos = await respuesta.json();
  
    let $github = document.querySelector("#github");
  
    $github.innerHTML = `
      <table border="3">
        <tr>
          <td>Nombre:</td>
          <td>${datos.login}</td>
        </tr>
        <tr>
          <td>Avatar:</td>
          <td><img src="${datos.avatar_url}" alt="${datos.name}"></td>
        </tr>   
        <tr>
          <td>Location:</td>
          <td>${datos.location}</td>
        </tr>
      </table>
    `;
  
    console.log(datos);
  }
  
  obtenerDatosGitHub();
const API_URL = "http://127.0.0.1:8080/Blog-Backend/blog";

const HTM_Response = document.querySelector("#categoria");
const ul = document.createElement('ul');


fetch(`${API_URL}/Categorias`)
.then((response)=>response.json())
.then((categorias)=> {
   categorias.forEach((categoria) => {
       let elem = document.createElement("li");
       let elem2 = document.createElement("a");
       elem2.appendChild(
           document.createTextNode(`${categoria.name}`)
       );
       elem2.setAttribute("href", "Categoria.html");
       elem.appendChild(elem2);
       ul.appendChild(elem);
   });
});
HTM_Response.appendChild(ul);

function habilitarCalendario(){
 document.getElementById('fecha').disabled = false;
}
function deshabilitarCalendario(){
    document.getElementById('fecha').disabled = true;
   }
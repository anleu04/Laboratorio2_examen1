import { mi_lista_de_componentes } from "./data.js";

let div_root = document.querySelector(".root");
let bloque_principal = `
<div class="lista_items"></div>
`;
div_root.innerHTML = bloque_principal;

function cargar_items() {
    let div_items = document.querySelector(".lista_items");
    div_items.innerHTML = " ";

    mi_lista_de_componentes.forEach((elemento) => {
        
            let div = document.createElement("div");
            div.classList.add("item");
            div.innerHTML = `
            <div class="nombre">${elemento.nombre}  </div>
            <div class="descripcion">${elemento.descripcion}</div>
            `;
            let div_btn = document.createElement("boton");
            div_btn.classList.add("boton");
            div_items.appendChild(div);
         
        
    })
 }
 cargar_items("");
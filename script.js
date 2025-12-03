// --- SISTEMA DE TABS ---
function openTab(id) {
document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
document.getElementById(id).classList.add('active');
}


// --- SISTEMA DE REGISTRO DE INTERACCIONES ---
let interacciones = JSON.parse(localStorage.getItem("interacciones")) || {
boton1: 0,
boton2: 0,
boton3: 0
};


// Registrar clics en cada botón
const botones = document.querySelectorAll('.action-btn');
botones.forEach(boton => {
boton.addEventListener('click', () => {
const nombre = boton.getAttribute('data-name');
interacciones[nombre]++;
localStorage.setItem("interacciones", JSON.stringify(interacciones));
actualizarLista();
});
});


// --- MOSTRAR ESTADÍSTICAS EN LA PESTAÑA ---
function actualizarLista() {
const lista = document.getElementById('lista-estadisticas');
lista.innerHTML = '';


for (let boton in interacciones) {
const li = document.createElement('li');
li.textContent = `${boton.toUpperCase()}: ${interacciones[boton]} clics`;
lista.appendChild(li);
}
}


// Cargar lista al iniciar
actualizarLista();

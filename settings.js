const inputUsername = document.getElementById('input-username');
const usernames = document.querySelectorAll('.username');
const dropZone = document.getElementById('drop-zone');
const inputImage = document.getElementById('input-image');
const profilePics = document.querySelectorAll('.profile-pic');
const panelFormulario = document.getElementById('panel-formulario');
const btnToggleForm = document.getElementById('btn-toggle-form');

// Nombre
inputUsername.addEventListener('input', (e) => {
    const nuevoNombre = e.target.value.trim() || '@Placeholder';
    usernames.forEach(el => el.textContent = nuevoNombre);
});

dropZone.addEventListener('click', () => inputImage.click());

//  Drag & Drop 
dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('dragover');
});

dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('dragover');
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragover');
    if (e.dataTransfer.files.length) {
        actualizarImagen(e.dataTransfer.files[0]);
    }
});

// clic tradicional
inputImage.addEventListener('change', (e) => {
    if (e.target.files.length) {
        actualizarImagen(e.target.files[0]);
    }
});

//Hide and show menu

btnToggleForm.addEventListener('click', () => {
    panelFormulario.classList.toggle('oculto');
    if (panelFormulario.classList.contains('oculto')) {
        btnToggleForm.innerText = '➡';
    } else {
        btnToggleForm.innerText = '⬅';
    }
});

// Función central para leer y colocar la imagen en las tarjetas
function actualizarImagen(file) {
    if (!file.type.startsWith('image/')) {
        alert("Por favor, sube un archivo de imagen válido.");
        return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
        profilePics.forEach(img => img.src = e.target.result);
        dropZone.innerText = "¡Imagen actualizada!";
    };
    reader.readAsDataURL(file);
}

function lanzarAnimacion(redSocial) {
    // 1. Limpiar animaciones previas de todas las tarjetas
    const tarjetas = document.querySelectorAll('.card');
    const botones = document.querySelectorAll('.action-btn');

    tarjetas.forEach(t => t.classList.remove('animar-tarjeta'));
    botones.forEach(b => b.classList.remove('animar-boton'));

    // 2. Restaurar los textos originales de los botones
    document.getElementById('btn-ig').innerText = 'Follow';
    document.getElementById('btn-tk').innerText = 'Follow';
    document.getElementById('btn-yt').innerText = 'Subscribe';

    setTimeout(() => {
        const tarjetaActiva = document.getElementById('card-' + redSocial);
        let idBoton = '';
        let textoFinal = 'Following';

        if (redSocial === 'instagram') idBoton = 'btn-ig';
        if (redSocial === 'tiktok') idBoton = 'btn-tk';
        if (redSocial === 'youtube') {
            idBoton = 'btn-yt';
            textoFinal = 'Subscribed';
        }

        const botonActivo = document.getElementById(idBoton);

        tarjetaActiva.classList.add('animar-tarjeta');
        botonActivo.classList.add('animar-boton');

        setTimeout(() => {
            botonActivo.innerText = textoFinal;
        }, 3000);

    }, 50);
}
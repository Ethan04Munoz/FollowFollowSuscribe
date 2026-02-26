
function lanzarAnimacion(redSocial) {
    //Desaparece el area de grabacion para que no salga en el clip
    const textoGrabacion = document.querySelector('.area-grabacion span');
    if (textoGrabacion) {
        textoGrabacion.style.display = 'none';
        document.querySelector('.area-grabacion').style.border = 'none';
    }

    // Limpiar animaciones previas de todas las tarjetas
    const tarjetas = document.querySelectorAll('.card');
    const botones = document.querySelectorAll('.action-btn');

    tarjetas.forEach(t => t.classList.remove('animar-tarjeta'));
    botones.forEach(b => {
        b.classList.remove('animar-boton');
        b.classList.remove('boton-presionado');
    });

    // Restaurar los textos originales de los botones
    document.getElementById('btn-ig').innerText = 'Follow';
    document.getElementById('btn-tk').innerText = 'Follow';
    document.getElementById('btn-yt').innerText = 'Subscribe';

    setTimeout(() => {
        const tarjetaActiva = document.getElementById('card-' + redSocial);
        let idBoton = '';
        let textoFinal = 'Following';
        let coloresConfetti = [];

        if (redSocial === 'instagram') {
            idBoton = 'btn-ig';
            coloresConfetti = ['#C13584', '#F56040', '#405DE6'];
        }
        if (redSocial === 'tiktok') {
            idBoton = 'btn-tk';
            coloresConfetti = ['#00F2EA', '#FF0050', '#000000'];
        }
        if (redSocial === 'youtube') {
            idBoton = 'btn-yt';
            textoFinal = 'Subscribed';
            coloresConfetti = ['#FF0000', '#FFFFFF'];
        }

        const botonActivo = document.getElementById(idBoton);

        tarjetaActiva.classList.add('animar-tarjeta');
        botonActivo.classList.add('animar-boton');

        setTimeout(() => {
            botonActivo.innerText = textoFinal;
            botonActivo.classList.add('boton-presionado');

            confetti({
                particleCount: 150,
                spread: 60,
                startVelocity: 30,
                origin: {
                    x: 0.60,
                    y: 0.50
                },
                colors: coloresConfetti,
                disableForReducedMotion: true
            });
           
        }, 3000);
        setTimeout(() => {
            const textoGrabacion = document.querySelector('.area-grabacion span');
            if (textoGrabacion) {
                textoGrabacion.style.display = '';
            }
            document.querySelector('.area-grabacion').style.border = ''; 

        }, 7000);
    }, 500);
}
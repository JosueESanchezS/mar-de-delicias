// Carrusel automático
document.addEventListener('DOMContentLoaded', function() {
    const carruselImgs = document.querySelectorAll('.carrusel img');
    let index = 0;
    if(carruselImgs.length > 0){
        carruselImgs[index].classList.add('active');
        setInterval(() => {
            carruselImgs[index].classList.remove('active');
            index = (index + 1) % carruselImgs.length;
            carruselImgs[index].classList.add('active');
        }, 3200);
    }
});

// Filtros de galería
document.addEventListener('DOMContentLoaded', function() {
    const btns = document.querySelectorAll('.filtro-btn');
    const fotos = document.querySelectorAll('.foto-gal');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('activo'));
            btn.classList.add('activo');
            const filtro = btn.getAttribute('data-filtro');
            fotos.forEach(foto => {
                if(filtro === "todos" || foto.getAttribute('data-categoria') === filtro){
                    foto.style.display = "block";
                } else {
                    foto.style.display = "none";
                }
            });
        });
    });

    // Lightbox
    const galeria = document.getElementById('galeria-lista');
    const lightbox = document.getElementById('lightbox');
    const lightImg = document.getElementById('lightbox-img');
    if(galeria){
        galeria.addEventListener('click', function(e){
            if(e.target.tagName === 'IMG' && !e.target.classList.contains('marca-agua')){
                lightImg.src = e.target.src;
                lightbox.style.display = 'flex';
            }
        });
        document.getElementById('cerrar-lightbox').onclick = function(){
            lightbox.style.display = 'none';
            lightImg.src = '';
        };
        lightbox.addEventListener('click', function(e){
            if(e.target === lightbox) {
                lightbox.style.display = 'none';
                lightImg.src = '';
            }
        });
    }
});

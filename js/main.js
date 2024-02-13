//FUNCION PARA ABRIR MODAL

function openModal(modalId) {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById(modalId).style.display = 'block';
    setTimeout( () => {
        document.getElementById('overlay').style.opacity = 1;
        document.getElementById(modalId).style.opacity = 1;
        document.getElementById(modalId).style.transform = 'translate(-50%, -50%) scale(1)';
    }, 50);
}

//FUNCION CERRAR MODAL

function closeModal(modalId) {
    document.getElementById('overlay').style.opacity = 0;
    document.getElementById(modalId).style.opacity = 0;
    document.getElementById(modalId).style.transform = 'translate(-50%, -50%) scale(0.8)';
    setTimeout(() => {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById(modalId).style.display = 'none';
    }, 300);
}

//FUNCION DESCARGAR PDF

function descargarPdf() {
    
    const rutaLocalPdf = "/pdf/Curriculum.pdf";

    fetch(rutaLocalPdf).then( response => response.blob()).then(blob => {
        
        const blobUrl = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.style.display = 'none';
        document.body.appendChild(a);

        a.href = blobUrl;
        a.download = 'CurriculumProfesional.pdf';

        a.click();

        window.URL.revokeObjectURL(blobUrl);
        a.remove();
    }).catch( error => {
        console.log('Error al descargar el archivo: ', error);
    });
}

//FUNCION COPIAR CORREO



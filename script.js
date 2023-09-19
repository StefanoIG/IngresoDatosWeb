document.addEventListener('DOMContentLoaded', function() {
    const customerForm = document.getElementById('customer-form');
    const resultadoDiv = document.getElementById('resultado');

    customerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nombre = document.getElementById('nombre').value;
        const correo = document.getElementById('correo').value;
        const telefono = document.getElementById('telefono').value;

        const resultadoHTML = `
            <p>Cliente Guardado:</p>
            <ul>
                <li>Nombre: ${nombre}</li>
                <li>Correo: ${correo}</li>
                <li>Teléfono: ${telefono}</li>
            </ul>
        `;

        resultadoDiv.innerHTML = resultadoHTML;
        customerForm.reset();
    });
});

// let cart = [];
// let total = 0;

// $('.add-to-cart').click(function() {
//     const name = $(this).data('name');
//     const price = parseFloat($(this).data('price'));

//     cart.push({ name, price });
//     total += price;
//     updateCart();
// });

// function updateCart() {
//     $('#cart-items').empty();
//     cart.forEach(item => {
//         $('#cart-items').append(`<li class="list-group-item">${item.name} - $${item.price.toFixed(2)}</li>`);
//     });
//     $('#total').text(total.toFixed(2));

//     // Actualiza el contador del carrito
//     $('#cart-count').text(cart.length);
// }


/*------modal para los productos----- */
// Selecciona todos los botones "Ver detalles" y les añade el evento de clic
document.querySelectorAll('.view-details-btn').forEach(button => {
    button.addEventListener('click', function () {
        // Obtener el id del modal desde el atributo data-bs-target
        const modalId = this.getAttribute('data-bs-target');
        const modal = document.querySelector(modalId);

        // Mostrar el modal
        if (modal) {
            const bootstrapModal = new bootstrap.Modal(modal);
            bootstrapModal.show();
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) { 
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});
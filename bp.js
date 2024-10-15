// Datos de ejemplo del catálogo
const products = [
    { id: 1, name: "Producto 1", price: 200, image: "https://i.ebayimg.com/thumbs/images/g/qPgAAOSwfbRhnQD1/s-l1200.jpg", description: "Pulsera en conjunto", category: "pulsera" },
    { id: 2, name: "Producto 2", price: 150, image: "https://cdn-media.glamira.com/media/product/newgeneration/view/1/sku/ozli-slavomir/diamond/diamond-Brillant_AAA/stone2/diamond-Brillant_AAA/alloycolour/white.jpg", description: "Descripción del Producto 2", extraInfo: "Información extra del Producto 2.", category: "pulsera", images:[
        "https://cdn-media.glamira.com/media/product/newgeneration/view/3/sku/ozli-slavomir/diamond/diamond-Brillant_AAA/stone2/diamond-Brillant_AAA/alloycolour/white.jpg",
        "https://cdn-media.glamira.com/media/product/newgeneration/view/2/sku/ozli-slavomir/diamond/diamond-Brillant_AAA/stone2/diamond-Brillant_AAA/alloycolour/white.jpg",
        "https://cdn-media.glamira.com/media/product/newgeneration/view/1/sku/ozli-slavomir/diamond/diamond-Brillant_AAA/stone2/diamond-Brillant_AAA/alloycolour/white.jpg"
    ]},
    { id: 3, name: "Producto 3", price: 200, image: "https://cdn-media.glamira.com/media/product/newgeneration/view/1/sku/clawine-m/alloycolour/yellow/accent/malachite.jpg", description: "Descripción del Producto 3", category: "pulsera" },
    { id: 4, name: "Producto 4", price: 250, image: "https://cdn-media.glamira.com/media/product/newgeneration/view/1/sku/8867sunkern/alloycolour/yellow/accent/black.jpg", description: "Pulsera de oro", category: "pulsera" },
    { id: 5, name: "Producto 5", price: 100, image: "https://static.e-stradivarius.net/5/photos4/2024/I/0/1/p/0212/504/003/0212504003_1_1_1.jpg?t=1692000578071&imwidth=480&imformat=chrome&imdensity=2.625&impolicy=stradivarius-itxmediumhigh", description: "Descripción del Producto 1", extraInfo: "Información extra del Producto 1.", category: "collar" },
    { id: 6, name: "Producto 6", price: 100, image: "https://cdn-media.glamira.com/media/product/newgeneration/view/1/sku/britany-n/diamond/diamond-Brillant_AAA/stone2/diamond-Brillant_AAA/stone3/diamond-Brillant_AAA/alloycolour/yellow.jpg", description: "Descripción del Producto 1", extraInfo: "Información extra del Producto 1.", category: "anillo" },
    { id: 7, name: "Producto 7", price: 100, image: "https://cdn-media.glamira.com/media/product/newgeneration/view/1/sku/jade-n1/diamond/diamond-Brillant_AAA/stone2/diamond-Brillant_AAA/alloycolour/white.jpg", description: "Descripción del Producto 1", extraInfo: "Información extra del Producto 1.", category: "anillo" },
    { id: 8, name: "Producto 8", price: 100, image: "https://cdn-media.glamira.com/media/product/newgeneration/view/1/sku/varena/alloycolour/yellow.jpg", description: "Descripción del Producto 1", extraInfo: "Información extra del Producto 1.", category: "arito" },
    { id: 9, name: "Producto 9", price: 100, image: "https://img.ltwebstatic.com/images3_pi/2021/10/31/16356589282009eb521a69f2539300239b2e8acc9b_thumbnail_720x.webp", description: "Descripción del Producto 1", extraInfo: "Información extra del Producto 1.", category: "collar",images:[
        "https://img.ltwebstatic.com/images3_pi/2021/10/31/163565892624c7685159b4cefbf8a502572574083e_thumbnail_720x.webp"
    ]},
    { id: 10, name: "Producto 10", price: 100, image: "https://cdn-media.glamira.com/media/product/newgeneration/view/1/sku/varena/alloycolour/yellow.jpg", description: "Descripción del Producto 1", extraInfo: "Información extra del Producto 1.", category: "arito" },
    { id: 11, name: "Producto 11", price: 100, image: "https://cdn-media.glamira.com/media/product/newgeneration/view/1/sku/varena/alloycolour/yellow.jpg", description: "Descripción del Producto 1", extraInfo: "Información extra del Producto 1.", category: "arito" },
    { id: 12, name: "Producto 12", price: 100, image: "https://cdn-media.glamira.com/media/product/newgeneration/view/1/sku/varena/alloycolour/yellow.jpg", description: "Descripción del Producto 1", extraInfo: "Información extra del Producto 1.", category: "arito" },
    { id: 13, name: "Producto 13", price: 100, image: "https://cdn-media.glamira.com/media/product/newgeneration/view/1/sku/varena/alloycolour/yellow.jpg", description: "Descripción del Producto 1", extraInfo: "Información extra del Producto 1.", category: "arito" },
    { id: 14, name: "Producto 14", price: 100, image: "https://cdn-media.glamira.com/media/product/newgeneration/view/1/sku/varena/alloycolour/yellow.jpg", description: "Descripción del Producto 1", extraInfo: "Información extra del Producto 1.", category: "arito" },
    { id: 15, name: "Producto 15", price: 100, image: "https://cdn-media.glamira.com/media/product/newgeneration/view/1/sku/varena/alloycolour/yellow.jpg", description: "Descripción del Producto 1", extraInfo: "Información extra del Producto 1.", category: "arito" },
];
// Función para manejar el clic en los botones del desplegable
const dropdownBtns = document.querySelectorAll('.dropdown-btn');

dropdownBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const dropdownContent = this.nextElementSibling;
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });
});

// Cierra el menú si se hace clic en una opción del desplegable
const dropdownLinks = document.querySelectorAll('.dropdown-content a');

dropdownLinks.forEach(link => {
    link.addEventListener('click', function() {
        const dropdownContent = this.closest('.dropdown-content');
        dropdownContent.style.display = 'none'; // Cerrar el desplegable
    });
});

// Cierra el menú si se hace clic fuera de él
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
        const dropdowns = document.querySelectorAll('.dropdown-content');
        dropdowns.forEach(dropdown => {
            dropdown.style.display = 'none';
        });
    }
};
// Datos de ejemplo para nuevos productos
const futureProducts = [
    { id: 1, name: "Nuevo Producto 1", price: 150, image: "https://via.placeholder.com/150", description: "Descripción del nuevo producto 1", extraInfo: "Más información sobre el nuevo producto 1." },
    { id: 2, name: "Nuevo Producto 2", price: 200, image: "https://via.placeholder.com/150", description: "Descripción del nuevo producto 2", extraInfo: "Más información sobre el nuevo producto 2." },
    { id: 3, name: "Nuevo Producto 3", price: 250, image: "https://via.placeholder.com/150", description: "Descripción del nuevo producto 3", extraInfo: "Más información sobre el nuevo producto 3." }
];
// Función para generar la tarjeta de cada nuevo producto
function generateFutureProductCard(product) {
    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">$${product.price}</p>
            <button class="view-more-btn" onclick="openModal(${product.id})">Ver más fotos</button>
        </div>
    `;
}
// Función para renderizar los nuevos productos en el DOM
function renderFutureProducts() {
    const futureProductsContainer = document.getElementById('future-products-container');
    futureProductsContainer.innerHTML = futureProducts.map(product => generateFutureProductCard(product)).join('');
}

// Llamada inicial para renderizar los nuevos productos
renderFutureProducts();

// Función para generar la tarjeta de cada producto
function generateProductCard(product) {
    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">$${product.price}</p>
            <button class="view-more-btn" onclick="openModal(${product.id})">Ver más fotos</button>
        </div>
    `;
}
// Función para renderizar el catálogo en el DOM
function renderCatalog() {
    const catalogContainer = document.getElementById('catalog-container');
    catalogContainer.innerHTML = products.map(product => generateProductCard(product)).join('');
}

// Llamada inicial para renderizar el catálogo
renderCatalog();
// Función para generar la tarjeta de cada producto
function generateProductCard(product) {
    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <button class="view-more-btn" onclick="openModal(${product.id})">Ver más fotos</button>
            <button class="order-btn" onclick="window.open('pedido.html?id=${product.id}', '_blank')">Pedir Producto</button>
        </div>
    `;
}
// Función para renderizar el catálogo en el DOM
function renderCatalog(filteredProducts = products) {
    const catalogContainer = document.getElementById('catalog-container');
    catalogContainer.innerHTML = filteredProducts.map(product => generateProductCard(product)).join('');
}

// Función para filtrar los productos
function filterProducts() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchInput) ||
        product.description.toLowerCase().includes(searchInput)
    );
    renderCatalog(filteredProducts);
}

// Llamada inicial para renderizar el catálogo
renderCatalog();
// Función para filtrar productos por categoría
function filterProductsByCategory() {
    const selectedCategory = document.getElementById('category-select').value;
    let filteredProducts;

    if (selectedCategory === "all") {
        filteredProducts = products; // Muestra todos los productos
    } else {
        filteredProducts = products.filter(product => product.category === selectedCategory);
    }

    renderCatalog(filteredProducts); // Vuelve a renderizar el catálogo con los productos filtrados
}

// Función para filtrar por nombre o descripción y categoría simultáneamente
function filterProducts() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const selectedCategory = document.getElementById('category-select').value;

    let filteredProducts = products.filter(product =>
        (product.name.toLowerCase().includes(searchInput) ||
         product.description.toLowerCase().includes(searchInput)) &&
        (selectedCategory === "all" || product.category === selectedCategory)
    );

    renderCatalog(filteredProducts);
}

let currentSlideIndex = 0;
let currentProductImages = [];

// Función para abrir el modal y mostrar las fotos del producto
function openModal(productId) {
    const product = products.find(p => p.id === productId);
    currentProductImages = product.images; // Guardamos las imágenes del producto seleccionado
    currentSlideIndex = 0; // Iniciar en la primera imagen

    const modalCarousel = document.getElementById('modal-carousel');
    modalCarousel.innerHTML = currentProductImages.map((image, index) => 
        `<img src="${image}" alt="Foto de ${product.name}" class="${index === 0 ? 'active' : ''}">`
    ).join('');

    document.getElementById('photo-modal').style.display = 'flex';
}


// Función para cerrar el modal
function closeModal() {
    document.getElementById('photo-modal').style.display = 'none';
}
// Función para cambiar de imagen en el carrusel
function changeSlide(direction) {
    const images = document.querySelectorAll('#modal-carousel img');
    images[currentSlideIndex].classList.remove('active'); // Ocultar la imagen actual

    currentSlideIndex = (currentSlideIndex + direction + images.length) % images.length; // Cambiar la imagen
    images[currentSlideIndex].classList.add('active'); // Mostrar la nueva imagen
}
// Función para mostrar el cuadro de búsqueda
document.getElementById('search-icon').onclick = function() {
    // Lógica para mostrar el cuadro de búsqueda
    const searchInput = document.getElementById('search-input');
    searchInput.style.display = searchInput.style.display === 'block' ? 'none' : 'block';
};

// Función para mostrar el menú de categorías
document.getElementById('category-icon').onclick = function() {
    // Lógica para mostrar el menú de categorías
    const categorySelect = document.getElementById('category-select');
    categorySelect.style.display = categorySelect.style.display === 'block' ? 'none' : 'block';
};
// Función para abrir el modal de pedido
function openOrderModal(productId) {
    document.getElementById('product-id').value = productId; // Establecer el ID del producto en el formulario
    document.getElementById('order-modal').style.display = 'block'; // Mostrar el modal
}

// Función para cerrar el modal de pedido
function closeOrderModal() {
    document.getElementById('order-modal').style.display = 'none'; // Ocultar el modal
}

// Manejar el envío del formulario
document.getElementById('order-form').onsubmit = function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    const customerName = document.getElementById('customer-name').value;
    const customerEmail = document.getElementById('customer-email').value;
    const productId = document.getElementById('product-id').value;

    // Aquí podrías agregar la lógica para enviar los datos a tu servidor o API
    console.log(`Pedido realizado por ${customerName} (${customerEmail}) para el producto ID: ${productId}`);

    // Cerrar el modal después de enviar el pedido
    closeOrderModal();
};

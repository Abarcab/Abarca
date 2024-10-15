// product-details.js
const products = [
    { id: 1, name: "Producto 1", price: 200, image: "https://i.ebayimg.com/thumbs/images/g/qPgAAOSwfbRhnQD1/s-l1200.jpg", description: "Pulsera en conjunto", extraInfo: "Juego de pulseras doradas.", category: "pulsera" },
    { id: 2, name: "Producto 2", price: 150, image: "https://cdn-media.glamira.com/media/product/newgeneration/view/1/sku/ozli-slavomir/diamond/diamond-Brillant_AAA/stone2/diamond-Brillant_AAA/alloycolour/white.jpg", description: "Descripción del Producto 2", extraInfo: "Información extra del Producto 2.", category: "pulsera", images:[
        "https://cdn-media.glamira.com/media/product/newgeneration/view/3/sku/ozli-slavomir/diamond/diamond-Brillant_AAA/stone2/diamond-Brillant_AAA/alloycolour/white.jpg",
        "https://cdn-media.glamira.com/media/product/newgeneration/view/2/sku/ozli-slavomir/diamond/diamond-Brillant_AAA/stone2/diamond-Brillant_AAA/alloycolour/white.jpg",
        "https://cdn-media.glamira.com/media/product/newgeneration/view/1/sku/ozli-slavomir/diamond/diamond-Brillant_AAA/stone2/diamond-Brillant_AAA/alloycolour/white.jpg"
    ]},
    { id: 3, name: "Producto 3", price: 200, image: "https://cdn-media.glamira.com/media/product/newgeneration/view/1/sku/clawine-m/alloycolour/yellow/accent/malachite.jpg", description: "Descripción del Producto 3", extraInfo: "Información extra del Producto 3.", category: "pulsera" },
    { id: 4, name: "Producto 4", price: 250, image: "https://cdn-media.glamira.com/media/product/newgeneration/view/1/sku/8867sunkern/alloycolour/yellow/accent/black.jpg", description: "Pulsera de oro", extraInfo: "Información extra del Producto 4.", category: "pulsera" },
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

// Función para obtener el ID del producto de la URL
function getProductIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id'), 10);
}

// Función para cargar los detalles del producto
function loadProductDetails() {
    const productId = getProductIdFromURL();
    const product = products.find(p => p.id === productId);

    if (product) {
        document.getElementById('product-name').innerText = product.name;
        document.getElementById('product-image').src = product.image;
        document.getElementById('product-description').innerText = product.description;
        document.getElementById('product-price').innerText = `$${product.price}`;
        document.getElementById('extra-info').innerText = product.extraInfo;
    } else {
        // Manejar el caso en que el producto no se encuentra
        document.getElementById('product-details-container').innerHTML = '<p>Producto no encontrado.</p>';
    }
}

// Manejar el envío del formulario
document.getElementById('purchase-form').onsubmit = function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    const customerName = document.getElementById('buyer-name').value;

    // Limpiar el contenido de la página
    document.getElementById('product-details-container').innerHTML = `
        <div class="success-message">
            <h2>¡Pedido Exitoso!</h2>
            <p>Gracias <strong>${customerName}</strong>, su pedido ha sido recibido.</p>
            <p>Nos comunicaremos con usted pronto.</p>
            <div class="logo-container">
                <img src="bp.png" alt="Logo de la Tienda" class="logo">
            </div>
        </div>
    `;
};

// Cargar los detalles del producto al cargar la página
window.onload = loadProductDetails;
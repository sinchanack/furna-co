// Toggle menu icon and navbar visibility
document.getElementById('menu-icon').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});

// Show images based on the button clicked
document.getElementById('furniture-btn').addEventListener('click', function() {
    displayImages('fur');
    document.querySelector('.shop .heading h2').textContent = 'Furniture';
});

document.getElementById('home-decor-btn').addEventListener('click', function() {
    displayImages('hom');
    document.querySelector('.shop .heading h2').textContent = 'Home Decor';
});

document.getElementById('shop-now-btn').addEventListener('click', function() {
    displayOneImageEach();
});

document.getElementById('search-btn').addEventListener('click', function() {
    searchProducts(document.getElementById('search-bar').value.toLowerCase());
});

document.getElementById('cart-btn').addEventListener('click', function() {
    window.location.href = '/cart';
});

document.getElementById('wishlist-btn').addEventListener('click', function() {
    window.location.href = '/wishlist';
});



// Function to get product details based on filename and folder
function getProductDetails(folder, filename) {
    const products = {
        fur: {
            'product1.jpg': { name: 'White Table', price: 350 },
            'product2.jpg': { name: 'Pink Chair', price: 200 },
            'product3.jpg': { name: 'Office Chair', price: 500 },
            'product4.jpg': { name: 'Off White Chair', price: 400 },
            'product5.jpg': { name: 'Brown Chair', price: 450 },
            'product6.jpg': { name: 'Wooden Hand Chair', price: 600 },
            'product7.jpg': { name: 'Metal Chair', price: 700 },
            'product8.jpg': { name: 'Yellow Chair', price: 800 },
            'product9.jpg': { name: 'Sofa Set', price: 15000 },
            'product10.jpg': { name: 'Grey Sofa', price: 10000 },
            'product11.jpg': { name: 'Off-white Sofa', price: 9000 },
            'product12.jpg': { name: 'Royal Sofa', price: 11000 },
            'product13.jpg': { name: 'White Round Table', price: 800 },
            'product14.jpg': { name: 'Dinning Set', price: 15000 },
            'product15.jpg': { name: 'White Dinning Set', price: 12500 },
            'product16.jpg': { name: 'Cafe Dinning Set', price: 9000 },
            'product17.jpg': { name: 'Pear Chair', price: 700 },
            'product18.jpg': { name: 'King Chair', price: 2000 },
            'product19.jpg': { name: 'Sofa Chair', price: 8500 },
            'product20.jpg': { name: 'Cozy Sofa Bed', price: 5500 },
            'product21.jpg': { name: 'Blue Sofa Chair', price: 4000 },
            'product22.jpg': { name: 'Wooden Door', price: 1800 },
            'product23.jpg': { name: 'Blue Door', price: 2000 },
            'product24.jpg': { name: 'Dark Blue Door', price: 1200 },
            'product25.jpg': { name: 'Yellow Door', price: 2500 },
            'product26.jpg': { name: 'Green Door', price: 3000 },
            'product27.jpg': { name: 'Anywhere Door', price: 2700 },
            'product28.jpg': { name: 'Cute Blue Door', price: 5200 },
            'product29.jpg': { name: 'White Door', price: 1500 },
            'product30.jpg': { name: 'Lift Door', price: 6000 },
            'product31.jpg': { name: 'Pain Window', price: 800 },
            'product32.jpg': { name: 'Square Window', price: 900 },
            'product33.jpg': { name: 'Cozy Window', price: 1800 },
            'product34.jpg': { name: 'Pattern Window', price: 2300 },
            'product35.jpg': { name: 'Door Window', price: 2000 },
            'product36.jpg': { name: 'Peace Window', price: 1000 },
            'product37.jpg': { name: 'Big Transparent Window', price: 12000 },
            'product38.jpg': { name: 'Round Window', price: 970 },
            'product39.jpg': { name: 'home Full Window', price: 11000 },
            'product40.jpg': { name: 'Open Window', price: 2500 },
            'product41.jpg': { name: 'Pink Chair', price: 2200 },
            'product42.jpg': { name: 'Green Sofa Set', price: 15000 },
            'product43.jpg': { name: 'Yellow Sofa chair', price: 5400 },
            'product44.jpg': { name: 'White Swing', price: 680 },
            'product45.jpg': { name: 'Yellow Swing', price: 900 },
            'product46.jpg': { name: 'White Net Swing', price: 1800 },
            'product47.jpg': { name: 'Circle Net Sofa', price: 2500 },
            'product48.jpg': { name: 'Tree Swing', price: 1700 },
            'product49.jpg': { name: 'Wide Swing', price: 4200 },
            'product50.jpg': { name: 'Comfy Swing', price: 1400 },

            // ... (additional products)
        },
        hom: {
            'product1.jpg': { name: 'Golden Candle Stand', price: 220 },
            'product2.jpg': { name: 'Cusion', price: 100 },
            'product3.jpg': { name: 'Traditional Pot', price: 550 },
            'product4.jpg': { name: 'Flower Pot', price: 600 },
            'product5.jpg': { name: 'Small flower Pot', price: 200 },
            'product6.jpg': { name: 'Ciclular Flower Pot', price: 150 },
            'product7.jpg': { name: 'Tungstun Bulb', price: 100 },
            'product8.jpg': { name: 'Design Bulb', price: 250 },
            'product9.jpg': { name: 'Golden Bulb Set', price: 800 },
            'product10.jpg': { name: 'Hanging Bulb', price: 500 },
            'product11.jpg': { name: 'Wall Lamp', price: 900 },
            'product12.jpg': { name: 'Laser Light', price: 1000 },
            'product13.jpg': { name: 'Golden Clock', price: 800 },
            'product14.jpg': { name: 'Round Clock', price: 900 },
            'product15.jpg': { name: 'Classy Clock', price: 620 },
            'product16.jpg': { name: 'Red Clock', price: 800 },
            'product17.jpg': { name: 'Steel Clock', price: 750 },
            'product18.jpg': { name: 'Wall Stand', price: 300 },
            'product19.jpg': { name: 'Red Laser', price: 1000 },
            'product20.jpg': { name: 'Steel Wall Stand', price: 400 },
            'product21.jpg': { name: 'Golden Mirror', price: 870 },
            'product22.jpg': { name: 'Wall Decor', price: 90 },
            'product23.jpg': { name: 'Wall Paint', price: 600 },
            'product24.jpg': { name: 'Lamp', price: 200 },
            'product25.jpg': { name: 'Ring Light', price: 1500 },
            'product26.jpg': { name: 'Bottle Decor', price: 800 },
            'product27.jpg': { name: 'Asthetic Hangings', price: 400 },
            'product28.jpg': { name: 'Monkey Doll', price: 5200 },
            'product29.jpg': { name: 'Cute Teddy', price: 1220 },
            'product30.jpg': { name: 'Teddy Bear', price: 2100 },
            'product31.jpg': { name: 'Turtle Toy', price: 700 },
            'product32.jpg': { name: 'Dog Toy', price: 850 },
            'product33.jpg': { name: 'Elephnt Toy', price: 900 },
            'product34.jpg': { name: 'Xmas Toy', price: 800 },
            'product35.jpg': { name: 'Night Room Decor', price: 300 },
            'product36.jpg': { name: 'Flower Stand', price: 500 },
            'product37.jpg': { name: 'Flower Pot Set', price: 1200 },
            'product38.jpg': { name: 'Room Decor', price: 920 },
            'product39.jpg': { name: 'Oval Mirror', price: 8000 },
            'product40.jpg': { name: 'Rectangle Mirror', price: 3400 },
            'product41.jpg': { name: 'Huge Mirror', price: 22000 },
            'product42.jpg': { name: 'Round Mirror', price: 5000 },
            'product43.jpg': { name: 'Window Curtain', price: 700 },
            'product44.jpg': { name: 'White Curtain', price: 480 },
            'product45.jpg': { name: 'Gray Curtain', price: 200 },
            'product46.jpg': { name: 'Green Stool', price: 300 },
            'product47.jpg': { name: 'Blue Stool', price: 600 },
            'product48.jpg': { name: 'Wheel Bulb', price: 700 },
            'product49.jpg': { name: 'Thunder Light', price: 1200 },
            'product50.jpg': { name: 'Swing Light', price: 400 },
            

            // ... (additional products)
        }
    };
    return products[folder][filename] || { name: 'Unknown Product', price: 0 };
}

function displayImages(folder) {
    const shopContainer = document.querySelector('.shop-container');
    shopContainer.innerHTML = ''; // Clear previous content

    // Define the image filenames to be displayed
    const imageFilenames = Array.from(Array(50).keys()).map(i => `product${i + 1}.jpg`);
    imageFilenames.forEach(filename => {
        const imagePath = `C:/Users/User/OneDrive/Desktop/software miniproject/${folder}/${filename}`;
        
        const { name, price } = getProductDetails(folder, filename);

        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${imagePath}" alt="${filename}">
            <h3>${name}</h3>
            <p>Price: $${price}</p>
            <button class="btn add-to-cart" data-image="${imagePath}">Add to Cart</button>
            <button class="btn add-to-wishlist" data-image="${imagePath}">Add to Wishlist</button>
        `;
        shopContainer.appendChild(productElement);
    });

    addEventListenersToButtons();
}

function displayOneImageEach() {
    const shopContainer = document.querySelector('.shop-container');
    shopContainer.innerHTML = ''; // Clear previous content

    const furImage = 'C:/Users/User/OneDrive/Desktop/software miniproject/fur/product1.jpg';
    const homImage = 'C:/Users/User/OneDrive/Desktop/software miniproject/hom/product1.jpg';

    const furDetails = getProductDetails('fur', 'product1.jpg');
    const homDetails = getProductDetails('hom', 'product1.jpg');

    const furElement = document.createElement('div');
    furElement.classList.add('product');
    furElement.innerHTML = `
        <img src="${furImage}" alt="Furniture">
        <h3>${furDetails.name}</h3>
        <p>Price: $${furDetails.price}</p>
        <button class="btn add-to-cart" data-image="${furImage}">Add to Cart</button>
        <button class="btn add-to-wishlist" data-image="${furImage}">Add to Wishlist</button>
    `;
    shopContainer.appendChild(furElement);

    const homElement = document.createElement('div');
    homElement.classList.add('product');
    homElement.innerHTML = `
        <img src="${homImage}" alt="Home Decor">
        <h3>${homDetails.name}</h3>
        <p>Price: $${homDetails.price}</p>
        <button class="btn add-to-cart" data-image="${homImage}">Add to Cart</button>
        <button class="btn add-to-wishlist" data-image="${homImage}">Add to Wishlist</button>
    `;
    shopContainer.appendChild(homElement);

    addEventListenersToButtons();
}



function addEventListenersToButtons() {
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            addToCart(this.dataset.image);
        });
    });

    document.querySelectorAll('.add-to-wishlist').forEach(button => {
        button.addEventListener('click', function() {
            addToWishlist(this.dataset.image);
        });
    });
}

function addToCart(image) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(image);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart!');
}

function addToWishlist(image) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist.push(image);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    alert('Added to wishlist!');
}

function searchProducts(query) {
    const shopContainer = document.querySelector('.shop-container');
    shopContainer.innerHTML = ''; // Clear previous content

    const folders = ['fur', 'hom'];
    folders.forEach(folder => {
        const allImages = Array.from(Array(50).keys()).map(i => `product${i + 1}.jpg`);

        allImages.forEach(filename => {
            const productName = getProductDetails(folder, filename).name.toLowerCase();
            if (productName.includes(query)) {
                const imagePath = `C:/Users/User/OneDrive/Desktop/software miniproject/${folder}/${filename}`;
                const { name, price } = getProductDetails(folder, filename);

                const productElement = document.createElement('div');
                productElement.classList.add('product');
                productElement.innerHTML = `
                    <img src="${imagePath}" alt="${filename}">
                    <h3>${name}</h3>
                    <p>Price: $${price}</p>
                    <button class="btn add-to-cart" data-image="${imagePath}">Add to Cart</button>
                    <button class="btn add-to-wishlist" data-image="${imagePath}">Add to Wishlist</button>
                `;
                shopContainer.appendChild(productElement);
            }
        });
    });

    addEventListenersToButtons();
}

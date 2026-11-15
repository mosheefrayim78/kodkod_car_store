const carsData = [
    { id: 1, name: "Tesla Model 3", category: "electric", tag: "חשמלית", year: 2026, specs: "טווח 513 ק״מ • אוטומט", price: 215000, image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=600&q=80" },
    { id: 2, name: "Mazda CX-5", category: "suv", tag: "ג'יפון SUV", year: 2025, specs: "2.0 בנזין • 4x2", price: 189000, image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80" },
    { id: 3, name: "Porsche 911 Carrera", category: "sport", tag: "ספורט ויוקרה", year: 2026, specs: "385 כ״ס • 3.0 טורבו", price: 980000, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80" },
    { id: 4, name: "Hyundai Ioniq 5", category: "electric", tag: "חשמלית", year: 2026, specs: "טווח 481 ק״מ • טעינה מהירה", price: 229000, image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=600&q=80" },
    { id: 5, name: "BMW X5", category: "suv", tag: "ג'יפון SUV", year: 2026, specs: "3.0 פלאג-אין הייבריד", price: 540000, image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&q=80" },
    { id: 6, name: "Mercedes-AMG GT", category: "sport", tag: "ספורט ויוקרה", year: 2026, specs: "585 כ״ס • מנוע V8", price: 1150000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80" },
    { id: 7, name: "Toyota Corolla Hybrid", category: "family", tag: "משפחתית", year: 2025, specs: "1.8 היברידי • חסכונית", price: 159000, image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=600&q=80" },
    { id: 8, name: "Kia Sportage", category: "suv", tag: "ג'יפון SUV", year: 2025, specs: "1.6 טורבו • אבזור מלא", price: 184000, image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80" },
    { id: 9, name: "BYD Seal", category: "electric", tag: "חשמלית", year: 2026, specs: "טווח 570 ק״מ • הנעה כפולה", price: 219000, image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=600&q=80" }
];

let cart = [];

function renderCars(list = carsData) {
    const grid = document.getElementById('carsGrid');
    grid.innerHTML = list.map(car => `
        <div class="car-card">
            <img src="${car.image}" alt="${car.name}">
            <div class="car-info">
                <span class="car-tag">${car.tag} • ${car.year}</span>
                <h3>${car.name}</h3>
                <div class="car-specs">${car.specs}</div>
                <div class="car-bottom">
                    <span class="car-price">₪${car.price.toLocaleString()}</span>
                    <button class="add-btn" onclick="addToCart(${car.id})">הוסף לסל</button>
                </div>
            </div>
        </div>
    `).join('');
}

function filterCars(category, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    if (category === 'all') {
        renderCars(carsData);
    } else {
        renderCars(carsData.filter(car => car.category === category));
    }
}

function renderCart() {
    const list = document.getElementById('cartList');
    const count = document.getElementById('cartCount');
    const totalEl = document.getElementById('totalPrice');

    count.innerText = cart.length;
    if (cart.length === 0) {
        list.innerHTML = '<li class="empty-msg">העגלה ריקה כרגע. בחר רכב מהקטלוג למעלה!</li>';
        totalEl.innerText = '₪0';
        return;
    }

    let total = 0;
    list.innerHTML = cart.map((item, index) => {
        total += item.price;
        return `<li>
            <span><strong>${item.name}</strong> - ₪${item.price.toLocaleString()}</span>
            <button class="remove-btn" onclick="removeFromCart(${index})">הסר מהסל</button>
        </li>`;
    }).join('');

    totalEl.innerText = `₪${total.toLocaleString()}`;
}

renderCars();
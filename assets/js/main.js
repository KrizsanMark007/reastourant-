const menuItems = [
    {
        name: 'Truffle Fries',
        description: 'Crispy shoestring fries tossed with parmesan, herbs, and house truffle aioli.',
        price: '2 490 Ft'
    },
    {
        name: 'Spicy Chicken Wings',
        description: 'Smoky wings glazed in chili honey, served with cooling ranch dip.',
        price: '3 190 Ft'
    },
    {
        name: 'Tataki Salmon Bowl',
        description: 'Sesame-seared salmon over sticky rice, avocado, cucumber, and miso dressing.',
        price: '4 590 Ft'
    },
    {
        name: 'BBQ Pulled Pork Burger',
        description: 'Juicy pork, onion jam, cheddar, and crisp slaw on a toasted brioche bun.',
        price: '3 990 Ft'
    },
    {
        name: 'Loaded Nacho Plate',
        description: 'House chips piled with cheese, jalapeños, pico, crema, and guac.',
        price: '2 790 Ft'
    },
    {
        name: 'Chocolate Lava Cake',
        description: 'Warm cake with molten center, served with vanilla cream and berries.',
        price: '2 250 Ft'
    }
];

const menuContainer = document.getElementById('menu-items');

if (menuContainer) {
    menuItems.forEach(item => {
        const card = document.createElement('article');
        card.className = 'menu-card';
        card.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <div class="price">${item.price}</div>
        `;
        menuContainer.appendChild(card);
    });
}

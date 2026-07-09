const menuSections = [
    {
        title: 'Pizza',
        items: [
            { name: 'Margherita', description: 'paradicsom alap, mozzarella', price: '1 700 Ft', allergens: ['gluten', 'dairy'] },
            { name: 'Salame (dolce i piccante)', description: 'paradicsom alap, mozzarella, szalami', price: '1 700 Ft', allergens: ['gluten', 'dairy'] },
            { name: 'Pepperoni', description: 'Spicy pepperoni, mozzarella, tomato sauce.', price: '2 690 Ft', allergens: ['gluten', 'dairy'] },
            { name: 'Truffle Mushroom', description: 'Mixed mushrooms, truffle oil, mascarpone.', price: '3 290 Ft', allergens: ['gluten', 'dairy'] }
        ]
    },
    {
        title: 'Grill',
        items: [
            { name: 'BBQ Chicken Skewers', description: 'Char-grilled chicken with smoky BBQ glaze.', price: '3 190 Ft', allergens: ['soy'] },
            { name: 'Ribeye Steak', description: 'Seasoned ribeye with garlic butter and fries.', price: '5 790 Ft', allergens: ['dairy'] },
            { name: 'Grilled Halloumi', description: 'Halloumi, roasted peppers, herb oil.', price: '2 690 Ft', allergens: ['dairy'] }
        ]
    },
    {
        title: 'Pasta',
        items: [
            { name: 'Spaghetti Carbonara', description: 'Creamy egg sauce, pancetta, pecorino.', price: '3 190 Ft', allergens: ['gluten', 'dairy', 'eggs'] },
            { name: 'Penne Arrabbiata', description: 'Spicy tomato sauce, basil, garlic.', price: '2 690 Ft', allergens: ['gluten'] },
            { name: 'Pesto Fettuccine', description: 'Basil pesto, pine nuts, parmesan.', price: '3 490 Ft', allergens: ['gluten', 'dairy', 'nuts'] }
        ]
    },
    {
        title: 'Desszert',
        items: [
            { name: 'Chocolate Lava Cake', description: 'Warm lava cake with vanilla cream.', price: '2 250 Ft', allergens: ['gluten', 'dairy', 'eggs'] },
            { name: 'Panna Cotta', description: 'Vanilla panna cotta with berry compote.', price: '1 990 Ft', allergens: ['dairy'] },
            { name: 'Tiramisu', description: 'Coffee-soaked ladyfingers with mascarpone.', price: '2 390 Ft', allergens: ['gluten', 'dairy', 'eggs'] }
        ]
    },
    {
        title: 'Italok',
        items: [
            { name: 'Üdítők', description: 'Coca-Cola, Fanta, Sprite, tonic.', price: '890 Ft', allergens: [''] },
            { name: 'Prémium limonádé', description: 'Házi citrus-limonádé különféle ízekben.', price: '1 290 Ft', allergens: [''] },
            { name: 'Kávé', description: 'Espresso, cappuccino, latte.', price: '990 Ft', allergens: ['dairy'] },
            { name: 'Sör', description: 'Helyi és import sörök.', price: '1 190 Ft', allergens: ['gluten'] },
            { name: 'Rövid ital', description: 'Whiskey, gin, vodka shot.', price: '1 390 Ft', allergens: [''] },
            { name: 'Borok', description: 'Fehér, rosé, vörös borok pohárra.', price: '1 290 Ft', allergens: ['sulfites'] },
            { name: 'Koktélok', description: 'Mojito, negroni, margarita, house special.', price: '2 190 Ft', allergens: ['dairy'] }
        ]
    }
];

const menuContainer = document.getElementById('menu-items');

if (menuContainer) {
    menuSections.forEach(section => {
        const category = document.createElement('div');
        category.className = 'menu-category';

        const title = document.createElement('h3');
        title.textContent = section.title;
        category.appendChild(title);

        const list = document.createElement('div');
        list.className = 'menu-category-list';

        section.items.forEach(item => {
            const itemCard = document.createElement('div');
            itemCard.className = 'menu-item';

            const header = document.createElement('div');
            header.className = 'menu-item-header';
            header.innerHTML = `<h4 class="menu-item-title">${item.name}</h4><div class="menu-item-price">${item.price}</div>`;

            const description = document.createElement('p');
            description.className = 'menu-item-description';
            description.textContent = item.description;

            itemCard.appendChild(header);
            itemCard.appendChild(description);

            if (item.allergens && item.allergens.filter(Boolean).length) {
                const allergenRow = document.createElement('p');
                allergenRow.className = 'menu-item-allergens';
                item.allergens.filter(Boolean).forEach(allergen => {
                    const badge = document.createElement('span');
                    badge.className = 'allergen-tag';
                    badge.textContent = allergen;
                    allergenRow.appendChild(badge);
                });
                itemCard.appendChild(allergenRow);
            }

            list.appendChild(itemCard);
        });

        category.appendChild(list);
        menuContainer.appendChild(category);
    });
}

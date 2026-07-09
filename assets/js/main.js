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

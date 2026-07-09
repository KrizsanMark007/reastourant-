const menuSections = [
    {
        title: 'Pasta',
        items: [
            { name: 'Tagliatelle alla Bolognese', description: 'Fresh tagliatelle with rich Bolognese meat sauce and parmesan cheese.', price: '4 490 Ft', allergens: ['gluten', 'dairy', 'eggs'] },
            { name: 'Spaghetti alla Carbonara', description: 'Creamy egg yolk sauce with pancetta, pecorino romano cheese, and freshly ground black pepper.', price: '4 490 Ft', allergens: ['gluten', 'dairy', 'eggs'] },
            { name: 'Spaghetti Aglio e Olio', description: 'Classic garlic and olive oil spaghetti with Mediterranean flavors.', price: '4 290 Ft', allergens: ['gluten', 'dairy'] },
            { name: 'Spaghetti Aglio e Olio con Gamberi', description: 'Garlic and olive oil spaghetti with sautéed shrimp and fresh parsley.', price: '5 490 Ft', allergens: ['gluten', 'dairy', 'shellfish'] }
        ]
    },
    {
        title: 'Főételek',
        items: [
            { name: 'Pollo al Limone', description: 'Lemon and rosemary chicken breast steak in a parmesan crust, served with parsley potato wedges and a creamy spring onion sauce.', price: '6 490 Ft', allergens: ['dairy'] },
            { name: 'Pollo alla Griglia', description: 'Grilled chicken breast fillet served with grilled vegetables.', price: '5 490 Ft', allergens: [''] },
            { name: 'Filetto Mediterraneo', description: 'Seasoned pork tenderloin medallions with nutmeg-flavored mashed potatoes and tomato jus.', price: '7 490 Ft', allergens: ['dairy', 'nuts'] },
            { name: 'Costine Italiane', description: 'Slow-roasted Italian seasoned pork ribs served with potato wedges and garlic aioli.', price: '6 990 Ft', allergens: [''] },
            { name: 'Flank Steak al Pepe Verde', description: 'Flank steak served with potato wedges, green peppercorn sauce, and jus.', price: '9 990 Ft', allergens: [''] },
            { name: 'Salmone Olandese', description: 'Grilled salmon steak with Hollandaise sauce and fresh salad.', price: '8 990 Ft', allergens: ['dairy', 'fish'] }
        ]
    },
    {
        title: 'Desszert',
        items: [
            { name: 'Classic Tiramisu', description: 'Mascarpone, espresso, cocoa, sponge fingers.', price: '2 490 Ft', allergens: ['gluten', 'dairy', 'eggs'] },
            { name: 'Tiramisu with Pistachio', description: 'Pistachio cream, mascarpone, white chocolate, sponge fingers.', price: '2 890 Ft', allergens: ['gluten', 'dairy', 'eggs', 'nuts'] },
            { name: 'Chocolate Souffle with Vanilla ice cream', description: 'Hot chocolate souffle with vanilla ice cream.', price: '2 490 Ft', allergens: ['gluten', 'dairy'] }
        ]
    },
    {
        title: 'Soft Drinks',
        items: [
            { name: 'Coca-Cola / Coca-Cola Zero / Sprite / Fanta 0,25 l', description: '', price: '990 Ft', allergens: [''] },
            { name: 'Kinley Tonic / Ginger Ale 0,25 l', description: '', price: '990 Ft', allergens: [''] },
            { name: 'NaturAqua still sparkling 0,5 l', description: '', price: '890 Ft', allergens: [''] },
            { name: 'Cappy 0,25 l', description: 'orange / apple / peach / multivitamin / strawberry', price: '990 Ft', allergens: [''] },
            { name: 'Fuze Tea Black Tea 0,25 l', description: 'lemon / peach hibiscus', price: '990 Ft', allergens: [''] }
        ]
    },
    {
        title: 'Premium Lemonade',
        items: [
            { name: 'Classic Mint Splash 0,65 l', description: 'classic lemonade with mint', price: '2 490 Ft', allergens: [''] },
            { name: 'Mango Chili Madness 0,65 l', description: 'Mango, chili, lime', price: '2 490 Ft', allergens: [''] },
            { name: 'Green Glow 0,65 l', description: 'Green apple, lime, menta', price: '2 490 Ft', allergens: [''] },
            { name: 'Pink Coconut Dream 0,65 l', description: 'Strawberry, coconut', price: '2 490 Ft', allergens: [''] },
            { name: 'Berry Breeze 0,65 l', description: 'Raspberry, blueberry, lemon', price: '2 490 Ft', allergens: [''] },
            { name: 'Sunset Peach 0,65 l', description: 'Peach, orange', price: '2 490 Ft', allergens: [''] },
            { name: 'Tropical Storm 0,65 l', description: 'Pineapple, maracuja', price: '2 490 Ft', allergens: [''] }
        ]
    },
    {
        title: 'Coffee',
        items: [
            { name: 'Espresso', description: '', price: '790 Ft', allergens: [''] },
            { name: 'Americano', description: '', price: '890 Ft', allergens: [''] },
            { name: 'Cappuccino', description: '', price: '1 090 Ft', allergens: ['dairy'] },
            { name: 'Latte Macchiato', description: '', price: '1 290 Ft', allergens: ['dairy'] },
            { name: 'Ice Coffee', description: '', price: '1 490 Ft', allergens: ['dairy'] }
        ]
    },
    {
        title: 'Beer',
        items: [
            { name: 'Dreher Gold 0,3 l', description: '', price: '990 Ft', allergens: ['gluten'] },
            { name: 'Dreher Gold 0,5 l', description: '', price: '1 590 Ft', allergens: ['gluten'] },
            { name: 'Dreher Sourcherry 0,3 l', description: '', price: '990 Ft', allergens: ['gluten'] },
            { name: 'Dreher Sourcherry 0,5 l', description: '', price: '1 590 Ft', allergens: ['gluten'] },
            { name: 'Dreher 24 Lemon 00% 0,33 l', description: '', price: '1 390 Ft', allergens: ['gluten'] },
            { name: 'Peroni 0,33 l', description: '', price: '1 490 Ft', allergens: ['gluten'] },
            { name: 'Corona Extra 0,33 l', description: '', price: '1 790 Ft', allergens: ['gluten'] }
        ]
    },
    {
        title: 'Shots',
        items: [
            { name: 'Finlandia Vodka 0,4 cl', description: '', price: '1 990 Ft', allergens: [''] },
            { name: 'Jameson 0,4 cl', description: '', price: '1 990 Ft', allergens: [''] },
            { name: 'Jack Daniel\'s 0,4 cl', description: '', price: '1 990 Ft', allergens: [''] },
            { name: 'Jägermeister 0,4 cl', description: '', price: '1 990 Ft', allergens: [''] }
        ]
    },
    {
        title: 'White Wine',
        items: [
            { name: 'Bujdosó Csomó Sauvignon Blanc 2025', description: '1,5 dl / 0,7 l', price: '1 490 Ft / 6 990 Ft', allergens: [''] },
            { name: 'Szarka Pince Mád Furmint 2024', description: '1,5 dl / 0,7 l', price: '1 690 Ft / 7 990 Ft', allergens: [''] },
            { name: 'Etyeki Kúria Chardonnay 2024', description: '1,5 dl / 0,7 l', price: '1 290 Ft / 5 990 Ft', allergens: [''] }
        ]
    },
    {
        title: 'Rosé Wine',
        items: [
            { name: 'Sauska Rosé 2025', description: '1,5 dl / 0,7 l', price: '1 590 Ft / 7 490 Ft', allergens: [''] }
        ]
    },
    {
        title: 'Red Wine',
        items: [
            { name: 'Bock Kékfrankos 2023', description: '1,5 dl / 0,7 l', price: '1 490 Ft / 6 990 Ft', allergens: [''] },
            { name: 'Benedek Pinot Noir 2024', description: '1,5 dl / 0,7 l', price: '1 590 Ft / 7 490 Ft', allergens: [''] },
            { name: 'Bakonyi Villányi Bio Cabernet Franc 2021', description: '1,5 dl / 0,7 l', price: '1 990 Ft / 9 490 Ft', allergens: [''] }
        ]
    },
    {
        title: 'Prosecco',
        items: [
            { name: 'Terredirai Prosecco DOC Brut', description: '1,5 dl / 0,7 l', price: '1 990 Ft / 8 990 Ft', allergens: [''] }
        ]
    }
];

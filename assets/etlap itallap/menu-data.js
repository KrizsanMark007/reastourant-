const menuSections = [
    {
        title: { hu: 'Pasta', en: 'Pasta', de: 'Pasta' },
        items: [
            {
                name: { hu: 'Tagliatelle alla Bolognese', en: 'Tagliatelle alla Bolognese', de: 'Tagliatelle alla Bolognese' },
                description: { hu: 'Friss tagliatelle gazdag bolognai hússzósszal és parmezánnal.', en: 'Fresh tagliatelle with rich Bolognese meat sauce and parmesan cheese.', de: 'Frische Tagliatelle mit reichhaltiger Bolognese-Fleischsoße und Parmesan.' },
                price: '4 490 Ft',
                allergens: ['gluten', 'dairy', 'eggs']
            },
            {
                name: { hu: 'Spaghetti alla Carbonara', en: 'Spaghetti alla Carbonara', de: 'Spaghetti alla Carbonara' },
                description: { hu: 'Krémes tojássárgája szósz pancettával, pecorino sajttal és frissen őrölt borssal.', en: 'Creamy egg yolk sauce with pancetta, pecorino romano cheese, and freshly ground black pepper.', de: 'Cremige Eigelbsoße mit Pancetta, Pecorino Romano und frisch gemahlenem schwarzem Pfeffer.' },
                price: '4 490 Ft',
                allergens: ['gluten', 'dairy', 'eggs']
            },
            {
                name: { hu: 'Spaghetti Aglio e Olio', en: 'Spaghetti Aglio e Olio', de: 'Spaghetti Aglio e Olio' },
                description: { hu: 'Klasszikus fokhagymás és olívaolajos spagetti mediterrán ízekkel.', en: 'Classic garlic and olive oil spaghetti with Mediterranean flavors.', de: 'Klassische Spaghetti mit Knoblauch und Olivenöl und mediterranen Aromen.' },
                price: '4 290 Ft',
                allergens: ['gluten', 'dairy']
            },
            {
                name: { hu: 'Spaghetti Aglio e Olio con Gamberi', en: 'Spaghetti Aglio e Olio con Gamberi', de: 'Spaghetti Aglio e Olio con Gamberi' },
                description: { hu: 'Fokhagymás olívaolajos spagetti párolt garnélával és friss petrezselyemmel.', en: 'Garlic and olive oil spaghetti with sautéed shrimp and fresh parsley.', de: 'Spaghetti mit Knoblauch und Olivenöl, gebratenen Garnelen und frischer Petersilie.' },
                price: '5 490 Ft',
                allergens: ['gluten', 'dairy', 'shellfish']
            }
        ]
    },
    {
        title: { hu: 'Főételek', en: 'Main Courses', de: 'Hauptgerichte' },
        items: [
            {
                name: { hu: 'Pollo al Limone', en: 'Pollo al Limone', de: 'Pollo al Limone' },
                description: { hu: 'Citromos rozmaringos csirkemell parmezánkéregben, petrezselymes burgonya szeletekkel és tavaszi hagymás mártással.', en: 'Lemon and rosemary chicken breast steak in a parmesan crust, served with parsley potato wedges and a creamy spring onion sauce.', de: 'Zitronen-Rosmarin-Hähnchenbrust im Parmesanmantel, serviert mit Petersilienkartoffeln und Frühlingszwiebel-Sauce.' },
                price: '6 490 Ft',
                allergens: ['dairy']
            },
            {
                name: { hu: 'Pollo alla Griglia', en: 'Pollo alla Griglia', de: 'Pollo alla Griglia' },
                description: { hu: 'Grillezett csirkemellfilé grillezett zöldségekkel tálalva.', en: 'Grilled chicken breast fillet served with grilled vegetables.', de: 'Gegrilltes Hähnchenbrustfilet mit gegrilltem Gemüse.' },
                price: '5 490 Ft',
                allergens: ['']
            },
            {
                name: { hu: 'Filetto Mediterraneo', en: 'Filetto Mediterraneo', de: 'Filetto Mediterraneo' },
                description: { hu: 'Fűszeres sertésszűzérmék szerecsendiós burgonyapürével és paradicsomos jus-szal.', en: 'Seasoned pork tenderloin medallions with nutmeg-flavored mashed potatoes and tomato jus.', de: 'Würzige Schweinefilet-Medaillons auf Muskatnuss-Kartoffelpüree und Tomatenjus.' },
                price: '7 490 Ft',
                allergens: ['dairy', 'nuts']
            },
            {
                name: { hu: 'Costine Italiane', en: 'Costine Italiane', de: 'Costine Italiane' },
                description: { hu: 'Lassan sült olaszos fűszeres sertésbordák burgonyaszeletekkel és fokhagymás aiolival.', en: 'Slow-roasted Italian seasoned pork ribs served with potato wedges and garlic aioli.', de: 'Langsam gegarte italienisch gewürzte Schweinerippen mit Kartoffelspalten und Knoblauch-Aioli.' },
                price: '6 990 Ft',
                allergens: ['']
            },
            {
                name: { hu: 'Flank Steak al Pepe Verde', en: 'Flank Steak al Pepe Verde', de: 'Flank Steak al Pepe Verde' },
                description: { hu: 'Marhahátszín borsos szósszal, burgonyaszeletekkel és jus-szal.', en: 'Flank steak served with potato wedges, green peppercorn sauce, and jus.', de: 'Flanksteak mit Kartoffelspalten, grüner Pfeffersauce und Jus.' },
                price: '9 990 Ft',
                allergens: ['']
            },
            {
                name: { hu: 'Salmone Olandese', en: 'Salmone Olandese', de: 'Salmone Olandese' },
                description: { hu: 'Grillezett lazacsteak hollandi mártással és friss salátával.', en: 'Grilled salmon steak with Hollandaise sauce and fresh salad.', de: 'Gegrilltes Lachssteak mit Sauce Hollandaise und frischem Salat.' },
                price: '8 990 Ft',
                allergens: ['dairy', 'fish']
            }
        ]
    },
    {
        title: { hu: 'Desszert', en: 'Dessert', de: 'Dessert' },
        items: [
            {
                name: { hu: 'Classic Tiramisu', en: 'Classic Tiramisu', de: 'Classic Tiramisu' },
                description: { hu: 'Mascarpone, espresso, kakaó, piskóta ujjacskák.', en: 'Mascarpone, espresso, cocoa, sponge fingers.', de: 'Mascarpone, Espresso, Kakao, Löffelbiskuit.' },
                price: '2 490 Ft',
                allergens: ['gluten', 'dairy', 'eggs']
            },
            {
                name: { hu: 'Tiramisu with Pistachio', en: 'Tiramisu with Pistachio', de: 'Tiramisu mit Pistazien' },
                description: { hu: 'Pisztáciakrém, mascarpone, fehér csokoládé, piskóta ujjacskák.', en: 'Pistachio cream, mascarpone, white chocolate, sponge fingers.', de: 'Pistaziencreme, Mascarpone, weiße Schokolade, Löffelbiskuit.' },
                price: '2 890 Ft',
                allergens: ['gluten', 'dairy', 'eggs', 'nuts']
            },
            {
                name: { hu: 'Chocolate Souffle with Vanilla ice cream', en: 'Chocolate Souffle with Vanilla ice cream', de: 'Schokoladen-Soufflé mit Vanilleeis' },
                description: { hu: 'Forró csokoládés soufflé vaníliafagylalttal.', en: 'Hot chocolate souffle with vanilla ice cream.', de: 'Heißes Schokoladen-Soufflé mit Vanilleeis.' },
                price: '2 490 Ft',
                allergens: ['gluten', 'dairy']
            }
        ]
    },
    {
        title: { hu: 'Üdítők', en: 'Soft Drinks', de: 'Erfrischungsgetränke' },
        items: [
            {
                name: { hu: 'Coca-Cola / Coca-Cola Zero / Sprite / Fanta 0,25 l', en: 'Coca-Cola / Coca-Cola Zero / Sprite / Fanta 0.25 l', de: 'Coca-Cola / Coca-Cola Zero / Sprite / Fanta 0,25 l' },
                description: { hu: '', en: '', de: '' },
                price: '990 Ft',
                allergens: ['']
            },
            {
                name: { hu: 'Kinley Tonic / Ginger Ale 0,25 l', en: 'Kinley Tonic / Ginger Ale 0.25 l', de: 'Kinley Tonic / Ginger Ale 0,25 l' },
                description: { hu: '', en: '', de: '' },
                price: '990 Ft',
                allergens: ['']
            },
            {
                name: { hu: 'NaturAqua still / sparkling 0,5 l', en: 'NaturAqua still / sparkling 0.5 l', de: 'NaturAqua still / sparkling 0,5 l' },
                description: { hu: '', en: '', de: '' },
                price: '890 Ft',
                allergens: ['']
            },
            {
                name: { hu: 'Cappy 0,25 l', en: 'Cappy 0.25 l', de: 'Cappy 0,25 l' },
                description: { hu: 'narancs / alma / őszibarack / multivitamin / eper', en: 'orange / apple / peach / multivitamin / strawberry', de: 'Orange / Apfel / Pfirsich / Multivitamin / Erdbeere' },
                price: '990 Ft',
                allergens: ['']
            },
            {
                name: { hu: 'Fuze Tea Black Tea 0,25 l', en: 'Fuze Tea Black Tea 0.25 l', de: 'Fuze Tea Black Tea 0,25 l' },
                description: { hu: 'citrom / őszibarack hibiszkusz', en: 'lemon / peach hibiscus', de: 'Zitrone / Pfirsich Hibiskus' },
                price: '990 Ft',
                allergens: ['']
            }
        ]
    },
    {
        title: { hu: 'Prémium limonádé', en: 'Premium Lemonade', de: 'Premium-Limonade' },
        items: [
            {
                name: { hu: 'Classic Mint Splash 0,65 l', en: 'Classic Mint Splash 0.65 l', de: 'Classic Mint Splash 0,65 l' },
                description: { hu: 'klasszikus limonádé mentával', en: 'classic lemonade with mint', de: 'klassische Limonade mit Minze' },
                price: '2 490 Ft',
                allergens: ['']
            },
            {
                name: { hu: 'Mango Chili Madness 0,65 l', en: 'Mango Chili Madness 0.65 l', de: 'Mango Chili Madness 0,65 l' },
                description: { hu: 'mango, chili, lime', en: 'Mango, chili, lime', de: 'Mango, Chili, Limette' },
                price: '2 490 Ft',
                allergens: ['']
            },
            {
                name: { hu: 'Green Glow 0,65 l', en: 'Green Glow 0.65 l', de: 'Green Glow 0,65 l' },
                description: { hu: 'zöld alma, lime, menta', en: 'Green apple, lime, mint', de: 'Grüner Apfel, Limette, Minze' },
                price: '2 490 Ft',
                allergens: ['']
            },
            {
                name: { hu: 'Pink Coconut Dream 0,65 l', en: 'Pink Coconut Dream 0.65 l', de: 'Pink Coconut Dream 0,65 l' },
                description: { hu: 'eper, kókusz', en: 'Strawberry, coconut', de: 'Erdbeere, Kokosnuss' },
                price: '2 490 Ft',
                allergens: ['']
            },
            {
                name: { hu: 'Berry Breeze 0,65 l', en: 'Berry Breeze 0.65 l', de: 'Berry Breeze 0,65 l' },
                description: { hu: 'málna, áfonya, citrom', en: 'Raspberry, blueberry, lemon', de: 'Himbeere, Blaubeere, Zitrone' },
                price: '2 490 Ft',
                allergens: ['']
            },
            {
                name: { hu: 'Sunset Peach 0,65 l', en: 'Sunset Peach 0.65 l', de: 'Sunset Peach 0,65 l' },
                description: { hu: 'barack, narancs', en: 'Peach, orange', de: 'Pfirsich, Orange' },
                price: '2 490 Ft',
                allergens: ['']
            },
            {
                name: { hu: 'Tropical Storm 0,65 l', en: 'Tropical Storm 0.65 l', de: 'Tropical Storm 0,65 l' },
                description: { hu: 'ananász, maracuja', en: 'Pineapple, maracuja', de: 'Ananas, Maracuja' },
                price: '2 490 Ft',
                allergens: ['']
            }
        ]
    },
    {
        title: { hu: 'Kávé', en: 'Coffee', de: 'Kaffee' },
        items: [
            { name: { hu: 'Espresso', en: 'Espresso', de: 'Espresso' }, description: { hu: '', en: '', de: '' }, price: '790 Ft', allergens: [''] },
            { name: { hu: 'Americano', en: 'Americano', de: 'Americano' }, description: { hu: '', en: '', de: '' }, price: '890 Ft', allergens: [''] },
            { name: { hu: 'Cappuccino', en: 'Cappuccino', de: 'Cappuccino' }, description: { hu: '', en: '', de: '' }, price: '1 090 Ft', allergens: ['dairy'] },
            { name: { hu: 'Latte Macchiato', en: 'Latte Macchiato', de: 'Latte Macchiato' }, description: { hu: '', en: '', de: '' }, price: '1 290 Ft', allergens: ['dairy'] },
            { name: { hu: 'Ice Coffee', en: 'Ice Coffee', de: 'Ice Coffee' }, description: { hu: '', en: '', de: '' }, price: '1 490 Ft', allergens: ['dairy'] }
        ]
    },
    {
        title: { hu: 'Sör', en: 'Beer', de: 'Bier' },
        items: [
            { name: { hu: 'Dreher Gold 0,3 l', en: 'Dreher Gold 0.3 l', de: 'Dreher Gold 0,3 l' }, description: { hu: '', en: '', de: '' }, price: '990 Ft', allergens: ['gluten'] },
            { name: { hu: 'Dreher Gold 0,5 l', en: 'Dreher Gold 0.5 l', de: 'Dreher Gold 0,5 l' }, description: { hu: '', en: '', de: '' }, price: '1 590 Ft', allergens: ['gluten'] },
            { name: { hu: 'Dreher Sourcherry 0,3 l', en: 'Dreher Sourcherry 0.3 l', de: 'Dreher Sourcherry 0,3 l' }, description: { hu: '', en: '', de: '' }, price: '990 Ft', allergens: ['gluten'] },
            { name: { hu: 'Dreher Sourcherry 0,5 l', en: 'Dreher Sourcherry 0.5 l', de: 'Dreher Sourcherry 0,5 l' }, description: { hu: '', en: '', de: '' }, price: '1 590 Ft', allergens: ['gluten'] },
            { name: { hu: 'Dreher 24 Lemon 0% 0,33 l', en: 'Dreher 24 Lemon 0% 0.33 l', de: 'Dreher 24 Lemon 0% 0,33 l' }, description: { hu: '', en: '', de: '' }, price: '1 390 Ft', allergens: ['gluten'] },
            { name: { hu: 'Peroni 0,33 l', en: 'Peroni 0.33 l', de: 'Peroni 0,33 l' }, description: { hu: '', en: '', de: '' }, price: '1 490 Ft', allergens: ['gluten'] },
            { name: { hu: 'Corona Extra 0,33 l', en: 'Corona Extra 0.33 l', de: 'Corona Extra 0,33 l' }, description: { hu: '', en: '', de: '' }, price: '1 790 Ft', allergens: ['gluten'] }
        ]
    },
    {
        title: { hu: 'Röviditalok', en: 'Shots', de: 'Shots' },
        items: [
            { name: { hu: 'Finlandia Vodka 0,4 cl', en: 'Finlandia Vodka 0.4 cl', de: 'Finlandia Vodka 0,4 cl' }, description: { hu: '', en: '', de: '' }, price: '1 990 Ft', allergens: [''] },
            { name: { hu: 'Jameson 0,4 cl', en: 'Jameson 0.4 cl', de: 'Jameson 0,4 cl' }, description: { hu: '', en: '', de: '' }, price: '1 990 Ft', allergens: [''] },
            { name: { hu: 'Jack Daniel\'s 0,4 cl', en: 'Jack Daniel\'s 0.4 cl', de: 'Jack Daniel\'s 0,4 cl' }, description: { hu: '', en: '', de: '' }, price: '1 990 Ft', allergens: [''] },
            { name: { hu: 'Jägermeister 0,4 cl', en: 'Jägermeister 0.4 cl', de: 'Jägermeister 0,4 cl' }, description: { hu: '', en: '', de: '' }, price: '1 990 Ft', allergens: [''] }
        ]
    },
    {
        title: { hu: 'Fehérbor', en: 'White Wine', de: 'Weißwein' },
        items: [
            { name: { hu: 'Bujdosó Csomó Sauvignon Blanc 2025', en: 'Bujdosó Csomó Sauvignon Blanc 2025', de: 'Bujdosó Csomó Sauvignon Blanc 2025' }, description: { hu: '1,5 dl / 0,7 l', en: '1.5 dl / 0.7 l', de: '1,5 dl / 0,7 l' }, price: '1 490 Ft / 6 990 Ft', allergens: [''] },
            { name: { hu: 'Szarka Pince Mád Furmint 2024', en: 'Szarka Pince Mád Furmint 2024', de: 'Szarka Pince Mád Furmint 2024' }, description: { hu: '1,5 dl / 0,7 l', en: '1.5 dl / 0.7 l', de: '1,5 dl / 0,7 l' }, price: '1 690 Ft / 7 990 Ft', allergens: [''] },
            { name: { hu: 'Etyeki Kúria Chardonnay 2024', en: 'Etyeki Kúria Chardonnay 2024', de: 'Etyeki Kúria Chardonnay 2024' }, description: { hu: '1,5 dl / 0,7 l', en: '1.5 dl / 0.7 l', de: '1,5 dl / 0,7 l' }, price: '1 290 Ft / 5 990 Ft', allergens: [''] }
        ]
    },
    {
        title: { hu: 'Rosébor', en: 'Rosé Wine', de: 'Roséwein' },
        items: [
            { name: { hu: 'Sauska Rosé 2025', en: 'Sauska Rosé 2025', de: 'Sauska Rosé 2025' }, description: { hu: '1,5 dl / 0,7 l', en: '1.5 dl / 0.7 l', de: '1,5 dl / 0,7 l' }, price: '1 590 Ft / 7 490 Ft', allergens: [''] }
        ]
    },
    {
        title: { hu: 'Vörösbor', en: 'Red Wine', de: 'Rotwein' },
        items: [
            { name: { hu: 'Bock Kékfrankos 2023', en: 'Bock Kékfrankos 2023', de: 'Bock Kékfrankos 2023' }, description: { hu: '1,5 dl / 0,7 l', en: '1.5 dl / 0.7 l', de: '1,5 dl / 0,7 l' }, price: '1 490 Ft / 6 990 Ft', allergens: [''] },
            { name: { hu: 'Benedek Pinot Noir 2024', en: 'Benedek Pinot Noir 2024', de: 'Benedek Pinot Noir 2024' }, description: { hu: '1,5 dl / 0,7 l', en: '1.5 dl / 0.7 l', de: '1,5 dl / 0,7 l' }, price: '1 590 Ft / 7 490 Ft', allergens: [''] },
            { name: { hu: 'Bakonyi Villányi Bio Cabernet Franc 2021', en: 'Bakonyi Villányi Bio Cabernet Franc 2021', de: 'Bakonyi Villányi Bio Cabernet Franc 2021' }, description: { hu: '1,5 dl / 0,7 l', en: '1.5 dl / 0.7 l', de: '1,5 dl / 0,7 l' }, price: '1 990 Ft / 9 490 Ft', allergens: [''] }
        ]
    },
    {
        title: { hu: 'Prosecco', en: 'Prosecco', de: 'Prosecco' },
        items: [
            { name: { hu: 'Terredirai Prosecco DOC Brut', en: 'Terredirai Prosecco DOC Brut', de: 'Terredirai Prosecco DOC Brut' }, description: { hu: '1,5 dl / 0,7 l', en: '1.5 dl / 0.7 l', de: '1,5 dl / 0,7 l' }, price: '1 990 Ft / 8 990 Ft', allergens: [''] }
        ]
    }
];

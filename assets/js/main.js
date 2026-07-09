const defaultLanguage = 'hu';
const supportedLanguages = ['hu', 'en'];

const translations = {
    hu: {
        topbar_open: 'Nyitva minden nap 11:30-tól 23:00-ig',
        book_table: 'Asztalfoglalás',
        brand_subtitle: 'Modern comfort food erős hangulattal és izgalmas ízekkel.',
        nav_menu: 'Étlap',
        nav_gallery: 'Galéria',
        nav_about: 'Rólunk',
        nav_contact: 'Kapcsolat',
        hero_eyebrow: 'Séf ajánlata',
        hero_title: 'Merész fogások, hangulatos tér és játékos esték.',
        hero_text: 'Próbáld ki signature menünket tűzön sült ízekkel, krémes desszertekkel és megosztásra készült koktélokkal.',
        hero_menu_btn: 'Étlap megtekintése',
        hero_gallery_btn: 'Galéria megtekintése',
        section_menu_tag: 'Étlap',
        section_menu_title: 'Árlista és kedvencek',
        section_menu_text: 'A ropogós előételektől a gazdag desszertekig minden fogás az asztalodat teszi izgalmassá.',
        allergen_title: 'Allergének',
        allergen_text: 'Minden étel tartalmazhat glutént, tejterméket, dióféléket, szóját, tojást és szezámmagot. Kérjük, értesítsd a felszolgálót ételallergia esetén.',
        section_gallery_tag: 'Galéria',
        section_gallery_title: 'Kézminták és hangulatképek',
        section_gallery_text: 'Éhesen érkezz a válogatott ételek és enteriőr képeink elé.',
        gallery_bolognese: 'Bolognai tészta',
        gallery_carbonara: 'Carbonara tészta',
        gallery_grill: 'Grillezett húsok',
        gallery_steak: 'Marhahús steak',
        gallery_margherita: 'Margherita pizza',
        gallery_food_1: 'Tagliatelle alla Bolognese',
        gallery_food_2: 'Spaghetti alla Carbonara',
        gallery_food_3: 'Pollo al Limone',
        gallery_food_4: 'Flank Steak al Pepe Verde',
        gallery_food_5: 'Classic Tiramisu',
        gallery_food_6: 'Costine Italiane',
        gallery_food_7: 'Salmone Olandese',
        gallery_drink_1: 'Coca-Cola / Coca-Cola Zero',
        gallery_drink_2: 'Kinley Tonic / Ginger Ale',
        gallery_drink_3: 'Classic Mint Splash',
        gallery_drink_4: 'Mango Chili Madness',
        gallery_drink_5: 'Espresso',
        gallery_drink_6: 'Dreher Gold 0.3 l',
        gallery_drink_7: 'Terredirai Prosecco DOC Brut',
        section_about_tag: 'Rólunk',
        section_about_title: 'A történetünk lendületes, ízes és egy kicsit kaotikus.',
        about_paragraph: 'A Reastourant egy késő esti ötletből indult: alakítsuk át a merész comfort foodot vibráló éttermi élménnyé. Friss fogásokat, házi szószokat és megosztható falatokat kínálunk.',
        about_feature_1: 'Nagy adagok barátoknak',
        about_feature_2: 'Mindennapi friss alapanyagok',
        about_feature_3: 'Színes tálalás és hangulat',
        about_quote: '„A legjobb hely baráti estékhez, hangos zenéhez és folyamatosan érkező ízekhez.”',
        about_quote_author: '- Helyi vendég',
        section_contact_tag: 'Kapcsolat',
        section_contact_title: 'Foglalj asztalt vagy küldj gyors üzenetet',
        contact_visit: 'Látogass el hozzánk',
        contact_address: '123 Flavor Street<br>Budapest, HU',
        contact_call: 'Telefon',
        contact_email: 'Email',
        footer_text: '© 2026 Reastourant. Fűszerrel és stílussal készítve.'
    },
    en: {
        topbar_open: 'Open daily 11:30 AM – 11:00 PM',
        book_table: 'Book a Table',
        brand_subtitle: 'Modern comfort food with a loud vibe and tasty chaos.',
        nav_menu: 'Menu',
        nav_gallery: 'Gallery',
        nav_about: 'About',
        nav_contact: 'Contact',
        hero_eyebrow: "Chef's Special",
        hero_title: 'Bold plates, bright spaces, and playful nights.',
        hero_text: 'Try our signature menu with flame-grilled flavors, creamy desserts, and cocktails made to share.',
        hero_menu_btn: 'See Menu',
        hero_gallery_btn: 'View Gallery',
        section_menu_tag: 'Menu',
        section_menu_title: 'Price list and favorites',
        section_menu_text: 'From crispy starters to indulgent desserts, every dish is designed to make your table buzz.',
        allergen_title: 'Allergens',
        allergen_text: 'All dishes may contain traces of gluten, dairy, nuts, soy, eggs, and sesame. Please inform your server about allergies before ordering.',
        section_gallery_tag: 'Gallery',
        section_gallery_title: 'Sample plates and vibe shots',
        section_gallery_text: 'Get hungry before you arrive with our curated food and interior images.',
        gallery_bolognese: 'Bolognese pasta',
        gallery_carbonara: 'Carbonara pasta',
        gallery_grill: 'Grilled mixed meats',
        gallery_steak: 'Sirloin steak',
        gallery_margherita: 'Margherita pizza',
        gallery_food_1: 'Tagliatelle alla Bolognese',
        gallery_food_2: 'Spaghetti alla Carbonara',
        gallery_food_3: 'Pollo al Limone',
        gallery_food_4: 'Flank Steak al Pepe Verde',
        gallery_food_5: 'Classic Tiramisu',
        gallery_food_6: 'Costine Italiane',
        gallery_food_7: 'Salmone Olandese',
        gallery_drink_1: 'Coca-Cola / Coca-Cola Zero',
        gallery_drink_2: 'Kinley Tonic / Ginger Ale',
        gallery_drink_3: 'Classic Mint Splash',
        gallery_drink_4: 'Mango Chili Madness',
        gallery_drink_5: 'Espresso',
        gallery_drink_6: 'Dreher Gold 0.3 l',
        gallery_drink_7: 'Terredirai Prosecco DOC Brut',
        section_about_tag: 'About Us',
        section_about_title: 'Our story is loud, tasty, and a little chaotic.',
        about_paragraph: 'Reastourant began as a late-night idea: turn bold comfort food into a vibrant dining playground. We serve vibrant plates, house-made sauces, and shareable cravings.',
        about_feature_1: 'Big plates for friends',
        about_feature_2: 'Fresh ingredients every day',
        about_feature_3: 'Colorful presentation and atmosphere',
        about_quote: '"The best place for relaxed nights with friends, loud music, and dishes that keep coming."',
        about_quote_author: '- Local food fan',
        section_contact_tag: 'Contact',
        section_contact_title: 'Reserve a table or send a quick message',
        contact_visit: 'Visit us',
        contact_address: '123 Flavor Street<br>Budapest, HU',
        contact_call: 'Call',
        contact_email: 'Email',
        footer_text: '© 2026 Reastourant. Made with spice and style.'
    }
};

const menuContainer = document.getElementById('menu-items');
const languageButtons = document.querySelectorAll('.lang-btn');

const getLang = () => {
    const storedLang = localStorage.getItem('siteLanguage');
    return supportedLanguages.includes(storedLang) ? storedLang : defaultLanguage;
};

const getTranslatedText = (source, lang) => {
    if (typeof source === 'object' && source !== null) {
        return source[lang] || source.en || Object.values(source)[0] || '';
    }
    return source || '';
};

const translateStaticText = (lang) => {
    document.documentElement.lang = lang;

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach((element) => {
        const key = element.dataset.i18n;
        const text = translations[lang] && translations[lang][key] ? translations[lang][key] : translations.en[key] || element.textContent;
        element.innerHTML = text;
    });

    languageButtons.forEach((button) => {
        button.classList.toggle('active', button.dataset.lang === lang);
    });
};

const renderMenu = (lang) => {
    if (!menuContainer) return;

    menuContainer.innerHTML = '';

    menuSections.forEach((section) => {
        const category = document.createElement('div');
        category.className = 'menu-category';

        const title = document.createElement('h3');
        title.textContent = getTranslatedText(section.title, lang);
        category.appendChild(title);

        const list = document.createElement('div');
        list.className = 'menu-category-list';

        section.items.forEach((item) => {
            const itemCard = document.createElement('div');
            itemCard.className = 'menu-item';

            const header = document.createElement('div');
            header.className = 'menu-item-header';
            header.innerHTML = `<h4 class="menu-item-title">${getTranslatedText(item.name, lang)}</h4><div class="menu-item-price">${item.price}</div>`;

            itemCard.appendChild(header);

            const descriptionText = getTranslatedText(item.description, lang);
            if (descriptionText) {
                const description = document.createElement('p');
                description.className = 'menu-item-description';
                description.textContent = descriptionText;
                itemCard.appendChild(description);
            }

            if (item.allergens && item.allergens.filter(Boolean).length) {
                const allergenRow = document.createElement('p');
                allergenRow.className = 'menu-item-allergens';
                item.allergens.filter(Boolean).forEach((allergen) => {
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
};

const setLanguage = (lang) => {
    if (!supportedLanguages.includes(lang)) {
        lang = defaultLanguage;
    }

    translateStaticText(lang);
    renderMenu(lang);
    localStorage.setItem('siteLanguage', lang);
};

languageButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const selectedLanguage = button.dataset.lang;
        setLanguage(selectedLanguage);
    });
});

setLanguage(getLang());

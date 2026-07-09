const defaultLanguage = 'hu';
const supportedLanguages = ['hu', 'en'];

const translations = {
    hu: {
        topbar_open: 'Nyitva minden nap 12:00–24:00',
        book_table: 'Asztalfoglalás',
        brand_subtitle: 'Modern pizza és grill fogások elegáns tálalásban.',
        nav_menu: 'Étlap',
        nav_gallery: 'Galéria',
        nav_about: 'Rólunk',
        nav_contact: 'Kapcsolat',
        hero_eyebrow: 'Signature élmény',
        hero_title: 'Elegáns étkezés a Balaton partján.',
        hero_text: 'Fedezd fel gondosan összeállított ízeket, prémium borokat és kézműves koktélokat.',
        hero_menu_btn: 'Étlap megtekintése',
        hero_gallery_btn: 'Galéria megtekintése',
        section_menu_tag: 'Étlap',
        section_menu_title: 'Gondosan válogatott étlap',
        section_menu_text: 'A gondosan összeállított előételektől a kifinomult desszertekig minden fogás elvarázsol.',
        allergen_title: 'Allergének',
        allergen_text: 'Minden étel tartalmazhat glutént, tejterméket, dióféléket, szóját, tojást és szezámmagot. Kérjük, értesítsd a felszolgálót ételallergia esetén.',
        section_gallery_tag: 'Galéria',
        section_gallery_title: 'Kézminták és hangulatképek',
        section_gallery_text: 'Ismerd meg étlapunk elegáns fogásait és ital pillanatait.',
        feature_1_title: 'Friss alapanyagok',
        feature_1_text: 'Napi piacról válogatott finomságok, házi szószok és helyben sült kenyerek.',
        feature_2_title: 'Signature fogások',
        feature_2_text: 'Karakteres burger, gazdag sültkrumpli, csípős csirkeszárnyak és krémes tálak.',
        feature_3_title: 'Éjféli hangulat',
        feature_3_text: 'Kényeztető falatok, finom italok és laza balatoni tér.',
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
        section_about_title: 'Történetünk elegáns, ínyenc és balatoni hangulatú.',
        about_paragraph: 'Az Aioli Pizza&Grill egy tóparti ötletből született: emeljük magasabb szintre a merész comfort food élményt. Gondosan tervezett fogásokat, házi szószokat és megosztható ízkalandokat kínálunk.',
        about_feature_1: 'Elegáns tányérok közös estékhez',
        about_feature_2: 'Mindennapi friss alapanyagok',
        about_feature_3: 'Kifinomult tálalás és hangulat',
        about_quote: '„A nyugodt balatoni hangulat és a finom ízek tökéletes kombinációja.”',
        about_quote_author: '- Vendégünk',
        section_contact_tag: 'Kapcsolat',
        section_contact_title: 'Foglalj asztalt vagy küldj gyors üzenetet',
        contact_visit: 'Látogass el hozzánk',
        contact_address: 'Siófok, Petőfi sétány 3-5',
        contact_call: 'Telefon',
        contact_email: 'Email',
        contact_email_address: 'aioili.siofok.hr@gmail.com',
        footer_text: '© 2026 Aioli Pizza&Grill. Elegáns balatoni élmény.'
    },
    en: {
        topbar_open: 'Open daily 12:00 – 24:00',
        book_table: 'Book a Table',
        brand_subtitle: 'Modern pizza and grill dishes styled for lakeside dining.',
        nav_menu: 'Menu',
        nav_gallery: 'Gallery',
        nav_about: 'About',
        nav_contact: 'Contact',
        hero_eyebrow: "Chef's Special",
        hero_title: 'Elegant dining on the shores of Lake Balaton.',
        hero_text: 'Discover a refined menu of classic plates, premium wines, and handcrafted cocktails.',
        hero_menu_btn: 'Explore Menu',
        hero_gallery_btn: 'Browse Gallery',
        section_menu_tag: 'Menu',
        section_menu_title: 'A curated menu selection',
        section_menu_text: 'From thoughtful starters to luxurious desserts, each dish is crafted to impress.',
        allergen_title: 'Allergens',
        allergen_text: 'All dishes may contain traces of gluten, dairy, nuts, soy, eggs, and sesame. Please inform your server about allergies before ordering.',
        section_gallery_tag: 'Gallery',
        section_gallery_title: 'Sample plates and vibe shots',
        section_gallery_text: 'Experience our most elegant dishes and curated drink moments.',
        feature_1_title: 'Fresh ingredients',
        feature_1_text: 'Daily market favorites, house sauces, and locally baked breads.',
        feature_2_title: 'Signature dishes',
        feature_2_text: 'Bold burgers, loaded fries, spicy wings, and creamy bowls.',
        feature_3_title: 'Evening atmosphere',
        feature_3_text: 'Relaxed lakeside evenings with refined bites and signature drinks.',
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
        section_about_title: 'Our story is refined, delicious, and lakeside inspired.',
        about_paragraph: 'Aioli Pizza&Grill began as a lakeside vision: elevate bold comfort food with refined hospitality. We present thoughtful plates, house-made sauces, and convivial sharing experiences.',
        about_feature_1: 'Refined plates for shared evenings',
        about_feature_2: 'Fresh market ingredients daily',
        about_feature_3: 'Polished presentation and soothing atmosphere',
        about_quote: '"A calm, refined setting for friends, memorable food, and smooth evenings."',
        about_quote_author: '- Local guest',
        section_contact_tag: 'Contact',
        section_contact_title: 'Reserve a table or send a quick message',
        contact_visit: 'Visit us',
        contact_address: 'Siófok, Petőfi sétány 3-5',
        contact_call: 'Call',
        contact_email: 'Email',
        contact_email_address: 'aioili.siofok.hr@gmail.com',
        footer_text: '© 2026 Aioli Pizza&Grill. Elegant lakeside dining.'
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

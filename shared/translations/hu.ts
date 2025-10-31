export const hu = {
  navigations: {
    features: "Funkciók",
    how: "Hogyan működik",
    pricing: "Árak",
    getAlerts: "Értesítések fogadása",
    waitlist: "Várólist",
    faq: "GYIK",
    login: "Bejelentkezés",
    getStarted: "Kezdés",
    subscribers: "Feliratkozók",
    theme: "Téma",
    language: "Nyelv",
    myAlerts: "Értesítéseim",
    profile: "Profil",
    settings: "Beállítások",
    logout: "Kijelentkezés",
    signUp: "Regisztráció",
  },
  about: {
    description:
      "Forradalmasítjuk azt, ahogyan az emberek megtalálják a tökéletes használt autójukat, hiszen a fejlett megfigyelési technológiát mindenki számára elérhetővé tesszük.",
    join: {
      cta: "Tekintse meg a nyitott pozíciókat",
      description:
        "Folyamatosan keressük azokat a tehetséges szakembereket, akiket szenvedéllyel tölt el a technológia és az autóvásárlási élmény forradalmasítása. Nézd meg aktuális állásajánlatainkat, és csatlakozz hozzánk küldetésünkben!",
      heading: "Csatlakozz a csapatunkhoz",
    },
    meta: {
      description:
        "Ismerje meg az AMIQUUS-t, küldetésünket, amellyel forradalmasítjuk a használt autók vásárlását, valamint a csapatot, amely intelligens autóhirdetés-figyelő szolgáltatásunk mögött áll.",
      title: "Rólunk | Amiquus - Autóhirdetés-figyelő szolgáltatás",
    },
    mission: {
      heading: "Küldetésünk",
      items: {
        0: {
          description:
            "Felejtsd el a folyamatos frissítgetést több weboldalon – automatizáld a keresést, és kapj időben értesítéseket.",
          title: "Időt takarít meg",
        },
        1: {
          description:
            "Legyen Ön az első, aki értesül egy remek ajánlatról, így előnyt szerezhet egy olyan versenypiacon, ahol az időzítés mindent jelent.",
          title: "Találjon jobb ajánlatokat",
        },
        2: {
          description:
            "Hozzon megalapozott döntéseket átfogó monitorozással több megbízható autóhirdetési platformon keresztül.",
          title: "Vásároljon magabiztosan",
        },
      },
    },
    questions: {
      description:
        "Tudjon meg többet arról, hogyan működik szolgáltatásunk, tekintse meg az árakat, vagy lépjen kapcsolatba ügyfélszolgálatunkkal.",
      heading: "Van kérdése?",
      links: {
        faq: "Gyakori kérdések megtekintése",
        pricing: "Árak megtekintése",
        support: "Lépjen kapcsolatba az ügyfélszolgálattal",
      },
    },
    story: {
      heading: "Történetünk",
      paragraphs: {
        0: "Az AMIQUUS 2023-ban indult, amikor alapítónk, Alex hónapokat töltött autóhirdetési oldalak frissítésével, hogy megtaláljon egy bizonyos ritka modellt jó áron. Miután több lehetőségről is lemaradt a késve érkező értesítések miatt, rájött, hogy ennek van jobb módja is.",
        1: "Alex egy kis fejlesztői és autórajongó csapattal dolgozva egy olyan monitorozó rendszert épített, amely egyszerre több weboldalon tudta figyelni a hirdetéseket, és azonnali értesítést küldött, amikor megfelelő találat jelent meg.",
        2: "Amiquus egy személyes projektként indult, ami gyorsan felkeltette barátaink és családtagjaink érdeklődését, és 2025 elejére mindenki számára elérhető szolgáltatássá vált. Ma már országszerte segítünk autóvásárlóknak időt spórolni és jobb ajánlatokat találni intelligens megfigyelő technológiánkkal.",
      },
    },
    team: {
      heading: "Csapatunk",
      members: {
        0: {
          bio: "Egykori szoftvermérnök, aki szenvedéllyel rajong az autókért és az innovatív megoldások fejlesztéséért.",
          name: "Alex Morgan, így működik",
          role: "Alapító és vezérigazgató",
        },
        1: {
          bio: "Adattudományi szakértő, aki webes adatgyűjtésre és információ-visszakereső rendszerekre specializálódott.",
          name: "Sarah Chen",
          role: "Műszaki igazgató",
        },
        2: {
          bio: "Full-stack fejlesztő, aki nagy teljesítményű értesítési rendszerek építésében jártas.",
          name: "Marcus Lee",
          role: "Vezető fejlesztő",
        },
        3: {
          bio: "Egykori autóértékesítő szakember, aki elkötelezetten segít ügyfeleinek megtalálni a tökéletes járművet.",
          name: "Elena Rodriguez",
          role: "Ügyfélsiker",
        },
      },
    },
    title: "Az Amiquusról",
  },
  alertSchema: {
    errors: {
      carbrand: "Az autómárka megadása kötelező",
      carmodel: "Az autó modellje kötelező",
      facebookmarketplaceurl:
        "A Facebook Marketplace URL megadása kötelező, ha a Facebook ki van választva.",
      fueltype: "Üzemanyagtípus megadása kötelező",
      maxkilometers: "A maximális kilométerszámnak számnak kell lennie.",
      notificationlanguage: "Az értesítési nyelv megadása kötelező.",
      pricemax: "A maximális árnak számnak kell lennie",
      pricemin: "A minimális árnak számnak kell lennie",
      telegramchatid: "A Telegram csevegés azonosító megadása kötelező.",
      telegramtoken: "Telegram bot token megadása kötelező",
      telegramusername: "A Telegram felhasználónév megadása kötelező",
      websitesselected: "Legalább egy weboldalt ki kell választani.",
      yearmax: "A maximális évnek érvényes évnek kell lennie.",
      yearmin: "A minimális évnek érvényes évnek kell lennie.",
    },
  },
  carDetails: {
    actions: {
      continue: "Folytatás",
      previous: "Előző",
    },
    description:
      "Adja meg a keresett autó adatait! Minden mező kitöltése opcionális – hagyja üresen bármelyiket, hogy szélesebb találati listát kapjon.",
    errors: {
      carbrand: "Az autómárka megadása kötelező",
      carmodel: "Az autómodell megadása kötelező",
      fueltype: "Üzemanyagtípus megadása kötelező",
      maxkilometers: "A maximális kilométerszámnak számnak kell lennie.",
      pricemax: "A maximális árnak számnak kell lennie.",
      pricemin: "A minimális árnak számnak kell lennie.",
      yearmax: "A maximális évnek érvényes évnek kell lennie.",
      yearmin: "A minimális évnek érvényes évnek kell lennie.",
    },
    heading: "Autó részletei",
    labels: {
      carbrand: "Autómárka",
      carmodel: "Autómodell",
      fueltype: "Üzemanyag típusa",
      maxkilometers: "Maximális kilométer",
      pricemax: "Maximális ár",
      pricemin: "Minimális ár",
      yearmax: "Maximális év",
      yearmin: "Minimális év",
    },
    options: {
      nomodelsavailable: "Nincs elérhető modell",
    },
    placeholders: {
      carbrand: "Válassza ki az autómárkát",
      carmodel: "Válassza ki az autómodellt",
      carmodeldisabled: "Először válassza ki az autómárkát",
      fueltype: "Válassza ki az üzemanyagtípust",
      maxkilometers: "Adja meg a maximális kilométerszámot",
      pricemax: "Adja meg a legmagasabb árat",
      pricemin: "Adja meg a minimum árat",
      yearmax: "Adja meg a maximális évet",
      yearmin: "Adja meg a minimális évet",
    },
  },
  dashboardPayment: {
    add: "Fizetési mód hozzáadása",
    description:
      "Adjon hozzá új hitel- vagy bankkártyát az előfizetési fizetésekhez.",
    errormessage: "Váratlan hiba történt",
    errortitle: "Hiba a fizetési mód hozzáadásakor",
    initerror: {
      description: "Nem sikerült inicializálni a fizetési beállítást",
      title: "Hiba",
    },
    processing: "Feldolgozás...",
  },
  dashboardPaymentMethodCard: {
    cancel: "Mégse",
    confirmremove: "Kártya eltávolítása",
    default: "Alapértelmezett",
    expires: "Lejár",
    remove: "Eltávolítás",
    removedescription:
      "Biztosan törölni szeretné a(z) {{brand}} kártyáját, amelynek utolsó négy számjegye: {{last4}}?",
    removetitle: "Fizetési mód eltávolítása",
    removewarning:
      "Ez az alapértelmezett fizetési módod, és annak eltávolítása hatással lehet az aktív előfizetéseidre.",
    setasdefault: "Beállítás alapértelmezettként",
    setdefaultdescription:
      "Szeretné beállítani a(z) {{brand}} kártyát, amelynek utolsó négy számjegye {{last4}}, alapértelmezett fizetési módszerként? Ezt a kártyát fogjuk használni minden jövőbeli előfizetési fizetéshez.",
    setdefaulttitle: "Alapértelmezett fizetési mód beállítása",
  },
  dashboardSubscriptionCard: {
    cancelalert: "Riasztás törlése",
    canceldescription:
      "Biztosan törölni szeretné az autóriasztást erre: {{brand}} {{model}}? Ezzel minden értesítés leáll, és ha újra szeretné figyelni ezt az autót, új riasztást kell beállítania.",
    canceltitle: "Autóriasztás lemondása",
    confirmcancel: "Riasztás törlése",
    edit: "Szerkesztés",
    keepmyalert: "Értesítésem megtartása",
    language: "Nyelv",
    price: "Ár",
    pricerange: "Ár",
    updates: "Frissítések",
    websites: "Weboldalak",
    years: "Évek",
  },
  faq: {
    contactlink: "Lépjen kapcsolatba ügyfélszolgálatunkkal",
    contactprompt: "Még mindig van kérdése?",
    questions: {
      0: {
        answer:
          "Az értesítések gyorsasága az általad választott frissítési gyakoriságtól függ. Az alapértelmezett óránkénti csomaggal az új hirdetés megjelenése után egy órán belül értesítést kapsz. Ha szinte valós idejű értesítéseket szeretnél (néhány percen belül a közzététel után), válthatsz a gyakoribb frissítési csomagjainkra.",
        question:
          "Milyen gyorsan kapok értesítést, miután új hirdetés kerül fel az oldalra?",
      },
      1: {
        answer:
          "Igen! Több keresési profilt is létrehozhatsz különböző feltételekkel. Minden profil külön előfizetésnek számít, de mindet egyetlen fiókból kezelheted. Ez tökéletes megoldás, ha egyszerre többféle járművet keresel.",
        question: "Nyomon tudok követni egyszerre többféle autót?",
      },
      2: {
        answer:
          "Jelenleg támogatjuk a legnépszerűbb autóhirdetési platformokat, beleértve az AutoTrader, CarGurus, Cars.com és Facebook Marketplace oldalakat is. Folyamatosan bővítjük lefedettségünket, hogy a felhasználói igények és a regionális népszerűség alapján további weboldalakat is bevonjunk.",
        question: "Milyen weboldalakat támogat jelenleg?",
      },
      3: {
        answer:
          "Egyáltalán nem! Lépésről lépésre haladó útmutatókat biztosítunk szöveges és videós formában is, hogy könnyedén beállíthasd a Telegram botot. A legtöbb felhasználó kevesebb mint 5 perc alatt elvégzi a beállítást, még technikai előképzettség nélkül is.",
        question:
          "Szükségem van technikai tudásra a Telegram bot használatához?",
      },
      4: {
        answer:
          "Igen, a keresési feltételeidet bármikor módosíthatod a fiókod vezérlőpultján. A változtatások azonnal életbe lépnek, és az értesítéseid ennek megfelelően frissülnek, a szolgáltatás megszakítása nélkül.",
        question:
          "Meg tudom változtatni a keresési feltételeimet az előfizetés beállítása után?",
      },
      5: {
        answer:
          "Előfizetését bármikor lemondhatja a fiókja vezérlőpultján. Lépjen a „Előfizetések” menüpontra, válassza ki a lemondani kívánt előfizetést, majd kattintson az „Előfizetés lemondása” gombra. Szolgáltatása az aktuális számlázási időszak végéig elérhető marad.",
        question: "Hogyan mondhatom le az előfizetésemet?",
      },
    },
    subtitle:
      "Találd meg a leggyakoribb kérdésekre adott válaszokat szolgáltatásunkkal kapcsolatban.",
    title: "Gyakran ismételt kérdések",
  },
  faqs: {
    general: {
      heading: "Általános kérdések",
      howitworks: {
        answer: {
          0: "Beállítod a keresési feltételeidet (márka, modell, árkategória stb.)",
          1: "Ön választja ki, hogy mely weboldalakat szeretné figyelni.",
          2: "Összekapcsolod a Telegram-fiókodat az értesítésekhez",
          3: "Rendszerünk folyamatosan figyeli az Ön által kiválasztott weboldalakat az új hirdetésekért.",
          4: "Amikor megjelenik egy megfelelő autó, azonnali Telegram értesítést kapsz minden részlettel és egy közvetlen hivatkozással.",
        },
        question: "Hogyan működik?",
      },
      whatis: {
        answer:
          "Amiquus egy olyan szolgáltatás, amely több autóhirdetési weboldalt figyel, hogy megtalálja azokat a járműveket, amelyek megfelelnek az Ön egyedi keresési feltételeinek. Amint megjelenik egy megfelelő hirdetés, azonnali értesítést kap Telegramon keresztül, így Ön az elsők között lehet, aki felveszi a kapcsolatot az eladóval, és megszerezheti a legjobb ajánlatokat.",
        question: "Mi az az Amiquus?",
      },
      whichwebsites: {
        answerintro:
          "Jelenleg a következő főbb autóhirdetési platformokat figyeljük:",
        list: {
          0: "AutoTrader",
          1: "Cars.com",
          2: "AMIQUUS",
          3: "TrueCar",
          4: "Facebook Marketplace (URL-en keresztül)",
          5: "Craigslist",
          6: "eBay Motors",
        },
        outro:
          "Folyamatosan bővítjük a platformok körét, hogy a lehető legátfogóbb lefedettséget biztosítsuk.",
        question: "Mely autóhirdetési oldalakat figyeli?",
      },
    },
    metaDescription:
      "Találd meg a válaszokat a leggyakoribb kérdésekre az AMIQUUS autóhirdetés-figyelő szolgáltatásáról, előfizetésekről, értesítések beállításáról és egyebekről.",
    metaTitle: "Gyakran Ismételt Kérdések | Amiquus",
    subscription: {
      cancel: {
        note: "Az előfizetésed aktív marad a jelenlegi számlázási időszak végéig.",
        question: "Hogyan mondhatom le az előfizetésemet?",
        steps: {
          0: "Jelentkezzen be fiókjába",
          1: "Navigáljon a „Profil” oldalra",
          2: "Válassza a „Előfizetések” fület",
          3: "Kattintson a „Előfizetés lemondása” gombra annál az előfizetésnél, amelyet le szeretne mondani.",
        },
        stepsintro: "Előfizetését bármikor lemondhatja a fiók profiloldalán.",
      },
      cost: {
        answer: {
          0: "Áraink már havi 79,99 USD-tól elérhetők, amely egy weboldal 6 óránkénti frissítésével járó monitorozását tartalmazza. Minden további weboldal havi 4,99 USD-ba kerül. A frissítési gyakoriságot is növelheti a gyorsabb értesítésekért.",
          1: "A részletes árakért kérjük, tekintse meg az árak szekciót a kezdőlapon.",
        },
        question: "Mennyibe kerül az előfizetés?",
      },
      heading: "Előfizetéssel kapcsolatos kérdések",
      limit: {
        intro:
          "Szolgáltatásunkat 30 aktív előfizetőre korlátozzuk, hogy biztosítsuk:",
        list: {
          0: "A legmagasabb színvonalú szolgáltatás és adatok pontossága",
          1: "Személyre szabott támogatás minden előfizetőnek",
          2: "Gyorsabb értesítéskézbesítés a csúcsidőszakokban",
          3: "Etikus adatgyűjtés, amely nem terheli túl a célzott weboldalakat",
        },
        outro:
          "Ha elértük a kapacitást, csatlakozhatsz a várólistánkhoz, hogy értesítést kapj, amikor felszabadul egy hely.",
        question: "Miért van korlátozva a feliratkozók száma?",
      },
      multiple: {
        answer:
          "Igen, egyetlen fiók alatt több előfizetést is létrehozhatsz. Minden előfizetés különböző autómodelleket, márkákat vagy árkategóriákat követhet. Ez különösen hasznos, ha több járművet keresel, vagy barátoknak és családtagoknak segítesz autót találni.",
        question: "Lehet több előfizetésem különböző autómodellekre?",
      },
    },
    subtitle:
      "Találjon gyors válaszokat a gyakran ismételt kérdésekre autóhirdetés-figyelő szolgáltatásunkkal kapcsolatban",
    support: {
      button: "Lépjen kapcsolatba az ügyfélszolgálattal",
      description:
        "Ha nem találta meg a kérdésére a választ, ügyfélszolgálatunk készséggel segít Önnek!",
      heading: "Még mindig van kérdése?",
    },
    technical: {
      frequency: {
        intro: "Az értesítések gyakorisága attól függ, hogy:",
        list: {
          0: "Az Ön által választott frissítési gyakorisági csomag (6 óránkéntitől 30 percenkéntiig)",
          1: "Hány új hirdetés felel meg a keresési feltételeidnek?",
          2: "Mennyire aktív a piac az Ön által kiválasztott márka/modell esetében",
        },
        outro:
          "Csak akkor kapsz értesítést, ha új, a keresési feltételeidnek megfelelő hirdetések jelennek meg.",
        question: "Milyen gyakran fogok értesítéseket kapni?",
      },
      heading: "Műszaki kérdések",
      privacy: {
        intro:
          "Az adatvédelem kiemelten fontos számunkra, ezért a következő intézkedéseket alkalmazzuk:",
        list: {
          0: "Titkosított adatok átvitel közben és tároláskor",
          1: "Biztonságos fizetés Stripe-on keresztül",
          2: "Nincs adatmegosztás harmadik féllel",
          3: "Adatainak lekérését vagy törlését bármikor kérheti",
        },
        outro:
          "Olvassa el teljes Adatvédelmi szabályzatunkat további információkért.",
        question: "Hogyan védik a személyes adataimat?",
      },
      telegram: {
        note: "Részletes, lépésről lépésre vezető útmutató képernyőképekkel a feliratkozás beállítása során elérhető.",
        question: "Hogyan állíthatom be a Telegram értesítéseket?",
        steps: {
          0: "Hozz létre egy Telegram botot a BotFather segítségével (a beállítás során részletes útmutatót kapsz)",
          1: "Másold ki a bot tokenedet a BotFathertől",
          2: "Kezdje el a beszélgetést a botjával",
          3: "Szerezze meg a chat-azonosítóját (a beállítás során részletes útmutatót kap)",
          4: "Add meg a bot tokenedet és a chat azonosítódat az AMIQUUS előfizetésed beállításaiban.",
          5: "Tesztelje az értesítési beállítását a `Tesztüzenet küldése` gombbal",
        },
        stepsintro: "A Telegram-értesítések beállításához:",
      },
    },
    title: "Gyakran ismételt kérdések",
  },
  features: {
    account: {
      description:
        "Kezeld egyszerre több keresési profilt, és módosítsd előfizetési beállításaidat néhány kattintással.",
      title: "Egyszerű fiókkezelés",
    },
    filters: {
      description:
        "Állítson be pontos keresési feltételeket, beleértve a márkát, modellt, évjáratot, futott kilométert és árkategóriát, hogy megtalálja pontosan azt, amit keres.",
      title: "Egyedi szűrők",
    },
    frequency: {
      description:
        "Válaszd ki, milyen gyakran ellenőrizzük az új hirdetéseket, az óránkénti frissítésektől a valós idejű figyelésig.",
      title: "Testreszabható frekvencia",
    },
    heading: "Miért válassza az Amiquus-t?",
    languages: {
      en: "English",
      sl: "Slovenščina",
      hr: "Hrvatski",
      es: "Español",
      fr: "Français",
      de: "Deutsch",
      ar: "العربية",
      pt: "Português",
      it: "Italiano",
      nl: "Nederlands",
      sv: "Svenska",
      da: "Dansk",
      nb: "Norsk",
      fi: "Suomi",
      hi: "हिन्दी",
      ru: "Русский",
      tr: "Türkçe",
      cs: "Čeština",
      pl: "Polski",
      sk: "Slovenčina",
      sq: "Shqip",
      hy: "Հայերեն",
      az: "Azərbaycan dili",
      bn: "বাংলা",
      be: "Беларуская",
      bs: "Bosanski",
      bg: "Български",
      el: "Ελληνικά",
      et: "Eesti",
      ka: "ქართული",
      hu: "Magyar",
      he: "עברית",
      ja: "日本語",
      ko: "한국어",
      lv: "Latviešu",
      lt: "Lietuvių",
      ms: "Bahasa Melayu",
      ro: "Română",
      mn: "Монгол",
      sr: "Српски",
      my: "မြန်မာစာ",
      mk: "Македонски",
      th: "ไทย",
      uk: "Українська",
      vi: "Tiếng Việt",
    },
    multisite: {
      description:
        "Több autóhirdetési weboldalt figyelhetsz egyszerre, anélkül hogy mindegyiket külön-külön kellene ellenőrizned.",
      title: "Többoldalas követés",
    },
    notifications: {
      description:
        "Azonnali értesítéseket kapsz Telegramon, amikor a keresési feltételeidnek megfelelő autó felkerül az eladásra.",
      title: "Azonnali értesítések",
    },
    subheading:
      "Takarítson meg időt, és soha ne maradjon le a tökéletes autójáról az AMIQUUS automatizált követési szolgáltatásával!",
  },
  footer: {
    about: "Rólunk",
    blog: "Blog",
    branddescription:
      "Személyes asszisztensed a tökéletes használt autó ajánlat megtalálásához a legjobb időben.",
    brandtitle: "Amiquus",
    careers: "Karrier",
    contact: "Kapcsolat",
    cookies: "Süti szabályzat",
    copyright: "Minden jog fenntartva.",
    email: "support@amiquus.com",
    faq: "GYIK",
    features: "Funkciók",
    gdpr: "GDPR-megfelelőség",
    getstarted: "Kezdés",
    legal: "Jogi",
    pricing: "Árak",
    privacy: "Adatvédelmi tájékoztató",
    quicklinks: "Gyors linkek",
    support: "Támogatás",
    telegram: "Lépjen velünk kapcsolatba Telegramon",
    terms: "Szolgáltatási feltételek",
  },
  hero: {
    button1: "Állítsa be az értesítéseit",
    button2: "Nézd meg, hogyan működik",
    label: "Használt autóhirdetések nyomon követése valós időben",
    subtitle:
      "Amiquus azonnal értesít, amint álmaid autója elérhetővé válik több autóhirdetési oldalon. Értesítéseket kapsz Telegramon, amint megtaláljuk a megfelelő találatot.",
    title: "Soha ne maradj le a tökéletes autóajánlatról!",
    trustindicators: {
      cancelanytime: "Bármikor lemondhatja",
      nosetup: "Nincs szükség telepítésre",
      realtime: "Valós idejű értesítések",
      websites: "Több mint 15 weboldal követése",
    },
  },
  howItWorks: {
    features: {
      0: "Kövesd egyszerre több mint 15 autóhirdetési weboldal ajánlatait",
      1: "Testreszabható keresési feltételek fejlett szűrési lehetőségekkel",
      2: "Valós idejű értesítések Telegramon keresztül",
      3: "Automatikus árértesítő és új hirdetés figyelmeztetések",
      4: "Egyszerű telepítési folyamat, amely kevesebb mint 5 percet vesz igénybe",
    },
    notificationmockup1: {
      description:
        "BMW 3-as sorozat, 2019, $32,500 – Most került fel az AutoTraderre",
      title: "Új találat érkezett!",
    },
    notificationmockup2: {
      description:
        "Mercedes C-osztály, 2020, 48 000 km – Az ár 2 000 dollárral csökkent",
      title: "Telegram értesítés",
    },
    setalerts: "Állítsa be az értesítéseit",
    steps: {
      findcar: {
        description:
          "Értesülj elsőként az új hirdetésekről, és csapj le a legjobb ajánlatokra, mielőtt mások megtennék!",
        title: "Találd meg a tökéletes autódat",
      },
      notifications: {
        description:
          "Értesítést kapsz, amint a feltételeidnek megfelelő autó megjelenik bármelyik általunk figyelt weboldalon.",
        title: "Azonnali értesítéseket kap",
      },
      preferences: {
        description:
          "Válassza ki az autómárkákat, modelleket, árkategóriát és egyéb szempontokat, amelyeket figyelni szeretne.",
        title: "Állítsa be a beállításait",
      },
      telegram: {
        description:
          "Kapcsold össze Telegram-fiókodat, hogy azonnali értesítéseket kapj az új hirdetésekről.",
        title: "Csatlakoztasd a Telegramot",
      },
    },
    subtitle:
      "Állítsd be egyszer, és hagyd, hogy automatizált rendszerünk megtalálja számodra a tökéletes autóajánlatot",
    title: "Hogyan működik az AMIQUUS",
    whytitle: "Miért válassza az Amiquus-t?",
  },
  limited: {
    available: {
      buttonText: "Kezdje el most",
      description:
        "Jelenleg {{active}} a(z) {{capacity}} előfizetésből aktív. Bőven van még hely, csatlakozz te is!",
      title: "Előfizetések elérhetők",
    },
    full: {
      buttonText: "Csatlakozz a várólistához",
      description:
        "Elértük a 30 aktív előfizető kapacitását. Csatlakozz a várólistánkhoz, hogy értesítést kapj, amikor felszabadul egy hely.",
      title: "Előfizetési limit elérve",
    },
    limited: {
      buttonText: "Kezdje el most",
      description:
        "Már csak {{remaining}} hely maradt a {{capacity}}-ból. Iratkozz fel most, mielőtt betelik a létszám!",
      title: "Korlátozott elérhetőség",
    },
  },
  login: {
    description: "Adja meg e-mail címét és jelszavát a vezérlőpult eléréséhez",
    emaillabel: "E-mail",
    errors: {
      invalidemail: "Kérjük, adjon meg egy érvényes e-mail címet.",
      shortpassword: "A jelszónak legalább 6 karakterből kell állnia",
    },
    errortitle: "Sikertelen bejelentkezés",
    genericerror:
      "Kérjük, ellenőrizze a hitelesítő adatait, és próbálja meg újra.",
    loggingin: "Bejelentkezés...",
    loginbutton: "Bejelentkezés",
    loginwithgoogle: "Jelentkezz be a Google-lal",
    noaccount: "Nincs fiókod?",
    or: "vagy",
    passwordlabel: "Jelszó",
    registerlink: "Regisztrálj",
    successmessage: "Sikeresen bejelentkeztél.",
    successtitle: "Sikeres bejelentkezés",
    title: "Jelentkezzen be a fiókjába",
  },
  loginPrompt: {
    description:
      "A folytatáshoz be kell jelentkezned. Kérlek, jelentkezz be vagy regisztrálj.",
    login: "Bejelentkezés",
    register: "Regisztrálj",
    title: "Bejelentkezés szükséges",
  },
  notFound: {
    message: "Elfelejtetted hozzáadni az oldalt a routerhez?",
    title: "404 Az oldal nem található",
  },
  payment: {
    button: {
      processing: "Feldolgozás...",
      submit: "Fizetési mód beállítása",
    },
    toast: {
      error: {
        fallback: "Váratlan hiba történt. Kérjük, próbálja meg újra.",
        title: "Hiba",
      },
      success: {
        description: "A fizetési módod sikeresen beállítva.",
        title: "Siker",
      },
    },
  },
  personalInfo: {
    actions: {
      continue: "Folytatás",
      login: "Jelentkezz be vagy regisztrálj a folytatáshoz",
    },
    description:
      "Kérjük, adja meg személyes adatait, hogy értesítéseit megfelelően be tudjuk állítani.",
    errors: {
      email: "Kérjük, adjon meg egy érvényes e-mail címet",
      firstname: "Keresztnév megadása kötelező",
      lastname: "Vezetéknév megadása kötelező",
    },
    heading: "Személyes adatok",
    labels: {
      email: "Email-cím",
      firstname: "Keresztnév",
      lastname: "Vezetéknév",
    },
    placeholders: {
      email: "john.doe@example.com",
      firstname: "János",
      lastname: "Szarvas",
    },
  },
  pricing: {
    addons: {
      0: {
        name: "Minden további weboldal",
      },
      1: {
        name: "Frissítés 30 percenként",
      },
      2: {
        name: "15 percenkénti frissítések",
      },
      3: {
        name: "5 percenkénti frissítések",
      },
      4: {
        name: "Percenkénti frissítések",
      },
    },
    addonstitle: "Kiegészítők:",
    basetitle: "Alap csomag: 79,99 $/hó",
    button: "Kezdje el most",
    footernote:
      "Minden csomag korlátlan keresési beállítást és egyszerű előfizetéskezelést tartalmaz.",
    includedfeatures: {
      0: "Egy weboldal megfigyelése",
      1: "Óránkénti frissítések",
      2: "Korlátlan szűrők",
      3: "Telegram értesítések",
    },
    includedtitle: "Mit tartalmaz:",
    subtitle:
      "Árainkat az Ön egyedi igényeihez igazítjuk. Kezdje egy alapcsomaggal, majd szabja testre saját elvárásai szerint.",
    title: "Egyszerű, átlátható árképzés",
  },
  privacy: {
    lastupdated: "Utoljára frissítve: 2025. május 21.",
    metaDescription:
      "Ismerje meg, hogyan kezeli az AMIQUUS az Ön személyes adatait, adatvédelmi jogait és adatgyűjtési gyakorlatait.",
    metaTitle: "Adatvédelmi tájékoztató | Amiquus",
    sections: {
      0: {
        heading: "Bevezetés",
        id: "bevezetés",
        paragraphs: {
          0: "Üdvözöljük az AMIQUUS oldalán. Tiszteletben tartjuk az Ön magánéletét, és elkötelezettek vagyunk személyes adatainak védelme mellett. Ez az adatvédelmi tájékoztató arról informálja Önt, hogyan kezeljük személyes adatait, amikor meglátogatja weboldalunkat, valamint ismerteti az Ön adatvédelmi jogait és azt, hogy a jogszabályok miként védik Önt.",
        },
      },
      1: {
        heading: "Az általunk gyűjtött információk",
        id: "adatok-amelyeket-gyűjtünk",
        list: {
          0: "Személyes adatok: E-mail cím, keresztnév, vezetéknév és profilkép (ha harmadik fél általi hitelesítés során meg van adva).",
          1: "Fiókadatok: Bejelentkezési adatai és fiókbeállításai.",
          2: "Használati adatok: Információk arról, hogyan használja weboldalunkat és szolgáltatásainkat.",
          3: "Autókeresési beállítások: Azok a járműkritériumok, amelyeket a figyeléshez megad (márka, modell, árkategória stb.).",
          4: "Telegram információk: Ha úgy döntesz, hogy Telegramon keresztül szeretnél értesítéseket kapni, eltároljuk a Telegram chat azonosítódat és a bot tokenedet.",
          5: "Fizetési információk: Amikor vásárol, a fizetési szolgáltatónk begyűjti azokat az adatokat, amelyek szükségesek a tranzakció feldolgozásához. Az AMIQUUS nem tárolja a teljes hitelkártyaadatait.",
        },
        paragraphs: {
          0: "Különféle típusú információkat gyűjtünk különböző célokra, hogy szolgáltatásunkat biztosítsuk és fejlesszük az Ön számára.",
        },
      },
      2: {
        heading: "Hogyan használjuk az adataidat",
        id: "hogyan-használjuk-az-adatokat",
        list: {
          0: "Szolgáltatásunk nyújtása és fenntartása érdekében",
          1: "Hogy értesíthessünk a szolgáltatásunk változásairól",
          2: "Annak érdekében, hogy részt vehess az AMIQUUS szolgáltatásunk interaktív funkcióiban",
          3: "Ügyfélszolgálat biztosítása",
          4: "Elemzések vagy értékes információk gyűjtése annak érdekében, hogy javíthassuk szolgáltatásunkat",
          5: "Szolgáltatásunk használatának nyomon követése érdekében",
          6: "A technikai problémák felismerése, megelőzése és kezelése érdekében",
          7: "A fizetések feldolgozásához és a csalárd tranzakciók megelőzéséhez",
          8: "Az Ön preferenciáinak megfelelő autóhirdetések küldése az Ön által választott értesítési módon keresztül",
        },
        paragraphs: {
          0: "Személyes adataidat a következő célokra használjuk fel:",
        },
      },
      3: {
        heading: "Adattárolás és biztonság",
        id: "adat­tárolás",
        paragraphs: {
          0: "Megfelelő biztonsági intézkedéseket alkalmazunk annak érdekében, hogy személyes adatait megvédjük a jogosulatlan hozzáféréstől, módosítástól, nyilvánosságra hozataltól vagy megsemmisüléstől. Minden adat biztonságos szervereken kerül tárolásra, titkosítva az átvitel és a tárolás során is.",
          1: "Személyes adatait csak addig őrizzük meg, ameddig az ebben az adatvédelmi tájékoztatóban meghatározott célok teljesítéséhez szükséges, beleértve bármilyen jogi, szabályozási, adózási, számviteli vagy jelentéstételi kötelezettség teljesítését is.",
        },
      },
      4: {
        heading: "Az Ön GDPR jogai",
        id: "általános adatvédelmi rendelet",
        list: {
          0: "Jog az Önről tárolt információkhoz való hozzáférésre, frissítésére vagy törlésére",
          1: "A helyesbítéshez való jog",
          2: "Tiltakozáshoz való jog",
          3: "A korlátozáshoz való jog",
          4: "Az adathordozhatósághoz való jog",
          5: "A hozzájárulás visszavonásának joga",
        },
        paragraphs: {
          0: "Ha Ön az Európai Gazdasági Térség (EGT) lakosa, bizonyos adatvédelmi jogok illetik meg. Az AMIQUUS arra törekszik, hogy ésszerű lépéseket tegyen annak érdekében, hogy Ön javíthassa, módosíthassa, törölhesse vagy korlátozhassa személyes adatainak felhasználását.",
          1: "Önnek a következő adatvédelmi jogai vannak:",
        },
      },
      5: {
        heading: "Sütik szabályzata",
        id: "sütik",
        list: {
          0: "Maradjon bejelentkezve",
          1: "Értsd meg, hogyan használod a weboldalunkat",
          2: "Emlékezz a beállításaidra",
          3: "Személyre szabhatja az élményt",
        },
        paragraphs: {
          0: "A sütik kis adatfájlok, amelyeket az eszközödön tárolunk. A sütiket arra használjuk, hogy:",
        },
      },
      6: {
        heading: "Harmadik fél szolgáltatások",
        id: "harmadik fél",
        list: {
          0: "Fizetési feldolgozók (Stripe)",
          1: "Analitikai szolgáltatók",
          2: "Ügyfélszolgálati szolgáltatások",
          3: "Tárhely- és felhőinfrastruktúra-szolgáltatók",
        },
        paragraphs: {
          0: "Harmadik fél cégeket és magánszemélyeket is megbízhatunk szolgáltatásunk elősegítésével, a szolgáltatás nyújtásával a nevünkben, szolgáltatáshoz kapcsolódó feladatok elvégzésével, vagy azzal, hogy segítsenek elemezni, hogyan használják a szolgáltatásunkat.",
          1: "Ezek a harmadik felek a következők:",
        },
        paragraphs2: {
          0: "Ezek a harmadik felek kizárólag a nevünkben végzett feladatok elvégzése érdekében férhetnek hozzá személyes adataihoz, és kötelesek azokat semmilyen más célra nem nyilvánosságra hozni vagy felhasználni.",
        },
      },
      7: {
        heading: "A jelen Adatvédelmi szabályzat módosításai",
        id: "változások",
        paragraphs: {
          0: "Időnként frissíthetjük adatvédelmi szabályzatunkat. Minden változásról értesítjük Önt azzal, hogy az új adatvédelmi szabályzatot közzétesszük ezen az oldalon, és frissítjük az „Utoljára frissítve” dátumot.",
          1: "Javasoljuk, hogy időnként tekintse át ezt az adatvédelmi tájékoztatót az esetleges változások miatt. Az adatvédelmi tájékoztató módosításai akkor lépnek hatályba, amikor ezen az oldalon közzétesszük őket.",
        },
      },
      8: {
        heading: "Lépjen kapcsolatba velünk",
        id: "kapcsolat",
        list: {
          0: "E-mailben: privacy@amiquus.com",
          1: "A kapcsolat oldal meglátogatásával a weboldalunkon",
        },
        paragraphs: {
          0: "Ha bármilyen kérdése van a jelen adatvédelmi szabályzattal kapcsolatban, kérjük, lépjen velünk kapcsolatba:",
        },
      },
    },
    title: "Adatvédelmi tájékoztató",
  },
  profile: {
    account: {
      cancel: "Mégse",
      desc: "Frissítse fiókja adatait és beállításait.",
      email: "E-mail",
      name: "Név",
      save: "Változtatások mentése",
      title: "Fiókbeállítások",
      username: "Felhasználónév",
    },
    alerts: {
      add: "Új riasztás hozzáadása",
      cta: "Hozza létre első figyelmeztetését",
      desc: "Kezelje autókeresési értesítéseit és értesítési beállításait.",
      none: "Nincsenek aktív autós értesítéseid.",
      title: "Autóriasztási előfizetések",
      warning:
        "⚠️ Az előfizetésed módosításai a következő számlázási időszakban lépnek életbe, és csak sikeres fizetés után. Sikertelen fizetés esetén a jelenlegi riasztási beállításaid változatlanok maradnak.",
    },
    logout: {
      desc: "Biztosan ki szeretne jelentkezni a fiókjából?",
      success: "Sikeresen kijelentkeztél.",
      title: "Kijelentkezés",
    },
    payments: {
      desc: "Kezeld az előfizetéses számlázáshoz tartozó fizetési módjaidat.",
      encrypted: "Fizetési adataid titkosítva és biztonságosan tárolva vannak.",
      none: "Nincs elmentett fizetési módja.",
      title: "Fizetési módok",
    },
    security: {
      confirm: "Új jelszó megerősítése",
      current: "Jelenlegi jelszó",
      desc: "Kezeld a biztonsági beállításaidat és az adatvédelmi preferenciáidat.",
      new: "Új jelszó",
      title: "Adatvédelem és biztonság",
      update: "Jelszó frissítése",
    },
    sidebar: {
      account: "Fiókbeállítások",
      logout: "Kijelentkezés",
      membersince: "Tagja ettől",
      methods: "Fizetési módok",
      privacy: "Adatvédelem és biztonság",
      subscriptions: "Előfizetések",
    },
    tabs: {
      alerts: "Értesítéseim",
      payments: "Fizetési módok",
    },
  },
  register: {
    alreadyhave: "Már van fiókod?",
    and: "és",
    confirmpassword: "Jelszó megerősítése",
    createbtn: "Fiók létrehozása",
    description: "Regisztrálj, hogy elkezdhesd követni álmaid autóját",
    email: "E-mail",
    firstname: "Keresztnév",
    google: "Jelentkezés Google-lel",
    lastname: "Vezetéknév",
    login: "Bejelentkezés",
    orcontinue: "Vagy folytasd ezzel",
    password: "Jelszó",
    privacypolicy: "Adatvédelmi szabályzat",
    termsnotice: "Elfogadom a",
    termsofservice: "Szolgáltatási feltételek",
    title: "Fiók létrehozása",
    toast: {
      failure: {
        desc: "Kérjük, ellenőrizze adatait, és próbálja meg újra.",
        title: "A regisztráció sikertelen",
      },
      invalidusername: {
        desc: "A felhasználónév csak betűket és számokat tartalmazhat, és 3–20 karakter hosszú lehet.",
        title: "Érvénytelen felhasználónév",
      },
      missingfields: {
        desc: "Kérjük, töltse ki az összes kötelező mezőt!",
        title: "Hiányzó mezők",
      },
      passwordmismatch: {
        desc: "Kérjük, győződj meg róla, hogy a jelszavaid megegyeznek.",
        title: "A jelszavak nem egyeznek",
      },
      success: {
        desc: "Üdvözlünk az AMIQUUS-on! Hamarosan átirányítunk, hogy megerősíthesd az e-mail címedet.",
        title: "Sikeres regisztráció",
      },
      termsnotaccepted: {
        desc: "A folytatáshoz el kell fogadnod a feltételeket és az adatvédelmi szabályzatot.",
        title: "Feltételek nem elfogadottak",
      },
    },
    username: "Felhasználónév",
  },
  review: {
    actions: {
      previous: "Előző",
      submit: "Tovább a fizetéshez",
    },
    description: "Kérjük, fizetés előtt ellenőrizze előfizetése adatait.",
    monitoring: {
      facebookurl: "Facebook URL",
      title: "Megfigyelési beállítások",
      updatefrequency: "Frissítési gyakoriság",
      websites: "Weboldalak",
    },
    notification: {
      language: "Értesítési nyelv",
      telegram: "Telegram Bot",
      title: "Értesítési beállítások",
    },
    personal: {
      email: "E-mail",
      name: "Név",
      title: "Személyes adatok",
    },
    specs: {
      brand: "Márka",
      fueltype: "Üzemanyag típusa",
      mileage: "Hatótávolság (km)",
      model: "Modell",
      price: "Árkategória (€)",
      title: "Autó specifikációk",
      yearrange: "Évszakasz",
    },
    summary: {
      base: "Alap előfizetés",
      extrawebsites: "További weboldalak",
      frequencyupgrade: "Frekvencia frissítés",
      title: "Előfizetés összegzése",
      total: "Összesen (havonta)",
    },
    terms: {
      checkbox: "Elfogadom a",
      error: "El kell fogadnod a felhasználási feltételeket.",
      note: "Előfizetésed havonta automatikusan megújul. Bármikor lemondhatod.",
      privacy: "Adatvédelmi tájékoztató",
      tos: "Felhasználási feltételek",
    },
    title: "Tekintse át az előfizetését",
  },
  setupAlerts: {
    basetitle: "79,99 USD/hó",
    basicplan: "Alap csomag",
    button: "Indítsd el az autóm riasztási szolgáltatását",
    cancel: "Bármikor lemondhatod",
    subtitle:
      "Állítsd be a Telegram botodat, hogy értesítéseket kapj az álomautódról",
    title: "Állítsa be autója értesítéseit",
    toasts: {
      contactbot: {
        description:
          "Az autós értesítések fogadásához el kell indítanod egy beszélgetést a Telegram botunkkal, és üzenetet kell küldened neki. Kérjük, kövesd az alábbi utasításokat a bot eléréséhez.",
        title: "Kapcsolattartó bot szükséges",
      },
      error: {
        title: "Hiba történt az előfizetés létrehozásakor",
      },
      success: {
        description: "Előfizetését sikeresen létrehoztuk.",
        title: "Előfizetés létrehozva",
      },
      terms: {
        description:
          "A folytatáshoz el kell fogadnod a szolgáltatási feltételeket.",
        title: "Feltételek nem elfogadva",
      },
    },
  },
  signUp: {
    cta: "Értesítések kérése most",
    heading: "Hozza létre autós értesítését",
    subheading:
      "Állítsd be személyre szabott autóhirdetés-értesítéseidet néhány egyszerű lépésben.",
    toast: {
      error: {
        description:
          "Nem sikerült létrehozni az előfizetést. Kérjük, próbálja meg később újra.",
        title: "Előfizetés sikertelen",
      },
      success: {
        description: "Előfizetésed sikeresen létrejött.",
        title: "Előfizetés létrehozva",
      },
    },
    waitlist: {
      cta: "Csatlakozz a várólistához",
      message:
        "Jelenleg teljes kapacitással működünk. Kérjük, csatlakozz a várólistánkhoz, hogy értesítést kapj, amikor felszabadul egy hely.",
    },
  },
  subscription: {
    actions: {
      back: "Vissza",
      save: "Változtatások mentése",
    },
    description:
      "Előfizetésedet bármikor szüneteltetheted. Amikor szünetelteted az előfizetésedet, az autós értesítéseid leállnak, amíg újra nem indítod őket.",
    error: "Menj vissza a vezérlőpultra",
    form: {
      status: {
        active: "Aktív",
        label: "Állapot",
        paused: "Szüneteltetve",
        placeholder: "Állapot kiválasztása",
      },
    },
    notfound: "Előfizetés nem található",
    notfoundsub: "Vissza a vezérlőpultra",
    subtitle: "Szerkeszd az előfizetésed adatait lentebb",
    title: "Előfizetés részletei",
    toasts: {
      error: {
        title: "Hiba a feliratkozás frissítésekor",
      },
      priceerror: {
        description:
          "Egyszerre szünetelteted és frissíted az előfizetésed árát. Válaszd ki, hogy szünetelteted vagy frissíted az árat.",
        title: "Nem sikerült frissíteni az előfizetést",
      },
      success: {
        description:
          "Az Ön {{brand}} {{model}} előfizetése sikeresen frissítve lett.",
        title: "Előfizetés frissítve",
      },
    },
  },
  support: {
    emailsupport: {
      description: "Küldjön nekünk e-mailt, és 24 órán belül válaszolunk!",
      email: "support@amiquus.com",
      title: "E-mailes ügyfélszolgálat",
    },
    faqheading: "Gyakran ismételt kérdések",
    faqs: {
      cancel: {
        answer:
          "Előfizetését bármikor lemondhatja a fiókprofil oldalán. Kattintson az „Előfizetések” fülre, keresse meg a lemondani kívánt előfizetést, majd kattintson az „Előfizetés lemondása” gombra. Szolgáltatása az aktuális számlázási időszak végéig elérhető marad.",
        question: "Hogyan mondhatom le az előfizetésemet?",
      },
      facebook: {
        answer:
          "Igen, támogatjuk a Facebook Marketplace figyelését. Ennek beállításához meg kell adnod a Facebook Marketplace keresési eredményoldalának URL-jét a kívánt szűrőkkel. Rendszerünk ezután figyeli ezt a konkrét keresést, és értesít azokról az új hirdetésekről, amelyek megfelelnek a megadott feltételeidnek.",
        question: "Figyelhetem a Facebook Marketplace-et?",
      },
      full: {
        answer:
          "Szolgáltatásunk magas színvonalának megőrzése érdekében korlátozzuk az aktív előfizetések számát. Ha minden hely betelt, csatlakozhatsz a várólistánkhoz. Értesítünk, amint felszabadul egy hely, és elsőbbséged lesz az igénylésre, mielőtt azt a nagyközönség számára elérhetővé tennénk.",
        question: "Mi történik, ha minden előfizetési hely betelt?",
      },
      telegram: {
        intro:
          "A Telegram értesítések beállításához kövesse az alábbi lépéseket:",
        outro:
          "Ha további segítségre van szükséged, részletes útmutatónk elérhető a vezérlőpultodon.",
        question: "Hogyan állíthatom be a Telegram értesítéseket?",
        steps: {
          0: "Hozz létre egy Telegram botot a BotFather segítségével (útmutató a vezérlőpultunkon található)",
          1: "Másold ki az API tokenedet és a chat azonosítódat",
          2: "Add meg ezeket az adatokat a fiókbeállításaidnál az „Értesítési beállítások” alatt",
          3: "Tesztelje a kapcsolatát a „Tesztüzenet küldése” gombbal.",
        },
      },
      updates: {
        answer:
          "A frissítések gyakorisága az előfizetési csomagjától függ. Az alapcsomagok 6 óránként kapnak frissítést, míg a Prémium csomagok akár 30 percenként is frissülhetnek. Az aktuális frissítési gyakoriságot megtekintheti és módosíthatja az előfizetési beállításoknál.",
        question: "Milyen gyakran frissülnek az autóhirdetések?",
      },
    },
    metaDescription:
      "Kérjen segítséget AMIQUUS fiókjához, előfizetéséhez vagy autós értesítéseihez. Böngéssze súgóközpontunkat, vagy lépjen kapcsolatba ügyfélszolgálatunkkal segítségért.",
    metaTitle: "Támogatás | Amiquus - Súgóközpont",
    stillneedhelp: {
      button: "Lépjen kapcsolatba az ügyfélszolgálattal",
      description:
        "Ha nem találtad meg a kérdésedre a választ, bátran vedd fel a kapcsolatot ügyfélszolgálatunkkal. Azért vagyunk itt, hogy segítsünk!",
      heading: "Még mindig segítségre van szüksége?",
    },
    subtitle:
      "Találd meg a gyakran ismételt kérdésekre a válaszokat, vagy vedd fel a kapcsolatot ügyfélszolgálatunkkal!",
    title: "Ügyfélszolgálat",
  },
  telegram: {
    actions: {
      continue: "Folytatás",
      previous: "Előző",
    },
    bottokenexample: "Példa: 5432109876:ABCDefGhIJklMNoPqrSTuvWXyz1234567890",
    bottokenlabel: "Telegram Bot Token",
    bottokenplaceholder: "Add meg a bot tokened a BotFather-tól",
    caralerttitle: "🚗 Új autó érkezett!",
    chatiddescription:
      "Ezt úgy szerezheted meg, ha üzensz az @userinfobot felhasználónak a Telegramon.",
    chatidlabel: "Telegram csevegési azonosítód",
    chatidplaceholder: "Add meg a Telegram csevegési azonosítódat",
    chatidsteps: {
      0: 'Nyisd meg a Telegramot, és keresd meg a "userinfobot"-ot',
      1: "Küldj bármilyen üzenetet a botnak",
      2: "A bot válaszolni fog az adataiddal, beleértve a Chat ID-det is.",
      3: "Másold a Chat azonosítódat",
    },
    chatidtitle: "Hogyan szerezheted meg a Telegram Chat ID-det:",
    confirmcontact:
      "Elindítottam egy beszélgetést a bottal, és üzenetet küldtem.",
    contact: "Lépjen kapcsolatba velünk",
    contactbotinstruction:
      "Indítsd el a csevegést a Telegram botunkkal az alábbi linkre kattintva, majd küldj neki üzenetet:",
    contactbotnote:
      "Ez szükséges az autós értesítések fogadásához. Ha asztali gépen vagy, beolvashatod a QR-kódot.",
    description:
      "Állítsd be a Telegram értesítéseket a bot token és a chat azonosító megadásával.",
    errors: {
      chatid: "A Telegram csevegési azonosító megadása kötelező",
      language: "Az értesítési nyelv megadása kötelező.",
      token: "Telegram bot token megadása kötelező",
      username: "A Telegram felhasználónév megadása kötelező",
    },
    examples: {
      chatid:
        "Ezt úgy szerezheted meg, ha írsz üzenetet az @userinfobot felhasználónak a Telegramon.",
      token: "Értem! Kérlek, add meg a lefordítandó szöveget.",
    },
    heading: "Telegram beállítása",
    helpdescription:
      "Nézd meg az alábbi videót a lépésről lépésre szóló útmutatóért.",
    helptitle:
      "Segítségre van szükséged a Telegram Bot Token és Chat ID beállításához?",
    info: "Ha problémád adódik a Telegram bot létrehozásával, vedd fel velünk a kapcsolatot, és visszahívunk, hogy segítsünk elkészíteni.",
    instructions: {
      botstep1: "Nyisd meg a Telegramot, és keresd meg a @BotFather-t",
      botstep2: "Küldd el a /newbot parancsot",
      botstep3: "Kövesd az utasításokat a bot létrehozásához",
      botstep4: "Másold ki a BotFather által megadott tokent",
      bottitle: "Hogyan szerezhetsz Telegram Bot Tokent:",
      chatstep1:
        "Nyisd meg a Telegramot, és keresd meg a @userinfobot felhasználót",
      chatstep2: "Küldj bármilyen üzenetet a botnak",
      chatstep3:
        "A bot válaszolni fog az adataiddal, beleértve a Chat ID-det is.",
      chatstep4: "Másolja a csevegés azonosítóját (ez egy szám)",
      chattitle: "Hogyan szerezheti meg a Telegram Chat ID-ját:",
    },
    kilometreslabel: "Kilométer: {{kms}}",
    labels: {
      chatid: "Telegram csevegési azonosítód",
      language: "Értesítési nyelv",
      token: "Telegram bot token",
      username: "Telegram felhasználónév",
    },
    languagelabel: "Értesítési nyelv",
    languageplaceholder: "Válassza ki a Telegram üzenet nyelvét",
    languages: {
      de: "Német",
      en: "Angol",
      es: "Magyar",
      fr: "Francia",
      it: "Magyar",
    },
    locationlabel: "Helyszín: {{location}}",
    placeholders: {
      chatid: "Add meg a Telegram csevegési azonosítódat",
      language: "Válassza ki a Telegram üzenet nyelvét",
      token: "Add meg a bot tokened a BotFather-tól",
      username: "Add meg a Telegram felhasználóneved",
    },
    previewtitle: "Telegram értesítések előnézete",
    pricelabel: "Ár: {{price}}",
    setupsteps: {
      0: 'Nyisd meg a Telegramot, és keresd meg a "BotFather"-t',
      1: "Indítsd el a csevegést a BotFather-rel a „Start” gombra kattintva",
      2: "Írd be a /newbot parancsot, és kövesd az utasításokat egy új bot létrehozásához.",
      3: "Válassz nevet a botodnak",
      4: "Válassz felhasználónevet a botodnak (aminek „bot”-ra kell végződnie)",
      5: "Másold ki a BotFather által megadott API tokent",
      6: "Küldj üzenetet az új botodnak a csevegés aktiválásához",
    },
    setuptitle: "Telepítési útmutató:",
    subheading: "Állítsd be a Telegram botodat",
    usernamedescription:
      "Ez a felhasználónév a Telegram-fiókodban (az @ jel nélkül).",
    videodescription:
      "Nézd meg az alábbi videót a lépésről lépésre szóló útmutatóért.",
    videoprompt:
      "Segítségre van szükséged a Telegram Bot Token és Chat ID beállításához?",
    viewlisting: "Hirdetés megtekintése →",
  },
  terms: {
    lastupdated: "Utoljára frissítve: 2025. május 21.",
    metaDescription:
      "Olvassa el az AMIQUUS szolgáltatási feltételeit, amelyek szabályozzák az autóhirdetések figyelésére és értesítésére szolgáló szolgáltatásunk használatát.",
    metaTitle: "Szolgáltatási feltételek | Amiquus",
    sections: {
      1: {
        heading: "Felhasználási feltételek elfogadása",
        id: "megállapodás",
        paragraphs: {
          0: "A jelen Szolgáltatási Feltételek jogilag kötelező érvényű megállapodást jelentenek Ön és az AMIQUUS között, amely a weboldalunkhoz és szolgáltatásainkhoz való hozzáférésére és azok használatára vonatkozik.",
          1: "A szolgáltatásaink elérésével vagy használatával elfogadod ezeket a Feltételeket. Ha a feltételek bármely részével nem értesz egyet, nem használhatod a szolgáltatást.",
        },
      },
      10: {
        heading: "Jogi nyilatkozat",
        id: "jogi nyilatkozat",
        paragraphs: {
          0: "A szolgáltatást saját felelősségére használja. A szolgáltatás „JELEN ÁLLAPOTÁBAN” és „ELÉRHETŐSÉGE SZERINT” vehető igénybe. A szolgáltatás bármiféle garancia nélkül, akár kifejezett, akár hallgatólagos módon kerül nyújtásra.",
          1: "Amiquus nem vállal garanciát arra, hogy a szolgáltatás folyamatos, időszerű, biztonságos vagy hibamentes lesz, illetve hogy a szolgáltatás használatával elérhető eredmények pontosak vagy megbízhatóak lesznek.",
        },
      },
      11: {
        heading: "Sütikre vonatkozó szabályzat",
        id: "sütik",
        paragraphs: {
          0: "A Cookie-szabályzatunk elmagyarázza, mik azok a sütik, hogyan használjuk őket, hogyan használhatják partnereink – harmadik felek – a sütiket szolgáltatásunkban, milyen lehetőségei vannak a sütik kezelésére, valamint további információkat is nyújt a sütikről. Kérjük, tekintse meg az Adatvédelmi szabályzatunk Sütikre vonatkozó részét.",
        },
      },
      12: {
        heading: "Irányadó jog",
        id: "irányadó jog",
        paragraphs: {
          0: "Ezen Feltételekre az Amerikai Egyesült Államok jogszabályai az irányadók és azok szerint kell értelmezni őket, függetlenül a kollíziós jogi rendelkezésektől.",
          1: "Az, hogy nem érvényesítjük ezen Feltételek bármely jogát vagy rendelkezését, nem minősül az adott jogról való lemondásnak. Ha ezen Feltételek bármely rendelkezését egy bíróság érvénytelennek vagy végrehajthatatlannak nyilvánítja, a többi rendelkezés továbbra is érvényben marad.",
        },
      },
      13: {
        heading: "Lépjen kapcsolatba velünk",
        id: "kapcsolat",
        list: {
          0: "E-mailben: legal@amiquus.com",
          1: "A kapcsolat oldal meglátogatásával a weboldalunkon",
        },
        paragraphs: {
          0: "Ha bármilyen kérdése van ezekkel a Feltételekkel kapcsolatban, kérjük, lépjen kapcsolatba velünk:",
        },
      },
      2: {
        heading: "Felhasználási feltételek módosítása",
        id: "változások",
        paragraphs: {
          0: "Fenntartjuk a jogot, hogy saját belátásunk szerint bármikor módosítsuk vagy lecseréljük ezen Feltételeket. Amennyiben a módosítás lényeges, ésszerű erőfeszítéseket teszünk annak érdekében, hogy legalább 30 nappal az új feltételek hatályba lépése előtt értesítést küldjünk.",
          1: "A módosítások hatályba lépése után a szolgáltatás további elérésével vagy használatával elfogadod a módosított feltételeket. Ha nem értesz egyet az új feltételekkel, kérjük, hagyd abba a szolgáltatás használatát.",
        },
      },
      3: {
        heading: "Fiók feltételei",
        id: "fiók",
        list: {
          0: "Legalább 18 évesnek kell lenned",
          1: "Fejezze be a regisztrációs folyamatot",
          2: "Adjon meg pontos, teljes és naprakész információkat",
          3: "Legyen felelős fiókja és jelszava biztonságának megőrzéséért.",
          4: "Ön felelős minden olyan tevékenységért, amely a fiókja alatt történik.",
          5: "Értesítsen minket azonnal, amint tudomást szerez bármilyen biztonsági incidensről vagy a fiókja jogosulatlan használatáról.",
        },
        paragraphs: {
          0: "Szolgáltatásaink igénybevételéhez szükséges:",
        },
      },
      4: {
        heading: "Fizetési feltételek",
        id: "fizetés",
        list: {
          0: "Minden díj adó nélkül értendő, az adókat szükség esetén hozzáadjuk.",
          1: "Az előfizetési díjak 30 napos előzetes értesítéssel változhatnak.",
          2: "Az előfizetések automatikusan megújulnak, hacsak nem mondod le a következő számlázási ciklus előtt.",
          3: "A visszatérítéseket egyedi elbírálás alapján, a visszatérítési szabályzatunk szerint kezeljük.",
          4: "A Stripe-ot használjuk a biztonságos fizetésfeldolgozáshoz, és minden fizetési információt a Stripe tárol.",
        },
        paragraphs: {
          0: "Amiquus előfizetéses szolgáltatásokat kínál a következő feltételekkel:",
        },
      },
      5: {
        heading: "Kapacitáskorlátok",
        id: "kapacitás",
        list: {
          0: "Új felhasználók csatlakozhatnak a várólistánkhoz",
          1: "A várólista sorrendje érkezési sorrendben kerül meghatározásra.",
          2: "Amint felszabadul kapacitás, a várólistán lévő felhasználókat sorrendben értesítjük.",
          3: "Fenntartjuk a jogot, hogy a kapacitáskorlátokat bármikor módosítsuk.",
        },
        paragraphs: {
          0: "A szolgáltatás minőségének és megbízhatóságának fenntartása érdekében az AMIQUUS az aktív előfizetések számát 30-ra korlátozza. Amikor ez a limit eléri a maximumot:",
        },
      },
      6: {
        heading: "Webes adatgyűjtés korlátai",
        id: "adatgyűjtés",
        list: {
          0: "Amiquus tiszteletben tartja az általunk figyelt weboldalak felhasználási feltételeit.",
          1: "Sebességkorlátozást és körültekintő feltérképezési gyakorlatokat alkalmazunk",
          2: "Bizonyos weboldalak elérhetősége a saját feltételeik és technikai intézkedéseik alapján változhat.",
          3: "Nem vállalunk garanciát a begyűjtött adatok teljességére vagy időszerűségére.",
        },
        paragraphs: {
          0: "Szolgáltatásunk több autóhirdetési weboldalról származó adatokat ér el és dolgoz fel. Szolgáltatásunk használatával Ön tudomásul veszi, hogy:",
        },
      },
      7: {
        heading: "Szellemi tulajdon",
        id: "intellektuális",
        paragraphs: {
          0: "Az AMIQUUS szolgáltatás, beleértve annak eredeti tartalmát, funkcióit és működését, az AMIQUUS kizárólagos tulajdonát képezi és az is marad. Szolgáltatásunkat szerzői jog, védjegy és egyéb, az Amerikai Egyesült Államokban és más országokban érvényben lévő jogszabályok védik.",
          1: "Védjegyeink és arculatunk nem használhatók fel semmilyen termékkel vagy szolgáltatással kapcsolatban az Amiquus előzetes írásbeli hozzájárulása nélkül.",
        },
      },
      8: {
        heading: "Megszüntetés",
        id: "felmondás",
        paragraphs: {
          0: "Fiókját azonnal megszüntethetjük vagy felfüggeszthetjük előzetes értesítés vagy felelősség nélkül, bármilyen okból, beleértve korlátozás nélkül, ha megszegi a Feltételeket.",
          1: "A szolgáltatás megszűnésekor az Ön szolgáltatáshoz való hozzáférése azonnal megszűnik. Ha szeretné megszüntetni fiókját, egyszerűen hagyja abba a szolgáltatás használatát, vagy lépjen kapcsolatba velünk fiókja törlésének igényléséhez.",
        },
      },
      9: {
        heading: "Felelősség kizárása",
        id: "korlátozások",
        list: {
          0: "Az Ön hozzáférése vagy használata, illetve a szolgáltatáshoz való hozzáférés vagy használat lehetetlensége",
          1: "Bármilyen harmadik fél magatartása vagy tartalma a szolgáltatáson",
          2: "Bármilyen, a szolgáltatásból származó tartalom",
          3: "Jogosulatlan hozzáférés, használat vagy az Ön adatainak, tartalmának módosítása",
        },
        paragraphs: {
          0: "AMIQUUS, valamint annak igazgatói, alkalmazottai, partnerei, ügynökei, beszállítói vagy leányvállalatai semmilyen esetben sem felelősek semmilyen közvetett, véletlenszerű, különleges, következményi vagy büntető jellegű kárért, beleértve – korlátozás nélkül – az elmaradt hasznot, adat-, használat-, jóhírnév-veszteséget vagy egyéb immateriális veszteséget, amely abból ered, hogy:",
        },
      },
    },
    title: "Szolgáltatási feltételek",
  },
  verifyEmail: {
    codelabel: "Ellenőrző kód",
    description: "Ellenőrző kódot küldtünk az e-mail címedre.",
    footernote: "Nem kaptad meg a kódot? Nézd meg a spam mappádat!",
    resendbutton: "Kód újraküldése",
    resendcountdown: "Újraküldheti a kódot {{seconds}} másodperc múlva.",
    title: "Erősítse meg e-mail-címét",
    toast: {
      emailupdated: "E-mail frissítve",
      entervalidemail: "Kérjük, adjon meg egy érvényes e-mail címet.",
      error: "Hiba",
      failed: "Ellenőrzés sikertelen",
      invalidemail: "Érvénytelen e-mail cím",
      resent: "Az ellenőrző kódot újraküldtük",
      sameemail: "Ugyanaz az e-mail",
      sameemaildesc: "Az új e-mail cím megegyezik a jelenlegi e-mail címmel.",
      verified: "E-mail megerősítve",
    },
    updateemailbutton: "E-mail frissítése",
    updateemaillabel: "E-mail frissítése",
    verifybutton: "E-mail megerősítése",
  },
  waitlist: {
    cantjoin: {
      description: "Értesítünk, amint elérhetővé válik egy előfizetési hely.",
      title: "Csatlakozz a várólistához",
    },
    form: {
      email: {
        description:
          "Ezt az e-mail címet arra fogjuk használni, hogy értesítsünk, amikor felszabadul egy hely.",
        label: "E-mail",
        placeholder: "john.doe@example.com",
      },
      firstname: {
        label: "Keresztnév",
        placeholder: "János",
      },
      lastname: {
        label: "Vezetéknév",
        placeholder: "Szarvas",
      },
      submit: "Csatlakozz a várólistához",
      submitting: "Beküldés...",
    },
    limited: {
      available:
        "Jelenleg {{remaining}} előfizetői hely elérhető a teljes {{capacity}}-ből.",
      description:
        "Rendszerünket legfeljebb 30 aktív előfizetőre korlátozzuk, hogy biztosítsuk:",
      full: "Jelenleg minden előfizetési hely betelt. Iratkozz fel a várólistára, hogy értesítést kapj, amikor felszabadul egy hely.",
      heading: "Korlátozott elérhetőség",
      points: {
        0: "Kivételes adatgyűjtési megbízhatóság és sebesség minden felhasználó számára",
        1: "Csökkentett esély az autóhirdető weboldalak általi blokkolásra",
        2: "Személyre szabott támogatás minden előfizetőnek",
        3: "A szervererőforrások méltányos elosztása",
      },
    },
    metaDescription:
      "Csatlakozz az AMIQUUS várólistájához, hogy értesítést kapj, amikor az előfizetések elérhetővé válnak.",
    metaTitle: "Csatlakozz a várólistához – Amiquus",
    subtitle:
      "A nagy kereslet miatt korlátozzuk az aktív előfizetések számát, hogy minden felhasználónk számára a legjobb szolgáltatási minőséget biztosíthassuk.",
    success: {
      button: "Vissza a kezdőlapra",
      description: "Értesítünk, amint elérhetővé válik egy előfizetői hely.",
      message:
        "Köszönjük érdeklődését az Amiquus iránt! Felvettük a várólistára, és amint felszabadul egy hely, felvesszük Önnel a kapcsolatot.",
      title: "Várólistára kerültél!",
    },
    title: "Csatlakozz a várólistánkhoz",
  },
  waitlistPrompt: {
    button: "Csatlakozz a várólistához",
    description:
      "Jelenleg megteltünk. Iratkozz fel a várólistára, hogy értesítést kapj, amint felszabadul egy hely.",
    title: "Csatlakozz a várólistához",
  },
  websiteSelection: {
    actions: {
      continue: "Folytatás",
      previous: "Előző",
    },
    description:
      "Válaszd ki, mely weboldalakat szeretnéd figyelni, és milyen gyakran szeretnél értesítéseket kapni.",
    errors: {
      facebookurl:
        "A Facebook Marketplace URL megadása kötelező, ha a Facebook ki van választva.",
      websites: "Legalább egy weboldalt ki kell választani.",
    },
    heading: "Webhely kiválasztása",
    help: {
      facebookurl:
        "Illessze be ide a Facebook Marketplace keresési eredményeinek URL-jét.",
      updatefrequency:
        "Milyen gyakran ellenőrizzük az új hirdetéseket? A gyakoribb ellenőrzés magasabb költségekkel járhat.",
      videodesc:
        "Nézd meg az alábbi videót a lépésről lépésre szóló útmutatóért.",
      videotitle:
        "Segítségre van szükséged a Facebook Marketplace keresési linked megtalálásához?",
      websites:
        "Válassz ki egy vagy több weboldalt, amelyeken autóhirdetéseket szeretnél figyelni.",
    },
    labels: {
      facebookurl: "Facebook Marketplace URL",
      updatefrequency: "Frissítési gyakoriság",
      websites: "Weboldalak figyelése",
    },
    placeholders: {
      frequency: "Válassza ki a gyakoriságot",
    },
  },
};

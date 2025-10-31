export const sk = {
  navigations: {
    features: "Funkcie",
    how: "Ako to funguje",
    pricing: "Cenník",
    getAlerts: "Získať upozornenia",
    waitlist: "Čakacia listina",
    faq: "Často kladené otázky",
    login: "Prihlásiť sa",
    getStarted: "Začať",
    subscribers: "Odberatelia",
    theme: "Téma",
    language: "Jazyk",
    myAlerts: "Moje upozornenia",
    profile: "Profil",
    settings: "Nastavenia",
    logout: "Odhlásiť sa",
    signUp: "Registrovať sa",
  },
  about: {
    description:
      "Revolucionizujeme spôsob, akým ľudia nachádzajú svoje ideálne jazdené auto, tým, že prinášame pokročilú monitorovaciu technológiu pre každého.",
    join: {
      cta: "Zobraziť voľné pozície",
      description:
        "Stále hľadáme talentovaných ľudí, ktorých nadchýna technológia a chcú revolučne zmeniť spôsob, akým si ľudia kupujú autá. Pozrite si naše aktuálne voľné pozície a pridajte sa k našej misii.",
      heading: "Pridaj sa k nášmu tímu",
    },
    meta: {
      description:
        "Zistite viac o AMIQUUS, našom poslaní revolučne zmeniť nákup ojazdených áut a o tíme, ktorý stojí za našou inteligentnou službou monitorovania automobilových inzerátov.",
      title: "O nás | Amiquus - Služba na sledovanie inzerátov áut",
    },
    mission: {
      heading: "Naše poslanie",
      items: {
        0: {
          description:
            "Odstráňte potrebu neustále obnovovať viacero webových stránok automatizovaním vyhľadávacieho procesu a prijímaním včasných notifikácií.",
          title: "Ušetrite čas",
        },
        1: {
          description:
            "Buďte prví, kto sa dozvie o skvelej ponuke, čo vám dáva výhodu na konkurenčnom trhu, kde je čas rozhodujúci.",
          title: "Nájdite lepšie ponuky",
        },
        2: {
          description:
            "Robte informované rozhodnutia vďaka komplexnému monitorovaniu naprieč viacerými overenými platformami na predaj áut.",
          title: "Nakupujte s istotou",
        },
      },
    },
    questions: {
      description:
        "Zistite viac o tom, ako AMIQUUS funguje, prezrite si možnosti cien alebo kontaktujte náš tím podpory.",
      heading: "Máte otázky?",
      links: {
        faq: "Navštívte FAQ",
        pricing: "Zobraziť ceny",
        support: "Kontaktujte podporu",
      },
    },
    story: {
      heading: "Náš príbeh",
      paragraphs: {
        0: "AMIQUUS vznikol v roku 2023, keď náš zakladateľ Alex strávil mesiace obnovovaním stránok s inzerciou áut v snahe nájsť konkrétny vzácny model za dobrú cenu. Po tom, čo premeškal viacero príležitostí kvôli oneskoreným notifikáciám, si uvedomil, že musí existovať lepší spôsob.",
        1: "V spolupráci s malým tímom vývojárov a automobilových nadšencov Alex vytvoril monitorovací systém, ktorý dokázal súčasne sledovať inzeráty na viacerých stránkach a okamžite posielať notifikácie, keď sa objavili zodpovedajúce ponuky.",
        2: "To, čo sa začalo ako osobný projekt, si rýchlo získalo záujem priateľov a rodiny, a začiatkom roku 2025 vznikol AMIQUUS ako služba dostupná pre každého. Dnes pomáhame kupujúcim áut po celom Slovensku šetriť čas a nájsť lepšie ponuky vďaka našej inteligentnej monitorovacej technológii.",
      },
    },
    team: {
      heading: "Náš tím",
      members: {
        0: {
          bio: "Bývalý softvérový inžinier s vášňou pre autá a tvorbu inovatívnych riešení.",
          name: "Alex Morgan, tu je návod",
          role: "Zakladateľ a generálny riaditeľ",
        },
        1: {
          bio: "Odborník na dátovú vedu so špecializáciou na web scraping a systémy na získavanie informácií.",
          name: "Sarah Chen, tu je návod",
          role: "Technický riaditeľ",
        },
        2: {
          bio: "Full-stack inžinier so skúsenosťami s vývojom vysokovýkonných notifikačných systémov.",
          name: "Marcus Lee",
          role: "Hlavný vývojár",
        },
        3: {
          bio: "Bývalý predajca áut, zameraný na pomoc zákazníkom pri hľadaní ich ideálneho vozidla.",
          name: "Elena Rodriguez, tu je návod",
          role: "Úspech zákazníka",
        },
      },
    },
    title: "O spoločnosti Amiquus",
  },
  alertSchema: {
    errors: {
      carbrand: "Značka auta je povinná",
      carmodel: "Model vozidla je povinný",
      facebookmarketplaceurl:
        "URL pre Facebook Marketplace je povinný, keď je vybraný Facebook.",
      fueltype: "Typ paliva je povinný",
      maxkilometers: "Maximálny počet kilometrov musí byť číslo",
      notificationlanguage: "Je potrebné zvoliť jazyk upozornení.",
      pricemax: "Maximálna cena musí byť číslo",
      pricemin: "Minimálna cena musí byť číslo",
      telegramchatid: "Je potrebné zadať Telegram chat ID.",
      telegramtoken: "Je vyžadovaný token pre Telegram bota",
      telegramusername: "Používateľské meno na Telegrame je povinné",
      websitesselected: "Musí byť vybraná aspoň jedna webová stránka.",
      yearmax: "Maximálny rok musí byť platný rok",
      yearmin: "Minimálny rok musí byť platný rok",
    },
  },
  carDetails: {
    actions: {
      continue: "Pokračovať",
      previous: "Predchádzajúce",
    },
    description:
      "Zadajte podrobnosti o aute, ktoré hľadáte. Všetky polia sú voliteľné – nechajte ktorékoľvek prázdne pre širší výber výsledkov.",
    errors: {
      carbrand: "Značka auta je povinná",
      carmodel: "Model vozidla je povinný",
      fueltype: "Typ paliva je povinný",
      maxkilometers: "Maximálny počet kilometrov musí byť číslo",
      pricemax: "Maximálna cena musí byť číslo",
      pricemin: "Minimálna cena musí byť číslo",
      yearmax: "Maximálny rok musí byť platný rok",
      yearmin: "Minimálny rok musí byť platný rok",
    },
    heading: "Podrobnosti o vozidle",
    labels: {
      carbrand: "Značka auta",
      carmodel: "Model auta",
      fueltype: "Typ paliva",
      maxkilometers: "Maximálny počet kilometrov",
      pricemax: "Maximálna cena",
      pricemin: "Minimálna cena",
      yearmax: "Maximálny rok",
      yearmin: "Minimálny rok",
    },
    options: {
      nomodelsavailable: "Nie sú dostupné žiadne modely",
    },
    placeholders: {
      carbrand: "Vyberte značku auta",
      carmodel: "Vyberte model auta",
      carmodeldisabled: "Najskôr vyberte značku auta",
      fueltype: "Vyberte typ paliva",
      maxkilometers: "Zadajte maximálny počet kilometrov",
      pricemax: "Zadajte maximálnu cenu",
      pricemin: "Zadajte minimálnu cenu",
      yearmax: "Zadajte maximálny rok",
      yearmin: "Zadajte minimálny rok",
    },
  },
  dashboardPayment: {
    add: "Pridať spôsob platby",
    description:
      "Pridajte novú kreditnú alebo debetnú kartu na platby za predplatné.",
    errormessage: "Vyskytla sa neočakávaná chyba",
    errortitle: "Chyba pri pridávaní platobnej metódy",
    initerror: {
      description: "Nepodarilo sa inicializovať nastavenie platby",
      title: "Chyba",
    },
    processing: "Spracováva sa...",
  },
  dashboardPaymentMethodCard: {
    cancel: "Zrušiť",
    confirmremove: "Odstrániť kartu",
    default: "Predvolené",
    expires: "Platnosť do",
    remove: "Odstrániť",
    removedescription:
      "Ste si istý, že chcete odstrániť svoju kartu {{brand}}, ktorá končí na {{last4}}?",
    removetitle: "Odstrániť platobnú metódu",
    removewarning:
      "Toto je vaša predvolená platobná metóda a jej odstránenie môže ovplyvniť vaše aktívne predplatné.",
    setasdefault: "Nastaviť ako predvolené",
    setdefaultdescription:
      "Chcete nastaviť kartu {{brand}} končiacu na {{last4}} ako svoju predvolenú platobnú metódu? Táto karta bude použitá na všetky budúce platby za predplatné.",
    setdefaulttitle: "Nastaviť predvolený spôsob platby",
  },
  dashboardSubscriptionCard: {
    cancelalert: "Zrušiť upozornenie",
    canceldescription:
      "Ste si istý, že chcete zrušiť upozornenie na auto {{brand}} {{model}}? Týmto zastavíte všetky notifikácie a ak budete chcieť toto auto opäť sledovať, budete si musieť nastaviť nové upozornenie.",
    canceltitle: "Zrušiť upozornenie na auto",
    confirmcancel: "Zrušiť upozornenie",
    edit: "Upraviť",
    keepmyalert: "Uložiť moje upozornenie",
    language: "Jazyk",
    price: "Cena",
    pricerange: "Cena",
    updates: "Aktualizácie",
    websites: "Webstránky",
    years: "Roky",
  },
  faq: {
    contactlink: "Kontaktujte náš tím podpory",
    contactprompt: "Stále máte otázky?",
    questions: {
      0: {
        answer:
          "Rýchlosť upozornení závisí od zvolenej frekvencie aktualizácií. Pri predvolenom hodinovom pláne dostanete upozornenia do jednej hodiny od zverejnenia nového inzerátu. Pre takmer okamžité upozornenia (v priebehu niekoľkých minút po zverejnení) môžete prejsť na naše častejšie aktualizačné plány.",
        question: "Ako rýchlo dostanem upozornenia po zverejnení novej ponuky?",
      },
      1: {
        answer:
          "Áno! Môžete si vytvoriť viacero vyhľadávacích profilov s rôznymi kritériami. Každý profil sa počíta ako samostatné predplatné, ale všetky ich môžete spravovať z jedného účtu. Je to ideálne, ak hľadáte rôzne typy vozidiel súčasne.",
        question: "Môžem naraz sledovať viaceré rôzne typy áut?",
      },
      2: {
        answer:
          "Momentálne podporujeme hlavné platformy na inzerciu áut vrátane AutoTrader, CarGurus, Cars.com a Facebook Marketplace. Neustále rozširujeme našu ponuku, aby sme podľa požiadaviek používateľov a regionálnej obľúbenosti zahrnuli viac webových stránok.",
        question: "Ktoré webové stránky momentálne podporujete?",
      },
      3: {
        answer:
          "Vôbec nie! Poskytujeme podrobné návody krok za krokom s textovými aj video inštrukciami, ktoré vám pomôžu nastaviť Telegram bota. Väčšina používateľov zvládne nastavenie za menej než 5 minút, aj bez technických znalostí.",
        question: "Potrebujem technické znalosti na používanie Telegram bota?",
      },
      4: {
        answer:
          "Áno, svoje kritériá vyhľadávania môžete kedykoľvek upraviť vo svojom účte na ovládacom paneli. Zmeny sa prejavia okamžite a vaše notifikácie sa podľa toho aktualizujú bez akéhokoľvek prerušenia služby.",
        question:
          "Môžem zmeniť kritériá vyhľadávania po nastavení predplatného?",
      },
      5: {
        answer:
          "Svoje predplatné môžete kedykoľvek zrušiť v ovládacom paneli svojho účtu. Prejdite do sekcie „Predplatné“, vyberte predplatné, ktoré chcete zrušiť, a kliknite na tlačidlo „Zrušiť predplatné“. Vaša služba zostane aktívna až do konca aktuálneho fakturačného obdobia.",
        question: "Ako zruším svoje predplatné?",
      },
    },
    subtitle: "Nájdite odpovede na najčastejšie otázky o našej službe.",
    title: "Často kladené otázky",
  },
  faqs: {
    general: {
      heading: "Všeobecné otázky",
      howitworks: {
        answer: {
          0: "Nastavíte si svoje kritériá vyhľadávania (značka, model, cenové rozpätie atď.)",
          1: "Vy si vyberáte, ktoré webové stránky chcete sledovať.",
          2: "Prepojíte svoj Telegram účet pre notifikácie",
          3: "Náš systém nepretržite monitoruje vaše vybrané webové stránky pre nové inzeráty.",
          4: "Keď sa objaví vyhovujúce auto, okamžite dostanete notifikáciu na Telegrame so všetkými detailmi a priamym odkazom.",
        },
        question: "Ako to funguje?",
      },
      whatis: {
        answer:
          "Amiquus je služba, ktorá monitoruje viaceré webové stránky s inzerciou áut a vyhľadáva vozidlá podľa vašich špecifických kritérií. Keď sa objaví zodpovedajúci inzerát, okamžite dostanete notifikáciu cez Telegram, vďaka čomu môžete byť medzi prvými, ktorí kontaktujú predajcu a získajú skvelú ponuku.",
        question: "Čo je Amiquus?",
      },
      whichwebsites: {
        answerintro:
          "Aktuálne monitorujeme nasledujúce hlavné platformy na inzerciu áut:",
        list: {
          0: "AutoTrader",
          1: "Cars.com",
          2: "CarGurus",
          3: "TrueCar",
          4: "Facebook Marketplace (cez URL)",
          5: "Craigslist",
          6: "eBay Motors",
        },
        outro:
          "Neustále pridávame nové platformy, aby sme zabezpečili čo najkomplexnejšie pokrytie.",
        question: "Ktoré webové stránky s inzerciou áut sledujete?",
      },
    },
    metaDescription:
      "Nájdite odpovede na najčastejšie otázky o službe monitorovania automobilových inzerátov AMIQUUS, predplatnom, nastavení upozornení a ďalších témach.",
    metaTitle: "Často kladené otázky | Amiquus",
    subscription: {
      cancel: {
        note: "Vaše predplatné zostane aktívne až do konca vášho aktuálneho fakturačného obdobia.",
        question: "Ako zruším svoje predplatné?",
        steps: {
          0: "Prihláste sa do svojho účtu",
          1: "Prejdite na stránku „Profil“",
          2: "Vyberte kartu „Predplatné“",
          3: "Kliknite na tlačidlo „Zrušiť predplatné“ vedľa predplatného, ktoré chcete zrušiť.",
        },
        stepsintro:
          "Svoje predplatné môžete kedykoľvek zrušiť na stránke profilu svojho účtu:",
      },
      cost: {
        answer: {
          0: "Naše ceny začínajú od 79,99 $ mesačne za monitorovanie jednej webovej stránky s aktualizáciami každých 6 hodín. Každá ďalšia stránka stojí 4,99 $ mesačne. Môžete si tiež zvýšiť frekvenciu aktualizácií pre rýchlejšie upozornenia.",
          1: "Pre konkrétne informácie o cenách si pozrite našu sekciu cien na úvodnej stránke.",
        },
        question: "Koľko stojí predplatné?",
      },
      heading: "Otázky o predplatnom",
      limit: {
        intro:
          "Našu službu obmedzujeme na 30 aktívnych predplatiteľov, aby sme zabezpečili:",
        list: {
          0: "Najvyššia kvalita služieb a presnosť údajov",
          1: "Personalizovaná podpora pre každého predplatiteľa",
          2: "Rýchlejšie doručovanie notifikácií počas špičkových časov pridávania inzerátov",
          3: "Etické získavanie údajov, ktoré nepreťažuje cieľové webové stránky",
        },
        outro:
          "Ak sme dosiahli kapacitu, môžete sa pridať na náš čakací zoznam, aby ste boli informovaní, keď sa uvoľní miesto.",
        question: "Prečo existuje obmedzenie počtu odberateľov?",
      },
      multiple: {
        answer:
          "Áno, v rámci jedného účtu môžete vytvoriť viacero predplatných. Každé predplatné môže sledovať rôzne modely áut, značky alebo cenové kategórie. Je to obzvlášť užitočné, ak hľadáte viac vozidiel alebo pomáhate priateľom a rodine s hľadaním auta.",
        question: "Môžem mať viacero predplatných na rôzne modely áut?",
      },
    },
    subtitle:
      "Nájdite rýchle odpovede na časté otázky o našej službe monitorovania inzerátov na autá",
    support: {
      button: "Kontaktujte podporu",
      description:
        "Ak ste nenašli odpoveď na svoju otázku, náš tím podpory je tu, aby vám pomohol!",
      heading: "Stále máte otázky?",
    },
    technical: {
      frequency: {
        intro: "Frekvencia upozornení závisí od:",
        list: {
          0: "Vami zvolený balík frekvencie aktualizácií (od každých 6 hodín do každých 30 minút)",
          1: "Koľko nových inzerátov zodpovedá vašim kritériám",
          2: "Ako je aktívny trh pre vašu vybranú značku/model",
        },
        outro:
          "Oznámenia dostanete len vtedy, keď sa nájdu nové ponuky, ktoré zodpovedajú vašim kritériám.",
        question: "Ako často budem dostávať notifikácie?",
      },
      heading: "Technické otázky",
      privacy: {
        intro:
          "Ochranu vašich údajov berieme vážne a uplatňujeme tieto opatrenia:",
        list: {
          0: "Šifrované dáta počas prenosu aj uloženia",
          1: "Bezpečné platby cez Stripe",
          2: "Žiadne zdieľanie údajov s tretími stranami",
          3: "Kedykoľvek môžete požiadať o svoje údaje alebo ich vymazať",
        },
        outro:
          "Prečítajte si naše úplné Zásady ochrany osobných údajov pre viac informácií.",
        question: "Ako sú moje osobné údaje chránené?",
      },
      telegram: {
        note: "Podrobné krok za krokom návody s obrázkami obrazovky sú k dispozícii počas procesu nastavenia predplatného.",
        question: "Ako si nastavím upozornenia na Telegrame?",
        steps: {
          0: "Vytvorte Telegram bota pomocou BotFather (pokyny sú uvedené počas nastavenia)",
          1: "Skopírujte svoj token bota z BotFather",
          2: "Začnite konverzáciu so svojím botom",
          3: "Získajte svoje chatovacie ID (pokyny sú uvedené počas nastavenia)",
          4: "Zadajte svoj token bota a ID chatu v nastaveniach predplatného AMIQUUS.",
          5: "Otestujte svoje nastavenie notifikácií pomocou tlačidla `Odoslať testovaciu správu`",
        },
        stepsintro: "Na nastavenie upozornení v Telegrame:",
      },
    },
    title: "Často kladené otázky",
  },
  features: {
    account: {
      description:
        "Spravujte viacero vyhľadávacích profilov a upravujte nastavenia predplatného len niekoľkými kliknutiami.",
      title: "Jednoduchá správa účtu",
    },
    filters: {
      description:
        "Nastavte presné kritériá vrátane značky, modelu, roku, najazdených kilometrov a cenového rozpätia, aby ste našli presne to, čo hľadáte.",
      title: "Vlastné filtre",
    },
    frequency: {
      description:
        "Vyberte, ako často budeme kontrolovať nové inzeráty, od hodinových aktualizácií až po sledovanie v reálnom čase.",
      title: "Prispôsobiteľná frekvencia",
    },
    heading: "Prečo si vybrať Amiquus?",
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
        "Sledujte viaceré webové stránky s inzerciami áut naraz bez nutnosti manuálne kontrolovať každú zvlášť.",
      title: "Sledovanie na viacerých stránkach",
    },
    notifications: {
      description:
        "Dostávajte okamžité upozornenia cez Telegram, keď sa objaví auto zodpovedajúce vašim kritériám na predaj.",
      title: "Okamžité upozornenia",
    },
    subheading:
      "Ušetrite čas a nikdy nezmeškajte svoje ideálne auto s našou automatizovanou službou sledovania.",
  },
  footer: {
    about: "O nás",
    blog: "Blog",
    branddescription:
      "Váš osobný asistent na hľadanie tej najlepšej ponuky jazdeného auta v správnom čase.",
    brandtitle: "Amiquus",
    careers: "Kariéra",
    contact: "Kontakt",
    cookies: "Zásady používania súborov cookie",
    copyright: "Všetky práva vyhradené.",
    email: "support@amiquus.com",
    faq: "Často kladené otázky",
    features: "Funkcie",
    gdpr: "Súlad s GDPR",
    getstarted: "Začať",
    legal: "Právne",
    pricing: "Cenník",
    privacy: "Zásady ochrany osobných údajov",
    quicklinks: "Rýchle odkazy",
    support: "Podpora",
    telegram: "Kontaktujte nás na Telegrame",
    terms: "Podmienky používania",
  },
  hero: {
    button1: "Nastavte si upozornenia",
    button2: "Pozrite sa, ako to funguje",
    label: "Sledujte inzeráty ojazdených áut v reálnom čase",
    subtitle:
      "Amiquus vás okamžite upozorní, keď sa váš vysnívaný automobil objaví na viacerých webových stránkach s inzerciou áut. Dostávajte upozornenia cez Telegram hneď, ako sa nájde zhoda.",
    title: "Už nikdy nezmeškajte svoju ideálnu ponuku na auto",
    trustindicators: {
      cancelanytime: "Zrušiť kedykoľvek",
      nosetup: "Nie je potrebné žiadne nastavenie",
      realtime: "Upozornenia v reálnom čase",
      websites: "Sledovanie viac ako 15 webových stránok",
    },
  },
  howItWorks: {
    features: {
      0: "Sledujte viac ako 15 webových stránok s inzerciou áut naraz",
      1: "Prispôsobiteľné vyhľadávacie kritériá s pokročilým filtrovaním",
      2: "Oznámenia v reálnom čase cez Telegram",
      3: "Automatické upozornenia na zníženie ceny a nové inzeráty",
      4: "Jednoduchý proces nastavenia, ktorý trvá menej než 5 minút",
    },
    notificationmockup1: {
      description: "BMW 3 Series, 2019, $32,500 – Práve pridané na AutoTrader",
      title: "Našli sme novú zhodu!",
    },
    notificationmockup2: {
      description:
        "Mercedes C-trieda, 2020, 30 000 míľ – Cena znížená o 2 000 $",
      title: "Telegram upozornenie",
    },
    setalerts: "Nastavte si upozornenia",
    steps: {
      findcar: {
        description:
          "Buďte prví, kto sa dozvie o nových ponukách na AMIQUUS a získajte tie najlepšie ponuky skôr než ostatní.",
        title: "Nájdite svoje ideálne auto",
      },
      notifications: {
        description:
          "Dostávajte upozornenia hneď, ako sa na niektorej z našich sledovaných webových stránok objaví auto, ktoré zodpovedá vašim kritériám.",
        title: "Dostávajte okamžité upozornenia",
      },
      preferences: {
        description:
          "Vyberte značky áut, modely, cenové rozpätie a ďalšie kritériá, ktoré chcete sledovať.",
        title: "Nastavte si svoje preferencie",
      },
      telegram: {
        description:
          "Prepojte svoj Telegram účet, aby ste okamžite dostávali upozornenia na nové inzeráty.",
        title: "Pripojiť Telegram",
      },
    },
    subtitle:
      "Nastavte raz a nechajte náš automatizovaný systém, aby pre vás našiel tú najlepšiu ponuku auta.",
    title: "Ako funguje Amiquus",
    whytitle: "Prečo si vybrať Amiquus?",
  },
  limited: {
    available: {
      buttonText: "Začať teraz",
      description:
        "{{active}} z {{capacity}} predplatných je momentálne aktívnych. Stále je dosť miesta, aby ste sa mohli pridať!",
      title: "Dostupné predplatné",
    },
    full: {
      buttonText: "Pridajte sa na čakaciu listinu",
      description:
        "Dosiahli sme kapacitu 30 aktívnych predplatiteľov. Pridajte sa na čakaciu listinu, aby ste boli informovaní, keď sa uvoľní miesto.",
      title: "Bol dosiahnutý limit predplatného",
    },
    limited: {
      buttonText: "Začať teraz",
      description:
        "Zostáva už len {{remaining}} miest z celkového počtu {{capacity}}. Prihláste sa teraz, kým máme ešte voľné miesta!",
      title: "Obmedzená dostupnosť",
    },
  },
  login: {
    description:
      "Zadajte svoj e-mail a heslo pre prístup k svojmu ovládaciemu panelu.",
    emaillabel: "E-mail",
    errors: {
      invalidemail: "Zadajte platnú e-mailovú adresu.",
      shortpassword: "Heslo musí mať aspoň 6 znakov",
    },
    errortitle: "Prihlásenie zlyhalo",
    genericerror: "Skontrolujte svoje prihlasovacie údaje a skúste to znova.",
    loggingin: "Prihlasovanie...",
    loginbutton: "Prihlásiť sa",
    loginwithgoogle: "Prihlásiť sa cez Google",
    noaccount: "Nemáte účet?",
    or: "alebo",
    passwordlabel: "Heslo",
    registerlink: "Zaregistrovať sa",
    successmessage: "Boli ste úspešne prihlásený.",
    successtitle: "Prihlásenie úspešné",
    title: "Prihláste sa do svojho účtu",
  },
  loginPrompt: {
    description:
      "Pre pokračovanie musíte byť prihlásený. Prihláste sa alebo sa zaregistrujte.",
    login: "Prihlásenie",
    register: "Zaregistrovať sa",
    title: "Prihlásenie je vyžadované",
  },
  notFound: {
    message: "Zabudli ste pridať stránku do routera?",
    title: "404 Stránka nebola nájdená",
  },
  payment: {
    button: {
      processing: "Spracováva sa...",
      submit: "Nastavte spôsob platby",
    },
    toast: {
      error: {
        fallback: "Vyskytla sa neočakávaná chyba. Skúste to znova.",
        title: "Chyba",
      },
      success: {
        description: "Váš spôsob platby bol úspešne nastavený.",
        title: "Úspech",
      },
    },
  },
  personalInfo: {
    actions: {
      continue: "Pokračovať",
      login: "Prihláste sa alebo zaregistrujte pre pokračovanie",
    },
    description:
      "Prosím, zadajte svoje osobné údaje, aby sme vám mohli správne nastaviť notifikácie.",
    errors: {
      email: "Zadajte platný e-mail",
      firstname: "Meno je povinné",
      lastname: "Priezvisko je povinné",
    },
    heading: "Osobné údaje",
    labels: {
      email: "Emailová adresa",
      firstname: "Meno",
      lastname: "Priezvisko",
    },
    placeholders: {
      email: "john.doe@example.com",
      firstname: "Ján",
      lastname: "Jeleň",
    },
  },
  pricing: {
    addons: {
      0: {
        name: "Každá ďalšia webová stránka",
      },
      1: {
        name: "Aktualizácie každých 30 minút",
      },
      2: {
        name: "Aktualizácie každých 15 minút",
      },
      3: {
        name: "Aktualizácie každých 5 minút",
      },
      4: {
        name: "Aktualizácie každú minútu",
      },
    },
    addonstitle: "Doplnky:",
    basetitle: "Základný balík: 79,99 $/mesiac",
    button: "Začať teraz",
    footernote:
      "Všetky plány zahŕňajú neobmedzené konfigurácie vyhľadávania a jednoduchú správu predplatného.",
    includedfeatures: {
      0: "Jedno monitorovanie webovej stránky",
      1: "Hodinové aktualizácie",
      2: "Neobmedzené filtre",
      3: "Telegram notifikácie",
    },
    includedtitle: "Čo je súčasťou:",
    subtitle:
      "Naše ceny sú prispôsobené vašim konkrétnym potrebám. Začnite so základným balíkom a upravte si ho podľa svojich požiadaviek.",
    title: "Jednoduché, transparentné ceny",
  },
  privacy: {
    lastupdated: "Naposledy aktualizované: 21. mája 2025",
    metaDescription:
      "Zistite, ako AMIQUUS spracúva vaše osobné údaje, práva na súkromie a postupy pri zhromažďovaní údajov.",
    metaTitle: "Zásady ochrany osobných údajov | Amiquus",
    sections: {
      0: {
        heading: "Úvod",
        id: "úvod",
        paragraphs: {
          0: "Vitajte v AMIQUUS. Rešpektujeme vaše súkromie a zaväzujeme sa chrániť vaše osobné údaje. Táto zásada ochrany osobných údajov vás informuje o tom, ako sa staráme o vaše osobné údaje, keď navštívite našu webovú stránku, a oboznámi vás s vašimi právami na súkromie a tým, ako vás zákon chráni.",
        },
      },
      1: {
        heading: "Informácie, ktoré zhromažďujeme",
        id: "údaje-ktoré-zhromažďujeme",
        list: {
          0: "Osobné údaje: E-mailová adresa, meno, priezvisko a profilová fotografia (ak je poskytnutá prostredníctvom autentifikácie tretej strany).",
          1: "Údaje o účte: Vaše prihlasovacie údaje a nastavenia účtu.",
          2: "Údaje o používaní: Informácie o tom, ako používate našu webovú stránku a služby.",
          3: "Preferencie vyhľadávania áut: Kritériá vozidla, ktoré nastavujete na sledovanie (značka, model, cenové rozpätie atď.).",
          4: "Informácie o Telegrame: Ak sa rozhodnete prijímať upozornenia cez Telegram, ukladáme váš Telegram chat ID a token bota.",
          5: "Platobné informácie: Keď uskutočníte nákup, náš platobný procesor zhromažďuje platobné údaje potrebné na spracovanie vašej transakcie. AMIQUUS neukladá úplné informácie o vašej kreditnej karte.",
        },
        paragraphs: {
          0: "Zhromažďujeme viacero rôznych typov informácií na rôzne účely, aby sme vám mohli poskytovať a zlepšovať naše služby.",
        },
      },
      2: {
        heading: "Ako používame vaše údaje",
        id: "ako-používame-údaje",
        list: {
          0: "Za poskytovanie a udržiavanie našej služby",
          1: "Aby sme vás informovali o zmenách našej služby",
          2: "Aby ste sa mohli zúčastniť interaktívnych funkcií našej služby",
          3: "Poskytovať zákaznícku podporu",
          4: "Zhromažďovať analýzy alebo cenné informácie, aby sme mohli zlepšiť našu službu",
          5: "Na monitorovanie používania našej služby",
          6: "Na zisťovanie, predchádzanie a riešenie technických problémov",
          7: "Na spracovanie platieb a predchádzanie podvodným transakciám",
          8: "Na zasielanie ponúk áut, ktoré zodpovedajú vašim preferenciám, prostredníctvom vami zvoleného spôsobu notifikácie",
        },
        paragraphs: {
          0: "Vaše osobné údaje používame na nasledujúce účely:",
        },
      },
      3: {
        heading: "Ukladanie dát a bezpečnosť",
        id: "ukladanie dát",
        paragraphs: {
          0: "Zavádzame primerané bezpečnostné opatrenia na ochranu vašich osobných údajov pred neoprávneným prístupom, zmenou, zverejnením alebo zničením. Všetky údaje sú uložené na zabezpečených serveroch so šifrovaním počas prenosu aj v pokoji.",
          1: "Vaše osobné údaje uchovávame len po dobu nevyhnutnú na účely uvedené v týchto zásadách ochrany osobných údajov, vrátane splnenia akýchkoľvek zákonných, regulačných, daňových, účtovných alebo výkazníckych požiadaviek.",
        },
      },
      4: {
        heading: "Vaše práva podľa GDPR",
        id: "všeobecné nariadenie o ochrane údajov",
        list: {
          0: "Právo na prístup, aktualizáciu alebo vymazanie informácií, ktoré o vás máme",
          1: "Právo na opravu",
          2: "Právo namietať",
          3: "Právo na obmedzenie",
          4: "Právo na prenosnosť údajov",
          5: "Právo odvolať súhlas",
        },
        paragraphs: {
          0: "Ak ste obyvateľom Európskeho hospodárskeho priestoru (EHP), máte určité práva na ochranu osobných údajov. AMIQUUS sa snaží prijať primerané opatrenia, aby vám umožnil opraviť, upraviť, vymazať alebo obmedziť používanie vašich osobných údajov.",
          1: "Máte nasledujúce práva na ochranu údajov:",
        },
      },
      5: {
        heading: "Zásady používania súborov cookie",
        id: "súbory cookie",
        list: {
          0: "Zostaňte prihlásení",
          1: "Pochopte, ako používate našu webovú stránku",
          2: "Zapamätaj si svoje nastavenia",
          3: "Prispôsobte si svoje prostredie",
        },
        paragraphs: {
          0: "Súbory cookie sú malé kúsky údajov uložené vo vašom zariadení. Súbory cookie používame na:",
        },
      },
      6: {
        heading: "Služby tretích strán",
        id: "tretia strana",
        list: {
          0: "Platobné procesory (Stripe)",
          1: "Poskytovatelia analytiky",
          2: "Služby zákazníckej podpory",
          3: "Poskytovatelia hostingu a cloudovej infraštruktúry",
        },
        paragraphs: {
          0: "Môžeme zamestnávať tretie strany a jednotlivcov na uľahčenie našej služby, poskytovanie služby v našom mene, vykonávanie úloh súvisiacich so službou alebo na pomoc pri analýze, ako sa naša služba používa.",
          1: "Tieto tretie strany zahŕňajú:",
        },
        paragraphs2: {
          0: "Tieto tretie strany majú prístup k vašim osobným údajom iba za účelom vykonávania týchto úloh v našom mene a sú povinné ich nezverejniť ani nepoužiť na iný účel.",
        },
      },
      7: {
        heading: "Zmeny týchto zásad ochrany osobných údajov",
        id: "zmeny",
        paragraphs: {
          0: "Našu politiku ochrany osobných údajov môžeme z času na čas aktualizovať. O všetkých zmenách vás budeme informovať zverejnením novej politiky ochrany osobných údajov na tejto stránke a aktualizovaním dátumu „Posledná aktualizácia“.",
          1: "Odporúčame vám pravidelne si prečítať tieto zásady ochrany osobných údajov kvôli možným zmenám. Zmeny týchto zásad ochrany osobných údajov nadobúdajú účinnosť zverejnením na tejto stránke.",
        },
      },
      8: {
        heading: "Kontaktujte nás",
        id: "kontakt",
        list: {
          0: "E-mailom: privacy@amiquus.com",
          1: "Návštevou kontaktnej stránky na našej webovej stránke",
        },
        paragraphs: {
          0: "Ak máte akékoľvek otázky týkajúce sa týchto zásad ochrany osobných údajov, kontaktujte nás:",
        },
      },
    },
    title: "Zásady ochrany osobných údajov",
  },
  profile: {
    account: {
      cancel: "Zrušiť",
      desc: "Aktualizujte informácie a nastavenia svojho účtu.",
      email: "E-mail",
      name: "Meno",
      save: "Uložiť zmeny",
      title: "Nastavenia účtu",
      username: "Používateľské meno",
    },
    alerts: {
      add: "Pridať nové upozornenie",
      cta: "Vytvorte svoje prvé upozornenie",
      desc: "Spravujte svoje upozornenia na vyhľadávanie áut a nastavenia notifikácií.",
      none: "Nemáte žiadne aktívne upozornenia na autá.",
      title: "Odobery upozornení na autá",
      warning:
        "⚠️ Zmeny vášho predplatného sa prejavia v nasledujúcom fakturačnom období a až po úspešnej platbe. Ak platba zlyhá, vaše aktuálne nastavenie upozornení zostane nezmenené.",
    },
    logout: {
      desc: "Ste si istý, že sa chcete odhlásiť zo svojho účtu?",
      success: "Boli ste úspešne odhlásený.",
      title: "Odhlásiť sa",
    },
    payments: {
      desc: "Spravujte svoje platobné metódy pre fakturáciu predplatného.",
      encrypted: "Vaše platobné údaje sú šifrované a bezpečne uložené.",
      none: "Nemáte uložené žiadne platobné metódy.",
      title: "Spôsoby platby",
    },
    security: {
      confirm: "Potvrďte nové heslo",
      current: "Aktuálne heslo",
      desc: "Spravujte svoje bezpečnostné nastavenia a nastavenia súkromia.",
      new: "Nové heslo",
      title: "Súkromie a bezpečnosť",
      update: "Aktualizovať heslo",
    },
    sidebar: {
      account: "Nastavenia účtu",
      logout: "Odhlásiť sa",
      membersince: "Člen od",
      methods: "Spôsoby platby",
      privacy: "Súkromie a bezpečnosť",
      subscriptions: "Predplatné",
    },
    tabs: {
      alerts: "Moje upozornenia",
      payments: "Spôsoby platby",
    },
  },
  register: {
    alreadyhave: "Už máte účet?",
    and: "a",
    confirmpassword: "Potvrďte heslo",
    createbtn: "Vytvoriť účet",
    description: "Zaregistrujte sa a začnite sledovať svoje vysnívané auto",
    email: "E-mail",
    firstname: "Meno",
    google: "Zaregistrujte sa cez Google",
    lastname: "Priezvisko",
    login: "Prihlásiť sa",
    orcontinue: "Alebo pokračujte s",
    password: "Heslo",
    privacypolicy: "Zásady ochrany osobných údajov",
    termsnotice: "Súhlasím s",
    termsofservice: "Podmienky používania",
    title: "Vytvoriť účet",
    toast: {
      failure: {
        desc: "Skontrolujte svoje údaje a skúste to znova.",
        title: "Registrácia zlyhala",
      },
      invalidusername: {
        desc: "Používateľské meno musí byť alfanumerické a mať 3 až 20 znakov.",
        title: "Neplatné používateľské meno",
      },
      missingfields: {
        desc: "Prosím, vyplňte všetky povinné polia",
        title: "Chýbajúce polia",
      },
      passwordmismatch: {
        desc: "Uistite sa, že sa vaše heslá zhodujú.",
        title: "Heslá sa nezhodujú",
      },
      success: {
        desc: "Vitajte v AMIQUUS! Budete presmerovaní na overenie vašej e-mailovej adresy.",
        title: "Registrácia úspešná",
      },
      termsnotaccepted: {
        desc: "Musíte súhlasiť s podmienkami a zásadami ochrany osobných údajov, aby ste mohli pokračovať.",
        title: "Podmienky neboli akceptované",
      },
    },
    username: "Používateľské meno",
  },
  review: {
    actions: {
      previous: "Predchádzajúce",
      submit: "Prejsť k platbe",
    },
    description:
      "Pred pokračovaním k platbe si, prosím, skontrolujte podrobnosti svojho predplatného.",
    monitoring: {
      facebookurl: "Facebook URL",
      title: "Nastavenia monitorovania",
      updatefrequency: "Frekvencia aktualizácií",
      websites: "Webstránky",
    },
    notification: {
      language: "Jazyk upozornení",
      telegram: "Telegram Bot",
      title: "Nastavenia upozornení",
    },
    personal: {
      email: "E-mail",
      name: "Meno",
      title: "Osobné údaje",
    },
    specs: {
      brand: "Značka",
      fueltype: "Typ paliva",
      mileage: "Dojazd (km)",
      model: "Model",
      price: "Cenové rozpätie (€)",
      title: "Špecifikácie auta",
      yearrange: "Rozsah rokov",
    },
    summary: {
      base: "Základné predplatné",
      extrawebsites: "Ďalšie webové stránky",
      frequencyupgrade: "Aktualizácia frekvencie",
      title: "Súhrn predplatného",
      total: "Spolu (mesačne)",
    },
    terms: {
      checkbox: "Súhlasím s",
      error: "Musíte súhlasiť so zmluvnými podmienkami",
      note: "Vaše predplatné sa bude automaticky obnovovať každý mesiac. Predplatné môžete kedykoľvek zrušiť.",
      privacy: "Zásady ochrany osobných údajov",
      tos: "Podmienky poskytovania služby",
    },
    title: "Skontrolujte svoje predplatné",
  },
  setupAlerts: {
    basetitle: "79,99 $/mesiac",
    basicplan: "Základný balík",
    button: "Spustiť moju službu upozornenia na auto",
    cancel: "Zrušiť kedykoľvek",
    subtitle:
      "Nakonfigurujte svojho Telegram bota, aby ste dostávali upozornenia o svojom vysnívanom aute",
    title: "Nastavte si upozornenia na svoj automobil",
    toasts: {
      contactbot: {
        description:
          "Aby ste mohli dostávať upozornenia na autá, musíte začať chat s naším Telegram botom a poslať správu. Postupujte podľa pokynov nižšie na kontaktovanie bota.",
        title: "Vyžaduje sa kontaktný bot",
      },
      error: {
        title: "Chyba pri vytváraní predplatného",
      },
      success: {
        description: "Vaše predplatné bolo úspešne vytvorené",
        title: "Predplatné bolo vytvorené",
      },
      terms: {
        description:
          "Musíte súhlasiť s podmienkami služby, aby ste mohli pokračovať.",
        title: "Podmienky neboli akceptované",
      },
    },
  },
  signUp: {
    cta: "Dostávajte upozornenia teraz",
    heading: "Vytvorte si upozornenie na auto",
    subheading:
      "Nastavte si personalizované upozornenia na inzeráty áut v niekoľkých jednoduchých krokoch.",
    toast: {
      error: {
        description:
          "Nepodarilo sa nám vytvoriť vaše predplatné. Skúste to prosím znova neskôr.",
        title: "Predplatné zlyhalo",
      },
      success: {
        description: "Vaše predplatné bolo úspešne vytvorené.",
        title: "Predplatné bolo vytvorené",
      },
    },
    waitlist: {
      cta: "Pridajte sa na čakaciu listinu",
      message:
        "Momentálne máme plnú kapacitu. Pridajte sa na čakací zoznam, aby ste boli informovaní, keď sa uvoľní miesto.",
    },
  },
  subscription: {
    actions: {
      back: "Späť",
      save: "Uložiť zmeny",
    },
    description:
      "Svoje predplatné môžete kedykoľvek pozastaviť. Keď pozastavíte svoje predplatné, vaše upozornenia na auto sa zastavia, kým ich znova neaktivujete.",
    error: "Vrátiť sa na nástenku",
    form: {
      status: {
        active: "Aktívne",
        label: "Stav",
        paused: "Pozastavené",
        placeholder: "Vyberte stav",
      },
    },
    notfound: "Predplatné nebolo nájdené",
    notfoundsub: "Späť na nástenku",
    subtitle: "Upravte svoje údaje o predplatnom nižšie",
    title: "Podrobnosti predplatného",
    toasts: {
      error: {
        title: "Chyba pri aktualizácii predplatného",
      },
      priceerror: {
        description:
          "Predplatné nemôžete naraz pozastaviť aj upraviť cenu. Musíte ho buď pozastaviť, alebo upraviť cenu.",
        title: "Nie je možné aktualizovať predplatné",
      },
      success: {
        description:
          "Vaše predplatné pre {{brand}} {{model}} bolo úspešne aktualizované.",
        title: "Predplatné bolo aktualizované",
      },
    },
  },
  support: {
    emailsupport: {
      description: "Pošlite nám e-mail a ozveme sa vám do 24 hodín.",
      email: "support@amiquus.com",
      title: "E-mailová podpora",
    },
    faqheading: "Najčastejšie kladené otázky",
    faqs: {
      cancel: {
        answer:
          "Svoje predplatné môžete kedykoľvek zrušiť na stránke profilu svojho účtu. Kliknite na kartu „Predplatné“, vyhľadajte predplatné, ktoré chcete zrušiť, a kliknite na tlačidlo „Zrušiť predplatné“. Vaša služba zostane aktívna až do konca aktuálneho fakturačného obdobia.",
        question: "Ako zruším svoje predplatné?",
      },
      facebook: {
        answer:
          "Áno, podporujeme sledovanie Facebook Marketplace. Na nastavenie tejto funkcie budete musieť zadať URL adresu stránky s výsledkami vyhľadávania na Facebook Marketplace s použitými požadovanými filtrami. Náš systém potom bude sledovať toto konkrétne vyhľadávanie pre nové inzeráty, ktoré zodpovedajú vašim kritériám.",
        question: "Môžem sledovať Facebook Marketplace?",
      },
      full: {
        answer:
          "Aby sme zachovali vysokú kvalitu našich služieb, obmedzujeme počet aktívnych predplatných. Ak sú všetky miesta obsadené, môžete sa pridať na náš čakací zoznam. Dáme vám vedieť hneď, ako sa uvoľní miesto, a budete mať prednostné právo si ho uplatniť predtým, než ho sprístupníme širokej verejnosti.",
        question: "Čo sa stane, ak sú všetky odberateľské sloty obsadené?",
      },
      telegram: {
        intro:
          "Ak chcete nastaviť upozornenia cez Telegram, postupujte podľa týchto krokov:",
        outro:
          "Ak potrebujete ďalšiu pomoc, náš podrobný sprievodca je dostupný vo vašom ovládacom paneli.",
        question: "Ako si nastavím upozornenia v Telegrame?",
        steps: {
          0: "Vytvorte Telegram bota pomocou BotFather-a (návod nájdete v našom dashboarde)",
          1: "Skopírujte svoj API token a ID chatu",
          2: "Zadajte tieto údaje v nastaveniach svojho účtu v časti „Preferencie upozornení“",
          3: "Otestujte svoje pripojenie pomocou tlačidla „Odoslať testovaciu správu“",
        },
      },
      updates: {
        answer:
          "Frekvencia aktualizácií závisí od vášho predplatného. Základné plány dostávajú aktualizácie každých 6 hodín, zatiaľ čo prémiové plány môžu získavať aktualizácie už každých 30 minút. Aktuálnu frekvenciu aktualizácií si môžete pozrieť a upraviť v nastaveniach predplatného.",
        question: "Ako často sa aktualizujú inzeráty na autá?",
      },
    },
    metaDescription:
      "Získajte pomoc so svojím účtom AMIQUUS, predplatným alebo upozorneniami na auto. Prezrite si naše centrum pomoci alebo kontaktujte náš tím podpory pre asistenciu.",
    metaTitle: "Podpora | Amiquus - Centrum pomoci",
    stillneedhelp: {
      button: "Kontaktujte podporu",
      description:
        "Ak ste nenašli odpoveď na svoju otázku, neváhajte kontaktovať náš tím podpory. Sme tu, aby sme vám pomohli!",
      heading: "Stále potrebujete pomoc?",
    },
    subtitle:
      "Nájdite odpovede na časté otázky alebo kontaktujte náš tím podpory",
    title: "Centrum podpory",
  },
  telegram: {
    actions: {
      continue: "Pokračovať",
      previous: "Predchádzajúce",
    },
    bottokenexample: "Príklad: 5432109876:ABCDefGhIJklMNoPqrSTuvWXyz1234567890",
    bottokenlabel: "Token Telegram bota",
    bottokenplaceholder: "Zadajte svoj token bota od BotFather",
    caralerttitle: "🚗 Nové vozidlo!",
    chatiddescription:
      "Toto získate, ak napíšete správu @userinfobot na Telegrame.",
    chatidlabel: "Váš Telegram Chat ID",
    chatidplaceholder: "Zadajte svoj Telegram chat ID",
    chatidsteps: {
      0: 'Otvorte Telegram a vyhľadajte "userinfobot"',
      1: "Pošli akúkoľvek správu botovi",
      2: "Bot vám odpovie s vašimi informáciami vrátane vášho Chat ID",
      3: "Skopírujte svoje ID chatu",
    },
    chatidtitle: "Ako získať svoj Telegram Chat ID:",
    confirmcontact: "Začal som chat s botom a poslal správu.",
    contact: "Kontaktujte nás",
    contactbotinstruction:
      "Začnite chat s naším Telegram botom kliknutím na odkaz nižšie a pošlite mu správu:",
    contactbotnote:
      "Toto je potrebné na prijímanie upozornení na autá. Ak ste na počítači, môžete naskenovať QR kód.",
    description:
      "Nastavte upozornenia na Telegrame zadaním tokenu bota a ID chatu.",
    errors: {
      chatid: "Telegram chat ID je povinný",
      language: "Je potrebné vybrať jazyk upozornenia.",
      token: "Token Telegram bota je povinný",
      username: "Používateľské meno na Telegrame je povinné",
    },
    examples: {
      chatid: "Toto získate, ak napíšete správu @userinfobot na Telegrame.",
      token: "Rozumiem! Prosím, zadajte text, ktorý chcete preložiť.",
    },
    heading: "Nastavenie Telegramu",
    helpdescription:
      "Pozrite si video nižšie pre podrobný návod krok za krokom.",
    helptitle:
      "Potrebujete pomoc s nastavením vášho Telegram Bot Tokenu a Chat ID?",
    info: "Ak máte problémy s vytvorením telegram bota, kontaktujte nás a zavoláme vám, aby sme vám pomohli s jeho vytvorením.",
    instructions: {
      botstep1: "Otvorte Telegram a vyhľadajte @BotFather",
      botstep2: "Zadajte príkaz /newbot",
      botstep3: "Postupujte podľa pokynov na vytvorenie bota",
      botstep4: "Skopírujte token, ktorý poskytol BotFather",
      bottitle: "Ako získať token pre Telegram bota:",
      chatstep1: "Otvorte Telegram a vyhľadajte @userinfobot",
      chatstep2: "Pošlite akúkoľvek správu botovi",
      chatstep3: "Bot vám odpovie s vašimi informáciami vrátane vášho Chat ID",
      chatstep4: "Skopírujte ID chatu (je to číslo)",
      chattitle: "Ako získať svoj Telegram Chat ID:",
    },
    kilometreslabel: "Kilometre: {{kms}}",
    labels: {
      chatid: "Váš Telegram Chat ID",
      language: "Jazyk notifikácií",
      token: "Token Telegram bota",
      username: "Telegram používateľské meno",
    },
    languagelabel: "Jazyk upozornení",
    languageplaceholder: "Vyberte jazyk správy pre Telegram",
    languages: {
      de: "Nemčina",
      en: "Angličtina",
      es: "Slovenčina",
      fr: "Francúzština",
      it: "Slovenčina",
    },
    locationlabel: "Poloha: {{location}}",
    placeholders: {
      chatid: "Zadajte svoj Telegram chat ID",
      language: "Vyberte jazyk správy pre Telegram",
      token: "Zadajte svoj token bota od BotFather",
      username: "Zadajte svoje používateľské meno na Telegrame",
    },
    previewtitle: "Náhľad upozornení Telegram",
    pricelabel: "Cena: {{price}}",
    setupsteps: {
      0: 'Otvorte Telegram a vyhľadajte "BotFather"',
      1: "Začnite chat s BotFather kliknutím na „Štart“",
      2: "Napíš /newbot a postupuj podľa pokynov na vytvorenie nového bota",
      3: "Zvoľte meno pre svojho bota",
      4: "Zvoľte používateľské meno pre svojho bota (musí končiť na 'bot')",
      5: "Skopírujte API token poskytnutý BotFatherom",
      6: "Pošlite správu svojmu novému botovi, aby ste aktivovali chat",
    },
    setuptitle: "Pokyny na nastavenie:",
    subheading: "Nastavte svojho Telegram bota",
    usernamedescription:
      "Toto je používateľské meno na vašom Telegram účte (bez znaku @).",
    videodescription:
      "Pozrite si video nižšie pre podrobný návod krok za krokom.",
    videoprompt:
      "Potrebujete pomoc s nastavením vášho Telegram Bot Tokenu a Chat ID?",
    viewlisting: "Zobraziť inzerát →",
  },
  terms: {
    lastupdated: "Naposledy aktualizované: 21. mája 2025",
    metaDescription:
      "Prečítajte si Podmienky služby AMIQUUS, ktoré upravujú vaše používanie našej služby monitorovania a notifikácií o inzerátoch na autá.",
    metaTitle: "Podmienky používania | Amiquus",
    sections: {
      1: {
        heading: "Súhlas s podmienkami",
        id: "dohoda",
        paragraphs: {
          0: "Tieto Podmienky poskytovania služieb predstavujú právne záväznú dohodu medzi vami a spoločnosťou AMIQUUS, ktorá sa týka vášho prístupu k našej webovej stránke a službám a ich používania.",
          1: "Prístupom k našim službám alebo ich používaním súhlasíte s týmito Podmienkami. Ak nesúhlasíte s ktoroukoľvek časťou podmienok, nesmiete službu používať.",
        },
      },
      10: {
        heading: "Vyhlásenie o vylúčení zodpovednosti",
        id: "vylúčenie zodpovednosti",
        paragraphs: {
          0: "Používanie služby je na vlastné riziko. Služba je poskytovaná v stave „TAK AKO JE“ a „AKO JE DOSTUPNÁ“. Služba je poskytovaná bez akýchkoľvek záruk, výslovných alebo predpokladaných.",
          1: "Amiquus nezaručuje, že služba bude nepretržitá, včasná, bezpečná alebo bez chýb, ani že výsledky získané používaním služby budú presné alebo spoľahlivé.",
        },
      },
      11: {
        heading: "Zásady používania súborov cookie",
        id: "súbory cookie",
        paragraphs: {
          0: "Naša politika používania súborov cookie vysvetľuje, čo sú súbory cookie, ako ich používame, ako môžu tretie strany, s ktorými spolupracujeme, používať súbory cookie v našej službe, vaše možnosti týkajúce sa súborov cookie a ďalšie informácie o súboroch cookie. Prosím, pozrite si časť o súboroch cookie v našich Zásadách ochrany osobných údajov.",
        },
      },
      12: {
        heading: "Rozhodné právo",
        id: "rozhodné právo",
        paragraphs: {
          0: "Tieto podmienky sa riadia a vykladajú v súlade so zákonmi Spojených štátov amerických, bez ohľadu na ustanovenia o kolízii právnych predpisov.",
          1: "Naše nepresadzovanie akéhokoľvek práva alebo ustanovenia týchto Podmienok sa nebude považovať za vzdanie sa týchto práv. Ak ktorékoľvek ustanovenie týchto Podmienok bude súdom vyhlásené za neplatné alebo nevymáhateľné, ostatné ustanovenia týchto Podmienok zostávajú v platnosti.",
        },
      },
      13: {
        heading: "Kontaktujte nás",
        id: "kontakt",
        list: {
          0: "E-mailom: legal@amiquus.com",
          1: "Návštevou kontaktnej stránky na našej webovej stránke",
        },
        paragraphs: {
          0: "Ak máte akékoľvek otázky týkajúce sa týchto Podmienok, kontaktujte nás:",
        },
      },
      2: {
        heading: "Zmeny podmienok",
        id: "zmeny",
        paragraphs: {
          0: "Vyhradzujeme si právo podľa vlastného uváženia kedykoľvek upraviť alebo nahradiť tieto Podmienky. Ak bude zmena podstatná, vynaložíme primerané úsilie, aby sme poskytli aspoň 30-dňové oznámenie pred nadobudnutím účinnosti nových podmienok.",
          1: "Pokračovaním v prístupe alebo používaní našej služby po nadobudnutí účinnosti týchto zmien súhlasíte s tým, že budete viazaní upravenými podmienkami. Ak s novými podmienkami nesúhlasíte, prestaňte službu používať.",
        },
      },
      3: {
        heading: "Podmienky účtu",
        id: "účet",
        list: {
          0: "Musíte mať aspoň 18 rokov",
          1: "Dokončite registráciu",
          2: "Poskytnite presné, úplné a aktuálne informácie",
          3: "Buďte zodpovední za bezpečnosť svojho účtu a hesla.",
          4: "Buďte zodpovední za všetky aktivity, ktoré sa uskutočnia pod vaším účtom",
          5: "Okamžite nás informujte, ak sa dozviete o akomkoľvek narušení bezpečnosti alebo neoprávnenom použití vášho účtu.",
        },
        paragraphs: {
          0: "Ak chcete používať naše služby, musíte:",
        },
      },
      4: {
        heading: "Platobné podmienky",
        id: "platba",
        list: {
          0: "Všetky poplatky sú uvedené bez dane, ktorá bude pripočítaná, ak to bude relevantné.",
          1: "Ceny predplatného sa môžu zmeniť s 30-dňovým predchádzajúcim oznámením.",
          2: "Predplatné sa automaticky obnovuje, pokiaľ ho nezrušíte pred začiatkom ďalšieho fakturačného obdobia.",
          3: "Vrátenia sa posudzujú individuálne podľa našich pravidiel pre vrátenie peňazí.",
          4: "Používame Stripe na bezpečné spracovanie platieb a všetky platobné údaje sú uložené u Stripe.",
        },
        paragraphs: {
          0: "Amiquus ponúka predplatné služby za nasledujúcich podmienok:",
        },
      },
      5: {
        heading: "Kapacitné obmedzenia",
        id: "kapacita",
        list: {
          0: "Noví používatelia sa môžu pridať na náš čakací zoznam.",
          1: "Poradie na čakacej listine je určené podľa poradia prihlásenia.",
          2: "Keď bude kapacita dostupná, používatelia na čakacej listine budú informovaní v poradí.",
          3: "Vyhradzujeme si právo kedykoľvek upraviť kapacitné obmedzenia.",
        },
        paragraphs: {
          0: "Aby bola zachovaná kvalita a spoľahlivosť služby, AMIQUUS obmedzuje počet aktívnych predplatných na 30. Keď je tento limit dosiahnutý:",
        },
      },
      6: {
        heading: "Obmedzenia web scrapingu",
        id: "získavanie údajov",
        list: {
          0: "Amiquus rešpektuje podmienky používania webových stránok, ktoré monitorujeme.",
          1: "Zavádzame obmedzovanie rýchlosti a dodržiavame zásady ohľaduplného prehľadávania",
          2: "Dostupnosť niektorých webových stránok sa môže meniť v závislosti od ich podmienok a technických opatrení.",
          3: "Nezaručujeme úplnosť ani aktuálnosť získaných údajov.",
        },
        paragraphs: {
          0: "Naša služba pristupuje k údajom a spracúva ich z viacerých webových stránok s inzerciou áut. Používaním našej služby beriete na vedomie, že:",
        },
      },
      7: {
        heading: "Duševné vlastníctvo",
        id: "intelektuálny",
        paragraphs: {
          0: "Služba AMIQUUS, vrátane jej pôvodného obsahu, funkcií a funkcionality, je a zostane výhradným vlastníctvom spoločnosti AMIQUUS. Naša služba je chránená autorskými právami, ochrannými známkami a ďalšími zákonmi Spojených štátov amerických a zahraničných krajín.",
          1: "Naše ochranné známky a dizajn nesmú byť použité v súvislosti so žiadnym produktom alebo službou bez predchádzajúceho písomného súhlasu spoločnosti AMIQUUS.",
        },
      },
      8: {
        heading: "Ukončenie",
        id: "ukončenie",
        paragraphs: {
          0: "Váš účet môžeme okamžite ukončiť alebo pozastaviť bez predchádzajúceho upozornenia či zodpovednosti, z akéhokoľvek dôvodu, vrátane (bez obmedzenia) porušenia Podmienok.",
          1: "Po ukončení vám okamžite zaniká právo používať službu. Ak si želáte zrušiť svoj účet, môžete jednoducho prestať službu používať alebo nás kontaktovať so žiadosťou o vymazanie účtu.",
        },
      },
      9: {
        heading: "Obmedzenie zodpovednosti",
        id: "obmedzenia",
        list: {
          0: "Váš prístup k službe, jej používanie alebo neschopnosť pristupovať k službe či ju používať",
          1: "Akékoľvek správanie alebo obsah tretej strany na službe",
          2: "Akýkoľvek obsah získaný zo služby",
          3: "Neoprávnený prístup, použitie alebo zmena vašich prenosov alebo obsahu",
        },
        paragraphs: {
          0: "Za žiadnych okolností nenesie AMIQUUS ani jeho riaditelia, zamestnanci, partneri, zástupcovia, dodávatelia alebo pridružené osoby zodpovednosť za akékoľvek nepriame, náhodné, osobitné, následné alebo represívne škody, vrátane, bez obmedzenia, straty zisku, údajov, použitia, dobrej povesti alebo iných nehmotných strát, ktoré vzniknú v dôsledku:",
        },
      },
    },
    title: "Podmienky používania",
  },
  verifyEmail: {
    codelabel: "Overovací kód",
    description: "Overovací kód bol odoslaný na váš e-mail.",
    footernote: "Nedostali ste kód? Skontrolujte si priečinok so spamom.",
    resendbutton: "Znova odoslať kód",
    resendcountdown: "Kód môžete odoslať znova o {{seconds}}s",
    title: "Overte svoj e-mail",
    toast: {
      emailupdated: "E-mail aktualizovaný",
      entervalidemail: "Zadajte platnú e-mailovú adresu.",
      error: "Chyba",
      failed: "Overenie zlyhalo",
      invalidemail: "Neplatný e-mail",
      resent: "Overovací kód bol znovu odoslaný",
      sameemail: "Rovnaký e-mail",
      sameemaildesc: "Nový e-mail je rovnaký ako aktuálny e-mail.",
      verified: "E-mail bol overený",
    },
    updateemailbutton: "Aktualizovať e‑mail",
    updateemaillabel: "Aktualizovať e-mail",
    verifybutton: "Overte e-mail",
  },
  waitlist: {
    cantjoin: {
      description: "Dáme vám vedieť, hneď ako sa uvoľní miesto na predplatné.",
      title: "Pridajte sa na čakaciu listinu",
    },
    form: {
      email: {
        description:
          "Tento e-mail použijeme na to, aby sme vás informovali, keď sa uvoľní miesto.",
        label: "E-mail",
        placeholder: "john.doe@example.com",
      },
      firstname: {
        label: "Meno",
        placeholder: "Ján",
      },
      lastname: {
        label: "Priezvisko",
        placeholder: "Jeleň",
      },
      submit: "Pridajte sa na čakaciu listinu",
      submitting: "Odosielanie...",
    },
    limited: {
      available:
        "Zostáva {{remaining}} z celkových {{capacity}} dostupných predplatiteľských miest.",
      description:
        "Obmedzujeme náš systém na iba 30 aktívnych predplatiteľov, aby sme zaistili:",
      full: "Všetky miesta na predplatné sú momentálne obsadené. Pridajte sa na čakaciu listinu, aby ste boli informovaní, keď sa uvoľní miesto.",
      heading: "Obmedzená dostupnosť",
      points: {
        0: "Výnimočná spoľahlivosť a rýchlosť získavania dát pre všetkých používateľov",
        1: "Znížené riziko zablokovania zo strany webových stránok s inzerciou áut",
        2: "Personalizovaná podpora pre každého predplatiteľa",
        3: "Spravodlivé rozdelenie serverových zdrojov",
      },
    },
    metaDescription:
      "Pridajte sa na čakací zoznam AMIQUUS, aby ste boli informovaní, keď budú predplatné dostupné.",
    metaTitle: "Pridajte sa na čakaciu listinu – Amiquus",
    subtitle:
      "Vzhľadom na vysoký dopyt obmedzujeme počet aktívnych predplatných, aby sme všetkým používateľom zabezpečili najvyššiu kvalitu služby.",
    success: {
      button: "Späť na hlavnú stránku",
      description: "Dáme vám vedieť, hneď ako sa uvoľní miesto na predplatné.",
      message:
        "Ďakujeme za váš záujem o Amiquus! Pridali sme vás na náš čakací zoznam a budeme vás kontaktovať, hneď ako sa uvoľní miesto.",
      title: "Ste na čakacej listine!",
    },
    title: "Pridajte sa na náš zoznam čakateľov",
  },
  waitlistPrompt: {
    button: "Pridajte sa na čakaciu listinu",
    description:
      "Momentálne máme plnú kapacitu. Pridajte sa na čakací zoznam, aby ste boli informovaní, keď sa uvoľní miesto.",
    title: "Pridajte sa na čakaciu listinu",
  },
  websiteSelection: {
    actions: {
      continue: "Pokračovať",
      previous: "Predchádzajúce",
    },
    description:
      "Vyberte si, ktoré webové stránky chcete sledovať a ako často chcete dostávať aktualizácie.",
    errors: {
      facebookurl:
        "URL Facebook Marketplace je povinný, keď je vybraný Facebook",
      websites: "Je potrebné vybrať aspoň jednu webovú stránku.",
    },
    heading: "Výber webovej stránky",
    help: {
      facebookurl:
        "Vložte sem URL výsledkov vyhľadávania na Facebook Marketplace.",
      updatefrequency:
        "Ako často by sme mali kontrolovať nové inzeráty? Vyššia frekvencia môže znamenať vyššie náklady.",
      videodesc:
        "Pozrite si video nižšie pre podrobné inštrukcie krok za krokom.",
      videotitle:
        "Potrebujete pomocť s vyhľadaním vášho odkazu na vyhľadávanie na Facebook Marketplace?",
      websites:
        "Vyberte jednu alebo viac webových stránok na sledovanie inzerátov áut.",
    },
    labels: {
      facebookurl: "URL Facebook Marketplace",
      updatefrequency: "Frekvencia aktualizácií",
      websites: "Webstránky na sledovanie",
    },
    placeholders: {
      frequency: "Vyberte frekvenciu",
    },
  },
};

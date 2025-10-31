export const cs = {
  navigations: {
    features: "Funkce",
    how: "Jak to funguje",
    pricing: "Ceník",
    getAlerts: "Získat upozornění",
    waitlist: "Čekací listina",
    faq: "Často kladené otázky",
    login: "Přihlásit se",
    getStarted: "Začít",
    subscribers: "Předplatitelé",
    theme: "Téma",
    language: "Jazyk",
    myAlerts: "Moje upozornění",
    profile: "Profil",
    settings: "Nastavení",
    logout: "Odhlásit se",
    signUp: "Registrovat se",
  },
  about: {
    description:
      "Revolucionizujeme způsob, jakým lidé hledají svůj ideální ojetý vůz, protože pokročilou monitorovací technologii zpřístupňujeme všem.",
    join: {
      cta: "Zobrazit volné pozice",
      description:
        "Stále hledáme talentované lidi, které baví technologie a chtějí změnit způsob, jakým lidé kupují auta. Podívejte se na naše aktuální volné pozice a přidejte se k naší misi.",
      heading: "Přidejte se k našemu týmu",
    },
    meta: {
      description:
        "Seznamte se s AMIQUUS, naším posláním revolučně změnit nákup ojetých aut a týmem, který stojí za naší inteligentní službou monitorování automobilových inzerátů.",
      title: "O nás | Amiquus – Služba pro sledování inzerátů aut",
    },
    mission: {
      heading: "Naše poslání",
      items: {
        0: {
          description:
            "Odstraňte nutnost neustálého obnovování více webových stránek automatizací vyhledávání a přijímáním včasných upozornění.",
          title: "Ušetřete čas",
        },
        1: {
          description:
            "Buďte první, kdo se dozví o skvělé nabídce, což vám dává výhodu na konkurenčním trhu, kde rozhoduje rychlost.",
          title: "Najděte lepší nabídky",
        },
        2: {
          description:
            "Dělejte informovaná rozhodnutí díky komplexnímu monitoringu napříč několika ověřenými platformami s nabídkami aut.",
          title: "Nakupujte s jistotou",
        },
      },
    },
    questions: {
      description:
        "Zjistěte více o tom, jak naše služba funguje, prohlédněte si možnosti cen nebo kontaktujte náš tým podpory.",
      heading: "Máte dotazy?",
      links: {
        faq: "Navštivte FAQ",
        pricing: "Zobrazit ceny",
        support: "Kontaktujte podporu",
      },
    },
    story: {
      heading: "Náš příběh",
      paragraphs: {
        0: "AMIQUUS vznikl v roce 2023, když náš zakladatel Alex strávil měsíce obnovováním webů s inzeráty na auta ve snaze najít konkrétní vzácný model za dobrou cenu. Poté, co kvůli zpožděným notifikacím propásl několik příležitostí, si uvědomil, že musí existovat lepší způsob.",
        1: "Ve spolupráci s malým týmem vývojářů a automobilových nadšenců Alex vytvořil monitorovací systém, který dokázal současně sledovat inzeráty na více webech a okamžitě posílat upozornění, když se objevila shoda.",
        2: "Co začalo jako osobní projekt, si rychle získalo zájem přátel a rodiny, a začátkem roku 2025 vznikl AMIQUUS jako služba dostupná pro všechny. Dnes pomáháme kupujícím aut po celé zemi šetřit čas a najít lepší nabídky díky naší inteligentní monitorovací technologii.",
      },
    },
    team: {
      heading: "Náš tým",
      members: {
        0: {
          bio: "Bývalý softwarový inženýr s vášní pro auta a tvorbu inovativních řešení.",
          name: "Alex Morgan",
          role: "Zakladatel a generální ředitel",
        },
        1: {
          bio: "Odborník na datovou vědu se specializací na web scraping a systémy pro získávání informací.",
          name: "Sarah Chen",
          role: "Technický ředitel",
        },
        2: {
          bio: "Full-stack vývojář se specializací na tvorbu vysoce výkonných notFull-stack vývojář se specializací na tvorbu vysoce výkonných notifikačních systémů.",
          name: "Marcus Lee",
          role: "Hlavní vývojář",
        },
        3: {
          bio: "Bývalý prodejce automobilů, který se věnuje pomoci zákazníkům najít jejich ideální vůz.",
          name: "Elena Rodriguez, jak na to",
          role: "Úspěch zákazníka",
        },
      },
    },
    title: "O společnosti AMIQUUS",
  },
  alertSchema: {
    errors: {
      carbrand: "Značka auta je povinná",
      carmodel: "Model vozu je povinný",
      facebookmarketplaceurl:
        "URL pro Facebook Marketplace je povinný, pokud je vybrán Facebook",
      fueltype: "Typ paliva je povinný",
      maxkilometers: "Maximální počet kilometrů musí být číslo",
      notificationlanguage: "Jazyk oznámení je povinný.",
      pricemax: "Maximální cena musí být číslo",
      pricemin: "Minimální cena musí být číslo",
      telegramchatid: "Je vyžadováno Telegram chat ID.",
      telegramtoken: "Je vyžadován token pro Telegram bota",
      telegramusername: "Uživatelské jméno na Telegramu je povinné",
      websitesselected: "Musí být vybrána alespoň jedna webová stránka.",
      yearmax: "Maximální rok musí být platný rok",
      yearmin: "Minimální rok musí být platný rok",
    },
  },
  carDetails: {
    actions: {
      continue: "Pokračovat",
      previous: "Předchozí",
    },
    description:
      "Upřesněte detaily vozu, který hledáte. Všechna pole jsou nepovinná – nechte je prázdná pro širší výběr výsledků.",
    errors: {
      carbrand: "Značka auta je povinná",
      carmodel: "Model vozu je povinný",
      fueltype: "Typ paliva je povinný",
      maxkilometers: "Maximální počet kilometrů musí být číslo",
      pricemax: "Maximální cena musí být číslo",
      pricemin: "Minimální cena musí být číslo",
      yearmax: "Maximální rok musí být platný rok",
      yearmin: "Minimální rok musí být platný rok",
    },
    heading: "Detaily o vozidle",
    labels: {
      carbrand: "Značka auta",
      carmodel: "Model vozu",
      fueltype: "Typ paliva",
      maxkilometers: "Maximální kilometry",
      pricemax: "Maximální cena",
      pricemin: "Minimální cena",
      yearmax: "Maximální rok",
      yearmin: "Minimální rok",
    },
    options: {
      nomodelsavailable: "Nejsou k dispozici žádné modely",
    },
    placeholders: {
      carbrand: "Vyberte značku automobilu",
      carmodel: "Vyberte model automobilu",
      carmodeldisabled: "Nejprve vyberte značku auta",
      fueltype: "Vyberte typ paliva",
      maxkilometers: "Zadejte maximální počet kilometrů",
      pricemax: "Zadejte maximální cenu",
      pricemin: "Zadejte minimální cenu",
      yearmax: "Zadejte maximální rok",
      yearmin: "Zadejte minimální rok",
    },
  },
  dashboardPayment: {
    add: "Přidat platební metodu",
    description:
      "Přidejte novou kreditní nebo debetní kartu pro platby za předplatné.",
    errormessage: "Došlo k neočekávané chybě",
    errortitle: "Chyba při přidávání platební metody",
    initerror: {
      description: "Nelze inicializovat nastavení platby",
      title: "Chyba",
    },
    processing: "Zpracovává se...",
  },
  dashboardPaymentMethodCard: {
    cancel: "Zrušit",
    confirmremove: "Odebrat kartu",
    default: "Výchozí",
    expires: "Platnost končí",
    remove: "Odstranit",
    removedescription:
      "Opravdu chcete odstranit svou kartu {{brand}}, která končí na {{last4}}?",
    removetitle: "Odebrat platební metodu",
    removewarning:
      "Toto je vaše výchozí platební metoda a její odstranění může ovlivnit vaše aktivní předplatné.",
    setasdefault: "Nastavit jako výchozí",
    setdefaultdescription:
      "Chcete nastavit kartu {{brand}} končící na {{last4}} jako svůj výchozí platební způsob? Tato karta bude použita pro všechny budoucí platby za předplatné.",
    setdefaulttitle: "Nastavit výchozí platební metodu",
  },
  dashboardSubscriptionCard: {
    cancelalert: "Zrušit upozornění",
    canceldescription:
      "Opravdu chcete zrušit upozornění na auto {{brand}} {{model}}? Tímto zastavíte všechna oznámení a pokud budete chtít toto auto znovu sledovat, budete si muset nastavit nové upozornění.",
    canceltitle: "Zrušit upozornění na auto",
    confirmcancel: "Zrušit upozornění",
    edit: "Upravit",
    keepmyalert: "Ponechat mé upozornění",
    language: "Jazyk",
    price: "Cena",
    pricerange: "Cena",
    updates: "Aktualizace",
    websites: "Webové stránky",
    years: "Roky",
  },
  faq: {
    contactlink: "Kontaktujte náš tým podpory",
    contactprompt: "Stále máte otázky?",
    questions: {
      0: {
        answer:
          "Rychlost upozornění závisí na zvolené frekvenci aktualizací. S výchozím hodinovým plánem obdržíte upozornění do jedné hodiny od zveřejnění nového inzerátu. Pro téměř okamžitá upozornění (během několika minut po zveřejnění) můžete přejít na naše častější aktualizační plány.",
        question: "Jak rychle obdržím oznámení po zveřejnění nového inzerátu?",
      },
      1: {
        answer:
          "Ano! Můžete si vytvořit více vyhledávacích profilů s různými kritérii. Každý profil se počítá jako samostatné předplatné, ale všechny je můžete spravovat z jednoho účtu. To je ideální, pokud hledáte různé typy vozidel současně.",
        question: "Mohu sledovat více různých typů aut najednou?",
      },
      2: {
        answer:
          "Aktuálně podporujeme hlavní platformy pro inzerci aut, včetně AutoTrader, CarGurus, Cars.com a Facebook Marketplace. Neustále rozšiřujeme naši nabídku o další weby podle požadavků uživatelů a regionální oblíbenosti.",
        question: "Které webové stránky aktuálně podporujete?",
      },
      3: {
        answer:
          "Vůbec ne! Poskytujeme podrobné krok za krokem návody včetně textových i video průvodců, které vám pomohou nastavit Telegram bota. Většina uživatelů zvládne nastavení za méně než 5 minut, i bez technických znalostí.",
        question: "Potřebuji technické znalosti k používání Telegram bota?",
      },
      4: {
        answer:
          "Ano, své kritéria vyhledávání můžete kdykoliv upravit ve svém uživatelském účtu. Změny se projeví okamžitě a vaše oznámení se podle toho automaticky aktualizují bez jakéhokoliv přerušení služby.",
        question:
          "Mohu změnit kritéria vyhledávání po nastavení svého předplatného?",
      },
      5: {
        answer:
          "Svou předplatné můžete kdykoliv zrušit ve svém uživatelském účtu na nástěnce. Přejděte do sekce „Předplatné“, vyberte předplatné, které chcete zrušit, a klikněte na tlačítko „Zrušit předplatné“. Vaše služba zůstane aktivní až do konce aktuálního fakturačního období.",
        question: "Jak zruším své předplatné?",
      },
    },
    subtitle: "Najděte odpovědi na nejčastější otázky o naší službě.",
    title: "Často kladené otázky",
  },
  faqs: {
    general: {
      heading: "Obecné dotazy",
      howitworks: {
        answer: {
          0: "Nastavíte si své vyhledávací kritérium (značka, model, cenové rozmezí atd.)",
          1: "Vy vybíráte, které webové stránky chcete sledovat.",
          2: "Propojte svůj Telegram účet pro oznámení",
          3: "Náš systém průběžně sleduje vaše vybrané webové stránky pro nové inzeráty.",
          4: "Když se objeví odpovídající auto, okamžitě obdržíte upozornění na Telegramu se všemi detaily a přímým odkazem.",
        },
        question: "Jak to funguje?",
      },
      whatis: {
        answer:
          "AMIQUUS je služba, která monitoruje více webových stránek s inzeráty aut a vyhledává vozy odpovídající vašim konkrétním požadavkům. Jakmile se objeví odpovídající inzerát, obdržíte okamžité upozornění přes Telegram, což vám umožní být mezi prvními, kdo kontaktují prodejce a získají skvělé nabídky.",
        question: "Co je AMIQUUS?",
      },
      whichwebsites: {
        answerintro:
          "Aktuálně sledujeme následující hlavní platformy pro inzerci automobilů:",
        list: {
          0: "AutoTrader",
          1: "Cars.com",
          2: "CarGurus",
          3: "TrueCar",
          4: "Facebook Marketplace (přes URL)",
          5: "Craigslist",
          6: "eBay Motors",
        },
        outro:
          "Průběžně přidáváme nové platformy, abychom zajistili co nejširší pokrytí.",
        question: "Které weby s inzeráty aut sledujete?",
      },
    },
    metaDescription:
      "Najděte odpovědi na nejčastější otázky ohledně služby sledování automobilových inzerátů AMIQUUS, předplatného, nastavení upozornění a dalších témat.",
    metaTitle: "Často kladené otázky | Amiquus",
    subscription: {
      cancel: {
        note: "Vaše předplatné zůstane aktivní až do konce aktuálního zúčtovacího období.",
        question: "Jak zruším své předplatné?",
        steps: {
          0: "Přihlaste se ke svému účtu",
          1: "Přejděte na stránku „Profil“",
          2: "Vyberte kartu „Předplatné“",
          3: "Klikněte na tlačítko „Zrušit předplatné“ vedle předplatného, které chcete zrušit.",
        },
        stepsintro:
          "Své předplatné můžete kdykoli zrušit na stránce profilu svého účtu:",
      },
      cost: {
        answer: {
          0: "Naše ceny začínají na 79,99 $ měsíčně za monitoring jedné webové stránky s aktualizacemi každých 6 hodin. Každá další stránka stojí 4,99 $ měsíčně. Můžete si také navýšit frekvenci aktualizací pro rychlejší upozornění.",
          1: "Pro konkrétní informace o cenách si prosím prohlédněte naši sekci s cenami na úvodní stránce.",
        },
        question: "Kolik stojí předplatné?",
      },
      heading: "Dotazy k předplatnému",
      limit: {
        intro:
          "Naši službu omezujeme na 30 aktivních předplatitelů, abychom zajistili:",
        list: {
          0: "Nejvyšší kvalita služeb a přesnost dat",
          1: "Personalizovaná podpora pro každého předplatitele",
          2: "Rychlejší doručování notifikací během špičkových časů zveřejňování",
          3: "Etické získávání dat, které nezatěžuje cílové webové stránky",
        },
        outro:
          "Pokud jsme dosáhli kapacity, můžete se připojit na čekací listinu a být informováni, jakmile se uvolní místo.",
        question: "Proč je omezen počet odběratelů?",
      },
      multiple: {
        answer:
          "Ano, pod jedním účtem můžete vytvořit více předplatných. Každé předplatné může sledovat různé modely aut, značky nebo cenové kategorie. To je obzvlášť užitečné, pokud hledáte více vozidel nebo pomáháte přátelům a rodině s hledáním auta.",
        question: "Mohu mít více předplatných na různé modely aut?",
      },
    },
    subtitle:
      "Najděte rychlé odpovědi na časté dotazy ohledně naší služby sledování inzerátů na auta.",
    support: {
      button: "Kontaktujte podporu",
      description:
        "Pokud jste nenašli odpověď na svou otázku, náš tým podpory je tu, aby vám pomohl!",
      heading: "Stále máte otázky?",
    },
    technical: {
      frequency: {
        intro: "Frekvence oznámení závisí na:",
        list: {
          0: "Váš zvolený balíček frekvence aktualizací (od každých 6 hodin do každých 30 minut)",
          1: "Kolik nových inzerátů odpovídá vašim kritériím",
          2: "Jak je aktivní trh pro vaši vybranou značku/model",
        },
        outro:
          "Oznámení obdržíte pouze tehdy, když budou nalezeny nové inzeráty odpovídající vašim kritériím.",
        question: "Jak často budu dostávat oznámení?",
      },
      heading: "Technické dotazy",
      privacy: {
        intro: "Ochranu vašich údajů bereme vážně a uplatňujeme tato opatření:",
        list: {
          0: "Šifrovaná data při přenosu i uložení",
          1: "Bezpečné platby přes Stripe",
          2: "Žádné sdílení údajů s třetími stranami",
          3: "Kdykoliv si můžete vyžádat nebo smazat svá data",
        },
        outro:
          "Přečtěte si naše úplné Zásady ochrany osobních údajů pro více informací.",
        question: "Jak jsou chráněna má osobní data?",
      },
      telegram: {
        note: "Podrobné krok za krokem návody s obrázky obrazovky jsou k dispozici během procesu nastavení předplatného.",
        question: "Jak si nastavím upozornění na Telegramu?",
        steps: {
          0: "Vytvořte Telegram bota pomocí BotFather (pokyny jsou uvedeny během nastavení)",
          1: "Zkopírujte svůj token bota od BotFather",
          2: "Začněte konverzaci se svým botem",
          3: "Získejte své ID chatu (pokyny obdržíte během nastavení)",
          4: "Zadejte token svého bota a ID chatu v nastavení předplatného AMIQUUS.",
          5: "Otestujte své nastavení notifikací pomocí tlačítka `Odeslat testovací zprávu`",
        },
        stepsintro: "Pro nastavení upozornění na Telegramu:",
      },
    },
    title: "Často kladené otázky",
  },
  features: {
    account: {
      description:
        "Spravujte více vyhledávacích profilů a upravujte nastavení předplatného několika kliknutími.",
      title: "Snadná správa účtu",
    },
    filters: {
      description:
        "Nastavte přesná kritéria včetně značky, modelu, roku, nájezdu a cenového rozmezí, abyste našli přesně to, co hledáte.",
      title: "Vlastní filtry",
    },
    frequency: {
      description:
        "Vyberte, jak často budeme kontrolovat nové inzeráty, od hodinových aktualizací až po sledování v reálném čase.",
      title: "Přizpůsobitelná frekvence",
    },
    heading: "Proč si vybrat Amiquus?",
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
        "Sledujte více webů s inzeráty na auta najednou, aniž byste museli každý kontrolovat ručně.",
      title: "Sledování na více webech",
    },
    notifications: {
      description:
        "Dostávejte okamžitá upozornění přes Telegram, když se objeví auto odpovídající vašim kritériím na prodej.",
      title: "Okamžitá oznámení",
    },
    subheading:
      "Ušetřete čas a nikdy nezmeškejte svůj ideální vůz díky naší automatizované službě sledování.",
  },
  footer: {
    about: "O nás",
    blog: "Blog",
    branddescription:
      "Váš osobní asistent pro nalezení té nejlepší nabídky ojetého vozu ve správný čas.",
    brandtitle: "Amiquus",
    careers: "Kariéra",
    contact: "Kontakt",
    cookies: "Zásady používání cookies",
    copyright: "Všechna práva vyhrazena.",
    email: "support@amiquus.com",
    faq: "Často kladené otázky",
    features: "Funkce",
    gdpr: "Soulad s GDPR",
    getstarted: "Začít",
    legal: "Právní informace",
    pricing: "Ceník",
    privacy: "Zásady ochrany osobních údajů",
    quicklinks: "Rychlé odkazy",
    support: "Podpora",
    telegram: "Kontaktujte nás na Telegramu",
    terms: "Podmínky služby",
  },
  hero: {
    button1: "Nastavte si upozornění",
    button2: "Podívejte se, jak to funguje",
    label: "Sledujte inzeráty ojetých aut v reálném čase",
    subtitle:
      "AMIQUUS vás okamžitě upozorní, jakmile se váš vysněný vůz objeví na více automobilových inzertních webech. Upozornění dostanete přes Telegram hned, jakmile se najde odpovídající nabídka.",
    title: "Už nikdy nezmeškejte svou ideální nabídku na auto",
    trustindicators: {
      cancelanytime: "Zrušit kdykoliv",
      nosetup: "Není potřeba žádné nastavení",
      realtime: "Upozornění v reálném čase",
      websites: "Sledování více než 15 webů",
    },
  },
  howItWorks: {
    features: {
      0: "Sledujte více než 15 webů s inzeráty na auta najednou",
      1: "Přizpůsobitelná kritéria vyhledávání s pokročilým filtrováním",
      2: "Oznámení v reálném čase přes Telegram",
      3: "Automatická upozornění na snížení ceny a nové inzeráty",
      4: "Snadné nastavení, které zabere méně než 5 minut",
    },
    notificationmockup1: {
      description: "BMW řada 3, 2019, $32,500 – Právě přidáno na AutoTrader",
      title: "Nalezen nový kontakt!",
    },
    notificationmockup2: {
      description:
        "Mercedes C-třída, 2020, 30 000 mil - Cena snížena o 2 000 $",
      title: "Telegram upozornění",
    },
    setalerts: "Nastavte si upozornění",
    steps: {
      findcar: {
        description:
          "Buďte první, kdo se dozví o nových nabídkách na AMIQUUS a zajistěte si ty nejlepší nabídky dříve než ostatní.",
        title: "Najděte svůj ideální vůz",
      },
      notifications: {
        description:
          "Dostávejte upozornění, jakmile se na některém z našich sledovaných webů objeví auto odpovídající vašim požadavkům.",
        title: "Dostávejte okamžitá upozornění",
      },
      preferences: {
        description:
          "Vyberte značky aut, modely, cenové rozpětí a další kritéria, která chcete sledovat.",
        title: "Nastavte své preference",
      },
      telegram: {
        description:
          "Propojte svůj Telegram účet a dostávejte okamžitá upozornění na nové inzeráty.",
        title: "Připojit Telegram",
      },
    },
    subtitle:
      "Nastavte jednou a nechte náš automatizovaný systém najít tu nejlepší nabídku auta pro vás.",
    title: "Jak AMIQUUS funguje",
    whytitle: "Proč si vybrat Amiquus?",
  },
  limited: {
    available: {
      buttonText: "Začněte nyní",
      description:
        "{{active}} z {{capacity}} předplatných je aktuálně aktivních. Stále je dost místa, abyste se mohli přidat!",
      title: "Dostupná předplatná",
    },
    full: {
      buttonText: "Přidejte se na čekací listinu",
      description:
        "Dosáhli jsme kapacity 30 aktivních odběratelů. Připojte se na čekací listinu, abyste byli informováni, až se uvolní místo.",
      title: "Byl dosažen limit předplatného",
    },
    limited: {
      buttonText: "Začněte nyní",
      description:
        "Zbývá už jen {{remaining}} míst z celkových {{capacity}}. Přihlaste se nyní, než naplníme kapacitu!",
      title: "Omezená dostupnost",
    },
  },
  login: {
    description: "Zadejte svůj e-mail a heslo pro přístup k vašemu dashboardu",
    emaillabel: "E-mail",
    errors: {
      invalidemail: "Zadejte platnou e-mailovou adresu",
      shortpassword: "Heslo musí mít alespoň 6 znaků",
    },
    errortitle: "Přihlášení se nezdařilo",
    genericerror:
      "Zkontrolujte prosím své přihlašovací údaje a zkuste to znovu.",
    loggingin: "Přihlašování...",
    loginbutton: "Přihlásit se",
    loginwithgoogle: "Přihlásit se pomocí Google",
    noaccount: "Nemáte účet?",
    or: "nebo",
    passwordlabel: "Heslo",
    registerlink: "Registrovat se",
    successmessage: "Byli jste úspěšně přihlášeni.",
    successtitle: "Přihlášení bylo úspěšné",
    title: "Přihlaste se ke svému účtu",
  },
  loginPrompt: {
    description:
      "Pro pokračování musíte být přihlášeni. Přihlaste se nebo si vytvořte účet.",
    login: "Přihlášení",
    register: "Registrovat se",
    title: "Přihlášení vyžadováno",
  },
  notFound: {
    message: "Nezapomněli jste přidat stránku do routeru?",
    title: "404 Stránka nebyla nalezena",
  },
  payment: {
    button: {
      processing: "Zpracovává se...",
      submit: "Nastavte platební metodu",
    },
    toast: {
      error: {
        fallback: "Došlo k neočekávané chybě. Zkuste to prosím znovu.",
        title: "Chyba",
      },
      success: {
        description: "Vaše platební metoda byla úspěšně nastavena.",
        title: "Úspěch",
      },
    },
  },
  personalInfo: {
    actions: {
      continue: "Pokračovat",
      login: "Přihlaste se nebo si vytvořte účet pro pokračování",
    },
    description:
      "Zadejte prosím své osobní údaje, abychom mohli správně nastavit vaše oznámení.",
    errors: {
      email: "Zadejte platný e-mail",
      firstname: "Jméno je povinné",
      lastname: "Příjmení je povinné",
    },
    heading: "Osobní údaje",
    labels: {
      email: "E-mailová adresa",
      firstname: "Jméno",
      lastname: "Příjmení",
    },
    placeholders: {
      email: "john.doe@example.com",
      firstname: "Jan",
      lastname: "Jelen",
    },
  },
  pricing: {
    addons: {
      0: {
        name: "Každá další webová stránka",
      },
      1: {
        name: "Aktualizace každých 30 minut",
      },
      2: {
        name: "Aktualizace každých 15 minut",
      },
      3: {
        name: "Aktualizace každých 5 minut",
      },
      4: {
        name: "Aktualizace každou minutu",
      },
    },
    addonstitle: "Doplňky:",
    basetitle: "Základní balíček: 79,99 $/měsíc",
    button: "Začněte nyní",
    footernote:
      "Všechny tarify zahrnují neomezené konfigurace vyhledávání a snadnou správu předplatného.",
    includedfeatures: {
      0: "Jedno sledování webu",
      1: "Hodinové aktualizace",
      2: "Neomezené filtry",
      3: "Telegram upozornění",
    },
    includedtitle: "Co je součástí:",
    subtitle:
      "Naše ceny se odvíjejí od vašich konkrétních potřeb. Začněte se základním balíčkem a upravte si ho podle svých požadavků.",
    title: "Jednoduché, transparentní ceny",
  },
  privacy: {
    lastupdated: "Naposledy aktualizováno: 21. května 2025",
    metaDescription:
      "Zjistěte, jak AMIQUUS zachází s vašimi osobními údaji, právy na soukromí a postupy při shromažďování dat.",
    metaTitle: "Zásady ochrany osobních údajů | Amiquus",
    sections: {
      0: {
        heading: "Úvod",
        id: "úvod",
        paragraphs: {
          0: "Vítejte na Amiquus. Respektujeme vaše soukromí a zavazujeme se chránit vaše osobní údaje. Tyto zásady ochrany osobních údajů vás informují o tom, jak pečujeme o vaše osobní údaje, když navštívíte naše webové stránky, a seznámí vás s vašimi právy na ochranu soukromí a tím, jak vás chrání zákon.",
        },
      },
      1: {
        heading: "Informace, které shromažďujeme",
        id: "údaje-které-shromažďujeme",
        list: {
          0: "Osobní údaje: E-mailová adresa, jméno, příjmení a profilová fotografie (pokud je poskytnuta prostřednictvím ověření třetí stranou).",
          1: "Údaje o účtu: Vaše přihlašovací údaje a nastavení účtu.",
          2: "Údaje o používání: Informace o tom, jak používáte naše webové stránky a služby.",
          3: "Nastavení vyhledávání aut: Kritéria vozidel, která si nastavíte ke sledování (značka, model, cenové rozmezí atd.).",
          4: "Informace o Telegramu: Pokud se rozhodnete přijímat oznámení přes Telegram, ukládáme váš Telegram chat ID a token bota.",
          5: "Platební informace: Když provedete nákup, náš platební zprostředkovatel shromažďuje platební údaje potřebné k vyřízení vaší transakce. AMIQUUS neukládá úplné údaje o vaší kreditní kartě.",
        },
        paragraphs: {
          0: "Shromažďujeme několik různých typů informací pro různé účely, abychom vám mohli poskytovat a zlepšovat naše služby.",
        },
      },
      2: {
        heading: "Jak používáme vaše údaje",
        id: "jak-používáme-data",
        list: {
          0: "Poskytovat a udržovat naši službu",
          1: "Abychom vás informovali o změnách naší služby",
          2: "Abychom vám umožnili využívat interaktivní funkce naší služby",
          3: "Poskytovat zákaznickou podporu",
          4: "Shromažďovat analýzy nebo cenné informace, abychom mohli zlepšit naši službu",
          5: "Pro sledování používání naší služby",
          6: "Zjišťovat, předcházet a řešit technické problémy",
          7: "Pro zpracování plateb a prevenci podvodných transakcí",
          8: "Pro zasílání nabídek aut, které odpovídají vašim preferencím, prostřednictvím vámi zvoleného způsobu upozornění",
        },
        paragraphs: {
          0: "Vaše osobní údaje používáme k následujícím účelům:",
        },
      },
      3: {
        heading: "Ukládání dat a zabezpečení",
        id: "ukládání dat",
        paragraphs: {
          0: "Zavádíme vhodná bezpečnostní opatření k ochraně vašich osobních údajů před neoprávněným přístupem, změnou, zveřejněním nebo zničením. Veškerá data jsou uložena na zabezpečených serverech s šifrováním při přenosu i v klidu.",
          1: "Vaše osobní údaje uchováváme pouze po dobu nezbytně nutnou pro účely uvedené v těchto zásadách ochrany osobních údajů, včetně splnění jakýchkoli právních, regulačních, daňových, účetních nebo oznamovacích požadavků.",
        },
      },
      4: {
        heading: "Vaše práva podle GDPR",
        id: "obecné nařízení o ochraně osobních údajů",
        list: {
          0: "Právo na přístup, aktualizaci nebo vymazání informací, které o vás máme",
          1: "Právo na opravu",
          2: "Právo vznést námitku",
          3: "Právo na omezení",
          4: "Právo na přenositelnost údajů",
          5: "Právo odvolat souhlas",
        },
        paragraphs: {
          0: "Pokud jste rezidentem Evropského hospodářského prostoru (EHP), máte určitá práva na ochranu osobních údajů. AMIQUUS se snaží přijímat přiměřená opatření, aby vám umožnil opravit, upravit, vymazat nebo omezit použití vašich osobních údajů.",
          1: "Máte následující práva na ochranu osobních údajů:",
        },
      },
      5: {
        heading: "Zásady používání cookies",
        id: "cookies",
        list: {
          0: "Zůstat přihlášen",
          1: "Pochopte, jak používáte naši webovou stránku",
          2: "Zapamatujte si své preference",
          3: "Přizpůsobte si své prostředí",
        },
        paragraphs: {
          0: "Cookies jsou malé soubory dat uložené ve vašem zařízení. Cookies používáme k:",
        },
      },
      6: {
        heading: "Služby třetích stran",
        id: "třetí strana",
        list: {
          0: "Platební zprostředkovatelé (Stripe)",
          1: "Poskytovatelé analytiky",
          2: "Služby zákaznické podpory",
          3: "Poskytovatelé hostingu a cloudové infrastruktury",
        },
        paragraphs: {
          0: "Můžeme zaměstnávat třetí strany a jednotlivce, kteří nám pomáhají usnadnit naši službu, poskytovat službu naším jménem, vykonávat úkoly související se službou nebo nám pomáhat analyzovat, jak je naše služba používána.",
          1: "Tyto třetí strany zahrnují:",
        },
        paragraphs2: {
          0: "Tyto třetí strany mají přístup k vašim osobním údajům pouze za účelem plnění těchto úkolů naším jménem a jsou povinny je neprozrazovat ani nepoužívat k žádnému jinému účelu.",
        },
      },
      7: {
        heading: "Změny těchto Zásad ochrany osobních údajů",
        id: "změny",
        paragraphs: {
          0: "Čas od času můžeme naši zásadu ochrany osobních údajů aktualizovat. O všech změnách vás budeme informovat zveřejněním nové zásady ochrany osobních údajů na této stránce a aktualizací data „Naposledy aktualizováno“.",
          1: "Doporučujeme vám tuto zásadu ochrany osobních údajů pravidelně kontrolovat kvůli případným změnám. Změny této zásady ochrany osobních údajů jsou účinné okamžikem zveřejnění na této stránce.",
        },
      },
      8: {
        heading: "Kontaktujte nás",
        id: "kontakt",
        list: {
          0: "E-mailem: privacy@amiquus.com",
          1: "Návštěvou kontaktní stránky na našem webu",
        },
        paragraphs: {
          0: "Máte-li jakékoli dotazy ohledně těchto zásad ochrany osobních údajů, kontaktujte nás:",
        },
      },
    },
    title: "Zásady ochrany osobních údajů",
  },
  profile: {
    account: {
      cancel: "Zrušit",
      desc: "Aktualizujte informace a nastavení svého účtu.",
      email: "E-mail",
      name: "Jméno",
      save: "Uložit změny",
      title: "Nastavení účtu",
      username: "Uživatelské jméno",
    },
    alerts: {
      add: "Přidat nové upozornění",
      cta: "Vytvořte své první upozornění",
      desc: "Spravujte svá upozornění na hledání auta a nastavení notifikací.",
      none: "Nemáte žádná aktivní upozornění na auta.",
      title: "Odběry upozornění na auta",
      warning:
        "⚠️ Změny vašeho předplatného budou uplatněny v dalším fakturačním období a pouze po úspěšné platbě. Pokud platba selže, vaše aktuální nastavení upozornění zůstane beze změny.",
    },
    logout: {
      desc: "Opravdu se chcete odhlásit ze svého účtu?",
      success: "Byli jste úspěšně odhlášeni.",
      title: "Odhlásit se",
    },
    payments: {
      desc: "Spravujte své platební metody pro účtování předplatného.",
      encrypted: "Vaše platební údaje jsou šifrovány a bezpečně uloženy.",
      none: "Nemáte uložené žádné platební metody.",
      title: "Platební metody",
    },
    security: {
      confirm: "Potvrďte nové heslo",
      current: "Aktuální heslo",
      desc: "Spravujte svá bezpečnostní nastavení a preference ochrany soukromí.",
      new: "Nové heslo",
      title: "Soukromí a zabezpečení",
      update: "Aktualizovat heslo",
    },
    sidebar: {
      account: "Nastavení účtu",
      logout: "Odhlásit se",
      membersince: "Členem od",
      methods: "Platební metody",
      privacy: "Soukromí a zabezpečení",
      subscriptions: "Předplatné",
    },
    tabs: {
      alerts: "Moje upozornění",
      payments: "Platební metody",
    },
  },
  register: {
    alreadyhave: "Už máte účet?",
    and: "a",
    confirmpassword: "Potvrďte heslo",
    createbtn: "Vytvořit účet",
    description: "Zaregistrujte se a začněte sledovat svůj vysněný vůz",
    email: "E-mail",
    firstname: "Jméno",
    google: "Zaregistrujte se pomocí Google",
    lastname: "Příjmení",
    login: "Přihlásit se",
    orcontinue: "Nebo pokračujte s",
    password: "Heslo",
    privacypolicy: "Zásady ochrany osobních údajů",
    termsnotice: "Souhlasím s",
    termsofservice: "Podmínky služby",
    title: "Vytvořit účet",
    toast: {
      failure: {
        desc: "Zkontrolujte prosím své údaje a zkuste to znovu.",
        title: "Registrace se nezdařila",
      },
      invalidusername: {
        desc: "Uživatelské jméno musí být alfanumerické a mít 3 až 20 znaků.",
        title: "Neplatné uživatelské jméno",
      },
      missingfields: {
        desc: "Vyplňte prosím všechna povinná pole",
        title: "Chybějící pole",
      },
      passwordmismatch: {
        desc: "Ujistěte se, že se vaše hesla shodují.",
        title: "Hesla se neshodují",
      },
      success: {
        desc: "Vítejte v Amiquus! Budete přesměrováni na ověření vaší e-mailové adresy.",
        title: "Registrace úspěšná",
      },
      termsnotaccepted: {
        desc: "Musíte přijmout podmínky a zásady ochrany osobních údajů, abyste mohli pokračovat.",
        title: "Podmínky nebyly přijaty",
      },
    },
    username: "Uživatelské jméno",
  },
  review: {
    actions: {
      previous: "Předchozí",
      submit: "Přejít k platbě",
    },
    description:
      "Před pokračováním k platbě si prosím zkontrolujte údaje o svém předplatném.",
    monitoring: {
      facebookurl: "Facebook URL",
      title: "Nastavení monitorování",
      updatefrequency: "Frekvence aktualizací",
      websites: "Webové stránky",
    },
    notification: {
      language: "Jazyk oznámení",
      telegram: "Telegram Bot",
      title: "Nastavení oznámení",
    },
    personal: {
      email: "E-mail",
      name: "Jméno",
      title: "Osobní údaje",
    },
    specs: {
      brand: "Značka",
      fueltype: "Typ paliva",
      mileage: "Dojezd (km)",
      model: "Model",
      price: "Cenové rozpětí (€)",
      title: "Specifikace vozu",
      yearrange: "Časové období",
    },
    summary: {
      base: "Základní předplatné",
      extrawebsites: "Další webové stránky",
      frequencyupgrade: "Upgrade frekvence",
      title: "Přehled předplatného",
      total: "Celkem (měsíčně)",
    },
    terms: {
      checkbox: "Souhlasím s",
      error: "Musíte souhlasit s podmínkami a pravidly",
      note: "Vaše předplatné se bude každý měsíc automaticky obnovovat. Předplatné můžete kdykoliv zrušit.",
      privacy: "Zásady ochrany osobních údajů",
      tos: "Podmínky služby",
    },
    title: "Zkontrolujte své předplatné",
  },
  setupAlerts: {
    basetitle: "79,99 USD/měsíc",
    basicplan: "Základní tarif",
    button: "Spustit moji službu upozornění na auto",
    cancel: "Zrušit kdykoliv",
    subtitle:
      "Nastavte svého Telegram bota, abyste dostávali upozornění na svůj vysněný vůz",
    title: "Nastavte si upozornění na svůj automobil",
    toasts: {
      contactbot: {
        description:
          "Pro přijímání upozornění na auta musíte zahájit konverzaci s naším Telegram botem a poslat zprávu. Postupujte podle níže uvedených pokynů pro kontaktování bota.",
        title: "Vyžadován kontaktní bot",
      },
      error: {
        title: "Chyba při vytváření předplatného",
      },
      success: {
        description: "Vaše předplatné bylo úspěšně vytvořeno",
        title: "Předplatné bylo vytvořeno",
      },
      terms: {
        description:
          "Musíte souhlasit s podmínkami služby, abyste mohli pokračovat.",
        title: "Podmínky nebyly přijaty",
      },
    },
  },
  signUp: {
    cta: "Dostávejte upozornění nyní",
    heading: "Vytvořte si hlídání auta",
    subheading:
      "Nastavte si personalizovaná upozornění na inzeráty aut během několika kroků.",
    toast: {
      error: {
        description:
          "Nepodařilo se nám vytvořit vaše předplatné. Zkuste to prosím znovu později.",
        title: "Předplatné se nezdařilo",
      },
      success: {
        description: "Vaše předplatné bylo úspěšně vytvořeno",
        title: "Předplatné bylo vytvořeno",
      },
    },
    waitlist: {
      cta: "Přidejte se na čekací listinu",
      message:
        "Momentálně máme plnou kapacitu. Připojte se na čekací listinu, abyste byli informováni, až se uvolní místo.",
    },
  },
  subscription: {
    actions: {
      back: "Zpět",
      save: "Uložit změny",
    },
    description:
      "Svou předplatné můžete kdykoliv pozastavit. Když předplatné pozastavíte, vaše upozornění na auto se zastaví, dokud je znovu neaktivujete.",
    error: "Vraťte se na přehled",
    form: {
      status: {
        active: "Aktivní",
        label: "Stav",
        paused: "Pozastaveno",
        placeholder: "Vyberte status",
      },
    },
    notfound: "Předplatné nebylo nalezeno",
    notfoundsub: "Zpět na přehled",
    subtitle: "Upravte své údaje o předplatném níže",
    title: "Podrobnosti předplatného",
    toasts: {
      error: {
        title: "Chyba při aktualizaci předplatného",
      },
      priceerror: {
        description:
          "Zároveň pozastavujete a aktualizujete cenu předplatného. Musíte buď pozastavit, nebo aktualizovat cenu.",
        title: "Nelze aktualizovat předplatné",
      },
      success: {
        description:
          "Vaše předplatné pro {{brand}} {{model}} bylo úspěšně aktualizováno.",
        title: "Předplatné bylo aktualizováno",
      },
    },
  },
  support: {
    emailsupport: {
      description: "Pošlete nám e-mail a ozveme se vám do 24 hodin.",
      email: "support@amiquus.com",
      title: "E-mailová podpora",
    },
    faqheading: "Často kladené otázky",
    faqs: {
      cancel: {
        answer:
          "Své předplatné můžete kdykoliv zrušit na stránce profilu svého účtu. Klikněte na záložku „Předplatné“, najděte předplatné, které chcete zrušit, a klikněte na tlačítko „Zrušit předplatné“. Vaše služba zůstane aktivní až do konce vašeho aktuálního fakturačního období.",
        question: "Jak zruším své předplatné?",
      },
      facebook: {
        answer:
          "Ano, podporujeme sledování Facebook Marketplace. Pro nastavení je potřeba zadat URL stránky s výsledky vyhledávání na Facebook Marketplace s použitými požadovanými filtry. Náš systém pak bude sledovat právě toto vyhledávání a informovat vás o nových inzerátech, které odpovídají vašim kritériím.",
        question: "Mohu sledovat Facebook Marketplace?",
      },
      full: {
        answer:
          "Abychom zachovali vysokou kvalitu našich služeb, omezujeme počet aktivních předplatných. Pokud jsou všechna místa obsazena, můžete se přidat na čekací listinu. Jakmile se místo uvolní, dáme vám vědět a budete mít přednostní právo si ho nárokovat před tím, než ho nabídneme široké veřejnosti.",
        question: "Co se stane, když jsou všechny odběratelské sloty plné?",
      },
      telegram: {
        intro:
          "Pro nastavení oznámení přes Telegram postupujte podle těchto kroků:",
        outro:
          "Pokud potřebujete další pomoc, náš podrobný průvodce je k dispozici ve vašem dashboardu.",
        question: "Jak si nastavit upozornění na Telegramu?",
        steps: {
          0: "Vytvořte Telegram bota pomocí BotFatheru (návod najdete v našem dashboardu)",
          1: "Zkopírujte svůj API token a chat ID",
          2: "Zadejte tyto údaje v nastavení svého účtu pod „Předvolby oznámení“",
          3: "Otestujte své připojení pomocí tlačítka „Odeslat testovací zprávu“.",
        },
      },
      updates: {
        answer:
          "Frekvence aktualizací závisí na vašem předplatném. Základní plány dostávají aktualizace každých 6 hodin, zatímco prémiové plány mohou získávat aktualizace už každých 30 minut. Aktuální frekvenci aktualizací si můžete prohlédnout a upravit v nastavení předplatného.",
        question: "Jak často se aktualizují inzeráty na auta?",
      },
    },
    metaDescription:
      "Získejte pomoc se svým účtem AMIQUUS, předplatným nebo upozorněními na auta. Prohlédněte si naše centrum nápovědy nebo kontaktujte náš tým podpory pro asistenci.",
    metaTitle: "Podpora | Amiquus – Centrum nápovědy",
    stillneedhelp: {
      button: "Kontaktujte podporu",
      description:
        "Pokud jste nenašli odpověď na svou otázku, neváhejte se obrátit na náš tým podpory. Jsme tu, abychom vám pomohli!",
      heading: "Stále potřebujete pomoc?",
    },
    subtitle:
      "Najděte odpovědi na časté dotazy nebo kontaktujte náš tým podpory",
    title: "Centrum podpory",
  },
  telegram: {
    actions: {
      continue: "Pokračovat",
      previous: "Předchozí",
    },
    bottokenexample: "Příklad: 5432109876:ABCDefGhIJklMNoPqrSTuvWXyz1234567890",
    bottokenlabel: "Token Telegram bota",
    bottokenplaceholder: "Zadejte svůj token bota od BotFather",
    caralerttitle: "🚗 Nové auto!",
    chatiddescription:
      "Toto získáte, když napíšete zprávu @userinfobot na Telegramu.",
    chatidlabel: "Váš Telegram Chat ID",
    chatidplaceholder: "Zadejte svůj Telegram chat ID",
    chatidsteps: {
      0: 'Otevřete Telegram a vyhledejte "userinfobot"',
      1: "Pošlete jakoukoli zprávu botovi",
      2: "Bot vám odpoví s vašimi informacemi včetně vašeho Chat ID.",
      3: "Zkopírujte své ID chatu",
    },
    chatidtitle: "Jak získat svůj Telegram Chat ID:",
    confirmcontact: "Zahájil jsem chat s botem a odeslal zprávu.",
    contact: "Kontaktujte nás",
    contactbotinstruction:
      "Zahajte chat s naším Telegram botem kliknutím na odkaz níže a zasláním zprávy:",
    contactbotnote:
      "Toto je nutné pro přijímání upozornění na auta. Pokud jste na počítači, můžete naskenovat QR kód.",
    description:
      "Nastavte upozornění na Telegramu zadáním tokenu bota a ID chatu.",
    errors: {
      chatid: "Telegram chat ID je povinný",
      language: "Jazyk oznámení je povinný.",
      token: "Je vyžadován token Telegram bota",
      username: "Uživatelské jméno na Telegramu je povinné",
    },
    examples: {
      chatid: "Toto získáte, když napíšete zprávu @userinfobot na Telegramu.",
      token: "Příklad: 5432109876:ABCDefGhIJklMNoPqrSTuvWXyz1234567890",
    },
    heading: "Nastavení Telegramu",
    helpdescription:
      "Podívejte se na video níže pro podrobný návod krok za krokem.",
    helptitle:
      "Potřebujete pomoc s nastavením svého Telegram Bot Tokenu a Chat ID?",
    info: "Pokud máte potíže s vytvořením telegram bota, kontaktujte nás a my vám zavoláme a pomůžeme vám ho vytvořit.",
    instructions: {
      botstep1: "Otevřete Telegram a vyhledejte @BotFather",
      botstep2: "Zadejte příkaz /newbot",
      botstep3: "Postupujte podle pokynů k vytvoření bota",
      botstep4: "Zkopírujte token poskytnutý BotFatherem",
      bottitle: "Jak získat token pro Telegram bota:",
      chatstep1: "Otevřete Telegram a vyhledejte @userinfobot",
      chatstep2: "Pošlete jakoukoli zprávu botovi",
      chatstep3: "Bot vám odpoví s vašimi informacemi včetně vašeho Chat ID.",
      chatstep4: "Zkopírujte ID chatu (je to číslo)",
      chattitle: "Jak získat své Telegram Chat ID:",
    },
    kilometreslabel: "Kilometry: {{kms}}",
    labels: {
      chatid: "Váš Telegram Chat ID",
      language: "Jazyk oznámení",
      token: "Token bota Telegramu",
      username: "Telegram uživatelské jméno",
    },
    languagelabel: "Jazyk oznámení",
    languageplaceholder: "Vyberte jazyk zpráv na Telegramu",
    languages: {
      de: "Němčina",
      en: "Angličtina",
      es: "Čeština",
      fr: "Francouzština",
      it: "Čeština",
    },
    locationlabel: "Poloha: {{location}}",
    placeholders: {
      chatid: "Zadejte svůj Telegram chat ID",
      language: "Vyberte jazyk zprávy pro Telegram",
      token: "Zadejte svůj token bota od BotFather",
      username: "Zadejte své uživatelské jméno na Telegramu",
    },
    previewtitle: "Náhled oznámení Telegram",
    pricelabel: "Cena: {{price}}",
    setupsteps: {
      0: 'Otevřete Telegram a vyhledejte "BotFather"',
      1: "Zahajte chat s BotFather kliknutím na „Start“",
      2: "Napište /newbot a postupujte podle pokynů k vytvoření nového bota",
      3: "Zvolte jméno pro svého bota",
      4: "Zvolte uživatelské jméno pro svého bota (musí končit na 'bot')",
      5: "Zkopírujte API token poskytnutý BotFatherem",
      6: "Pošlete zprávu svému novému botovi, abyste aktivovali chat.",
    },
    setuptitle: "Pokyny k nastavení:",
    subheading: "Nastavte svého Telegram bota",
    usernamedescription:
      "Toto je uživatelské jméno na vašem Telegram účtu (bez symbolu @).",
    videodescription:
      "Podívejte se na video níže pro podrobný návod krok za krokem.",
    videoprompt:
      "Potřebujete pomoc s nastavením svého Telegram Bot Tokenu a Chat ID?",
    viewlisting: "Zobrazit inzerát →",
  },
  terms: {
    lastupdated: "Naposledy aktualizováno: 21. května 2025",
    metaDescription:
      "Přečtěte si Podmínky služby AMIQUUS, které upravují vaše používání naší služby sledování a upozorňování na inzeráty automobilů.",
    metaTitle: "Podmínky služby | Amiquus",
    sections: {
      1: {
        heading: "Souhlas s podmínkami",
        id: "dohoda",
        paragraphs: {
          0: "Tyto Podmínky služby představují právně závaznou dohodu mezi vámi a společností Amiquus ohledně vašeho přístupu k našim webovým stránkám a službám a jejich používání.",
          1: "Používáním našich služeb nebo přístupem k nim souhlasíte s těmito Podmínkami. Pokud s jakoukoli částí podmínek nesouhlasíte, nesmíte službu využívat.",
        },
      },
      10: {
        heading: "Vyloučení odpovědnosti",
        id: "prohlášení o vyloučení odpovědnosti",
        paragraphs: {
          0: "Používání služby je na vaše vlastní riziko. Služba je poskytována v režimu „TAK JAK JE“ a „DLE DOSTUPNOSTI“. Služba je poskytována bez jakýchkoli záruk, výslovných či předpokládaných.",
          1: "AMIQUUS nezaručuje, že služba bude nepřerušovaná, včasná, bezpečná nebo bez chyb, ani že výsledky získané používáním služby budou přesné nebo spolehlivé.",
        },
      },
      11: {
        heading: "Zásady používání cookies",
        id: "cookies",
        paragraphs: {
          0: "Naše Zásady používání souborů cookie vysvětlují, co jsou soubory cookie, jak soubory cookie používáme, jak mohou třetí strany, se kterými spolupracujeme, používat soubory cookie v naší službě, jaké máte možnosti ohledně souborů cookie a další informace o souborech cookie. Podrobnosti naleznete v sekci o souborech cookie v našich Zásadách ochrany osobních údajů.",
        },
      },
      12: {
        heading: "Rozhodné právo",
        id: "rozhodné právo",
        paragraphs: {
          0: "Tyto podmínky se řídí a vykládají v souladu s právními předpisy Spojených států amerických, bez ohledu na ustanovení o kolizi právních norem.",
          1: "Naše neprosazení jakéhokoliv práva nebo ustanovení těchto Podmínek nebude považováno za vzdání se těchto práv. Pokud by jakékoliv ustanovení těchto Podmínek bylo soudem shledáno neplatným nebo nevymahatelným, zbývající ustanovení těchto Podmínek zůstávají v platnosti.",
        },
      },
      13: {
        heading: "Kontaktujte nás",
        id: "kontakt",
        list: {
          0: "E-mailem: legal@amiquus.com",
          1: "Návštěvou kontaktní stránky na našem webu",
        },
        paragraphs: {
          0: "Máte-li jakékoli dotazy ohledně těchto Podmínek, kontaktujte nás:",
        },
      },
      2: {
        heading: "Změny podmínek",
        id: "změny",
        paragraphs: {
          0: "Vyhrazujeme si právo dle vlastního uvážení kdykoli tyto Podmínky upravit nebo nahradit. Pokud bude změna podstatná, vynaložíme přiměřené úsilí, abychom vás informovali alespoň 30 dní před tím, než nové podmínky vstoupí v platnost.",
          1: "Pokračováním v přístupu nebo používání naší služby po nabytí účinnosti těchto změn souhlasíte s tím, že budete vázáni revidovanými podmínkami. Pokud s novými podmínkami nesouhlasíte, přestaňte službu používat.",
        },
      },
      3: {
        heading: "Podmínky účtu",
        id: "účet",
        list: {
          0: "Musíte být starší 18 let",
          1: "Dokončete proces registrace",
          2: "Poskytněte přesné, úplné a aktuální informace",
          3: "Buďte zodpovědní za zabezpečení svého účtu a hesla",
          4: "Buďte zodpovědní za všechny aktivity, které se uskuteční pod vaším účtem",
          5: "Oznamte nám neprodleně, jakmile se dozvíte o jakémkoli narušení bezpečnosti nebo neoprávněném použití vašeho účtu.",
        },
        paragraphs: {
          0: "Abyste mohli využívat naše služby, musíte:",
        },
      },
      4: {
        heading: "Platební podmínky",
        id: "platba",
        list: {
          0: "Všechny poplatky jsou uvedeny bez daně, která bude připočtena, pokud to bude relevantní.",
          1: "Ceny předplatného se mohou změnit s 30denním předchozím oznámením.",
          2: "Předplatné se automaticky obnovuje, pokud jej nezrušíte před začátkem dalšího fakturačního období.",
          3: "Vrácení peněz se posuzuje individuálně podle naší zásady vracení peněz.",
          4: "Používáme Stripe pro bezpečné zpracování plateb a veškeré platební údaje jsou uloženy u Stripe.",
        },
        paragraphs: {
          0: "Amiquus nabízí služby na bázi předplatného za těchto podmínek:",
        },
      },
      5: {
        heading: "Kapacitní omezení",
        id: "kapacita",
        list: {
          0: "Noví uživatelé se mohou připojit na náš čekací seznam.",
          1: "Pořadí na čekací listině je určeno podle pořadí přihlášení.",
          2: "Jakmile bude kapacita k dispozici, uživatelé na čekací listině budou informováni podle pořadí.",
          3: "Vyhrazujeme si právo kdykoli změnit kapacitní limity.",
        },
        paragraphs: {
          0: "Aby byla zachována kvalita a spolehlivost služby, AMIQUUS omezuje počet aktivních předplatných na 30. Jakmile je tento limit dosažen:",
        },
      },
      6: {
        heading: "Omezení web scrapingu",
        id: "sběr dat",
        list: {
          0: "Amiquus respektuje podmínky používání webových stránek, které monitorujeme.",
          1: "Zavádíme omezení rychlosti a dodržujeme zásady ohleduplného procházení webu",
          2: "Dostupnost některých webových stránek se může měnit podle jejich podmínek a technických opatření.",
          3: "Nezaručujeme úplnost ani aktuálnost získaných dat.",
        },
        paragraphs: {
          0: "Naše služba přistupuje k datům a zpracovává je z více webových stránek s inzeráty aut. Používáním naší služby berete na vědomí, že:",
        },
      },
      7: {
        heading: "Duševní vlastnictví",
        id: "intelektuální",
        paragraphs: {
          0: "Služba AMIQUUS, včetně svého původního obsahu, funkcí a funkcionality, je a zůstane výhradním vlastnictvím společnosti AMIQUUS. Naše služba je chráněna autorským právem, ochrannými známkami a dalšími zákony Spojených států amerických i zahraničních zemí.",
          1: "Naše ochranné známky a obchodní vzhled nesmí být používány v souvislosti s žádným produktem ani službou bez předchozího písemného souhlasu společnosti AMIQUUS.",
        },
      },
      8: {
        heading: "Ukončení",
        id: "ukončení",
        paragraphs: {
          0: "Váš účet můžeme okamžitě ukončit nebo pozastavit, bez předchozího upozornění či odpovědnosti, z jakéhokoliv důvodu, včetně, ale bez omezení, pokud porušíte Podmínky.",
          1: "Po ukončení vaše právo používat službu okamžitě zaniká. Pokud si přejete svůj účet zrušit, můžete jednoduše přestat službu používat, nebo nás kontaktovat s žádostí o smazání účtu.",
        },
      },
      9: {
        heading: "Omezení odpovědnosti",
        id: "omezení",
        list: {
          0: "Váš přístup ke službě, její používání nebo nemožnost přístupu či používání služby",
          1: "Jakékoli chování nebo obsah třetí strany na službě",
          2: "Veškerý obsah získaný ze služby",
          3: "Neoprávněný přístup, použití nebo změna vašich přenosů či obsahu",
        },
        paragraphs: {
          0: "Za žádných okolností nenese AMIQUUS ani jeho ředitelé, zaměstnanci, partneři, zástupci, dodavatelé či přidružené osoby odpovědnost za jakékoli nepřímé, náhodné, zvláštní, následné nebo sankční škody, včetně, bez omezení, ztráty zisku, dat, možnosti užívání, dobrého jména nebo jiných nehmotných ztrát, které vzniknou v důsledku:",
        },
      },
    },
    title: "Podmínky služby",
  },
  verifyEmail: {
    codelabel: "Ověřovací kód",
    description: "Ověřovací kód byl odeslán na váš e-mail.",
    footernote: "Nedostali jste kód? Zkontrolujte složku se spamem.",
    resendbutton: "Znovu odeslat kód",
    resendcountdown: "Kód můžete znovu odeslat za {{seconds}}s.",
    title: "Ověřte svůj e-mail",
    toast: {
      emailupdated: "E-mail aktualizován",
      entervalidemail: "Zadejte platnou e-mailovou adresu.",
      error: "Chyba",
      failed: "Ověření se nezdařilo",
      invalidemail: "Neplatný e-mail",
      resent: "Ověřovací kód byl znovu odeslán",
      sameemail: "Stejný e-mail",
      sameemaildesc: "Nový e-mail je stejný jako aktuální e-mail.",
      verified: "E-mail byl ověřen",
    },
    updateemailbutton: "Aktualizovat e-mail",
    updateemaillabel: "Aktualizovat e-mail",
    verifybutton: "Ověřte e-mail",
  },
  waitlist: {
    cantjoin: {
      description: "Dáme vám vědět, jakmile se uvolní místo pro předplatné.",
      title: "Přidejte se na čekací listinu",
    },
    form: {
      email: {
        description:
          "Tento e-mail použijeme k tomu, abychom vás informovali, až se uvolní místo.",
        label: "E-mail",
        placeholder: "john.doe@example.com",
      },
      firstname: {
        label: "Jméno",
        placeholder: "Jan",
      },
      lastname: {
        label: "Příjmení",
        placeholder: "Jelen",
      },
      submit: "Připojit se na čekací listinu",
      submitting: "Odesílání...",
    },
    limited: {
      available:
        "Zbývá {{remaining}} předplatných míst z celkových {{capacity}} aktuálně k dispozici.",
      description:
        "Omezujeme náš systém na pouhých 30 aktivních předplatitelů, abychom zajistili:",
      full: "Všechna předplatná jsou momentálně obsazena. Přidejte se na čekací listinu a budete informováni, jakmile se uvolní místo.",
      heading: "Omezená dostupnost",
      points: {
        0: "Výjimečná spolehlivost a rychlost scrapování pro všechny uživatele",
        1: "Snížené riziko blokace ze strany webů s inzeráty aut",
        2: "Personalizovaná podpora pro každého předplatitele",
        3: "Spravedlivé rozdělení serverových zdrojů",
      },
    },
    metaDescription:
      "Přidejte se na čekací listinu AMIQUUS, abyste byli informováni, až budou předplatná k dispozici.",
    metaTitle: "Přidejte se na čekací listinu – Amiquus",
    subtitle:
      "Vzhledem k vysoké poptávce omezujeme počet aktivních předplatných, abychom zajistili co nejlepší kvalitu služeb pro všechny uživatele.",
    success: {
      button: "Zpět na domovskou stránku",
      description: "Dáme vám vědět, jakmile se uvolní místo k odběru.",
      message:
        "Děkujeme za Váš zájem o Amiquus! Přidali jsme Vás na čekací listinu a ozveme se Vám, jakmile se uvolní místo.",
      title: "Jste na čekací listině!",
    },
    title: "Přidejte se na náš čekací seznam",
  },
  waitlistPrompt: {
    button: "Přidejte se na čekací listinu",
    description:
      "Momentálně máme plnou kapacitu. Připojte se na čekací listinu, abyste byli informováni, až se uvolní místo.",
    title: "Přidejte se na čekací listinu",
  },
  websiteSelection: {
    actions: {
      continue: "Pokračovat",
      previous: "Předchozí",
    },
    description:
      "Vyberte si, které webové stránky chcete sledovat a jak často chcete dostávat aktualizace.",
    errors: {
      facebookurl:
        "URL Facebook Marketplace je povinný, pokud je vybrán Facebook.",
      websites: "Musí být vybrána alespoň jedna webová stránka.",
    },
    heading: "Výběr webu",
    help: {
      facebookurl:
        "Vložte sem URL výsledků vyhledávání na Facebook Marketplace.",
      updatefrequency:
        "Jak často bychom měli kontrolovat nové inzeráty? Vyšší frekvence mohou znamenat vyšší náklady.",
      videodesc:
        "Podívejte se na video níže pro podrobný návod krok za krokem.",
      videotitle:
        "Potřebujete pomoc s nalezením odkazu na vyhledávání na Facebook Marketplace?",
      websites:
        "Vyberte jednu nebo více webových stránek ke sledování inzerátů na auta.",
    },
    labels: {
      facebookurl: "URL Facebook Marketplace",
      updatefrequency: "Frekvence aktualizací",
      websites: "Weby ke sledování",
    },
    placeholders: {
      frequency: "Vyberte frekvenci",
    },
  },
};

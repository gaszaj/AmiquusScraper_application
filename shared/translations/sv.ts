export const sv = {
  about: {
    description:
      "Vi revolutionerar hur människor hittar sin perfekta begagnade bil genom att göra avancerad övervakningsteknik tillgänglig för alla.",
    join: {
      cta: "Se lediga tjänster",
      description:
        "Vi letar alltid efter talangfulla personer som brinner för teknik och vill vara med och förändra bilköpsupplevelsen. Kolla in våra aktuella lediga tjänster och bli en del av vår resa.",
      heading: "Bli en del av vårt team",
    },
    meta: {
      description:
        "Lär känna AMIQUUS, vårt uppdrag att revolutionera begagnatbilsköp och teamet bakom vår intelligenta tjänst för bevakning av bilannonser.",
      title: "Om oss | Amiquus - Tjänst för bevakning av bilannonser",
    },
    mission: {
      heading: "Vårt uppdrag",
      items: {
        0: {
          description:
            "Slipp att ständigt uppdatera flera webbplatser genom att automatisera sökprocessen och få notifieringar i rätt tid.",
          title: "Spara tid",
        },
        1: {
          description:
            "Var först med att få veta när ett riktigt bra erbjudande dyker upp, så att du får försprång på en konkurrensutsatt marknad där timing är allt.",
          title: "Hitta bättre erbjudanden",
        },
        2: {
          description:
            "Fatta välgrundade beslut med omfattande övervakning på flera pålitliga bilannonsplattformar.",
          title: "Handla tryggt",
        },
      },
    },
    questions: {
      description:
        "Läs mer om hur vår tjänst fungerar, se våra prisalternativ eller kontakta vårt supportteam.",
      heading: "Har du frågor?",
      links: {
        faq: "Besök vanliga frågor",
        pricing: "Visa priser",
        support: "Kontakta support",
      },
    },
    story: {
      heading: "Vår berättelse",
      paragraphs: {
        0: "Amiquus startade 2023 när vår grundare, Alex, tillbringade månader med att uppdatera bilannonser på olika webbplatser i jakten på en specifik, ovanlig modell till ett bra pris. Efter att ha missat flera chanser på grund av försenade notiser insåg han att det måste finnas ett bättre sätt.",
        1: "Tillsammans med ett litet team av utvecklare och bilentusiaster byggde Alex ett övervakningssystem som kunde spåra annonser på flera webbplatser samtidigt och skicka omedelbara notiser när det dök upp träffar.",
        2: "Det som började som ett personligt projekt fick snabbt intresse från vänner och familj, och i början av 2025 lanserades AMIQUUS som en tjänst tillgänglig för alla. Idag hjälper vi bilköpare över hela landet att spara tid och hitta bättre erbjudanden med vår intelligenta övervakningsteknologi.",
      },
    },
    team: {
      heading: "Vårt team",
      members: {
        0: {
          bio: "Före detta mjukvaruingenjör med passion för bilar och att skapa innovativa lösningar.",
          name: "Alex Morgan, så här",
          role: "Grundare och VD",
        },
        1: {
          bio: "Expert på datavetenskap med specialisering inom web scraping och informationsåtervinning.",
          name: "Sarah Chen, så här",
          role: "Teknisk chef",
        },
        2: {
          bio: "Fullstackutvecklare med expertis inom att bygga högpresterande notifieringssystem.",
          name: "Marcus Lee",
          role: "Huvudutvecklare",
        },
        3: {
          bio: "Före detta bilförsäljare som brinner för att hjälpa kunder hitta sitt perfekta fordon.",
          name: "Elena Rodriguez",
          role: "Kundframgång",
        },
      },
    },
    title: "Om Amiquus",
  },
  alertSchema: {
    errors: {
      carbrand: "Bilmärke är obligatoriskt",
      carmodel: "Bilmodell krävs",
      facebookmarketplaceurl:
        "Facebook Marketplace-URL krävs när Facebook är valt",
      fueltype: "Bränsletyp är obligatorisk",
      maxkilometers: "Max antal kilometer måste vara ett nummer",
      notificationlanguage: "Meddelandespråk måste anges",
      pricemax: "Maximipriset måste vara ett nummer",
      pricemin: "Lägsta pris måste vara ett nummer",
      telegramchatid: "Telegram-chatt-ID krävs",
      telegramtoken: "Telegram-bottoken krävs",
      telegramusername: "Telegram-användarnamn krävs",
      websitesselected: "Minst en webbplats måste väljas",
      yearmax: "Maximalt år måste vara ett giltigt år",
      yearmin: "Minimiår måste vara ett giltigt år",
    },
  },
  carDetails: {
    actions: {
      continue: "Fortsätt",
      previous: "Föregående",
    },
    description:
      "Ange vilka bildetaljer du letar efter. Alla fält är valfria – lämna tomma fält för att få fler resultat.",
    errors: {
      carbrand: "Bilmärke är obligatoriskt",
      carmodel: "Bilmodell krävs",
      fueltype: "Bränsletyp är obligatorisk",
      maxkilometers: "Max antal kilometer måste vara ett nummer",
      pricemax: "Maximalt pris måste vara ett nummer",
      pricemin: "Minimipris måste vara ett nummer",
      yearmax: "Maximalt år måste vara ett giltigt år",
      yearmin: "Minimiår måste vara ett giltigt år",
    },
    heading: "Bildetaljer",
    labels: {
      carbrand: "Bilmärke",
      carmodel: "Bilmodell",
      fueltype: "Bränsletyp",
      maxkilometers: "Maximala kilometer",
      pricemax: "Maximalt pris",
      pricemin: "Lägsta pris",
      yearmax: "Maximalt år",
      yearmin: "Minsta år",
    },
    options: {
      nomodelsavailable: "Inga tillgängliga modeller",
    },
    placeholders: {
      carbrand: "Välj bilmärke",
      carmodel: "Välj bilmodell",
      carmodeldisabled: "Välj bilmärke först",
      fueltype: "Välj bränsletyp",
      maxkilometers: "Ange maxantal kilometer",
      pricemax: "Ange maxpris",
      pricemin: "Ange lägsta pris",
      yearmax: "Ange maxår",
      yearmin: "Ange minsta år",
    },
  },
  dashboardPayment: {
    add: "Lägg till betalningsmetod",
    description:
      "Lägg till ett nytt kredit- eller betalkort för dina prenumerationsbetalningar.",
    errormessage: "Ett oväntat fel har inträffat",
    errortitle: "Fel vid tillägg av betalningsmetod",
    initerror: {
      description: "Det gick inte att initiera betalningsinställningarna",
      title: "Fel",
    },
    processing: "Bearbetar...",
  },
  dashboardPaymentMethodCard: {
    cancel: "Avbryt",
    confirmremove: "Ta bort kort",
    default: "Standard",
    expires: "Utgår",
    remove: "Ta bort",
    removedescription:
      "Är du säker på att du vill ta bort ditt {{brand}}-kort med slutsiffrorna {{last4}}?",
    removetitle: "Ta bort betalningsmetod",
    removewarning:
      "Det här är din standardbetalningsmetod och att ta bort den kan påverka dina aktiva prenumerationer.",
    setasdefault: "Ange som standard",
    setdefaultdescription:
      "Vill du ange {{brand}}-kortet som slutar på {{last4}} som din standardbetalningsmetod? Detta kort kommer att användas för alla framtida prenumerationsbetalningar.",
    setdefaulttitle: "Ange standardbetalningsmetod",
  },
  dashboardSubscriptionCard: {
    cancelalert: "Avbryt varning",
    canceldescription:
      "Är du säker på att du vill avbryta din bilbevakning för {{brand}} {{model}}? Detta kommer att stoppa alla aviseringar och du måste skapa en ny bevakning om du vill följa denna bil igen.",
    canceltitle: "Avbryt bilvarning",
    confirmcancel: "Avbryt varning",
    edit: "Redigera",
    keepmyalert: "Spara min varning",
    language: "Språk",
    price: "Pris",
    pricerange: "Pris",
    updates: "Uppdateringar",
    websites: "Webbplatser",
    years: "År",
  },
  faq: {
    contactlink: "Kontakta vårt supportteam",
    contactprompt: "Har du fortfarande frågor?",
    questions: {
      0: {
        answer:
          "Hur snabbt du får notiser beror på vilken uppdateringsfrekvens du väljer. Med standardplanen får du notiser inom en timme efter att en ny annons lagts upp. För nästan omedelbara notiser (inom några minuter efter publicering) kan du uppgradera till våra mer frekventa uppdateringsplaner.",
        question:
          "Hur snabbt får jag notiser efter att en ny annons har publicerats?",
      },
      1: {
        answer:
          "Ja! Du kan skapa flera sökprofiler med olika kriterier. Varje profil räknas som ett separat abonnemang, men du kan hantera alla från ett och samma konto. Det är perfekt om du letar efter olika typer av fordon samtidigt.",
        question: "Kan jag spåra flera olika typer av bilar samtidigt?",
      },
      2: {
        answer:
          "Vi stödjer för närvarande de största bilannonseringsplattformarna, inklusive AutoTrader, CarGurus, Cars.com och Facebook Marketplace. Vi utökar ständigt vårt utbud för att inkludera fler webbplatser baserat på användarnas efterfrågan och regional popularitet.",
        question: "Vilka webbplatser stöder ni för närvarande?",
      },
      3: {
        answer:
          "Inte alls! Vi erbjuder steg-för-steg-instruktioner med både text- och videoguidade genomgångar för att hjälpa dig att sätta upp Telegram-boten. De flesta användare är klara med installationen på mindre än 5 minuter, även utan teknisk bakgrund.",
        question: "Behöver jag teknisk kunskap för att använda Telegram-boten?",
      },
      4: {
        answer:
          "Ja, du kan när som helst ändra dina sökkriterier från din kontopanel. Ändringarna träder i kraft omedelbart och dina aviseringar uppdateras direkt utan något avbrott i tjänsten.",
        question:
          "Kan jag ändra mina sökkriterier efter att jag har skapat min prenumeration?",
      },
      5: {
        answer:
          'Du kan när som helst säga upp din prenumeration via din kontopanel. Gå till avsnittet "Prenumerationer", välj den prenumeration du vill avsluta och klicka på knappen "Avsluta prenumeration". Din tjänst fortsätter vara aktiv till slutet av din nuvarande faktureringsperiod.',
        question: "Hur säger jag upp mitt abonnemang?",
      },
    },
    subtitle: "Hitta svar på de vanligaste frågorna om vår tjänst.",
    title: "Vanliga frågor",
  },
  faqs: {
    general: {
      heading: "Allmänna frågor",
      howitworks: {
        answer: {
          0: "Du ställer in dina sökkriterier (märke, modell, prisspann, etc.)",
          1: "Du väljer vilka webbplatser du vill bevaka",
          2: "Du kopplar ditt Telegram-konto för aviseringar",
          3: "Vårt system övervakar kontinuerligt dina valda webbplatser efter nya annonser",
          4: "När en matchande bil dyker upp får du direkt en Telegram-notis med alla detaljer och en direktlänk.",
        },
        question: "Hur fungerar det?",
      },
      whatis: {
        answer:
          "Amiquus är en tjänst som övervakar flera bilannonswebbplatser efter fordon som matchar dina specifika kriterier. När en passande annons dyker upp får du en omedelbar notis via Telegram, vilket gör att du kan vara bland de första att kontakta säljare och säkra riktigt bra erbjudanden.",
        question: "Vad är Amiquus?",
      },
      whichwebsites: {
        answerintro:
          "Vi övervakar för närvarande följande stora bilannonssajter:",
        list: {
          0: "AutoTrader",
          1: "Cars.com",
          2: "CarGurus",
          3: "TrueCar",
          4: "Facebook Marketplace (via URL)",
          5: "Craigslist",
          6: "eBay Motors",
        },
        outro:
          "Vi lägger ständigt till fler plattformar för att ge den mest heltäckande täckningen möjligt.",
        question: "Vilka bilannonseringswebbplatser bevakar du?",
      },
    },
    metaDescription:
      "Hitta svar på de vanligaste frågorna om AMIQUUS tjänst för bevakning av bilannonser, prenumerationer, inställning av aviseringar och mer.",
    metaTitle: "Vanliga frågor och svar | Amiquus",
    subscription: {
      cancel: {
        note: "Ditt abonnemang kommer att förbli aktivt till slutet av din nuvarande faktureringsperiod.",
        question: "Hur säger jag upp mitt abonnemang?",
        steps: {
          0: "Logga in på ditt konto",
          1: 'Gå till sidan "Profil"',
          2: 'Välj fliken "Prenumerationer"',
          3: "Klicka på knappen ”Avsluta prenumeration” bredvid den prenumeration du vill avsluta",
        },
        stepsintro:
          "Du kan när som helst avsluta din prenumeration från din kontoprofil-sida:",
      },
      cost: {
        answer: {
          0: "Våra priser börjar på 79,99 $ per månad för övervakning av en webbplats med uppdateringar var 6:e timme. Ytterligare webbplatser kostar 4,99 $ styck per månad. Du kan också uppgradera din uppdateringsfrekvens för snabbare aviseringar.",
          1: "För specifika prisuppgifter, vänligen se vår prissektion på startsidan.",
        },
        question: "Hur mycket kostar ett abonnemang?",
      },
      heading: "Prenumerationsfrågor",
      limit: {
        intro:
          "Vi begränsar vår tjänst till 30 aktiva prenumeranter för att säkerställa:",
        list: {
          0: "Tjänster och datanoggrannhet av högsta kvalitet",
          1: "Personligt stöd för varje abonnent",
          2: "Snabbare aviseringar under högbelastade annonstider",
          3: "Etisk datainsamling som inte överbelastar målsidorna",
        },
        outro:
          "Om vi har nått maxkapacitet kan du gå med i vår väntelista för att bli meddelad när en plats blir ledig.",
        question: "Varför finns det en gräns för antalet prenumeranter?",
      },
      multiple: {
        answer:
          "Ja, du kan skapa flera prenumerationer under ett och samma konto. Varje prenumeration kan följa olika bilmodeller, märken eller prisklasser. Det är särskilt användbart om du letar efter flera fordon eller hjälper vänner och familj med deras bilsökning.",
        question: "Kan jag ha flera abonnemang för olika bilmodeller?",
      },
    },
    subtitle:
      "Hitta snabba svar på vanliga frågor om vår tjänst för bevakning av bilannonser",
    support: {
      button: "Kontakta support",
      description:
        "Om du inte hittade svaret på din fråga finns vårt supportteam här för att hjälpa dig!",
      heading: "Har du fortfarande frågor?",
    },
    technical: {
      frequency: {
        intro: "Hur ofta du får aviseringar beror på:",
        list: {
          0: "Ditt valda uppdateringsfrekvenspaket (från var 6:e timme till var 30:e minut)",
          1: "Hur många nya annonser matchar dina kriterier",
          2: "Hur aktiv marknaden är för ditt valda märke/modell",
        },
        outro:
          "Du får bara aviseringar när nya annonser som matchar dina kriterier hittas.",
        question: "Hur ofta kommer jag att få aviseringar?",
      },
      heading: "Tekniska frågor",
      privacy: {
        intro: "Vi tar dataskydd på allvar och tillämpar följande åtgärder:",
        list: {
          0: "Krypterad data under överföring och i vila",
          1: "Säkra betalningar via Stripe",
          2: "Ingen delning av data med tredje part",
          3: "Du kan när som helst begära eller radera dina uppgifter",
        },
        outro: "Läs vår fullständiga integritetspolicy för mer information.",
        question: "Hur skyddas mina personuppgifter?",
      },
      telegram: {
        note: "Detaljerade steg-för-steg-instruktioner med skärmbilder finns tillgängliga under processen för att skapa prenumerationen.",
        question: "Hur ställer jag in Telegram-notiser?",
        steps: {
          0: "Skapa en Telegram-bot med BotFather (instruktioner ges under installationen)",
          1: "Kopiera din bottoken från BotFather",
          2: "Starta en konversation med din bot",
          3: "Hämta ditt chatt-ID (instruktioner ges vid installationen)",
          4: "Ange din bottoken och chat-ID i dina prenumerationsinställningar för AMIQUUS",
          5: "Testa din avisering med knappen `Skicka testmeddelande`",
        },
        stepsintro: "För att ställa in Telegram-notiser:",
      },
    },
    title: "Vanliga frågor",
  },
  features: {
    account: {
      description:
        "Hantera flera sökprofiler och ändra dina prenumerationsinställningar med några klick.",
      title: "Enkel kontohantering",
    },
    filters: {
      description:
        "Ställ in exakta kriterier som märke, modell, år, miltal och prisspann för att hitta precis det du söker.",
      title: "Anpassade filter",
    },
    frequency: {
      description:
        "Välj hur ofta vi ska kontrollera nya annonser, från uppdateringar varje timme till övervakning i realtid.",
      title: "Anpassningsbar frekvens",
    },
    heading: "Varför välja Amiquus?",
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
        "Övervaka flera bilannonswebbplatser samtidigt utan att behöva kontrollera varje manuellt.",
      title: "Spårning på flera webbplatser",
    },
    notifications: {
      description:
        "Få omedelbara aviseringar via Telegram när en bil som matchar dina kriterier läggs ut till försäljning.",
      title: "Omedelbara aviseringar",
    },
    subheading:
      "Spara tid och missa aldrig din perfekta bil med vår automatiserade bevakningstjänst.",
  },
  footer: {
    about: "Om oss",
    blog: "Blogg",
    branddescription:
      "Din personliga assistent för att hitta det perfekta begagnade bilköpet vid rätt tillfälle.",
    brandtitle: "Amiquus",
    careers: "Karriär",
    contact: "Kontakt",
    cookies: "Cookiepolicy",
    copyright: "Alla rättigheter förbehållna.",
    email: "support@amiquus.com",
    faq: "Vanliga frågor",
    features: "Funktioner",
    gdpr: "GDPR-efterlevnad",
    getstarted: "Kom igång",
    legal: "Juridik",
    pricing: "Priser",
    privacy: "Integritetspolicy",
    quicklinks: "Snabblänkar",
    support: "Support",
    telegram: "Kontakta oss på Telegram",
    terms: "Användarvillkor",
  },
  hero: {
    button1: "Ställ in dina aviseringar",
    button2: "Se hur det fungerar",
    label: "Följ begagnade bilannonser i realtid",
    subtitle:
      "Amiquus meddelar dig direkt när din drömbil blir tillgänglig på flera bilannonseringssajter. Få notiser via Telegram så fort en matchning hittas.",
    title: "Missa aldrig ditt perfekta bilklipp igen",
    trustindicators: {
      cancelanytime: "Avsluta när som helst",
      nosetup: "Ingen installation krävs",
      realtime: "Aviseringar i realtid",
      websites: "Över 15 webbplatser spåras",
    },
  },
  howItWorks: {
    features: {
      0: "Spåra över 15 bilannonswebbplatser samtidigt",
      1: "Anpassningsbara sökkriterier med avancerad filtrering",
      2: "Aviseringar i realtid via Telegram",
      3: "Automatiska prisändrings- och nya annonsaviseringar",
      4: "Enkel installationsprocess som tar mindre än 5 minuter",
    },
    notificationmockup1: {
      description: "BMW 3-serie, 2019, $32,500 – Nyss listad på AutoTrader",
      title: "Nytt matchning hittad!",
    },
    notificationmockup2: {
      description:
        "Mercedes C-klass, 2020, 3 000 mil – Priset sänkt med 20 000 kr",
      title: "Telegramvarning",
    },
    setalerts: "Ställ in dina aviseringar",
    steps: {
      findcar: {
        description:
          "Var först med att få veta om nya annonser och säkra de bästa erbjudandena före alla andra.",
        title: "Hitta din perfekta bil",
      },
      notifications: {
        description:
          "Få aviseringar direkt när en bil som matchar dina kriterier dyker upp på någon av våra bevakade webbplatser.",
        title: "Få aviseringar direkt",
      },
      preferences: {
        description:
          "Välj bilmärken, modeller, prisspann och andra kriterier du vill bevaka.",
        title: "Ange dina inställningar",
      },
      telegram: {
        description:
          "Koppla ditt Telegram-konto för att få omedelbara aviseringar om nya annonser.",
        title: "Anslut Telegram",
      },
    },
    subtitle:
      "Ställ in en gång och låt vårt automatiserade system hitta det perfekta bilerbjudandet åt dig",
    title: "Hur Amiquus fungerar",
    whytitle: "Varför välja Amiquus?",
  },
  limited: {
    available: {
      buttonText: "Kom igång nu",
      description:
        "{{active}} av {{capacity}} prenumerationer är för närvarande aktiva. Gott om plats för dig att gå med!",
      title: "Prenumerationer tillgängliga",
    },
    full: {
      buttonText: "Gå med i väntelistan",
      description:
        "Vi har nått vårt tak på 30 aktiva prenumeranter. Gå med i vår väntelista för att få besked när en plats blir ledig.",
      title: "Prenumerationsgräns uppnådd",
    },
    limited: {
      buttonText: "Kom igång nu",
      description:
        "Endast {{remaining}} platser kvar av totalt {{capacity}}. Anmäl dig nu innan vi når maxkapacitet!",
      title: "Begränsad tillgänglighet",
    },
  },
  login: {
    description:
      "Ange din e-postadress och ditt lösenord för att få tillgång till din kontrollpanel",
    emaillabel: "E-post",
    errors: {
      invalidemail: "Vänligen ange en giltig e-postadress",
      shortpassword: "Lösenordet måste vara minst 6 tecken",
    },
    errortitle: "Inloggning misslyckades",
    genericerror: "Kontrollera dina inloggningsuppgifter och försök igen.",
    loggingin: "Loggar in...",
    loginbutton: "Logga in",
    loginwithgoogle: "Logga in med Google",
    noaccount: "Har du inget konto?",
    or: "eller",
    passwordlabel: "Lösenord",
    registerlink: "Registrera dig",
    successmessage: "Du har loggats in framgångsrikt.",
    successtitle: "Inloggning lyckades",
    title: "Logga in på ditt konto",
  },
  loginPrompt: {
    description:
      "Du måste vara inloggad för att fortsätta. Logga in eller registrera dig.",
    login: "Logga in",
    register: "Registrera dig",
    title: "Inloggning krävs",
  },
  navigations: {
    faq: "Vanliga frågor",
    features: "Funktioner",
    getalerts: "Få aviseringar",
    getstarted: "Kom igång",
    how: "Så fungerar det",
    language: "Språk",
    login: "Logga in",
    logout: "Logga ut",
    myalerts: "Mina aviseringar",
    pricing: "Priser",
    profile: "Profil",
    settings: "Inställningar",
    signup: "Registrera dig",
    subscribers: "Prenumeranter",
    theme: "Tema",
    waitlist: "Väntelista",
  },
  notFound: {
    message: "Glömde du lägga till sidan i routern?",
    title: "404 Sidan kunde inte hittas",
  },
  payment: {
    button: {
      processing: "Bearbetar...",
      submit: "Ställ in betalningsmetod",
    },
    toast: {
      error: {
        fallback: "Ett oväntat fel uppstod. Vänligen försök igen.",
        title: "Fel",
      },
      success: {
        description: "Din betalningsmetod har ställts in framgångsrikt.",
        title: "Framgång",
      },
    },
  },
  personalInfo: {
    actions: {
      continue: "Fortsätt",
      login: "Logga in eller registrera dig för att fortsätta",
    },
    description:
      "Vänligen ange dina personuppgifter så att vi kan ställa in dina aviseringar korrekt.",
    errors: {
      email: "Ange en giltig e-postadress",
      firstname: "Förnamn är obligatoriskt",
      lastname: "Efternamn är obligatoriskt",
    },
    heading: "Personuppgifter",
    labels: {
      email: "E-postadress",
      firstname: "Förnamn",
      lastname: "Efternamn",
    },
    placeholders: {
      email: "john.doe@example.com",
      firstname: "Johan",
      lastname: "Hjort",
    },
  },
  pricing: {
    addons: {
      0: {
        name: "Varje ytterligare webbplats",
      },
      1: {
        name: "Uppdateringar var 30:e minut",
      },
      2: {
        name: "Uppdateringar var 15:e minut",
      },
      3: {
        name: "Uppdateringar var 5:e minut",
      },
      4: {
        name: "Uppdateringar varje minut",
      },
    },
    addonstitle: "Tillägg:",
    basetitle: "Baspaket: 99 kr/månad",
    button: "Kom igång nu",
    footernote:
      "Alla abonnemang inkluderar obegränsade sökkonfigurationer och enkel hantering av prenumerationer.",
    includedfeatures: {
      0: "Övervakning av en webbplats",
      1: "Uppdateringar varje timme",
      2: "Obegränsade filter",
      3: "Telegramaviseringar",
    },
    includedtitle: "Det som ingår:",
    subtitle:
      "Vår prissättning baseras på dina specifika behov. Börja med ett grundpaket och anpassa det efter dina önskemål.",
    title: "Enkel och transparent prissättning",
  },
  privacy: {
    lastupdated: "Senast uppdaterad: 21 maj 2025",
    metaDescription:
      "Läs om hur AMIQUUS hanterar dina personuppgifter, dina rättigheter till integritet och våra rutiner för datainsamling.",
    metaTitle: "Integritetspolicy | Amiquus",
    sections: {
      0: {
        heading: "Introduktion",
        id: "introduktion",
        paragraphs: {
          0: "Välkommen till AMIQUUS. Vi respekterar din integritet och är engagerade i att skydda dina personuppgifter. Denna integritetspolicy informerar dig om hur vi tar hand om dina personuppgifter när du besöker vår webbplats och berättar om dina rättigheter samt hur lagen skyddar dig.",
        },
      },
      1: {
        heading: "Information vi samlar in",
        id: "uppgifter-vi-samlar-in",
        list: {
          0: "Personuppgifter: E-postadress, förnamn, efternamn och profilbild (om tillhandahållen via tredjepartsautentisering).",
          1: "Kontouppgifter: Dina inloggningsuppgifter och kontoinställningar.",
          2: "Användningsdata: Information om hur du använder vår webbplats och våra tjänster.",
          3: "Inställningar för bilsökning: Fordonskriterier du ställer in för bevakning (märke, modell, prisspann etc.).",
          4: "Telegraminformation: Om du väljer att ta emot aviseringar via Telegram sparar vi ditt Telegram-chatt-ID och bottoken.",
          5: "Betalningsinformation: När du genomför ett köp samlar vår betalningsleverantör in de betalningsuppgifter som krävs för att behandla din transaktion. AMIQUUS lagrar inte hela din kreditkortsinformation.",
        },
        paragraphs: {
          0: "Vi samlar in flera olika typer av information för olika ändamål för att kunna tillhandahålla och förbättra vår tjänst till dig:",
        },
      },
      2: {
        heading: "Hur vi använder dina uppgifter",
        id: "hur-vi-använder-data",
        list: {
          0: "För att tillhandahålla och underhålla vår tjänst",
          1: "För att meddela dig om ändringar i vår tjänst",
          2: "För att du ska kunna delta i interaktiva funktioner i vår tjänst",
          3: "Att ge kundsupport",
          4: "För att samla in analyser eller värdefull information så att vi kan förbättra vår tjänst",
          5: "För att övervaka användningen av vår tjänst",
          6: "För att upptäcka, förebygga och åtgärda tekniska problem",
          7: "För att behandla betalningar och förebygga bedrägliga transaktioner",
          8: "För att skicka bilannonser som matchar dina önskemål via din valda notifieringsmetod",
        },
        paragraphs: {
          0: "Vi använder dina personuppgifter för följande ändamål:",
        },
      },
      3: {
        heading: "Datalagring och säkerhet",
        id: "datalagring",
        paragraphs: {
          0: "Vi vidtar lämpliga säkerhetsåtgärder för att skydda dina personuppgifter mot obehörig åtkomst, ändring, avslöjande eller förstörelse. All data lagras på säkra servrar med kryptering både under överföring och i vila.",
          1: "Vi behåller dina personuppgifter endast så länge det är nödvändigt för de ändamål som anges i denna integritetspolicy, inklusive för att uppfylla eventuella juridiska, regulatoriska, skattemässiga, bokföringsmässiga eller rapporteringskrav.",
        },
      },
      4: {
        heading: "Dina GDPR-rättigheter",
        id: "dataskyddsförordningen",
        list: {
          0: "Rätten att få tillgång till, uppdatera eller radera information vi har om dig",
          1: "Rätten till rättelse",
          2: "Rätten att invända",
          3: "Rätten till begränsning",
          4: "Rätten till dataportabilitet",
          5: "Rätten att återkalla samtycke",
        },
        paragraphs: {
          0: "Om du är bosatt inom Europeiska ekonomiska samarbetsområdet (EES) har du vissa rättigheter när det gäller dataskydd. AMIQUUS strävar efter att vidta rimliga åtgärder för att ge dig möjlighet att rätta, ändra, radera eller begränsa användningen av dina personuppgifter.",
          1: "Du har följande rättigheter gällande dataskydd:",
        },
      },
      5: {
        heading: "Cookiepolicy",
        id: "cookies",
        list: {
          0: "Håll dig inloggad",
          1: "Förstå hur du använder vår webbplats",
          2: "Kom ihåg dina inställningar",
          3: "Anpassa din upplevelse",
        },
        paragraphs: {
          0: "Cookies är små datafiler som lagras på din enhet. Vi använder cookies för att:",
        },
      },
      6: {
        heading: "Tjänster från tredje part",
        id: "tredje part",
        list: {
          0: "Betalningsleverantörer (Stripe)",
          1: "Analysleverantörer",
          2: "Kundsupporttjänster",
          3: "Leverantörer av hosting och molninfrastruktur",
        },
        paragraphs: {
          0: "Vi kan anlita tredjepartsföretag och enskilda personer för att underlätta vår tjänst, tillhandahålla tjänsten för vår räkning, utföra tjänsterelaterade uppgifter eller hjälpa oss att analysera hur vår tjänst används.",
          1: "Dessa tredje parter inkluderar:",
        },
        paragraphs2: {
          0: "Dessa tredje parter har tillgång till dina personuppgifter endast för att utföra dessa uppgifter för vår räkning och är skyldiga att inte avslöja eller använda dem för något annat syfte.",
        },
      },
      7: {
        heading: "Ändringar i denna integritetspolicy",
        id: "ändringar",
        paragraphs: {
          0: "Vi kan komma att uppdatera vår integritetspolicy då och då. Vi meddelar dig om eventuella ändringar genom att publicera den nya integritetspolicyn på denna sida och uppdatera datumet för ”Senast uppdaterad”.",
          1: "Vi rekommenderar att du regelbundet granskar denna integritetspolicy för eventuella ändringar. Ändringar i denna integritetspolicy träder i kraft när de publiceras på denna sida.",
        },
      },
      8: {
        heading: "Kontakta oss",
        id: "kontakt",
        list: {
          0: "Via e-post: privacy@amiquus.com",
          1: "Genom att besöka kontaktsidan på vår webbplats",
        },
        paragraphs: {
          0: "Om du har några frågor om denna integritetspolicy, vänligen kontakta oss:",
        },
      },
    },
    title: "Integritetspolicy",
  },
  profile: {
    account: {
      cancel: "Avbryt",
      desc: "Uppdatera din kontoinformation och dina inställningar.",
      email: "E-post",
      name: "Namn",
      save: "Spara ändringar",
      title: "Kontoinställningar",
      username: "Användarnamn",
    },
    alerts: {
      add: "Lägg till ny varning",
      cta: "Skapa din första avisering",
      desc: "Hantera dina bilbevakningar och aviseringar.",
      none: "Du har inga aktiva bilbevakningar.",
      title: "Prenumerationer på bilvarningar",
      warning:
        "⚠️ Ändringar i ditt abonnemang kommer att tillämpas under nästa faktureringsperiod, och först efter en lyckad betalning. Om betalningen misslyckas kommer din nuvarande larminställning att förbli oförändrad.",
    },
    logout: {
      desc: "Är du säker på att du vill logga ut från ditt konto?",
      success: "Du har loggats ut framgångsrikt.",
      title: "Logga ut",
    },
    payments: {
      desc: "Hantera dina betalningsmetoder för prenumerationsfakturering.",
      encrypted: "Din betalningsinformation är krypterad och lagras säkert.",
      none: "Du har inga sparade betalningsmetoder.",
      title: "Betalningsmetoder",
    },
    security: {
      confirm: "Bekräfta nytt lösenord",
      current: "Nuvarande lösenord",
      desc: "Hantera dina säkerhetsinställningar och sekretessinställningar.",
      new: "Nytt lösenord",
      title: "Integritet och säkerhet",
      update: "Uppdatera lösenord",
    },
    sidebar: {
      account: "Kontoinställningar",
      logout: "Logga ut",
      membersince: "Medlem sedan",
      methods: "Betalningsmetoder",
      privacy: "Integritet och säkerhet",
      subscriptions: "Prenumerationer",
    },
    tabs: {
      alerts: "Mina aviseringar",
      payments: "Betalningsmetoder",
    },
  },
  register: {
    alreadyhave: "Har du redan ett konto?",
    and: "och",
    confirmpassword: "Bekräfta lösenord",
    createbtn: "Skapa konto",
    description: "Registrera dig för att börja följa din drömbil",
    email: "E-post",
    firstname: "Förnamn",
    google: "Registrera dig med Google",
    lastname: "Efternamn",
    login: "Logga in",
    orcontinue: "Eller fortsätt med",
    password: "Lösenord",
    privacypolicy: "Integritetspolicy",
    termsnotice: "Jag godkänner",
    termsofservice: "Användarvillkor",
    title: "Skapa konto",
    toast: {
      failure: {
        desc: "Kontrollera dina uppgifter och försök igen.",
        title: "Registreringen misslyckades",
      },
      invalidusername: {
        desc: "Användarnamnet måste vara alfanumeriskt och mellan 3 och 20 tecken långt",
        title: "Ogiltigt användarnamn",
      },
      missingfields: {
        desc: "Vänligen fyll i alla obligatoriska fält",
        title: "Saknade fält",
      },
      passwordmismatch: {
        desc: "Vänligen kontrollera att dina lösenord matchar",
        title: "Lösenorden matchar inte",
      },
      success: {
        desc: "Välkommen till AMIQUUS! Du kommer att omdirigeras för att verifiera din e-postadress.",
        title: "Registreringen lyckades",
      },
      termsnotaccepted: {
        desc: "Du måste acceptera villkoren och integritetspolicyn för att fortsätta",
        title: "Villkoren har inte godkänts",
      },
    },
    username: "Användarnamn",
  },
  review: {
    actions: {
      previous: "Föregående",
      submit: "Fortsätt till betalning",
    },
    description:
      "Vänligen granska dina prenumerationsuppgifter innan du går vidare till betalning.",
    monitoring: {
      facebookurl: "Facebook-URL",
      title: "Övervakningsinställningar",
      updatefrequency: "Uppdateringsfrekvens",
      websites: "Webbplatser",
    },
    notification: {
      language: "Aviseringsspråk",
      telegram: "Telegram-bot",
      title: "Aviseringsinställningar",
    },
    personal: {
      email: "E-post",
      name: "Namn",
      title: "Personuppgifter",
    },
    specs: {
      brand: "Varumärke",
      fueltype: "Bränsletyp",
      mileage: "Räckvidd (km)",
      model: "Modell",
      price: "Prisspann (€)",
      title: "Bilspecifikationer",
      yearrange: "Årsintervall",
    },
    summary: {
      base: "Basabonnemang",
      extrawebsites: "Fler webbplatser",
      frequencyupgrade: "Frekvensuppgradering",
      title: "Prenumerationsöversikt",
      total: "Totalt (per månad)",
    },
    terms: {
      checkbox: "Jag godkänner",
      error: "Du måste godkänna villkoren",
      note: "Ditt abonnemang förnyas automatiskt varje månad. Du kan när som helst avsluta det.",
      privacy: "Integritetspolicy",
      tos: "Användarvillkor",
    },
    title: "Granska ditt abonnemang",
  },
  setupAlerts: {
    basetitle: "99 kr/månad",
    basicplan: "Basplan",
    button: "Starta min bilvarningstjänst",
    cancel: "Avsluta när som helst",
    subtitle:
      "Konfigurera din Telegram-bot för att få aviseringar om din drömbil",
    title: "Ställ in dina bilaviseringar",
    toasts: {
      contactbot: {
        description:
          "För att få bilaviseringar måste du starta en chatt med vår Telegram-bot och skicka ett meddelande. Följ instruktionerna nedan för att kontakta boten.",
        title: "Kontaktbot krävs",
      },
      error: {
        title: "Fel vid skapande av prenumeration",
      },
      success: {
        description: "Ditt abonnemang har skapats framgångsrikt",
        title: "Prenumeration skapad",
      },
      terms: {
        description: "Du måste godkänna användarvillkoren för att fortsätta",
        title: "Villkor har inte accepterats",
      },
    },
  },
  signUp: {
    cta: "Få aviseringar nu",
    heading: "Skapa din bilbevakning",
    subheading: "Ställ in dina personliga bilannonsnotiser på bara några steg.",
    toast: {
      error: {
        description:
          "Vi kunde inte skapa din prenumeration. Försök igen senare.",
        title: "Prenumerationen misslyckades",
      },
      success: {
        description: "Ditt abonnemang har skapats framgångsrikt",
        title: "Prenumeration skapad",
      },
    },
    waitlist: {
      cta: "Gå med i väntelistan",
      message:
        "Vi har för närvarande fullt. Anmäl dig till vår väntelista för att få besked när en plats blir ledig.",
    },
  },
  subscription: {
    actions: {
      back: "Tillbaka",
      save: "Spara ändringar",
    },
    description:
      "Du kan pausa ditt abonnemang när som helst. När du pausar ditt abonnemang kommer dina bilaviseringar att stoppas tills du återupptar dem.",
    error: "Gå tillbaka till instrumentpanelen",
    form: {
      status: {
        active: "Aktiv",
        label: "Status",
        paused: "Pausad",
        placeholder: "Välj status",
      },
    },
    notfound: "Prenumeration hittades inte",
    notfoundsub: "Gå tillbaka till kontrollpanelen",
    subtitle: "Redigera dina prenumerationsuppgifter nedan",
    title: "Prenumerationsuppgifter",
    toasts: {
      error: {
        title: "Fel vid uppdatering av prenumeration",
      },
      priceerror: {
        description:
          "Du pausar och uppdaterar prenumerationspriset samtidigt. Du måste antingen pausa eller uppdatera priset.",
        title: "Kan inte uppdatera prenumerationen",
      },
      success: {
        description:
          "Ditt abonnemang för {{brand}} {{model}} har uppdaterats framgångsrikt",
        title: "Prenumeration uppdaterad",
      },
    },
  },
  support: {
    emailsupport: {
      description: "Skicka oss ett mejl så återkommer vi inom 24 timmar",
      email: "support@amiquus.com",
      title: "E-postsupport",
    },
    faqheading: "Vanliga frågor",
    faqs: {
      cancel: {
        answer:
          'Du kan när som helst säga upp din prenumeration från din kontoprofil. Klicka på fliken "Prenumerationer", hitta den prenumeration du vill avsluta och klicka på knappen "Avsluta prenumeration". Din tjänst fortsätter vara aktiv till slutet av din nuvarande faktureringsperiod.',
        question: "Hur säger jag upp mitt abonnemang?",
      },
      facebook: {
        answer:
          "Ja, vi stödjer övervakning av Facebook Marketplace. För att ställa in detta behöver du ange URL:en till sökresultatsidan på Facebook Marketplace med dina önskade filter tillämpade. Vårt system kommer sedan att övervaka just den sökningen efter nya annonser som matchar dina kriterier.",
        question: "Kan jag övervaka Facebook Marketplace?",
      },
      full: {
        answer:
          "För att upprätthålla vår höga servicenivå begränsar vi antalet aktiva prenumerationer. Om alla platser är upptagna kan du gå med i vår väntelista. Vi meddelar dig så snart en plats blir ledig och du får förtur att boka den innan vi öppnar för allmänheten.",
        question: "Vad händer om alla prenumerationsplatser är fulla?",
      },
      telegram: {
        intro: "För att ställa in Telegram-notiser, följ dessa steg:",
        outro:
          "Om du behöver mer hjälp finns vår utförliga guide tillgänglig på din kontrollpanel.",
        question: "Hur ställer jag in Telegram-notiser?",
        steps: {
          0: "Skapa en Telegram-bot med BotFather (instruktioner finns på vår kontrollpanel)",
          1: "Kopiera din API-token och chatt-ID",
          2: 'Ange dessa uppgifter i dina kontoinställningar under "Aviseringsinställningar"',
          3: 'Testa din anslutning med knappen "Skicka testmeddelande"',
        },
      },
      updates: {
        answer:
          "Uppdateringsfrekvensen beror på din prenumerationsplan. Basplaner får uppdateringar var 6:e timme, medan Premium-planer kan få uppdateringar så ofta som var 30:e minut. Du kan se och ändra din nuvarande uppdateringsfrekvens i dina prenumerationsinställningar.",
        question: "Hur ofta uppdateras bilannonser?",
      },
    },
    metaDescription:
      "Få hjälp med ditt AMIQUUS-konto, din prenumeration eller bilaviseringar. Utforska vårt hjälpcenter eller kontakta vårt supportteam för assistans.",
    metaTitle: "Support | Amiquus - Hjälpcenter",
    stillneedhelp: {
      button: "Kontakta support",
      description:
        "Om du inte hittade svaret på din fråga är du varmt välkommen att kontakta vårt supportteam. Vi finns här för att hjälpa dig!",
      heading: "Behöver du fortfarande hjälp?",
    },
    subtitle: "Hitta svar på vanliga frågor eller kontakta vårt supportteam",
    title: "Supportcenter",
  },
  telegram: {
    actions: {
      continue: "Fortsätt",
      previous: "Föregående",
    },
    bottokenexample: "Exempel: 5432109876:ABCDefGhIJklMNoPqrSTuvWXyz1234567890",
    bottokenlabel: "Telegrambottoken",
    bottokenplaceholder: "Ange din bottoken från BotFather",
    caralerttitle: "🚗 Ny bil!",
    chatiddescription:
      "Du kan få detta genom att skriva till @userinfobot på Telegram.",
    chatidlabel: "Ditt Telegram Chat-ID",
    chatidplaceholder: "Ange ditt Telegram-chatt-ID",
    chatidsteps: {
      0: 'Öppna Telegram och sök efter "userinfobot"',
      1: "Skicka ett valfritt meddelande till boten",
      2: "Boten kommer att svara med din information inklusive ditt Chat-ID",
      3: "Kopiera ditt chatt-ID",
    },
    chatidtitle: "Hur du hittar ditt Telegram Chat-ID:",
    confirmcontact:
      "Jag har startat en chatt med boten och skickat ett meddelande",
    contact: "Kontakta oss",
    contactbotinstruction:
      "Starta en chatt med vår Telegram-bot genom att klicka på länken nedan och skicka ett meddelande.",
    contactbotnote:
      "Detta krävs för att få bilaviseringar. Om du använder en dator kan du skanna QR-koden.",
    description:
      "Ställ in Telegram-notiser genom att ange din bottoken och chat-ID.",
    errors: {
      chatid: "Telegram-chatt-ID krävs",
      language: "Meddelandespråk krävs",
      token: "Telegram-bottoken krävs",
      username: "Telegram-användarnamn krävs",
    },
    examples: {
      chatid:
        "Du kan få detta genom att skicka ett meddelande till @userinfobot på Telegram.",
      token: "Exempel: 5432109876:ABCDefGhIJklMNoPqrSTuvWXyz1234567890",
    },
    heading: "Telegram-inställning",
    helpdescription: "Titta på videon nedan för en steg-för-steg-guide.",
    helptitle:
      "Behöver du hjälp med att ställa in din Telegram Bot Token och Chat ID?",
    info: "Om du har problem med att skapa en Telegram-bot, kontakta oss så ringer vi upp dig och hjälper dig att skapa en.",
    instructions: {
      botstep1: "Öppna Telegram och sök efter @BotFather",
      botstep2: "Skicka kommandot /newbot",
      botstep3: "Följ instruktionerna för att skapa en bot",
      botstep4: "Kopiera token som du fått av BotFather",
      bottitle: "Hur får man en Telegram Bot Token:",
      chatstep1: "Öppna Telegram och sök efter @userinfobot",
      chatstep2: "Skicka ett valfritt meddelande till boten",
      chatstep3:
        "Boten kommer att svara med din information inklusive ditt Chat-ID",
      chatstep4: "Kopiera chatt-ID:t (det är ett nummer)",
      chattitle: "Hur du hittar ditt Telegram Chat-ID:",
    },
    kilometreslabel: "Kilometer: {{kms}}",
    labels: {
      chatid: "Ditt Telegram-chatt-ID",
      language: "Aviseringsspråk",
      token: "Telegram-bottoken",
      username: "Telegram användarnamn",
    },
    languagelabel: "Aviseringsspråk",
    languageplaceholder: "Välj språk för Telegram-meddelande",
    languages: {
      de: "Tyska",
      en: "Engelska",
      es: "Svenska",
      fr: "Franska",
      it: "Svenska",
    },
    locationlabel: "Plats: {{location}}",
    placeholders: {
      chatid: "Ange ditt Telegram-chatt-ID",
      language: "Välj språk för Telegram-meddelande",
      token: "Ange din bottoken från BotFather",
      username: "Ange ditt Telegram-användarnamn",
    },
    previewtitle: "Förhandsgranska Telegram-notiser",
    pricelabel: "Pris: {{price}}",
    setupsteps: {
      0: 'Öppna Telegram och sök efter "BotFather"',
      1: 'Starta en chatt med BotFather genom att klicka på "Start"',
      2: "Skriv /newbot och följ instruktionerna för att skapa en ny bot",
      3: "Välj ett namn för din bot",
      4: "Välj ett användarnamn för din bot (måste sluta på 'bot')",
      5: "Kopiera API-token som tillhandahållits av BotFather",
      6: "Skicka ett meddelande till din nya bot för att aktivera chatten",
    },
    setuptitle: "Installationsinstruktioner:",
    subheading: "Ställ in din Telegram-bot",
    usernamedescription:
      "Det här är användarnamnet på ditt Telegram-konto (utan @-symbolen).",
    videodescription: "Titta på videon nedan för en steg-för-steg-guide.",
    videoprompt:
      "Behöver du hjälp med att ställa in din Telegram Bot Token och Chat ID?",
    viewlisting: "Visa annons →",
  },
  terms: {
    lastupdated: "Senast uppdaterad: 21 maj 2025",
    metaDescription:
      "Läs AMIQUUS användarvillkor som reglerar din användning av vår tjänst för bevakning och avisering av bilannonser.",
    metaTitle: "Användarvillkor | Amiquus",
    sections: {
      1: {
        heading: "Godkännande av villkor",
        id: "avtal",
        paragraphs: {
          0: "Dessa användarvillkor utgör ett juridiskt bindande avtal mellan dig och AMIQUUS, gällande din åtkomst till och användning av vår webbplats och våra tjänster.",
          1: "Genom att få tillgång till eller använda våra tjänster godkänner du att vara bunden av dessa villkor. Om du inte godkänner någon del av villkoren får du inte använda tjänsten.",
        },
      },
      10: {
        heading: "Ansvarsfriskrivning",
        id: "ansvarsfriskrivning",
        paragraphs: {
          0: "Din användning av tjänsten sker på egen risk. Tjänsten tillhandahålls i befintligt skick och i mån av tillgång. Tjänsten tillhandahålls utan några som helst garantier, vare sig uttryckliga eller underförstådda.",
          1: "Amiquus garanterar inte att tjänsten kommer att vara oavbruten, tillgänglig i rätt tid, säker eller felfri, eller att resultaten som kan erhållas genom användning av tjänsten kommer att vara korrekta eller tillförlitliga.",
        },
      },
      11: {
        heading: "Cookiepolicy",
        id: "cookies",
        paragraphs: {
          0: "Vår cookiepolicy förklarar vad cookies är, hur vi använder cookies, hur tredje parter vi samarbetar med kan använda cookies på vår tjänst, dina valmöjligheter kring cookies samt ytterligare information om cookies. Se avsnittet om cookies i vår integritetspolicy.",
        },
      },
      12: {
        heading: "Tillämplig lag",
        id: "tillämplig lag",
        paragraphs: {
          0: "Dessa villkor ska styras av och tolkas i enlighet med lagarna i Förenta staterna, utan hänsyn till bestämmelser om lagkonflikter.",
          1: "Vår underlåtenhet att upprätthålla någon rättighet eller bestämmelse i dessa Villkor ska inte anses utgöra ett avstående från dessa rättigheter. Om någon bestämmelse i dessa Villkor bedöms vara ogiltig eller inte verkställbar av domstol, kommer övriga bestämmelser i dessa Villkor att fortsätta gälla.",
        },
      },
      13: {
        heading: "Kontakta oss",
        id: "kontakt",
        list: {
          0: "Via e-post: legal@amiquus.com",
          1: "Genom att besöka kontaktsidan på vår webbplats",
        },
        paragraphs: {
          0: "Om du har några frågor om dessa Villkor, vänligen kontakta oss:",
        },
      },
      2: {
        heading: "Ändringar av villkor",
        id: "ändringar",
        paragraphs: {
          0: "Vi förbehåller oss rätten, efter eget gottfinnande, att när som helst ändra eller ersätta dessa Villkor. Om en ändring är väsentlig kommer vi att göra rimliga ansträngningar för att ge minst 30 dagars förvarning innan de nya villkoren träder i kraft.",
          1: "Genom att fortsätta att använda eller få tillgång till vår tjänst efter att dessa ändringar trätt i kraft godkänner du de reviderade villkoren. Om du inte godkänner de nya villkoren, vänligen sluta använda tjänsten.",
        },
      },
      3: {
        heading: "Kontovillkor",
        id: "konto",
        list: {
          0: "Du måste vara minst 18 år gammal",
          1: "Slutför registreringsprocessen",
          2: "Ange korrekt, fullständig och uppdaterad information",
          3: "Var ansvarig för att upprätthålla säkerheten för ditt konto och lösenord",
          4: "Var ansvarig för alla aktiviteter som sker under ditt konto",
          5: "Meddela oss omedelbart så snart du blir medveten om någon säkerhetsöverträdelse eller obehörig användning av ditt konto.",
        },
        paragraphs: {
          0: "För att använda våra tjänster måste du:",
        },
      },
      4: {
        heading: "Betalningsvillkor",
        id: "betalning",
        list: {
          0: "Alla avgifter är exklusive moms, som läggs till när det är tillämpligt.",
          1: "Prenumerationspriser kan ändras med 30 dagars förvarning.",
          2: "Prenumerationer förnyas automatiskt om de inte sägs upp före nästa faktureringsperiod.",
          3: "Återbetalningar hanteras från fall till fall enligt vår återbetalningspolicy.",
          4: "Vi använder Stripe för säker betalningshantering och all betalningsinformation lagras av Stripe.",
        },
        paragraphs: {
          0: "Amiquus erbjuder prenumerationsbaserade tjänster med följande villkor:",
        },
      },
      5: {
        heading: "Kapacitetsgränser",
        id: "kapacitet",
        list: {
          0: "Nya användare kan gå med i vår väntelista",
          1: 'Plats i väntelistan bestäms enligt principen "först till kvarn".',
          2: "När kapacitet blir tillgänglig kommer användare på väntelistan att meddelas i turordning.",
          3: "Vi förbehåller oss rätten att ändra kapacitetsgränser när som helst.",
        },
        paragraphs: {
          0: "För att upprätthålla servicekvalitet och tillförlitlighet begränsar AMIQUUS antalet aktiva prenumerationer till 30. När denna gräns är uppnådd:",
        },
      },
      6: {
        heading: "Begränsningar för webbscraping",
        id: "datainsamling",
        list: {
          0: "Amiquus respekterar användarvillkoren för de webbplatser vi övervakar",
          1: "Vi tillämpar hastighetsbegränsning och följer ansvarsfulla crawlingsrutiner",
          2: "Tillgängligheten för vissa webbplatser kan ändras beroende på deras villkor och tekniska åtgärder.",
          3: "Vi lämnar inga garantier för fullständigheten eller aktualiteten av insamlade data.",
        },
        paragraphs: {
          0: "Vår tjänst hämtar och behandlar data från flera bilannonswebbplatser. Genom att använda vår tjänst bekräftar du att:",
        },
      },
      7: {
        heading: "Immateriella rättigheter",
        id: "intellektuell",
        paragraphs: {
          0: "Tjänsten AMIQUUS, inklusive dess ursprungliga innehåll, funktioner och funktionalitet, är och kommer att förbli AMIQUUS exklusiva egendom. Vår tjänst är skyddad av upphovsrätt, varumärken och andra lagar i både USA och andra länder.",
          1: "Våra varumärken och vår grafiska profil får inte användas i samband med någon produkt eller tjänst utan föregående skriftligt medgivande från AMIQUUS.",
        },
      },
      8: {
        heading: "Uppsägning",
        id: "uppsägning",
        paragraphs: {
          0: "Vi kan avsluta eller tillfälligt stänga av ditt konto omedelbart, utan föregående meddelande eller ansvar, av vilken anledning som helst, inklusive, utan begränsning, om du bryter mot Villkoren.",
          1: "Vid uppsägning upphör din rätt att använda tjänsten omedelbart. Om du vill avsluta ditt konto kan du helt enkelt sluta använda tjänsten eller kontakta oss för att begära radering av kontot.",
        },
      },
      9: {
        heading: "Ansvarsbegränsning",
        id: "begränsningar",
        list: {
          0: "Din åtkomst till eller användning av eller oförmåga att få åtkomst till eller använda tjänsten",
          1: "Allt uppförande eller innehåll från tredje part på tjänsten",
          2: "Allt innehåll som erhålls från tjänsten",
          3: "Obehörig åtkomst, användning eller ändring av dina överföringar eller ditt innehåll",
        },
        paragraphs: {
          0: "Under inga omständigheter ska AMIQUUS, eller dess styrelseledamöter, anställda, partners, ombud, leverantörer eller närstående bolag, hållas ansvariga för några indirekta, tillfälliga, särskilda, följd- eller straffskador, inklusive men inte begränsat till förlust av vinst, data, användning, goodwill eller andra immateriella förluster, som uppstår till följd av:",
        },
      },
    },
    title: "Användarvillkor",
  },
  verifyEmail: {
    codelabel: "Verifieringskod",
    description: "En verifieringskod har skickats till din e-post.",
    footernote: "Fick du inte koden? Kolla din skräppost.",
    resendbutton: "Skicka koden igen",
    resendcountdown: "Du kan skicka koden igen om {{seconds}}s",
    title: "Bekräfta din e-post",
    toast: {
      emailupdated: "E-post uppdaterad",
      entervalidemail: "Ange en giltig e-postadress",
      error: "Fel",
      failed: "Verifieringen misslyckades",
      invalidemail: "Ogiltig e-postadress",
      resent: "Verifieringskod har skickats igen",
      sameemail: "Samma e-post",
      sameemaildesc:
        "Den nya e-postadressen är samma som den nuvarande e-postadressen.",
      verified: "E-post verifierad",
    },
    updateemailbutton: "Uppdatera e-post",
    updateemaillabel: "Uppdatera e-post",
    verifybutton: "Bekräfta e-post",
  },
  waitlist: {
    cantjoin: {
      description:
        "Vi meddelar dig så snart en prenumerationsplats blir tillgänglig.",
      title: "Gå med i väntelistan",
    },
    form: {
      email: {
        description:
          "Vi använder den här e-postadressen för att meddela dig när en plats blir ledig.",
        label: "E-post",
        placeholder: "john.doe@example.com",
      },
      firstname: {
        label: "Förnamn",
        placeholder: "Johan, så här",
      },
      lastname: {
        label: "Efternamn",
        placeholder: "Hjort",
      },
      submit: "Gå med i väntelistan",
      submitting: "Skickar in...",
    },
    limited: {
      available:
        "{{remaining}} prenumerationsplatser av totalt {{capacity}} är för närvarande tillgängliga.",
      description:
        "Vi begränsar vårt system till endast 30 aktiva prenumeranter för att säkerställa:",
      full: "Alla prenumerationsplatser är för närvarande fyllda. Gå med i väntelistan för att bli meddelad när en plats blir ledig.",
      heading: "Begränsad tillgänglighet",
      points: {
        0: "Exceptionell tillförlitlighet och hastighet för datainsamling för alla användare",
        1: "Minskad risk att bli blockerad av bilannonswebbplatser",
        2: "Personligt stöd för varje prenumerant",
        3: "Rättvis fördelning av serverresurser",
      },
    },
    metaDescription:
      "Gå med i AMIQUUS väntelista för att få besked när prenumerationer blir tillgängliga.",
    metaTitle: "Gå med i väntelistan – Amiquus",
    subtitle:
      "På grund av hög efterfrågan begränsar vi antalet aktiva prenumerationer för att säkerställa bästa servicekvalitet för alla användare.",
    success: {
      button: "Tillbaka till startsidan",
      description:
        "Vi meddelar dig så snart en prenumerationsplats blir tillgänglig.",
      message:
        "Tack för ditt intresse för AMIQUUS! Vi har lagt till dig på vår väntelista och kontaktar dig så snart vi har en ledig plats.",
      title: "Du står på väntelistan!",
    },
    title: "Gå med i vår väntelista",
  },
  waitlistPrompt: {
    button: "Gå med i väntelistan",
    description:
      "Vi har för närvarande fullt. Anmäl dig till väntelistan för att få besked när en plats blir ledig.",
    title: "Gå med i väntelistan",
  },
  websiteSelection: {
    actions: {
      continue: "Fortsätt",
      previous: "Föregående",
    },
    description:
      "Välj vilka webbplatser du vill övervaka och hur ofta du vill få uppdateringar.",
    errors: {
      facebookurl: "Facebook Marketplace-URL krävs när Facebook är valt",
      websites: "Minst en webbplats måste väljas",
    },
    heading: "Webbplatsval",
    help: {
      facebookurl:
        "Klistra in webbadressen till dina sökresultat på Facebook Marketplace här.",
      updatefrequency:
        "Hur ofta ska vi kontrollera nya annonser? Högre frekvenser kan innebära högre kostnader.",
      videodesc: "Titta på videon nedan för steg-för-steg-instruktioner.",
      videotitle:
        "Behöver du hjälp att hitta din söklänk på Facebook Marketplace?",
      websites: "Välj en eller flera webbplatser att övervaka för bilannonser.",
    },
    labels: {
      facebookurl: "Facebook Marketplace-URL",
      updatefrequency: "Uppdateringsfrekvens",
      websites: "Webbplatser att övervaka",
    },
    placeholders: {
      frequency: "Välj frekvens",
    },
  },
};

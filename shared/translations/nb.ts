export const nb = {
  navigations: {
    features: "Funksjoner",
    how: "Slik fungerer det",
    pricing: "Priser",
    getAlerts: "Få varsler",
    waitlist: "Venteliste",
    faq: "Vanlige spørsmål",
    login: "Logg inn",
    getStarted: "Kom i gang",
    subscribers: "Abonnenter",
    theme: "Tema",
    language: "Språk",
    myAlerts: "Mine varsler",
    profile: "Profil",
    settings: "Innstillinger",
    logout: "Logg ut",
    signUp: "Registrer deg",
  },
  about: {
    description:
      "Vi revolusjonerer måten folk finner sin perfekte bruktbil på ved å gjøre avansert overvåkningsteknologi tilgjengelig for alle.",
    join: {
      cta: "Se ledige stillinger",
      description:
        "Vi er alltid på utkikk etter dyktige personer som brenner for teknologi og ønsker å revolusjonere bilkjøpsopplevelsen. Sjekk ut våre ledige stillinger og bli med oss på reisen!",
      heading: "Bli med på laget vårt",
    },
    meta: {
      description:
        "Bli kjent med AMIQUUS, vårt oppdrag om å revolusjonere bruktbilkjøp, og teamet bak vår intelligente tjeneste for overvåking av bilannonser.",
      title: "Om oss | Amiquus - Tjeneste for overvåking av bilannonser",
    },
    mission: {
      heading: "Vårt oppdrag",
      items: {
        0: {
          description:
            "Slipp å stadig oppdatere flere nettsider – automatiser søkeprosessen og få varsler i tide.",
          title: "Spar tid",
        },
        1: {
          description:
            "Vær den første som får vite om et godt tilbud, og få fordelen i et konkurransepreget marked der timing er alt.",
          title: "Finn bedre tilbud",
        },
        2: {
          description:
            "Ta bedre beslutninger med omfattende overvåkning på tvers av flere pålitelige bilannonseringsplattformer.",
          title: "Handle trygt",
        },
      },
    },
    questions: {
      description:
        "Lær mer om hvordan tjenesten vår fungerer, se prisalternativer, eller ta kontakt med vårt supportteam.",
      heading: "Har du spørsmål?",
      links: {
        faq: "Se vanlige spørsmål",
        pricing: "Se priser",
        support: "Kontakt kundestøtte",
      },
    },
    story: {
      heading: "Vår historie",
      paragraphs: {
        0: "Amiquus startet i 2023 da vår grunnlegger, Alex, brukte måneder på å oppdatere bilannonser på nettet i jakten på en spesifikk, sjelden modell til en god pris. Etter å ha gått glipp av flere muligheter på grunn av forsinkede varsler, skjønte han at det måtte finnes en bedre løsning.",
        1: "Sammen med et lite team av utviklere og bilentusiaster bygde Alex et overvåkingssystem som kunne spore annonser på flere nettsider samtidig og sende umiddelbare varsler når det dukket opp treff.",
        2: "Det som startet som et personlig prosjekt, fikk raskt interesse fra venner og familie, og tidlig i 2025 ble AMIQUUS lansert som en tjeneste tilgjengelig for alle. I dag hjelper vi bilkjøpere over hele landet med å spare tid og finne bedre tilbud ved hjelp av vår intelligente overvåkningsteknologi.",
      },
    },
    team: {
      heading: "Vårt team",
      members: {
        0: {
          bio: "Tidligere programvareingeniør med lidenskap for biler og å utvikle innovative løsninger.",
          name: "Alex Morgan",
          role: "Grunnlegger og daglig leder",
        },
        1: {
          bio: "Data science-ekspert med spesialisering i nettskraping og informasjonshentingssystemer.",
          name: "Sarah Chen",
          role: "Teknologidirektør",
        },
        2: {
          bio: "Fullstack-utvikler med ekspertise i å bygge høytytende varslingssystemer.",
          name: "Marcus Lee",
          role: "Ledende utvikler",
        },
        3: {
          bio: "Tidligere bilselger dedikert til å hjelpe kunder med å finne den perfekte bilen.",
          name: "Elena Rodriguez",
          role: "Kundesuksess",
        },
      },
    },
    title: "Om Amiquus",
  },
  alertSchema: {
    errors: {
      carbrand: "Bilmerke er påkrevd",
      carmodel: "Bilmodell er påkrevd",
      facebookmarketplaceurl:
        "Facebook Marketplace-URL er påkrevd når Facebook er valgt",
      fueltype: "Drivstofftype er påkrevd",
      maxkilometers: "Maks antall kilometer må være et tall",
      notificationlanguage: "Varslingsspråk er påkrevd",
      pricemax: "Maksimalpris må være et tall",
      pricemin: "Minstepris må være et tall",
      telegramchatid: "Telegram chat-ID er påkrevd",
      telegramtoken: "Telegram bot-token er påkrevd",
      telegramusername: "Telegram-brukernavn er påkrevd",
      websitesselected: "Minst én nettside må velges",
      yearmax: "Maksimalt år må være et gyldig år",
      yearmin: "Minimumsår må være et gyldig år",
    },
  },
  carDetails: {
    actions: {
      continue: "Fortsett",
      previous: "Forrige",
    },
    description:
      "Spesifiser hvilke bildetaljer du leter etter. Alle felt er valgfrie – la felt stå tomme for et bredere utvalg av resultater.",
    errors: {
      carbrand: "Bilmerke er påkrevd",
      carmodel: "Bilmodell er påkrevd",
      fueltype: "Drivstofftype er påkrevd",
      maxkilometers: "Maks antall kilometer må være et tall",
      pricemax: "Maksimalpris må være et tall",
      pricemin: "Minimumspris må være et tall",
      yearmax: "Maksimalt år må være et gyldig år",
      yearmin: "Minimumsår må være et gyldig år",
    },
    heading: "Bildetaljer",
    labels: {
      carbrand: "Bilmerke",
      carmodel: "Bilmodell",
      fueltype: "Drivstofftype",
      maxkilometers: "Maks antall kilometer",
      pricemax: "Maksimal pris",
      pricemin: "Minstepris",
      yearmax: "Maksimalt år",
      yearmin: "Minimumsår",
    },
    options: {
      nomodelsavailable: "Ingen modeller tilgjengelig",
    },
    placeholders: {
      carbrand: "Velg bilmerke",
      carmodel: "Velg bilmodell",
      carmodeldisabled: "Velg bilmerke først",
      fueltype: "Velg drivstofftype",
      maxkilometers: "Angi maksimalt antall kilometer",
      pricemax: "Angi makspris",
      pricemin: "Angi minstepris",
      yearmax: "Angi maksimalt år",
      yearmin: "Angi minste år",
    },
  },
  dashboardPayment: {
    add: "Legg til betalingsmetode",
    description:
      "Legg til et nytt kreditt- eller debetkort for betaling av abonnementet ditt.",
    errormessage: "Det oppstod en uventet feil",
    errortitle: "Feil ved tillegg av betalingsmetode",
    initerror: {
      description: "Kan ikke initialisere betalingsoppsett",
      title: "Feil",
    },
    processing: "Behandler...",
  },
  dashboardPaymentMethodCard: {
    cancel: "Avbryt",
    confirmremove: "Fjern kort",
    default: "Standard",
    expires: "Utløper",
    remove: "Fjern",
    removedescription:
      "Er du sikker på at du vil fjerne ditt {{brand}}-kort som slutter på {{last4}}?",
    removetitle: "Fjern betalingsmetode",
    removewarning:
      "Dette er din standard betalingsmetode, og fjerning av den kan påvirke dine aktive abonnementer.",
    setasdefault: "Angi som standard",
    setdefaultdescription:
      "Vil du sette {{brand}}-kortet som slutter på {{last4}} som din foretrukne betalingsmetode? Dette kortet vil bli brukt for alle fremtidige abonnementsbetalinger.",
    setdefaulttitle: "Angi standard betalingsmetode",
  },
  dashboardSubscriptionCard: {
    cancelalert: "Avbryt varsel",
    canceldescription:
      "Er du sikker på at du vil kansellere bilvarselet for {{brand}} {{model}}? Dette vil stoppe alle varsler, og du må opprette et nytt varsel hvis du vil følge med på denne bilen igjen.",
    canceltitle: "Avbryt bilvarsel",
    confirmcancel: "Avbryt varsel",
    edit: "Rediger",
    keepmyalert: "Behold varslingen min",
    language: "Språk",
    price: "Pris",
    pricerange: "Pris",
    updates: "Oppdateringer",
    websites: "Nettsider",
    years: "År",
  },
  faq: {
    contactlink: "Kontakt vårt kundestøtteteam",
    contactprompt: "Har du fortsatt spørsmål?",
    questions: {
      0: {
        answer:
          "Varslingshastigheten avhenger av hvor ofte du har valgt å motta oppdateringer. Med standard timeplan får du varsler innen én time etter at en ny annonse er publisert. For nesten sanntidsvarsler (innen få minutter etter publisering), kan du oppgradere til våre hyppigere oppdateringsplaner.",
        question:
          "Hvor raskt får jeg varsler etter at en ny annonse er publisert?",
      },
      1: {
        answer:
          "Ja! Du kan opprette flere søkeprofiler med ulike kriterier. Hver profil regnes som et eget abonnement, men du kan administrere alle fra én konto. Dette er perfekt hvis du leter etter forskjellige typer kjøretøy samtidig.",
        question: "Kan jeg spore flere forskjellige typer biler samtidig?",
      },
      2: {
        answer:
          "Vi støtter for øyeblikket de største bilannonseringsplattformene, inkludert AutoTrader, CarGurus, Cars.com og Facebook Marketplace. Vi utvider stadig dekningen vår for å inkludere flere nettsteder basert på brukernes etterspørsel og regional popularitet.",
        question: "Hvilke nettsider støtter dere for øyeblikket?",
      },
      3: {
        answer:
          "Ikke i det hele tatt! Vi gir deg trinn-for-trinn-veiledning med både tekst og video som hjelper deg å sette opp Telegram-boten. De fleste brukere fullfører oppsettet på under 5 minutter, selv uten teknisk bakgrunn.",
        question: "Trenger jeg teknisk kunnskap for å bruke Telegram-boten?",
      },
      4: {
        answer:
          "Ja, du kan endre søkekriteriene dine når som helst fra kontodashbordet ditt. Endringene trer i kraft umiddelbart, og varslingene dine oppdateres tilsvarende uten avbrudd i tjenesten.",
        question:
          "Kan jeg endre søkekriteriene etter at jeg har opprettet abonnementet mitt?",
      },
      5: {
        answer:
          "Du kan når som helst si opp abonnementet ditt fra kontodashbordet. Gå til «Abonnementer»-seksjonen, velg abonnementet du ønsker å si opp, og klikk på «Avslutt abonnement». Tjenesten din vil være aktiv ut inneværende faktureringsperiode.",
        question: "Hvordan avslutter jeg abonnementet mitt?",
      },
    },
    subtitle: "Finn svar på de vanligste spørsmålene om vår tjeneste.",
    title: "Ofte stilte spørsmål",
  },
  faqs: {
    general: {
      heading: "Generelle spørsmål",
      howitworks: {
        answer: {
          0: "Du angir dine søkekriterier (merke, modell, prisklasse, osv.)",
          1: "Du velger hvilke nettsider du vil overvåke",
          2: "Du kobler til Telegram-kontoen din for varsler",
          3: "Vårt system overvåker kontinuerlig dine utvalgte nettsider for nye annonser",
          4: "Når en passende bil dukker opp, får du umiddelbart et varsel på Telegram med alle detaljer og en direkte lenke.",
        },
        question: "Hvordan fungerer det?",
      },
      whatis: {
        answer:
          "AMIQUUS er en tjeneste som overvåker flere bilannonser på ulike nettsider for kjøretøy som matcher dine spesifikke kriterier. Når en relevant annonse dukker opp, får du umiddelbart varsel via Telegram, slik at du kan være blant de første til å kontakte selgere og sikre deg gode tilbud.",
        question: "Hva er Amiquus?",
      },
      whichwebsites: {
        answerintro:
          "Vi overvåker for øyeblikket følgende ledende bilannonseringsplattformer:",
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
          "Vi legger stadig til flere plattformer for å gi den mest komplette dekningen mulig.",
        question: "Hvilke bilannonseringsnettsteder følger du med på?",
      },
    },
    metaDescription:
      "Finn svar på de vanligste spørsmålene om AMIQUUS sin tjeneste for overvåking av bilannonser, abonnement, varslingsoppsett og mer.",
    metaTitle: "Ofte stilte spørsmål | Amiquus",
    subscription: {
      cancel: {
        note: "Abonnementet ditt vil forbli aktivt til slutten av din nåværende faktureringsperiode.",
        question: "Hvordan avslutter jeg abonnementet mitt?",
        steps: {
          0: "Logg inn på kontoen din",
          1: "Gå til «Profil»-siden",
          2: "Velg fanen «Abonnementer»",
          3: "Klikk på «Avslutt abonnement»-knappen ved siden av abonnementet du ønsker å avslutte.",
        },
        stepsintro:
          "Du kan når som helst si opp abonnementet ditt fra profilsiden på kontoen din:",
      },
      cost: {
        answer: {
          0: "Våre priser starter på 79,99 $ per måned for overvåking av én nettside med oppdateringer hver 6. time. Ekstra nettsider koster 4,99 $ per måned per stk. Du kan også oppgradere oppdateringsfrekvensen for raskere varsler.",
          1: "For detaljerte prisopplysninger, se vår prisseksjon på forsiden.",
        },
        question: "Hvor mye koster et abonnement?",
      },
      heading: "Spørsmål om abonnement",
      limit: {
        intro:
          "Vi begrenser tjenesten vår til 30 aktive abonnenter for å sikre:",
        list: {
          0: "Tjenester og data av høyeste kvalitet og presisjon",
          1: "Personlig støtte for hver abonnent",
          2: "Raskere varsling under travle annonseperioder",
          3: "Etisk datainnhenting som ikke overbelaster målnettstedene",
        },
        outro:
          "Hvis vi har nådd kapasiteten, kan du sette deg på venteliste for å bli varslet når det blir ledig plass.",
        question: "Hvorfor er det en grense på antall abonnenter?",
      },
      multiple: {
        answer:
          "Ja, du kan opprette flere abonnementer under én konto. Hvert abonnement kan følge ulike bilmodeller, merker eller prisklasser. Dette er spesielt nyttig hvis du leter etter flere biler, eller hjelper venner og familie med å finne bil.",
        question: "Kan jeg ha flere abonnementer for ulike bilmodeller?",
      },
    },
    subtitle:
      "Finn raske svar på vanlige spørsmål om vår tjeneste for overvåking av bilannonser",
    support: {
      button: "Kontakt kundestøtte",
      description:
        "Hvis du ikke fant svaret på spørsmålet ditt, er vårt supportteam her for å hjelpe deg!",
      heading: "Har du fortsatt spørsmål?",
    },
    technical: {
      frequency: {
        intro: "Hyppigheten av varsler avhenger av:",
        list: {
          0: "Ditt valgte oppdateringsfrekvens-abonnement (fra hver 6. time til hver 30. minutt)",
          1: "Hvor mange nye oppføringer passer med dine kriterier",
          2: "Hvor aktivt markedet er for ditt valgte merke/modell",
        },
        outro:
          "Du vil kun motta varsler når nye annonser som matcher dine kriterier blir funnet.",
        question: "Hvor ofte vil jeg motta varsler?",
      },
      heading: "Tekniske spørsmål",
      privacy: {
        intro: "Vi tar personvern på alvor og iverksetter følgende tiltak:",
        list: {
          0: "Krypterte data under overføring og lagring",
          1: "Sikre betalinger med Stripe",
          2: "Ingen deling av data med tredjepart",
          3: "Du kan be om eller slette dine data når som helst",
        },
        outro: "Les vår fullstendige personvernerklæring for mer informasjon.",
        question: "Hvordan blir mine personopplysninger beskyttet?",
      },
      telegram: {
        note: "Detaljerte trinn-for-trinn-instruksjoner med skjermbilder gis under oppsettet av abonnementet.",
        question: "Hvordan setter jeg opp varsler i Telegram?",
        steps: {
          0: "Opprett en Telegram-bot med BotFather (instruksjoner gis under oppsettet)",
          1: "Kopier bot-tokenet ditt fra BotFather",
          2: "Start en samtale med din bot",
          3: "Hent din chat-ID (instruksjoner gis under oppsettet)",
          4: "Skriv inn bot-tokenet og chat-ID-en din i abonnementinnstillingene for AMIQUUS",
          5: "Test varslingene dine ved å bruke knappen `Send testmelding`",
        },
        stepsintro: "For å sette opp Telegram-varsler:",
      },
    },
    title: "Ofte stilte spørsmål",
  },
  features: {
    account: {
      description:
        "Administrer flere søkeprofiler og endre abonnementinnstillingene dine med noen få klikk.",
      title: "Enkel kontoadministrasjon",
    },
    filters: {
      description:
        "Sett presise kriterier, inkludert merke, modell, år, kjørelengde og prisspenn, for å finne akkurat det du ønsker.",
      title: "Egendefinerte filtre",
    },
    frequency: {
      description:
        "Velg hvor ofte vi sjekker etter nye annonser, fra oppdateringer hver time til sanntidsovervåking.",
      title: "Justerbar frekvens",
    },
    heading: "Hvorfor velge Amiquus?",
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
        "Overvåk flere bilannonser på ulike nettsider samtidig, uten å måtte sjekke hver enkelt manuelt.",
      title: "Sporing på flere nettsteder",
    },
    notifications: {
      description:
        "Få umiddelbare varsler via Telegram når en bil som matcher dine kriterier legges ut for salg.",
      title: "Umiddelbare varsler",
    },
    subheading:
      "Spar tid og gå aldri glipp av din perfekte bil med vår automatiserte sporingstjeneste.",
  },
  footer: {
    about: "Om oss",
    blog: "Blogg",
    branddescription:
      "Din personlige assistent for å finne det perfekte bruktbilkuppet til rett tid.",
    brandtitle: "Amiquus",
    careers: "Karriere",
    contact: "Kontakt",
    cookies: "Retningslinjer for informasjonskapsler",
    copyright: "Alle rettigheter forbeholdt.",
    email: "support@amiquus.com",
    faq: "Ofte stilte spørsmål",
    features: "Funksjoner",
    gdpr: "GDPR-samsvar",
    getstarted: "Kom i gang",
    legal: "Juridisk",
    pricing: "Priser",
    privacy: "Personvernerklæring",
    quicklinks: "Hurtiglenker",
    support: "Støtte",
    telegram: "Kontakt oss på Telegram",
    terms: "Vilkår for bruk",
  },
  hero: {
    button1: "Angi varslingene dine",
    button2: "Se hvordan det fungerer",
    label: "Følg brukte bilannonser i sanntid",
    subtitle:
      "Amiquus varsler deg med én gang drømmebilen din blir tilgjengelig på flere bilannonser på nett. Få varsler via Telegram så snart det dukker opp et treff.",
    title: "Gå aldri glipp av ditt perfekte biltilbud igjen",
    trustindicators: {
      cancelanytime: "Avslutt når som helst",
      nosetup: "Ingen installasjon nødvendig",
      realtime: "Varsler i sanntid",
      websites: "Overvåker over 15 nettsteder",
    },
  },
  howItWorks: {
    features: {
      0: "Følg med på over 15 bilnettsteder samtidig",
      1: "Tilpassbare søkekriterier med avanserte filtre",
      2: "Varsler i sanntid via Telegram",
      3: "Automatiske varsler om prisfall og nye annonser",
      4: "Enkel installasjonsprosess som tar under 5 minutter",
    },
    notificationmockup1: {
      description: "BMW 3-serie, 2019, $32,500 – Nettopp lagt ut på AutoTrader",
      title: "Nytt treff funnet!",
    },
    notificationmockup2: {
      description:
        "Mercedes C-Klasse, 2020, 48 000 km – Prisen redusert med 20 000 kr",
      title: "Telegram-varsel",
    },
    setalerts: "Sett opp varslingene dine",
    steps: {
      findcar: {
        description:
          "Vær den første som får vite om nye annonser og sikre deg de beste tilbudene før alle andre.",
        title: "Finn din perfekte bil",
      },
      notifications: {
        description:
          "Få varsler med én gang en bil som matcher dine kriterier dukker opp på en av våre overvåkede nettsider.",
        title: "Få varsler umiddelbart",
      },
      preferences: {
        description:
          "Velg bilmerker, modeller, prisklasse og andre kriterier du ønsker å følge med på.",
        title: "Angi dine preferanser",
      },
      telegram: {
        description:
          "Koble til Telegram-kontoen din for å motta varsler om nye annonser umiddelbart.",
        title: "Koble til Telegram",
      },
    },
    subtitle:
      "Sett opp én gang, og la vårt automatiserte system finne det perfekte biltilbudet for deg",
    title: "Slik fungerer Amiquus",
    whytitle: "Hvorfor velge Amiquus?",
  },
  limited: {
    available: {
      buttonText: "Kom i gang nå",
      description:
        "{{active}} av {{capacity}} abonnementer er for øyeblikket aktive. Det er fortsatt god plass til at du kan bli med!",
      title: "Abonnement tilgjengelig",
    },
    full: {
      buttonText: "Bli med på ventelisten",
      description:
        "Vi har nådd maksgrensen på 30 aktive abonnenter. Meld deg på ventelisten for å få beskjed når det blir ledig plass.",
      title: "Abonnementsgrense nådd",
    },
    limited: {
      buttonText: "Kom i gang nå",
      description:
        "Kun {{remaining}} plasser igjen av totalt {{capacity}}. Meld deg på nå før vi er fullbooket!",
      title: "Begrenset tilgjengelighet",
    },
  },
  login: {
    description:
      "Skriv inn e-postadressen og passordet ditt for å få tilgang til dashbordet ditt",
    emaillabel: "E-post",
    errors: {
      invalidemail: "Vennligst oppgi en gyldig e-postadresse",
      shortpassword: "Passordet må være minst 6 tegn",
    },
    errortitle: "Innlogging mislyktes",
    genericerror: "Vennligst sjekk dine påloggingsopplysninger og prøv igjen.",
    loggingin: "Logger inn...",
    loginbutton: "Logg inn",
    loginwithgoogle: "Logg inn med Google",
    noaccount: "Har du ikke en konto?",
    or: "eller",
    passwordlabel: "Passord",
    registerlink: "Registrer deg",
    successmessage: "Du er nå logget inn.",
    successtitle: "Innlogging vellykket",
    title: "Logg inn på kontoen din",
  },
  loginPrompt: {
    description:
      "Du må være innlogget for å fortsette. Vennligst logg inn eller registrer deg.",
    login: "Logg inn",
    register: "Registrer deg",
    title: "Innlogging påkrevd",
  },
  notFound: {
    message: "Har du glemt å legge til siden i ruteren?",
    title: "404 Siden ble ikke funnet",
  },
  payment: {
    button: {
      processing: "Behandler...",
      submit: "Legg til betalingsmetode",
    },
    toast: {
      error: {
        fallback: "En uventet feil oppstod. Vennligst prøv igjen.",
        title: "Feil",
      },
      success: {
        description: "Betalingsmetoden din har blitt satt opp.",
        title: "Vellykket",
      },
    },
  },
  personalInfo: {
    actions: {
      continue: "Fortsett",
      login: "Logg inn eller registrer deg for å fortsette",
    },
    description:
      "Vennligst oppgi dine personlige opplysninger slik at vi kan sette opp varslingene dine riktig.",
    errors: {
      email: "Vennligst oppgi en gyldig e-postadresse",
      firstname: "Fornavn er påkrevd",
      lastname: "Etternavn er påkrevd",
    },
    heading: "Personopplysninger",
    labels: {
      email: "E-postadresse",
      firstname: "Fornavn",
      lastname: "Etternavn",
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
        name: "Hver ekstra nettside",
      },
      1: {
        name: "Oppdateringer hvert 30. minutt",
      },
      2: {
        name: "15-minutters oppdateringer",
      },
      3: {
        name: "Oppdateringer hvert 5. minutt",
      },
      4: {
        name: "1-minuttsoppdateringer",
      },
    },
    addonstitle: "Tillegg:",
    basetitle: "Grunnpakke: 79,99 $/måned",
    button: "Kom i gang nå",
    footernote:
      "Alle abonnementer inkluderer ubegrensede søkekonfigurasjoner og enkel administrasjon av abonnement.",
    includedfeatures: {
      0: "Én nettsideovervåking",
      1: "Oppdateringer hver time",
      2: "Ubegrensede filtre",
      3: "Telegram-varsler",
    },
    includedtitle: "Dette er inkludert:",
    subtitle:
      "Våre priser tilpasses dine spesifikke behov. Start med en grunnpakke og skreddersy den etter dine ønsker.",
    title: "Enkel og oversiktlig prising",
  },
  privacy: {
    lastupdated: "Sist oppdatert: 21. mai 2025",
    metaDescription:
      "Les om hvordan AMIQUUS håndterer dine personopplysninger, personvernrettigheter og praksis for datainnsamling.",
    metaTitle: "Personvernerklæring | Amiquus",
    sections: {
      0: {
        heading: "Introduksjon",
        id: "introduksjon",
        paragraphs: {
          0: "Velkommen til AMIQUUS. Vi respekterer ditt personvern og er opptatt av å beskytte dine personopplysninger. Denne personvernerklæringen informerer deg om hvordan vi tar vare på dine personopplysninger når du besøker nettsiden vår, og gir deg informasjon om dine personvernrettigheter og hvordan loven beskytter deg.",
        },
      },
      1: {
        heading: "Informasjonen vi samler inn",
        id: "dataene-vi-samler-inn",
        list: {
          0: "Personopplysninger: E-postadresse, fornavn, etternavn og profilbilde (hvis oppgitt via tredjepartsautentisering).",
          1: "Kontodata: Dine påloggingsopplysninger og kontoinnstillinger.",
          2: "Bruksdata: Informasjon om hvordan du bruker vårt nettsted og våre tjenester.",
          3: "Bilønsker: Kriteriene du setter for overvåking (merke, modell, prisklasse osv.).",
          4: "Telegram-informasjon: Hvis du velger å motta varsler via Telegram, lagrer vi din Telegram chat-ID og bot-token.",
          5: "Betalingsinformasjon: Når du gjennomfører et kjøp, samler vår betalingsleverandør inn nødvendige betalingsopplysninger for å behandle transaksjonen din. AMIQUUS lagrer ikke dine komplette kredittkortopplysninger.",
        },
        paragraphs: {
          0: "Vi samler inn ulike typer informasjon til forskjellige formål for å kunne tilby og forbedre tjenesten vår til deg:",
        },
      },
      2: {
        heading: "Hvordan vi bruker dine data",
        id: "hvordan-vi-bruker-data",
        list: {
          0: "For å levere og opprettholde vår tjeneste",
          1: "For å varsle deg om endringer i vår tjeneste",
          2: "For å gi deg mulighet til å delta i interaktive funksjoner i vår tjeneste",
          3: "Å gi kundestøtte",
          4: "For å samle analyser eller verdifull informasjon slik at vi kan forbedre tjenesten vår",
          5: "For å overvåke bruken av vår tjeneste",
          6: "For å oppdage, forhindre og løse tekniske problemer",
          7: "For å behandle betalinger og forhindre svindeltransaksjoner",
          8: "For å sende bilannonser som matcher dine preferanser via din valgte varslingsmetode",
        },
        paragraphs: {
          0: "Vi bruker dine personopplysninger til følgende formål:",
        },
      },
      3: {
        heading: "Lagring av data og sikkerhet",
        id: "datalagring",
        paragraphs: {
          0: "Vi iverksetter hensiktsmessige sikkerhetstiltak for å beskytte dine personopplysninger mot uautorisert tilgang, endring, offentliggjøring eller ødeleggelse. Alle data lagres på sikre servere med kryptering både under overføring og når de er lagret.",
          1: "Vi lagrer dine personopplysninger kun så lenge det er nødvendig for formålene som er angitt i denne personvernerklæringen, inkludert for å oppfylle eventuelle juridiske, regulatoriske, skattemessige, regnskapsmessige eller rapporteringsmessige krav.",
        },
      },
      4: {
        heading: "Dine GDPR-rettigheter",
        id: "personvernforordningen",
        list: {
          0: "Rett til å få innsyn i, oppdatere eller slette opplysninger vi har om deg",
          1: "Retten til retting",
          2: "Rett til å protestere",
          3: "Retten til begrensning",
          4: "Retten til dataportabilitet",
          5: "Retten til å trekke tilbake samtykke",
        },
        paragraphs: {
          0: "Hvis du er bosatt i Det europeiske økonomiske samarbeidsområdet (EØS), har du visse rettigheter knyttet til personvern. AMIQUUS tar sikte på å iverksette rimelige tiltak for å gi deg mulighet til å rette, endre, slette eller begrense bruken av dine personopplysninger.",
          1: "Du har følgende rettigheter knyttet til personvern:",
        },
      },
      5: {
        heading: "Retningslinjer for informasjonskapsler",
        id: "informasjonskapsler",
        list: {
          0: "Hold deg pålogget",
          1: "Forstå hvordan du bruker nettstedet vårt",
          2: "Husk dine preferanser",
          3: "Tilpass opplevelsen din",
        },
        paragraphs: {
          0: "Informasjonskapsler er små datafiler som lagres på enheten din. Vi bruker informasjonskapsler for å:",
        },
      },
      6: {
        heading: "Tjenester fra tredjepart",
        id: "tredjepart",
        list: {
          0: "Betalingsleverandører (Stripe)",
          1: "Analyseleverandører",
          2: "Kundeservicetjenester",
          3: "Leverandører av hosting og skyløsninger",
        },
        paragraphs: {
          0: "Vi kan benytte tredjeparts selskaper og enkeltpersoner for å gjøre tjenesten vår enklere, levere tjenesten på våre vegne, utføre oppgaver knyttet til tjenesten, eller hjelpe oss med å analysere hvordan tjenesten vår brukes.",
          1: "Disse tredjepartene inkluderer:",
        },
        paragraphs2: {
          0: "Disse tredjepartene har kun tilgang til dine personopplysninger for å utføre disse oppgavene på våre vegne, og er forpliktet til ikke å utlevere eller bruke dem til andre formål.",
        },
      },
      7: {
        heading: "Endringer i denne personvernerklæringen",
        id: "endringer",
        paragraphs: {
          0: "Vi kan oppdatere vår personvernerklæring fra tid til annen. Vi vil varsle deg om eventuelle endringer ved å publisere den nye personvernerklæringen på denne siden og oppdatere datoen for «Sist oppdatert».",
          1: "Vi anbefaler at du gjennomgår denne personvernerklæringen jevnlig for eventuelle endringer. Endringer i denne personvernerklæringen trer i kraft når de publiseres på denne siden.",
        },
      },
      8: {
        heading: "Kontakt oss",
        id: "kontakt",
        list: {
          0: "På e-post: privacy@amiquus.com",
          1: "Ved å besøke kontaktsiden på vår nettside",
        },
        paragraphs: {
          0: "Hvis du har spørsmål om denne personvernerklæringen, vennligst kontakt oss:",
        },
      },
    },
    title: "Personvernerklæring",
  },
  profile: {
    account: {
      cancel: "Avbryt",
      desc: "Oppdater kontoinformasjon og preferanser.",
      email: "E-post",
      name: "Navn",
      save: "Lagre endringer",
      title: "Konto­innstillinger",
      username: "Brukernavn",
    },
    alerts: {
      add: "Legg til nytt varsel",
      cta: "Opprett ditt første varsel",
      desc: "Administrer varsler for bilsøk og innstillinger for varslinger.",
      none: "Du har ingen aktive bilvarsler.",
      title: "Bilvarsel-abonnementer",
      warning:
        "⚠️ Endringer i abonnementet ditt trer i kraft i neste faktureringsperiode, og kun etter vellykket betaling. Hvis betalingen mislykkes, forblir dine nåværende varslingsinnstillinger uendret.",
    },
    logout: {
      desc: "Er du sikker på at du vil logge ut av kontoen din?",
      success: "Du har blitt logget ut.",
      title: "Logg ut",
    },
    payments: {
      desc: "Administrer betalingsmetodene dine for abonnement.",
      encrypted: "Dine betalingsopplysninger er kryptert og lagres sikkert.",
      none: "Du har ingen lagrede betalingsmetoder.",
      title: "Betalingsmetoder",
    },
    security: {
      confirm: "Bekreft nytt passord",
      current: "Nåværende passord",
      desc: "Administrer sikkerhetsinnstillinger og personvernpreferanser.",
      new: "Nytt passord",
      title: "Personvern og sikkerhet",
      update: "Oppdater passord",
    },
    sidebar: {
      account: "Konto­innstillinger",
      logout: "Logg ut",
      membersince: "Medlem siden",
      methods: "Betalingsmetoder",
      privacy: "Personvern og sikkerhet",
      subscriptions: "Abonnementer",
    },
    tabs: {
      alerts: "Mine varsler",
      payments: "Betalingsmetoder",
    },
  },
  register: {
    alreadyhave: "Har du allerede en konto?",
    and: "og",
    confirmpassword: "Bekreft passord",
    createbtn: "Opprett konto",
    description: "Registrer deg for å begynne å spore drømmebilen din",
    email: "E-post",
    firstname: "Fornavn",
    google: "Registrer deg med Google",
    lastname: "Etternavn",
    login: "Logg inn",
    orcontinue: "Eller fortsett med",
    password: "Passord",
    privacypolicy: "Personvernerklæring",
    termsnotice: "Jeg godtar",
    termsofservice: "Vilkår for bruk",
    title: "Opprett konto",
    toast: {
      failure: {
        desc: "Vennligst sjekk informasjonen din og prøv igjen.",
        title: "Registreringen mislyktes",
      },
      invalidusername: {
        desc: "Brukernavn må være alfanumerisk og mellom 3 og 20 tegn",
        title: "Ugyldig brukernavn",
      },
      missingfields: {
        desc: "Vennligst fyll ut alle obligatoriske felt",
        title: "Manglende felter",
      },
      passwordmismatch: {
        desc: "Vennligst sørg for at passordene dine samsvarer",
        title: "Passordene samsvarer ikke",
      },
      success: {
        desc: "Velkommen til AMIQUUS! Du blir videresendt for å bekrefte e-postadressen din.",
        title: "Registreringen var vellykket",
      },
      termsnotaccepted: {
        desc: "Du må godta vilkårene og personvernerklæringen for å fortsette.",
        title: "Vilkår ikke akseptert",
      },
    },
    username: "Brukernavn",
  },
  review: {
    actions: {
      previous: "Forrige",
      submit: "Gå til betaling",
    },
    description:
      "Vennligst se gjennom abonnementsdetaljene dine før du går videre til betaling.",
    monitoring: {
      facebookurl: "Facebook-nettadresse",
      title: "Overvåkingsinnstillinger",
      updatefrequency: "Oppdateringsfrekvens",
      websites: "Nettsider",
    },
    notification: {
      language: "Varslingsspråk",
      telegram: "Telegram-bot",
      title: "Varslingsinnstillinger",
    },
    personal: {
      email: "E-post",
      name: "Navn",
      title: "Personopplysninger",
    },
    specs: {
      brand: "Merke",
      fueltype: "Drivstofftype",
      mileage: "Rekkevidde (km)",
      model: "Modell",
      price: "Prisklasse (€)",
      title: "Bilspecifikasjoner",
      yearrange: "Årstall",
    },
    summary: {
      base: "Grunnabonnement",
      extrawebsites: "Flere nettsteder",
      frequencyupgrade: "Frekvensoppgradering",
      title: "Abonnementsoversikt",
      total: "Totalt (månedlig)",
    },
    terms: {
      checkbox: "Jeg godtar",
      error: "Du må godta vilkårene og betingelsene",
      note: "Abonnementet ditt fornyes automatisk hver måned. Du kan når som helst si opp.",
      privacy: "Personvernerklæring",
      tos: "Vilkår for bruk",
    },
    title: "Gå gjennom abonnementet ditt",
  },
  setupAlerts: {
    basetitle: "99,– kr/måned",
    basicplan: "Grunnpakke",
    button: "Start min bilvarslingstjeneste",
    cancel: "Avslutt når som helst",
    subtitle:
      "Konfigurer Telegram-boten din for å motta varsler om drømmebilen din",
    title: "Sett opp varsler for bilen din",
    toasts: {
      contactbot: {
        description:
          "For å motta varsler om biler må du starte en chat med vår Telegram-bot og sende en melding. Følg instruksjonene nedenfor for å kontakte boten.",
        title: "Kontaktbot påkrevd",
      },
      error: {
        title: "Feil ved opprettelse av abonnement",
      },
      success: {
        description: "Abonnementet ditt har blitt opprettet vellykket",
        title: "Abonnement opprettet",
      },
      terms: {
        description: "Du må godta vilkårene for bruk for å fortsette",
        title: "Vilkår ikke akseptert",
      },
    },
  },
  signUp: {
    cta: "Få varsler nå",
    heading: "Opprett bilvarsel",
    subheading:
      "Sett opp dine personlige varsler for bilannonser på bare noen få steg.",
    toast: {
      error: {
        description:
          "Vi kunne ikke opprette abonnementet ditt. Vennligst prøv igjen senere.",
        title: "Abonnement mislyktes",
      },
      success: {
        description: "Abonnementet ditt har blitt opprettet vellykket",
        title: "Abonnement opprettet",
      },
    },
    waitlist: {
      cta: "Bli med på ventelisten",
      message:
        "Vi har for øyeblikket fullt. Meld deg på ventelisten for å bli varslet når det blir ledig plass.",
    },
  },
  subscription: {
    actions: {
      back: "Tilbake",
      save: "Lagre endringer",
    },
    description:
      "Du kan sette abonnementet ditt på pause når som helst. Når du pauser abonnementet, vil bilvarslene dine stoppe til du aktiverer dem igjen.",
    error: "Gå tilbake til dashbordet",
    form: {
      status: {
        active: "Aktiv",
        label: "Status",
        paused: "Midlertidig stoppet",
        placeholder: "Velg status",
      },
    },
    notfound: "Abonnement ikke funnet",
    notfoundsub: "Gå tilbake til dashbordet",
    subtitle: "Rediger abonnementet ditt nedenfor",
    title: "Abonnementsdetaljer",
    toasts: {
      error: {
        title: "Feil ved oppdatering av abonnement",
      },
      priceerror: {
        description:
          "Du setter abonnementet på pause og oppdaterer prisen samtidig. Du må enten sette på pause eller oppdatere prisen.",
        title: "Kan ikke oppdatere abonnement",
      },
      success: {
        description:
          "Abonnementet ditt for {{brand}} {{model}} har blitt oppdatert.",
        title: "Abonnement oppdatert",
      },
    },
  },
  support: {
    emailsupport: {
      description: "Send oss en e-post, så svarer vi deg innen 24 timer.",
      email: "support@amiquus.com",
      title: "E-postsupport",
    },
    faqheading: "Ofte stilte spørsmål",
    faqs: {
      cancel: {
        answer:
          "Du kan når som helst si opp abonnementet ditt fra profilsiden på kontoen din. Klikk på fanen «Abonnementer», finn abonnementet du ønsker å si opp, og klikk på knappen «Avslutt abonnement». Tjenesten din vil være aktiv ut inneværende faktureringsperiode.",
        question: "Hvordan avslutter jeg abonnementet mitt?",
      },
      facebook: {
        answer:
          "Ja, vi støtter overvåking av Facebook Marketplace. For å sette dette opp, må du oppgi URL-en til Facebook Marketplace-søk med ønskede filtre brukt. Systemet vårt vil deretter overvåke akkurat dette søket for nye annonser som matcher dine kriterier.",
        question: "Kan jeg overvåke Facebook Marketplace?",
      },
      full: {
        answer:
          "For å opprettholde vår høye kvalitet på tjenesten, begrenser vi antall aktive abonnementer. Hvis alle plasser er opptatt, kan du sette deg på venteliste. Vi gir deg beskjed så snart en plass blir ledig, og du får prioritet til å sikre deg plassen før vi åpner for resten av publikum.",
        question: "Hva skjer hvis alle abonnementsslots er fulle?",
      },
      telegram: {
        intro: "For å sette opp varsler via Telegram, følg disse trinnene:",
        outro:
          "Hvis du trenger mer hjelp, finner du vår detaljerte veiledning på dashbordet ditt.",
        question: "Hvordan setter jeg opp varsler i Telegram?",
        steps: {
          0: "Opprett en Telegram-bot med BotFather (instruksjoner finner du på vårt dashbord)",
          1: "Kopier din API-nøkkel og chat-ID",
          2: "Skriv inn disse detaljene i kontoinnstillingene dine under «Varslingsinnstillinger»",
          3: "Test forbindelsen din ved å bruke knappen «Send testmelding»",
        },
      },
      updates: {
        answer:
          "Hvor ofte du får oppdateringer, avhenger av abonnementet ditt. Grunnleggende abonnement gir oppdateringer hver 6. time, mens Premium-abonnement kan få oppdateringer så ofte som hvert 30. minutt. Du kan se og endre hvor ofte du får oppdateringer i abonnementinnstillingene dine.",
        question: "Hvor ofte oppdateres bilannonsene?",
      },
    },
    metaDescription:
      "Få hjelp med din AMIQUUS-konto, abonnement eller bilvarsler. Søk i vårt hjelpesenter eller kontakt vårt supportteam for assistanse.",
    metaTitle: "Kundeservice | Amiquus - Hjelpesenter",
    stillneedhelp: {
      button: "Kontakt kundestøtte",
      description:
        "Fant du ikke svaret på spørsmålet ditt? Ta gjerne kontakt med vårt supportteam. Vi er her for å hjelpe deg!",
      heading: "Trenger du fortsatt hjelp?",
    },
    subtitle:
      "Finn svar på vanlige spørsmål eller ta kontakt med vårt supportteam",
    title: "Kundesenter",
  },
  telegram: {
    actions: {
      continue: "Fortsett",
      previous: "Forrige",
    },
    bottokenexample:
      "Selvfølgelig! Vennligst oppgi teksten du ønsker oversatt til norsk.",
    bottokenlabel: "Telegram Bot-token",
    bottokenplaceholder: "Skriv inn bot-tokenet ditt fra BotFather",
    caralerttitle: "🚗 Ny bil!",
    chatiddescription:
      "Du kan få dette ved å sende en melding til @userinfobot på Telegram.",
    chatidlabel: "Din Telegram Chat-ID",
    chatidplaceholder: "Skriv inn din Telegram chat-ID",
    chatidsteps: {
      0: 'Åpne Telegram og søk etter "userinfobot"',
      1: "Send en melding til boten",
      2: "Boten vil svare med informasjonen din, inkludert din Chat ID",
      3: "Kopier din Chat-ID",
    },
    chatidtitle: "Slik finner du din Telegram Chat ID:",
    confirmcontact: "Jeg har startet en chat med boten og sendt en melding",
    contact: "Kontakt oss",
    contactbotinstruction:
      "Start en chat med vår Telegram-bot ved å klikke på lenken under og sende den en melding:",
    contactbotnote:
      "Dette er nødvendig for å motta varsler om biler. Du kan skanne QR-koden hvis du er på datamaskin.",
    description:
      "Sett opp Telegram-varsler ved å oppgi bot-tokenet og chat-ID-en din.",
    errors: {
      chatid: "Telegram chat-ID er påkrevd",
      language: "Varslingsspråk er påkrevd",
      token: "Telegram-bottoken er påkrevd",
      username: "Telegram-brukernavn er påkrevd",
    },
    examples: {
      chatid:
        "Du kan få dette ved å sende en melding til @userinfobot på Telegram.",
      token: "Eksempel: 5432109876:ABCDefGhIJklMNoPqrSTuvWXyz1234567890",
    },
    heading: "Telegram-oppsett",
    helpdescription: "Se videoen nedenfor for en trinnvis veiledning.",
    helptitle:
      "Trenger du hjelp med å sette opp Telegram Bot Token og Chat ID?",
    info: "Hvis du har problemer med å opprette en Telegram-bot, kontakt oss så ringer vi deg og hjelper deg med å lage en.",
    instructions: {
      botstep1: "Åpne Telegram og søk etter @BotFather",
      botstep2: "Send kommandoen /newbot",
      botstep3: "Følg instruksjonene for å lage en bot",
      botstep4: "Kopier tokenet som er gitt av BotFather",
      bottitle: "Hvordan få en Telegram Bot Token:",
      chatstep1: "Åpne Telegram og søk etter @userinfobot",
      chatstep2: "Send en melding til boten",
      chatstep3:
        "Boten vil svare med informasjonen din, inkludert Chat-ID-en din",
      chatstep4: "Kopier chat-ID-en (det er et tall)",
      chattitle: "Slik finner du din Telegram Chat ID:",
    },
    kilometreslabel: "Kilometer: {{kms}}",
    labels: {
      chatid: "Din Telegram Chat-ID",
      language: "Varslingsspråk",
      token: "Telegram-bottoken",
      username: "Telegram brukernavn",
    },
    languagelabel: "Varslingsspråk",
    languageplaceholder: "Velg språk for Telegram-melding",
    languages: {
      de: "Tysk",
      en: "Engelsk",
      es: "Norsk",
      fr: "Fransk",
      it: "Norsk",
    },
    locationlabel: "Sted: {{location}}",
    placeholders: {
      chatid: "Skriv inn din Telegram chat-ID",
      language: "Velg språk for Telegram-melding",
      token: "Skriv inn bot-tokenet ditt fra BotFather",
      username: "Skriv inn ditt Telegram-brukernavn",
    },
    previewtitle: "Forhåndsvis Telegram-varsler",
    pricelabel: "Pris: {{price}}",
    setupsteps: {
      0: 'Åpne Telegram og søk etter "BotFather"',
      1: "Start en chat med BotFather ved å klikke på «Start»",
      2: "Skriv /newbot og følg instruksjonene for å lage en ny bot",
      3: "Velg et navn for boten din",
      4: "Velg et brukernavn for boten din (må slutte på 'bot')",
      5: "Kopier API-nøkkelen gitt av BotFather",
      6: "Send en melding til din nye bot for å aktivere chatten",
    },
    setuptitle: "Installasjonsveiledning:",
    subheading: "Sett opp din Telegram-bot",
    usernamedescription:
      "Dette er brukernavnet på Telegram-kontoen din (uten @-symbolet).",
    videodescription: "Se videoen nedenfor for en trinnvis veiledning.",
    videoprompt:
      "Trenger du hjelp med å sette opp Telegram Bot Token og Chat ID?",
    viewlisting: "Se annonse →",
  },
  terms: {
    lastupdated: "Sist oppdatert: 21. mai 2025",
    metaDescription:
      "Les AMIQUUS’ vilkår for bruk som regulerer din bruk av vår tjeneste for overvåking og varsling av bilannonser.",
    metaTitle: "Vilkår for bruk | Amiquus",
    sections: {
      1: {
        heading: "Godkjenning av vilkår",
        id: "avtale",
        paragraphs: {
          0: "Disse vilkårene for bruk utgjør en juridisk bindende avtale mellom deg og AMIQUUS, som gjelder din tilgang til og bruk av vårt nettsted og våre tjenester.",
          1: "Ved å få tilgang til eller bruke våre tjenester, godtar du å være bundet av disse vilkårene. Hvis du er uenig i noen del av vilkårene, kan du ikke få tilgang til tjenesten.",
        },
      },
      10: {
        heading: "Ansvarsfraskrivelse",
        id: "ansvarsfraskrivelse",
        paragraphs: {
          0: "Din bruk av tjenesten skjer på eget ansvar. Tjenesten tilbys «SOM DEN ER» og «SOM TILGJENGELIG». Tjenesten leveres uten noen form for garanti, verken uttrykt eller underforstått.",
          1: "Amiquus gir ingen garanti for at tjenesten vil være uten avbrudd, rettidig, sikker eller feilfri, eller at resultatene som oppnås ved bruk av tjenesten vil være nøyaktige eller pålitelige.",
        },
      },
      11: {
        heading: "Retningslinjer for informasjonskapsler",
        id: "informasjonskapsler",
        paragraphs: {
          0: "Vår retningslinje for informasjonskapsler forklarer hva informasjonskapsler er, hvordan vi bruker informasjonskapsler, hvordan tredjeparter vi samarbeider med kan bruke informasjonskapsler på vår tjeneste, dine valg når det gjelder informasjonskapsler, og mer informasjon om informasjonskapsler. Se avsnittet om informasjonskapsler i vår personvernerklæring.",
        },
      },
      12: {
        heading: "Gjeldende lov",
        id: "gjeldende lov",
        paragraphs: {
          0: "Disse vilkårene skal reguleres og tolkes i samsvar med lovene i USA, uten hensyn til regler om lovkonflikter.",
          1: "Vår unnlatelse av å håndheve en rettighet eller bestemmelse i disse Vilkårene skal ikke anses som et frafall av disse rettighetene. Dersom en bestemmelse i disse Vilkårene blir kjent ugyldig eller ikke kan håndheves av en domstol, skal de gjenværende bestemmelsene i disse Vilkårene fortsatt være gjeldende.",
        },
      },
      13: {
        heading: "Kontakt oss",
        id: "kontakt",
        list: {
          0: "På e-post: legal@amiquus.com",
          1: "Ved å besøke kontaktsiden på vår nettside",
        },
        paragraphs: {
          0: "Hvis du har spørsmål om disse vilkårene, vennligst kontakt oss:",
        },
      },
      2: {
        heading: "Endringer i vilkår",
        id: "endringer",
        paragraphs: {
          0: "Vi forbeholder oss retten, etter eget skjønn, til å endre eller erstatte disse Vilkårene når som helst. Dersom en endring er vesentlig, vil vi gjøre rimelige anstrengelser for å gi minst 30 dagers varsel før nye vilkår trer i kraft.",
          1: "Ved å fortsette å bruke eller få tilgang til tjenesten vår etter at disse endringene trer i kraft, samtykker du i å være bundet av de reviderte vilkårene. Hvis du ikke godtar de nye vilkårene, vennligst slutt å bruke tjenesten.",
        },
      },
      3: {
        heading: "Vilkår for konto",
        id: "konto",
        list: {
          0: "Du må være minst 18 år gammel",
          1: "Fullfør registreringsprosessen",
          2: "Oppgi nøyaktig, fullstendig og oppdatert informasjon",
          3: "Vær ansvarlig for å opprettholde sikkerheten til din konto og ditt passord",
          4: "Vær ansvarlig for alle aktiviteter som skjer under din konto",
          5: "Varsle oss umiddelbart dersom du blir oppmerksom på brudd på sikkerheten eller uautorisert bruk av kontoen din.",
        },
        paragraphs: {
          0: "For å bruke våre tjenester, må du:",
        },
      },
      4: {
        heading: "Betalingsvilkår",
        id: "betaling",
        list: {
          0: "Alle gebyrer er ekskludert mva, som vil bli lagt til der det er aktuelt.",
          1: "Abonnementspriser kan endres med 30 dagers varsel.",
          2: "Abonnementer fornyes automatisk med mindre de sies opp før neste faktureringsperiode.",
          3: "Refusjoner behandles individuelt i henhold til vår refusjonspolicy.",
          4: "Vi bruker Stripe for sikker betalingsbehandling, og all betalingsinformasjon lagres hos Stripe.",
        },
        paragraphs: {
          0: "AMIQUUS tilbyr abonnementstjenester med følgende vilkår:",
        },
      },
      5: {
        heading: "Kapasitetsbegrensninger",
        id: "kapasitet",
        list: {
          0: "Nye brukere kan bli med på ventelisten vår",
          1: "Ventelisteplasseringen bestemmes etter «førstemann til mølla»-prinsippet.",
          2: "Når kapasitet blir tilgjengelig, vil brukere på ventelisten bli varslet i rekkefølge.",
          3: "Vi forbeholder oss retten til å endre kapasitetsbegrensninger når som helst.",
        },
        paragraphs: {
          0: "For å opprettholde tjenestekvalitet og pålitelighet, begrenser AMIQUUS antall aktive abonnementer til 30. Når denne grensen er nådd:",
        },
      },
      6: {
        heading: "Begrensninger for nettskraping",
        id: "datainnhenting",
        list: {
          0: "Amiquus respekterer bruksvilkårene til nettsidene vi overvåker",
          1: "Vi benytter fartsbegrensning og hensynsfull indeksering",
          2: "Tilgjengeligheten til enkelte nettsteder kan endres basert på deres vilkår og tekniske tiltak.",
          3: "Vi gir ingen garantier for fullstendigheten eller oppdateringen av innhentede data.",
        },
        paragraphs: {
          0: "Vår tjeneste henter inn og behandler data fra flere bilannonseringsnettsteder. Ved å bruke vår tjeneste, bekrefter du at:",
        },
      },
      7: {
        heading: "Immaterielle rettigheter",
        id: "intellektuell",
        paragraphs: {
          0: "Tjenesten Amiquus, inkludert dens originale innhold, funksjoner og funksjonalitet, er og vil forbli Amiquus’ eksklusive eiendom. Vår tjeneste er beskyttet av opphavsrett, varemerker og andre lover i både USA og andre land.",
          1: "Våre varemerker og kjennetegn må ikke brukes i forbindelse med noen produkter eller tjenester uten skriftlig forhåndstillatelse fra AMIQUUS.",
        },
      },
      8: {
        heading: "Oppsigelse",
        id: "oppsigelse",
        paragraphs: {
          0: "Vi kan avslutte eller midlertidig stenge kontoen din umiddelbart, uten forvarsel eller ansvar, av hvilken som helst grunn, inkludert, men ikke begrenset til, dersom du bryter Vilkårene.",
          1: "Ved oppsigelse vil din rett til å bruke tjenesten umiddelbart opphøre. Hvis du ønsker å avslutte kontoen din, kan du enkelt slutte å bruke tjenesten eller kontakte oss for å be om sletting av kontoen.",
        },
      },
      9: {
        heading: "Ansvarsbegrensning",
        id: "begrensninger",
        list: {
          0: "Din tilgang til eller bruk av, eller manglende mulighet til å få tilgang til eller bruke tjenesten",
          1: "Enhver oppførsel eller innhold fra tredjepart på tjenesten",
          2: "Alt innhold hentet fra tjenesten",
          3: "Uautorisert tilgang, bruk eller endring av dine overføringer eller innhold",
        },
        paragraphs: {
          0: "Under ingen omstendigheter skal AMIQUUS, eller dets styremedlemmer, ansatte, partnere, agenter, leverandører eller tilknyttede selskaper, være ansvarlige for noen indirekte, tilfeldige, spesielle, konsekvensielle eller straffende skader, inkludert, men ikke begrenset til, tap av fortjeneste, data, bruk, goodwill eller andre immaterielle tap som følge av:",
        },
      },
    },
    title: "Vilkår for bruk",
  },
  verifyEmail: {
    codelabel: "Verifiseringskode",
    description: "En verifiseringskode har blitt sendt til e-posten din.",
    footernote: "Fikk du ikke koden? Sjekk søppelpostmappen din.",
    resendbutton: "Send koden på nytt",
    resendcountdown: "Du kan sende koden på nytt om {{seconds}}s",
    title: "Bekreft e-posten din",
    toast: {
      emailupdated: "E-post oppdatert",
      entervalidemail: "Vennligst oppgi en gyldig e-postadresse",
      error: "Feil",
      failed: "Verifisering mislyktes",
      invalidemail: "Ugyldig e-postadresse",
      resent: "Verifiseringskode sendt på nytt",
      sameemail: "Samme e-post",
      sameemaildesc:
        "Den nye e-postadressen er den samme som den nåværende e-postadressen.",
      verified: "E-post bekreftet",
    },
    updateemailbutton: "Oppdater e-post",
    updateemaillabel: "Oppdater e-post",
    verifybutton: "Bekreft e-post",
  },
  waitlist: {
    cantjoin: {
      description:
        "Vi gir deg beskjed så snart det blir ledig plass for abonnement.",
      title: "Bli med på ventelisten",
    },
    form: {
      email: {
        description:
          "Vi bruker denne e-posten for å varsle deg når en plass blir ledig.",
        label: "E-post",
        placeholder: "john.doe@example.com",
      },
      firstname: {
        label: "Fornavn",
        placeholder: "John",
      },
      lastname: {
        label: "Etternavn",
        placeholder: "Dåhjort",
      },
      submit: "Bli med på ventelisten",
      submitting: "Sender inn...",
    },
    limited: {
      available:
        "{{remaining}} abonnementplasser av totalt {{capacity}} er for øyeblikket tilgjengelig.",
      description:
        "Vi begrenser systemet vårt til kun 30 aktive abonnenter for å sikre:",
      full: "Alle abonnementplasser er for øyeblikket fylt opp. Bli med på ventelisten for å få beskjed når en plass blir ledig.",
      heading: "Begrenset tilgjengelighet",
      points: {
        0: "Enestående pålitelighet og hastighet for datainnhenting for alle brukere",
        1: "Redusert risiko for å bli blokkert av nettsider for bilannonser",
        2: "Personlig støtte for hver abonnent",
        3: "Rettferdig fordeling av serverressurser",
      },
    },
    metaDescription:
      "Bli med på AMIQUUS ventelisten for å få beskjed når abonnement blir tilgjengelig.",
    metaTitle: "Bli med på ventelisten – Amiquus",
    subtitle:
      "På grunn av stor etterspørsel begrenser vi antall aktive abonnementer for å sikre best mulig servicekvalitet for alle brukere.",
    success: {
      button: "Tilbake til forsiden",
      description:
        "Vi gir deg beskjed så snart det blir ledig en abonnementsplass.",
      message:
        "Takk for din interesse for Amiquus! Vi har lagt deg til på ventelisten og kontakter deg så snart vi har en ledig plass.",
      title: "Du står på ventelisten!",
    },
    title: "Bli med på ventelisten vår",
  },
  waitlistPrompt: {
    button: "Bli med på ventelisten",
    description:
      "Vi har for øyeblikket fullt belegg. Meld deg på ventelisten for å bli varslet når en plass blir ledig.",
    title: "Bli med på ventelisten",
  },
  websiteSelection: {
    actions: {
      continue: "Fortsett",
      previous: "Forrige",
    },
    description:
      "Velg hvilke nettsteder du vil overvåke, og hvor ofte du vil ha oppdateringer.",
    errors: {
      facebookurl: "Facebook Marketplace-URL er påkrevd når Facebook er valgt",
      websites: "Minst én nettside må velges",
    },
    heading: "Nettstedsvalg",
    help: {
      facebookurl:
        "Lim inn URL-en til dine Facebook Marketplace-søkeresultater her.",
      updatefrequency:
        "Hvor ofte bør vi sjekke etter nye annonser? Høyere frekvens kan medføre økte kostnader.",
      videodesc: "Se videoen nedenfor for trinnvise instruksjoner.",
      videotitle:
        "Trenger du hjelp med å finne søkelenken din på Facebook Marketplace?",
      websites: "Velg ett eller flere nettsteder for å overvåke bilannonser.",
    },
    labels: {
      facebookurl: "Facebook Marketplace-nettadresse",
      updatefrequency: "Oppdateringsfrekvens",
      websites: "Nettsteder å overvåke",
    },
    placeholders: {
      frequency: "Velg frekvens",
    },
  },
};

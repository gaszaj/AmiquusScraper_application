// === da.ts === Dansk
export const da = {
  navigations: {
    features: "Funktioner",
    how: "Hvordan det fungerer",
    pricing: "Priser",
    getAlerts: "Få alarmer",
    waitlist: "Venteliste",
    faq: "FAQ",
    login: "Log ind",
    getStarted: "Kom i gang",
    subscribers: "Abonnenter",
    theme: "Tema",
    language: "Sprog",
    myAlerts: "Mine alarmer",
    profile: "Profil",
    settings: "Indstillinger",
    logout: "Log ud",
    signUp: "Tilmeld dig",
  },
  hero: {
    label: "Overvåg brugte bilannoncer i realtid!",
    title: "Gå aldrig glip af det perfekte tilbud på din bil",
    subtitle:
      "Amiquus giver dig besked med det samme, når drømmebilen dukker op på flere sider. Få alarmer via Telegram, så snart der er et match.",
    button1: "Opsæt alarmer",
    button2: "Se hvordan det fungerer",
    trustIndicators: {
      websites: "Over 15 sider",
      realtime: "Realtidsalarmer",
      noSetup: "Ingen installation",
      cancelAnytime: "Opsig når som helst",
    },
  },
  limited: {
    full: {
      title: "Abonnementsgrænse nået",
      description:
        "Vi har nået kapaciteten på 30 aktive abonnenter. Tilmeld dig ventelisten for at blive underrettet, når en plads bliver ledig.",
      buttonText: "Tilmeld venteliste",
    },
    limited: {
      title: "Begrænset tilgængelighed",
      description:
        "Kun {{remaining}} af {{capacity}} pladser tilbage. Abonnér nu, før de er væk!",
      buttonText: "Start nu",
    },
    available: {
      title: "Abonnementer tilgængelige",
      description:
        "{{active}} af {{capacity}} abonnementer er i øjeblikket aktive. Masser af plads til dig!",
      buttonText: "Start nu",
    },
  },
  features: {
    heading: "Hvorfor vælge Amiquus?",
    subheading:
      "Spar tid og gå aldrig glip af den perfekte bil med vores automatiserede service.",
    multiSite: {
      title: "Multi-site overvågning",
      description:
        "Overvåg flere bilsider samtidigt uden at skulle tjekke hver enkelt manuelt.",
    },
    notifications: {
      title: "Øjeblikkelige alarmer",
      description:
        "Få øjeblikkelige alarmer via Telegram, når en bil matcher dine kriterier.",
    },
    filters: {
      title: "Tilpasselige filtre",
      description:
        "Indstil præcise kriterier: mærke, model, årgang, kilometerstand, pris – find præcis, hvad du vil have.",
    },
    frequency: {
      title: "Justerbar frekvens",
      description:
        "Vælg, hvor ofte nye annoncer tjekkes – fra hver time til realtid.",
    },
    languages: {
      title: "Flersproget understøttelse",
      description:
        "Få alarmer på dit foretrukne sprog for bedre forståelse af annoncer.",
    },
    account: {
      title: "Nem kontohåndtering",
      description:
        "Håndter flere søgeprofiler og ændr dit abonnement med få klik.",
    },
  },
  howItWorks: {
    title: "Hvordan Amiquus fungerer",
    subtitle:
      "Opsæt én gang og lad vores system finde det perfekte tilbud til dig",
    whyTitle: "Hvorfor vælge Amiquus?",
    steps: {
      preferences: {
        title: "Indstil dine præferencer",
        description:
          "Vælg mærker, modeller, prisklasser og andre kriterier, der interesserer dig.",
      },
      telegram: {
        title: "Forbind Telegram",
        description:
          "Forbind din Telegram-konto for at få øjeblikkelige alarmer om nye annoncer.",
      },
      notifications: {
        title: "Få øjeblikkelige alarmer",
        description:
          "Få besked med det samme, når en matchende bil dukker op på en side.",
      },
      findCar: {
        title: "Find din perfekte bil",
        description:
          "Vær den første til at vide om nye annoncer og sikre de bedste tilbud.",
      },
    },
    features: [
      "Overvåg over 15 sider samtidigt",
      "Tilpasselige søgekriterier med avanceret filtrering",
      "Realtidsalarmer via Telegram",
      "Automatiske alarmer for prisfald og nye annoncer",
      "Nem opsætningsproces på under 5 minutter",
    ],
    setAlerts: "Opsæt alarmer",
    notificationMockup1: {
      title: "Ny match fundet!",
      description:
        "BMW 3-serie, 2019, 32.500 € – For nylig offentliggjort på AutoTrader",
    },
    notificationMockup2: {
      title: "Telegram-alarm",
      description:
        "Mercedes C-klasse, 2020, 30.000 km – Pris sænket med 2.000 €",
    },
  },
  pricing: {
    title: "Enkle og gennemsigtige priser",
    subtitle:
      "Vores priser er baseret på dine behov. Start med basisplanen og tilpas.",
    baseTitle: "Basisplan: 79,99 €/måned",
    includedTitle: "Inkluderet:",
    includedFeatures: [
      "Overvågning af én side",
      "Opdateringer hver time",
      "Ubegrænsede filtre",
      "Alarmer via Telegram",
    ],
    addonsTitle: "Tilføjelser:",
    addons: [
      { name: "Hver ekstra side", price: 4.99 },
      { name: "Opdateringer hver 30. minut", price: 2.99 },
      { name: "Opdateringer hver 15. minut", price: 5.99 },
      { name: "Opdateringer hver 5. minut", price: 9.99 },
      { name: "Opdateringer hvert minut", price: 14.99 },
    ],
    footerNote:
      "Alle planer inkluderer ubegrænsede søgeindstillinger og nem abonnementshåndtering.",
    button: "Start nu",
  },
  signup: {
    heading: "Opret bilalarm",
    subheading: "Opsæt personlige alarmer for bilannoncer i få enkle trin.",
    cta: "Få alarmer nu",
    waitlist: {
      message:
        "Vi er i øjeblikket fuldt booket. Tilmeld dig ventelisten for at blive underrettet, når en plads bliver ledig.",
      cta: "Tilmeld venteliste",
    },
    toast: {
      success: {
        title: "Abonnement oprettet",
        description: "Dit abonnement er blevet oprettet succesfuldt",
      },
      error: {
        title: "Oprettelse af abonnement mislykkedes",
        description: "Kunne ikke oprette abonnementet. Prøv igen senere.",
      },
    },
  },
  payment: {
    toast: {
      success: {
        title: "Succes",
        description: "Din betalingsmetode er blevet opsat succesfuldt.",
      },
      error: {
        title: "Fejl",
        fallback: "Der opstod en uventet fejl. Prøv igen.",
      },
    },
    button: {
      submit: "Opsæt betalingsmetode",
      processing: "Behandler...",
    },
  },
  alertSchema: {
    errors: {
      carBrand: "Bilens mærke er påkrævet",
      carModel: "Bilens model er påkrævet",
      fuelType: "Brændstoftype er påkrævet",
      priceMin: "Minimumspris skal være et tal",
      priceMax: "Maksimumspris skal være et tal",
      yearMin: "Minimum årgang skal være gyldig",
      yearMax: "Maksimum årgang skal være gyldig",
      maxKilometers: "Maksimum kilometerstand skal være et tal",
      telegramUsername: "Telegram-brugernavn er påkrævet",
      telegramToken: "Telegram-bot-token er påkrævet",
      telegramChatId: "Telegram-chat-ID er påkrævet",
      websitesSelected: "Du skal vælge mindst én side",
      notificationLanguage: "Alarm sprog er påkrævet",
      facebookMarketplaceUrl:
        "Facebook Marketplace URL er påkrævet, hvis Facebook er valgt",
    },
  },
  personalInfo: {
    heading: "Personlige oplysninger",
    description:
      "Indtast dine personlige oplysninger for at opsætte dine alarmer korrekt.",
    labels: {
      firstName: "Fornavn",
      lastName: "Efternavn",
      email: "E-mailadresse",
    },
    placeholders: {
      firstName: "Jens",
      lastName: "Hansen",
      email: "jens.hansen@eksempel.dk",
    },
    errors: {
      firstName: "Fornavn er påkrævet",
      lastName: "Efternavn er påkrævet",
      email: "Indtast en gyldig e-mailadresse",
    },
    actions: {
      login: "Log ind eller tilmeld dig for at fortsætte",
      continue: "Fortsæt",
    },
  },
  websiteSelection: {
    heading: "Sidevalg",
    description: "Vælg siderne at overvåge og den ønskede opdateringsfrekvens.",
    labels: {
      websites: "Sider at overvåge",
      facebookUrl: "Facebook Marketplace URL",
      updateFrequency: "Opdateringsfrekvens",
    },
    placeholders: {
      frequency: "Vælg frekvens",
    },
    help: {
      websites: "Vælg en eller flere sider til at overvåge bilannoncer.",
      facebookUrl:
        "Indsæt URL'en til dine søgeresultater på Facebook Marketplace.",
      videoTitle:
        "Har du brug for hjælp til at finde Facebook Marketplace-linket?",
      videoDesc: "Se videoen nedenfor for trin-for-trin-instruktioner.",
      updateFrequency:
        "Hvor ofte tjekker vi nye annoncer? Højere frekvenser kan koste mere.",
    },
    errors: {
      websites: "Du skal vælge mindst én side",
      facebookUrl:
        "Facebook Marketplace URL er påkrævet, hvis Facebook er valgt",
    },
    actions: {
      previous: "Forrige",
      continue: "Fortsæt",
    },
  },
  carDetails: {
    heading: "Bildetaljer",
    description:
      "Angiv detaljerne for den bil, du søger. Alle felter er valgfrie – lad være tomme for bredere resultater.",
    labels: {
      carBrand: "Bilmærke",
      carModel: "Bilmodel",
      fuelType: "Brændstoftype",
      priceMin: "Minimumspris",
      priceMax: "Maksimumspris",
      yearMin: "Minimum årgang",
      yearMax: "Maksimum årgang",
      maxKilometers: "Maksimum kilometerstand",
    },
    placeholders: {
      carBrand: "Vælg mærke",
      carModel: "Vælg model",
      carModelDisabled: "Vælg mærke først",
      fuelType: "Vælg brændstoftype",
      priceMin: "Indtast minimumspris",
      priceMax: "Indtast maksimumspris",
      yearMin: "Indtast minimum årgang",
      yearMax: "Indtast maksimum årgang",
      maxKilometers: "Indtast maksimum kilometerstand",
    },
    options: {
      noModelsAvailable: "Ingen modeller tilgængelige",
    },
    errors: {
      carBrand: "Bilmærke er påkrævet",
      carModel: "Bilmodel er påkrævet",
      fuelType: "Brændstoftype er påkrævet",
      priceMin: "Minimumspris skal være et tal",
      priceMax: "Maksimumspris skal være et tal",
      yearMin: "Minimum årgang skal være gyldig",
      yearMax: "Maksimum årgang skal være gyldig",
      maxKilometers: "Maksimum kilometerstand skal være et tal",
    },
    actions: {
      previous: "Forrige",
      continue: "Fortsæt",
    },
  },
  telegram: {
    heading: "Telegram-konfiguration",
    description: "Opsæt Telegram-alarmer ved at indtaste bot-token og chat-ID.",
    subHeading: "Opsæt din Telegram-bot",
    info: "Problemer med at oprette en Telegram-bot? Kontakt os, så hjælper vi dig.",
    contact: "Kontakt os",
    instructions: {
      botTitle: "Hvordan du får Telegram-bot-token:",
      botStep1: "Åbn Telegram og søg efter @BotFather",
      botStep2: "Send kommandoen /newbot",
      botStep3: "Følg instruktionerne for at oprette botten",
      botStep4: "Kopier token, som BotFather giver dig",

      chatTitle: "Hvordan du får dit Telegram-chat-ID:",
      chatStep1: "Åbn Telegram og søg efter @userinfobot",
      chatStep2: "Send en vilkårlig besked til botten",
      chatStep3: "Botten svarer med dine oplysninger, inklusive chat-ID",
      chatStep4: "Kopier chat-ID (et tal)",
    },

    videoPrompt: "Har du brug for hjælp til at opsætte bot-token og chat-ID?",
    videoDescription: "Se videoen nedenfor for trin-for-trin-instruktioner.",

    labels: {
      token: "Telegram-bot-token",
      chatId: "Dit Telegram-chat-ID",
      language: "Alarm sprog",
      username: "Telegram-brugernavn",
    },

    placeholders: {
      token: "Indtast din bot-token fra BotFather",
      chatId: "Indtast dit Telegram-chat-ID",
      language: "Vælg sprog for Telegram-beskeder",
      username: "Indtast dit Telegram-brugernavn",
    },
    usernameDescription:
      "Dette er brugernavnet på din Telegram-konto (uden @-tegnet).",
    examples: {
      token: "Eksempel: 5432109876:ABCDefGhIJklMNoPqrSTuvWXyz1234567890",
      chatId: "Få dette ved at sende en besked til @userinfobot på Telegram",
    },
    setupTitle: "Opsætningsinstruktioner:",
    setupSteps: [
      'Åbn Telegram og søg efter "BotFather"',
      'Start en samtale med BotFather ved at klikke på "Start"',
      "Indtast /newbot og følg instruktionerne for at oprette en ny bot",
      "Vælg et navn til din bot",
      "Vælg et brugernavn til botten (skal ende med 'bot')",
      "Kopier API-token, som BotFather giver dig",
      "Send en besked til din nye bot for at aktivere samtalen",
    ],
    chatIdTitle: "Hvordan du får dit Telegram-chat-ID:",
    chatIdSteps: [
      'Åbn Telegram og søg efter "userinfobot"',
      "Send en vilkårlig besked til botten",
      "Botten svarer med dine oplysninger, inklusive chat-ID",
      "Kopier dit chat-ID",
    ],
    helpTitle: "Har du brug for hjælp til at opsætte bot-token og chat-ID?",
    helpDescription: "Se videoen nedenfor for trin-for-trin-instruktioner.",
    botTokenLabel: "Telegram-bot-token",
    botTokenPlaceholder: "Indtast din bot-token fra BotFather",
    botTokenExample:
      "Eksempel: 5432109876:ABCDefGhIJklMNoPqrSTuvWXyz1234567890",
    chatIdLabel: "Dit Telegram-chat-ID",
    chatIdPlaceholder: "Indtast dit Telegram-chat-ID",
    chatIdDescription:
      "Få dette ved at sende en besked til @userinfobot på Telegram",
    languageLabel: "Alarm sprog",
    languagePlaceholder: "Vælg sprog for Telegram-beskeder",
    languages: {
      en: "Engelsk",
      de: "Tysk",
      fr: "Fransk",
      es: "Spansk",
      it: "Italiensk",
      nl: "Nederlandsk",
      sv: "Svensk",
      da: "Dansk",
    },
    previewTitle: "Forhåndsvisning af Telegram-alarm",
    carAlertTitle: "Ny bilalarm!",
    priceLabel: "Pris: {{price}}",
    kilometresLabel: "Kilometer: {{kms}}",
    locationLabel: "Placering: {{location}}",
    viewListing: "Se annonce →",
    errors: {
      token: "Telegram-bot-token er påkrævet",
      chatId: "Telegram-chat-ID er påkrævet",
      language: "Alarm sprog er påkrævet",
      username: "Telegram-brugernavn er påkrævet",
    },

    actions: {
      previous: "Forrige",
      continue: "Fortsæt",
    },
    contactBotInstruction:
      "Start en samtale med vores Telegram-bot ved at klikke på linket nedenfor og sende en besked:",
    contactBotNote:
      "Dette er påkrævet for at modtage bilalarmer. Hvis du er på computeren, scan QR-koden.",
    confirmContact: "Jeg har startet en samtale med botten og sendt en besked",
  },
  review: {
    title: "Oversigt over dit abonnement",
    description: "Gennemgå abonnementsdetaljer før betaling.",

    personal: {
      title: "Personlige oplysninger",
      name: "Navn",
      email: "E-mail",
    },

    monitoring: {
      title: "Overvågningsindstillinger",
      websites: "Sider",
      facebookUrl: "Facebook URL",
      updateFrequency: "Opdateringsfrekvens",
    },

    specs: {
      title: "Bilspecifikationer",
      brand: "Mærke",
      model: "Model",
      fuelType: "Brændstoftype",
      yearRange: "Årgang",
      mileage: "Kilometer (km)",
      price: "Pris (€)",
    },

    notification: {
      title: "Alarmindstillinger",
      telegram: "Telegram-bot",
      language: "Alarm sprog",
    },

    summary: {
      title: "Abonnementsoversigt",
      base: "Basisabonnement",
      extraWebsites: "Ekstra sider",
      frequencyUpgrade: "Frekvensopgradering",
      total: "Total (månedligt)",
    },

    terms: {
      checkbox: "Jeg accepterer",
      tos: "Brugervilkår",
      privacy: "Privatlivspolitik",
      note: "Dit abonnement fornyes automatisk hver måned. Du kan opsige når som helst.",
      error: "Du skal acceptere brugervilkårene",
    },

    actions: {
      previous: "Forrige",
      submit: "Gå til bet Cervaling",
    },
  },
  faq: {
    title: "Ofte stillede spørgsmål",
    subtitle: "Find svar på de mest almindelige spørgsmål om vores service.",
    contactPrompt: "Har du stadig spørgsmål?",
    contactLink: "Kontakt vores support",
    questions: [
      {
        question:
          "Hvor hurtigt får jeg alarmer efter, at en ny annonce er offentliggjort?",
        answer:
          "Alarmhastigheden afhænger af den valgte opdateringsfrekvens. Med timeplanen får du alarmer inden for en time efter offentliggørelse. For næsten øjeblikkelige alarmer (inden for få minutter), opgrader til hyppigere planer.",
      },
      {
        question: "Kan jeg overvåge flere forskellige biltyper samtidigt?",
        answer:
          "Ja! Du kan oprette flere søgeprofiler med forskellige kriterier. Hver profil tæller som et separat abonnement, men du håndterer dem alle fra én konto.",
      },
      {
        question: "Hvilke sider understøtter I i øjeblikket?",
        answer:
          "Vi understøtter i øjeblikket de store platforme, herunder AutoTrader, CarGurus, Cars.com og Facebook Marketplace. Vi tilføjer løbende nye sider på anmodning.",
      },
      {
        question: "Har jeg brug for tekniske færdigheder til Telegram-botten?",
        answer:
          "Nej! Vi giver detaljerede instruktioner med tekst og video. De fleste brugere opsætter botten på under 5 minutter.",
      },
      {
        question:
          "Kan jeg ændre søgekriterierne efter opsætning af abonnementet?",
        answer:
          "Ja, du kan ændre kriterierne når som helst i dashboardet. Ændringerne træder i kraft med det samme.",
      },
      {
        question: "Hvordan opsiger jeg abonnementet?",
        answer:
          'Du kan opsige abonnementet når som helst i afsnittet "Abonnementer" i dashboardet. Tjenesten forbliver aktiv indtil udgangen af faktureringsperioden.',
      },
    ],
  },
  footer: {
    brandTitle: "Amiquus",
    brandDescription:
      "Din personlige assistent til at finde det perfekte brugte biltilbud på det rigtige tidspunkt.",
    quickLinks: "Hurtige links",
    features: "Funktioner",
    pricing: "Priser",
    faq: "FAQ",
    getStarted: "Kom i gang",
    legal: "Juridisk",
    terms: "Brugervilkår",
    privacy: "Privatlivspolitik",
    cookies: "Cookiepolitik",
    gdpr: "GDPR-overholdelse",
    contact: "Kontakt",
    email: "support@amiquus.com",
    telegram: "Kontakt os på Telegram",
    copyright: "Alle rettigheder forbeholdes.",
    about: "Om os",
    blog: "Blog",
    careers: "Karrierer",
    support: "Support",
  },
  login: {
    title: "Log ind på konto",
    description:
      "Indtast e-mail og adgangskode for at få adgang til dashboardet",
    emailLabel: "E-mail",
    passwordLabel: "Adgangskode",
    loginButton: "Log ind",
    loggingIn: "Logger ind...",
    loginWithGoogle: "Log ind med Google",
    or: "eller",
    noAccount: "Har du ingen konto?",
    registerLink: "Tilmeld dig",
    successTitle: "Logget ind succesfuldt",
    successMessage: "Du er blevet logget ind succesfuldt.",
    errorTitle: "Log ind mislykkedes",
    genericError: "Tjek dine oplysninger og prøv igen.",
    errors: {
      invalidEmail: "Indtast en gyldig e-mailadresse",
      shortPassword: "Adgangskoden skal have mindst 6 tegn",
    },
  },
  register: {
    title: "Opret konto",
    description: "Tilmeld dig og begynd at søge efter drømmebilen",
    google: "Tilmeld dig med Google",
    orContinue: "Eller fortsæt med",
    firstName: "Fornavn",
    lastName: "Efternavn",
    username: "Brugernavn",
    email: "E-mail",
    password: "Adgangskode",
    confirmPassword: "Bekræft adgangskode",
    termsNotice: "Jeg accepterer",
    termsOfService: "Brugervilkår",
    privacyPolicy: "Privatlivspolitik",
    createBtn: "Opret konto",
    alreadyHave: "Har du allerede en konto?",
    login: "Log ind",
    and: "og",
    toast: {
      missingFields: {
        title: "Manglende felter",
        desc: "Udfyld alle påkrævede felter",
      },
      invalidUsername: {
        title: "Ugyldigt brugernavn",
        desc: "Brugernavnet skal være alfanumerisk og mellem 3 og 20 tegn",
      },
      passwordMismatch: {
        title: "Adgangskoder matcher ikke",
        desc: "Sørg for, at adgangskoderne matcher",
      },
      termsNotAccepted: {
        title: "Vilkår ikke accepteret",
        desc: "Du skal acceptere brugervilkårene og privatlivspolitikken for at fortsætte",
      },
      success: {
        title: "Tilmelding lykkedes",
        desc: "Velkommen til Amiquus! Du omdirigeres til e-mailbekræftelse.",
      },
      failure: {
        title: "Tilmelding mislykkedes",
        desc: "Tjek dine oplysninger og prøv igen",
      },
    },
  },
  verifyEmail: {
    title: "Bekræft e-mail",
    description: "Vi har sendt en bekræftelseskode til din e-mailadresse.",
    codeLabel: "Bekræftelseskode",
    verifyButton: "Bekræft e-mail",
    updateEmailLabel: "Opdater e-mail",
    updateEmailButton: "Opdater e-mail",
    resendButton: "Send kode igen",
    resendCountdown: "Du kan sende koden igen om {{seconds}}s",
    footerNote: "Fik du ingen kode? Tjek din spam-mappe.",
    toast: {
      verified: "E-mail bekræftet",
      failed: "Bekræftelse mislykkedes",
      resent: "Bekræftelseskode sendt igen",
      error: "Fejl",
      invalidEmail: "Ugyldig e-mail",
      enterValidEmail: "Indtast en gyldig e-mailadresse",
      sameEmail: "Samme e-mail",
      sameEmailDesc: "Den nye e-mail er identisk med den nuværende",
      emailUpdated: "E-mail opdateret",
    },
  },
  dashboardPayment: {
    add: "Tilføj betalingsmetode",
    description:
      "Tilføj et nyt kredit- eller debetkort til abonnementsbetalinger.",
    processing: "Behandler...",
    errorTitle: "Fejl ved tilføjelse af betalingsmetode",
    errorMessage: "Der opstod en uventet fejl",
    initError: {
      title: "Fejl",
      description: "Kunne ikke initialisere betalingsindstillinger",
    },
  },
  dashboard: {
    subscriptionCard: {
      years: "Årgange",
      priceRange: "Pris",
      websites: "Sider",
      updates: "Opdateringer",
      language: "Sprog",
      price: "Pris",
      edit: "Rediger",
      cancelAlert: "Annuller alarm",
      cancelTitle: "Annuller bilalarm",
      cancelDescription:
        "Er du sikker på, at du vil annullere alarmen for {{brand}} {{model}}? Dette stopper alle alarmer, og du skal opsætte alarmen igen.",
      keepMyAlert: "Behold alarm",
      confirmCancel: "Annuller alarm",
    },
    paymentMethodCard: {
      expires: "Udløber",
      default: "Standard",
      setAsDefault: "Angiv som standard",
      remove: "Fjern",
      setDefaultTitle: "Angiv standard betalingsmetode",
      setDefaultDescription:
        "Vil du angive kortet {{brand}}, der slutter på {{last4}}, som standard betalingsmetode? Dette kort vil blive brugt til alle fremtidige betalinger.",
      removeTitle: "Fjern betalingsmetode",
      removeDescription:
        "Er du sikker på, at du vil fjerne kortet {{brand}}, der slutter på {{last4}}?",
      removeWarning:
        "Dette er din standard betalingsmetode, og fjernelse kan påvirke aktive abonnementer.",
      cancel: "Annuller",
      confirmRemove: "Fjern kort",
    },
  },
  profile: {
    tabs: {
      alerts: "Mine alarmer",
      payments: "Betalingsmetoder",
    },
    sidebar: {
      memberSince: "Medlem siden",
      subscriptions: "Abonnementer",
      methods: "Betalingsmetoder",
      account: "Kontoindstillinger",
      privacy: "Privatliv og sikkerhed",
      logout: "Log ud",
    },
    account: {
      title: "Kontoindstillinger",
      desc: "Opdater dine kontooplysninger og indstillinger.",
      name: "Navn",
      email: "E-mail",
      username: "Brugernavn",
      cancel: "Annuller",
      save: "Gem ændringer",
    },
    security: {
      title: "Privatliv og sikkerhed",
      desc: "Håndter sikkerheds- og privatlivsindstillinger.",
      current: "Nuværende adgangskode",
      new: "Ny adgangskode",
      confirm: "Bekræft ny adgangskode",
      update: "Opdater adgangskode",
    },
    logout: {
      title: "Log ud",
      desc: "Er du sikker på, at du vil logge ud?",
      success: "Du er blevet logget ud succesfuldt.",
    },
    alerts: {
      title: "Bilalarmsabonnementer",
      desc: "Håndter dine alarmer og alarmindstillinger.",
      add: "Tilføj ny alarm",
      none: "Du har ingen aktive bilalarmer.",
      cta: "Opret din første alarm",
      warning:
        "⚠️ Ændringer i abonnementet træder i kraft i næste faktureringscyklus og kun efter en succesfuld betaling. Ved mislykket betaling bevares den nuværende konfiguration.",
    },
    payments: {
      title: "Betalingsmetoder",
      desc: "Håndter betalingsmetoder til abonnementer.",
      none: "Du har ingen gemte betalingsmetoder.",
      encrypted: "Dine betalingsoplysninger er krypteret og sikkert lagret.",
    },
  },
  setupAlerts: {
    title: "Opsæt bilalarmer",
    subtitle: "Opsæt din Telegram-bot for at få alarmer om drømmebilen",
    basicPlan: "Basisplan",
    baseTitle: "79,99 €/måned",
    button: "Start bilalarmstjeneste",
    cancel: "Opsig når som helst",
    toasts: {
      terms: {
        title: "Vilkår ikke accepteret",
        description: "Du skal acceptere brugervilkårene for at fortsætte",
      },
      success: {
        title: "Abonnement oprettet",
        description: "Dit abonnement er blevet oprettet succesfuldt",
      },
      error: {
        title: "Fejl ved oprettelse af abonnement",
      },
      contactBot: {
        title: "Botkontakt påkrævet",
        description:
          "For at modtage bilalarmer skal du starte en samtale med vores Telegram-bot og sende en besked. Følg instruktionerne nedenfor.",
      },
    },
  },
  loginPrompt: {
    title: "Log ind påkrævet",
    description:
      "Du skal være logget ind for at fortsætte. Log ind eller tilmeld dig.",
    register: "Tilmeld dig",
    login: "Log ind",
  },
  waitlistPrompt: {
    title: "Tilmeld venteliste",
    description:
      "Vi er i øjeblikket fuldt booket. Tilmeld dig ventelisten for at blive underrettet, når en plads bliver ledig.",
    button: "Tilmeld venteliste",
  },
  subscription: {
    title: "Abonnementsdetaljer",
    subTitle: "Rediger abonnementsdetaljer nedenfor",
    error: "Tilbage til dashboard",
    notFound: "Abonnement ikke fundet",
    notFoundSub: "Tilbage til dashboard",
    description:
      "Du kan sætte abonnementet på pause når som helst. Når det er på pause, stopper alarmerne indtil genaktivering.",
    form: {
      status: {
        label: "Status",
        placeholder: "Vælg status",
        active: "Aktiv",
        paused: "På pause",
      },
    },
    actions: {
      save: "Gem ændringer",
      back: "Tilbage",
    },
    toasts: {
      success: {
        title: "Abonnement opdateret",
        description:
          "Dit abonnement for {{brand}} {{model}} er blevet opdateret succesfuldt",
      },
      priceError: {
        title: "Kan ikke opdatere abonnement",
        description:
          "Du kan ikke sætte på pause og opdatere prisen på abonnementet samtidigt. Vælg én af delene.",
      },
      error: {
        title: "Fejl ved opdatering af abonnement",
      },
    },
  },
  about: {
    title: "Om Amiquus",
    description:
      "Vi revolutionerer søgningen efter den perfekte brugte bil med avanceret overvågningsteknologi",
    meta: {
      title: "Om os | Amiquus - Bilannonceovervågningstjeneste",
      description:
        "Lær mere om Amiquus, vores mission og teamet bag den smarte bilannonceovervågningstjeneste.",
    },
    story: {
      heading: "Vores historie",
      paragraphs: [
        "Amiquus startede i 2023, da vores grundlægger Alex brugte måneder på at opdatere sider på jagt efter en sjælden model til en god pris. Efter missede muligheder indså han, at der måtte være en bedre måde.",
        "Med et lille team af udviklere og bilentusiaster byggede Alex et system til at overvåge flere sider samtidigt og sende øjeblikkelige alarmer.",
        "Projektet voksede hurtigt, og i begyndelsen af 2025 blev Amiquus en tjeneste for alle. I dag hjælper vi købere over hele landet med at spare tid og finde bedre tilbud.",
      ],
    },
    mission: {
      heading: "Vores mission",
      items: [
        {
          title: "Spar tid",
          description:
            "Eliminer behovet for konstant at opdatere flere sider med automatiseret søgning og rettidige alarmer.",
        },
        {
          title: "Find bedre tilbud",
          description:
            "Vær den første til at vide om fantastiske tilbud og få et forspring i et konkurrencepræget marked.",
        },
        {
          title: "Køb med tillid",
          description:
            "Tag informerede beslutninger med fuldt overblik over flere pålidelige platforme.",
        },
      ],
    },
    team: {
      heading: "Vores team",
      members: [
        {
          name: "Alex Morgan",
          role: "Grundlægger og CEO",
          bio: "Tidligere programmør med passion for biler og innovative løsninger.",
        },
        {
          name: "Sarah Chen",
          role: "Teknisk direktør",
          bio: "Data science-ekspert, specialiseret i web scraping.",
        },
        {
          name: "Marcus Lee",
          role: "Udviklingsleder",
          bio: "Full-stack ingeniør med erfaring i højtydende alarmsystemer.",
        },
        {
          name: "Elena Rodriguez",
          role: "Kundesupport",
          bio: "Tidligere bilforhandler, dedikeret til at hjælpe med at finde det perfekte køretøj.",
        },
      ],
    },
    join: {
      heading: "Bliv en del af teamet",
      description:
        "Vi søger altid passionerede talenter inden for teknologi og revolutionering af bilkøb.",
      cta: "Se åbne stillinger",
    },
    questions: {
      heading: "Har du spørgsmål?",
      description:
        "Lær mere om, hvordan tjenesten fungerer, priser eller kontakt support.",
      links: {
        faq: "Besøg FAQ",
        pricing: "Se priser",
        support: "Kontakt support",
      },
    },
  },
  terms: {
    metaTitle: "Brugervilkår | Amiquus",
    metaDescription:
      "Læs Amiquus brugervilkår, der regulerer brugen af bilannonceovervågningstjenesten.",
    title: "Brugervilkår",
    lastUpdated: "Sidst opdateret: 21. maj 2025.",
    sections: {
      "1": {
        id: "agreement",
        heading: "Accept af vilkår",
        paragraphs: [
          "Disse brugervilkår udgør en juridisk bindende aftale mellem dig og Amiquus vedrørende adgang til og brug af vores side og tjenester.",
          "Ved at få adgang til eller bruge vores tjenester accepterer du disse vilkår. Hvis du ikke accepterer nogen del, må du ikke bruge tjenesterne.",
        ],
        list: [],
      },
      "2": {
        id: "changes",
        heading: "Ændringer i vilkårene",
        paragraphs: [
          "Vi forbeholder os retten til at ændre eller erstatte disse vilkår efter eget skøn. Hvis en ændring er væsentlig, giver vi mindst 30 dages forudgående varsel, før de nye vilkår træder i kraft.",
          "Ved at fortsætte med at bruge tjenesten efter ændringerne træder i kraft, accepterer du de reviderede vilkår. Hvis du ikke accepterer de nye vilkår, skal du stoppe med at bruge tjenesten.",
        ],
        list: [],
      },
      "3": {
        id: "account",
        heading: "Kontoforhold",
        paragraphs: ["For at bruge vores tjenester skal du:"],
        list: [
          "Være over 18 år",
          "Fuldføre registreringsprocessen",
          "Give nøjagtige, fuldstændige og aktuelle oplysninger",
          "Være ansvarlig for sikkerheden af din konto og adgangskode",
          "Være ansvarlig for al aktivitet på din konto",
          "Med det samme rapportere uautoriseret brug eller misbrug af kontoen",
        ],
      },
      "4": {
        id: "payment",
        heading: "Betalingsvilkår",
        paragraphs: [
          "Amiquus tilbyder abonnementsbaserede tjenester med disse vilkår:",
        ],
        list: [
          "Alle priser er eksklusive skatter, som tilføjes, hvis relevant",
          "Abonnementspriser kan ændres med 30 dages forudgående varsel",
          "Abonnementer fornyes automatisk, medmindre opsagt før næste faktureringscyklus",
          "Refusioner håndteres fra sag til sag i henhold til refusionspolitikken",
          "Vi bruger Stripe til sikker betalingsbehandling, alle betalingsoplysninger lagres hos Stripe",
        ],
      },
      "5": {
        id: "capacity",
        heading: "Kapacitetsbegrænsninger",
        paragraphs: [
          "For at sikre tjenestekvalitet begrænser vi antallet af aktive abonnementer til 30. Når grænsen er nået:",
        ],
        list: [
          "Nye brugere kan tilmelde sig ventelisten",
          "Plads på ventelisten bestemmes efter ankomstrækkefølge",
          "Når en plads bliver ledig, underretter vi brugere i rækkefølge",
          "Vi forbeholder os retten til at ændre kapacitetsgrænser",
        ],
      },
      "6": {
        id: "scraping",
        heading: "Web scraping-begrænsninger",
        paragraphs: [
          "Vores tjeneste henter og behandler data fra flere sider. Ved at bruge tjenesten anerkender du:",
        ],
        list: [
          "Amiquus respekterer brugervilkårene for de overvågede sider",
          "Vi bruger rate limiting og etiske dataindsamlingsmetoder",
          "Tilgængeligheden af visse sider kan ændres",
          "Vi garanterer ikke fuldstændighed eller aktualitet af indsamlede data",
        ],
      },
      "7": {
        id: "intellectual",
        heading: "Intellektuel ejendom",
        paragraphs: [
          "Amiquus-tjenesten, inklusive originalt indhold, funktioner og funktionalitet, er og forbliver eksklusiv ejendom af Amiquus. Tjenesten er beskyttet af ophavsret, varemærker og andre love.",
          "Du må ikke bruge vores varemærker og designs uden forudgående skriftlig tilladelse fra Amiquus.",
        ],
        list: [],
      },
      "8": {
        id: "termination",
        heading: "Opsigelse",
        paragraphs: [
          "Vi kan opsige eller suspendere kontoen øjeblikkeligt, uden forudgående varsel, af enhver grund, inklusive brud på vilkårene.",
          "Ved opsigelse ophører retten til at bruge tjenesten øjeblikkeligt. Hvis du ønsker at opsige kontoen, skal du stoppe med at bruge tjenesten eller kontakte os for fjernelse.",
        ],
        list: [],
      },
      "9": {
        id: "limitations",
        heading: "Ansvarsbegrænsning",
        paragraphs: [
          "Amiquus, dets direktører, medarbejdere, partnere eller leverandører er ikke ansvarlige for indirekte, tilfældige, særlige eller strafbare skader, inklusive tab af fortjeneste, data eller andre immaterielle tab, der opstår fra:",
        ],
        list: [
          "Adgang til eller manglende evne til at få adgang til tjenesten",
          "Indhold eller adfærd fra tredjeparter på tjenesten",
          "Indhold opnået fra tjenesten",
          "Uautoriseret adgang til eller ændring af dine data",
        ],
      },
      "10": {
        id: "disclaimer",
        heading: "Ansvarsfraskrivelse",
        paragraphs: [
          'Brug af tjenesten sker på egen risiko. Tjenesten leveres "SOM DEN ER" og "SOM TILGÆNGELIG". Vi garanterer ikke, at tjenesten vil være uafbrudt, rettidig, sikker eller fejlfrí.',
          "Vi garanterer ikke, at resultaterne af brugen af tjenesten vil være nøjagtige eller pålidelige.",
        ],
        list: [],
      },
      "11": {
        id: "cookies",
        heading: "Cookiepolitik",
        paragraphs: [
          "Vores cookiepolitik forklarer, hvad cookies er, hvordan vi bruger dem, hvordan tredjeparter bruger dem og dine valg. Se cookie-afsnittet i vores privatlivspolitik.",
        ],
        list: [],
      },
      "12": {
        id: "governing-law",
        heading: "Gældende lov",
        paragraphs: [
          "Disse vilkår styres af og fortolkes i overensstemmelse med lovene i Amerikas Forenede Stater, uden hensyn til lovkonflikter.",
          "Hvis vi ikke udøver en rettighed eller bestemmelse, udgør det ikke en fraskrivelse. Hvis en domstol erklærer en bestemmelse ugyldig, forbliver de resterende bestemmelser i kraft.",
        ],
        list: [],
      },
      "13": {
        id: "contact",
        heading: "Kontakt os",
        paragraphs: ["Hvis du har spørgsmål om vilkårene, kontakt os:"],
        list: [
          "Via e-mail: legal@amiquus.com",
          "Via kontaktsiden på vores side",
        ],
      },
    },
  },
  privacy: {
    metaTitle: "Privatlivspolitik | Amiquus",
    metaDescription:
      "Lær, hvordan Amiquus håndterer dine personoplysninger, rettigheder og dataindsamlingspraksis.",
    title: "Privatlivspolitik",
    lastUpdated: "Sidst opdateret: 21. maj 2025.",
    sections: {
      "0": {
        id: "introduction",
        heading: "Introduktion",
        paragraphs: [
          "Velkommen til Amiquus. Vi respekterer dit privatliv og er forpligtet til at beskytte dine personoplysninger. Denne privatlivspolitik forklarer, hvordan vi håndterer dine data, dine rettigheder og hvordan loven beskytter dig.",
        ],
      },
      "1": {
        id: "data-we-collect",
        heading: "Data vi indsamler",
        paragraphs: [
          "Vi indsamler forskellige typer data til forskellige formål for at levere og forbedre tjenesten:",
        ],
        list: [
          "Personoplysninger: e-mailadresse, fornavn, efternavn og profilbillede (hvis leveret via tredjepart).",
          "Kontooplysninger: loginoplysninger og kontoindstillinger.",
          "Brugsdata: information om, hvordan du bruger siden og tjenesterne.",
          "Søgekriterier: køretøjskriterier, du indstiller til overvågning (mærke, model, pris osv.).",
          "Telegram-data: hvis du vælger Telegram-alarmer, gemmer vi dit chat-ID og bot-token.",
          "Betalingsdata: ved køb indsamler vores betalingsbehandler de nødvendige data. Amiquus gemmer ikke fulde kreditkortdata.",
        ],
      },
      "2": {
        id: "how-we-use-data",
        heading: "Hvordan vi bruger dine data",
        paragraphs: ["Vi bruger dine personoplysninger til at:"],
        list: [
          "Levere og vedligeholde tjenesten",
          "Underrette om ændringer i tjenesten",
          "Tillade interaktive funktioner",
          "Levere kundesupport",
          "Indsamle analyse for at forbedre tjenesten",
          "Overvåge brugen af tjenesten",
          "Opdage, forhindre og løse tekniske problemer",
          "Behandle betalinger og forhindre svindel",
          "Sende annoncer, der matcher dine kriterier",
        ],
      },
      "3": {
        id: "data-storage",
        heading: "Datalagring og sikkerhed",
        paragraphs: [
          "Vi anvender passende sikkerhedsforanstaltninger for at beskytte mod uautoriseret adgang, ændring eller ødelæggelse af data. Alle data gemmes på sikre servere med kryptering i transit og i hvile.",
          "Vi opbevarer dine personoplysninger kun så længe som nødvendigt for formålene i denne politik, inklusive for at overholde juridiske, regulatoriske eller regnskabsmæssige krav.",
        ],
      },
      "4": {
        id: "gdpr",
        heading: "Dine rettigheder under GDPR",
        paragraphs: [
          "Hvis du er bosiddende i Det Europæiske Økonomiske Samarbejdsområde (EØS), har du visse databeskyttelsesrettigheder. Amiquus bestræber sig på at tillade rettelse, ændring, sletning eller begrænsning af brugen af dine data.",
          "Du har følgende rettigheder:",
        ],
        list: [
          "Ret til adgang, opdatering eller sletning af data",
          "Ret til rettelse",
          "Ret til indsigelse",
          "Ret til begrænsning",
          "Ret til dataportabilitet",
          "Ret til at tilbagekalde samtykke",
        ],
      },
      "5": {
        id: "cookies",
        heading: "Cookiepolitik",
        paragraphs: [
          "Cookies er små data, der gemmes på din enhed. Vi bruger dem til at:",
        ],
        list: [
          "Holde sessionen logget ind",
          "Forstå sidens brug",
          "Gemme præferencer",
          "Personliggøre oplevelsen",
        ],
      },
      "6": {
        id: "third-party",
        heading: "Tredjeparter",
        paragraphs: [
          "Vi kan engagere tredjeparter til at udføre tjenesten, udføre opgaver eller analysere brug.",
          "Disse tredjeparter inkluderer:",
        ],
        list: [
          "Betalingsbehandlere (Stripe)",
          "Analyseleverandører",
          "Kundesupporttjenester",
          "Hosting- og cloudleverandører",
        ],
        paragraphs2: [
          "Disse tredjeparter har kun adgang til dine data for at udføre opgaver og må ikke videregive eller bruge dem til andre formål.",
        ],
      },
      "7": {
        id: "changes",
        heading: "Ændringer i privatlivspolitikken",
        paragraphs: [
          "Vi kan opdatere privatlivspolitikken fra tid til anden. Vi underretter dig ved at offentliggøre den nye politik på denne side og opdatere datoen 'Sidst opdateret'.",
          "Vi anbefaler, at du regelmæssigt gennemgår politikken. Ændringer træder i kraft ved offentliggørelse.",
        ],
      },
      "8": {
        id: "contact",
        heading: "Kontakt os",
        paragraphs: [
          "Hvis du har spørgsmål om privatlivspolitikken, kontakt os:",
        ],
        list: [
          "Via e-mail: privacy@amiquus.com",
          "Via kontaktsiden på vores side",
        ],
      },
    },
  },
  faqs: {
    metaTitle: "FAQ | Amiquus",
    metaDescription:
      "Find svar på de mest almindelige spørgsmål om Amiquus bilannonceovervågningstjeneste.",
    title: "Ofte stillede spørgsmål",
    subtitle:
      "Hurtige svar på almindelige spørgsmål om vores bilannonceovervågningstjeneste",
    general: {
      heading: "Generelle spørgsmål",
      whatIs: {
        question: "Hvad er Amiquus?",
        answer:
          "Amiquus er en tjeneste, der overvåger flere køretøjssider, der matcher dine kriterier. Når der er et match, får du en øjeblikkelig alarm via Telegram.",
      },
      howItWorks: {
        question: "Hvordan fungerer det?",
        answer: [
          "Indstil søgekriterier (mærke, model, pris osv.)",
          "Vælg sider at overvåge",
          "Forbind Telegram for alarmer",
          "Vores system overvåger kontinuerligt de valgte sider",
          "Ved match får du en øjeblikkelig Telegram-alarm med detaljer og link",
        ],
      },
      whichWebsites: {
        question: "Hvilke sider overvåger I?",
        answerIntro: "Vi overvåger i øjeblikket følgende store platforme:",
        list: [
          "AutoTrader",
          "Cars.com",
          "CarGurus",
          "TrueCar",
          "Facebook Marketplace (via URL)",
          "Craigslist",
          "eBay Motors",
        ],
        outro: "Vi tilføjer løbende nye platforme for bredere dækning.",
      },
    },
    subscription: {
      heading: "Spørgsmål om abonnement",
      cost: {
        question: "Hvor meget koster abonnementet?",
        answer: [
          "Priser starter ved 79,99 €/måned for at overvåge én side med opdateringer hver 6. time. Ekstra sider koster 4,99 € pr. måned. Opgrader for hurtigere alarmer.",
          "For prisdetaljer, se prisafsnittet på forsiden.",
        ],
      },
      cancel: {
        question: "Hvordan opsiger jeg abonnementet?",
        stepsIntro: "Du kan opsige abonnementet når som helst via profilsiden:",
        steps: [
          "Log ind på din konto",
          'Gå til siden "Profil"',
          'Vælg fanen "Abonnementer"',
          'Klik på "Opsig abonnement" ved siden af det abonnement, du vil opsige',
        ],
        note: "Abonnementet forbliver aktivt indtil udgangen af den nuværende faktureringsperiode.",
      },
      multiple: {
        question: "Kan jeg have flere abonnementer til forskellige modeller?",
        answer:
          "Ja, du kan oprette flere abonnementer under én konto. Hver kan overvåge forskellige modeller eller mærker. Perfekt, hvis du søger flere køretøjer eller hjælper venner.",
      },
      limit: {
        question: "Hvorfor er der en grænse for abonnenter?",
        intro: "Vi begrænser tjenesten til 30 aktive abonnenter for at:",
        list: [
          "Højeste tjenestekvalitet og datanøjagtighed",
          "Personlig support til hver abonnent",
          "Hurtigere alarmlevering under spidsbelastningstider",
          "Etisk scraping, der ikke overbelaster målsider",
        ],
        outro:
          "Hvis vi er fuldt booket, tilmeld dig ventelisten, så underretter vi dig, når en plads bliver ledig.",
      },
    },
    technical: {
      heading: "Tekniske spørgsmål",
      telegram: {
        question: "Hvordan opsætter jeg Telegram-alarmer?",
        stepsIntro: "For at opsætte Telegram-alarmer:",
        steps: [
          "Opret en Telegram-bot via BotFather (instruktioner i dashboardet)",
          "Kopier bot-token og chat-ID",
          'Indtast oplysningerne i kontoindstillingerne under "Alarmindstillinger"',
          'Test forbindelsen med knappen "Send testbesked"',
        ],
        note: "Detaljerede instruktioner med skærmbilleder tilgængelige under abonnementsopsætning.",
      },
      frequency: {
        question: "Hvor ofte får jeg alarmer?",
        intro: "Alarmfrekvensen afhænger af:",
        list: [
          "Det valgte frekvenspakke (fra hver time til hvert minut)",
          "Antallet af nye annoncer, der matcher dine kriterier",
          "Markedsaktiviteten for det valgte mærke/model",
        ],
        outro: "Du får kun alarmer, når nye annoncer matcher dine kriterier.",
      },
      privacy: {
        question: "Hvordan beskyttes mit privatliv?",
        intro: "Vi tager privatliv alvorligt og bruger:",
        list: [
          "Datakryptering i transit og i hvile",
          "Sikre betalinger via Stripe",
          "Ingen datadeling med tredjeparter",
          "Du kan anmode om eller slette dine data når som helst",
        ],
        outro: "Mere information i vores fulde privatlivspolitik.",
      },
    },
    support: {
      heading: "Har du stadig spørgsmål?",
      description: "Hvis du ikke fandt svaret, står vores support klar!",
      button: "Kontakt support",
    },
  },
  waitlist: {
    metaTitle: "Tilmeld venteliste - Amiquus",
    metaDescription:
      "Tilmeld dig Amiquus venteliste og bliv underrettet, når abonnementer er tilgængelige.",
    title: "Tilmeld dig vores venteliste",
    subtitle:
      "På grund af høj efterspørgsel begrænser vi antallet af aktive abonnementer for at garantere den bedste kvalitet.",
    limited: {
      heading: "Begrænset tilgængelighed",
      description: "Vi begrænser systemet til kun 30 aktive abonnenter for at:",
      points: [
        "Exceptionel pålidelighed og scraping-hastighed for alle brugere",
        "Mindre risiko for blokering fra sider",
        "Personlig support til hver abonnent",
        "Retfærdig serverressourcefordeling期货",
      ],
      available:
        "{{remaining}} abonnementspladser af {{capacity}} er i øjeblikket tilgængelige.",
      full: "Alle abonnementspladser er i øjeblikket optaget. Tilmeld dig ventelisten for at blive underrettet, når en plads bliver ledig.",
    },
    success: {
      title: "Du er på ventelisten!",
      description:
        "Vi underretter dig, så snart en abonnementsplads bliver ledig",
      message:
        "Tak for din interesse i Amiquus! Vi har tilføjet dig til ventelisten og kontakter dig, så snart en plads er tilgængelig.",
      button: "Tilbage til forsiden",
    },
    cantJoin: {
      title: "Tilmeld venteliste",
      description:
        "Vi underretter dig, så snart en abonnementsplads bliver ledig",
    },
    form: {
      firstName: {
        label: "Fornavn",
        placeholder: "Jens",
      },
      lastName: {
        label: "Efternavn",
        placeholder: "Hansen",
      },
      email: {
        label: "E-mail",
        placeholder: "jens.hansen@eksempel.dk",
        description:
          "Vi bruger denne e-mailadresse til at underrette dig, når en plads bliver ledig",
      },
      submit: "Tilmeld venteliste",
      submitting: "Sender...",
    },
  },
  support: {
    metaTitle: "Support | Amiquus - Hjælpecenter",
    metaDescription:
      "Få hjælp til din Amiquus-konto, abonnement eller alarmer. Udforsk hjælpecentret eller kontakt support.",
    title: "Supportcenter",
    subtitle:
      "Find svar på almindelige spørgsmål eller kontakt vores supportteam",
    emailSupport: {
      title: "E-mail support",
      description: "Send os en e-mail, og vi svarer inden for 24 timer",
      email: "support@amiquus.com",
    },
    faqHeading: "Ofte stillede spørgsmål",
    faqs: {
      telegram: {
        question: "Hvordan opsætter jeg Telegram-alarmer?",
        intro: "For at opsætte Telegram-alarmer følg disse trin:",
        steps: [
          "Opret en Telegram-bot via BotFather (instruktioner i dashboardet)",
          "Kopier API-token og chat-ID",
          'Indtast oplysningerne i kontoindstillingerne under "Alarmindstillinger"',
          'Test forbindelsen med knappen "Send testbesked"',
        ],
        outro:
          "Hvis du har brug for mere hjælp, er en detaljeret guide tilgængelig i dit dashboard.",
      },
      updates: {
        question: "Hvor ofte opdateres annoncerne?",
        answer:
          "Opdateringsfrekvensen afhænger af abonnementspakken. Basisplaner får opdateringer hver 6. time, premiumplaner kan være hver 30. minut. Du kan se og ændre den nuværende frekvens i abonnementsindstillingerne.",
      },
      facebook: {
        question: "Kan jeg overvåge Facebook Marketplace?",
        answer:
          "Ja, vi understøtter overvågning af Facebook Marketplace. Angiv URL'en til søgeresultatsiden med anvendte filtre. Systemet overvåger derefter den søgning for nye annoncer, der matcher dine kriterier.",
      },
      cancel: {
        question: "Hvordan opsiger jeg abonnementet?",
        answer:
          'Du kan opsige abonnementet når som helst via profilsiden. Klik på fanen "Abonnementer", find abonnementet og klik på "Opsig abonnement". Tjenesten forbliver aktiv indtil udgangen af faktureringsperioden.',
      },
      full: {
        question: "Hvad sker der, hvis alle pladser er optaget?",
        answer:
          "For at opretholde høj tjenestekvalitet begrænser vi antallet af aktive abonnementer. Hvis alle pladser er optaget, kan du tilmelde dig ventelisten. Når en plads bliver ledig, underretter vi dig, og du har prioritet over offentligheden.",
      },
    },
    stillNeedHelp: {
      heading: "Har du brug for mere hjælp?",
      description:
        "Hvis du ikke fandt svaret, kontakt vores supportteam. Vi er her for at hjælpe!",
      button: "Kontakt support",
    },
  },
  notFound: {
    title: "404 Side ikke fundet",
    message: "Glemte du at tilføje siden til routeren?",
  },
  emails: {
    verification: {
      subject: "Amiquus e-mail bekræftelseskode",
      greeting: "Hej,",
      message: "Brug følgende kode til at fuldføre din registrering:",
      expiration: "Koden udløber om 10 minutter.",
    },
    invoice: {
      success: {
        subject: "Betaling modtaget Amiquus – Faktura #",
        h2Message: "Din Amiquus-abonnementsbetaling lykkedes!",
        greeting: "Hej,",
        paymentMessage: "Vi har modtaget din betaling på",
        downloadMessage:
          "Du kan se eller downloade fakturaen via følgende link:",
        viewInvoice: "Se faktura",
        invoiceNumber: "Faktura #:",
      },
      pending: {
        subjectA: "Betaling afventer – Faktura",
        subjectB: "for dit Amiquus-abonnement",
        h2Message:
          "Handling påkrævet: Fuldfør betalingen for dit Amiquus-abonnement",
        greeting: "Hej,",
        messageA: "Din faktura",
        messageB:
          "er stadig ubetalt. Fuldfør betalingen på for at aktivere abonnementet",
        paymentMessage: "Du kan betale sikkert via følgende link:",
        payInvoice: "Betal faktura",
        ignoreEmail:
          "Hvis du allerede har betalt, kan du ignorere denne e-mail.",
      },
      failed: {
        subject: "Betaling mislykkedes – Faktura",
        message: "Vi kunne ikke behandle din seneste betaling (forsøg",
        attemptsA:
          "Vi prøver igen snart. Ingen handling påkrævet i øjeblikket.",
        attemptsB:
          "Vi har forsøgt at debitere din betalingsmetode tre gange, men alle forsøg mislykkedes.",
        attemptsC:
          "Som følge heraf er dit abonnement <strong>midlertidigt sat på pause</strong>. Du modtager ingen opdateringer før genaktivering.",
        attemptsD:
          "Opdater din betalingsmetode og genaktiver abonnementet fra profilen:",
        viewInvoice: "Se faktura",
        managePayment: "Håndter betalingsmetoder",
      },
    },
    waitlist: {
      subject: "Du er på Amiquus venteliste!",
      h2Message: "Du er på listen!",
      hi: "Hej",
      message:
        "Tak for at tilmelde dig Amiquus ventelisten. Vi underretter dig, så snart en plads bliver ledig.",
      anyQuestions:
        "Hvis du har spørgsmål, tøv ikke med at svare på denne e-mail.",
    },
    common: {
      thanksMessage: "Tak for at vælge Amiquus!",
      signature: "Med venlig hilsen,<br/>Amiquus-teamet",
      team: "— Amiquus-teamet",
      needHelp: "Har du brug for hjælp?",
      hello: "Hej",
    },
  },
};

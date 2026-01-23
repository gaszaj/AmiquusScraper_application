// === nb.ts === Norsk
export const nb = {
  navigations: {
    features: "Funksjoner",
    how: "Hvordan det fungerer",
    pricing: "Priser",
    getAlerts: "Få varsler",
    waitlist: "Venteliste",
    faq: "FAQ",
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
  hero: {
    label: "Overvåk brukte bilannonser i sanntid!",
    title: "Gå aldri glipp av det perfekte tilbudet på din bil",
    subtitle:
      "Amiquus varsler deg umiddelbart når drømmebilen dukker opp på flere sider. Få varsler via Telegram så snart det er et treff.",
    button1: "Sett opp varsler",
    button2: "Se hvordan det fungerer",
    trustIndicators: {
      websites: "Over 15 sider",
      realtime: "Sanntidsvarsler",
      noSetup: "Ingen installasjon",
      cancelAnytime: "Avslutt når som helst",
    },
  },
  limited: {
    full: {
      title: "Abonnementsgrense nådd",
      description:
        "Vi har nådd kapasiteten på 30 aktive abonnenter. Bli med på ventelisten for å bli varslet når en plass blir ledig.",
      buttonText: "Bli med på ventelisten",
    },
    limited: {
      title: "Begrenset tilgjengelighet",
      description:
        "Kun {{remaining}} av {{capacity}} plasser igjen. Abonner nå før de er borte!",
      buttonText: "Start nå",
    },
    available: {
      title: "Abonnementer tilgjengelige",
      description:
        "{{active}} av {{capacity}} abonnementer er for øyeblikket aktive. Masser av plass til deg!",
      buttonText: "Start nå",
    },
  },
  features: {
    heading: "Hvorfor velge Amiquus?",
    subheading:
      "Spar tid og gå aldri glipp av den perfekte bilen med vår automatiserte tjeneste.",
    multiSite: {
      title: "Multi-side overvåking",
      description:
        "Overvåk flere bilsider samtidig uten å måtte sjekke hver enkelt manuelt.",
    },
    notifications: {
      title: "Umiddelbare varsler",
      description:
        "Få umiddelbare varsler via Telegram når en bil matcher dine kriterier.",
    },
    filters: {
      title: "Tilpassbare filtre",
      description:
        "Sett opp presise kriterier: merke, modell, år, kilometerstand, pris – finn nøyaktig det du vil ha.",
    },
    frequency: {
      title: "Justerbar frekvens",
      description:
        "Velg hvor ofte nye annonser sjekkes – fra hver time til sanntid.",
    },
    languages: {
      title: "Flerspråklig støtte",
      description:
        "Få varsler på ditt foretrukne språk for enklere forståelse av annonser.",
    },
    account: {
      title: "Enkel kontohåndtering",
      description:
        "Håndter flere søkeprofiler og endre abonnementet ditt med noen få klikk.",
    },
  },
  howItWorks: {
    title: "Hvordan Amiquus fungerer",
    subtitle:
      "Sett opp én gang og la systemet vårt finne det perfekte tilbudet for deg",
    whyTitle: "Hvorfor velge Amiquus?",
    steps: {
      preferences: {
        title: "Sett opp dine preferanser",
        description:
          "Velg merker, modeller, prisklasser og andre kriterier som interesserer deg.",
      },
      telegram: {
        title: "Koble til Telegram",
        description:
          "Koble til din Telegram-konto for å få umiddelbare varsler om nye annonser.",
      },
      notifications: {
        title: "Få umiddelbare varsler",
        description:
          "Få beskjed med en gang når en matchende bil dukker opp på en side.",
      },
      findCar: {
        title: "Finn din perfekte bil",
        description:
          "Vær den første til å vite om nye annonser og sikre de beste tilbudene.",
      },
    },
    features: [
      "Overvåk over 15 sider samtidig",
      "Tilpassbare søkekriterier med avansert filtrering",
      "Sanntidsvarsler via Telegram",
      "Automatiske varsler for prisreduksjoner og nye annonser",
      "Enkel oppsettsprosess på under 5 minutter",
    ],
    setAlerts: "Sett opp varsler",
    notificationMockup1: {
      title: "Ny match funnet!",
      description: "BMW 3-serie, 2019, 32 500 € – Nylig publisert på AutoTrader",
    },
    notificationMockup2: {
      title: "Telegram-varsel",
      description:
        "Mercedes C-klasse, 2020, 30 000 km – Pris redusert med 2 000 €",
    },
  },
  pricing: {
    title: "Enkle og transparente priser",
    subtitle:
      "Prisene våre er basert på dine behov. Start med basisplanen og tilpass.",
    baseTitle: "Basisplan: 79,99 €/måned",
    includedTitle: "Inkludert:",
    includedFeatures: [
      "Overvåking av én side",
      "Oppdateringer hver time",
      "Ubegrensede filtre",
      "Varsler via Telegram",
    ],
    addonsTitle: "Tillegg:",
    addons: [
      { name: "Hver ekstra side", price: 4.99 },
      { name: "Oppdateringer hver 30. minutt", price: 2.99 },
      { name: "Oppdateringer hver 15. minutt", price: 5.99 },
      { name: "Oppdateringer hver 5. minutt", price: 9.99 },
      { name: "Oppdateringer hvert minutt", price: 14.99 },
    ],
    footerNote:
      "Alle planer inkluderer ubegrensede søkeprofiler og enkel abonnementshåndtering.",
    button: "Start nå",
  },
  signup: {
    heading: "Opprett bilvarsel",
    subheading:
      "Sett opp personlige varsler for bilannonser i noen enkle trinn.",
    cta: "Få varsler nå",
    waitlist: {
      message:
        "Vi er for øyeblikket fulle. Bli med på ventelisten for å bli varslet når en plass blir ledig.",
      cta: "Bli med på ventelisten",
    },
    toast: {
      success: {
        title: "Abonnement opprettet",
        description: "Ditt abonnement er opprettet vellykket",
      },
      error: {
        title: "Opprettelse av abonnement mislyktes",
        description:
          "Kunne ikke opprette abonnementet. Prøv igjen senere.",
      },
    },
  },
  payment: {
    toast: {
      success: {
        title: "Suksess",
        description: "Din betalingsmetode er satt opp vellykket.",
      },
      error: {
        title: "Feil",
        fallback: "En uventet feil oppstod. Prøv igjen.",
      },
    },
    button: {
      submit: "Sett opp betalingsmetode",
      processing: "Behandler...",
    },
  },
  alertSchema: {
    errors: {
      carBrand: "Bilmerke er påkrevd",
      carModel: "Bilmodell er påkrevd",
      fuelType: "Drivstofftype er påkrevd",
      priceMin: "Minimumspris må være et tall",
      priceMax: "Maksimumspris må være et tall",
      yearMin: "Minimum modellår må være gyldig",
      yearMax: "Maksimum modellår må være gyldig",
      maxKilometers: "Maksimum kilometerstand må være et tall",
      telegramUsername: "Telegram-brukernavn er påkrevd",
      telegramToken: "Telegram-bot-token er påkrevd",
      telegramChatId: "Telegram-chat-ID er påkrevd",
      websitesSelected: "Du må velge minst én side",
      notificationLanguage: "Varslingsspråk er påkrevd",
      facebookMarketplaceUrl:
        "Facebook Marketplace URL er påkrevd hvis Facebook er valgt",
    },
  },
  personalInfo: {
    heading: "Personlig informasjon",
    description:
      "Oppgi din personlige informasjon for å sette opp varsler riktig.",
    labels: {
      firstName: "Fornavn",
      lastName: "Etternavn",
      email: "E-postadresse",
    },
    placeholders: {
      firstName: "Ola",
      lastName: "Nordmann",
      email: "ola.nordmann@eksempel.no",
    },
    errors: {
      firstName: "Fornavn er påkrevd",
      lastName: "Etternavn er påkrevd",
      email: "Oppgi en gyldig e-postadresse",
    },
    actions: {
      login: "Logg inn eller registrer deg for å fortsette",
      continue: "Fortsett",
    },
  },
  websiteSelection: {
    heading: "Sidevalg",
    description:
      "Velg sidene å overvåke og ønsket oppdateringsfrekvens.",
    labels: {
      websites: "Sider å overvåke",
      facebookUrl: "Facebook Marketplace URL",
      updateFrequency: "Oppdateringsfrekvens",
    },
    placeholders: {
      frequency: "Velg frekvens",
    },
    help: {
      websites: "Velg en eller flere sider for å overvåke bilannonser.",
      facebookUrl:
        "Lim inn URL-en til søkeresultatene dine på Facebook Marketplace.",
      videoTitle: "Trenger du hjelp til å finne Facebook Marketplace-lenke?",
      videoDesc: "Se videoen nedenfor for trinn-for-trinn-instruksjoner.",
      updateFrequency:
        "Hvor ofte sjekker vi nye annonser? Høyere frekvenser kan koste mer.",
    },
    errors: {
      websites: "Du må velge minst én side",
      facebookUrl:
        "Facebook Marketplace URL er påkrevd hvis Facebook er valgt",
    },
    actions: {
      previous: "Forrige",
      continue: "Fortsett",
    },
  },
  carDetails: {
    heading: "Bildetaljer",
    description:
      "Angi detaljene for bilen du søker. Alle felt er valgfrie – la stå tomme for bredere resultater.",
    labels: {
      carBrand: "Bilmerke",
      carModel: "Bilmodell",
      fuelType: "Drivstofftype",
      priceMin: "Minimumspris",
      priceMax: "Maksimumspris",
      yearMin: "Minimum modellår",
      yearMax: "Maksimum modellår",
      maxKilometers: "Maksimum kilometerstand",
    },
    placeholders: {
      carBrand: "Velg merke",
      carModel: "Velg modell",
      carModelDisabled: "Velg merke først",
      fuelType: "Velg drivstofftype",
      priceMin: "Angi minimumspris",
      priceMax: "Angi maksimumspris",
      yearMin: "Angi minimum modellår",
      yearMax: "Angi maksimum modellår",
      maxKilometers: "Angi maksimum kilometerstand",
    },
    options: {
      noModelsAvailable: "Ingen modeller tilgjengelige",
    },
    errors: {
      carBrand: "Bilmerke er påkrevd",
      carModel: "Bilmodell er påkrevd",
      fuelType: "Drivstofftype er påkrevd",
      priceMin: "Minimumspris må være et tall",
      priceMax: "Maksimumspris må være et tall",
      yearMin: "Minimum modellår må være gyldig",
      yearMax: "Maksimum modellår må være gyldig",
      maxKilometers: "Maksimum kilometerstand må være et tall",
    },
    actions: {
      previous: "Forrige",
      continue: "Fortsett",
    },
  },
  telegram: {
    heading: "Telegram-konfigurasjon",
    description:
      "Sett opp Telegram-varsler ved å angi bot-token og chat-ID.",
    subHeading: "Sett opp din Telegram-bot",
    info: "Problemer med å opprette en Telegram-bot? Kontakt oss så hjelper vi deg.",
    contact: "Kontakt oss",
    instructions: {
      botTitle: "Hvordan få Telegram-bot-token:",
      botStep1: "Åpne Telegram og søk etter @BotFather",
      botStep2: "Send kommandoen /newbot",
      botStep3: "Følg instruksjonene for å opprette boten",
      botStep4: "Kopier token som BotFather gir deg",

      chatTitle: "Hvordan få ditt Telegram-chat-ID:",
      chatStep1: "Åpne Telegram og søk etter @userinfobot",
      chatStep2: "Send en vilkårlig melding til boten",
      chatStep3:
        "Boten svarer med din informasjon, inkludert chat-ID",
      chatStep4: "Kopier chat-ID (et tall)",
    },

    videoPrompt: "Trenger du hjelp til å sette opp bot-token og chat-ID?",
    videoDescription: "Se videoen nedenfor for trinn-for-trinn-instruksjoner.",

    labels: {
      token: "Telegram-bot-token",
      chatId: "Din Telegram-chat-ID",
      language: "Varslingsspråk",
      username: "Telegram-brukernavn",
    },

    placeholders: {
      token: "Angi din bot-token fra BotFather",
      chatId: "Angi din Telegram-chat-ID",
      language: "Velg språk for Telegram-meldinger",
      username: "Angi ditt Telegram-brukernavn",
    },
    usernameDescription:
      "Dette er brukernavnet på din Telegram-konto (uten @-tegnet).",
    examples: {
      token: "Eksempel: 5432109876:ABCDefGhIJklMNoPqrSTuvWXyz1234567890",
      chatId: "Få dette ved å sende en melding til @userinfobot på Telegram",
    },
    setupTitle: "Oppsettsinstruksjoner:",
    setupSteps: [
      'Åpne Telegram og søk etter "BotFather"',
      'Start en samtale med BotFather ved å klikke på "Start"',
      "Angi /newbot og følg instruksjonene for å opprette en ny bot",
      "Velg et navn til din bot",
      "Velg et brukernavn til boten (må ende med 'bot')",
      "Kopier API-token som BotFather gir deg",
      "Send en melding til din nye bot for å aktivere samtalen",
    ],
    chatIdTitle: "Hvordan få ditt Telegram-chat-ID:",
    chatIdSteps: [
      'Åpne Telegram og søk etter "userinfobot"',
      "Send en vilkårlig melding til boten",
      "Boten svarer med din informasjon, inkludert chat-ID",
      "Kopier ditt chat-ID",
    ],
    helpTitle: "Trenger du hjelp til å sette opp bot-token og chat-ID?",
    helpDescription: "Se videoen nedenfor for trinn-for-trinn-instruksjoner.",
    botTokenLabel: "Telegram-bot-token",
    botTokenPlaceholder: "Angi din bot-token fra BotFather",
    botTokenExample: "Eksempel: 5432109876:ABCDefGhIJklMNoPqrSTuvWXyz1234567890",
    chatIdLabel: "Din Telegram-chat-ID",
    chatIdPlaceholder: "Angi din Telegram-chat-ID",
    chatIdDescription: "Få dette ved å sende en melding til @userinfobot på Telegram",
    languageLabel: "Varslingsspråk",
    languagePlaceholder: "Velg språk for Telegram-meldinger",
    languages: {
      en: "Engelsk",
      de: "Tysk",
      fr: "Fransk",
      es: "Spansk",
      it: "Italiensk",
      nl: "Nederlandsk",
      sv: "Svensk",
      da: "Dansk",
      nb: "Norsk",
    },
    previewTitle: "Forhåndsvisning av Telegram-varsel",
    carAlertTitle: "Ny bilvarsel!",
    priceLabel: "Pris: {{price}}",
    kilometresLabel: "Kilometer: {{kms}}",
    locationLabel: "Sted: {{location}}",
    viewListing: "Se annonse →",
    errors: {
      token: "Telegram-bot-token er påkrevd",
      chatId: "Telegram-chat-ID er påkrevd",
      language: "Varslingsspråk er påkrevd",
      username: "Telegram-brukernavn er påkrevd",
    },

    actions: {
      previous: "Forrige",
      continue: "Fortsett",
    },
    contactBotInstruction:
      "Start en samtale med vår Telegram-bot ved å klikke på lenken nedenfor og sende en melding:",
    contactBotNote:
      "Dette er påkrevd for å motta bilvarsler. Hvis du er på datamaskin, skann QR-koden.",
    confirmContact: "Jeg har startet en samtale med boten og sendt en melding",
  },
  review: {
    title: "Oversikt over ditt abonnement",
    description:
      "Gjennomgå abonnementsdetaljer før betaling.",

    personal: {
      title: "Personlig informasjon",
      name: "Navn",
      email: "E-post",
    },

    monitoring: {
      title: "Overvåkningsinnstillinger",
      websites: "Sider",
      facebookUrl: "Facebook URL",
      updateFrequency: "Oppdateringsfrekvens",
    },

    specs: {
      title: "Bilspekifikasjoner",
      brand: "Merke",
      model: "Modell",
      fuelType: "Drivstofftype",
      yearRange: "År",
      mileage: "Kilometer (km)",
      price: "Pris (€)",
    },

    notification: {
      title: "Varslingsinnstillinger",
      telegram: "Telegram-bot",
      language: "Varslingsspråk",
    },

    summary: {
      title: "Abonnementsoversikt",
      base: "Basisabonnement",
      extraWebsites: "Ekstra sider",
      frequencyUpgrade: "Frekvensoppgradering",
      total: "Totalt (månedlig)",
    },

    terms: {
      checkbox: "Jeg godtar",
      tos: "Brukervilkår",
      privacy: "Personvernpolicy",
      note: "Ditt abonnement fornyes automatisk hver måned. Du kan avslutte når som helst.",
      error: "Du må godta brukervilkårene",
    },

    actions: {
      previous: "Forrige",
      submit: "Gå til betaling",
    },
  },
  faq: {
    title: "Ofte stilte spørsmål",
    subtitle: "Finn svar på de vanligste spørsmålene om vår tjeneste.",
    contactPrompt: "Har du fortsatt spørsmål?",
    contactLink: "Kontakt vår support",
    questions: [
      {
        question:
          "Hvor raskt får jeg varsler etter at en ny annonse er publisert?",
        answer:
          "Varslingshastigheten avhenger av valgt oppdateringsfrekvens. Med timeplan får du varsler innen en time etter publisering. For nesten umiddelbare varsler (innen få minutter), oppgrader til hyppigere planer.",
      },
      {
        question: "Kan jeg overvåke flere forskjellige biltyper samtidig?",
        answer:
          "Ja! Du kan opprette flere søkeprofiler med forskjellige kriterier. Hver profil teller som et separat abonnement, men du håndterer dem alle fra én konto.",
      },
      {
        question: "Hvilke sider støtter dere for øyeblikket?",
        answer:
          "Vi støtter for øyeblikket de store plattformene, inkludert Avto.net og Facebook Marketplace. Vi legger kontinuerlig til nye sider på forespørsel.",
      },
      {
        question: "Trenger jeg tekniske ferdigheter for Telegram-boten?",
        answer:
          "Nei! Vi gir detaljerte instruksjoner med tekst og video. De fleste brukere setter opp boten på under 5 minutter.",
      },
      {
        question:
          "Kan jeg endre søkekriteriene etter å ha satt opp abonnementet?",
        answer:
          "Ja, du kan endre kriteriene når som helst i dashbordet. Endringene trer i kraft umiddelbart.",
      },
      {
        question: "Hvordan avslutter jeg abonnementet?",
        answer:
          'Du kan avslutte abonnementet når som helst i "Abonnementer"-seksjonen i dashbordet. Tjenesten forblir aktiv til slutten av faktureringsperioden.',
      },
    ],
  },
  footer: {
    brandTitle: "Amiquus",
    brandDescription:
      "Din personlige assistent for å finne det perfekte brukte biltilbudet til rett tid.",
    quickLinks: "Hurtiglenker",
    features: "Funksjoner",
    pricing: "Priser",
    faq: "FAQ",
    getStarted: "Kom i gang",
    legal: "Juridisk",
    terms: "Brukervilkår",
    privacy: "Personvernpolicy",
    cookies: "Cookiepolicy",
    gdpr: "GDPR-overholdelse",
    contact: "Kontakt",
    email: "support@amiquus.com",
    telegram: "Kontakt oss på Telegram",
    copyright: "Alle rettigheter forbeholdt.",
    about: "Om oss",
    blog: "Blogg",
    careers: "Karrierer",
    support: "Support",
  },
  login: {
    title: "Logg inn på konto",
    description: "Angi e-post og passord for å få tilgang til dashbordet",
    emailLabel: "E-post",
    passwordLabel: "Passord",
    loginButton: "Logg inn",
    loggingIn: "Logger inn...",
    loginWithGoogle: "Logg inn med Google",
    or: "eller",
    noAccount: "Har du ingen konto?",
    registerLink: "Registrer deg",
    successTitle: "Innlogging vellykket",
    successMessage: "Du er logget inn vellykket.",
    errorTitle: "Innlogging mislyktes",
    genericError: "Sjekk dine opplysninger og prøv igjen.",
    errors: {
      invalidEmail: "Angi en gyldig e-postadresse",
      shortPassword: "Passordet må ha minst 6 tegn",
    },
  },
  register: {
    title: "Opprett konto",
    description: "Registrer deg og begynn å søke etter drømmebilen",
    google: "Registrer deg med Google",
    orContinue: "Eller fortsett med",
    firstName: "Fornavn",
    lastName: "Etternavn",
    username: "Brukernavn",
    email: "E-post",
    password: "Passord",
    confirmPassword: "Bekreft passord",
    termsNotice: "Jeg godtar",
    termsOfService: "Brukervilkår",
    privacyPolicy: "Personvernpolicy",
    createBtn: "Opprett konto",
    alreadyHave: "Har du allerede en konto?",
    login: "Logg inn",
    and: "og",
    toast: {
      missingFields: {
        title: "Manglende felter",
        desc: "Fyll ut alle påkrevde felter",
      },
      invalidUsername: {
        title: "Ugyldig brukernavn",
        desc: "Brukernavnet må være alfanumerisk og mellom 3 og 20 tegn",
      },
      passwordMismatch: {
        title: "Passordene matcher ikke",
        desc: "Sørg for at passordene matcher",
      },
      termsNotAccepted: {
        title: "Vilkår ikke godkjent",
        desc: "Du må godta brukervilkårene og personvernpolicyen for å fortsette",
      },
      success: {
        title: "Registrering vellykket",
        desc: "Velkommen til Amiquus! Du omdirigeres til e-postbekreftelse.",
      },
      failure: {
        title: "Registrering mislyktes",
        desc: "Sjekk dine opplysninger og prøv igjen",
      },
    },
  },
  verifyEmail: {
    title: "Bekreft e-post",
    description: "Vi har sendt en bekreftelseskode til din e-postadresse.",
    codeLabel: "Bekreftelseskode",
    verifyButton: "Bekreft e-post",
    updateEmailLabel: "Oppdater e-post",
    updateEmailButton: "Oppdater e-post",
    resendButton: "Send kode igjen",
    resendCountdown: "Du kan sende koden igjen om {{seconds}}s",
    footerNote: "Fikk du ingen kode? Sjekk søppelpostmappen.",
    toast: {
      verified: "E-post bekreftet",
      failed: "Bekreftelse mislyktes",
      resent: "Bekreftelseskode sendt igjen",
      error: "Feil",
      invalidEmail: "Ugyldig e-post",
      enterValidEmail: "Angi en gyldig e-postadresse",
      sameEmail: "Samme e-post",
      sameEmailDesc: "Den nye e-posten er identisk med den nåværende",
      emailUpdated: "E-post oppdatert",
    },
  },
  dashboardPayment: {
    add: "Legg til betalingsmetode",
    description:
      "Legg til et nytt kreditt- eller debetkort for abonnementsbetalinger.",
    processing: "Behandler...",
    errorTitle: "Feil ved tillegg av betalingsmetode",
    errorMessage: "En uventet feil oppstod",
    initError: {
      title: "Feil",
      description: "Kunne ikke initialisere betalingsinnstillinger",
    },
  },
  dashboard: {
    subscriptionCard: {
      years: "Årganger",
      priceRange: "Pris",
      websites: "Sider",
      updates: "Oppdateringer",
      language: "Språk",
      price: "Pris",
      edit: "Rediger",
      cancelAlert: "Avslutt varsel",
      cancelTitle: "Avslutt bilvarsel",
      cancelDescription:
        "Er du sikker på at du vil avslutte varselet for {{brand}} {{model}}? Dette stopper alle varsler, og du må sette opp varselet igjen.",
      keepMyAlert: "Behold varsel",
      confirmCancel: "Avslutt varsel",
    },
    paymentMethodCard: {
      expires: "Utløper",
      default: "Standard",
      setAsDefault: "Angi som standard",
      remove: "Fjern",
      setDefaultTitle: "Angi standard betalingsmetode",
      setDefaultDescription:
        "Vil du angi kortet {{brand}}, som slutter på {{last4}}, som standard betalingsmetode? Dette kortet vil bli brukt til alle fremtidige betalinger.",
      removeTitle: "Fjern betalingsmetode",
      removeDescription:
        "Er du sikker på at du vil fjerne kortet {{brand}}, som slutter på {{last4}}?",
      removeWarning:
        "Dette er din standard betalingsmetode, og fjerning kan påvirke aktive abonnementer.",
      cancel: "Avbryt",
      confirmRemove: "Fjern kort",
    },
  },
  profile: {
    tabs: {
      alerts: "Mine varsler",
      payments: "Betalingsmetoder",
    },
    sidebar: {
      memberSince: "Medlem siden",
      subscriptions: "Abonnementer",
      methods: "Betalingsmetoder",
      account: "Kontoinnstillinger",
      privacy: "Personvern og sikkerhet",
      logout: "Logg ut",
    },
    account: {
      title: "Kontoinnstillinger",
      desc: "Oppdater din kontoinformasjon og innstillinger.",
      name: "Navn",
      email: "E-post",
      username: "Brukernavn",
      cancel: "Avbryt",
      save: "Lagre endringer",
    },
    security: {
      title: "Personvern og sikkerhet",
      desc: "Håndter sikkerhets- og personverninnstillinger.",
      current: "Nåværende passord",
      new: "Nytt passord",
      confirm: "Bekreft nytt passord",
      update: "Oppdater passord",
    },
    logout: {
      title: "Logg ut",
      desc: "Er du sikker på at du vil logge ut?",
      success: "Du er logget ut vellykket.",
    },
    alerts: {
      title: "Bilvarslingsabonnementer",
      desc: "Håndter dine varsler og varslingsinnstillinger.",
      add: "Legg til nytt varsel",
      none: "Du har ingen aktive bilvarsler.",
      cta: "Opprett ditt første varsel",
      warning:
        "⚠️ Endringer i abonnementet trer i kraft i neste faktureringssyklus og kun etter en vellykket betaling. Ved mislykket betaling beholdes den nåværende konfigurasjonen.",
    },
    payments: {
      title: "Betalingsmetoder",
      desc: "Håndter betalingsmetoder for abonnementer.",
      none: "Du har ingen lagrede betalingsmetoder.",
      encrypted: "Dine betalingsopplysninger er kryptert og trygt lagret.",
    },
  },
  setupAlerts: {
    title: "Sett opp bilvarsler",
    subtitle:
      "Sett opp din Telegram-bot for å få varsler om drømmebilen",
    basicPlan: "Basisplan",
    baseTitle: "79,99 €/måned",
    button: "Start bilvarslingstjeneste",
    cancel: "Avslutt når som helst",
    toasts: {
      terms: {
        title: "Vilkår ikke godkjent",
        description: "Du må godta brukervilkårene for å fortsette",
      },
      success: {
        title: "Abonnement opprettet",
        description: "Ditt abonnement er opprettet vellykket",
      },
      error: {
        title: "Feil ved opprettelse av abonnement",
      },
      contactBot: {
        title: "Botkontakt påkrevd",
        description:
          "For å motta bilvarsler må du starte en samtale med vår Telegram-bot og sende en melding. Følg instruksjonene nedenfor.",
      },
    },
  },
  loginPrompt: {
    title: "Innlogging påkrevd",
    description:
      "Du må være logget inn for å fortsette. Logg inn eller registrer deg.",
    register: "Registrer deg",
    login: "Logg inn",
  },
  waitlistPrompt: {
    title: "Bli med på ventelisten",
    description:
      "Vi er for øyeblikket fulle. Bli med på ventelisten for å bli varslet når en plass blir ledig.",
    button: "Bli med på ventelisten",
  },
  subscription: {
    title: "Abonnementsdetaljer",
    subTitle: "Rediger abonnementsdetaljer nedenfor",
    error: "Tilbake til dashbord",
    notFound: "Abonnement ikke funnet",
    notFoundSub: "Tilbake til dashbord",
    description:
      "Du kan pause abonnementet når som helst. Når det er pauset, stoppes varsler til gjenaktivering.",
    form: {
      status: {
        label: "Status",
        placeholder: "Velg status",
        active: "Aktiv",
        paused: "Pauset",
      },
    },
    actions: {
      save: "Lagre endringer",
      back: "Tilbake",
    },
    toasts: {
      success: {
        title: "Abonnement oppdatert",
        description:
          "Ditt abonnement for {{brand}} {{model}} er oppdatert vellykket",
      },
      priceError: {
        title: "Kan ikke oppdatere abonnement",
        description:
          "Du kan ikke pause og oppdatere prisen på abonnementet samtidig. Velg én av delene.",
      },
      error: {
        title: "Feil ved oppdatering av abonnement",
      },
    },
  },
  about: {
    title: "Om oss",
    description:
      "Vi revolusjonerer søket etter den perfekte brukte bilen med avansert overvåkingsteknologi",
    meta: {
      title: "Om oss | Amiquus - Bilannonseovervåkingstjeneste",
      description:
        "Lær mer om Amiquus, vår misjon og teamet bak den smarte bilannonseovervåkingstjenesten.",
    },
    story: {
      heading: "Vår historie",
      paragraphs: [
        "Amiquus startet i 2023 da grunnleggeren Alex brukte måneder på å oppdatere sider på jakt etter en sjelden modell til en god pris. Etter tapte muligheter innså han at det måtte finnes en bedre måte.",
        "Med et lite team av utviklere og bilentusiaster bygde Alex et system for å overvåke flere sider samtidig og sende umiddelbare varsler.",
        "Prosjektet vokste raskt, og i begynnelsen av 2025 ble Amiquus en tjeneste for alle. I dag hjelper vi kjøpere over hele landet med å spare tid og finne bedre tilbud.",
      ],
    },
    mission: {
      heading: "Vår misjon",
      items: [
        {
          title: "Spar tid",
          description:
            "Eliminer behovet for konstant å oppdatere flere sider med automatisert søk og rettidige varsler.",
        },
        {
          title: "Finn bedre tilbud",
          description:
            "Vær den første til å vite om fantastiske tilbud og få et forsprang i et konkurransedyktig marked.",
        },
        {
          title: "Kjøp med tillit",
          description:
            "Ta informerte beslutninger med full oversikt over flere pålitelige plattformer.",
        },
      ],
    },
    team: {
      heading: "Vårt team",
      members: [
        {
          name: "Alex Morgan",
          role: "Grunnlegger og CEO",
          bio: "Tidligere programmerer med lidenskap for biler og innovative løsninger.",
        },
        {
          name: "Sarah Chen",
          role: "Teknisk leder",
          bio: "Data science-ekspert, spesialisert i web scraping.",
        },
        {
          name: "Marcus Lee",
          role: "Utviklingsleder",
          bio: "Full-stack ingeniør med erfaring i høyytelses varslingssystemer.",
        },
        {
          name: "Elena Rodriguez",
          role: "Kundesupport",
          bio: "Tidligere bilselger, dedikert til å hjelpe med å finne det perfekte kjøretøyet.",
        },
      ],
    },
    join: {
      heading: "Bli med i teamet",
      description:
        "Vi søker alltid lidenskapelige talenter innen teknologi og revolusjonering av bilkjøp.",
      cta: "Se åpne stillinger",
    },
    questions: {
      heading: "Har du spørsmål?",
      description:
        "Lær mer om hvordan tjenesten fungerer, priser eller kontakt support.",
      links: {
        faq: "Besøk FAQ",
        pricing: "Se priser",
        support: "Kontakt support",
      },
    },
  },
  terms: {
    metaTitle: "Brukervilkår | Amiquus",
    metaDescription:
      "Les Amiquus brukervilkår som regulerer bruken av bilannonseovervåkingstjenesten.",
    title: "Brukervilkår",
    lastUpdated: "Sist oppdatert: 21. mai 2025.",
    sections: {
      "1": {
        id: "agreement",
        heading: "Godkjenning av vilkår",
        paragraphs: [
          "Disse brukervilkårene utgjør en juridisk bindende avtale mellom deg og Amiquus angående tilgang til og bruk av vår side og tjenester.",
          "Ved å få tilgang til eller bruke våre tjenester godtar du disse vilkårene. Hvis du ikke godtar noen del, kan du ikke bruke tjenestene.",
        ],
        list: [],
      },
      "2": {
        id: "changes",
        heading: "Endringer i vilkårene",
        paragraphs: [
          "Vi forbeholder oss retten til å endre eller erstatte disse vilkårene etter eget skjønn. Hvis en endring er vesentlig, gir vi minst 30 dagers forhåndsvarsel før de nye vilkårene trer i kraft.",
          "Ved å fortsette å bruke tjenesten etter at endringene trer i kraft, godtar du de reviderte vilkårene. Hvis du ikke godtar de nye vilkårene, må du slutte å bruke tjenesten.",
        ],
        list: [],
      },
      "3": {
        id: "account",
        heading: "Kontoforhold",
        paragraphs: ["For å bruke våre tjenester må du:"],
        list: [
          "Være over 18 år",
          "Fullføre registreringsprosessen",
          "Gi nøyaktige, fullstendige og aktuelle opplysninger",
          "Være ansvarlig for sikkerheten til din konto og passord",
          "Være ansvarlig for all aktivitet på din konto",
          "Umiddelbart rapportere uautorisert bruk eller misbruk av kontoen",
        ],
      },
      "4": {
        id: "payment",
        heading: "Betalingsvilkår",
        paragraphs: [
          "Amiquus tilbyr abonnementsbaserte tjenester med disse vilkårene:",
        ],
        list: [
          "Alle priser er eksklusive skatter, som legges til hvis relevant",
          "Abonnementspriser kan endres med 30 dagers forhåndsvarsel",
          "Abonnementer fornyes automatisk med mindre sagt opp før neste faktureringssyklus",
          "Refusjoner håndteres fra sak til sak i henhold til refusjonspolicyen",
          "Vi bruker Stripe for sikker betalingsbehandling, alle betalingsopplysninger lagres hos Stripe",
        ],
      },
      "5": {
        id: "capacity",
        heading: "Kapasitetsbegrensninger",
        paragraphs: [
          "For å sikre tjenestekvalitet begrenser vi antallet aktive abonnementer til 30. Når grensen er nådd:",
        ],
        list: [
          "Nye brukere kan bli med på ventelisten",
          "Plass på ventelisten bestemmes etter ankomstrekkefølge",
          "Når en plass blir ledig, varsler vi brukere i rekkefølge",
          "Vi forbeholder oss retten til å endre kapasitetsgrenser",
        ],
      },
      "6": {
        id: "scraping",
        heading: "Web scraping-begrensninger",
        paragraphs: [
          "Vår tjeneste henter og behandler data fra flere sider. Ved å bruke tjenesten anerkjenner du:",
        ],
        list: [
          "Amiquus respekterer brukervilkårene for de overvåkede sidene",
          "Vi bruker rate limiting og etiske datainnsamlingsmetoder",
          "Tilgjengeligheten av visse sider kan endres",
          "Vi garanterer ikke fullstendighet eller aktualitet av innsamlede data",
        ],
      },
      "7": {
        id: "intellectual",
        heading: "Intellektuell eiendom",
        paragraphs: [
          "Amiquus-tjenesten, inkludert originalt innhold, funksjoner og funksjonalitet, er og forblir eksklusiv eiendom av Amiquus. Tjenesten er beskyttet av opphavsrett, varemerker og andre lover.",
          "Du kan ikke bruke våre varemerker og design uten forutgående skriftlig tillatelse fra Amiquus.",
        ],
        list: [],
      },
      "8": {
        id: "termination",
        heading: "Oppsigelse",
        paragraphs: [
          "Vi kan si opp eller suspendere kontoen umiddelbart, uten forhåndsvarsel, av hvilken som helst grunn, inkludert brudd på vilkårene.",
          "Ved oppsigelse opphører retten til å bruke tjenesten umiddelbart. Hvis du ønsker å si opp kontoen, må du slutte å bruke tjenesten eller kontakte oss for fjerning.",
        ],
        list: [],
      },
      "9": {
        id: "limitations",
        heading: "Ansvarsbegrensning",
        paragraphs: [
          "Amiquus, dets direktører, ansatte, partnere eller leverandører er ikke ansvarlige for indirekte, tilfeldige, spesielle eller straffbare skader, inkludert tap av fortjeneste, data eller andre immaterielle tap, som oppstår fra:",
        ],
        list: [
          "Tilgang til eller manglende evne til å få tilgang til tjenesten",
          "Innhold eller oppførsel fra tredjeparter på tjenesten",
          "Innhold innhentet fra tjenesten",
          "Uautorisert tilgang til eller endring av dine data",
        ],
      },
      "10": {
        id: "disclaimer",
        heading: "Ansvarsfraskrivelse",
        paragraphs: [
          "Bruk av tjenesten skjer på egen risiko. Tjenesten leveres \"SOM DEN ER\" og \"SOM TILGJENGELIG\". Vi garanterer ikke at tjenesten vil være uavbrutt, rettidig, sikker eller feilfri.",
          "Vi garanterer ikke at resultatene av bruken av tjenesten vil være nøyaktige eller pålitelige.",
        ],
        list: [],
      },
      "11": {
        id: "cookies",
        heading: "Cookiepolicy",
        paragraphs: [
          "Vår cookiepolicy forklarer hva cookies er, hvordan vi bruker dem, hvordan tredjeparter bruker dem og dine valg. Se cookie-seksjonen i vår personvernpolicy.",
        ],
        list: [],
      },
      "12": {
        id: "governing-law",
        heading: "Gjeldende lov",
        paragraphs: [
          "Disse vilkårene styres av og tolkes i samsvar med lovene i Amerikas forente stater, uten hensyn til lovkonflikter.",
          "Hvis vi ikke utøver en rettighet eller bestemmelse, utgjør det ikke et frafall. Hvis en domstol erklærer en bestemmelse ugyldig, forblir de gjenværende bestemmelsene i kraft.",
        ],
        list: [],
      },
      "13": {
        id: "contact",
        heading: "Kontakt oss",
        paragraphs: [
          "Hvis du har spørsmål om vilkårene, kontakt oss:",
        ],
        list: [
          "Via e-post: legal@amiquus.com",
          "Via kontaktsiden på vår side",
        ],
      },
    },
  },
  privacy: {
    metaTitle: "Personvernpolicy | Amiquus",
    metaDescription:
      "Lær hvordan Amiquus håndterer dine personopplysninger, rettigheter og datainnsamlingspraksis.",
    title: "Personvernpolicy",
    lastUpdated: "Sist oppdatert: 21. mai 2025.",
    sections: {
      "0": {
        id: "introduction",
        heading: "Introduksjon",
        paragraphs: [
          "Velkommen til Amiquus. Vi respekterer ditt personvern og er forpliktet til å beskytte dine personopplysninger. Denne personvernpolicyen forklarer hvordan vi håndterer dine data, dine rettigheter og hvordan loven beskytter deg.",
        ],
      },
      "1": {
        id: "data-we-collect",
        heading: "Data vi samler inn",
        paragraphs: [
          "Vi samler inn forskjellige typer data til forskjellige formål for å levere og forbedre tjenesten:",
        ],
        list: [
          "Personopplysninger: e-postadresse, fornavn, etternavn og profilbilde (hvis levert via tredjepart).",
          "Kontoopplysninger: innloggingsopplysninger og kontoinnstillinger.",
          "Bruksdata: informasjon om hvordan du bruker siden og tjenestene.",
          "Søkekriterier: kjøretøyskriterier du setter for overvåking (merke, modell, pris osv.).",
          "Telegram-data: hvis du velger Telegram-varsler, lagrer vi ditt chat-ID og bot-token.",
          "Betalingsdata: ved kjøp samler vår betalingsbehandler inn nødvendige data. Amiquus lagrer ikke fullstendige kredittkortdata.",
        ],
      },
      "2": {
        id: "how-we-use-data",
        heading: "Hvordan vi bruker dine data",
        paragraphs: ["Vi bruker dine personopplysninger til å:"],
        list: [
          "Levere og vedlikeholde tjenesten",
          "Varsle om endringer i tjenesten",
          "Tillate interaktive funksjoner",
          "Levere kundesupport",
          "Samle analyse for å forbedre tjenesten",
          "Overvåke bruken av tjenesten",
          "Oppdage, forhindre og løse tekniske problemer",
          "Behandle betalinger og forhindre svindel",
          "Sende annonser som matcher dine kriterier",
        ],
      },
      "3": {
        id: "data-storage",
        heading: "Datalagring og sikkerhet",
        paragraphs: [
          "Vi anvender passende sikkerhetstiltak for å beskytte mot uautorisert tilgang, endring eller ødeleggelse av data. Alle data lagres på sikre servere med kryptering i transit og i hvile.",
          "Vi oppbevarer dine personopplysninger kun så lenge som nødvendig for formålene i denne policyen, inkludert for å oppfylle juridiske, regulatoriske eller regnskapsmessige krav.",
        ],
      },
      "4": {
        id: "gdpr",
        heading: "Dine rettigheter under GDPR",
        paragraphs: [
          "Hvis du er bosatt i Det europeiske økonomiske samarbeidsområdet (EØS), har du visse databeskyttelsesrettigheter. Amiquus bestreber seg på å tillate rettelse, endring, sletting eller begrensning av bruken av dine data.",
          "Du har følgende rettigheter:",
        ],
        list: [
          "Rett til tilgang, oppdatering eller sletting av data",
          "Rett til rettelse",
          "Rett til å protestere",
          "Rett til begrensning",
          "Rett til dataportabilitet",
          "Rett til å trekke tilbake samtykke",
        ],
      },
      "5": {
        id: "cookies",
        heading: "Cookiepolicy",
        paragraphs: [
          "Cookies er små data som lagres på din enhet. Vi bruker dem til å:",
        ],
        list: [
          "Holde økten innlogget",
          "Forstå sidens bruk",
          "Lagre preferanser",
          "Personliggjøre opplevelsen",
        ],
      },
      "6": {
        id: "third-party",
        heading: "Tredjeparter",
        paragraphs: [
          "Vi kan engasjere tredjeparter til å utføre tjenesten, utføre oppgaver eller analysere bruk.",
          "Disse tredjepartene inkluderer:",
        ],
        list: [
          "Betalingsbehandlere (Stripe)",
          "Analyseleverandører",
          "Kundesupporttjenester",
          "Hosting- og sky-leverandører",
        ],
        paragraphs2: [
          "Disse tredjepartene har kun tilgang til dine data for å utføre oppgaver og kan ikke avsløre eller bruke dem til andre formål.",
        ],
      },
      "7": {
        id: "changes",
        heading: "Endringer i personvernpolicyen",
        paragraphs: [
          "Vi kan oppdatere personvernpolicyen fra tid til annen. Vi varsler deg ved å publisere den nye policyen på denne siden og oppdatere datoen 'Sist oppdatert'.",
          "Vi anbefaler at du regelmessig gjennomgår policyen. Endringer trer i kraft ved publisering.",
        ],
      },
      "8": {
        id: "contact",
        heading: "Kontakt oss",
        paragraphs: [
          "Hvis du har spørsmål om personvernpolicyen, kontakt oss:",
        ],
        list: [
          "Via e-post: privacy@amiquus.com",
          "Via kontaktsiden på vår side",
        ],
      },
    },
  },
  faqs: {
    metaTitle: "FAQ | Amiquus",
    metaDescription:
      "Finn svar på de vanligste spørsmålene om Amiquus bilannonseovervåkingstjeneste.",
    title: "Ofte stilte spørsmål",
    subtitle:
      "Raske svar på vanlige spørsmål om vår bilannonseovervåkingstjeneste",
    general: {
      heading: "Generelle spørsmål",
      whatIs: {
        question: "Hva er Amiquus?",
        answer:
          "Amiquus er en tjeneste som overvåker flere kjøretøyssider som matcher dine kriterier. Når det er et treff, får du et umiddelbart varsel via Telegram.",
      },
      howItWorks: {
        question: "Hvordan fungerer det?",
        answer: [
          "Sett opp søkekriterier (merke, modell, pris osv.)",
          "Velg sider å overvåke",
          "Koble til Telegram for varsler",
          "Vårt system overvåker kontinuerlig de valgte sidene",
          "Ved treff får du et umiddelbart Telegram-varsel med detaljer og lenke",
        ],
      },
      whichWebsites: {
        question: "Hvilke sider overvåker dere?",
        answerIntro:
          "Vi overvåker for øyeblikket følgende store plattformer:",
        list: [
          "AutoTrader",
          "Cars.com",
          "CarGurus",
          "TrueCar",
          "Facebook Marketplace (via URL)",
          "Craigslist",
          "eBay Motors",
        ],
        outro:
          "Vi legger kontinuerlig til nye plattformer for bredere dekning.",
      },
    },
    subscription: {
      heading: "Spørsmål om abonnement",
      cost: {
        question: "Hvor mye koster abonnementet?",
        answer: [
          "Priser starter på 79,99 €/måned for å overvåke én side med oppdateringer hver 6. time. Ekstra sider koster 4,99 € per måned. Oppgrader for raskere varsler.",
          "For prisdetaljer, se pris-seksjonen på forsiden.",
        ],
      },
      cancel: {
        question: "Hvordan avslutter jeg abonnementet?",
        stepsIntro:
          "Du kan avslutte abonnementet når som helst via profilsiden:",
        steps: [
          "Logg inn på din konto",
          'Gå til "Profil"-siden',
          'Velg "Abonnementer"-fanen',
          'Klikk på "Avslutt abonnement" ved siden av abonnementet du vil avslutte',
        ],
        note: "Abonnementet forblir aktivt til slutten av den nåværende faktureringsperioden.",
      },
      multiple: {
        question: "Kan jeg ha flere abonnementer for forskjellige modeller?",
        answer:
          "Ja, du kan opprette flere abonnementer under én konto. Hver kan overvåke forskjellige modeller eller merker. Perfekt hvis du søker flere kjøretøy eller hjelper venner.",
      },
      limit: {
        question: "Hvorfor er det en grense for abonnenter?",
        intro: "Vi begrenser tjenesten til 30 aktive abonnenter for å:",
        list: [
          "Høyeste tjenestekvalitet og datanøyaktighet",
          "Personlig support til hver abonnent",
          "Raskere varsellevering under topptider",
          "Etisk scraping som ikke overbelaster målsider",
        ],
        outro:
          "Hvis vi er fulle, bli med på ventelisten så varsler vi deg når en plass blir ledig.",
      },
    },
    technical: {
      heading: "Tekniske spørsmål",
      telegram: {
        question: "Hvordan setter jeg opp Telegram-varsler?",
        stepsIntro: "For å sette opp Telegram-varsler:",
        steps: [
          "Opprett en Telegram-bot via BotFather (instruksjoner i dashbordet)",
          "Kopier bot-token og chat-ID",
          'Angi opplysningene i kontoinnstillingene under "Varslingsinnstillinger"',
          'Test tilkoblingen med knappen "Send testmelding"',
        ],
        note: "Detaljerte instruksjoner med skjermbilder tilgjengelige under abonnementsoppsett.",
      },
      frequency: {
        question: "Hvor ofte får jeg varsler?",
        intro: "Varslingsfrekvensen avhenger av:",
        list: [
          "Den valgte frekvenspakken (fra hver time til hvert minutt)",
          "Antallet nye annonser som matcher dine kriterier",
          "Markedsaktiviteten for det valgte merket/modellen",
        ],
        outro:
          "Du får kun varsler når nye annonser matcher dine kriterier.",
      },
      privacy: {
        question: "Hvordan beskyttes mitt personvern?",
        intro: "Vi tar personvern alvorlig og bruker:",
        list: [
          "Datakryptering i transit og i hvile",
          "Sikre betalinger via Stripe",
          "Ingen datadeling med tredjeparter",
          "Du kan be om eller slette dine data når som helst",
        ],
        outro: "Mer informasjon i vår fullstendige personvernpolicy.",
      },
    },
    support: {
      heading: "Har du fortsatt spørsmål?",
      description:
        "Hvis du ikke fant svaret, står vår support klar!",
      button: "Kontakt support",
    },
  },
  waitlist: {
    metaTitle: "Bli med på ventelisten - Amiquus",
    metaDescription:
      "Bli med på Amiquus venteliste og bli varslet når abonnementer er tilgjengelige.",
    title: "Bli med på vår venteliste",
    subtitle:
      "På grunn av høy etterspørsel begrenser vi antallet aktive abonnementer for å garantere best kvalitet.",
    limited: {
      heading: "Begrenset tilgjengelighet",
      description:
        "Vi begrenser systemet til kun 30 aktive abonnenter for å:",
      points: [
        "Eksepsjonell pålitelighet og scraping-hastighet for alle brukere",
        "Mindre risiko for blokkering fra sider",
        "Personlig support til hver abonnent",
        "Rettferdig serverressursfordeling",
      ],
      available:
        "{{remaining}} abonnementsplasser av {{capacity}} er for øyeblikket tilgjengelige.",
      full: "Alle abonnementsplasser er for øyeblikket opptatt. Bli med på ventelisten for å bli varslet når en plass blir ledig.",
    },
    success: {
      title: "Du er på ventelisten!",
      description:
        "Vi varsler deg så snart en abonnementsplass blir ledig",
      message:
        "Takk for din interesse i Amiquus! Vi har lagt deg til ventelisten og kontakter deg så snart en plass er tilgjengelig.",
      button: "Tilbake til forsiden",
    },
    cantJoin: {
      title: "Bli med på ventelisten",
      description:
        "Vi varsler deg så snart en abonnementsplass blir ledig",
    },
    form: {
      firstName: {
        label: "Fornavn",
        placeholder: "Ola",
      },
      lastName: {
        label: "Etternavn",
        placeholder: "Nordmann",
      },
      email: {
        label: "E-post",
        placeholder: "ola.nordmann@eksempel.no",
        description:
          "Vi bruker denne e-postadressen til å varsle deg når en plass blir ledig",
      },
      submit: "Bli med på ventelisten",
      submitting: "Sender...",
    },
  },
  support: {
    metaTitle: "Support | Amiquus - Hjelpesenter",
    metaDescription:
      "Få hjelp med din Amiquus-konto, abonnement eller varsler. Utforsk hjelpesenteret eller kontakt support.",
    title: "Support-senter",
    subtitle:
      "Finn svar på vanlige spørsmål eller kontakt vårt supportteam",
    emailSupport: {
      title: "E-post support",
      description: "Send oss en e-post og vi svarer innen 24 timer",
      email: "support@amiquus.com",
    },
    faqHeading: "Ofte stilte spørsmål",
    faqs: {
      telegram: {
        question: "Hvordan setter jeg opp Telegram-varsler?",
        intro: "For å sette opp Telegram-varsler følg disse trinnene:",
        steps: [
          "Opprett en Telegram-bot via BotFather (instruksjoner i dashbordet)",
          "Kopier API-token og chat-ID",
          'Angi opplysningene i kontoinnstillingene under "Varslingsinnstillinger"',
          'Test tilkoblingen med knappen "Send testmelding"',
        ],
        outro:
          "Hvis du trenger mer hjelp, er en detaljert guide tilgjengelig i ditt dashbord.",
      },
      updates: {
        question: "Hvor ofte oppdateres annonsene?",
        answer:
          "Oppdateringsfrekvensen avhenger av abonnementspakken. Basisplaner får oppdateringer hver 6. time, premiumplaner kan være hver 30. minutt. Du kan se og endre den nåværende frekvensen i abonnementsinnstillingene.",
      },
      facebook: {
        question: "Kan jeg overvåke Facebook Marketplace?",
        answer:
          "Ja, vi støtter overvåking av Facebook Marketplace. Angi URL-en til søkeresultatsiden med anvendte filtre. Systemet overvåker deretter den søkingen for nye annonser som matcher dine kriterier.",
      },
      cancel: {
        question: "Hvordan avslutter jeg abonnementet?",
        answer:
          'Du kan avslutte abonnementet når som helst via profilsiden. Klikk på "Abonnementer"-fanen, finn abonnementet og klikk på "Avslutt abonnement". Tjenesten forblir aktiv til slutten av faktureringsperioden.',
      },
      full: {
        question: "Hva skjer hvis alle plasser er opptatt?",
        answer:
          "For å opprettholde høy tjenestekvalitet begrenser vi antallet aktive abonnementer. Hvis alle plasser er opptatt, kan du bli med på ventelisten. Når en plass blir ledig, varsler vi deg, og du har prioritet over offentligheten.",
      },
    },
    stillNeedHelp: {
      heading: "Trenger du mer hjelp?",
      description:
        "Hvis du ikke fant svaret, kontakt vårt supportteam. Vi er her for å hjelpe!",
      button: "Kontakt support",
    },
  },
  notFound: {
    title: "404 Side ikke funnet",
    message: "Glemte du å legge til siden i ruteren?",
  },
  emails: {
    verification: {
      subject: "Amiquus e-postbekreftelseskode",
      greeting: "Hei,",
      message: "Bruk følgende kode for å fullføre din registrering:",
      expiration: "Koden utløper om 10 minutter.",
    },
    invoice: {
      success: {
        subject: "Betaling mottatt Amiquus – Faktura #",
        h2Message: "Din Amiquus-abonnementsbetaling lykkes!",
        greeting: "Hei,",
        paymentMessage: "Vi har mottatt din betaling på",
        downloadMessage:
          "Du kan se eller laste ned fakturaen via følgende lenke:",
        viewInvoice: "Se faktura",
        invoiceNumber: "Faktura #:",
      },
      pending: {
        subjectA: "Betaling venter – Faktura",
        subjectB: "for ditt Amiquus-abonnement",
        h2Message:
          "Handling påkrevd: Fullfør betalingen for ditt Amiquus-abonnement",
        greeting: "Hei,",
        messageA: "Din faktura",
        messageB:
          "er fortsatt ubetalt. Fullfør betalingen på for å aktivere abonnementet",
        paymentMessage: "Du kan betale sikkert via følgende lenke:",
        payInvoice: "Betal faktura",
        ignoreEmail:
          "Hvis du allerede har betalt, kan du ignorere denne e-posten.",
      },
      failed: {
        subject: "Betaling mislyktes – Faktura",
        message: "Vi kunne ikke behandle din siste betaling (forsøk",
        attemptsA:
          "Vi prøver igjen snart. Ingen handling påkrevd for øyeblikket.",
        attemptsB:
          "Vi har forsøkt å debitere din betalingsmetode tre ganger, men alle forsøk mislyktes.",
        attemptsC:
          "Som følge er ditt abonnement <strong>midlertidig pauset</strong>. Du mottar ingen oppdateringer før gjenaktivering.",
        attemptsD:
          "Oppdater din betalingsmetode og gjenaktiver abonnementet fra profilen:",
        viewInvoice: "Se faktura",
        managePayment: "Håndter betalingsmetoder",
      },
    },
    waitlist: {
      subject: "Du er på Amiquus venteliste!",
      h2Message: "Du er på listen!",
      hi: "Hei",
      message:
        "Takk for at du ble med på Amiquus venteliste. Vi varsler deg så snart en plass blir ledig.",
      anyQuestions:
        "Hvis du har spørsmål, ikke nøl med å svare på denne e-posten.",
    },
    common: {
      thanksMessage: "Takk for at du valgte Amiquus!",
      signature: "Med vennlig hilsen,<br/>Amiquus-teamet",
      team: "— Amiquus-teamet",
      needHelp: "Trenger du hjelp?",
      hello: "Hei",
    },
  },
};
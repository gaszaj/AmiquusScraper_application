// === sv.ts === Svenska
export const sv = {
  navigations: {
    features: "Funktioner",
    how: "Hur det fungerar",
    pricing: "Priser",
    getAlerts: "Få aviseringar",
    waitlist: "Väntelista",
    faq: "FAQ",
    login: "Logga in",
    getStarted: "Kom igång",
    subscribers: "Prenumeranter",
    theme: "Tema",
    language: "Språk",
    myAlerts: "Mina aviseringar",
    profile: "Profil",
    settings: "Inställningar",
    logout: "Logga ut",
    signUp: "Registrera dig",
  },
  hero: {
    label: "Övervaka begagnade bilannonser i realtid!",
    title: "Missar aldrig det perfekta erbjudandet för din bil",
    subtitle:
      "Amiquus meddelar dig omedelbart när drömbilen dyker upp på flera sajter. Få aviseringar via Telegram så snart en match hittas.",
    button1: "Ställ in aviseringar",
    button2: "Se hur det fungerar",
    trustIndicators: {
      websites: "Över 15 sajter",
      realtime: "Realtidsaviseringar",
      noSetup: "Ingen installation",
      cancelAnytime: "Avsluta när som helst",
    },
  },
  limited: {
    full: {
      title: "Prenumerationsgräns nådd",
      description:
        "Vi har nått kapaciteten på 30 aktiva prenumeranter. Gå med i väntelistan för att bli meddelad när en plats blir ledig.",
      buttonText: "Gå med i väntelistan",
    },
    limited: {
      title: "Begränsad tillgänglighet",
      description:
        "Endast {{remaining}} av {{capacity}} platser kvar. Prenumerera nu innan de tar slut!",
      buttonText: "Starta nu",
    },
    available: {
      title: "Prenumerationer tillgängliga",
      description:
        "{{active}} av {{capacity}} prenumerationer är för närvarande aktiva. Massor av plats för dig!",
      buttonText: "Starta nu",
    },
  },
  features: {
    heading: "Varför välja Amiquus?",
    subheading:
      "Spara tid och missa aldrig den perfekta bilen med vår automatiserade tjänst.",
    multiSite: {
      title: "Multi-sajtövervakning",
      description:
        "Övervaka flera bilsajter samtidigt utan att manuellt kontrollera var och en.",
    },
    notifications: {
      title: "Omedelbara aviseringar",
      description:
        "Få omedelbara aviseringar via Telegram när en bil matchar dina kriterier.",
    },
    filters: {
      title: "Anpassningsbara filter",
      description:
        "Ställ in precisa kriterier: märke, modell, år, körsträcka, pris – hitta exakt vad du vill ha.",
    },
    frequency: {
      title: "Justerbar frekvens",
      description:
        "Välj hur ofta nya annonser kontrolleras – från timme till realtid.",
    },
    languages: {
      title: "Flerspråkigt stöd",
      description:
        "Få aviseringar på ditt föredragna språk för enklare förståelse av annonser.",
    },
    account: {
      title: "Enkelt kontohantering",
      description:
        "Hantera flera sökprofiler och ändra din prenumeration med några klick.",
    },
  },
  howItWorks: {
    title: "Hur Amiquus fungerar",
    subtitle:
      "Ställ in en gång och låt vårt system hitta det perfekta erbjudandet åt dig",
    whyTitle: "Varför välja Amiquus?",
    steps: {
      preferences: {
        title: "Ställ in dina preferenser",
        description:
          "Välj märken, modeller, prisklasser och andra kriterier som intresserar dig.",
      },
      telegram: {
        title: "Koppla Telegram",
        description:
          "Koppla ditt Telegram-konto för att få omedelbara aviseringar om nya annonser.",
      },
      notifications: {
        title: "Få omedelbara aviseringar",
        description:
          "Få aviseringar direkt när en matchande bil dyker upp på någon sajt.",
      },
      findCar: {
        title: "Hitta din perfekta bil",
        description:
          "Var först med att veta om nya annonser och säkra de bästa erbjudandena.",
      },
    },
    features: [
      "Övervaka över 15 sajter samtidigt",
      "Anpassningsbara sökkriterier med avancerad filtrering",
      "Realtidsaviseringar via Telegram",
      "Automatiska aviseringar för prissänkningar och nya annonser",
      "Enkelt inställningsförfarande på mindre än 5 minuter",
    ],
    setAlerts: "Ställ in aviseringar",
    notificationMockup1: {
      title: "Ny match hittad!",
      description:
        "BMW 3-serie, 2019, 32 500 € – Nyligen publicerad på AutoTrader",
    },
    notificationMockup2: {
      title: "Telegram-avisering",
      description: "Mercedes C-klass, 2020, 30 000 km – Pris sänkt med 2 000 €",
    },
  },
  pricing: {
    title: "Enkla och transparenta priser",
    subtitle:
      "Våra priser baseras på dina behov. Börja med basplanen och anpassa.",
    baseTitle: "Basplan: 79,99 €/månad",
    includedTitle: "Ingår:",
    includedFeatures: [
      "Övervakning av en sajt",
      "Uppdateringar varje timme",
      "Obegränsade filter",
      "Aviseringar via Telegram",
    ],
    addonsTitle: "Tillägg:",
    addons: [
      { name: "Varje extra sajt", price: 4.99 },
      { name: "Uppdateringar var 30:e minut", price: 2.99 },
      { name: "Uppdateringar var 15:e minut", price: 5.99 },
      { name: "Uppdateringar var 5:e minut", price: 9.99 },
      { name: "Uppdateringar varje minut", price: 14.99 },
    ],
    footerNote:
      "Alla planer inkluderar obegränsade sökprofiler och enkel prenumerationshantering.",
    button: "Starta nu",
  },
  signup: {
    heading: "Skapa bilavisering",
    subheading:
      "Ställ in personliga aviseringar för bilannonser i några enkla steg.",
    cta: "Få aviseringar nu",
    waitlist: {
      message:
        "Vi är för närvarande fulla. Gå med i väntelistan för att bli meddelad när en plats blir ledig.",
      cta: "Gå med i väntelistan",
    },
    toast: {
      success: {
        title: "Prenumeration skapad",
        description: "Din prenumeration har skapats framgångsrikt",
      },
      error: {
        title: "Misslyckades skapa prenumeration",
        description: "Kunde inte skapa prenumerationen. Försök igen senare.",
      },
    },
  },
  payment: {
    toast: {
      success: {
        title: "Framgång",
        description: "Din betalningsmetod har ställts in framgångsrikt.",
      },
      error: {
        title: "Fel",
        fallback: "Ett oväntat fel inträffade. Försök igen.",
      },
    },
    button: {
      submit: "Ställ in betalningsmetod",
      processing: "Bearbetar...",
    },
  },
  alertSchema: {
    errors: {
      carBrand: "Bilens märke är obligatoriskt",
      carModel: "Bilens modell är obligatorisk",
      fuelType: "Bränsletyp är obligatorisk",
      priceMin: "Minimipris måste vara ett nummer",
      priceMax: "Maximipris måste vara ett nummer",
      yearMin: "Minimimodellår måste vara giltigt",
      yearMax: "Maximimodellår måste vara giltigt",
      maxKilometers: "Max körsträcka måste vara ett nummer",
      telegramUsername: "Telegram-användarnamn är obligatoriskt",
      telegramToken: "Telegram-bot-token är obligatorisk",
      telegramChatId: "Telegram-chatt-ID är obligatoriskt",
      websitesSelected: "Du måste välja minst en sajt",
      notificationLanguage: "Aviseringsspråk är obligatoriskt",
      facebookMarketplaceUrl:
        "Facebook Marketplace-URL är obligatorisk om Facebook är valt",
    },
  },
  personalInfo: {
    heading: "Personlig information",
    description:
      "Ange din personliga information för att korrekt ställa in dina aviseringar.",
    labels: {
      firstName: "Förnamn",
      lastName: "Efternamn",
      email: "E-postadress",
    },
    placeholders: {
      firstName: "Kalle",
      lastName: "Andersson",
      email: "kalle.andersson@exempel.se",
    },
    errors: {
      firstName: "Förnamn är obligatoriskt",
      lastName: "Efternamn är obligatoriskt",
      email: "Ange en giltig e-postadress",
    },
    actions: {
      login: "Logga in eller registrera dig för att fortsätta",
      continue: "Fortsätt",
    },
  },
  websiteSelection: {
    heading: "Sajtval",
    description: "Välj sajterna att övervaka och önskad uppdateringsfrekvens.",
    labels: {
      websites: "Sajter att övervaka",
      facebookUrl: "Facebook Marketplace URL",
      updateFrequency: "Uppdateringsfrekvens",
    },
    placeholders: {
      frequency: "Välj frekvens",
    },
    help: {
      websites: "Välj en eller flera sajter för att övervaka bilannonser.",
      facebookUrl:
        "Klistra in URL:en till dina sökresultat på Facebook Marketplace.",
      videoTitle: "Behöver du hjälp med att hitta Facebook Marketplace-länken?",
      videoDesc: "Titta på videon nedan för steg-för-steg-instruktioner.",
      updateFrequency:
        "Hur ofta kontrollerar vi nya annonser? Högre frekvenser kan kosta mer.",
    },
    errors: {
      websites: "Du måste välja minst en sajt",
      facebookUrl:
        "Facebook Marketplace-URL är obligatorisk om Facebook är valt",
    },
    actions: {
      previous: "Föregående",
      continue: "Fortsätt",
    },
  },
  carDetails: {
    heading: "Bildetaljer",
    description:
      "Ange detaljerna för bilen du söker. Alla fält är valfria – lämna tomma för bredare resultat.",
    labels: {
      carBrand: "Bilmärke",
      carModel: "Bilmodell",
      fuelType: "Bränsletyp",
      priceMin: "Minimipris",
      priceMax: "Maximipris",
      yearMin: "Minimimodellår",
      yearMax: "Maximimodellår",
      maxKilometers: "Max körsträcka",
    },
    placeholders: {
      carBrand: "Välj märke",
      carModel: "Välj modell",
      carModelDisabled: "Välj märke först",
      fuelType: "Välj bränsletyp",
      priceMin: "Ange minimipris",
      priceMax: "Ange maximipris",
      yearMin: "Ange minimimodellår",
      yearMax: "Ange maximimodellår",
      maxKilometers: "Ange max körsträcka",
    },
    options: {
      noModelsAvailable: "Inga modeller tillgängliga",
    },
    errors: {
      carBrand: "Bilmärke är obligatoriskt",
      carModel: "Bilmodell är obligatorisk",
      fuelType: "Bränsletyp är obligatorisk",
      priceMin: "Minimipris måste vara ett nummer",
      priceMax: "Maximipris måste vara ett nummer",
      yearMin: "Minimimodellår måste vara giltigt",
      yearMax: "Maximimodellår måste vara giltigt",
      maxKilometers: "Max körsträcka måste vara ett nummer",
    },
    actions: {
      previous: "Föregående",
      continue: "Fortsätt",
    },
  },
  telegram: {
    heading: "Telegram-konfiguration",
    description:
      "Ställ in Telegram-aviseringar genom att ange bot-token och chatt-ID.",
    subHeading: "Ställ in din Telegram-bot",
    info: "Problem med att skapa en Telegram-bot? Kontakta oss så hjälper vi dig.",
    contact: "Kontakta oss",
    instructions: {
      botTitle: "Hur du får Telegram-bot-token:",
      botStep1: "Öppna Telegram och sök efter @BotFather",
      botStep2: "Skicka kommandot /newbot",
      botStep3: "Följ instruktionerna för att skapa boten",
      botStep4: "Kopiera token som BotFather ger dig",

      chatTitle: "Hur du får ditt Telegram-chatt-ID:",
      chatStep1: "Öppna Telegram och sök efter @userinfobot",
      chatStep2: "Skicka valfritt meddelande till boten",
      chatStep3: "Boten svarar med din information, inklusive chatt-ID",
      chatStep4: "Kopiera chatt-ID (ett nummer)",
    },

    videoPrompt: "Behöver du hjälp med att ställa in bot-token och chatt-ID?",
    videoDescription: "Titta på videon nedan för steg-för-steg-instruktioner.",

    labels: {
      token: "Telegram-bot-token",
      chatId: "Ditt Telegram-chatt-ID",
      language: "Aviseringsspråk",
      username: "Telegram-användarnamn",
    },

    placeholders: {
      token: "Ange din bot-token från BotFather",
      chatId: "Ange ditt Telegram-chatt-ID",
      language: "Välj språk för Telegram-meddelanden",
      username: "Ange ditt Telegram-användarnamn",
    },
    usernameDescription:
      "Detta är användarnamnet för ditt Telegram-konto (utan @-tecknet).",
    examples: {
      token: "Exempel: 5432109876:ABCDefGhIJklMNoPqrSTuvWXyz1234567890",
      chatId:
        "Få detta genom att skicka ett meddelande till @userinfobot på Telegram",
    },
    setupTitle: "Inställningsinstruktioner:",
    setupSteps: [
      'Öppna Telegram och sök efter "BotFather"',
      'Starta en konversation med BotFather genom att klicka på "Start"',
      "Ange /newbot och följ instruktionerna för att skapa en ny bot",
      "Välj ett namn för din bot",
      "Välj ett användarnamn för boten (måste sluta med 'bot')",
      "Kopiera API-token som BotFather ger dig",
      "Skicka ett meddelande till din nya bot för att aktivera konversationen",
    ],
    chatIdTitle: "Hur du får ditt Telegram-chatt-ID:",
    chatIdSteps: [
      'Öppna Telegram och sök efter "userinfobot"',
      "Skicka valfritt meddelande till boten",
      "Boten svarar med din information, inklusive chatt-ID",
      "Kopiera ditt chatt-ID",
    ],
    helpTitle: "Behöver du hjälp med att ställa in bot-token och chatt-ID?",
    helpDescription: "Titta på videon nedan för steg-för-steg-instruktioner.",
    botTokenLabel: "Telegram-bot-token",
    botTokenPlaceholder: "Ange din bot-token från BotFather",
    botTokenExample: "Exempel: 5432109876:ABCDefGhIJklMNoPqrSTuvWXyz1234567890",
    chatIdLabel: "Ditt Telegram-chatt-ID",
    chatIdPlaceholder: "Ange ditt Telegram-chatt-ID",
    chatIdDescription:
      "Få detta genom att skicka ett meddelande till @userinfobot på Telegram",
    languageLabel: "Aviseringsspråk",
    languagePlaceholder: "Välj språk för Telegram-meddelanden",
    languages: {
      en: "Engelska",
      de: "Tyska",
      fr: "Franska",
      es: "Spanska",
      it: "Italienska",
      nl: "Nederländska",
      sv: "Svenska",
    },
    previewTitle: "Förhandsvisning av Telegram-avisering",
    carAlertTitle: "Ny bilavisering!",
    priceLabel: "Pris: {{price}}",
    kilometresLabel: "Kilometer: {{kms}}",
    locationLabel: "Plats: {{location}}",
    viewListing: "Visa annons →",
    errors: {
      token: "Telegram-bot-token är obligatorisk",
      chatId: "Telegram-chatt-ID är obligatoriskt",
      language: "Aviseringsspråk är obligatoriskt",
      username: "Telegram-användarnamn är obligatoriskt",
    },

    actions: {
      previous: "Föregående",
      continue: "Fortsätt",
    },
    contactBotInstruction:
      "Starta en konversation med vår Telegram-bot genom att klicka på länken nedan och skicka ett meddelande:",
    contactBotNote:
      "Detta är obligatoriskt för att få bilaviseringar. Om du är på datorn, skanna QR-koden.",
    confirmContact:
      "Jag har startat en konversation med boten och skickat ett meddelande",
  },
  review: {
    title: "Översikt av din prenumeration",
    description: "Granska prenumerationsdetaljer innan betalning.",

    personal: {
      title: "Personlig information",
      name: "Namn",
      email: "E-post",
    },

    monitoring: {
      title: "Övervakningsinställningar",
      websites: "Sajter",
      facebookUrl: "Facebook URL",
      updateFrequency: "Uppdateringsfrekvens",
    },

    specs: {
      title: "Bilspecifikationer",
      brand: "Märke",
      model: "Modell",
      fuelType: "Bränsletyp",
      yearRange: "År",
      mileage: "Kilometer (km)",
      price: "Pris (€)",
    },

    notification: {
      title: "Aviseringsinställningar",
      telegram: "Telegram-bot",
      language: "Aviseringsspråk",
    },

    summary: {
      title: "Prenumerationsöversikt",
      base: "Basabonnemang",
      extraWebsites: "Extra sajter",
      frequencyUpgrade: "Frekvensuppgradering",
      total: "Totalt (månadsvis)",
    },

    terms: {
      checkbox: "Jag accepterar",
      tos: "Användarvillkor",
      privacy: "Integritetspolicy",
      note: "Din prenumeration förnyas automatiskt varje månad. Du kan avsluta när som helst.",
      error: "Du måste acceptera användarvillkoren",
    },

    actions: {
      previous: "Föregående",
      submit: "Gå till betalning",
    },
  },
  faq: {
    title: "Vanliga frågor",
    subtitle: "Hitta svar på de vanligaste frågorna om vår tjänst.",
    contactPrompt: "Har du fortfarande frågor?",
    contactLink: "Kontakta vår support",
    questions: [
      {
        question:
          "Hur snabbt får jag aviseringar efter att en ny annons publicerats?",
        answer:
          "Aviseringshastigheten beror på vald uppdateringsfrekvens. Med timplan får du aviseringar inom en timme efter publicering. För nästan omedelbara aviseringar (inom några minuter), uppgradera till frekventare planer.",
      },
      {
        question: "Kan jag övervaka flera olika biltyper samtidigt?",
        answer:
          "Ja! Du kan skapa flera sökprofiler med olika kriterier. Varje profil räknas som en separat prenumeration, men du hanterar dem alla från ett konto.",
      },
      {
        question: "Vilka sajter stödjer ni för närvarande?",
        answer:
          "Vi stödjer för närvarande de stora plattformarna, inklusive AutoTrader, CarGurus, Cars.com och Facebook Marketplace. Vi lägger kontinuerligt till nya sajter på begäran.",
      },
      {
        question: "Behöver jag tekniska kunskaper för Telegram-boten?",
        answer:
          "Nej! Vi tillhandahåller detaljerade instruktioner med text och video. De flesta användare ställer in boten på mindre än 5 minuter.",
      },
      {
        question:
          "Kan jag ändra sökkriterierna efter att ha ställt in prenumerationen?",
        answer:
          "Ja, du kan ändra kriterierna när som helst i instrumentpanelen. Ändringarna träder i kraft omedelbart.",
      },
      {
        question: "Hur avslutar jag prenumerationen?",
        answer:
          'Du kan avsluta prenumerationen när som helst i avsnittet "Prenumerationer" i instrumentpanelen. Tjänsten förblir aktiv till slutet av faktureringsperioden.',
      },
    ],
  },
  footer: {
    brandTitle: "Amiquus",
    brandDescription:
      "Din personliga assistent för att hitta det perfekta begagnade bilerbjudandet vid rätt tidpunkt.",
    quickLinks: "Snabb länkar",
    features: "Funktioner",
    pricing: "Priser",
    faq: "FAQ",
    getStarted: "Kom igång",
    legal: "Juridiskt",
    terms: "Användarvillkor",
    privacy: "Integritetspolicy",
    cookies: "Cookiepolicy",
    gdpr: "GDPR-efterlevnad",
    contact: "Kontakt",
    email: "support@amiquus.com",
    telegram: "Kontakta oss på Telegram",
    copyright: "Alla rättigheter förbehållna.",
    about: "Om oss",
    blog: "Blogg",
    careers: "Karriärer",
    support: "Support",
  },
  login: {
    title: "Logga in på konto",
    description: "Ange e-post och lösenord för att komma åt instrumentpanelen",
    emailLabel: "E-post",
    passwordLabel: "Lösenord",
    loginButton: "Logga in",
    loggingIn: "Loggar in...",
    loginWithGoogle: "Logga in med Google",
    or: "eller",
    noAccount: "Har du inget konto?",
    registerLink: "Registrera dig",
    successTitle: "Inloggning lyckades",
    successMessage: "Du har loggat in framgångsrikt.",
    errorTitle: "Inloggning misslyckades",
    genericError: "Kontrollera dina uppgifter och försök igen.",
    errors: {
      invalidEmail: "Ange en giltig e-postadress",
      shortPassword: "Lösenordet måste ha minst 6 tecken",
    },
  },
  register: {
    title: "Skapa konto",
    description: "Registrera dig och börja söka efter drömbilen",
    google: "Registrera dig med Google",
    orContinue: "Eller fortsätt med",
    firstName: "Förnamn",
    lastName: "Efternamn",
    username: "Användarnamn",
    email: "E-post",
    password: "Lösenord",
    confirmPassword: "Bekräfta lösenord",
    termsNotice: "Jag accepterar",
    termsOfService: "Användarvillkor",
    privacyPolicy: "Integritetspolicy",
    createBtn: "Skapa konto",
    alreadyHave: "Har du redan ett konto?",
    login: "Logga in",
    and: "och",
    toast: {
      missingFields: {
        title: "Saknade fält",
        desc: "Fyll i alla obligatoriska fält",
      },
      invalidUsername: {
        title: "Ogiltigt användarnamn",
        desc: "Användarnamnet måste vara alfanumeriskt och mellan 3 och 20 tecken",
      },
      passwordMismatch: {
        title: "Lösenorden matchar inte",
        desc: "Se till att lösenorden matchar",
      },
      termsNotAccepted: {
        title: "Villkor inte accepterade",
        desc: "Du måste acceptera användarvillkoren och integritetspolicyn för att fortsätta",
      },
      success: {
        title: "Registrering lyckades",
        desc: "Välkommen till Amiquus! Du omdirigeras till e-postverifiering.",
      },
      failure: {
        title: "Registrering misslyckades",
        desc: "Kontrollera dina uppgifter och försök igen",
      },
    },
  },
  verifyEmail: {
    title: "Verifiera e-post",
    description: "Vi har skickat en verifieringskod till din e-postadress.",
    codeLabel: "Verifieringskod",
    verifyButton: "Verifiera e-post",
    updateEmailLabel: "Uppdatera e-post",
    updateEmailButton: "Uppdatera e-post",
    resendButton: "Skicka kod igen",
    resendCountdown: "Du kan skicka koden igen om {{seconds}}s",
    footerNote: "Fick du ingen kod? Kontrollera skräppostmappen.",
    toast: {
      verified: "E-post verifierad",
      failed: "Verifiering misslyckades",
      resent: "Verifieringskod skickad igen",
      error: "Fel",
      invalidEmail: "Ogiltig e-post",
      enterValidEmail: "Ange en giltig e-postadress",
      sameEmail: "Samma e-post",
      sameEmailDesc: "Den nya e-posten är identisk med den nuvarande",
      emailUpdated: "E-post uppdaterad",
    },
  },
  dashboardPayment: {
    add: "Lägg till betalningsmetod",
    description:
      "Lägg till ett nytt kredit- eller betalkort för prenumerationsbetalningar.",
    processing: "Bearbetar...",
    errorTitle: "Fel vid tillägg av betalningsmetod",
    errorMessage: "Ett oväntat fel inträffade",
    initError: {
      title: "Fel",
      description: "Kunde inte initiera betalningsinställningar",
    },
  },
  dashboard: {
    subscriptionCard: {
      years: "År",
      priceRange: "Pris",
      websites: "Sajter",
      updates: "Uppdateringar",
      language: "Språk",
      price: "Pris",
      edit: "Redigera",
      cancelAlert: "Avsluta avisering",
      cancelTitle: "Avsluta bilavisering",
      cancelDescription:
        "Är du säker på att du vill avsluta aviseringen för {{brand}} {{model}}? Detta stoppar alla aviseringar och du måste ställa in aviseringen igen.",
      keepMyAlert: "Behåll avisering",
      confirmCancel: "Avsluta avisering",
    },
    paymentMethodCard: {
      expires: "Går ut",
      default: "Standard",
      setAsDefault: "Ange som standard",
      remove: "Ta bort",
      setDefaultTitle: "Ange standardbetalningsmetod",
      setDefaultDescription:
        "Vill du ange kortet {{brand}}, som slutar på {{last4}}, som standardbetalningsmetod? Detta kort kommer att användas för alla framtida betalningar.",
      removeTitle: "Ta bort betalningsmetod",
      removeDescription:
        "Är du säker på att du vill ta bort kortet {{brand}}, som slutar på {{last4}}?",
      removeWarning:
        "Detta är din standardbetalningsmetod och borttagning kan påverka aktiva prenumerationer.",
      cancel: "Avbryt",
      confirmRemove: "Ta bort kort",
    },
  },
  profile: {
    tabs: {
      alerts: "Mina aviseringar",
      payments: "Betalningsmetoder",
    },
    sidebar: {
      memberSince: "Medlem sedan",
      subscriptions: "Prenumerationer",
      methods: "Betalningsmetoder",
      account: "Kontoinställningar",
      privacy: "Integritet och säkerhet",
      logout: "Logga ut",
    },
    account: {
      title: "Kontoinställningar",
      desc: "Uppdatera din kontoinformation och inställningar.",
      name: "Namn",
      email: "E-post",
      username: "Användarnamn",
      cancel: "Avbryt",
      save: "Spara ändringar",
    },
    security: {
      title: "Integritet och säkerhet",
      desc: "Hantera säkerhets- och integritetsinställningar.",
      current: "Nuvarande lösenord",
      new: "Nytt lösenord",
      confirm: "Bekräfta nytt lösenord",
      update: "Uppdatera lösenord",
    },
    logout: {
      title: "Logga ut",
      desc: "Är du säker på att du vill logga ut?",
      success: "Du har loggats ut framgångsrikt.",
    },
    alerts: {
      title: "Bilaviseringsprenumerationer",
      desc: "Hantera dina aviseringar och aviseringsinställningar.",
      add: "Lägg till ny avisering",
      none: "Du har inga aktiva bilaviseringar.",
      cta: "Skapa din första avisering",
      warning:
        "⚠️ Ändringar i prenumerationen träder i kraft i nästa faktureringscykel och endast efter en framgångsrik betalning. Vid misslyckad betalning behålls den nuvarande konfigurationen.",
    },
    payments: {
      title: "Betalningsmetoder",
      desc: "Hantera betalningsmetoder för prenumerationer.",
      none: "Du har inga sparade betalningsmetoder.",
      encrypted: "Dina betalningsuppgifter är krypterade och säkert lagrade.",
    },
  },
  setupAlerts: {
    title: "Ställ in bilaviseringar",
    subtitle: "Ställ in din Telegram-bot för att få aviseringar om drömbilen",
    basicPlan: "Basplan",
    baseTitle: "79,99 €/månad",
    button: "Starta bilaviseringsstjänst",
    cancel: "Avsluta när som helst",
    toasts: {
      terms: {
        title: "Villkor inte accepterade",
        description: "Du måste acceptera användarvillkoren för att fortsätta",
      },
      success: {
        title: "Prenumeration skapad",
        description: "Din prenumeration har skapats framgångsrikt",
      },
      error: {
        title: "Fel vid skapande av prenumeration",
      },
      contactBot: {
        title: "Botkontakt krävs",
        description:
          "För att få bilaviseringar måste du starta en konversation med vår Telegram-bot och skicka ett meddelande. Följ instruktionerna nedan.",
      },
    },
  },
  loginPrompt: {
    title: "Inloggning krävs",
    description:
      "Du måste vara inloggad för att fortsätta. Logga in eller registrera dig.",
    register: "Registrera dig",
    login: "Logga in",
  },
  waitlistPrompt: {
    title: "Gå med i väntelistan",
    description:
      "Vi är för närvarande fulla. Gå med i väntelistan för att bli meddelad när en plats blir ledig.",
    button: "Gå med i väntelistan",
  },
  subscription: {
    title: "Prenumerationsdetaljer",
    subTitle: "Redigera prenumerationsdetaljer nedan",
    error: "Tillbaka till instrumentpanelen",
    notFound: "Prenumeration hittades inte",
    notFoundSub: "Tillbaka till instrumentpanelen",
    description:
      "Du kan pausa prenumerationen när som helst. När pausad stoppas aviseringarna tills återaktivering.",
    form: {
      status: {
        label: "Status",
        placeholder: "Välj status",
        active: "Aktiv",
        paused: "Pausad",
      },
    },
    actions: {
      save: "Spara ändringar",
      back: "Tillbaka",
    },
    toasts: {
      success: {
        title: "Prenumeration uppdaterad",
        description:
          "Din prenumeration för {{brand}} {{model}} har uppdaterats framgångsrikt",
      },
      priceError: {
        title: "Kan inte uppdatera prenumeration",
        description:
          "Du kan inte pausa och uppdatera priset på prenumerationen samtidigt. Välj ett eller det andra.",
      },
      error: {
        title: "Fel vid uppdatering av prenumeration",
      },
    },
  },
  about: {
    title: "Om oss",
    description:
      "Vi revolutionerar sökandet efter den perfekta begagnade bilen med avancerad övervakningsteknik",
    meta: {
      title: "Om oss | Amiquus - Bilannonsövervakningstjänst",
      description:
        "Läs mer om Amiquus, vår mission och teamet bakom den smarta bilannonsövervakningstjänsten.",
    },
    story: {
      heading: "Vår historia",
      paragraphs: [
        "Amiquus föddes 2023 när vår grundare Alex tillbringade månader med att uppdatera sajter på jakt efter en sällsynt modell till bra pris. Efter missade möjligheter insåg han att det måste finnas ett bättre sätt.",
        "Med ett litet team av utvecklare och bilentusiaster byggde Alex ett system för att övervaka flera sajter samtidigt och skicka omedelbara aviseringar.",
        "Projektet växte snabbt och i början av 2025 blev Amiquus en tjänst för alla. Idag hjälper vi köpare över hela landet att spara tid och hitta bättre erbjudanden.",
      ],
    },
    mission: {
      heading: "Vår mission",
      items: [
        {
          title: "Spara tid",
          description:
            "Eliminera behovet av att ständigt uppdatera flera sajter med automatiserat sök och snabba aviseringar.",
        },
        {
          title: "Hitta bättre erbjudanden",
          description:
            "Var först med att veta om fantastiska erbjudanden och få ett försprång i en konkurrensutsatt marknad.",
        },
        {
          title: "Köp med förtroende",
          description:
            "Ta informerade beslut med fullständig överblick över flera pålitliga plattformar.",
        },
      ],
    },
    team: {
      heading: "Vårt team",
      members: [
        {
          name: "Alex Morgan",
          role: "Grundare och VD",
          bio: "Före detta programmerare med passion för bilar och innovativa lösningar.",
        },
        {
          name: "Sarah Chen",
          role: "Teknisk chef",
          bio: "Data science-expert, specialiserad på web scraping.",
        },
        {
          name: "Marcus Lee",
          role: "Utvecklingschef",
          bio: "Full-stack-ingenjör med erfarenhet av högpresterande aviseringsystem.",
        },
        {
          name: "Elena Rodriguez",
          role: "Kundsupport",
          bio: "Före detta bilförsäljare, dedikerad till att hjälpa till att hitta det perfekta fordonet.",
        },
      ],
    },
    join: {
      heading: "Gå med i teamet",
      description:
        "Vi söker alltid passionerade talanger inom teknik och revolutionering av bilköp.",
      cta: "Se öppna positioner",
    },
    questions: {
      heading: "Har du frågor?",
      description:
        "Läs mer om hur tjänsten fungerar, priser eller kontakta support.",
      links: {
        faq: "Besök FAQ",
        pricing: "Se priser",
        support: "Kontakta support",
      },
    },
  },
  terms: {
    metaTitle: "Användarvillkor | Amiquus",
    metaDescription:
      "Läs Amiquus användarvillkor som reglerar användningen av bilannonsövervakningstjänsten.",
    title: "Användarvillkor",
    lastUpdated: "Senast uppdaterad: 21 maj 2025.",
    sections: {
      "1": {
        id: "agreement",
        heading: "Godkännande av villkor",
        paragraphs: [
          "Dessa användarvillkor utgör ett juridiskt bindande avtal mellan dig och Amiquus avseende tillgång till och användning av vår sajt och tjänster.",
          "Genom att få tillgång till eller använda våra tjänster accepterar du dessa villkor. Om du inte godkänner någon del får du inte använda tjänsterna.",
        ],
        list: [],
      },
      "2": {
        id: "changes",
        heading: "Ändringar i villkoren",
        paragraphs: [
          "Vi förbehåller oss rätten att ändra eller ersätta dessa villkor efter eget gottfinnande. Om en ändring är väsentlig ger vi minst 30 dagars förvarning innan de nya villkoren träder i kraft.",
          "Genom att fortsätta använda tjänsten efter att ändringarna trätt i kraft accepterar du de reviderade villkoren. Om du inte godkänner de nya villkoren, sluta använda tjänsten.",
        ],
        list: [],
      },
      "3": {
        id: "account",
        heading: "Kontoförhållanden",
        paragraphs: ["För att använda våra tjänster måste du:"],
        list: [
          "Vara över 18 år",
          "Slutföra registreringsprocessen",
          "Tillhandahålla korrekt, fullständig och aktuell information",
          "Ansvara för säkerheten för ditt konto och lösenord",
          "Ansvara för all aktivitet på ditt konto",
          "Omedelbart rapportera obehörig användning eller missbruk av kontot",
        ],
      },
      "4": {
        id: "payment",
        heading: "Betalningsvillkor",
        paragraphs: [
          "Amiquus erbjuder prenumerationsbaserade tjänster med dessa villkor:",
        ],
        list: [
          "Alla priser är exklusive skatter, som läggs till om tillämpligt",
          "Prenumerationspriser kan ändras med 30 dagars förvarning",
          "Prenumerationer förnyas automatiskt om inte uppsagda före nästa faktureringscykel",
          "Återbetalningar hanteras fall för fall enligt återbetalningspolicyn",
          "Vi använder Stripe för säker betalningshantering, alla betalningsuppgifter lagras på Stripe",
        ],
      },
      "5": {
        id: "capacity",
        heading: "Kapacitetsbegränsningar",
        paragraphs: [
          "För att säkerställa tjänstekvalitet begränsar vi antalet aktiva prenumerationer till 30. När gränsen är nådd:",
        ],
        list: [
          "Nya användare kan gå med i väntelistan",
          "Plats på väntelistan bestäms efter ankomstordning",
          "När en plats blir ledig meddelar vi användare i ordning",
          "Vi förbehåller oss rätten att ändra kapacitetsgränser",
        ],
      },
      "6": {
        id: "scraping",
        heading: "Web scraping-begränsningar",
        paragraphs: [
          "Vår tjänst hämtar och bearbetar data från flera sajter. Genom att använda tjänsten erkänner du:",
        ],
        list: [
          "Amiquus respekterar användarvillkoren för de övervakade sajterna",
          "Vi använder rate limiting och etiska datainsamlingsmetoder",
          "Tillgängligheten för vissa sajter kan ändras",
          "Vi garanterar inte fullständighet eller aktualitet för insamlade data",
        ],
      },
      "7": {
        id: "intellectual",
        heading: "Intellektuell egendom",
        paragraphs: [
          "Amiquus-tjänsten, inklusive originalinnehåll, funktioner och funktionalitet, är och förblir exklusiv egendom av Amiquus. Tjänsten är skyddad av upphovsrätt, varumärken och andra lagar.",
          "Du får inte använda våra varumärken och designer utan föregående skriftligt medgivande från Amiquus.",
        ],
        list: [],
      },
      "8": {
        id: "termination",
        heading: "Uppsägning",
        paragraphs: [
          "Vi kan säga upp eller suspendera kontot omedelbart, utan förvarning, av vilken anledning som helst, inklusive brott mot villkoren.",
          "Vid uppsägning upphör rätten att använda tjänsten omedelbart. Om du vill säga upp kontot, sluta använda tjänsten eller kontakta oss för borttagning.",
        ],
        list: [],
      },
      "9": {
        id: "limitations",
        heading: "Ansvarsbegränsning",
        paragraphs: [
          "Amiquus, dess direktörer, anställda, partners eller leverantörer är inte ansvariga för indirekta, oavsiktliga, särskilda eller straffbara skador, inklusive förlust av vinst, data eller andra immateriella förluster, som härrör från:",
        ],
        list: [
          "Tillgång till eller oförmåga att få tillgång till tjänsten",
          "Innehåll eller beteende från tredje part på tjänsten",
          "Innehåll erhållet från tjänsten",
          "Obehörig tillgång till eller ändring av dina data",
        ],
      },
      "10": {
        id: "disclaimer",
        heading: "Ansvarsfriskrivning",
        paragraphs: [
          'Användning av tjänsten sker på egen risk. Tjänsten tillhandahålls "I BEFINTLIGT SKICK" och "SOM TILLGÄNGLIG". Vi garanterar inte att tjänsten kommer att vara oavbruten, snabb, säker eller felfri.',
          "Vi garanterar inte att resultaten av användningen av tjänsten kommer att vara korrekta eller tillförlitliga.",
        ],
        list: [],
      },
      "11": {
        id: "cookies",
        heading: "Cookiepolicy",
        paragraphs: [
          "Vår cookiepolicy förklarar vad cookies är, hur vi använder dem, hur tredje parter använder dem och dina val. Se cookie-sektionen i vår integritetspolicy.",
        ],
        list: [],
      },
      "12": {
        id: "governing-law",
        heading: "Tillämplig lag",
        paragraphs: [
          "Dessa villkor styrs av och tolkas i enlighet med lagarna i Amerikas förenta stater, utan hänsyn till lagkonflikter.",
          "Om vi inte utövar en rättighet eller bestämmelse utgör det inte ett avstående. Om en domstol ogiltigförklarar en bestämmelse förblir de återstående bestämmelserna i kraft.",
        ],
        list: [],
      },
      "13": {
        id: "contact",
        heading: "Kontakta oss",
        paragraphs: ["Om du har frågor om villkoren, kontakta oss:"],
        list: ["Via e-post: legal@amiquus.com", "Via kontaktsidan på vår sajt"],
      },
    },
  },
  privacy: {
    metaTitle: "Integritetspolicy | Amiquus",
    metaDescription:
      "Läs hur Amiquus hanterar dina personuppgifter, rättigheter och datainsamlingsmetoder.",
    title: "Integritetspolicy",
    lastUpdated: "Senast uppdaterad: 21 maj 2025.",
    sections: {
      "0": {
        id: "introduction",
        heading: "Introduktion",
        paragraphs: [
          "Välkommen till Amiquus. Vi respekterar din integritet och är engagerade i att skydda dina personuppgifter. Denna integritetspolicy förklarar hur vi hanterar dina data, dina rättigheter och hur lagen skyddar dig.",
        ],
      },
      "1": {
        id: "data-we-collect",
        heading: "Data vi samlar in",
        paragraphs: [
          "Vi samlar in olika typer av data för olika ändamål för att tillhandahålla och förbättra tjänsten:",
        ],
        list: [
          "Personuppgifter: e-postadress, förnamn, efternamn och profilbild (om tillhandahållen via tredje part).",
          "Kontoinformation: inloggningsuppgifter och kontoinställningar.",
          "Användningsdata: information om hur du använder sajten och tjänsterna.",
          "Sökkriterier: fordonskriterier du ställer in för övervakning (märke, modell, pris, etc.).",
          "Telegram-data: om du väljer Telegram-aviseringar lagrar vi ditt chatt-ID och bot-token.",
          "Betalningsdata: vid köp samlar vår betalningshanterare in nödvändiga data. Amiquus lagrar inte fullständiga kreditkortsdata.",
        ],
      },
      "2": {
        id: "how-we-use-data",
        heading: "Hur vi använder dina data",
        paragraphs: ["Vi använder dina personuppgifter för att:"],
        list: [
          "Tillhandahålla och underhålla tjänsten",
          "Meddela ändringar i tjänsten",
          "Tillåta interaktiva funktioner",
          "Tillhandahålla kundsupport",
          "Samla analys för att förbättra tjänsten",
          "Övervaka användningen av tjänsten",
          "Upptäcka, förhindra och lösa tekniska problem",
          "Bearbeta betalningar och förhindra bedrägeri",
          "Skicka annonser som matchar dina kriterier",
        ],
      },
      "3": {
        id: "data-storage",
        heading: "Datalagring och säkerhet",
        paragraphs: [
          "Vi tillämpar lämpliga säkerhetsåtgärder för att skydda mot obehörig tillgång, ändring eller förstörelse av data. Alla data lagras på säkra servrar med kryptering i transit och i vila.",
          "Vi behåller dina personuppgifter endast så länge som nödvändigt för ändamålen i denna policy, inklusive för att uppfylla lagliga, reglerande eller bokföringskrav.",
        ],
      },
      "4": {
        id: "gdpr",
        heading: "Dina rättigheter enligt GDPR",
        paragraphs: [
          "Om du är bosatt i Europeiska ekonomiska samarbetsområdet (EES) har du vissa dataskyddsrättigheter. Amiquus strävar efter att tillåta korrigering, ändring, radering eller begränsning av användningen av dina data.",
          "Du har följande rättigheter:",
        ],
        list: [
          "Rätt till tillgång, uppdatering eller radering av data",
          "Rätt till rättelse",
          "Rätt att invända",
          "Rätt till begränsning",
          "Rätt till dataportabilitet",
          "Rätt att återkalla samtycke",
        ],
      },
      "5": {
        id: "cookies",
        heading: "Cookiepolicy",
        paragraphs: [
          "Cookies är små data som lagras på din enhet. Vi använder dem för att:",
        ],
        list: [
          "Hålla sessionen inloggad",
          "Förstå sajtens användning",
          "Spara preferenser",
          "Personanpassa upplevelsen",
        ],
      },
      "6": {
        id: "third-party",
        heading: "Tredje parter",
        paragraphs: [
          "Vi kan anlita tredje parter för att utföra tjänsten, utföra uppgifter eller analysera användning.",
          "Dessa tredje parter inkluderar:",
        ],
        list: [
          "Betalningshanterare (Stripe)",
          "Analysleverantörer",
          "Kundsupporttjänster",
          "Hosting- och molnleverantörer",
        ],
        paragraphs2: [
          "Dessa tredje parter har endast tillgång till dina data för att utföra uppgifter och får inte avslöja eller använda dem för andra ändamål.",
        ],
      },
      "7": {
        id: "changes",
        heading: "Ändringar i integritetspolicyn",
        paragraphs: [
          "Vi kan uppdatera integritetspolicyn då och då. Vi meddelar dig genom att publicera den nya policyn på denna sida och uppdatera datumet 'Senast uppdaterad'.",
          "Vi rekommenderar att du regelbundet granskar policyn. Ändringar träder i kraft vid publicering.",
        ],
      },
      "8": {
        id: "contact",
        heading: "Kontakta oss",
        paragraphs: ["Om du har frågor om integritetspolicyn, kontakta oss:"],
        list: [
          "Via e-post: privacy@amiquus.com",
          "Via kontaktsidan på vår sajt",
        ],
      },
    },
  },
  faqs: {
    metaTitle: "FAQ | Amiquus",
    metaDescription:
      "Hitta svar på de vanligaste frågorna om Amiquus bilannonsövervakningstjänst.",
    title: "Vanliga frågor",
    subtitle:
      "Snabba svar på vanliga frågor om vår bilannonsövervakningstjänst",
    general: {
      heading: "Allmänna frågor",
      whatIs: {
        question: "Vad är Amiquus?",
        answer:
          "Amiquus är en tjänst som övervakar flera fordonssajter som matchar dina kriterier. När en match hittas får du en omedelbar avisering via Telegram.",
      },
      howItWorks: {
        question: "Hur fungerar det?",
        answer: [
          "Ställ in sökkriterier (märke, modell, pris, etc.)",
          "Välj sajter att övervaka",
          "Koppla Telegram för aviseringar",
          "Vårt system övervakar kontinuerligt de valda sajterna",
          "Vid match får du en omedelbar Telegram-avisering med detaljer och länk",
        ],
      },
      whichWebsites: {
        question: "Vilka sajter övervakar ni?",
        answerIntro: "Vi övervakar för närvarande följande stora plattformar:",
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
          "Vi lägger kontinuerligt till nya plattformar för bredare täckning.",
      },
    },
    subscription: {
      heading: "Frågor om prenumeration",
      cost: {
        question: "Hur mycket kostar prenumerationen?",
        answer: [
          "Priser börjar på 79,99 €/månad för att övervaka en sajt med uppdateringar varje 6 timmar. Extra sajter kostar 4,99 € per månad. Uppgradera för snabbare aviseringar.",
          "För prisdetaljer, se prisavsnittet på startsidan.",
        ],
      },
      cancel: {
        question: "Hur avslutar jag prenumerationen?",
        stepsIntro:
          "Du kan avsluta prenumerationen när som helst via profilsidan:",
        steps: [
          "Logga in på ditt konto",
          'Gå till sidan "Profil"',
          'Välj fliken "Prenumerationer"',
          'Klicka på "Avsluta prenumeration" bredvid prenumerationen du vill avsluta',
        ],
        note: "Prenumerationen förblir aktiv till slutet av den nuvarande faktureringsperioden.",
      },
      multiple: {
        question: "Kan jag ha flera prenumerationer för olika modeller?",
        answer:
          "Ja, du kan skapa flera prenumerationer under ett konto. Var och en kan övervaka olika modeller eller märken. Perfekt om du söker flera fordon eller hjälper vänner.",
      },
      limit: {
        question: "Varför finns en gräns för prenumeranter?",
        intro: "Vi begränsar tjänsten till 30 aktiva prenumeranter för att:",
        list: [
          "Högsta tjänstekvalitet och datanoggrannhet",
          "Personlig support för varje prenumerant",
          "Snabbare aviseringsleverans under topptimmar",
          "Etisk scraping som inte överbelastar målsajter",
        ],
        outro:
          "Om vi är fulla, gå med i väntelistan så meddelar vi dig när en plats blir ledig.",
      },
    },
    technical: {
      heading: "Tekniska frågor",
      telegram: {
        question: "Hur ställer jag in Telegram-aviseringar?",
        stepsIntro: "För att ställa in Telegram-aviseringar:",
        steps: [
          "Skapa en Telegram-bot via BotFather (instruktioner i instrumentpanelen)",
          "Kopiera bot-token och chatt-ID",
          'Ange uppgifterna i kontoinställningarna under "Aviseringsinställningar"',
          'Testa anslutningen med knappen "Skicka testmeddelande"',
        ],
        note: "Detaljerade instruktioner med skärmbilder tillgängliga under prenumerationsinställningen.",
      },
      frequency: {
        question: "Hur ofta får jag aviseringar?",
        intro: "Aviseringsfrekvensen beror på:",
        list: [
          "Det valda frekvenspaketet (från varje timme till varje minut)",
          "Antalet nya annonser som matchar dina kriterier",
          "Marknadsaktiviteten för det valda märket/modellen",
        ],
        outro:
          "Du får endast aviseringar när nya annonser matchar dina kriterier.",
      },
      privacy: {
        question: "Hur skyddas min integritet?",
        intro: "Vi tar integritet på allvar och använder:",
        list: [
          "Datakryptering i transit och i vila",
          "Säkra betalningar via Stripe",
          "Ingen datadelning med tredje part",
          "Du kan begära eller radera dina data när som helst",
        ],
        outro: "Mer information i vår fullständiga integritetspolicy.",
      },
    },
    support: {
      heading: "Har du fortfarande frågor?",
      description: "Om du inte hittade svaret står vår support redo!",
      button: "Kontakta support",
    },
  },
  waitlist: {
    metaTitle: "Gå med i väntelistan - Amiquus",
    metaDescription:
      "Gå med i Amiquus väntelista och bli meddelad när prenumerationer är tillgängliga.",
    title: "Gå med i vår väntelista",
    subtitle:
      "På grund av hög efterfrågan begränsar vi antalet aktiva prenumerationer för att garantera bästa kvalitet.",
    limited: {
      heading: "Begränsad tillgänglighet",
      description:
        "Vi begränsar systemet till endast 30 aktiva prenumeranter för att:",
      points: [
        "Exceptionell tillförlitlighet och scraping-hastighet för alla användare",
        "Mindre risk för blockering från sajter",
        "Personlig support för varje prenumerant",
        "Rättvis resursfördelning på servern",
      ],
      available:
        "{{remaining}} prenumerationsplatser av {{capacity}} är för närvarande tillgängliga.",
      full: "Alla prenumerationsplatser är för närvarande upptagna. Gå med i väntelistan för att bli meddelad när en plats blir ledig.",
    },
    success: {
      title: "Du är på väntelistan!",
      description: "Vi meddelar dig så snart en prenumerationsplats blir ledig",
      message:
        "Tack för ditt intresse för Amiquus! Vi har lagt till dig i väntelistan och kontaktar dig så snart en plats är tillgänglig.",
      button: "Tillbaka till startsidan",
    },
    cantJoin: {
      title: "Gå med i väntelistan",
      description: "Vi meddelar dig så snart en prenumerationsplats blir ledig",
    },
    form: {
      firstName: {
        label: "Förnamn",
        placeholder: "Kalle",
      },
      lastName: {
        label: "Efternamn",
        placeholder: "Andersson",
      },
      email: {
        label: "E-post",
        placeholder: "kalle.andersson@exempel.se",
        description:
          "Vi använder denna e-postadress för att meddela dig när en plats blir ledig",
      },
      submit: "Gå med i väntelistan",
      submitting: "Skickar...",
    },
  },
  support: {
    metaTitle: "Support | Amiquus - Hjälpcenter",
    metaDescription:
      "Få hjälp med ditt Amiquus-konto, prenumeration eller aviseringar. Utforska hjälpcentret eller kontakta support.",
    title: "Supportcenter",
    subtitle: "Hitta svar på vanliga frågor eller kontakta vårt supportteam",
    emailSupport: {
      title: "E-postsupport",
      description:
        "Skicka oss ett e-postmeddelande så svarar vi inom 24 timmar",
      email: "support@amiquus.com",
    },
    faqHeading: "Vanliga frågor",
    faqs: {
      telegram: {
        question: "Hur ställer jag in Telegram-aviseringar?",
        intro: "För att ställa in Telegram-aviseringar följ dessa steg:",
        steps: [
          "Skapa en Telegram-bot via BotFather (instruktioner i instrumentpanelen)",
          "Kopiera API-token och chatt-ID",
          'Ange uppgifterna i kontoinställningarna under "Aviseringsinställningar"',
          'Testa anslutningen med knappen "Skicka testmeddelande"',
        ],
        outro:
          "Om du behöver mer hjälp finns en detaljerad guide i din instrumentpanel.",
      },
      updates: {
        question: "Hur ofta uppdateras annonserna?",
        answer:
          "Uppdateringsfrekvensen beror på prenumerationspaketet. Basplaner får uppdateringar varje 6 timmar, premiumplaner kan vara varje 30 minuter. Du kan se och ändra den nuvarande frekvensen i prenumerationsinställningarna.",
      },
      facebook: {
        question: "Kan jag övervaka Facebook Marketplace?",
        answer:
          "Ja, vi stödjer övervakning av Facebook Marketplace. Ange URL:en till sökresultatsidan med tillämpade filter. Systemet övervakar sedan den sökningen för nya annonser som matchar dina kriterier.",
      },
      cancel: {
        question: "Hur avslutar jag prenumerationen?",
        answer:
          'Du kan avsluta prenumerationen när som helst via profilsidan. Klicka på fliken "Prenumerationer", hitta prenumerationen och klicka på "Avsluta prenumeration". Tjänsten förblir aktiv till slutet av faktureringsperioden.',
      },
      full: {
        question: "Vad händer om alla platser är upptagna?",
        answer:
          "För att behålla hög tjänstekvalitet begränsar vi antalet aktiva prenumerationer. Om alla platser är upptagna kan du gå med i väntelistan. När en plats blir ledig meddelar vi dig och du har prioritet framför allmänheten.",
      },
    },
    stillNeedHelp: {
      heading: "Behöver du mer hjälp?",
      description:
        "Om du inte hittade svaret, kontakta vårt supportteam. Vi är här för att hjälpa!",
      button: "Kontakta support",
    },
  },
  notFound: {
    title: "404 Sidan hittades inte",
    message: "Glömde du lägga till sidan i routern?",
  },
  emails: {
    verification: {
      subject: "Amiquus e-postverifieringskod",
      greeting: "Hej,",
      message: "Använd följande kod för att slutföra din registrering:",
      expiration: "Koden går ut om 10 minuter.",
    },
    invoice: {
      success: {
        subject: "Betalning mottagen Amiquus – Faktura #",
        h2Message: "Din Amiquus-prenumerationsbetalning lyckades!",
        greeting: "Hej,",
        paymentMessage: "Vi har mottagit din betalning på",
        downloadMessage:
          "Du kan visa eller ladda ner fakturan via följande länk:",
        viewInvoice: "Visa faktura",
        invoiceNumber: "Faktura #:",
      },
      pending: {
        subjectA: "Betalning avvaktar – Faktura",
        subjectB: "för din Amiquus-prenumeration",
        h2Message:
          "Åtgärd krävs: Slutför betalningen för din Amiquus-prenumeration",
        greeting: "Hej,",
        messageA: "Din faktura",
        messageB:
          "är fortfarande obetald. Slutför betalningen på för att aktivera prenumerationen",
        paymentMessage: "Du kan betala säkert via följande länk:",
        payInvoice: "Betala faktura",
        ignoreEmail:
          "Om du redan har betalat kan du ignorera detta e-postmeddelande.",
      },
      failed: {
        subject: "Betalning misslyckades – Faktura",
        message: "Vi kunde inte bearbeta din senaste betalning (försök",
        attemptsA: "Vi försöker igen snart. Ingen åtgärd krävs för tillfället.",
        attemptsB:
          "Vi har försökt debitera din betalningsmetod tre gånger, men alla försök misslyckades.",
        attemptsC:
          "Som ett resultat är din prenumeration <strong>tillfälligt pausad</strong>. Du får inga uppdateringar förrän återaktivering.",
        attemptsD:
          "Uppdatera din betalningsmetod och återaktivera prenumerationen från profilen:",
        viewInvoice: "Visa faktura",
        managePayment: "Hantera betalningsmetoder",
      },
    },
    waitlist: {
      subject: "Du är på Amiquus väntelista!",
      h2Message: "Du är på listan!",
      hi: "Hej",
      message:
        "Tack för att du gick med i Amiquus väntelista. Vi meddelar dig så snart en plats blir ledig.",
      anyQuestions:
        "Om du har frågor, tveka inte att svara på detta e-postmeddelande.",
    },
    common: {
      thanksMessage: "Tack för att du valde Amiquus!",
      signature: "Med vänliga hälsningar,<br/>Amiquus-teamet",
      team: "— Amiquus-teamet",
      needHelp: "Behöver du hjälp?",
      hello: "Hej",
    },
  },
};

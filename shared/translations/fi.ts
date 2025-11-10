// === fi.ts === Suomi
export const fi = {
  navigations: {
    features: "Ominaisuudet",
    how: "Näin se toimii",
    pricing: "Hinnoittelu",
    getAlerts: "Hanki hälytyksiä",
    waitlist: "Odotuslista",
    faq: "UKK",
    login: "Kirjaudu sisään",
    getStarted: "Aloita",
    subscribers: "Tilaajat",
    theme: "Teema",
    language: "Kieli",
    myAlerts: "Omat hälytykseni",
    profile: "Profiili",
    settings: "Asetukset",
    logout: "Kirjaudu ulos",
    signUp: "Rekisteröidy",
  },
  hero: {
    label: "Seuraa käytettyjen autojen ilmoituksia reaaliajassa!",
    title: "Älä koskaan missaa täydellistä autodiiliä",
    subtitle:
      "Amiquus ilmoittaa sinulle heti, kun unelma-autosi ilmestyy useille sivustoille. Saat hälytykset Telegramin kautta heti osuman löydyttyä.",
    button1: "Aseta hälytykset",
    button2: "Katso miten se toimii",
    trustIndicators: {
      websites: "Yli 15 sivustoa",
      realtime: "Reaaliaikaiset hälytykset",
      noSetup: "Ei asennusta",
      cancelAnytime: "Peruuta milloin tahansa",
    },
  },
  limited: {
    full: {
      title: "Tilausraja saavutettu",
      description:
        "Olemme saavuttaneet 30 aktiivisen tilaajan kapasiteetin. Liity odotuslistalle saadaksesi ilmoituksen, kun paikka vapautuu.",
      buttonText: "Liity odotuslistalle",
    },
    limited: {
      title: "Rajoitettu saatavuus",
      description:
        "Vain {{remaining}}/{{capacity}} paikasta jäljellä. Tilaa nyt ennen kuin ne loppuvat!",
      buttonText: "Aloita nyt",
    },
    available: {
      title: "Tilauksia saatavilla",
      description:
        "{{active}}/{{capacity}} tilausta on tällä hetkellä aktiivisena. Paljon tilaa sinulle!",
      buttonText: "Aloita nyt",
    },
  },
  features: {
    heading: "Miksi valita Amiquus?",
    subheading:
      "Säästä aikaa ja älä koskaan missaa täydellistä autoa automatisoidun palvelumme avulla.",
    multiSite: {
      title: "Monisivustovalvonta",
      description:
        "Seuraa useita autosivustoja samanaikaisesti ilman manuaalista tarkistamista.",
    },
    notifications: {
      title: "Välittömät hälytykset",
      description:
        "Saat välittömät hälytykset Telegramin kautta, kun auto vastaa kriteerejäsi.",
    },
    filters: {
      title: "Muokattavat suodattimet",
      description:
        "Aseta tarkat kriteerit: merkki, malli, vuosimalli, kilometrit, hinta – löydä juuri haluamasi.",
    },
    frequency: {
      title: "Säädettävä taajuus",
      description:
        "Valitse, kuinka usein uusia ilmoituksia tarkistetaan – tunnista reaaliaikaan.",
    },
    languages: {
      title: "Monikielinen tuki",
      description:
        "Saat hälytykset haluamallasi kielellä paremman ilmoitusten ymmärtämisen vuoksi.",
    },
    account: {
      title: "Helppo tilinhallinta",
      description:
        "Hallitse useita hakuprofiileja ja muuta tilaustasi muutamalla klikkauksella.",
    },
  },
  howItWorks: {
    title: "Näin Amiquus toimii",
    subtitle:
      "Aseta kerran ja anna järjestelmämme löytää täydellinen diili puolestasi",
    whyTitle: "Miksi valita Amiquus?",
    steps: {
      preferences: {
        title: "Aseta mieltymyksesi",
        description:
          "Valitse merkit, mallit, hintaluokat ja muut kiinnostavat kriteerit.",
      },
      telegram: {
        title: "Yhdistä Telegram",
        description:
          "Yhdistä Telegram-tilisi saadaksesi välittömät hälytykset uusista ilmoituksista.",
      },
      notifications: {
        title: "Saat välittömät hälytykset",
        description:
          "Saat ilmoituksen heti, kun sopiva auto ilmestyy sivustolle.",
      },
      findCar: {
        title: "Löydä täydellinen autosi",
        description:
          "Ole ensimmäinen tietämään uusista ilmoituksista ja varmista parhaat diilit.",
      },
    },
    features: [
      "Seuraa yli 15 sivustoa samanaikaisesti",
      "Muokattavat hakukriteerit edistyneellä suodatuksella",
      "Reaaliaikaiset hälytykset Telegramin kautta",
      "Automaattiset hälytykset hintojen laskuista ja uusista ilmoituksista",
      "Helppo asennus alle 5 minuutissa",
    ],
    setAlerts: "Aseta hälytykset",
    notificationMockup1: {
      title: "Uusi osuma löydetty!",
      description:
        "BMW 3-sarja, 2019, 32 500 € – Äskettäin julkaistu AutoTraderissa",
    },
    notificationMockup2: {
      title: "Telegram-hälytys",
      description: "Mercedes C-sarja, 2020, 30 000 km – Hinta laski 2 000 €",
    },
  },
  pricing: {
    title: "Yksinkertainen ja läpinäkyvä hinnoittelu",
    subtitle:
      "Hinnoittelumme perustuu tarpeisiisi. Aloita perussuunnitelmalla ja mukauta.",
    baseTitle: "Perussuunnitelma: 79,99 €/kk",
    includedTitle: "Sisältyy:",
    includedFeatures: [
      "Yhden sivuston valvonta",
      "Päivitykset tunnin välein",
      "Rajoittamattomat suodattimet",
      "Hälytykset Telegramin kautta",
    ],
    addonsTitle: "Lisäosat:",
    addons: [
      { name: "Jokainen lisä sivusto", price: 4.99 },
      { name: "Päivitykset 30 min välein", price: 2.99 },
      { name: "Päivitykset 15 min välein", price: 5.99 },
      { name: "Päivitykset 5 min välein", price: 9.99 },
      { name: "Päivitykset minuutin välein", price: 14.99 },
    ],
    footerNote:
      "Kaikki suunnitelmat sisältävät rajoittamattomat hakuprofiilit ja helpon tilaushallinnan.",
    button: "Aloita nyt",
  },
  signup: {
    heading: "Luo autohälytys",
    subheading:
      "Aseta henkilökohtaiset hälytykset autoilmoituksille muutamassa yksinkertaisessa vaiheessa.",
    cta: "Hanki hälytyksiä nyt",
    waitlist: {
      message:
        "Olemme tällä hetkellä täynnä. Liity odotuslistalle saadaksesi ilmoituksen, kun paikka vapautuu.",
      cta: "Liity odotuslistalle",
    },
    toast: {
      success: {
        title: "Tilaus luotu",
        description: "Tilauksesi on luotu onnistuneesti",
      },
      error: {
        title: "Tilauksen luonti epäonnistui",
        description: "Tilausta ei voitu luoda. Yritä uudelleen myöhemmin.",
      },
    },
  },
  payment: {
    toast: {
      success: {
        title: "Onnistui",
        description: "Maksutapasi on asetettu onnistuneesti.",
      },
      error: {
        title: "Virhe",
        fallback: "Odottamaton virhe. Yritä uudelleen.",
      },
    },
    button: {
      submit: "Aseta maksutapa",
      processing: "Käsitellään...",
    },
  },
  alertSchema: {
    errors: {
      carBrand: "Auton merkki vaaditaan",
      carModel: "Auton malli vaaditaan",
      fuelType: "Polttoainetyyppi vaaditaan",
      priceMin: "Minimihinta oltava numero",
      priceMax: "Maksimihinta oltava numero",
      yearMin: "Minimivuosi oltava kelvollinen",
      yearMax: "Maksimivuosi oltava kelvollinen",
      maxKilometers: "Maksimikilometrit oltava numero",
      telegramUsername: "Telegram-käyttäjänimi vaaditaan",
      telegramToken: "Telegram-bot-token vaaditaan",
      telegramChatId: "Telegram-chat-ID vaaditaan",
      websitesSelected: "Valitse vähintään yksi sivusto",
      notificationLanguage: "Hälytyskieli vaaditaan",
      facebookMarketplaceUrl:
        "Facebook Marketplace URL vaaditaan, jos Facebook valittu",
    },
  },
  personalInfo: {
    heading: "Henkilökohtaiset tiedot",
    description:
      "Anna henkilökohtaiset tietosi hälytysten oikean asetuksen varmistamiseksi.",
    labels: {
      firstName: "Etunimi",
      lastName: "Sukunimi",
      email: "Sähköpostiosoite",
    },
    placeholders: {
      firstName: "Matti",
      lastName: "Meikäläinen",
      email: "matti.meikalainen@esimerkki.fi",
    },
    errors: {
      firstName: "Etunimi vaaditaan",
      lastName: "Sukunimi vaaditaan",
      email: "Anna kelvollinen sähköpostiosoite",
    },
    actions: {
      login: "Kirjaudu sisään tai rekisteröidy jatkaaksesi",
      continue: "Jatka",
    },
  },
  websiteSelection: {
    heading: "Sivustovalinta",
    description: "Valitse seurattavat sivustot ja haluttu päivitystaajuus.",
    labels: {
      websites: "Seurattavat sivustot",
      facebookUrl: "Facebook Marketplace URL",
      updateFrequency: "Päivitystaajuus",
    },
    placeholders: {
      frequency: "Valitse taajuus",
    },
    help: {
      websites:
        "Valitse yksi tai useampi sivusto autoilmoitusten seuraamiseen.",
      facebookUrl: "Liitä Facebook Marketplace -hakutulosten URL.",
      videoTitle: "Tarvitsetko apua Facebook Marketplace -linkin löytämiseen?",
      videoDesc: "Katso alla oleva video vaiheittaisilla ohjeilla.",
      updateFrequency:
        "Kuinka usein tarkistamme uusia ilmoituksia? Korkeammat taajuudet voivat maksaa enemmän.",
    },
    errors: {
      websites: "Valitse vähintään yksi sivusto",
      facebookUrl: "Facebook Marketplace URL vaaditaan, jos Facebook valittu",
    },
    actions: {
      previous: "Edellinen",
      continue: "Jatka",
    },
  },
  carDetails: {
    heading: "Auton tiedot",
    description:
      "Anna etsimäsi auton tiedot. Kaikki kentät valinnaisia – jätä tyhjiksi laajempia tuloksia varten.",
    labels: {
      carBrand: "Auton merkki",
      carModel: "Auton malli",
      fuelType: "Polttoainetyyppi",
      priceMin: "Minimihinta",
      priceMax: "Maksimihinta",
      yearMin: "Minimivuosi",
      yearMax: "Maksimivuosi",
      maxKilometers: "Maksimikilometrit",
    },
    placeholders: {
      carBrand: "Valitse merkki",
      carModel: "Valitse malli",
      carModelDisabled: "Valitse merkki ensin",
      fuelType: "Valitse polttoainetyyppi",
      priceMin: "Anna minimihinta",
      priceMax: "Anna maksimihinta",
      yearMin: "Anna minimivuosi",
      yearMax: "Anna maksimivuosi",
      maxKilometers: "Anna maksimikilometrit",
    },
    options: {
      noModelsAvailable: "Ei malleja saatavilla",
    },
    errors: {
      carBrand: "Auton merkki vaaditaan",
      carModel: "Auton malli vaaditaan",
      fuelType: "Polttoainetyyppi vaaditaan",
      priceMin: "Minimihinta oltava numero",
      priceMax: "Maksimihinta oltava numero",
      yearMin: "Minimivuosi oltava kelvollinen",
      yearMax: "Maksimivuosi oltava kelvollinen",
      maxKilometers: "Maksimikilometrit oltava numero",
    },
    actions: {
      previous: "Edellinen",
      continue: "Jatka",
    },
  },
  telegram: {
    heading: "Telegram-asetukset",
    description: "Aseta Telegram-hälytykset antamalla bot-token ja chat-ID.",
    subHeading: "Aseta Telegram-bot",
    info: "Ongelmia Telegram-botin luomisessa? Ota yhteyttä, niin autamme.",
    contact: "Ota yhteyttä",
    instructions: {
      botTitle: "Näin saat Telegram-bot-tokenin:",
      botStep1: "Avaa Telegram ja etsi @BotFather",
      botStep2: "Lähetä komento /newbot",
      botStep3: "Seuraa ohjeita botin luomiseksi",
      botStep4: "Kopioi BotFatherin antama token",

      chatTitle: "Näin saat Telegram-chat-ID:si:",
      chatStep1: "Avaa Telegram ja etsi @userinfobot",
      chatStep2: "Lähetä mikä tahansa viesti botille",
      chatStep3: "Botti vastaa tiedoillasi, mukaan lukien chat-ID",
      chatStep4: "Kopioi chat-ID (numero)",
    },

    videoPrompt: "Tarvitsetko apua bot-tokenin ja chat-ID:n asetukseen?",
    videoDescription: "Katso alla oleva video vaiheittaisilla ohjeilla.",

    labels: {
      token: "Telegram-bot-token",
      chatId: "Telegram-chat-ID:si",
      language: "Hälytyskieli",
      username: "Telegram-käyttäjänimi",
    },

    placeholders: {
      token: "Anna BotFatherin antama bot-token",
      chatId: "Anna Telegram-chat-ID:si",
      language: "Valitse Telegram-viestien kieli",
      username: "Anna Telegram-käyttäjänimesi",
    },
    usernameDescription:
      "Tämä on Telegram-tilisi käyttäjänimi (ilman @-merkkiä).",
    examples: {
      token: "Esimerkki: 5432109876:ABCDefGhIJklMNoPqrSTuvWXyz1234567890",
      chatId: "Saat tämän lähettämällä viestin @userinfobotille Telegramissa",
    },
    setupTitle: "Asetusohjeet:",
    setupSteps: [
      'Avaa Telegram ja etsi "BotFather"',
      'Aloita keskustelu BotFatherin kanssa klikkaamalla "Start"',
      "Anna /newbot ja seuraa ohjeita uuden botin luomiseksi",
      "Valitse nimi botillesi",
      "Valitse käyttäjänimi botille (täytyy loppua 'bot')",
      "Kopioi BotFatherin antama API-token",
      "Lähetä viesti uudelle botillesi aktivoidaksesi keskustelun",
    ],
    chatIdTitle: "Näin saat Telegram-chat-ID:si:",
    chatIdSteps: [
      'Avaa Telegram ja etsi "userinfobot"',
      "Lähetä mikä tahansa viesti botille",
      "Botti vastaa tiedoillasi, mukaan lukien chat-ID",
      "Kopioi chat-ID:si",
    ],
    helpTitle: "Tarvitsetko apua bot-tokenin ja chat-ID:n asetukseen?",
    helpDescription: "Katso alla oleva video vaiheittaisilla ohjeilla.",
    botTokenLabel: "Telegram-bot-token",
    botTokenPlaceholder: "Anna BotFatherin antama bot-token",
    botTokenExample:
      "Esimerkki: 5432109876:ABCDefGhIJklMNoPqrSTuvWXyz1234567890",
    chatIdLabel: "Telegram-chat-ID:si",
    chatIdPlaceholder: "Anna Telegram-chat-ID:si",
    chatIdDescription:
      "Saat tämän lähettämällä viestin @userinfobotille Telegramissa",
    languageLabel: "Hälytyskieli",
    languagePlaceholder: "Valitse Telegram-viestien kieli",
    languages: {
      en: "Englanti",
      de: "Saksa",
      fr: "Ranska",
      es: "Espanja",
      it: "Italia",
      nl: "Hollanti",
      sv: "Ruotsi",
      da: "Tanska",
      nb: "Norja",
      fi: "Suomi",
    },
    previewTitle: "Telegram-hälytyksen esikatselu",
    carAlertTitle: "Uusi autohälytys!",
    priceLabel: "Hinta: {{price}}",
    kilometresLabel: "Kilometrit: {{kms}}",
    locationLabel: "Sijainti: {{location}}",
    viewListing: "Näytä ilmoitus →",
    errors: {
      token: "Telegram-bot-token vaaditaan",
      chatId: "Telegram-chat-ID vaaditaan",
      language: "Hälytyskieli vaaditaan",
      username: "Telegram-käyttäjänimi vaaditaan",
    },

    actions: {
      previous: "Edellinen",
      continue: "Jatka",
    },
    contactBotInstruction:
      "Aloita keskustelu Telegram-botimme kanssa klikkaamalla alla olevaa linkkiä ja lähettämällä viesti:",
    contactBotNote:
      "Tämä vaaditaan autohälytysten vastaanottamiseen. Jos olet tietokoneella, skannaa QR-koodi.",
    confirmContact:
      "Olen aloittanut keskustelun botin kanssa ja lähettänyt viestin",
  },
  review: {
    title: "Tilauksesi yhteenveto",
    description: "Tarkista tilauksen tiedot ennen maksua.",

    personal: {
      title: "Henkilökohtaiset tiedot",
      name: "Nimi",
      email: "Sähköposti",
    },

    monitoring: {
      title: "Seuranta-asetukset",
      websites: "Sivustot",
      facebookUrl: "Facebook URL",
      updateFrequency: "Päivitystaajuus",
    },

    specs: {
      title: "Auton tekniset tiedot",
      brand: "Merkki",
      model: "Malli",
      fuelType: "Polttoaine",
      yearRange: "Vuosimalli",
      mileage: "Kilometrit (km)",
      price: "Hinta (€)",
    },

    notification: {
      title: "Hälytysasetukset",
      telegram: "Telegram-bot",
      language: "Hälytyskieli",
    },

    summary: {
      title: "Tilausyhteenveto",
      base: "Perustilaus",
      extraWebsites: "Lisäsivustot",
      frequencyUpgrade: "Taajuuspäivitys",
      total: "Yhteensä (kuukausittain)",
    },

    terms: {
      checkbox: "Hyväksyn",
      tos: "Käyttöehdot",
      privacy: "Tietosuojakäytäntö",
      note: "Tilauksesi uusitaan automaattisesti kuukausittain. Voit peruuttaa milloin tahansa.",
      error: "Sinun täytyy hyväksyä käyttöehdot",
    },

    actions: {
      previous: "Edellinen",
      submit: "Siirry maksuun",
    },
  },
  faq: {
    title: "Usein kysytyt kysymykset",
    subtitle: "Löydä vastaukset yleisimpiin kysymyksiin palvelustamme.",
    contactPrompt: "Onko sinulla vielä kysymyksiä?",
    contactLink: "Ota yhteyttä tukeen",
    questions: [
      {
        question:
          "Kuinka nopeasti saan hälytyksen uuden ilmoituksen julkaisun jälkeen?",
        answer:
          "Hälytysnopeus riippuu valitusta päivitystaajuudesta. Tuntisuunnitelmalla saat hälytyksen tunnin sisällä julkaisusta. Lähes välittömiä hälytyksiä (muutamassa minuutissa) varten päivitä tiheämpään suunnitelmaan.",
      },
      {
        question: "Voinko seurata useita eri automalleja samanaikaisesti?",
        answer:
          "Kyllä! Voit luoda useita hakuprofiileja eri kriteereillä. Jokainen profiili lasketaan erilliseksi tilaukseksi, mutta hallitset niitä kaikki yhdeltä tililtä.",
      },
      {
        question: "Mitkä sivustot ovat tällä hetkellä tuettuja?",
        answer:
          "Tuemme tällä hetkellä suuria alustoja, kuten AutoTrader, CarGurus, Cars.com ja Facebook Marketplace. Lisäämme jatkuvasti uusia sivustoja pyynnöstä.",
      },
      {
        question: "Tarvitsenko teknisiä taitoja Telegram-bottiin?",
        answer:
          "Ei! Annamme yksityiskohtaiset ohjeet tekstinä ja videona. Useimmat käyttäjät asettavat botin alle 5 minuutissa.",
      },
      {
        question: "Voinko muuttaa hakukriteerejä tilauksen asetuksen jälkeen?",
        answer:
          "Kyllä, voit muuttaa kriteerejä milloin tahansa hallintapaneelista. Muutokset astuvat voimaan heti.",
      },
      {
        question: "Kuinka perun tilauksen?",
        answer:
          'Voit peruuttaa tilauksen milloin tahansa "Tilaukset"-osiossa hallintapaneelissa. Palvelu pysyy aktiivisena laskutuskauden loppuun asti.',
      },
    ],
  },
  footer: {
    brandTitle: "Amiquus",
    brandDescription:
      "Henkilökohtainen avustajasi täydellisen käytetyn auton diilin löytämiseen oikeaan aikaan.",
    quickLinks: "Pikalinkit",
    features: "Ominaisuudet",
    pricing: "Hinnoittelu",
    faq: "UKK",
    getStarted: "Aloita",
    legal: "Lainsäädäntö",
    terms: "Käyttöehdot",
    privacy: "Tietosuojakäytäntö",
    cookies: "Evästekäytäntö",
    gdpr: "GDPR-yhteensopivuus",
    contact: "Yhteys",
    email: "support@amiquus.com",
    telegram: "Ota yhteyttä Telegramissa",
    copyright: "Kaikki oikeudet pidätetään.",
    about: "Tietoa meistä",
    blog: "Blogi",
    careers: "Urat",
    support: "Tuki",
  },
  login: {
    title: "Kirjaudu tilille",
    description: "Anna sähköposti ja salasana päästäksesi hallintapaneeliin",
    emailLabel: "Sähköposti",
    passwordLabel: "Salasana",
    loginButton: "Kirjaudu sisään",
    loggingIn: "Kirjaudutaan...",
    loginWithGoogle: "Kirjaudu Googlella",
    or: "tai",
    noAccount: "Eikö sinulla ole tiliä?",
    registerLink: "Rekisteröidy",
    successTitle: "Kirjautuminen onnistui",
    successMessage: "Olet kirjautunut sisään onnistuneesti.",
    errorTitle: "Kirjautuminen epäonnistui",
    genericError: "Tarkista tietosi ja yritä uudelleen.",
    errors: {
      invalidEmail: "Anna kelvollinen sähköpostiosoite",
      shortPassword: "Salasanan täytyy olla vähintään 6 merkkiä",
    },
  },
  register: {
    title: "Luo tili",
    description: "Rekisteröidy ja aloita unelma-auton etsiminen",
    google: "Rekisteröidy Googlella",
    orContinue: "Tai jatka",
    firstName: "Etunimi",
    lastName: "Sukunimi",
    username: "Käyttäjänimi",
    email: "Sähköposti",
    password: "Salasana",
    confirmPassword: "Vahvista salasana",
    termsNotice: "Hyväksi",
    termsOfService: "Käyttöehdot",
    privacyPolicy: "Tietosuojakäytäntö",
    createBtn: "Luo tili",
    alreadyHave: "Onko sinulla jo tili?",
    login: "Kirjaudu sisään",
    and: "ja",
    toast: {
      missingFields: {
        title: "Puuttuvat kentät",
        desc: "Täytä kaikki vaaditut kentät",
      },
      invalidUsername: {
        title: "Virheellinen käyttäjänimi",
        desc: "Käyttäjänimen täytyy olla aakkosnumeerinen ja 3–20 merkkiä",
      },
      passwordMismatch: {
        title: "Salasanat eivät täsmää",
        desc: "Varmista, että salasanat täsmäävät",
      },
      termsNotAccepted: {
        title: "Ehtoja ei hyväksytty",
        desc: "Sinun täytyy hyväksyä käyttöehdot ja tietosuojakäytäntö jatkaaksesi",
      },
      success: {
        title: "Rekisteröinti onnistui",
        desc: "Tervetuloa Amiquukseen! Sinut ohjataan sähköpostivahvistukseen.",
      },
      failure: {
        title: "Rekisteröinti epäonnistui",
        desc: "Tarkista tietosi ja yritä uudelleen",
      },
    },
  },
  verifyEmail: {
    title: "Vahvista sähköposti",
    description: "Olemme lähettäneet vahvistuskoodin sähköpostiosoitteeseesi.",
    codeLabel: "Vahvistuskoodi",
    verifyButton: "Vahvista sähköposti",
    updateEmailLabel: "Päivitä sähköposti",
    updateEmailButton: "Päivitä sähköposti",
    resendButton: "Lähetä koodi uudelleen",
    resendCountdown: "Voit lähettää koodin uudelleen {{seconds}}s kuluttua",
    footerNote: "Etkö saanut koodia? Tarkista roskapostikansio.",
    toast: {
      verified: "Sähköposti vahvistettu",
      failed: "Vahvistus epäonnistui",
      resent: "Vahvistuskoodi lähetetty uudelleen",
      error: "Virhe",
      invalidEmail: "Virheellinen sähköposti",
      enterValidEmail: "Anna kelvollinen sähköpostiosoite",
      sameEmail: "Sama sähköposti",
      sameEmailDesc: "Uusi sähköposti on sama kuin nykyinen",
      emailUpdated: "Sähköposti päivitetty",
    },
  },
  dashboardPayment: {
    add: "Lisää maksutapa",
    description: "Lisää uusi luotto- tai pankkikortti tilausmaksuja varten.",
    processing: "Käsitellään...",
    errorTitle: "Virhe maksutavan lisäyksessä",
    errorMessage: "Odottamaton virhe tapahtui",
    initError: {
      title: "Virhe",
      description: "Maksuasetuksia ei voitu alustaa",
    },
  },
  dashboard: {
    subscriptionCard: {
      years: "Vuosimallit",
      priceRange: "Hinta",
      websites: "Sivustot",
      updates: "Päivitykset",
      language: "Kieli",
      price: "Hinta",
      edit: "Muokkaa",
      cancelAlert: "Peru hälytys",
      cancelTitle: "Peru autohälytys",
      cancelDescription:
        "Haluatko varmasti peruuttaa {{brand}} {{model}} -hälytyksen? Tämä lopettaa kaikki hälytykset, ja sinun täytyy asettaa hälytys uudelleen.",
      keepMyAlert: "Pidä hälytys",
      confirmCancel: "Peru hälytys",
    },
    paymentMethodCard: {
      expires: "Vanhenee",
      default: "Oletus",
      setAsDefault: "Aseta oletukseksi",
      remove: "Poista",
      setDefaultTitle: "Aseta oletusmaksutapa",
      setDefaultDescription:
        "Haluatko asettaa kortin {{brand}}, joka päättyy {{last4}}, oletusmaksutavaksi? Tätä korttia käytetään kaikkiin tuleviin maksuihin.",
      removeTitle: "Poista maksutapa",
      removeDescription:
        "Haluatko varmasti poistaa kortin {{brand}}, joka päättyy {{last4}}?",
      removeWarning:
        "Tämä on oletusmaksutapasi, ja poistaminen voi vaikuttaa aktiivisiin tilauksiin.",
      cancel: "Peruuta",
      confirmRemove: "Poista kortti",
    },
  },
  profile: {
    tabs: {
      alerts: "Omat hälytykset",
      payments: "Maksutavat",
    },
    sidebar: {
      memberSince: "Jäsen vuodesta",
      subscriptions: "Tilaukset",
      methods: "Maksutavat",
      account: "Tiliasetukset",
      privacy: "Tietosuoja ja turvallisuus",
      logout: "Kirjaudu ulos",
    },
    account: {
      title: "Tiliasetukset",
      desc: "Päivitä tilitietosi ja asetuksesi.",
      name: "Nimi",
      email: "Sähköposti",
      username: "Käyttäjänimi",
      cancel: "Peruuta",
      save: "Tallenna muutokset",
    },
    security: {
      title: "Tietosuoja ja turvallisuus",
      desc: "Hallitse turvallisuus- ja tietosuoja-asetuksia.",
      current: "Nykyinen salasana",
      new: "Uusi salasana",
      confirm: "Vahvista uusi salasana",
      update: "Päivitä salasana",
    },
    logout: {
      title: "Kirjaudu ulos",
      desc: "Haluatko varmasti kirjautua ulos?",
      success: "Olet kirjautunut ulos onnistuneesti.",
    },
    alerts: {
      title: "Autohälytystilaukset",
      desc: "Hallitse hälytyksiäsi ja hälytysasetuksia.",
      add: "Lisää uusi hälytys",
      none: "Sinulla ei ole aktiivisia autohälytyksiä.",
      cta: "Luo ensimmäinen hälytyksesi",
      warning:
        "⚠️ Tilauksen muutokset astuvat voimaan seuraavassa laskutusjaksossa ja vain onnistuneen maksun jälkeen. Epäonnistuneessa maksussa nykyinen kokoonpano säilyy.",
    },
    payments: {
      title: "Maksutavat",
      desc: "Hallitse tilausten maksutapoja.",
      none: "Sinulla ei ole tallennettuja maksutapoja.",
      encrypted: "Maksutietosi ovat salattuja ja turvallisesti tallennettuja.",
    },
  },
  setupAlerts: {
    title: "Aseta autohälytykset",
    subtitle: "Aseta Telegram-bot saadaksesi hälytyksiä unelma-autostasi",
    basicPlan: "Perussuunnitelma",
    baseTitle: "79,99 €/kk",
    button: "Käynnistä autohälytys",
    cancel: "Peruuta milloin tahansa",
    toasts: {
      terms: {
        title: "Ehtoja ei hyväksytty",
        description: "Sinun täytyy hyväksyä käyttöehdot jatkaaksesi",
      },
      success: {
        title: "Tilaus luotu",
        description: "Tilauksesi on luotu onnistuneesti",
      },
      error: {
        title: "Virhe tilauksen luonnissa",
      },
      contactBot: {
        title: "Bot-yhteys vaaditaan",
        description:
          "Autohälytysten vastaanottamiseksi sinun täytyy aloittaa keskustelu Telegram-botimme kanssa ja lähettää viesti. Seuraa alla olevia ohjeita.",
      },
    },
  },
  loginPrompt: {
    title: "Kirjautuminen vaaditaan",
    description:
      "Sinun täytyy olla kirjautunut jatkaaksesi. Kirjaudu sisään tai rekisteröidy.",
    register: "Rekisteröidy",
    login: "Kirjaudu sisään",
  },
  waitlistPrompt: {
    title: "Liity odotuslistalle",
    description:
      "Olemme tällä hetkellä täynnä. Liity odotuslistalle saadaksesi ilmoituksen, kun paikka vapautuu.",
    button: "Liity odotuslistalle",
  },
  subscription: {
    title: "Tilauksen tiedot",
    subTitle: "Muokkaa tilauksen tietoja alla",
    error: "Takaisin hallintapaneeliin",
    notFound: "Tilausta ei löydy",
    notFoundSub: "Takaisin hallintapaneeliin",
    description:
      "Voit keskeyttää tilauksen milloin tahansa. Keskeytettynä hälytykset pysähtyvät, kunnes aktivoit uudelleen.",
    form: {
      status: {
        label: "Tila",
        placeholder: "Valitse tila",
        active: "Aktiivinen",
        paused: "Keskeytetty",
      },
    },
    actions: {
      save: "Tallenna muutokset",
      back: "Takaisin",
    },
    toasts: {
      success: {
        title: "Tilaus päivitetty",
        description:
          "Tilauksesi {{brand}} {{model}} on päivitetty onnistuneesti",
      },
      priceError: {
        title: "Tilausta ei voi päivittää",
        description:
          "Et voi keskeyttää ja päivittää tilauksen hintaa samanaikaisesti. Valitse toinen.",
      },
      error: {
        title: "Virhe tilauksen päivityksessä",
      },
    },
  },
  about: {
    title: "Tietoa meistä",
    description:
      "Mullistamme täydellisen käytetyn auton etsinnän edistyneellä valvontatekniikalla",
    meta: {
      title: "Tietoa meistä | Amiquus - Autoilmoitusten valvontapalvelu",
      description:
        "Tutustu Amiquukseen, missioomme ja tiimiimme älykkään autoilmoitusten valvontapalvelun takana.",
    },
    story: {
      heading: "Tarinaamme",
      paragraphs: [
        "Amiquus alkoi vuonna 2023, kun perustajamme Alex käytti kuukausia sivustojen päivitykseen harvinaisen mallin löytämiseksi hyvään hintaan. Menetettyjen tilaisuuksien jälkeen hän tajusi, että tarvittiin parempi tapa.",
        "Pienen kehittäjä- ja autoentusiastitiimin kanssa Alex rakensi järjestelmän useiden sivustojen samanaikaiseen valvontaan ja välittömiin hälytyksiin.",
        "Projekti kasvoi nopeasti, ja vuoden 2025 alussa Amiquus avattiin kaikille. Nykyään autamme ostajia ympäri maata säästämään aikaa ja löytämään parempia diilejä.",
      ],
    },
    mission: {
      heading: "Missiomme",
      items: [
        {
          title: "Säästä aikaa",
          description:
            "Poista tarve jatkuvaan sivustojen päivitykseen automatisoidulla haulla ja oikea-aikaisilla hälytyksillä.",
        },
        {
          title: "Löydä parempia diilejä",
          description:
            "Ole ensimmäinen tietämään upeista tarjouksista ja saa etumatka kilpailullisilla markkinoilla.",
        },
        {
          title: "Osta luottavaisin mielin",
          description:
            "Tee tietoon perustuvia päätöksiä täydellä yleiskatsauksella useista luotettavista alustoista.",
        },
      ],
    },
    team: {
      heading: "Tiimimme",
      members: [
        {
          name: "Alex Morgan",
          role: "Perustaja ja toimitusjohtaja",
          bio: "Entinen ohjelmoija intohimoinen autoihin ja innovatiivisiin ratkaisuihin.",
        },
        {
          name: "Sarah Chen",
          role: "Tekninen johtaja",
          bio: "Data science -asiantuntija, erikoistunut web scrapingiin.",
        },
        {
          name: "Marcus Lee",
          role: "Kehitysjohtaja",
          bio: "Full-stack insinööri kokemusta korkean suorituskyvyn hälytysjärjestelmistä.",
        },
        {
          name: "Elena Rodriguez",
          role: "Asiakastuki",
          bio: "Entinen autokauppias, omistautunut täydellisen ajoneuvon löytämiseen.",
        },
      ],
    },
    join: {
      heading: "Liity tiimiin",
      description:
        "Etsimme aina intohimoisia kykyjä teknologiaan ja autokaupan mullistamiseen.",
      cta: "Katso avoimet paikat",
    },
    questions: {
      heading: "Onko sinulla kysymyksiä?",
      description:
        "Opi lisää palvelun toiminnasta, hinnoittelusta tai ota yhteyttä tukeen.",
      links: {
        faq: "Vieraile UKK:ssa",
        pricing: "Katso hinnoittelu",
        support: "Ota yhteyttä tukeen",
      },
    },
  },
  terms: {
    metaTitle: "Käyttöehdot | Amiquus",
    metaDescription:
      "Lue Amiquuksen käyttöehdot, jotka säätelevät autoilmoitusten valvontapalvelun käyttöä.",
    title: "Käyttöehdot",
    lastUpdated: "Viimeksi päivitetty: 21. toukokuuta 2025.",
    sections: {
      "1": {
        id: "agreement",
        heading: "Ehtojen hyväksyntä",
        paragraphs: [
          "Nämä käyttöehdot muodostavat oikeudellisesti sitovan sopimuksen sinun ja Amiquuksen välillä sivustomme ja palveluidemme käytöstä.",
          "Käyttämällä palveluitamme hyväksyt nämä ehdot. Jos et hyväksy mitään osaa, et saa käyttää palveluita.",
        ],
        list: [],
      },
      "2": {
        id: "changes",
        heading: "Ehtojen muutokset",
        paragraphs: [
          "Pidätämme oikeuden muuttaa tai korvata näitä ehtoja harkintamme mukaan. Jos muutos on olennainen, annamme vähintään 30 päivän ennakkoilmoituksen ennen uusien ehtojen voimaantuloa.",
          "Jatkamalla palvelun käyttöä muutosten voimaantulon jälkeen hyväksyt tarkistetut ehdot. Jos et hyväksy uusia ehtoja, sinun täytyy lopettaa palvelun käyttö.",
        ],
        list: [],
      },
      "3": {
        id: "account",
        heading: "Tilisuhde",
        paragraphs: ["Palveluidemme käyttöä varten sinun täytyy:"],
        list: [
          "Olla yli 18-vuotias",
          "Suorittaa rekisteröintiprosessi",
          "Antaa tarkat, täydelliset ja ajantasaiset tiedot",
          "Olla vastuussa tilisi ja salasanasi turvallisuudesta",
          "Olla vastuussa kaikesta tilisi toiminnasta",
          "Ilmoittaa välittömästi luvattomasta käytöstä tai tilin väärinkäytöstä",
        ],
      },
      "4": {
        id: "payment",
        heading: "Maksuehdot",
        paragraphs: [
          "Amiquus tarjoaa tilauspohjaisia palveluita näillä ehdoilla:",
        ],
        list: [
          "Kaikki hinnat ovat ilman veroja, jotka lisätään tarvittaessa",
          "Tilaushinnat voivat muuttua 30 päivän ennakkoilmoituksella",
          "Tilaukset uusitaan automaattisesti, ellei peruta ennen seuraavaa laskutusjaksoa",
          "Hyvitykset käsitellään tapauskohtaisesti hyvityskäytännön mukaisesti",
          "Käytämme Stripeä turvalliseen maksujen käsittelyyn, kaikki maksutiedot tallennetaan Stripelle",
        ],
      },
      "5": {
        id: "capacity",
        heading: "Kapasiteettirajoitukset",
        paragraphs: [
          "Palvelun laadun varmistamiseksi rajoitamme aktiivisten tilausten määrän 30:een. Kun raja on saavutettu:",
        ],
        list: [
          "Uudet käyttäjät voivat liittyä odotuslistalle",
          "Odotuslistan paikat määräytyvät saapumisjärjestyksessä",
          "Kun paikka vapautuu, ilmoitamme käyttäjille järjestyksessä",
          "Pidätämme oikeuden muuttaa kapasiteettirajoja",
        ],
      },
      "6": {
        id: "scraping",
        heading: "Web scraping -rajoitukset",
        paragraphs: [
          "Palvelumme hakee ja käsittelee dataa useilta sivustoilta. Käyttämällä palvelua tunnustat:",
        ],
        list: [
          "Amiquus noudattaa valvottavien sivustojen käyttöehtoja",
          "Käytämme nopeuden rajoitusta ja eettisiä datankeruumenetelmiä",
          "Tiettyjen sivustojen saatavuus voi muuttua",
          "Emme takaa kerätyn datan täydellisyyttä tai ajantasaisuutta",
        ],
      },
      "7": {
        id: "intellectual",
        heading: "Immateriaaliomaisuus",
        paragraphs: [
          "Amiquus-palvelu, mukaan lukien alkuperäinen sisältö, ominaisuudet ja toiminnallisuus, on ja pysyy Amiquuksen yksinomaisena omaisuutena. Palvelu on suojattu tekijänoikeuksilla, tavaramerkeillä ja muilla laeilla.",
          "Et saa käyttää tavaramerkkejämme ja mallejamme ilman Amiquuksen ennakkoon kirjallista lupaa.",
        ],
        list: [],
      },
      "8": {
        id: "termination",
        heading: "Irtisanominen",
        paragraphs: [
          "Voimme irtisanoa tai keskeyttää tilisi välittömästi ilman ennakkoilmoitusta mistä tahansa syystä, mukaan lukien ehtojen rikkominen.",
          "Irtisanomisen yhteydessä oikeutesi palvelun käyttöön päättyy välittömästi. Jos haluat irtisanoa tilisi, lopeta palvelun käyttö tai ota yhteyttä poistoa varten.",
        ],
        list: [],
      },
      "9": {
        id: "limitations",
        heading: "Vastuun rajoitus",
        paragraphs: [
          "Amiquus, sen johtajat, työntekijät, kumppanit tai toimittajat eivät ole vastuussa välillisistä, satunnaisista, erityisistä tai rangaistavista vahingoista, mukaan lukien voittojen, datan tai muiden aineettomien tappioiden menetys, jotka johtuvat:",
        ],
        list: [
          "Palvelun käyttöoikeudesta tai kyvyttömyydestä käyttää palvelua",
          "Kolmansien osapuolten sisällöstä tai käytöksestä palvelussa",
          "Palvelusta saadusta sisällöstä",
          "Luvattomasta pääsystä tai tietojesi muutoksesta",
        ],
      },
      "10": {
        id: "disclaimer",
        heading: "Vastuuvapauslauseke",
        paragraphs: [
          'Palvelun käyttö tapahtuu omalla vastuullasi. Palvelu tarjotaan "SELLAISENAAN" ja "SAATAVILLA". Emme takaa, että palvelu on keskeytymätön, oikea-aikainen, turvallinen tai virheetön.',
          "Emme takaa, että palvelun käytön tulokset ovat tarkkoja tai luotettavia.",
        ],
        list: [],
      },
      "11": {
        id: "cookies",
        heading: "Evästekäytäntö",
        paragraphs: [
          "Evästekäytäntömme selittää, mitä evästeet ovat, miten käytämme niitä, miten kolmannet osapuolet käyttävät niitä ja valintasi. Katso evästeosio tietosuojakäytännöstämme.",
        ],
        list: [],
      },
      "12": {
        id: "governing-law",
        heading: "Sovellettava laki",
        paragraphs: [
          "Näitä ehtoja säätelevät ja tulkitaan Yhdysvaltain lakien mukaisesti ilman lainvalintaa koskevia konflikteja.",
          "Jos emme käytä oikeutta tai määräystä, se ei ole luopumista. Jos tuomioistuin julistaa määräyksen pätemättömäksi, jäljellä olevat määräykset pysyvät voimassa.",
        ],
        list: [],
      },
      "13": {
        id: "contact",
        heading: "Ota yhteyttä",
        paragraphs: ["Jos sinulla on kysymyksiä ehdoista, ota yhteyttä:"],
        list: ["Sähköpostilla: legal@amiquus.com", "Yhteyssivumme kautta"],
      },
    },
  },
  privacy: {
    metaTitle: "Tietosuojakäytäntö | Amiquus",
    metaDescription:
      "Opi, miten Amiquus käsittelee henkilötietojasi, oikeuksiasi ja datankeruukäytäntöjä.",
    title: "Tietosuojakäytäntö",
    lastUpdated: "Viimeksi päivitetty: 21. toukokuuta 2025.",
    sections: {
      "0": {
        id: "introduction",
        heading: "Johdanto",
        paragraphs: [
          "Tervetuloa Amiquukseen. Kunnioitamme yksityisyyttäsi ja olemme sitoutuneet suojaamaan henkilötietojasi. Tämä tietosuojakäytäntö selittää, miten käsittelemme dataasi, oikeutesi ja miten laki suojaa sinua.",
        ],
      },
      "1": {
        id: "data-we-collect",
        heading: "Keräämämme data",
        paragraphs: [
          "Keräämme erilaisia datatyyppejä eri tarkoituksiin palvelun tarjoamiseksi ja parantamiseksi:",
        ],
        list: [
          "Henkilötiedot: sähköpostiosoite, etunimi, sukunimi ja profiilikuva (jos kolmannen osapuolen kautta).",
          "Tilitiedot: kirjautumistiedot ja tiliasetukset.",
          "Käyttödata: tiedot siitä, miten käytät sivustoa ja palveluita.",
          "Hakukriteerit: ajoneuvokriteerit, jotka asetat valvontaan (merkki, malli, hinta jne.).",
          "Telegram-data: jos valitset Telegram-hälytykset, tallennamme chat-ID:si ja bot-tokenin.",
          "Maksudata: ostossa maksuprosessorimme kerää tarvittavat tiedot. Amiquus ei tallenna täydellisiä luottokorttitietoja.",
        ],
      },
      "2": {
        id: "how-we-use-data",
        heading: "Miten käytämme dataasi",
        paragraphs: ["Käytämme henkilötietojasi:"],
        list: [
          "Palvelun tarjoamiseen ja ylläpitoon",
          "Ilmoittamiseen palvelun muutoksista",
          "Interaktiivisten ominaisuuksien sallimiseen",
          "Asiakastuen tarjoamiseen",
          "Analyysin keräämiseen palvelun parantamiseksi",
          "Palvelun käytön valvontaan",
          "Teknisten ongelmien havaitsemiseen, estämiseen ja ratkaisemiseen",
          "Maksujen käsittelyyn ja petosten estämiseen",
          "Ilmoitusten lähettämiseen, jotka vastaavat kriteerejäsi",
        ],
      },
      "3": {
        id: "data-storage",
        heading: "Datan tallennus ja turvallisuus",
        paragraphs: [
          "Käytämme asianmukaisia turvatoimia suojaamaan luvattomalta pääsyltä, muutokselta tai tuhoamiselta. Kaikki data tallennetaan turvallisille palvelimille salattuna siirron ja levossa.",
          "Säilytämme henkilötietojasi vain niin kauan kuin on tarpeen tämän käytännön tarkoituksiin, mukaan lukien lakien, säädösten tai kirjanpitovaatimusten noudattamiseksi.",
        ],
      },
      "4": {
        id: "gdpr",
        heading: "Oikeutesi GDPR:n nojalla",
        paragraphs: [
          "Jos asut Euroopan talousalueella (ETA), sinulla on tiettyjä tietosuojaoikeuksia. Amiquus pyrkii sallimaan tietojesi korjaamisen, muuttamisen, poistamisen tai käytön rajoittamisen.",
          "Sinulla on seuraavat oikeudet:",
        ],
        list: [
          "Oikeus tietojen käyttöön, päivitykseen tai poistoon",
          "Oikeus korjaukseen",
          "Oikeus vastustamiseen",
          "Oikeus rajoittamiseen",
          "Oikeus datan siirrettävyyteen",
          "Oikeus peruuttaa suostumus",
        ],
      },
      "5": {
        id: "cookies",
        heading: "Evästekäytäntö",
        paragraphs: [
          "Evästeet ovat pieniä tietoja, jotka tallennetaan laitteellesi. Käytämme niitä:",
        ],
        list: [
          "Pidämme istunnon kirjautuneena",
          "Ymmärrämme sivuston käyttöä",
          "Tallenna asetukset",
          "Personoimme kokemusta",
        ],
      },
      "6": {
        id: "third-party",
        heading: "Kolmannet osapuolet",
        paragraphs: [
          "Voimme palkata kolmansia osapuolia suorittamaan palvelua, tehtäviä tai analysoimaan käyttöä.",
          "Nämä kolmannet osapuolet sisältävät:",
        ],
        list: [
          "Maksuprosessorit (Stripe)",
          "Analyysipalvelut",
          "Asiakastukipalvelut",
          "Hosting- ja pilvipalvelut",
        ],
        paragraphs2: [
          "Näillä kolmansilla osapuolilla on pääsy dataasi vain tehtävien suorittamiseksi, eikä he saa paljastaa tai käyttää sitä muihin tarkoituksiin.",
        ],
      },
      "7": {
        id: "changes",
        heading: "Muutokset tietosuojakäytäntöön",
        paragraphs: [
          "Voimme päivittää tietosuojakäytäntöä ajoittain. Ilmoitamme julkaisemalla uuden käytännön tällä sivulla ja päivittämällä 'Viimeksi päivitetty' -päivämäärän.",
          "Suosittelemme käytännön säännöllistä tarkistamista. Muutokset astuvat voimaan julkaisun yhteydessä.",
        ],
      },
      "8": {
        id: "contact",
        heading: "Ota yhteyttä",
        paragraphs: [
          "Jos sinulla on kysymyksiä tietosuojakäytännöstä, ota yhteyttä:",
        ],
        list: ["Sähköpostilla: privacy@amiquus.com", "Yhteyssivumme kautta"],
      },
    },
  },
  faqs: {
    metaTitle: "UKK | Amiquus",
    metaDescription:
      "Löydä vastaukset yleisimpiin kysymyksiin Amiquuksen autoilmoitusten valvontapalvelusta.",
    title: "Usein kysytyt kysymykset",
    subtitle:
      "Nopeat vastaukset yleisiin kysymyksiin autoilmoitusten valvontapalvelustamme",
    general: {
      heading: "Yleiset kysymykset",
      whatIs: {
        question: "Mikä on Amiquus?",
        answer:
          "Amiquus on palvelu, joka valvoo useita ajoneuvosivustoja kriteerejäsi vastaavia. Kun osuma löytyy, saat välittömän hälytyksen Telegramin kautta.",
      },
      howItWorks: {
        question: "Miten se toimii?",
        answer: [
          "Aseta hakukriteerit (merkki, malli, hinta jne.)",
          "Valitse valvottavat sivustot",
          "Yhdistä Telegram hälytyksiin",
          "Järjestelmämme valvoo jatkuvasti valittuja sivustoja",
          "Osumassa saat välittömän Telegram-hälytyksen tiedoilla ja linkillä",
        ],
      },
      whichWebsites: {
        question: "Mitkä sivustot valvotte?",
        answerIntro: "Valvomme tällä hetkellä seuraavia suuria alustoja:",
        list: [
          "AutoTrader",
          "Cars.com",
          "CarGurus",
          "TrueCar",
          "Facebook Marketplace (URL:n kautta)",
          "Craigslist",
          "eBay Motors",
        ],
        outro: "Lisäämme jatkuvasti uusia alustoja laajempaan kattavuuteen.",
      },
    },
    subscription: {
      heading: "Tilausta koskevat kysymykset",
      cost: {
        question: "Paljonko tilaus maksaa?",
        answer: [
          "Hinnat alkavat 79,99 €/kk yhden sivuston valvontaan 6 tunnin välein. Lisäsivustot maksavat 4,99 €/kk. Päivitä nopeampiin hälytyksiin.",
          "Hintatiedot etusivun hinnoitteluosiossa.",
        ],
      },
      cancel: {
        question: "Miten perun tilauksen?",
        stepsIntro: "Voit peruuttaa tilauksen milloin tahansa profiilisivulta:",
        steps: [
          "Kirjaudu tilillesi",
          'Siirry "Profiili"-sivulle',
          'Valitse "Tilaukset"-välilehti',
          'Klikkaa "Peru tilaus" haluamasi tilauksen kohdalla',
        ],
        note: "Tilaus pysyy aktiivisena nykyisen laskutuskauden loppuun.",
      },
      multiple: {
        question: "Voinko olla useita tilauksia eri malleille?",
        answer:
          "Kyllä, voit luoda useita tilauksia yhdellä tilillä. Jokainen voi valvoa eri malleja tai merkkejä. Täydellinen useiden ajoneuvojen etsimiseen tai ystävien auttamiseen.",
      },
      limit: {
        question: "Miksi on tilaajaraja?",
        intro: "Rajoitamme palvelun 30 aktiiviseen tilaajaan:",
        list: [
          "Korkealaatuinen palvelu ja datatarkkuus",
          "Henkilökohtainen tuki jokaiselle tilaajalle",
          "Nopeampi hälytystoimitus ruuhka-aikoina",
          "Eettinen scraping, joka ei ylikuormita kohdesivustoja",
        ],
        outro:
          "Jos olemme täynnä, liity odotuslistalle – ilmoitamme, kun paikka vapautuu.",
      },
    },
    technical: {
      heading: "Tekniset kysymykset",
      telegram: {
        question: "Miten asetan Telegram-hälytykset?",
        stepsIntro: "Telegram-hälytysten asettamiseksi:",
        steps: [
          "Luo Telegram-bot BotFatherin kautta (ohjeet hallintapaneelissa)",
          "Kopioi bot-token ja chat-ID",
          'Anna tiedot tiliasetuksissa "Hälytysasetukset"-kohdassa',
          'Testaa yhteys "Lähetä testiviesti"-painikkeella',
        ],
        note: "Yksityiskohtaiset ohjeet kuvakaappauksilla tilauksen asetuksen yhteydessä.",
      },
      frequency: {
        question: "Kuinka usein saan hälytyksiä?",
        intro: "Hälytystaajuus riippuu:",
        list: [
          "Valitusta taajuuspaketista (tunnista minuuttiin)",
          "Uusien kriteerisi täyttävien ilmoitusten määrästä",
          "Markkinatoiminnasta valitulle merkille/mallille",
        ],
        outro:
          "Saat hälytyksiä vain, kun uudet ilmoitukset vastaavat kriteerejäsi.",
      },
      privacy: {
        question: "Miten yksityisyyteni suojataan?",
        intro: "Otamme yksityisyyden vakavasti ja käytämme:",
        list: [
          "Datan salausta siirrossa ja levossa",
          "Turvallisia maksuja Stripellä",
          "Ei datan jakamista kolmansille osapuolille",
          "Voit pyytää tai poistaa datasi milloin tahansa",
        ],
        outro: "Lisätietoja täydellisessä tietosuojakäytännössä.",
      },
    },
    support: {
      heading: "Onko sinulla vielä kysymyksiä?",
      description: "Jos et löytänyt vastausta, tukemme on valmiina!",
      button: "Ota yhteyttä tukeen",
    },
  },
  waitlist: {
    metaTitle: "Liity odotuslistalle - Amiquus",
    metaDescription:
      "Liity Amiquuksen odotuslistalle ja saat ilmoituksen, kun tilauksia on saatavilla.",
    title: "Liity odotuslistallemme",
    subtitle:
      "Korkean kysynnän vuoksi rajoitamme aktiivisten tilausten määrää parhaan laadun takaamiseksi.",
    limited: {
      heading: "Rajoitettu saatavuus",
      description: "Rajoitamme järjestelmän vain 30 aktiiviseen tilaajaan:",
      points: [
        "Poikkeuksellinen luotettavuus ja scraping-nopeus kaikille käyttäjille",
        "Vähemmän eston riskiä sivustoilta",
        "Henkilökohtainen tuki jokaiselle tilaajalle",
        "Oikeudenmukainen palvelinresurssien jako",
      ],
      available:
        "{{remaining}}/{{capacity}} tilauspaikasta on tällä hetkellä vapaana.",
      full: "Kaikki tilauspaikat ovat tällä hetkellä varattuja. Liity odotuslistalle saadaksesi ilmoituksen, kun paikka vapautuu.",
    },
    success: {
      title: "Olet odotuslistalla!",
      description: "Ilmoitamme sinulle heti, kun tilauspaikka vapautuu",
      message:
        "Kiitos kiinnostuksestasi Amiquukseen! Olemme lisänneet sinut odotuslistalle ja otamme yhteyttä heti, kun paikka on vapaa.",
      button: "Takaisin etusivulle",
    },
    cantJoin: {
      title: "Liity odotuslistalle",
      description: "Ilmoitamme sinulle heti, kun tilauspaikka vapautuu",
    },
    form: {
      firstName: {
        label: "Etunimi",
        placeholder: "Matti",
      },
      lastName: {
        label: "Sukunimi",
        placeholder: "Meikäläinen",
      },
      email: {
        label: "Sähköposti",
        placeholder: "matti.meikalainen@esimerkki.fi",
        description:
          "Käytämme tätä sähköpostia ilmoittaaksemme, kun paikka vapautuu",
      },
      submit: "Liity odotuslistalle",
      submitting: "Lähetetään...",
    },
  },
  support: {
    metaTitle: "Tuki | Amiquus - Apukeskus",
    metaDescription:
      "Hanki apua Amiquus-tilillesi, tilaukselle tai hälytyksille. Tutustu apukeskukseen tai ota yhteyttä tukeen.",
    title: "Tukikeskus",
    subtitle:
      "Löydä vastaukset yleisiin kysymyksiin tai ota yhteyttä tukitiimiimme",
    emailSupport: {
      title: "Sähköpostituki",
      description: "Lähetä meille sähköposti, vastaamme 24 tunnin sisällä",
      email: "support@amiquus.com",
    },
    faqHeading: "Usein kysytyt kysymykset",
    faqs: {
      telegram: {
        question: "Miten asetan Telegram-hälytykset?",
        intro: "Telegram-hälytysten asettamiseksi seuraa näitä vaiheita:",
        steps: [
          "Luo Telegram-bot BotFatherin kautta (ohjeet hallintapaneelissa)",
          "Kopioi API-token ja chat-ID",
          'Anna tiedot tiliasetuksissa "Hälytysasetukset"-kohdassa',
          'Testaa yhteys "Lähetä testiviesti"-painikkeella',
        ],
        outro:
          "Jos tarvitset lisätietoja, yksityiskohtainen opas on hallintapaneelissasi.",
      },
      updates: {
        question: "Kuinka usein ilmoituksia päivitetään?",
        answer:
          "Päivitystaajuus riippuu tilauspaketista. Perussuunnitelmat päivittyvät 6 tunnin välein, premium-suunnitelmat voivat olla 30 minuutin välein. Näet ja muutat nykyisen taajuuden tilausasetuksissa.",
      },
      facebook: {
        question: "Voinko valvoa Facebook Marketplacea?",
        answer:
          "Kyllä, tuemme Facebook Marketplace -valvontaa. Anna suodatettujen hakutulosten URL. Järjestelmä valvoo sitten hakua uusille kriteerejäsi vastaaville ilmoituksille.",
      },
      cancel: {
        question: "Miten perun tilauksen?",
        answer:
          'Voit peruuttaa tilauksen milloin tahansa profiilisivulta. Klikkaa "Tilaukset"-välilehteä, etsi tilaus ja klikkaa "Peru tilaus". Palvelu pysyy aktiivisena laskutuskauden loppuun.',
      },
      full: {
        question: "Mitä tapahtuu, jos kaikki paikat ovat varattuja?",
        answer:
          "Palvelun laadun ylläpitämiseksi rajoitamme aktiivisten tilausten määrää. Jos kaikki paikat ovat varattuja, voit liittyä odotuslistalle. Kun paikka vapautuu, ilmoitamme sinulle, ja sinulla on etuoikeus yleisöön nähden.",
      },
    },
    stillNeedHelp: {
      heading: "Tarvitsetko vielä apua?",
      description:
        "Jos et löytänyt vastausta, ota yhteyttä tukitiimiimme. Olemme täällä auttamassa!",
      button: "Ota yhteyttä tukeen",
    },
  },
  notFound: {
    title: "404 Sivua ei löydy",
    message: "Unohditko lisätä sivun reitittimeen?",
  },
  emails: {
    verification: {
      subject: "Amiquus sähköpostin vahvistuskoodi",
      greeting: "Hei,",
      message: "Käytä seuraavaa koodia rekisteröinnin viimeistelyyn:",
      expiration: "Koodi vanhenee 10 minuutin kuluttua.",
    },
    invoice: {
      success: {
        subject: "Maksu vastaanotettu Amiquus – Lasku #",
        h2Message: "Amiquus-tilausmaksusi onnistui!",
        greeting: "Hei,",
        paymentMessage: "Olemme vastaanottaneet maksusi",
        downloadMessage:
          "Voit tarkastella tai ladata laskun seuraavasta linkistä:",
        viewInvoice: "Näytä lasku",
        invoiceNumber: "Laskun numero:",
      },
      pending: {
        subjectA: "Maksu odottaa – Lasku",
        subjectB: "Amiquus-tilauksellesi",
        h2Message:
          "Toiminto vaaditaan: Viimeistele maksu Amiquus-tilauksellesi",
        greeting: "Hei,",
        messageA: "Laskusi",
        messageB:
          "on edelleen maksamatta. Viimeistele maksu aktivoidaksesi tilauksen",
        paymentMessage: "Voit maksaa turvallisesti seuraavasta linkistä:",
        payInvoice: "Maksa lasku",
        ignoreEmail:
          "Jos olet jo maksanut, voit jättää tämän sähköpostin huomiotta.",
      },
      failed: {
        subject: "Maksu epäonnistui – Lasku",
        message: "Emme voineet käsitellä viimeisintä maksuasi (yritys",
        attemptsA:
          "Yritämme uudelleen pian. Ei toimintoa vaadita tällä hetkellä.",
        attemptsB:
          "Olemme yrittäneet veloittaa maksutapaasi kolme kertaa, mutta kaikki epäonnistuivat.",
        attemptsC:
          "Tämän seurauksena tilauksesi on <strong>väliaikaisesti keskeytetty</strong>. Et vastaanota päivityksiä ennen uudelleenaktivoimista.",
        attemptsD:
          "Päivitä maksutapasi ja aktivoi tilaus uudelleen profiilista:",
        viewInvoice: "Näytä lasku",
        managePayment: "Hallitse maksutapoja",
      },
    },
    waitlist: {
      subject: "Olet Amiquuksen odotuslistalla!",
      h2Message: "Olet listalla!",
      hi: "Hei",
      message:
        "Kiitos liittymisestä Amiquuksen odotuslistalle. Ilmoitamme sinulle heti, kun paikka vapautuu.",
      anyQuestions:
        "Jos sinulla on kysymyksiä, älä epäröi vastata tähän sähköpostiin.",
    },
    common: {
      thanksMessage: "Kiitos Amiquuksen valitsemisesta!",
      signature: "Ystävällisin terveisin,<br/>Amiquus-tiimi",
      team: "— Amiquus-tiimi",
      needHelp: "Tarvitsetko apua?",
      hello: "Hei",
    },
  },
};

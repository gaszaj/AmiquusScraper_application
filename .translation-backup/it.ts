// === it.ts === Italiano
export const it = {
  navigations: {
    features: "Funzionalità",
    how: "Come funziona",
    pricing: "Prezzi",
    getAlerts: "Ricevi avvisi",
    waitlist: "Lista d'attesa",
    faq: "FAQ",
    login: "Accedi",
    getStarted: "Inizia",
    subscribers: "Abbonati",
    theme: "Tema",
    language: "Lingua",
    myAlerts: "I miei avvisi",
    profile: "Profilo",
    settings: "Impostazioni",
    logout: "Esci",
    signUp: "Registrati",
  },
  hero: {
    label: "Monitora annunci di auto usate in tempo reale!",
    title: "Non perdere mai più l'offerta perfetta per la tua auto",
    subtitle:
      "Amiquus ti notifica immediatamente quando l'auto dei tuoi sogni appare su più siti. Ricevi avvisi via Telegram non appena viene trovata una corrispondenza.",
    button1: "Configura avvisi",
    button2: "Scopri come funziona",
    trustIndicators: {
      websites: "Oltre 15 siti",
      realtime: "Notifiche in tempo reale",
      noSetup: "Nessuna installazione",
      cancelAnytime: "Annulla in qualsiasi momento",
    },
  },
  limited: {
    full: {
      title: "Limite di abbonamenti raggiunto",
      description:
        "Abbiamo raggiunto la capacità di 30 abbonati attivi. Unisciti alla lista d'attesa per essere avvisato quando si libera un posto.",
      buttonText: "Unisciti alla lista d'attesa",
    },
    limited: {
      title: "Disponibilità limitata",
      description:
        "Rimangono solo {{remaining}} di {{capacity}} posti. Abbonati ora prima che finiscano!",
      buttonText: "Inizia ora",
    },
    available: {
      title: "Abbonamenti disponibili",
      description:
        "{{active}} di {{capacity}} abbonamenti sono attualmente attivi. Tanto spazio per te!",
      buttonText: "Inizia ora",
    },
  },
  features: {
    heading: "Perché scegliere Amiquus?",
    subheading:
      "Risparmia tempo e non perdere mai l'auto perfetta con il nostro servizio automatizzato.",
    multiSite: {
      title: "Monitoraggio multi-sito",
      description:
        "Monitora più siti di auto contemporaneamente senza controllare manualmente ciascuno.",
    },
    notifications: {
      title: "Notifiche istantanee",
      description:
        "Ricevi notifiche immediate via Telegram quando un'auto corrisponde ai tuoi criteri.",
    },
    filters: {
      title: "Filtri personalizzabili",
      description:
        "Imposta criteri precisi: marca, modello, anno, chilometraggio, prezzo – trova esattamente ciò che vuoi.",
    },
    frequency: {
      title: "Frequenza regolabile",
      description:
        "Scegli la frequenza di verifica dei nuovi annunci – da oraria a in tempo reale.",
    },
    languages: {
      title: "Supporto multilingue",
      description:
        "Ricevi notifiche nella tua lingua preferita per una comprensione più facile degli annunci.",
    },
    account: {
      title: "Gestione account semplice",
      description:
        "Gestisci più profili di ricerca e modifica il tuo abbonamento con pochi clic.",
    },
  },
  howItWorks: {
    title: "Come funziona Amiquus",
    subtitle:
      "Configura una volta e lascia che il nostro sistema trovi l'offerta perfetta per te",
    whyTitle: "Perché scegliere Amiquus?",
    steps: {
      preferences: {
        title: "Imposta le tue preferenze",
        description:
          "Scegli marche, modelli, fasce di prezzo e altri criteri che ti interessano.",
      },
      telegram: {
        title: "Collega Telegram",
        description:
          "Collega il tuo account Telegram per ricevere notifiche istantanee sui nuovi annunci.",
      },
      notifications: {
        title: "Ricevi notifiche istantanee",
        description:
          "Ricevi avvisi immediatamente quando un'auto corrispondente appare su qualsiasi sito.",
      },
      findCar: {
        title: "Trova la tua auto perfetta",
        description:
          "Sii il primo a sapere dei nuovi annunci e assicurati le migliori offerte.",
      },
    },
    features: [
      "Monitora oltre 15 siti contemporaneamente",
      "Criteri di ricerca personalizzabili con filtraggio avanzato",
      "Notifiche in tempo reale via Telegram",
      "Avvisi automatici per cali di prezzo e nuovi annunci",
      "Processo di configurazione semplice in meno di 5 minuti",
    ],
    setAlerts: "Configura avvisi",
    notificationMockup1: {
      title: "Nuova corrispondenza trovata!",
      description:
        "BMW Serie 3, 2019, 32.500 € – Pubblicato di recente su AutoTrader",
    },
    notificationMockup2: {
      title: "Avviso Telegram",
      description:
        "Mercedes Classe C, 2020, 30.000 km – Prezzo ridotto di 2.000 €",
    },
  },
  pricing: {
    title: "Prezzi semplici e trasparenti",
    subtitle:
      "I nostri prezzi si basano sulle tue esigenze. Inizia con il piano base e personalizzalo.",
    baseTitle: "Piano base: 79,99 €/mese",
    includedTitle: "Cosa è incluso:",
    includedFeatures: [
      "Monitoraggio di un sito",
      "Aggiornamenti ogni ora",
      "Filtri illimitati",
      "Notifiche via Telegram",
    ],
    addonsTitle: "Componenti aggiuntivi:",
    addons: [
      { name: "Ogni sito aggiuntivo", price: 4.99 },
      { name: "Aggiornamenti ogni 30 minuti", price: 2.99 },
      { name: "Aggiornamenti ogni 15 minuti", price: 5.99 },
      { name: "Aggiornamenti ogni 5 minuti", price: 9.99 },
      { name: "Aggiornamenti ogni minuto", price: 14.99 },
    ],
    footerNote:
      "Tutti i piani includono configurazioni di ricerca illimitate e gestione semplice dell'abbonamento.",
    button: "Inizia ora",
  },
  signup: {
    heading: "Crea avviso auto",
    subheading:
      "Configura notifiche personalizzate per annunci auto in pochi passaggi.",
    cta: "Ricevi notifiche ora",
    waitlist: {
      message:
        "Siamo attualmente al completo. Unisciti alla lista d'attesa per essere avvisato quando si libera un posto.",
      cta: "Unisciti alla lista d'attesa",
    },
    toast: {
      success: {
        title: "Abbonamento creato",
        description: "Il tuo abbonamento è stato creato con successo",
      },
      error: {
        title: "Creazione abbonamento fallita",
        description: "Impossibile creare l'abbonamento. Riprova più tardi.",
      },
    },
  },
  payment: {
    toast: {
      success: {
        title: "Successo",
        description:
          "Il tuo metodo di pagamento è stato configurato con successo.",
      },
      error: {
        title: "Errore",
        fallback: "Si è verificato un errore imprevisto. Riprova.",
      },
    },
    button: {
      submit: "Configura metodo di pagamento",
      processing: "Elaborazione in corso...",
    },
  },
  alertSchema: {
    errors: {
      carBrand: "La marca dell'auto è obbligatoria",
      carModel: "Il modello dell'auto è obbligatorio",
      fuelType: "Il tipo di carburante è obbligatorio",
      priceMin: "Il prezzo minimo deve essere un numero",
      priceMax: "Il prezzo massimo deve essere un numero",
      yearMin: "L'anno minimo deve essere valido",
      yearMax: "L'anno massimo deve essere valido",
      maxKilometers: "Il chilometraggio massimo deve essere un numero",
      telegramUsername: "Il nome utente Telegram è obbligatorio",
      telegramToken: "Il token del bot Telegram è obbligatorio",
      telegramChatId: "L'ID chat Telegram è obbligatorio",
      websitesSelected: "Devi selezionare almeno un sito",
      notificationLanguage: "La lingua delle notifiche è obbligatoria",
      facebookMarketplaceUrl:
        "L'URL di Facebook Marketplace è obbligatorio se Facebook è selezionato",
    },
  },
  personalInfo: {
    heading: "Informazioni personali",
    description:
      "Inserisci le tue informazioni personali per configurare correttamente i tuoi avvisi.",
    labels: {
      firstName: "Nome",
      lastName: "Cognome",
      email: "Indirizzo email",
    },
    placeholders: {
      firstName: "Mario",
      lastName: "Rossi",
      email: "mario.rossi@esempio.it",
    },
    errors: {
      firstName: "Il nome è obbligatorio",
      lastName: "Il cognome è obbligatorio",
      email: "Inserisci un indirizzo email valido",
    },
    actions: {
      login: "Accedi o registrati per continuare",
      continue: "Continua",
    },
  },
  websiteSelection: {
    heading: "Selezione siti",
    description:
      "Scegli i siti da monitorare e la frequenza di aggiornamento desiderata.",
    labels: {
      websites: "Siti da monitorare",
      facebookUrl: "URL Facebook Marketplace",
      updateFrequency: "Frequenza di aggiornamento",
    },
    placeholders: {
      frequency: "Seleziona frequenza",
    },
    help: {
      websites: "Seleziona uno o più siti per monitorare annunci auto.",
      facebookUrl:
        "Incolla l'URL dei tuoi risultati di ricerca su Facebook Marketplace.",
      videoTitle:
        "Hai bisogno di aiuto per trovare il link di Facebook Marketplace?",
      videoDesc: "Guarda il video qui sotto per istruzioni passo-passo.",
      updateFrequency:
        "Con quale frequenza controlliamo i nuovi annunci? Frequenze più alte possono costare di più.",
    },
    errors: {
      websites: "Devi selezionare almeno un sito",
      facebookUrl:
        "L'URL di Facebook Marketplace è obbligatorio se Facebook è selezionato",
    },
    actions: {
      previous: "Precedente",
      continue: "Continua",
    },
  },
  carDetails: {
    heading: "Dettagli auto",
    description:
      "Specifica i dettagli dell'auto che stai cercando. Tutti i campi sono opzionali – lasciali vuoti per risultati più ampi.",
    labels: {
      carBrand: "Marca auto",
      carModel: "Modello auto",
      fuelType: "Tipo di carburante",
      priceMin: "Prezzo minimo",
      priceMax: "Prezzo massimo",
      yearMin: "Anno minimo",
      yearMax: "Anno massimo",
      maxKilometers: "Chilometraggio massimo",
    },
    placeholders: {
      carBrand: "Seleziona marca",
      carModel: "Seleziona modello",
      carModelDisabled: "Seleziona prima la marca",
      fuelType: "Seleziona tipo di carburante",
      priceMin: "Inserisci prezzo minimo",
      priceMax: "Inserisci prezzo massimo",
      yearMin: "Inserisci anno minimo",
      yearMax: "Inserisci anno massimo",
      maxKilometers: "Inserisci chilometraggio massimo",
    },
    options: {
      noModelsAvailable: "Nessun modello disponibile",
    },
    errors: {
      carBrand: "La marca dell'auto è obbligatoria",
      carModel: "Il modello dell'auto è obbligatorio",
      fuelType: "Il tipo di carburante è obbligatorio",
      priceMin: "Il prezzo minimo deve essere un numero",
      priceMax: "Il prezzo massimo deve essere un numero",
      yearMin: "L'anno minimo deve essere valido",
      yearMax: "L'anno massimo deve essere valido",
      maxKilometers: "Il chilometraggio massimo deve essere un numero",
    },
    actions: {
      previous: "Precedente",
      continue: "Continua",
    },
  },
  telegram: {
    heading: "Configurazione Telegram",
    description:
      "Configura le notifiche Telegram inserendo il token del bot e l'ID chat.",
    subHeading: "Configura il tuo bot Telegram",
    info: "Se hai problemi a creare un bot Telegram, contattaci e ti aiuteremo.",
    contact: "Contattaci",
    instructions: {
      botTitle: "Come ottenere il token del bot Telegram:",
      botStep1: "Apri Telegram e cerca @BotFather",
      botStep2: "Invia il comando /newbot",
      botStep3: "Segui le istruzioni per creare il bot",
      botStep4: "Copia il token fornito da BotFather",

      chatTitle: "Come ottenere il tuo ID chat Telegram:",
      chatStep1: "Apri Telegram e cerca @userinfobot",
      chatStep2: "Invia qualsiasi messaggio al bot",
      chatStep3: "Il bot risponderà con i tuoi dati, inclusi l'ID chat",
      chatStep4: "Copia l'ID chat (è un numero)",
    },

    videoPrompt:
      "Hai bisogno di aiuto per configurare il token del bot e l'ID chat?",
    videoDescription: "Guarda il video qui sotto per istruzioni passo-passo.",

    labels: {
      token: "Token bot Telegram",
      chatId: "Il tuo ID chat Telegram",
      language: "Lingua notifiche",
      username: "Nome utente Telegram",
    },

    placeholders: {
      token: "Inserisci il tuo token bot da BotFather",
      chatId: "Inserisci il tuo ID chat Telegram",
      language: "Seleziona la lingua dei messaggi Telegram",
      username: "Inserisci il tuo nome utente Telegram",
    },
    usernameDescription:
      "Questo è il nome utente del tuo account Telegram (senza il simbolo @).",
    examples: {
      token: "Esempio: 5432109876:ABCDefGhIJklMNoPqrSTuvWXyz1234567890",
      chatId: "Ottienilo inviando un messaggio a @userinfobot su Telegram",
    },
    setupTitle: "Istruzioni di configurazione:",
    setupSteps: [
      'Apri Telegram e cerca "BotFather"',
      'Avvia una conversazione con BotFather cliccando su "Start"',
      "Inserisci /newbot e segui le istruzioni per creare un nuovo bot",
      "Scegli un nome per il tuo bot",
      "Scegli un nome utente per il bot (deve terminare con 'bot')",
      "Copia il token API fornito da BotFather",
      "Invia un messaggio al tuo nuovo bot per attivare la conversazione",
    ],
    chatIdTitle: "Come ottenere il tuo ID chat Telegram:",
    chatIdSteps: [
      'Apri Telegram e cerca "userinfobot"',
      "Invia qualsiasi messaggio al bot",
      "Il bot risponderà con i tuoi dati, inclusi l'ID chat",
      "Copia il tuo ID chat",
    ],
    helpTitle:
      "Hai bisogno di aiuto per configurare il token del bot e l'ID chat?",
    helpDescription: "Guarda il video qui sotto per istruzioni passo-passo.",
    botTokenLabel: "Token bot Telegram",
    botTokenPlaceholder: "Inserisci il tuo token bot da BotFather",
    botTokenExample: "Esempio: 5432109876:ABCDefGhIJklMNoPqrSTuvWXyz1234567890",
    chatIdLabel: "Il tuo ID chat Telegram",
    chatIdPlaceholder: "Inserisci il tuo ID chat Telegram",
    chatIdDescription:
      "Ottienilo inviando un messaggio a @userinfobot su Telegram",
    languageLabel: "Lingua notifiche",
    languagePlaceholder: "Seleziona la lingua dei messaggi Telegram",
    languages: {
      en: "Inglese",
      de: "Tedesco",
      fr: "Francese",
      es: "Spagnolo",
      it: "Italiano",
    },
    previewTitle: "Anteprima notifica Telegram",
    carAlertTitle: "Nuovo avviso auto!",
    priceLabel: "Prezzo: {{price}}",
    kilometresLabel: "Chilometri: {{kms}}",
    locationLabel: "Località: {{location}}",
    viewListing: "Visualizza annuncio →",
    errors: {
      token: "Il token del bot Telegram è obbligatorio",
      chatId: "L'ID chat Telegram è obbligatorio",
      language: "La lingua delle notifiche è obbligatoria",
      username: "Il nome utente Telegram è obbligatorio",
    },

    actions: {
      previous: "Precedente",
      continue: "Continua",
    },
    contactBotInstruction:
      "Avvia una conversazione con il nostro bot Telegram cliccando sul link qui sotto e inviando un messaggio:",
    contactBotNote:
      "Questo è obbligatorio per ricevere avvisi auto. Se sei al computer, scansiona il codice QR.",
    confirmContact:
      "Ho avviato la conversazione con il bot e inviato un messaggio",
  },
  review: {
    title: "Riepilogo del tuo abbonamento",
    description: "Controlla i dettagli dell'abbonamento prima del pagamento.",

    personal: {
      title: "Informazioni personali",
      name: "Nome",
      email: "Email",
    },

    monitoring: {
      title: "Impostazioni di monitoraggio",
      websites: "Siti",
      facebookUrl: "URL Facebook",
      updateFrequency: "Frequenza di aggiornamento",
    },

    specs: {
      title: "Specifiche auto",
      brand: "Marca",
      model: "Modello",
      fuelType: "Tipo di carburante",
      yearRange: "Anno",
      mileage: "Chilometri (km)",
      price: "Prezzo (€)",
    },

    notification: {
      title: "Impostazioni notifiche",
      telegram: "Bot Telegram",
      language: "Lingua notifiche",
    },

    summary: {
      title: "Riepilogo abbonamento",
      base: "Abbonamento base",
      extraWebsites: "Siti aggiuntivi",
      frequencyUpgrade: "Aggiornamento frequenza",
      total: "Totale (mensile)",
    },

    terms: {
      checkbox: "Accetto i",
      tos: "Termini di utilizzo",
      privacy: "Informativa sulla privacy",
      note: "Il tuo abbonamento si rinnova automaticamente ogni mese. Puoi annullare in qualsiasi momento.",
      error: "Devi accettare i termini di utilizzo",
    },

    actions: {
      previous: "Precedente",
      submit: "Vai al pagamento",
    },
  },
  faq: {
    title: "Domande frequenti",
    subtitle: "Trova risposte alle domande più comuni sul nostro servizio.",
    contactPrompt: "Hai ancora domande?",
    contactLink: "Contatta il nostro supporto",
    questions: [
      {
        question:
          "Quanto velocemente ricevo notifiche dopo la pubblicazione di un nuovo annuncio?",
        answer:
          "La velocità delle notifiche dipende dalla frequenza di aggiornamento scelta. Con il piano orario, ricevi notifiche entro un'ora dalla pubblicazione. Per notifiche quasi istantanee (in pochi minuti), passa a piani più frequenti.",
      },
      {
        question:
          "Posso monitorare più tipi di auto diversi contemporaneamente?",
        answer:
          "Sì! Puoi creare più profili di ricerca con criteri diversi. Ogni profilo conta come abbonamento separato, ma puoi gestirli tutti da un unico account.",
      },
      {
        question: "Quali siti supportate attualmente?",
        answer:
          "Attualmente supportiamo le principali piattaforme, inclusi AutoTrader, CarGurus, Cars.com e Facebook Marketplace. Aggiungiamo continuamente nuovi siti su richiesta.",
      },
      {
        question:
          "Ho bisogno di competenze tecniche per usare il bot Telegram?",
        answer:
          "No! Forniamo istruzioni dettagliate con testo e video. La maggior parte degli utenti configura il bot in meno di 5 minuti.",
      },
      {
        question:
          "Posso modificare i criteri di ricerca dopo aver configurato l'abbonamento?",
        answer:
          "Sì, puoi modificare i criteri in qualsiasi momento dal dashboard. Le modifiche hanno effetto immediato.",
      },
      {
        question: "Come annullo l'abbonamento?",
        answer:
          'Puoi annullare l\'abbonamento in qualsiasi momento nella sezione "Abbonamenti" del dashboard. Il servizio rimane attivo fino alla fine del periodo di fatturazione.',
      },
    ],
  },
  footer: {
    brandTitle: "Amiquus",
    brandDescription:
      "Il tuo assistente personale per trovare l'offerta perfetta di auto usata al momento giusto.",
    quickLinks: "Link rapidi",
    features: "Funzionalità",
    pricing: "Prezzi",
    faq: "FAQ",
    getStarted: "Inizia",
    legal: "Legale",
    terms: "Termini di utilizzo",
    privacy: "Informativa sulla privacy",
    cookies: "Politica sui cookie",
    gdpr: "Conformità GDPR",
    contact: "Contatti",
    email: "support@amiquus.com",
    telegram: "Contattaci su Telegram",
    copyright: "Tutti i diritti riservati.",
    about: "Chi siamo",
    blog: "Blog",
    careers: "Carriere",
    support: "Supporto",
  },
  login: {
    title: "Accedi all'account",
    description: "Inserisci email e password per accedere al dashboard",
    emailLabel: "Email",
    passwordLabel: "Password",
    loginButton: "Accedi",
    loggingIn: "Accesso in corso...",
    loginWithGoogle: "Accedi con Google",
    or: "oppure",
    noAccount: "Non hai un account?",
    registerLink: "Registrati",
    successTitle: "Accesso riuscito",
    successMessage: "Hai effettuato l'accesso con successo.",
    errorTitle: "Accesso fallito",
    genericError: "Controlla le tue credenziali e riprova.",
    errors: {
      invalidEmail: "Inserisci un indirizzo email valido",
      shortPassword: "La password deve avere almeno 6 caratteri",
    },
  },
  register: {
    title: "Crea account",
    description: "Registrati e inizia a cercare l'auto dei tuoi sogni",
    google: "Registrati con Google",
    orContinue: "Oppure continua con",
    firstName: "Nome",
    lastName: "Cognome",
    username: "Nome utente",
    email: "Email",
    password: "Password",
    confirmPassword: "Conferma password",
    termsNotice: "Accetto i",
    termsOfService: "Termini di utilizzo",
    privacyPolicy: "Informativa sulla privacy",
    createBtn: "Crea account",
    alreadyHave: "Hai già un account?",
    login: "Accedi",
    and: "e",
    toast: {
      missingFields: {
        title: "Campi mancanti",
        desc: "Compila tutti i campi obbligatori",
      },
      invalidUsername: {
        title: "Nome utente non valido",
        desc: "Il nome utente deve essere alfanumerico e tra 3 e 20 caratteri",
      },
      passwordMismatch: {
        title: "Le password non corrispondono",
        desc: "Assicurati che le password corrispondano",
      },
      termsNotAccepted: {
        title: "Termini non accettati",
        desc: "Devi accettare i termini di utilizzo e l'informativa sulla privacy per continuare",
      },
      success: {
        title: "Registrazione riuscita",
        desc: "Benvenuto su Amiquus! Verrai reindirizzato alla verifica email.",
      },
      failure: {
        title: "Registrazione fallita",
        desc: "Controlla i tuoi dati e riprova",
      },
    },
  },
  verifyEmail: {
    title: "Verifica email",
    description:
      "Abbiamo inviato un codice di verifica al tuo indirizzo email.",
    codeLabel: "Codice di verifica",
    verifyButton: "Verifica email",
    updateEmailLabel: "Aggiorna email",
    updateEmailButton: "Aggiorna email",
    resendButton: "Reinvia codice",
    resendCountdown: "Puoi reinviare il codice tra {{seconds}}s",
    footerNote: "Non hai ricevuto il codice? Controlla la cartella spam.",
    toast: {
      verified: "Email verificata",
      failed: "Verifica fallita",
      resent: "Codice di verifica reinviato",
      error: "Errore",
      invalidEmail: "Email non valida",
      enterValidEmail: "Inserisci un indirizzo email valido",
      sameEmail: "Stessa email",
      sameEmailDesc: "La nuova email è identica a quella attuale",
      emailUpdated: "Email aggiornata",
    },
  },
  dashboardPayment: {
    add: "Aggiungi metodo di pagamento",
    description:
      "Aggiungi una nuova carta di credito o debito per i pagamenti dell'abbonamento.",
    processing: "Elaborazione in corso...",
    errorTitle: "Errore nell'aggiunta del metodo di pagamento",
    errorMessage: "Si è verificato un errore imprevisto",
    initError: {
      title: "Errore",
      description: "Impossibile inizializzare le impostazioni di pagamento",
    },
  },
  dashboard: {
    subscriptionCard: {
      years: "Anni",
      priceRange: "Prezzo",
      websites: "Siti",
      updates: "Aggiornamenti",
      language: "Lingua",
      price: "Prezzo",
      edit: "Modifica",
      cancelAlert: "Annulla avviso",
      cancelTitle: "Annulla avviso auto",
      cancelDescription:
        "Sei sicuro di voler annullare l'avviso per {{brand}} {{model}}? Questo interromperà tutte le notifiche e dovrai riconfigurare l'avviso.",
      keepMyAlert: "Mantieni avviso",
      confirmCancel: "Annulla avviso",
    },
    paymentMethodCard: {
      expires: "Scade",
      default: "Predefinito",
      setAsDefault: "Imposta come predefinito",
      remove: "Rimuovi",
      setDefaultTitle: "Imposta metodo di pagamento predefinito",
      setDefaultDescription:
        "Vuoi impostare la carta {{brand}}, terminante in {{last4}}, come metodo di pagamento predefinito? Questa carta verrà usata per tutti i pagamenti futuri.",
      removeTitle: "Rimuovi metodo di pagamento",
      removeDescription:
        "Sei sicuro di voler rimuovere la carta {{brand}}, terminante in {{last4}}?",
      removeWarning:
        "Questo è il tuo metodo di pagamento predefinito e la rimozione potrebbe influire sugli abbonamenti attivi.",
      cancel: "Annulla",
      confirmRemove: "Rimuovi carta",
    },
  },
  profile: {
    tabs: {
      alerts: "I miei avvisi",
      payments: "Metodi di pagamento",
    },
    sidebar: {
      memberSince: "Membro dal",
      subscriptions: "Abbonamenti",
      methods: "Metodi di pagamento",
      account: "Impostazioni account",
      privacy: "Privacy e sicurezza",
      logout: "Esci",
    },
    account: {
      title: "Impostazioni account",
      desc: "Aggiorna le tue informazioni e impostazioni account.",
      name: "Nome",
      email: "Email",
      username: "Nome utente",
      cancel: "Annulla",
      save: "Salva modifiche",
    },
    security: {
      title: "Privacy e sicurezza",
      desc: "Gestisci impostazioni di sicurezza e privacy.",
      current: "Password attuale",
      new: "Nuova password",
      confirm: "Conferma nuova password",
      update: "Aggiorna password",
    },
    logout: {
      title: "Esci",
      desc: "Sei sicuro di voler uscire?",
      success: "Hai effettuato la disconnessione con successo.",
    },
    alerts: {
      title: "Abbonamenti avvisi auto",
      desc: "Gestisci i tuoi avvisi e impostazioni di notifica.",
      add: "Aggiungi nuovo avviso",
      none: "Non hai avvisi auto attivi.",
      cta: "Crea il tuo primo avviso",
      warning:
        "⚠️ Le modifiche all'abbonamento avranno effetto nel prossimo ciclo di fatturazione e solo dopo un pagamento riuscito. In caso di pagamento fallito, la configurazione attuale verrà mantenuta.",
    },
    payments: {
      title: "Metodi di pagamento",
      desc: "Gestisci metodi di pagamento per abbonamenti.",
      none: "Non hai metodi di pagamento salvati.",
      encrypted:
        "I tuoi dati di pagamento sono crittografati e archiviati in modo sicuro.",
    },
  },
  setupAlerts: {
    title: "Configura avvisi auto",
    subtitle:
      "Configura il tuo bot Telegram per ricevere notifiche sull'auto dei tuoi sogni",
    basicPlan: "Piano base",
    baseTitle: "79,99 €/mese",
    button: "Avvia servizio avvisi auto",
    cancel: "Annulla in qualsiasi momento",
    toasts: {
      terms: {
        title: "Termini non accettati",
        description: "Devi accettare i termini di utilizzo per continuare",
      },
      success: {
        title: "Abbonamento creato",
        description: "Il tuo abbonamento è stato creato con successo",
      },
      error: {
        title: "Errore nella creazione dell'abbonamento",
      },
      contactBot: {
        title: "Contatto bot necessario",
        description:
          "Per ricevere avvisi auto, devi avviare una conversazione con il nostro bot Telegram e inviare un messaggio. Segui le istruzioni qui sotto.",
      },
    },
  },
  loginPrompt: {
    title: "Accesso richiesto",
    description: "Devi essere loggato per continuare. Accedi o registrati.",
    register: "Registrati",
    login: "Accedi",
  },
  waitlistPrompt: {
    title: "Unisciti alla lista d'attesa",
    description:
      "Siamo attualmente al completo. Unisciti alla lista d'attesa per essere avvisato quando si libera un posto.",
    button: "Unisciti alla lista d'attesa",
  },
  subscription: {
    title: "Dettagli abbonamento",
    subTitle: "Modifica i dettagli dell'abbonamento qui sotto",
    error: "Torna al dashboard",
    notFound: "Abbonamento non trovato",
    notFoundSub: "Torna al dashboard",
    description:
      "Puoi mettere in pausa l'abbonamento in qualsiasi momento. Quando in pausa, gli avvisi si fermano fino alla riattivazione.",
    form: {
      status: {
        label: "Stato",
        placeholder: "Seleziona stato",
        active: "Attivo",
        paused: "In pausa",
      },
    },
    actions: {
      save: "Salva modifiche",
      back: "Indietro",
    },
    toasts: {
      success: {
        title: "Abbonamento aggiornato",
        description:
          "Il tuo abbonamento per {{brand}} {{model}} è stato aggiornato con successo",
      },
      priceError: {
        title: "Impossibile aggiornare l'abbonamento",
        description:
          "Non puoi mettere in pausa e aggiornare il prezzo dell'abbonamento contemporaneamente. Scegli una o l'altra opzione.",
      },
      error: {
        title: "Errore nell'aggiornamento dell'abbonamento",
      },
    },
  },
  about: {
    title: "Chi siamo",
    description:
      "Rivoluzioniamo la ricerca dell'auto usata perfetta con tecnologia di monitoraggio avanzata",
    meta: {
      title: "Chi siamo | Amiquus - Servizio di monitoraggio annunci auto",
      description:
        "Scopri di più su Amiquus, la nostra missione e il team dietro il servizio intelligente di monitoraggio annunci.",
    },
    story: {
      heading: "La nostra storia",
      paragraphs: [
        "Amiquus è nato nel 2023 quando il nostro fondatore Alex ha passato mesi ad aggiornare siti alla ricerca di un modello raro a buon prezzo. Dopo aver perso opportunità, ha capito che doveva esserci un modo migliore.",
        "Con un piccolo team di sviluppatori e appassionati di auto, Alex ha costruito un sistema per monitorare più siti contemporaneamente e inviare notifiche istantanee.",
        "Il progetto è cresciuto rapidamente e all'inizio del 2025 Amiquus è diventato un servizio per tutti. Oggi aiutiamo acquirenti in tutto il paese a risparmiare tempo e trovare offerte migliori.",
      ],
    },
    mission: {
      heading: "La nostra missione",
      items: [
        {
          title: "Risparmiare tempo",
          description:
            "Elimina la necessità di aggiornare costantemente più siti con ricerca automatizzata e notifiche tempestive.",
        },
        {
          title: "Trovare offerte migliori",
          description:
            "Sii il primo a sapere delle grandi offerte e ottieni un vantaggio in un mercato competitivo.",
        },
        {
          title: "Acquistare con fiducia",
          description:
            "Prendi decisioni informate con monitoraggio completo su più piattaforme affidabili.",
        },
      ],
    },
    team: {
      heading: "Il nostro team",
      members: [
        {
          name: "Alex Morgan",
          role: "Fondatore e CEO",
          bio: "Ex programmatore appassionato di auto e soluzioni innovative.",
        },
        {
          name: "Sarah Chen",
          role: "Responsabile tecnico",
          bio: "Esperta di data science, specializzata in web scraping.",
        },
        {
          name: "Marcus Lee",
          role: "Responsabile sviluppo",
          bio: "Ingegnere full-stack con esperienza in sistemi di notifica ad alte prestazioni.",
        },
        {
          name: "Elena Rodriguez",
          role: "Supporto clienti",
          bio: "Ex venditrice di auto, dedicata ad aiutare a trovare il veicolo perfetto.",
        },
      ],
    },
    join: {
      heading: "Unisciti al team",
      description:
        "Cerchiamo sempre talenti appassionati di tecnologia e della rivoluzione nell'acquisto di auto.",
      cta: "Visualizza posizioni aperte",
    },
    questions: {
      heading: "Hai domande?",
      description:
        "Scopri di più su come funziona il servizio, i prezzi o contatta il supporto.",
      links: {
        faq: "Visita le FAQ",
        pricing: "Visualizza prezzi",
        support: "Contatta supporto",
      },
    },
  },
  terms: {
    metaTitle: "Termini di utilizzo | Amiquus",
    metaDescription:
      "Leggi i termini di utilizzo di Amiquus che regolano l'uso del servizio di monitoraggio annunci.",
    title: "Termini di utilizzo",
    lastUpdated: "Ultimo aggiornamento: 21 maggio 2025.",
    sections: {
      "1": {
        id: "agreement",
        heading: "Accettazione dei termini",
        paragraphs: [
          "Questi termini di utilizzo costituiscono un accordo legalmente vincolante tra te e Amiquus riguardo all'accesso e all'uso del nostro sito e servizi.",
          "Accedendo o utilizzando i nostri servizi, accetti questi termini. Se non sei d'accordo con qualsiasi parte, non puoi utilizzare i servizi.",
        ],
        list: [],
      },
      "2": {
        id: "changes",
        heading: "Modifiche ai termini",
        paragraphs: [
          "Ci riserviamo il diritto di modificare o sostituire questi termini a nostra discrezione. Se una modifica è sostanziale, forniremo un preavviso di almeno 30 giorni prima che i nuovi termini entrino in vigore.",
          "Continuando a utilizzare il servizio dopo l'entrata in vigore delle modifiche, accetti i termini rivisti. Se non sei d'accordo con i nuovi termini, smetti di utilizzare il servizio.",
        ],
        list: [],
      },
      "3": {
        id: "account",
        heading: "Condizioni account",
        paragraphs: ["Per utilizzare i nostri servizi, devi:"],
        list: [
          "Avere più di 18 anni",
          "Completare il processo di registrazione",
          "Fornire informazioni accurate, complete e aggiornate",
          "Essere responsabile della sicurezza del tuo account e password",
          "Essere responsabile per tutte le attività sul tuo account",
          "Segnalare immediatamente qualsiasi uso non autorizzato o abuso dell'account",
        ],
      },
      "4": {
        id: "payment",
        heading: "Condizioni di pagamento",
        paragraphs: [
          "Amiquus offre servizi basati su abbonamento con queste condizioni:",
        ],
        list: [
          "Tutti i prezzi sono senza tasse, che verranno aggiunte se applicabile",
          "I prezzi degli abbonamenti possono cambiare con preavviso di 30 giorni",
          "Gli abbonamenti si rinnovano automaticamente a meno che non vengano annullati prima del prossimo ciclo di fatturazione",
          "I rimborsi vengono elaborati caso per caso secondo la politica di rimborso",
          "Utilizziamo Stripe per l'elaborazione sicura dei pagamenti, tutti i dati di pagamento sono memorizzati su Stripe",
        ],
      },
      "5": {
        id: "capacity",
        heading: "Limiti di capacità",
        paragraphs: [
          "Per garantire la qualità del servizio, limitiamo il numero di abbonamenti attivi a 30. Quando il limite è raggiunto:",
        ],
        list: [
          "I nuovi utenti possono unirsi alla lista d'attesa",
          "Il posto in lista d'attesa è determinato dall'ordine di arrivo",
          "Quando si libera un posto, notifichiamo gli utenti in ordine",
          "Ci riserviamo il diritto di modificare i limiti di capacità",
        ],
      },
      "6": {
        id: "scraping",
        heading: "Limiti di web scraping",
        paragraphs: [
          "Il nostro servizio accede e processa dati da più siti. Utilizzando il servizio, riconosci:",
        ],
        list: [
          "Amiquus rispetta i termini di utilizzo dei siti monitorati",
          "Utilizziamo limitazione di tasso e pratiche etiche di raccolta dati",
          "La disponibilità di alcuni siti può cambiare",
          "Non garantiamo la completezza o l'aggiornamento dei dati raccolti",
        ],
      },
      "7": {
        id: "intellectual",
        heading: "Proprietà intellettuale",
        paragraphs: [
          "Il servizio Amiquus, inclusi contenuti originali, funzionalità e funzionalità, è e rimane di proprietà esclusiva di Amiquus. Il servizio è protetto da copyright, marchi e altre leggi.",
          "Non puoi utilizzare i nostri marchi e design senza previo consenso scritto di Amiquus.",
        ],
        list: [],
      },
      "8": {
        id: "termination",
        heading: "Risoluzione",
        paragraphs: [
          "Possiamo terminare o sospendere l'account immediatamente, senza preavviso, per qualsiasi motivo, inclusa la violazione dei termini.",
          "Alla risoluzione, il diritto di utilizzare il servizio cessa immediatamente. Se desideri terminare l'account, smetti di utilizzare il servizio o contattaci per l'eliminazione.",
        ],
        list: [],
      },
      "9": {
        id: "limitations",
        heading: "Limitazione di responsabilità",
        paragraphs: [
          "Amiquus, i suoi direttori, dipendenti, partner o fornitori non sono responsabili per danni indiretti, incidentali, speciali o punitivi, inclusa perdita di profitti, dati o altre perdite intangibili, derivanti da:",
        ],
        list: [
          "Accesso o incapacità di accedere al servizio",
          "Contenuti o comportamento di terze parti nel servizio",
          "Contenuti ottenuti dal servizio",
          "Accesso non autorizzato o alterazione dei tuoi dati",
        ],
      },
      "10": {
        id: "disclaimer",
        heading: "Disclaimer",
        paragraphs: [
          'L\'uso del servizio è a tuo rischio. Il servizio è fornito "COSÌ COM\'È" e "COME DISPONIBILE". Non garantiamo che il servizio sarà ininterrotto, tempestivo, sicuro o privo di errori.',
          "Non garantiamo che i risultati dell'uso del servizio saranno accurati o affidabili.",
        ],
        list: [],
      },
      "11": {
        id: "cookies",
        heading: "Politica sui cookie",
        paragraphs: [
          "La nostra politica sui cookie spiega cosa sono i cookie, come li usiamo, come li usano terze parti e le tue opzioni. Vedi la sezione cookie nella nostra Informativa sulla privacy.",
        ],
        list: [],
      },
      "12": {
        id: "governing-law",
        heading: "Legge applicabile",
        paragraphs: [
          "Questi termini sono regolati e interpretati secondo le leggi degli Stati Uniti d'America, senza riguardo alle norme sui conflitti di legge.",
          "Se non esercitiamo un diritto o una disposizione, ciò non costituisce una rinuncia. Se un tribunale dichiara una disposizione non valida, le restanti rimangono in vigore.",
        ],
        list: [],
      },
      "13": {
        id: "contact",
        heading: "Contattaci",
        paragraphs: ["Se hai domande sui termini, contattaci:"],
        list: [
          "Via email: legal@amiquus.com",
          "Tramite la pagina contatti sul nostro sito",
        ],
      },
    },
  },
  privacy: {
    metaTitle: "Informativa sulla privacy | Amiquus",
    metaDescription:
      "Scopri come Amiquus gestisce i tuoi dati personali, diritti e pratiche di raccolta dati.",
    title: "Informativa sulla privacy",
    lastUpdated: "Ultimo aggiornamento: 21 maggio 2025.",
    sections: {
      "0": {
        id: "introduction",
        heading: "Introduzione",
        paragraphs: [
          "Benvenuto su Amiquus. Rispettiamo la tua privacy e ci impegniamo a proteggere i tuoi dati personali. Questa informativa sulla privacy spiega come gestiamo i tuoi dati, i tuoi diritti e come la legge ti protegge.",
        ],
      },
      "1": {
        id: "data-we-collect",
        heading: "Dati che raccogliamo",
        paragraphs: [
          "Raccogliamo vari tipi di dati per scopi diversi per fornirti e migliorare il servizio:",
        ],
        list: [
          "Dati personali: indirizzo email, nome, cognome e immagine del profilo (se fornita tramite terze parti).",
          "Dati account: credenziali di accesso e impostazioni account.",
          "Dati di utilizzo: informazioni su come utilizzi il sito e i servizi.",
          "Criteri di ricerca: criteri del veicolo che imposti per il monitoraggio (marca, modello, prezzo, ecc.).",
          "Dati Telegram: se scegli notifiche Telegram, memorizziamo il tuo ID chat e token bot.",
          "Dati di pagamento: al momento dell'acquisto, il nostro processore di pagamento raccoglie i dati necessari. Amiquus non memorizza dati completi della carta di credito.",
        ],
      },
      "2": {
        id: "how-we-use-data",
        heading: "Come utilizziamo i tuoi dati",
        paragraphs: ["Utilizziamo i tuoi dati personali per:"],
        list: [
          "Fornire e mantenere il servizio",
          "Notificare modifiche al servizio",
          "Consentire funzionalità interattive",
          "Fornire supporto clienti",
          "Raccogliere analisi per migliorare il servizio",
          "Monitorare l'uso del servizio",
          "Rilevare, prevenire e risolvere problemi tecnici",
          "Elaborare pagamenti e prevenire frodi",
          "Inviare annunci che corrispondono ai tuoi criteri",
        ],
      },
      "3": {
        id: "data-storage",
        heading: "Archiviazione e sicurezza dei dati",
        paragraphs: [
          "Applichiamo misure di sicurezza adeguate per proteggere contro accesso non autorizzato, alterazione o distruzione dei dati. Tutti i dati sono archiviati su server sicuri con crittografia in transito e a riposo.",
          "Conserviamo i tuoi dati personali solo per il tempo necessario agli scopi indicati in questa politica, inclusi per soddisfare requisiti legali, normativi o contabili.",
        ],
      },
      "4": {
        id: "gdpr",
        heading: "I tuoi diritti ai sensi del GDPR",
        paragraphs: [
          "Se risiedi nello Spazio Economico Europeo (SEE), hai determinati diritti di protezione dei dati. Amiquus si impegna a consentire la correzione, modifica, eliminazione o limitazione dell'uso dei tuoi dati.",
          "Hai i seguenti diritti:",
        ],
        list: [
          "Diritto di accesso, aggiornamento o eliminazione dei dati",
          "Diritto di rettifica",
          "Diritto di opposizione",
          "Diritto di limitazione",
          "Diritto alla portabilità dei dati",
          "Diritto di revoca del consenso",
        ],
      },
      "5": {
        id: "cookies",
        heading: "Politica sui cookie",
        paragraphs: [
          "I cookie sono piccoli dati memorizzati sul tuo dispositivo. Li usiamo per:",
        ],
        list: [
          "Mantenere la sessione di accesso",
          "Comprendere l'uso del sito",
          "Memorizzare preferenze",
          "Personalizzare l'esperienza",
        ],
      },
      "6": {
        id: "third-party",
        heading: "Terze parti",
        paragraphs: [
          "Possiamo incaricare terze parti di eseguire il servizio, svolgere compiti o analizzare l'uso.",
          "Queste terze parti includono:",
        ],
        list: [
          "Processori di pagamento (Stripe)",
          "Fornitori di analisi",
          "Servizi di supporto clienti",
          "Fornitori di hosting e cloud",
        ],
        paragraphs2: [
          "Queste terze parti hanno accesso ai tuoi dati solo per svolgere compiti e non possono divulgarli o usarli per altri scopi.",
        ],
      },
      "7": {
        id: "changes",
        heading: "Modifiche all'informativa sulla privacy",
        paragraphs: [
          "Possiamo aggiornare occasionalmente l'informativa sulla privacy. Ti informeremo pubblicando la nuova informativa su questa pagina e aggiornando la data 'Ultimo aggiornamento'.",
          "Ti consigliamo di rivedere periodicamente l'informativa. Le modifiche entrano in vigore alla pubblicazione.",
        ],
      },
      "8": {
        id: "contact",
        heading: "Contattaci",
        paragraphs: [
          "Se hai domande sull'informativa sulla privacy, contattaci:",
        ],
        list: [
          "Via email: privacy@amiquus.com",
          "Tramite la pagina contatti sul nostro sito",
        ],
      },
    },
  },
  faqs: {
    metaTitle: "FAQ | Amiquus",
    metaDescription:
      "Trova risposte alle domande più comuni sul servizio di monitoraggio annunci auto Amiquus.",
    title: "Domande frequenti",
    subtitle:
      "Risposte rapide alle domande comuni sul nostro servizio di monitoraggio annunci",
    general: {
      heading: "Domande generali",
      whatIs: {
        question: "Cos'è Amiquus?",
        answer:
          "Amiquus è un servizio che monitora più siti di veicoli corrispondenti ai tuoi criteri. Quando viene trovata una corrispondenza, ricevi una notifica istantanea via Telegram.",
      },
      howItWorks: {
        question: "Come funziona?",
        answer: [
          "Imposta criteri di ricerca (marca, modello, prezzo, ecc.)",
          "Seleziona siti da monitorare",
          "Collega Telegram per le notifiche",
          "Il nostro sistema monitora continuamente i siti selezionati",
          "Alla corrispondenza, ricevi una notifica Telegram istantanea con dettagli e link",
        ],
      },
      whichWebsites: {
        question: "Quali siti monitorate?",
        answerIntro:
          "Attualmente monitoriamo le seguenti piattaforme principali:",
        list: [
          "AutoTrader",
          "Cars.com",
          "CarGurus",
          "TrueCar",
          "Facebook Marketplace (tramite URL)",
          "Craigslist",
          "eBay Motors",
        ],
        outro:
          "Aggiungiamo continuamente nuove piattaforme per una copertura più ampia.",
      },
    },
    subscription: {
      heading: "Domande sull'abbonamento",
      cost: {
        question: "Quanto costa l'abbonamento?",
        answer: [
          "I prezzi partono da 79,99 €/mese per monitorare un sito con aggiornamenti ogni 6 ore. Siti aggiuntivi costano 4,99 € al mese. Aggiorna per notifiche più rapide.",
          "Per dettagli sui prezzi, consulta la sezione prezzi sulla homepage.",
        ],
      },
      cancel: {
        question: "Come annullo l'abbonamento?",
        stepsIntro:
          "Puoi annullare l'abbonamento in qualsiasi momento dalla pagina profilo:",
        steps: [
          "Accedi al tuo account",
          'Vai alla pagina "Profilo"',
          'Seleziona la scheda "Abbonamenti"',
          'Clicca su "Annulla abbonamento" accanto all\'abbonamento da annullare',
        ],
        note: "L'abbonamento rimane attivo fino alla fine del periodo di fatturazione corrente.",
      },
      multiple: {
        question: "Posso avere più abbonamenti per modelli diversi?",
        answer:
          "Sì, puoi creare più abbonamenti sotto un unico account. Ognuno può monitorare modelli o marche diversi. Ideale se stai cercando più veicoli o aiutando amici.",
      },
      limit: {
        question: "Perché c'è un limite di abbonati?",
        intro: "Limitiamo il servizio a 30 abbonati attivi per:",
        list: [
          "La massima qualità del servizio e precisione dei dati",
          "Supporto personalizzato per ogni abbonato",
          "Consegna più rapida delle notifiche nelle ore di punta",
          "Scraping etico che non sovraccarica i siti target",
        ],
        outro:
          "Se siamo al completo, unisciti alla lista d'attesa e ti avviseremo quando si libera un posto.",
      },
    },
    technical: {
      heading: "Domande tecniche",
      telegram: {
        question: "Come configuro le notifiche Telegram?",
        stepsIntro: "Per configurare le notifiche Telegram:",
        steps: [
          "Crea un bot Telegram tramite BotFather (istruzioni nel dashboard)",
          "Copia il token del bot e l'ID chat",
          'Inserisci i dati nelle impostazioni account sotto "Impostazioni notifiche"',
          'Testa la connessione con il pulsante "Invia messaggio di prova"',
        ],
        note: "Istruzioni dettagliate con screenshot disponibili durante la configurazione dell'abbonamento.",
      },
      frequency: {
        question: "Con quale frequenza ricevo notifiche?",
        intro: "La frequenza delle notifiche dipende da:",
        list: [
          "Il pacchetto di frequenza selezionato (da orario a ogni minuto)",
          "Il numero di nuovi annunci che corrispondono ai tuoi criteri",
          "L'attività di mercato per la marca/modello selezionata",
        ],
        outro:
          "Ricevi notifiche solo quando vengono trovati nuovi annunci che corrispondono ai tuoi criteri.",
      },
      privacy: {
        question: "Come è protetta la mia privacy?",
        intro: "Prendiamo sul serio la privacy e utilizziamo:",
        list: [
          "Crittografia dei dati in transito e a riposo",
          "Pagamenti sicuri tramite Stripe",
          "Nessuna condivisione di dati con terze parti",
          "Puoi richiedere o eliminare i tuoi dati in qualsiasi momento",
        ],
        outro:
          "Maggiori informazioni nella nostra Informativa sulla privacy completa.",
      },
    },
    support: {
      heading: "Hai ancora domande?",
      description:
        "Se non hai trovato la risposta, il nostro supporto è a disposizione!",
      button: "Contatta supporto",
    },
  },
  waitlist: {
    metaTitle: "Unisciti alla lista d'attesa - Amiquus",
    metaDescription:
      "Unisciti alla lista d'attesa di Amiquus e sii avvisato quando gli abbonamenti sono disponibili.",
    title: "Unisciti alla nostra lista d'attesa",
    subtitle:
      "A causa dell'alta domanda, limitiamo il numero di abbonamenti attivi per garantire la migliore qualità.",
    limited: {
      heading: "Disponibilità limitata",
      description: "Limitiamo il sistema a soli 30 abbonati attivi per:",
      points: [
        "Affidabilità e velocità di scraping eccezionali per tutti gli utenti",
        "Minore rischio di blocco da parte dei siti",
        "Supporto personalizzato per ogni abbonato",
        "Distribuzione equa delle risorse del server",
      ],
      available:
        "{{remaining}} posti abbonamento su {{capacity}} sono attualmente disponibili.",
      full: "Tutti i posti abbonamento sono attualmente occupati. Unisciti alla lista d'attesa per essere avvisato quando si libera un posto.",
    },
    success: {
      title: "Sei in lista d'attesa!",
      description: "Ti avviseremo non appena si libera un posto abbonamento",
      message:
        "Grazie per il tuo interesse in Amiquus! Ti abbiamo aggiunto alla lista d'attesa e ti contatteremo non appena un posto sarà disponibile.",
      button: "Torna alla homepage",
    },
    cantJoin: {
      title: "Unisciti alla lista d'attesa",
      description: "Ti avviseremo non appena si libera un posto abbonamento",
    },
    form: {
      firstName: {
        label: "Nome",
        placeholder: "Mario",
      },
      lastName: {
        label: "Cognome",
        placeholder: "Rossi",
      },
      email: {
        label: "Email",
        placeholder: "mario.rossi@esempio.it",
        description:
          "Useremo questo indirizzo email per avvisarti quando si libera un posto",
      },
      submit: "Unisciti alla lista d'attesa",
      submitting: "Invio in corso...",
    },
  },
  support: {
    metaTitle: "Supporto | Amiquus - Centro assistenza",
    metaDescription:
      "Ottieni aiuto per il tuo account Amiquus, abbonamento o avvisi. Esplora il centro assistenza o contatta il supporto.",
    title: "Centro supporto",
    subtitle:
      "Trova risposte a domande comuni o contatta il nostro team di supporto",
    emailSupport: {
      title: "Supporto via email",
      description: "Inviaci un'email e risponderemo entro 24 ore",
      email: "support@amiquus.com",
    },
    faqHeading: "Domande frequenti",
    faqs: {
      telegram: {
        question: "Come configuro le notifiche Telegram?",
        intro: "Per configurare le notifiche Telegram segui questi passaggi:",
        steps: [
          "Crea un bot Telegram tramite BotFather (istruzioni nel dashboard)",
          "Copia il token API e l'ID chat",
          'Inserisci i dati nelle impostazioni account sotto "Impostazioni notifiche"',
          'Testa la connessione con il pulsante "Invia messaggio di prova"',
        ],
        outro:
          "Se hai bisogno di ulteriore aiuto, una guida dettagliata è disponibile nel tuo dashboard.",
      },
      updates: {
        question: "Con quale frequenza vengono aggiornati gli annunci?",
        answer:
          "La frequenza di aggiornamento dipende dal pacchetto di abbonamento. I piani base ricevono aggiornamenti ogni 6 ore, i piani premium possono essere ogni 30 minuti. Puoi visualizzare e modificare la frequenza attuale nelle impostazioni di abbonamento.",
      },
      facebook: {
        question: "Posso monitorare Facebook Marketplace?",
        answer:
          "Sì, supportiamo il monitoraggio di Facebook Marketplace. Per configurarlo, fornisci l'URL della pagina dei risultati di ricerca con i filtri applicati. Il sistema monitorerà quindi quella ricerca per nuovi annunci che corrispondono ai tuoi criteri.",
      },
      cancel: {
        question: "Come annullo l'abbonamento?",
        answer:
          'Puoi annullare l\'abbonamento in qualsiasi momento dalla pagina profilo. Clicca sulla scheda "Abbonamenti", trova l\'abbonamento e clicca su "Annulla abbonamento". Il servizio rimane attivo fino alla fine del periodo di fatturazione.',
      },
      full: {
        question: "Cosa succede se tutti i posti sono occupati?",
        answer:
          "Per mantenere un'alta qualità del servizio, limitiamo il numero di abbonamenti attivi. Se tutti i posti sono occupati, puoi unirti alla lista d'attesa. Quando si libera un posto, ti avviseremo e avrai priorità rispetto al pubblico generale.",
      },
    },
    stillNeedHelp: {
      heading: "Hai bisogno di ulteriore aiuto?",
      description:
        "Se non hai trovato la risposta, contatta il nostro team di supporto. Siamo qui per aiutare!",
      button: "Contatta supporto",
    },
  },
  notFound: {
    title: "404 Pagina non trovata",
    message: "Hai dimenticato di aggiungere la pagina al router?",
  },
  emails: {
    verification: {
      subject: "Codice di verifica email Amiquus",
      greeting: "Ciao,",
      message: "Usa il seguente codice per completare la tua registrazione:",
      expiration: "Il codice scade in 10 minuti.",
    },
    invoice: {
      success: {
        subject: "Pagamento ricevuto Amiquus – Fattura #",
        h2Message:
          "Il tuo pagamento dell'abbonamento Amiquus è andato a buon fine!",
        greeting: "Ciao,",
        paymentMessage: "Abbiamo ricevuto il tuo pagamento di",
        downloadMessage:
          "Puoi visualizzare o scaricare la fattura tramite il seguente link:",
        viewInvoice: "Visualizza fattura",
        invoiceNumber: "Fattura #:",
      },
      pending: {
        subjectA: "Pagamento in sospeso – Fattura",
        subjectB: "per il tuo abbonamento Amiquus",
        h2Message:
          "Azione richiesta: Completa il pagamento per il tuo abbonamento Amiquus",
        greeting: "Ciao,",
        messageA: "La tua fattura",
        messageB:
          "è ancora da pagare. Per attivare l'abbonamento, completa il pagamento di",
        paymentMessage:
          "Puoi completare il pagamento in modo sicuro tramite il seguente link:",
        payInvoice: "Paga fattura",
        ignoreEmail:
          "Se hai già effettuato il pagamento, puoi ignorare questa email.",
      },
      failed: {
        subject: "Pagamento fallito – Fattura",
        message:
          "Non siamo riusciti a elaborare il tuo ultimo pagamento (tentativo",
        attemptsA:
          "Riproveremo a breve. Non è richiesta alcuna azione per ora.",
        attemptsB:
          "Abbiamo provato a addebitare il tuo metodo di pagamento tre volte, ma tutti i tentativi sono falliti.",
        attemptsC:
          "Di conseguenza, il tuo abbonamento è <strong>temporaneamente sospeso</strong>. Non riceverai aggiornamenti fino alla riattivazione.",
        attemptsD:
          "Aggiorna il tuo metodo di pagamento e riattiva l'abbonamento dal profilo:",
        viewInvoice: "Visualizza fattura",
        managePayment: "Gestisci metodi di pagamento",
      },
    },
    waitlist: {
      subject: "Sei nella lista d'attesa di Amiquus!",
      h2Message: "Sei in lista!",
      hi: "Ciao",
      message:
        "Grazie per esserti unito alla lista d'attesa di Amiquus. Ti avviseremo non appena si libera un posto.",
      anyQuestions: "Se hai domande, non esitare a rispondere a questa email.",
    },
    common: {
      thanksMessage: "Grazie per aver scelto Amiquus!",
      signature: "Cordiali saluti,<br/>Il team Amiquus",
      team: "— Il team Amiquus",
      needHelp: "Hai bisogno di aiuto?",
      hello: "Ciao",
    },
  },
};

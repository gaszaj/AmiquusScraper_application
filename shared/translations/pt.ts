// === pt.ts === Português
export const pt = {
  navigations: {
    features: "Funcionalidades",
    how: "Como funciona",
    pricing: "Preços",
    getAlerts: "Receber alertas",
    waitlist: "Lista de espera",
    faq: "FAQ",
    login: "Iniciar sessão",
    getStarted: "Começar",
    subscribers: "Subscritores",
    theme: "Tema",
    language: "Idioma",
    myAlerts: "Os meus alertas",
    profile: "Perfil",
    settings: "Definições",
    logout: "Terminar sessão",
    signUp: "Registar",
  },
  hero: {
    label: "Siga anúncios de carros usados em tempo real!",
    title: "Nunca mais perca a oferta perfeita para o seu carro",
    subtitle:
      "O Amiquus notifica-o imediatamente quando o carro dos seus sonhos aparece em vários sites. Receba alertas por Telegram assim que for encontrada uma correspondência.",
    button1: "Configurar alertas",
    button2: "Ver como funciona",
    trustIndicators: {
      websites: "Mais de 15 sites",
      realtime: "Notificações em tempo real",
      noSetup: "Sem instalação",
      cancelAnytime: "Cancele a qualquer momento",
    },
  },
  limited: {
    full: {
      title: "Limite de subscrições atingido",
      description:
        "Atingimos a capacidade de 30 subscritores ativos. Junte-se à lista de espera para ser notificado quando houver uma vaga.",
      buttonText: "Juntar-se à lista de espera",
    },
    limited: {
      title: "Disponibilidade limitada",
      description:
        "Restam apenas {{remaining}} de {{capacity}} vagas. Subscreva agora antes que esgotem!",
      buttonText: "Começar agora",
    },
    available: {
      title: "Subscrições disponíveis",
      description:
        "{{active}} de {{capacity}} subscrições estão atualmente ativas. Há muito espaço para si!",
      buttonText: "Começar agora",
    },
  },
  features: {
    heading: "Porquê escolher o Amiquus?",
    subheading:
      "Poupa tempo e nunca perde o carro perfeito com o nosso serviço automatizado.",
    multiSite: {
      title: "Acompanhamento multi-site",
      description:
        "Acompanhe vários sites de carros simultaneamente sem verificar manualmente cada um.",
    },
    notifications: {
      title: "Notificações instantâneas",
      description:
        "Receba notificações instantâneas por Telegram quando um carro corresponder aos seus critérios.",
    },
    filters: {
      title: "Filtros personalizáveis",
      description:
        "Defina critérios precisos: marca, modelo, ano, quilometragem, preço – encontre exatamente o que deseja.",
    },
    frequency: {
      title: "Frequência ajustável",
      description:
        "Escolha a frequência de verificação de novos anúncios – de hora a hora até em tempo real.",
    },
    languages: {
      title: "Suporte multilíngue",
      description:
        "Receba notificações no seu idioma preferido para uma compreensão mais fácil dos anúncios.",
    },
    account: {
      title: "Gestão de conta simples",
      description:
        "Gerencie vários perfis de pesquisa e altere a sua subscrição com alguns cliques.",
    },
  },
  howItWorks: {
    title: "Como funciona o Amiquus",
    subtitle:
      "Configure uma vez e deixe o nosso sistema encontrar a oferta perfeita para si",
    whyTitle: "Porquê escolher o Amiquus?",
    steps: {
      preferences: {
        title: "Defina as suas preferências",
        description:
          "Escolha marcas, modelos, faixas de preço e outros critérios que lhe interessam.",
      },
      telegram: {
        title: "Ligue o Telegram",
        description:
          "Ligue a sua conta Telegram para receber notificações instantâneas sobre novos anúncios.",
      },
      notifications: {
        title: "Receba notificações instantâneas",
        description:
          "Receba alertas imediatamente quando um carro correspondente aparecer em qualquer site.",
      },
      findCar: {
        title: "Encontre o seu carro perfeito",
        description:
          "Seja o primeiro a saber sobre novos anúncios e garanta as melhores ofertas.",
      },
    },
    features: [
      "Acompanhe mais de 15 sites simultaneamente",
      "Critérios de pesquisa personalizáveis com filtragem avançada",
      "Notificações em tempo real por Telegram",
      "Alertas automáticos de descida de preço e novos anúncios",
      "Processo de configuração simples em menos de 5 minutos",
    ],
    setAlerts: "Configurar alertas",
    notificationMockup1: {
      title: "Nova correspondência encontrada!",
      description:
        "BMW Série 3, 2019, 32 500 € – Publicado recentemente no AutoTrader",
    },
    notificationMockup2: {
      title: "Alerta Telegram",
      description: "Mercedes Classe C, 2020, 30 000 km – Preço baixou 2 000 €",
    },
  },
  pricing: {
    title: "Preços simples e transparentes",
    subtitle:
      "Os nossos preços baseiam-se nas suas necessidades. Comece com o plano base e personalize-o.",
    baseTitle: "Plano base: 79,99 €/mês",
    includedTitle: "O que está incluído:",
    includedFeatures: [
      "Acompanhamento de um site",
      "Atualizações a cada hora",
      "Filtros ilimitados",
      "Notificações por Telegram",
    ],
    addonsTitle: "Complementos:",
    addons: [
      { name: "Cada site adicional", price: 4.99 },
      { name: "Atualizações a cada 30 minutos", price: 2.99 },
      { name: "Atualizações a cada 15 minutos", price: 5.99 },
      { name: "Atualizações a cada 5 minutos", price: 9.99 },
      { name: "Atualizações a cada minuto", price: 14.99 },
    ],
    footerNote:
      "Todos os planos incluem configurações de pesquisa ilimitadas e gestão de subscrição simples.",
    button: "Começar agora",
  },
  signup: {
    heading: "Criar alerta de carro",
    subheading:
      "Configure notificações personalizadas para anúncios de carros em poucos passos.",
    cta: "Receber notificações agora",
    waitlist: {
      message:
        "Estamos atualmente esgotados. Junte-se à lista de espera para ser notificado quando houver uma vaga.",
      cta: "Juntar-se à lista de espera",
    },
    toast: {
      success: {
        title: "Subscrição criada",
        description: "A sua subscrição foi criada com sucesso",
      },
      error: {
        title: "Falha na subscrição",
        description:
          "Não foi possível criar a subscrição. Tente novamente mais tarde.",
      },
    },
  },
  payment: {
    toast: {
      success: {
        title: "Sucesso",
        description: "O seu método de pagamento foi configurado com sucesso.",
      },
      error: {
        title: "Erro",
        fallback: "Ocorreu um erro inesperado. Tente novamente.",
      },
    },
    button: {
      submit: "Configurar método de pagamento",
      processing: "A processar...",
    },
  },
  alertSchema: {
    errors: {
      carBrand: "A marca do carro é obrigatória",
      carModel: "O modelo do carro é obrigatório",
      fuelType: "O tipo de combustível é obrigatório",
      priceMin: "O preço mínimo deve ser um número",
      priceMax: "O preço máximo deve ser um número",
      yearMin: "O ano mínimo deve ser válido",
      yearMax: "O ano máximo deve ser válido",
      maxKilometers: "A quilometragem máxima deve ser um número",
      telegramUsername: "O nome de utilizador do Telegram é obrigatório",
      telegramToken: "O token do bot Telegram é obrigatório",
      telegramChatId: "O ID do chat Telegram é obrigatório",
      websitesSelected: "Deve selecionar pelo menos um site",
      notificationLanguage: "O idioma da notificação é obrigatório",
      facebookMarketplaceUrl:
        "O URL do Facebook Marketplace é obrigatório se o Facebook estiver selecionado",
    },
  },
  personalInfo: {
    heading: "Informações pessoais",
    description:
      "Por favor, introduza as suas informações pessoais para configurar corretamente os seus alertas.",
    labels: {
      firstName: "Nome próprio",
      lastName: "Apelido",
      email: "Endereço de e-mail",
    },
    placeholders: {
      firstName: "João",
      lastName: "Silva",
      email: "joao.silva@exemplo.pt",
    },
    errors: {
      firstName: "O nome próprio é obrigatório",
      lastName: "O apelido é obrigatório",
      email: "Introduza um endereço de e-mail válido",
    },
    actions: {
      login: "Iniciar sessão ou registar para continuar",
      continue: "Continuar",
    },
  },
  websiteSelection: {
    heading: "Seleção de sites",
    description:
      "Escolha os sites a acompanhar e a frequência de atualização desejada.",
    labels: {
      websites: "Sites a acompanhar",
      facebookUrl: "URL do Facebook Marketplace",
      updateFrequency: "Frequência de atualização",
    },
    placeholders: {
      frequency: "Selecionar frequência",
    },
    help: {
      websites:
        "Selecione um ou mais sites para acompanhar anúncios de carros.",
      facebookUrl:
        "Cole o URL dos seus resultados de pesquisa no Facebook Marketplace.",
      videoTitle:
        "Precisa de ajuda para encontrar o link do Facebook Marketplace?",
      videoDesc: "Veja o vídeo abaixo para instruções passo a passo.",
      updateFrequency:
        "Com que frequência verificamos novos anúncios? Frequências mais altas podem custar mais.",
    },
    errors: {
      websites: "Deve selecionar pelo menos um site",
      facebookUrl:
        "O URL do Facebook Marketplace é obrigatório se o Facebook estiver selecionado",
    },
    actions: {
      previous: "Anterior",
      continue: "Continuar",
    },
  },
  carDetails: {
    heading: "Detalhes do carro",
    description:
      "Especifique os detalhes do carro que procura. Todos os campos são opcionais – deixe em branco para resultados mais amplos.",
    labels: {
      carBrand: "Marca do carro",
      carModel: "Modelo do carro",
      fuelType: "Tipo de combustível",
      priceMin: "Preço mínimo",
      priceMax: "Preço máximo",
      yearMin: "Ano mínimo",
      yearMax: "Ano máximo",
      maxKilometers: "Quilometragem máxima",
    },
    placeholders: {
      carBrand: "Selecionar marca",
      carModel: "Selecionar modelo",
      carModelDisabled: "Selecione primeiro a marca",
      fuelType: "Selecionar tipo de combustível",
      priceMin: "Introduzir preço mínimo",
      priceMax: "Introduzir preço máximo",
      yearMin: "Introduzir ano mínimo",
      yearMax: "Introduzir ano máximo",
      maxKilometers: "Introduzir quilometragem máxima",
    },
    options: {
      noModelsAvailable: "Nenhum modelo disponível",
    },
    errors: {
      carBrand: "A marca do carro é obrigatória",
      carModel: "O modelo do carro é obrigatório",
      fuelType: "O tipo de combustível é obrigatório",
      priceMin: "O preço mínimo deve ser um número",
      priceMax: "O preço máximo deve ser um número",
      yearMin: "O ano mínimo deve ser válido",
      yearMax: "O ano máximo deve ser válido",
      maxKilometers: "A quilometragem máxima deve ser um número",
    },
    actions: {
      previous: "Anterior",
      continue: "Continuar",
    },
  },
  telegram: {
    heading: "Configuração do Telegram",
    description:
      "Configure as notificações do Telegram introduzindo o token do bot e o ID do chat.",
    subHeading: "Configure o seu bot Telegram",
    info: "Se tiver problemas ao criar um bot Telegram, contacte-nos e ajudaremos.",
    contact: "Contacte-nos",
    instructions: {
      botTitle: "Como obter o token do bot Telegram:",
      botStep1: "Abra o Telegram e procure por @BotFather",
      botStep2: "Envie o comando /newbot",
      botStep3: "Siga as instruções para criar o bot",
      botStep4: "Copie o token fornecido pelo BotFather",

      chatTitle: "Como obter o seu ID de chat Telegram:",
      chatStep1: "Abra o Telegram e procure por @userinfobot",
      chatStep2: "Envie qualquer mensagem ao bot",
      chatStep3:
        "O bot responderá com as suas informações, incluindo o ID do chat",
      chatStep4: "Copie o ID do chat (é um número)",
    },

    videoPrompt:
      "Precisa de ajuda para configurar o token do bot e o ID do chat?",
    videoDescription: "Veja o vídeo abaixo para instruções passo a passo.",

    labels: {
      token: "Token do bot Telegram",
      chatId: "O seu ID de chat Telegram",
      language: "Idioma da notificação",
      username: "Nome de utilizador Telegram",
    },

    placeholders: {
      token: "Introduza o seu token de bot do BotFather",
      chatId: "Introduza o seu ID de chat Telegram",
      language: "Selecione o idioma das mensagens Telegram",
      username: "Introduza o seu nome de utilizador Telegram",
    },
    usernameDescription:
      "Este é o nome de utilizador da sua conta Telegram (sem o sinal @).",
    examples: {
      token: "Exemplo: 5432109876:ABCDefGhIJklMNoPqrSTuvWXyz1234567890",
      chatId:
        "Obtenha isto enviando uma mensagem para @userinfobot no Telegram",
    },
    setupTitle: "Instruções de configuração:",
    setupSteps: [
      'Abra o Telegram e procure por "BotFather"',
      'Inicie uma conversa com o BotFather clicando em "Start"',
      "Introduza /newbot e siga as instruções para criar um novo bot",
      "Escolha um nome para o seu bot",
      "Escolha um nome de utilizador para o bot (deve terminar em 'bot')",
      "Copie o token API fornecido pelo BotFather",
      "Envie uma mensagem ao seu novo bot para ativar a conversa",
    ],
    chatIdTitle: "Como obter o seu ID de chat Telegram:",
    chatIdSteps: [
      'Abra o Telegram e procure por "userinfobot"',
      "Envie qualquer mensagem ao bot",
      "O bot responderá com as suas informações, incluindo o ID do chat",
      "Copie o seu ID do chat",
    ],
    helpTitle:
      "Precisa de ajuda para configurar o token do bot e o ID do chat?",
    helpDescription: "Veja o vídeo abaixo para instruções passo a passo.",
    botTokenLabel: "Token do bot Telegram",
    botTokenPlaceholder: "Introduza o seu token de bot do BotFather",
    botTokenExample: "Exemplo: 5432109876:ABCDefGhIJklMNoPqrSTuvWXyz1234567890",
    chatIdLabel: "O seu ID de chat Telegram",
    chatIdPlaceholder: "Introduza o seu ID de chat Telegram",
    chatIdDescription:
      "Obtenha isto enviando uma mensagem para @userinfobot no Telegram",
    languageLabel: "Idioma da notificação",
    languagePlaceholder: "Selecione o idioma das mensagens Telegram",
    languages: {
      en: "Inglês",
      de: "Alemão",
      fr: "Francês",
      es: "Espanhol",
      it: "Italiano",
    },
    previewTitle: "Pré-visualização da notificação Telegram",
    carAlertTitle: "Novo alerta de carro!",
    priceLabel: "Preço: {{price}}",
    kilometresLabel: "Quilómetros: {{kms}}",
    locationLabel: "Localização: {{location}}",
    viewListing: "Ver anúncio →",
    errors: {
      token: "O token do bot Telegram é obrigatório",
      chatId: "O ID do chat Telegram é obrigatório",
      language: "O idioma da notificação é obrigatório",
      username: "O nome de utilizador Telegram é obrigatório",
    },

    actions: {
      previous: "Anterior",
      continue: "Continuar",
    },
    contactBotInstruction:
      "Inicie uma conversa com o nosso bot Telegram clicando no link abaixo e enviando uma mensagem:",
    contactBotNote:
      "Isto é obrigatório para receber alertas de carros. Se estiver no computador, digitalize o código QR.",
    confirmContact: "Iniciei a conversa com o bot e enviei uma mensagem",
  },
  review: {
    title: "Revisão da sua subscrição",
    description:
      "Por favor, verifique os detalhes da subscrição antes de pagar.",

    personal: {
      title: "Informações pessoais",
      name: "Nome",
      email: "E-mail",
    },

    monitoring: {
      title: "Definições de monitorização",
      websites: "Sites",
      facebookUrl: "URL do Facebook",
      updateFrequency: "Frequência de atualização",
    },

    specs: {
      title: "Especificações do carro",
      brand: "Marca",
      model: "Modelo",
      fuelType: "Tipo de combustível",
      yearRange: "Ano",
      mileage: "Quilómetros (km)",
      price: "Preço (€)",
    },

    notification: {
      title: "Definições de notificação",
      telegram: "Bot Telegram",
      language: "Idioma da notificação",
    },

    summary: {
      title: "Resumo da subscrição",
      base: "Subscrição base",
      extraWebsites: "Sites adicionais",
      frequencyUpgrade: "Atualização de frequência",
      total: "Total (mensal)",
    },

    terms: {
      checkbox: "Aceito os",
      tos: "Termos de utilização",
      privacy: "Política de privacidade",
      note: "A sua subscrição renova-se automaticamente todos os meses. Pode cancelar a qualquer momento.",
      error: "Deve aceitar os termos de utilização",
    },

    actions: {
      previous: "Anterior",
      submit: "Ir para pagamento",
    },
  },
  faq: {
    title: "Perguntas frequentes",
    subtitle:
      "Encontre respostas às perguntas mais comuns sobre o nosso serviço.",
    contactPrompt: "Ainda tem perguntas?",
    contactLink: "Contacte o nosso suporte",
    questions: [
      {
        question:
          "Com que rapidez recebo notificações após a publicação de um novo anúncio?",
        answer:
          "A velocidade das notificações depende da frequência de atualização escolhida. Com o plano horário, recebe notificações dentro de uma hora após a publicação. Para notificações quase instantâneas (em poucos minutos), atualize para planos mais frequentes.",
      },
      {
        question:
          "Posso acompanhar vários tipos de carros diferentes ao mesmo tempo?",
        answer:
          "Sim! Pode criar vários perfis de pesquisa com critérios diferentes. Cada perfil conta como uma subscrição separada, mas pode gerenciá-los a partir de uma única conta.",
      },
      {
        question: "Quais sites suportam atualmente?",
        answer:
          "Atualmente suportamos as principais plataformas, incluindo AutoTrader, CarGurus, Cars.com e Facebook Marketplace. Adicionamos constantemente novos sites conforme os pedidos.",
      },
      {
        question: "Preciso de conhecimentos técnicos para usar o bot Telegram?",
        answer:
          "Não! Fornecemos instruções detalhadas com texto e vídeo. A maioria dos utilizadores configura o bot em menos de 5 minutos.",
      },
      {
        question:
          "Posso alterar os critérios de pesquisa após configurar a subscrição?",
        answer:
          "Sim, pode alterar os critérios a qualquer momento no painel. As alterações entram em vigor imediatamente.",
      },
      {
        question: "Como cancelo a subscrição?",
        answer:
          'Pode cancelar a subscrição a qualquer momento na secção "Subscrições" do painel. O serviço permanece ativo até ao final do período de faturação.',
      },
    ],
  },
  footer: {
    brandTitle: "Amiquus",
    brandDescription:
      "O seu assistente pessoal para encontrar a oferta perfeita de carro usado no momento certo.",
    quickLinks: "Links rápidos",
    features: "Funcionalidades",
    pricing: "Preços",
    faq: "FAQ",
    getStarted: "Começar",
    legal: "Legal",
    terms: "Termos de utilização",
    privacy: "Política de privacidade",
    cookies: "Política de cookies",
    gdpr: "Conformidade RGPD",
    contact: "Contacto",
    email: "support@amiquus.com",
    telegram: "Contacte-nos por Telegram",
    copyright: "Todos os direitos reservados.",
    about: "Sobre",
    blog: "Blog",
    careers: "Carreiras",
    support: "Suporte",
  },
  login: {
    title: "Iniciar sessão na conta",
    description: "Introduza o seu e-mail e palavra-passe para aceder ao painel",
    emailLabel: "E-mail",
    passwordLabel: "Palavra-passe",
    loginButton: "Iniciar sessão",
    loggingIn: "A iniciar sessão...",
    loginWithGoogle: "Iniciar sessão com Google",
    or: "ou",
    noAccount: "Não tem conta?",
    registerLink: "Registar",
    successTitle: "Sessão iniciada com sucesso",
    successMessage: "Iniciou sessão com sucesso.",
    errorTitle: "Falha no início de sessão",
    genericError: "Verifique as suas credenciais e tente novamente.",
    errors: {
      invalidEmail: "Introduza um endereço de e-mail válido",
      shortPassword: "A palavra-passe deve ter pelo menos 6 caracteres",
    },
  },
  register: {
    title: "Criar conta",
    description: "Registe-se e comece a procurar o carro dos seus sonhos",
    google: "Registar com Google",
    orContinue: "Ou continue com",
    firstName: "Nome próprio",
    lastName: "Apelido",
    username: "Nome de utilizador",
    email: "E-mail",
    password: "Palavra-passe",
    confirmPassword: "Confirmar palavra-passe",
    termsNotice: "Aceito os",
    termsOfService: "Termos de utilização",
    privacyPolicy: "Política de privacidade",
    createBtn: "Criar conta",
    alreadyHave: "Já tem conta?",
    login: "Iniciar sessão",
    and: "e",
    toast: {
      missingFields: {
        title: "Campos em falta",
        desc: "Preencha todos os campos obrigatórios",
      },
      invalidUsername: {
        title: "Nome de utilizador inválido",
        desc: "O nome de utilizador deve ser alfanumérico e ter entre 3 e 20 caracteres",
      },
      passwordMismatch: {
        title: "As palavras-passe não coincidem",
        desc: "Certifique-se de que as palavras-passe coincidem",
      },
      termsNotAccepted: {
        title: "Termos não aceites",
        desc: "Deve aceitar os termos de utilização e a política de privacidade para continuar",
      },
      success: {
        title: "Registo bem-sucedido",
        desc: "Bem-vindo ao Amiquus! Será redirecionado para a verificação de e-mail.",
      },
      failure: {
        title: "Falha no registo",
        desc: "Verifique os seus dados e tente novamente",
      },
    },
  },
  verifyEmail: {
    title: "Verificar e-mail",
    description:
      "Enviamos um código de verificação para o seu endereço de e-mail.",
    codeLabel: "Código de verificação",
    verifyButton: "Verificar e-mail",
    updateEmailLabel: "Atualizar e-mail",
    updateEmailButton: "Atualizar e-mail",
    resendButton: "Reenviar código",
    resendCountdown: "Pode reenviar o código em {{seconds}}s",
    footerNote: "Não recebeu o código? Verifique a pasta de spam.",
    toast: {
      verified: "E-mail verificado",
      failed: "Falha na verificação",
      resent: "Código de verificação reenviado",
      error: "Erro",
      invalidEmail: "E-mail inválido",
      enterValidEmail: "Introduza um endereço de e-mail válido",
      sameEmail: "Mesmo e-mail",
      sameEmailDesc: "O novo e-mail é idêntico ao atual",
      emailUpdated: "E-mail atualizado",
    },
  },
  dashboardPayment: {
    add: "Adicionar método de pagamento",
    description:
      "Adicione um novo cartão de crédito ou débito para pagamentos de subscrição.",
    processing: "A processar...",
    errorTitle: "Erro ao adicionar método de pagamento",
    errorMessage: "Ocorreu um erro inesperado",
    initError: {
      title: "Erro",
      description: "Não foi possível inicializar as definições de pagamento",
    },
  },
  dashboard: {
    subscriptionCard: {
      years: "Anos",
      priceRange: "Preço",
      websites: "Sites",
      updates: "Atualizações",
      language: "Idioma",
      price: "Preço",
      edit: "Editar",
      cancelAlert: "Cancelar alerta",
      cancelTitle: "Cancelar alerta de carro",
      cancelDescription:
        "Tem a certeza de que deseja cancelar o alerta para {{brand}} {{model}}? Isto interromperá todas as notificações e terá de reconfigurar o alerta.",
      keepMyAlert: "Manter o alerta",
      confirmCancel: "Cancelar alerta",
    },
    paymentMethodCard: {
      expires: "Expira",
      default: "Padrão",
      setAsDefault: "Definir como padrão",
      remove: "Remover",
      setDefaultTitle: "Definir método de pagamento padrão",
      setDefaultDescription:
        "Deseja definir o cartão {{brand}}, terminando em {{last4}}, como método de pagamento padrão? Este cartão será usado para todos os pagamentos futuros.",
      removeTitle: "Remover método de pagamento",
      removeDescription:
        "Tem a certeza de que deseja remover o cartão {{brand}}, terminando em {{last4}}?",
      removeWarning:
        "Este é o seu método de pagamento padrão e a sua remoção pode afetar subscrições ativas.",
      cancel: "Cancelar",
      confirmRemove: "Remover cartão",
    },
  },
  profile: {
    tabs: {
      alerts: "Os meus alertas",
      payments: "Métodos de pagamento",
    },
    sidebar: {
      memberSince: "Membro desde",
      subscriptions: "Subscrições",
      methods: "Métodos de pagamento",
      account: "Definições da conta",
      privacy: "Privacidade e segurança",
      logout: "Terminar sessão",
    },
    account: {
      title: "Definições da conta",
      desc: "Atualize as suas informações e definições da conta.",
      name: "Nome",
      email: "E-mail",
      username: "Nome de utilizador",
      cancel: "Cancelar",
      save: "Guardar alterações",
    },
    security: {
      title: "Privacidade e segurança",
      desc: "Gerencie as definições de segurança e privacidade.",
      current: "Palavra-passe atual",
      new: "Nova palavra-passe",
      confirm: "Confirmar nova palavra-passe",
      update: "Atualizar palavra-passe",
    },
    logout: {
      title: "Terminar sessão",
      desc: "Tem a certeza de que deseja terminar a sessão?",
      success: "Terminou a sessão com sucesso.",
    },
    alerts: {
      title: "Subscrições de alertas de carro",
      desc: "Gerencie os seus alertas e definições de notificação.",
      add: "Adicionar novo alerta",
      none: "Não tem alertas de carro ativos.",
      cta: "Crie o seu primeiro alerta",
      warning:
        "⚠️ As alterações à subscrição entrarão em vigor no próximo ciclo de faturação e apenas após um pagamento bem-sucedido. Se o pagamento falhar, a configuração atual é mantida.",
    },
    payments: {
      title: "Métodos de pagamento",
      desc: "Gerencie métodos de pagamento para subscrições.",
      none: "Não tem métodos de pagamento guardados.",
      encrypted:
        "Os seus dados de pagamento estão encriptados e armazenados em segurança.",
    },
  },
  setupAlerts: {
    title: "Configurar alertas de carro",
    subtitle:
      "Configure o seu bot Telegram para receber notificações sobre o carro dos seus sonhos",
    basicPlan: "Plano base",
    baseTitle: "79,99 €/mês",
    button: "Iniciar serviço de alertas de carro",
    cancel: "Cancele a qualquer momento",
    toasts: {
      terms: {
        title: "Termos não aceites",
        description: "Deve aceitar os termos de utilização para continuar",
      },
      success: {
        title: "Subscrição criada",
        description: "A sua subscrição foi criada com sucesso",
      },
      error: {
        title: "Erro ao criar subscrição",
      },
      contactBot: {
        title: "Contacto com bot necessário",
        description:
          "Para receber alertas de carros, deve iniciar uma conversa com o nosso bot Telegram e enviar uma mensagem. Siga as instruções abaixo.",
      },
    },
  },
  loginPrompt: {
    title: "Sessão necessária",
    description:
      "Deve estar com sessão iniciada para continuar. Por favor, inicie sessão ou registe-se.",
    register: "Registar",
    login: "Iniciar sessão",
  },
  waitlistPrompt: {
    title: "Juntar-se à lista de espera",
    description:
      "Estamos atualmente esgotados. Junte-se à lista de espera para ser notificado quando houver uma vaga.",
    button: "Juntar-se à lista de espera",
  },
  subscription: {
    title: "Detalhes da subscrição",
    subTitle: "Edite os detalhes da subscrição abaixo",
    error: "Voltar ao painel",
    notFound: "Subscrição não encontrada",
    notFoundSub: "Voltar ao painel",
    description:
      "Pode pausar a subscrição a qualquer momento. Quando pausada, os alertas param até a reativar.",
    form: {
      status: {
        label: "Estado",
        placeholder: "Selecionar estado",
        active: "Ativa",
        paused: "Pausada",
      },
    },
    actions: {
      save: "Guardar alterações",
      back: "Voltar",
    },
    toasts: {
      success: {
        title: "Subscrição atualizada",
        description:
          "A sua subscrição para {{brand}} {{model}} foi atualizada com sucesso",
      },
      priceError: {
        title: "Não é possível atualizar a subscrição",
        description:
          "Não pode pausar e atualizar o preço da subscrição ao mesmo tempo. Escolha uma ou outra.",
      },
      error: {
        title: "Erro ao atualizar a subscrição",
      },
    },
  },
  about: {
    title: "Sobre o Amiquus",
    description:
      "Revolucionamos a procura do carro usado perfeito com tecnologia de acompanhamento avançada",
    meta: {
      title:
        "Sobre | Amiquus - Serviço de acompanhamento de anúncios de carros",
      description:
        "Conheça o Amiquus, a nossa missão e a equipa por trás do serviço inteligente de acompanhamento de anúncios.",
    },
    story: {
      heading: "A nossa história",
      paragraphs: [
        "O Amiquus começou em 2023 quando o nosso fundador Alex passou meses a atualizar sites à procura de um modelo raro a bom preço. Após perder oportunidades, percebeu que tinha de haver uma forma melhor.",
        "Com uma pequena equipa de programadores e entusiastas de carros, Alex construiu um sistema para acompanhar vários sites simultaneamente e enviar notificações instantâneas.",
        "O projeto cresceu rapidamente e no início de 2025 o Amiquus tornou-se um serviço para todos. Hoje, ajudamos compradores em todo o país a poupar tempo e a encontrar melhores ofertas.",
      ],
    },
    mission: {
      heading: "A nossa missão",
      items: [
        {
          title: "Poupar tempo",
          description:
            "Elimine a necessidade de atualizar constantemente vários sites com pesquisa automatizada e notificações oportunas.",
        },
        {
          title: "Encontrar melhores ofertas",
          description:
            "Seja o primeiro a saber sobre grandes ofertas e ganhe vantagem num mercado competitivo.",
        },
        {
          title: "Comprar com confiança",
          description:
            "Tome decisões informadas com acompanhamento completo em várias plataformas fiáveis.",
        },
      ],
    },
    team: {
      heading: "A nossa equipa",
      members: [
        {
          name: "Alex Morgan",
          role: "Fundador e Diretor",
          bio: "Ex-programador apaixonado por carros e soluções inovadoras.",
        },
        {
          name: "Sarah Chen",
          role: "Diretora Técnica",
          bio: "Especialista em ciência de dados, especializada em web scraping.",
        },
        {
          name: "Marcus Lee",
          role: "Responsável pelo Desenvolvimento",
          bio: "Engenheiro full-stack com experiência em sistemas de notificação de alto desempenho.",
        },
        {
          name: "Elena Rodriguez",
          role: "Suporte ao Cliente",
          bio: "Ex-vendedora de carros, dedicada a ajudar a encontrar o veículo perfeito.",
        },
      ],
    },
    join: {
      heading: "Junte-se à equipa",
      description:
        "Estamos sempre à procura de talentos apaixonados por tecnologia e pela revolução da compra de carros.",
      cta: "Ver vagas abertas",
    },
    questions: {
      heading: "Tem perguntas?",
      description:
        "Saiba mais sobre o funcionamento do serviço, preços ou contacte o suporte.",
      links: {
        faq: "Visite a FAQ",
        pricing: "Ver preços",
        support: "Contactar suporte",
      },
    },
  },
  terms: {
    metaTitle: "Termos de utilização | Amiquus",
    metaDescription:
      "Leia os termos de utilização do Amiquus que regem a sua utilização do serviço de acompanhamento de anúncios.",
    title: "Termos de utilização",
    lastUpdated: "Última atualização: 21 de maio de 2025.",
    sections: {
      "1": {
        id: "agreement",
        heading: "Aceitação dos termos",
        paragraphs: [
          "Estes termos de utilização constituem um acordo juridicamente vinculativo entre si e o Amiquus relativamente ao acesso e utilização do nosso site e serviços.",
          "Ao aceder ou utilizar os nossos serviços, aceita estes termos. Se não concordar com qualquer parte, não pode utilizar os serviços.",
        ],
        list: [],
      },
      "2": {
        id: "changes",
        heading: "Alterações aos termos",
        paragraphs: [
          "Reservamo-nos o direito de alterar ou substituir estes termos a nosso critério. Se uma alteração for material, forneceremos um aviso prévio de pelo menos 30 dias antes de os novos termos entrarem em vigor.",
          "Ao continuar a utilizar o serviço após a entrada em vigor das alterações, aceita os termos revistos. Se não concordar com os novos termos, pare de utilizar o serviço.",
        ],
        list: [],
      },
      "3": {
        id: "account",
        heading: "Condições da conta",
        paragraphs: ["Para utilizar os nossos serviços, deve:"],
        list: [
          "Ter mais de 18 anos",
          "Completar o processo de registo",
          "Fornecer informações precisas, completas e atualizadas",
          "Ser responsável pela segurança da sua conta e palavra-passe",
          "Ser responsável por todas as atividades na sua conta",
          "Notificar imediatamente qualquer utilização não autorizada ou abuso da conta",
        ],
      },
      "4": {
        id: "payment",
        heading: "Condições de pagamento",
        paragraphs: [
          "O Amiquus oferece serviços baseados em subscrição com estas condições:",
        ],
        list: [
          "Todos os preços são sem impostos, que serão adicionados quando aplicável",
          "Os preços de subscrição podem mudar com aviso prévio de 30 dias",
          "As subscrições renovam-se automaticamente, a menos que sejam canceladas antes do próximo ciclo de faturação",
          "Os reembolsos são processados caso a caso de acordo com a política de reembolso",
          "Usamos o Stripe para processamento seguro de pagamentos, todos os dados de pagamento são armazenados no Stripe",
        ],
      },
      "5": {
        id: "capacity",
        heading: "Limites de capacidade",
        paragraphs: [
          "Para garantir a qualidade do serviço, limitamos o número de subscrições ativas a 30. Quando o limite é atingido:",
        ],
        list: [
          "Novos utilizadores podem juntar-se à lista de espera",
          "O lugar na lista de espera é determinado por ordem de chegada",
          "Quando uma vaga se liberta, notificamos os utilizadores por ordem",
          "Reservamo-nos o direito de alterar os limites de capacidade",
        ],
      },
      "6": {
        id: "scraping",
        heading: "Limites de web scraping",
        paragraphs: [
          "O nosso serviço acede e processa dados de vários sites. Ao utilizar o serviço, reconhece:",
        ],
        list: [
          "O Amiquus respeita os termos de utilização dos sites que acompanhamos",
          "Usamos limitação de taxa e práticas éticas de recolha de dados",
          "A disponibilidade de certos sites pode mudar",
          "Não garantimos a completude ou pontualidade dos dados recolhidos",
        ],
      },
      "7": {
        id: "intellectual",
        heading: "Propriedade intelectual",
        paragraphs: [
          "O serviço Amiquus, incluindo conteúdo original, funcionalidades e funcionalidade, é e permanece propriedade exclusiva do Amiquus. O serviço é protegido por direitos de autor, marcas e outras leis.",
          "Não pode usar as nossas marcas e designs sem consentimento escrito prévio do Amiquus.",
        ],
        list: [],
      },
      "8": {
        id: "termination",
        heading: "Rescisão",
        paragraphs: [
          "Podemos rescindir ou suspender a conta imediatamente, sem aviso prévio, por qualquer motivo, incluindo violação dos termos.",
          "Na rescisão, o direito de utilizar o serviço cessa imediatamente. Se desejar rescindir a conta, pare de utilizar o serviço ou contacte-nos para eliminação.",
        ],
        list: [],
      },
      "9": {
        id: "limitations",
        heading: "Limitação de responsabilidade",
        paragraphs: [
          "O Amiquus, os seus diretores, funcionários, parceiros ou fornecedores não são responsáveis por danos indiretos, incidentais, especiais ou punitivos, incluindo perda de lucros, dados ou outras perdas intangíveis, decorrentes de:",
        ],
        list: [
          "Acesso ou incapacidade de aceder ao serviço",
          "Conteúdo ou comportamento de terceiros no serviço",
          "Conteúdo obtido do serviço",
          "Acesso não autorizado ou alteração dos seus dados",
        ],
      },
      "10": {
        id: "disclaimer",
        heading: "Isenção de responsabilidade",
        paragraphs: [
          'A utilização do serviço é por sua conta e risco. O serviço é fornecido "TAL COMO ESTÁ" e "CONFORME DISPONÍVEL". Não garantimos que o serviço será ininterrupto, pontual, seguro ou sem erros.',
          "Não garantimos que os resultados da utilização do serviço serão precisos ou fiáveis.",
        ],
        list: [],
      },
      "11": {
        id: "cookies",
        heading: "Política de cookies",
        paragraphs: [
          "A nossa política de cookies explica o que são cookies, como os usamos, como terceiros os usam e as suas opções. Consulte a secção de cookies na nossa Política de privacidade.",
        ],
        list: [],
      },
      "12": {
        id: "governing-law",
        heading: "Lei aplicável",
        paragraphs: [
          "Estes termos são regidos e interpretados de acordo com as leis dos Estados Unidos da América, sem consideração às normas de conflito de leis.",
          "Se não exercermos um direito ou disposição, isso não constitui uma renúncia. Se um tribunal declarar uma disposição inválida, as restantes permanecem em vigor.",
        ],
        list: [],
      },
      "13": {
        id: "contact",
        heading: "Contacte-nos",
        paragraphs: ["Se tiver perguntas sobre os termos, contacte-nos:"],
        list: [
          "Por e-mail: legal@amiquus.com",
          "Através da página de contacto no nosso site",
        ],
      },
    },
  },
  privacy: {
    metaTitle: "Política de privacidade | Amiquus",
    metaDescription:
      "Saiba como o Amiquus gere os seus dados pessoais, direitos e práticas de recolha de dados.",
    title: "Política de privacidade",
    lastUpdated: "Última atualização: 21 de maio de 2025.",
    sections: {
      "0": {
        id: "introduction",
        heading: "Introdução",
        paragraphs: [
          "Bem-vindo ao Amiquus. Respeitamos a sua privacidade e comprometemo-nos a proteger os seus dados pessoais. Esta política de privacidade explica como cuidamos dos seus dados, os seus direitos e como a lei o protege.",
        ],
      },
      "1": {
        id: "data-we-collect",
        heading: "Dados que recolhemos",
        paragraphs: [
          "Recolhemos vários tipos de dados para diferentes fins para lhe fornecer e melhorar o serviço:",
        ],
        list: [
          "Dados pessoais: endereço de e-mail, nome próprio, apelido e foto de perfil (se fornecida via terceiros).",
          "Dados da conta: dados de início de sessão e definições da conta.",
          "Dados de utilização: informações sobre como utiliza o site e os serviços.",
          "Critérios de pesquisa: critérios de veículo que configura para acompanhamento (marca, modelo, preço, etc.).",
          "Dados Telegram: se escolher notificações Telegram, armazenamos o seu ID de chat e token de bot.",
          "Dados de pagamento: ao fazer uma compra, o nosso processador de pagamento recolhe os dados necessários. O Amiquus não armazena dados completos de cartão de crédito.",
        ],
      },
      "2": {
        id: "how-we-use-data",
        heading: "Como usamos os seus dados",
        paragraphs: ["Usamos os seus dados pessoais para:"],
        list: [
          "Fornecer e manter o serviço",
          "Notificar alterações ao serviço",
          "Permitir funcionalidades interativas",
          "Fornecer suporte ao cliente",
          "Recolher análises para melhorar o serviço",
          "Monitorizar a utilização do serviço",
          "Detetar, prevenir e resolver problemas técnicos",
          "Processar pagamentos e prevenir fraudes",
          "Enviar anúncios que correspondam aos seus critérios",
        ],
      },
      "3": {
        id: "data-storage",
        heading: "Armazenamento e segurança de dados",
        paragraphs: [
          "Aplicamos medidas de segurança adequadas para proteger contra acesso não autorizado, alteração ou destruição de dados. Todos os dados são armazenados em servidores seguros com encriptação em trânsito e em repouso.",
          "Conservamos os seus dados pessoais apenas pelo tempo necessário para os fins estabelecidos nesta política, incluindo para cumprir requisitos legais, regulamentares ou contabilísticos.",
        ],
      },
      "4": {
        id: "gdpr",
        heading: "Os seus direitos ao abrigo do RGPD",
        paragraphs: [
          "Se for residente do Espaço Económico Europeu (EEE), tem certos direitos de proteção de dados. O Amiquus esforça-se por permitir corrigir, alterar, eliminar ou restringir a utilização dos seus dados.",
          "Tem os seguintes direitos:",
        ],
        list: [
          "Direito de acesso, atualização ou eliminação dos dados",
          "Direito de retificação",
          "Direito de oposição",
          "Direito de restrição",
          "Direito à portabilidade dos dados",
          "Direito de retirar o consentimento",
        ],
      },
      "5": {
        id: "cookies",
        heading: "Política de cookies",
        paragraphs: [
          "Os cookies são pequenos dados armazenados no seu dispositivo. Usamo-los para:",
        ],
        list: [
          "Manter a sessão iniciada",
          "Compreender a utilização do site",
          "Armazenar preferências",
          "Personalizar a experiência",
        ],
      },
      "6": {
        id: "third-party",
        heading: "Terceiros",
        paragraphs: [
          "Podemos contratar terceiros para executar o serviço, realizar tarefas ou analisar a utilização.",
          "Estes terceiros incluem:",
        ],
        list: [
          "Processadores de pagamento (Stripe)",
          "Fornecedores de análises",
          "Serviços de suporte ao cliente",
          "Fornecedores de alojamento e cloud",
        ],
        paragraphs2: [
          "Estes terceiros têm acesso aos seus dados apenas para realizar tarefas e não podem divulgá-los ou usá-los para outros fins.",
        ],
      },
      "7": {
        id: "changes",
        heading: "Alterações à política de privacidade",
        paragraphs: [
          "Podemos atualizar a política de privacidade ocasionalmente. Notificaremos publicando a nova política nesta página e atualizando a data 'Última atualização'.",
          "Recomendamos verificar regularmente a política. As alterações entram em vigor na publicação.",
        ],
      },
      "8": {
        id: "contact",
        heading: "Contacte-nos",
        paragraphs: [
          "Se tiver perguntas sobre a política de privacidade, contacte-nos:",
        ],
        list: [
          "Por e-mail: privacy@amiquus.com",
          "Através da página de contacto no nosso site",
        ],
      },
    },
  },
  faqs: {
    metaTitle: "FAQ | Amiquus",
    metaDescription:
      "Encontre respostas às perguntas mais comuns sobre o serviço de acompanhamento de anúncios de carros Amiquus.",
    title: "Perguntas frequentes",
    subtitle:
      "Respostas rápidas às perguntas comuns sobre o nosso serviço de acompanhamento de anúncios",
    general: {
      heading: "Perguntas gerais",
      whatIs: {
        question: "O que é o Amiquus?",
        answer:
          "O Amiquus é um serviço que acompanha vários sites de veículos correspondentes aos seus critérios. Quando é encontrada uma correspondência, recebe uma notificação instantânea por Telegram.",
      },
      howItWorks: {
        question: "Como funciona?",
        answer: [
          "Configure critérios de pesquisa (marca, modelo, preço, etc.)",
          "Selecione sites a acompanhar",
          "Ligue o Telegram para notificações",
          "O nosso sistema monitoriza continuamente os sites selecionados",
          "Na correspondência, recebe uma notificação Telegram instantânea com detalhes e link",
        ],
      },
      whichWebsites: {
        question: "Quais sites acompanham?",
        answerIntro:
          "Atualmente acompanhamos as seguintes plataformas principais:",
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
          "Adicionamos constantemente novas plataformas para uma cobertura mais ampla.",
      },
    },
    subscription: {
      heading: "Perguntas sobre subscrição",
      cost: {
        question: "Quanto custa a subscrição?",
        answer: [
          "Os preços começam em 79,99 €/mês para acompanhar um site com atualizações a cada 6 horas. Sites adicionais custam 4,99 € por mês. Atualize para notificações mais rápidas.",
          "Para detalhes de preços, consulte a secção de preços na página inicial.",
        ],
      },
      cancel: {
        question: "Como cancelo a subscrição?",
        stepsIntro:
          "Pode cancelar a subscrição a qualquer momento na página de perfil:",
        steps: [
          "Inicie sessão na sua conta",
          'Vá à página "Perfil"',
          'Selecione o separador "Subscrições"',
          'Clique em "Cancelar subscrição" ao lado da subscrição a cancelar',
        ],
        note: "A subscrição permanece ativa até ao final do período de faturação atual.",
      },
      multiple: {
        question: "Posso ter várias subscrições para diferentes modelos?",
        answer:
          "Sim, pode criar várias subscrições numa única conta. Cada uma pode acompanhar diferentes modelos ou marcas. Ideal se procura vários veículos ou ajuda amigos.",
      },
      limit: {
        question: "Porquê existe um limite de subscritores?",
        intro: "Limitamos o serviço a 30 subscritores ativos para:",
        list: [
          "A mais alta qualidade de serviço e precisão dos dados",
          "Suporte personalizado para cada subscritor",
          "Entrega mais rápida de notificações em horas de pico",
          "Scraping ético que não sobrecarrega os sites alvo",
        ],
        outro:
          "Se estivermos esgotados, junte-se à lista de espera e notificaremos quando uma vaga se libertar.",
      },
    },
    technical: {
      heading: "Perguntas técnicas",
      telegram: {
        question: "Como configuro notificações Telegram?",
        stepsIntro: "Para configurar notificações Telegram:",
        steps: [
          "Crie um bot Telegram via BotFather (instruções no painel)",
          "Copie o token do bot e o ID do chat",
          'Introduza os dados nas definições da conta em "Definições de notificação"',
          'Teste a ligação com o botão "Enviar mensagem de teste"',
        ],
        note: "Instruções detalhadas com capturas de ecrã disponíveis durante a configuração da subscrição.",
      },
      frequency: {
        question: "Com que frequência recebo notificações?",
        intro: "A frequência das notificações depende de:",
        list: [
          "O pacote de frequência selecionado (de hora a hora até a cada minuto)",
          "O número de novos anúncios que correspondem aos seus critérios",
          "A atividade do mercado para a marca/modelo selecionada",
        ],
        outro:
          "Recebe notificações apenas quando são encontrados novos anúncios que correspondem aos seus critérios.",
      },
      privacy: {
        question: "Como é protegida a minha privacidade?",
        intro: "Levamos a privacidade a sério e usamos:",
        list: [
          "Encriptação de dados em trânsito e em repouso",
          "Pagamentos seguros via Stripe",
          "Nenhum compartilhamento de dados com terceiros",
          "Pode solicitar ou eliminar os seus dados a qualquer momento",
        ],
        outro: "Mais informações na nossa Política de privacidade completa.",
      },
    },
    support: {
      heading: "Ainda tem perguntas?",
      description:
        "Se não encontrou a resposta, o nosso suporte está à disposição!",
      button: "Contactar suporte",
    },
  },
  waitlist: {
    metaTitle: "Juntar-se à lista de espera - Amiquus",
    metaDescription:
      "Junte-se à lista de espera do Amiquus e seja notificado quando houver subscrições disponíveis.",
    title: "Junte-se à nossa lista de espera",
    subtitle:
      "Devido à alta procura, limitamos o número de subscrições ativas para garantir a melhor qualidade.",
    limited: {
      heading: "Disponibilidade limitada",
      description: "Limitamos o sistema a apenas 30 subscritores ativos para:",
      points: [
        "Fiabilidade e velocidade de scraping excecional para todos os utilizadores",
        "Menor risco de bloqueio por sites",
        "Suporte personalizado para cada subscritor",
        "Distribuição equitativa dos recursos do servidor",
      ],
      available:
        "{{remaining}} vagas de subscrição de {{capacity}} estão atualmente disponíveis.",
      full: "Todas as vagas de subscrição estão atualmente ocupadas. Junte-se à lista de espera para ser notificado quando uma vaga se libertar.",
    },
    success: {
      title: "Está na lista de espera!",
      description: "Notificaremos assim que uma vaga de subscrição se libertar",
      message:
        "Obrigado pelo seu interesse no Amiquus! Adicionámos-o à lista de espera e contactaremos assim que uma vaga estiver disponível.",
      button: "Voltar à página inicial",
    },
    cantJoin: {
      title: "Juntar-se à lista de espera",
      description: "Notificaremos assim que uma vaga de subscrição se libertar",
    },
    form: {
      firstName: {
        label: "Nome próprio",
        placeholder: "João",
      },
      lastName: {
        label: "Apelido",
        placeholder: "Silva",
      },
      email: {
        label: "E-mail",
        placeholder: "joao.silva@exemplo.pt",
        description:
          "Usaremos este endereço de e-mail para o notificar quando uma vaga se libertar",
      },
      submit: "Juntar-se à lista de espera",
      submitting: "A enviar...",
    },
  },
  support: {
    metaTitle: "Suporte | Amiquus - Centro de ajuda",
    metaDescription:
      "Obtenha ajuda para a sua conta Amiquus, subscrição ou alertas. Explore o centro de ajuda ou contacte o suporte.",
    title: "Centro de suporte",
    subtitle:
      "Encontre respostas a perguntas comuns ou contacte a nossa equipa de suporte",
    emailSupport: {
      title: "Suporte por e-mail",
      description: "Envie-nos um e-mail e responderemos em 24 horas",
      email: "support@amiquus.com",
    },
    faqHeading: "Perguntas frequentes",
    faqs: {
      telegram: {
        question: "Como configuro notificações Telegram?",
        intro: "Para configurar notificações Telegram siga estes passos:",
        steps: [
          "Crie um bot Telegram via BotFather (instruções no painel)",
          "Copie o token API e o ID do chat",
          'Introduza os dados nas definições da conta em "Definições de notificação"',
          'Teste a ligação com o botão "Enviar mensagem de teste"',
        ],
        outro:
          "Se precisar de mais ajuda, um guia detalhado está disponível no seu painel.",
      },
      updates: {
        question: "Com que frequência os anúncios são atualizados?",
        answer:
          "A frequência de atualização depende do pacote de subscrição. Os planos base recebem atualizações a cada 6 horas, os planos premium podem ser a cada 30 minutos. Pode ver e alterar a frequência atual nas definições de subscrição.",
      },
      facebook: {
        question: "Posso acompanhar o Facebook Marketplace?",
        answer:
          "Sim, suportamos o acompanhamento do Facebook Marketplace. Para o configurar, forneça o URL da página de resultados de pesquisa com os filtros aplicados. O sistema acompanhará então essa pesquisa para novos anúncios que correspondam aos seus critérios.",
      },
      cancel: {
        question: "Como cancelo a subscrição?",
        answer:
          'Pode cancelar a subscrição a qualquer momento na página de perfil. Clique no separador "Subscrições", encontre a subscrição e clique em "Cancelar subscrição". O serviço permanece ativo até ao final do período de faturação.',
      },
      full: {
        question: "O que acontece se todas as vagas estiverem ocupadas?",
        answer:
          "Para manter uma alta qualidade de serviço, limitamos o número de subscrições ativas. Se todas as vagas estiverem ocupadas, pode juntar-se à lista de espera. Quando uma vaga se libertar, notificaremos e terá prioridade sobre o público em geral.",
      },
    },
    stillNeedHelp: {
      heading: "Precisa de mais ajuda?",
      description:
        "Se não encontrou a resposta, contacte a nossa equipa de suporte. Estamos aqui para ajudar!",
      button: "Contactar suporte",
    },
  },
  notFound: {
    title: "404 Página não encontrada",
    message: "Esqueceu-se de adicionar a página ao router?",
  },
  emails: {
    verification: {
      subject: "Código de verificação de e-mail Amiquus",
      greeting: "Olá,",
      message: "Use o seguinte código para completar o seu registo:",
      expiration: "O código expira em 10 minutos.",
    },
    invoice: {
      success: {
        subject: "Pagamento recebido Amiquus – Fatura #",
        h2Message: "O seu pagamento de subscrição Amiquus foi bem-sucedido!",
        greeting: "Olá,",
        paymentMessage: "Recebemos o seu pagamento no valor de",
        downloadMessage:
          "Pode consultar ou descarregar a fatura através do seguinte link:",
        viewInvoice: "Ver fatura",
        invoiceNumber: "Fatura #:",
      },
      pending: {
        subjectA: "Pagamento pendente – Fatura",
        subjectB: "para a sua subscrição Amiquus",
        h2Message:
          "Ação necessária: Complete o pagamento para a sua subscrição Amiquus",
        greeting: "Olá,",
        messageA: "A sua fatura",
        messageB:
          "ainda está por pagar. Para ativar a subscrição, complete o pagamento no valor de",
        paymentMessage:
          "Pode completar o pagamento em segurança através do seguinte link:",
        payInvoice: "Pagar fatura",
        ignoreEmail: "Se já efetuou o pagamento, pode ignorar este e-mail.",
      },
      failed: {
        subject: "Pagamento falhado – Fatura",
        message: "Não conseguimos processar o seu pagamento recente (tentativa",
        attemptsA:
          "Tentaremos novamente em breve. Não é necessária nenhuma ação por agora.",
        attemptsB:
          "Tentámos debitar o seu método de pagamento três vezes, mas todas as tentativas falharam.",
        attemptsC:
          "Como resultado, a sua subscrição está <strong>temporariamente suspensa</strong>. Não receberá atualizações até a reativar.",
        attemptsD:
          "Por favor, atualize o seu método de pagamento e reative a subscrição a partir do perfil:",
        viewInvoice: "Ver fatura",
        managePayment: "Gerir métodos de pagamento",
      },
    },
    waitlist: {
      subject: "Está na lista de espera do Amiquus!",
      h2Message: "Está na lista!",
      hi: "Olá",
      message:
        "Obrigado por se juntar à lista de espera do Amiquus. Notificaremos assim que uma vaga se libertar.",
      anyQuestions:
        "Se tiver perguntas, não hesite em responder a este e-mail.",
    },
    common: {
      thanksMessage: "Obrigado por escolher o Amiquus!",
      signature: "Cumprimentos,<br/>A equipa Amiquus",
      team: "— A equipa Amiquus",
      needHelp: "Precisa de ajuda?",
      hello: "Olá",
    },
  },
};

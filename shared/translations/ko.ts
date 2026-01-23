export const ko = {
  navigations: {
    features: "기능",
    how: "작동 방식",
    pricing: "요금",
    getAlerts: "알림 받기",
    waitlist: "대기자 명단",
    faq: "자주 묻는 질문",
    login: "로그인",
    getStarted: "시작하기",
    subscribers: "구독자",
    theme: "테마",
    language: "언어",
    myAlerts: "내 알림",
    profile: "프로필",
    settings: "설정",
    logout: "로그아웃",
    signUp: "회원가입",
  },
  hero: {
    label: "판매 중인 차량을 실시간으로 추적하세요!",
    title: "완벽한 차량 거래 기회를 절대 놓치지 마세요",
    subtitle:
      "Amiquus는 꿈의 차량이 여러 자동차 판매 사이트에 등장하는 즉시 알려드립니다. 일치할 때마다 Telegram으로 즉시 알림을 받으세요.",
    button1: "알림 설정",
    button2: "작동 방식 보기",
    trustIndicators: {
      websites: "15개 이상의 사이트 추적",
      realtime: "실시간 알림",
      noSetup: "설치 불필요",
      cancelAnytime: "언제든지 취소 가능",
    },
  },
  limited: {
    full: {
      title: "구독자 제한 도달",
      description:
        "30명의 활성 구독자 제한에 도달했습니다. 자리가 나면 알림을 받기 위해 대기자 명단에 가입하세요.",
      buttonText: "대기자 명단 가입",
    },
    limited: {
      title: "제한된 가용성",
      description:
        "{{capacity}} 중 {{remaining}}자리만 남았습니다. 자리가 다 차기 전에 지금 가입하세요!",
      buttonText: "지금 시작",
    },
    available: {
      title: "구독 가능",
      description:
        "현재 {{capacity}} 중 {{active}}명의 구독자가 활성 상태입니다. 가입할 공간이 충분합니다!",
      buttonText: "지금 시작",
    },
  },
  features: {
    heading: "Amiquus를 선택하는 이유",
    subheading:
      "자동 추적 서비스로 시간을 절약하고 완벽한 차량을 절대 놓치지 마세요.",
    multiSite: {
      title: "다중 사이트 추적",
      description: "수동 확인 없이 여러 자동차 판매 사이트를 동시에 추적.",
    },
    notifications: {
      title: "즉시 알림",
      description: "기준에 맞는 차량이 판매되면 Telegram으로 즉시 알림을 받음.",
    },
    filters: {
      title: "맞춤 필터",
      description:
        "브랜드, 모델, 연식, 주행거리, 가격대를 포함한 정확한 기준을 설정하여 원하는 것을 정확히 찾기.",
    },
    frequency: {
      title: "맞춤형 빈도",
      description:
        "새로운 목록 확인 빈도를 선택 – 시간별 업데이트부터 실시간 추적까지.",
    },
    languages: {
      title: "다국어 지원",
      description: "목록을 더 쉽게 이해하기 위해 선호하는 언어로 알림 받기.",
    },
    account: {
      title: "간단한 계정 관리",
      description: "여러 검색 프로필을 만들고 몇 번의 클릭으로 구독 설정 변경.",
    },
  },
  howItWorks: {
    title: "Amiquus 작동 방식",
    subtitle: "한 번 설정하면 자동 시스템이 완벽한 차량 거래를 찾아줍니다",
    whyTitle: "Amiquus를 선택하는 이유",
    steps: {
      preferences: {
        title: "선호도 설정",
        description: "추적할 차량 브랜드, 모델, 가격대 및 기타 기준 선택.",
      },
      telegram: {
        title: "Telegram 연결",
        description:
          "Telegram 계정을 연결하여 새로운 목록에 대한 즉시 알림 받기.",
      },
      notifications: {
        title: "즉시 알림 받기",
        description:
          "추적 사이트 중 하나에 기준에 맞는 차량이 나타나면 즉시 알림.",
      },
      findCar: {
        title: "꿈의 차량 찾기",
        description:
          "새로운 목록을 가장 먼저 알고 다른 사람보다 먼저 최고의 거래 확보.",
      },
    },
    features: [
      "15개 이상의 자동차 판매 사이트 동시 추적",
      "고급 필터링을 통한 맞춤 검색 기준",
      "Telegram을 통한 실시간 알림",
      "가격 하락 및 새로운 목록 자동 알림",
      "5분 미만의 간단한 설정 과정",
    ],
    setAlerts: "알림 설정",
    notificationMockup1: {
      title: "새로운 일치!",
      description: "BMW 3 시리즈, 2019년, €32,500 - AutoTrader에 새로 게시됨",
    },
    notificationMockup2: {
      title: "Telegram 알림",
      description:
        "Mercedes C 클래스, 2020년, 30,000 마일 - 가격이 €2,000 하락",
    },
  },
  pricing: {
    title: "간단하고 투명한 요금",
    subtitle:
      "요금은 특정 요구사항에 기반합니다. 기본 패키지부터 시작하여 필요에 따라 맞춤.",
    baseTitle: "기본 패키지: €79.99/월",
    includedTitle: "포함:",
    includedFeatures: [
      "1개 사이트 추적",
      "시간별 업데이트",
      "무제한 필터",
      "Telegram 알림",
    ],
    addonsTitle: "추가 기능:",
    addons: [
      { name: "추가 사이트당", price: 4.99 },
      { name: "30분마다 업데이트", price: 2.99 },
      { name: "15분마다 업데이트", price: 5.99 },
      { name: "5분마다 업데이트", price: 9.99 },
      { name: "1분마다 업데이트", price: 14.99 },
    ],
    footerNote:
      "모든 패키지에는 무제한 검색 구성과 간단한 구독 관리가 포함됩니다.",
    button: "지금 시작",
  },
  signup: {
    heading: "차량 알림 생성",
    subheading: "몇 단계로 맞춤형 차량 목록 알림을 설정하세요.",
    cta: "지금 알림 받기",
    waitlist: {
      message:
        "현재 만석입니다. 자리가 나면 알림을 받기 위해 대기자 명단에 가입하세요.",
      cta: "대기자 명단 가입",
    },
    toast: {
      success: {
        title: "구독 생성됨",
        description: "구독이 성공적으로 생성되었습니다",
      },
      error: {
        title: "구독 생성 실패",
        description: "구독을 생성할 수 없습니다. 나중에 다시 시도하세요.",
      },
    },
  },
  payment: {
    toast: {
      success: {
        title: "성공",
        description: "결제 수단이 성공적으로 설정되었습니다.",
      },
      error: {
        title: "오류",
        fallback: "예기치 않은 오류가 발생했습니다. 다시 시도하세요.",
      },
    },
    button: {
      submit: "결제 수단 설정",
      processing: "처리 중...",
    },
  },
  alertSchema: {
    errors: {
      carBrand: "차량 브랜드가 필요합니다",
      carModel: "차량 모델이 필요합니다",
      fuelType: "연료 유형이 필요합니다",
      priceMin: "최소 가격은 숫자여야 합니다",
      priceMax: "최대 가격은 숫자여야 합니다",
      yearMin: "최소 연식은 유효한 연도여야 합니다",
      yearMax: "최대 연식은 유효한 연도여야 합니다",
      maxKilometers: "최대 주행거리는 숫자여야 합니다",
      telegramUsername: "Telegram 사용자명이 필요합니다",
      telegramToken: "Telegram 봇 토큰이 필요합니다",
      telegramChatId: "Telegram 채팅 ID가 필요합니다",
      websitesSelected: "최소 하나의 사이트를 선택하세요",
      notificationLanguage: "알림 언어가 필요합니다",
      facebookMarketplaceUrl:
        "Facebook이 선택된 경우 Facebook Marketplace URL이 필요합니다",
    },
  },
  personalInfo: {
    heading: "개인 정보",
    description: "알림을 올바르게 설정하기 위해 개인 정보를 입력하세요.",
    labels: {
      firstName: "이름",
      lastName: "성",
      email: "이메일 주소",
    },
    placeholders: {
      firstName: "민준",
      lastName: "김",
      email: "minjun.kim@example.com",
    },
    errors: {
      firstName: "이름이 필요합니다",
      lastName: "성이 필요합니다",
      email: "유효한 이메일 주소를 입력하세요",
    },
    actions: {
      login: "로그인 또는 가입하여 계속",
      continue: "계속",
    },
  },
  websiteSelection: {
    heading: "사이트 선택",
    description: "추적할 사이트와 업데이트 빈도를 선택하세요.",
    labels: {
      websites: "추적 사이트",
      facebookUrl: "Facebook Marketplace URL",
      updateFrequency: "업데이트 빈도",
    },
    placeholders: {
      frequency: "빈도 선택",
    },
    help: {
      websites: "차량 목록을 추적할 하나 이상의 사이트 선택.",
      facebookUrl: "Facebook Marketplace 검색 결과 URL을 여기에 입력.",
      videoTitle: "Facebook Marketplace 검색 링크 찾는 데 도움이 필요하신가요?",
      videoDesc: "아래 비디오에서 단계별 가이드를 확인하세요.",
      updateFrequency:
        "새로운 목록을 얼마나 자주 확인할까요? 높은 빈도는 추가 비용이 발생할 수 있습니다.",
    },
    errors: {
      websites: "최소 하나의 사이트를 선택하세요",
      facebookUrl:
        "Facebook이 선택된 경우 Facebook Marketplace URL이 필요합니다",
    },
    actions: {
      previous: "이전",
      continue: "계속",
    },
  },
  carDetails: {
    heading: "차량 세부 정보",
    description:
      "찾고 있는 차량 세부 정보를 입력하세요. 모든 필드는 선택 사항 – 더 넓은 결과를 위해 비워 두세요.",
    labels: {
      carBrand: "차량 브랜드",
      carModel: "차량 모델",
      fuelType: "연료 유형",
      priceMin: "최소 가격",
      priceMax: "최대 가격",
      yearMin: "최소 연식",
      yearMax: "최대 연식",
      maxKilometers: "최대 주행거리",
    },
    placeholders: {
      carBrand: "차량 브랜드 선택",
      carModel: "차량 모델 선택",
      carModelDisabled: "먼저 차량 브랜드 선택",
      fuelType: "연료 유형 선택",
      priceMin: "최소 가격 입력",
      priceMax: "최대 가격 입력",
      yearMin: "최소 연식 입력",
      yearMax: "최대 연식 입력",
      maxKilometers: "최대 주행거리 입력",
    },
    options: {
      noModelsAvailable: "사용 가능한 모델 없음",
    },
    errors: {
      carBrand: "차량 브랜드가 필요합니다",
      carModel: "차량 모델이 필요합니다",
      fuelType: "연료 유형이 필요합니다",
      priceMin: "최소 가격은 숫자여야 합니다",
      priceMax: "최대 가격은 숫자여야 합니다",
      yearMin: "최소 연식은 유효한 연도여야 합니다",
      yearMax: "최대 연식은 유효한 연도여야 합니다",
      maxKilometers: "최대 주행거리는 숫자여야 합니다",
    },
    actions: {
      previous: "이전",
      continue: "계속",
    },
  },
  telegram: {
    heading: "Telegram 설정",
    description: "봇 토큰과 채팅 ID를 입력하여 Telegram 알림을 설정하세요.",
    subHeading: "Telegram 봇 설정",
    info: "Telegram 봇 생성에 문제가 있으면 연락 주세요. 도와드리겠습니다.",
    contact: "문의하기",
    instructions: {
      botTitle: "Telegram 봇 토큰 얻는 방법:",
      botStep1: "Telegram을 열고 @BotFather 검색",
      botStep2: "/newbot 명령어 전송",
      botStep3: "봇 생성 지침 따르기",
      botStep4: "BotFather가 제공한 토큰 복사",
      chatTitle: "Telegram 채팅 ID 얻는 방법:",
      chatStep1: "Telegram을 열고 @userinfobot 검색",
      chatStep2: "봇에 임의 메시지 전송",
      chatStep3: "봇이 채팅 ID를 포함한 정보로 응답",
      chatStep4: "채팅 ID(숫자) 복사",
    },

    videoPrompt: "Telegram 봇 토큰과 채팅 ID 설정에 도움이 필요하신가요?",
    videoDescription: "아래 비디오에서 단계별 가이드를 확인하세요.",

    labels: {
      token: "Telegram 봇 토큰",
      chatId: "내 Telegram 채팅 ID",
      language: "알림 언어",
      username: "Telegram 사용자명",
    },

    placeholders: {
      token: "BotFather가 제공한 봇 토큰 입력",
      chatId: "내 Telegram 채팅 ID 입력",
      language: "Telegram 메시지 언어 선택",
      username: "Telegram 사용자명 입력",
    },
    usernameDescription: "Telegram 계정의 사용자명(@ 제외).",
    examples: {
      token: "예: 5432109876:ABCDefGhIJklMNoPqrSTuvWXyz1234567890",
      chatId: "Telegram에서 @userinfobot에 메시지 보내서 얻기",
    },
    setupTitle: "설정 지침:",
    setupSteps: [
      'Telegram을 열고 "BotFather" 검색',
      '"Start" 클릭으로 BotFather와 대화 시작',
      "/newbot 입력 후 새 봇 생성 지침 따르기",
      "봇 이름 선택",
      "봇 사용자명 선택('bot'으로 끝나야 함)",
      "BotFather가 제공한 API 토큰 복사",
      "새 봇에 메시지 보내 대화 활성화",
    ],
    chatIdTitle: "Telegram 채팅 ID 얻는 방법:",
    chatIdSteps: [
      'Telegram을 열고 "userinfobot" 검색',
      "봇에 임의 메시지 전송",
      "봇이 채팅 ID를 포함한 정보로 응답",
      "채팅 ID 복사",
    ],
    helpTitle: "Telegram 봇 토큰과 채팅 ID 설정에 도움이 필요하신가요?",
    helpDescription: "아래 비디오에서 단계별 가이드를 확인하세요.",
    botTokenLabel: "Telegram 봇 토큰",
    botTokenPlaceholder: "BotFather가 제공한 봇 토큰 입력",
    botTokenExample: "예: 5432109876:ABCDefGhIJklMNoPqrSTuvWXyz1234567890",
    chatIdLabel: "내 Telegram 채팅 ID",
    chatIdPlaceholder: "내 Telegram 채팅 ID 입력",
    chatIdDescription: "Telegram에서 @userinfobot에 메시지 보내서 얻기",
    languageLabel: "알림 언어",
    languagePlaceholder: "Telegram 메시지 언어 선택",
    languages: {
      en: "영어",
      de: "독일어",
      fr: "프랑스어",
      es: "스페인어",
      it: "이탈리아어",
    },
    previewTitle: "Telegram 알림 미리보기",
    carAlertTitle: "새로운 차량 알림!",
    priceLabel: "가격: {{price}}",
    kilometresLabel: "주행거리: {{kms}}",
    locationLabel: "위치: {{location}}",
    viewListing: "목록 보기 →",
    errors: {
      token: "Telegram 봇 토큰이 필요합니다",
      chatId: "Telegram 채팅 ID가 필요합니다",
      language: "알림 언어가 필요합니다",
      username: "Telegram 사용자명이 필요합니다",
    },

    actions: {
      previous: "이전",
      continue: "계속",
    },
    contactBotInstruction:
      "아래 링크를 클릭하여 Telegram 봇과 대화를 시작하고 메시지를 보내세요:",
    contactBotNote:
      "차량 알림을 받으려면 필요합니다. PC에서는 QR 코드 스캔도 가능합니다.",
    confirmContact: "봇과 대화를 시작하고 메시지를 보냈습니다",
  },
  review: {
    title: "구독 검토",
    description: "결제 전에 구독 세부 정보를 확인하세요.",

    personal: {
      title: "개인 정보",
      name: "이름",
      email: "이메일",
    },

    monitoring: {
      title: "추적 설정",
      websites: "사이트",
      facebookUrl: "Facebook URL",
      updateFrequency: "업데이트 빈도",
    },

    specs: {
      title: "차량 사양",
      brand: "브랜드",
      model: "모델",
      fuelType: "연료 유형",
      yearRange: "연식 범위",
      mileage: "주행거리 범위 (km)",
      price: "가격 범위 (€)",
    },

    notification: {
      title: "알림 설정",
      telegram: "Telegram 봇",
      language: "알림 언어",
    },

    summary: {
      title: "구독 요약",
      base: "기본 구독",
      extraWebsites: "추가 사이트",
      frequencyUpgrade: "빈도 업그레이드",
      total: "총액 (월간)",
    },

    terms: {
      checkbox: "동의합니다",
      tos: "이용 약관",
      privacy: "개인정보 처리방침",
      note: "구독은 매월 자동 갱신됩니다. 언제든지 취소 가능.",
      error: "이용 약관 및 정책에 동의해야 합니다",
    },

    actions: {
      previous: "이전",
      submit: "결제로 이동",
    },
  },
  faq: {
    title: "자주 묻는 질문",
    subtitle: "서비스에 대한 가장 일반적인 질문의 답변을 찾으세요.",
    contactPrompt: "아직 질문이 있으신가요?",
    contactLink: "지원 팀에 문의하세요",
    questions: [
      {
        question: "새로운 목록이 게시된 후 얼마나 빨리 알림을 받을 수 있나요?",
        answer:
          "알림 속도는 선택한 업데이트 빈도에 따라 다릅니다. 기본 패키지(시간별)에서는 새로운 목록 게시 후 1시간 이내에 알림을 받습니다. 더 빈번한 업데이트 패키지로 거의 실시간(게시 후 몇 분) 알림으로 업그레이드 가능.",
      },
      {
        question: "다른 유형의 차량을 동시에 추적할 수 있나요?",
        answer:
          "네! 다른 기준의 여러 검색 프로필을 생성할 수 있습니다. 각 프로필은 별도의 구독이지만 하나의 계정에서 모두 관리. 다른 차량 유형을 동시에 검색하는 데 이상적입니다.",
      },
      {
        question: "현재 어떤 사이트가 지원되나요?",
        answer:
          "현재 Avto.net, Facebook Marketplace를 포함한 주요 자동차 판매 플랫폼을 지원합니다. 사용자 요청과 지역 인기에 따라 지속적으로 범위를 확대합니다.",
      },
      {
        question: "Telegram 봇을 사용하기 위해 기술 지식이 필요하나요?",
        answer:
          "전혀 필요 없습니다! 텍스트와 비디오 단계별 가이드를 제공합니다. 대부분의 사용자는 기술 경험이 없어도 5분 이내에 설정을 완료합니다.",
      },
      {
        question: "구독 설정 후 검색 기준을 변경할 수 있나요?",
        answer:
          "네, 계정 대시보드에서 언제든지 검색 기준을 변경할 수 있습니다. 변경 사항은 즉시 적용되며 서비스 중단 없이 알림이 업데이트됩니다.",
      },
      {
        question: "구독을 취소하는 방법은?",
        answer:
          '계정 대시보드에서 언제든지 취소할 수 있습니다. "구독" 섹션으로 이동하여 취소할 구독을 선택하고 "구독 취소"를 클릭하세요. 서비스는 현재 결제 기간 종료까지 계속됩니다.',
      },
    ],
  },
  footer: {
    brandTitle: "Amiquus",
    brandDescription: "적절한 시기에 완벽한 중고차를 찾는 개인 비서.",
    quickLinks: "빠른 링크",
    features: "기능",
    pricing: "요금",
    faq: "FAQ",
    getStarted: "시작하기",
    legal: "법적",
    terms: "이용 약관",
    privacy: "개인정보 처리방침",
    cookies: "쿠키 정책",
    gdpr: "GDPR 준수",
    contact: "연락처",
    email: "support@amiquus.com",
    telegram: "Telegram으로 문의",
    copyright: "모든 권리 보유.",
    about: "회사 소개",
    blog: "블로그",
    careers: "채용",
    support: "지원",
  },
  login: {
    title: "계정에 로그인",
    description: "대시보드에 접근하기 위해 이메일과 비밀번호 입력",
    emailLabel: "이메일",
    passwordLabel: "비밀번호",
    loginButton: "로그인",
    loggingIn: "로그인 중...",
    loginWithGoogle: "Google로 로그인",
    or: "또는",
    noAccount: "계정이 없으신가요?",
    registerLink: "회원가입",
    successTitle: "로그인 성공",
    successMessage: "성공적으로 로그인되었습니다.",
    errorTitle: "로그인 실패",
    genericError: "세부 정보를 확인하고 다시 시도하세요.",
    errors: {
      invalidEmail: "유효한 이메일 주소를 입력하세요",
      shortPassword: "비밀번호는 최소 6자 이상이어야 합니다",
    },
  },
  register: {
    title: "계정 생성",
    description: "꿈의 차량 추적을 시작하기 위해 가입하세요",
    google: "Google로 가입",
    orContinue: "또는 계속",
    firstName: "이름",
    lastName: "성",
    username: "사용자명",
    email: "이메일",
    password: "비밀번호",
    confirmPassword: "비밀번호 확인",
    termsNotice: "동의합니다",
    termsOfService: "이용 약관",
    privacyPolicy: "개인정보 처리방침",
    createBtn: "계정 생성",
    alreadyHave: "이미 계정이 있으신가요?",
    login: "로그인",
    and: "및",
    toast: {
      missingFields: {
        title: "누락된 필드",
        desc: "모든 필수 필드를 입력하세요",
      },
      invalidUsername: {
        title: "잘못된 사용자명",
        desc: "사용자명은 영숫자로 3-20자여야 합니다",
      },
      passwordMismatch: {
        title: "비밀번호가 일치하지 않습니다",
        desc: "비밀번호가 일치하는지 확인하세요",
      },
      termsNotAccepted: {
        title: "약관 미동의",
        desc: "계속하려면 이용 약관과 개인정보 처리방침에 동의해야 합니다",
      },
      success: {
        title: "가입 성공",
        desc: "Amiquus에 오신 것을 환영합니다! 이메일 확인으로 리디렉션됩니다.",
      },
      failure: {
        title: "가입 실패",
        desc: "세부 정보를 확인하고 다시 시도하세요",
      },
    },
  },
  verifyEmail: {
    title: "이메일 확인",
    description: "확인 코드를 이메일 주소로 보냈습니다.",
    codeLabel: "확인 코드",
    verifyButton: "이메일 확인",
    updateEmailLabel: "이메일 업데이트",
    updateEmailButton: "이메일 업데이트",
    resendButton: "코드 재전송",
    resendCountdown: "{{seconds}}초 후에 코드 재전송 가능",
    footerNote: "코드를 받지 못하셨나요? 스팸 폴더를 확인하세요.",
    toast: {
      verified: "이메일 확인됨",
      failed: "확인 실패",
      resent: "확인 코드 재전송됨",
      error: "오류",
      invalidEmail: "잘못된 이메일",
      enterValidEmail: "유효한 이메일 주소를 입력하세요",
      sameEmail: "동일한 이메일",
      sameEmailDesc: "새 이메일 주소가 현재와 동일합니다",
      emailUpdated: "이메일 업데이트됨",
    },
  },
  dashboardPayment: {
    add: "결제 수단 추가",
    description: "구독 결제를 위해 새 신용카드 또는 직불카드를 추가하세요.",
    processing: "처리 중...",
    errorTitle: "결제 수단 추가 오류",
    errorMessage: "예기치 않은 오류가 발생했습니다",
    initError: {
      title: "오류",
      description: "결제 설정을 시작할 수 없습니다",
    },
  },
  dashboard: {
    subscriptionCard: {
      years: "연식",
      priceRange: "가격",
      websites: "사이트",
      updates: "업데이트",
      language: "언어",
      price: "요금",
      edit: "편집",
      cancelAlert: "알림 취소",
      cancelTitle: "차량 알림 취소",
      cancelDescription:
        "{{brand}} {{model}} 차량 알림을 취소하시겠습니까? 이는 모든 알림을 중지하며, 이 차량을 다시 추적하려면 새 알림을 설정해야 합니다.",
      keepMyAlert: "알림 유지",
      confirmCancel: "알림 취소",
    },
    paymentMethodCard: {
      expires: "만료",
      default: "기본",
      setAsDefault: "기본으로 설정",
      remove: "제거",
      setDefaultTitle: "결제 수단을 기본으로 설정",
      setDefaultDescription:
        "{{last4}}로 끝나는 {{brand}} 카드를 기본 결제 수단으로 설정하시겠습니까? 이 카드는 모든 미래 구독 결제에 사용됩니다.",
      removeTitle: "결제 수단 제거",
      removeDescription:
        "{{last4}}로 끝나는 {{brand}} 카드를 제거하시겠습니까?",
      removeWarning:
        "이것은 기본 결제 수단이며 제거하면 활성 구독에 영향을 줄 수 있습니다.",
      cancel: "취소",
      confirmRemove: "카드 제거",
    },
  },
  profile: {
    tabs: {
      alerts: "내 알림",
      payments: "결제 수단",
    },
    sidebar: {
      memberSince: "회원 가입일",
      subscriptions: "구독",
      methods: "결제 수단",
      account: "계정 설정",
      privacy: "개인정보 및 보안",
      logout: "로그아웃",
    },
    account: {
      title: "계정 설정",
      desc: "계정 정보와 선호도를 업데이트하세요.",
      name: "이름",
      email: "이메일",
      username: "사용자명",
      cancel: "취소",
      save: "변경 저장",
    },
    security: {
      title: "개인정보 및 보안",
      desc: "보안 설정과 개인정보 선호도를 관리하세요.",
      current: "현재 비밀번호",
      new: "새 비밀번호",
      confirm: "새 비밀번호 확인",
      update: "비밀번호 업데이트",
    },
    logout: {
      title: "로그아웃",
      desc: "계정에서 로그아웃하시겠습니까?",
      success: "성공적으로 로그아웃되었습니다.",
    },
    alerts: {
      title: "차량 알림 구독",
      desc: "차량 검색 알림과 알림 선호도를 관리하세요.",
      add: "새 알림 추가",
      none: "활성 차량 알림이 없습니다.",
      cta: "첫 번째 알림 생성",
      warning:
        "⚠️ 구독 변경은 다음 청구 기간에 적용되며 결제 성공 후에만 적용됩니다. 결제가 실패하면 현재 알림 구성이 변경되지 않습니다.",
    },
    payments: {
      title: "결제 수단",
      desc: "구독 청구를 위한 결제 수단을 관리하세요.",
      none: "저장된 결제 수단이 없습니다.",
      encrypted: "결제 정보는 암호화되어 안전하게 저장됩니다.",
    },
  },
  setupAlerts: {
    title: "차량 알림 설정",
    subtitle: "꿈의 차량에 대한 알림을 받기 위해 Telegram 봇을 설정하세요",
    basicPlan: "기본 플랜",
    baseTitle: "€79.99/월",
    button: "내 차량 알림 서비스 활성화",
    cancel: "언제든지 취소 가능",
    toasts: {
      terms: {
        title: "약관 미동의",
        description: "계속하려면 이용 약관에 동의해야 합니다",
      },
      success: {
        title: "구독 생성됨",
        description: "구독이 성공적으로 생성되었습니다",
      },
      error: {
        title: "구독 생성 오류",
      },
      contactBot: {
        title: "봇 연락 필요",
        description:
          "차량 알림을 받으려면 Telegram 봇과 대화를 시작하고 메시지를 보내야 합니다. 아래 지침을 따라 봇에 연락하세요.",
      },
    },
  },
  loginPrompt: {
    title: "로그인 필요",
    description: "계속하려면 로그인이 필요합니다. 로그인하거나 가입하세요.",
    register: "회원가입",
    login: "로그인",
  },
  waitlistPrompt: {
    title: "대기자 명단 가입",
    description:
      "현재 만석입니다. 자리가 나면 알림을 받기 위해 대기자 명단에 가입하세요.",
    button: "대기자 명단 가입",
  },
  subscription: {
    title: "구독 세부 정보",
    subTitle: "아래에서 구독 세부 정보를 변경하세요",
    error: "대시보드로 돌아가기",
    notFound: "구독을 찾을 수 없습니다",
    notFoundSub: "대시보드로 돌아가기",
    description:
      "구독은 언제든지 일시 중지할 수 있습니다. 일시 중지하면 재개할 때까지 차량 알림이 중지됩니다.",
    form: {
      status: {
        label: "상태",
        placeholder: "상태 선택",
        active: "활성",
        paused: "일시 중지",
      },
    },
    actions: {
      save: "변경 저장",
      back: "뒤로",
    },
    toasts: {
      success: {
        title: "구독 업데이트됨",
        description: "{{brand}} {{model}} 구독이 성공적으로 업데이트되었습니다",
      },
      priceError: {
        title: "구독 업데이트 불가",
        description:
          "일시 중지와 가격 업데이트를 동시에 할 수 없습니다. 일시 중지하거나 가격을 업데이트하세요.",
      },
      error: {
        title: "구독 업데이트 오류",
      },
    },
  },
  about: {
    title: "Amiquus 소개",
    description: "첨단 추적 기술로 누구나 완벽한 중고차 검색을 혁신합니다",
    meta: {
      title: "소개 | Amiquus – 차량 목록 추적 서비스",
      description:
        "Amiquus, 중고차 구매 혁신 미션, 스마트 차량 목록 추적 서비스 뒤의 팀에 대해 알아보세요.",
    },
    story: {
      heading: "우리 이야기",
      paragraphs: [
        "Amiquus는 2023년에 창립자 Aleksej가 특정 희귀 모델을 좋은 가격에 찾기 위해 자동차 판매 사이트를 몇 달 동안 새로고침하며 시작되었습니다. 느린 알림으로 기회를 놓친 후 더 나은 방법이 필요하다고 깨달았습니다.",
        "개발자와 자동차 애호가 소규모 팀과 함께 Aleksej는 여러 사이트의 목록을 동시에 추적하고 일치 시 즉시 알림을 보내는 추적 시스템을 만들었습니다.",
        "개인 프로젝트로 시작한 것이 곧 친구와 가족의 주목을 끌었고, 2025년 초 Amiquus는 모두를 위한 서비스로 탄생했습니다. 오늘 우리는 스마트 추적 기술로 전국 차량 구매자에게 시간 절약과 최고의 거래 발견을 돕고 있습니다.",
      ],
    },
    mission: {
      heading: "우리 미션",
      items: [
        {
          title: "시간 절약",
          description:
            "자동 검색 프로세스와 적시 알림으로 여러 사이트를 지속적으로 새로고침할 필요 제거.",
        },
        {
          title: "최고의 거래 발견",
          description:
            "훌륭한 거래를 가장 먼저 알고 시간이 모든 것인 경쟁 시장에서 우위를 제공.",
        },
        {
          title: "자신 있는 구매",
          description:
            "여러 신뢰할 수 있는 자동차 판매 플랫폼에서의 완전한 추적으로 정보에 기반한 결정.",
        },
      ],
    },
    team: {
      heading: "우리 팀",
      members: [
        {
          name: "Aleksej Morgan",
          role: "창립자 겸 CEO",
          bio: "자동차에 대한 열정과 혁신적 솔루션 창작자인 전 소프트웨어 엔지니어.",
        },
        {
          name: "Sara Chen",
          role: "기술 리더",
          bio: "웹 스크래핑과 정보 추출 시스템 전문 데이터 사이언스 전문가.",
        },
        {
          name: "Markus Li",
          role: "리드 개발자",
          bio: "고성능 알림 시스템 구축 경험이 있는 풀스택 엔지니어.",
        },
        {
          name: "Elena Rodriguez",
          role: "고객 성공",
          bio: "전 자동차 판매 전문가로 고객이 완벽한 차량을 찾도록 헌신.",
        },
      ],
    },
    join: {
      heading: "우리 팀에 합류하세요",
      description:
        "기술과 차량 구매 경험 혁신에 열정적인 인재를 항상 찾고 있습니다. 현재 오픈 포지션을 확인하고 미션에 참여하세요.",
      cta: "오픈 포지션 보기",
    },
    questions: {
      heading: "질문이 있으신가요?",
      description:
        "서비스 작동 방식에 대해 더 알아보고, 요금을 확인하거나, 지원 팀에 문의하세요.",
      links: {
        faq: "FAQ 방문",
        pricing: "요금 보기",
        support: "지원 문의",
      },
    },
  },
  terms: {
    metaTitle: "서비스 이용약관 | Amiquus",
    metaDescription:
      "Amiquus 차량 리스트 모니터링 및 알림 서비스 이용을 위한 이용약관을 확인하세요.",
    title: "서비스 이용약관",
    lastUpdated: "마지막 업데이트: 2025년 5월 21일",
    sections: {
      "1": {
        id: "agreement",
        heading: "이용약관 동의",
        paragraphs: [
          "본 이용약관은 귀하와 Amiquus 간에 체결되는 법적 구속력이 있는 계약으로, 웹사이트 및 서비스 이용에 적용됩니다.",
          "서비스에 접근하거나 서비스를 이용함으로써 귀하는 본 약관에 동의하게 됩니다. 약관의 일부라도 동의하지 않는 경우 서비스 이용이 불가합니다.",
        ],
        list: [],
      },
      "2": {
        id: "changes",
        heading: "약관 변경",
        paragraphs: [
          "당사는 단독 재량으로 언제든지 본 약관을 수정하거나 대체할 수 있습니다. 중요한 변경이 있을 경우 최소 30일 전에 적용 예정일을 공지하기 위해 합리적인 노력을 기울입니다.",
          "변경 후에도 서비스를 계속 이용하는 경우 개정된 약관에 동의한 것으로 간주됩니다. 새로운 약관에 동의하지 않을 경우 서비스 이용을 중단해야 합니다.",
        ],
        list: [],
      },
      "3": {
        id: "account",
        heading: "계정 이용조건",
        paragraphs: ["서비스 이용을 위해서는 다음 조건을 충족해야 합니다:"],
        list: [
          "만 18세 이상일 것",
          "회원가입 절차를 완료할 것",
          "정확하고 최신의 정보 제공",
          "계정 및 비밀번호 보안 유지 책임",
          "계정을 통해 이루어지는 모든 활동에 대한 책임",
          "보안 침해나 무단 사용 발견 시 즉시 당사에 알려야 함",
        ],
      },
      "4": {
        id: "payment",
        heading: "결제 약관",
        paragraphs: [
          "Amiquus는 구독 기반 서비스를 제공하며 아래 조건이 적용됩니다:",
        ],
        list: [
          "모든 요금은 세금 미포함이며 필요 시 추가 부과됩니다",
          "구독 요금은 30일 사전 공지 후 변경될 수 있습니다",
          "구독은 다음 결제 주기 시작 전에 취소하지 않으면 자동 갱신됩니다",
          "환불은 환불 정책에 따라 개별적으로 처리됩니다",
          "결제 처리는 Stripe를 통해 안전하게 제공되며 모든 결제 정보는 Stripe에서 저장합니다",
        ],
      },
      "5": {
        id: "capacity",
        heading: "서비스 수용량 제한",
        paragraphs: [
          "서비스 품질 및 안정성을 유지하기 위해 Amiquus는 활성 구독자를 30명으로 제한합니다. 해당 제한에 도달할 경우:",
        ],
        list: [
          "신규 사용자는 대기자 명단(웨이팅 리스트)에 등록됩니다",
          "대기자 순서는 선착순으로 결정됩니다",
          "서비스 이용 가능 슬롯이 생기면 순서에 따라 알림이 발송됩니다",
          "당사는 언제든지 수용량 한도를 변경할 권리를 가집니다",
        ],
      },
      "6": {
        id: "scraping",
        heading: "웹 스크래핑 제한",
        paragraphs: [
          "당사 서비스는 여러 차량 판매 웹사이트의 데이터를 접근 및 처리합니다. 서비스를 이용함으로써 귀하는 다음 사항에 동의합니다:",
        ],
        list: [
          "Amiquus는 모니터링 대상 웹사이트의 이용약관을 준수합니다",
          "당사는 요청 제한(레이트 리밋) 및 책임 있는 크롤링 정책을 적용합니다",
          "일부 웹사이트는 자체 정책 또는 기술적 조치에 따라 접근 가능 여부가 변경될 수 있습니다",
          "수집된 데이터의 완전성 및 최신성을 보장하지 않습니다",
        ],
      },
      "7": {
        id: "intellectual",
        heading: "지적 재산권",
        paragraphs: [
          "Amiquus 서비스, 콘텐츠, 기능 및 디자인은 Amiquus의 독점적 자산이며 저작권법, 상표법 등 관련 법률로 보호됩니다.",
          "Amiquus의 상표 또는 디자인은 당사의 사전 서면 동의 없이 사용할 수 없습니다.",
        ],
        list: [],
      },
      "8": {
        id: "termination",
        heading: "계정 종료",
        paragraphs: [
          "당사는 귀하가 본 약관을 위반했거나 그 외의 사유로 언제든지 사전 공지 없이 즉시 계정을 정지 또는 종료할 수 있습니다.",
          "계정이 종료되면 서비스 이용 권한도 즉시 중지됩니다. 계정 삭제를 원할 경우 서비스 이용을 중단하거나 당사에 요청하십시오.",
        ],
        list: [],
      },
      "9": {
        id: "limitations",
        heading: "책임 제한",
        paragraphs: [
          "Amiquus 및 당사 임직원, 파트너, 공급업체, 대리인은 다음으로 인해 발생하는 간접적, 부수적, 특별, 결과적 또는 징벌적 손해에 대해 책임을 지지 않습니다:",
        ],
        list: [
          "서비스 접근 또는 이용 불가",
          "서비스 내 제3자의 행위 또는 콘텐츠",
          "서비스에서 획득한 콘텐츠",
          "귀하의 데이터 또는 콘텐츠의 무단 접근, 사용, 변경",
        ],
      },
      "10": {
        id: "disclaimer",
        heading: "면책 조항",
        paragraphs: [
          "서비스 이용은 전적으로 귀하의 책임입니다. 본 서비스는 '있는 그대로(AS IS)' 및 '제공 가능한 상태 그대로(AS AVAILABLE)' 제공되며, 명시적 또는 묵시적 보증을 제공하지 않습니다.",
          "Amiquus는 서비스가 중단 없이 제공되거나, 시기적절하거나, 안전하거나, 오류가 없을 것이라는 보증을 하지 않습니다.",
        ],
        list: [],
      },
      "11": {
        id: "cookies",
        heading: "쿠키 정책",
        paragraphs: [
          "쿠키 정책에는 쿠키의 정의, 당사가 쿠키를 사용하는 방식, 제3자 쿠키 사용 방식, 쿠키에 대한 선택 옵션 등이 설명되어 있습니다. 자세한 내용은 개인정보 처리방침을 참조하십시오.",
        ],
        list: [],
      },
      "12": {
        id: "governing-law",
        heading: "준거법",
        paragraphs: [
          "본 약관은 법 충돌 원칙에 관계없이 미국 법률에 따라 규율되고 해석됩니다.",
          "당사가 본 약관의 권리를 행사하지 않더라도 이는 권리 포기로 간주되지 않습니다.",
        ],
        list: [],
      },
      "13": {
        id: "contact",
        heading: "문의하기",
        paragraphs: [
          "본 이용약관과 관련하여 문의 사항이 있는 경우 아래로 연락하십시오:",
        ],
        list: ["이메일: legal@amiquus.com", "웹사이트의 문의 페이지"],
      },
    },
  },
  privacy: {
    metaTitle: "개인정보 처리방침 | Amiquus",
    metaDescription:
      "Amiquus가 개인 데이터를 어떻게 처리하는지, 이용자의 개인정보 보호 권리와 데이터 수집 방식에 대해 알아보세요.",
    title: "개인정보 처리방침",
    lastUpdated: "마지막 업데이트: 2025년 5월 21일",
    sections: {
      "0": {
        id: "introduction",
        heading: "소개",
        paragraphs: [
          "Amiquus에 오신 것을 환영합니다. 저희는 이용자의 개인정보 보호를 중요하게 생각하며, 해당 정보를 안전하게 처리하기 위해 최선을 다합니다. 본 방침은 저희가 어떤 데이터를 수집하고, 어떻게 사용하며, 어떤 권리가 있는지 설명합니다.",
        ],
      },
      "1": {
        id: "data-we-collect",
        heading: "수집하는 정보",
        paragraphs: [
          "서비스 제공 및 개선을 위해 저희는 다음과 같은 정보를 수집합니다:",
        ],
        list: [
          "개인 정보: 이메일, 이름, 성, 외부 인증 시 프로필 사진",
          "계정 정보: 로그인 정보 및 계정 설정",
          "사용 정보: 서비스 이용 과정에서 자동 수집되는 정보",
          "차량 검색 설정: 브랜드, 모델, 가격대 등",
          "Telegram 정보: Telegram 알림 설정 시 chat ID 및 봇 토큰",
          "결제 정보: Stripe에서 수집하는 결제 정보 (Amiquus는 전체 카드 정보를 저장하지 않음)",
        ],
      },
      "2": {
        id: "how-we-use-data",
        heading: "정보 사용 목적",
        paragraphs: ["수집된 정보는 다음과 같은 목적으로 사용됩니다:"],
        list: [
          "서비스 제공 및 운영",
          "서비스 변경 사항에 대한 알림",
          "서비스의 대화형 기능 제공",
          "고객 지원 제공",
          "서비스 개선을 위한 분석 데이터 수집",
          "서비스 사용 현황 및 성능 모니터링",
          "기술적 문제 감지 및 해결",
          "결제 처리 및 사기 방지",
          "사용자가 설정한 조건에 맞는 차량 정보를 전송",
        ],
      },
      "3": {
        id: "data-storage",
        heading: "데이터 보관 및 보안",
        paragraphs: [
          "저희는 개인 데이터를 무단 접근, 변경, 공개 또는 삭제로부터 보호하기 위해 적절한 보안 조치를 적용합니다. 모든 데이터는 암호화된 환경에서 저장됩니다.",
          "수집된 개인 데이터는 법적 요구사항 또는 본 방침의 목적을 달성하기 위해 필요한 기간 동안 보관됩니다.",
        ],
      },
      "4": {
        id: "gdpr",
        heading: "GDPR에 따른 이용자 권리",
        paragraphs: [
          "유럽경제지역(EEA) 거주자는 GDPR에 따라 다음과 같은 개인정보 보호 권리가 있습니다:",
        ],
        list: [
          "개인 정보 접근, 수정 또는 삭제 요청 권리",
          "정정 요청 권리",
          "데이터 처리 반대 권리",
          "데이터 처리 제한 요구 권리",
          "데이터 이동(포터빌리티) 요청 권리",
          "동의 철회 권리",
        ],
      },
      "5": {
        id: "cookies",
        heading: "쿠키 정책",
        paragraphs: [
          "쿠키는 장치에 저장되는 작은 데이터 파일입니다. 저희는 다음 목적을 위해 쿠키를 사용합니다:",
        ],
        list: [
          "로그인 상태 유지",
          "웹사이트 사용 분석",
          "이용자 설정 저장",
          "맞춤형 사용자 경험 제공",
        ],
      },
      "6": {
        id: "third-party",
        heading: "제3자 서비스 제공자",
        paragraphs: [
          "저희는 서비스 제공, 분석 또는 운영 지원을 위해 제3자 회사를 이용할 수 있습니다.",
          "이러한 제공자에는 다음이 포함됩니다:",
        ],
        list: [
          "결제 처리업체 (Stripe)",
          "분석 서비스 제공자",
          "고객 지원 서비스",
          "클라우드 인프라 및 호스팅 업체",
        ],
        paragraphs2: [
          "제3자 제공자는 지정된 업무 수행 목적에 한해서만 개인 데이터에 접근할 수 있으며, 다른 목적으로 사용하는 것은 금지됩니다.",
        ],
      },
      "7": {
        id: "changes",
        heading: "개인정보 처리방침 변경",
        paragraphs: [
          "저희는 개인정보 처리방침을 수시로 업데이트할 수 있습니다. 변경 사항은 이 페이지에 게시되며 '마지막 업데이트' 날짜가 수정됩니다.",
          "개인정보 처리방침을 정기적으로 확인하는 것을 권장드립니다.",
        ],
      },
      "8": {
        id: "contact",
        heading: "문의하기",
        paragraphs: [
          "개인정보 처리방침에 대해 궁금한 점이 있으시면 아래를 통해 문의해 주세요:",
        ],
        list: ["이메일: privacy@amiquus.com", "웹사이트의 문의 페이지"],
      },
    },
  },
  faqs: {
    metaTitle: "자주 묻는 질문 | Amiquus",
    metaDescription:
      "Amiquus 차량 모니터링 서비스, 구독, 알림 설정 등 자주 묻는 질문을 확인하세요.",
    title: "자주 묻는 질문",
    subtitle: "Amiquus 차량 모니터링 서비스에 대한 빠르고 정확한 답변",
    general: {
      heading: "일반 질문",
      whatIs: {
        question: "Amiquus란 무엇인가요?",
        answer:
          "Amiquus는 사용자가 설정한 조건에 맞는 차량 리스팅을 여러 웹사이트에서 모니터링하고, 새 리스팅이 발견되면 Telegram으로 즉시 알림을 보내주는 서비스입니다.",
      },
      howItWorks: {
        question: "서비스는 어떻게 작동하나요?",
        answer: [
          "원하는 차량의 검색 조건(브랜드, 모델, 가격 등)을 설정합니다",
          "모니터링할 웹사이트를 선택합니다",
          "Telegram 계정을 연결합니다",
          "시스템이 선택된 사이트를 지속적으로 모니터링합니다",
          "조건에 맞는 새 리스팅이 발견되면 즉시 Telegram 알림을 받습니다",
        ],
      },
      whichWebsites: {
        question: "어떤 웹사이트를 모니터링하나요?",
        answerIntro:
          "현재 아래 주요 차량 리스팅 사이트를 모니터링하고 있습니다:",
        list: [
          "AutoTrader",
          "Cars.com",
          "CarGurus",
          "TrueCar",
          "Facebook Marketplace (URL 기반)",
          "Craigslist",
          "eBay Motors",
        ],
        outro: "더 많은 플랫폼이 지속적으로 추가될 예정입니다.",
      },
    },
    subscription: {
      heading: "구독 관련 질문",
      cost: {
        question: "구독 비용은 얼마인가요?",
        answer: [
          "1개의 사이트 모니터링 및 6시간 간격 업데이트 기준 월 €79.99부터 시작합니다.",
          "추가 웹사이트 모니터링은 사이트당 월 €4.99입니다.",
        ],
      },
      cancel: {
        question: "구독을 어떻게 취소하나요?",
        stepsIntro: "구독 취소 절차:",
        steps: [
          "계정에 로그인합니다",
          "‘프로필’ 페이지로 이동합니다",
          "‘구독(Subscriptions)’ 탭을 엽니다",
          "취소하려는 구독에서 ‘구독 취소’를 클릭합니다",
        ],
        note: "구독은 현재 결제 주기 종료 시까지 유지됩니다.",
      },
      multiple: {
        question: "여러 개의 구독을 가질 수 있나요?",
        answer:
          "네, 하나의 계정에서 서로 다른 조건으로 여러 개의 구독을 생성할 수 있습니다.",
      },
      limit: {
        question: "구독 인원이 제한되는 이유는 무엇인가요?",
        intro: "다음 목적을 위해 구독자 수를 제한합니다:",
        list: [
          "최고의 데이터 정확도 및 서비스 품질 유지",
          "각 사용자에 대한 개인 맞춤 지원 제공",
          "새 리스팅 알림의 신속한 전달",
          "웹사이트 규칙을 준수하며 과도한 부하를 방지",
        ],
        outro: "정원이 찬 경우 대기자 명단에 등록하실 수 있습니다.",
      },
    },
    technical: {
      heading: "기술 관련 질문",
      telegram: {
        question: "Telegram 알림은 어떻게 설정하나요?",
        stepsIntro: "다음 단계를 따르세요:",
        steps: [
          "BotFather로 봇 생성",
          "봇 토큰 복사",
          "봇과 대화 시작",
          "chat ID 확인",
          "Amiquus에 토큰과 chat ID 입력",
          "‘테스트 메시지 보내기’ 버튼으로 알림 테스트",
        ],
        note: "자세한 안내는 구독 설정 화면에서 이미지와 함께 제공됩니다.",
      },
      frequency: {
        question: "알림 빈도는 어떻게 결정되나요?",
        intro: "알림 빈도는 다음에 따라 결정됩니다:",
        list: [
          "선택한 업데이트 빈도",
          "조건에 맞는 리스팅 발생 빈도",
          "차량 시장의 활동성",
        ],
        outro: "조건을 만족하는 새 리스팅이 발견될 때에만 알림을 받습니다.",
      },
      privacy: {
        question: "개인정보는 어떻게 보호되나요?",
        intro: "다음 보안 조치를 적용합니다:",
        list: [
          "데이터 전송 및 저장 시 암호화",
          "Stripe 결제 시스템 적용",
          "개인정보 제3자 제공 없음",
          "언제든지 데이터 삭제 요청 가능",
        ],
        outro: "자세한 내용은 개인정보 처리방침을 확인하세요.",
      },
    },
    support: {
      heading: "다른 질문이 있으신가요?",
      description: "궁금한 점을 찾지 못하셨다면, 저희 지원팀이 도와드립니다!",
      button: "지원팀에 문의하기",
    },
  },
  waitlist: {
    metaTitle: "웨이팅 리스트 가입 - Amiquus",
    metaDescription:
      "Amiquus 구독 가능 여부가 열릴 때 알림을 받기 위해 웨이팅 리스트에 가입하세요.",
    title: "웨이팅 리스트 가입",
    subtitle:
      "높은 수요로 인해 서비스 품질을 유지하기 위해 활성 구독자를 제한하고 있습니다.",
    limited: {
      heading: "제한된 이용 가능 수",
      description: "최대 30명의 활성 구독자 제한을 통해 다음을 보장합니다:",
      points: [
        "모든 사용자에게 빠르고 안정적인 스크래핑 제공",
        "차량 리스팅 사이트로부터 차단될 위험 감소",
        "각 사용자를 위한 맞춤형 고객 지원",
        "서버 리소스의 공정하고 균형 잡힌 분배",
      ],
      available:
        "전체 {{capacity}}개 중 {{remaining}}개의 구독 슬롯이 남아 있습니다.",
      full: "현재 모든 구독 슬롯이 꽉 찼습니다. 자리가 날 경우 알림을 받으려면 웨이팅 리스트에 가입하세요.",
    },
    success: {
      title: "웨이팅 리스트에 등록되었습니다!",
      description: "구독 슬롯이 열리면 바로 알려드릴게요.",
      message:
        "Amiquus에 관심 가져주셔서 감사합니다! 웨이팅 리스트에 등록되었으며, 자리가 확보되는 즉시 연락드리겠습니다.",
      button: "홈페이지로 돌아가기",
    },
    cantJoin: {
      title: "웨이팅 리스트 가입",
      description: "슬롯이 준비되면 바로 이메일로 알려드릴게요.",
    },
    form: {
      firstName: {
        label: "이름",
        placeholder: "민수",
      },
      lastName: {
        label: "성",
        placeholder: "김",
      },
      email: {
        label: "이메일",
        placeholder: "example@example.com",
        description: "구독 슬롯이 생기면 이 이메일로 알려드립니다.",
      },
      submit: "웨이팅 리스트 가입",
      submitting: "등록 중...",
    },
  },
  support: {
    metaTitle: "지원센터 | Amiquus",
    metaDescription:
      "Amiquus 계정, 구독 또는 차량 알림 관련 도움을 받을 수 있는 고객지원 센터입니다.",
    title: "지원센터",
    subtitle: "자주 묻는 질문을 확인하거나 지원팀에 직접 문의하세요.",
    emailSupport: {
      title: "이메일 지원",
      description: "문의 이메일을 보내시면 24시간 이내 답변드립니다.",
      email: "support@amiquus.com",
    },
    faqHeading: "자주 묻는 질문",
    faqs: {
      telegram: {
        question: "Telegram 알림 설정 방법은?",
        intro: "다음 단계를 따라 설정할 수 있습니다:",
        steps: [
          "BotFather로 Telegram 봇을 생성합니다",
          "API 토큰과 chat ID를 복사합니다",
          '"알림 설정" 메뉴에 토큰과 chat ID를 입력합니다',
          '"테스트 메시지 보내기" 버튼으로 정상 작동 여부를 확인합니다',
        ],
        outro: "보다 자세한 안내는 대시보드 내에서 확인할 수 있습니다.",
      },
      updates: {
        question: "차량 리스팅은 얼마나 자주 업데이트되나요?",
        answer:
          "업데이트 빈도는 구독 플랜에 따라 다릅니다. 기본 플랜은 6시간마다, 프리미엄 플랜은 최대 30분마다 업데이트됩니다.",
      },
      facebook: {
        question: "Facebook Marketplace도 모니터링할 수 있나요?",
        answer:
          "네, 가능합니다. 원하는 필터를 적용한 Marketplace 검색 URL을 입력하면 해당 검색 결과를 모니터링합니다.",
      },
      cancel: {
        question: "구독은 어떻게 취소하나요?",
        answer:
          '프로필 페이지의 "구독(Subscriptions)" 탭에서 취소할 수 있습니다. 현재 결제 기간 종료까지는 서비스가 유지됩니다.',
      },
      full: {
        question: "구독 슬롯이 가득 차면 어떻게 되나요?",
        answer:
          "슬롯이 가득 찼을 경우 웨이팅 리스트에 가입할 수 있습니다. 자리가 생기면 우선적으로 안내받으실 수 있습니다.",
      },
    },
    stillNeedHelp: {
      heading: "추가 도움이 필요하신가요?",
      description:
        "궁금한 점이 해결되지 않았다면 언제든지 지원팀에 문의하세요.",
      button: "지원팀에 문의하기",
    },
  },
  notFound: {
    title: "404 페이지를 찾을 수 없습니다",
    message: "라우터에 해당 페이지를 추가하지 않으셨나요?",
  },
  emails: {
    verification: {
      subject: "Amiquus 이메일 인증 코드",
      greeting: "안녕하세요,",
      message: "아래 인증 코드를 입력하여 회원가입을 완료하세요:",
      expiration: "이 코드는 10분 후 만료됩니다.",
    },
    invoice: {
      success: {
        subject: "Amiquus 결제 완료 – 청구서 #",
        h2Message: "Amiquus 구독 결제가 성공적으로 처리되었습니다!",
        greeting: "안녕하세요,",
        paymentMessage: "결제 금액:",
        downloadMessage:
          "아래 링크에서 청구서를 확인하거나 다운로드할 수 있습니다:",
        viewInvoice: "청구서 보기",
        invoiceNumber: "청구서 번호:",
      },
      pending: {
        subjectA: "결제 보류 중 – 청구서",
        subjectB: " (Amiquus 구독)",
        h2Message: "작업 필요: 구독 결제를 완료해주세요",
        greeting: "안녕하세요,",
        messageA: "청구서",
        messageB:
          "가 아직 결제되지 않았습니다. 구독을 활성화하려면 아래 금액을 결제해주세요:",
        paymentMessage: "아래 링크에서 안전하게 결제할 수 있습니다:",
        payInvoice: "청구서 결제",
        ignoreEmail: "이미 결제하셨다면 이 이메일은 무시하셔도 됩니다.",
      },
      failed: {
        subject: "결제 실패 – 청구서",
        message: "최근 결제를 처리하지 못했습니다 (시도 횟수:",
        attemptsA:
          "곧 다시 결제를 시도합니다. 현재는 별도 조치가 필요하지 않습니다.",
        attemptsB: "결제를 3번 시도했지만 모두 실패했습니다.",
        attemptsC: "그 결과 구독이 <strong>일시 중지</strong>되었습니다.",
        attemptsD:
          "지불 방법을 업데이트하고 프로필에서 구독을 다시 시작해주세요:",
        viewInvoice: "청구서 보기",
        managePayment: "결제 방법 관리",
      },
    },
    waitlist: {
      subject: "Amiquus 웨이팅 리스트에 등록되었습니다!",
      h2Message: "웨이팅 리스트 등록 완료",
      hi: "안녕하세요,",
      message:
        "웨이팅 리스트에 가입해주셔서 감사합니다. 슬롯이 열리는 즉시 알려드리겠습니다.",
      anyQuestions: "궁금한 점이 있다면 언제든지 이 이메일로 회신해주세요.",
    },
    common: {
      thanksMessage: "Amiquus를 이용해주셔서 감사합니다!",
      signature: "감사합니다.<br/>Amiquus 팀",
      team: "— Amiquus 팀",
      needHelp: "도움이 필요하신가요?",
      hello: "안녕하세요",
    },
  },
};

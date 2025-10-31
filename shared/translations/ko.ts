export const ko = {
  navigations: {
    features: "기능",
    how: "작동 방식",
    pricing: "가격",
    getAlerts: "알림 받기",
    waitlist: "대기 목록",
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
  about: {
    description:
      "우리는 첨단 모니터링 기술을 모두에게 제공하여 사람들이 완벽한 중고차를 찾는 방식을 혁신하고 있습니다.",
    join: {
      cta: "채용 공고 보기",
      description:
        "AMIQUUS는 기술에 열정을 가지고 자동차 구매 경험을 혁신하고자 하는 재능 있는 인재를 항상 찾고 있습니다. 현재 채용 중인 포지션을 확인하시고, 우리의 미션에 함께하세요.",
      heading: "함께할 팀원을 찾습니다",
    },
    meta: {
      description:
        "AMIQUUS와 함께 중고차 구매 방식을 혁신하려는 우리의 미션, 그리고 지능형 차량 매물 모니터링 서비스를 만드는 팀을 소개합니다.",
      title: "회사 소개 | Amiquus - 자동차 매물 모니터링 서비스",
    },
    mission: {
      heading: "우리의 미션",
      items: {
        0: {
          description:
            "여러 웹사이트를 계속 새로고침할 필요 없이, 검색 과정을 자동화하고 실시간 알림을 받아보세요.",
          title: "시간 절약",
        },
        1: {
          description:
            "최고의 혜택이 나타나면 가장 먼저 알아보세요. 타이밍이 중요한 경쟁 시장에서 우위를 선점할 수 있습니다.",
          title: "더 좋은 딜 찾기",
        },
        2: {
          description:
            "여러 신뢰할 수 있는 자동차 매물 플랫폼을 한눈에 모니터링하여 현명하게 결정하세요.",
          title: "안심하고 구매하세요",
        },
      },
    },
    questions: {
      description:
        "AMIQUUS 서비스 이용 방법, 요금제 확인 또는 고객 지원팀에 문의해보세요.",
      heading: "궁금한 점이 있으신가요?",
      links: {
        faq: "자주 묻는 질문 보기",
        pricing: "가격 보기",
        support: "고객 지원 문의",
      },
    },
    story: {
      heading: "저희 이야기",
      paragraphs: {
        0: "AMIQUUS는 2023년에 시작되었습니다. 창립자인 Alex가 몇 달 동안 희귀한 특정 모델을 좋은 가격에 찾기 위해 자동차 매물 사이트를 계속 새로고침하다가, 알림이 늦게 와서 여러 번 기회를 놓친 후 더 나은 방법이 있어야 한다는 것을 깨달았습니다.",
        1: "소규모 개발자와 자동차 애호가 팀과 함께 일하며, Alex는 여러 사이트의 매물 정보를 동시에 모니터링하고 일치하는 매물이 나타나면 즉시 알림을 보내주는 시스템을 구축했습니다.",
        2: "개인 프로젝트로 시작된 AMIQUUS는 곧 친구들과 가족의 관심을 끌었고, 2025년 초에는 모두가 이용할 수 있는 서비스로 탄생했습니다. 오늘날 저희는 전국의 자동차 구매자들이 시간을 절약하고 더 나은 조건의 차량을 찾을 수 있도록 지능형 모니터링 기술로 돕고 있습니다.",
      },
    },
    team: {
      heading: "우리 팀",
      members: {
        0: {
          bio: "자동차와 혁신적인 솔루션 개발에 열정을 가진 전직 소프트웨어 엔지니어",
          name: "Alex Morgan, 알아보기",
          role: "창립자 및 대표이사",
        },
        1: {
          bio: "웹 스크래핑과 정보 검색 시스템을 전문으로 하는 데이터 사이언스 전문가",
          name: "Sarah Chen, 알아보기",
          role: "최고기술책임자",
        },
        2: {
          bio: "고성능 알림 시스템 구축에 전문성을 갖춘 풀스택 엔지니어",
          name: "마커스 리",
          role: "수석 개발자",
        },
        3: {
          bio: "전직 자동차 판매 전문가로서 고객이 완벽한 차량을 찾을 수 있도록 최선을 다합니다.",
          name: "엘레나 로드리게스",
          role: "고객 성공",
        },
      },
    },
    title: "Amiquus 소개",
  },
  alertSchema: {
    errors: {
      carbrand: "자동차 브랜드는 필수 항목입니다",
      carmodel: "차종 입력은 필수입니다",
      facebookmarketplaceurl:
        "Facebook이 선택되면 Facebook Marketplace URL을 반드시 입력해야 합니다.",
      fueltype: "연료 종류는 필수 항목입니다",
      maxkilometers: "최대 주행거리는 숫자여야 합니다.",
      notificationlanguage: "알림 언어를 선택해야 합니다.",
      pricemax: "최대 가격은 숫자여야 합니다",
      pricemin: "최소 가격은 숫자여야 합니다.",
      telegramchatid: "텔레그램 채팅 ID가 필요합니다.",
      telegramtoken: "텔레그램 봇 토큰이 필요합니다",
      telegramusername: "텔레그램 사용자 이름은 필수입니다",
      websitesselected: "최소한 하나의 웹사이트를 선택해야 합니다.",
      yearmax: "최대 연도는 올바른 연도여야 합니다.",
      yearmin: "최소 연도는 올바른 연도여야 합니다.",
    },
  },
  carDetails: {
    actions: {
      continue: "계속",
      previous: "이전",
    },
    description:
      "찾으시는 차량 정보를 입력해 주세요. 모든 항목은 선택 사항이며, 비워두시면 더 다양한 결과를 확인하실 수 있습니다.",
    errors: {
      carbrand: "자동차 브랜드는 필수 항목입니다",
      carmodel: "자동차 모델을 입력해 주세요",
      fueltype: "연료 종류는 필수 항목입니다.",
      maxkilometers: "최대 주행거리는 숫자여야 합니다.",
      pricemax: "최대 가격은 숫자여야 합니다",
      pricemin: "최소 가격은 숫자여야 합니다",
      yearmax: "최대 연도는 올바른 연도여야 합니다.",
      yearmin: "최소 연도는 올바른 연도여야 합니다.",
    },
    heading: "차량 정보",
    labels: {
      carbrand: "자동차 브랜드",
      carmodel: "차종",
      fueltype: "연료 종류",
      maxkilometers: "최대 주행 거리",
      pricemax: "최대 가격",
      pricemin: "최소 가격",
      yearmax: "최대 연도",
      yearmin: "최소 연도",
    },
    options: {
      nomodelsavailable: "이용 가능한 모델이 없습니다",
    },
    placeholders: {
      carbrand: "자동차 브랜드 선택",
      carmodel: "차종 선택",
      carmodeldisabled: "먼저 자동차 브랜드를 선택하세요",
      fueltype: "연료 종류 선택",
      maxkilometers: "최대 주행 거리 입력",
      pricemax: "최대 가격 입력",
      pricemin: "최소 가격을 입력하세요",
      yearmax: "최대 연도를 입력하세요",
      yearmin: "최소 연도를 입력하세요",
    },
  },
  dashboardPayment: {
    add: "결제 수단 추가",
    description: "구독 결제용 새 신용카드 또는 체크카드를 추가하세요.",
    errormessage: "예기치 않은 오류가 발생했습니다.",
    errortitle: "결제 수단 추가 중 오류가 발생했습니다",
    initerror: {
      description: "결제 설정을 초기화할 수 없습니다",
      title: "오류",
    },
    processing: "처리 중...",
  },
  dashboardPaymentMethodCard: {
    cancel: "취소",
    confirmremove: "카드 삭제",
    default: "기본",
    expires: "만료",
    remove: "제거",
    removedescription:
      "정말로 {{last4}}로 끝나는 {{brand}} 카드를 삭제하시겠습니까?",
    removetitle: "결제 수단 삭제",
    removewarning:
      "이것은 기본 결제 수단이며, 삭제하면 활성 구독에 영향을 줄 수 있습니다.",
    setasdefault: "기본값으로 설정",
    setdefaultdescription:
      "{{brand}} 카드({{last4}})를 기본 결제 수단으로 설정하시겠습니까? 이 카드는 앞으로 모든 구독 결제에 사용됩니다.",
    setdefaulttitle: "기본 결제 수단 설정",
  },
  dashboardSubscriptionCard: {
    cancelalert: "알림 취소",
    canceldescription:
      "정말로 {{brand}} {{model}} 차량 알림을 취소하시겠습니까? 모든 알림이 중지되며, 다시 이 차량을 모니터링하려면 새 알림을 설정해야 합니다.",
    canceltitle: "자동차 알림 취소",
    confirmcancel: "경고 취소",
    edit: "수정",
    keepmyalert: "내 알림 유지",
    language: "언어",
    price: "가격",
    pricerange: "가격",
    updates: "업데이트",
    websites: "웹사이트",
    years: "년",
  },
  faq: {
    contactlink: "고객 지원팀에 문의하세요",
    contactprompt: "추가로 궁금한 점이 있으신가요?",
    questions: {
      0: {
        answer:
          "알림 속도는 선택하신 업데이트 빈도에 따라 달라집니다. 기본 시간제 플랜을 이용하시면 새 매물이 등록된 후 한 시간 이내에 알림을 받으실 수 있습니다. 거의 실시간(게시 후 몇 분 이내) 알림을 원하신다면 더 자주 업데이트되는 플랜으로 업그레이드하실 수 있습니다.",
        question: "새로운 매물이 등록되면 알림을 얼마나 빨리 받을 수 있나요?",
      },
      1: {
        answer:
          "네! 다양한 기준으로 여러 검색 프로필을 생성할 수 있습니다. 각 프로필은 별도의 구독으로 간주되지만, 하나의 계정에서 모두 관리할 수 있습니다. 동시에 여러 종류의 차량을 찾고 있다면 아주 편리합니다.",
        question: "여러 종류의 자동차를 한 번에 추적할 수 있나요?",
      },
      2: {
        answer:
          "현재 AMIQUUS는 AutoTrader, CarGurus, Cars.com, Facebook Marketplace 등 주요 자동차 매물 플랫폼을 지원하고 있습니다. 사용자 요청과 지역별 인기 사이트를 반영하여 더 많은 웹사이트로 서비스를 지속적으로 확대하고 있습니다.",
        question: "현재 어떤 웹사이트를 지원하나요?",
      },
      3: {
        answer:
          "전혀 어렵지 않아요! 저희는 텍스트와 영상 가이드로 단계별 안내를 제공하여 Telegram 봇을 쉽게 설정할 수 있도록 도와드립니다. 대부분의 사용자는 기술 지식이 없어도 5분 이내에 설정을 완료합니다.",
        question: "텔레그램 봇을 사용하려면 기술적인 지식이 필요한가요?",
      },
      4: {
        answer:
          "네, 언제든지 내 계정 대시보드에서 검색 기준을 수정할 수 있습니다. 변경 사항은 즉시 적용되며, 알림도 서비스 중단 없이 바로 업데이트됩니다.",
        question: "구독 설정 후에도 검색 기준을 변경할 수 있나요?",
      },
      5: {
        answer:
          '언제든지 계정 대시보드에서 구독을 취소하실 수 있습니다. "구독" 섹션으로 이동해 취소를 원하는 구독을 선택한 후, "구독 취소" 버튼을 클릭하세요. 현재 결제 주기 종료 시까지 서비스가 유지됩니다.',
        question: "구독을 어떻게 취소하나요?",
      },
    },
    subtitle: "AMIQUUS 서비스에 대해 자주 묻는 질문의 답변을 찾아보세요.",
    title: "자주 묻는 질문",
  },
  faqs: {
    general: {
      heading: "자주 묻는 질문",
      howitworks: {
        answer: {
          0: "검색 조건을 설정하세요 (제조사, 모델, 가격대 등)",
          1: "모니터링할 웹사이트를 직접 선택하세요",
          2: "알림을 받으려면 Telegram 계정을 연결하세요",
          3: "저희 시스템은 선택하신 웹사이트를 실시간으로 모니터링하여 새로운 게시물을 확인합니다.",
          4: "조건에 맞는 차량이 나타나면, 모든 정보와 직접 연결 링크가 포함된 텔레그램 알림을 즉시 받아보실 수 있습니다.",
        },
        question: "어떻게 작동하나요?",
      },
      whatis: {
        answer:
          "AMIQUUS는 사용자의 특정 조건에 맞는 차량을 여러 자동차 매물 사이트에서 실시간으로 모니터링하는 서비스입니다. 조건에 맞는 매물이 등록되면 텔레그램을 통해 즉시 알림을 받아 누구보다 빠르게 판매자에게 연락하고 좋은 거래를 성사시킬 수 있습니다.",
        question: "Amiquus란 무엇인가요?",
      },
      whichwebsites: {
        answerintro: "현재 주요 자동차 매물 플랫폼을 모니터링하고 있습니다:",
        list: {
          0: "오토트레이더",
          1: "Cars.com",
          2: "카구루스",
          3: "트루카",
          4: "Facebook 마켓플레이스(URL 통해서)",
          5: "크레이그리스트",
          6: "이베이 모터스",
        },
        outro:
          "더 폭넓은 서비스를 제공하기 위해 지속적으로 새로운 플랫폼을 추가하고 있습니다.",
        question: "어떤 자동차 매물 사이트를 모니터링하시나요?",
      },
    },
    metaDescription:
      "AMIQUUS 차량 매물 모니터링 서비스, 구독, 알림 설정 등 자주 묻는 질문에 대한 답변을 찾아보세요.",
    metaTitle: "자주 묻는 질문 | Amiquus",
    subscription: {
      cancel: {
        note: "현재 결제 주기가 끝날 때까지 구독이 계속 유지됩니다.",
        question: "구독을 어떻게 취소하나요?",
        steps: {
          0: "내 계정에 로그인",
          1: '"프로필" 페이지로 이동하세요',
          2: '"구독" 탭을 선택하세요',
          3: '취소하려는 구독 옆에 있는 "구독 취소" 버튼을 클릭하세요.',
        },
        stepsintro:
          "언제든지 내 계정 프로필 페이지에서 구독을 취소하실 수 있습니다.",
      },
      cost: {
        answer: {
          0: "저희 요금은 웹사이트 1개 모니터링(6시간마다 업데이트) 기준 월 $79.99부터 시작합니다. 추가 웹사이트는 개당 월 $4.99입니다. 더 빠른 알림을 원하시면 업데이트 주기를 업그레이드할 수 있습니다.",
          1: "자세한 가격 정보는 홈페이지의 가격 안내 섹션을 참고해 주세요.",
        },
        question: "구독 요금이 얼마인가요?",
      },
      heading: "구독 관련 문의",
      limit: {
        intro: "저희 서비스는 30명의 활성 구독자로 제한하여 다음을 보장합니다:",
        list: {
          0: "최고 수준의 서비스와 데이터 정확성",
          1: "각 구독자 맞춤 지원",
          2: "최대 등록 시간대에 더 빠른 알림 전달",
          3: "대상 웹사이트에 부담을 주지 않는 윤리적인 스크래핑",
        },
        outro:
          "정원이 모두 찼을 경우, 자리가 나면 알림을 받으실 수 있도록 대기자 명단에 등록하실 수 있습니다.",
        question: "왜 구독자 수에 제한이 있나요?",
      },
      multiple: {
        answer:
          "네, 하나의 계정으로 여러 개의 구독을 생성할 수 있습니다. 각 구독마다 다른 자동차 모델, 브랜드, 가격대를 추적할 수 있어요. 여러 대의 차량을 찾거나 친구, 가족의 차량 검색을 도와줄 때 특히 유용합니다.",
        question: "다른 자동차 모델에 대해 여러 개의 구독을 가질 수 있나요?",
      },
    },
    subtitle:
      "자동차 매물 모니터링 서비스에 대한 자주 묻는 질문을 빠르게 확인하세요",
    support: {
      button: "고객 지원 문의",
      description:
        "궁금하신 점에 대한 답변을 찾지 못하셨다면, AMIQUUS 고객지원팀이 도와드리겠습니다!",
      heading: "아직 궁금한 점이 있으신가요?",
    },
    technical: {
      frequency: {
        intro: "알림 빈도는 다음에 따라 달라집니다:",
        list: {
          0: "선택하신 업데이트 빈도 패키지(6시간마다부터 30분마다까지)",
          1: "내 조건에 맞는 신규 매물은 몇 건인가요?",
          2: "선택하신 브랜드/모델의 시장 활발도",
        },
        outro: "새로운 매물이 내 조건에 맞게 등록될 때만 알림을 받게 됩니다.",
        question: "알림은 얼마나 자주 받게 되나요?",
      },
      heading: "기술 문의",
      privacy: {
        intro:
          "저희는 데이터 개인정보 보호를 매우 중요하게 생각하며 다음과 같은 조치를 적용합니다:",
        list: {
          0: "전송 및 저장 시 데이터 암호화",
          1: "Stripe를 통한 안전한 결제",
          2: "제3자와 데이터 공유 없음",
          3: "언제든지 내 데이터를 요청하거나 삭제할 수 있습니다.",
        },
        outro: "자세한 내용은 전체 개인정보처리방침을 확인하세요.",
        question: "내 개인정보는 어떻게 보호되나요?",
      },
      telegram: {
        note: "구독 설정 과정에서 스크린샷이 포함된 자세한 단계별 안내가 제공됩니다.",
        question: "텔레그램 알림은 어떻게 설정하나요?",
        steps: {
          0: "BotFather를 사용하여 텔레그램 봇 만들기(설정 중 안내 제공)",
          1: "BotFather에서 봇 토큰을 복사하세요",
          2: "봇과 대화를 시작하세요",
          3: "채팅 ID 받기 (설정 과정에서 안내 제공)",
          4: "Amiquus 구독 설정에서 봇 토큰과 채팅 ID를 입력하세요.",
          5: "`테스트 메시지 보내기` 버튼을 사용해 알림 설정을 확인해보세요.",
        },
        stepsintro: "텔레그램 알림 설정 방법:",
      },
    },
    title: "자주 묻는 질문",
  },
  features: {
    account: {
      description:
        "여러 검색 프로필을 관리하고 구독 설정을 몇 번의 클릭으로 변경하세요.",
      title: "간편한 계정 관리",
    },
    filters: {
      description:
        "브랜드, 모델, 연식, 주행거리, 가격 범위 등 정확한 조건을 설정해 원하는 차량을 찾아보세요.",
      title: "맞춤 필터",
    },
    frequency: {
      description:
        "새로운 매물 확인 주기를 선택하세요. 시간 단위 업데이트부터 실시간 모니터링까지 가능합니다.",
      title: "주파수 맞춤 설정",
    },
    heading: "왜 AMIQUUS를 선택해야 하나요?",
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
        "여러 자동차 매물 사이트를 한 번에 모니터링하여 일일이 직접 확인할 필요가 없습니다.",
      title: "다중 사이트 추적",
    },
    notifications: {
      description:
        "차량 조건에 맞는 매물이 등록되면 Telegram으로 즉시 알림을 받아보세요.",
      title: "즉시 알림",
    },
    subheading:
      "시간을 절약하고 AMIQUUS의 자동 추적 서비스로 완벽한 차량을 절대 놓치지 마세요.",
  },
  footer: {
    about: "회사 소개",
    blog: "블로그",
    branddescription:
      "완벽한 중고차 딜을 가장 적절한 시기에 찾아주는 당신의 개인 어시스턴트",
    brandtitle: "Amiquus",
    careers: "채용",
    contact: "문의",
    cookies: "쿠키 정책",
    copyright: "모든 권리 보유.",
    email: "support@amiquus.com 고객센터",
    faq: "자주 묻는 질문",
    features: "기능",
    gdpr: "GDPR 준수",
    getstarted: "시작하기",
    legal: "법적 안내",
    pricing: "가격",
    privacy: "개인정보처리방침",
    quicklinks: "빠른 링크",
    support: "고객지원",
    telegram: "텔레그램으로 문의하기",
    terms: "이용약관",
  },
  hero: {
    button1: "알림 설정하기",
    button2: "작동 방식 보기",
    label: "중고차 매물을 실시간으로 추적하세요",
    subtitle:
      "Amiquus는 여러 자동차 매물 사이트에서 원하는 차량이 등록되면 즉시 알려드립니다. 매칭이 되면 텔레그램으로 바로 알림을 받아보세요.",
    title: "완벽한 자동차 딜을 절대 놓치지 마세요",
    trustindicators: {
      cancelanytime: "언제든지 취소 가능",
      nosetup: "설정이 필요 없습니다",
      realtime: "실시간 알림",
      websites: "15개 이상의 웹사이트 추적",
    },
  },
  howItWorks: {
    features: {
      0: "15개 이상의 자동차 매물 사이트를 한 번에 확인하세요",
      1: "맞춤형 검색 기준과 고급 필터링",
      2: "텔레그램을 통한 실시간 알림",
      3: "자동 가격 인하 및 신규 매물 알림",
      4: "5분 만에 끝나는 간편한 설치 과정",
    },
    notificationmockup1: {
      description: "BMW 3시리즈, 2019년식, $32,500 - AutoTrader에 새로 등록됨",
      title: "새로운 매칭이 발견되었습니다!",
    },
    notificationmockup2: {
      description:
        "메르세데스 C-클래스, 2020년식, 30,000마일 - 가격 2,000달러 인하",
      title: "텔레그램 알림",
    },
    setalerts: "알림 설정하기",
    steps: {
      findcar: {
        description:
          "새로운 매물 소식을 가장 먼저 받아보고, 누구보다 빠르게 최고의 혜택을 누리세요.",
        title: "내게 딱 맞는 자동차 찾기",
      },
      notifications: {
        description:
          "원하는 조건에 맞는 차량이 저희가 모니터링하는 웹사이트에 등록되면 즉시 알림을 받아보세요.",
        title: "즉시 알림 받기",
      },
      preferences: {
        description:
          "관심 있는 자동차 브랜드, 모델, 가격대 및 기타 조건을 선택하세요.",
        title: "환경 설정",
      },
      telegram: {
        description:
          "텔레그램 계정을 연동하면 신규 매물 알림을 바로 받아보실 수 있습니다.",
        title: "텔레그램 연결",
      },
    },
    subtitle:
      "한 번만 설정하면 AMIQUUS의 자동 시스템이 완벽한 자동차 딜을 찾아드립니다.",
    title: "Amiquus 이용 방법",
    whytitle: "왜 AMIQUUS를 선택해야 하나요?",
  },
  limited: {
    available: {
      buttonText: "지금 시작하기",
      description:
        "현재 {{capacity}}개 중 {{active}}개의 구독이 활성화되어 있습니다. 아직 가입하실 수 있는 충분한 자리가 있습니다!",
      title: "구독 가능",
    },
    full: {
      buttonText: "웨이팅리스트 신청",
      description:
        "현재 30명의 활성 구독자 한도에 도달했습니다. 자리가 생기면 알림을 받으시려면 대기자 명단에 등록해 주세요.",
      title: "구독 한도에 도달했습니다",
    },
    limited: {
      buttonText: "지금 시작하기",
      description:
        "총 {{capacity}}명 중 {{remaining}}자리만 남았습니다. 정원 마감 전에 지금 바로 구독하세요!",
      title: "한정 수량",
    },
  },
  login: {
    description: "이메일과 비밀번호를 입력하여 대시보드에 접속하세요.",
    emaillabel: "이메일",
    errors: {
      invalidemail: "유효한 이메일 주소를 입력해 주세요.",
      shortpassword: "비밀번호는 최소 6자 이상이어야 합니다.",
    },
    errortitle: "로그인에 실패했습니다",
    genericerror: "자격 증명을 확인하고 다시 시도해 주세요.",
    loggingin: "로그인 중...",
    loginbutton: "로그인",
    loginwithgoogle: "Google로 로그인",
    noaccount: "계정이 없으신가요?",
    or: "또는",
    passwordlabel: "비밀번호",
    registerlink: "회원가입",
    successmessage: "성공적으로 로그인되었습니다.",
    successtitle: "로그인 성공",
    title: "내 계정에 로그인",
  },
  loginPrompt: {
    description:
      "계속하려면 로그인해야 합니다. 로그인하거나 회원가입을 해주세요.",
    login: "로그인",
    register: "회원가입",
    title: "로그인이 필요합니다",
  },
  notFound: {
    message: "페이지를 라우터에 추가하는 것을 잊으셨나요?",
    title: "404 페이지를 찾을 수 없습니다",
  },
  payment: {
    button: {
      processing: "처리 중...",
      submit: "결제 수단 설정",
    },
    toast: {
      error: {
        fallback: "예기치 않은 오류가 발생했습니다. 다시 시도해 주세요.",
        title: "오류",
      },
      success: {
        description: "결제 수단이 성공적으로 설정되었습니다.",
        title: "성공",
      },
    },
  },
  personalInfo: {
    actions: {
      continue: "계속",
      login: "계속하려면 로그인 또는 회원가입하세요",
    },
    description: "알림을 정확하게 설정할 수 있도록 개인정보를 입력해 주세요.",
    errors: {
      email: "유효한 이메일 주소를 입력해 주세요.",
      firstname: "이름은 필수 항목입니다.",
      lastname: "성은 필수 항목입니다.",
    },
    heading: "개인정보",
    labels: {
      email: "이메일 주소",
      firstname: "이름",
      lastname: "성",
    },
    placeholders: {
      email: "john.doe@example.com",
      firstname: "존, 방법은 다음과 같습니다",
      lastname: "도",
    },
  },
  pricing: {
    addons: {
      0: {
        name: "추가 웹사이트당",
      },
      1: {
        name: "30분마다 업데이트",
      },
      2: {
        name: "15분마다 업데이트",
      },
      3: {
        name: "5분마다 업데이트",
      },
      4: {
        name: "1분 업데이트",
      },
    },
    addonstitle: "추가 기능:",
    basetitle: "기본 패키지: 월 $79.99",
    button: "지금 시작하기",
    footernote:
      "모든 요금제에는 무제한 검색 설정과 간편한 구독 관리가 포함되어 있습니다.",
    includedfeatures: {
      0: "웹사이트 모니터링 1개",
      1: "매시간 업데이트",
      2: "무제한 필터",
      3: "텔레그램 알림",
    },
    includedtitle: "포함 내역",
    subtitle:
      "AMIQUUS의 가격은 고객님의 개별적인 필요에 따라 책정됩니다. 기본 패키지로 시작하여 원하는 대로 맞춤 설정하세요.",
    title: "간단하고 투명한 요금제",
  },
  privacy: {
    lastupdated: "최종 업데이트: 2025년 5월 21일",
    metaDescription:
      "AMIQUUS가 여러분의 개인정보, 프라이버시 권리, 데이터 수집 방식을 어떻게 처리하는지 알아보세요.",
    metaTitle: "개인정보처리방침 | Amiquus",
    sections: {
      0: {
        heading: "소개",
        id: "소개",
        paragraphs: {
          0: "Amiquus에 오신 것을 환영합니다. 저희는 여러분의 개인정보를 소중히 여기며 보호하기 위해 최선을 다하고 있습니다. 이 개인정보 처리방침은 여러분이 저희 웹사이트를 방문하실 때 개인정보가 어떻게 관리되는지, 그리고 여러분의 개인정보 권리와 법적으로 어떻게 보호받는지 안내해드립니다.",
        },
      },
      1: {
        heading: "수집하는 정보",
        id: "수집하는-정보",
        list: {
          0: "개인 정보: 이메일 주소, 이름, 성, 그리고 프로필 사진(제3자 인증을 통해 제공된 경우)",
          1: "계정 정보: 로그인 자격 증명 및 계정 설정",
          2: "이용 데이터: 웹사이트 및 서비스 이용 방식에 대한 정보",
          3: "차량 검색 설정: 모니터링할 차량 기준(브랜드, 모델, 가격대 등)을 지정하세요.",
          4: "텔레그램 정보: 텔레그램을 통해 알림을 받기로 선택하시면, 저희는 회원님의 텔레그램 채팅 ID와 봇 토큰을 저장합니다.",
          5: "결제 정보: 구매 시 결제 대행사가 거래 처리에 필요한 결제 정보를 수집합니다. AMIQUUS는 전체 신용카드 정보를 저장하지 않습니다.",
        },
        paragraphs: {
          0: "저희는 다양한 목적을 위해 여러 종류의 정보를 수집하여 AMIQUUS 서비스를 제공하고 개선합니다:",
        },
      },
      2: {
        heading: "저희가 회원님의 데이터를 활용하는 방법",
        id: "데이터-이용-방법",
        list: {
          0: "저희 서비스를 제공하고 유지하기 위해",
          1: "서비스 변경 사항을 안내해 드리기 위해",
          2: "당사 서비스의 인터랙티브 기능에 참여할 수 있도록 하기 위해",
          3: "고객 지원 제공",
          4: "서비스 개선을 위해 분석 또는 유용한 정보를 수집합니다.",
          5: "서비스 이용 현황을 모니터링하기 위해",
          6: "기술적 문제를 감지하고 예방하며 해결하기 위해",
          7: "결제 처리 및 부정 거래 방지",
          8: "회원님의 선호에 맞는 차량 매물을 선택한 알림 방법으로 보내드리기 위해",
        },
        paragraphs: {
          0: "귀하의 개인정보는 다음과 같은 목적으로 사용됩니다:",
        },
      },
      3: {
        heading: "데이터 저장 및 보안",
        id: "데이터 저장",
        paragraphs: {
          0: "저희는 귀하의 개인정보가 무단 접근, 변경, 공개 또는 파기로부터 안전하게 보호될 수 있도록 적절한 보안 조치를 시행합니다. 모든 데이터는 전송 중이거나 저장 중에도 암호화된 안전한 서버에 보관됩니다.",
          1: "저희는 이 개인정보 처리방침에 명시된 목적을 달성하기 위해 필요한 기간 동안만 귀하의 개인정보를 보유하며, 법적, 규제적, 세무, 회계 또는 보고 요건을 충족하기 위한 목적도 포함됩니다.",
        },
      },
      4: {
        heading: "귀하의 GDPR 권리",
        id: "개인정보 보호법",
        list: {
          0: "귀하에 대해 저희가 보유한 정보에 대한 열람, 수정 또는 삭제 요청 권리",
          1: "정정권",
          2: "이의 제기 권리",
          3: "제한 권리",
          4: "데이터 이동권",
          5: "동의 철회 권리",
        },
        paragraphs: {
          0: "유럽 경제 지역(EEA) 거주자이신 경우, 특정 데이터 보호 권리가 있습니다. AMIQUUS는 회원님의 개인정보를 수정, 변경, 삭제 또는 사용 제한할 수 있도록 합리적인 조치를 취하고자 합니다.",
          1: "다음과 같은 개인정보 보호 권리가 있습니다:",
        },
      },
      5: {
        heading: "쿠키 정책",
        id: "쿠키",
        list: {
          0: "로그인 상태 유지",
          1: "당신이 우리 웹사이트를 어떻게 이용하는지 이해하기",
          2: "내 설정 기억하기",
          3: "나만의 경험으로 맞춤 설정하기",
        },
        paragraphs: {
          0: "쿠키는 사용자의 기기에 저장되는 작은 데이터 조각입니다. 저희는 쿠키를 다음과 같은 목적으로 사용합니다:",
        },
      },
      6: {
        heading: "타사 서비스",
        id: "제3자",
        list: {
          0: "결제 프로세서 (Stripe)",
          1: "분석 제공업체",
          2: "고객 지원 서비스",
          3: "호스팅 및 클라우드 인프라 제공업체",
        },
        paragraphs: {
          0: "저희는 서비스 제공을 원활하게 하고, 저희를 대신하여 서비스를 제공하거나, 서비스 관련 업무를 수행하거나, 서비스 이용 방식을 분석하는 데 도움을 주기 위해 제3자 회사 및 개인을 고용할 수 있습니다.",
          1: "다음 제3자가 포함됩니다:",
        },
        paragraphs2: {
          0: "이러한 제3자는 오직 저희를 대신하여 해당 업무를 수행하기 위해서만 귀하의 개인정보에 접근할 수 있으며, 다른 목적으로 이를 공개하거나 사용하는 것이 금지되어 있습니다.",
        },
      },
      7: {
        heading: "개인정보처리방침 변경사항",
        id: "변경사항",
        paragraphs: {
          0: "저희는 개인정보 처리방침을 수시로 업데이트할 수 있습니다. 변경 사항이 있을 경우, 이 페이지에 새로운 개인정보 처리방침을 게시하고 ‘최종 업데이트’ 날짜를 수정하여 안내해 드립니다.",
          1: "개인정보 처리방침의 변경 사항을 확인하기 위해 주기적으로 이 정책을 검토하실 것을 권장합니다. 이 개인정보 처리방침의 변경 사항은 이 페이지에 게시되는 즉시 효력이 발생합니다.",
        },
      },
      8: {
        heading: "문의하기",
        id: "문의",
        list: {
          0: "이메일: privacy@amiquus.com",
          1: "저희 웹사이트의 문의 페이지를 방문하시면",
        },
        paragraphs: {
          0: "이 개인정보 처리방침에 대해 궁금한 점이 있으시면 언제든지 문의해 주세요:",
        },
      },
    },
    title: "개인정보처리방침",
  },
  profile: {
    account: {
      cancel: "취소",
      desc: "계정 정보와 환경설정을 업데이트하세요.",
      email: "이메일",
      name: "이름",
      save: "변경사항 저장",
      title: "계정 설정",
      username: "사용자 이름",
    },
    alerts: {
      add: "새 알림 추가",
      cta: "첫 알림을 만들어보세요",
      desc: "자동차 검색 알림 및 알림 설정을 관리하세요.",
      none: "활성화된 차량 알림이 없습니다.",
      title: "자동차 알림 구독",
      warning:
        "⚠️ 구독 변경 사항은 다음 결제 주기에 성공적으로 결제가 완료된 후 적용됩니다. 결제에 실패할 경우, 현재 알림 설정은 변경되지 않습니다.",
    },
    logout: {
      desc: "정말 로그아웃하시겠습니까?",
      success: "성공적으로 로그아웃되었습니다.",
      title: "로그아웃",
    },
    payments: {
      desc: "구독 결제를 위한 결제 수단을 관리하세요.",
      encrypted: "결제 정보는 암호화되어 안전하게 저장됩니다.",
      none: "저장된 결제 수단이 없습니다.",
      title: "결제 방법",
    },
    security: {
      confirm: "새 비밀번호 확인",
      current: "현재 비밀번호",
      desc: "보안 설정과 개인정보 보호 환경설정을 관리하세요.",
      new: "새 비밀번호",
      title: "개인정보 및 보안",
      update: "비밀번호 변경",
    },
    sidebar: {
      account: "계정 설정",
      logout: "로그아웃",
      membersince: "가입일",
      methods: "결제 방법",
      privacy: "개인정보 및 보안",
      subscriptions: "구독",
    },
    tabs: {
      alerts: "내 알림",
      payments: "결제 방법",
    },
  },
  register: {
    alreadyhave: "이미 계정이 있으신가요?",
    and: "그리고",
    confirmpassword: "비밀번호 확인",
    createbtn: "회원가입",
    description: "회원가입하고 드림카를 추적해보세요",
    email: "이메일",
    firstname: "이름",
    google: "Google로 가입하기",
    lastname: "성씨",
    login: "로그인",
    orcontinue: "또는 다음으로 계속하기",
    password: "비밀번호",
    privacypolicy: "개인정보처리방침",
    termsnotice: "동의합니다",
    termsofservice: "이용약관",
    title: "회원가입",
    toast: {
      failure: {
        desc: "정보를 확인하고 다시 시도해 주세요.",
        title: "회원가입에 실패했습니다",
      },
      invalidusername: {
        desc: "사용자 이름은 영문자와 숫자만 사용할 수 있으며, 3자에서 20자 사이여야 합니다.",
        title: "유효하지 않은 사용자 이름",
      },
      missingfields: {
        desc: "모든 필수 항목을 입력해 주세요.",
        title: "누락된 항목",
      },
      passwordmismatch: {
        desc: "비밀번호가 일치하는지 확인해주세요.",
        title: "비밀번호가 일치하지 않습니다",
      },
      success: {
        desc: "Amiquus에 오신 것을 환영합니다! 이메일 주소 인증을 위해 곧 이동됩니다.",
        title: "회원가입이 완료되었습니다",
      },
      termsnotaccepted: {
        desc: "계속하려면 약관 및 개인정보 처리방침에 동의해야 합니다.",
        title: "약관이 동의되지 않았습니다",
      },
    },
    username: "사용자 이름",
  },
  review: {
    actions: {
      previous: "이전",
      submit: "결제하기",
    },
    description: "결제 진행 전에 구독 정보를 확인해 주세요.",
    monitoring: {
      facebookurl: "페이스북 URL",
      title: "모니터링 설정",
      updatefrequency: "업데이트 빈도",
      websites: "웹사이트",
    },
    notification: {
      language: "알림 언어",
      telegram: "텔레그램 봇",
      title: "알림 설정",
    },
    personal: {
      email: "이메일",
      name: "이름",
      title: "개인정보",
    },
    specs: {
      brand: "브랜드",
      fueltype: "연료 종류",
      mileage: "주행 가능 거리 (km)",
      model: "모델",
      price: "가격대 (€)",
      title: "자동차 제원",
      yearrange: "연도 범위",
    },
    summary: {
      base: "기본 구독",
      extrawebsites: "추가 웹사이트",
      frequencyupgrade: "주파수 업그레이드",
      title: "구독 요약",
      total: "총액(월별)",
    },
    terms: {
      checkbox: "동의합니다",
      error: "약관에 동의하셔야 합니다.",
      note: "구독은 매달 자동으로 갱신됩니다. 언제든지 취소하실 수 있습니다.",
      privacy: "개인정보처리방침",
      tos: "이용약관",
    },
    title: "구독 내역 확인",
  },
  setupAlerts: {
    basetitle: "월 79.99달러",
    basicplan: "기본 요금제",
    button: "내 자동차 알림 서비스 시작하기",
    cancel: "언제든지 취소 가능",
    subtitle: "텔레그램 봇을 설정하여 원하는 드림카 알림을 받아보세요",
    title: "내 차량 알림 설정",
    toasts: {
      contactbot: {
        description:
          "자동차 알림을 받으려면 Telegram 봇과 채팅을 시작하고 메시지를 보내야 합니다. 아래 안내를 따라 봇에게 연락해 주세요.",
        title: "연락용 봇 필요",
      },
      error: {
        title: "구독 생성 중 오류가 발생했습니다",
      },
      success: {
        description: "구독이 성공적으로 생성되었습니다.",
        title: "구독이 생성되었습니다",
      },
      terms: {
        description: "서비스 약관에 동의하셔야 계속 진행할 수 있습니다.",
        title: "약관이 동의되지 않았습니다",
      },
    },
  },
  signUp: {
    cta: "지금 알림 받기",
    heading: "내 차량 알림 만들기",
    subheading: "몇 단계만에 맞춤형 자동차 매물 알림을 설정하세요.",
    toast: {
      error: {
        description: "구독을 생성할 수 없습니다. 잠시 후 다시 시도해 주세요.",
        title: "구독에 실패했습니다",
      },
      success: {
        description: "구독이 성공적으로 생성되었습니다",
        title: "구독이 생성되었습니다",
      },
    },
    waitlist: {
      cta: "웨이팅리스트 신청",
      message:
        "현재 정원이 모두 찼습니다. 자리가 나면 안내해드릴 수 있도록 대기자 명단에 등록해 주세요.",
    },
  },
  subscription: {
    actions: {
      back: "뒤로",
      save: "변경사항 저장",
    },
    description:
      "언제든지 구독을 일시 중지할 수 있습니다. 구독을 일시 중지하면 차량 알림이 중단되며, 다시 시작할 때까지 알림이 제공되지 않습니다.",
    error: "대시보드로 돌아가기",
    form: {
      status: {
        active: "활성",
        label: "상태",
        paused: "일시 중지",
        placeholder: "상태 선택",
      },
    },
    notfound: "구독을 찾을 수 없습니다",
    notfoundsub: "대시보드로 돌아가기",
    subtitle: "아래에서 구독 정보를 수정하세요",
    title: "구독 정보",
    toasts: {
      error: {
        title: "구독 업데이트 중 오류가 발생했습니다",
      },
      priceerror: {
        description:
          "구독을 일시정지하고 가격을 동시에 변경할 수 없습니다. 구독을 일시정지하거나 가격을 변경해야 합니다.",
        title: "구독을 업데이트할 수 없습니다",
      },
      success: {
        description:
          "{{brand}} {{model}}에 대한 구독이 성공적으로 업데이트되었습니다.",
        title: "구독이 업데이트되었습니다",
      },
    },
  },
  support: {
    emailsupport: {
      description: "이메일을 보내주시면 24시간 이내에 답변드리겠습니다.",
      email: "support@amiquus.com 고객센터",
      title: "이메일 지원",
    },
    faqheading: "자주 묻는 질문",
    faqs: {
      cancel: {
        answer:
          '언제든지 내 계정 프로필 페이지에서 구독을 취소할 수 있습니다. "구독" 탭을 클릭하고, 취소하려는 구독을 찾아 "구독 취소" 버튼을 클릭하세요. 현재 결제 기간이 끝날 때까지 서비스가 계속 제공됩니다.',
        question: "구독을 어떻게 취소하나요?",
      },
      facebook: {
        answer:
          "네, 저희는 Facebook Marketplace 모니터링을 지원합니다. 설정하려면 원하는 필터가 적용된 Facebook Marketplace 검색 결과 페이지의 URL을 입력해 주세요. 그러면 저희 시스템이 해당 검색을 실시간으로 모니터링하여 회원님의 조건에 맞는 새로운 상품이 등록될 때 알려드립니다.",
        question: "페이스북 마켓플레이스를 모니터링할 수 있나요?",
      },
      full: {
        answer:
          "고품질 서비스를 유지하기 위해 활성 구독 수를 제한하고 있습니다. 모든 자리가 꽉 찬 경우, 대기자 명단에 등록하실 수 있습니다. 자리가 마련되는 즉시 안내해 드리며, 일반 공개 전에 우선적으로 이용하실 수 있습니다.",
        question: "모든 구독 슬롯이 꽉 차면 어떻게 되나요?",
      },
      telegram: {
        intro: "텔레그램 알림을 설정하려면 다음 단계를 따라주세요:",
        outro:
          "추가 도움이 필요하시면, 자세한 가이드는 대시보드에서 확인하실 수 있습니다.",
        question: "텔레그램 알림은 어떻게 설정하나요?",
        steps: {
          0: "BotFather를 사용하여 텔레그램 봇 만들기 (자세한 안내는 대시보드에서 확인하세요)",
          1: "API 토큰과 채팅 ID를 복사하세요",
          2: '계정 설정의 "알림 환경설정"에서 이 정보를 입력하세요',
          3: '"테스트 메시지 보내기" 버튼을 눌러 연결을 확인하세요.',
        },
      },
      updates: {
        answer:
          "업데이트 빈도는 가입하신 요금제에 따라 다릅니다. 베이직 요금제는 6시간마다 업데이트가 제공되며, 프리미엄 요금제는 최대 30분마다 업데이트를 받을 수 있습니다. 현재 업데이트 빈도는 구독 설정에서 확인하고 변경하실 수 있습니다.",
        question: "자동차 매물 정보는 얼마나 자주 업데이트되나요?",
      },
    },
    metaDescription:
      "AMIQUUS 계정, 구독 또는 차량 알림에 대한 도움을 받아보세요. 도움말 센터를 찾아보거나 지원팀에 문의해 주세요.",
    metaTitle: "고객지원 | Amiquus - 도움말 센터",
    stillneedhelp: {
      button: "고객 지원 문의",
      description:
        "궁금하신 점에 대한 답변을 찾지 못하셨다면, 언제든지 AMIQUUS 고객지원팀에 문의해 주세요. 항상 도와드릴 준비가 되어 있습니다!",
      heading: "아직 도움이 필요하신가요?",
    },
    subtitle: "자주 묻는 질문을 확인하거나 지원팀에 문의하세요",
    title: "고객센터",
  },
  telegram: {
    actions: {
      continue: "계속",
      previous: "이전",
    },
    bottokenexample: "예시: 5432109876:ABCDefGhIJklMNoPqrSTuvWXyz1234567890",
    bottokenlabel: "텔레그램 봇 토큰",
    bottokenplaceholder: "BotFather에서 발급받은 봇 토큰을 입력하세요",
    caralerttitle: "🚗 신차 소식!",
    chatiddescription:
      "텔레그램에서 @userinfobot에게 메시지를 보내면 확인할 수 있습니다.",
    chatidlabel: "당신의 텔레그램 채팅 ID",
    chatidplaceholder: "텔레그램 채팅 ID를 입력하세요",
    chatidsteps: {
      0: '텔레그램을 열고 "userinfobot"을 검색하세요',
      1: "봇에게 아무 메시지나 보내보세요",
      2: "봇이 회원님의 정보와 Chat ID를 포함하여 답변해 드립니다.",
      3: "채팅 ID 복사",
    },
    chatidtitle: "텔레그램 채팅 ID 확인 방법:",
    confirmcontact: "봇과 채팅을 시작하고 메시지를 보냈습니다",
    contact: "문의하기",
    contactbotinstruction:
      "아래 링크를 클릭하고 Telegram 봇에게 메시지를 보내 대화를 시작하세요:",
    contactbotnote:
      "차량 알림을 받으려면 필수입니다. 데스크탑을 사용 중이라면 QR 코드를 스캔하실 수 있습니다.",
    description: "텔레그램 알림을 설정하려면 봇 토큰과 채팅 ID를 입력하세요.",
    errors: {
      chatid: "텔레그램 채팅 ID는 필수입니다",
      language: "알림 언어는 필수입니다.",
      token: "텔레그램 봇 토큰이 필요합니다",
      username: "텔레그램 사용자 이름은 필수입니다",
    },
    examples: {
      chatid: "텔레그램에서 @userinfobot에게 메시지를 보내면 받을 수 있습니다.",
      token: "예시: 5432109876:ABCDefGhIJklMNoPqrSTuvWXyz1234567890",
    },
    heading: "텔레그램 설정",
    helpdescription: "아래 영상을 보며 단계별 안내를 확인하세요.",
    helptitle: "Telegram Bot 토큰과 Chat ID 설정이 필요하신가요?",
    info: "텔레그램 봇 생성에 문제가 있으시면 저희에게 문의해 주세요. 직접 전화드려 도와드리겠습니다.",
    instructions: {
      botstep1: "텔레그램을 열고 @BotFather를 검색하세요",
      botstep2: "/newbot 명령어를 보내세요",
      botstep3: "봇을 만들려면 안내를 따라주세요",
      botstep4: "BotFather가 제공한 토큰을 복사하세요",
      bottitle: "텔레그램 봇 토큰 받는 방법:",
      chatstep1: "텔레그램을 열고 @userinfobot을 검색하세요",
      chatstep2: "봇에게 아무 메시지나 보내세요",
      chatstep3: "봇이 회원님의 정보와 Chat ID를 포함해 답변해 드립니다.",
      chatstep4: "채팅 ID를 복사하세요 (숫자입니다)",
      chattitle: "텔레그램 채팅 ID 확인 방법:",
    },
    kilometreslabel: "킬로미터: {{kms}}",
    labels: {
      chatid: "텔레그램 채팅 ID",
      language: "알림 언어",
      token: "텔레그램 봇 토큰",
      username: "텔레그램 사용자 이름",
    },
    languagelabel: "알림 언어",
    languageplaceholder: "텔레그램 메시지 언어 선택",
    languages: {
      de: "독일어",
      en: "영어",
      es: "한국어",
      fr: "프랑스어",
      it: "이탈리아어",
    },
    locationlabel: "위치: {{location}}",
    placeholders: {
      chatid: "텔레그램 채팅 ID를 입력하세요",
      language: "텔레그램 메시지 언어 선택",
      token: "BotFather에서 받은 봇 토큰을 입력하세요",
      username: "텔레그램 사용자 이름을 입력하세요",
    },
    previewtitle: "텔레그램 알림 미리보기",
    pricelabel: "가격: {{price}}",
    setupsteps: {
      0: '텔레그램을 열고 "BotFather"를 검색하세요',
      1: 'BotFather와 채팅을 시작하려면 "Start"를 클릭하세요.',
      2: "/newbot을 입력하고 안내에 따라 새 봇을 만들어보세요.",
      3: "봇의 이름을 선택하세요",
      4: "봇의 사용자 이름을 선택하세요 ('bot'으로 끝나야 합니다)",
      5: "BotFather가 제공한 API 토큰을 복사하세요.",
      6: "새로운 봇에게 메시지를 보내 채팅을 시작하세요",
    },
    setuptitle: "설치 안내",
    subheading: "텔레그램 봇 설정하기",
    usernamedescription:
      "이것은 당신의 Telegram 계정 사용자 이름입니다 (@ 기호 없이 입력하세요).",
    videodescription: "아래 영상을 보시고 단계별 안내를 따라주세요.",
    videoprompt: "Telegram Bot 토큰과 Chat ID 설정이 필요하신가요?",
    viewlisting: "리스트 보기 →",
  },
  terms: {
    lastupdated: "최종 업데이트: 2025년 5월 21일",
    metaDescription:
      "AMIQUUS 서비스 약관을 읽고 차량 매물 모니터링 및 알림 서비스 이용에 관한 내용을 확인하세요.",
    metaTitle: "이용약관 | Amiquus",
    sections: {
      1: {
        heading: "이용약관 동의",
        id: "동의",
        paragraphs: {
          0: "이 서비스 약관은 귀하와 AMIQUUS 간에 체결되는 법적 구속력이 있는 계약으로, 귀하의 당사 웹사이트 및 서비스 접근과 이용에 관한 내용을 포함합니다.",
          1: "당사 서비스를 이용하거나 접근함으로써 귀하는 본 약관에 동의하게 됩니다. 약관의 일부라도 동의하지 않으시면 서비스를 이용하실 수 없습니다.",
        },
      },
      10: {
        heading: "면책 조항",
        id: "면책 조항",
        paragraphs: {
          0: "서비스 이용은 전적으로 회원님의 책임입니다. 본 서비스는 `있는 그대로` 및 `제공 가능한 범위 내에서` 제공됩니다. 본 서비스는 명시적이거나 묵시적인 어떠한 보증도 제공하지 않습니다.",
          1: "AMIQUUS는 서비스가 중단 없이 제공되거나, 적시에, 안전하게, 오류 없이 운영된다는 보장이나, 서비스 이용을 통해 얻는 결과가 정확하거나 신뢰할 수 있다는 보장을 하지 않습니다.",
        },
      },
      11: {
        heading: "쿠키 정책",
        id: "쿠키",
        paragraphs: {
          0: "저희 쿠키 정책은 쿠키가 무엇인지, 저희가 쿠키를 어떻게 사용하는지, 저희와 제휴할 수 있는 제3자가 저희 서비스에서 쿠키를 어떻게 사용할 수 있는지, 쿠키에 대한 귀하의 선택 사항, 그리고 쿠키에 대한 추가 정보를 설명합니다. 자세한 내용은 개인정보처리방침의 쿠키 섹션을 참고해 주세요.",
        },
      },
      12: {
        heading: "준거법",
        id: "준거법",
        paragraphs: {
          0: "본 약관은 미국 법률을 준거법으로 하여 해석 및 적용되며, 법률 충돌 원칙은 적용되지 않습니다.",
          1: "저희가 본 약관의 권리나 조항을 집행하지 않더라도 해당 권리를 포기한 것으로 간주되지 않습니다. 만약 법원이 본 약관의 어떤 조항을 무효이거나 집행 불가능하다고 판단하더라도, 나머지 조항들은 계속 유효하게 적용됩니다.",
        },
      },
      13: {
        heading: "문의하기",
        id: "문의",
        list: {
          0: "이메일: legal@amiquus.com",
          1: "저희 웹사이트의 문의 페이지를 방문하시면",
        },
        paragraphs: {
          0: "이 약관에 대해 궁금한 점이 있으시면 언제든지 문의해 주세요.",
        },
      },
      2: {
        heading: "이용약관 변경",
        id: "변경사항",
        paragraphs: {
          0: "당사는 단독 재량으로 언제든지 본 약관을 수정하거나 교체할 권리를 보유합니다. 변경 내용이 중대한 경우, 새로운 약관이 적용되기 최소 30일 전에 합리적인 방법으로 사전 안내를 드리겠습니다.",
          1: "해당 변경 사항이 적용된 이후에도 계속해서 저희 서비스를 이용하시면, 수정된 약관에 동의하시는 것으로 간주됩니다. 새로운 약관에 동의하지 않으시면 서비스 이용을 중단해 주시기 바랍니다.",
        },
      },
      3: {
        heading: "계정 약관",
        id: "계정",
        list: {
          0: "만 18세 이상이어야 합니다",
          1: "회원가입을 완료하세요",
          2: "정확하고 완전하며 최신 정보를 제공하세요",
          3: "계정과 비밀번호 보안 유지를 직접 책임지세요",
          4: "귀하의 계정에서 발생하는 모든 활동에 대해 책임을 지셔야 합니다.",
          5: "보안 위반이나 계정의 무단 사용 사실을 알게 되면 즉시 저희에게 알려주세요.",
        },
        paragraphs: {
          0: "저희 서비스를 이용하시려면:",
        },
      },
      4: {
        heading: "결제 조건",
        id: "결제",
        list: {
          0: "모든 요금은 세금이 별도이며, 해당되는 경우 추가로 부과됩니다.",
          1: "구독 요금은 30일 사전 안내 후 변경될 수 있습니다.",
          2: "구독은 다음 결제 주기 전에 취소하지 않으면 자동으로 갱신됩니다.",
          3: "환불은 당사의 환불 정책에 따라 개별적으로 처리됩니다.",
          4: "저희는 Stripe를 통해 안전하게 결제 처리를 하며, 모든 결제 정보는 Stripe에 안전하게 저장됩니다.",
        },
        paragraphs: {
          0: "Amiquus는 다음과 같은 조건으로 구독 기반 서비스를 제공합니다:",
        },
      },
      5: {
        heading: "수용 인원 제한",
        id: "수용 인원",
        list: {
          0: "새로운 사용자는 대기자 명단에 등록할 수 있습니다.",
          1: "대기자 순서는 선착순으로 결정됩니다.",
          2: "수용 인원이 늘어나면 대기자 명단에 따라 순서대로 안내해 드립니다.",
          3: "저희는 언제든지 수용 인원 제한을 변경할 권리를 보유합니다.",
        },
        paragraphs: {
          0: "서비스 품질과 신뢰성을 유지하기 위해 AMIQUUS는 활성 구독 수를 30개로 제한합니다. 이 한도에 도달하면:",
        },
      },
      6: {
        heading: "웹 스크래핑 제한사항",
        id: "데이터 수집",
        list: {
          0: "Amiquus는 저희가 모니터링하는 웹사이트의 이용 약관을 존중합니다.",
          1: "저희는 요청 속도 제한과 예의 있는 크롤링 방식을 적용합니다.",
          2: "일부 웹사이트의 이용 가능 여부는 해당 사이트의 정책 및 기술적 조치에 따라 달라질 수 있습니다.",
          3: "수집된 데이터의 완전성이나 최신성에 대해 AMIQUUS는 어떠한 보장도 하지 않습니다.",
        },
        paragraphs: {
          0: "저희 서비스는 여러 자동차 매물 웹사이트의 데이터를 수집하고 처리합니다. 서비스를 이용하실 경우, 다음 사항에 동의하시는 것으로 간주됩니다:",
        },
      },
      7: {
        heading: "지적 재산권",
        id: "지적",
        paragraphs: {
          0: "AMIQUUS 서비스는 원본 콘텐츠, 기능 및 기능성을 포함하여 AMIQUUS의 독점적 자산이며 앞으로도 계속 AMIQUUS의 소유로 남아 있습니다. 본 서비스는 미국 및 해외의 저작권, 상표권, 기타 관련 법률에 의해 보호받고 있습니다.",
          1: "AMIQUUS의 상표 및 트레이드 드레스는 사전 서면 동의 없이 어떠한 제품이나 서비스와도 함께 사용할 수 없습니다.",
        },
      },
      8: {
        heading: "해지",
        id: "해지",
        paragraphs: {
          0: "회원님이 약관을 위반하는 등 어떠한 이유로든, 사전 통지나 책임 없이 즉시 계정을 종료하거나 일시 중지할 수 있습니다.",
          1: "서비스 이용이 종료되면 회원님의 서비스 이용 권한은 즉시 사라집니다. 계정 해지를 원하실 경우, 서비스를 더 이상 이용하지 않으시거나 계정 삭제를 요청하려면 저희에게 문의해 주세요.",
        },
      },
      9: {
        heading: "책임의 한계",
        id: "제한사항",
        list: {
          0: "서비스에 대한 귀하의 접근 또는 이용, 혹은 접근 또는 이용 불가",
          1: "서비스에서 제3자의 모든 행위 또는 콘텐츠",
          2: "서비스에서 얻은 모든 콘텐츠",
          3: "귀하의 전송 또는 콘텐츠에 대한 무단 접근, 사용 또는 변경",
        },
        paragraphs: {
          0: "어떠한 경우에도 AMIQUUS 및 그 이사, 직원, 파트너, 대리인, 공급업체 또는 계열사는 이익, 데이터, 사용, 신용 또는 기타 무형의 손실을 포함하되 이에 국한되지 않는 간접적, 우발적, 특별, 결과적 또는 징벌적 손해에 대해 책임을 지지 않습니다.",
        },
      },
    },
    title: "이용약관",
  },
  verifyEmail: {
    codelabel: "인증 코드",
    description: "인증 코드가 이메일로 발송되었습니다.",
    footernote: "코드를 받지 못하셨나요? 스팸 메일함을 확인해보세요.",
    resendbutton: "인증 코드 다시 보내기",
    resendcountdown: "{{seconds}}초 후에 코드를 다시 보낼 수 있습니다.",
    title: "이메일을 인증하세요",
    toast: {
      emailupdated: "이메일이 업데이트되었습니다",
      entervalidemail: "유효한 이메일 주소를 입력해 주세요.",
      error: "오류",
      failed: "인증에 실패했습니다",
      invalidemail: "유효하지 않은 이메일",
      resent: "인증 코드가 다시 전송되었습니다",
      sameemail: "같은 이메일",
      sameemaildesc: "새 이메일이 현재 이메일과 동일합니다.",
      verified: "이메일 인증 완료",
    },
    updateemailbutton: "이메일 업데이트",
    updateemaillabel: "이메일 업데이트",
    verifybutton: "이메일 인증",
  },
  waitlist: {
    cantjoin: {
      description: "구독 자리가 생기는 즉시 알려드리겠습니다.",
      title: "웨이팅 리스트에 등록하기",
    },
    form: {
      email: {
        description: "입장 가능 시 이 이메일로 안내해 드릴 예정입니다.",
        label: "이메일",
        placeholder: "john.doe@example.com",
      },
      firstname: {
        label: "이름",
        placeholder: "존, 방법은 이렇습니다",
      },
      lastname: {
        label: "성",
        placeholder: "도",
      },
      submit: "웨이팅리스트 신청",
      submitting: "제출 중...",
    },
    limited: {
      available:
        "현재 {{capacity}}개 중 {{remaining}}개의 구독 자리가 남아 있습니다.",
      description:
        "저희 시스템은 30명의 활성 구독자로 제한하여 다음을 보장합니다:",
      full: "현재 모든 구독 자리가 마감되었습니다. 자리가 생기면 알림을 받으시려면 대기자 명단에 등록해 주세요.",
      heading: "한정 수량",
      points: {
        0: "모든 사용자를 위한 뛰어난 스크래핑 신뢰성과 속도",
        1: "자동차 매물 사이트에서 차단될 가능성 감소",
        2: "각 구독자 맞춤 지원",
        3: "서버 자원의 공정한 분배",
      },
    },
    metaDescription:
      "AMIQUUS 대기자 명단에 등록하시면 구독 서비스가 출시될 때 안내해드립니다.",
    metaTitle: "웨이팅리스트 신청 - Amiquus",
    subtitle:
      "높은 수요로 인해 모든 이용자에게 최상의 서비스 품질을 제공하기 위해 활성 구독 수를 제한하고 있습니다.",
    success: {
      button: "홈페이지로 돌아가기",
      description: "구독 자리가 생기는 즉시 알려드리겠습니다.",
      message:
        "Amiquus에 관심 가져주셔서 감사합니다! 대기자 명단에 등록되었으며, 자리가 나면 바로 연락드리겠습니다.",
      title: "웨이팅리스트에 등록되셨습니다!",
    },
    title: "웨이팅리스트에 등록하기",
  },
  waitlistPrompt: {
    button: "웨이팅리스트 신청",
    description:
      "현재 정원이 모두 찼습니다. 자리가 생기면 알림을 받으시려면 대기자 명단에 등록해 주세요.",
    title: "웨이팅리스트 신청",
  },
  websiteSelection: {
    actions: {
      continue: "계속",
      previous: "이전",
    },
    description: "모니터링할 웹사이트와 업데이트를 받을 빈도를 선택하세요.",
    errors: {
      facebookurl:
        "Facebook이 선택된 경우 Facebook Marketplace URL을 반드시 입력해야 합니다.",
      websites: "최소한 하나의 웹사이트를 선택해야 합니다.",
    },
    heading: "웹사이트 선택",
    help: {
      facebookurl:
        "여기에 Facebook 마켓플레이스 검색 결과의 URL을 붙여넣어 주세요.",
      updatefrequency:
        "새로운 매물은 얼마나 자주 확인할까요? 더 자주 확인하면 비용이 더 많이 들 수 있습니다.",
      videodesc: "아래 영상을 보시고 단계별 안내를 따라주세요.",
      videotitle: "Facebook 마켓플레이스 검색 링크 찾는 방법이 필요하신가요?",
      websites:
        "자동차 매물 모니터링을 위해 하나 이상의 웹사이트를 선택하세요.",
    },
    labels: {
      facebookurl: "Facebook 마켓플레이스 URL",
      updatefrequency: "업데이트 빈도",
      websites: "모니터링할 웹사이트",
    },
    placeholders: {
      frequency: "빈도 선택",
    },
  },
};

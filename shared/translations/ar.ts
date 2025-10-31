export const ar = {
  navigations: {
    features: "المميزات",
    how: "كيف يعمل",
    pricing: "التسعير",
    getAlerts: "احصل على التنبيهات",
    waitlist: "قائمة الانتظار",
    faq: "الأسئلة الشائعة",
    login: "تسجيل الدخول",
    getStarted: "ابدأ الآن",
    subscribers: "المشتركون",
    theme: "السمة",
    language: "اللغة",
    myAlerts: "تنبيهاتي",
    profile: "الملف الشخصي",
    settings: "الإعدادات",
    logout: "تسجيل الخروج",
    signUp: "التسجيل"
  },
  hero: {
    label: "Track used car listings in real-time",
    title: "Never Miss Your Perfect Car Deal Again",
    subtitle: "Amiquus alerts you instantly when your dream car becomes available across multiple car listing websites. Get notifications via Telegram the moment a match is found.",
    button1: "Set Up Your Alerts",
    button2: "See How It Works",
    trustIndicators: {
      websites: "تتم مراقبة أكثر من 15 موقعًا",
      realtime: "تنبيهات فورية",
      noSetup: "لا يتطلب إعداداً",
      cancelAnytime: "الإلغاء في أي وقت"
    }
  },
  limited: {
    full: {
      title: "Subscription Limit Reached",
      description: "We've reached our capacity of 30 active subscribers. Join our waitlist to be notified when a spot opens up.",
      buttonText: "Join Waitlist"
    },
    limited: {
      title: "Limited Availability",
      description: "Only {{remaining}} slots remaining out of {{capacity}}. Subscribe now before we reach capacity!",
      buttonText: "Get Started Now"
    },
    available: {
      title: "Subscriptions Available",
      description: "{{active}} of {{capacity}} subscriptions are currently active. Plenty of room for you to join!",
      buttonText: "Get Started Now"
    }
  },
  features: {
    heading: "Why Choose Amiquus?",
    subheading: "Save time and never miss out on your perfect car with our automated tracking service.",
    multiSite: {
      title: "تتبع متعدد المواقع",
      description: "راقب عدة مواقع لإعلانات السيارات في وقت واحد دون الحاجة للتحقق من كل منها يدويًا."
    },
    notifications: {
      title: "Instant Notifications",
      description: "Receive immediate alerts via Telegram when a car matching your criteria is listed for sale."
    },
    filters: {
      title: "Custom Filters",
      description: "Set precise criteria including brand, model, year, mileage, and price range to find exactly what you want."
    },
    frequency: {
      title: "Customizable Frequency",
      description: "Choose how often we check for new listings, from hourly updates to real-time monitoring."
    },
    languages: {
      title: "دعم لغات متعددة",
      description: "تلقَّ الإشعارات بلغتك المفضلة لفهم الإعلانات بشكل أسهل."
    },
    account: {
      title: "Easy Account Management",
      description: "Manage multiple search profiles and modify your subscription settings with a few clicks."
    }
  },
  howItWorks: {
    title: "How Amiquus Works",
    subtitle: "Set up once and let our automated system find the perfect car deal for you",
    whyTitle: "Why Choose Amiquus?",
    steps: {
      preferences: {
        title: "Set Your Preferences",
        description: "Select car brands, models, price range, and other criteria you're interested in monitoring."
      },
      telegram: {
        title: "Connect Telegram",
        description: "Link your Telegram account to receive instant notifications about new listings."
      },
      notifications: {
        title: "Get Instant Notifications",
        description: "Receive alerts the moment a car matching your criteria appears on any of our monitored websites."
      },
      findCar: {
        title: "اعثر على سيارتك المثالية",
        description: "Be the first to know about new listings and secure the best deals before anyone else."
      }
    },
    features: [

      "Track over 15 car listing websites simultaneously",

      "Customizable search criteria with advanced filtering",

      "Real-time notifications via Telegram",

      "Automatic price drop and new listing alerts",

      "Easy setup process that takes less than 5 minutes"

    ],
    setAlerts: "Set Up Your Alerts",
    notificationMockup1: {
      title: "New Match Found!",
      description: "BMW 3 Series, 2019, $32,500 - Just listed on AutoTrader"
    },
    notificationMockup2: {
      title: "Telegram Alert",
      description: "Mercedes C-Class, 2020, 30,000 miles - Price dropped by $2,000"
    }
  },
  pricing: {
    title: "Simple, Transparent Pricing",
    subtitle: "Our pricing is based on your specific needs. Start with a base package and customize it to fit your requirements.",
    baseTitle: "Base Package: $9.99/month",
    includedTitle: "What's Included:",
    includedFeatures: [

      "One website monitoring",

      "Hourly updates",

      "Unlimited filters",

      "Telegram notifications"

    ],
    addonsTitle: "Add-ons:",
    addons: [

      "[object Object]",

      "[object Object]",

      "[object Object]",

      "[object Object]",

      "[object Object]"

    ],
    footerNote: "All plans include unlimited search configurations and easy subscription management.",
    button: "Get Started Now"
  },
  signup: {
    heading: "Create Your Car Alert",
    subheading: "Set up your personalized car listing notifications in just a few steps.",
    cta: "Get Alerts Now",
    waitlist: {
      message: "We are currently at full capacity. Please join our waitlist to be notified when a spot opens up.",
      cta: "Join Waitlist"
    },
    toast: {
      success: {
        title: "Subscription created",
        description: "Your subscription has been created successfully"
      },
      error: {
        title: "Subscription failed",
        description: "We couldn't create your subscription. Please try again later."
      }
    }
  },
  payment: {
    toast: {
      success: {
        title: "Success",
        description: "Your payment method has been successfully set up."
      },
      error: {
        title: "Error",
        fallback: "An unexpected error occurred. Please try again."
      }
    },
    button: {
      submit: "Set up payment method",
      processing: "Processing..."
    }
  },
  alertSchema: {
    errors: {
      carBrand: "Car brand is required",
      carModel: "Car model is required",
      fuelType: "Fuel type is required",
      priceMin: "Minimum price must be a number",
      priceMax: "Maximum price must be a number",
      yearMin: "Minimum year must be a valid year",
      yearMax: "Maximum year must be a valid year",
      maxKilometers: "Max kilometers must be a number",
      telegramUsername: "Telegram username is required",
      telegramToken: "Telegram bot token is required",
      telegramChatId: "Telegram chat ID is required",
      websitesSelected: "At least one website must be selected",
      notificationLanguage: "Notification language is required",
      facebookMarketplaceUrl: "Facebook Marketplace URL is required when Facebook is selected"
    }
  },
  personalInfo: {
    heading: "Personal Information",
    description: "Please provide your personal details so we can set up your notifications correctly.",
    labels: {
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address"
    },
    placeholders: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com"
    },
    errors: {
      firstName: "First name is required",
      lastName: "Last name is required",
      email: "Please enter a valid email"
    },
    actions: {
      login: "Login or Sign Up to Continue",
      continue: "Continue"
    }
  },
  websiteSelection: {
    heading: "Website Selection",
    description: "Choose which websites you want to monitor and how frequently you want updates.",
    labels: {
      websites: "Websites to monitor",
      facebookUrl: "Facebook Marketplace URL",
      updateFrequency: "Update Frequency"
    },
    placeholders: {
      frequency: "Select frequency"
    },
    help: {
      websites: "Select one or more websites to monitor for car listings.",
      facebookUrl: "Paste the URL of your Facebook Marketplace search results here.",
      videoTitle: "Need help finding your Facebook Marketplace search link?",
      videoDesc: "Watch the video below for step-by-step instructions.",
      updateFrequency: "How often should we check for new listings? Higher frequencies may cost more."
    },
    errors: {
      websites: "At least one website must be selected",
      facebookUrl: "Facebook Marketplace URL is required when Facebook is selected"
    },
    actions: {
      previous: "Previous",
      continue: "Continue"
    }
  },
  carDetails: {
    heading: "Car Details",
    description: "Specify the car details you are looking for. All fields are optional - leave any blank to get a wider range of results.",
    labels: {
      carBrand: "Car Brand",
      carModel: "Car Model",
      fuelType: "Fuel Type",
      priceMin: "Minimum Price",
      priceMax: "Maximum Price",
      yearMin: "Minimum Year",
      yearMax: "Maximum Year",
      maxKilometers: "Max Kilometers"
    },
    placeholders: {
      carBrand: "Select Car Brand",
      carModel: "Select Car Model",
      carModelDisabled: "Select Car Brand First",
      fuelType: "Select Fuel Type",
      priceMin: "Enter minimum price",
      priceMax: "Enter maximum price",
      yearMin: "Enter minimum year",
      yearMax: "Enter maximum year",
      maxKilometers: "Enter maximum kilometers"
    },
    options: {
      noModelsAvailable: "No Models Available"
    },
    errors: {
      carBrand: "Car brand is required",
      carModel: "Car model is required",
      fuelType: "Fuel type is required",
      priceMin: "Minimum price must be a number",
      priceMax: "Maximum price must be a number",
      yearMin: "Minimum year must be a valid year",
      yearMax: "Maximum year must be a valid year",
      maxKilometers: "Max kilometers must be a number"
    },
    actions: {
      previous: "Previous",
      continue: "Continue"
    }
  },
  telegram: {
    heading: "Telegram Setup",
    description: "Set up Telegram notifications by providing your bot token and chat ID.",
    subHeading: "Set Up Your Telegram Bot",
    info: "If you have issues creating the telegram bot, contact us and we will call you and help you create one.",
    contact: "Contact Us",
    instructions: {
      botTitle: "How to get a Telegram Bot Token:",
      botStep1: "Open Telegram and search for @BotFather",
      botStep2: "Send the command /newbot",
      botStep3: "Follow the instructions to create a bot",
      botStep4: "Copy the token provided by BotFather",
      chatTitle: "How to get your Telegram Chat ID:",
      chatStep1: "Open Telegram and search for @userinfobot",
      chatStep2: "Send any message to the bot",
      chatStep3: "The bot will reply with your information including your Chat ID",
      chatStep4: "Copy the Chat ID (it's a number)"
    },
    videoPrompt: "Need help setting up your Telegram Bot Token and Chat ID?",
    videoDescription: "Watch the video below for a step-by-step guide.",
    labels: {
      token: "Telegram Bot Token",
      chatId: "Your Telegram Chat ID",
      language: "Notification Language",
      username: "Telegram Username"
    },
    placeholders: {
      token: "Enter your bot token from BotFather",
      chatId: "Enter your Telegram chat ID",
      language: "Select Telegram Message Language",
      username: "Enter your Telegram username"
    },
    usernameDescription: "This is the username on your Telegram account (without the @ symbol).",
    examples: {
      token: "Example: 5432109876:ABCDefGhIJklMNoPqrSTuvWXyz1234567890",
      chatId: "You can get this by messaging @userinfobot on Telegram"
    },
    setupTitle: "Setup Instructions:",
    setupSteps: [

      "Open Telegram and search for \\\\\\\"BotFather\\\\\\\"",

      "Start a chat with BotFather by clicking \\\\\\\"Start\\\\\\\"",

      "Type /newbot and follow the instructions to create a new bot",

      "Choose a name for your bot",

      "Choose a username for your bot (must end in 'bot')",

      "Copy the API token provided by BotFather",

      "Send a message to your new bot to activate the chat"

    ],
    chatIdTitle: "How to get your Telegram Chat ID:",
    chatIdSteps: [

      "Open Telegram and search for \\\\\\\"userinfobot\\\\\\\"",

      "Send any message to the bot",

      "The bot will reply with your information including your Chat ID",

      "Copy your Chat ID"

    ],
    helpTitle: "Need help setting up your Telegram Bot Token and Chat ID?",
    helpDescription: "Watch the video below for a step-by-step guide.",
    botTokenLabel: "Telegram Bot Token",
    botTokenPlaceholder: "Enter your bot token from BotFather",
    botTokenExample: "Example: 5432109876:ABCDefGhIJklMNoPqrSTuvWXyz1234567890",
    chatIdLabel: "Your Telegram Chat ID",
    chatIdPlaceholder: "Enter your Telegram chat ID",
    chatIdDescription: "You can get this by messaging @userinfobot on Telegram",
    languageLabel: "Notification Language",
    languagePlaceholder: "Select Telegram Message Language",
    languages: {
      en: "English",
      de: "Deutsch",
      fr: "Français",
      es: "Español",
      it: "Italiano"
    },
    previewTitle: "Preview Telegram Notifications",
    carAlertTitle: "🚗 New Car Alert!",
    priceLabel: "Price: {{price}}",
    kilometresLabel: "Kilometres: {{kms}}",
    locationLabel: "Location: {{location}}",
    viewListing: "View Listing →",
    errors: {
      token: "Telegram bot token is required",
      chatId: "Telegram chat ID is required",
      language: "Notification language is required",
      username: "Telegram username is required"
    },
    actions: {
      previous: "Previous",
      continue: "Continue"
    },
    contactBotInstruction: "Start a chat with our Telegram bot by clicking the link below and sending it a message:",
    contactBotNote: "This is required to receive car alerts. You can scan the QR code if you're on desktop.",
    confirmContact: "I have started a chat with the bot and sent a message"
  },
  review: {
    title: "Review Your Subscription",
    description: "Please review your subscription details before proceeding to payment.",
    personal: {
      title: "Personal Information",
      name: "Name",
      email: "Email"
    },
    monitoring: {
      title: "Monitoring Settings",
      websites: "Websites",
      facebookUrl: "Facebook URL",
      updateFrequency: "Update Frequency"
    },
    specs: {
      title: "Car Specifications",
      brand: "Brand",
      model: "Model",
      fuelType: "Fuel Type",
      yearRange: "Year Range",
      mileage: "Mileage Range (km)",
      price: "Price Range (€)"
    },
    notification: {
      title: "Notification Settings",
      telegram: "Telegram Bot",
      language: "Notification Language"
    },
    summary: {
      title: "Subscription Summary",
      base: "Base Subscription",
      extraWebsites: "Additional Websites",
      frequencyUpgrade: "Frequency Upgrade",
      total: "Total (Monthly)"
    },
    terms: {
      checkbox: "I agree to the",
      tos: "Terms of Service",
      privacy: "Privacy Policy",
      note: "Your subscription will renew automatically each month. You can cancel anytime.",
      error: "You must agree to the terms and conditions"
    },
    actions: {
      previous: "Previous",
      submit: "Proceed to Payment"
    }
  },
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Find answers to the most common questions about our service.",
    contactPrompt: "Still have questions?",
    contactLink: "Contact our support team",
    questions: [

      "[object Object]",

      "[object Object]",

      "[object Object]",

      "[object Object]",

      "[object Object]",

      "[object Object]"

    ]
  },
  footer: {
    brandTitle: "Amiquus",
    brandDescription: "Your personal assistant for finding the perfect used car deal at the perfect time.",
    quickLinks: "Quick Links",
    features: "Features",
    pricing: "Pricing",
    faq: "FAQ",
    getStarted: "Get Started",
    legal: "Legal",
    terms: "Terms of Service",
    privacy: "Privacy Policy",
    cookies: "Cookie Policy",
    gdpr: "GDPR Compliance",
    contact: "Contact",
    email: "support@amiquus.com",
    telegram: "Contact us on Telegram",
    copyright: "All rights reserved.",
    about: "About Us",
    blog: "Blog",
    careers: "Careers",
    support: "Support"
  },
  login: {
    title: "Log in to your account",
    description: "Enter your email and password to access your dashboard",
    emailLabel: "Email",
    passwordLabel: "Password",
    loginButton: "Log in",
    loggingIn: "Logging in...",
    loginWithGoogle: "Log in with Google",
    or: "or",
    noAccount: "Don't have an account?",
    registerLink: "Register",
    successTitle: "Login successful",
    successMessage: "You have been logged in successfully.",
    errorTitle: "Login failed",
    genericError: "Please check your credentials and try again.",
    errors: {
      invalidEmail: "Please enter a valid email address",
      shortPassword: "Password must be at least 6 characters"
    }
  },
  register: {
    title: "Create an account",
    description: "Sign up to start tracking your dream car",
    google: "Sign up with Google",
    orContinue: "Or continue with",
    firstName: "First Name",
    lastName: "Last Name",
    username: "Username",
    email: "Email",
    password: "Password",
    confirmPassword: "Confirm Password",
    termsNotice: "I agree to the",
    termsOfService: "Terms of Service",
    privacyPolicy: "Privacy Policy",
    createBtn: "Create account",
    alreadyHave: "Already have an account?",
    login: "Log in",
    and: "and",
    toast: {
      missingFields: {
        title: "Missing fields",
        desc: "Please fill in all required fields"
      },
      invalidUsername: {
        title: "Invalid username",
        desc: "Username must be alphanumeric and between 3 and 20 characters"
      },
      passwordMismatch: {
        title: "Passwords don't match",
        desc: "Please make sure your passwords match"
      },
      termsNotAccepted: {
        title: "Terms not accepted",
        desc: "You must accept the terms and privacy policy to continue"
      },
      success: {
        title: "Registration successful",
        desc: "Welcome to Amiquus! You will be redirected to verify your email address."
      },
      failure: {
        title: "Registration failed",
        desc: "Please check your information and try again"
      }
    }
  },
  verifyEmail: {
    title: "Verify Your Email",
    description: "A verification code has been sent to your email.",
    codeLabel: "Verification Code",
    verifyButton: "Verify Email",
    updateEmailLabel: "Update Email",
    updateEmailButton: "Update Email",
    resendButton: "Resend Code",
    resendCountdown: "You can resend the code in {{seconds}}s",
    footerNote: "Didn’t receive the code? Check your spam folder.",
    toast: {
      verified: "Email verified",
      failed: "Verification failed",
      resent: "Verification code resent",
      error: "Error",
      invalidEmail: "Invalid email",
      enterValidEmail: "Please enter a valid email address",
      sameEmail: "Same email",
      sameEmailDesc: "The new email is the same as the current email",
      emailUpdated: "Email updated"
    }
  },
  dashboardPayment: {
    add: "Add Payment Method",
    description: "Add a new credit or debit card for your subscription payments.",
    processing: "Processing...",
    errorTitle: "Error adding payment method",
    errorMessage: "An unexpected error occurred",
    initError: {
      title: "Error",
      description: "Unable to initialize payment setup"
    }
  },
  dashboard: {
    subscriptionCard: {
      years: "Years",
      priceRange: "Price",
      websites: "Websites",
      updates: "Updates",
      language: "Language",
      price: "Price",
      edit: "Edit",
      cancelAlert: "Cancel Alert",
      cancelTitle: "Cancel Car Alert",
      cancelDescription: "Are you sure you want to cancel your car alert for {{brand}} {{model}}? This will stop all notifications and you'll need to set up a new alert if you want to monitor this car again.",
      keepMyAlert: "Keep My Alert",
      confirmCancel: "Cancel Alert"
    },
    paymentMethodCard: {
      expires: "Expires",
      default: "Default",
      setAsDefault: "Set as Default",
      remove: "Remove",
      setDefaultTitle: "Set Default Payment Method",
      setDefaultDescription: "Would you like to set the {{brand}} card ending in {{last4}} as your default payment method? This card will be used for all future subscription payments.",
      removeTitle: "Remove Payment Method",
      removeDescription: "Are you sure you want to remove your {{brand}} card ending in {{last4}}?",
      removeWarning: "This is your default payment method and removing it may affect your active subscriptions.",
      cancel: "Cancel",
      confirmRemove: "Remove Card"
    }
  },
  profile: {
    tabs: {
      alerts: "My Alerts",
      payments: "Payment Methods"
    },
    sidebar: {
      memberSince: "Member since",
      subscriptions: "Subscriptions",
      methods: "Payment methods",
      account: "Account settings",
      privacy: "Privacy & security",
      logout: "Log out"
    },
    account: {
      title: "Account Settings",
      desc: "Update your account information and preferences.",
      name: "Name",
      email: "Email",
      username: "Username",
      cancel: "Cancel",
      save: "Save Changes"
    },
    security: {
      title: "Privacy & Security",
      desc: "Manage your security settings and privacy preferences.",
      current: "Current Password",
      new: "New Password",
      confirm: "Confirm New Password",
      update: "Update Password"
    },
    logout: {
      title: "Log Out",
      desc: "Are you sure you want to log out of your account?",
      success: "You have been successfully logged out."
    },
    alerts: {
      title: "Car Alert Subscriptions",
      desc: "Manage your car search alerts and notification preferences.",
      add: "Add New Alert",
      none: "You don't have any active car alerts.",
      cta: "Create your first alert",
      warning: "⚠️ Changes to your subscription will be applied in the next billing period, and only after a successful payment. If the payment fails, your current alert setup will remain unchanged."
    },
    payments: {
      title: "Payment Methods",
      desc: "Manage your payment methods for subscription billing.",
      none: "You don't have any payment methods saved.",
      encrypted: "Your payment information is encrypted and securely stored."
    }
  },
  setupAlerts: {
    title: "Set Up Your Car Alerts",
    subtitle: " Configure your Telegram bot to receive notifications about your dream car",
    basicPlan: "Basic Plan",
    baseTitle: "$9.99/month",
    button: "Start My Car Alert Service",
    cancel: "الإلغاء في أي وقت",
    toasts: {
      terms: {
        title: "Terms not accepted",
        description: "You must agree to the terms of service to continue"
      },
      success: {
        title: "Subscription created",
        description: "Your subscription has been created successfully"
      },
      error: {
        title: "Error creating subscription"
      },
      contactBot: {
        title: "Contact Bot Required",
        description: "You must start a chat with our Telegram bot and send a message to receive car alerts. Please follow the instructions below to contact the bot."
      }
    }
  },
  loginPrompt: {
    title: "Login Required",
    description: "You must be logged in to continue. Please log in or register.",
    register: "Register",
    login: "Login"
  },
  waitlistPrompt: {
    title: "Join the Waitlist",
    description: "We're currently at full capacity. Join the waitlist to be notified when a slot becomes available.",
    button: "Join Waitlist"
  },
  subscription: {
    title: "Subscription Details",
    subTitle: "Edit your subscription details below",
    error: "Go back to dashboard",
    notFound: "Subscription not found",
    notFoundSub: "Go back to dashboard",
    description: "You can pause your subscription at any time. When you pause your subscription, your car alerts will stop until you resume them.",
    form: {
      status: {
        label: "Status",
        placeholder: "Select Status",
        active: "Active",
        paused: "Paused"
      }
    },
    actions: {
      save: "Save Changes",
      back: "Back"
    },
    toasts: {
      success: {
        title: "Subscription Updated",
        description: "Your subscription for {{brand}} {{model}} has been updated successfully"
      },
      priceError: {
        title: "Cannot Update Subscription",
        description: "You pause and update your subscription price at the same time. You either need to pause or update the price."
      },
      error: {
        title: "Error updating subscription"
      }
    }
  },
  about: {
    title: "About Amiquus",
    description: "We're revolutionizing how people find their perfect used car by bringing advanced monitoring technology to everyone",
    meta: {
      title: "About Us | Amiquus - Car Listing Monitoring Service",
      description: "Learn about Amiquus, our mission to revolutionize used car shopping, and the team behind our intelligent car listing monitoring service."
    },
    story: {
      heading: "Our Story",
      paragraphs: [

        "Amiquus began in 2023 when our founder, Alex, spent months refreshing car listing websites trying to find a specific rare model at a good price. After missing several opportunities due to delayed notifications, he realized there had to be a better way.",

        "Working with a small team of developers and car enthusiasts, Alex built a monitoring system that could track listings across multiple sites simultaneously and send instant notifications when matches appeared.",

        "What started as a personal project quickly gained interest from friends and family, and by early 2025, Amiquus was born as a service available to everyone. Today, we help car buyers across the country save time and find better deals with our intelligent monitoring technology."

      ]
    },
    mission: {
      heading: "Our Mission",
      items: [

        "[object Object]",

        "[object Object]",

        "[object Object]"

      ]
    },
    team: {
      heading: "Our Team",
      members: [

        "[object Object]",

        "[object Object]",

        "[object Object]",

        "[object Object]"

      ]
    },
    join: {
      heading: "Join Our Team",
      description: "We're always looking for talented individuals who are passionate about technology and revolutionizing the car buying experience. Check out our current openings and join us on our mission.",
      cta: "View Open Positions"
    },
    questions: {
      heading: "Have Questions?",
      description: "Learn more about how our service works, view pricing options, or get in touch with our support team.",
      links: {
        faq: "Visit FAQ",
        pricing: "View Pricing",
        support: "Contact Support"
      }
    }
  },
  terms: {
    metaTitle: "Terms of Service | Amiquus",
    metaDescription: "Read the Amiquus Terms of Service that govern your use of our car listing monitoring and notification service.",
    title: "Terms of Service",
    lastUpdated: "Last updated: May 21, 2025",
    sections: {
      1: {
        id: "agreement",
        heading: "Agreement to Terms",
        paragraphs: [

          "These Terms of Service constitute a legally binding agreement made between you and Amiquus, concerning your access to and use of our website and services.",

          "By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service."

        ],
        list: [
        ]
      },
      2: {
        id: "changes",
        heading: "Changes to Terms",
        paragraphs: [
          "  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect.",
          "By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the service."
        ],
        list: [
        ]
      },
      3: {
        id: "account",
        heading: "Account Terms",
        paragraphs: [
          "To use our services, you must:"
        ],
        list: [

          "Be at least 18 years old",

          "Complete the registration process",

          "Provide accurate, complete, and up-to-date information",

          "Be responsible for maintaining the security of your account and password",

          "Be responsible for all activities that occur under your account",

          "Notify us immediately upon becoming aware of any breach of security or unauthorized use of your account"

        ]
      },
      4: {
        id: "payment",
        heading: "Payment Terms",
        paragraphs: [

          " Amiquus offers subscription-based services with the following terms:"

        ],
        list: [

          "All fees are exclusive of taxes, which will be added when applicable",

          "Subscription prices are subject to change with 30 days' notice",

          "Subscriptions automatically renew unless canceled before the next billing cycle",

          "Refunds are handled on a case-by-case basis according to our refund policy",

          "We use Stripe for secure payment processing, and all payment information is stored by Stripe"

        ]
      },
      5: {
        id: "capacity",
        heading: "Capacity Limits",
        paragraphs: [

          "In order to maintain service quality and reliability, Amiquus limits the number of active subscriptions to 30. When this limit is reached:"

        ],
        list: [

          "New users may join our waitlist",

          "Waitlist position is determined on a first-come, first-served basis",

          "When capacity becomes available, waitlisted users will be notified in order",

          "We reserve the right to modify capacity limits at any time"

        ]
      },
      6: {
        id: "scraping",
        heading: "Web Scraping Limitations",
        paragraphs: [

          "Our service accesses and processes data from multiple car listing websites. By using our service, you acknowledge that:"

        ],
        list: [

          "Amiquus respects the terms of service of the websites we monitor",

          "We implement rate limiting and respectful crawling practices",

          "The availability of certain websites may change based on their terms and technical measures",

          "We make no guarantees regarding the completeness or timeliness of scraped data"

        ]
      },
      7: {
        id: "intellectual",
        heading: "Intellectual Property",
        paragraphs: [

          "The Amiquus service, including its original content, features, and functionality, are and will remain the exclusive property of Amiquus. Our service is protected by copyright, trademark, and other laws of both the United States and foreign countries.",

          "Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Amiquus."

        ],
        list: [
        ]
      },
      8: {
        id: "termination",
        heading: "Termination",
        paragraphs: [
          "   We may terminate or suspend your account immediately, without prior notice or liability, for any reason, including, without limitation, if you breach the Terms.",
          " Upon termination, your right to use the service will immediately cease. If you wish to terminate your account, you may simply discontinue using the service or contact us to request account deletion."
        ],
        list: [
        ]
      },
      9: {
        id: "limitations",
        heading: "Limitation of Liability",
        paragraphs: [
          "In no event shall Amiquus, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:"
        ],
        list: [

          "Your access to or use of or inability to access or use the service",

          "Any conduct or content of any third party on the service",

          "Any content obtained from the service",

          "Unauthorized access, use, or alteration of your transmissions or content"

        ]
      },
      10: {
        id: "disclaimer",
        heading: "Disclaimer",
        paragraphs: [

          " Your use of the service is at your sole risk. The service is provided on an `AS IS` and `AS AVAILABLE` basis. The service is provided without warranties of any kind, whether express or implied.",

          "Amiquus does not warrant that the service will be uninterrupted, timely, secure, or error-free, or that the results that may be obtained from the use of the service will be accurate or reliable."

        ],
        list: [
        ]
      },
      11: {
        id: "cookies",
        heading: "Cookies Policy",
        paragraphs: [
          "Our Cookies Policy explains what cookies are, how we use cookies, how third parties we may partner with may use cookies on our service, your choices regarding cookies, and further information about cookies. Please refer to the Cookies section in our Privacy Policy."
        ],
        list: [
        ]
      },
      12: {
        id: "governing-law",
        heading: "Governing Law",
        paragraphs: [
          "    These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.",
          " Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect."
        ],
        list: [
        ]
      },
      13: {
        id: "contact",
        heading: "Contact Us",
        paragraphs: [
          "  If you have any questions about these Terms, please contact us:"
        ],
        list: [

          "By email: legal@amiquus.com",

          "By visiting the contact page on our website"

        ]
      }
    }
  },
  privacy: {
    metaTitle: "Privacy Policy | Amiquus",
    metaDescription: "Learn about how Amiquus handles your personal data, privacy rights, and data collection practices.",
    title: "Privacy Policy",
    lastUpdated: "Last updated: May 21, 2025",
    sections: {
      0: {
        id: "introduction",
        heading: "Introduction",
        paragraphs: [

          "Welcome to Amiquus. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you."

        ]
      },
      1: {
        id: "data-we-collect",
        heading: "Information We Collect",
        paragraphs: [

          "We collect several different types of information for various purposes to provide and improve our service to you:"

        ],
        list: [

          "Personal Data: Email address, first name, last name, and profile picture (if provided through third-party authentication).",

          "Account Data: Your login credentials and account preferences.",

          "Usage Data: Information on how you use our website and services.",

          "Car Search Preferences: The vehicle criteria you set for monitoring (brand, model, price range, etc.).",

          "Telegram Information: If you choose to receive notifications via Telegram, we store your Telegram chat ID and bot token.",

          "Payment Information: When you make a purchase, our payment processor collects payment details necessary to process your transaction. Amiquus does not store your full credit card information."

        ]
      },
      2: {
        id: "how-we-use-data",
        heading: "How We Use Your Data",
        paragraphs: [

          "We use your personal data for the following purposes:"

        ],
        list: [

          "To provide and maintain our service",

          "To notify you about changes to our service",

          "To allow you to participate in interactive features of our service",

          "To provide customer support",

          "To gather analysis or valuable information so that we can improve our service",

          "To monitor the usage of our service",

          "To detect, prevent and address technical issues",

          "To process payments and prevent fraudulent transactions",

          "To send car listings that match your preferences via your chosen notification method"

        ]
      },
      3: {
        id: "data-storage",
        heading: "Data Storage and Security",
        paragraphs: [

          "We implement appropriate security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. All data is stored on secure servers with encryption in transit and at rest.",

          "We retain your personal data only for as long as necessary for the purposes set out in this privacy policy, including for the purposes of satisfying any legal, regulatory, tax, accounting, or reporting requirements."

        ]
      },
      4: {
        id: "gdpr",
        heading: "Your GDPR Rights",
        paragraphs: [

          "If you are a resident of the European Economic Area (EEA), you have certain data protection rights. Amiquus aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your personal data.",

          "You have the following data protection rights:"

        ],
        list: [

          "The right to access, update or delete the information we have on you",

          "The right of rectification",

          "The right to object",

          "The right of restriction",

          "The right to data portability",

          "The right to withdraw consent"

        ]
      },
      5: {
        id: "cookies",
        heading: "Cookies Policy",
        paragraphs: [

          "Cookies are small pieces of data stored on your device. We use cookies to:"

        ],
        list: [

          "Keep you signed in",

          "Understand how you use our website",

          "Remember your preferences",

          "Customize your experience"

        ]
      },
      6: {
        id: "third-party",
        heading: "Third-Party Services",
        paragraphs: [

          "We may employ third-party companies and individuals to facilitate our service, provide the service on our behalf, perform service-related tasks, or assist us in analyzing how our service is used.",

          "These third parties include:"

        ],
        list: [

          "Payment processors (Stripe)",

          "Analytics providers",

          "Customer support services",

          "Hosting and cloud infrastructure providers"

        ],
        paragraphs2: [

          "These third parties have access to your personal data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose."

        ]
      },
      7: {
        id: "changes",
        heading: "Changes to This Privacy Policy",
        paragraphs: [

          "We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the 'Last updated' date.",

          "You are advised to review this privacy policy periodically for any changes. Changes to this privacy policy are effective when they are posted on this page."

        ]
      },
      8: {
        id: "contact",
        heading: "Contact Us",
        paragraphs: [

          "If you have any questions about this privacy policy, please contact us:"

        ],
        list: [

          "By email: privacy@amiquus.com",

          "By visiting the contact page on our website"

        ]
      }
    }
  },
  faqs: {
    metaTitle: "Frequently Asked Questions | Amiquus",
    metaDescription: "Find answers to the most common questions about Amiquus car listing monitoring service, subscriptions, notification setup, and more.",
    title: "Frequently Asked Questions",
    subtitle: "Find quick answers to common questions about our car listing monitoring service",
    general: {
      heading: "General Questions",
      whatIs: {
        question: "What is Amiquus?",
        answer: "Amiquus is a service that monitors multiple car listing websites for vehicles that match your specific criteria. When a matching listing appears, you receive an instant notification via Telegram, allowing you to be among the first to contact sellers and secure great deals."
      },
      howItWorks: {
        question: "How does it work?",
        answer: [

          "You set up your search criteria (make, model, price range, etc.)",

          "You select which websites to monitor",

          "You connect your Telegram account for notifications",

          "Our system continuously monitors your selected websites for new listings",

          "When a matching car appears, you receive an instant Telegram notification with all details and a direct link"

        ]
      },
      whichWebsites: {
        question: "Which car listing websites do you monitor?",
        answerIntro: "We currently monitor the following major car listing platforms:",
        list: [

          "AutoTrader",

          "Cars.com",

          "CarGurus",

          "TrueCar",

          "Facebook Marketplace (via URL)",

          "Craigslist",

          "eBay Motors"

        ],
        outro: "We're continuously adding more platforms to provide the most comprehensive coverage possible."
      }
    },
    subscription: {
      heading: "Subscription Questions",
      cost: {
        question: "How much does a subscription cost?",
        answer: [

          "Our pricing starts at $9.99 per month for monitoring one website with updates every 6 hours. Additional websites cost $4.99 each per month. You can also upgrade your update frequency for faster notifications.",

          "For specific pricing details, please view our pricing section on the homepage."

        ]
      },
      cancel: {
        question: "How do I cancel my subscription?",
        stepsIntro: "You can cancel your subscription at any time from your account profile page:",
        steps: [

          "Log in to your account",

          "Navigate to the \\\"Profile\\\" page",

          "Select the \\\"Subscriptions\\\" tab",

          "Click the \\\"Cancel Subscription\\\" button next to the subscription you wish to cancel"

        ],
        note: "Your subscription will remain active until the end of your current billing period."
      },
      multiple: {
        question: "Can I have multiple subscriptions for different car models?",
        answer: "Yes, you can create multiple subscriptions under a single account. Each subscription can track different car models, brands, or price ranges. This is particularly useful if you're searching for multiple vehicles or helping friends and family with their car search."
      },
      limit: {
        question: "Why is there a limit on the number of subscribers?",
        intro: "We limit our service to 30 active subscribers to ensure:",
        list: [

          "The highest quality of service and data accuracy",

          "Personalized support for each subscriber",

          "Faster notification delivery during peak listing times",

          "Ethical scraping that doesn't overload the target websites"

        ],
        outro: "If we've reached capacity, you can join our waitlist to be notified when a spot becomes available."
      }
    },
    technical: {
      heading: "Technical Questions",
      telegram: {
        question: "How do I set up Telegram notifications?",
        stepsIntro: "To set up Telegram notifications:",
        steps: [

          "Create a Telegram bot using BotFather (instructions provided during setup)",

          "Copy your bot token from BotFather",

          "Start a conversation with your bot",

          "Get your chat ID (instructions provided during setup)",

          "Enter your bot token and chat ID in your Amiquus subscription settings",

          "Test your notification setup using the `Send Test Message` button"

        ],
        note: "Detailed step-by-step instructions with screenshots are provided during the subscription setup process."
      },
      frequency: {
        question: "How often will I receive notifications?",
        intro: "The frequency of notifications depends on:",
        list: [

          "Your chosen update frequency package (from every 6 hours to every 30 minutes)",

          "How many new listings match your criteria",

          "How active the market is for your selected make/model"

        ],
        outro: "You'll only receive notifications when new listings that match your criteria are found."
      },
      privacy: {
        question: "How is my personal data protected?",
        intro: "We take data privacy seriously and apply these measures:",
        list: [

          "Encrypted data in transit and at rest",

          "Secure payments via Stripe",

          "No third-party data sharing",

          "You can request or delete your data anytime"

        ],
        outro: "Read our full Privacy Policy for more."
      }
    },
    support: {
      heading: "Still have questions?",
      description: "If you couldn't find the answer to your question, our support team is here to help!",
      button: "Contact Support"
    }
  },
  waitlist: {
    metaTitle: "Join the Waitlist - Amiquus",
    metaDescription: "Join the Amiquus waitlist to be notified when subscriptions become available.",
    title: "Join Our Waitlist",
    subtitle: "Due to high demand, we limit the number of active subscriptions to ensure the best service quality for all users.",
    limited: {
      heading: "Limited Availability",
      description: "We limit our system to only 30 active subscribers to ensure:",
      points: [

        "Exceptional scraping reliability and speed for all users",

        "Reduced chances of being blocked by car listing websites",

        "Personalized support for each subscriber",

        "Fair distribution of server resources"

      ],
      available: "{{remaining}} subscription spots out of {{capacity}} currently available.",
      full: "All subscription spots are currently filled. Join the waitlist to be notified when a spot becomes available."
    },
    success: {
      title: "You're on the waitlist!",
      description: "We'll notify you as soon as a subscription spot becomes available",
      message: "Thank you for your interest in Amiquus! We've added you to our waitlist and will contact you as soon as we have an opening.",
      button: "Return to Homepage"
    },
    cantJoin: {
      title: "Join the Waitlist",
      description: " We'll notify you as soon as a subscription spot becomes available"
    },
    form: {
      firstName: {
        label: "First Name",
        placeholder: "John"
      },
      lastName: {
        label: "Last Name",
        placeholder: "Doe"
      },
      email: {
        label: "Email",
        placeholder: "john.doe@example.com",
        description: "We'll use this email to notify you when a spot becomes available"
      },
      submit: "Join Waitlist",
      submitting: "Submitting..."
    }
  },
  support: {
    metaTitle: "Support | Amiquus - Help Center",
    metaDescription: "Get help with your Amiquus account, subscription, or car alerts. Browse our help center or contact our support team for assistance.",
    title: "Support Center",
    subtitle: "Find answers to common questions or get in touch with our support team",
    emailSupport: {
      title: "Email Support",
      description: "Send us an email and we'll get back to you within 24 hours",
      email: "support@amiquus.com"
    },
    faqHeading: "Frequently Asked Questions",
    faqs: {
      telegram: {
        question: "How do I set up Telegram notifications?",
        intro: "To set up Telegram notifications, follow these steps:",
        steps: [

          "Create a Telegram bot using BotFather (instructions in our dashboard)",

          "Copy your API token and chat ID",

          "Enter these details in your account settings under \\\"Notification Preferences\\\"",

          "Test your connection using the \\\"Send Test Message\\\" button"

        ],
        outro: "If you need more help, our detailed guide is available in your dashboard."
      },
      updates: {
        question: "How often are car listings updated?",
        answer: "The update frequency depends on your subscription plan. Basic plans receive updates every 6 hours, while Premium plans can get updates as frequently as every 30 minutes. You can view and modify your current update frequency in your subscription settings."
      },
      facebook: {
        question: "Can I monitor Facebook Marketplace?",
        answer: "Yes, we support Facebook Marketplace monitoring. To set this up, you'll need to provide the URL to the Facebook Marketplace search results page with your desired filters applied. Our system will then monitor that specific search for new listings that match your criteria."
      },
      cancel: {
        question: "How do I cancel my subscription?",
        answer: "You can cancel your subscription at any time from your account profile page. Click on the \"Subscriptions\" tab, locate the subscription you wish to cancel, and click the \"Cancel Subscription\" button. Your service will continue until the end of your current billing period."
      },
      full: {
        question: "What happens if all subscription slots are full?",
        answer: "To maintain our high quality of service, we limit the number of active subscriptions. If all slots are full, you can join our waitlist. We'll notify you as soon as a slot becomes available, and you'll have priority to claim it before we open it to the general public."
      }
    },
    stillNeedHelp: {
      heading: "Still need help?",
      description: "If you couldn't find the answer to your question, feel free to reach out to our support team. We're here to help!",
      button: "Contact Support"
    }
  },
  notFound: {
    title: "404 Page Not Found",
    message: "Did you forget to add the page to the router?"
  },
  emails: {
    verification: {
      subject: "Your Amiquus Email Verification Code",
      greeting: "Hi there,",
      message: "Use the verification code below to complete your sign-up:",
      expiration: "This code will expire in 10 minutes."
    },
    invoice: {
      success: {
        subject: "Your Amiquus Payment Receipt – Invoice #",
        h2Message: "Your Amiquus Subscription Payment Was Successful!",
        greeting: "Hi there,",
        paymentMessage: "We’ve received your payment of",
        downloadMessage: "You can view or download your invoice using the link below:",
        viewInvoice: "View Invoice",
        invoiceNumber: "Invoice #:"
      },
      pending: {
        subjectA: "Payment Pending – Invoice",
        subjectB: "for Your Amiquus Subscription",
        h2Message: "Action Required: Complete Your Payment for Amiquus Subscription",
        greeting: "Hi there,",
        messageA: "Your invoice",
        messageB: "is still unpaid. To activate your subscription, please complete the payment of",
        paymentMessage: "You can securely pay using the link below:",
        payInvoice: "Pay Invoice",
        ignoreEmail: "If you’ve already made this payment, you can ignore this email."
      },
      failed: {
        subject: "Payment Failed – Invoice",
        message: "We were unable to process your recent payment (attempt",
        attemptsA: "We will retry your payment shortly. No action is needed for now.",
        attemptsB: "We attempted to charge your payment method 3 times but all attempts failed.",
        attemptsC: "As a result, your subscription has been <strong>paused</strong>. You won’t receive further updates until you reactivate it.",
        attemptsD: "Please update your payment method and resume your subscription from your profile:",
        viewInvoice: "View Invoice",
        managePayment: "Manage Payment Methods"
      }
    },
    waitlist: {
      subject: "You’re on the Amiquus Waitlist!",
      h2Message: "You're On the List!",
      hi: "Hi",
      message: "Thanks for joining the Amiquus waitlist. We’ll let you know as soon as a spot becomes available.",
      anyQuestions: "If you have any questions, feel free to reply to this email."
    },
    common: {
      thanksMessage: "Thank you for choosing Amiquus!",
      signature: "Best regards,<br/>The Amiquus Team",
      team: "— The Amiquus Team",
      needHelp: "Need help?",
      hello: "Hello"
    }
  }
};

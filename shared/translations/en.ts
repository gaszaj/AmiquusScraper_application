export const en = {
  navigations: {
    features: "Features",
    how: "How It Works",
    pricing: "Pricing",
    getAlerts: "Get Alerts",
    waitlist: "Waitlist",
    faq: "FAQ",
    login: "Log in",
    getStarted: "Get Started",
    subscribers: "Subscribers",
    theme: "Theme",
    language: "Language",
    myAlerts: "My Alerts",
    profile: "Profile",
    settings: "Settings",
    logout: "Logout",
    signUp: "Sign Up",
  },
  hero: {
    label: "Track used car listings in real-time!",
    title: "Never Miss Your Perfect Car Deal Again",
    subtitle:
      "Amiquus alerts you instantly when your dream car becomes available across multiple car listing websites. Get notifications via Telegram the moment a match is found.",
    button1: "Set Up Your Alerts",
    button2: "See How It Works",
    trustIndicators: {
      websites: "15+ websites tracked",
      realtime: "Real-time alerts",
      noSetup: "No setup required",
      cancelAnytime: "Cancel anytime",
    },
  },
  limited: {
    full: {
      title: "Subscription Limit Reached",
      description:
        "We've reached our capacity of 30 active subscribers. Join our waitlist to be notified when a spot opens up.",
      buttonText: "Join Waitlist",
    },
    limited: {
      title: "Limited Availability",
      description:
        "Only {{remaining}} slots remaining out of {{capacity}}. Subscribe now before we reach capacity!",
      buttonText: "Get Started Now",
    },
    available: {
      title: "Subscriptions Available",
      description:
        "{{active}} of {{capacity}} subscriptions are currently active. Plenty of room for you to join!",
      buttonText: "Get Started Now",
    },
  },
  features: {
    heading: "Why Choose Amiquus?",
    subheading:
      "Save time and never miss out on your perfect car with our automated tracking service.",
    multiSite: {
      title: "Multi-Site Tracking",
      description:
        "Monitor multiple car listing websites simultaneously without having to check each one manually.",
    },
    notifications: {
      title: "Instant Notifications",
      description:
        "Receive immediate alerts via Telegram when a car matching your criteria is listed for sale.",
    },
    filters: {
      title: "Custom Filters",
      description:
        "Set precise criteria including brand, model, year, mileage, and price range to find exactly what you want.",
    },
    frequency: {
      title: "Customizable Frequency",
      description:
        "Choose how often we check for new listings, from hourly updates to real-time monitoring.",
    },
    languages: {
      title: "Multiple Language Support",
      description:
        "Receive notifications in your preferred language for easier understanding of listings.",
    },
    account: {
      title: "Easy Account Management",
      description:
        "Manage multiple search profiles and modify your subscription settings with a few clicks.",
    },
  },
  howItWorks: {
    title: "How Amiquus Works",
    subtitle:
      "Set up once and let our automated system find the perfect car deal for you",
    whyTitle: "Why Choose Amiquus?",
    steps: {
      preferences: {
        title: "Set Your Preferences",
        description:
          "Select car brands, models, price range, and other criteria you're interested in monitoring.",
      },
      telegram: {
        title: "Connect Telegram",
        description:
          "Link your Telegram account to receive instant notifications about new listings.",
      },
      notifications: {
        title: "Get Instant Notifications",
        description:
          "Receive alerts the moment a car matching your criteria appears on any of our monitored websites.",
      },
      findCar: {
        title: "Find Your Perfect Car",
        description:
          "Be the first to know about new listings and secure the best deals before anyone else.",
      },
    },
    features: [
      "Track over 15 car listing websites simultaneously",
      "Customizable search criteria with advanced filtering",
      "Real-time notifications via Telegram",
      "Automatic price drop and new listing alerts",
      "Easy setup process that takes less than 5 minutes",
    ],
    setAlerts: "Set Up Your Alerts",
    notificationMockup1: {
      title: "New Match Found!",
      description: "BMW 3 Series, 2019, $32,500 - Just listed on AutoTrader",
    },
    notificationMockup2: {
      title: "Telegram Alert",
      description:
        "Mercedes C-Class, 2020, 30,000 miles - Price dropped by $2,000",
    },
  },
  pricing: {
    title: "Simple, Transparent Pricing",
    subtitle:
      "Our pricing is based on your specific needs. Start with a base package and customize it to fit your requirements.",
    baseTitle: "Base Package: $79.99/month",
    includedTitle: "What's Included:",
    includedFeatures: [
      "One website monitoring",
      "Hourly updates",
      "Unlimited filters",
      "Telegram notifications",
    ],
    addonsTitle: "Add-ons:",
    addons: [
      { name: "Each additional website", price: 4.99 },
      { name: "30-minute updates", price: 2.99 },
      { name: "15-minute updates", price: 5.99 },
      { name: "5-minute updates", price: 9.99 },
      { name: "1-minute updates", price: 14.99 },
    ],
    footerNote:
      "All plans include unlimited search configurations and easy subscription management.",
    button: "Get Started Now",
  },
  signup: {
    heading: "Create Your Car Alert",
    subheading:
      "Set up your personalized car listing notifications in just a few steps.",
    cta: "Get Alerts Now",
    waitlist: {
      message:
        "We are currently at full capacity. Please join our waitlist to be notified when a spot opens up.",
      cta: "Join Waitlist",
    },
    toast: {
      success: {
        title: "Subscription created",
        description: "Your subscription has been created successfully",
      },
      error: {
        title: "Subscription failed",
        description:
          "We couldn't create your subscription. Please try again later.",
      },
    },
  },
  payment: {
    toast: {
      success: {
        title: "Success",
        description: "Your payment method has been successfully set up.",
      },
      error: {
        title: "Error",
        fallback: "An unexpected error occurred. Please try again.",
      },
    },
    button: {
      submit: "Set up payment method",
      processing: "Processing...",
    },
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
      facebookMarketplaceUrl:
        "Facebook Marketplace URL is required when Facebook is selected",
    },
  },
  personalInfo: {
    heading: "Personal Information",
    description:
      "Please provide your personal details so we can set up your notifications correctly.",
    labels: {
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
    },
    placeholders: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
    },
    errors: {
      firstName: "First name is required",
      lastName: "Last name is required",
      email: "Please enter a valid email",
    },
    actions: {
      login: "Login or Sign Up to Continue",
      continue: "Continue",
    },
  },
  websiteSelection: {
    heading: "Website Selection",
    description:
      "Choose which websites you want to monitor and how frequently you want updates.",
    labels: {
      websites: "Websites to monitor",
      facebookUrl: "Facebook Marketplace URL",
      updateFrequency: "Update Frequency",
    },
    placeholders: {
      frequency: "Select frequency",
    },
    help: {
      websites: "Select one or more websites to monitor for car listings.",
      facebookUrl:
        "Paste the URL of your Facebook Marketplace search results here.",
      videoTitle: "Need help finding your Facebook Marketplace search link?",
      videoDesc: "Watch the video below for step-by-step instructions.",
      updateFrequency:
        "How often should we check for new listings? Higher frequencies may cost more.",
    },
    errors: {
      websites: "At least one website must be selected",
      facebookUrl:
        "Facebook Marketplace URL is required when Facebook is selected",
    },
    actions: {
      previous: "Previous",
      continue: "Continue",
    },
  },
  carDetails: {
    heading: "Car Details",
    description:
      "Specify the car details you are looking for. All fields are optional - leave any blank to get a wider range of results.",
    labels: {
      carBrand: "Car Brand",
      carModel: "Car Model",
      fuelType: "Fuel Type",
      priceMin: "Minimum Price",
      priceMax: "Maximum Price",
      yearMin: "Minimum Year",
      yearMax: "Maximum Year",
      maxKilometers: "Max Kilometers",
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
      maxKilometers: "Enter maximum kilometers",
    },
    options: {
      noModelsAvailable: "No Models Available",
    },
    errors: {
      carBrand: "Car brand is required",
      carModel: "Car model is required",
      fuelType: "Fuel type is required",
      priceMin: "Minimum price must be a number",
      priceMax: "Maximum price must be a number",
      yearMin: "Minimum year must be a valid year",
      yearMax: "Maximum year must be a valid year",
      maxKilometers: "Max kilometers must be a number",
    },
    actions: {
      previous: "Previous",
      continue: "Continue",
    },
  },
  telegram: {
    heading: "Telegram Setup",
    description:
      "Set up Telegram notifications by providing your bot token and chat ID.",
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
      chatStep3:
        "The bot will reply with your information including your Chat ID",
      chatStep4: "Copy the Chat ID (it's a number)",
    },

    videoPrompt: "Need help setting up your Telegram Bot Token and Chat ID?",
    videoDescription: "Watch the video below for a step-by-step guide.",

    labels: {
      token: "Telegram Bot Token",
      chatId: "Your Telegram Chat ID",
      language: "Notification Language",
      username: "Telegram Username",
    },

    placeholders: {
      token: "Enter your bot token from BotFather",
      chatId: "Enter your Telegram chat ID",
      language: "Select Telegram Message Language",
      username: "Enter your Telegram username",
    },
    usernameDescription:
      "This is the username on your Telegram account (without the @ symbol).",
    examples: {
      token: "Example: 5432109876:ABCDefGhIJklMNoPqrSTuvWXyz1234567890",
      chatId: "You can get this by messaging @userinfobot on Telegram",
    },
    setupTitle: "Setup Instructions:",
    setupSteps: [
      'Open Telegram and search for "BotFather"',
      'Start a chat with BotFather by clicking "Start"',
      "Type /newbot and follow the instructions to create a new bot",
      "Choose a name for your bot",
      "Choose a username for your bot (must end in 'bot')",
      "Copy the API token provided by BotFather",
      "Send a message to your new bot to activate the chat",
    ],
    chatIdTitle: "How to get your Telegram Chat ID:",
    chatIdSteps: [
      'Open Telegram and search for "userinfobot"',
      "Send any message to the bot",
      "The bot will reply with your information including your Chat ID",
      "Copy your Chat ID",
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
      it: "Italiano",
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
      username: "Telegram username is required",
    },

    actions: {
      previous: "Previous",
      continue: "Continue",
    },
    contactBotInstruction:
      "Start a chat with our Telegram bot by clicking the link below and sending it a message:",
    contactBotNote:
      "This is required to receive car alerts. You can scan the QR code if you're on desktop.",
    confirmContact: "I have started a chat with the bot and sent a message",
  },
  review: {
    title: "Review Your Subscription",
    description:
      "Please review your subscription details before proceeding to payment.",

    personal: {
      title: "Personal Information",
      name: "Name",
      email: "Email",
    },

    monitoring: {
      title: "Monitoring Settings",
      websites: "Websites",
      facebookUrl: "Facebook URL",
      updateFrequency: "Update Frequency",
    },

    specs: {
      title: "Car Specifications",
      brand: "Brand",
      model: "Model",
      fuelType: "Fuel Type",
      yearRange: "Year Range",
      mileage: "Mileage Range (km)",
      price: "Price Range (€)",
    },

    notification: {
      title: "Notification Settings",
      telegram: "Telegram Bot",
      language: "Notification Language",
    },

    summary: {
      title: "Subscription Summary",
      base: "Base Subscription",
      extraWebsites: "Additional Websites",
      frequencyUpgrade: "Frequency Upgrade",
      total: "Total (Monthly)",
    },

    terms: {
      checkbox: "I agree to the",
      tos: "Terms of Service",
      privacy: "Privacy Policy",
      note: "Your subscription will renew automatically each month. You can cancel anytime.",
      error: "You must agree to the terms and conditions",
    },

    actions: {
      previous: "Previous",
      submit: "Proceed to Payment",
    },
  },
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Find answers to the most common questions about our service.",
    contactPrompt: "Still have questions?",
    contactLink: "Contact our support team",
    questions: [
      {
        question:
          "How quickly will I receive notifications after a new listing is posted?",
        answer:
          "The notification speed depends on your chosen update frequency. With the default hourly plan, you'll receive notifications within an hour of a new listing being posted. For near real-time notifications (within minutes of posting), you can upgrade to our more frequent update plans.",
      },
      {
        question: "Can I track multiple different types of cars at once?",
        answer:
          "Yes! You can create multiple search profiles with different criteria. Each profile counts as a separate subscription, but you can manage them all from a single account. This is perfect if you're looking for different types of vehicles simultaneously.",
      },
      {
        question: "What websites do you currently support?",
        answer:
          "We currently support major car listing platforms including AutoTrader, CarGurus, Cars.com, and Facebook Marketplace. We're constantly expanding our coverage to include more websites based on user demand and regional popularity.",
      },
      {
        question: "Do I need technical knowledge to use the Telegram bot?",
        answer:
          "Not at all! We provide step-by-step instructions with both text and video guides to help you set up the Telegram bot. Most users complete the setup in less than 5 minutes, even without any technical background.",
      },
      {
        question:
          "Can I change my search criteria after setting up my subscription?",
        answer:
          "Yes, you can modify your search criteria at any time from your account dashboard. Changes take effect immediately, and your notifications will update accordingly without any interruption to your service.",
      },
      {
        question: "How do I cancel my subscription?",
        answer:
          'You can cancel your subscription at any time from your account dashboard. Go to the "Subscriptions" section, select the subscription you wish to cancel, and click the "Cancel Subscription" button. Your service will continue until the end of your current billing period.',
      },
    ],
  },
  footer: {
    brandTitle: "Amiquus",
    brandDescription:
      "Your personal assistant for finding the perfect used car deal at the perfect time.",
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
    support: "Support",
    refund: "Refund Policy",
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
      shortPassword: "Password must be at least 6 characters",
    },
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
        desc: "Please fill in all required fields",
      },
      invalidUsername: {
        title: "Invalid username",
        desc: "Username must be alphanumeric and between 3 and 20 characters",
      },
      passwordMismatch: {
        title: "Passwords don't match",
        desc: "Please make sure your passwords match",
      },
      termsNotAccepted: {
        title: "Terms not accepted",
        desc: "You must accept the terms and privacy policy to continue",
      },
      success: {
        title: "Registration successful",
        desc: "Welcome to Amiquus! You will be redirected to verify your email address.",
      },
      failure: {
        title: "Registration failed",
        desc: "Please check your information and try again",
      },
    },
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
      emailUpdated: "Email updated",
    },
  },
  dashboardPayment: {
    add: "Add Payment Method",
    description:
      "Add a new credit or debit card for your subscription payments.",
    processing: "Processing...",
    errorTitle: "Error adding payment method",
    errorMessage: "An unexpected error occurred",
    initError: {
      title: "Error",
      description: "Unable to initialize payment setup",
    },
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
      cancelDescription:
        "Are you sure you want to cancel your car alert for {{brand}} {{model}}? This will stop all notifications and you'll need to set up a new alert if you want to monitor this car again.",
      keepMyAlert: "Keep My Alert",
      confirmCancel: "Cancel Alert",
    },
    paymentMethodCard: {
      expires: "Expires",
      default: "Default",
      setAsDefault: "Set as Default",
      remove: "Remove",
      setDefaultTitle: "Set Default Payment Method",
      setDefaultDescription:
        "Would you like to set the {{brand}} card ending in {{last4}} as your default payment method? This card will be used for all future subscription payments.",
      removeTitle: "Remove Payment Method",
      removeDescription:
        "Are you sure you want to remove your {{brand}} card ending in {{last4}}?",
      removeWarning:
        "This is your default payment method and removing it may affect your active subscriptions.",
      cancel: "Cancel",
      confirmRemove: "Remove Card",
    },
  },
  profile: {
    tabs: {
      alerts: "My Alerts",
      payments: "Payment Methods",
    },
    sidebar: {
      memberSince: "Member since",
      subscriptions: "Subscriptions",
      methods: "Payment methods",
      account: "Account settings",
      privacy: "Privacy & security",
      logout: "Log out",
    },
    account: {
      title: "Account Settings",
      desc: "Update your account information and preferences.",
      name: "Name",
      email: "Email",
      username: "Username",
      cancel: "Cancel",
      save: "Save Changes",
    },
    security: {
      title: "Privacy & Security",
      desc: "Manage your security settings and privacy preferences.",
      current: "Current Password",
      new: "New Password",
      confirm: "Confirm New Password",
      update: "Update Password",
    },
    logout: {
      title: "Log Out",
      desc: "Are you sure you want to log out of your account?",
      success: "You have been successfully logged out.",
    },
    alerts: {
      title: "Car Alert Subscriptions",
      desc: "Manage your car search alerts and notification preferences.",
      add: "Add New Alert",
      none: "You don't have any active car alerts.",
      cta: "Create your first alert",
      warning:
        "⚠️ Changes to your subscription will be applied in the next billing period, and only after a successful payment. If the payment fails, your current alert setup will remain unchanged.",
    },
    payments: {
      title: "Payment Methods",
      desc: "Manage your payment methods for subscription billing.",
      none: "You don't have any payment methods saved.",
      encrypted: "Your payment information is encrypted and securely stored.",
    },
  },
  setupAlerts: {
    title: "Set Up Your Car Alerts",
    subtitle:
      " Configure your Telegram bot to receive notifications about your dream car",
    basicPlan: "Basic Plan",
    baseTitle: "$79.99/month",
    button: "Start My Car Alert Service",
    cancel: "Cancel anytime",
    toasts: {
      terms: {
        title: "Terms not accepted",
        description: "You must agree to the terms of service to continue",
      },
      success: {
        title: "Subscription created",
        description: "Your subscription has been created successfully",
      },
      error: {
        title: "Error creating subscription",
      },
      contactBot: {
        title: "Contact Bot Required",
        description:
          "You must start a chat with our Telegram bot and send a message to receive car alerts. Please follow the instructions below to contact the bot.",
      },
    },
  },
  loginPrompt: {
    title: "Login Required",
    description:
      "You must be logged in to continue. Please log in or register.",
    register: "Register",
    login: "Login",
  },
  waitlistPrompt: {
    title: "Join the Waitlist",
    description:
      "We're currently at full capacity. Join the waitlist to be notified when a slot becomes available.",
    button: "Join Waitlist",
  },
  subscription: {
    title: "Subscription Details",
    subTitle: "Edit your subscription details below",
    error: "Go back to dashboard",
    notFound: "Subscription not found",
    notFoundSub: "Go back to dashboard",
    description:
      "You can pause your subscription at any time. When you pause your subscription, your car alerts will stop until you resume them.",
    form: {
      status: {
        label: "Status",
        placeholder: "Select Status",
        active: "Active",
        paused: "Paused",
      },
    },
    actions: {
      save: "Save Changes",
      back: "Back",
    },
    toasts: {
      success: {
        title: "Subscription Updated",
        description:
          "Your subscription for {{brand}} {{model}} has been updated successfully",
      },
      priceError: {
        title: "Cannot Update Subscription",
        description:
          "You pause and update your subscription price at the same time. You either need to pause or update the price.",
      },
      error: {
        title: "Error updating subscription",
      },
    },
  },
  about: {
    title: "About Amiquus",
    description:
      "We're revolutionizing how people find their perfect used car by bringing advanced monitoring technology to everyone",
    meta: {
      title: "About Us | Amiquus - Car Listing Monitoring Service",
      description:
        "Learn about Amiquus, our mission to revolutionize used car shopping, and the team behind our intelligent car listing monitoring service.",
    },
    story: {
      heading: "Our Story",
      paragraphs: [
        "Amiquus began in 2023 when our founder, Alex, spent months refreshing car listing websites trying to find a specific rare model at a good price. After missing several opportunities due to delayed notifications, he realized there had to be a better way.",
        "Working with a small team of developers and car enthusiasts, Alex built a monitoring system that could track listings across multiple sites simultaneously and send instant notifications when matches appeared.",
        "What started as a personal project quickly gained interest from friends and family, and by early 2025, Amiquus was born as a service available to everyone. Today, we help car buyers across the country save time and find better deals with our intelligent monitoring technology.",
      ],
    },
    mission: {
      heading: "Our Mission",
      items: [
        {
          title: "Save Time",
          description:
            "Eliminate the need to constantly refresh multiple websites by automating the search process and receiving timely notifications.",
        },
        {
          title: "Find Better Deals",
          description:
            "Be the first to know when a great deal appears, giving you the advantage in a competitive market where timing is everything.",
        },
        {
          title: "Buy Confidently",
          description:
            "Make informed decisions with comprehensive monitoring across multiple trusted car listing platforms.",
        },
      ],
    },
    team: {
      heading: "Our Team",
      members: [
        {
          name: "Alex Morgan",
          role: "Founder & CEO",
          bio: "Former software engineer with a passion for cars and building innovative solutions.",
        },
        {
          name: "Sarah Chen",
          role: "CTO",
          bio: "Data science expert specializing in web scraping and information retrieval systems.",
        },
        {
          name: "Marcus Lee",
          role: "Lead Developer",
          bio: "Full-stack engineer with expertise in building high-performance notification systems.",
        },
        {
          name: "Elena Rodriguez",
          role: "Customer Success",
          bio: "Former car sales professional dedicated to helping customers find their perfect vehicle.",
        },
      ],
    },
    join: {
      heading: "Join Our Team",
      description:
        "We're always looking for talented individuals who are passionate about technology and revolutionizing the car buying experience. Check out our current openings and join us on our mission.",
      cta: "View Open Positions",
    },
    questions: {
      heading: "Have Questions?",
      description:
        "Learn more about how our service works, view pricing options, or get in touch with our support team.",
      links: {
        faq: "Visit FAQ",
        pricing: "View Pricing",
        support: "Contact Support",
      },
    },
  },
  terms: {
    metaTitle: "Amiquus — Terms of Service",
    metaDescription: "Amiquus Terms of Service",
    title: "Terms of Service",
    lastUpdated: "Last updated: May 21, 2025",
    callout: {
      title: "What Amiquus is (and is not).",
      description:
        "Amiquus provides software tools such as search, notifications, filtering, organization, and links that help you discover and track vehicle listings on third-party websites. Amiquus is not a car dealer, broker, marketplace, auctioneer, insurer, lender, or a party to any transaction between you and a third party. Any purchase, negotiation, or interaction related to a vehicle is solely between you and the relevant third party.",
    },
    sections: {
      "1": {
        id: "agreement",
        heading: "Agreement to Terms",
        paragraphs: [
          "These Terms of Service (“Terms”) are a legally binding agreement between you (“you” or “User”) and Amiquus (“Amiquus,” “we,” “us,” or “our”) governing your access to and use of our website, applications, and services (collectively, the “Service”).",
          "By accessing or using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms and by any policies referenced here (including the Refund Policy and Privacy Policy). If you do not agree, do not use the Service.",
        ],
        list: [],
      },
      "2": {
        id: "changes",
        heading: "Eligibility and Account Registration",
        paragraphs: [
          "You must be at least 18 years old (or the age of majority in your jurisdiction) to use the Service.",
          "When you create an account, you agree to provide accurate, complete, and up-to-date information and to keep it current. You are responsible for maintaining the confidentiality of your credentials and for all activity that occurs under your account.",
          `You must promptly notify us of any suspected unauthorized access or security incident at <a href="mailto:support@amiquus.com">support@amiquus.com</a>.`,
        ],
        list: [],
      },
      "3": {
        id: "account",
        heading: "Service Description; Third-Party Websites",
        paragraphs: [
          "The Service may display, transform, organize, summarize, or otherwise present information about vehicle listings that originate from third-party websites (“Listing Sites”) and may provide deep links that take you to those Listing Sites.",
          "<strong>Listing Sites are independent third parties.</strong> We do not control, operate, endorse, or guarantee any Listing Site, including the accuracy, availability, legality, or completeness of information shown on a Listing Site, or the quality, safety, or legitimacy of any vehicles or offers.",
          "<strong>Information may change at any time.</strong> Listing details (including price, availability, mileage, options, seller identity, and other attributes) can change without notice, and the way Listing Sites display or allow access to information can change due to their own policies, technical changes, or availability. You agree that you will always verify any listing details directly on the Listing Site and with the seller before making decisions.",
        ],
        list: [],
      },
      "4": {
        id: "payment",
        heading: "User Responsibility; No Reliance",
        paragraphs: [
          "You acknowledge that the Service is provided for informational and convenience purposes only. You are solely responsible for how you interpret, use, or act on any information accessed through the Service, including contacting sellers, negotiating, purchasing, transporting, financing, inspecting, or registering a vehicle.",
          " You should use appropriate professional advice where needed (e.g., mechanical inspection, legal guidance, financing advice) and perform your own due diligence. Amiquus is not responsible for your decisions or outcomes.",
        ],
        list: [],
      },
      "5": {
        id: "capacity",
        heading: "Prohibited Use",
        paragraphs: [
          "You agree not to misuse the Service. Misuse includes: attempting to gain unauthorized access to the Service or systems; interfering with or disrupting the Service; reverse engineering except where prohibited by law; using the Service to violate any law or the rights of others; uploading malware; or using the Service in a manner that imposes an unreasonable burden on the Service or our providers.",
        ],
        list: [],
      },
      "6": {
        id: "scraping",
        heading: "Subscriptions, Billing, and Taxes",
        paragraphs: [
          "Certain features require a paid subscription. By starting a subscription, you authorize us (and our payment processor) to charge your payment method on a recurring basis according to the plan you select until you cancel.",
          "All fees are exclusive of taxes, and applicable taxes may be added where required. Prices may change; if we make a material price change, we will provide advance notice before it takes effect for your next billing cycle.",
          "Payments are processed by third-party payment processors (for example, Paddle). We do not store full payment card details; payment information is handled by the processor under its terms.",
        ],
        list: [],
      },
      "7": {
        id: "intellectual",
        heading: "Cancellation",
        paragraphs: [
          "You can cancel your subscription at any time through your account settings (if available) or by contacting us. Cancellation stops future renewals. Unless required by law or expressly stated in our Refund Policy, cancellation does not entitle you to a refund or credits for any fees already paid.",
        ],
        list: [],
      },
      "8": {
        id: "termination",
        heading: "Refunds",
        paragraphs: [
          "Refunds, if any, are governed exclusively by our Refund Policy. If there is any conflict between these Terms and the Refund Policy, the Refund Policy controls for refund-related issues.",
        ],
        list: [],
      },
      "9": {
        id: "limitations",
        heading: "Capacity Limits; Waitlist",
        paragraphs: [
          "To maintain service quality, we may limit active subscriptions (for example, to a maximum number of active subscribers at a given time). If capacity is reached, we may offer a waitlist and notify users as space becomes available. We may adjust capacity limits at any time.",
        ],
        list: [],
      },
      "10": {
        id: "disclaimer",
        heading: "Intellectual Property",
        paragraphs: [
          "The Service, including its software, design, text, graphics, and all related intellectual property rights, is owned by Amiquus or its licensors and is protected by applicable laws. Subject to your compliance with these Terms, Amiquus grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Service for your personal or internal business purposes.",
          "   Amiquus trademarks, logos, and trade dress may not be used without our prior written consent.",
        ],
        list: [],
      },
      "11": {
        id: "cookies",
        heading: "Feedback",
        paragraphs: [
          "If you provide feedback or suggestions, you grant us the right to use them without restriction or compensation to you.",
        ],
        list: [],
      },
      "12": {
        id: "governing-law",
        heading: "Termination and Suspension",
        paragraphs: [
          "We may suspend or terminate your access to the Service at any time, with or without notice, if we believe you violated these Terms, created risk, or used the Service in a way that could expose us, other users, or third parties to liability.",
          "Upon termination, your right to use the Service stops immediately. Sections intended to survive termination (including limitation of liability, disclaimers, governing law, and indemnity) will survive.",
        ],
        list: [],
      },
      "13": {
        id: "contact",
        heading: "Disclaimer of Warranties",
        paragraphs: [
          "THE SERVICE IS PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS. TO THE MAXIMUM EXTENT PERMITTED BY LAW, AMIQUUS DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.",
          "WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, ERROR-FREE, OR THAT ANY OUTPUT OR INFORMATION WILL BE ACCURATE, COMPLETE, OR CURRENT. WE DO NOT WARRANT THAT LISTING SITES OR THEIR CONTENT WILL BE AVAILABLE OR COMPATIBLE WITH THE SERVICE.",
        ],
        list: [],
      },
      "14": {
        id: "lim",
        heading: "Limitation of Liability",
        paragraphs: [
          "TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT WILL AMIQUUS OR ITS AFFILIATES, DIRECTORS, EMPLOYEES, CONTRACTORS, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO YOUR USE OF (OR INABILITY TO USE) THE SERVICE.",
          "    TO THE MAXIMUM EXTENT PERMITTED BY LAW, AMIQUUS’S TOTAL LIABILITY FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THE SERVICE OR THESE TERMS WILL NOT EXCEED THE AMOUNT YOU PAID TO AMIQUUS FOR THE SERVICE IN THE THREE (3) MONTHS BEFORE THE EVENT GIVING RISE TO THE CLAIM.",
        ],
        list: [],
      },
      "15": {
        id: "15",
        heading: "Indemnification",
        paragraphs: [
          "  You agree to defend, indemnify, and hold harmless Amiquus and its affiliates, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys’ fees) arising out of or related to: (a) your use of the Service, (b) your violation of these Terms, (c) your violation of any law or the rights of a third party, or (d) any dispute between you and a Listing Site, seller, or other third party.",
        ],
        list: [],
      },
      "16": {
        id: "16",
        heading: "Changes to the Service and Terms",
        paragraphs: [
          "We may modify or discontinue the Service (in whole or in part) at any time. We may update these Terms from time to time. If we make a material change, we will make reasonable efforts to provide notice (for example, by posting an updated date and/or sending an email).",
          "Your continued use of the Service after updated Terms become effective constitutes acceptance of the updated Terms.",
        ],
        list: [],
      },
      "17": {
        id: "17",
        heading: "EU/EEA/UK Consumer Rights (If Applicable)",
        paragraphs: [
          "If you are a consumer in the EU/EEA/UK, you may have mandatory rights that cannot be waived by contract, including withdrawal rights for distance contracts. Nothing in these Terms limits those mandatory rights.",
          "Where allowed by law for digital services, if you request immediate access/performance during the withdrawal period, you may be asked to expressly consent to that immediate performance and acknowledge that you may lose your right of withdrawal once performance begins.",
        ],
        list: [],
      },
      "18": {
        id: "18",
        heading: "Severability; Entire Agreement; Assignment",
        paragraphs: [
          "If any provision of these Terms is found invalid or unenforceable, the remaining provisions remain in effect. These Terms and the policies referenced herein constitute the entire agreement between you and Amiquus regarding the Service.",
          "You may not assign these Terms without our prior written consent. We may assign these Terms in connection with a merger, acquisition, reorganization, or sale of assets.",
        ],
        list: [],
      },
      "19": {
        id: "19",
        heading: "Contact",
        paragraphs: [
          `Questions about these Terms:
          <a href="mailto:legal@amiquus.com">legal@amiquus.com</a>`,
          `Support: <a href="mailto:support@amiquus.com">support@amiquus.com</a>
            • Telegram: <a href="https://t.me/AmiquusSupport" rel="noopener noreferrer" target="_blank">@AmiquusSupport</a>`,
        ],
        list: [],
      },
    },
  },
  refunds: {
    metaTitle: "Amiquus — Refund Policy",
    metaDescription: "Amiquus Refund Policy",
    title: "Refund Policy",
    lastUpdated: "Last updated: May 21, 2025",
    callout: {
      title: "Summary.",
      description:
        "Subscription payments are generally non-refundable. You can cancel at any time to prevent future renewals.  We offer a narrow refund window for the most recent payment if requested within 24 hours, subject to the conditions below and unless the law requires otherwise.",
    },
    sections: {
      "1": {
        id: "1",
        heading: "General Rule: No Refunds",
        paragraphs: [
          "Unless required by applicable law, all fees and charges for subscriptions are non-refundable and non-creditable once paid. Cancelling your subscription stops future renewals but does not automatically refund amounts already paid.",
        ],
        list: [],
      },
      "2": {
        id: "2",
        heading: "24-Hour Refund Exception (Most Recent Payment Only)",
        paragraphs: [
          `We may, at our discretion, refund your
          <strong>most recent subscription payment</strong> if you meet
          <em>all</em> of the following conditions:`,
        ],
        list: [
          "You submit a refund request within <strong>24 hours</strong> of the time of the charge.",
          `You <strong>cancel</strong> your subscription before or at the time
          you request the refund (to prevent a new renewal).`,
          `You email your request to
          <a href="mailto:refunds@amiquus.com">refunds@amiquus.com</a> from the
          email address associated with your Amiquus account.`,
          `You include: (a) your account email, (b) the plan name, and (c) the
          date/time of the charge (approximate is fine).`,
          "If approved, the refund applies only to the <strong>last successful payment</strong>. Earlier payments are not eligible. Refunds are processed back to the original payment method where possible."
        ],
      },
      "3": {
        id: "3",
        heading: "Non-Eligible Situations",
        paragraphs: [
          "To the maximum extent permitted by law, we do not provide refunds for:",
        ],
        list: [
          "Requests submitted more than 24 hours after the charge time.",
          "Partial periods of use, unused time, or plan downgrades.",
          "Account termination or suspension for violation of our Terms of Service.",
          "Issues caused by third-party websites, third-party content, or changes outside our control."
        ],
      },
      "4": {
        id: "4",
        heading: "Chargebacks and Payment Disputes",
        paragraphs: [
          `If you have a billing issue, please contact us first at
          <a href="mailto:refunds@amiquus.com">refunds@amiquus.com</a>. Unresolved
          chargebacks or payment disputes may result in immediate suspension or
          termination of your account.`,
        ],
        list: [],
      },
      "5": {
        id: "5",
        heading: "EU/EEA/UK Consumer Notice (If Applicable)",
        paragraphs: [
          `If you are a consumer in the EU/EEA/UK, you may have a statutory right
        to withdraw from a distance contract within 14 days, unless an exception
        applies. Nothing in this Refund Policy limits mandatory consumer rights.`,
          ` For digital services, where permitted, you may be asked to expressly
        request immediate performance and acknowledge that you may lose your
        withdrawal right once performance begins.`
        ],
        list: [],
      },
      "6": {
        id: "6",
        heading: "Contact",
        paragraphs: [
          `Refund requests:
        <a href="mailto:refunds@amiquus.com">refunds@amiquus.com</a><br />
        General support:
        <a href="mailto:support@amiquus.com">support@amiquus.com</a>`,
        ],
        list: [],
      },
    },
  },
  privacy: {
    metaTitle: "Privacy Policy | Amiquus",
    metaDescription:
      "Learn about how Amiquus handles your personal data, privacy rights, and data collection practices.",
    title: "Privacy Policy",
    lastUpdated: "Last updated: May 21, 2025",
    sections: {
      "0": {
        id: "introduction",
        heading: "Introduction",
        paragraphs: [
          "Welcome to Amiquus. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.",
        ],
      },
      "1": {
        id: "data-we-collect",
        heading: "Information We Collect",
        paragraphs: [
          "We collect several different types of information for various purposes to provide and improve our service to you:",
        ],
        list: [
          "Personal Data: Email address, first name, last name, and profile picture (if provided through third-party authentication).",
          "Account Data: Your login credentials and account preferences.",
          "Usage Data: Information on how you use our website and services.",
          "Car Search Preferences: The vehicle criteria you set for monitoring (brand, model, price range, etc.).",
          "Telegram Information: If you choose to receive notifications via Telegram, we store your Telegram chat ID and bot token.",
          "Payment Information: When you make a purchase, our payment processor collects payment details necessary to process your transaction. Amiquus does not store your full credit card information.",
        ],
      },
      "2": {
        id: "how-we-use-data",
        heading: "How We Use Your Data",
        paragraphs: ["We use your personal data for the following purposes:"],
        list: [
          "To provide and maintain our service",
          "To notify you about changes to our service",
          "To allow you to participate in interactive features of our service",
          "To provide customer support",
          "To gather analysis or valuable information so that we can improve our service",
          "To monitor the usage of our service",
          "To detect, prevent and address technical issues",
          "To process payments and prevent fraudulent transactions",
          "To send car listings that match your preferences via your chosen notification method",
        ],
      },
      "3": {
        id: "data-storage",
        heading: "Data Storage and Security",
        paragraphs: [
          "We implement appropriate security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. All data is stored on secure servers with encryption in transit and at rest.",
          "We retain your personal data only for as long as necessary for the purposes set out in this privacy policy, including for the purposes of satisfying any legal, regulatory, tax, accounting, or reporting requirements.",
        ],
      },
      "4": {
        id: "gdpr",
        heading: "Your GDPR Rights",
        paragraphs: [
          "If you are a resident of the European Economic Area (EEA), you have certain data protection rights. Amiquus aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your personal data.",
          "You have the following data protection rights:",
        ],
        list: [
          "The right to access, update or delete the information we have on you",
          "The right of rectification",
          "The right to object",
          "The right of restriction",
          "The right to data portability",
          "The right to withdraw consent",
        ],
      },
      "5": {
        id: "cookies",
        heading: "Cookies Policy",
        paragraphs: [
          "Cookies are small pieces of data stored on your device. We use cookies to:",
        ],
        list: [
          "Keep you signed in",
          "Understand how you use our website",
          "Remember your preferences",
          "Customize your experience",
        ],
      },
      "6": {
        id: "third-party",
        heading: "Third-Party Services",
        paragraphs: [
          "We may employ third-party companies and individuals to facilitate our service, provide the service on our behalf, perform service-related tasks, or assist us in analyzing how our service is used.",
          "These third parties include:",
        ],
        list: [
          "Payment processors (Paddle)",
          "Analytics providers",
          "Customer support services",
          "Hosting and cloud infrastructure providers",
        ],
        paragraphs2: [
          "These third parties have access to your personal data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.",
        ],
      },
      "7": {
        id: "changes",
        heading: "Changes to This Privacy Policy",
        paragraphs: [
          "We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the 'Last updated' date.",
          "You are advised to review this privacy policy periodically for any changes. Changes to this privacy policy are effective when they are posted on this page.",
        ],
      },
      "8": {
        id: "contact",
        heading: "Contact Us",
        paragraphs: [
          "If you have any questions about this privacy policy, please contact us:",
        ],
        list: [
          "By email: privacy@amiquus.com",
          "By visiting the contact page on our website",
        ],
      },
    },
  },
  faqs: {
    metaTitle: "Frequently Asked Questions | Amiquus",
    metaDescription:
      "Find answers to the most common questions about Amiquus car listing monitoring service, subscriptions, notification setup, and more.",
    title: "Frequently Asked Questions",
    subtitle:
      "Find quick answers to common questions about our car listing monitoring service",
    general: {
      heading: "General Questions",
      whatIs: {
        question: "What is Amiquus?",
        answer:
          "Amiquus is a service that monitors multiple car listing websites for vehicles that match your specific criteria. When a matching listing appears, you receive an instant notification via Telegram, allowing you to be among the first to contact sellers and secure great deals.",
      },
      howItWorks: {
        question: "How does it work?",
        answer: [
          "You set up your search criteria (make, model, price range, etc.)",
          "You select which websites to monitor",
          "You connect your Telegram account for notifications",
          "Our system continuously monitors your selected websites for new listings",
          "When a matching car appears, you receive an instant Telegram notification with all details and a direct link",
        ],
      },
      whichWebsites: {
        question: "Which car listing websites do you monitor?",
        answerIntro:
          "We currently monitor the following major car listing platforms:",
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
          "We're continuously adding more platforms to provide the most comprehensive coverage possible.",
      },
    },
    subscription: {
      heading: "Subscription Questions",
      cost: {
        question: "How much does a subscription cost?",
        answer: [
          "Our pricing starts at $79.99 per month for monitoring one website with updates every 6 hours. Additional websites cost $4.99 each per month. You can also upgrade your update frequency for faster notifications.",
          "For specific pricing details, please view our pricing section on the homepage.",
        ],
      },
      cancel: {
        question: "How do I cancel my subscription?",
        stepsIntro:
          "You can cancel your subscription at any time from your account profile page:",
        steps: [
          "Log in to your account",
          'Navigate to the "Profile" page',
          'Select the "Subscriptions" tab',
          'Click the "Cancel Subscription" button next to the subscription you wish to cancel',
        ],
        note: "Your subscription will remain active until the end of your current billing period.",
      },
      multiple: {
        question: "Can I have multiple subscriptions for different car models?",
        answer:
          "Yes, you can create multiple subscriptions under a single account. Each subscription can track different car models, brands, or price ranges. This is particularly useful if you're searching for multiple vehicles or helping friends and family with their car search.",
      },
      limit: {
        question: "Why is there a limit on the number of subscribers?",
        intro: "We limit our service to 30 active subscribers to ensure:",
        list: [
          "The highest quality of service and data accuracy",
          "Personalized support for each subscriber",
          "Faster notification delivery during peak listing times",
          "Ethical scraping that doesn't overload the target websites",
        ],
        outro:
          "If we've reached capacity, you can join our waitlist to be notified when a spot becomes available.",
      },
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
          "Test your notification setup using the `Send Test Message` button",
        ],
        note: "Detailed step-by-step instructions with screenshots are provided during the subscription setup process.",
      },
      frequency: {
        question: "How often will I receive notifications?",
        intro: "The frequency of notifications depends on:",
        list: [
          "Your chosen update frequency package (from every 1 hour to every 1 minutes)",
          "How many new listings match your criteria",
          "How active the market is for your selected make/model",
        ],
        outro:
          "You'll only receive notifications when new listings that match your criteria are found.",
      },
      privacy: {
        question: "How is my personal data protected?",
        intro: "We take data privacy seriously and apply these measures:",
        list: [
          "Encrypted data in transit and at rest",
          "Secure payments via Paddle",
          "No third-party data sharing",
          "You can request or delete your data anytime",
        ],
        outro: "Read our full Privacy Policy for more.",
      },
    },
    support: {
      heading: "Still have questions?",
      description:
        "If you couldn't find the answer to your question, our support team is here to help!",
      button: "Contact Support",
    },
  },
  waitlist: {
    metaTitle: "Join the Waitlist - Amiquus",
    metaDescription:
      "Join the Amiquus waitlist to be notified when subscriptions become available.",
    title: "Join Our Waitlist",
    subtitle:
      "Due to high demand, we limit the number of active subscriptions to ensure the best service quality for all users.",
    limited: {
      heading: "Limited Availability",
      description:
        "We limit our system to only 30 active subscribers to ensure:",
      points: [
        "Exceptional scraping reliability and speed for all users",
        "Reduced chances of being blocked by car listing websites",
        "Personalized support for each subscriber",
        "Fair distribution of server resources",
      ],
      available:
        "{{remaining}} subscription spots out of {{capacity}} currently available.",
      full: "All subscription spots are currently filled. Join the waitlist to be notified when a spot becomes available.",
    },
    success: {
      title: "You're on the waitlist!",
      description:
        "We'll notify you as soon as a subscription spot becomes available",
      message:
        "Thank you for your interest in Amiquus! We've added you to our waitlist and will contact you as soon as we have an opening.",
      button: "Return to Homepage",
    },
    cantJoin: {
      title: "Join the Waitlist",
      description:
        " We'll notify you as soon as a subscription spot becomes available",
    },
    form: {
      firstName: {
        label: "First Name",
        placeholder: "John",
      },
      lastName: {
        label: "Last Name",
        placeholder: "Doe",
      },
      email: {
        label: "Email",
        placeholder: "john.doe@example.com",
        description:
          "We'll use this email to notify you when a spot becomes available",
      },
      submit: "Join Waitlist",
      submitting: "Submitting...",
    },
  },
  support: {
    metaTitle: "Support | Amiquus - Help Center",
    metaDescription:
      "Get help with your Amiquus account, subscription, or car alerts. Browse our help center or contact our support team for assistance.",
    title: "Support Center",
    subtitle:
      "Find answers to common questions or get in touch with our support team",
    emailSupport: {
      title: "Email Support",
      description: "Send us an email and we'll get back to you within 24 hours",
      email: "support@amiquus.com",
    },
    faqHeading: "Frequently Asked Questions",
    faqs: {
      telegram: {
        question: "How do I set up Telegram notifications?",
        intro: "To set up Telegram notifications, follow these steps:",
        steps: [
          "Create a Telegram bot using BotFather (instructions in our dashboard)",
          "Copy your API token and chat ID",
          'Enter these details in your account settings under "Notification Preferences"',
          'Test your connection using the "Send Test Message" button',
        ],
        outro:
          "If you need more help, our detailed guide is available in your dashboard.",
      },
      updates: {
        question: "How often are car listings updated?",
        answer:
          "The update frequency depends on your subscription plan. Basic plans receive updates every 6 hours, while Premium plans can get updates as frequently as every 30 minutes. You can view and modify your current update frequency in your subscription settings.",
      },
      facebook: {
        question: "Can I monitor Facebook Marketplace?",
        answer:
          "Yes, we support Facebook Marketplace monitoring. To set this up, you'll need to provide the URL to the Facebook Marketplace search results page with your desired filters applied. Our system will then monitor that specific search for new listings that match your criteria.",
      },
      cancel: {
        question: "How do I cancel my subscription?",
        answer:
          'You can cancel your subscription at any time from your account profile page. Click on the "Subscriptions" tab, locate the subscription you wish to cancel, and click the "Cancel Subscription" button. Your service will continue until the end of your current billing period.',
      },
      full: {
        question: "What happens if all subscription slots are full?",
        answer:
          "To maintain our high quality of service, we limit the number of active subscriptions. If all slots are full, you can join our waitlist. We'll notify you as soon as a slot becomes available, and you'll have priority to claim it before we open it to the general public.",
      },
    },
    stillNeedHelp: {
      heading: "Still need help?",
      description:
        "If you couldn't find the answer to your question, feel free to reach out to our support team. We're here to help!",
      button: "Contact Support",
    },
  },
  notFound: {
    title: "404 Page Not Found",
    message: "Did you forget to add the page to the router?",
  },
  emails: {
    verification: {
      subject: "Your Amiquus Email Verification Code",
      greeting: "Hi there,",
      message: "Use the verification code below to complete your sign-up:",
      expiration: "This code will expire in 10 minutes.",
    },
    invoice: {
      success: {
        subject: "Your Amiquus Payment Receipt – Invoice #",
        h2Message: "Your Amiquus Subscription Payment Was Successful!",
        greeting: "Hi there,",
        paymentMessage: "We’ve received your payment of",
        downloadMessage:
          "You can view or download your invoice using the link below:",
        viewInvoice: "View Invoice",
        invoiceNumber: "Invoice #:",
      },
      pending: {
        subjectA: "Payment Pending – Invoice",
        subjectB: "for Your Amiquus Subscription",
        h2Message:
          "Action Required: Complete Your Payment for Amiquus Subscription",
        greeting: "Hi there,",
        messageA: "Your invoice",
        messageB:
          "is still unpaid. To activate your subscription, please complete the payment of",
        paymentMessage: "You can securely pay using the link below:",
        payInvoice: "Pay Invoice",
        ignoreEmail:
          "If you’ve already made this payment, you can ignore this email.",
      },
      failed: {
        subject: "Payment Failed – Invoice",
        message: "We were unable to process your recent payment (attempt",
        attemptsA:
          "We will retry your payment shortly. No action is needed for now.",
        attemptsB:
          "We attempted to charge your payment method 3 times but all attempts failed.",
        attemptsC:
          "As a result, your subscription has been <strong>paused</strong>. You won’t receive further updates until you reactivate it.",
        attemptsD:
          "Please update your payment method and resume your subscription from your profile:",
        viewInvoice: "View Invoice",
        managePayment: "Manage Payment Methods",
      },
    },
    waitlist: {
      subject: "You’re on the Amiquus Waitlist!",
      h2Message: "You're On the List!",
      hi: "Hi",
      message:
        "Thanks for joining the Amiquus waitlist. We’ll let you know as soon as a spot becomes available.",
      anyQuestions:
        "If you have any questions, feel free to reply to this email.",
    },
    common: {
      thanksMessage: "Thank you for choosing Amiquus!",
      signature: "Best regards,<br/>The Amiquus Team",
      team: "— The Amiquus Team",
      needHelp: "Need help?",
      hello: "Hello",
    },
  },
};

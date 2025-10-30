export const en = {
  about: {
    description:
      "We're revolutionizing how people find their perfect used car by bringing advanced monitoring technology to everyone",
    join: {
      cta: "View Open Positions",
      description:
        "We're always looking for talented individuals who are passionate about technology and revolutionizing the car buying experience. Check out our current openings and join us on our mission.",
      heading: "Join Our Team",
    },
    meta: {
      description:
        "Learn about Amiquus, our mission to revolutionize used car shopping, and the team behind our intelligent car listing monitoring service.",
      title: "About Us | Amiquus - Car Listing Monitoring Service",
    },
    mission: {
      heading: "Our Mission",
      items: {
        0: {
          description:
            "Eliminate the need to constantly refresh multiple websites by automating the search process and receiving timely notifications.",
          title: "Save Time",
        },
        1: {
          description:
            "Be the first to know when a great deal appears, giving you the advantage in a competitive market where timing is everything.",
          title: "Find Better Deals",
        },
        2: {
          description:
            "Make informed decisions with comprehensive monitoring across multiple trusted car listing platforms.",
          title: "Buy Confidently",
        },
      },
    },
    questions: {
      description:
        "Learn more about how our service works, view pricing options, or get in touch with our support team.",
      heading: "Have Questions?",
      links: {
        faq: "Visit FAQ",
        pricing: "View Pricing",
        support: "Contact Support",
      },
    },
    story: {
      heading: "Our Story",
      paragraphs: {
        0: "Amiquus began in 2023 when our founder, Alex, spent months refreshing car listing websites trying to find a specific rare model at a good price. After missing several opportunities due to delayed notifications, he realized there had to be a better way.",
        1: "Working with a small team of developers and car enthusiasts, Alex built a monitoring system that could track listings across multiple sites simultaneously and send instant notifications when matches appeared.",
        2: "What started as a personal project quickly gained interest from friends and family, and by early 2025, Amiquus was born as a service available to everyone. Today, we help car buyers across the country save time and find better deals with our intelligent monitoring technology.",
      },
    },
    team: {
      heading: "Our Team",
      members: {
        0: {
          bio: "Former software engineer with a passion for cars and building innovative solutions.",
          name: "Alex Morgan",
          role: "Founder & CEO",
        },
        1: {
          bio: "Data science expert specializing in web scraping and information retrieval systems.",
          name: "Sarah Chen",
          role: "CTO",
        },
        2: {
          bio: "Full-stack engineer with expertise in building high-performance notification systems.",
          name: "Marcus Lee",
          role: "Lead Developer",
        },
        3: {
          bio: "Former car sales professional dedicated to helping customers find their perfect vehicle.",
          name: "Elena Rodriguez",
          role: "Customer Success",
        },
      },
    },
    title: "About Amiquus",
  },
  alertSchema: {
    errors: {
      carbrand: "Car brand is required",
      carmodel: "Car model is required",
      facebookmarketplaceurl:
        "Facebook Marketplace URL is required when Facebook is selected",
      fueltype: "Fuel type is required",
      maxkilometers: "Max kilometers must be a number",
      notificationlanguage: "Notification language is required",
      pricemax: "Maximum price must be a number",
      pricemin: "Minimum price must be a number",
      telegramchatid: "Telegram chat ID is required",
      telegramtoken: "Telegram bot token is required",
      telegramusername: "Telegram username is required",
      websitesselected: "At least one website must be selected",
      yearmax: "Maximum year must be a valid year",
      yearmin: "Minimum year must be a valid year",
    },
  },
  carDetails: {
    actions: {
      continue: "Continue",
      previous: "Previous",
    },
    description:
      "Specify the car details you are looking for. All fields are optional - leave any blank to get a wider range of results.",
    errors: {
      carbrand: "Car brand is required",
      carmodel: "Car model is required",
      fueltype: "Fuel type is required",
      maxkilometers: "Max kilometers must be a number",
      pricemax: "Maximum price must be a number",
      pricemin: "Minimum price must be a number",
      yearmax: "Maximum year must be a valid year",
      yearmin: "Minimum year must be a valid year",
    },
    heading: "Car Details",
    labels: {
      carbrand: "Car Brand",
      carmodel: "Car Model",
      fueltype: "Fuel Type",
      maxkilometers: "Max Kilometers",
      pricemax: "Maximum Price",
      pricemin: "Minimum Price",
      yearmax: "Maximum Year",
      yearmin: "Minimum Year",
    },
    options: {
      nomodelsavailable: "No Models Available",
    },
    placeholders: {
      carbrand: "Select Car Brand",
      carmodel: "Select Car Model",
      carmodeldisabled: "Select Car Brand First",
      fueltype: "Select Fuel Type",
      maxkilometers: "Enter maximum kilometers",
      pricemax: "Enter maximum price",
      pricemin: "Enter minimum price",
      yearmax: "Enter maximum year",
      yearmin: "Enter minimum year",
    },
  },
  dashboardPayment: {
    add: "Add Payment Method",
    description:
      "Add a new credit or debit card for your subscription payments.",
    errormessage: "An unexpected error occurred",
    errortitle: "Error adding payment method",
    initerror: {
      description: "Unable to initialize payment setup",
      title: "Error",
    },
    processing: "Processing...",
  },
  dashboardPaymentMethodCard: {
    cancel: "Cancel",
    confirmremove: "Remove Card",
    default: "Default",
    expires: "Expires",
    remove: "Remove",
    removedescription:
      "Are you sure you want to remove your {{brand}} card ending in {{last4}}?",
    removetitle: "Remove Payment Method",
    removewarning:
      "This is your default payment method and removing it may affect your active subscriptions.",
    setasdefault: "Set as Default",
    setdefaultdescription:
      "Would you like to set the {{brand}} card ending in {{last4}} as your default payment method? This card will be used for all future subscription payments.",
    setdefaulttitle: "Set Default Payment Method",
  },
  dashboardSubscriptionCard: {
    cancelalert: "Cancel Alert",
    canceldescription:
      "Are you sure you want to cancel your car alert for {{brand}} {{model}}? This will stop all notifications and you'll need to set up a new alert if you want to monitor this car again.",
    canceltitle: "Cancel Car Alert",
    confirmcancel: "Cancel Alert",
    edit: "Edit",
    keepmyalert: "Keep My Alert",
    language: "Language",
    price: "Price",
    pricerange: "Price",
    updates: "Updates",
    websites: "Websites",
    years: "Years",
  },
  faq: {
    contactlink: "Contact our support team",
    contactprompt: "Still have questions?",
    questions: {
      0: {
        answer:
          "The notification speed depends on your chosen update frequency. With the default hourly plan, you'll receive notifications within an hour of a new listing being posted. For near real-time notifications (within minutes of posting), you can upgrade to our more frequent update plans.",
        question:
          "How quickly will I receive notifications after a new listing is posted?",
      },
      1: {
        answer:
          "Yes! You can create multiple search profiles with different criteria. Each profile counts as a separate subscription, but you can manage them all from a single account. This is perfect if you're looking for different types of vehicles simultaneously.",
        question: "Can I track multiple different types of cars at once?",
      },
      2: {
        answer:
          "We currently support major car listing platforms including AutoTrader, CarGurus, Cars.com, and Facebook Marketplace. We're constantly expanding our coverage to include more websites based on user demand and regional popularity.",
        question: "What websites do you currently support?",
      },
      3: {
        answer:
          "Not at all! We provide step-by-step instructions with both text and video guides to help you set up the Telegram bot. Most users complete the setup in less than 5 minutes, even without any technical background.",
        question: "Do I need technical knowledge to use the Telegram bot?",
      },
      4: {
        answer:
          "Yes, you can modify your search criteria at any time from your account dashboard. Changes take effect immediately, and your notifications will update accordingly without any interruption to your service.",
        question:
          "Can I change my search criteria after setting up my subscription?",
      },
      5: {
        answer:
          'You can cancel your subscription at any time from your account dashboard. Go to the "Subscriptions" section, select the subscription you wish to cancel, and click the "Cancel Subscription" button. Your service will continue until the end of your current billing period.',
        question: "How do I cancel my subscription?",
      },
    },
    subtitle: "Find answers to the most common questions about our service.",
    title: "Frequently Asked Questions",
  },
  faqs: {
    general: {
      heading: "General Questions",
      howitworks: {
        answer: {
          0: "You set up your search criteria (make, model, price range, etc.)",
          1: "You select which websites to monitor",
          2: "You connect your Telegram account for notifications",
          3: "Our system continuously monitors your selected websites for new listings",
          4: "When a matching car appears, you receive an instant Telegram notification with all details and a direct link",
        },
        question: "How does it work?",
      },
      whatis: {
        answer:
          "Amiquus is a service that monitors multiple car listing websites for vehicles that match your specific criteria. When a matching listing appears, you receive an instant notification via Telegram, allowing you to be among the first to contact sellers and secure great deals.",
        question: "What is Amiquus?",
      },
      whichwebsites: {
        answerintro:
          "We currently monitor the following major car listing platforms:",
        list: {
          0: "AutoTrader",
          1: "Cars.com",
          2: "CarGurus",
          3: "TrueCar",
          4: "Facebook Marketplace (via URL)",
          5: "Craigslist",
          6: "eBay Motors",
        },
        outro:
          "We're continuously adding more platforms to provide the most comprehensive coverage possible.",
        question: "Which car listing websites do you monitor?",
      },
    },
    metaDescription:
      "Find answers to the most common questions about Amiquus car listing monitoring service, subscriptions, notification setup, and more.",
    metaTitle: "Frequently Asked Questions | Amiquus",
    subscription: {
      cancel: {
        note: "Your subscription will remain active until the end of your current billing period.",
        question: "How do I cancel my subscription?",
        steps: {
          0: "Log in to your account",
          1: 'Navigate to the "Profile" page',
          2: 'Select the "Subscriptions" tab',
          3: 'Click the "Cancel Subscription" button next to the subscription you wish to cancel',
        },
        stepsintro:
          "You can cancel your subscription at any time from your account profile page:",
      },
      cost: {
        answer: {
          0: "Our pricing starts at $79.99 per month for monitoring one website with updates every 6 hours. Additional websites cost $4.99 each per month. You can also upgrade your update frequency for faster notifications.",
          1: "For specific pricing details, please view our pricing section on the homepage.",
        },
        question: "How much does a subscription cost?",
      },
      heading: "Subscription Questions",
      limit: {
        intro: "We limit our service to 30 active subscribers to ensure:",
        list: {
          0: "The highest quality of service and data accuracy",
          1: "Personalized support for each subscriber",
          2: "Faster notification delivery during peak listing times",
          3: "Ethical scraping that doesn't overload the target websites",
        },
        outro:
          "If we've reached capacity, you can join our waitlist to be notified when a spot becomes available.",
        question: "Why is there a limit on the number of subscribers?",
      },
      multiple: {
        answer:
          "Yes, you can create multiple subscriptions under a single account. Each subscription can track different car models, brands, or price ranges. This is particularly useful if you're searching for multiple vehicles or helping friends and family with their car search.",
        question: "Can I have multiple subscriptions for different car models?",
      },
    },
    subtitle:
      "Find quick answers to common questions about our car listing monitoring service",
    support: {
      button: "Contact Support",
      description:
        "If you couldn't find the answer to your question, our support team is here to help!",
      heading: "Still have questions?",
    },
    technical: {
      frequency: {
        intro: "The frequency of notifications depends on:",
        list: {
          0: "Your chosen update frequency package (from every 6 hours to every 30 minutes)",
          1: "How many new listings match your criteria",
          2: "How active the market is for your selected make/model",
        },
        outro:
          "You'll only receive notifications when new listings that match your criteria are found.",
        question: "How often will I receive notifications?",
      },
      heading: "Technical Questions",
      privacy: {
        intro: "We take data privacy seriously and apply these measures:",
        list: {
          0: "Encrypted data in transit and at rest",
          1: "Secure payments via Stripe",
          2: "No third-party data sharing",
          3: "You can request or delete your data anytime",
        },
        outro: "Read our full Privacy Policy for more.",
        question: "How is my personal data protected?",
      },
      telegram: {
        note: "Detailed step-by-step instructions with screenshots are provided during the subscription setup process.",
        question: "How do I set up Telegram notifications?",
        steps: {
          0: "Create a Telegram bot using BotFather (instructions provided during setup)",
          1: "Copy your bot token from BotFather",
          2: "Start a conversation with your bot",
          3: "Get your chat ID (instructions provided during setup)",
          4: "Enter your bot token and chat ID in your Amiquus subscription settings",
          5: "Test your notification setup using the `Send Test Message` button",
        },
        stepsintro: "To set up Telegram notifications:",
      },
    },
    title: "Frequently Asked Questions",
  },
  features: {
    account: {
      description:
        "Manage multiple search profiles and modify your subscription settings with a few clicks.",
      title: "Easy Account Management",
    },
    filters: {
      description:
        "Set precise criteria including brand, model, year, mileage, and price range to find exactly what you want.",
      title: "Custom Filters",
    },
    frequency: {
      description:
        "Choose how often we check for new listings, from hourly updates to real-time monitoring.",
      title: "Customizable Frequency",
    },
    heading: "Why Choose Amiquus?",
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
        "Monitor multiple car listing websites simultaneously without having to check each one manually.",
      title: "Multi-Site Tracking",
    },
    notifications: {
      description:
        "Receive immediate alerts via Telegram when a car matching your criteria is listed for sale.",
      title: "Instant Notifications",
    },
    subheading:
      "Save time and never miss out on your perfect car with our automated tracking service.",
  },
  footer: {
    about: "About Us",
    blog: "Blog",
    branddescription:
      "Your personal assistant for finding the perfect used car deal at the perfect time.",
    brandtitle: "Amiquus",
    careers: "Careers",
    contact: "Contact",
    cookies: "Cookie Policy",
    copyright: "All rights reserved.",
    email: "support@amiquus.com",
    faq: "FAQ",
    features: "Features",
    gdpr: "GDPR Compliance",
    getstarted: "Get Started",
    legal: "Legal",
    pricing: "Pricing",
    privacy: "Privacy Policy",
    quicklinks: "Quick Links",
    support: "Support",
    telegram: "Contact us on Telegram",
    terms: "Terms of Service",
  },
  hero: {
    button1: "Set Up Your Alerts",
    button2: "See How It Works",
    label: "Track used car listings in real-time",
    subtitle:
      "Amiquus alerts you instantly when your dream car becomes available across multiple car listing websites. Get notifications via Telegram the moment a match is found.",
    title: "Never Miss Your Perfect Car Deal Again",
    trustindicators: {
      cancelanytime: "Cancel anytime",
      nosetup: "No setup required",
      realtime: "Real-time alerts",
      websites: "15+ websites tracked",
    },
  },
  howItWorks: {
    features: {
      0: "Track over 15 car listing websites simultaneously",
      1: "Customizable search criteria with advanced filtering",
      2: "Real-time notifications via Telegram",
      3: "Automatic price drop and new listing alerts",
      4: "Easy setup process that takes less than 5 minutes",
    },
    notificationmockup1: {
      description: "BMW 3 Series, 2019, $32,500 - Just listed on AutoTrader",
      title: "New Match Found!",
    },
    notificationmockup2: {
      description:
        "Mercedes C-Class, 2020, 30,000 miles - Price dropped by $2,000",
      title: "Telegram Alert",
    },
    setalerts: "Set Up Your Alerts",
    steps: {
      findcar: {
        description:
          "Be the first to know about new listings and secure the best deals before anyone else.",
        title: "Find Your Perfect Car",
      },
      notifications: {
        description:
          "Receive alerts the moment a car matching your criteria appears on any of our monitored websites.",
        title: "Get Instant Notifications",
      },
      preferences: {
        description:
          "Select car brands, models, price range, and other criteria you're interested in monitoring.",
        title: "Set Your Preferences",
      },
      telegram: {
        description:
          "Link your Telegram account to receive instant notifications about new listings.",
        title: "Connect Telegram",
      },
    },
    subtitle:
      "Set up once and let our automated system find the perfect car deal for you",
    title: "How Amiquus Works",
    whytitle: "Why Choose Amiquus?",
  },
  limited: {
    available: {
      buttonText: "Get Started Now",
      description:
        "{{active}} of {{capacity}} subscriptions are currently active. Plenty of room for you to join!",
      title: "Subscriptions Available",
    },
    full: {
      buttonText: "Join Waitlist",
      description:
        "We've reached our capacity of 30 active subscribers. Join our waitlist to be notified when a spot opens up.",
      title: "Subscription Limit Reached",
    },
    limited: {
      buttonText: "Get Started Now",
      description:
        "Only {{remaining}} slots remaining out of {{capacity}}. Subscribe now before we reach capacity!",
      title: "Limited Availability",
    },
  },
  login: {
    description: "Enter your email and password to access your dashboard",
    emaillabel: "Email",
    errors: {
      invalidemail: "Please enter a valid email address",
      shortpassword: "Password must be at least 6 characters",
    },
    errortitle: "Login failed",
    genericerror: "Please check your credentials and try again.",
    loggingin: "Logging in...",
    loginbutton: "Log in",
    loginwithgoogle: "Log in with Google",
    noaccount: "Don't have an account?",
    or: "or",
    passwordlabel: "Password",
    registerlink: "Register",
    successmessage: "You have been logged in successfully.",
    successtitle: "Login successful",
    title: "Log in to your account",
  },
  loginPrompt: {
    description:
      "You must be logged in to continue. Please log in or register.",
    login: "Login",
    register: "Register",
    title: "Login Required",
  },
  navigations: {
    faq: "FAQ",
    features: "Features",
    getalerts: "Get Alerts",
    getstarted: "Get Started",
    how: "How It Works",
    language: "Language",
    login: "Log in",
    logout: "Logout",
    myalerts: "My Alerts",
    pricing: "Pricing",
    profile: "Profile",
    settings: "Settings",
    signup: "Sign Up",
    subscribers: "Subscribers",
    theme: "Theme",
    waitlist: "Waitlist",
  },
  notFound: {
    message: "Did you forget to add the page to the router?",
    title: "404 Page Not Found",
  },
  payment: {
    button: {
      processing: "Processing...",
      submit: "Set up payment method",
    },
    toast: {
      error: {
        fallback: "An unexpected error occurred. Please try again.",
        title: "Error",
      },
      success: {
        description: "Your payment method has been successfully set up.",
        title: "Success",
      },
    },
  },
  personalInfo: {
    actions: {
      continue: "Continue",
      login: "Login or Sign Up to Continue",
    },
    description:
      "Please provide your personal details so we can set up your notifications correctly.",
    errors: {
      email: "Please enter a valid email",
      firstname: "First name is required",
      lastname: "Last name is required",
    },
    heading: "Personal Information",
    labels: {
      email: "Email Address",
      firstname: "First Name",
      lastname: "Last Name",
    },
    placeholders: {
      email: "john.doe@example.com",
      firstname: "John",
      lastname: "Doe",
    },
  },
  pricing: {
    addons: {
      0: {
        name: "Each additional website",
      },
      1: {
        name: "30-minute updates",
      },
      2: {
        name: "15-minute updates",
      },
      3: {
        name: "5-minute updates",
      },
      4: {
        name: "1-minute updates",
      },
    },
    addonstitle: "Add-ons:",
    basetitle: "Base Package: $79.99/month",
    button: "Get Started Now",
    footernote:
      "All plans include unlimited search configurations and easy subscription management.",
    includedfeatures: {
      0: "One website monitoring",
      1: "Hourly updates",
      2: "Unlimited filters",
      3: "Telegram notifications",
    },
    includedtitle: "What's Included:",
    subtitle:
      "Our pricing is based on your specific needs. Start with a base package and customize it to fit your requirements.",
    title: "Simple, Transparent Pricing",
  },
  privacy: {
    lastupdated: "Last updated: May 21, 2025",
    metaDescription:
      "Learn about how Amiquus handles your personal data, privacy rights, and data collection practices.",
    metaTitle: "Privacy Policy | Amiquus",
    sections: {
      0: {
        heading: "Introduction",
        id: "introduction",
        paragraphs: {
          0: "Welcome to Amiquus. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.",
        },
      },
      1: {
        heading: "Information We Collect",
        id: "data-we-collect",
        list: {
          0: "Personal Data: Email address, first name, last name, and profile picture (if provided through third-party authentication).",
          1: "Account Data: Your login credentials and account preferences.",
          2: "Usage Data: Information on how you use our website and services.",
          3: "Car Search Preferences: The vehicle criteria you set for monitoring (brand, model, price range, etc.).",
          4: "Telegram Information: If you choose to receive notifications via Telegram, we store your Telegram chat ID and bot token.",
          5: "Payment Information: When you make a purchase, our payment processor collects payment details necessary to process your transaction. Amiquus does not store your full credit card information.",
        },
        paragraphs: {
          0: "We collect several different types of information for various purposes to provide and improve our service to you:",
        },
      },
      2: {
        heading: "How We Use Your Data",
        id: "how-we-use-data",
        list: {
          0: "To provide and maintain our service",
          1: "To notify you about changes to our service",
          2: "To allow you to participate in interactive features of our service",
          3: "To provide customer support",
          4: "To gather analysis or valuable information so that we can improve our service",
          5: "To monitor the usage of our service",
          6: "To detect, prevent and address technical issues",
          7: "To process payments and prevent fraudulent transactions",
          8: "To send car listings that match your preferences via your chosen notification method",
        },
        paragraphs: {
          0: "We use your personal data for the following purposes:",
        },
      },
      3: {
        heading: "Data Storage and Security",
        id: "data-storage",
        paragraphs: {
          0: "We implement appropriate security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. All data is stored on secure servers with encryption in transit and at rest.",
          1: "We retain your personal data only for as long as necessary for the purposes set out in this privacy policy, including for the purposes of satisfying any legal, regulatory, tax, accounting, or reporting requirements.",
        },
      },
      4: {
        heading: "Your GDPR Rights",
        id: "gdpr",
        list: {
          0: "The right to access, update or delete the information we have on you",
          1: "The right of rectification",
          2: "The right to object",
          3: "The right of restriction",
          4: "The right to data portability",
          5: "The right to withdraw consent",
        },
        paragraphs: {
          0: "If you are a resident of the European Economic Area (EEA), you have certain data protection rights. Amiquus aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your personal data.",
          1: "You have the following data protection rights:",
        },
      },
      5: {
        heading: "Cookies Policy",
        id: "cookies",
        list: {
          0: "Keep you signed in",
          1: "Understand how you use our website",
          2: "Remember your preferences",
          3: "Customize your experience",
        },
        paragraphs: {
          0: "Cookies are small pieces of data stored on your device. We use cookies to:",
        },
      },
      6: {
        heading: "Third-Party Services",
        id: "third-party",
        list: {
          0: "Payment processors (Stripe)",
          1: "Analytics providers",
          2: "Customer support services",
          3: "Hosting and cloud infrastructure providers",
        },
        paragraphs: {
          0: "We may employ third-party companies and individuals to facilitate our service, provide the service on our behalf, perform service-related tasks, or assist us in analyzing how our service is used.",
          1: "These third parties include:",
        },
        paragraphs2: {
          0: "These third parties have access to your personal data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.",
        },
      },
      7: {
        heading: "Changes to This Privacy Policy",
        id: "changes",
        paragraphs: {
          0: "We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the 'Last updated' date.",
          1: "You are advised to review this privacy policy periodically for any changes. Changes to this privacy policy are effective when they are posted on this page.",
        },
      },
      8: {
        heading: "Contact Us",
        id: "contact",
        list: {
          0: "By email: privacy@amiquus.com",
          1: "By visiting the contact page on our website",
        },
        paragraphs: {
          0: "If you have any questions about this privacy policy, please contact us:",
        },
      },
    },
    title: "Privacy Policy",
  },
  profile: {
    account: {
      cancel: "Cancel",
      desc: "Update your account information and preferences.",
      email: "Email",
      name: "Name",
      save: "Save Changes",
      title: "Account Settings",
      username: "Username",
    },
    alerts: {
      add: "Add New Alert",
      cta: "Create your first alert",
      desc: "Manage your car search alerts and notification preferences.",
      none: "You don't have any active car alerts.",
      title: "Car Alert Subscriptions",
      warning:
        "⚠️ Changes to your subscription will be applied in the next billing period, and only after a successful payment. If the payment fails, your current alert setup will remain unchanged.",
    },
    logout: {
      desc: "Are you sure you want to log out of your account?",
      success: "You have been successfully logged out.",
      title: "Log Out",
    },
    payments: {
      desc: "Manage your payment methods for subscription billing.",
      encrypted: "Your payment information is encrypted and securely stored.",
      none: "You don't have any payment methods saved.",
      title: "Payment Methods",
    },
    security: {
      confirm: "Confirm New Password",
      current: "Current Password",
      desc: "Manage your security settings and privacy preferences.",
      new: "New Password",
      title: "Privacy & Security",
      update: "Update Password",
    },
    sidebar: {
      account: "Account settings",
      logout: "Log out",
      membersince: "Member since",
      methods: "Payment methods",
      privacy: "Privacy & security",
      subscriptions: "Subscriptions",
    },
    tabs: {
      alerts: "My Alerts",
      payments: "Payment Methods",
    },
  },
  register: {
    alreadyhave: "Already have an account?",
    and: "and",
    confirmpassword: "Confirm Password",
    createbtn: "Create account",
    description: "Sign up to start tracking your dream car",
    email: "Email",
    firstname: "First Name",
    google: "Sign up with Google",
    lastname: "Last Name",
    login: "Log in",
    orcontinue: "Or continue with",
    password: "Password",
    privacypolicy: "Privacy Policy",
    termsnotice: "I agree to the",
    termsofservice: "Terms of Service",
    title: "Create an account",
    toast: {
      failure: {
        desc: "Please check your information and try again",
        title: "Registration failed",
      },
      invalidusername: {
        desc: "Username must be alphanumeric and between 3 and 20 characters",
        title: "Invalid username",
      },
      missingfields: {
        desc: "Please fill in all required fields",
        title: "Missing fields",
      },
      passwordmismatch: {
        desc: "Please make sure your passwords match",
        title: "Passwords don't match",
      },
      success: {
        desc: "Welcome to Amiquus! You will be redirected to verify your email address.",
        title: "Registration successful",
      },
      termsnotaccepted: {
        desc: "You must accept the terms and privacy policy to continue",
        title: "Terms not accepted",
      },
    },
    username: "Username",
  },
  review: {
    actions: {
      previous: "Previous",
      submit: "Proceed to Payment",
    },
    description:
      "Please review your subscription details before proceeding to payment.",
    monitoring: {
      facebookurl: "Facebook URL",
      title: "Monitoring Settings",
      updatefrequency: "Update Frequency",
      websites: "Websites",
    },
    notification: {
      language: "Notification Language",
      telegram: "Telegram Bot",
      title: "Notification Settings",
    },
    personal: {
      email: "Email",
      name: "Name",
      title: "Personal Information",
    },
    specs: {
      brand: "Brand",
      fueltype: "Fuel Type",
      mileage: "Mileage Range (km)",
      model: "Model",
      price: "Price Range (€)",
      title: "Car Specifications",
      yearrange: "Year Range",
    },
    summary: {
      base: "Base Subscription",
      extrawebsites: "Additional Websites",
      frequencyupgrade: "Frequency Upgrade",
      title: "Subscription Summary",
      total: "Total (Monthly)",
    },
    terms: {
      checkbox: "I agree to the",
      error: "You must agree to the terms and conditions",
      note: "Your subscription will renew automatically each month. You can cancel anytime.",
      privacy: "Privacy Policy",
      tos: "Terms of Service",
    },
    title: "Review Your Subscription",
  },
  setupAlerts: {
    basetitle: "$79.99/month",
    basicplan: "Basic Plan",
    button: "Start My Car Alert Service",
    cancel: "Cancel anytime",
    subtitle:
      " Configure your Telegram bot to receive notifications about your dream car",
    title: "Set Up Your Car Alerts",
    toasts: {
      contactbot: {
        description:
          "You must start a chat with our Telegram bot and send a message to receive car alerts. Please follow the instructions below to contact the bot.",
        title: "Contact Bot Required",
      },
      error: {
        title: "Error creating subscription",
      },
      success: {
        description: "Your subscription has been created successfully",
        title: "Subscription created",
      },
      terms: {
        description: "You must agree to the terms of service to continue",
        title: "Terms not accepted",
      },
    },
  },
  signUp: {
    cta: "Get Alerts Now",
    heading: "Create Your Car Alert",
    subheading:
      "Set up your personalized car listing notifications in just a few steps.",
    toast: {
      error: {
        description:
          "We couldn't create your subscription. Please try again later.",
        title: "Subscription failed",
      },
      success: {
        description: "Your subscription has been created successfully",
        title: "Subscription created",
      },
    },
    waitlist: {
      cta: "Join Waitlist",
      message:
        "We are currently at full capacity. Please join our waitlist to be notified when a spot opens up.",
    },
  },
  subscription: {
    actions: {
      back: "Back",
      save: "Save Changes",
    },
    description:
      "You can pause your subscription at any time. When you pause your subscription, your car alerts will stop until you resume them.",
    error: "Go back to dashboard",
    form: {
      status: {
        active: "Active",
        label: "Status",
        paused: "Paused",
        placeholder: "Select Status",
      },
    },
    notfound: "Subscription not found",
    notfoundsub: "Go back to dashboard",
    subtitle: "Edit your subscription details below",
    title: "Subscription Details",
    toasts: {
      error: {
        title: "Error updating subscription",
      },
      priceerror: {
        description:
          "You pause and update your subscription price at the same time. You either need to pause or update the price.",
        title: "Cannot Update Subscription",
      },
      success: {
        description:
          "Your subscription for {{brand}} {{model}} has been updated successfully",
        title: "Subscription Updated",
      },
    },
  },
  support: {
    emailsupport: {
      description: "Send us an email and we'll get back to you within 24 hours",
      email: "support@amiquus.com",
      title: "Email Support",
    },
    faqheading: "Frequently Asked Questions",
    faqs: {
      cancel: {
        answer:
          'You can cancel your subscription at any time from your account profile page. Click on the "Subscriptions" tab, locate the subscription you wish to cancel, and click the "Cancel Subscription" button. Your service will continue until the end of your current billing period.',
        question: "How do I cancel my subscription?",
      },
      facebook: {
        answer:
          "Yes, we support Facebook Marketplace monitoring. To set this up, you'll need to provide the URL to the Facebook Marketplace search results page with your desired filters applied. Our system will then monitor that specific search for new listings that match your criteria.",
        question: "Can I monitor Facebook Marketplace?",
      },
      full: {
        answer:
          "To maintain our high quality of service, we limit the number of active subscriptions. If all slots are full, you can join our waitlist. We'll notify you as soon as a slot becomes available, and you'll have priority to claim it before we open it to the general public.",
        question: "What happens if all subscription slots are full?",
      },
      telegram: {
        intro: "To set up Telegram notifications, follow these steps:",
        outro:
          "If you need more help, our detailed guide is available in your dashboard.",
        question: "How do I set up Telegram notifications?",
        steps: {
          0: "Create a Telegram bot using BotFather (instructions in our dashboard)",
          1: "Copy your API token and chat ID",
          2: 'Enter these details in your account settings under "Notification Preferences"',
          3: 'Test your connection using the "Send Test Message" button',
        },
      },
      updates: {
        answer:
          "The update frequency depends on your subscription plan. Basic plans receive updates every 6 hours, while Premium plans can get updates as frequently as every 30 minutes. You can view and modify your current update frequency in your subscription settings.",
        question: "How often are car listings updated?",
      },
    },
    metaDescription:
      "Get help with your Amiquus account, subscription, or car alerts. Browse our help center or contact our support team for assistance.",
    metaTitle: "Support | Amiquus - Help Center",
    stillneedhelp: {
      button: "Contact Support",
      description:
        "If you couldn't find the answer to your question, feel free to reach out to our support team. We're here to help!",
      heading: "Still need help?",
    },
    subtitle:
      "Find answers to common questions or get in touch with our support team",
    title: "Support Center",
  },
  telegram: {
    actions: {
      continue: "Continue",
      previous: "Previous",
    },
    bottokenexample: "Example: 5432109876:ABCDefGhIJklMNoPqrSTuvWXyz1234567890",
    bottokenlabel: "Telegram Bot Token",
    bottokenplaceholder: "Enter your bot token from BotFather",
    caralerttitle: "🚗 New Car Alert!",
    chatiddescription: "You can get this by messaging @userinfobot on Telegram",
    chatidlabel: "Your Telegram Chat ID",
    chatidplaceholder: "Enter your Telegram chat ID",
    chatidsteps: {
      0: 'Open Telegram and search for "userinfobot"',
      1: "Send any message to the bot",
      2: "The bot will reply with your information including your Chat ID",
      3: "Copy your Chat ID",
    },
    chatidtitle: "How to get your Telegram Chat ID:",
    confirmcontact: "I have started a chat with the bot and sent a message",
    contact: "Contact Us",
    contactbotinstruction:
      "Start a chat with our Telegram bot by clicking the link below and sending it a message:",
    contactbotnote:
      "This is required to receive car alerts. You can scan the QR code if you're on desktop.",
    description:
      "Set up Telegram notifications by providing your bot token and chat ID.",
    errors: {
      chatid: "Telegram chat ID is required",
      language: "Notification language is required",
      token: "Telegram bot token is required",
      username: "Telegram username is required",
    },
    examples: {
      chatid: "You can get this by messaging @userinfobot on Telegram",
      token: "Example: 5432109876:ABCDefGhIJklMNoPqrSTuvWXyz1234567890",
    },
    heading: "Telegram Setup",
    helpdescription: "Watch the video below for a step-by-step guide.",
    helptitle: "Need help setting up your Telegram Bot Token and Chat ID?",
    info: "If you have issues creating the telegram bot, contact us and we will call you and help you create one.",
    instructions: {
      botstep1: "Open Telegram and search for @BotFather",
      botstep2: "Send the command /newbot",
      botstep3: "Follow the instructions to create a bot",
      botstep4: "Copy the token provided by BotFather",
      bottitle: "How to get a Telegram Bot Token:",
      chatstep1: "Open Telegram and search for @userinfobot",
      chatstep2: "Send any message to the bot",
      chatstep3:
        "The bot will reply with your information including your Chat ID",
      chatstep4: "Copy the Chat ID (it's a number)",
      chattitle: "How to get your Telegram Chat ID:",
    },
    kilometreslabel: "Kilometres: {{kms}}",
    labels: {
      chatid: "Your Telegram Chat ID",
      language: "Notification Language",
      token: "Telegram Bot Token",
      username: "Telegram Username",
    },
    languagelabel: "Notification Language",
    languageplaceholder: "Select Telegram Message Language",
    languages: {
      de: "Deutsch",
      en: "English",
      es: "Español",
      fr: "Français",
      it: "Italiano",
    },
    locationlabel: "Location: {{location}}",
    placeholders: {
      chatid: "Enter your Telegram chat ID",
      language: "Select Telegram Message Language",
      token: "Enter your bot token from BotFather",
      username: "Enter your Telegram username",
    },
    previewtitle: "Preview Telegram Notifications",
    pricelabel: "Price: {{price}}",
    setupsteps: {
      0: 'Open Telegram and search for "BotFather"',
      1: 'Start a chat with BotFather by clicking "Start"',
      2: "Type /newbot and follow the instructions to create a new bot",
      3: "Choose a name for your bot",
      4: "Choose a username for your bot (must end in 'bot')",
      5: "Copy the API token provided by BotFather",
      6: "Send a message to your new bot to activate the chat",
    },
    setuptitle: "Setup Instructions:",
    subheading: "Set Up Your Telegram Bot",
    usernamedescription:
      "This is the username on your Telegram account (without the @ symbol).",
    videodescription: "Watch the video below for a step-by-step guide.",
    videoprompt: "Need help setting up your Telegram Bot Token and Chat ID?",
    viewlisting: "View Listing →",
  },
  terms: {
    lastupdated: "Last updated: May 21, 2025",
    metaDescription:
      "Read the Amiquus Terms of Service that govern your use of our car listing monitoring and notification service.",
    metaTitle: "Terms of Service | Amiquus",
    sections: {
      1: {
        heading: "Agreement to Terms",
        id: "agreement",
        paragraphs: {
          0: "These Terms of Service constitute a legally binding agreement made between you and Amiquus, concerning your access to and use of our website and services.",
          1: "By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.",
        },
      },
      10: {
        heading: "Disclaimer",
        id: "disclaimer",
        paragraphs: {
          0: " Your use of the service is at your sole risk. The service is provided on an `AS IS` and `AS AVAILABLE` basis. The service is provided without warranties of any kind, whether express or implied.",
          1: "Amiquus does not warrant that the service will be uninterrupted, timely, secure, or error-free, or that the results that may be obtained from the use of the service will be accurate or reliable.",
        },
      },
      11: {
        heading: "Cookies Policy",
        id: "cookies",
        paragraphs: {
          0: "Our Cookies Policy explains what cookies are, how we use cookies, how third parties we may partner with may use cookies on our service, your choices regarding cookies, and further information about cookies. Please refer to the Cookies section in our Privacy Policy.",
        },
      },
      12: {
        heading: "Governing Law",
        id: "governing-law",
        paragraphs: {
          0: "    These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.",
          1: " Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.",
        },
      },
      13: {
        heading: "Contact Us",
        id: "contact",
        list: {
          0: "By email: legal@amiquus.com",
          1: "By visiting the contact page on our website",
        },
        paragraphs: {
          0: "  If you have any questions about these Terms, please contact us:",
        },
      },
      2: {
        heading: "Changes to Terms",
        id: "changes",
        paragraphs: {
          0: "  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect.",
          1: "By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the service.",
        },
      },
      3: {
        heading: "Account Terms",
        id: "account",
        list: {
          0: "Be at least 18 years old",
          1: "Complete the registration process",
          2: "Provide accurate, complete, and up-to-date information",
          3: "Be responsible for maintaining the security of your account and password",
          4: "Be responsible for all activities that occur under your account",
          5: "Notify us immediately upon becoming aware of any breach of security or unauthorized use of your account",
        },
        paragraphs: {
          0: "To use our services, you must:",
        },
      },
      4: {
        heading: "Payment Terms",
        id: "payment",
        list: {
          0: "All fees are exclusive of taxes, which will be added when applicable",
          1: "Subscription prices are subject to change with 30 days' notice",
          2: "Subscriptions automatically renew unless canceled before the next billing cycle",
          3: "Refunds are handled on a case-by-case basis according to our refund policy",
          4: "We use Stripe for secure payment processing, and all payment information is stored by Stripe",
        },
        paragraphs: {
          0: " Amiquus offers subscription-based services with the following terms:",
        },
      },
      5: {
        heading: "Capacity Limits",
        id: "capacity",
        list: {
          0: "New users may join our waitlist",
          1: "Waitlist position is determined on a first-come, first-served basis",
          2: "When capacity becomes available, waitlisted users will be notified in order",
          3: "We reserve the right to modify capacity limits at any time",
        },
        paragraphs: {
          0: "In order to maintain service quality and reliability, Amiquus limits the number of active subscriptions to 30. When this limit is reached:",
        },
      },
      6: {
        heading: "Web Scraping Limitations",
        id: "scraping",
        list: {
          0: "Amiquus respects the terms of service of the websites we monitor",
          1: "We implement rate limiting and respectful crawling practices",
          2: "The availability of certain websites may change based on their terms and technical measures",
          3: "We make no guarantees regarding the completeness or timeliness of scraped data",
        },
        paragraphs: {
          0: "Our service accesses and processes data from multiple car listing websites. By using our service, you acknowledge that:",
        },
      },
      7: {
        heading: "Intellectual Property",
        id: "intellectual",
        paragraphs: {
          0: "The Amiquus service, including its original content, features, and functionality, are and will remain the exclusive property of Amiquus. Our service is protected by copyright, trademark, and other laws of both the United States and foreign countries.",
          1: "Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Amiquus.",
        },
      },
      8: {
        heading: "Termination",
        id: "termination",
        paragraphs: {
          0: "   We may terminate or suspend your account immediately, without prior notice or liability, for any reason, including, without limitation, if you breach the Terms.",
          1: " Upon termination, your right to use the service will immediately cease. If you wish to terminate your account, you may simply discontinue using the service or contact us to request account deletion.",
        },
      },
      9: {
        heading: "Limitation of Liability",
        id: "limitations",
        list: {
          0: "Your access to or use of or inability to access or use the service",
          1: "Any conduct or content of any third party on the service",
          2: "Any content obtained from the service",
          3: "Unauthorized access, use, or alteration of your transmissions or content",
        },
        paragraphs: {
          0: "In no event shall Amiquus, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:",
        },
      },
    },
    title: "Terms of Service",
  },
  verifyEmail: {
    codelabel: "Verification Code",
    description: "A verification code has been sent to your email.",
    footernote: "Didn’t receive the code? Check your spam folder.",
    resendbutton: "Resend Code",
    resendcountdown: "You can resend the code in {{seconds}}s",
    title: "Verify Your Email",
    toast: {
      emailupdated: "Email updated",
      entervalidemail: "Please enter a valid email address",
      error: "Error",
      failed: "Verification failed",
      invalidemail: "Invalid email",
      resent: "Verification code resent",
      sameemail: "Same email",
      sameemaildesc: "The new email is the same as the current email",
      verified: "Email verified",
    },
    updateemailbutton: "Update Email",
    updateemaillabel: "Update Email",
    verifybutton: "Verify Email",
  },
  waitlist: {
    cantjoin: {
      description:
        " We'll notify you as soon as a subscription spot becomes available",
      title: "Join the Waitlist",
    },
    form: {
      email: {
        description:
          "We'll use this email to notify you when a spot becomes available",
        label: "Email",
        placeholder: "john.doe@example.com",
      },
      firstname: {
        label: "First Name",
        placeholder: "John",
      },
      lastname: {
        label: "Last Name",
        placeholder: "Doe",
      },
      submit: "Join Waitlist",
      submitting: "Submitting...",
    },
    limited: {
      available:
        "{{remaining}} subscription spots out of {{capacity}} currently available.",
      description:
        "We limit our system to only 30 active subscribers to ensure:",
      full: "All subscription spots are currently filled. Join the waitlist to be notified when a spot becomes available.",
      heading: "Limited Availability",
      points: {
        0: "Exceptional scraping reliability and speed for all users",
        1: "Reduced chances of being blocked by car listing websites",
        2: "Personalized support for each subscriber",
        3: "Fair distribution of server resources",
      },
    },
    metaDescription:
      "Join the Amiquus waitlist to be notified when subscriptions become available.",
    metaTitle: "Join the Waitlist - Amiquus",
    subtitle:
      "Due to high demand, we limit the number of active subscriptions to ensure the best service quality for all users.",
    success: {
      button: "Return to Homepage",
      description:
        "We'll notify you as soon as a subscription spot becomes available",
      message:
        "Thank you for your interest in Amiquus! We've added you to our waitlist and will contact you as soon as we have an opening.",
      title: "You're on the waitlist!",
    },
    title: "Join Our Waitlist",
  },
  waitlistPrompt: {
    button: "Join Waitlist",
    description:
      "We're currently at full capacity. Join the waitlist to be notified when a slot becomes available.",
    title: "Join the Waitlist",
  },
  websiteSelection: {
    actions: {
      continue: "Continue",
      previous: "Previous",
    },
    description:
      "Choose which websites you want to monitor and how frequently you want updates.",
    errors: {
      facebookurl:
        "Facebook Marketplace URL is required when Facebook is selected",
      websites: "At least one website must be selected",
    },
    heading: "Website Selection",
    help: {
      facebookurl:
        "Paste the URL of your Facebook Marketplace search results here.",
      updatefrequency:
        "How often should we check for new listings? Higher frequencies may cost more.",
      videodesc: "Watch the video below for step-by-step instructions.",
      videotitle: "Need help finding your Facebook Marketplace search link?",
      websites: "Select one or more websites to monitor for car listings.",
    },
    labels: {
      facebookurl: "Facebook Marketplace URL",
      updatefrequency: "Update Frequency",
      websites: "Websites to monitor",
    },
    placeholders: {
      frequency: "Select frequency",
    },
  },
};

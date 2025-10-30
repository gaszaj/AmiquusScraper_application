export const fi = {
  about: {
    description:
      "Uudistamme tapaa, jolla ihmiset löytävät täydellisen käytetyn autonsa tuomalla edistyksellisen seurantateknologian kaikkien ulottuville.",
    join: {
      cta: "Katso avoimet työpaikat",
      description:
        "Etsimme jatkuvasti lahjakkaita osaajia, jotka ovat intohimoisia teknologian ja autokaupan kokemuksen mullistamisen suhteen. Tutustu avoimiin työpaikkoihimme ja liity mukaan AMIQUUSin missioon.",
      heading: "Liity tiimiimme",
    },
    meta: {
      description:
        "Tutustu AMIQUUSiin, missioomme mullistaa käytettyjen autojen ostaminen sekä tiimiimme älykkään autolistojen seurantapalvelumme takana.",
      title: "Tietoa meistä | Amiquus – Auton ilmoitusten seurantapalvelu",
    },
    mission: {
      heading: "Missiomme",
      items: {
        0: {
          description:
            "Poista tarve päivittää useita verkkosivustoja jatkuvasti automatisoimalla hakuprosessi ja saamalla ajantasaiset ilmoitukset.",
          title: "Säästä aikaa",
        },
        1: {
          description:
            "Ole ensimmäinen, joka saa tiedon huippudiilistä – näin saat etulyöntiaseman kilpailulla markkinalla, jossa ajoitus on kaikki kaikessa.",
          title: "Löydä parempia tarjouksia",
        },
        2: {
          description:
            "Tee harkittuja päätöksiä kattavan seurannan avulla useilla luotettavilla autolistauksilla.",
          title: "Osta luottavaisin mielin",
        },
      },
    },
    questions: {
      description:
        "Lue lisää siitä, miten palvelumme toimii, tutustu hinnoitteluvaihtoehtoihin tai ota yhteyttä tukitiimiimme.",
      heading: "Onko kysyttävää?",
      links: {
        faq: "Katso usein kysytyt kysymykset",
        pricing: "Näytä hinnat",
        support: "Ota yhteyttä tukeen",
      },
    },
    story: {
      heading: "Meidän tarinamme",
      paragraphs: {
        0: "Amiquus sai alkunsa vuonna 2023, kun perustajamme Alex vietti kuukausia päivittämällä autolistauksia etsien tiettyä harvinaista mallia hyvään hintaan. Useiden mahdollisuuksien mentyä ohi viivästyneiden ilmoitusten takia hän tajusi, että täytyy olla parempi tapa.",
        1: "Työskennellen pienen kehittäjä- ja autoharrastajatiimin kanssa Alex rakensi valvontajärjestelmän, joka pystyi seuraamaan ilmoituksia useilla sivustoilla samanaikaisesti ja lähettämään välittömiä ilmoituksia, kun sopivia osumia löytyi.",
        2: "Se, mikä alkoi henkilökohtaisena projektina, herätti nopeasti ystävien ja perheen kiinnostuksen, ja jo alkuvuodesta 2025 AMIQUUS syntyi palveluksi, joka on kaikkien saatavilla. Nykyään autamme autonostajia ympäri maata säästämään aikaa ja löytämään parempia tarjouksia älykkään seurantateknologiamme avulla.",
      },
    },
    team: {
      heading: "Tiimimme",
      members: {
        0: {
          bio: "Entinen ohjelmistoinsinööri, jolla on intohimo autoihin ja innovatiivisten ratkaisujen kehittämiseen.",
          name: "Alex Morgan, näin se käy",
          role: "Perustaja ja toimitusjohtaja",
        },
        1: {
          bio: "Datatieteen asiantuntija, joka on erikoistunut web-scrapingiin ja tiedonhakujärjestelmiin.",
          name: "Sarah Chen, näin se käy",
          role: "Teknologiajohtaja",
        },
        2: {
          bio: "Full-stack-kehittäjä, jolla on vahva osaaminen suorituskykyisten ilmoitusjärjestelmien rakentamisessa.",
          name: "Marcus Lee",
          role: "Pääkehittäjä",
        },
        3: {
          bio: "Entinen autokaupan ammattilainen, joka on omistautunut auttamaan asiakkaita löytämään heille täydellisen ajoneuvon.",
          name: "Elena Rodriguez",
          role: "Asiakastuki",
        },
      },
    },
    title: "Tietoa Amiquusista",
  },
  alertSchema: {
    errors: {
      carbrand: "Automerkin valinta on pakollinen",
      carmodel: "Auton malli on pakollinen",
      facebookmarketplaceurl:
        "Facebook Marketplace -osoite vaaditaan, kun Facebook on valittuna",
      fueltype: "Polttoainetyyppi on pakollinen",
      maxkilometers: "Maksimikilometrien on oltava numero",
      notificationlanguage: "Ilmoituskieli on pakollinen",
      pricemax: "Enimmäishinnan on oltava numero",
      pricemin: "Vähimmäishinnan on oltava numero",
      telegramchatid: "Telegram-keskustelun tunnus vaaditaan",
      telegramtoken: "Telegram-botin tunnus vaaditaan",
      telegramusername: "Telegram-käyttäjätunnus on pakollinen",
      websitesselected: "Vähintään yksi verkkosivusto on valittava",
      yearmax: "Maksimivuoden täytyy olla kelvollinen vuosi",
      yearmin: "Vähimmäisvuoden on oltava kelvollinen vuosi",
    },
  },
  carDetails: {
    actions: {
      continue: "Jatka",
      previous: "Edellinen",
    },
    description:
      "Määritä etsimäsi auton tiedot. Kaikki kentät ovat vapaaehtoisia – jätä kenttä tyhjäksi saadaksesi laajemman valikoiman tuloksia.",
    errors: {
      carbrand: "Automerkin valinta on pakollinen",
      carmodel: "Auton malli on pakollinen",
      fueltype: "Polttoainetyyppi on pakollinen",
      maxkilometers: "Maksimikilometrien täytyy olla numero",
      pricemax: "Enimmäishinnan täytyy olla numero",
      pricemin: "Vähimmäishinnan on oltava numero",
      yearmax: "Maksimivuoden täytyy olla kelvollinen vuosi",
      yearmin: "Vähimmäisvuoden on oltava kelvollinen vuosi",
    },
    heading: "Auton tiedot",
    labels: {
      carbrand: "Auton merkki",
      carmodel: "Auton malli",
      fueltype: "Polttoainetyyppi",
      maxkilometers: "Maksimikilometrit",
      pricemax: "Enimmäishinta",
      pricemin: "Vähimmäishinta",
      yearmax: "Suurin vuosi",
      yearmin: "Vähimmäisvuosi",
    },
    options: {
      nomodelsavailable: "Ei malleja saatavilla",
    },
    placeholders: {
      carbrand: "Valitse auton merkki",
      carmodel: "Valitse automalli",
      carmodeldisabled: "Valitse ensin auton merkki",
      fueltype: "Valitse polttoainetyyppi",
      maxkilometers: "Syötä enimmäiskilometrit",
      pricemax: "Syötä enimmäishinta",
      pricemin: "Syötä vähimmäishinta",
      yearmax: "Syötä enimmäisvuosi",
      yearmin: "Syötä vähimmäisvuosi",
    },
  },
  dashboardPayment: {
    add: "Lisää maksutapa",
    description:
      "Lisää uusi luotto- tai pankkikortti tilaustesi maksamista varten.",
    errormessage: "Tapahtui odottamaton virhe",
    errortitle: "Virhe maksutavan lisäämisessä",
    initerror: {
      description: "Maksun asetusten alustaminen epäonnistui",
      title: "Virhe",
    },
    processing: "Käsitellään...",
  },
  dashboardPaymentMethodCard: {
    cancel: "Peruuta",
    confirmremove: "Poista kortti",
    default: "Oletus",
    expires: "Vanhenee",
    remove: "Poista",
    removedescription:
      "Haluatko varmasti poistaa {{brand}}-korttisi, jonka numero päättyy {{last4}}?",
    removetitle: "Poista maksutapa",
    removewarning:
      "Tämä on oletusmaksutapasi, ja sen poistaminen voi vaikuttaa aktiivisiin tilauksiisi.",
    setasdefault: "Aseta oletukseksi",
    setdefaultdescription:
      "Haluatko asettaa {{brand}}-kortin, jonka numero päättyy {{last4}}, oletusmaksutavaksi? Tätä korttia käytetään kaikkiin tuleviin tilausmaksuihin.",
    setdefaulttitle: "Aseta oletusmaksutapa",
  },
  dashboardSubscriptionCard: {
    cancelalert: "Peruuta hälytys",
    canceldescription:
      "Haluatko varmasti peruuttaa autohälytyksen mallille {{brand}} {{model}}? Tämä lopettaa kaikki ilmoitukset, ja jos haluat seurata tätä autoa uudelleen, sinun täytyy luoda uusi hälytys.",
    canceltitle: "Peru auton hälytys",
    confirmcancel: "Peruuta hälytys",
    edit: "Muokkaa",
    keepmyalert: "Pidä hälytykseni",
    language: "Kieli",
    price: "Hinta",
    pricerange: "Hinta",
    updates: "Päivitykset",
    websites: "Verkkosivut",
    years: "Vuodet",
  },
  faq: {
    contactlink: "Ota yhteyttä tukitiimiimme",
    contactprompt: "Onko vielä kysyttävää?",
    questions: {
      0: {
        answer:
          "Ilmoitusnopeus riippuu valitsemastasi päivitystiheydestä. Oletuksena tunnin välein päivittyvällä suunnitelmalla saat ilmoitukset uuden ilmoituksen julkaisusta tunnin sisällä. Lähes reaaliaikaisia ilmoituksia (muutaman minuutin sisällä julkaisusta) varten voit päivittää tiheämpään päivityssuunnitelmaamme.",
        question:
          "Kuinka nopeasti saan ilmoitukset, kun uusi ilmoitus julkaistaan?",
      },
      1: {
        answer:
          "Kyllä! Voit luoda useita hakuprofiileja eri kriteereillä. Jokainen profiili lasketaan omaksi tilauksekseen, mutta voit hallita niitä kaikkia yhdestä tilistä. Tämä on täydellistä, jos etsit samanaikaisesti erilaisia ajoneuvotyyppejä.",
        question: "Voinko seurata useita eri autotyyppejä samanaikaisesti?",
      },
      2: {
        answer:
          "Tällä hetkellä tuemme suurimpia autolistauksia tarjoavia alustoja, kuten AutoTrader, CarGurus, Cars.com ja Facebook Marketplace. Laajennamme jatkuvasti kattavuuttamme lisätäksemme uusia sivustoja käyttäjien toiveiden ja alueellisen suosion perusteella.",
        question: "Mitä verkkosivustoja tuette tällä hetkellä?",
      },
      3: {
        answer:
          "Ei lainkaan! Tarjoamme vaiheittaiset ohjeet sekä tekstinä että videona, jotta saat Telegram-botin helposti käyttöösi. Suurin osa käyttäjistä saa asennuksen valmiiksi alle 5 minuutissa, vaikka ei olisi teknistä taustaa.",
        question: "Tarvitaanko teknistä osaamista Telegram-botin käyttöön?",
      },
      4: {
        answer:
          "Kyllä, voit muokata hakukriteereitäsi milloin tahansa oman tilisi hallintapaneelissa. Muutokset astuvat voimaan välittömästi, ja ilmoituksesi päivittyvät sen mukaisesti ilman katkoksia palvelussa.",
        question:
          "Voinko muuttaa hakukriteerejäni tilauksen asettamisen jälkeen?",
      },
      5: {
        answer:
          'Voit peruuttaa tilauksesi milloin tahansa oman tilisi hallintapaneelista. Siirry kohtaan "Tilaukset", valitse peruutettava tilaus ja napsauta "Peruuta tilaus" -painiketta. Palvelusi on käytössä nykyisen laskutuskauden loppuun asti.',
        question: "Miten perun tilaukseni?",
      },
    },
    subtitle: "Löydä vastaukset yleisimpiin kysymyksiin palvelustamme.",
    title: "Usein kysytyt kysymykset",
  },
  faqs: {
    general: {
      heading: "Yleiset kysymykset",
      howitworks: {
        answer: {
          0: "Asetat hakukriteerisi (merkki, malli, hintahaarukka jne.)",
          1: "Sinä valitset, mitä verkkosivustoja haluat seurata",
          2: "Yhdistät Telegram-tilisi ilmoituksia varten",
          3: "Järjestelmämme seuraa jatkuvasti valitsemiasi verkkosivustoja uusien ilmoitusten varalta",
          4: "Kun sopiva auto löytyy, saat välittömästi Telegram-ilmoituksen kaikilla tiedoilla ja suoralla linkillä.",
        },
        question: "Miten se toimii?",
      },
      whatis: {
        answer:
          "Amiquus on palvelu, joka seuraa useita autolistauksia verkossa ja etsii ajoneuvoja, jotka vastaavat juuri sinun kriteerejäsi. Kun sopiva ilmoitus löytyy, saat välittömän ilmoituksen Telegramin kautta, jolloin voit olla ensimmäisten joukossa ottamassa yhteyttä myyjiin ja varmistamassa parhaat tarjoukset.",
        question: "Mikä on Amiquus?",
      },
      whichwebsites: {
        answerintro:
          "Seuraamme tällä hetkellä seuraavia suuria autolistauksia tarjoavia alustoja:",
        list: {
          0: "AutoTrader",
          1: "Cars.com",
          2: "CarGurus",
          3: "TrueCar",
          4: "Facebook Marketplace (URL-osoitteen kautta)",
          5: "Craigslist",
          6: "eBay Motors",
        },
        outro:
          "Lisäämme jatkuvasti uusia alustoja tarjotaksemme mahdollisimman kattavan palvelun.",
        question: "Mitä autolistauksia seuraavia sivustoja seuraat?",
      },
    },
    metaDescription:
      "Löydä vastaukset yleisimpiin kysymyksiin AMIQUUS-autonilmoitusten seurantapalvelusta, tilauksista, ilmoitusasetuksista ja muusta.",
    metaTitle: "Usein kysytyt kysymykset | Amiquus",
    subscription: {
      cancel: {
        note: "Tilauksesi pysyy aktiivisena nykyisen laskutuskauden loppuun asti.",
        question: "Miten perun tilaukseni?",
        steps: {
          0: "Kirjaudu tilillesi",
          1: 'Siirry sivulle "Profiili"',
          2: 'Valitse "Tilaukset"-välilehti',
          3: 'Napsauta "Peru tilaus" -painiketta sen tilauksen vieressä, jonka haluat peruuttaa.',
        },
        stepsintro:
          "Voit peruuttaa tilauksesi milloin tahansa oman tiliprofiilisi sivulta:",
      },
      cost: {
        answer: {
          0: "Hintamme alkavat 79,99 dollarista kuukaudessa yhden verkkosivuston valvontaan, päivityksillä kuuden tunnin välein. Lisäsivustot maksavat 4,99 dollaria kuukaudessa kappaleelta. Voit myös päivittää päivitystiheyttä nopeampia ilmoituksia varten.",
          1: "Tarkemmat hintatiedot löydät kotisivumme hinnasto-osiosta.",
        },
        question: "Kuinka paljon tilaus maksaa?",
      },
      heading: "Tilaukseen liittyvät kysymykset",
      limit: {
        intro: "Rajaamme palvelumme 30 aktiiviseen tilaajaan varmistaaksemme:",
        list: {
          0: "Palvelun korkein laatu ja tietojen tarkkuus",
          1: "Henkilökohtaista tukea jokaiselle tilaajalle",
          2: "Nopeampi ilmoitusten toimitus vilkkaimpina ilmoitusaikoina",
          3: "Eettinen tiedonkeruu, joka ei kuormita kohdesivustoja",
        },
        outro:
          "Jos olemme täynnä, voit liittyä jonotuslistalle saadaksesi ilmoituksen, kun paikka vapautuu.",
        question: "Miksi tilaajamäärälle on asetettu raja?",
      },
      multiple: {
        answer:
          "Kyllä, voit luoda useita tilauksia yhden käyttäjätilin alle. Jokainen tilaus voi seurata eri automalleja, merkkejä tai hintaluokkia. Tämä on erityisen kätevää, jos etsit useampaa ajoneuvoa tai autat ystäviä ja perhettä auton etsinnässä.",
        question: "Voinko ottaa useita tilauksia eri automalleille?",
      },
    },
    subtitle:
      "Löydä nopeita vastauksia yleisimpiin kysymyksiin AMIQUUS-autolistauksen seurantapalvelustamme",
    support: {
      button: "Ota yhteyttä tukeen",
      description:
        "Jos et löytänyt vastausta kysymykseesi, tukitiimimme on täällä auttamassa!",
      heading: "Onko vielä kysyttävää?",
    },
    technical: {
      frequency: {
        intro: "Ilmoitusten tiheys riippuu seuraavista:",
        list: {
          0: "Valitsemasi päivitystiheys­paketti (6 tunnin välein – 30 minuutin välein)",
          1: "Kuinka monta uutta ilmoitusta vastaa hakuehtojasi",
          2: "Kuinka aktiiviset markkinat ovat valitsemallesi merkille/mallille",
        },
        outro:
          "Saat ilmoituksia vain, kun löytyy uusia ilmoituksia, jotka vastaavat hakukriteereitäsi.",
        question: "Kuinka usein saan ilmoituksia?",
      },
      heading: "Tekniset kysymykset",
      privacy: {
        intro:
          "Otamme tietosuoja-asiat vakavasti ja käytämme seuraavia toimenpiteitä:",
        list: {
          0: "Salatut tiedot siirron aikana ja levossa",
          1: "Turvalliset maksut Stripe-palvelun kautta",
          2: "Ei tietojen jakamista kolmansille osapuolille",
          3: "Voit pyytää tai poistaa tietosi milloin tahansa.",
        },
        outro: "Lue koko tietosuojakäytäntömme saadaksesi lisätietoja.",
        question: "Miten henkilötietojani suojataan?",
      },
      telegram: {
        note: "Yksityiskohtaiset vaiheittaiset ohjeet kuvakaappauksin ovat saatavilla tilauksen asennusprosessin aikana.",
        question: "Miten otan käyttöön Telegram-ilmoitukset?",
        steps: {
          0: "Luo Telegram-botti BotFatherin avulla (ohjeet annetaan käyttöönoton aikana)",
          1: "Kopioi bottisi token BotFatherista",
          2: "Aloita keskustelu bottisi kanssa",
          3: "Hanki chat-tunnuksesi (ohjeet annetaan käyttöönoton yhteydessä)",
          4: "Syötä bottisi token ja chat-tunnus AMIQUUS-tilauksesi asetuksiin",
          5: "Testaa ilmoitusasetuksesi `Lähetä testiviesti` -painikkeella",
        },
        stepsintro: "Telegram-ilmoitusten käyttöönotto:",
      },
    },
    title: "Usein kysytyt kysymykset",
  },
  features: {
    account: {
      description:
        "Hallitse useita hakuprofiileja ja muokkaa tilausasetuksia helposti muutamalla klikkauksella.",
      title: "Helppo tilinhallinta",
    },
    filters: {
      description:
        "Aseta tarkat hakukriteerit, kuten merkki, malli, vuosimalli, kilometrimäärä ja hintahaarukka, jotta löydät juuri sen mitä etsit.",
      title: "Mukautetut suodattimet",
    },
    frequency: {
      description:
        "Valitse, kuinka usein tarkistamme uudet ilmoitukset – tunneittaisista päivityksistä reaaliaikaiseen seurantaan.",
      title: "Mukautettava taajuus",
    },
    heading: "Miksi valita Amiquus?",
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
        "Seuraa useita autolistauksia samanaikaisesti ilman, että sinun tarvitsee tarkistaa jokaista sivustoa erikseen.",
      title: "Seuranta useilla sivustoilla",
    },
    notifications: {
      description:
        "Saat välittömät ilmoitukset Telegramin kautta, kun hakuehtojasi vastaava auto tulee myyntiin.",
      title: "Välittömät ilmoitukset",
    },
    subheading:
      "Säästä aikaa ja löydä täydellinen autosi helposti AMIQUUSin automatisoidulla seurantapalvelulla – et jää mistään paitsi.",
  },
  footer: {
    about: "Meistä",
    blog: "Blogi",
    branddescription:
      "Henkilökohtainen apurisi täydellisen käytetyn auton löytämiseen juuri oikeaan aikaan.",
    brandtitle: "Amiquus",
    careers: "Urat",
    contact: "Yhteystiedot",
    cookies: "Evästekäytäntö",
    copyright: "Kaikki oikeudet pidätetään.",
    email: "support@amiquus.com",
    faq: "Usein kysytyt kysymykset",
    features: "Ominaisuudet",
    gdpr: "GDPR-yhteensopivuus",
    getstarted: "Aloita",
    legal: "Oikeudellinen",
    pricing: "Hinnasto",
    privacy: "Tietosuojakäytäntö",
    quicklinks: "Pikalinkit",
    support: "Tuki",
    telegram: "Ota meihin yhteyttä Telegramissa",
    terms: "Käyttöehdot",
  },
  hero: {
    button1: "Aseta hälytyksesi",
    button2: "Katso, miten se toimii",
    label: "Seuraa käytettyjen autojen ilmoituksia reaaliajassa",
    subtitle:
      "AMIQUUS ilmoittaa sinulle heti, kun unelmiesi auto tulee saataville useilla autolistauksia tarjoavilla sivustoilla. Saat ilmoitukset Telegramin kautta heti, kun sopiva auto löytyy.",
    title: "Älä koskaan enää jää paitsi täydellisestä autodiilistä",
    trustindicators: {
      cancelanytime: "Peruuta milloin tahansa",
      nosetup: "Ei asennusta tarvita",
      realtime: "Hälytykset reaaliajassa",
      websites: "Yli 15 verkkosivustoa seurannassa",
    },
  },
  howItWorks: {
    features: {
      0: "Seuraa yli 15 auton myyntisivustoa samanaikaisesti",
      1: "Mukautettavat hakukriteerit ja edistynyt suodatus",
      2: "Reaaliaikaiset ilmoitukset Telegramin kautta",
      3: "Automaattiset hintojen alennus- ja uusien ilmoitusten hälytykset",
      4: "Helppo käyttöönotto alle 5 minuutissa",
    },
    notificationmockup1: {
      description: "BMW 3-sarja, 2019, $32,500 – Juuri listattu AutoTraderissa",
      title: "Uusi ottelu löytyi!",
    },
    notificationmockup2: {
      description:
        "Mercedes C-sarja, 2020, 30 000 mailia – Hinta laskenut 2 000 $",
      title: "Telegram-ilmoitus",
    },
    setalerts: "Aseta hälytyksesi",
    steps: {
      findcar: {
        description:
          "Ole ensimmäinen, joka saa tiedon uusista ilmoituksista ja varmista parhaat diilit ennen muita.",
        title: "Löydä täydellinen autosi",
      },
      notifications: {
        description:
          "Saat ilmoitukset heti, kun kriteereihisi sopiva auto ilmestyy mille tahansa seuraamistamme verkkosivustoista.",
        title: "Saat välittömät ilmoitukset",
      },
      preferences: {
        description:
          "Valitse automerkit, mallit, hintahaarukka ja muut kriteerit, joita haluat seurata.",
        title: "Aseta asetuksesi",
      },
      telegram: {
        description:
          "Yhdistä Telegram-tilisi saadaksesi välittömät ilmoitukset uusista ilmoituksista.",
        title: "Yhdistä Telegram",
      },
    },
    subtitle:
      "Aseta kerran ja anna automatisoidun järjestelmämme löytää sinulle täydellinen autotarjous",
    title: "Miten Amiquus toimii",
    whytitle: "Miksi valita Amiquus?",
  },
  limited: {
    available: {
      buttonText: "Aloita nyt",
      description:
        "{{active}} / {{capacity}} tilausta on tällä hetkellä aktiivisena. Tilaa riittää hyvin, liity mukaan!",
      title: "Tilaukset saatavilla",
    },
    full: {
      buttonText: "Liity jonotuslistalle",
      description:
        "Olemme saavuttaneet 30 aktiivisen tilaajan kapasiteetin. Liity jonotuslistalle, niin saat ilmoituksen, kun paikka vapautuu.",
      title: "Tilausraja saavutettu",
    },
    limited: {
      buttonText: "Aloita nyt",
      description:
        "Vain {{remaining}} paikkaa jäljellä yhteensä {{capacity}}:sta. Tilaa nyt ennen kuin kapasiteetti täyttyy!",
      title: "Rajoitettu saatavuus",
    },
  },
  login: {
    description:
      "Syötä sähköpostiosoitteesi ja salasanasi päästäksesi hallintapaneeliisi",
    emaillabel: "Sähköposti",
    errors: {
      invalidemail: "Anna kelvollinen sähköpostiosoite",
      shortpassword: "Salasanan on oltava vähintään 6 merkkiä pitkä",
    },
    errortitle: "Kirjautuminen epäonnistui",
    genericerror: "Tarkista kirjautumistietosi ja yritä uudelleen.",
    loggingin: "Kirjaudutaan sisään...",
    loginbutton: "Kirjaudu sisään",
    loginwithgoogle: "Kirjaudu sisään Google-tilillä",
    noaccount: "Eikö sinulla ole tiliä?",
    or: "tai",
    passwordlabel: "Salasana",
    registerlink: "Rekisteröidy",
    successmessage: "Olet kirjautunut sisään onnistuneesti.",
    successtitle: "Kirjautuminen onnistui",
    title: "Kirjaudu sisään tilillesi",
  },
  loginPrompt: {
    description:
      "Jatkaaksesi sinun täytyy olla kirjautuneena sisään. Kirjaudu sisään tai rekisteröidy.",
    login: "Kirjaudu sisään",
    register: "Rekisteröidy",
    title: "Kirjautuminen vaaditaan",
  },
  navigations: {
    faq: "Usein kysytyt kysymykset",
    features: "Ominaisuudet",
    getalerts: "Tilaa ilmoitukset",
    getstarted: "Aloita",
    how: "Näin se toimii",
    language: "Kieli",
    login: "Kirjaudu sisään",
    logout: "Kirjaudu ulos",
    myalerts: "Omat hälytykset",
    pricing: "Hinnasto",
    profile: "Profiili",
    settings: "Asetukset",
    signup: "Rekisteröidy",
    subscribers: "Tilaajat",
    theme: "Teema",
    waitlist: "Jonotuslista",
  },
  notFound: {
    message: "Unohtuiko lisätä sivu reitittimeen?",
    title: "404 Sivua ei löytynyt",
  },
  payment: {
    button: {
      processing: "Käsitellään...",
      submit: "Määritä maksutapa",
    },
    toast: {
      error: {
        fallback: "Tapahtui odottamaton virhe. Yritä uudelleen.",
        title: "Virhe",
      },
      success: {
        description: "Maksutapasi on otettu onnistuneesti käyttöön.",
        title: "Onnistui",
      },
    },
  },
  personalInfo: {
    actions: {
      continue: "Jatka",
      login: "Kirjaudu sisään tai rekisteröidy jatkaaksesi",
    },
    description:
      "Anna henkilötietosi, jotta voimme määrittää ilmoituksesi oikein.",
    errors: {
      email: "Anna kelvollinen sähköpostiosoite",
      firstname: "Etunimi on pakollinen",
      lastname: "Sukunimi on pakollinen",
    },
    heading: "Henkilötiedot",
    labels: {
      email: "Sähköpostiosoite",
      firstname: "Etunimi",
      lastname: "Sukunimi",
    },
    placeholders: {
      email: "john.doe@example.com",
      firstname: "Juhani",
      lastname: "Hirvi",
    },
  },
  pricing: {
    addons: {
      0: {
        name: "Jokainen lisäsivusto",
      },
      1: {
        name: "Päivitykset 30 minuutin välein",
      },
      2: {
        name: "15 minuutin välein päivittyvät tiedot",
      },
      3: {
        name: "5 minuutin välein päivittyvät tiedot",
      },
      4: {
        name: "1 minuutin päivitykset",
      },
    },
    addonstitle: "Lisäosat:",
    basetitle: "Peruspaketti: 79,99 $/kk",
    button: "Aloita nyt",
    footernote:
      "Kaikkiin tilauksiin sisältyy rajattomat hakukonfiguraatiot ja helppo tilauksen hallinta.",
    includedfeatures: {
      0: "Yhden verkkosivuston valvonta",
      1: "Tuntikohtaiset päivitykset",
      2: "Rajoittamattomat suodattimet",
      3: "Telegram-ilmoitukset",
    },
    includedtitle: "Mitä sisältyy:",
    subtitle:
      "Hinnoittelumme perustuu juuri sinun tarpeisiisi. Aloita peruspaketilla ja räätälöi se vastaamaan vaatimuksiasi.",
    title: "Selkeä ja läpinäkyvä hinnoittelu",
  },
  privacy: {
    lastupdated: "Viimeksi päivitetty: 21. toukokuuta 2025",
    metaDescription:
      "Lue, miten AMIQUUS käsittelee henkilötietojasi, yksityisyysoikeuksiasi ja tietojen keruukäytäntöjään.",
    metaTitle: "Tietosuojakäytäntö | Amiquus",
    sections: {
      0: {
        heading: "Esittely",
        id: "esittely",
        paragraphs: {
          0: "Tervetuloa AMIQUUSiin. Kunnioitamme yksityisyyttäsi ja olemme sitoutuneet suojaamaan henkilötietojasi. Tämä tietosuojakäytäntö kertoo, miten huolehdimme henkilötiedoistasi, kun vierailet verkkosivustollamme, sekä tiedottaa sinulle yksityisyyden suojan oikeuksistasi ja siitä, miten laki suojaa sinua.",
        },
      },
      1: {
        heading: "Keräämämme tiedot",
        id: "tiedot-jotka-keräämme",
        list: {
          0: "Henkilötiedot: Sähköpostiosoite, etunimi, sukunimi ja profiilikuva (jos saatavilla kolmannen osapuolen tunnistautumisen kautta).",
          1: "Tilin tiedot: Kirjautumistietosi ja tilin asetukset.",
          2: "Käyttötiedot: Tietoa siitä, miten käytät verkkosivustoamme ja palveluitamme.",
          3: "Auton hakutoiveet: Ajoneuvon kriteerit, jotka asetat seurantaan (merkki, malli, hintahaarukka jne.).",
          4: "Telegram-tiedot: Jos valitset vastaanottaa ilmoituksia Telegramin kautta, tallennamme Telegram-keskustelutunnuksesi ja bottitunnuksesi.",
          5: "Maksutiedot: Kun teet ostoksen, maksunkäsittelijämme kerää maksutiedot, jotka ovat tarpeen tapahtumasi käsittelemiseksi. AMIQUUS ei tallenna koko luottokorttitietojasi.",
        },
        paragraphs: {
          0: "Keräämme useita erilaisia tietoja eri tarkoituksiin tarjotaksemme ja parantaaksemme palveluamme sinulle:",
        },
      },
      2: {
        heading: "Kuinka käytämme tietojasi",
        id: "näin-käytämme-tietoja",
        list: {
          0: "Tarjotaksemme ja ylläpitääksemme palveluamme",
          1: "Ilmoittaaksemme sinulle palvelumme muutoksista",
          2: "Jotta voit osallistua palvelumme vuorovaikutteisiin ominaisuuksiin",
          3: "Tarjota asiakastukea",
          4: "Kerätäksemme analytiikkaa tai arvokasta tietoa, jotta voimme parantaa palveluamme",
          5: "Palvelumme käytön seuraamiseksi",
          6: "Teknisten ongelmien havaitsemiseksi, ehkäisemiseksi ja ratkaisemiseksi",
          7: "Maksujen käsittelyyn ja petollisten tapahtumien estämiseen",
          8: "Lähettääksemme autolistauksia, jotka vastaavat mieltymyksiäsi, valitsemasi ilmoitustavan kautta",
        },
        paragraphs: {
          0: "Käytämme henkilötietojasi seuraaviin tarkoituksiin:",
        },
      },
      3: {
        heading: "Tietojen tallennus ja tietoturva",
        id: "tietojen tallennus",
        paragraphs: {
          0: "Toteutamme asianmukaiset tietoturvatoimet suojataksemme henkilötietosi luvattomalta käytöltä, muuttamiselta, paljastamiselta tai tuhoamiselta. Kaikki tiedot tallennetaan turvallisille palvelimille, joissa tiedot on salattu sekä siirron aikana että levossa.",
          1: "Säilytämme henkilötietojasi vain niin kauan kuin se on tarpeen tässä tietosuojakäytännössä määriteltyihin tarkoituksiin, mukaan lukien lakisääteisten, viranomais-, vero-, kirjanpito- tai raportointivelvoitteiden täyttäminen.",
        },
      },
      4: {
        heading: "GDPR-oikeutesi",
        id: "yleinen tietosuoja-asetus",
        list: {
          0: "Oikeus tarkastella, päivittää tai poistaa tietojasi, joita meillä on sinusta",
          1: "Oikaisuoikeus",
          2: "Oikeus vastustaa",
          3: "Rajoitusoikeus",
          4: "Oikeus tietojen siirrettävyyteen",
          5: "Oikeus peruuttaa suostumus",
        },
        paragraphs: {
          0: "Jos asut Euroopan talousalueella (ETA), sinulla on tietyt tietosuojaan liittyvät oikeudet. AMIQUUS pyrkii toteuttamaan kohtuullisia toimenpiteitä, jotta voit oikaista, muokata, poistaa tai rajoittaa henkilötietojesi käyttöä.",
          1: "Sinulla on seuraavat tietosuojaoikeudet:",
        },
      },
      5: {
        heading: "Evästekäytäntö",
        id: "evästeet",
        list: {
          0: "Pysy kirjautuneena",
          1: "Ymmärrä, miten käytät verkkosivustoamme",
          2: "Muista asetuksesi",
          3: "Mukauta käyttökokemustasi",
        },
        paragraphs: {
          0: "Evästeet ovat pieniä tietoja, jotka tallennetaan laitteellesi. Käytämme evästeitä seuraaviin tarkoituksiin:",
        },
      },
      6: {
        heading: "Kolmannen osapuolen palvelut",
        id: "kolmas osapuoli",
        list: {
          0: "Maksunvälittäjät (Stripe)",
          1: "Analytiikkapalveluntarjoajat",
          2: "Asiakastukipalvelut",
          3: "Web-hosting- ja pilvi-infrastruktuuripalveluntarjoajat",
        },
        paragraphs: {
          0: "Voimme käyttää kolmansia osapuolia ja yksityishenkilöitä helpottamaan palvelumme tarjoamista, tuottamaan palvelua puolestamme, suorittamaan palveluun liittyviä tehtäviä tai auttamaan meitä analysoimaan, miten palveluamme käytetään.",
          1: "Nämä kolmannet osapuolet sisältävät:",
        },
        paragraphs2: {
          0: "Nämä kolmannet osapuolet saavat käyttää henkilötietojasi vain suorittaakseen näitä tehtäviä puolestamme, eikä heillä ole oikeutta paljastaa tai käyttää niitä mihinkään muuhun tarkoitukseen.",
        },
      },
      7: {
        heading: "Muutokset tähän tietosuojakäytäntöön",
        id: "muutokset",
        paragraphs: {
          0: "Saatamme päivittää tietosuojakäytäntöämme ajoittain. Ilmoitamme sinulle kaikista muutoksista julkaisemalla uuden tietosuojakäytännön tällä sivulla ja päivittämällä ”Viimeksi päivitetty” -päivämäärän.",
          1: "Suosittelemme tarkistamaan tämän tietosuojakäytännön säännöllisesti mahdollisten muutosten varalta. Tämän tietosuojakäytännön muutokset tulevat voimaan, kun ne julkaistaan tällä sivulla.",
        },
      },
      8: {
        heading: "Ota yhteyttä",
        id: "yhteystiedot",
        list: {
          0: "Sähköpostitse: privacy@amiquus.com",
          1: "Vierailemalla verkkosivustomme yhteyssivulla",
        },
        paragraphs: {
          0: "Jos sinulla on kysyttävää tästä tietosuojakäytännöstä, ota meihin yhteyttä:",
        },
      },
    },
    title: "Tietosuojakäytäntö",
  },
  profile: {
    account: {
      cancel: "Peruuta",
      desc: "Päivitä tilisi tiedot ja asetukset.",
      email: "Sähköposti",
      name: "Nimi",
      save: "Tallenna muutokset",
      title: "Tiliasetukset",
      username: "Käyttäjätunnus",
    },
    alerts: {
      add: "Lisää uusi hälytys",
      cta: "Luo ensimmäinen hälytyksesi",
      desc: "Hallinnoi autohakuvahtejasi ja ilmoitusasetuksiasi.",
      none: "Sinulla ei ole yhtään aktiivista autoilmoitusta.",
      title: "Autohälytys­tilaukset",
      warning:
        "⚠️ Muutokset tilaukseesi astuvat voimaan seuraavalla laskutuskaudella ja vasta onnistuneen maksun jälkeen. Jos maksu epäonnistuu, nykyinen hälytysasetuksesi säilyy ennallaan.",
    },
    logout: {
      desc: "Oletko varma, että haluat kirjautua ulos tililtäsi?",
      success: "Olet kirjautunut ulos onnistuneesti.",
      title: "Kirjaudu ulos",
    },
    payments: {
      desc: "Hallinnoi maksutapojasi tilauslaskutusta varten.",
      encrypted: "Maksutietosi on salattu ja tallennettu turvallisesti.",
      none: "Sinulla ei ole tallennettuja maksutapoja.",
      title: "Maksutavat",
    },
    security: {
      confirm: "Vahvista uusi salasana",
      current: "Nykyinen salasana",
      desc: "Hallinnoi suojausasetuksiasi ja yksityisyysasetuksiasi.",
      new: "Uusi salasana",
      title: "Tietosuoja ja turvallisuus",
      update: "Päivitä salasana",
    },
    sidebar: {
      account: "Tiliasetukset",
      logout: "Kirjaudu ulos",
      membersince: "Jäsen vuodesta",
      methods: "Maksutavat",
      privacy: "Tietosuoja ja turvallisuus",
      subscriptions: "Tilaukset",
    },
    tabs: {
      alerts: "Omat hälytykset",
      payments: "Maksutavat",
    },
  },
  register: {
    alreadyhave: "Onko sinulla jo tili?",
    and: "ja",
    confirmpassword: "Vahvista salasana",
    createbtn: "Luo tili",
    description: "Rekisteröidy ja ala seurata unelmiesi autoa",
    email: "Sähköposti",
    firstname: "Etunimi",
    google: "Rekisteröidy Google-tilillä",
    lastname: "Sukunimi",
    login: "Kirjaudu sisään",
    orcontinue: "Tai jatka seuraavilla",
    password: "Salasana",
    privacypolicy: "Tietosuojakäytäntö",
    termsnotice: "Hyväksyn",
    termsofservice: "Käyttöehdot",
    title: "Luo tili",
    toast: {
      failure: {
        desc: "Tarkista tietosi ja yritä uudelleen.",
        title: "Rekisteröinti epäonnistui",
      },
      invalidusername: {
        desc: "Käyttäjätunnuksen tulee olla aakkosnumeerinen ja 3–20 merkkiä pitkä",
        title: "Virheellinen käyttäjätunnus",
      },
      missingfields: {
        desc: "Täytäthän kaikki vaaditut kentät",
        title: "Puuttuvat kentät",
      },
      passwordmismatch: {
        desc: "Varmista, että salasanasi täsmäävät",
        title: "Salasanat eivät täsmää",
      },
      success: {
        desc: "Tervetuloa Amiquus-palveluun! Sinut ohjataan vahvistamaan sähköpostiosoitteesi.",
        title: "Rekisteröinti onnistui",
      },
      termsnotaccepted: {
        desc: "Sinun täytyy hyväksyä käyttöehdot ja tietosuojakäytäntö jatkaaksesi",
        title: "Ehtoja ei hyväksytty",
      },
    },
    username: "Käyttäjätunnus",
  },
  review: {
    actions: {
      previous: "Edellinen",
      submit: "Siirry maksamaan",
    },
    description: "Tarkista tilauksesi tiedot ennen maksamiseen siirtymistä.",
    monitoring: {
      facebookurl: "Facebook-osoite",
      title: "Valvonnan asetukset",
      updatefrequency: "Päivitystiheys",
      websites: "Verkkosivut",
    },
    notification: {
      language: "Ilmoituskieli",
      telegram: "Telegram-botti",
      title: "Ilmoitusasetukset",
    },
    personal: {
      email: "Sähköposti",
      name: "Nimi",
      title: "Henkilötiedot",
    },
    specs: {
      brand: "Tuotemerkki",
      fueltype: "Polttoainetyyppi",
      mileage: "Toimintamatka (km)",
      model: "Malli",
      price: "Hintahaarukka (€)",
      title: "Auton tekniset tiedot",
      yearrange: "Vuosiväli",
    },
    summary: {
      base: "Perustilaus",
      extrawebsites: "Lisäsivustot",
      frequencyupgrade: "Taajuuspäivitys",
      title: "Tilauksen yhteenveto",
      total: "Yhteensä (kuukausittain)",
    },
    terms: {
      checkbox: "Hyväksyn",
      error: "Sinun täytyy hyväksyä käyttöehdot",
      note: "Tilauksesi uusiutuu automaattisesti joka kuukausi. Voit peruuttaa milloin tahansa.",
      privacy: "Tietosuojakäytäntö",
      tos: "Käyttöehdot",
    },
    title: "Tarkista tilauksesi",
  },
  setupAlerts: {
    basetitle: "79,99 $/kk",
    basicplan: "Peruspaketti",
    button: "Käynnistä autohälytyspalveluni",
    cancel: "Peruuta milloin tahansa",
    subtitle:
      "Määritä Telegram-bottisi vastaanottamaan ilmoituksia unelmiesi autosta",
    title: "Aseta autohälytykset",
    toasts: {
      contactbot: {
        description:
          "Sinun täytyy aloittaa keskustelu Telegram-bottimme kanssa ja lähettää viesti saadaksesi autohälytykset. Seuraa alla olevia ohjeita ottaaksesi yhteyttä bottiin.",
        title: "Yhteydenottobotti vaaditaan",
      },
      error: {
        title: "Virhe tilauksen luomisessa",
      },
      success: {
        description: "Tilauksesi on luotu onnistuneesti",
        title: "Tilaus luotu",
      },
      terms: {
        description: "Sinun on hyväksyttävä käyttöehdot jatkaaksesi",
        title: "Ehtoja ei hyväksytty",
      },
    },
  },
  signUp: {
    cta: "Saat hälytykset nyt",
    heading: "Luo autohälytys",
    subheading:
      "Luo henkilökohtaiset ilmoitukset autolistauksista helposti muutamassa vaiheessa.",
    toast: {
      error: {
        description:
          "Emme voineet luoda tilaustasi. Yritä myöhemmin uudelleen.",
        title: "Tilauksen tekeminen epäonnistui",
      },
      success: {
        description: "Tilauksesi on luotu onnistuneesti",
        title: "Tilaus luotu",
      },
    },
    waitlist: {
      cta: "Liity jonotuslistalle",
      message:
        "Olemme tällä hetkellä täynnä. Liity jonotuslistalle, niin saat ilmoituksen, kun paikka vapautuu.",
    },
  },
  subscription: {
    actions: {
      back: "Takaisin",
      save: "Tallenna muutokset",
    },
    description:
      "Voit keskeyttää tilauksesi milloin tahansa. Kun keskeytät tilauksesi, autohälytyksesi pysähtyvät, kunnes jatkat niitä.",
    error: "Palaa takaisin hallintapaneeliin",
    form: {
      status: {
        active: "Aktiivinen",
        label: "Tila",
        paused: "Keskeytetty",
        placeholder: "Valitse tila",
      },
    },
    notfound: "Tilausta ei löytynyt",
    notfoundsub: "Palaa takaisin hallintapaneeliin",
    subtitle: "Muokkaa tilaustietojasi alla",
    title: "Tilaustiedot",
    toasts: {
      error: {
        title: "Virhe tilauksen päivittämisessä",
      },
      priceerror: {
        description:
          "Pysäytät ja päivität tilauksesi hinnan samanaikaisesti. Sinun täytyy joko pysäyttää tilaus tai päivittää hinta.",
        title: "Tilausta ei voi päivittää",
      },
      success: {
        description:
          "Tilauksesi tuotteelle {{brand}} {{model}} on päivitetty onnistuneesti",
        title: "Tilaus päivitetty",
      },
    },
  },
  support: {
    emailsupport: {
      description:
        "Lähetä meille sähköpostia, niin vastaamme sinulle 24 tunnin kuluessa.",
      email: "support@amiquus.com",
      title: "Sähköpostituki",
    },
    faqheading: "Usein kysytyt kysymykset",
    faqs: {
      cancel: {
        answer:
          'Voit peruuttaa tilauksesi milloin tahansa oman tilisi profiilisivulta. Klikkaa "Tilaukset"-välilehteä, etsi peruutettava tilaus ja napsauta "Peruuta tilaus" -painiketta. Palvelusi on käytettävissä nykyisen laskutuskauden loppuun asti.',
        question: "Miten perun tilaukseni?",
      },
      facebook: {
        answer:
          "Kyllä, tuemme Facebook Marketplace -seurannan. Ottaaksesi tämän käyttöön, sinun tulee antaa URL-osoite Facebook Marketplace -hakutulossivulle, jossa haluamasi suodattimet ovat käytössä. Järjestelmämme seuraa sitten juuri tätä hakua ja ilmoittaa uusista ilmoituksista, jotka vastaavat kriteereitäsi.",
        question: "Voinko seurata Facebook Marketplacea?",
      },
      full: {
        answer:
          "Palvelumme korkean laadun varmistamiseksi rajoitamme aktiivisten tilausten määrää. Jos kaikki paikat ovat täynnä, voit liittyä jonotuslistallemme. Ilmoitamme sinulle heti, kun paikka vapautuu, ja saat etuoikeuden varata sen ennen kuin avaamme sen yleisölle.",
        question: "Mitä tapahtuu, jos kaikki tilauspaikat ovat täynnä?",
      },
      telegram: {
        intro: "Telegram-ilmoitusten käyttöönottoon toimi näin:",
        outro:
          "Jos tarvitset lisää apua, yksityiskohtainen oppaamme on saatavilla hallintapaneelissasi.",
        question: "Miten otan käyttöön Telegram-ilmoitukset?",
        steps: {
          0: "Luo Telegram-botti BotFatherilla (ohjeet löytyvät hallintapaneelistamme)",
          1: "Kopioi API-tunnuksesi ja chat-tunnisteesi",
          2: 'Syötä nämä tiedot tilisi asetuksiin kohdassa "Ilmoitusasetukset"',
          3: 'Testaa yhteyttäsi painamalla "Lähetä testiviesti" -painiketta',
        },
      },
      updates: {
        answer:
          "Päivitystiheys riippuu tilauspaketistasi. Peruspaketit saavat päivityksiä kuuden tunnin välein, kun taas Premium-paketit voivat saada päivityksiä jopa 30 minuutin välein. Voit tarkastella ja muokata nykyistä päivitystiheyttäsi tilausasetuksissa.",
        question: "Kuinka usein autolistaukset päivitetään?",
      },
    },
    metaDescription:
      "Saat apua AMIQUUS-tiliisi, tilaukseesi tai autoilmoituksiisi liittyen. Selaa ohjekeskustamme tai ota yhteyttä tukitiimiimme saadaksesi apua.",
    metaTitle: "Tuki | Amiquus – Ohjekeskus",
    stillneedhelp: {
      button: "Ota yhteyttä tukeen",
      description:
        "Jos et löytänyt vastausta kysymykseesi, voit aina ottaa yhteyttä tukitiimiimme. Olemme täällä auttamassa!",
      heading: "Tarvitsetko vielä apua?",
    },
    subtitle:
      "Löydä vastaukset yleisimpiin kysymyksiin tai ota yhteyttä tukitiimiimme",
    title: "Tukikeskus",
  },
  telegram: {
    actions: {
      continue: "Jatka",
      previous: "Edellinen",
    },
    bottokenexample:
      "Esimerkki: 5432109876:ABCDefGhIJklMNoPqrSTuvWXyz1234567890",
    bottokenlabel: "Telegram-botin tunnus",
    bottokenplaceholder: "Syötä bottisi token BotFatherilta",
    caralerttitle: "🚗 Uusi auto!",
    chatiddescription:
      "Saat tämän lähettämällä viestin @userinfobot Telegramissa.",
    chatidlabel: "Telegram-keskustelutunnuksesi",
    chatidplaceholder: "Syötä Telegram-keskustelutunnuksesi",
    chatidsteps: {
      0: 'Avaa Telegram ja etsi "userinfobot"',
      1: "Lähetä mikä tahansa viesti botille",
      2: "Botti vastaa sinulle tiedoillasi, mukaan lukien Chat ID:si",
      3: "Kopioi Chat-tunnuksesi",
    },
    chatidtitle: "Näin saat Telegram Chat ID:si",
    confirmcontact:
      "Olen aloittanut keskustelun botin kanssa ja lähettänyt viestin.",
    contact: "Ota yhteyttä",
    contactbotinstruction:
      "Aloita keskustelu Telegram-bottimme kanssa klikkaamalla alla olevaa linkkiä ja lähettämällä sille viesti.",
    contactbotnote:
      "Tämä on tarpeen autohälytysten vastaanottamiseksi. Jos olet tietokoneella, voit skannata QR-koodin.",
    description:
      "Ota käyttöön Telegram-ilmoitukset antamalla bottisi token ja chat-tunnus.",
    errors: {
      chatid: "Telegram-keskustelun tunnus vaaditaan",
      language: "Ilmoituskieli on pakollinen",
      token: "Telegram-botin tunnus vaaditaan",
      username: "Telegram-käyttäjätunnus on pakollinen",
    },
    examples: {
      chatid: "Tämän saat lähettämällä viestin @userinfobot Telegramissa.",
      token: "Esimerkki: 5432109876:ABCDefGhIJklMNoPqrSTuvWXyz1234567890",
    },
    heading: "Telegramin käyttöönotto",
    helpdescription:
      "Katso alla oleva video vaihe vaiheelta etenevää opastusta varten.",
    helptitle:
      "Tarvitsetko apua Telegram Bot Tokenin ja Chat ID:n asetuksissa?",
    info: "Jos sinulla on ongelmia Telegram-botin luomisessa, ota meihin yhteyttä, niin soitamme sinulle ja autamme sinua luomaan sellaisen.",
    instructions: {
      botstep1: "Avaa Telegram ja etsi @BotFather",
      botstep2: "Lähetä komento /newbot",
      botstep3: "Seuraa ohjeita luodaksesi botin",
      botstep4: "Kopioi BotFatherin antama token",
      bottitle: "Miten saat Telegram-botin tunnuksen:",
      chatstep1: "Avaa Telegram ja etsi @userinfobot",
      chatstep2: "Lähetä mikä tahansa viesti botille",
      chatstep3: "Botti vastaa tiedoillasi, mukaan lukien Chat ID:si",
      chatstep4: "Kopioi keskustelun tunnus (se on numero)",
      chattitle: "Näin saat Telegram Chat ID:si",
    },
    kilometreslabel: "Kilometrit: {{kms}}",
    labels: {
      chatid: "Telegram-keskustelutunnuksesi",
      language: "Ilmoituskieli",
      token: "Telegram-bottitunnus",
      username: "Telegram-käyttäjätunnus",
    },
    languagelabel: "Ilmoituskieli",
    languageplaceholder: "Valitse Telegram-viestien kieli",
    languages: {
      de: "Saksa",
      en: "Englanti",
      es: "Suomi",
      fr: "Ranska",
      it: "Suomi",
    },
    locationlabel: "Sijainti: {{location}}",
    placeholders: {
      chatid: "Syötä Telegram-keskustelutunnuksesi",
      language: "Valitse Telegram-viestien kieli",
      token: "Syötä bottisi token BotFatherilta",
      username: "Syötä Telegram-käyttäjätunnuksesi",
    },
    previewtitle: "Esikatsele Telegram-ilmoituksia",
    pricelabel: "Hinta: {{price}}",
    setupsteps: {
      0: 'Avaa Telegram ja etsi "BotFather"',
      1: 'Aloita keskustelu BotFatherin kanssa napsauttamalla "Aloita"',
      2: "Kirjoita /newbot ja seuraa ohjeita luodaksesi uuden botin",
      3: "Valitse nimi botillesi",
      4: "Valitse botillesi käyttäjätunnus (tunnuksen tulee päättyä 'bot')",
      5: "Kopioi BotFatherin antama API-tunnus",
      6: "Lähetä viesti uudelle botillesi aktivoidaksesi keskustelun",
    },
    setuptitle: "Asennusohjeet:",
    subheading: "Ota Telegram-bottisi käyttöön",
    usernamedescription:
      "Tämä on käyttäjänimesi Telegram-tililläsi (ilman @-merkkiä).",
    videodescription:
      "Katso alla oleva video vaihe vaiheelta etenevää opastusta varten.",
    videoprompt:
      "Tarvitsetko apua Telegram Bot Tokenin ja Chat ID:n käyttöönotossa?",
    viewlisting: "Näytä ilmoitus →",
  },
  terms: {
    lastupdated: "Viimeksi päivitetty: 21. toukokuuta 2025",
    metaDescription:
      "Lue AMIQUUSin käyttöehdot, jotka säätelevät auton ilmoituspalvelumme seurantaa ja ilmoituksia koskevaa käyttöäsi.",
    metaTitle: "Käyttöehdot | Amiquus",
    sections: {
      1: {
        heading: "Hyväksyminen ehtoihin",
        id: "sopimus",
        paragraphs: {
          0: "Nämä käyttöehdot muodostavat laillisesti sitovan sopimuksen sinun ja AMIQUUSin välillä koskien pääsyäsi verkkosivustollemme ja palveluidemme käyttöä.",
          1: "Käyttämällä palveluitamme hyväksyt nämä käyttöehdot. Jos et hyväksy ehtoja kokonaisuudessaan tai osittain, et voi käyttää palvelua.",
        },
      },
      10: {
        heading: "Vastuuvapauslauseke",
        id: "vastuuvapauslauseke",
        paragraphs: {
          0: "Palvelun käyttö tapahtuu omalla vastuullasi. Palvelu tarjotaan `SELLAISENAAN` ja `SAATAVILLA OLEVANA`. Palvelu tarjotaan ilman minkäänlaisia takuita, suoria tai epäsuoria.",
          1: "AMIQUUS ei takaa, että palvelu olisi keskeytymätön, ajantasainen, turvallinen tai virheetön, eikä että palvelun käytöstä saatavat tulokset olisivat tarkkoja tai luotettavia.",
        },
      },
      11: {
        heading: "Evästekäytäntö",
        id: "evästeet",
        paragraphs: {
          0: "Evästekäytäntömme selittää, mitä evästeet ovat, miten käytämme evästeitä, miten mahdolliset yhteistyökumppanimme voivat käyttää evästeitä palvelussamme, mitkä ovat valintasi evästeiden suhteen sekä lisätietoja evästeistä. Katso lisätietoja evästeistä tietosuojakäytäntömme evästeet-osiosta.",
        },
      },
      12: {
        heading: "Sovellettava laki",
        id: "sovellettava laki",
        paragraphs: {
          0: "Näitä ehtoja säädellään ja tulkitaan Yhdysvaltojen lakien mukaisesti, riippumatta lainvalintaa koskevista säännöksistä.",
          1: "Se, et emme pane täytäntöön mitään näiden Ehtojen oikeutta tai määräystä, ei merkitse luopumista kyseisestä oikeudesta. Jos jokin näiden Ehtojen määräys todetaan tuomioistuimessa pätemättömäksi tai täytäntöönpanokelvottomaksi, muut määräykset pysyvät voimassa.",
        },
      },
      13: {
        heading: "Ota yhteyttä",
        id: "yhteystiedot",
        list: {
          0: "Sähköpostitse: legal@amiquus.com",
          1: "Vierailemalla verkkosivustomme yhteyssivulla",
        },
        paragraphs: {
          0: "Jos sinulla on kysyttävää näistä Ehdoista, ota meihin yhteyttä:",
        },
      },
      2: {
        heading: "Muutokset ehtoihin",
        id: "muutokset",
        paragraphs: {
          0: "Pidätämme oikeuden oman harkintamme mukaan muuttaa tai korvata näitä ehtoja milloin tahansa. Jos muutos on olennainen, pyrimme kohtuullisin keinoin ilmoittamaan siitä vähintään 30 päivää ennen uusien ehtojen voimaantuloa.",
          1: "Jatkamalla palvelumme käyttöä tai siihen pääsyä näiden muutosten voimaantulon jälkeen hyväksyt päivitetyt käyttöehdot. Jos et hyväksy uusia ehtoja, lopeta palvelun käyttö.",
        },
      },
      3: {
        heading: "Tiliehdot",
        id: "tili",
        list: {
          0: "Ole vähintään 18-vuotias",
          1: "Viimeistele rekisteröityminen",
          2: "Anna tarkat, täydelliset ja ajantasaiset tiedot",
          3: "Ole vastuussa tilisi ja salasanasi turvallisuudesta",
          4: "Ole vastuussa kaikista toimista, joita tapahtuu tilisi alla",
          5: "Ilmoita meille välittömästi, jos havaitset tietoturvaloukkauksen tai tilisi luvattoman käytön.",
        },
        paragraphs: {
          0: "Palveluidemme käyttämiseksi sinun tulee:",
        },
      },
      4: {
        heading: "Maksuehdot",
        id: "maksu",
        list: {
          0: "Kaikki maksut eivät sisällä veroja, jotka lisätään tarvittaessa.",
          1: "Tilaushinnat voivat muuttua 30 päivän ennakkoilmoituksella.",
          2: "Tilaukset uusiutuvat automaattisesti, ellei tilausta peruuteta ennen seuraavaa laskutuskautta.",
          3: "Hyvitykset käsitellään tapauskohtaisesti palautuskäytäntömme mukaisesti.",
          4: "Käytämme Stripea turvalliseen maksujen käsittelyyn, ja kaikki maksutiedot tallennetaan Stripeen.",
        },
        paragraphs: {
          0: "Amiquus tarjoaa tilauspohjaisia palveluita seuraavin ehdoin:",
        },
      },
      5: {
        heading: "Kapasiteettirajoitukset",
        id: "kapasiteetti",
        list: {
          0: "Uudet käyttäjät voivat liittyä jonotuslistallemme",
          1: "Jonotuspaikka määräytyy saapumisjärjestyksen mukaan.",
          2: "Kun kapasiteettia vapautuu, jonotuslistalla olevat käyttäjät ilmoitetaan järjestyksessä.",
          3: "Pidätämme oikeuden muuttaa kapasiteettirajoituksia milloin tahansa.",
        },
        paragraphs: {
          0: "Palvelun laadun ja luotettavuuden varmistamiseksi AMIQUUS rajoittaa aktiivisten tilausten määrän 30:een. Kun tämä raja saavutetaan:",
        },
      },
      6: {
        heading: "Verkkorobotoinnin rajoitukset",
        id: "tietojen keruu",
        list: {
          0: "Amiquus kunnioittaa seuraamiemme verkkosivustojen käyttöehtoja.",
          1: "Toteutamme nopeusrajoituksia ja kunnioitamme sivustojen indeksointikäytäntöjä",
          2: "Tiettyjen verkkosivustojen saatavuus voi muuttua niiden ehtojen ja teknisten toimenpiteiden perusteella.",
          3: "Emme takaa kerättyjen tietojen täydellisyyttä tai ajantasaisuutta.",
        },
        paragraphs: {
          0: "Palvelumme hakee ja käsittelee tietoja useilta autojen myyntisivustoilta. Käyttämällä palveluamme hyväksyt, että:",
        },
      },
      7: {
        heading: "Immateriaalioikeudet",
        id: "älyllinen",
        paragraphs: {
          0: "AMIQUUS-palvelu, mukaan lukien sen alkuperäinen sisältö, ominaisuudet ja toiminnallisuus, on ja tulee pysymään yksinomaan AMIQUUSin omaisuutena. Palvelumme on suojattu tekijänoikeuksilla, tavaramerkeillä sekä Yhdysvaltojen ja muiden maiden laeilla.",
          1: "Tavaramerkkejämme ja tuotteen ulkoasua ei saa käyttää minkään tuotteen tai palvelun yhteydessä ilman AMIQUUSin etukäteen antamaa kirjallista lupaa.",
        },
      },
      8: {
        heading: "Päättäminen",
        id: "irtisanominen",
        paragraphs: {
          0: "Voimme lopettaa tai jäädyttää tilisi välittömästi ilman ennakkoilmoitusta tai vastuuta mistä tahansa syystä, mukaan lukien rajoituksetta, jos rikot Käyttöehtoja.",
          1: "Kun sopimus päättyy, oikeutesi käyttää palvelua lakkaa välittömästi. Jos haluat lopettaa tilisi, voit yksinkertaisesti lopettaa palvelun käytön tai ottaa meihin yhteyttä tilin poistamista varten.",
        },
      },
      9: {
        heading: "Vastuunrajoitus",
        id: "rajoitukset",
        list: {
          0: "Pääsysi palveluun, palvelun käyttö tai kyvyttömyys päästä palveluun tai käyttää palvelua",
          1: "Kaikki kolmannen osapuolen toiminta tai sisältö palvelussa",
          2: "Kaikki palvelusta saatu sisältö",
          3: "Luvaton pääsy, käyttö tai muokkaus lähetyksiisi tai sisältöösi",
        },
        paragraphs: {
          0: "Missään tapauksessa AMIQUUS tai sen johtajat, työntekijät, yhteistyökumppanit, edustajat, toimittajat tai tytäryhtiöt eivät ole vastuussa mistään epäsuorista, satunnaisista, erityisistä, välillisistä tai rangaistusseuraamuksista aiheutuvista vahingoista, mukaan lukien rajoituksetta voiton, tietojen, käytön, maineen tai muiden aineettomien menetysten menetykset, jotka johtuvat:",
        },
      },
    },
    title: "Käyttöehdot",
  },
  verifyEmail: {
    codelabel: "Vahvistuskoodi",
    description: "Vahvistuskoodi on lähetetty sähköpostiisi.",
    footernote: "Etkö saanut koodia? Tarkista roskapostikansio.",
    resendbutton: "Lähetä koodi uudelleen",
    resendcountdown: "Voit lähettää koodin uudelleen {{seconds}}s kuluttua.",
    title: "Vahvista sähköpostiosoitteesi",
    toast: {
      emailupdated: "Sähköposti päivitetty",
      entervalidemail: "Anna kelvollinen sähköpostiosoite",
      error: "Virhe",
      failed: "Vahvistus epäonnistui",
      invalidemail: "Virheellinen sähköpostiosoite",
      resent: "Vahvistuskoodi lähetettiin uudelleen",
      sameemail: "Sama sähköposti",
      sameemaildesc:
        "Uusi sähköpostiosoite on sama kuin nykyinen sähköpostiosoite.",
      verified: "Sähköposti vahvistettu",
    },
    updateemailbutton: "Päivitä sähköposti",
    updateemaillabel: "Päivitä sähköposti",
    verifybutton: "Vahvista sähköpostisi",
  },
  waitlist: {
    cantjoin: {
      description: "Ilmoitamme sinulle heti, kun tilauspaikka vapautuu.",
      title: "Liity jonotuslistalle",
    },
    form: {
      email: {
        description:
          "Käytämme tätä sähköpostiosoitetta ilmoittaaksemme sinulle, kun paikka vapautuu.",
        label: "Sähköposti",
        placeholder: "john.doe@example.com",
      },
      firstname: {
        label: "Etunimi",
        placeholder: "Juhani, tässä ohjeet",
      },
      lastname: {
        label: "Sukunimi",
        placeholder: "Valkohäntä",
      },
      submit: "Liity jonotuslistalle",
      submitting: "Lähetetään...",
    },
    limited: {
      available:
        "{{remaining}} tilausta jäljellä yhteensä {{capacity}} paikasta.",
      description:
        "Rajoitamme järjestelmämme vain 30 aktiiviseen tilaajaan varmistaaksemme, että:",
      full: "Kaikki tilauspaikat ovat tällä hetkellä varattuja. Liity jonotuslistalle, niin saat ilmoituksen, kun paikka vapautuu.",
      heading: "Rajoitettu saatavuus",
      points: {
        0: "Poikkeuksellinen tiedonkeruun luotettavuus ja nopeus kaikille käyttäjille",
        1: "Pienempi riski joutua autoilmoitussivustojen estämäksi",
        2: "Henkilökohtaista tukea jokaiselle tilaajalle",
        3: "Reilu palvelinresurssien jakaminen",
      },
    },
    metaDescription:
      "Liity AMIQUUS-jonotuslistalle saadaksesi ilmoituksen, kun tilaukset tulevat saataville.",
    metaTitle: "Liity jonotuslistalle – Amiquus",
    subtitle:
      "Korkean kysynnän vuoksi rajoitamme aktiivisten tilausten määrää varmistaaksemme parhaan palvelun laadun kaikille käyttäjille.",
    success: {
      button: "Palaa etusivulle",
      description: "Ilmoitamme sinulle heti, kun tilauspaikka vapautuu.",
      message:
        "Kiitos kiinnostuksestasi Amiquus-palvelua kohtaan! Olet nyt jonotuslistallamme, ja otamme sinuun yhteyttä heti, kun paikka vapautuu.",
      title: "Olet jonotuslistalla!",
    },
    title: "Liity jonotuslistalle",
  },
  waitlistPrompt: {
    button: "Liity jonotuslistalle",
    description:
      "Olemme tällä hetkellä täynnä. Liity jonotuslistalle saadaksesi ilmoituksen, kun paikka vapautuu.",
    title: "Liity jonotuslistalle",
  },
  websiteSelection: {
    actions: {
      continue: "Jatka",
      previous: "Edellinen",
    },
    description:
      "Valitse, mitä verkkosivustoja haluat seurata ja kuinka usein haluat saada päivityksiä.",
    errors: {
      facebookurl:
        "Facebook Marketplace -osoite vaaditaan, kun Facebook on valittuna.",
      websites: "Vähintään yksi verkkosivusto on valittava.",
    },
    heading: "Verkkosivuston valinta",
    help: {
      facebookurl: "Liitä Facebook Marketplace -hakutulostesi URL tähän.",
      updatefrequency:
        "Kuinka usein meidän tulisi tarkistaa uudet ilmoitukset? Korkeammat tarkistustiheydet voivat lisätä kustannuksia.",
      videodesc: "Katso alla oleva video saadaksesi vaiheittaiset ohjeet.",
      videotitle:
        "Tarvitsetko apua Facebook Marketplace -hakulinkkisi löytämisessä?",
      websites:
        "Valitse yksi tai useampi verkkosivusto autoilmoitusten seurantaan.",
    },
    labels: {
      facebookurl: "Facebook Marketplace -osoite",
      updatefrequency: "Päivitystiheys",
      websites: "Verkkosivustot seurattavaksi",
    },
    placeholders: {
      frequency: "Valitse taajuus",
    },
  },
};

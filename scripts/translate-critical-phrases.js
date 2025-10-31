import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const translationsDir = path.join(__dirname, '../shared/translations');

// Critical UI phrase translations (from de.ts reference and professional translations)
const criticalPhrases = {
  // Button actions
  "Set Up Your Alerts": {
    es: "Configura tus alertas", fr: "Configurez vos alertes", it: "Configura i tuoi avvisi", 
    pt: "Configure seus alertas", nl: "Stel je waarschuwingen in", sv: "Konfigurera dina varningar",
    da: "Konfigurer dine advarsler", nb: "Konfigurer dine varsler", fi: "Määritä hälytykset",
    pl: "Skonfiguruj alerty", cs: "Nastavte upozornění", sk: "Nastavte upozornenia",
    hr: "Postavi upozorenja", sl: "Nastavi obvestila", hu: "Állítsd be a riasztásokat",
    ro: "Configurează alertele", el: "Ρυθμίστε τις ειδοποιήσεις σας", ru: "Настройте свои оповещения",
    uk: "Налаштуйте свої сповіщення", bg: "Настройте вашите сигнали", sr: "Подесите упозорења",
    tr: "Uyarılarınızı ayarlayın", ar: "إعداد التنبيهات الخاصة بك", he: "הגדר את ההתראות שלך",
    hi: "अपने अलर्ट सेट करें", ja: "アラートを設定する", ko: "알림 설정하기", vi: "Thiết lập cảnh báo của bạn",
    th: "ตั้งค่าการแจ้งเตือนของคุณ", bn: "আপনার সতর্কতা সেট করুন", ms: "Tetapkan Makluman Anda",
    az: "Bildirişlərinizi qurun", be: "Наладзьце свае апавяшчэнні", bs: "Podesite svoja upozorenja",
    et: "Seadista oma hoiatused", hy: "Կարգավորեք ձեր ծանուցումները", ka: "დააყენეთ თქვენი გაფრთხილებები",
    lt: "Nustatykite savo perspėjimus", lv: "Iestatiet savus brīdinājumus", mk: "Поставете ги вашите известувања",
    mn: "Сэрэмжлүүлгээ тохируулах", my: "သင့်သတိပေးချက်များကို သတ်မှတ်ပါ", sq: "Vendosni paralajmërimet tuaja"
  },
  "Create Your Car Alert": {
    es: "Crea tu alerta de coche", fr: "Créez votre alerte auto", it: "Crea il tuo avviso auto",
    pt: "Crie seu alerta de carro", nl: "Maak je auto-waarschuwing", sv: "Skapa din bilvarning",
    da: "Opret din bilalarm", nb: "Opprett ditt bilvarsel", fi: "Luo autohälytys",
    pl: "Utwórz alert samochodowy", cs: "Vytvořte upozornění na auto", sk: "Vytvorte upozornenie na auto",
    hr: "Kreirajte upozorenje za auto", sl: "Ustvari obvestilo za avto", hu: "Hozd létre autóriasztásod",
    ro: "Creează alerta ta auto", el: "Δημιουργήστε την ειδοποίηση αυτοκινήτου σας", ru: "Создайте оповещение об автомобиле",
    uk: "Створіть своє автомобільне сповіщення", bg: "Създайте вашето автомобилно предупреждение", sr: "Креирајте упозорење за аутомобил",
    tr: "Araç uyarınızı oluşturun", ar: "أنشئ تنبيه سيارتك", he: "צור את התראת הרכב שלך",
    hi: "अपना कार अलर्ट बनाएं", ja: "車のアラートを作成する", ko: "자동차 알림 만들기", vi: "Tạo cảnh báo xe của bạn",
    th: "สร้างการแจ้งเตือนรถยนต์ของคุณ", bn: "আপনার গাড়ির সতর্কতা তৈরি করুন", ms: "Cipta Makluman Kereta Anda",
    az: "Avtomobil bildirişinizi yaradın", be: "Стварыце сваё апавяшчэнне аб аўтамабілі", bs: "Kreirajte upozorenje za automobil",
    et: "Loo oma auto hoiatus", hy: "Ստեղծեք ձեր մեքենայի ծանուցումը", ka: "შექმენით თქვენი მანქანის გაფრთხილება",
    lt: "Sukurkite savo automobilio perspėjimą", lv: "Izveidojiet savu automašīnas brīdinājumu", mk: "Креирајте известување за автомобил",
    mn: "Машины сэрэмжлүүлэг үүсгэх", my: "သင့်ကား သတိပေးချက်ကို ဖန်တီးပါ", sq: "Krijoni paralajmërimin tuaj të makinës"
  },
  "Telegram Alert": {
    es: "Alerta de Telegram", fr: "Alerte Telegram", it: "Avviso Telegram",
    pt: "Alerta do Telegram", nl: "Telegram waarschuwing", sv: "Telegram-varning",
    da: "Telegram-advarsel", nb: "Telegram-varsel", fi: "Telegram-hälytys",
    pl: "Alert Telegram", cs: "Telegram upozornění", sk: "Telegram upozornenie",
    hr: "Telegram upozorenje", sl: "Telegram obvestilo", hu: "Telegram riasztás",
    ro: "Alertă Telegram", el: "Ειδοποίηση Telegram", ru: "Оповещение Telegram",
    uk: "Сповіщення Telegram", bg: "Telegram предупреждение", sr: "Telegram упозорење",
    tr: "Telegram uyarısı", ar: "تنبيه تليجرام", he: "התראת טלגרם",
    hi: "टेलीग्राम अलर्ट", ja: "Telegramアラート", ko: "텔레그램 알림", vi: "Cảnh báo Telegram",
    th: "การแจ้งเตือน Telegram", bn: "টেলিগ্রাম সতর্কতা", ms: "Makluman Telegram",
    az: "Telegram bildirişi", be: "Апавяшчэнне Telegram", bs: "Telegram obavještenje",
    et: "Telegrami hoiatus", hy: "Telegram ծանուցում", ka: "Telegram გაფრთხილება",
    lt: "Telegram perspėjimas", lv: "Telegram brīdinājums", mk: "Telegram известување",
    mn: "Telegram сэрэмжлүүлэг", my: "Telegram သတိပေးချက်", sq: "Paralajmërim Telegram"
  },
  "Join the Waitlist": {
    es: "Únete a la lista de espera", fr: "Rejoignez la liste d'attente", it: "Unisciti alla lista d'attesa",
    pt: "Junte-se à lista de espera", nl: "Sluit je aan bij de wachtlijst", sv: "Gå med i väntelistan",
    da: "Tilmeld dig ventelisten", nb: "Bli med på ventelisten", fi: "Liity odotuslistalle",
    pl: "Dołącz do listy oczekujących", cs: "Připojte se k čekací listině", sk: "Pripojte sa k čakacej listine",
    hr: "Pridružite se listi čekanja", sl: "Pridruži se čakalnemu seznamu", hu: "Csatlakozz a várólistához",
    ro: "Alătură-te listei de așteptare", el: "Εγγραφείτε στη λίστα αναμονής", ru: "Присоединиться к списку ожидания",
    uk: "Приєднуйтесь до списку очікування", bg: "Присъединете се към списъка за изчакване", sr: "Придружите се листи чекања",
    tr: "Bekleme listesine katılın", ar: "انضم إلى قائمة الانتظار", he: "הצטרף לרשימת ההמתנה",
    hi: "प्रतीक्षा सूची में शामिल हों", ja: "ウェイティングリストに参加する", ko: "대기자 명단에 참여하기", vi: "Tham gia danh sách chờ",
    th: "เข้าร่วมรายชื่อรอ", bn: "অপেক্ষা তালিকায় যোগ দিন", ms: "Sertai Senarai Menunggu",
    az: "Gözləmə siyahısına qoşulun", be: "Далучыцца да спіса чакання", bs: "Pridružite se listi čekanja",
    et: "Liitu ootenimekirjaga", hy: "Միացեք սպասման ցանկին", ka: "შეუერთდით ლოდინის სიას",
    lt: "Prisijunkite prie laukiančiųjų sąrašo", lv: "Pievienojieties gaidīšanas sarakstam", mk: "Придружете се на листата за чекање",
    mn: "Хүлээлгийн жагсаалтад нэгдэх", my: "စောင့်ဆိုင်းစာရင်းတွင် ပါဝင်ပါ", sq: "Bashkohuni me listën e pritjes"
  },
  "Subscription created": {
    es: "Suscripción creada", fr: "Abonnement créé", it: "Abbonamento creato",
    pt: "Assinatura criada", nl: "Abonnement aangemaakt", sv: "Prenumeration skapad",
    da: "Abonnement oprettet", nb: "Abonnement opprettet", fi: "Tilaus luotu",
    pl: "Subskrypcja utworzona", cs: "Předplatné vytvořeno", sk: "Predplatné vytvorené",
    hr: "Pretplata kreirana", sl: "Naročnina ustvarjena", hu: "Előfizetés létrehozva",
    ro: "Abonament creat", el: "Η συνδρομή δημιουργήθηκε", ru: "Подписка создана",
    uk: "Підписку створено", bg: "Абонаментът е създаден", sr: "Претплата креирана",
    tr: "Abonelik oluşturuldu", ar: "تم إنشاء الاشتراك", he: "המנוי נוצר",
    hi: "सदस्यता बनाई गई", ja: "サブスクリプションが作成されました", ko: "구독이 생성되었습니다", vi: "Đã tạo đăng ký",
    th: "สร้างการสมัครสมาชิกแล้ว", bn: "সাবস্ক্রিপশন তৈরি করা হয়েছে", ms: "Langganan dicipta",
    az: "Abunəlik yaradıldı", be: "Падпіска створана", bs: "Pretplata kreirana",
    et: "Tellimus loodud", hy: "Բաժանորդագրությունը ստեղծվել է", ka: "გამოწერა შეიქმნა",
    lt: "Prenumerata sukurta", lv: "Abonements izveidots", mk: "Претплатата е креирана",
    mn: "Захиалга үүсгэсэн", my: "စာရင်းသွင်းမှု ဖန်တီးပြီးပါပြီ", sq: "Abonimi u krijua"
  },
  "Subscription failed": {
    es: "Error en la suscripción", fr: "Échec de l'abonnement", it: "Abbonamento fallito",
    pt: "Falha na assinatura", nl: "Abonnement mislukt", sv: "Prenumerationen misslyckades",
    da: "Abonnement mislykkedes", nb: "Abonnement mislyktes", fi: "Tilaus epäonnistui",
    pl: "Subskrypcja nie powiodła się", cs: "Předplatné selhalo", sk: "Predplatné zlyhalo",
    hr: "Pretplata nije uspjela", sl: "Naročnina ni uspela", hu: "Előfizetés sikertelen",
    ro: "Abonamentul a eșuat", el: "Η συνδρομή απέτυχε", ru: "Подписка не удалась",
    uk: "Підписка не вдалася", bg: "Абонаментът е неуспешен", sr: "Претплата није успела",
    tr: "Abonelik başarısız oldu", ar: "فشل الاشتراك", he: "המנוי נכשל",
    hi: "सदस्यता विफल रही", ja: "サブスクリプションに失敗しました", ko: "구독 실패", vi: "Đăng ký thất bại",
    th: "การสมัครสมาชิกล้มเหลว", bn: "সাবস্ক্রিপশন ব্যর্থ হয়েছে", ms: "Langganan gagal",
    az: "Abunəlik uğursuz oldu", be: "Падпіска не ўдалася", bs: "Pretplata nije uspjela",
    et: "Tellimus ebaõnnestus", hy: "Բաժանորդագրությունը ձախողվեց", ka: "გამოწერა ვერ მოხერხდა",
    lt: "Prenumerata nepavyko", lv: "Abonements neizdevās", mk: "Претплатата не успеа",
    mn: "Захиалга амжилтгүй боллоо", my: "စာရင်းသွင်းမှု မအောင်မြင်ပါ", sq: "Abonimi dështoi"
  },
  "Subscription Limit Reached": {
    es: "Límite de suscripción alcanzado", fr: "Limite d'abonnement atteinte", it: "Limite abbonamento raggiunto",
    pt: "Limite de assinatura atingido", nl: "Abonnementslimiet bereikt", sv: "Prenumerationsgränsen nådd",
    da: "Abonnementsgrænse nået", nb: "Abonnementsgrense nådd", fi: "Tilausraja saavutettu",
    pl: "Osiągnięto limit subskrypcji", cs: "Limit předplatného dosažen", sk: "Limit predplatného dosiahnutý",
    hr: "Dosegnuto ograničenje pretplate", sl: "Dosežena omejitev naročnine", hu: "Előfizetési limit elérve",
    ro: "Limită abonament atinsă", el: "Το όριο συνδρομής επιτεύχθηκε", ru: "Достигнут лимит подписок",
    uk: "Досягнуто ліміт підписок", bg: "Достигнат лимит на абонаменти", sr: "Лимит претплата достигнут",
    tr: "Abonelik limiti ulaşıldı", ar: "تم الوصول إلى حد الاشتراك", he: "הגעת למגבלת המנויים",
    hi: "सदस्यता सीमा पहुंच गई", ja: "サブスクリプション制限に達しました", ko: "구독 한도에 도달했습니다", vi: "Đã đạt giới hạn đăng ký",
    th: "ถึงขีดจำกัดการสมัครสมาชิก", bn: "সাবস্ক্রিপশন সীমা পৌঁছেছে", ms: "Had Langganan Dicapai",
    az: "Abunəlik limiti çatdı", be: "Дасягнуты ліміт падпісак", bs: "Limit pretplate dostignut",
    et: "Tellimuse limiit saavutatud", hy: "Բաժանորդագրության սահմանը հասել է", ka: "გამოწერის ლიმიტი მიღწეულია",
    lt: "Pasiekta prenumeratos riba", lv: "Abonementu limits sasniegts", mk: "Достигната граница на претплата",
    mn: "Захиалгын хязгаарт хүрсэн", my: "စာရင်းသွင်းမှု ကန့်သတ်ချက် ရောက်ပြီးပါပြီ", sq: "Kufiri i abonimit u arrit"
  },
  "We are currently at full capacity. Please join our waitlist to be notified when a spot opens up.": {
    es: "Actualmente estamos a capacidad completa. Únete a nuestra lista de espera para ser notificado cuando haya un espacio disponible.",
    fr: "Nous sommes actuellement à pleine capacité. Rejoignez notre liste d'attente pour être averti lorsqu'une place se libère.",
    it: "Siamo attualmente al completo. Unisciti alla nostra lista d'attesa per essere avvisato quando si libera un posto.",
    pt: "Estamos atualmente com capacidade máxima. Junte-se à nossa lista de espera para ser notificado quando houver uma vaga.",
    nl: "We zitten momenteel op volledige capaciteit. Sluit je aan bij onze wachtlijst om op de hoogte te worden gesteld wanneer er een plek vrijkomt.",
    sv: "Vi har för närvarande full kapacitet. Gå med i vår väntelista för att meddelas när en plats öppnas.",
    da: "Vi er i øjeblikket på fuld kapacitet. Tilmeld dig vores venteliste for at blive underrettet, når der bliver en plads ledig.",
    nb: "Vi er for øyeblikket fullt booket. Bli med på ventelisten for å bli varslet når en plass åpnes.",
    fi: "Olemme tällä hetkellä täynnä. Liity odotuslistallemme saadaksesi ilmoituksen, kun paikka vapautuu.",
    pl: "Obecnie jesteśmy w pełnej pojemności. Dołącz do naszej listy oczekujących, aby otrzymać powiadomienie, gdy zwolni się miejsce.",
    cs: "V současné době jsme na plné kapacitě. Připojte se k naší čekací listině, abyste byli informováni, když se uvolní místo.",
    sk: "V súčasnosti sme na plnej kapacite. Pripojte sa k našej čakacej listine, aby ste boli upozornení, keď sa uvoľní miesto.",
    hr: "Trenutno smo popunjeni. Pridružite se našoj listi čekanja kako biste bili obaviješteni kada se oslobodi mjesto.",
    sl: "Trenutno smo polno zasedeni. Pridružite se našemu čakalnemu seznamu, da boste obveščeni, ko se sprosti mesto.",
    hu: "Jelenleg tele vagyunk. Csatlakozz a várólistánkhoz, hogy értesítést kapj, amikor felszabadul egy hely.",
    ro: "Suntem momentan la capacitate maximă. Alătură-te listei noastre de așteptare pentru a fi notificat când se eliberează un loc.",
    el: "Αυτή τη στιγμή είμαστε πλήρεις. Εγγραφείτε στη λίστα αναμονής μας για να ειδοποιηθείτε όταν ανοίξει μια θέση.",
    ru: "В настоящее время мы работаем на полную мощность. Присоединяйтесь к нашему списку ожидания, чтобы получить уведомление, когда освободится место.",
    uk: "Наразі ми працюємо на повну потужність. Приєднуйтесь до нашого списку очікування, щоб отримати сповіщення, коли з'явиться вільне місце.",
    bg: "В момента сме с пълен капацитет. Присъединете се към нашия списък за изчакване, за да бъдете уведомени, когато се освободи място.",
    sr: "Тренутно смо попуњени. Придружите се нашој листи чекања да бисте били обавештени када се ослободи место.",
    tr: "Şu anda tam kapasitedeyiz. Bir yer açıldığında bilgilendirilmek için bekleme listemize katılın.",
    ar: "نحن حاليا في الطاقة الكاملة. يرجى الانضمام إلى قائمة الانتظار الخاصة بنا ليتم إخطارك عند توفر مكان.",
    he: "אנחנו כרגע במלוא התפוסה. הצטרף לרשימת ההמתנה שלנו כדי לקבל הודעה כאשר מקום מתפנה.",
    hi: "हम वर्तमान में पूरी क्षमता पर हैं। जब कोई स्थान खुलता है तो सूचित किए जाने के लिए हमारी प्रतीक्षा सूची में शामिल हों।",
    ja: "現在、定員に達しています。空きが出た際に通知を受け取るために、ウェイティングリストに参加してください。",
    ko: "현재 정원이 찼습니다. 자리가 나면 알림을 받으려면 대기자 명단에 참여하세요.",
    vi: "Chúng tôi hiện đang ở mức đầy. Vui lòng tham gia danh sách chờ của chúng tôi để được thông báo khi có chỗ trống.",
    th: "ขณะนี้เราเต็มแล้ว กรุณาเข้าร่วมรายชื่อรอของเราเพื่อรับการแจ้งเตือนเมื่อมีที่ว่าง",
    bn: "আমরা বর্তমানে সম্পূর্ণ ক্ষমতায় আছি। একটি স্থান খোলার সময় বিজ্ঞপ্ত হওয়ার জন্য আমাদের অপেক্ষা তালিকায় যোগ দিন।",
    ms: "Kami kini berada pada kapasiti penuh. Sila sertai senarai menunggu kami untuk dimaklumkan apabila tempat tersedia.",
    az: "Hazırda tam tutumluq. Yer açılanda məlumatlandırılmaq üçün gözləmə siyahımıza qoşulun.",
    be: "У цяперашні час мы працуем на поўную магутнасць. Далучыцца да нашага спіса чакання, каб атрымаць апавяшчэнне, калі вызваліцца месца.",
    bs: "Trenutno smo popunjeni. Pridružite se našoj listi čekanja da budete obaviješteni kada se oslobodi mjesto.",
    et: "Oleme praegu täis. Liitu meie ootenimekirjaga, et saada teavitus, kui koht vabaneb.",
    hy: "Մենք այս պահին լրիվ զբաղված ենք։ Միացեք մեր սպասման ցանկին՝ տեղեկացվելու համար, երբ տեղ ազատվի։",
    ka: "ჩვენ ამჟამად სრული მუშაობით ვართ. შეუერთდით ჩვენს ლოდინის სიას რომ მიიღოთ შეტყობინება როდესაც ადგილი გაათავისუფლდება.",
    lt: "Šiuo metu esame pilni. Prisijunkite prie mūsų laukiančiųjų sąrašo, kad būtumėte informuoti, kai atsiras vieta.",
    lv: "Pašlaik mēs esam pilni. Pievienojieties mūsu gaidīšanas sarakstam, lai saņemtu paziņojumu, kad atbrīvosies vieta.",
    mk: "Моментално сме полни. Придружете се на нашата листа за чекање за да бидете известени кога ќе се ослободи место.",
    mn: "Бид одоо бүрэн ачаалалтай байна. Хоосон орон гарахад мэдэгдэл авахын тулд манай хүлээлгийн жагсаалтад нэгдээрэй.",
    my: "ကျွန်ုပ်တို့သည် လောလောဆယ် အပြည့်ရှိနေပါသည်။ နေရာလွတ်လာသောအခါ အကြောင်းကြားရန် ကျွန်ုပ်တို့၏စောင့်ဆိုင်းစာရင်းတွင် ပါဝင်ပါ။",
    sq: "Aktualisht jemi në kapacitetin e plotë. Ju lutemi bashkohuni me listën tonë të pritjes për të njoftuar kur hapet një vend."
  }
};

async function applyCriticalTranslations() {
  console.log('Applying critical phrase translations to all language files...\n');
  
  const files = fs.readdirSync(translationsDir).filter(f => 
    f.endsWith('.ts') && f !== 'index.ts' && f !== 'en.ts' && f !== 'de.ts'
  );
  
  let totalReplaced = 0;
  let processedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(translationsDir, file);
    const langCode = file.replace('.ts', '');
    
    try {
      let content = fs.readFileSync(filePath, 'utf-8');
      let modified = false;
      let replacedCount = 0;
      
      // Apply each translation
      for (const [englishPhrase, langTranslations] of Object.entries(criticalPhrases)) {
        if (langTranslations[langCode]) {
          const translatedPhrase = langTranslations[langCode];
          // Replace the English phrase with the translated one
          const escaped = englishPhrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          const regex = new RegExp(`"${escaped}"`, 'g');
          const matches = content.match(regex);
          if (matches) {
            content = content.replace(regex, `"${translatedPhrase}"`);
            modified = true;
            replacedCount += matches.length;
          }
        }
      }
      
      if (modified) {
        fs.writeFileSync(filePath, content, 'utf-8');
        processedCount++;
        totalReplaced += replacedCount;
        console.log(`✓ Applied ${replacedCount} translations to ${file}`);
      } else {
        console.log(`  No changes needed for ${file}`);
      }
    } catch (error) {
      console.error(`✗ Error processing ${file}:`, error.message);
    }
  }
  
  console.log(`\n${'='.repeat(50)}`);
  console.log(`Completed: ${processedCount} files updated`);
  console.log(`Total phrases replaced: ${totalReplaced}`);
  console.log(`${'='.repeat(50)}`);
}

applyCriticalTranslations().catch(console.error);

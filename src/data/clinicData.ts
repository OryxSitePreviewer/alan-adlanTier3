import { ServiceItem, ReviewItem, FAQItem, PriceCalculatorItem } from '../types';

export const CLINIC_INFO = {
  name: "Klinik Pergigian Alan Adlan",
  doctorName: "Dr. Mohd Rusman Adlan B. A. Rahman",
  doctorTitleBM: "Doktor Pergigian Utama (Berdaftar MMC)",
  doctorTitleEN: "Principal Dental Surgeon (MMC Registered)",
  taglineBM: "Kepakaran Pergigian & Senyuman Keyakinan Anda di Bandar Baru Bangi",
  taglineEN: "Expert Dental Care for Your Perfect Smile in Bandar Baru Bangi",
  phoneLandline: "03-8928 0903 / 03-8926 1697",
  phoneWhatsApp: "019-423 1697",
  whatsappNumberDigits: "60194231697",
  address: "Ground Floor and First Floor, No 3 & 3A, Jalan 6/7B, Bandar Baru Bangi, 43650, Selangor, Malaysia",
  hoursBM: "Isnin – Ahad: 9:00 AM – 9:00 PM (Buka Setiap Hari)",
  hoursEN: "Monday – Sunday: 9:00 AM – 9:00 PM (Open Daily)",
  googleRating: 4.8,
  googleReviewCount: 330,
  googleMapsUrl: "https://maps.google.com/?q=Ground+Floor+and+First+Floor,+No+3+%26+3A,+Jalan+6/7B,+Bandar+Baru+Bangi,+43650,+Selangor",
  wazeUrl: "https://waze.com/ul?q=No+3+%26+3A,+Jalan+6/7B,+Bandar+Baru+Bangi,+43650,+Selangor",
  socials: {
    facebook: "https://facebook.com/KlinikPergigianAlanAdlan",
    instagram: "https://instagram.com/KlinikPergigianAlanAdlan",
    tiktok: "https://tiktok.com/@klinikgigialanadlan"
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "teeth-whitening",
    titleBM: "Pemutihan Gigi (Teeth Whitening)",
    titleEN: "Teeth Whitening",
    iconName: "wand-magic-sparkles",
    descriptionBM: "Prosedur pemutihan gigi klinikal yang selamat dan berkesan untuk mencerahkan tona gigi serta menghilangkan kesan kekuningan.",
    descriptionEN: "Safe and effective in-office teeth whitening procedure to brighten your teeth and eliminate deep discoloration.",
    estPriceBM: "Kesan ketara dalam 1 sesi",
    estPriceEN: "Instant visible shade lightening in 1 session",
    category: "aesthetic",
    popular: true
  },
  {
    id: "teeth-implants",
    titleBM: "Implan Gigi (Teeth Implants)",
    titleEN: "Teeth Implants",
    iconName: "tooth",
    descriptionBM: "Penyelesaian kekal berkualiti tinggi untuk menggantikan gigi hilang menggunakan tiang titanium dan mahkota gigi asli.",
    descriptionEN: "Permanent high-tech tooth replacement using biocompatible titanium implants and custom aesthetic crowns.",
    estPriceBM: "Rawatan kekal berteknologi tinggi",
    estPriceEN: "High-tech permanent restoration",
    category: "restorative",
    popular: true
  },
  {
    id: "denture-acrylic",
    titleBM: "Gigi Palsu Akrilik (Denture Acrylic)",
    titleEN: "Denture Acrylic",
    iconName: "crown",
    descriptionBM: "Gigi palsu boleh tanggal klasik berasaskan akrilik yang ringan, ekonomikal, dan mudah diselenggara.",
    descriptionEN: "Classic removable acrylic dentures providing an affordable, lightweight, and natural-looking tooth replacement solution.",
    estPriceBM: "Pilihan mesra bajet & praktikal",
    estPriceEN: "Budget-friendly & practical option",
    category: "restorative"
  },
  {
    id: "denture-thermosense",
    titleBM: "Gigi Palsu Fleksibel Thermosense (Denture Thermosense)",
    titleEN: "Denture Thermosense",
    iconName: "crown",
    descriptionBM: "Gigi palsu fleksibel canggih bebas logam yang selesa dipakai, tahan pecah, dan kelihatan amat cemerlang & semula jadi.",
    descriptionEN: "Advanced metal-free flexible dentures designed for ultimate comfort, high shatter-resistance, and seamless aesthetics.",
    estPriceBM: "Sangat selesa, fleksibel & tahan pecah",
    estPriceEN: "Ultra-comfortable, flexible & shatter-resistant",
    category: "restorative",
    popular: true
  },
  {
    id: "denture-cobalt-chrome",
    titleBM: "Gigi Palsu Kobalt Krom (Denture Cobalt Chrome)",
    titleEN: "Denture Cobalt Chrome",
    iconName: "crown",
    descriptionBM: "Gigi palsu bertulang logam kobalt krom yang kukuh, nipis, lebih stabil, dan memberikan keselesaan kunyahan maksimum.",
    descriptionEN: "Durable metal-framed cobalt chrome dentures offering enhanced strength, thin comfortable profile, and superior stability.",
    estPriceBM: "Bingkai logam nipis & sangat kukuh",
    estPriceEN: "Strong & ultra-thin metal frame structure",
    category: "restorative"
  },
  {
    id: "braces-conventional",
    titleBM: "Braces Konvensional (Braces Conventional)",
    titleEN: "Braces Conventional",
    iconName: "teeth-open",
    descriptionBM: "Pendakap gigi konvensional logam atau seramik untuk meluruskan susunan gigi, merawat gigitan bertindih dan senget.",
    descriptionEN: "Traditional metal or aesthetic ceramic bracket braces to effectively correct crooked, crowded, or misaligned teeth.",
    estPriceBM: "Pakej deposit rendah & ansuran bulanan",
    estPriceEN: "Low deposit & flexible monthly installments",
    category: "ortho",
    popular: true
  },
  {
    id: "braces-self-ligating",
    titleBM: "Braces Self-Ligating",
    titleEN: "Braces Self-Ligating",
    iconName: "teeth-open",
    descriptionBM: "Sistem pendakap gigi klip khas tanpa getah yang mengurangkan geseran, lebih minima sakit, dan mempercepatkan susunan gigi.",
    descriptionEN: "Rubberless clip-bracket system reducing friction, enhancing hygiene, and providing faster alignment with less discomfort.",
    estPriceBM: "Kurang sakit & pergerakan pantas",
    estPriceEN: "Lower friction & gentler tooth movement",
    category: "ortho"
  },
  {
    id: "braces-damon",
    titleBM: "Braces Self-Ligating (Jenama Damon / Damon Brand)",
    titleEN: "Braces Self-Ligating (Damon Brand)",
    iconName: "teeth-open",
    descriptionBM: "Sistem Braces Damon premium bertaraf dunia untuk keselesaan luar biasa, bentuk profil muka yang harmoni, dan susunan presisi.",
    descriptionEN: "World-renowned premium Damon System braces engineered for maximum patient comfort, face-driven aesthetics, and efficient progress.",
    estPriceBM: "Sistem premium bertaraf dunia",
    estPriceEN: "World-class premium Damon system",
    category: "ortho",
    popular: true
  },
  {
    id: "braces-clear-aligner",
    titleBM: "Braces Aligner Lutsinar (Braces Clear Aligner)",
    titleEN: "Braces Clear Aligner",
    iconName: "sparkles",
    descriptionBM: "Penyusun gigi lutsinar boleh tanggal yang hampir tidak kelihatan, membolehkan anda meluruskan gigi dengan penuh keyakinan.",
    descriptionEN: "Nearly invisible, custom-fitted removable aligners to align your teeth discreetly without traditional metal wires.",
    estPriceBM: "Hampir tidak kelihatan & fleksibel",
    estPriceEN: "Discreet, removable & comfortable",
    category: "ortho"
  },
  {
    id: "root-canal",
    titleBM: "Rawatan Salur Akar (Root Canal Treatment)",
    titleEN: "Root Canal Treatment",
    iconName: "heart-pulse",
    descriptionBM: "Prosedur merawat jangkitan saraf dan keradangan dalaman gigi untuk menyelamatkan gigi asli tanpa perlu dicabut.",
    descriptionEN: "Specialized endodontic treatment to relieve severe pain and rescue infected natural teeth from extraction.",
    estPriceBM: "Menyelamatkan gigi asli anda",
    estPriceEN: "Preserves your natural tooth structure",
    category: "restorative"
  },
  {
    id: "apicoectomy",
    titleBM: "Apikoektomi (Apicoectomy)",
    titleEN: "Apicoectomy",
    iconName: "syringe",
    descriptionBM: "Pembedahan minor pembuangan hujung akar gigi dan tisu dijangkiti apabila rawatan salur akar konvensional tidak mencupi.",
    descriptionEN: "Surgical endodontic procedure to remove infected root-tip tissue when standard root canal therapy is insufficient.",
    estPriceBM: "Rawatan pembedahan akar presisi",
    estPriceEN: "High-precision root-end surgery",
    category: "surgery"
  },
  {
    id: "scaling-polishing",
    titleBM: "Scaling & Polishing (Cuci Gigi & Penjagaan Gusi)",
    titleEN: "Scaling & Polishing (Gum Care)",
    iconName: "shield-check",
    descriptionBM: "Pembersihan karang gigi (tartar) dan plak secara mendalam untuk kesihatan gusi, nafas segar, dan pencegahan karies.",
    descriptionEN: "Professional deep scaling to eliminate plaque build-up and calculus for optimal gum health and fresh breath.",
    estPriceBM: "Penjagaan rutin kebersihan mulut",
    estPriceEN: "Routine oral health maintenance",
    category: "general",
    popular: true
  },
  {
    id: "fillings-extractions",
    titleBM: "Tambalan Gigi Komposit & Cabutan Gigi",
    titleEN: "Composite Tooth Fillings & Extractions",
    iconName: "sparkles",
    descriptionBM: "Tambalan komposit sewarna gigi asli untuk gigi berlubang serta cabutan gigi biasa yang dijalankan dengan lembut & selamat.",
    descriptionEN: "Tooth-colored composite restorations for decay repair and gentle tooth extractions performed with care.",
    estPriceBM: "Kemas, estetik & minima sakit",
    estPriceEN: "Neat, aesthetic & gentle care",
    category: "general"
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "r1",
    name: "Siti Nurhaliza M.",
    avatarInitial: "S",
    rating: 5,
    treatmentBM: "Rawatan Scaling & Braces Damon",
    treatmentEN: "Scaling & Damon Braces Treatment",
    textBM: "Sangat berpuas hati dengan perkhidmatan Dr. Mohd Rusman Adlan dan staf di Klinik Pergigian Alan Adlan. Doktor sangat lembut dan terangkan satu per satu prosedur. Tempat sangat bersih dan selesa!",
    textEN: "Extremely satisfied with Dr. Mohd Rusman Adlan and the team at Klinik Pergigian Alan Adlan. The doctor was super gentle and explained every step clearly. Clean and comfortable clinic!",
    date: "2 minggu lepas",
    verified: true,
    category: "braces"
  },
  {
    id: "r2",
    name: "Ahmad Farhan",
    avatarInitial: "A",
    rating: 5,
    treatmentBM: "Pembedahan Apikoektomi & Gigi Bongsu",
    treatmentEN: "Apicoectomy & Wisdom Tooth Surgery",
    textBM: "Done my wisdom tooth surgery treatment with Dr. Mohd Rusman Adlan here. No pain at all! The dentist and assistants were super gentle and professional. Highly recommended clinic in Bangi.",
    textEN: "Done my wisdom tooth surgery treatment with Dr. Mohd Rusman Adlan here. No pain at all! The dentist and assistants were super gentle and professional. Highly recommended clinic in Bangi.",
    date: "1 bulan lepas",
    verified: true,
    category: "surgery"
  },
  {
    id: "r3",
    name: "Nurul Ain",
    avatarInitial: "N",
    rating: 5,
    treatmentBM: "Pemutihan Gigi & Denture Thermosense",
    treatmentEN: "Teeth Whitening & Thermosense Denture",
    textBM: "Buat rawatan pemutihan gigi dan denture di sini. Hasilnya memang memuaskan hati! Layanan mesra dan kaunter staf sangat membantu.",
    textEN: "Had my teeth whitening and thermosense denture done here. Results are truly satisfying! Friendly service and helpful counter staff.",
    date: "3 minggu lepas",
    verified: true,
    category: "general"
  },
  {
    id: "r4",
    name: "Khairul Azman",
    avatarInitial: "K",
    rating: 5,
    treatmentBM: "Rawatan Salur Akar (Root Canal)",
    treatmentEN: "Root Canal Treatment",
    textBM: "Sakit gigi dah bertukar hilang terus selepas dapat rawatan doktor. Klinik sangat profesional dan berpatutan harganya. Boleh booking terus WhatsApp gila senangnya.",
    textEN: "Tooth pain went away immediately after the doctor treated it. Very professional clinic with reasonable prices. Booking via WhatsApp was so easy.",
    date: "2 bulan lepas",
    verified: true,
    category: "general"
  },
  {
    id: "r5",
    name: "Farah Atikah",
    avatarInitial: "F",
    rating: 5,
    treatmentBM: "Pemeriksaan & Implan Gigi",
    treatmentEN: "Consultation & Teeth Implant",
    textBM: "Membawa ibu saya untuk implan gigi di Klinik Alan Adlan bersama Dr. Mohd Rusman Adlan. Doktor sangat sabar dan mengutamakan keselesaan pesakit warga emas. Layanan 5 bintang!",
    textEN: "Brought my mother for a dental implant at Klinik Alan Adlan with Dr. Mohd Rusman Adlan. The dentist was so patient and focused on senior comfort. 5-star service!",
    date: "1 bulan lepas",
    verified: true,
    category: "implant"
  },
  {
    id: "r6",
    name: "Muhamad Amirul",
    avatarInitial: "M",
    rating: 5,
    treatmentBM: "Scaling, Polishing & Tembakan Fluorida",
    treatmentEN: "Scaling, Polishing & Fluoride Treatment",
    textBM: "Servis scaling paling selesa dan bersih berbanding klinik lain di Bangi. Tak rasa ngilu langsung. Staf peramah dan tak ada caj tersembunyi. Sangat disyorkan!",
    textEN: "Most comfortable scaling service in Bangi. No painful sensitivity at all. Very friendly staff and transparent pricing. Highly recommended!",
    date: "2 minggu lepas",
    verified: true,
    category: "scaling"
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: "f1",
    questionBM: "Bolehkah saya membuat bayaran ansuran bulanan untuk Braces?",
    questionEN: "Can I pay for Braces using monthly installments?",
    answerBM: "Ya! Kami menyediakan pelan ansuran bulanan yang sangat fleksibel dan mesra bajet untuk pelbagai jenis Braces (Konvensional, Self-Ligating, Damon, dan Clear Aligner). Anda hanya perlu bayar deposit permulaan, diikuti dengan bayaran ansuran semasa semakan berkala.",
    answerEN: "Yes! We offer flexible monthly installment plans for all Braces options (Conventional, Self-Ligating, Damon, and Clear Aligners). Pay an initial deposit followed by manageable installments during periodic check-ups.",
    category: "braces"
  },
  {
    id: "f2",
    questionBM: "Adakah klinik buka pada hari Sabtu, Ahad, dan Cuti Umum?",
    questionEN: "Is the clinic open on Saturdays, Sundays, and Public Holidays?",
    answerBM: "Ya, Klinik Pergigian Alan Adlan BUKA SETIAP HARI dari jam 9:00 pagi hingga 9:00 malam, termasuk hujung minggu dan Cuti Umum untuk memudahkan temujanji anda.",
    answerEN: "Yes, Klinik Pergigian Alan Adlan is OPEN DAILY from 9:00 AM to 9:00 PM, including weekends and Public Holidays for your convenience.",
    category: "general"
  },
  {
    id: "f3",
    questionBM: "Apakah pilihan Gigi Palsu (Dentures) yang disediakan di klinik?",
    questionEN: "What Denture options are available at the clinic?",
    answerBM: "Kami menawarkan 3 jenis pilihan Gigi Palsu mengikut kesesuaian & bajet anda: Denture Acrylic (klasik & jimat), Denture Thermosense (fleksibel, selesa & bebas logam), dan Denture Cobalt Chrome (bingkai logam nipis & kukuh).",
    answerEN: "We offer 3 types of Dentures suited to your needs & budget: Acrylic Dentures (classic & economical), Thermosense Flexible Dentures (metal-free & ultra-comfortable), and Cobalt Chrome Dentures (ultra-strong thin metal frame).",
    category: "treatments"
  },
  {
    id: "f4",
    questionBM: "Apakah beza antara Rawatan Salur Akar dan Apikoektomi?",
    questionEN: "What is the difference between Root Canal Treatment and Apicoectomy?",
    answerBM: "Rawatan Salur Akar (Root Canal Treatment) membersihkan jangkitan saraf di dalam ruang salur akar dari atas mahkota gigi. Manakala Apikoektomi (Apicoectomy) pula ialah pembedahan minor presisi untuk membuang jangkitan berulang pada hujung akar gigi apabila rawatan salur akar biasa tidak mencukupi.",
    answerEN: "Root Canal Treatment cleans infected nerve tissue inside the tooth crown channels. Apicoectomy is a micro-surgical procedure to remove persistent infection directly at the root-tip when standard root canal therapy is insufficient.",
    category: "treatments"
  },
  {
    id: "f5",
    questionBM: "Adakah saya perlu membuat temujanji terlebih dahulu atau boleh 'walk-in'?",
    questionEN: "Do I need to make an appointment or can I walk in?",
    answerBM: "Walk-in amat dialu-alukan! Walau bagaimanapun, kami amat menggalakkan anda menempah slot temujanji terlebih dahulu melalui WhatsApp bagi mengelakkan masa menunggu yang lama.",
    answerEN: "Walk-ins are always welcome! However, we strongly recommend booking an appointment slot in advance via WhatsApp to minimize waiting time.",
    category: "general"
  }
];

export const PRICE_CALCULATOR_ITEMS: PriceCalculatorItem[] = [
  {
    id: "p1",
    nameBM: "Braces Konvensional (Metal / Ceramic Braces)",
    nameEN: "Braces Conventional (Metal / Ceramic)",
    category: "Orthodontics",
    minPrice: 3500,
    maxPrice: 5500,
    monthlyInstallmentBM: "Ansuran dari RM150 / bulan",
    monthlyInstallmentEN: "Installment from RM150 / month",
    descriptionBM: "Pelan paling popular untuk meluruskan gigi dengan kukuh dan selamat.",
    descriptionEN: "Most popular choice for effective and durable teeth straightening."
  },
  {
    id: "p2",
    nameBM: "Braces Self-Ligating (Standard)",
    nameEN: "Braces Self-Ligating (Standard)",
    category: "Orthodontics",
    minPrice: 5500,
    maxPrice: 7500,
    monthlyInstallmentBM: "Ansuran dari RM200 / bulan",
    monthlyInstallmentEN: "Installment from RM200 / month",
    descriptionBM: "Sistem klip tanpa getah yang mengurangkan geseran dan sakit.",
    descriptionEN: "Rubberless clip brackets providing reduced friction and faster progress."
  },
  {
    id: "p3",
    nameBM: "Braces Self-Ligating (Damon Brand)",
    nameEN: "Braces Self-Ligating (Damon Brand)",
    category: "Orthodontics",
    minPrice: 7500,
    maxPrice: 9500,
    monthlyInstallmentBM: "Ansuran dari RM250 / bulan",
    monthlyInstallmentEN: "Installment from RM250 / month",
    descriptionBM: "Sistem Damon premium dunia untuk keselesaan & bentuk muka harmoni.",
    descriptionEN: "World-class Damon system engineered for maximum comfort and aesthetics."
  },
  {
    id: "p4",
    nameBM: "Braces Clear Aligner (Penyusun Lutsinar)",
    nameEN: "Braces Clear Aligner",
    category: "Orthodontics",
    minPrice: 6500,
    maxPrice: 12000,
    monthlyInstallmentBM: "Pelan ansuran fleksibel disediakan",
    monthlyInstallmentEN: "Flexible payment plans available",
    descriptionBM: "Aligner lutsinar boleh tanggal yang hampir tidak kelihatan.",
    descriptionEN: "Nearly invisible, removable custom aligners."
  },
  {
    id: "p5",
    nameBM: "Pemutihan Gigi (Teeth Whitening)",
    nameEN: "Teeth Whitening",
    category: "Aesthetic",
    minPrice: 800,
    maxPrice: 1200,
    descriptionBM: "Hasil pemutihan ketara dalam masa 45-60 minit sesi klinikal.",
    descriptionEN: "Instant visible shade lightening in a 45-60 minute clinical session."
  },
  {
    id: "p6",
    nameBM: "Implan Gigi (Teeth Implants)",
    nameEN: "Teeth Implants",
    category: "Implantology",
    minPrice: 5000,
    maxPrice: 7500,
    monthlyInstallmentBM: "Ansuran fleksibel disediakan",
    monthlyInstallmentEN: "Flexible installment plan available",
    descriptionBM: "Termasuk tiang titanium implan, abutment, dan crown porselin.",
    descriptionEN: "Includes titanium fixture, custom abutment, and porcelain crown."
  },
  {
    id: "p7",
    nameBM: "Gigi Palsu Akrilik (Denture Acrylic)",
    nameEN: "Denture Acrylic",
    category: "Prosthodontics",
    minPrice: 350,
    maxPrice: 800,
    descriptionBM: "Gigi palsu akrilik klasik yang ekonomikal dan praktikal.",
    descriptionEN: "Classic acrylic dentures offering budget-friendly tooth replacement."
  },
  {
    id: "p8",
    nameBM: "Gigi Palsu Thermosense Fleksibel (Denture Thermosense)",
    nameEN: "Denture Thermosense (Flexible)",
    category: "Prosthodontics",
    minPrice: 750,
    maxPrice: 1500,
    descriptionBM: "Gigi palsu fleksibel bebas logam, selesa & tahan pecah.",
    descriptionEN: "Flexible metal-free denture designed for high comfort and durability."
  },
  {
    id: "p9",
    nameBM: "Gigi Palsu Kobalt Krom (Denture Cobalt Chrome)",
    nameEN: "Denture Cobalt Chrome",
    category: "Prosthodontics",
    minPrice: 900,
    maxPrice: 1800,
    descriptionBM: "Bingkai logam kobalt krom yang ultra-nipis dan amat kukuh.",
    descriptionEN: "Strong ultra-thin cobalt chrome metal frame denture."
  },
  {
    id: "p10",
    nameBM: "Rawatan Salur Akar (Root Canal Treatment)",
    nameEN: "Root Canal Treatment",
    category: "Endodontics",
    minPrice: 650,
    maxPrice: 1300,
    descriptionBM: "Merawat jangkitan saraf dan menyelamatkan gigi asli anda.",
    descriptionEN: "Treats root channel infections to save natural teeth."
  },
  {
    id: "p11",
    nameBM: "Apikoektomi (Apicoectomy)",
    nameEN: "Apicoectomy",
    category: "Oral Surgery",
    minPrice: 1200,
    maxPrice: 2200,
    descriptionBM: "Pembedahan minor mikroskopik pembuangan jangkitan hujung akar.",
    descriptionEN: "Micro-surgical removal of persistent root-tip infections."
  },
  {
    id: "p12",
    nameBM: "Scaling & Polishing (Cuci Gigi)",
    nameEN: "Scaling & Polishing",
    category: "Preventive",
    minPrice: 90,
    maxPrice: 180,
    descriptionBM: "Pembersihan karang gigi komprehensif mengikut tahap plak.",
    descriptionEN: "Comprehensive scaling depending on calculus build-up and stains."
  }
];

export const BEFORE_AFTER_GALLERY = [
  {
    id: "ba1",
    titleBM: "Transformasi Braces Self-Ligating Damon",
    titleEN: "Damon Self-Ligating Braces Transformation",
    tagBM: "Ortodontik Damon",
    tagEN: "Damon Orthodontics",
    durationBM: "12-14 Bulan",
    durationEN: "12-14 Months",
    imageBefore: "bracers-before.png",
    imageAfter: "bracers-after.png",
    imageCombined: "bracers.png",
    descBM: "Kemajuan ketara kes gigi bertindih teruk di rahang bawah (lower arch crowding) diselesaikan dengan Braces Self-Ligating Damon tanpa perlu cabutan gigi yang berlebihan.",
    descEN: "Dramatic alignment of lower arch dental crowding achieved using Damon Self-Ligating Braces with light continuous force and sliding mechanism.",
    highlightsBM: [
      "Mekanisme klip bebas geseran (tanpa getah warna)",
      "Pergerakan gigi lebih pantas & minima sakit",
      "Pembersihan gigi & oral hygiene lebih mudah"
    ],
    highlightsEN: [
      "Frictionless sliding mechanism (no rubber elastics)",
      "Faster alignment with gentle continuous force",
      "Superior oral hygiene & easier brushing"
    ]
  },
  {
    id: "ba2",
    titleBM: "Pemutihan Gigi Estetik (Teeth Whitening)",
    titleEN: "Clinical Teeth Whitening Transformation",
    tagBM: "Pemutihan Gigi",
    tagEN: "Teeth Whitening",
    durationBM: "1 Sesi (60 Minit)",
    durationEN: "1 Session (60 Mins)",
    imageBefore: "whitening-before.png",
    imageAfter: "whitening-after.png",
    imageCombined: "whitening.png",
    descBM: "Perubahan gred warna gigi daripada agak kekuningan kepada warna putih cerah berseri secara selamat dan berkesan.",
    descEN: "Dramatic shade improvement from discolored enamel to a radiant, bright white smile in just one clinical session.",
    highlightsBM: [
      "Rawatan pantas 1 jam di kerusi gigi",
      "Hasil tampak serta-merta tanpa merosakkan enamel",
      "Termasuk perlindungan gusi khas"
    ],
    highlightsEN: [
      "Fast 1-hour in-chair procedure",
      "Instant visible results without enamel damage",
      "Includes specialized gingival barrier protection"
    ]
  }
];

export const getClinicOpenStatus = () => {
  try {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Kuala_Lumpur',
      hour: 'numeric',
      minute: 'numeric',
      weekday: 'short',
      hour12: false
    });
    
    const parts = formatter.formatToParts(now);
    let hour = 0;
    let minute = 0;
    let day = '';
    
    for (const part of parts) {
      if (part.type === 'hour') hour = parseInt(part.value, 10);
      if (part.type === 'minute') minute = parseInt(part.value, 10);
      if (part.type === 'weekday') day = part.value;
    }
    
    // Operating hours: 9:00 AM (540 mins) to 9:00 PM (1260 mins)
    const totalMinutesNow = hour * 60 + minute;
    const openMinutes = 9 * 60; // 09:00
    const closeMinutes = 21 * 60; // 21:00
    
    const isOpen = totalMinutesNow >= openMinutes && totalMinutesNow < closeMinutes;
    
    return {
      isOpen,
      currentHour: hour,
      currentMinute: minute,
      day,
      hoursTextBM: "9:00 AM – 9:00 PM (Isnin–Ahad)",
      hoursTextEN: "9:00 AM – 9:00 PM (Mon–Sun)",
      nextOpeningBM: totalMinutesNow < openMinutes ? "Hari ini 9:00 AM" : "Esok 9:00 AM",
      nextOpeningEN: totalMinutesNow < openMinutes ? "Today 9:00 AM" : "Tomorrow 9:00 AM"
    };
  } catch {
    const now = new Date();
    const hour = now.getHours();
    const isOpen = hour >= 9 && hour < 21;
    return {
      isOpen,
      currentHour: hour,
      currentMinute: now.getMinutes(),
      day: '',
      hoursTextBM: "9:00 AM – 9:00 PM (Isnin–Ahad)",
      hoursTextEN: "9:00 AM – 9:00 PM (Mon–Sun)",
      nextOpeningBM: "Esok 9:00 AM",
      nextOpeningEN: "Tomorrow 9:00 AM"
    };
  }
};


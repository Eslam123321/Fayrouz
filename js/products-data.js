// بيانات منتجات شركة الفايروز استيل - Al Fayrouz Steel
// 20 منتج في السلالم والدرابزينات والتشطيبات المعمارية + 20 منتج في معدات وتجهيزات المطابخ والفنادق
// يدعم اللغتين العربية والإنجليزية بشكل كامل (Bilingual Dataset)

const PRODUCTS_DATA = [
  {
    "id": "FAY-ARC-01",
    "category": "architectural",
    "categoryName": "السلالم والدرابزينات والتشطيبات",
    "categoryNameEn": "Stairs, Railings & Finishes",
    "name": "درابزين ستانلس 304 مع زجاج سيكوريت 12 مم",
    "nameEn": "Architectural Glass-and-Steel Railing System",
    "badge": "الأكثر طلباً للمباني الفاخرة",
    "image": "images/products/arc-01-glass-railing.webp",
    "grade": "ستانلس 316 بحري و 304",
    "finish": "مصنفر ساتان / عاكس ميرور",
    "thickness": "زجاج 12 مم | مواسير 1.5 مم",
    "badgeSpecs": [
      {
        "icon": "fa-shield-alt",
        "textAr": "ستانلس 316 بحري",
        "textEn": "Grade 316 Marine",
        "text": "ستانلس 316 بحري"
      },
      {
        "icon": "fa-square",
        "textAr": "سيكوريت مقسى 12 مم",
        "textEn": "Toughened 12mm Glass",
        "text": "سيكوريت مقسى 12 مم"
      },
      {
        "icon": "fa-sliders-h",
        "textAr": "تشطيب مصنفر ساتان",
        "textEn": "Satin Brushed Finish",
        "text": "تشطيب مصنفر ساتان"
      },
      {
        "icon": "fa-microchip",
        "textAr": "قص ليزر CNC دقيق",
        "textEn": "Precision CNC Laser",
        "text": "قص ليزر CNC دقيق"
      }
    ],
    "shortDesc": "نظام درابزين فخم يجمع بين قوائم الستانلس ستيل المقاوم للصدأ مع ألواح الزجاج السيكوريت المقسى للمولات والفيلات والأبراج السكنية.",
    "features": [
      "قوائم ستانلس ستيل قطاع دائري أو مربع بمسامير مخفية",
      "زجاج سيكوريت مقسى 10 أو 12 مم معالج ضد الصدمات",
      "إكسسوارات ومثبتات ستانلس مصمتة عالية المتانة",
      "مناسب للاستخدام الداخلي والخارجي مع ضمان 10 سنوات"
    ],
    "specs": {
      "الخامة المعتمدة": "ستانلس ستيل AISI 304 أو AISI 316",
      "ارتفاع الدرابزين": "90 سم إلى 110 سم (حسب المواصفات الهندسية)",
      "نوع الزجاج": "زجاج سيكوريت شفاف / مثلج / ملون",
      "التثبيت": "تثبيت أرضي بجلب ميكانيكية ووريدات غطاء ستانلس"
    },
    "badgeEn": "Most Popular Architectural",
    "gradeEn": "AISI 316 Marine / AISI 304",
    "finishEn": "Mirror 8K / Satin Brushed",
    "thicknessEn": "زجاج 12 mm | مواسير 1.5 mm",
    "shortDescEn": "Premium architectural stainless steel fabrication (AISI 316 Marine / AISI 304) precision cut with CNC laser and engineered for luxury buildings, villas, and hotels.",
    "featuresEn": [
      "Heavy-duty construction using genuine certified AISI 304 / 316 stainless steel",
      "Seamless continuous argon TIG welds ground and polished to perfection",
      "Custom site dimensions available through precision CNC laser and CAD fabrication",
      "Full warranty and nationwide engineering delivery & installation in Egypt"
    ],
    "specsEn": {
      "Material Grade": "AISI 316 Marine / AISI 304",
      "Surface Finish": "Mirror 8K / Satin Brushed",
      "Metal Thickness": "زجاج 12 mm | مواسير 1.5 mm",
      "Standard Compliance": "Egyptian & European Safety Building Codes",
      "Fabrication": "CNC Fiber Laser, Hydraulic Bending & Argon TIG Welding",
      "Warranty & Supply": "Full comprehensive warranty with nationwide Egypt delivery"
    }
  },
  {
    "id": "FAY-ARC-02",
    "category": "architectural",
    "categoryName": "السلالم والدرابزينات والتشطيبات",
    "categoryNameEn": "Stairs, Railings & Finishes",
    "name": "سلم حلزوني ستانلس ستيل مع درابزين منحني",
    "nameEn": "Spiral Architectural Stainless Staircase",
    "badge": "تصنيع هندسي خاص",
    "image": "images/products/arc-02-spiral-stairs.webp",
    "grade": "ستانلس 304 المعماري المعتمد",
    "finish": "ميرور 8K لامع فائق الانعكاس",
    "thickness": "شاسيه 3.5 مم | نائم 2.5 مم",
    "badgeSpecs": [
      {
        "icon": "fa-award",
        "textAr": "ستانلس ستيل 304",
        "textEn": "Grade 304 Stainless",
        "text": "ستانلس ستيل 304"
      },
      {
        "icon": "fa-gem",
        "textAr": "عاكس ميرور 8K",
        "textEn": "Mirror 8K Reflection",
        "text": "عاكس ميرور 8K"
      },
      {
        "icon": "fa-circle-notch",
        "textAr": "زجاج منحني مقسى",
        "textEn": "Curved Toughened Glass",
        "text": "زجاج منحني مقسى"
      },
      {
        "icon": "fa-tools",
        "textAr": "تصنيع هندسي خاص",
        "textEn": "Custom Engineered",
        "text": "تصنيع هندسي خاص"
      }
    ],
    "shortDesc": "سلالم حلزونية معمارية بتشطيب ستانلس ستيل مبهر للفيلات والدوبلكس والمعارض، توفر استغلالاً أمثل للمساحات مع لمسة فندقية.",
    "features": [
      "شاسيه مركزي مقوى يتحمل أوزاناً عالية بدون اهتزاز",
      "درجات ناعمة بتفريغات مانعة للانزلاق أو تجليد خشب/زجاج",
      "درابزين حلزوني منحني بدقة متناهية عبر ماكينات درفلة CNC",
      "تصميم مخصص حسب مقاسات الصبة والارتفاعات بالموقع"
    ],
    "specs": {
      "القطر الخارجي": "من 140 سم حتى 240 سم",
      "سماكة المعدن": "عمود دوران 4 بوصة جدول 40 ستانلس",
      "معالجة السطح": "صقل وتلميع يدوي بمستويات عاكسة ميرور",
      "الضمان": "ضمان إنشائي متكامل"
    },
    "badgeEn": "Custom Engineered",
    "gradeEn": "Certified AISI 304 Stainless",
    "finishEn": "Mirror 8K / Satin Brushed",
    "thicknessEn": "شاسيه 3.5 mm | نائم 2.5 mm",
    "shortDescEn": "Premium architectural stainless steel fabrication (Certified AISI 304 Stainless) precision cut with CNC laser and engineered for luxury buildings, villas, and hotels.",
    "featuresEn": [
      "Heavy-duty construction using genuine certified AISI 304 / 316 stainless steel",
      "Seamless continuous argon TIG welds ground and polished to perfection",
      "Custom site dimensions available through precision CNC laser and CAD fabrication",
      "Full warranty and nationwide engineering delivery & installation in Egypt"
    ],
    "specsEn": {
      "Material Grade": "Certified AISI 304 Stainless",
      "Surface Finish": "Mirror 8K / Satin Brushed",
      "Metal Thickness": "شاسيه 3.5 mm | نائم 2.5 mm",
      "Standard Compliance": "Egyptian & European Safety Building Codes",
      "Fabrication": "CNC Fiber Laser, Hydraulic Bending & Argon TIG Welding",
      "Warranty & Supply": "Full comprehensive warranty with nationwide Egypt delivery"
    }
  },
  {
    "id": "FAY-ARC-03",
    "category": "architectural",
    "categoryName": "السلالم والدرابزينات والتشطيبات",
    "categoryNameEn": "Stairs, Railings & Finishes",
    "name": "هاندريل حائطي ستانلس ستيل للمستشفيات والممرات",
    "nameEn": "Wall-Mounted Hospital Safety Handrail",
    "badge": "كود المستشفيات المعتمد",
    "image": "images/products/arc-03-handrail.webp",
    "grade": "ستانلس 304 الطبي المعقم",
    "finish": "مصنفر ناعم مانع للبصمات",
    "thickness": "قطر 50.8 مم سمك 1.5 مم",
    "badgeSpecs": [
      {
        "icon": "fa-shield-alt",
        "textAr": "ستانلس 304 طبي",
        "textEn": "Grade 304 Medical",
        "text": "ستانلس 304 طبي"
      },
      {
        "icon": "fa-hand-paper",
        "textAr": "معالج مانع للبصمات",
        "textEn": "Anti-Fingerprint",
        "text": "معالج مانع للبصمات"
      },
      {
        "icon": "fa-check",
        "textAr": "مطابق لكود الأمان",
        "textEn": "Safety Code Compliant",
        "text": "مطابق لكود الأمان"
      },
      {
        "icon": "fa-dumbbell",
        "textAr": "تحمل شاق ومستمر",
        "textEn": "Heavy Duty Rated",
        "text": "تحمل شاق ومستمر"
      }
    ],
    "shortDesc": "هاندريل جداري معتمد لممرات المستشفيات والمراكز الطبية والمباني الإدارية، يوفر أقصى درجات النظافة وسهولة التعقيم والراحة في الإمساك.",
    "features": [
      "كوابيل تثبيت ستانلس صلبة بمسامير فيشر صلب في الحوائط",
      "طبايات ونهايات منحنية لحماية الأيدي والملابس من الاحتكاك",
      "سطح أملس معالج يمنع تجمع البكتيريا والجراثيم",
      "متانة فائقة مع مقاومة كاملة للمنظفات والمطهرات الكيميائية"
    ],
    "specs": {
      "المقاس القياسي": "مواسير 2 بوصة مع بروز 8 سم عن الحائط",
      "المسافة بين الكوابيل": "كل 100 سم كابولي دعم",
      "الاستخدام": "مستشفيات، دور رعاية، ممرات فنادق، مراكز تسوق"
    },
    "badgeEn": "Hospital Certified",
    "gradeEn": "Certified AISI 304 Stainless",
    "finishEn": "Directional Satin Brushed (No-Fingerprint)",
    "thicknessEn": "قطر 50.8 mm cmك 1.5 mm",
    "shortDescEn": "Premium architectural stainless steel fabrication (Certified AISI 304 Stainless) precision cut with CNC laser and engineered for luxury buildings, villas, and hotels.",
    "featuresEn": [
      "Heavy-duty construction using genuine certified AISI 304 / 316 stainless steel",
      "Seamless continuous argon TIG welds ground and polished to perfection",
      "Custom site dimensions available through precision CNC laser and CAD fabrication",
      "Full warranty and nationwide engineering delivery & installation in Egypt"
    ],
    "specsEn": {
      "Material Grade": "Certified AISI 304 Stainless",
      "Surface Finish": "Directional Satin Brushed (No-Fingerprint)",
      "Metal Thickness": "قطر 50.8 mm cmك 1.5 mm",
      "Standard Compliance": "Egyptian & European Safety Building Codes",
      "Fabrication": "CNC Fiber Laser, Hydraulic Bending & Argon TIG Welding",
      "Warranty & Supply": "Full comprehensive warranty with nationwide Egypt delivery"
    }
  },
  {
    "id": "FAY-ARC-04",
    "category": "architectural",
    "categoryName": "السلالم والدرابزينات والتشطيبات",
    "categoryNameEn": "Stairs, Railings & Finishes",
    "name": "درابزين مواسير وتيوبات ستانلس 4 خطوط أمان",
    "nameEn": "Horizontal Multi-Line Stainless Railing",
    "badge": "الأمان والمتانة الأقصى",
    "image": "images/products/arc-04-horiz-railing.webp",
    "grade": "304 عالي الصلابة",
    "finish": "مزيج ميرور وساتان",
    "thickness": "قائم 1.5 مم | أوتار 1.2 مم",
    "badgeSpecs": [
      {
        "icon": "fa-shield-alt",
        "textAr": "ستانلس ستيل 304",
        "textEn": "Grade 304 Stainless",
        "text": "ستانلس ستيل 304"
      },
      {
        "icon": "fa-bars",
        "textAr": "4 خطوط أمان أفقية",
        "textEn": "4 Safety Rails",
        "text": "4 خطوط أمان أفقية"
      },
      {
        "icon": "fa-tools",
        "textAr": "لحام أرجون ناعم",
        "textEn": "Smooth Argon TIG Weld",
        "text": "لحام أرجون ناعم"
      },
      {
        "icon": "fa-sun",
        "textAr": "مقاوم للعوامل الجوية",
        "textEn": "Weatherproof",
        "text": "مقاوم للعوامل الجوية"
      }
    ],
    "shortDesc": "الدرابزين الكلاسيكي المفضل في المشروعات الهندسية والمصانع والعمائر السكنية، يتكون من هاندريل علوي وقوائم مع 3 أو 4 أوتار أفقية.",
    "features": [
      "هيكل صلب بالكامل ومقاوم للصدمات والاهتزاز",
      "لحامات أرجون دقيقة مع معالجة وتنعيم مكان اللحام بالكامل",
      "مظهر عصري ونظيف بتكلفة اقتصادية مقارنة بالزجاج",
      "لا يحتاج لأي صيانة دورية ولا يتأثر بالرطوبة أو الغسيل"
    ],
    "specs": {
      "الهاندريل العلوي": "ماسورة 2 بوصة (50.8 مم)",
      "القوائم": "ماسورة 1.5 بوصة أو تيوب مربع 40×40 مم",
      "الأوتار الداخلية": "مواسير 16 مم أو 19 مم (3 إلى 5 خطوط)"
    },
    "badgeEn": "Certified Steel 304/316",
    "gradeEn": "Certified AISI 304 Stainless",
    "finishEn": "Mirror 8K / Satin Brushed",
    "thicknessEn": "قائم 1.5 mm | أوتار 1.2 mm",
    "shortDescEn": "Premium architectural stainless steel fabrication (Certified AISI 304 Stainless) precision cut with CNC laser and engineered for luxury buildings, villas, and hotels.",
    "featuresEn": [
      "Heavy-duty construction using genuine certified AISI 304 / 316 stainless steel",
      "Seamless continuous argon TIG welds ground and polished to perfection",
      "Custom site dimensions available through precision CNC laser and CAD fabrication",
      "Full warranty and nationwide engineering delivery & installation in Egypt"
    ],
    "specsEn": {
      "Material Grade": "Certified AISI 304 Stainless",
      "Surface Finish": "Mirror 8K / Satin Brushed",
      "Metal Thickness": "قائم 1.5 mm | أوتار 1.2 mm",
      "Standard Compliance": "Egyptian & European Safety Building Codes",
      "Fabrication": "CNC Fiber Laser, Hydraulic Bending & Argon TIG Welding",
      "Warranty & Supply": "Full comprehensive warranty with nationwide Egypt delivery"
    }
  },
  {
    "id": "FAY-ARC-05",
    "category": "architectural",
    "categoryName": "السلالم والدرابزينات والتشطيبات",
    "categoryNameEn": "Stairs, Railings & Finishes",
    "name": "درابزين ستانلس ستيل مطلي تيتانيوم ذهبي PVD",
    "nameEn": "Titanium Gold PVD Luxury Railing",
    "badge": "فخامة الفيلات والقصور",
    "image": "images/products/arc-05-gold-railing.webp",
    "grade": "304 PVD Coated",
    "finish": "ذهبي ملكي براق",
    "thickness": "تيوبات 1.5 مم - 2.0 مم",
    "badgeSpecs": [
      {
        "icon": "fa-gem",
        "textAr": "Titanium Gold",
        "textEn": "Titanium Gold",
        "text": "Titanium Gold"
      },
      {
        "icon": "fa-layer-group",
        "textAr": "PVD Tech",
        "textEn": "PVD Tech",
        "text": "PVD Tech"
      },
      {
        "icon": "fa-certificate",
        "textAr": "10Y Warranty",
        "textEn": "10Y Warranty",
        "text": "10Y Warranty"
      },
      {
        "icon": "fa-crown",
        "textAr": "Luxury Tier",
        "textEn": "Luxury Tier",
        "text": "Luxury Tier"
      }
    ],
    "shortDesc": "درابزين ستانلس ستيل مكسو بطبقة تيتانيوم ذهبية تدوم مدى الحياة دون تقشير أو تغير لون، مخصص للقصور وقاعات الأفراح والمداخل الفاخرة.",
    "features": [
      "طلاء بتقنية الترسيب الفيزيائي للبخار (PVD Coating) المقاوم للخدش",
      "ثبات دائم للون الذهبي اللامع ومقاومة للأكسدة",
      "إمكانية دمج تصاميم الليزر الزخرفية والزجاج المصنفر",
      "يعطي قيمة جمالية واستثمارية فائقة للمكان"
    ],
    "specs": {
      "الألوان المتاحة": "ذهبي براق، ذهبي روز، نحاسي، وأسود تيتانيوم",
      "الضمان على اللون": "10 سنوات ضد بهتان اللون أو التقشير",
      "الاستخدام": "قصور، فلل خاصة، بهو فنادق 5 نجوم"
    },
    "badgeEn": "Certified Steel 304/316",
    "gradeEn": "Certified AISI 304 Stainless",
    "finishEn": "Directional Satin Brushed (No-Fingerprint)",
    "thicknessEn": "تيوبات 1.5 mm - 2.0 mm",
    "shortDescEn": "Premium architectural stainless steel fabrication (Certified AISI 304 Stainless) precision cut with CNC laser and engineered for luxury buildings, villas, and hotels.",
    "featuresEn": [
      "Heavy-duty construction using genuine certified AISI 304 / 316 stainless steel",
      "Seamless continuous argon TIG welds ground and polished to perfection",
      "Custom site dimensions available through precision CNC laser and CAD fabrication",
      "Full warranty and nationwide engineering delivery & installation in Egypt"
    ],
    "specsEn": {
      "Material Grade": "Certified AISI 304 Stainless",
      "Surface Finish": "Directional Satin Brushed (No-Fingerprint)",
      "Metal Thickness": "تيوبات 1.5 mm - 2.0 mm",
      "Standard Compliance": "Egyptian & European Safety Building Codes",
      "Fabrication": "CNC Fiber Laser, Hydraulic Bending & Argon TIG Welding",
      "Warranty & Supply": "Full comprehensive warranty with nationwide Egypt delivery"
    }
  },
  {
    "id": "FAY-ARC-06",
    "category": "architectural",
    "categoryName": "السلالم والدرابزينات والتشطيبات",
    "categoryNameEn": "Stairs, Railings & Finishes",
    "name": "تجليد أعمدة خرسانية بألواح ستانلس ستيل ميرور ومصنفر",
    "nameEn": "Stainless Architectural Column Cladding",
    "badge": "للمولات والمطارات والفنادق",
    "image": "images/products/arc-06-column-cladding.webp",
    "grade": "304 عالي النقاء",
    "finish": "ميرور عاكس كالمرآة / Brushed",
    "thickness": "ألواح 1.2 مم إلى 1.5 مم",
    "badgeSpecs": [
      {
        "icon": "fa-building",
        "textAr": "Mega Projects",
        "textEn": "Mega Projects",
        "text": "Mega Projects"
      },
      {
        "icon": "fa-columns",
        "textAr": "Round & Square",
        "textEn": "Round & Square",
        "text": "Round & Square"
      },
      {
        "icon": "fa-shield-alt",
        "textAr": "Impact Proof",
        "textEn": "Impact Proof",
        "text": "Impact Proof"
      },
      {
        "icon": "fa-sparkles",
        "textAr": "ميرور أو ساتان",
        "textEn": "Mirror or Satin",
        "text": "ميرور أو ساتان"
      }
    ],
    "shortDesc": "تكسية الأعمدة الدائرية والمربعة في المداخل والمطارات والمولات بألواح ستانلس ستيل مشكلة على شاسيهات حديدية داخلية بدقة متناهية.",
    "features": [
      "شاسيهات تثبيت مخفية تضمن استواءً هندسياً تاماً للسطح",
      "حماية الأعمدة الخرسانية من الصدمات والخدوش والتآكل",
      "فواصل تمدد دقيقة بحليات ستانلس غاطسة أو بارزة",
      "تلميع احترافي يخفي خطوط الفواصل ويمنح مظهراً مستمراً"
    ],
    "specs": {
      "الأشكال": "أعمدة دائرية (درفلة هيدروليكية) أو مربعة ومستطيلة",
      "الارتفاعات": "تغطية بارتفاعات متعددة الأدوار حتى 12 متراً",
      "مقاومة الصدمات": "شاسيه داخلي مبطن بألواح خشب معالج أو فوم صلب"
    },
    "badgeEn": "Certified Steel 304/316",
    "gradeEn": "Certified AISI 304 Stainless",
    "finishEn": "Mirror 8K / Satin Brushed",
    "thicknessEn": "ألواح 1.2 mm إلى 1.5 mm",
    "shortDescEn": "Premium architectural stainless steel fabrication (Certified AISI 304 Stainless) precision cut with CNC laser and engineered for luxury buildings, villas, and hotels.",
    "featuresEn": [
      "Heavy-duty construction using genuine certified AISI 304 / 316 stainless steel",
      "Seamless continuous argon TIG welds ground and polished to perfection",
      "Custom site dimensions available through precision CNC laser and CAD fabrication",
      "Full warranty and nationwide engineering delivery & installation in Egypt"
    ],
    "specsEn": {
      "Material Grade": "Certified AISI 304 Stainless",
      "Surface Finish": "Mirror 8K / Satin Brushed",
      "Metal Thickness": "ألواح 1.2 mm إلى 1.5 mm",
      "Standard Compliance": "Egyptian & European Safety Building Codes",
      "Fabrication": "CNC Fiber Laser, Hydraulic Bending & Argon TIG Welding",
      "Warranty & Supply": "Full comprehensive warranty with nationwide Egypt delivery"
    }
  },
  {
    "id": "FAY-ARC-07",
    "category": "architectural",
    "categoryName": "السلالم والدرابزينات والتشطيبات",
    "categoryNameEn": "Stairs, Railings & Finishes",
    "name": "قواطيع وبارتشنات ستانلس مفرغة بالليزر CNC",
    "nameEn": "CNC Laser-Cut Stainless Screens",
    "badge": "نقوش إسلامية ومودرن",
    "image": "images/products/arc-07-laser-screen.webp",
    "grade": "304 صلب",
    "finish": "تيتانيوم ذهبي / أسود / طبيعي",
    "thickness": "ألواح 2 مم إلى 4 مم",
    "badgeSpecs": [
      {
        "icon": "fa-microchip",
        "textAr": "Laser Cut CNC",
        "textEn": "Laser Cut CNC",
        "text": "Laser Cut CNC"
      },
      {
        "icon": "fa-paint-brush",
        "textAr": "500+ Patterns",
        "textEn": "500+ Patterns",
        "text": "500+ Patterns"
      },
      {
        "icon": "fa-palette",
        "textAr": "Gold & Black",
        "textEn": "Gold & Black",
        "text": "Gold & Black"
      },
      {
        "icon": "fa-lightbulb",
        "textAr": "Backlit Option",
        "textEn": "Backlit Option",
        "text": "Backlit Option"
      }
    ],
    "shortDesc": "فواصل فراغات وقواطيع ديكورية داخلية وخارجية مقطوعة بأدق ماكينات الفايبر ليزر بنقوش إسلامية، هندسية، أو زخارف نباتية عصرية.",
    "features": [
      "قص فايبر ليزر فائق الدقة بدون حواف حادة أو رايش",
      "فريمات هيكلية متينة من تيوبات الستانلس للتثبيت الآمن",
      "إمكانية دمج شريط إضاءة مخفية LED في الفريم لإبراز النقوش",
      "عزل بصري راقي بين الصالات والمجالس والمداخل"
    ],
    "specs": {
      "النقوش": "أكثر من 500 تصميم هندسي وإسلامي ومودرن",
      "المقاسات": "تفصيل حسب أبعاد الفتحات والأبواب والقواطيع",
      "التشطيب": "ساتان، ميرور، أو تيتانيوم بجميع الدرجات"
    },
    "badgeEn": "Certified Steel 304/316",
    "gradeEn": "Certified AISI 304 Stainless",
    "finishEn": "Directional Satin Brushed (No-Fingerprint)",
    "thicknessEn": "ألواح 2 mm إلى 4 mm",
    "shortDescEn": "Premium architectural stainless steel fabrication (Certified AISI 304 Stainless) precision cut with CNC laser and engineered for luxury buildings, villas, and hotels.",
    "featuresEn": [
      "Heavy-duty construction using genuine certified AISI 304 / 316 stainless steel",
      "Seamless continuous argon TIG welds ground and polished to perfection",
      "Custom site dimensions available through precision CNC laser and CAD fabrication",
      "Full warranty and nationwide engineering delivery & installation in Egypt"
    ],
    "specsEn": {
      "Material Grade": "Certified AISI 304 Stainless",
      "Surface Finish": "Directional Satin Brushed (No-Fingerprint)",
      "Metal Thickness": "ألواح 2 mm إلى 4 mm",
      "Standard Compliance": "Egyptian & European Safety Building Codes",
      "Fabrication": "CNC Fiber Laser, Hydraulic Bending & Argon TIG Welding",
      "Warranty & Supply": "Full comprehensive warranty with nationwide Egypt delivery"
    }
  },
  {
    "id": "FAY-ARC-08",
    "category": "architectural",
    "categoryName": "السلالم والدرابزينات والتشطيبات",
    "categoryNameEn": "Stairs, Railings & Finishes",
    "name": "مظلات وكانوبي مداخل ستانلس مع زجاج سيكوريت",
    "nameEn": "Stainless Steel Spider Glass Canopy",
    "badge": "مقاومة الرياح والأمطار",
    "image": "images/products/arc-08-glass-canopy.webp",
    "grade": "316 المقاوم الخارجي",
    "finish": "مصنفر صناعي ناعم",
    "thickness": "شدادات 8 مم - 12 مم",
    "badgeSpecs": [
      {
        "icon": "fa-wind",
        "textAr": "Wind Tested",
        "textEn": "Wind Tested",
        "text": "Wind Tested"
      },
      {
        "icon": "fa-shield-alt",
        "textAr": "Grade 316",
        "textEn": "Grade 316",
        "text": "Grade 316"
      },
      {
        "icon": "fa-spider",
        "textAr": "Spider Fitting",
        "textEn": "Spider Fitting",
        "text": "Spider Fitting"
      },
      {
        "icon": "fa-umbrella",
        "textAr": "Drainage Built-in",
        "textEn": "Drainage Built-in",
        "text": "Drainage Built-in"
      }
    ],
    "shortDesc": "مظلات معلقة لمداخل الأبراج والشركات والفنادق، تتكون من أذرع شدادات ستانلس ستيل مع ألواح زجاجية مزدوجة ضد الكسر.",
    "features": [
      "شدادات وسبايدرات (Spider Fittings) ستانلس 316 عالية التحمل",
      "زجاج سيكوريت مصفح دبل (Laminated Glass) آمن تماماً",
      "مجاري مزاريب تصريف أمطار ستانلس مدمجة بالهيكل",
      "تصميم انسيابي يمنح واجهة المبنى طابعاً هندسياً حديثاً"
    ],
    "specs": {
      "نوع الستانلس": "AISI 316 (Marine Grade)",
      "تحمل الرياح": "حسابات إنشائية معتمدة لأحمال الرياح حتى 140 كم/س",
      "الزجاج": "زجاج 6+6 مم أو 8+8 مم مع طبقة PVB شفافة"
    },
    "badgeEn": "Marine Grade 316",
    "gradeEn": "AISI 316 Marine / AISI 304",
    "finishEn": "Directional Satin Brushed (No-Fingerprint)",
    "thicknessEn": "شدادات 8 mm - 12 mm",
    "shortDescEn": "Premium architectural stainless steel fabrication (AISI 316 Marine / AISI 304) precision cut with CNC laser and engineered for luxury buildings, villas, and hotels.",
    "featuresEn": [
      "Heavy-duty construction using genuine certified AISI 304 / 316 stainless steel",
      "Seamless continuous argon TIG welds ground and polished to perfection",
      "Custom site dimensions available through precision CNC laser and CAD fabrication",
      "Full warranty and nationwide engineering delivery & installation in Egypt"
    ],
    "specsEn": {
      "Material Grade": "AISI 316 Marine / AISI 304",
      "Surface Finish": "Directional Satin Brushed (No-Fingerprint)",
      "Metal Thickness": "شدادات 8 mm - 12 mm",
      "Standard Compliance": "Egyptian & European Safety Building Codes",
      "Fabrication": "CNC Fiber Laser, Hydraulic Bending & Argon TIG Welding",
      "Warranty & Supply": "Full comprehensive warranty with nationwide Egypt delivery"
    }
  },
  {
    "id": "FAY-ARC-09",
    "category": "architectural",
    "categoryName": "السلالم والدرابزينات والتشطيبات",
    "categoryNameEn": "Stairs, Railings & Finishes",
    "name": "درابزين بلكونات وتراسات ستانلس 316 بحري",
    "nameEn": "Marine Grade 316 Coastal Balcony Railing",
    "badge": "للمناطق الساحلية (الإسكندرية والساحل)",
    "image": "images/products/arc-09-balcony-316.webp",
    "grade": "316L البحري",
    "finish": "مقاوم للأملاح واليود",
    "thickness": "سمك 2.0 مم",
    "badgeSpecs": [
      {
        "icon": "fa-water",
        "textAr": "Marine 316L",
        "textEn": "Marine 316L",
        "text": "Marine 316L"
      },
      {
        "icon": "fa-sun",
        "textAr": "Anti-Corrosion",
        "textEn": "Anti-Corrosion",
        "text": "Anti-Corrosion"
      },
      {
        "icon": "fa-certificate",
        "textAr": "Life Warranty",
        "textEn": "Life Warranty",
        "text": "Life Warranty"
      },
      {
        "icon": "fa-gem",
        "textAr": "تشطيب مصنفر ساتان",
        "textEn": "Satin Brushed Finish",
        "text": "تشطيب مصنفر ساتان"
      }
    ],
    "shortDesc": "درابزينات مخصصة للواجهات الساحلية (الإسكندرية، الساحل الشمالي، البحر الأحمر) غير قابلة للصدأ إطلاقاً بفعل يود البحر ورطوبة الجو.",
    "features": [
      "سبيكة ستانلس ستيل 316 المعززة بالموليبدينوم لمقاومة التآكل الملحي",
      "لحامات مصمتة بالكامل ومصقولة بدون أي مسام لتجمع الرطوبة",
      "حشوات زجاج سيكوريت مقاومة لضغط الرياح المرتفع",
      "عمر افتراضي طويل بدون أي علامات صدأ أو بقع صفراء"
    ],
    "specs": {
      "نسبة النيكل": "10% إلى 14% (أعلى مقاومة كيميائية)",
      "التثبيت": "مسامير كيميائية أنكور Hilti في الخرسانة المسلحة",
      "شهادة المنشأ": "شهادات فحص واعتماد خامات معتمدة"
    },
    "badgeEn": "Certified Steel 304/316",
    "gradeEn": "AISI 316 Marine / AISI 304",
    "finishEn": "Directional Satin Brushed (No-Fingerprint)",
    "thicknessEn": "cmك 2.0 mm",
    "shortDescEn": "Premium architectural stainless steel fabrication (AISI 316 Marine / AISI 304) precision cut with CNC laser and engineered for luxury buildings, villas, and hotels.",
    "featuresEn": [
      "Heavy-duty construction using genuine certified AISI 304 / 316 stainless steel",
      "Seamless continuous argon TIG welds ground and polished to perfection",
      "Custom site dimensions available through precision CNC laser and CAD fabrication",
      "Full warranty and nationwide engineering delivery & installation in Egypt"
    ],
    "specsEn": {
      "Material Grade": "AISI 316 Marine / AISI 304",
      "Surface Finish": "Directional Satin Brushed (No-Fingerprint)",
      "Metal Thickness": "cmك 2.0 mm",
      "Standard Compliance": "Egyptian & European Safety Building Codes",
      "Fabrication": "CNC Fiber Laser, Hydraulic Bending & Argon TIG Welding",
      "Warranty & Supply": "Full comprehensive warranty with nationwide Egypt delivery"
    }
  },
  {
    "id": "FAY-ARC-11",
    "category": "architectural",
    "categoryName": "السلالم والدرابزينات والتشطيبات",
    "categoryNameEn": "Stairs, Railings & Finishes",
    "name": "سلالم مسابح وحمامات سباحة ستانلس ستيل 316",
    "nameEn": "Stainless Pool Ladder (Chlorine Resistant)",
    "badge": "مقاوم للكلور والأملاح",
    "image": "images/products/arc-11-pool-ladder.webp",
    "grade": "316 المقاوم للكلور",
    "finish": "Mirror عالي اللمعان",
    "thickness": "مواسير 43 مم سمك 1.5 مم",
    "badgeSpecs": [
      {
        "icon": "fa-swimming-pool",
        "textAr": "Grade 316",
        "textEn": "Grade 316",
        "text": "Grade 316"
      },
      {
        "icon": "fa-shoe-prints",
        "textAr": "Anti-Slip Treads",
        "textEn": "Anti-Slip Treads",
        "text": "Anti-Slip Treads"
      },
      {
        "icon": "fa-tint",
        "textAr": "Chlorine Safe",
        "textEn": "Chlorine Safe",
        "text": "Chlorine Safe"
      },
      {
        "icon": "fa-gem",
        "textAr": "Mirror Finish",
        "textEn": "Mirror Finish",
        "text": "Mirror Finish"
      }
    ],
    "shortDesc": "سلالم حمامات السباحة 2، 3، 4، و 5 درجات مع درجات عريضة مزودة بقطع مطاطية أو تخريمات ستانلس مانعة للانزلاق.",
    "features": [
      "مقاومة تامة لمياه المسابح المعالجة بالكلور والمواد الكيماوية",
      "كؤوس تثبيت أرضية غاطسة مع أغطية وش ورود من الستانلس الأنيق",
      "درجات آمنة ومريحة للأقدام بدون حواف قاطعة",
      "سهولة الفك والتركيب للصيانة الموسمية"
    ],
    "specs": {
      "عدد الدرجات": "2 درجة، 3 درجات، 4 درجات، 5 درجات",
      "الخامة": "ستانلس ستيل طبي ومسابح 316",
      "الحمولة القصوى": "150 كجم لكل درجة"
    },
    "badgeEn": "Marine Grade 316",
    "gradeEn": "AISI 316 Marine / AISI 304",
    "finishEn": "Directional Satin Brushed (No-Fingerprint)",
    "thicknessEn": "مواسير 43 mm cmك 1.5 mm",
    "shortDescEn": "Premium architectural stainless steel fabrication (AISI 316 Marine / AISI 304) precision cut with CNC laser and engineered for luxury buildings, villas, and hotels.",
    "featuresEn": [
      "Heavy-duty construction using genuine certified AISI 304 / 316 stainless steel",
      "Seamless continuous argon TIG welds ground and polished to perfection",
      "Custom site dimensions available through precision CNC laser and CAD fabrication",
      "Full warranty and nationwide engineering delivery & installation in Egypt"
    ],
    "specsEn": {
      "Material Grade": "AISI 316 Marine / AISI 304",
      "Surface Finish": "Directional Satin Brushed (No-Fingerprint)",
      "Metal Thickness": "مواسير 43 mm cmك 1.5 mm",
      "Standard Compliance": "Egyptian & European Safety Building Codes",
      "Fabrication": "CNC Fiber Laser, Hydraulic Bending & Argon TIG Welding",
      "Warranty & Supply": "Full comprehensive warranty with nationwide Egypt delivery"
    }
  },
  {
    "id": "FAY-ARC-12",
    "category": "architectural",
    "categoryName": "السلالم والدرابزينات والتشطيبات",
    "categoryNameEn": "Stairs, Railings & Finishes",
    "name": "أبواب ومداخل ستانلس ستيل مصفحة ومعالجة",
    "nameEn": "Stainless Steel Security Architectural Door",
    "badge": "أمان وفخامة المداخل",
    "image": "images/products/arc-12-entrance-door.webp",
    "grade": "304 المصفح",
    "finish": "تيتانيوم أسود / مصنفر",
    "thickness": "تجليد 1.5 مم وشاسيه مدعم",
    "badgeSpecs": [
      {
        "icon": "fa-door-closed",
        "textAr": "Armored Steel",
        "textEn": "Armored Steel",
        "text": "Armored Steel"
      },
      {
        "icon": "fa-shield-alt",
        "textAr": "Fire Rated",
        "textEn": "Fire Rated",
        "text": "Fire Rated"
      },
      {
        "icon": "fa-volume-mute",
        "textAr": "Sound Insulated",
        "textEn": "Sound Insulated",
        "text": "Sound Insulated"
      },
      {
        "icon": "fa-lock",
        "textAr": "High Security",
        "textEn": "High Security",
        "text": "High Security"
      }
    ],
    "shortDesc": "أبواب مداخل مباني فاخرة وأبواب غرف عزل بالمستشفيات، مصممة لمقاومة الصدأ والحريق والصدمات مع مفصلات ومقابض هيدروليكية ثقيلة.",
    "features": [
      "حشوة داخلية عازلة للصوت والحرارة من الصوف الصخري",
      "كوالين ومقابض ستانلس مدمجة عالية الأمان",
      "كاوتش عزل مزدوج لمنع تسريب الأتربة والدخان",
      "متانة فائقة لعشرات السنين دون الحاجة لإعادة دهان"
    ],
    "specs": {
      "سماكة الباب": "50 مم إلى 60 مم",
      "المفصلات": "مفصلات رولمان بلي ستانلس ثقيلة للأوزان العالية",
      "الاستخدام": "مداخل فيلات، بنوك، غرف عمليات، شركات"
    },
    "badgeEn": "Certified Steel 304/316",
    "gradeEn": "Certified AISI 304 Stainless",
    "finishEn": "Directional Satin Brushed (No-Fingerprint)",
    "thicknessEn": "تجليد 1.5 mm وشاسيه مدعم",
    "shortDescEn": "Premium architectural stainless steel fabrication (Certified AISI 304 Stainless) precision cut with CNC laser and engineered for luxury buildings, villas, and hotels.",
    "featuresEn": [
      "Heavy-duty construction using genuine certified AISI 304 / 316 stainless steel",
      "Seamless continuous argon TIG welds ground and polished to perfection",
      "Custom site dimensions available through precision CNC laser and CAD fabrication",
      "Full warranty and nationwide engineering delivery & installation in Egypt"
    ],
    "specsEn": {
      "Material Grade": "Certified AISI 304 Stainless",
      "Surface Finish": "Directional Satin Brushed (No-Fingerprint)",
      "Metal Thickness": "تجليد 1.5 mm وشاسيه مدعم",
      "Standard Compliance": "Egyptian & European Safety Building Codes",
      "Fabrication": "CNC Fiber Laser, Hydraulic Bending & Argon TIG Welding",
      "Warranty & Supply": "Full comprehensive warranty with nationwide Egypt delivery"
    }
  },
  {
    "id": "FAY-ARC-15",
    "category": "architectural",
    "categoryName": "السلالم والدرابزينات والتشطيبات",
    "categoryNameEn": "Stairs, Railings & Finishes",
    "name": "ترابيزات وكراسي ستانلس مودرن ديكورية",
    "nameEn": "Bespoke Stainless Frame Luxury Furniture",
    "badge": "تصنيع يدوي فائق الدقة",
    "image": "images/products/arc-15-furniture.webp",
    "grade": "304",
    "finish": "تيتانيوم جولد / كروم ميرور",
    "thickness": "تيوبات 40×40 مم سمك 1.5 مم",
    "badgeSpecs": [
      {
        "icon": "fa-chair",
        "textAr": "تصنيع هندسي خاص",
        "textEn": "Custom Engineered",
        "text": "تصنيع هندسي خاص"
      },
      {
        "icon": "fa-gem",
        "textAr": "Titanium Gold",
        "textEn": "Titanium Gold",
        "text": "Titanium Gold"
      },
      {
        "icon": "fa-weight-hanging",
        "textAr": "250kg Capacity",
        "textEn": "250kg Capacity",
        "text": "250kg Capacity"
      },
      {
        "icon": "fa-tools",
        "textAr": "Seamless Welds",
        "textEn": "Seamless Welds",
        "text": "Seamless Welds"
      }
    ],
    "shortDesc": "شاسيهات وقواعد ترابيزات طعام وركنيات استقبال من الستانلس ستيل المصقول، مع أسطح رخام طبيعي أو زجاج سيكوريت أسود.",
    "features": [
      "لحامات مخفية ومصقولة بزوايا 45 درجة بدقة متناهية",
      "ثبات هيكلي فائق لا يهتز ولا يتعرض للالتواء",
      "طلاء كهرومغناطيسي حراري لا يبهت ولا يتأثر بالاستخدام اليومي",
      "تفصيل حسب أبعاد المخطط المعماري واختيار المصمم"
    ],
    "specs": {
      "الأنواع": "ترابيزات طعام، كوفي تيبل، كونسول مداخل، قواعد بار",
      "التحمل": "قواعد تحمل حتى 250 كجم لأسطح الرخام الثقيلة"
    },
    "badgeEn": "Certified Steel 304/316",
    "gradeEn": "Certified AISI 304 Stainless",
    "finishEn": "Mirror 8K / Satin Brushed",
    "thicknessEn": "تيوبات 40×40 mm cmك 1.5 mm",
    "shortDescEn": "Premium architectural stainless steel fabrication (Certified AISI 304 Stainless) precision cut with CNC laser and engineered for luxury buildings, villas, and hotels.",
    "featuresEn": [
      "Heavy-duty construction using genuine certified AISI 304 / 316 stainless steel",
      "Seamless continuous argon TIG welds ground and polished to perfection",
      "Custom site dimensions available through precision CNC laser and CAD fabrication",
      "Full warranty and nationwide engineering delivery & installation in Egypt"
    ],
    "specsEn": {
      "Material Grade": "Certified AISI 304 Stainless",
      "Surface Finish": "Mirror 8K / Satin Brushed",
      "Metal Thickness": "تيوبات 40×40 mm cmك 1.5 mm",
      "Standard Compliance": "Egyptian & European Safety Building Codes",
      "Fabrication": "CNC Fiber Laser, Hydraulic Bending & Argon TIG Welding",
      "Warranty & Supply": "Full comprehensive warranty with nationwide Egypt delivery"
    }
  },
  {
    "id": "FAY-ARC-16",
    "category": "architectural",
    "categoryName": "السلالم والدرابزينات والتشطيبات",
    "categoryNameEn": "Stairs, Railings & Finishes",
    "name": "أرفف ودواليب عرض معمارية ستانلس مع زجاج",
    "nameEn": "Boutique Stainless Retail Display Shelving",
    "badge": "للمعارض والمتاجر الكبرى",
    "image": "images/products/arc-16-retail-rack.webp",
    "grade": "304",
    "finish": "Satin Hairline رفيع",
    "thickness": "قطاعات 1.5 مم",
    "badgeSpecs": [
      {
        "icon": "fa-store",
        "textAr": "Retail Display",
        "textEn": "Retail Display",
        "text": "Retail Display"
      },
      {
        "icon": "fa-lightbulb",
        "textAr": "LED Integrated",
        "textEn": "LED Integrated",
        "text": "LED Integrated"
      },
      {
        "icon": "fa-layer-group",
        "textAr": "Ultra-Clear Glass",
        "textEn": "Ultra-Clear Glass",
        "text": "Ultra-Clear Glass"
      },
      {
        "icon": "fa-shield-alt",
        "textAr": "ستانلس ستيل 304",
        "textEn": "Grade 304 Stainless",
        "text": "ستانلس ستيل 304"
      }
    ],
    "shortDesc": "وحدات عرض جدارية ومستقلة لمعارض الملابس والمجوهرات والعطور، تبرز فخامة المنتجات مع خطوط إضاءة ليد مخفية.",
    "features": [
      "تصميم نحيف وعصري (Minimalist) بأعلى قدرة تحمل",
      "مسارات تعديل ارتفاع الأرفف الزجاجية حسب حاجة العرض",
      "مجاري أسلاك إضاءة مخفية تماماً داخل مواسير الستانلس",
      "مقاومة كاملة للاحتكاك والخدوش أثناء تعليق البضائع"
    ],
    "specs": {
      "المقاسات": "تصنيع حسب مقاسات المحل وتصميم الديكور",
      "الزجاج": "زجاج 8 مم سيكوريت فائق النقاء Ultra-Clear"
    },
    "badgeEn": "Certified Steel 304/316",
    "gradeEn": "Certified AISI 304 Stainless",
    "finishEn": "Directional Satin Brushed (No-Fingerprint)",
    "thicknessEn": "قطاعات 1.5 mm",
    "shortDescEn": "Premium architectural stainless steel fabrication (Certified AISI 304 Stainless) precision cut with CNC laser and engineered for luxury buildings, villas, and hotels.",
    "featuresEn": [
      "Heavy-duty construction using genuine certified AISI 304 / 316 stainless steel",
      "Seamless continuous argon TIG welds ground and polished to perfection",
      "Custom site dimensions available through precision CNC laser and CAD fabrication",
      "Full warranty and nationwide engineering delivery & installation in Egypt"
    ],
    "specsEn": {
      "Material Grade": "Certified AISI 304 Stainless",
      "Surface Finish": "Directional Satin Brushed (No-Fingerprint)",
      "Metal Thickness": "قطاعات 1.5 mm",
      "Standard Compliance": "Egyptian & European Safety Building Codes",
      "Fabrication": "CNC Fiber Laser, Hydraulic Bending & Argon TIG Welding",
      "Warranty & Supply": "Full comprehensive warranty with nationwide Egypt delivery"
    }
  },
  {
    "id": "FAY-ARC-17",
    "category": "architectural",
    "categoryName": "السلالم والدرابزينات والتشطيبات",
    "categoryNameEn": "Stairs, Railings & Finishes",
    "name": "درابزين ستانلس بتصميم كلاسيك وبرامق مخروطة",
    "nameEn": "Classic Turned Baluster Stainless Railing",
    "badge": "طراز كلاسيكي فخم للقصور",
    "image": "images/products/arc-17-classic-baluster.webp",
    "grade": "304 صلب",
    "finish": "ميرور مع لمسات ذهبية",
    "thickness": "برامق خراطة CNC",
    "badgeSpecs": [
      {
        "icon": "fa-monument",
        "textAr": "Classic Design",
        "textEn": "Classic Design",
        "text": "Classic Design"
      },
      {
        "icon": "fa-cogs",
        "textAr": "CNC Turned",
        "textEn": "CNC Turned",
        "text": "CNC Turned"
      },
      {
        "icon": "fa-gem",
        "textAr": "Mirror & Gold",
        "textEn": "Mirror & Gold",
        "text": "Mirror & Gold"
      },
      {
        "icon": "fa-shield-alt",
        "textAr": "High Strength",
        "textEn": "High Strength",
        "text": "High Strength"
      }
    ],
    "shortDesc": "درابزين يجمع بين فخامة الطراز الكلاسيكي التقليدي ومتانة الستانلس ستيل الحديث، مناسب للقصور والفيلات ذات الطابع النيوكلاسيك.",
    "features": [
      "برامق مخروطة على ماكينات مخرطة CNC بتفاصيل غاية في الدقة",
      "تيجان وقواعد زهرية ستانلس مسبوكة بجودة عالية",
      "إمكانية مزج الحليات الذهبية التيتانيوم مع جسم الستانلس الفضي",
      "متانة لا تضاهى مقارنة بالخشب أو الحديد المشغول"
    ],
    "specs": {
      "ارتفاع البرمق": "85 سم إلى 95 سم",
      "التثبيت": "سيخ تسليح داخلي 12 مم مصبوب بالخرسانة"
    },
    "badgeEn": "Certified Steel 304/316",
    "gradeEn": "Certified AISI 304 Stainless",
    "finishEn": "Mirror 8K / Satin Brushed",
    "thicknessEn": "برامق خراطة CNC",
    "shortDescEn": "Premium architectural stainless steel fabrication (Certified AISI 304 Stainless) precision cut with CNC laser and engineered for luxury buildings, villas, and hotels.",
    "featuresEn": [
      "Heavy-duty construction using genuine certified AISI 304 / 316 stainless steel",
      "Seamless continuous argon TIG welds ground and polished to perfection",
      "Custom site dimensions available through precision CNC laser and CAD fabrication",
      "Full warranty and nationwide engineering delivery & installation in Egypt"
    ],
    "specsEn": {
      "Material Grade": "Certified AISI 304 Stainless",
      "Surface Finish": "Mirror 8K / Satin Brushed",
      "Metal Thickness": "برامق خراطة CNC",
      "Standard Compliance": "Egyptian & European Safety Building Codes",
      "Fabrication": "CNC Fiber Laser, Hydraulic Bending & Argon TIG Welding",
      "Warranty & Supply": "Full comprehensive warranty with nationwide Egypt delivery"
    }
  },
  {
    "id": "FAY-ARC-18",
    "category": "architectural",
    "categoryName": "السلالم والدرابزينات والتشطيبات",
    "categoryNameEn": "Stairs, Railings & Finishes",
    "name": "وحدات إضاءة وحوامل ديكورية ستانلس ستيل",
    "nameEn": "Stainless Architectural Lighting Bollards",
    "badge": "إضاءة لاندسكيب وممرات",
    "image": "images/products/arc-18-lighting.webp",
    "grade": "304 / 316",
    "finish": "ميرور أو مطفي بودرة حرارية",
    "thickness": "1.5 مم",
    "badgeSpecs": [
      {
        "icon": "fa-lightbulb",
        "textAr": "IP67 Rated",
        "textEn": "IP67 Rated",
        "text": "IP67 Rated"
      },
      {
        "icon": "fa-sun",
        "textAr": "UV Proof",
        "textEn": "UV Proof",
        "text": "UV Proof"
      },
      {
        "icon": "fa-bolt",
        "textAr": "LED Drivers",
        "textEn": "LED Drivers",
        "text": "LED Drivers"
      },
      {
        "icon": "fa-shield-alt",
        "textAr": "Grade 316",
        "textEn": "Grade 316",
        "text": "Grade 316"
      }
    ],
    "shortDesc": "أعمدة وحوامل إضاءة ليد للحدائق واللاندسكيب ومداخل الفلل، لا تتأثر بمياه الري أو رطوبة التربة والشمس المباشرة.",
    "features": [
      "عزل كامل للمكونات الكهربائية بمعيار حماية IP65 / IP67",
      "تصاميم أسطوانية ومربعة تعكس الضوء بطريقة انسيابية جذابة",
      "فتحات صيانة سفلية مغلقة بمسامير أمان ستانلس",
      "قواعد تثبيت أرضية بمسامير إنكور مجلفنة قوية"
    ],
    "specs": {
      "الارتفاعات": "من 40 سم (بولاردات ممرات) حتى 3 أمتار لأعمدة الحدائق",
      "مصدر الضوء": "متوافق مع شرائح ليد وكشافات موفرة للطاقة"
    },
    "badgeEn": "Certified Steel 304/316",
    "gradeEn": "AISI 316 Marine / AISI 304",
    "finishEn": "Mirror 8K / Satin Brushed",
    "thicknessEn": "1.5 mm",
    "shortDescEn": "Premium architectural stainless steel fabrication (AISI 316 Marine / AISI 304) precision cut with CNC laser and engineered for luxury buildings, villas, and hotels.",
    "featuresEn": [
      "Heavy-duty construction using genuine certified AISI 304 / 316 stainless steel",
      "Seamless continuous argon TIG welds ground and polished to perfection",
      "Custom site dimensions available through precision CNC laser and CAD fabrication",
      "Full warranty and nationwide engineering delivery & installation in Egypt"
    ],
    "specsEn": {
      "Material Grade": "AISI 316 Marine / AISI 304",
      "Surface Finish": "Mirror 8K / Satin Brushed",
      "Metal Thickness": "1.5 mm",
      "Standard Compliance": "Egyptian & European Safety Building Codes",
      "Fabrication": "CNC Fiber Laser, Hydraulic Bending & Argon TIG Welding",
      "Warranty & Supply": "Full comprehensive warranty with nationwide Egypt delivery"
    }
  },
  {
    "id": "FAY-ARC-19",
    "category": "architectural",
    "categoryName": "السلالم والدرابزينات والتشطيبات",
    "categoryNameEn": "Stairs, Railings & Finishes",
    "name": "مصدات صدمات حائطية وأرضية بولارد للمستشفيات",
    "nameEn": "Heavy-Duty Stainless Protection Bollards",
    "badge": "حماية المعدات والواجهات",
    "image": "images/products/arc-19-bollards.webp",
    "grade": "304 جدول 40 ثقيل",
    "finish": "مصنفر مع شرائط فسفورية",
    "thickness": "قطر 150 مم سمك 3.0 مم",
    "badgeSpecs": [
      {
        "icon": "fa-car-crash",
        "textAr": "Crash Rated",
        "textEn": "Crash Rated",
        "text": "Crash Rated"
      },
      {
        "icon": "fa-shield-alt",
        "textAr": "Schedule 40",
        "textEn": "Schedule 40",
        "text": "Schedule 40"
      },
      {
        "icon": "fa-road",
        "textAr": "Reflective Strip",
        "textEn": "Reflective Strip",
        "text": "Reflective Strip"
      },
      {
        "icon": "fa-cube",
        "textAr": "Concrete Core",
        "textEn": "Concrete Core",
        "text": "Concrete Core"
      }
    ],
    "shortDesc": "أعمدة حماية بولارد أمام واجهات الزجاج والبنوك ومواقف السيارات، وحواجز أفقية لحماية جدران المستشفيات من صدمات الأسِرة والترولليات.",
    "features": [
      "مواسير سميكة جدول 40 تتحمل الصدمات القوية دون انثناء",
      "تثبيت بالصب الخرساني الداخلي لمقاومة الاصطدام المباشر",
      "غطاء علوي نصف كروي أو مائل أنيق يمنع تجمع الأوساخ",
      "شرائط عاكسة فسفورية لتحذير السائقين ليلاً"
    ],
    "specs": {
      "القطر": "4 بوصة، 6 بوصة، 8 بوصة",
      "الارتفاع": "90 سم إلى 120 سم فوق منسوب الأسفلت",
      "الصب": "إمكانية ملء العمود بالخرسانة المسلحة من الداخل"
    },
    "badgeEn": "Certified Steel 304/316",
    "gradeEn": "Certified AISI 304 Stainless",
    "finishEn": "Directional Satin Brushed (No-Fingerprint)",
    "thicknessEn": "قطر 150 mm cmك 3.0 mm",
    "shortDescEn": "Premium architectural stainless steel fabrication (Certified AISI 304 Stainless) precision cut with CNC laser and engineered for luxury buildings, villas, and hotels.",
    "featuresEn": [
      "Heavy-duty construction using genuine certified AISI 304 / 316 stainless steel",
      "Seamless continuous argon TIG welds ground and polished to perfection",
      "Custom site dimensions available through precision CNC laser and CAD fabrication",
      "Full warranty and nationwide engineering delivery & installation in Egypt"
    ],
    "specsEn": {
      "Material Grade": "Certified AISI 304 Stainless",
      "Surface Finish": "Directional Satin Brushed (No-Fingerprint)",
      "Metal Thickness": "قطر 150 mm cmك 3.0 mm",
      "Standard Compliance": "Egyptian & European Safety Building Codes",
      "Fabrication": "CNC Fiber Laser, Hydraulic Bending & Argon TIG Welding",
      "Warranty & Supply": "Full comprehensive warranty with nationwide Egypt delivery"
    }
  },
  {
    "id": "FAY-KIT-01",
    "category": "kitchen",
    "categoryName": "تجهيزات المطابخ والمطاعم والفنادق",
    "categoryNameEn": "Commercial Kitchen & Hotel Equipment",
    "name": "بوتجاز بلاطه كهربا صناعي",
    "nameEn": "Commercial Solid-Top Electric Boiling Range",
    "badge": "معدات طهي كهربائية ثقيلة",
    "image": "images/products/kit-real-01.webp",
    "grade": "ستانلس 304 غذائي معتمد",
    "finish": "مصنفر ساتان مقاوم للحرارة والزيوت",
    "thickness": "صاج 1.5 مم إلى 2.0 مم معزول حرارياً",
    "badgeSpecs": [
      {
        "icon": "fa-certificate",
        "textAr": "ستانلس 304 غذائي",
        "textEn": "Grade 304 Food-Safe",
        "text": "ستانلس 304 غذائي"
      },
      {
        "icon": "fa-shield-alt",
        "textAr": "مقاوم للأحماض والصدأ",
        "textEn": "Rust & Acid Resistant",
        "text": "مقاوم للأحماض والصدأ"
      },
      {
        "icon": "fa-tools",
        "textAr": "لحام أرجون TIG هيدروليكي",
        "textEn": "Argon TIG Seamless Welds",
        "text": "لحام أرجون TIG هيدروليكي"
      },
      {
        "icon": "fa-award",
        "textAr": "مطابق لمعايير HACCP",
        "textEn": "HACCP Food Safety",
        "text": "مطابق لمعايير HACCP"
      }
    ],
    "shortDesc": "بوتجاز كهربائي صناعي ببلاطات حرارية مصمتة عالية الكفاءة للمطابخ المركزية والفنادق، يتحمل ساعات التشغيل الشاقة مع توزيع حراري متجانس.",
    "features": [
      "بلاطات كهربائية صلبة معزولة بقدرة تحمل حرارية فائقة",
      "مفاتيح تحكم متعددة الدرجات في درجات الحرارة لكل عين على حدة",
      "شاسيه وجسم بالكامل من الستانلس ستيل 304 المضاد للتآكل",
      "صينية سفلية ستانلس قابلة للسحب لتجميع الفتات وسهولة التنظيف"
    ],
    "specs": {
      "الخامة المصنعة": "ستانلس ستيل AISI 304 عالي النقاء",
      "نظام التسخين": "بلاطات كهرباء صلبة (Solid Cast Iron Plates)",
      "نطاق درجات الحرارة": "من 50° إلى 300° مئوية مع تحكم ثرموستاتي",
      "الأرجل": "أرجل ستانلس ستيل قابلة لضبط الارتفاع ومقاومة للانزلاق",
      "الاستخدام": "مطابخ الفنادق، المستشفيات، القرى السياحية، المطاعم الكبرى"
    },
    "badgeEn": "Heavy-Duty Electric Range",
    "gradeEn": "Certified AISI 304 Food Grade",
    "finishEn": "Satin Brushed Heat-Resistant",
    "thicknessEn": "1.5 mm to 2.0 mm insulated sheet",
    "shortDescEn": "Commercial heavy-duty electric boiling top with solid cast-iron hot plates, designed for intensive continuous operation in hotels and central kitchens.",
    "featuresEn": [
      "Heavy-duty cast iron solid heating plates with uniform heat distribution",
      "Independent multi-position thermostatic temperature switches for each zone",
      "Full AISI 304 stainless steel heavy chassis resistant to oxidation",
      "Removable pull-out stainless drip tray for easy cleaning and maintenance"
    ],
    "specsEn": {
      "Material Grade": "Certified AISI 304 Food-Grade Stainless Steel",
      "Heating System": "Heavy-duty Solid Cast-Iron Electric Plates",
      "Temperature Range": "50°C to 300°C with independent thermostatic controls",
      "Legs & Base": "Adjustable stainless steel bullet feet with anti-slip pads",
      "Application": "Hotel commercial kitchens, luxury resorts, catering central kitchens"
    }
  },
  {
    "id": "FAY-KIT-02",
    "category": "kitchen",
    "categoryName": "تجهيزات المطابخ والمطاعم والفنادق",
    "categoryNameEn": "Commercial Kitchen & Hotel Equipment",
    "name": "بوتجاز كهرباء 4 بلاطات مع فرن سفلي استنالس ستيل",
    "nameEn": "4-Plate Commercial Electric Range with Convection Oven",
    "badge": "محطة طهي وفرن متكاملة",
    "image": "images/products/kit-real-02.webp",
    "grade": "ستانلس 304 غذائي معتمد",
    "finish": "مصنفر ساتان ناعم مطلي بوقاية حرارية",
    "thickness": "صاج خارجي 1.5 مم وشاسيه 2.0 مم",
    "badgeSpecs": [
      {
        "icon": "fa-certificate",
        "textAr": "ستانلس 304 غذائي",
        "textEn": "Grade 304 Food-Safe",
        "text": "ستانلس 304 غذائي"
      },
      {
        "icon": "fa-shield-alt",
        "textAr": "مقاوم للأحماض والصدأ",
        "textEn": "Rust & Acid Resistant",
        "text": "مقاوم للأحماض والصدأ"
      },
      {
        "icon": "fa-tools",
        "textAr": "لحام أرجون TIG هيدروليكي",
        "textEn": "Argon TIG Seamless Welds",
        "text": "لحام أرجون TIG هيدروليكي"
      },
      {
        "icon": "fa-award",
        "textAr": "مطابق لمعايير HACCP",
        "textEn": "HACCP Food Safety",
        "text": "مطابق لمعايير HACCP"
      }
    ],
    "shortDesc": "وحدة طهي متكاملة تجمع بين 4 بلاطات كهربائية دائرية أو مربعة عالية الطاقة مع فرن سفلي ستانلس ستيل معزول حرارياً بالصوف الصخري للخبز والتحمير.",
    "features": [
      "4 بلاطات تسخين صناعية سريعة الوصول لدرجة الطهي المطلوبة",
      "فرن سفلي ستانلس ستيل مزود بترموستات أمان ودوران هواء متجانس",
      "عزل حراري مزدوج كامل للأبواب والجوانب لمنع إهدار الطاقة",
      "مقابض يد باردة عازلة للحرارة مصنوعة من الستانلس ستيل المقاوم للصدمات"
    ],
    "specs": {
      "الخامة المصنعة": "ستانلس ستيل 304 (AISI 304) بالكامل",
      "عدد البلاطات": "4 بلاطات طهي مستقلة + فرن سفلي سعة GN 2/1",
      "التحكم الحراري": "ثرموستات منفصل لكل بلاطة وفرن تحكم حتى 320° مئوية",
      "الأبعاد القياسية": "تصنيع حسب المساحة الهندسية (مثال 80×90×85 سم)",
      "الضمان": "ضمان هندسي معتمد مع توريد قطع الغيار والصيانة"
    },
    "badgeEn": "Range & Oven Combination Suite",
    "gradeEn": "Certified AISI 304 Food Grade",
    "finishEn": "Directional Satin Brushed Finish",
    "thicknessEn": "1.5 mm body / 2.0 mm structural frame",
    "shortDescEn": "Complete heavy-duty commercial electric cooking suite featuring 4 solid round/square hot plates and an insulated stainless steel static/convection oven below.",
    "featuresEn": [
      "4 industrial fast-recovery electric hotplates for high-volume cooking",
      "Spacious stainless lower oven with safety thermostat and even heat flow",
      "Heavy double-wall mineral wool thermal insulation saving operating energy",
      "Cool-touch ergonomic stainless steel handles designed for chef safety"
    ],
    "specsEn": {
      "Material Grade": "Full Certified AISI 304 Stainless Steel Construction",
      "Configuration": "4 Independent Hotplates + Lower Oven (GN 2/1 capacity)",
      "Thermostatic Controls": "Independent step controllers up to 320°C with safety limiters",
      "Standard Dimensions": "Standard or custom CAD dimensions (e.g. 80x90x85 cm)",
      "Warranty & Service": "Full Al Fayrouz engineering warranty and on-site support"
    }
  },
  {
    "id": "FAY-KIT-03",
    "category": "kitchen",
    "categoryName": "تجهيزات المطابخ والمطاعم والفنادق",
    "categoryNameEn": "Commercial Kitchen & Hotel Equipment",
    "name": "بوتجاز كهرباء مسطح بلاطات استانلس ستيل",
    "nameEn": "Commercial Flat Top Solid Plate Electric Boiling Range",
    "badge": "كفاءة طاقة قصوى",
    "image": "images/products/kit-real-03.webp",
    "grade": "ستانلس 304 غذائي",
    "finish": "مصنفر ساتان مقاوم للبصمات",
    "thickness": "سطح عمل مسحوب سمك 1.5 مم بدون فواصل",
    "badgeSpecs": [
      {
        "icon": "fa-certificate",
        "textAr": "ستانلس 304 غذائي",
        "textEn": "Grade 304 Food-Safe",
        "text": "ستانلس 304 غذائي"
      },
      {
        "icon": "fa-shield-alt",
        "textAr": "مقاوم للأحماض والصدأ",
        "textEn": "Rust & Acid Resistant",
        "text": "مقاوم للأحماض والصدأ"
      },
      {
        "icon": "fa-tools",
        "textAr": "لحام أرجون TIG هيدروليكي",
        "textEn": "Argon TIG Seamless Welds",
        "text": "لحام أرجون TIG هيدروليكي"
      },
      {
        "icon": "fa-award",
        "textAr": "مطابق لمعايير HACCP",
        "textEn": "HACCP Food Safety",
        "text": "مطابق لمعايير HACCP"
      }
    ],
    "shortDesc": "مسطح طهي كهربائي مدمج ومصنع بالكامل من الستانلس ستيل 304 مع سطح عمل مسحوب بدون فواصل لمنع تسرب السوائل أو تراكم الدهون في المطبخ.",
    "features": [
      "سطح علوي مسحوب بضغطة هيدروليكية واحدة بدون لحامات عشوائية",
      "بلاطات كهربائية أوروبية الصنع مع عناصر تسخين عالية الجودة",
      "شاسيه ستانلس مقاوم للأحمال الثقيلة وقدور الطهي العملاقة",
      "حماية إلكترونية ضد زيادة الأحمال ودرجات الحرارة المرتفعة"
    ],
    "specs": {
      "الخامة": "ستانلس ستيل 304 معتمد للأغذية",
      "التشطيب": "ساتان ناعم سهل التعقيم والتنظيف",
      "نوع الطاقة": "كهرباء 3 فاز صناعي 380V / 50Hz",
      "الأمان": "قواطع حرارية وحماية أوتوماتيكية ضد الحرارة الزائدة"
    },
    "badgeEn": "Maximum Energy Efficiency",
    "gradeEn": "Certified AISI 304 Stainless",
    "finishEn": "Satin Brushed Anti-Fingerprint",
    "thicknessEn": "Deep-drawn 1.5 mm top surface without gaps",
    "shortDescEn": "Flush-mounted commercial electric solid plate range fabricated from continuous deep-drawn AISI 304 stainless steel preventing liquid leakage.",
    "featuresEn": [
      "Seamless deep-drawn pressed worktop for zero liquid penetration",
      "Premium heavy-duty electric boiling elements with ultra-long lifespan",
      "Robust reinforced stainless frame engineered for giant stockpots",
      "Integrated electrical overload and overheating safety protection"
    ],
    "specsEn": {
      "Material": "Certified Food-Contact AISI 304 Stainless Steel",
      "Finish": "Fine satin finish for effortless sanitization and grease wiping",
      "Power Connection": "3-Phase Commercial 380V / 50Hz",
      "Safety": "Thermal overload cutouts and IPX5 rated splash proof controls"
    }
  },
  {
    "id": "FAY-KIT-04",
    "category": "kitchen",
    "categoryName": "تجهيزات المطابخ والمطاعم والفنادق",
    "categoryNameEn": "Commercial Kitchen & Hotel Equipment",
    "name": "بوتجاز مسطح 2 شعله",
    "nameEn": "Heavy-Duty 2-Burner Gas Countertop Range",
    "badge": "حل مثالي للمساحات الذكية",
    "image": "images/products/kit-real-04.webp",
    "grade": "ستانلس 304 عالي التحمل",
    "finish": "مصنفر ميكانيكي عالي المتانة",
    "thickness": "صاج 1.5 مم مع حوامل زهر ثقيلة",
    "badgeSpecs": [
      {
        "icon": "fa-certificate",
        "textAr": "ستانلس 304 غذائي",
        "textEn": "Grade 304 Food-Safe",
        "text": "ستانلس 304 غذائي"
      },
      {
        "icon": "fa-shield-alt",
        "textAr": "مقاوم للأحماض والصدأ",
        "textEn": "Rust & Acid Resistant",
        "text": "مقاوم للأحماض والصدأ"
      },
      {
        "icon": "fa-tools",
        "textAr": "لحام أرجون TIG هيدروليكي",
        "textEn": "Argon TIG Seamless Welds",
        "text": "لحام أرجون TIG هيدروليكي"
      },
      {
        "icon": "fa-award",
        "textAr": "مطابق لمعايير HACCP",
        "textEn": "HACCP Food Safety",
        "text": "مطابق لمعايير HACCP"
      }
    ],
    "shortDesc": "بوتجاز غاز مسطح 2 شعلة مصنع خصيصاً للمطابخ والمطاعم ذات المساحات المتوسطة وكاونترات التحضير السريع، يوفر شعلات نارية قوية وموفرة للغاز.",
    "features": [
      "شعلات غاز نحاسية/زهر صناعية عالية الطاقة بقوة احتراق زرقاء نقية",
      "حوامل أواني زهر صلبة تتحمل الصدمات والأواني الثقيلة",
      "نظام إشعال بيزو كهربائي أو يدوي مع صمامات أمان حرارية ثرموكابل",
      "صينية تجميع سوائل قابلة للإزالة أسفل الشعلات"
    ],
    "specs": {
      "الخامة": "ستانلس ستيل AISI 304 متين",
      "نوع الوقود": "غاز طبيعي أو غاز أسطوانات (LPG) حسب الطلب",
      "عدد الشعلات": "2 شعلة طهي سريعة مستقلة",
      "التثبيت": "كاونتر سطحي أو يركب على قاعدة دولاب ستانلس"
    },
    "badgeEn": "Compact Commercial Gas Solution",
    "gradeEn": "Heavy-Duty AISI 304 Stainless",
    "finishEn": "Heavy Mechanical Brushed Finish",
    "thicknessEn": "1.5 mm stainless with heavy cast-iron pan supports",
    "shortDescEn": "Compact 2-burner commercial gas boiling top engineered for prep stations, cafes, food trucks, and high-turnover fast cooking lines.",
    "featuresEn": [
      "High-power industrial burners delivering focused clean blue flames",
      "Heavy cast-iron pan supports resistant to heavy impact and heat stress",
      "Flame failure safety thermocouple devices on all burner valves",
      "Full-width removable stainless steel waste drip collector below"
    ],
    "specsEn": {
      "Material Grade": "Heavy-Duty AISI 304 Stainless Steel",
      "Gas Supply": "Natural Gas (NG) or Liquefied Petroleum Gas (LPG)",
      "Burners Count": "2 Independent high-output boiling burners",
      "Mounting": "Countertop table installation or modular stainless cabinet base"
    }
  },
  {
    "id": "FAY-KIT-05",
    "category": "kitchen",
    "categoryName": "تجهيزات المطابخ والمطاعم والفنادق",
    "categoryNameEn": "Commercial Kitchen & Hotel Equipment",
    "name": "بوتجاز مسطح 6 شعله",
    "nameEn": "Heavy-Duty 6-Burner Commercial Gas Range",
    "badge": "العمود الفقري لمطابخ المطاعم",
    "image": "images/products/kit-real-05.webp",
    "grade": "ستانلس 304 غذائي معتمد",
    "finish": "مصنفر ساتان صناعي عالي الجودة",
    "thickness": "صاج 1.5 مم مع تدعيمات جسور داخلية",
    "badgeSpecs": [
      {
        "icon": "fa-certificate",
        "textAr": "ستانلس 304 غذائي",
        "textEn": "Grade 304 Food-Safe",
        "text": "ستانلس 304 غذائي"
      },
      {
        "icon": "fa-shield-alt",
        "textAr": "مقاوم للأحماض والصدأ",
        "textEn": "Rust & Acid Resistant",
        "text": "مقاوم للأحماض والصدأ"
      },
      {
        "icon": "fa-tools",
        "textAr": "لحام أرجون TIG هيدروليكي",
        "textEn": "Argon TIG Seamless Welds",
        "text": "لحام أرجون TIG هيدروليكي"
      },
      {
        "icon": "fa-award",
        "textAr": "مطابق لمعايير HACCP",
        "textEn": "HACCP Food Safety",
        "text": "مطابق لمعايير HACCP"
      }
    ],
    "shortDesc": "بوتجاز غاز تجاري متطور 6 شعلات مصمم لخطوط الطهي الرئيسية في المطاعم والفنادق الكبرى لإنتاج كميات ضخمة من الوجبات في أوقات الذروة.",
    "features": [
      "6 شعلات طاقة عالية مختلفة القدرات للطهي السريع والتحمير والغليان",
      "حوامل زهر مقسمة سهلة الفك والتركيب والتنظيف في غسالات الأطباق",
      "مفاتيح تحكم عريضة متينة مريحة لليد ومقاومة لدرجات الحرارة",
      "أنظمة أمان متطورة لفصل الغاز فوراً عند انطفاء الشعلة"
    ],
    "specs": {
      "الخامة المصنعة": "ستانلس ستيل AISI 304 بالكامل",
      "عدد الشعلات": "6 شعلات غاز صناعية مع شعلات مساعدة وتوربو",
      "ضغط الغاز": "متوافق مع شبكات الغاز الطبيعي والغاز المسال",
      "الأبعاد الهندسية": "120 × 90 × 85 سم (أو مقاسات مخصصة حسب المخطط)",
      "الشهادات": "مطابق لمعايير السلامة المهنية ومكافحة الحريق بالمطابخ"
    },
    "badgeEn": "Core Restaurant Cooking Line",
    "gradeEn": "Certified AISI 304 Food Grade",
    "finishEn": "Industrial Satin Brushed Finish",
    "thicknessEn": "1.5 mm sheet with internal reinforced bridge framing",
    "shortDescEn": "Commercial 6-burner gas boiling range designed for high-capacity production in large restaurants, banquets, and hotel main kitchens.",
    "featuresEn": [
      "6 high-capacity versatile burners for boiling, sautéing and simmering",
      "Modular cast-iron top grates easy to remove and wash individually",
      "Ergonomic heavy-duty heat-proof control knobs designed for kitchen rushes",
      "Thermocouple safety cutoffs automatically stopping gas if flame fails"
    ],
    "specsEn": {
      "Material Grade": "Complete AISI 304 Stainless Steel Construction",
      "Burners Configuration": "6 Industrial gas burners including turbo & simmer options",
      "Gas Compatibility": "Configurable for Natural Gas and LPG tank lines",
      "Dimensions": "Standard 120 x 90 x 85 cm (or custom CAD dimensions)",
      "Safety Standards": "Compliant with international commercial kitchen fire safety"
    }
  },
  {
    "id": "FAY-KIT-06",
    "category": "kitchen",
    "categoryName": "تجهيزات المطابخ والمطاعم والفنادق",
    "categoryNameEn": "Commercial Kitchen & Hotel Equipment",
    "name": "تلاجه عرض سمك استلس",
    "nameEn": "Commercial Stainless Steel Fresh Fish Display Counter",
    "badge": "مقاومة فائقة للتمليح والرطوبة",
    "image": "images/products/kit-real-06.webp",
    "grade": "ستانلس 316 بحري و 304",
    "finish": "مصنفر ميرور ناعم غير قابل لتراكم البكتيريا",
    "thickness": "حوض سمك 1.5 مم إلى 2.0 مم معزول بالكامل",
    "badgeSpecs": [
      {
        "icon": "fa-certificate",
        "textAr": "ستانلس 304 غذائي",
        "textEn": "Grade 304 Food-Safe",
        "text": "ستانلس 304 غذائي"
      },
      {
        "icon": "fa-shield-alt",
        "textAr": "مقاوم للأحماض والصدأ",
        "textEn": "Rust & Acid Resistant",
        "text": "مقاوم للأحماض والصدأ"
      },
      {
        "icon": "fa-tools",
        "textAr": "لحام أرجون TIG هيدروليكي",
        "textEn": "Argon TIG Seamless Welds",
        "text": "لحام أرجون TIG هيدروليكي"
      },
      {
        "icon": "fa-award",
        "textAr": "مطابق لمعايير HACCP",
        "textEn": "HACCP Food Safety",
        "text": "مطابق لمعايير HACCP"
      }
    ],
    "shortDesc": "ثلاجة عرض وتبريد أسماك ومأكولات بحرية مصنعة من سبيكة الستانلس 316/304 المعالجة ضد الأملاح والأحماض، مع زجاج سيكوريت بانورامي وصرف مدمج للثلج المذاب.",
    "features": [
      "حوض داخلي معزول بالبولي يوريثان عالي الكثافة لحفظ درجات البرودة والثلج",
      "مجرى صرف مياه مدمج مع شبكة ستانلس لتصريف مياه الثلج الذائب باستمرار",
      "واجهة زجاجية مقواة بانورامية لعرض الأسماك بجاذبية للمطاعم والهايبر ماركت",
      "إضاءة LED بيضاء ومضادة للرطوبة والماء تبرز نضارة المأكولات البحرية"
    ],
    "specs": {
      "الخامة الداخلية": "ستانلس ستيل AISI 316 بحري مقاوم للأملاح",
      "الخامة الخارجية": "ستانلس ستيل AISI 304 مصنفر فاخر",
      "نظام الصرف": "محبس تصريف نحاسي/ستانلس سفلي سريع للتنظيف",
      "الزجاج": "زجاج سيكوريت مقسى مضاد للكسر ومقوس",
      "التطبيقات": "مطاعم الأسماك والمأكولات البحرية، أسواق السمك، الفنادق والقرى"
    },
    "badgeEn": "Extreme Salt & Humidity Resistance",
    "gradeEn": "AISI 316 Marine Grade / 304",
    "finishEn": "Ultra-Smooth Sanitary Brushed Finish",
    "thicknessEn": "1.5 mm to 2.0 mm fully polyurethane injected basin",
    "shortDescEn": "Commercial fresh seafood display counter manufactured from salt-resistant AISI 316/304 stainless steel with panoramic curved glass and melt-water drain.",
    "featuresEn": [
      "High-density polyurethane injected well keeping ice cold with zero sweating",
      "Integrated floor drainage channel with stainless strainer for melting ice",
      "Panoramic curved tempered glass display creating attractive seafood presentation",
      "Waterproof IP67 cold-white LED illumination highlighting fish freshness"
    ],
    "specsEn": {
      "Interior Material": "Marine-grade AISI 316 Stainless Steel resistant to fish brine",
      "Exterior Material": "Premium AISI 304 Satin Brushed Stainless Steel",
      "Drainage System": "Heavy brass/stainless bottom drain valve for daily sanitization",
      "Glass Structure": "Curved tempered safety glass with anti-fog properties",
      "Application": "Seafood restaurants, fishmongers, coastal resorts, supermarket displays"
    }
  },
  {
    "id": "FAY-KIT-07",
    "category": "kitchen",
    "categoryName": "تجهيزات المطابخ والمطاعم والفنادق",
    "categoryNameEn": "Commercial Kitchen & Hotel Equipment",
    "name": "ثلاجه استالس 2 باب",
    "nameEn": "2-Door Upright Stainless Steel Commercial Refrigerator",
    "badge": "تبريد هوائي ديناميكي",
    "image": "images/products/kit-real-07.webp",
    "grade": "ستانلس 304 غذائي معتمد",
    "finish": "مصنفر ساتان اتجاهي عالي الفخامة",
    "thickness": "جدران معزولة بولي يوريثان سمك 60 مم",
    "badgeSpecs": [
      {
        "icon": "fa-certificate",
        "textAr": "ستانلس 304 غذائي",
        "textEn": "Grade 304 Food-Safe",
        "text": "ستانلس 304 غذائي"
      },
      {
        "icon": "fa-shield-alt",
        "textAr": "مقاوم للأحماض والصدأ",
        "textEn": "Rust & Acid Resistant",
        "text": "مقاوم للأحماض والصدأ"
      },
      {
        "icon": "fa-tools",
        "textAr": "لحام أرجون TIG هيدروليكي",
        "textEn": "Argon TIG Seamless Welds",
        "text": "لحام أرجون TIG هيدروليكي"
      },
      {
        "icon": "fa-award",
        "textAr": "مطابق لمعايير HACCP",
        "textEn": "HACCP Food Safety",
        "text": "مطابق لمعايير HACCP"
      }
    ],
    "shortDesc": "ثلاجة رأسية تجارية 2 باب ستانلس ستيل مع نظام تبريد هوائي متطور للحفاظ على اللحوم والمأكولات طازجة، مزودة بوحدة تبريد استوائية تعمل في أشد درجات الحرارة.",
    "features": [
      "محرك تبريد استوائي (Tropical Compressor) يتحمل درجات حرارة محيطة حتى 43° مئوية",
      "أبواب ستانلس محكمة الغلق بجوانات مغناطيسية قابلة للتنظيف والتغيير السريع",
      "أرفف شبكية ستانلس أو بلاستيك معالج قابلة لتعديل الارتفاع ومقاومة للأحمال",
      "شاشة تحكم رقمية ديجيتال لضبط درجات الحرارة بدقة مع دورات إذابة ثلج تلقائية"
    ],
    "specs": {
      "الخامة": "ستانلس ستيل 304 داخلي وخارجي بالكامل",
      "نطاق درجات الحرارة": "من -2° إلى +8° مئوية (تبريد) أو -18° إلى -22° (تجميد)",
      "السعة اللترية": "سعة تخزينية ضخمة 1200 - 1400 لتر",
      "العزل الحراري": "حقن فوم بولي يوريثان صديق للبيئة خالي من CFC",
      "الكهرباء": "220V / 50Hz كفاءة عالية في استهلاك الكهرباء"
    },
    "badgeEn": "Forced Air Ventilated Cooling",
    "gradeEn": "Certified AISI 304 Stainless",
    "finishEn": "Directional Satin Brushed Finish",
    "thicknessEn": "60 mm high-pressure polyurethane injected insulation",
    "shortDescEn": "2-door upright commercial reach-in refrigerator fabricated inside and out with AISI 304 stainless steel and tropicalized cooling unit for extreme climates.",
    "featuresEn": [
      "Heavy-duty tropical compressor certified for ambient environments up to +43°C",
      "Self-closing doors with magnetic gaskets and integrated lock & key",
      "Adjustable heavy-duty wire shelves accommodating standard GN 2/1 pans",
      "Digital electronic micro-controller with auto defrost and HACCP alarms"
    ],
    "specsEn": {
      "Body Material": "Full AISI 304 Stainless Steel interior and exterior casing",
      "Temperature Range": "-2°C to +8°C (Chiller) or -18°C to -22°C (Freezer options)",
      "Gross Capacity": "High-volume 1200 - 1400 Liters storage volume",
      "Insulation": "60mm high-density eco-friendly CFC-free polyurethane injection",
      "Electrical Spec": "220V / 50Hz high energy efficiency rating"
    }
  },
  {
    "id": "FAY-KIT-08",
    "category": "kitchen",
    "categoryName": "تجهيزات المطابخ والمطاعم والفنادق",
    "categoryNameEn": "Commercial Kitchen & Hotel Equipment",
    "name": "ثلاجه تحضير",
    "nameEn": "Refrigerated Prep Counter & Sandwich/Pizza Table",
    "badge": "كاونتر تحضير وحفظ سريع",
    "image": "images/products/kit-real-08.webp",
    "grade": "ستانلس 304 غذائي",
    "finish": "مصنفر ناعم مطابق لمعايير HACCP",
    "thickness": "قرصة عمل علوية سمك 1.5 مم مدعمة بخشب MDF معزول",
    "badgeSpecs": [
      {
        "icon": "fa-certificate",
        "textAr": "ستانلس 304 غذائي",
        "textEn": "Grade 304 Food-Safe",
        "text": "ستانلس 304 غذائي"
      },
      {
        "icon": "fa-shield-alt",
        "textAr": "مقاوم للأحماض والصدأ",
        "textEn": "Rust & Acid Resistant",
        "text": "مقاوم للأحماض والصدأ"
      },
      {
        "icon": "fa-tools",
        "textAr": "لحام أرجون TIG هيدروليكي",
        "textEn": "Argon TIG Seamless Welds",
        "text": "لحام أرجون TIG هيدروليكي"
      },
      {
        "icon": "fa-award",
        "textAr": "مطابق لمعايير HACCP",
        "textEn": "HACCP Food Safety",
        "text": "مطابق لمعايير HACCP"
      }
    ],
    "shortDesc": "ثلاجة تحضير البيتزا والساندويتش والسلطات تجمع بين سطح عمل ستانلس ستيل مع حوض علوي يتسع لحاويات Gastronorm وأبواب تخزين مبردة سفلية للتحضير الفوري.",
    "features": [
      "حوض علوي مبرد لحفظ الخضار والجبن والصلصات باردة وطازجة طوال فترة الخدمة",
      "لوح تقطيع صحي معتمد أو قرصة ستانلس عريضة لتجهيز الوجبات بسرعة",
      "أبواب سفلية مبردة لتخزين المواد الخام وسرعة تجديد الحاويات العلوية",
      "ستارة أو غطاء ستانلس متحرك لحفظ البرودة ومنع التلوث في غير أوقات العمل"
    ],
    "specs": {
      "الخامة المصنعة": "ستانلس ستيل AISI 304 بالكامل",
      "التبريد": "تبريد استاتيكي أو هوائي مع مبخر معالج ضد الصدأ",
      "سعة الحاويات": "تتسع لحاويات GN 1/3 أو GN 1/4 بأعماق مختلفة",
      "الأبواب": "متوفرة بنظام 2 باب أو 3 باب حسب الطول والمساحة",
      "الضمان": "ضمان كامل على الكمبروسر والشاسيه واللحامات"
    },
    "badgeEn": "Fast Prep & Preservation Table",
    "gradeEn": "Certified AISI 304 Food Grade",
    "finishEn": "Ultra-Clean HACCP Food Contact Satin",
    "thicknessEn": "1.5 mm top worktop reinforced with waterproof underlay",
    "shortDescEn": "Commercial refrigerated sandwich & pizza preparation counter with top GN ingredient well, cutting workspace, and refrigerated under-counter storage.",
    "featuresEn": [
      "Chilled top ingredient rail keeping toppings, salads and cheeses strictly cold",
      "Spacious stainless or food-safe HDPE work surface for active sandwich prep",
      "Lower refrigerated storage doors for fast restocking during peak service hours",
      "Telescopic stainless steel night cover preserving cold temperatures"
    ],
    "specsEn": {
      "Material Grade": "Full Food-Grade AISI 304 Stainless Steel",
      "Refrigeration Type": "Static/Ventilated refrigeration with corrosion-proof evaporator",
      "Pan Capacity": "Holds standard GN 1/3, 1/4 or 1/6 Gastronorm containers",
      "Door Options": "Available in 2-door (140 cm) or 3-door (190 cm) modular formats",
      "Warranty": "Comprehensive warranty on compressor, structure and seals"
    }
  },
  {
    "id": "FAY-KIT-09",
    "category": "kitchen",
    "categoryName": "تجهيزات المطابخ والمطاعم والفنادق",
    "categoryNameEn": "Commercial Kitchen & Hotel Equipment",
    "name": "ثلاجه راسيه استنالس ستيل",
    "nameEn": "Single Door Upright Commercial Stainless Chiller",
    "badge": "تخزين رأسي ذكي وعميق",
    "image": "images/products/kit-real-09.webp",
    "grade": "ستانلس 304 غذائي معتمد",
    "finish": "مصنفر ساتان مقاوم للزيوت والبصمات",
    "thickness": "صاج 1.2 مم إلى 1.5 مم مع حقن عازل 60 مم",
    "badgeSpecs": [
      {
        "icon": "fa-certificate",
        "textAr": "ستانلس 304 غذائي",
        "textEn": "Grade 304 Food-Safe",
        "text": "ستانلس 304 غذائي"
      },
      {
        "icon": "fa-shield-alt",
        "textAr": "مقاوم للأحماض والصدأ",
        "textEn": "Rust & Acid Resistant",
        "text": "مقاوم للأحماض والصدأ"
      },
      {
        "icon": "fa-tools",
        "textAr": "لحام أرجون TIG هيدروليكي",
        "textEn": "Argon TIG Seamless Welds",
        "text": "لحام أرجون TIG هيدروليكي"
      },
      {
        "icon": "fa-award",
        "textAr": "مطابق لمعايير HACCP",
        "textEn": "HACCP Food Safety",
        "text": "مطابق لمعايير HACCP"
      }
    ],
    "shortDesc": "ثلاجة رأسية مفردة 1 باب من الستانلس ستيل 304 الغذائي، مثالية للمطابخ التجارية وغرف التحضير لحفظ اللحوم والألبان والخضار بدرجات حرارة مضبوطة إلكترونياً.",
    "features": [
      "موتور تبريد دانفوس/إمبراكو أوروبي معتمد لتوفير الكهرباء وعمر افتراضي طويل",
      "باب ستانلس ستيل ذاتي الإغلاق مع مفصلات هيدروليكية معمرة",
      "نظام تدفق الهواء البارد 3D لضمان برودة متساوية في جميع الأرفف العلوية والسفلية",
      "أرجل ستانلس قوية مجهزة بعجلات أو كعوب تسوية لسهولة الحركة والتثبيت"
    ],
    "specs": {
      "الخامة": "ستانلس ستيل 304 داخلي وخارجي مقاوم للصدأ",
      "الحرارة": "من 0° مئوية إلى +8° مئوية مع تحكم رقمي حساس",
      "السعة": "سعة 600 - 700 لتر بأبعاد قياسية 70×80×205 سم",
      "الإذابة": "إذابة آلية للثلج مع تبخير مياه الصرف بدون تدخل يدوي"
    },
    "badgeEn": "Smart Vertical Space Storage",
    "gradeEn": "Certified AISI 304 Stainless",
    "finishEn": "Satin Brushed Grease-Proof",
    "thicknessEn": "1.2 mm to 1.5 mm casing with 60 mm foam insulation",
    "shortDescEn": "Heavy-duty single door upright commercial reach-in chiller built with premium AISI 304 stainless steel, perfect for tight kitchen layouts requiring maximum vertical volume.",
    "featuresEn": [
      "High-efficiency European compressor (Embraco/Danfoss) for long service life",
      "Self-closing reversible solid stainless door with heavy-duty hinges",
      "3D forced-air duct system providing uniform temperature from top to bottom",
      "Heavy stainless bullet feet or locking castors for easy positioning"
    ],
    "specsEn": {
      "Material Grade": "Inside and outside AISI 304 stainless steel",
      "Temperature": "0°C to +8°C with precision digital thermostat",
      "Capacity": "600 to 700 Liters volume (70 x 80 x 205 cm standard size)",
      "Defrosting": "Automatic off-cycle defrost with automatic condensed water evaporation"
    }
  },
  {
    "id": "FAY-KIT-10",
    "category": "kitchen",
    "categoryName": "تجهيزات المطابخ والمطاعم والفنادق",
    "categoryNameEn": "Commercial Kitchen & Hotel Equipment",
    "name": "ثلاجه عرض سلطات",
    "nameEn": "Commercial Refrigerated Salad & Tapas Display Showcase",
    "badge": "عرض شهي وتبريد صحي",
    "image": "images/products/kit-real-10.webp",
    "grade": "ستانلس 304 معتمد",
    "finish": "مصنفر ميرور براق سهل التعقيم",
    "thickness": "شاسيه ستانلس 1.2 مم مع زجاج سيكوريت 8 مم",
    "badgeSpecs": [
      {
        "icon": "fa-certificate",
        "textAr": "ستانلس 304 غذائي",
        "textEn": "Grade 304 Food-Safe",
        "text": "ستانلس 304 غذائي"
      },
      {
        "icon": "fa-shield-alt",
        "textAr": "مقاوم للأحماض والصدأ",
        "textEn": "Rust & Acid Resistant",
        "text": "مقاوم للأحماض والصدأ"
      },
      {
        "icon": "fa-tools",
        "textAr": "لحام أرجون TIG هيدروليكي",
        "textEn": "Argon TIG Seamless Welds",
        "text": "لحام أرجون TIG هيدروليكي"
      },
      {
        "icon": "fa-award",
        "textAr": "مطابق لمعايير HACCP",
        "textEn": "HACCP Food Safety",
        "text": "مطابق لمعايير HACCP"
      }
    ],
    "shortDesc": "ثلاجة عرض وتبريد السلطات والمقبلات بكابينة زجاجية أنيقة وقاعدة ستانلس ستيل مبردة، مصممة للمطاعم والبوفيهات لتقديم السلطات طازجة وجذابة أمام العملاء.",
    "features": [
      "حوض مبرد بالكامل بتوزيع تبريد محيطي لحفظ نضارة السلطات والصلصات",
      "واجهة زجاجية شفافة مانعة للرذاذ والغبار ومقاومة للصدمات",
      "تتسع لتشكيلة واسعة من البولات والصواني الستانلس Gastronorm",
      "وحدة تكثيف مدمجة هادئة الصوت مناسبة لمنطقة الخدمة أمام الزبائن"
    ],
    "specs": {
      "الخامة": "ستانلس ستيل 304 مضاد للبكتيريا",
      "نظام التبريد": "تبريد استاتيكي لطيف يحافظ على رطوبة الخضار دون جفاف",
      "درجة الحرارة": "+2° إلى +8° مئوية",
      "التركيب": "توضع فوق الكاونتر أو كجزء من خط البوفيه المفتوح"
    },
    "badgeEn": "Fresh Appetizer & Salad Display",
    "gradeEn": "Certified AISI 304 Food Grade",
    "finishEn": "Hygienic Bright Mirror / Satin Finish",
    "thicknessEn": "1.2 mm stainless structure with 8 mm safety glass",
    "shortDescEn": "Refrigerated countertop salad and tapas showcase with elegant curved/square glass canopy and stainless steel base, preserving greens and dressings at crisp temperatures.",
    "featuresEn": [
      "Fully chilled cold well with cold-wall piping preserving crisp greens",
      "Sneeze guard glass canopy protecting food from dust and contamination",
      "Accommodates various GN 1/3 and GN 1/4 pan combinations",
      "Whisper-quiet built-in condenser unit ideal for customer-facing service lines"
    ],
    "specsEn": {
      "Material Grade": "Anti-bacterial AISI 304 stainless steel",
      "Cooling Method": "Gentle static cooling preventing raw vegetables from drying out",
      "Temperature Range": "+2°C to +8°C calibrated for delicate fresh produce",
      "Mounting": "Countertop tabletop or built into self-service buffet lines"
    }
  },
  {
    "id": "FAY-KIT-11",
    "category": "kitchen",
    "categoryName": "تجهيزات المطابخ والمطاعم والفنادق",
    "categoryNameEn": "Commercial Kitchen & Hotel Equipment",
    "name": "ثلاجه كاونتر",
    "nameEn": "Under-Counter Stainless Steel Worktop Refrigerator",
    "badge": "مساحة عمل وتبريد مزدوجة",
    "image": "images/products/kit-real-11.webp",
    "grade": "ستانلس 304 غذائي",
    "finish": "مصنفر ساتان مقاوم للخدش والتآكل",
    "thickness": "قرصة عمل علوية صلبة 1.5 مم مدعمة بأوميجا ستانلس",
    "badgeSpecs": [
      {
        "icon": "fa-certificate",
        "textAr": "ستانلس 304 غذائي",
        "textEn": "Grade 304 Food-Safe",
        "text": "ستانلس 304 غذائي"
      },
      {
        "icon": "fa-shield-alt",
        "textAr": "مقاوم للأحماض والصدأ",
        "textEn": "Rust & Acid Resistant",
        "text": "مقاوم للأحماض والصدأ"
      },
      {
        "icon": "fa-tools",
        "textAr": "لحام أرجون TIG هيدروليكي",
        "textEn": "Argon TIG Seamless Welds",
        "text": "لحام أرجون TIG هيدروليكي"
      },
      {
        "icon": "fa-award",
        "textAr": "مطابق لمعايير HACCP",
        "textEn": "HACCP Food Safety",
        "text": "مطابق لمعايير HACCP"
      }
    ],
    "shortDesc": "ثلاجة كاونتر ستانلس ستيل منخفضة تجمع بين ترابيزة عمل وتقطيع صلبة في الأعلى مع كبائن تبريد سفلية بالأبواب أو الأدراج لتسريع حركة الطهاة في المطبخ.",
    "features": [
      "سطح عمل علوي ستانلس شديد التحمل لتحضير الطعام وتقطيع اللحوم والخضار",
      "حافة خلفية مقلوبة (Splashback) لحماية الحوائط من الأوساخ والدهون",
      "متوفرة بأبواب مفصلية أو أدراج سحب ستانلس ستيل للمأكولات",
      "محرك تبريد جانبي أو سفلي مع فلتر هواء قابل للفك السريع والغسيل"
    ],
    "specs": {
      "الخامة المصنعة": "ستانلس ستيل AISI 304 داخلياً وخارجياً",
      "الأطوال المتاحة": "120 سم، 150 سم، 180 سم، 210 سم حسب الطلب",
      "درجة الحرارة": "-2° إلى +8° مئوية مع تحكم ديجيتال",
      "الأرجل": "أرجل ستانلس تلسكوبية لضبط الميول بدقة هندسية"
    },
    "badgeEn": "Dual Worktop & Chilled Storage",
    "gradeEn": "Certified AISI 304 Food Grade",
    "finishEn": "Scratch-Resistant Directional Satin",
    "thicknessEn": "Heavy 1.5 mm top reinforced with omega stiffeners",
    "shortDescEn": "Commercial under-counter refrigerator combining a heavy-duty stainless prep worktop with chilled storage cabinets below, maximizing commercial kitchen efficiency.",
    "featuresEn": [
      "Reinforced heavy-duty work surface capable of holding countertop equipment",
      "Integrated rear splashback preventing food debris from falling behind",
      "Available with hinged solid stainless doors or heavy-duty pull-out drawers",
      "Side-mounted or cassette compressor system with washable condenser filter"
    ],
    "specsEn": {
      "Material Grade": "Inside and outside Certified AISI 304 Stainless Steel",
      "Available Lengths": "120 cm, 150 cm, 180 cm, 210 cm custom modular options",
      "Temperature Range": "-2°C to +8°C with electronic LED display",
      "Legs": "Adjustable stainless telescopic legs ensuring perfectly level worktop"
    }
  },
  {
    "id": "FAY-KIT-12",
    "category": "kitchen",
    "categoryName": "تجهيزات المطابخ والمطاعم والفنادق",
    "categoryNameEn": "Commercial Kitchen & Hotel Equipment",
    "name": "جريل بلاطه غاز",
    "nameEn": "Commercial Flat Top Gas Griddle & Plancha",
    "badge": "سطح شوي حراري متجانس",
    "image": "images/products/kit-real-12.webp",
    "grade": "ستانلس 304 وشريحة صلب مصمتة 16 مم",
    "finish": "مصنفر صناعي مع بلاطة ملساء مصقولة",
    "thickness": "بلاطة طهي مصمتة سمك 16 مم إلى 20 مم",
    "badgeSpecs": [
      {
        "icon": "fa-certificate",
        "textAr": "ستانلس 304 غذائي",
        "textEn": "Grade 304 Food-Safe",
        "text": "ستانلس 304 غذائي"
      },
      {
        "icon": "fa-shield-alt",
        "textAr": "مقاوم للأحماض والصدأ",
        "textEn": "Rust & Acid Resistant",
        "text": "مقاوم للأحماض والصدأ"
      },
      {
        "icon": "fa-tools",
        "textAr": "لحام أرجون TIG هيدروليكي",
        "textEn": "Argon TIG Seamless Welds",
        "text": "لحام أرجون TIG هيدروليكي"
      },
      {
        "icon": "fa-award",
        "textAr": "مطابق لمعايير HACCP",
        "textEn": "HACCP Food Safety",
        "text": "مطابق لمعايير HACCP"
      }
    ],
    "shortDesc": "جريل بلاطة غاز صناعي مصمم لشوي البرجر واللحوم والبيض والفطائر، مجهز ببلاطة صلب مصمتة فائقة السماكة لتخزين الحرارة ومنع انخفاض درجات الشواء.",
    "features": [
      "بلاطة شوي سميكة مسقولة تخزن الحرارة وتوفر استهلاك الغاز",
      "حواف ستانلس مرتفعة من 3 جهات لمنع تطاير رذاذ الزيوت والدهون",
      "درج ستانلس سفلي عريض لتجميع الدهون والزيوت الفائضة بسهولة",
      "شعلات غاز أنبوبية متعددة متقاطعة لضمان عدم وجود بقع باردة على السطح"
    ],
    "specs": {
      "الهيكل الخارجي": "ستانلس ستيل AISI 304 عالي المقاومة",
      "سطح الشوي": "صلب كربوني مصقول ناعم (أو ستانلس مطلي بالكروم الصلب)",
      "نظام الإشعال": "إشعال ذاتي بيزو مع صمامات أمان ثرموكابل",
      "المقاسات": "متوفر بمقاسات 60 سم، 80 سم، 100 سم، 120 سم"
    },
    "badgeEn": "Even-Heat Gas Griddle Plancha",
    "gradeEn": "AISI 304 Body with 16 mm Solid Steel Plate",
    "finishEn": "Polished Mirror Smooth Cooking Plate",
    "thicknessEn": "16 mm to 20 mm solid heat-accumulating griddle plate",
    "shortDescEn": "Heavy-duty commercial flat top gas griddle plancha designed for continuous grilling of burgers, steaks, and breakfast items with zero thermal loss.",
    "featuresEn": [
      "Thick solid steel cooking plate retaining massive thermal energy",
      "Integrated 3-sided high stainless splash guards containing grease splatters",
      "Wide removable front grease collection drawer for easy emptying",
      "High-efficiency tubular gas burners delivering zero cold spots across the plate"
    ],
    "specsEn": {
      "Exterior Chassis": "Heavy AISI 304 Stainless Steel Construction",
      "Grilling Surface": "Ultra-thick polished steel plate (or optional hard chrome)",
      "Ignition": "Piezo electric ignition with flame failure safety valves",
      "Sizes Available": "Modular 60 cm, 80 cm, 100 cm, 120 cm configurations"
    }
  },
  {
    "id": "FAY-KIT-13",
    "category": "kitchen",
    "categoryName": "تجهيزات المطابخ والمطاعم والفنادق",
    "categoryNameEn": "Commercial Kitchen & Hotel Equipment",
    "name": "حله بخاريه",
    "nameEn": "Commercial Stainless Steel Tilting Steam Boiling Pan",
    "badge": "طهي وسلق الكميات العملاقة",
    "image": "images/products/kit-real-13.webp",
    "grade": "ستانلس 316 داخلي و 304 خارجي",
    "finish": "مصقول غذائي فائق النعومة",
    "thickness": "جدار مزدوج سمك 2.5 مم يتحمل ضغط البخار",
    "badgeSpecs": [
      {
        "icon": "fa-certificate",
        "textAr": "ستانلس 304 غذائي",
        "textEn": "Grade 304 Food-Safe",
        "text": "ستانلس 304 غذائي"
      },
      {
        "icon": "fa-shield-alt",
        "textAr": "مقاوم للأحماض والصدأ",
        "textEn": "Rust & Acid Resistant",
        "text": "مقاوم للأحماض والصدأ"
      },
      {
        "icon": "fa-tools",
        "textAr": "لحام أرجون TIG هيدروليكي",
        "textEn": "Argon TIG Seamless Welds",
        "text": "لحام أرجون TIG هيدروليكي"
      },
      {
        "icon": "fa-award",
        "textAr": "مطابق لمعايير HACCP",
        "textEn": "HACCP Food Safety",
        "text": "مطابق لمعايير HACCP"
      }
    ],
    "shortDesc": "حلة طهي وغليان بخارية صناعية مصنعة من سبيكة الستانلس ستيل 316/304 مع جاكيت بخاري مزدوج لطهي الأرز والشوربات واللحوم بكميات فندقية ومستشفيات كبرى.",
    "features": [
      "جاكيت بخاري مزدوج (Double Steam Jacket) يمنع احتراق أو التصاق الطعام بالقاع",
      "آلية تفريغ قلابة يدوية أو هيدروليكية لصب الأطعمة بأمان تام",
      "غطاء ستانلس موازن بثقل زنبركي يفتح ويغلق بلمسة واحدة سهلة",
      "صنبور ستانلس مدمج لتغذية الحلة بالمياه الباردة والساخنة مباشرة"
    ],
    "specs": {
      "سبيكة الحوض الداخلي": "ستانلس ستيل AISI 316 المقاوم للأحماض والأغذية",
      "السعة اللترية": "سعات متنوعة من 100 لتر، 150 لتر، 250 لتر إلى 500 لتر",
      "ضغط التشغيل": "مختبرة هندسياً مع صمام أمان بخار ومقياس ضغط مانوميتر",
      "الاستخدام": "مطابخ الجيش، كبرى المستشفيات، الفنادق، شركات التغذية المدرسية"
    },
    "badgeEn": "Mass Volume Boiling & Stewing",
    "gradeEn": "AISI 316 Interior Bowl / AISI 304 Exterior",
    "finishEn": "Ultra-Smooth Food-Grade Sanitary Polish",
    "thicknessEn": "2.5 mm double jacket pressure-tested wall",
    "shortDescEn": "Industrial jacketed steam boiling pan kettle with ergonomic tilting mechanism, engineered for mass batch cooking of soups, rice, and stews in hotels and catering units.",
    "featuresEn": [
      "Indirect steam jacket heating preventing scorching and burning of delicate foods",
      "Precision tilting discharge system (manual worm gear or hydraulic motorized)",
      "Counterbalanced spring-assisted stainless lid operating smoothly with zero effort",
      "Integrated stainless steel water swivel tap for direct cold/hot bowl filling"
    ],
    "specsEn": {
      "Interior Bowl Alloy": "Acid-resistant AISI 316 Stainless Steel food bowl",
      "Volume Capacities": "Available in 100L, 150L, 250L up to 500L batch sizes",
      "Pressure Safety": "Hydrostatically tested with certified safety valve and pressure gauge",
      "Applications": "Military messes, central hospital kitchens, universities, mass catering"
    }
  },
  {
    "id": "FAY-KIT-14",
    "category": "kitchen",
    "categoryName": "تجهيزات المطابخ والمطاعم والفنادق",
    "categoryNameEn": "Commercial Kitchen & Hotel Equipment",
    "name": "حوض غسيل يد واحده بضلفه",
    "nameEn": "Single Sink Unit with Stainless Steel Cabinet Doors",
    "badge": "نظافة وتنظيم متكامل للمطبخ",
    "image": "images/products/kit-real-14.webp",
    "grade": "ستانلس 304 غذائي معتمد",
    "finish": "مصنفر ساتان مقاوم للمنظفات والكيماويات",
    "thickness": "قرصة 1.5 مم مسحوبة هيدروليكياً بقطعة واحدة",
    "badgeSpecs": [
      {
        "icon": "fa-certificate",
        "textAr": "ستانلس 304 غذائي",
        "textEn": "Grade 304 Food-Safe",
        "text": "ستانلس 304 غذائي"
      },
      {
        "icon": "fa-shield-alt",
        "textAr": "مقاوم للأحماض والصدأ",
        "textEn": "Rust & Acid Resistant",
        "text": "مقاوم للأحماض والصدأ"
      },
      {
        "icon": "fa-tools",
        "textAr": "لحام أرجون TIG هيدروليكي",
        "textEn": "Argon TIG Seamless Welds",
        "text": "لحام أرجون TIG هيدروليكي"
      },
      {
        "icon": "fa-award",
        "textAr": "مطابق لمعايير HACCP",
        "textEn": "HACCP Food Safety",
        "text": "مطابق لمعايير HACCP"
      }
    ],
    "shortDesc": "وحدة حوض غسيل ستانلس ستيل عين واحدة مع دولاب سفلي بضلف مفصلية محكمة لإخفاء وصلات السباكة وتخزين أدوات النظافة والمنظفات بشكل أنيق وصحي.",
    "features": [
      "حوض مسحوب هيدروليكياً بدون لحامات زوايا لمنع تراكم الأوساخ والميكروبات",
      "ضلف سفلية مزدوجة الجدار (Double Skin) معزولة لتقليل الصوت وقفل ناعم",
      "شفة علوية مقلوبة لحماية الجدران من رذاذ المياه مع ميول لتصريف المياه للحوض",
      "أرجل ستانلس معزولة قابلة لضبط المنسوب لتفادي عيوب بلاط الأرضيات"
    ],
    "specs": {
      "الخامة": "ستانلس ستيل 304 غير مغناطيسي",
      "أبعاد الحوض": "50×50×30 سم (أو مقاسات مخصصة عميقة للأواني)",
      "الملحقات": "صفاية ستانلس وسيفون صرف تركي/ألماني عالي الجودة",
      "الاستخدام": "مناطق غسيل الأيدي، كافيهات، مطاعم، معامل تحاليل طبية"
    },
    "badgeEn": "Enclosed Hygienic Sink Cabinet",
    "gradeEn": "Certified AISI 304 Food Grade",
    "finishEn": "Chemical-Resistant Satin Brushed",
    "thicknessEn": "1.5 mm deep-drawn seamless single piece bowl",
    "shortDescEn": "Commercial single bowl stainless steel sink unit with fully enclosed lower cabinet doors, concealing plumbing while providing secure hygienic detergent storage.",
    "featuresEn": [
      "Seamless deep-drawn bowl with curved hygienic corners preventing dirt buildup",
      "Double-skin acoustic dampened sound-insulated stainless cabinet doors",
      "Raised rear splashback with anti-drip marine perimeter edge contouring",
      "Heavy adjustable stainless bullet feet ensuring perfect leveling on uneven tiles"
    ],
    "specsEn": {
      "Material Grade": "Non-magnetic Certified AISI 304 Stainless Steel",
      "Bowl Dimensions": "50 x 50 x 30 cm deep bowl (or custom fabricated sizes)",
      "Included Fittings": "Stainless basket strainer and heavy-duty commercial trap",
      "Applications": "Handwash stations, cafes, commercial prep rooms, sanitary labs"
    }
  },
  {
    "id": "FAY-KIT-15",
    "category": "kitchen",
    "categoryName": "تجهيزات المطابخ والمطاعم والفنادق",
    "categoryNameEn": "Commercial Kitchen & Hotel Equipment",
    "name": "حوض مطبخ صناعي استلس 2 حوض",
    "nameEn": "Double Bowl Industrial Stainless Steel Sink Unit",
    "badge": "غسيل وتعقيم فندقي عالي السعة",
    "image": "images/products/kit-real-15.webp",
    "grade": "ستانلس 304 ثقيل عالي التحمل",
    "finish": "مصنفر ساتان اتجاهي عالي المتانة",
    "thickness": "قرصة 1.5 مم مع شاسيه مواسير 1.5 مم",
    "badgeSpecs": [
      {
        "icon": "fa-certificate",
        "textAr": "ستانلس 304 غذائي",
        "textEn": "Grade 304 Food-Safe",
        "text": "ستانلس 304 غذائي"
      },
      {
        "icon": "fa-shield-alt",
        "textAr": "مقاوم للأحماض والصدأ",
        "textEn": "Rust & Acid Resistant",
        "text": "مقاوم للأحماض والصدأ"
      },
      {
        "icon": "fa-tools",
        "textAr": "لحام أرجون TIG هيدروليكي",
        "textEn": "Argon TIG Seamless Welds",
        "text": "لحام أرجون TIG هيدروليكي"
      },
      {
        "icon": "fa-award",
        "textAr": "مطابق لمعايير HACCP",
        "textEn": "HACCP Food Safety",
        "text": "مطابق لمعايير HACCP"
      }
    ],
    "shortDesc": "حوض مطبخ صناعي مزدوج 2 عين ستانلس ستيل مصمم خصيصاً لعمليات الغسيل والشطف والتعقيم للأواني الكبيرة والصواني في الفنادق والمطاعم المزدحمة.",
    "features": [
      "حوضين عملاقين بعمق 30 إلى 35 سم لاستيعاب الحلل والأواني الفندقية الضخمة",
      "قرصة علوية مع مجرى تصريف مانع لتسرب المياه على الأرضية (Anti-Drip Edge)",
      "شاسيه سفلي مع رف سفلي شبكي أو مصمت لتخزين الصواني وسلال التجفيف",
      "فتحات مجهزة للخلاطات الدش الصناعية (Pre-Rinse Spray Units)"
    ],
    "specs": {
      "الخامة المصنعة": "ستانلس ستيل AISI 304 سميك ومقاوم للصدأ",
      "المقاسات المعتادة": "140×70×85 سم أو 180×70×85 سم أو 200×80×85 سم",
      "التدعيم": "مواسير أرجل ستانلس 40×40 مم مع عوارض تقوية ملحومة بأرجون TIG",
      "شهادة الضمان": "ضمان 10 سنوات ضد الصدأ وتفكك اللحامات"
    },
    "badgeEn": "High-Capacity Dual Wash & Rinse Station",
    "gradeEn": "Heavy-Gauge AISI 304 Stainless",
    "finishEn": "Heavy-Duty Satin Brushed Finish",
    "thicknessEn": "1.5 mm pressed top with 1.5 mm tube framing",
    "shortDescEn": "Industrial heavy-duty 2-bowl stainless steel wash sink engineered for intensive washing, rinsing, and sanitizing of commercial pots and sheet pans.",
    "featuresEn": [
      "Two deep washing wells (30 to 35 cm depth) fitting oversized cookware",
      "Grooved drainer worktop with anti-drip perimeter border keeping floors dry",
      "Heavy lower stainless under-shelf for storage of dish racks and drying baskets",
      "Pre-drilled reinforced tap holes for heavy commercial pre-rinse spray faucets"
    ],
    "specsEn": {
      "Material Grade": "Heavy Certified AISI 304 Stainless Steel",
      "Standard Dimensions": "140x70x85 cm, 180x70x85 cm or 200x80x85 cm CAD configurations",
      "Reinforcement": "Square 40x40 mm stainless tube legs with argon TIG welded crossbracing",
      "Warranty": "10-year structural warranty against corrosion and weld failure"
    }
  },
  {
    "id": "FAY-KIT-16",
    "category": "kitchen",
    "categoryName": "تجهيزات المطابخ والمطاعم والفنادق",
    "categoryNameEn": "Commercial Kitchen & Hotel Equipment",
    "name": "دسبنسر مشروبات استالس",
    "nameEn": "Stainless Steel Commercial Beverage & Juice Dispenser",
    "badge": "تقديم مشروبات وعصائر باردة",
    "image": "images/products/kit-real-16.webp",
    "grade": "ستانلس 304 وبولي كربونات غذائي",
    "finish": "ستانلس ميرور 8K لامع جذاب",
    "thickness": "جسم خارجي 1.2 مم مع أسطوانة تبريد ستانلس",
    "badgeSpecs": [
      {
        "icon": "fa-certificate",
        "textAr": "ستانلس 304 غذائي",
        "textEn": "Grade 304 Food-Safe",
        "text": "ستانلس 304 غذائي"
      },
      {
        "icon": "fa-shield-alt",
        "textAr": "مقاوم للأحماض والصدأ",
        "textEn": "Rust & Acid Resistant",
        "text": "مقاوم للأحماض والصدأ"
      },
      {
        "icon": "fa-tools",
        "textAr": "لحام أرجون TIG هيدروليكي",
        "textEn": "Argon TIG Seamless Welds",
        "text": "لحام أرجون TIG هيدروليكي"
      },
      {
        "icon": "fa-award",
        "textAr": "مطابق لمعايير HACCP",
        "textEn": "HACCP Food Safety",
        "text": "مطابق لمعايير HACCP"
      }
    ],
    "shortDesc": "موزع مشروبات وعصائر فندقي فخم مصنع من الستانلس ستيل اللامع 304 مع أسطوانة ثلج داخلية لحفظ المشروبات باردة بدون أن تتخفف بالماء الذائب للبوفيهات الفاخرة.",
    "features": [
      "أسطوانة تبريد مركزية للثلج من الستانلس ستيل تحافظ على برودة العصير لساعات",
      "صنبور صب ستانلس ستيل مانع للتنقيط وسهل التشغيل بيد واحدة",
      "صينية تجميع قطرات ستانلس قابلة للفك السريع لسهولة التفريغ والغسيل",
      "خزان بولي كربونات شفاف نقي عالي المقاومة للصدمات والكسر"
    ],
    "specs": {
      "الخامة": "ستانلس ستيل 304 غذائي مقاوم للأحماض",
      "السعة": "متوفر بسعات 8 لتر، 16 لتر (مزدوج)، 24 لتر (ثلاثي)",
      "نظام التبريد": "تبريد طبيعي بالثلج أو تبريد كهربائي مدمج حسب الموديل",
      "التطبيقات": "بوفيهات الإفطار بالفنادق، قاعات الأفراح، المؤتمرات، الكافيهات"
    },
    "badgeEn": "Cold Beverage & Juice Station",
    "gradeEn": "AISI 304 Stainless & Food-Grade Polycarbonate",
    "finishEn": "High-Gloss Mirror 8K Finish",
    "thicknessEn": "1.2 mm body with central stainless ice cylinder",
    "shortDescEn": "Luxury stainless steel hotel beverage dispenser with central stainless ice tube, keeping juices perfectly chilled without diluting taste for upscale buffets.",
    "featuresEn": [
      "Removable central stainless ice core chilling drinks without ice dilution",
      "Drip-free solid brass/stainless lever dispensing tap for smooth serving",
      "Removable stainless drip tray for easy emptying and hygienic cleaning",
      "Crystal-clear food-grade polycarbonate tank resistant to impact and stains"
    ],
    "specsEn": {
      "Material Grade": "Food-grade acid-proof AISI 304 Stainless Steel",
      "Capacities": "8 Liters single, 16 Liters double, or 24 Liters triple modules",
      "Cooling Method": "Natural central ice core or built-in electric cooling unit",
      "Applications": "Hotel breakfast buffets, wedding banquets, luxury conference lounges"
    }
  },
  {
    "id": "FAY-KIT-17",
    "category": "kitchen",
    "categoryName": "تجهيزات المطابخ والمطاعم والفنادق",
    "categoryNameEn": "Commercial Kitchen & Hotel Equipment",
    "name": "دولاب تسخين بانكويت",
    "nameEn": "Heated Banquet Holding Cabinet & Food Warmer Trolley",
    "badge": "حفظ حرارة الولائم والحفلات",
    "image": "images/products/kit-real-17.webp",
    "grade": "ستانلس 304 غذائي معزول",
    "finish": "مصنفر ساتان صناعي عالي التحمل",
    "thickness": "جدار مزدوج معزول بالصوف الصخري عالي الكثافة 50 مم",
    "badgeSpecs": [
      {
        "icon": "fa-certificate",
        "textAr": "ستانلس 304 غذائي",
        "textEn": "Grade 304 Food-Safe",
        "text": "ستانلس 304 غذائي"
      },
      {
        "icon": "fa-shield-alt",
        "textAr": "مقاوم للأحماض والصدأ",
        "textEn": "Rust & Acid Resistant",
        "text": "مقاوم للأحماض والصدأ"
      },
      {
        "icon": "fa-tools",
        "textAr": "لحام أرجون TIG هيدروليكي",
        "textEn": "Argon TIG Seamless Welds",
        "text": "لحام أرجون TIG هيدروليكي"
      },
      {
        "icon": "fa-award",
        "textAr": "مطابق لمعايير HACCP",
        "textEn": "HACCP Food Safety",
        "text": "مطابق لمعايير HACCP"
      }
    ],
    "shortDesc": "دولاب تسخين وحفظ وجبات متحرك على عجلات (بانكويت كابينت) مصنع من الستانلس ستيل 304 بالكامل لحفظ صواني الطعام ساخنة ورطبة أثناء نقلها لغرف الاحتفالات.",
    "features": [
      "نظام تدفئة هوائي مع ترطيب مائي لمنع جفاف اللحوم والوجبات أثناء الانتظار",
      "شاسيه متحرك مزود بـ 4 عجلات صناعية ثقيلة مع فرامل ومصدات مطاطية زوايا",
      "أبواب معزولة ومحكمة بجوانات سيليكون تتحمل درجات حرارة حتى 200° مئوية",
      "مجاري أرفف داخلية تتسع لصواني Gastronorm القياسية بأعداد ضخمة"
    ],
    "specs": {
      "الخامة": "ستانلس ستيل 304 داخلياً وخارجياً بالكامل",
      "درجة الحرارة": "تحكم ديجيتال دقيق من 30° إلى 90° مئوية",
      "السعة": "سعات 10 صواني، 16 صينية، 20 صينية بانكويت",
      "الكهرباء": "220V بقدرة سخانات 1500W - 2500W موفرة للطاقة"
    },
    "badgeEn": "Mobile Banquet Heat Retaining Cart",
    "gradeEn": "Insulated Certified AISI 304",
    "finishEn": "Industrial Heavy Satin Finish",
    "thicknessEn": "Double-wall with 50 mm dense mineral rockwool insulation",
    "shortDescEn": "Mobile insulated heated banquet cabinet fabricated from AISI 304 stainless steel, engineered to keep cooked banquet meals piping hot and moist during event delivery.",
    "featuresEn": [
      "Convective fan-forced heating with water pan humidity control stopping food drying",
      "Heavy-duty mobile chassis with 4 swivel caster wheels, brakes and corner bumpers",
      "Insulated doors sealed with high-temperature food-grade silicone gaskets",
      "Universal stainless tray slides accommodating GN 2/1 or GN 1/1 sheet pans"
    ],
    "specsEn": {
      "Material": "Complete AISI 304 Stainless Steel inside and out",
      "Temperature Range": "Precise digital control from +30°C to +90°C",
      "Pan Capacity": "10-pan, 16-pan or 20-pan GN banquet sizes",
      "Electrical": "220V with 1500W to 2500W energy-efficient heating element"
    }
  },
  {
    "id": "FAY-KIT-18",
    "category": "kitchen",
    "categoryName": "تجهيزات المطابخ والمطاعم والفنادق",
    "categoryNameEn": "Commercial Kitchen & Hotel Equipment",
    "name": "ديب فريرز مطعام",
    "nameEn": "Heavy-Duty Commercial Restaurant Deep Freezer",
    "badge": "تجميد فائق السرعة -22°",
    "image": "images/products/kit-real-18.webp",
    "grade": "ستانلس 304 متين",
    "finish": "مصنفر صناعي سهل التعقيم",
    "thickness": "عزل حراري 70 مم بولي يوريثان عالي الضغط",
    "badgeSpecs": [
      {
        "icon": "fa-certificate",
        "textAr": "ستانلس 304 غذائي",
        "textEn": "Grade 304 Food-Safe",
        "text": "ستانلس 304 غذائي"
      },
      {
        "icon": "fa-shield-alt",
        "textAr": "مقاوم للأحماض والصدأ",
        "textEn": "Rust & Acid Resistant",
        "text": "مقاوم للأحماض والصدأ"
      },
      {
        "icon": "fa-tools",
        "textAr": "لحام أرجون TIG هيدروليكي",
        "textEn": "Argon TIG Seamless Welds",
        "text": "لحام أرجون TIG هيدروليكي"
      },
      {
        "icon": "fa-award",
        "textAr": "مطابق لمعايير HACCP",
        "textEn": "HACCP Food Safety",
        "text": "مطابق لمعايير HACCP"
      }
    ],
    "shortDesc": "ديب فريزر تجاري للمطاعم ومطابخ الفنادق بقوة تجميد تصل إلى -22° مئوية لتخزين اللحوم والدواجن والأسماك والخضار المجمد لشهور طويلة بكفاءة أمان تامة.",
    "features": [
      "وحدة تبريد وتجميد ذات قدرة حصانية عالية مصممة للأجواء الحارة",
      "مبخر معالج ضد التآكل والأملاح مع دورات تذويب آلية بالغاز الساخن",
      "سخانات مخفية حول إطارات الأبواب لمنع تكاثف الرطوبة وتكون الثلج على الجوانات",
      "شاشة رقمية HACCP تسجل وتراقب درجات التجميد مع تنبيهات صوتية"
    ],
    "specs": {
      "الخامة المصنعة": "ستانلس ستيل AISI 304 بالكامل",
      "درجة التجميد": "-18° مئوية إلى -22° مئوية تحت الصفر",
      "نوع الغاز": "غاز تبريد بيئي صديق للأوزون R404a / R290",
      "الأبواب": "متوفر بنظام 1 باب رأسي أو 2 باب رأسي أو كاونتر أفقي"
    },
    "badgeEn": "Sub-Zero -22°C Deep Freezing",
    "gradeEn": "Certified AISI 304 Stainless",
    "finishEn": "Hygienic Easy-Clean Satin",
    "thicknessEn": "70 mm high-pressure polyurethane injected insulation",
    "shortDescEn": "Heavy-duty commercial reach-in deep freezer designed for restaurant kitchens, freezing meat, poultry, and seafood down to -22°C with absolute food safety.",
    "featuresEn": [
      "High horsepower refrigeration system engineered for intense kitchen heat loads",
      "Hot-gas auto defrost with anti-corrosion coated evaporator coils",
      "Frame perimeter heating elements preventing door condensation and ice sticking",
      "Digital HACCP monitoring controller with temperature logs and visual alarms"
    ],
    "specsEn": {
      "Material Grade": "Inside and outside Certified AISI 304 Stainless Steel",
      "Temperature Range": "-18°C to -22°C sub-zero continuous deep freeze",
      "Refrigerant Gas": "Eco-friendly zero-ODP refrigerant R404a / R290",
      "Configurations": "1-door upright, 2-door upright or under-counter freezer formats"
    }
  },
  {
    "id": "FAY-KIT-19",
    "category": "kitchen",
    "categoryName": "تجهيزات المطابخ والمطاعم والفنادق",
    "categoryNameEn": "Commercial Kitchen & Hotel Equipment",
    "name": "سخان بوفيه مفتوح",
    "nameEn": "Drop-In Open Buffet Bain-Marie Food Warmer",
    "badge": "أناقة فاخرة لخطوط البوفيه",
    "image": "images/products/kit-real-19.webp",
    "grade": "ستانلس 304 غذائي ممتاز",
    "finish": "ميرور لامع مع أطراف ساتان أنيقة",
    "thickness": "حوض ماء 1.5 مم مسحوب قطعة واحدة",
    "badgeSpecs": [
      {
        "icon": "fa-certificate",
        "textAr": "ستانلس 304 غذائي",
        "textEn": "Grade 304 Food-Safe",
        "text": "ستانلس 304 غذائي"
      },
      {
        "icon": "fa-shield-alt",
        "textAr": "مقاوم للأحماض والصدأ",
        "textEn": "Rust & Acid Resistant",
        "text": "مقاوم للأحماض والصدأ"
      },
      {
        "icon": "fa-tools",
        "textAr": "لحام أرجون TIG هيدروليكي",
        "textEn": "Argon TIG Seamless Welds",
        "text": "لحام أرجون TIG هيدروليكي"
      },
      {
        "icon": "fa-award",
        "textAr": "مطابق لمعايير HACCP",
        "textEn": "HACCP Food Safety",
        "text": "مطابق لمعايير HACCP"
      }
    ],
    "shortDesc": "سخان بوفيه مفتوح (بان ماري مائي) يسقط داخل كاونترات البوفيه الخشبية أو الرخامية لحفظ صواني الطعام ساخنة وشهية لرواد الفندق مع تغذية مياه وصرف مدمج.",
    "features": [
      "حوض مائي مسحوب هيدروليكياً بدون لحامات لتسخين ناعم غير مباشر بالبخار",
      "إمكانية تزويد الحوض بمحبس ملء مائي أوتوماتيكي ومحبس تصريف سفلي",
      "سخانات ستانلس مسطحة تحت الحوض لسهولة إزالة الترسبات الكلسية",
      "متوافق مع جميع أشكال صواني Gastronorm الستانلس والبورسلين"
    ],
    "specs": {
      "الخامة": "ستانلس ستيل 304 معتمد ضد التآكل والأكسدة",
      "التحكم": "لوحة تحكم ثرموستاتية خارجية تركب في واجهة الكاونتر",
      "الحرارة": "من 40° إلى 90° مئوية",
      "السعة": "تتسع لـ 2 إلى 5 صواني GN 1/1 بالحجم الكامل"
    },
    "badgeEn": "Drop-In Luxury Buffet Line",
    "gradeEn": "Premium AISI 304 Food Grade",
    "finishEn": "Dual Mirror Accent & Fine Satin",
    "thicknessEn": "1.5 mm seamless hydraulic-pressed water basin",
    "shortDescEn": "Drop-in commercial open buffet bain-marie station fitted into marble or wooden counters, keeping buffet dishes hot and visually appetizing for hotel guests.",
    "featuresEn": [
      "Seamless pressed water well providing gentle indirect steam heating",
      "Optional automatic water fill sensor and quick-drain brass bottom valve",
      "Concealed flat underside heating elements for easy descaling and sanitization",
      "Full compatibility with all Gastronorm stainless steel and porcelain vessels"
    ],
    "specsEn": {
      "Material Grade": "Certified AISI 304 Corrosion-Resistant Stainless Steel",
      "Control Panel": "Remote thermostatic panel mountable on counter front fascia",
      "Temperature Range": "+40°C to +90°C thermostatically regulated",
      "Pan Capacity": "Accommodates 2 to 5 standard full-size GN 1/1 food pans"
    }
  },
  {
    "id": "FAY-KIT-20",
    "category": "kitchen",
    "categoryName": "تجهيزات المطابخ والمطاعم والفنادق",
    "categoryNameEn": "Commercial Kitchen & Hotel Equipment",
    "name": "سخان طعام حراري",
    "nameEn": "Thermostatic Commercial Food Warmer & Dry Well",
    "badge": "تسخين جاف ومائي مزدوج",
    "image": "images/products/kit-real-20.webp",
    "grade": "ستانلس 304 غذائي",
    "finish": "مصنفر ساتان مقاوم للحرارة",
    "thickness": "صاج 1.2 مم إلى 1.5 مم مع عزل حراري محيطي",
    "badgeSpecs": [
      {
        "icon": "fa-certificate",
        "textAr": "ستانلس 304 غذائي",
        "textEn": "Grade 304 Food-Safe",
        "text": "ستانلس 304 غذائي"
      },
      {
        "icon": "fa-shield-alt",
        "textAr": "مقاوم للأحماض والصدأ",
        "textEn": "Rust & Acid Resistant",
        "text": "مقاوم للأحماض والصدأ"
      },
      {
        "icon": "fa-tools",
        "textAr": "لحام أرجون TIG هيدروليكي",
        "textEn": "Argon TIG Seamless Welds",
        "text": "لحام أرجون TIG هيدروليكي"
      },
      {
        "icon": "fa-award",
        "textAr": "مطابق لمعايير HACCP",
        "textEn": "HACCP Food Safety",
        "text": "مطابق لمعايير HACCP"
      }
    ],
    "shortDesc": "سخان طعام حراري احترافي يعمل بالتسخين المائي أو الجاف لتلبية متطلبات محطات التقديم السريع والمطابخ الفندقية للحفاظ على حرارة الوجبات الجاهزة للتسليم.",
    "features": [
      "عناصر تسخين مغلفة عالية الجودة تضمن سرعة الوصول لدرجة الحفظ المطلوبة",
      "عزل حراري عالي الكفاءة يقلل من حرارة الجدران الخارجية لتأمين العمال",
      "مؤشر ضوئي للتشغيل وثرموستات تدريجي لضبط الحرارة بدقة متناهية",
      "هيكل ستانلس ستيل قوي وخفيف سهل النقل بين محطات الطهي"
    ],
    "specs": {
      "الخامة": "ستانلس ستيل AISI 304 بالكامل",
      "القدرة الكهربائية": "1200W - 1800W / 220V",
      "درجة الحرارة": "حتى 100° مئوية مع حساس أمان حراري",
      "التطبيقات": "مطاعم الوجبات السريعة، المطاعم السورية، الكافتيريات"
    },
    "badgeEn": "Dry/Wet Hybrid Food Warmer",
    "gradeEn": "Certified AISI 304 Stainless",
    "finishEn": "Heat-Resistant Satin Brushed",
    "thicknessEn": "1.2 mm to 1.5 mm with perimeter thermal insulation",
    "shortDescEn": "Professional thermostatic food warmer operating with both dry and wet well modes, ensuring cooked entrees stay at safe serving temperatures ready for plating.",
    "featuresEn": [
      "Armored tubular heating elements reaching optimum holding temps rapidly",
      "Heavy thermal insulation keeping exterior casing cool to the touch",
      "Indicator lights and precise graduated dial thermostat",
      "Compact yet robust stainless construction easily relocated across kitchens"
    ],
    "specsEn": {
      "Material Grade": "Full Certified AISI 304 Stainless Steel",
      "Electric Power": "1200W to 1800W / 220V energy efficient operation",
      "Temperature Range": "Up to 100°C with built-in thermal safety cutoff",
      "Applications": "Fast food lines, catering counters, cafeteria pass-throughs"
    }
  },
  {
    "id": "FAY-KIT-21",
    "category": "kitchen",
    "categoryName": "تجهيزات المطابخ والمطاعم والفنادق",
    "categoryNameEn": "Commercial Kitchen & Hotel Equipment",
    "name": "سخان طعام هيت لامب",
    "nameEn": "Infrared Heat Lamp Food Warmer & Carving Station",
    "badge": "إضاءة وتسخين إشعاعي مركز",
    "image": "images/products/kit-real-21.webp",
    "grade": "ستانلس 304 وتشطيبات نحاسية/كروم",
    "finish": "ميرور عاكس فائق البريق أو ساتان",
    "thickness": "قاعدة ستانلس ثقيلة سمك 2.0 مم مع أعمدة مرنة/ثابتة",
    "badgeSpecs": [
      {
        "icon": "fa-certificate",
        "textAr": "ستانلس 304 غذائي",
        "textEn": "Grade 304 Food-Safe",
        "text": "ستانلس 304 غذائي"
      },
      {
        "icon": "fa-shield-alt",
        "textAr": "مقاوم للأحماض والصدأ",
        "textEn": "Rust & Acid Resistant",
        "text": "مقاوم للأحماض والصدأ"
      },
      {
        "icon": "fa-tools",
        "textAr": "لحام أرجون TIG هيدروليكي",
        "textEn": "Argon TIG Seamless Welds",
        "text": "لحام أرجون TIG هيدروليكي"
      },
      {
        "icon": "fa-award",
        "textAr": "مطابق لمعايير HACCP",
        "textEn": "HACCP Food Safety",
        "text": "مطابق لمعايير HACCP"
      }
    ],
    "shortDesc": "سخان طعام إشعاعي بلمبات الأشعة تحت الحمراء (Heat Lamp) مصمم لمحطات تقطيع الروست بيف وشاورما اللحوم والمقليات للحفاظ على قرمشتها وحرارتها.",
    "features": [
      "لمبات حرارية حمراء أو بيضاء معتمدة مخصصة للأغذية مضادة للتطاير والكسر",
      "أذرع مرنة أو حامل قابل لتعديل الارتفاع للتحكم في شدة الحرارة الساقطة",
      "لوح تقطيع خشبي أو بولي إيثيلين أو ستانلس سفلي مع مجرى لتجميع العصارة",
      "تصميم فخم يعطي لمسة استعراضية راقية أمام ضيوف الفندق"
    ],
    "specs": {
      "الخامة المصنعة": "ستانلس ستيل 304 عالي المقاومة",
      "عدد اللمبات": "متوفر بنظام لمبة واحدة، 2 لمبة، 3 لمبات أو مسطح معلق",
      "القدرة": "250 وات لكل لمبة حرارية / 220 فولت",
      "التطبيقات": "بوفيهات الفنادق، محطات الشيف الحي، مطاعم البرجر والستيك"
    },
    "badgeEn": "Radiant Infrared Heat Station",
    "gradeEn": "AISI 304 Stainless with Chrome/Brass options",
    "finishEn": "High-Polished Mirror or Brushed Finish",
    "thicknessEn": "Heavy 2.0 mm weighted base with flexible/rigid arms",
    "shortDescEn": "Infrared heat lamp food warmer and carving station designed for chef carving tables, retaining heat and crispness for roast beef, fries, and appetizers.",
    "featuresEn": [
      "Shatterproof food-safe infrared heat bulbs delivering focused penetrating warmth",
      "Adjustable height stand or flexible gooseneck arms controlling heat intensity",
      "Integrated carving board with juice groove for carving roasts and steaks",
      "Showcase luxury aesthetic ideal for live chef stations and buffet carving"
    ],
    "specsEn": {
      "Material Grade": "Heavy AISI 304 Stainless Steel Construction",
      "Bulb Configurations": "Single, 2-lamp, 3-lamp or suspended ceiling models",
      "Electrical Wattage": "250W per food-safe infrared lamp / 220V",
      "Applications": "Hotel live carving stations, carving buffets, steakhouse pass counters"
    }
  },
  {
    "id": "FAY-KIT-22",
    "category": "kitchen",
    "categoryName": "تجهيزات المطابخ والمطاعم والفنادق",
    "categoryNameEn": "Commercial Kitchen & Hotel Equipment",
    "name": "سخان طعام",
    "nameEn": "Professional Tabletop Stainless Bain-Marie Food Warmer",
    "badge": "حفظ حرارة الأطباق الرئيسية",
    "image": "images/products/kit-real-22.webp",
    "grade": "ستانلس 304 غذائي",
    "finish": "مصنفر ساتان سهل الغسيل",
    "thickness": "جسم 1.2 مم وحوض 1.5 مم",
    "badgeSpecs": [
      {
        "icon": "fa-certificate",
        "textAr": "ستانلس 304 غذائي",
        "textEn": "Grade 304 Food-Safe",
        "text": "ستانلس 304 غذائي"
      },
      {
        "icon": "fa-shield-alt",
        "textAr": "مقاوم للأحماض والصدأ",
        "textEn": "Rust & Acid Resistant",
        "text": "مقاوم للأحماض والصدأ"
      },
      {
        "icon": "fa-tools",
        "textAr": "لحام أرجون TIG هيدروليكي",
        "textEn": "Argon TIG Seamless Welds",
        "text": "لحام أرجون TIG هيدروليكي"
      },
      {
        "icon": "fa-award",
        "textAr": "مطابق لمعايير HACCP",
        "textEn": "HACCP Food Safety",
        "text": "مطابق لمعايير HACCP"
      }
    ],
    "shortDesc": "سخان طعام كهربائي مكتبي (بان ماري) مصنع بالكامل من الستانلس ستيل 304، يستخدم لحفظ الأرز والمكرونة واليخنات الساخنة في خطوط الخدمة والمطاعم الشعبية والإيطالية.",
    "features": [
      "تسخين مائي متوازن يحافظ على نكهة وقوام الطعام دون أن يحترق أو يجف",
      "محبس تصريف ستانلس أمامي لتفريغ المياه بسهولة في نهاية الوردية",
      "غطاء ستانلس لكل حلة أو صينية مع مقبض معزول حرارياً",
      "مقبض تحكم حراري من 30° إلى 90° مع فيوز أمان داخلي"
    ],
    "specs": {
      "الخامة": "ستانلس ستيل 304 صحي معتمد",
      "التكوين": "يتسع لصينية GN 1/1 أو تقسيمات GN 1/2 و GN 1/3",
      "الطاقة": "كهرباء 220V موفرة للطاقة 1200W",
      "الأمان": "فصل تلقائي عند انخفاض منسوب المياه"
    },
    "badgeEn": "Tabletop Commercial Bain-Marie",
    "gradeEn": "Certified AISI 304 Stainless",
    "finishEn": "Satin Brushed Washable Finish",
    "thicknessEn": "1.2 mm outer body / 1.5 mm pressed basin",
    "shortDescEn": "Standard tabletop electric stainless steel bain-marie, maintaining pasta, stews, and sauces at optimal hot serving temperatures throughout commercial service.",
    "featuresEn": [
      "Gentle water bath heating keeping stews, gravies and pasta at peak texture",
      "Front-mounted drainage tap for effortless water drainage at end of shift",
      "Individual fitted stainless lids with heat-insulated stay-cool knobs",
      "Temperature dial regulating from 30°C to 90°C with safety thermal fuse"
    ],
    "specsEn": {
      "Material Grade": "Certified Food-Safe AISI 304 Stainless Steel",
      "Pan Compatibility": "Fits 1x GN 1/1 full size or various GN 1/2 and 1/3 pans",
      "Power Rating": "220V energy efficient 1200W heating element",
      "Safety": "Automatic thermal safety switch when water level is depleted"
    }
  },
  {
    "id": "FAY-KIT-23",
    "category": "kitchen",
    "categoryName": "تجهيزات المطابخ والمطاعم والفنادق",
    "categoryNameEn": "Commercial Kitchen & Hotel Equipment",
    "name": "شوايه جريل غاز",
    "nameEn": "Heavy-Duty Commercial Gas Chargrill & Lava Rock Grill",
    "badge": "نكهة الشواء على الفحم الأصيلة",
    "image": "images/products/kit-real-23.webp",
    "grade": "ستانلس 304 وشبكات زهر ثقيلة",
    "finish": "مصنفر ميكانيكي عالي التحمل",
    "thickness": "صاج 1.5 مم إلى 2.0 مم مع تدعيمات حرارية",
    "badgeSpecs": [
      {
        "icon": "fa-certificate",
        "textAr": "ستانلس 304 غذائي",
        "textEn": "Grade 304 Food-Safe",
        "text": "ستانلس 304 غذائي"
      },
      {
        "icon": "fa-shield-alt",
        "textAr": "مقاوم للأحماض والصدأ",
        "textEn": "Rust & Acid Resistant",
        "text": "مقاوم للأحماض والصدأ"
      },
      {
        "icon": "fa-tools",
        "textAr": "لحام أرجون TIG هيدروليكي",
        "textEn": "Argon TIG Seamless Welds",
        "text": "لحام أرجون TIG هيدروليكي"
      },
      {
        "icon": "fa-award",
        "textAr": "مطابق لمعايير HACCP",
        "textEn": "HACCP Food Safety",
        "text": "مطابق لمعايير HACCP"
      }
    ],
    "shortDesc": "شواية جريل غاز صناعية تعمل بحجارة اللافا البركانية أو العواكس المشعة لمنح الكباب والكفتة والستيك نكهة الشواء بالفحم الحقيقي بدون أدخنة الفحم المزعجة.",
    "features": [
      "شبكات شوي زهر ثقيلة مقسمة ذات أخدود مائل لتوجيه الدهون للدرج السفلي",
      "حجارة لافا بركانية مستوردة توزع الحرارة بانتظام وتعطي ريحة الشواء الفحمية",
      "شعلات غاز استانلس أنبوبية قوية مع صمامات أمان ثرموكابل منفصلة",
      "درج كبير لسحب وتفريغ الرماد والدهون الذائبة بسرعة وأمان"
    ],
    "specs": {
      "الخامة": "ستانلس ستيل AISI 304 عالي المتانة",
      "نوع الوقود": "غاز طبيعي أو غاز أسطوانات مع إشعال بيزو",
      "الأبعاد المتاحة": "عروض 60 سم، 80 سم، 100 سم، 120 سم",
      "الاستخدام": "مطاعم المشويات، الكبابجي، البرجر الأمريكي، الفنادق"
    },
    "badgeEn": "Authentic Charcoal Flavor Gas Grill",
    "gradeEn": "AISI 304 Stainless Body with Heavy Cast-Iron Grates",
    "finishEn": "Heavy Mechanical Brushed Finish",
    "thicknessEn": "1.5 mm to 2.0 mm heavy-gauge stainless steel casing",
    "shortDescEn": "Heavy-duty commercial gas chargrill operating with volcanic lava stones or radiant cast-iron briquettes, providing authentic flame-grilled flavor without messy coal.",
    "featuresEn": [
      "Reversible heavy cast-iron cooking grates with channels directing fat to collector",
      "Volcanic lava stones radiating steady heat and imparting authentic smoky aroma",
      "High-output stainless tube burners with independent thermocouple safety valves",
      "Removable full-width pull-out grease and debris drawer"
    ],
    "specsEn": {
      "Material Grade": "Heavy AISI 304 Stainless Steel Construction",
      "Fuel Type": "Natural Gas or LPG with piezo spark ignition",
      "Available Widths": "Standard 60 cm, 80 cm, 100 cm, 120 cm modules",
      "Applications": "Steakhouses, oriental kebab restaurants, burger joints, hotel lines"
    }
  },
  {
    "id": "FAY-KIT-24",
    "category": "kitchen",
    "categoryName": "تجهيزات المطابخ والمطاعم والفنادق",
    "categoryNameEn": "Commercial Kitchen & Hotel Equipment",
    "name": "فرن بخار استلس",
    "nameEn": "Commercial Stainless Steel Combi Steam Oven",
    "badge": "طهي ذكي متعدد الوظائف",
    "image": "images/products/kit-real-24.webp",
    "grade": "ستانلس 304 داخلي وخارجي فائق النقاء",
    "finish": "مصنفر ساتان هندسي ناعم",
    "thickness": "غرفة طهي سمك 1.5 مم محكمة الغلق ومقاومة لضغط البخار",
    "badgeSpecs": [
      {
        "icon": "fa-certificate",
        "textAr": "ستانلس 304 غذائي",
        "textEn": "Grade 304 Food-Safe",
        "text": "ستانلس 304 غذائي"
      },
      {
        "icon": "fa-shield-alt",
        "textAr": "مقاوم للأحماض والصدأ",
        "textEn": "Rust & Acid Resistant",
        "text": "مقاوم للأحماض والصدأ"
      },
      {
        "icon": "fa-tools",
        "textAr": "لحام أرجون TIG هيدروليكي",
        "textEn": "Argon TIG Seamless Welds",
        "text": "لحام أرجون TIG هيدروليكي"
      },
      {
        "icon": "fa-award",
        "textAr": "مطابق لمعايير HACCP",
        "textEn": "HACCP Food Safety",
        "text": "مطابق لمعايير HACCP"
      }
    ],
    "shortDesc": "فرن بخار كومبي صناعي يجمع بين الطهي بالهواء الساخن والبخار المشبع معاً، يطهي اللحوم والمخبوزات والخضار باحتفاظ 100% بالقيمة الغذائية والنكهة الطازجة.",
    "features": [
      "نظام حقن بخار مباشر مع تحكم إلكتروني في نسبة الرطوبة داخل الغرفة",
      "مروحة توربينية مزدوجة الاتجاه لضمان نضج متجانس لكافة صواني الفرن",
      "باب زجاجي حراري مزدوج أو ثلاثي عاكس للحرارة مع إضاءة هالوجين داخلية",
      "برامج طهي ذكية وشاشة تحكم رقمية مع دورات غسيل وتنظيف ذاتية"
    ],
    "specs": {
      "الخامة": "ستانلس ستيل 304 بالكامل مع غرفة ملحومة بدون حواف حادة",
      "السعة": "سعات 6 صواني، 10 صواني، 20 صينية GN 1/1 أو GN 2/1",
      "مصدر الطاقة": "متوفر بالكهرباء 380V أو بالغاز مع مبادل حراري متطور",
      "الحرارة": "من 30° إلى 300° مئوية مع حساس لدرجة حرارة قلب اللحم (Core Probe)"
    },
    "badgeEn": "Multi-Function Intelligent Combi Oven",
    "gradeEn": "High-Purity AISI 304 Stainless Steel",
    "finishEn": "High-Precision Satin Brushed Finish",
    "thicknessEn": "1.5 mm steam-tight heavy cooking chamber",
    "shortDescEn": "Commercial combi steam convection oven combining forced convection and steam injection, delivering perfect roasts, pastries, and steamed vegetables.",
    "featuresEn": [
      "Direct steam injection system with precision digital humidity control",
      "Reversing bi-directional convection fans ensuring uniform bake across all racks",
      "Double/triple tempered low-emissivity glass door with internal LED illumination",
      "Digital programmable touchscreen controller with automated cleaning cycles"
    ],
    "specsEn": {
      "Material Grade": "Complete AISI 304 stainless steel with seamless cooking chamber",
      "Tray Capacity": "6-tray, 10-tray or 20-tray GN 1/1 or GN 2/1 trolley options",
      "Power Source": "Electric 380V 3-Phase or High-Efficiency Gas with heat exchanger",
      "Temperature Range": "+30°C to +300°C with precision multipoint core food probe"
    }
  },
  {
    "id": "FAY-KIT-25",
    "category": "kitchen",
    "categoryName": "تجهيزات المطابخ والمطاعم والفنادق",
    "categoryNameEn": "Commercial Kitchen & Hotel Equipment",
    "name": "قلايه بطاطس استنالس ستيل",
    "nameEn": "Commercial Stainless Steel Deep Fryer",
    "badge": "قرمشة ذهبية وسرعة استرداد",
    "image": "images/products/kit-real-25.webp",
    "grade": "ستانلس 304 غذائي",
    "finish": "مصنفر ساتان مقاوم للزيوت المحروقة",
    "thickness": "حوض زيت مسحوب هيدروليكياً سمك 1.5 مم",
    "badgeSpecs": [
      {
        "icon": "fa-certificate",
        "textAr": "ستانلس 304 غذائي",
        "textEn": "Grade 304 Food-Safe",
        "text": "ستانلس 304 غذائي"
      },
      {
        "icon": "fa-shield-alt",
        "textAr": "مقاوم للأحماض والصدأ",
        "textEn": "Rust & Acid Resistant",
        "text": "مقاوم للأحماض والصدأ"
      },
      {
        "icon": "fa-tools",
        "textAr": "لحام أرجون TIG هيدروليكي",
        "textEn": "Argon TIG Seamless Welds",
        "text": "لحام أرجون TIG هيدروليكي"
      },
      {
        "icon": "fa-award",
        "textAr": "مطابق لمعايير HACCP",
        "textEn": "HACCP Food Safety",
        "text": "مطابق لمعايير HACCP"
      }
    ],
    "shortDesc": "قلاية بطاطس ومقليات تجارية ستانلس ستيل مصممة لإنتاج كميات هائلة من البطاطس المقرمشة والدجاج، مزودة بنظام منطقة باردة (Cold Zone) لإطالة عمر الزيت.",
    "features": [
      "حوض زيت مسحوب مع منطقة باردة أسفل السخانات لمنع احتراق فتات الطعام",
      "سلال قلي ستانلس شبكية ثقيلة مع مقابض عازلة للحرارة وحامل تعليق لتصفية الزيت",
      "ثرموستات إيطالي دقيق مع ترموستات أمان إضافي (Hi-Limit) لفصل الكهرباء عند الطوارئ",
      "محبس صرف زيت سفلي سريع وآمن لتفريغ وفلترة الزيت يومياً"
    ],
    "specs": {
      "الخامة المصنعة": "ستانلس ستيل AISI 304 بالكامل",
      "سعة الزيت": "سعة 10 لتر، 15 لتر، 20 لتر أو حوض مزدوج 2×10 لتر",
      "التحكم الحراري": "من 50° إلى 190° مئوية",
      "النوع": "متوفرة بنظام مكتبي (Tabletop) أو دولاب قائم على أرجل"
    },
    "badgeEn": "Golden Crispy Fast Heat Recovery",
    "gradeEn": "Certified AISI 304 Stainless",
    "finishEn": "Oil-Resistant Satin Brushed Finish",
    "thicknessEn": "1.5 mm pressed stainless steel oil well",
    "shortDescEn": "Commercial deep fryer engineered for high-output crispy french fries, chicken tenders, and appetizers, featuring a cold zone extending frying oil life.",
    "featuresEn": [
      "Pressed oil well with deep sediment cold zone preventing crumb burning",
      "Heavy wire stainless frying baskets with stay-cool handles and drain hangers",
      "Precision Italian operating thermostat plus independent high-limit safety cut-off",
      "Heavy front oil drain ball valve for safe daily filtering and draining"
    ],
    "specsEn": {
      "Material Grade": "Inside and outside Certified AISI 304 Stainless Steel",
      "Oil Capacity": "10L, 15L, 20L single well or 2x10L double well options",
      "Temperature Range": "50°C to 190°C fast-cycling thermostatic control",
      "Mounting": "Countertop compact unit or freestanding floor cabinet with legs"
    }
  },
  {
    "id": "FAY-KIT-26",
    "category": "kitchen",
    "categoryName": "تجهيزات المطابخ والمطاعم والفنادق",
    "categoryNameEn": "Commercial Kitchen & Hotel Equipment",
    "name": "قلايه زيت غاز",
    "nameEn": "Heavy-Duty Commercial Gas Tube Fryer",
    "badge": "كفاءة احتراق غاز استثنائية",
    "image": "images/products/kit-real-26.webp",
    "grade": "ستانلس 304 عالي المتانة",
    "finish": "مصنفر صناعي متين",
    "thickness": "حوض صلب 1.5 مم مدعم بأنابيب احتراق مغمورة",
    "badgeSpecs": [
      {
        "icon": "fa-certificate",
        "textAr": "ستانلس 304 غذائي",
        "textEn": "Grade 304 Food-Safe",
        "text": "ستانلس 304 غذائي"
      },
      {
        "icon": "fa-shield-alt",
        "textAr": "مقاوم للأحماض والصدأ",
        "textEn": "Rust & Acid Resistant",
        "text": "مقاوم للأحماض والصدأ"
      },
      {
        "icon": "fa-tools",
        "textAr": "لحام أرجون TIG هيدروليكي",
        "textEn": "Argon TIG Seamless Welds",
        "text": "لحام أرجون TIG هيدروليكي"
      },
      {
        "icon": "fa-award",
        "textAr": "مطابق لمعايير HACCP",
        "textEn": "HACCP Food Safety",
        "text": "مطابق لمعايير HACCP"
      }
    ],
    "shortDesc": "قلاية غاز صناعية بنظام أنابيب التبادل الحراري المغمورة في الزيت، توفر أعلى سرعة استرداد للحرارة بين دفعات القلي مع استهلاك اقتصادي للغاز.",
    "features": [
      "أنابيب احتراق غاز مغمورة تنقل الحرارة مباشرة إلى قلب الزيت بسرعة فائقة",
      "منطقة ترسيب باردة واسعة تضمن عدم طعم الحروق في الزيت وتوفير تكاليف التشغيل",
      "صمام غاز أوتوماتيكي مع بيزو إشعال وثرموكابل أمان مطابق لمواصفات الدفاع المدني",
      "شاسيه قائم متين مزود بـ 2 سلة قلي ستانلس كبيرة وشبكة سفلية لحماية الأنابيب"
    ],
    "specs": {
      "الخامة": "ستانلس ستيل AISI 304 مقاوم لدرجات الحرارة العالية",
      "سعة الزيت": "سعة 20 إلى 25 لتر زيت تجاري",
      "قدرة الطاقة": "شعلات غاز بقوة 90,000 إلى 120,000 BTU/ساعة",
      "الاستخدام": "مطاعم البرويد، البرجر، الفاست فود، الفنادق الكبرى"
    },
    "badgeEn": "Tube-Fired Commercial Gas Fryer",
    "gradeEn": "Heavy-Duty AISI 304 Stainless",
    "finishEn": "Heavy Industrial Brushed Finish",
    "thicknessEn": "1.5 mm stainless tank with immersed heat exchange tubes",
    "shortDescEn": "Commercial gas tube fryer with immersed internal heating tubes delivering rapid temperature recovery between heavy batches with low gas consumption.",
    "featuresEn": [
      "Immersed internal heat exchange tubes transferring heat directly to oil core",
      "Large cold sediment zone extending frying oil life and reducing running costs",
      "Certified commercial gas control valve with thermopile pilot safety system",
      "Freestanding stainless cabinet with 2 heavy-duty baskets and tube screen"
    ],
    "specsEn": {
      "Material Grade": "High-Heat Certified AISI 304 Stainless Steel",
      "Oil Capacity": "20 to 25 Liters commercial oil volume",
      "BTU Rating": "High-efficiency burners delivering 90,000 to 120,000 BTU/hr",
      "Applications": "Fried chicken franchises, burger chains, fast food venues, hotels"
    }
  },
  {
    "id": "FAY-KIT-27",
    "category": "kitchen",
    "categoryName": "تجهيزات المطابخ والمطاعم والفنادق",
    "categoryNameEn": "Commercial Kitchen & Hotel Equipment",
    "name": "قلايه غاز 2حوض",
    "nameEn": "Double Well Commercial Gas Deep Fryer",
    "badge": "إنتاجية مضاعفة وفصل تام للأطعمة",
    "image": "images/products/kit-real-27.webp",
    "grade": "ستانلس 304 غذائي",
    "finish": "مصنفر ساتان سهل التنظيف",
    "thickness": "صاج 1.5 مم مع حوضين منفصلين تماماً",
    "badgeSpecs": [
      {
        "icon": "fa-certificate",
        "textAr": "ستانلس 304 غذائي",
        "textEn": "Grade 304 Food-Safe",
        "text": "ستانلس 304 غذائي"
      },
      {
        "icon": "fa-shield-alt",
        "textAr": "مقاوم للأحماض والصدأ",
        "textEn": "Rust & Acid Resistant",
        "text": "مقاوم للأحماض والصدأ"
      },
      {
        "icon": "fa-tools",
        "textAr": "لحام أرجون TIG هيدروليكي",
        "textEn": "Argon TIG Seamless Welds",
        "text": "لحام أرجون TIG هيدروليكي"
      },
      {
        "icon": "fa-award",
        "textAr": "مطابق لمعايير HACCP",
        "textEn": "HACCP Food Safety",
        "text": "مطابق لمعايير HACCP"
      }
    ],
    "shortDesc": "قلاية غاز تجارية مزدوجة بحوضين مستقلين تماماً، تتيح قلي البطاطس في حوض والأسماك أو الدجاج في الحوض الآخر لمنع انتقال النكهات والروائح.",
    "features": [
      "حوضين منفصلين بتحكم حراري وتشغيل غاز مستقل لكل حوض على حدة",
      "4 سلال قلي ستانلس ستيل معلقة لإنجاز طلبيات أوقات الذروة بسرعة قصوى",
      "محبسين منفصلين لتصريف الزيت لسهولة صيانة وتنظيف كل حوض بشكل مستقل",
      "شاسيه ستانلس ستيل كامل مع أرجل قابلة لضبط الارتفاع"
    ],
    "specs": {
      "الخامة المصنعة": "ستانلس ستيل AISI 304 بالكامل",
      "السعة الإجمالية": "2 × 15 لتر أو 2 × 20 لتر زيت",
      "نوع الغاز": "غاز طبيعي أو غاز أسطوانات LPG",
      "الأمان": "صمامات إغلاق غاز تلقائية وحساسات ثرموكابل مزدوجة"
    },
    "badgeEn": "Dual Well High-Output Gas Fryer",
    "gradeEn": "Certified AISI 304 Stainless",
    "finishEn": "Directional Satin Brushed Finish",
    "thicknessEn": "1.5 mm sheet with two independent frying tanks",
    "shortDescEn": "Double well commercial gas deep fryer with completely independent tanks, allowing simultaneous frying of french fries and fish/chicken without flavor transfer.",
    "featuresEn": [
      "Two totally independent tanks with separate burners and temperature knobs",
      "4 heavy stainless wire baskets keeping pace with highest rush-hour demands",
      "Dual separate drain valves allowing independent filtering and oil changes",
      "Full stainless steel cabinet with adjustable stainless bullet legs"
    ],
    "specsEn": {
      "Material Grade": "Inside and outside AISI 304 Stainless Steel",
      "Total Capacity": "2 x 15 Liters or 2 x 20 Liters oil configuration",
      "Gas Supply": "Configured for Natural Gas or LPG lines",
      "Safety": "Dual independent flame-failure gas safety shut-off systems"
    }
  },
  {
    "id": "FAY-KIT-28",
    "category": "kitchen",
    "categoryName": "تجهيزات المطابخ والمطاعم والفنادق",
    "categoryNameEn": "Commercial Kitchen & Hotel Equipment",
    "name": "قلايه قلابه استنالس ستيل",
    "nameEn": "Commercial Stainless Steel Tilting Bratt Pan Fryer",
    "badge": "طهي وقلي وسلق عملاق متعدد المهام",
    "image": "images/products/kit-real-28.webp",
    "grade": "ستانلس 304 وقاع مركب سمك 12 مم",
    "finish": "مصنفر صحي عالي النعومة",
    "thickness": "قاع صلب مركب 10 إلى 12 مم لمنع تشوه المعادن بالحرارة",
    "badgeSpecs": [
      {
        "icon": "fa-certificate",
        "textAr": "ستانلس 304 غذائي",
        "textEn": "Grade 304 Food-Safe",
        "text": "ستانلس 304 غذائي"
      },
      {
        "icon": "fa-shield-alt",
        "textAr": "مقاوم للأحماض والصدأ",
        "textEn": "Rust & Acid Resistant",
        "text": "مقاوم للأحماض والصدأ"
      },
      {
        "icon": "fa-tools",
        "textAr": "لحام أرجون TIG هيدروليكي",
        "textEn": "Argon TIG Seamless Welds",
        "text": "لحام أرجون TIG هيدروليكي"
      },
      {
        "icon": "fa-award",
        "textAr": "مطابق لمعايير HACCP",
        "textEn": "HACCP Food Safety",
        "text": "مطابق لمعايير HACCP"
      }
    ],
    "shortDesc": "قلاية قلابة تجارية (برات بان) ستانلس ستيل متعددة الوظائف للقلي السطحي، السلق، الطبخ، والتحمير للولائم الكبرى مع نظام قلاب هيدروليكي أو يدوي لصب الطعام.",
    "features": [
      "قاع طهي سميك مصفح يوزع الحرارة بالتساوي ويتحمل الصدمات الحرارية العنيفة",
      "نظام إمالة يدوي بعجلة دوارة سلسة أو ماتور كهربائي لتفريغ الطعام بالكامل",
      "غطاء ستانلس متوازن بياي زنبركي مع فتحة لتصريف البخار الزائد",
      "صنبور ماء مدمج لتزويد الحوض بالمياه أثناء عمليات الطبخ والسلق"
    ],
    "specs": {
      "الخامة": "ستانلس ستيل 304 معتمد غذائياً",
      "السعة": "سعات 80 لتر، 120 لتر، 150 لتر للمطابخ المركزية",
      "مصدر الطاقة": "متوفرة بنظام الغاز الطبيعي أو الكهرباء 3 فاز",
      "الحرارة": "تحكم دقيق من 50° إلى 300° مئوية"
    },
    "badgeEn": "Multi-Task Tilting Bratt Pan & Skillet",
    "gradeEn": "AISI 304 with 12 mm Compound Bi-Metal Base",
    "finishEn": "Sanitary High-Smooth Brushed Finish",
    "thicknessEn": "10 mm to 12 mm heavy compound thermal base",
    "shortDescEn": "Commercial heavy tilting bratt pan / braising pan skillet for frying, braising, boiling, and simmering giant volumes with effortless pouring tilt mechanism.",
    "featuresEn": [
      "Compound heavy base plate distributing heat perfectly with zero thermal warp",
      "Precision tilting mechanism (manual handwheel or motorized push-button)",
      "Counterbalanced spring-loaded lid with steam vent control",
      "Integrated swivel water tap for filling water directly into the pan"
    ],
    "specsEn": {
      "Material Grade": "Certified Food-Grade AISI 304 Stainless Steel",
      "Volume Capacities": "80L, 120L, 150L mass catering volumes",
      "Energy Source": "Available in Commercial Gas or 3-Phase Electric power",
      "Temperature Range": "+50°C to +300°C accurate thermostatic regulation"
    }
  },
  {
    "id": "FAY-KIT-29",
    "category": "kitchen",
    "categoryName": "تجهيزات المطابخ والمطاعم والفنادق",
    "categoryNameEn": "Commercial Kitchen & Hotel Equipment",
    "name": "ماكينه شورما",
    "nameEn": "Heavy-Duty Commercial Shawarma Doner Kebab Machine",
    "badge": "شواء وتقمير الشاورما الاحترافي",
    "image": "images/products/kit-real-29.webp",
    "grade": "ستانلس 304 غذائي مقاوم للنار",
    "finish": "مصنفر ميرور براق وسهل إزالة الشحوم",
    "thickness": "شاسيه سمك 1.5 مم مع عواكس حرارية خلفية",
    "badgeSpecs": [
      {
        "icon": "fa-certificate",
        "textAr": "ستانلس 304 غذائي",
        "textEn": "Grade 304 Food-Safe",
        "text": "ستانلس 304 غذائي"
      },
      {
        "icon": "fa-shield-alt",
        "textAr": "مقاوم للأحماض والصدأ",
        "textEn": "Rust & Acid Resistant",
        "text": "مقاوم للأحماض والصدأ"
      },
      {
        "icon": "fa-tools",
        "textAr": "لحام أرجون TIG هيدروليكي",
        "textEn": "Argon TIG Seamless Welds",
        "text": "لحام أرجون TIG هيدروليكي"
      },
      {
        "icon": "fa-award",
        "textAr": "مطابق لمعايير HACCP",
        "textEn": "HACCP Food Safety",
        "text": "مطابق لمعايير HACCP"
      }
    ],
    "shortDesc": "ماكينة شاورما ودونر كباب ستانلس ستيل مصممة لمحلات الشاورما والمطاعم السورية والتركية، تمنح سيخ اللحم أو الفراخ شواء متجانساً ومقرمشاً بأعلى توفير للطاقة.",
    "features": [
      "شعلات غاز سيراميك إشعاعية مستوردة أو سخانات كهرباء إشعاعية عالية الكفاءة",
      "سيخ ستانلس ستيل مصمت مع طبق تحميل وسكاكين تثبيت وشوكات قابلة للتعديل",
      "محرك كهربائي سفلي أو علوي معزول حرارياً يدور في الاتجاهين ببطء وثبات",
      "صينية سفلية ستانلس واسعة لجمع شرائح اللحم المقطعة والدهون الزائدة"
    ],
    "specs": {
      "الخامة المصنعة": "ستانلس ستيل AISI 304 الغذائي المقاوم للحرارة",
      "عدد العيون": "متوفرة بنظام 3 شعلات، 4 شعلات، 5 شعلات، 6 شعلات",
      "حمولة السيخ": "تتحمل أوزان من 30 كجم حتى 120 كجم من اللحم",
      "التحكم": "محبس غاز منفصل لكل شعلة لضبط الحرارة حسب طول سيخ اللحم"
    },
    "badgeEn": "Professional Shawarma & Gyro Roaster",
    "gradeEn": "Fire-Resistant AISI 304 Stainless",
    "finishEn": "Bright Sanitary Mirror & Satin Finish",
    "thicknessEn": "1.5 mm chassis with rear thermal radiant shields",
    "shortDescEn": "Heavy-duty commercial vertical shawarma & doner kebab grill machine engineered for Syrian and Turkish restaurants, providing even roasting and juiciness.",
    "featuresEn": [
      "Imported radiant ceramic gas burners or heavy-duty electric heating elements",
      "Solid stainless skewer spit with adjustable locking disc and meat pins",
      "Thermal-protected heavy motorized rotation unit operating in dual directions",
      "Deep stainless base tray collecting sliced meat shavings and drippings"
    ],
    "specsEn": {
      "Material Grade": "Heat-Resistant Certified AISI 304 Stainless Steel",
      "Burners Configuration": "Available in 3-burner, 4-burner, 5-burner, 6-burner lines",
      "Meat Capacity": "Accommodates 30 kg up to 120 kg meat skewers",
      "Independent Control": "Individual gas valve control for each burner zone"
    }
  },
  {
    "id": "FAY-KIT-30",
    "category": "kitchen",
    "categoryName": "تجهيزات المطابخ والمطاعم والفنادق",
    "categoryNameEn": "Commercial Kitchen & Hotel Equipment",
    "name": "محطة طهي وتحضير متكاملة",
    "nameEn": "Integrated Commercial Cooking & Preparation Suite",
    "badge": "خط طهي رئيسي متكامل (Cooking Island)",
    "image": "images/products/kit-real-30.webp",
    "grade": "ستانلس 304 عالي التحمل",
    "finish": "مصنفر ساتان مستمر بقرصة موحدة",
    "thickness": "قرصة علوية قطعة واحدة سمك 2.0 مم إلى 3.0 مم",
    "badgeSpecs": [
      {
        "icon": "fa-certificate",
        "textAr": "ستانلس 304 غذائي",
        "textEn": "Grade 304 Food-Safe",
        "text": "ستانلس 304 غذائي"
      },
      {
        "icon": "fa-shield-alt",
        "textAr": "مقاوم للأحماض والصدأ",
        "textEn": "Rust & Acid Resistant",
        "text": "مقاوم للأحماض والصدأ"
      },
      {
        "icon": "fa-tools",
        "textAr": "لحام أرجون TIG هيدروليكي",
        "textEn": "Argon TIG Seamless Welds",
        "text": "لحام أرجون TIG هيدروليكي"
      },
      {
        "icon": "fa-award",
        "textAr": "مطابق لمعايير HACCP",
        "textEn": "HACCP Food Safety",
        "text": "مطابق لمعايير HACCP"
      }
    ],
    "shortDesc": "جزيرة ومحطة طهي وتحضير مركزية متكاملة تجمع البوتجازات، الجريلات، القلايات، والبان ماري في وحدة ستانلس ستيل واحدة بدون فواصل لسهولة الحركة والنظافة المطلقة.",
    "features": [
      "سطح علوي متصل قطعة واحدة (Monoblock) بدون أي فواصل تجمع الأوساخ أو الدهون",
      "توزيع هندسي مريح مدروس لمسارات حركة الشيفات في أوقات العمل المكثفة",
      "كاونترات تخزين وأرفف سفلية مدعمة ومغلقة بأبواب ستانلس",
      "تمديدات غاز وكهرباء وسباكة داخلية آمنة ومجمعة في نقطة تغذية رئيسية"
    ],
    "specs": {
      "الخامة": "ستانلس ستيل AISI 304 فائق المتانة",
      "التصميم": "تصميم هندسي مخصص بنظام CAD ثلاثي الأبعاد حسب مساحة مطبخ العميل",
      "المكونات المدمجة": "حسب الطلب: شعلات غاز + بلاطات + جريل + قلاية + حوض تحضير",
      "الشهادات": "مطابقة تامة لاشتراطات سلامة الغذاء والصحة المهنية HACCP"
    },
    "badgeEn": "Central Integrated Kitchen Island Suite",
    "gradeEn": "Certified Heavy AISI 304 Stainless",
    "finishEn": "Seamless Monoblock Brushed Worktop",
    "thicknessEn": "Continuous 2.0 mm to 3.0 mm heavy monoblock top",
    "shortDescEn": "Central cooking island suite integrating burners, griddles, fryers, and bains-marie into a single seamless stainless steel monoblock worktop.",
    "featuresEn": [
      "Continuous seamless monoblock worktop eliminating all dirt-trapping joints",
      "Ergonomically engineered layout optimizing workflow for kitchen brigading",
      "Integrated under-counter storage compartments and modular warming cabinets",
      "Concealed central utility distribution channel for safe gas, water and power"
    ],
    "specsEn": {
      "Material Grade": "Heavy-Duty Certified AISI 304 Stainless Steel",
      "Custom Engineering": "Custom 3D CAD design tailored to client floor plan",
      "Modules Included": "Configurable: Gas ranges, electric tops, griddle, fryers, sinks",
      "Hygiene Compliance": "100% HACCP food safety and international hygiene compliance"
    }
  },
  {
    "id": "FAY-KIT-31",
    "category": "kitchen",
    "categoryName": "تجهيزات المطابخ والمطاعم والفنادق",
    "categoryNameEn": "Commercial Kitchen & Hotel Equipment",
    "name": "مسطح كهربا 2 عين بلاطه",
    "nameEn": "2-Plate Commercial Electric Boiling Top",
    "badge": "مسطح طهي كهربائي مدمج",
    "image": "images/products/kit-real-31.webp",
    "grade": "ستانلس 304 غذائي",
    "finish": "مصنفر ساتان مقاوم للبصمات",
    "thickness": "سطح مسحوب سمك 1.2 مم إلى 1.5 مم",
    "badgeSpecs": [
      {
        "icon": "fa-certificate",
        "textAr": "ستانلس 304 غذائي",
        "textEn": "Grade 304 Food-Safe",
        "text": "ستانلس 304 غذائي"
      },
      {
        "icon": "fa-shield-alt",
        "textAr": "مقاوم للأحماض والصدأ",
        "textEn": "Rust & Acid Resistant",
        "text": "مقاوم للأحماض والصدأ"
      },
      {
        "icon": "fa-tools",
        "textAr": "لحام أرجون TIG هيدروليكي",
        "textEn": "Argon TIG Seamless Welds",
        "text": "لحام أرجون TIG هيدروليكي"
      },
      {
        "icon": "fa-award",
        "textAr": "مطابق لمعايير HACCP",
        "textEn": "HACCP Food Safety",
        "text": "مطابق لمعايير HACCP"
      }
    ],
    "shortDesc": "مسطح طهي كهربائي 2 عين بلاطة مصمتة مصنع من الستانلس ستيل 304، خيار مثالي للمطابخ الصغيرة، خطوط البوفيه، كاونترات القهوة، ووحدات تحضير الوجبات السريعة.",
    "features": [
      "بلاطتين طهي كهربائيتين من حديد الزهر الصلب عالي التوصيل الحراري",
      "مفتاحي تحكم مستقلين بستة مستويات للحرارة لكل عين",
      "حافة علوية مقلوبة لمنع انسكاب السوائل المغلية خارج الجهاز",
      "أرجل مطاطية مانعة للانزلاق لتثبيت آمن على أسطح الترابيزات"
    ],
    "specs": {
      "الخامة المصنعة": "ستانلس ستيل 304 غير قابل للصدأ",
      "القدرة الكهربائية": "2 × 2000W أو 2 × 2600W / 220V أو 380V",
      "الأبعاد": "40×70×30 سم تقريباً تصميم قياسي مدمج",
      "الأمان": "حماية أوتوماتيكية من ارتفاع درجات الحرارة الزائدة"
    },
    "badgeEn": "Compact 2-Plate Electric Cooktop",
    "gradeEn": "Certified AISI 304 Stainless",
    "finishEn": "Satin Brushed Anti-Fingerprint",
    "thicknessEn": "1.2 mm to 1.5 mm deep-drawn stainless surface",
    "shortDescEn": "Compact 2-plate commercial electric solid hotplate cooktop fabricated from AISI 304 stainless steel, perfect for satellite prep stations and small kitchens.",
    "featuresEn": [
      "Two heavy solid cast-iron electric boiling plates with fast heat conduction",
      "Two independent 6-position thermostatic switches for precise simmering/boiling",
      "Anti-spill pressed top edge containing boiled-over liquids safely",
      "Non-slip rubber feet ensuring stability on countertop prep tables"
    ],
    "specsEn": {
      "Material Grade": "Inside and outside Certified AISI 304 Stainless Steel",
      "Power Rating": "2 x 2000W or 2 x 2600W / 220V or 380V options",
      "Dimensions": "Standard compact 40 x 70 x 30 cm modular footprint",
      "Safety": "Automatic thermal overload cutoff protector"
    }
  },
  {
    "id": "FAY-KIT-32",
    "category": "kitchen",
    "categoryName": "تجهيزات المطابخ والمطاعم والفنادق",
    "categoryNameEn": "Commercial Kitchen & Hotel Equipment",
    "name": "هود شفط بالفلاتر",
    "nameEn": "Commercial Exhaust Hood with Baffle Grease Filters",
    "badge": "نظام شفط وتهوية معتمد",
    "image": "images/products/kit-real-32.webp",
    "grade": "ستانلس 304 غذائي معتمد",
    "finish": "مصنفر ساتان اتجاهي سهل المسح",
    "thickness": "صاج 1.2 مم إلى 1.5 مم ملحوم بالأرجون بالكامل",
    "badgeSpecs": [
      {
        "icon": "fa-certificate",
        "textAr": "ستانلس 304 غذائي",
        "textEn": "Grade 304 Food-Safe",
        "text": "ستانلس 304 غذائي"
      },
      {
        "icon": "fa-shield-alt",
        "textAr": "مقاوم للأحماض والصدأ",
        "textEn": "Rust & Acid Resistant",
        "text": "مقاوم للأحماض والصدأ"
      },
      {
        "icon": "fa-tools",
        "textAr": "لحام أرجون TIG هيدروليكي",
        "textEn": "Argon TIG Seamless Welds",
        "text": "لحام أرجون TIG هيدروليكي"
      },
      {
        "icon": "fa-award",
        "textAr": "مطابق لمعايير HACCP",
        "textEn": "HACCP Food Safety",
        "text": "مطابق لمعايير HACCP"
      }
    ],
    "shortDesc": "هود شفط مركزي للمطابخ التجارية مصنع من الستانلس ستيل 304 مزود بفلاتر بافل (Baffle Filters) ستانلس ستيل لحجز 95% من الزيوت والشحوم وتصريفها في مجرى مخصص.",
    "features": [
      "فلاتر بافل ستانلس ستيل متاهية تحجز الشحوم والزيوت وتمنع وصولها لمجرى الهواء",
      "مجرى داخلي متصل لتجميع الزيوت المسالة مع بزبوز صرف سفلي للتفريغ السهل",
      "لحامات أرجون TIG متصلة مانعة لتسرب الزيوت والدهون تماماً خارج الهود",
      "كشافات إضاءة ستانلس مدمجة مقاومة للأبخرة والحرارة العالية IP65"
    ],
    "specs": {
      "الخامة": "ستانلس ستيل AISI 304 الغذائي غير قابل للاشتعال",
      "النوع": "هود جداري (Wall Mounted) أو هود جزيرة مركزي (Island Hood)",
      "المقاسات": "تصنيع هندسي مخصص يبدأ من متر وحتى 10 أمتار حسب خط الطهي",
      "مخارج الهواء": "مخارج دكت مجهزة بدمبرات تحكم ومصايد شرز لمنع انتشار الحريق"
    },
    "badgeEn": "Certified Commercial Ventilation & Filtration",
    "gradeEn": "Certified AISI 304 Stainless Steel",
    "finishEn": "Directional Satin Brushed Finish",
    "thicknessEn": "1.2 mm to 1.5 mm fully argon TIG welded sheet",
    "shortDescEn": "Commercial kitchen exhaust hood manufactured from AISI 304 stainless steel with stainless baffle grease filters, capturing 95% of grease and vapor.",
    "featuresEn": [
      "Removable stainless steel labyrinth baffle filters trapping grease effectively",
      "Continuous internal grease gutter with drain plug for easy periodic cleaning",
      "Continuous liquid-tight argon TIG welds preventing grease dripping on chefs",
      "Integrated vapor-proof IP65 recessed LED illumination fixtures"
    ],
    "specsEn": {
      "Material Grade": "Non-combustible Certified AISI 304 Stainless Steel",
      "Type": "Wall-mounted canopy or central ceiling-suspended island canopy",
      "Sizes": "Custom engineering from 1.0 meter up to 10+ meters continuous run",
      "Duct Spigots": "Pre-fabricated exhaust collars with fire damper fittings"
    }
  },
  {
    "id": "FAY-KIT-33",
    "category": "kitchen",
    "categoryName": "تجهيزات المطابخ والمطاعم والفنادق",
    "categoryNameEn": "Commercial Kitchen & Hotel Equipment",
    "name": "وحده تجهيز رئيسيه للمطابخ رئيسيه",
    "nameEn": "Heavy-Duty Central Kitchen Preparation Island Table",
    "badge": "محور عمليات التجهيز والإعداد",
    "image": "images/products/kit-real-33.webp",
    "grade": "ستانلس 304 ثقيل معتمد للأغذية",
    "finish": "مصنفر ساتان أملس مضاد للبكتيريا",
    "thickness": "قرصة عمل صلبة 1.5 مم إلى 2.0 مم مدعمة",
    "badgeSpecs": [
      {
        "icon": "fa-certificate",
        "textAr": "ستانلس 304 غذائي",
        "textEn": "Grade 304 Food-Safe",
        "text": "ستانلس 304 غذائي"
      },
      {
        "icon": "fa-shield-alt",
        "textAr": "مقاوم للأحماض والصدأ",
        "textEn": "Rust & Acid Resistant",
        "text": "مقاوم للأحماض والصدأ"
      },
      {
        "icon": "fa-tools",
        "textAr": "لحام أرجون TIG هيدروليكي",
        "textEn": "Argon TIG Seamless Welds",
        "text": "لحام أرجون TIG هيدروليكي"
      },
      {
        "icon": "fa-award",
        "textAr": "مطابق لمعايير HACCP",
        "textEn": "HACCP Food Safety",
        "text": "مطابق لمعايير HACCP"
      }
    ],
    "shortDesc": "وحدة وترابيزة تجهيز مركزية كبرى للمطابخ الفندقية تجمع بين سطح تقطيع عريض، أرفف سفلية لتخزين المعدات، وأدراج وأحواض تحضير جانبية لتسريع وتيرة العمل.",
    "features": [
      "سطح عمل علوي عريض مدعم بألواح خشب معزولة وطبقة كاتمة للصوت لتقليل الضوضاء",
      "أرجل مواسير ستانلس ستيل قطاع 50 مم مع عوارض تدعيم أرضية صلبة",
      "إمكانية دمج فتحات لإلقاء المخلفات (Scrap Chute) مباشرة في سلال النفايات السفلية",
      "أرفف علوية معلقة (Over-Shelves) من دورين لتنظيم أدوات المطبخ والتوابل"
    ],
    "specs": {
      "الخامة المصنعة": "ستانلس ستيل AISI 304 الغذائي غير المغناطيسي",
      "الأبعاد": "تصنيع حسب المساحة الهندسية (مثال 200×100×85 سم)",
      "الحمولة": "تتحمل أوزان تشغيل وضغط حتى 500 كجم بأمان تام",
      "الضمان": "ضمان 10 سنوات على المتانة والشاسيه وجودة اللحامات"
    },
    "badgeEn": "Core Food Prep & Fabrication Center",
    "gradeEn": "Certified Heavy AISI 304 Food Grade",
    "finishEn": "Ultra-Smooth Anti-Bacterial Satin Finish",
    "thicknessEn": "1.5 mm to 2.0 mm heavy top reinforced with sound deadening",
    "shortDescEn": "Heavy-duty central kitchen prep island table combining an expansive food prep surface, reinforced lower shelving, drawer units, and optional scrap chutes.",
    "featuresEn": [
      "Heavy-duty sound-deadened worktop absorbing impact noise during chopping",
      "50 mm heavy stainless tubular legs with welded crossbar reinforcement",
      "Optional built-in waste chute directing scrap food directly into lower bins",
      "Optional 2-tier overhead stainless shelving for spices and prep utensils"
    ],
    "specsEn": {
      "Material Grade": "Heavy Non-Magnetic Certified AISI 304 Stainless Steel",
      "Dimensions": "Custom engineered to kitchen layout (e.g. 200x100x85 cm)",
      "Load Capacity": "Engineered to withstand heavy dynamic loads up to 500 kg",
      "Warranty": "10-year structural warranty on frame and welds"
    }
  },
  {
    "id": "FAY-KIT-34",
    "category": "kitchen",
    "categoryName": "تجهيزات المطابخ والمطاعم والفنادق",
    "categoryNameEn": "Commercial Kitchen & Hotel Equipment",
    "name": "وحده طهي متكامله مع قاعده تبريد سفليه",
    "nameEn": "Commercial Cooking Suite with Refrigerated Base",
    "badge": "تكنولوجيا الطهي مع التبريد الفوري",
    "image": "images/products/kit-real-34.webp",
    "grade": "ستانلس 304 غذائي معتمد",
    "finish": "مصنفر ساتان فخم ومقاوم للبصمات",
    "thickness": "صاج 1.5 مم للسطح و 1.2 مم لكابينة التبريد",
    "badgeSpecs": [
      {
        "icon": "fa-certificate",
        "textAr": "ستانلس 304 غذائي",
        "textEn": "Grade 304 Food-Safe",
        "text": "ستانلس 304 غذائي"
      },
      {
        "icon": "fa-shield-alt",
        "textAr": "مقاوم للأحماض والصدأ",
        "textEn": "Rust & Acid Resistant",
        "text": "مقاوم للأحماض والصدأ"
      },
      {
        "icon": "fa-tools",
        "textAr": "لحام أرجون TIG هيدروليكي",
        "textEn": "Argon TIG Seamless Welds",
        "text": "لحام أرجون TIG هيدروليكي"
      },
      {
        "icon": "fa-award",
        "textAr": "مطابق لمعايير HACCP",
        "textEn": "HACCP Food Safety",
        "text": "مطابق لمعايير HACCP"
      }
    ],
    "shortDesc": "وحدة طهي ذكية تجمع بين مسطح الطهي العلوي (شعلات أو بلاطات أو جريل) مع قاعدة تبريد سفلية بأدراج لحفظ اللحوم والدواجن باردة عند متناول يد الشيف مباشرة.",
    "features": [
      "قاعدة تبريد سفلية بأدراج ستانلس تتحمل صواني Gastronorm بكفاءة حفظ تامة",
      "توفير زمن انتقال الطاهي بين الثلاجات البعيدة ومسطحات الطهي بأكثر من 60%",
      "عزل حراري سميك بين السطح الساخن وقاعدة التبريد السفلية لضمان عدم تأثر البرودة",
      "محرك تبريد ذكي مدمج مع نظام تدفق هواء أمامي لا يتأثر بحرارة المطبخ"
    ],
    "specs": {
      "الخامة المصنعة": "ستانلس ستيل AISI 304 بالكامل",
      "المكونات العلوية": "شعلات غاز أو مسطح كهربائي أو شواية حسب اختيار العميل",
      "نطاق تبريد القاعدة": "-2° مئوية إلى +8° مئوية مع تحكم ديجيتال مستقل",
      "الأدراج": "أدراج ستانلس ستيل هيدروليكية ذاتية الإغلاق بمجاري تلسكوبية ثقيلة"
    },
    "badgeEn": "Cooktop with Refrigerated Base System",
    "gradeEn": "Certified AISI 304 Stainless",
    "finishEn": "Premium Satin Brushed Anti-Fingerprint",
    "thicknessEn": "1.5 mm top worktop / 1.2 mm refrigerated base",
    "shortDescEn": "Advanced commercial cooking suite combining top cooking elements with an integrated refrigerated drawer base below, keeping raw proteins cold right at the cook line.",
    "featuresEn": [
      "Heavy refrigerated drawer base accommodating full-depth GN 1/1 containers",
      "Reduces chef transit time between walk-in coolers and cookline by over 60%",
      "Heavy thermal heat barrier isolating cooking heat from lower refrigerated cavities",
      "Front-breathing compressor unit designed specifically for tight hot cooklines"
    ],
    "specsEn": {
      "Material Grade": "Inside and outside Certified AISI 304 Stainless Steel",
      "Top Configuration": "Gas burners, electric plates, or griddle tailored to order",
      "Base Temperature": "-2°C to +8°C with independent digital LED controller",
      "Drawers": "Self-closing heavy-duty telescopic stainless drawer runners"
    }
  }
];

// معلومات الشركة الرسمية
const COMPANY_INFO = {
  "nameAr": "الفايروز استيل لتجهيزات المطابخ والفنادق والسلالم الستانلس",
  "nameEn": "Al Fayrouz Steel - Stainless Steel Kitchen & Hotel Equipment",
  "phone": "01012047521",
  "phoneFormatted": "01012047521",
  "whatsappNumber": "201108314970",
  "whatsappFormatted": "01108314970",
  "facebookKitchen": "https://www.facebook.com/profile.php?id=61580929554967",
  "facebookStairs": "https://www.facebook.com/profile.php?id=61592318002713",
  "facebookUrl": "https://www.facebook.com/profile.php?id=61580929554967",
  "addressAr": "جمهورية مصر العربية - خدمة وتوريد لكافة المحافظات والمشروعات الكبرى",
  "addressEn": "Egypt - Supplying nationwide projects & luxury venues",
  "workingHoursAr": "السبت - الخميس: 9:00 ص - 10:00 م | الجمعة: خدمة الطوارئ والمقايسات",
  "workingHoursEn": "Sat - Thu: 9:00 AM - 10:00 PM | Friday: Emergency & Site Visits",
  "email": "contact@alfayrouzsteel.com"
};

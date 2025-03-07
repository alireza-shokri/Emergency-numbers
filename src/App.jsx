const information = [
  {
    title: "خودکشی و خود آزاری",
    desc: "افکار خودکشی می‌تونه ترسناک و گیج­‌کننده باشه. اگر نگران خودتون یا یکی از اطرافیانتون هستین بهتره قبل از هر کاری با یک نفر صحبت کنین. همه‌ی سرویس‌ها رایگان هستند و هیچ درخواستی برای افشای هویت شما نمی‌کنند و تمامی اطلاعات و حرف‌های شما، محرمانه است.",

    options: [
      {
        optionTitle: "خط ملی اورژانس اجتماعی",
        optionDesc:
          "افکار خودکشی می‌تونه ترسناک و گیج­‌کننده باشه. اگر نگران خودتون یا یکی از اطرافیانتون هستین بهتره قبل از هر کاری با یک نفر صحبت کنین. همه‌ی سرویس‌ها رایگان هستند و هیچ درخواستی برای افشای هویت شما نمی‌کنند و تمامی اطلاعات و حرف‌های شما، محرمانه است.",
        Btn: [{ btnLabel: "تماس ", connect: "tel:123" }],
      },
      {
        optionTitle: "سامانه نوشتاری بحران",
        optionDesc:
          "یک سرویس ملی رایگان که ۲۴ ساعته به فارسی‌زبانانی که در شرایط بد عاطفی قرار دارند، مشاور بحران ارائه می‌دهد.",
        Btn: [
          {
            btnLabel: "چـت آنلاین",
            connect: "https://irancrisisline.org/get-help/text/",
          },
        ],
      },
      {
        optionTitle: "مشاوره تلفنی بهزیستی",
        optionDesc:
          "شماره ۱۴۸۰، خط مشاوره رایگان سازمان بهزیستی، از ۸ صبح تا ۲۴ شب خدمات مشاوره در زمینه‌های مختلف را توسط متخصصان آموزش‌دیده ارائه می‌دهد.",
        Btn: [{ btnLabel: "تماس ", connect: "tel:1480" }],
      },
    ],
  },

  // 2
  {
    title: "خشونت خانگی و آزار فیزیکی",
    desc: "اگر شما یا کسی که می‌شناسید قربانی خشونت خانگی یا آزار فیزیکی هستید، تنها نیستید. کمک در دسترس است و متخصصان آموزش‌دیده آماده‌اند تا به شما کمک کنند. تماس‌های شما محرمانه خواهد ماند.",

    options: [
      {
        optionTitle: "اورژانس اجتماعی - خشونت خانگی",
        optionDesc:
          "خط تلفن ۱۲۳ به صورت ۲۴ ساعته آماده کمک‌رسانی به قربانیان خشونت خانگی است. این خدمات شامل مشاوره، حمایت و در صورت نیاز اقدامات اضطراری می‌شود.",
        Btn: [{ btnLabel: "تماس ", connect: "tel:123" }],
      },
      {
        optionTitle: "صدای یارا",
        optionDesc:
          "یک سازمان غیردولتی که به قربانیان خشونت خانگی کمک می‌کند و خدمات مشاوره حقوقی و روانشناسی ارائه می‌دهد.",
        Btn: [
          { btnLabel: "تماس", connect: "tel:02188531109" },
          { btnLabel: "وب سایت", connect: "https://www.irsprc.org/" },
        ],
      },
      {
        optionTitle: "خانه امن",
        optionDesc:
          "سرپناه موقت برای زنان و کودکانی که قربانی خشونت خانگی هستند. برای دسترسی به این خدمات با اورژانس اجتماعی (۱۲۳) تماس بگیرید.",
        Btn: [{ btnLabel: "تماس ", connect: "tel:123" }],
      },
    ],
  },

  //3

  {
    title: "اعتیاد و سوء مصرف مواد",
    desc: "اعتیاد و سوءمصرف مواد می‌تونه چالش‌های بزرگی رو به وجود بیاره. اگر شما یا فردی از نزدیکانتون با این مسئله روبرو هستین، صحبت کردن با یک مشاور تخصصی می‌تونه اولین قدم مؤثر باشه.",

    options: [
      {
        optionTitle: "خط ملی اعتیاد",
        optionDesc:
          "برای پیشگیری، راهنمایی در درمان اعتیاد و ارجاع به مراکز مجاز فعالیت می‌کند. ساعات تماس: هر روز، ۸ صبح تا ۸ شب.",
        Btn: [{ btnLabel: "تماس ", connect: "tel:09628" }],
      },
    ],
  },

  //4
  {
    title: "بیماری‌های سخت درمان",
    desc: "ممکنه که خودت یا یکی از عزیزانت بیماری‌های سخت درمانی داشته باشه. هنوز امید هست، ناراحت نباش. اینجا میتونی منابعی برای کمک به خودت و دیگران پیدا کنی.",

    options: [
      {
        optionTitle: "مراکز آزمایش رایگان ایدز و مشاوره بیماری های رفتاری",
        optionDesc:
          "در این مراکز علاوه بر مشاوره، آزمایش ایدز و تشخیص HIV به صورت رایگان انجام می‌شود.",
        Btn: [
          {
            btnLabel: "مشاهده لیست مراکز ",
            connect: "https://heretohelp.ir/free-hiv-test-centers",
          },
        ],
      },
      {
        optionTitle: "زنان سرپرست خانوار مبتلا به ایدز",
        optionDesc:
          "سامانه تلفنی ۰۲۱۵۳۸۶۵ مربوط به سازمان مردم نهاد احیا است که بطور مشخص در زمینه پیشگیری و اطلاع­‌رسانی بیماری ایدز، توانمندسازی و حرفه­‌آموزی زنان سرپرست خانوار مبتلا به بیماری ایدز فعالیت می­‌کند. ساعات تماس: شنبه تا چهارشنبه ۸ صبح تا ۱۷ عصر",
        Btn: [{ btnLabel: "تماس ", connect: "tel:09628" }],
      },
    ],
  },
  //5

  {
    title: "عمومی",
    desc: "ممکنه که خودت یا یکی از عزیزانت بیماری‌های سخت درمانی داشته باشه. هنوز امید هست، ناراحت نباش. اینجا میتونی منابعی برای کمک به خودت و دیگران پیدا کنی.",

    options: [
     
        {
          optionTitle: "پلیس",
          Btn: [{ btnLabel: "تماس", connect: "tel:110" }],
        },
        {
          optionTitle: "آتش نشان",
          Btn: [{ btnLabel: "تماس", connect: "tel:125" }],
        },
        {
          optionTitle: "اورژانس",
          Btn: [{ btnLabel: "تماس", connect: "tel:115" }],
        },
        {
          optionTitle: "پلیس فتا",
          Btn: [{ btnLabel: "تماس", connect: "tel:81818" }],
        },
        {
          optionTitle: "تامین اجتماعی",
          Btn: [{ btnLabel: "تماس", connect: "tel:142" }],
        },
        {
          optionTitle: "ارتباط با دولت",
          Btn: [{ btnLabel: "تماس", connect: "tel:111" }],
        },
        {
          optionTitle: "هلال احمر",
          Btn: [{ btnLabel: "تماس", connect: "tel:112" }],
        },
        {
          optionTitle: "اداره اطلاعات",
          Btn: [{ btnLabel: "تماس", connect: "tel:113" }],
        },
        {
          optionTitle: "اطلاعات سپاه",
          Btn: [{ btnLabel: "تماس", connect: "tel:114" }],
        },
        {
          optionTitle: "حراست انتظامی",
          Btn: [{ btnLabel: "تماس", connect: "tel:116" }],
        },
        {
          optionTitle: "اطلاعات تلفن ثابت",
          Btn: [{ btnLabel: "تماس", connect: "tel:118" }],
        },
        {
          optionTitle: "خرابی تلفن ثابت",
          Btn: [{ btnLabel: "تماس", connect: "tel:117" }],
        },
        {
          optionTitle: "اعلام ساعت رسمی",
          Btn: [{ btnLabel: "تماس", connect: "tel:119" }],
        },
        {
          optionTitle: "پلیس راه (اعلام تصادفات)",
          Btn: [{ btnLabel: "تماس", connect: "tel:120" }],
        },
        {
          optionTitle: "حوادث برق",
          Btn: [{ btnLabel: "تماس", connect: "tel:121" }],
        },
        {
          optionTitle: "حوادث آب",
          Btn: [{ btnLabel: "تماس", connect: "tel:122" }],
        },
        {
          optionTitle: "حوادث گاز",
          Btn: [{ btnLabel: "تماس", connect: "tel:194" }],
        },
        {
          optionTitle: "بهزیستی",
          Btn: [{ btnLabel: "تماس", connect: "tel:123" }],
        },
        {
          optionTitle: "مبارزه با گرانفروشی",
          Btn: [{ btnLabel: "تماس", connect: "tel:124" }],
        },
        {
          optionTitle: "دادگستری",
          Btn: [{ btnLabel: "تماس", connect: "tel:129" }],
        },
        {
          optionTitle: "امداد جنگل",
          Btn: [{ btnLabel: "تماس", connect: "tel:1504" }],
        },
        {
          optionTitle: "داروخانه‌های شبانه‌روزی",
          Btn: [{ btnLabel: "تماس", connect: "tel:191" }],
        },
        {
          optionTitle: "شماره تهیه داروهای کمیاب",
          Btn: [{ btnLabel: "تماس", connect: "tel:1490" }],
        },
        {
          optionTitle: "اطلاعات پرواز فرودگاه",
          Btn: [{ btnLabel: "تماس", connect: "tel:199" }],
        },
        {
          optionTitle: "گردشگری استان‌ها",
          Btn: [{ btnLabel: "تماس", connect: "tel:9669" }],
        },
        {
          optionTitle: "هواشناسی",
          Btn: [{ btnLabel: "تماس", connect: "tel:134" }],
        },
        {
          optionTitle: "جهاد کشاورزی",
          Btn: [{ btnLabel: "تماس", connect: "tel:131" }],
        },
        {
          optionTitle: "ارتباط با قوه مقننه",
          Btn: [{ btnLabel: "تماس", connect: "tel:132" }],
        },
        {
          optionTitle: "تاکسی برون شهری",
          Btn: [{ btnLabel: "تماس", connect: "tel:133" }],
        },
        {
          optionTitle: "شهرداری",
          Btn: [{ btnLabel: "تماس", connect: "tel:131" }],
        },
        {
          optionTitle: "شکایت از اورژانس",
          Btn: [{ btnLabel: "تماس", connect: "tel:190" }],
        },
        {
          optionTitle: "تقویم و ساعات شرعی",
          Btn: [{ btnLabel: "تماس", connect: "tel:192" }],
        },
        {
          optionTitle: "اداره پست",
          Btn: [{ btnLabel: "تماس", connect: "tel:193" }],
        },
        {
          optionTitle: "شکایت از مخابرات",
          Btn: [{ btnLabel: "تماس", connect: "tel:195" }],
        },
        {
          optionTitle: "شکایت نیرو انتظامی",
          Btn: [{ btnLabel: "تماس", connect: "tel:197" }],
        },
        {
          optionTitle: "حفظ منابع طبیعی",
          Btn: [{ btnLabel: "تماس", connect: "tel:1504" }],
        },
        {
          optionTitle: "حفظ محیط زیست",
          Btn: [{ btnLabel: "تماس", connect: "tel:1540" }],
        },
        {
          optionTitle: "مشاوره بهزیستی",
          Btn: [{ btnLabel: "تماس", connect: "tel:1480" }],
        },
        {
          optionTitle: "وزارت بهداشت",
          Btn: [{ btnLabel: "تماس", connect: "tel:1490" }],
        },
        {
          optionTitle: "آموزش و پرورش",
          Btn: [{ btnLabel: "تماس", connect: "tel:1520" }],
        },
        {
          optionTitle: "پزشک خانواده",
          Btn: [{ btnLabel: "تماس", connect: "tel:1590" }],
        },
        {
          optionTitle: "هلال احمر",
          Btn: [{ btnLabel: "تماس", connect: "tel:112" }],
        },
      ]
  },
];
import Accordion from "./components/Content/Accordion";
import Header from "./components/Header/Header";
import "./app.css";
export default function App() {
  return (
    <div classbtnLabel="app">
      <Header />
      <Accordion information={information} />
    </div>
  );
}

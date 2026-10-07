export type Prayer = { slug: string; title: string; description: string; category: string; body: string; guide?: string[]; note?: string; source?: string };
export const prayers: Prayer[] = [
  {
    "slug": "otce-nas",
    "title": "Otče náš",
    "description": "Modlitba, ktorú nás naučil Ježiš.",
    "category": "základné",
    "body": "Otče náš, ktorý si na nebesiach,\nposväť sa meno tvoje,\npríď kráľovstvo tvoje,\nbuď vôľa tvoja ako v nebi, tak i na zemi.\nChlieb náš každodenný daj nám dnes\na odpusť nám naše viny,\nako i my odpúšťame svojim vinníkom,\na neuveď nás do pokušenia,\nale zbav nás zlého. Amen."
  },
  {
    "slug": "zdravas-maria",
    "title": "Zdravas’, Mária",
    "description": "Zverme sa do príhovoru Panny Márie.",
    "category": "základné",
    "body": "Zdravas’, Mária, milosti plná, Pán s tebou.\nPožehnaná si medzi ženami\na požehnaný je plod života tvojho, Ježiš.\nSvätá Mária, Matka Božia,\npros za nás hriešnych\nteraz i v hodinu smrti našej. Amen."
  },
  {
    "slug": "slava-otcu",
    "title": "Sláva Otcu",
    "description": "Krátka modlitba chvály Najsvätejšej Trojice.",
    "category": "základné",
    "body": "Sláva Otcu i Synu i Duchu Svätému.\nAko bolo na počiatku, tak nech je i teraz i vždycky\ni na veky vekov. Amen."
  },
  {
    "slug": "pred-prijimanim",
    "title": "Pred svätým prijímaním",
    "description": "Pripravme srdce na stretnutie s Ježišom.",
    "category": "základné",
    "body": "Pane Ježišu, verím, že si prítomný v Eucharistii.\nPomôž mi prijať ťa s pokorou, vierou a láskou.\nOčisti moje srdce a nauč ma odpúšťať.\nDaj, aby ma stretnutie s tebou premenilo\na priblížilo k ľuďom, ktorých mi posielaš. Amen.",
    "note": "Autorská modlitba pre osobnú pobožnosť; nejde o text omšovej liturgie."
  },
  {
    "slug": "po-prijimani",
    "title": "Po svätom prijímaní",
    "description": "Poďakovanie v tichu a dôvere.",
    "category": "základné",
    "body": "Pane Ježišu, ďakujem ti, že si ku mne prišiel.\nZostaň so mnou v radosti aj v ťažkostiach.\nVeď moje slová, myšlienky a skutky,\naby som dnes prinášal pokoj a lásku.\nPomôž mi slúžiť tým, ktorí potrebujú pomoc. Amen.",
    "note": "Autorská modlitba pre osobnú pobožnosť; nejde o text omšovej liturgie."
  },
  {
    "slug": "verim-v-boha",
    "title": "Verím v Boha",
    "description": "Apoštolské vyznanie viery.",
    "category": "základné",
    "body": "Verím v Boha, Otca všemohúceho, Stvoriteľa neba i zeme,\ni v Ježiša Krista, jeho jediného Syna, nášho Pána,\nktorý sa počal z Ducha Svätého, narodil sa z Márie Panny,\ntrpel za vlády Poncia Piláta, bol ukrižovaný, umrel a bol pochovaný;\nzostúpil k zosnulým, tretieho dňa vstal z mŕtvych,\nvystúpil na nebesia, sedí po pravici Boha Otca všemohúceho.\nOdtiaľ príde súdiť živých i mŕtvych.\nVerím v Ducha Svätého, v svätú Cirkev katolícku,\nv spoločenstvo svätých, v odpustenie hriechov,\nv vzkriesenie tela a v život večný. Amen."
  },
  {
    "slug": "korunka",
    "title": "Korunka Božieho milosrdenstva",
    "description": "Ježišu, dôverujem ti.",
    "category": "núdza",
    "body": "Na veľkom zrnku každého desiatku:\nVečný Otče, obetujem ti telo a krv, dušu i božstvo tvojho najmilšieho Syna a nášho Pána Ježiša Krista na odčinenie našich hriechov i hriechov celého sveta.\n\nNa desiatich malých zrnkách:\nPre jeho bolestné umučenie maj milosrdenstvo s nami i s celým svetom.\n\nNa záver trikrát:\nSvätý Bože, svätý Mocný, svätý Nesmrteľný, zmiluj sa nad nami i nad celým svetom.",
    "guide": [
      "Prežehnaj sa a pomodli sa Otče náš, Zdravas’, Mária a Verím v Boha. Ich texty nájdeš v základných modlitbách.",
      "Na bežnom ruženci sa pomodli päť desiatkov. Na veľkom zrnku povedz „Večný Otče…“, na každom z desiatich malých zrniek „Pre jeho bolestné umučenie…“.",
      "Na záver trikrát povedz „Svätý Bože…“ a prežehnaj sa."
    ],
    "source": "https://thedivinemercy.org/message/devotions/pray-the-chaplet"
  },
  {
    "slug": "za-mier",
    "title": "Modlitba za mier",
    "description": "Za pokoj vo svete, v rodinách aj v našom srdci.",
    "category": "núdza",
    "body": "Bože pokoja, prosíme ťa za ľudí zasiahnutých vojnou.\nChráň nevinných, poteš zarmútených a posilni tých, ktorí pomáhajú.\nVeď zodpovedných k spravodlivým rozhodnutiam.\nUzdrav nenávisť v našich srdciach\na nauč nás budovať pokoj tam, kde žijeme. Amen.",
    "note": "Autorská modlitba pre osobnú pobožnosť; nejde o text omšovej liturgie."
  },
  {
    "slug": "svata-gertruda",
    "title": "Za duše v očistci",
    "description": "Modlitba tradične pripisovaná svätej Gertrúde.",
    "category": "núdza",
    "body": "Večný Otče, obetujem ti najdrahšiu krv tvojho božského Syna Ježiša v spojení so svätými omšami slávenými dnes po celom svete za všetky duše v očistci, za hriešnikov všade, za hriešnikov v celej Cirkvi, v mojom dome a v mojej rodine. Amen.",
    "note": "O „1 000 dušiach“: toto tvrdenie sa šíri v zbožnej tradícii. V tomto projekte nemáme overený pôvod ani cirkevné potvrdenie konkrétneho prísľubu. Neuvádzame ho preto ako zaručený výsledok. Modlitbu obetujeme s dôverou v Božie milosrdenstvo.",
    "source": "https://sanangelodiocese.org/prayer-for-those-in-purgatory"
  },
  {
    "slug": "duch-svaty",
    "title": "Litánie k Duchu Svätému",
    "description": "Prosby o múdrosť, silu a vedenie.",
    "category": "núdza",
    "body": "Pane, zmiluj sa. Kriste, zmiluj sa. Pane, zmiluj sa.\n\nBože, Otče na nebesiach, zmiluj sa nad nami.\nBože, Syn, Vykupiteľ sveta, zmiluj sa nad nami.\nBože, Duch Svätý, zmiluj sa nad nami.\nSvätá Trojica, jeden Boh, zmiluj sa nad nami.\n\nDuchu múdrosti, veď nás.\nDuchu rozumu, osvieť nás.\nDuchu rady, usmerňuj nás.\nDuchu sily, posilňuj nás.\nDuchu poznania, uč nás.\nDuchu nábožnosti, prehlbuj našu lásku.\nDuchu bázne pred Pánom, uč nás pokore.\nDuchu pokoja, uzdravuj naše vzťahy.\nDuchu pravdy, chráň nás pred klamstvom.\nDuchu lásky, otvor nás blížnym.\n\nPríď, Duchu Svätý, naplň naše srdcia\na zapáľ v nás oheň svojej lásky. Amen.",
    "note": "Krátke autorské litániové prosby k Duchu Svätému. Nejde o úplné znenie tradičných litánií."
  },
  {
    "slug": "najsvatejsia-tvar",
    "title": "K Najsvätejšej tvári Ježišovej",
    "description": "Chvíľa rozjímania pred Kristovou tvárou.",
    "category": "osobitné",
    "body": "Pane Ježišu, v tvojej tvári hľadám lásku Otca.\nKeď prežívam bolesť, uč ma dôverovať ti.\nKeď stretávam trpiacich, uč ma rozpoznať v nich teba.\nDaj mi srdce, ktoré miluje, odpúšťa a slúži.\nNech sa môj život stane odpoveďou na tvoju lásku. Amen.",
    "note": "Autorská modlitba pre osobnú pobožnosť; nejde o text omšovej liturgie."
  }
];
export type Testimony = { slug: string; title: string; intro: string; body: string; author: string };
// Pridaj iba skutočné príbehy so súhlasom autora.
export const testimonies: Testimony[] = [];
// Vlož identifikátor YouTube videa (napr. časť adresy za ?v=), nie celú URL.
export const videos: { id: string; title: string; description: string }[] = [];
export const faithTopics = [
{ title: 'Modlitba: rozhovor s Bohom', text: 'V modlitbe môžeme Bohu priniesť vďačnosť, otázky, bolesť aj radosť. Je v nej miesto pre slová aj ticho. Začať môžeme jednoduchým oslovením a chvíľou pozornosti.', reference: 'Katechizmus Katolíckej cirkvi, 2558 – 2565' },
{ title: 'Sviatosti: stretnutie s Kristom', text: 'Katolícka cirkev slávi sedem sviatostí: krst, birmovanie, Eucharistiu, pokánie, pomazanie chorých, posvätný stav a manželstvo. V nich Kristus pôsobí a udeľuje svoju milosť.', reference: 'Katechizmus Katolíckej cirkvi, 1113 – 1131' },
{ title: 'Mária nás vedie k Ježišovi', text: 'Máriu si ctíme ako Ježišovu matku a prosíme o jej príhovor. Uctievanie Márie sa odlišuje od klaňania sa, ktoré patrí jedine Bohu. Ruženec nás vedie k rozjímaniu nad Kristovým životom.', reference: 'Katechizmus Katolíckej cirkvi, 971; 2673 – 2679' },
{ title: 'Modlitba za zosnulých', text: 'V modlitbe zverujeme zosnulých Božiemu milosrdenstvu. Cirkev učí o očistení tých, ktorí zomreli v Božej milosti a potrebujú byť pripravení na plné spoločenstvo s ním.', reference: 'Katechizmus Katolíckej cirkvi, 1030 – 1032' }
];
export const usefulLinks = [
{ title: 'Rádio Lumen', description: 'Živé vysielanie a duchovné relácie', href: 'https://www.lumen.sk/', icon: '◉' },
{ title: 'TV LUX online', description: 'Katolícka televízia naživo', href: 'https://www.tvlux.sk/nazivo', icon: '▷' },
{ title: 'Liturgické čítania', description: 'Božie slovo na dnešný deň', href: 'https://lc.kbs.sk/', icon: '☷' },
{ title: 'Jednotný katolícky spevník', description: 'Piesne a texty zo spevníka', href: 'https://www.ejks.sk/', icon: '♫' },
{ title: 'Duchovné relácie', description: 'Zamyslenia v archíve Rádia Lumen', href: 'https://www.lumen.sk/archiv.html', icon: '◷' },
{ title: 'Katechizmus', description: 'Dokumenty a učenie Katolíckej cirkvi', href: 'https://dkc.kbs.sk/', icon: '⌑' }
];

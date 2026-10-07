# Svetlo nádeje – kresťanský web

Funkčný slovenský prototyp v Next.js (App Router), Reacte a TypeScripte. Bledomodrá a biela, mobilný dizajn, vlastný SVG banner, modlitby na samostatných stránkach, štyri ružence, zväčšenie písma, tlač, katechizmus a externé odkazy.

## Spustenie na Windows, macOS alebo Linuxe

1. Nainštaluj Node.js 22 LTS alebo novší (minimum je 20.9).
2. Rozbaľ ZIP a v termináli otvor priečinok `krestansky-web`, v ktorom je `package.json`.
3. Spusti:

```bash
npm install
npm run dev
```

4. Otvor http://localhost:3000.

Na kontrolu a vytvorenie produkčnej verzie:

```bash
npm run typecheck
npm run build
```

Aplikácia používa statický export. Po úspešnom builde je kompletný web v priečinku `out`. Na bežnom webhostingu nahraj obsah tohto priečinka do koreňa webu/domény. Node.js na samotnom statickom hostingu nie je potrebný. Nevkladaj tam zdrojové súbory namiesto exportu.

Pri statickom exporte sa nepoužíva `npm run start` (príkaz `next start` vyžaduje serverový build). Na lokálnu produkčnú kontrolu môžeš použiť `npx serve out`. Pre serverový deployment odstráň `output: 'export'` z `next.config.ts`, potom spusti build a start.

### Netlify

Nastavenie v `netlify.toml`: build `npm run build`, publish `out`, Node.js 22. Pri nasadení na statický hosting vypni automatický Next.js serverový adaptér, ak ho platforma vynucuje. Priečinok `out` je samostatne nasaditeľný.

### Existujúca doména alebo podpriečinok

Žiadnu doménu projekt nekupuje ani automaticky nemení. Pre subdoménu alebo koreň existujúcej domény stačí statický export. Ak ho chceš nasadiť napríklad pod `/modlitba`, nastav `basePath: '/modlitba'` v `next.config.ts` a uprav absolútnu cestu k banneru v CSS na `/modlitba/banner.svg`, potom urob nový build. Samotná doména Hontianskej Vrbice nie je v projekte prednastavená, pretože jej presnú adresu nemáme.

## Úprava obsahu

- `data/content.ts`: modlitby, videá, svedectvá, vysvetlenia viery a odkazy.
- `data/rosary.ts`: štyri ružence, dni a tajomstvá.
- `app/globals.css`: farby, písmo a rozloženie.
- `public/banner.svg`: vlastná dekoratívna ilustrácia (nie fotografia Hontianskej Vrbice).
- `app/layout.tsx`: názov, hlavička, pätička a SEO.
- `app/page.tsx`: úvodná stránka a sekcie.

Po zmene obsahu urob nový build. Na úpravu zatiaľ netreba databázu, prihlasovanie ani API kľúče. Obsah sa upravuje v kóde; administračné rozhranie nie je súčasťou tejto verzie.

### Textové svedectvo

Do prázdneho poľa `testimonies` pridaj skutočný príbeh so súhlasom autora:

```ts
{ slug: 'nazov-pribehu', title: 'Názov príbehu', intro: 'Krátky úvod.',
  author: 'Meno alebo dohodnutý pseudonym', body: 'Celý príbeh.\n\nĎalší odsek.' }
```

Automaticky vznikne kartička a samostatná stránka `/svedectva/nazov-pribehu/`. Slug má byť jedinečný, bez diakritiky a medzier. Nevkladaj citlivé údaje iných ľudí bez ich súhlasu.

### Video svedectvo

Do `videos` vlož `{ id: 'XXXXXXXXXXX', title: 'Názov videa', description: 'Krátky opis.' }`. ID má 11 znakov a pochádza z adresy YouTube. Prehrávač sa pripojí k YouTube až po kliknutí návštevníka na načítanie videa; používa youtube-nocookie.com. Po načítaní ide o externú službu s vlastnými pravidlami. Nevhodné ID sa nezobrazuje.

## Duchovný obsah a podklady

Základné modlitby používajú tradičné znenia. Modlitby pred a po prijímaní, za mier a k Najsvätejšej tvári sú označené ako autorské modlitby. Litánie k Duchu Svätému obsahujú krátke autorské prosby, **nie úplný tradičný text**. Pred verejným rozšírením ich možno nahradiť schváleným znením po dohode s kňazom.

Ruženec: https://www.vatican.va/special/rosary/documents/misteri_en.html
Korunka: https://thedivinemercy.org/message/devotions/pray-the-chaplet
Modlitba pripisovaná sv. Gertrúde: https://sanangelodiocese.org/prayer-for-those-in-purgatory
Katechizmus: https://dkc.kbs.sk/ (odkazy na čísla článkov sú pri jednotlivých témach).

Tvrdenie o vyslobodení „1 000 duší“ nie je prezentované ako overený či zaručený výsledok. Jeho presný pôvod a cirkevné potvrdenie v tomto projekte zostávajú neoverené; pri modlitbe je táto poznámka viditeľná. Zverejnenie na stránke diecézy samo osebe nepreukazuje pôvod konkrétneho prísľubu.

Svedectvá a videá sú zámerne prázdne. Farské oznamy a časy omší pribudnú až po dohode s farárom. Web je označený ako osobný projekt Jána Bödiho, nie ako oficiálna stránka farnosti.

SVG ilustrácia a krátke autorské modlitby vznikli pre tento prototyp. Žiadne fotografie ani platené fonty nie sú potrebné. Stránka používa systémové písma a funguje bez externých obrázkových služieb.

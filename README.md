# JM Zorgpartners Website 🏥

Een moderne, professionele website voor JM Zorgpartners - uw betrouwbare partner in zorgpersoneel.

## Getting Started



## 🚀 FeaturesFirst, run the development server:



- ✅ **Modern Design** - Responsive en gebruikersvriendelijk met wow-effect```bash

- ✅ **Vacature Systeem** - Dynamische vacaturebank met MDX contentnpm run dev

- ✅ **Blog Platform** - Volledig blog systeem voor nieuws en tips# or

- ✅ **Contact Formulier** - Met email integratie via Nodemaileryarn dev

- ✅ **Animaties** - Smooth animaties met Framer Motion# or

- ✅ **SEO Geoptimaliseerd** - Metadata en semantic HTMLpnpm dev

- ✅ **Admin Functionaliteit** - Eenvoudig vacatures en blogs toevoegen via MDX bestanden# or

- ✅ **TypeScript** - Type-safe developmentbun dev

- ✅ **Tailwind CSS** - Utility-first CSS framework```



## 📋 Tech StackOpen [http://localhost:3000](http://localhost:3000) with your browser to see the result.



- **Framework**: Next.js 16 (App Router)You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

- **Language**: TypeScript

- **Styling**: Tailwind CSSThis project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

- **Animations**: Framer Motion

- **Forms**: React Hook Form + Zod## Learn More

- **Content**: MDX + Gray Matter

- **Icons**: Lucide ReactTo learn more about Next.js, take a look at the following resources:

- **Email**: Nodemailer

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

## 🛠️ Installatie- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.



1. **Dependencies zijn al geïnstalleerd!**You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!



2. **Environment variabelen instellen**## Deploy on Vercel

   

   Bewerk `.env.local` en vul de waarden in:The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

   

   ```envCheck out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

   # Email Configuration
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   EMAIL_TO=info@jmzorgpartners.nl
   
   # Site Configuration
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_SITE_NAME=JM Zorgpartners
   
   # Admin Password
   ADMIN_PASSWORD=jmzorgpartners2025
   ```

3. **Development server starten**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   
   Ga naar [http://localhost:3000](http://localhost:3000)

## 📝 Content Beheer

### Vacatures Toevoegen

1. Maak een nieuw `.md` bestand in `/content/vacatures/`
2. Gebruik deze structuur:

```markdown
---
title: "Functie Titel"
location: "Stad"
type: "Voltijd/Parttime"
salary: "€X.XXX - €X.XXX per maand"
experience: "X-X jaar"
education: "Vereiste opleiding"
posted: "2025-11-06"
featured: true/false
---

## Over de functie
Je content hier...
```

### Blogs Toevoegen

1. Maak een nieuw `.md` bestand in `/content/blogs/`
2. Gebruik deze structuur:

```markdown
---
title: "Blog Titel"
author: "Auteur Naam"
date: "2025-11-06"
excerpt: "Korte beschrijving..."
image: "/images/blog/afbeelding.jpg"
category: "Categorie"
featured: true/false
---

Je content hier...
```

## 📁 Project Structuur

```
jmzp-website/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── contact/       # Contact formulier API
│   ├── blog/              # Blog pagina's
│   ├── contact/           # Contact pagina
│   ├── vacatures/         # Vacature pagina's
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React componenten
│   ├── ui/               # UI componenten (Button, Card, etc.)
│   ├── animations.tsx     # Animatie componenten
│   ├── header.tsx         # Header navigatie
│   └── footer.tsx         # Footer
├── content/               # Content (MDX)
│   ├── vacatures/        # Vacature bestanden
│   └── blogs/            # Blog bestanden
├── lib/                   # Utility functies
│   ├── content.ts        # Content helpers
│   └── utils.ts          # Algemene utilities
├── public/               # Statische bestanden
│   └── images/           # Afbeeldingen
├── .env.local            # Environment variabelen
├── next.config.ts        # Next.js configuratie
├── tailwind.config.ts    # Tailwind configuratie
└── tsconfig.json         # TypeScript configuratie
```

## 🎨 Design Systeem

### Kleuren

- **Primary**: Rood/Oranje tint (#e64d39) - Hoofdkleur JM Zorgpartners
- **Secondary**: Groen tint (#22c55e) - Zorg & gezondheid
- **Accent**: Variaties voor hover states en highlights

### Componenten

Alle UI componenten zijn gebouwd met:
- Consistent design systeem
- Responsive op alle schermformaten
- Accessibility (ARIA labels, keyboard navigation)
- Smooth animaties en transitions

## 📧 Email Configuratie

Voor Gmail:
1. Ga naar Google Account settings
2. Security → 2-Step Verification
3. App passwords → Generate new password
4. Gebruik dit wachtwoord in `.env.local`

## 🚢 Deployment

### Vercel (Aanbevolen)

1. Push code naar GitHub
2. Importeer project in Vercel
3. Voeg environment variabelen toe
4. Deploy!

### Andere platforms

Build de applicatie:
```bash
npm run build
npm start
```

## 📱 Features om toe te voegen (toekomst)

- [ ] Zoekfunctionaliteit voor vacatures
- [ ] Filter opties (locatie, type, etc.)
- [ ] Newsletter inschrijving
- [ ] Admin dashboard voor content beheer
- [ ] Sollicitatie formulier per vacature
- [ ] Video integratie van OneDrive assets
- [ ] Social media feed integratie
- [ ] Live chat support
- [ ] Multi-language support (Engels)

## 📞 Support

Voor vragen of hulp, neem contact op met:
- Email: info@jmzorgpartners.nl
- Telefoon: +31 (0) 123 456 789

## 📄 Licentie

© 2025 JM Zorgpartners. Alle rechten voorbehouden.

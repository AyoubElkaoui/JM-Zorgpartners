"use client";

import Link from "next/link";
import {
  Brain,
  Users,
  Baby,
  Heart,
  GraduationCap,
  Globe,
  Clock,
  CheckCircle2,
  FileText,
  Phone,
  Mail,
  ArrowRight,
  Send,
  ChevronDown,
  Shield,
} from "lucide-react";
import FadeContent from "@/components/react-bits/FadeContent";
import ScaleIn from "@/components/react-bits/ScaleIn";
import { CardSpotlight } from "@/components/aceternity/card-spotlight";
import {
  AnimatedTitle,
  GradientText,
} from "@/components/aceternity/animated-title";
import { MovingBorder } from "@/components/aceternity/moving-border";
import { AnimatedBeam } from "@/components/aceternity/background-grid";
import CTASection from "@/components/cta-section";
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";

const verwachtingen = [
  {
    icon: CheckCircle2,
    titel: "Eerlijke en transparante voorwaarden",
    tekst:
      "We waarderen jouw inzet en zorgen voor duidelijke, correcte en professionele arbeidsvoorwaarden.",
  },
  {
    icon: Users,
    titel: "Persoonlijk contact",
    tekst:
      "Je hebt altijd een aanspreekpunt dat bereikbaar is op de momenten dat je ons nodig hebt.",
  },
  {
    icon: Heart,
    titel: "Opdrachten die bij jou passen",
    tekst:
      "Wij luisteren naar jouw voorkeuren en koppelen je aan opdrachten die aansluiten bij jouw kwaliteiten en persoonlijkheid.",
  },
  {
    icon: Clock,
    titel: "Snelle en betrouwbare planning",
    tekst:
      "We schakelen mee met jouw beschikbaarheid en zorgen voor duidelijke afspraken.",
  },
];

const sectoren = [
  {
    icon: Heart,
    naam: "Ouderenzorg",
    beschrijving: "Zorg in woon- en verpleeghuizen",
  },
  {
    icon: Users,
    naam: "Gehandicaptenzorg",
    beschrijving: "Begeleiding met aandacht en structuur",
  },
  {
    icon: Brain,
    naam: "GGZ",
    beschrijving: "Specialistische zorg binnen diverse settings",
  },
  {
    icon: Baby,
    naam: "Jeugdzorg",
    beschrijving: "Hulp voor jongeren en gezinnen",
  },
  {
    icon: Shield,
    naam: "Verslavingszorg",
    beschrijving: "Professionele begeleiding en behandeling",
  },
  {
    icon: GraduationCap,
    naam: "Speciaal onderwijs",
    beschrijving: "Ondersteuning voor leerlingen met zorgbehoefte",
  },
  {
    icon: Globe,
    naam: "Vluchtelingenwerk",
    beschrijving: "Begeleiding binnen opvang en integratie",
  },
];

const faqs = [
  {
    question: "Hoe kan ik mij aanmelden bij JM Zorgpartners?",
    answer:
      "Aanmelden gaat eenvoudig via onze website. Vul het aanmeldformulier in en wij nemen persoonlijk contact met je op om de mogelijkheden te bespreken. Liever direct contact? Tijdens kantooruren kun je ons ook bellen of mailen.",
  },
  {
    question: "In welke sectoren kan ik werken?",
    answer:
      "Onze zorgprofessionals zijn inzetbaar binnen meerdere zorgsectoren, waaronder ouderenzorg, gehandicaptenzorg, GGZ, jeugdzorg, verslavingszorg, speciaal onderwijs en vluchtelingenwerk.",
  },
  {
    question: "Hoe ziet het sollicitatieproces eruit?",
    answer:
      "Na je aanmelding nemen we contact met je op en plannen we een persoonlijk gesprek. Hierin bespreken we je ervaring, wensen en beschikbaarheid en bekijken we welke opdrachten het beste aansluiten.",
  },
  {
    question: "Hoe snel kan ik starten met werken?",
    answer:
      "Dat hangt af van je documenten en beschikbaarheid. In veel gevallen kun je snel worden ingezet zodra je dossier compleet is.",
  },
  {
    question: "Kan ik zelf bepalen wanneer ik werk?",
    answer:
      "Ja. Je geeft zelf jouw beschikbaarheid door en wij zoeken opdrachten die daarbij passen.",
  },
  {
    question: "Met welke contractvormen werken jullie?",
    answer: "Wij werken met zorgprofessionals in loondienst en zelfstandigen.",
  },
  {
    question: "Hoe verloopt het contact tijdens opdrachten?",
    answer:
      "Je staat centraal. Wij blijven bereikbaar voor vragen, afstemming en ondersteuning wanneer dat nodig is.",
  },
  {
    question: "Kan ik mij uitschrijven bij JM Zorgpartners?",
    answer:
      "Ja. Je kunt je op ieder moment uitschrijven. Laat het telefonisch of per e-mail weten zodat wij jouw gegevens netjes kunnen afronden.",
  },
];

export default function ZorgprofessionalsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Sectie 1: Hero Section - Video bovenaan, tekst eronder */}
      <section className="relative w-full">
        {/* Video bovenaan */}
        <div className="relative w-full h-screen max-h-[60vh] overflow-hidden bg-black">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200"
            autoPlay
            muted
            loop
          >
            <source
              src="/videos/JM Zorgpartners recruitment video .mp4"
              type="video/mp4"
            />
            Uw browser ondersteunt deze video niet.
          </video>

          {/* Play button overlay - links onderin */}
          <div className="absolute bottom-8 left-8">
            <div
              onClick={togglePlay}
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all cursor-pointer"
            >
              {isPlaying ? (
                <div className="flex space-x-1">
                  <div className="w-1 h-4 bg-white"></div>
                  <div className="w-1 h-4 bg-white"></div>
                </div>
              ) : (
                <div className="w-0 h-0 border-l-6 border-l-white border-t-3 border-t-transparent border-b-3 border-b-transparent ml-0.5"></div>
              )}
            </div>
          </div>

          {/* Overlay text - rechts onderin */}
          <div className="absolute bottom-8 right-8 text-white">
            <p className="text-lg font-semibold bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg inline-block">
              Ontdek hoe wij zorgprofessionals helpen
            </p>
          </div>
        </div>

        {/* Tekst eronder in dezelfde sectie */}
        <div className="relative py-20 bg-white">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1C3364]/5 via-white to-[#F37325]/5" />
          <div className="absolute top-0 left-0 md:left-60 md:top-10">
            <div className="w-72 h-72 bg-[#F37325]/20 rounded-full blur-3xl opacity-30" />
          </div>
          {/* Animated Beams */}
          <AnimatedBeam className="top-32 left-0" width="60%" delay={0} />
          <AnimatedBeam
            className="top-48 right-0"
            color="#1C3364"
            width="45%"
            delay={1.5}
          />
          <AnimatedBeam className="top-64 left-0" width="70%" delay={3} />
          <AnimatedBeam
            className="bottom-32 right-0"
            color="#ff8c4d"
            width="50%"
            delay={4.5}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <FadeContent blur duration={1000}>
                <div>
                  <AnimatedTitle>
                    <h1 className="text-5xl lg:text-6xl font-black text-[#1C3364] leading-tight mb-6">
                      Werken in de zorg op jouw{" "}
                      <GradientText>manier</GradientText>
                    </h1>
                  </AnimatedTitle>

                  <p className="text-xl mb-8 text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    Ben jij een zorgprofessional met ervaring en een groot hart
                    voor de zorg? Bij JM Zorgpartners koppelen wij je aan
                    opdrachten die passen bij jouw manier van werken.
                  </p>

                  <p className="text-base text-gray-600 mb-4 max-w-2xl mx-auto">
                    <span className="font-bold">
                      Of je nu kiest voor korte diensten of langere inzet, jij
                      bepaalt wat bij jou past.
                    </span>{" "}
                    Wij luisteren naar jouw voorkeuren en zorgen voor werk dat
                    aansluit bij jouw professionaliteit en persoonlijkheid.
                    Samen vinden we de juiste match.
                  </p>

                  <div className="flex justify-center mt-10">
                    <Link href="#aanmelden">
                      <ScaleIn delay={400} duration={700}>
                        <MovingBorder
                          duration={8000}
                          className="bg-[#F37325] hover:bg-[#d96420] text-white px-8 py-4 font-bold"
                        >
                          <span>Aanmelden</span>
                          <ArrowRight className="w-5 h-5" />
                        </MovingBorder>
                      </ScaleIn>
                    </Link>
                  </div>
                </div>
              </FadeContent>
            </div>
          </div>
        </div>
      </section>

      {/* Sectie 2: Waarom kiezen voor JM Zorgpartners */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <AnimatedTitle>
              <h2 className="text-5xl lg:text-6xl font-black text-[#1C3364] mb-4">
                Waarom kiezen voor <GradientText>JM Zorgpartners</GradientText>
              </h2>
            </AnimatedTitle>
          </div>

          <FadeContent>
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Goede zorg begint bij zorgprofessionals die zich gewaardeerd
                voelen. Daarom werken we met duidelijke afspraken en persoonlijk
                contact.
              </p>

              <p className="text-lg text-gray-700 font-bold leading-relaxed">
                Bij JM Zorgpartners krijg je de ruimte om te werken op een
                manier die echt bij jou past. Flexibiliteit wanneer je dat wilt
                en stabiliteit wanneer het gewenst is.
              </p>

              <p className="text-base text-gray-600">
                Je hebt altijd een aanspreekpunt dat bereikbaar is op de
                momenten dat je ons nodig hebt. Zo ontstaat een samenwerking die
                aansluit bij jouw wensen en jouw kwaliteiten.
              </p>
            </div>
          </FadeContent>
        </div>
      </section>

      {/* Sectie 3: Wat je van ons kunt verwachten */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Spotlight */}
        <div className="absolute top-0 left-0 md:left-60 md:top-10">
          <div className="w-72 h-72 bg-[#F37325]/10 rounded-full blur-3xl opacity-20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <AnimatedTitle>
              <h2 className="text-5xl lg:text-6xl font-black text-[#1C3364] mb-6">
                Wat je van ons kunt <GradientText>verwachten</GradientText>
              </h2>
            </AnimatedTitle>
            <FadeContent blur duration={800}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Bij JM Zorgpartners zorgen we voor duidelijke voorwaarden,
                persoonlijk contact en een planning waarop je kunt vertrouwen.
              </p>
            </FadeContent>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {verwachtingen.map((item, idx) => (
              <FadeContent
                key={item.titel}
                blur
                delay={idx * 100}
                duration={1000}
              >
                <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#F37325]/30 transition-all duration-500 hover:shadow-2xl text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F37325] to-[#ff8c4d] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-black text-[#1C3364] mb-3 group-hover:text-[#F37325] transition-colors">
                    {item.titel}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.tekst}
                  </p>
                </div>
              </FadeContent>
            ))}
          </div>
        </div>
      </section>

      {/* Sectie 4: Onze zorgsectoren */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Animated beams */}
        <AnimatedBeam
          className="top-20 left-0"
          width="50%"
          color="#F37325"
          delay={0}
        />
        <AnimatedBeam
          className="bottom-20 right-0"
          width="40%"
          color="#1C3364"
          delay={2}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <AnimatedTitle>
              <h2 className="text-5xl lg:text-6xl font-black text-[#1C3364] mb-6">
                Onze <GradientText>zorgsectoren</GradientText>
              </h2>
            </AnimatedTitle>
            <FadeContent blur duration={800}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Bij JM Zorgpartners kun je werken binnen diverse zorgsectoren.
                Overal waar jouw expertise het verschil maakt.
              </p>
            </FadeContent>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {sectoren.map((sector, idx) => (
              <FadeContent
                key={sector.naam}
                blur
                delay={idx * 100}
                duration={800}
              >
                <CardSpotlight className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:border-[#F37325] hover:shadow-lg transition-all duration-300 group h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#1C3364]/5 mb-4">
                    <sector.icon className="w-8 h-8 text-[#1C3364]" />
                  </div>
                  <h3 className="font-black text-[#1C3364] mb-2">
                    {sector.naam}
                  </h3>
                  <p className="text-sm text-gray-600">{sector.beschrijving}</p>
                </CardSpotlight>
              </FadeContent>
            ))}
          </div>
        </div>
      </section>

      {/* Sectie 5: Veelgestelde vragen */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <AnimatedTitle>
              <h2 className="text-5xl lg:text-6xl font-black text-[#1C3364] mb-6">
                Veelgestelde vragen voor{" "}
                <GradientText>zorgprofessionals</GradientText>
              </h2>
            </AnimatedTitle>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <ScaleIn key={index} delay={index * 0.05}>
                <div className="border border-gray-200 rounded-lg overflow-hidden hover:border-[#F37325]/30 transition-colors">
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-[#1C3364] pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 text-[#F37325] flex-shrink-0 transition-transform",
                        openIndex === index && "transform rotate-180",
                      )}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Sectie 6: Klaar voor de Juiste Match? */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Subtiele achtergrond */}
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F37325]/5 to-[#1C3364]/5" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeContent blur duration={800}>
            <AnimatedTitle>
              <h2 className="text-5xl lg:text-6xl font-black text-[#1C3364] mb-6">
                Klaar voor de Juiste <GradientText>Match?</GradientText>
              </h2>
            </AnimatedTitle>

            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Meld je eenvoudig online aan. Wij nemen snel persoonlijk contact
              met je op om de mogelijkheden te bespreken.
            </p>

            <div className="space-y-8">
              <Link href="#aanmelden">
                <MovingBorder
                  duration={8000}
                  className="bg-[#F37325] hover:bg-[#d96420] text-white px-8 py-4 font-bold"
                >
                  <div className="flex items-center justify-center gap-2">
                    <span>Aanmelden</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </MovingBorder>
              </Link>

              <div className="text-gray-600">
                <p className="mb-6">
                  Liever direct contact? Tijdens kantooruren kun je ons ook
                  bellen of mailen.
                </p>
                <div className="flex justify-center gap-8">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-[#F37325]" />
                    <span className="font-semibold">033 303 30 42</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-[#F37325]" />
                    <span className="font-semibold">
                      info@jmzorgpartners.nl
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </FadeContent>
        </div>
      </section>

      {/* Aanmeldformulier Section */}
      <section
        id="aanmelden"
        className="py-24 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <FadeContent>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F37325]/10 rounded-full mb-4">
                <FileText className="h-5 w-5 text-[#F37325]" />
                <span className="text-lg font-semibold text-[#1C3364]">
                  Direct Aanmelden
                </span>
              </div>
              <AnimatedTitle>
                <h2 className="text-5xl lg:text-6xl font-black text-[#1C3364] mb-4">
                  Aanmeld<GradientText>formulier</GradientText>
                </h2>
              </AnimatedTitle>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Meld je hieronder eenvoudig online aan. Wij nemen snel
                persoonlijk contact met je op.
              </p>
            </div>
          </FadeContent>

          <ScaleIn delay={0.2}>
            <CardSpotlight className="p-8">
              <form className="space-y-6">
                {/* Persoonlijke Gegevens */}
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-[#1C3364] border-b-2 border-[#F37325]/20 pb-2">
                    Persoonlijke Gegevens
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#1C3364] mb-2">
                        Voornaam *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#F37325] focus:outline-none transition-colors"
                        placeholder="Je voornaam"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1C3364] mb-2">
                        Achternaam *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#F37325] focus:outline-none transition-colors"
                        placeholder="Je achternaam"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#1C3364] mb-2">
                        Geboortedatum *
                      </label>
                      <input
                        type="date"
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#F37325] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1C3364] mb-2">
                        Woonplaats *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#F37325] focus:outline-none transition-colors"
                        placeholder="Je woonplaats"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#1C3364] mb-2">
                        E-mailadres *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#F37325] focus:outline-none transition-colors"
                        placeholder="je@email.nl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1C3364] mb-2">
                        Telefoonnummer *
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#F37325] focus:outline-none transition-colors"
                        placeholder="+31 6 12345678"
                      />
                    </div>
                  </div>
                </div>

                {/* Ervaring en voorkeur */}
                <div className="space-y-4 pt-6">
                  <h3 className="text-xl font-black text-[#1C3364] border-b-2 border-[#F37325]/20 pb-2">
                    Ervaring en voorkeur
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#1C3364] mb-2">
                        Opleidingsniveau *
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#F37325] focus:outline-none transition-colors"
                      >
                        <option value="">Selecteer je opleidingsniveau</option>
                        <option value="helpende">Helpende</option>
                        <option value="verzorgende-ig">Verzorgende IG</option>
                        <option value="verpleegkundige">Verpleegkundige</option>
                        <option value="anders">Anders…</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1C3364] mb-2">
                        Aantal jaren werkervaring *
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#F37325] focus:outline-none transition-colors"
                      >
                        <option value="">Selecteer werkervaring</option>
                        <option value="0-2">0–2 jaar</option>
                        <option value="3-5">3–5 jaar</option>
                        <option value="6-10">6–10 jaar</option>
                        <option value="10+">10+ jaar</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#1C3364] mb-2">
                      Sectoren waarin je wilt werken *
                    </label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        "Ouderenzorg",
                        "GGZ",
                        "Jeugdzorg",
                        "Kinderopvang",
                        "Speciaal onderwijs",
                        "Vluchtelingenopvang",
                        "Gehandicaptenzorg",
                      ].map((sector) => (
                        <label
                          key={sector}
                          className="flex items-center gap-3 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            className="h-5 w-5 rounded border-gray-300 text-[#F37325] focus:ring-[#F37325]"
                          />
                          <span className="text-sm text-gray-700">
                            {sector}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Documenten uploaden */}
                <div className="space-y-4 pt-6">
                  <h3 className="text-xl font-black text-[#1C3364] border-b-2 border-[#F37325]/20 pb-2">
                    Documenten uploaden
                  </h3>

                  <div className="space-y-3">
                    {/* Diploma's Upload */}
                    <div className="bg-gray-50 rounded-lg p-4 border-2 border-dashed border-gray-300 hover:border-[#F37325] transition-colors">
                      <label className="flex items-center justify-between cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-lg bg-[#F37325]/10 flex items-center justify-center">
                            <GraduationCap className="h-5 w-5 text-[#F37325]" />
                          </div>
                          <div>
                            <p className="font-semibold text-[#1C3364]">
                              Diploma&apos;s *
                            </p>
                            <p className="text-sm text-gray-500">
                              PDF, JPG, PNG (max 10MB)
                            </p>
                          </div>
                        </div>
                        <input
                          type="file"
                          required
                          accept=".pdf,.jpg,.jpeg,.png"
                          multiple
                          className="hidden"
                        />
                        <button
                          type="button"
                          className="px-4 py-2 bg-[#1C3364] text-white rounded-lg text-sm font-semibold hover:bg-[#2a4a8f] transition-colors"
                        >
                          Upload
                        </button>
                      </label>
                    </div>

                    {/* VOG Upload */}
                    <div className="bg-gray-50 rounded-lg p-4 border-2 border-dashed border-gray-300 hover:border-[#F37325] transition-colors">
                      <label className="flex items-center justify-between cursor-pointer">
                        <div className="h-10 w-10 rounded-lg bg-[#F37325]/10 flex items-center justify-center">
                          <Shield className="h-5 w-5 text-[#F37325]" />
                        </div>
                        <div>
                          <p className="font-semibold text-[#1C3364]">
                            VOG (Verklaring Omtrent Gedrag) *
                          </p>
                          <p className="text-sm text-gray-500">PDF (max 5MB)</p>
                        </div>
                        <input
                          type="file"
                          required
                          accept=".pdf"
                          className="hidden"
                        />
                        <button
                          type="button"
                          className="px-4 py-2 bg-[#1C3364] text-white rounded-lg text-sm font-semibold hover:bg-[#2a4a8f] transition-colors"
                        >
                          Upload
                        </button>
                      </label>
                    </div>

                    {/* CV Upload */}
                    <div className="bg-gray-50 rounded-lg p-4 border-2 border-dashed border-gray-300 hover:border-[#F37325] transition-colors">
                      <label className="flex items-center justify-between cursor-pointer">
                        <div className="h-10 w-10 rounded-lg bg-[#F37325]/10 flex items-center justify-center">
                          <FileText className="h-5 w-5 text-[#F37325]" />
                        </div>
                        <div>
                          <p className="font-semibold text-[#1C3364]">CV *</p>
                          <p className="text-sm text-gray-500">
                            PDF, DOC, DOCX (max 5MB)
                          </p>
                        </div>
                        <input
                          type="file"
                          required
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                        />
                        <button
                          type="button"
                          className="px-4 py-2 bg-[#1C3364] text-white rounded-lg text-sm font-semibold hover:bg-[#2a4a8f] transition-colors"
                        >
                          Upload
                        </button>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Toelichting */}
                <div className="space-y-4 pt-6">
                  <h3 className="text-xl font-black text-[#1C3364] border-b-2 border-[#F37325]/20 pb-2">
                    Toelichting (optioneel)
                  </h3>

                  <div>
                    <label className="block text-sm font-semibold text-[#1C3364] mb-2">
                      Vertel iets over jezelf of geef je voorkeuren aan
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#F37325] focus:outline-none transition-colors"
                      placeholder="Vertel iets over jezelf of geef je voorkeuren aan..."
                    ></textarea>
                  </div>
                </div>

                {/* Privacy & Submit */}
                <div className="space-y-4 pt-6">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 h-5 w-5 rounded border-gray-300 text-[#F37325] focus:ring-[#F37325]"
                    />
                    <span className="text-sm text-gray-600">
                      Ik ga akkoord met de{" "}
                      <Link
                        href="/privacy"
                        className="text-[#F37325] font-semibold hover:underline"
                      >
                        privacyverklaring
                      </Link>{" "}
                      en het verwerken van mijn gegevens. *
                    </span>
                  </label>

                  <MovingBorder
                    duration={8000}
                    className="bg-[#F37325] hover:bg-[#d96420] text-white px-2 py-1 font-bold"
                    containerClassName="w-full sm:w-auto"
                    as="div"
                  >
                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-[#F37325] text-white rounded-xl font-bold text-lg hover:bg-[#d96420] transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="h-5 w-5" />
                      Verstuur Aanmelding
                    </button>
                  </MovingBorder>

                  <p className="text-center text-sm text-gray-500">
                    * Verplichte velden
                  </p>
                </div>
              </form>
            </CardSpotlight>
          </ScaleIn>
        </div>
      </section>
    </main>
  );
}

'use client'

import Link from 'next/link'
import { GraduationCap, Shield, FileText, Send } from 'lucide-react'
import FadeContent from '@/components/react-bits/FadeContent'
import ScaleIn from '@/components/react-bits/ScaleIn'
import { CardSpotlight } from '@/components/aceternity/card-spotlight'
import { MovingBorder } from '@/components/aceternity/moving-border'

export default function ZorgprofessionalsForm() {
  return (
    <section id="aanmelden" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <FadeContent>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F37325]/10 rounded-full mb-4">
              <FileText className="h-5 w-5 text-[#F37325]" />
              <span className="text-lg font-semibold text-[#1C3364]">Direct Aanmelden</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-[#1C3364] mb-4">
              Meld je <span className="text-[#F37325]">Aan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Vul het formulier in en upload je documenten. We nemen binnen 24 uur contact met je op!
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
                      'Ouderenzorg',
                      'GGZ',
                      'Jeugdzorg',
                      'Kinderopvang',
                      'Speciaal onderwijs',
                      'Vluchtelingenopvang',
                      'Gehandicaptenzorg'
                    ].map((sector) => (
                      <label key={sector} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          className="h-5 w-5 rounded border-gray-300 text-[#F37325] focus:ring-[#F37325]"
                        />
                        <span className="text-sm text-gray-700">{sector}</span>
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
                          <p className="font-semibold text-[#1C3364]">Diploma&apos;s *</p>
                          <p className="text-sm text-gray-500">PDF, JPG, PNG (max 10MB)</p>
                        </div>
                      </div>
                      <input
                        type="file"
                        required
                        accept=".pdf,.jpg,.jpeg,.png"
                        multiple
                        className="hidden"
                      />
                      <button type="button" className="px-4 py-2 bg-[#1C3364] text-white rounded-lg text-sm font-semibold hover:bg-[#2a4a8f] transition-colors">
                        Upload
                      </button>
                    </label>
                  </div>

                  {/* VOG Upload */}
                  <div className="bg-gray-50 rounded-lg p-4 border-2 border-dashed border-gray-300 hover:border-[#F37325] transition-colors">
                    <label className="flex items-center justify-between cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-[#F37325]/10 flex items-center justify-center">
                          <Shield className="h-5 w-5 text-[#F37325]" />
                        </div>
                        <div>
                          <p className="font-semibold text-[#1C3364]">VOG (Verklaring Omtrent Gedrag) *</p>
                          <p className="text-sm text-gray-500">PDF (max 5MB)</p>
                        </div>
                      </div>
                      <input
                        type="file"
                        required
                        accept=".pdf"
                        className="hidden"
                      />
                      <button type="button" className="px-4 py-2 bg-[#1C3364] text-white rounded-lg text-sm font-semibold hover:bg-[#2a4a8f] transition-colors">
                        Upload
                      </button>
                    </label>
                  </div>

                  {/* CV Upload */}
                  <div className="bg-gray-50 rounded-lg p-4 border-2 border-dashed border-gray-300 hover:border-[#F37325] transition-colors">
                    <label className="flex items-center justify-between cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-[#F37325]/10 flex items-center justify-center">
                          <FileText className="h-5 w-5 text-[#F37325]" />
                        </div>
                        <div>
                          <p className="font-semibold text-[#1C3364]">CV *</p>
                          <p className="text-sm text-gray-500">PDF, DOC, DOCX (max 5MB)</p>
                        </div>
                      </div>
                      <input
                        type="file"
                        required
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                      />
                      <button type="button" className="px-4 py-2 bg-[#1C3364] text-white rounded-lg text-sm font-semibold hover:bg-[#2a4a8f] transition-colors">
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
                    Ik ga akkoord met de <Link href="/privacy" className="text-[#F37325] font-semibold hover:underline">privacyverklaring</Link> en
                    het verwerken van mijn gegevens. *
                  </span>
                </label>

                <MovingBorder
                  duration={8000}
                  className="bg-[#F37325] hover:bg-[#d96420] text-white px-2 py-1 font-bold"
                  containerClassName="w-full sm:w-auto"
                  as="button"
                  type="submit"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Send className="h-5 w-5" />
                    Verstuur Aanmelding
                  </div>
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
  )
}
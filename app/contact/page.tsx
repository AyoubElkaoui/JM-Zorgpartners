'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FadeIn } from '@/components/animations'
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle } from 'lucide-react'

const formSchema = z.object({
  name: z.string().min(2, 'Naam moet minimaal 2 karakters zijn'),
  email: z.string().email('Ongeldig e-mailadres'),
  phone: z.string().min(10, 'Ongeldig telefoonnummer'),
  subject: z.string().min(5, 'Onderwerp moet minimaal 5 karakters zijn'),
  message: z.string().min(20, 'Bericht moet minimaal 20 karakters zijn'),
})

type FormData = z.infer<typeof formSchema>

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
const ACCEPTED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'image/jpeg',
  'image/png',
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [files, setFiles] = useState<FileList | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      const formData = new FormData()
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value)
      })

      // Add files if any
      if (files) {
        Array.from(files).forEach((file) => {
          formData.append('files', file)
        })
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        setSubmitted(true)
        reset()
        setFiles(null)
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        alert('Er ging iets mis. Probeer het opnieuw.')
      }
    } catch (error) {
      alert('Er ging iets mis. Probeer het opnieuw.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files
    if (selectedFiles) {
      // Validate file size and type
      const validFiles = Array.from(selectedFiles).filter((file) => {
        if (file.size > MAX_FILE_SIZE) {
          alert(`${file.name} is te groot. Maximum 5MB per bestand.`)
          return false
        }
        if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
          alert(`${file.name} heeft een ongeldig bestandstype.`)
          return false
        }
        return true
      })

      const dataTransfer = new DataTransfer()
      validFiles.forEach((file) => dataTransfer.items.add(file))
      setFiles(dataTransfer.files)
    }
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Neem Contact Op
              </h1>
              <p className="text-xl text-gray-600">
                Heb je vragen of wil je meer weten over onze diensten? 
                We helpen je graag verder!
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <FadeIn>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Stuur ons een bericht</CardTitle>
                  <CardDescription>
                    Vul het formulier in en we nemen zo snel mogelijk contact met je op.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Naam *
                      </label>
                      <Input
                        id="name"
                        {...register('name')}
                        placeholder="Je volledige naam"
                        disabled={isSubmitting}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        E-mail *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        {...register('email')}
                        placeholder="je@email.nl"
                        disabled={isSubmitting}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Telefoonnummer *
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        {...register('phone')}
                        placeholder="+31 6 12345678"
                        disabled={isSubmitting}
                      />
                      {errors.phone && (
                        <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Onderwerp *
                      </label>
                      <Input
                        id="subject"
                        {...register('subject')}
                        placeholder="Waar gaat je vraag over?"
                        disabled={isSubmitting}
                      />
                      {errors.subject && (
                        <p className="text-sm text-destructive mt-1">{errors.subject.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Bericht *
                      </label>
                      <Textarea
                        id="message"
                        {...register('message')}
                        placeholder="Je bericht..."
                        rows={6}
                        disabled={isSubmitting}
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="files" className="block text-sm font-medium mb-2">
                        Bijlagen (optioneel)
                      </label>
                      <Input
                        id="files"
                        type="file"
                        multiple
                        onChange={handleFileChange}
                        disabled={isSubmitting}
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        className="cursor-pointer"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Je kunt meerdere bestanden uploaden (PDF, Word, afbeeldingen). Max 5MB per bestand.
                      </p>
                      {files && files.length > 0 && (
                        <div className="mt-2 space-y-1">
                          {Array.from(files).map((file, index) => (
                            <div key={index} className="text-sm text-gray-600 flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              {file.name} ({(file.size / 1024).toFixed(1)} KB)
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Versturen...
                        </>
                      ) : submitted ? (
                        <>
                          <CheckCircle className="mr-2 h-5 w-5" />
                          Verstuurd!
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Verstuur Bericht
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Contact Info */}
            <div className="space-y-8">
              <FadeIn delay={0.1}>
                <Card>
                  <CardHeader>
                    <CardTitle>Contactgegevens</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Telefoon</h3>
                        <p className="text-gray-600">+31 (0) 123 456 789</p>
                        <p className="text-sm text-gray-500">Ma-Vr: 08:00 - 18:00</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">E-mail</h3>
                        <p className="text-gray-600">info@jmzorgpartners.nl</p>
                        <p className="text-sm text-gray-500">We reageren binnen 24 uur</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Adres</h3>
                        <p className="text-gray-600">
                          Straatnaam 123<br />
                          1234 AB Amsterdam<br />
                          Nederland
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={0.2}>
                <Card className="bg-gradient-to-br from-primary to-primary/80 text-white">
                  <CardHeader>
                    <CardTitle>24/7 Spoedlijn</CardTitle>
                    <CardDescription className="text-white/80">
                      Voor acute zorgvragen buiten kantooruren
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">+31 (0) 6 987 654 321</p>
                    <p className="text-sm mt-2 text-white/80">
                      Direct beschikbaar voor spoedgevallen
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

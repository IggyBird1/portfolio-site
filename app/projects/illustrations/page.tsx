import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ImageLightbox from "@/components/image-lightbox"

export default function IllustrationsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Button variant="ghost" asChild>
          <Link href="/portfolio" className="flex items-center text-gray-400 hover:text-white">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </Button>
      </div>

      <header className="mb-12 text-center">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
          Illustrations
        </h1>
        <div className="flex justify-center">
          <nav className="flex space-x-4 text-sm">
            <Link href="#" className="text-gray-400 hover:text-green-400">
              Home
            </Link>
            <span className="text-gray-600">/</span>
            <Link href="#" className="text-gray-400 hover:text-green-400">
              Portfolio
            </Link>
            <span className="text-gray-600">/</span>
            <span className="text-green-400">Illustrations</span>
          </nav>
        </div>
      </header>

      <Tabs defaultValue="digital" className="mb-16">
        <div className="flex justify-center mb-8">
          <TabsList className="bg-gray-900">
            <TabsTrigger value="digital">Digital Illustrations</TabsTrigger>
            <TabsTrigger value="traditional">Traditional Illustrations</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="digital">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Digital Illustrations</h2>
            <p className="text-gray-300 mb-8">
              Digital artwork created primarily in Clip Studio Paint and other digital art software, showcasing
              character designs and fantasy illustrations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="relative aspect-[3/4]">
                  <ImageLightbox
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Illustration43-dMtVpKvDNMhAQ4pDl7nnyGVnurEoHL.png"
                    alt="Digital Character Illustration"
                    fill
                    objectFit="cover"
                  />
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="relative aspect-[3/4]">
                  <ImageLightbox
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nico42.jpg-Ae1xWZ1nbqXPZJeW5Jk6CkgtTnIhc1.jpeg"
                    alt="Fantasy Character Nico"
                    fill
                    objectFit="cover"
                  />
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="relative aspect-[3/4]">
                  <ImageLightbox
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pixelgonis1-J8KOVU25krLLQqylIxE41jloBl05h6.png"
                    alt="Character Gonis"
                    fill
                    objectFit="cover"
                  />
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="relative aspect-[3/4]">
                  <ImageLightbox
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zhed_drasyl-wPsSx3oWREQOsi3VchR5k63CmhKEJx.png"
                    alt="Warrior Character"
                    fill
                    objectFit="cover"
                  />
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="relative aspect-[3/4]">
                  <ImageLightbox
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lucid_dream_girl-zndgBOmJ8xP5XymDhW7y1BTF8O14WW.png"
                    alt="Adventure Character"
                    fill
                    objectFit="cover"
                  />
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="relative aspect-[3/4]">
                  <ImageLightbox
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Corrupt-Hopscotch-Close-Up-6cn4maz2PpLJ1QD26NlG4U0tiGZ6ME.png"
                    alt="Stylized Character Close-up"
                    fill
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="traditional">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Traditional Illustrations</h2>
            <p className="text-gray-300 mb-8">
              Traditional artwork including pencil drawings and paintings, focusing on classical techniques, fabric
              studies, still life compositions, and creative interpretations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="relative aspect-[3/4]">
                  <ImageLightbox
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2024-07-15_07-22-58.jpg-PUAnwkPaBfWzZGonLs0sheNqvgGK3p.jpeg"
                    alt="Traditional Fabric Study"
                    fill
                    objectFit="cover"
                  />
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="relative aspect-[3/4]">
                  <ImageLightbox
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2024-07-15_07-21-56.jpg-cFf2ZC6mULh63CM5pPEfAqExTys9Cd.jpeg"
                    alt="Traditional Still Life"
                    fill
                    objectFit="cover"
                  />
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="relative aspect-[3/4]">
                  <ImageLightbox
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2024-07-15_07-22-29.jpg-41mFRBn3lh9r0FMaTJOl7yX5SqRDib.jpeg"
                    alt="Traditional Portrait Study"
                    fill
                    objectFit="cover"
                  />
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="relative aspect-[4/3]">
                  <ImageLightbox
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2024-07-15_07-26-01.jpg-OQt0uEk9yeqNv2yXuadxMXH1vqPXQy.jpeg"
                    alt="Random Access Memories Traditional Painting"
                    fill
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </section>
        </TabsContent>
      </Tabs>
    </div>
  )
}

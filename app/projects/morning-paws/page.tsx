import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle } from "lucide-react"
import ImageLightbox from "@/components/image-lightbox"

export default function MorningPawsPage() {
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
        <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
          Morning Paws
        </h1>
        <div className="flex justify-center">
          <nav className="flex space-x-4 text-sm">
            <Link href="/" className="text-gray-400 hover:text-purple-400">
              Home
            </Link>
            <span className="text-gray-600">/</span>
            <Link href="/#portfolio" className="text-gray-400 hover:text-purple-400">
              Portfolio
            </Link>
            <span className="text-gray-600">/</span>
            <span className="text-purple-400">Morning Paws</span>
          </nav>
        </div>
      </header>

      <div className="max-w-4xl mx-auto mb-12">
        <div className="rounded-lg overflow-hidden mb-8">
          <ImageLightbox
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Morning_Paws_Logo-05mvxyW56kBvpyzARjisPBj66SMsSj.png"
            alt="Morning Paws Logo"
            width={1200}
            height={600}
            className="w-full"
          />
        </div>
        <div className="text-center mb-8">
          <p className="text-lg text-gray-300">A [REDACTED] Production</p>
        </div>

        <Alert variant="destructive" className="mb-12 bg-red-900/20 border-red-800">
          <AlertTriangle className="h-5 w-5" />
          <AlertTitle className="text-red-500 text-xl">Warning</AlertTitle>
          <AlertDescription className="text-red-400">
            THE FOLLOWING IMAGES MAY BE DISTURBING & FRIGHTENING VIEWER DISCRETION IS ADVISED
          </AlertDescription>
        </Alert>
      </div>

      <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">Original Design and Idea</h2>
          <p className="text-gray-300 text-lg mb-6">
            Originally I started with a simple idea about an Analog-Horror / ARG which is based on Sanrio's art-style
            (i.e. Hello Kitty / Agressive Retsuko).
          </p>
          <p className="text-gray-300 text-lg mb-6">A children's show inspired by such things that got corrupted.</p>
          <p className="text-gray-300 text-lg">
            At first I was thinking of doing a story behind a dog who started working as a camera-guy in a kid's show,
            called Morning Paws. Named Oliver or Ollie, but I scraped the idea because of the design and that the idea
            seemed like it wasn't enough.
          </p>
        </div>
        <div className="relative aspect-square">
          <ImageLightbox
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/test2.png-rjWUX7cCcArPhIQdNfonB15iLLnRat.jpeg"
            alt="Morning Paws Title Card with Characters"
            fill
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Characters</h2>

        {/* Mister Whiskers */}
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4">Mister Whiskers</h3>
            <p className="text-gray-400 mb-6">The Veteran Performer Cat</p>
            <div className="space-y-6 text-gray-300">
              <p>
                After scraping Ollie, I started re-thinking the entire idea, and started writing and re-writing, coming
                with several ideas, this was the first character, one of the co-hosts and longest running character.
              </p>
              <p>Mr. Whiskers is a cat who is considered the longest-running character & co-host of Morning Paws.</p>
              <p>
                Although his corruption doesn't look the part, he is the one who's completely controlled and possessed
                by the corruption.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-900 rounded-lg p-4">
              <h4 className="text-center mb-4 font-medium">Normal Appearance</h4>
              <div className="relative aspect-square">
                <ImageLightbox
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mister_Whiskers-il5WzFwlLeVP4nJOlRYiRR0xw9g2ez.png"
                  alt="Mr. Whiskers Normal"
                  fill
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg p-4">
              <h4 className="text-center mb-4 font-medium">Corrupted Appearance</h4>
              <div className="relative aspect-square">
                <ImageLightbox
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mister_Whiskers%20-Corrupted-daWSlQLtRp3i7StfX5OVrdTitDeO60.png"
                  alt="Mr. Whiskers Corrupted"
                  fill
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Miss Sunny */}
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4">Miss Sunny</h3>
            <p className="text-gray-400 mb-6">The Maternal Authority Golden Retriever</p>
            <div className="space-y-6 text-gray-300">
              <p>Miss Sunny is a Golden Retriever and the other co-host with Mr.Whiskers.</p>
              <p>
                While Mr.Whiskers was completely possessed, Miss Sunny was considered THE Corruption, the one who
                controls it all, her corruption is the one more close to analog horrors such as The Mandela Catalogue or
                The Walten Files.
              </p>
              <p>With her permanent smile continuing in her corrupt form, and her necklace turning to eyes.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-900 rounded-lg p-4">
              <h4 className="text-center mb-4 font-medium">Normal Appearance</h4>
              <div className="relative aspect-square">
                <ImageLightbox
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Miss_Sunny-q2NaL90z9U429eQePNVlZQcU1owO3X.png"
                  alt="Miss Sunny Normal"
                  fill
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg p-4">
              <h4 className="text-center mb-4 font-medium">Corrupted Appearance</h4>
              <div className="relative aspect-square">
                <ImageLightbox
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Miss_Sunny%20-Corrupted-jU5y4ZPEqT22wjE6BE7q97sfkJc5aC.png"
                  alt="Miss Sunny Corrupted"
                  fill
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Cookie */}
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4">Cookie</h3>
            <p className="text-gray-400 mb-6">The Drained Storyteller - Red Panda</p>
            <div className="space-y-6 text-gray-300">
              <p>
                Cookie served the show's storyteller, using narrative to teach emotional intelligence & creative
                thinking. Incorporating the markings of a red panda, while being a thespian/theatrical-type, wearing a
                loose, linen-shirt.
              </p>
              <p>In comparison to everyone else, I thought that Cookie's corruption would be the most slow.</p>
              <p>
                Rather than a complete possession, the corruption gradually drains his energy/essence, slowly and
                painfully turning him into a shell, a conduit of the corruption.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-900 rounded-lg p-4">
              <h4 className="text-center mb-4 font-medium">Normal Appearance</h4>
              <div className="relative aspect-square">
                <ImageLightbox
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cookie-hZCukcHZg6cnd4BfD414lujPfAFhTQ.png"
                  alt="Cookie Normal"
                  fill
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg p-4">
              <h4 className="text-center mb-4 font-medium">Corrupted Appearance</h4>
              <div className="relative aspect-square">
                <ImageLightbox
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cookie%20-Corrupted-Kfxv56a4ycmJoW4E81XBSIyV2qOO9k.png"
                  alt="Cookie Corrupted"
                  fill
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Hopscotch */}
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4">Hopscotch</h3>
            <p className="text-gray-400 mb-6">The Sporty Rabbit</p>
            <div className="space-y-6 text-gray-300">
              <p>
                Hopscotch was the energetic, sporty character of Morning Paws, always encouraging children to be active
                and play games. Her cheerful demeanor and athletic spirit made her a favorite among young viewers.
              </p>
              <p>
                In the most disturbing turn of events, Hopscotch was forcefully turned into a literal puppet by the
                corruption. Her face bears the horrific evidence - stitched up and bloody, showing the violent nature of
                her transformation.
              </p>
              <p>
                Unlike the other characters who were possessed or gradually corrupted, Hopscotch was physically
                mutilated and converted into a marionette, representing the complete destruction of childhood innocence
                and joy.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-900 rounded-lg p-4">
              <h4 className="text-center mb-4 font-medium">Normal Appearance</h4>
              <div className="relative aspect-square">
                <ImageLightbox
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hopscotch-zkOsJCrPqUIvKi3glzTJOHObUrVzg1.png"
                  alt="Hopscotch Normal"
                  fill
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg p-4">
              <h4 className="text-center mb-4 font-medium">Corrupted Appearance</h4>
              <div className="relative aspect-square">
                <ImageLightbox
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hopscotch%20-Corrupted-mMnP8cwOdAlnTsmWniKqvaUjY9cIpw.png"
                  alt="Hopscotch Corrupted - Stitched and Bloody Puppet"
                  fill
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">The Corruption Concept</h2>
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Morning Paws explores the concept of corruption in children's media through the lens of analog horror. Each
            character represents a different aspect of how innocence can be twisted and perverted.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            The project draws inspiration from analog horror series like The Mandela Catalogue and The Walten Files,
            while maintaining the deceptively cute Sanrio-inspired aesthetic that makes the horror elements more
            unsettling.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            The contrast between the kawaii character designs and their horrific corrupted forms creates a unique
            psychological horror experience that questions the safety of childhood media and entertainment.
          </p>
        </div>
      </section>
    </div>
  )
}

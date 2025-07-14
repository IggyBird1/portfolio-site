import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import ImageLightbox from "@/components/image-lightbox"

export default function PromboPage() {
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
        <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent mb-4">
          Prombo
        </h1>
        <div className="flex justify-center">
          <nav className="flex space-x-4 text-sm">
            <Link href="/" className="text-gray-400 hover:text-cyan-400">
              Home
            </Link>
            <span className="text-gray-600">/</span>
            <Link href="/#portfolio" className="text-gray-400 hover:text-cyan-400">
              Portfolio
            </Link>
            <span className="text-gray-600">/</span>
            <span className="text-cyan-400">Prombo</span>
          </nav>
        </div>
      </header>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Animations</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/hbeAj1lSWzM"
              title="PROMBO Well Done Animation"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/-OCMe2Tnmrk"
              title="PROMBO Try Again Animation"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="flex justify-center">
          <ImageLightbox
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Asset-3-SdilqVZuBT3uQQsJBcEpFt0dUXM2of.png"
            alt="Prombo Final Character Design"
            width={600}
            height={600}
            className="max-w-full h-auto object-contain"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Prombo</h2>
          <p className="text-gray-300 text-lg mb-6">
            The idea of Prombo is to be a mascot character for a high-tech app for the manufacturing industry that was
            supposed to be used for teaching the user how to use its interface.
          </p>
          <p className="text-gray-300 text-lg">
            An animated mascot character, used for a manufacturing industrial complex. Designed to be friendly,
            approachable, and helpful while maintaining a professional industrial aesthetic.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">First Sketches</h2>
        <p className="text-gray-300 mb-8">
          Originally before going into Illustrator, I sketched some ideas to explore different approaches for the
          character design.
        </p>
        <p className="text-gray-300 mb-8">
          I went with a couple of ideas, all involving a cuter design or something rather simplistic and easy to
          animate. All were human-shaped with minimalistic ideas - the simpler the better. With a relatively human
          shape, mainly keeping the worker's helmet as a major part of the character's identity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-900 rounded-lg overflow-hidden p-4">
            <div className="flex justify-center">
              <ImageLightbox
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6D9366B7-CE00-481D-8503-D42EE5C51883-xt0c7XgAEGtLgfntVK6OQ061kfxV5F.png"
                alt="Prombo Initial Character Sketches"
                width={600}
                height={400}
                className="max-w-full h-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm mt-4 text-center">Initial character concept sketches</p>
          </div>
          <div className="bg-gray-900 rounded-lg overflow-hidden p-4">
            <div className="flex justify-center">
              <ImageLightbox
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/F46462B1-D866-4B68-827A-D6976E165F6F-evIG1WiVrYXuxUsGT2Nw33PucsTS3J.png"
                alt="Prombo Character Sketches"
                width={600}
                height={400}
                className="max-w-full h-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm mt-4 text-center">Additional character concept sketches</p>
          </div>
        </div>

        <p className="text-gray-300 mb-8">
          After exploring different approaches, I thought of going with a more robotic style. The sketches led slowly to
          something closer akin to EVE from WALL-E, but with an industrial worker aesthetic.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-900 rounded-lg overflow-hidden p-4">
            <div className="flex justify-center">
              <ImageLightbox
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14A65039-8F74-407A-A17D-566A8DBA5BA6-F8Gv5zPh487UKNBGPIrmFzbaWfkKQd.png"
                alt="Prombo Helmet Design Exploration"
                width={400}
                height={300}
                className="max-w-full h-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm mt-2 text-center">Helmet design variations</p>
          </div>
          <div className="bg-gray-900 rounded-lg overflow-hidden p-4">
            <div className="flex justify-center">
              <ImageLightbox
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8BE282E7-DEDC-4505-81F2-516805C767ED-vjEJdL5NxGRY1rvTFbspM1FRwfcqtr.png"
                alt="Prombo Helmet Variations"
                width={400}
                height={400}
                className="max-w-full h-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm mt-2 text-center">More helmet design explorations</p>
          </div>
          <div className="bg-gray-900 rounded-lg overflow-hidden p-4">
            <div className="flex justify-center">
              <ImageLightbox
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/743DD45A-5D0F-4CF8-8B9B-E3EBB07E3552-ztu3dRZ62vkaDu2lv41JJLDF5uIR2L.png"
                alt="Prombo Final Concept"
                width={400}
                height={400}
                className="max-w-full h-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm mt-2 text-center">Final concept before moving to Illustrator</p>
          </div>
        </div>

        <p className="text-gray-300 mb-8">
          In the end I really went with it, keeping the helmet as the key identifying feature and making the design more
          sleek and modern while maintaining the friendly, approachable personality.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Design Development</h2>
        <p className="text-gray-300 mb-8">
          After finalizing the concept, I moved into the digital design phase, breaking down the character into
          individual components for animation and creating the final polished design.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-900 rounded-lg overflow-hidden p-4">
            <div className="flex justify-center">
              <ImageLightbox
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0D98A4F3-080E-4EFD-A2CE-FA0F4A61E6E8-tiXFL0Z7pXrU1tHMBc91kbG4q5xD6g.png"
                alt="Prombo Component Breakdown"
                width={800}
                height={600}
                className="max-w-full h-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm mt-4 text-center">Character components and assembly</p>
          </div>
          <div className="bg-gray-900 rounded-lg overflow-hidden p-4">
            <div className="flex justify-center">
              <ImageLightbox
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5A6CF6E7-C88B-4AFD-A094-BCA8AC997DDD-qhY44X98SOu83MNH1TpTISkCeNePkW.png"
                alt="Prombo Rigging Preparation"
                width={800}
                height={600}
                className="max-w-full h-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm mt-4 text-center">Parts separated for rigging and animation</p>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">Final Design</h2>
          <p className="text-gray-300 text-lg mb-6">
            After coming to a conclusion, I went with this final design that balances industrial functionality with
            friendly approachability.
          </p>
          <p className="text-gray-300 text-lg mb-6">
            The character features a distinctive teal safety helmet, expressive cyan eyes, and a clean industrial design
            that communicates both competence and friendliness.
          </p>
          <p className="text-gray-300 text-lg">
            Most of the design elements stayed consistent throughout development, with only minor refinements to improve
            the character's appeal and animation potential.
          </p>
        </div>
        <div className="bg-white rounded-lg overflow-hidden p-8 flex justify-center">
          <ImageLightbox
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Asset-3-SdilqVZuBT3uQQsJBcEpFt0dUXM2of.png"
            alt="Prombo Final Design"
            width={400}
            height={400}
            className="max-w-full h-auto object-contain"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Character Expressions & Poses</h2>
        <p className="text-gray-300 mb-8">
          The final character design includes various expressions and poses to communicate different states and feedback
          to users.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-900 rounded-lg overflow-hidden p-6">
            <div className="flex justify-center mb-4">
              <ImageLightbox
                src="/images/prombo-yay.png"
                alt="Prombo Celebration Pose"
                width={200}
                height={200}
                className="max-w-full h-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm text-center">Celebration - Success feedback</p>
          </div>

          <div className="bg-gray-900 rounded-lg overflow-hidden p-6">
            <div className="flex justify-center mb-4">
              <ImageLightbox
                src="/images/prombo-shrug.png"
                alt="Prombo Shrug Pose"
                width={200}
                height={200}
                className="max-w-full h-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm text-center">Uncertainty - "I don't know" gesture</p>
          </div>

          <div className="bg-gray-900 rounded-lg overflow-hidden p-6">
            <div className="flex justify-center mb-4">
              <ImageLightbox
                src="/images/prombo-pointing.png"
                alt="Prombo Pointing Pose"
                width={200}
                height={200}
                className="max-w-full h-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm text-center">Instruction - Directing attention</p>
          </div>

          <div className="bg-gray-900 rounded-lg overflow-hidden p-6">
            <div className="flex justify-center mb-4">
              <ImageLightbox
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Asset-3-SdilqVZuBT3uQQsJBcEpFt0dUXM2of.png"
                alt="Prombo Neutral Pose"
                width={200}
                height={200}
                className="max-w-full h-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm text-center">Neutral - Default state</p>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg overflow-hidden p-4">
          <div className="flex justify-center">
            <ImageLightbox
              src="/images/prombo-variations.png"
              alt="Prombo Multiple Poses"
              width={800}
              height={200}
              className="max-w-full h-auto object-contain"
            />
          </div>
          <p className="text-gray-400 text-sm mt-4 text-center">
            Multiple character poses and expressions for different use cases
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Rigging & Animation</h2>
        <p className="text-gray-300 mb-8">
          Rigging was done by first separating all the character components and then using specialized After Effects
          add-ons for character animation.
        </p>
        <p className="text-gray-300 mb-4">
          The rigging process involved breaking down the character into individual parts that could be animated
          independently while maintaining the overall character integrity.
        </p>
        <div className="bg-gray-900 rounded-lg overflow-hidden p-4">
          <div className="flex justify-center">
            <ImageLightbox
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5A6CF6E7-C88B-4AFD-A094-BCA8AC997DDD-qhY44X98SOu83MNH1TpTISkCeNePkW.png"
              alt="Prombo Rigging Setup"
              width={1200}
              height={800}
              className="max-w-full h-auto object-contain"
            />
          </div>
          <p className="text-gray-400 text-sm mt-4 text-center">Character parts prepared for rigging and animation</p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">After Effects Rigging Process</h2>
        <p className="text-gray-300 mb-8">
          The character was rigged in After Effects using a sophisticated control system with individual controllers for
          each body part, including detailed finger controls and facial expressions.
        </p>

        <div className="grid gap-8 mb-8">
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="flex justify-center p-4">
              <ImageLightbox
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EB24A103-62F2-4006-86E9-05D31AA69E03-OWNvgHtvPFVUFdK0gPQcsGeeIYhjyu.png"
                alt="After Effects Timeline - Complex Rig Setup"
                width={1400}
                height={800}
                className="max-w-full h-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm p-4 text-center">
              Complete rigging timeline showing all character controllers and animation layers
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="flex justify-center p-4">
              <ImageLightbox
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6A56828B-75AB-4DF3-A082-ABC8E9C57381-e1742913261321-ihumlho3FbGQxzgFD\

import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">About Me</h1>
        <div className="w-24 h-1 bg-purple-500 mx-auto"></div>
      </header>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative aspect-square rounded-lg overflow-hidden">
          <Image src="/placeholder.svg?height=600&width=600" alt="Profile Image" fill className="object-cover" />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold mb-4">Multidisciplinary Creative</h2>
          <p className="text-lg text-gray-300">
            I'm a multidisciplinary creative working across digital illustration, graphic design, photo editing, motion
            graphics, video editing, and 3D modeling. Self-taught and new to the industry, I bring fresh perspectives to
            every project.
          </p>
          <p className="text-lg text-gray-300">
            My autodidactic journey has allowed me to develop skills in Clip Studio Paint, Illustrator, Photoshop, After
            Effects, Premiere, and Blender on my own terms. I believe that being self-taught gives me a unique
            advantage—I approach each challenge with curiosity and an open mind.
          </p>
          <p className="text-lg text-gray-300">
            I'm passionate about visual storytelling and bringing ideas to life across different mediums. Currently open
            to new opportunities and excited to grow through collaboration.
          </p>
        </div>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gray-900 p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">Digital Illustration</h3>
            <p className="text-gray-400">Clip Studio Paint, Illustrator</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">Graphic Design</h3>
            <p className="text-gray-400">Photoshop, Illustrator</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">Motion Graphics</h3>
            <p className="text-gray-400">After Effects</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">Video Editing</h3>
            <p className="text-gray-400">Premiere Pro</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">3D Modeling</h3>
            <p className="text-gray-400">Blender</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">Character Design</h3>
            <p className="text-gray-400">Clip Studio Paint, Illustrator</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">Animation</h3>
            <p className="text-gray-400">After Effects, Clip Studio Paint</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">Photo Editing</h3>
            <p className="text-gray-400">Photoshop, Lightroom</p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">My Process</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-4 text-xl font-bold">
              1
            </div>
            <h3 className="text-xl font-bold mb-4">Ideation & Sketching</h3>
            <p className="text-gray-300">
              I start with rough sketches and concepts, exploring different ideas and approaches before settling on a
              direction.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-4 text-xl font-bold">
              2
            </div>
            <h3 className="text-xl font-bold mb-4">Digital Development</h3>
            <p className="text-gray-300">
              Taking the best concepts forward, I develop them digitally, refining the details and bringing the vision
              to life.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-4 text-xl font-bold">
              3
            </div>
            <h3 className="text-xl font-bold mb-4">Animation & Finalization</h3>
            <p className="text-gray-300">
              For animated projects, I rig and animate the characters, adding motion and personality to complete the
              project.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

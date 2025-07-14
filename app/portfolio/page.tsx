import Link from "next/link"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Portfolio</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          A showcase of my creative work across different mediums and projects.
        </p>
      </header>

      <Tabs defaultValue="all" className="mb-16">
        <div className="flex justify-center mb-8">
          <TabsList className="bg-gray-900">
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="characters">Characters</TabsTrigger>
            <TabsTrigger value="animations">Animations</TabsTrigger>
            <TabsTrigger value="illustrations">Illustrations</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/projects/prombo">
            <Card className="overflow-hidden bg-gray-900 border-gray-800 transition-all hover:border-cyan-500/50 hover:shadow-md hover:shadow-cyan-500/20">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/images/prombo.png"
                  alt="Prombo"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Prombo</h3>
                <p className="text-gray-400">A cute, robotic teacher within manufacturing industries</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/projects/morning-paws">
            <Card className="overflow-hidden bg-gray-900 border-gray-800 transition-all hover:border-purple-500/50 hover:shadow-md hover:shadow-purple-500/20">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/images/morning-paws.png"
                  alt="Morning Paws"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Morning Paws</h3>
                <p className="text-gray-400">An analog-horror inspired project</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/projects/illustrations">
            <Card className="overflow-hidden bg-gray-900 border-gray-800 transition-all hover:border-green-500/50 hover:shadow-md hover:shadow-green-500/20">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/images/illustrations.png"
                  alt="General Illustrations"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">General Illustrations</h3>
                <p className="text-gray-400">Drawings & Illustrations</p>
              </CardContent>
            </Card>
          </Link>
        </TabsContent>

        <TabsContent value="characters" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="overflow-hidden bg-gray-900 border-gray-800">
            <div className="relative h-64 w-full overflow-hidden">
              <Image src="/images/prombo.png" alt="Prombo Character" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2">Prombo</h3>
              <p className="text-gray-400">Robotic mascot character</p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden bg-gray-900 border-gray-800">
            <div className="relative h-64 w-full overflow-hidden">
              <Image src="/images/whiskers-normal.png" alt="Mr. Whiskers" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2">Mr. Whiskers</h3>
              <p className="text-gray-400">Morning Paws character</p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden bg-gray-900 border-gray-800">
            <div className="relative h-64 w-full overflow-hidden">
              <Image src="/images/sunny-normal.png" alt="Miss Sunny" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2">Miss Sunny</h3>
              <p className="text-gray-400">Morning Paws character</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="animations" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="overflow-hidden bg-gray-900 border-gray-800">
            <div className="aspect-video bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/placeholder1"
                title="PROMBO Well Done"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2">PROMBO Well Done</h3>
              <p className="text-gray-400">Animation showcasing Prombo's positive feedback</p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden bg-gray-900 border-gray-800">
            <div className="aspect-video bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/placeholder2"
                title="PROMBO Try Again"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2">PROMBO Try Again</h3>
              <p className="text-gray-400">Animation showcasing Prombo's error feedback</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="illustrations" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="overflow-hidden bg-gray-900 border-gray-800">
            <div className="relative h-64 w-full overflow-hidden">
              <Image src="/images/illustrations.png" alt="Illustration 1" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2">Character Study</h3>
              <p className="text-gray-400">Digital illustration</p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden bg-gray-900 border-gray-800">
            <div className="relative h-64 w-full overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="Illustration 2" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2">Concept Art</h3>
              <p className="text-gray-400">Environment design</p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden bg-gray-900 border-gray-800">
            <div className="relative h-64 w-full overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="Illustration 3" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2">Fan Art</h3>
              <p className="text-gray-400">Digital painting</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

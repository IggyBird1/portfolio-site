import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Contact Me</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div>
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="text-gray-300 mb-8">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <Mail className="h-6 w-6 text-purple-400 mr-4 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Email</h3>
                <p className="text-gray-300">contact@igalv.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="h-6 w-6 text-purple-400 mr-4 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Phone</h3>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-purple-400 mr-4 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Location</h3>
                <p className="text-gray-300">New York, NY</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Name
                </label>
                <Input id="name" placeholder="Your name" className="bg-gray-800 border-gray-700" />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-gray-800 border-gray-700"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="How can I help you?" className="bg-gray-800 border-gray-700" />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message..." className="bg-gray-800 border-gray-700" rows={6} />
              </div>
            </div>

            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

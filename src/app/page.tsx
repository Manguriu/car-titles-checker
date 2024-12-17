import Link from 'next/link'
import { ArrowRight, Shield, Search, AlertTriangle } from 'lucide-react'


interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}


export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-orange-50">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">VehicleCheck</h1>
          <Link href="/Search" className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl">
            Get Started
          </Link>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-20">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-blue-800 mb-6 leading-tight">Your Trusted Vehicle <br />History Partner</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">Uncover the truth about any vehicle with just a plate number or VIN</p>
          <Link href="/Search" className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-all shadow-lg hover:shadow-xl">
            Start Your Search
            <ArrowRight className="ml-2" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <FeatureCard 
            icon={<Shield className="w-16 h-16 text-blue-500" />}
            title="Comprehensive Reports"
            description="Get detailed information about ownership, accidents, and more."
          />
          <FeatureCard 
            icon={<Search className="w-16 h-16 text-green-500" />}
            title="Easy to Use"
            description="Simply enter a plate number or VIN to get started."
          />
          <FeatureCard 
            icon={<AlertTriangle className="w-16 h-16 text-orange-500" />}
            title="Accident History"
            description="View detailed accident reports including images and causes."
          />
        </div>
      </main>

      <footer className="bg-blue-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">&copy; 2023 VehicleCheck. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg text-center transition-all hover:shadow-xl">
      <div className="flex justify-center mb-6">{icon}</div>
      <h3 className="text-2xl font-semibold mb-4 text-blue-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}



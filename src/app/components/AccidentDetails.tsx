import Image from 'next/image'
import { Accident } from '@/utils/VehicleData'
import { MapPin, BadgeIcon as Police, AlertTriangle, ImageIcon } from 'lucide-react'

export function AccidentDetails({ accident }: { accident: Accident }) {
  return (
    <div className="border rounded-2xl p-6 mb-6 bg-orange-50 shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-orange-800">Accident on {accident.date}</h3>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <DetailItem icon={<MapPin className="w-5 h-5" />} label="Location" value={accident.location} />
        <DetailItem icon={<Police className="w-5 h-5" />} label="Police Station" value={accident.policeStation} />
        <DetailItem icon={<AlertTriangle className="w-5 h-5" />} label="Cause" value={accident.cause} />
      </div>
      <div className="mt-6">
        <h4 className="font-semibold mb-4 flex items-center text-lg">
          <ImageIcon className="w-5 h-5 mr-2" />
          Images:
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {accident.images.map((image, index) => (
            <Image 
              key={index} 
              src={image} 
              alt={`Accident image ${index + 1}`} 
              width={300} 
              height={200} 
              className="rounded-lg shadow-md object-cover w-full h-48"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function DetailItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm">
      <div className="mr-3 text-orange-600 mt-1">{icon}</div>
      <div>
        <span className="font-semibold block mb-1">{label}</span>
        <span className="text-gray-700">{value}</span>
      </div>
    </div>
  )
}
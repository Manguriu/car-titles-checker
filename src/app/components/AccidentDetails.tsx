import Image from 'next/image'
import { Accident } from '@/utils/VehicleData'

export function AccidentDetails({ accident }: { accident: Accident }) {
  return (
    <div className="border rounded-lg p-4 mb-4">
      <h3 className="text-lg font-semibold mb-2">Accident on {accident.date}</h3>
      <p><strong>Location:</strong> {accident.location}</p>
      <p><strong>Police Station:</strong> {accident.policeStation}</p>
      <p><strong>Cause:</strong> {accident.cause}</p>
      <div className="mt-2">
        <h4 className="font-semibold mb-1">Images:</h4>
        <div className="flex flex-wrap gap-2">
          {accident.images.map((image, index) => (
            <Image 
              key={index} 
              src={image} 
              alt={`Accident image ${index + 1}`} 
              width={200} 
              height={150} 
              className="rounded"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

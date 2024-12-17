'use client'

import { useState } from 'react'
import { useActionState } from 'react' // Updated hook
import { searchVehicleAction } from './actions'
import { AccidentDetails } from './components/AccidentDetails'
import { Vehicle } from '../utils/VehicleData'

export default function VehicleSearch() {
  const [searchResult, formAction] = useActionState(searchVehicleAction, null) // Updated
  const [searchPerformed, setSearchPerformed] = useState(false)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Vehicle Search</h1>
      <form
        action={formAction}
        onSubmit={() => setSearchPerformed(true)}
        className="mb-4"
      >
        <input
          type="text"
          name="searchTerm"
          placeholder="Enter plate number or VIN"
          className="border p-2 mr-2"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Search
        </button>
      </form>

      {/* Display error if exists */}
      {searchPerformed && searchResult && 'error' in searchResult && (
        <p className="text-red-500">{searchResult.error}</p>
      )}

      {/* Display vehicle details if search was successful */}
      {searchPerformed &&
        searchResult &&
        'vehicle' in searchResult &&
        searchResult.vehicle && (
          <VehicleDetails vehicle={searchResult.vehicle} />
        )}
    </div>
  )
}

function VehicleDetails({ vehicle }: { vehicle: Vehicle }) {
  return (
    <div className="border rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-2">Vehicle Details</h2>
      <p>
        <strong>Make:</strong> {vehicle.make}
      </p>
      <p>
        <strong>Model:</strong> {vehicle.model}
      </p>
      <p>
        <strong>Year:</strong> {vehicle.year}
      </p>
      <p>
        <strong>Owner:</strong> {vehicle.owner}
      </p>
      <p>
        <strong>Plate Number:</strong> {vehicle.plateNumber}
      </p>
      <p>
        <strong>VIN:</strong> {vehicle.vin}
      </p>
      {vehicle.salvageStatus && (
        <p>
          <strong>Salvage Status:</strong> {vehicle.salvageStatus}
        </p>
      )}

      <h3 className="text-lg font-semibold mt-4 mb-2">Accident History</h3>
      {vehicle.accidents.length > 0 ? (
        vehicle.accidents.map(accident => (
          <AccidentDetails key={accident.id} accident={accident} />
        ))
      ) : (
        <p>No accidents reported.</p>
      )}
    </div>
  )
}

'use client'

import { useState } from 'react'
import { useActionState } from 'react'
import { searchVehicleAction } from '../actions'
import { AccidentDetails } from '../components/AccidentDetails'
import { Vehicle } from '@/utils/VehicleData'
import Link from 'next/link'
import { ArrowLeft, Search } from 'lucide-react'

const initialState = {
    vehicle: undefined,
    error: undefined,
}

export default function VehicleSearch() {
    const [state, formAction] = useActionState(searchVehicleAction, initialState)
    const [searchPerformed, setSearchPerformed] = useState(false)

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-orange-50">
            <div className="container mx-auto p-8">
                <Link
                    href="/"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 text-lg"
                >
                    <ArrowLeft className="mr-2" />
                    Back to Home
                </Link>
                <div className=''>
                    <h1 className=''>sample Search</h1>
                    <div className='text-red-500 flex flex-col gap-2 mt-4'>
                    <div>
                        <h1> plateNumber: 'KDS456T' </h1>
                        <h1>vin: 'ERC123456789W',</h1>
                    </div>
                    <div>
                        <h1>plateNumber: 'KDG123G',</h1>
                        <h1>vin: 'ABC2345678X',</h1>
                    </div>
                    </div>
                </div>
                <h1 className="text-4xl font-bold text-blue-800 mb-12">Vehicle Search</h1>
                <form
                    action={formAction} // Attach formAction here
                    onSubmit={() => setSearchPerformed(true)} // Update searchPerformed state
                    className="mb-12"
                >
                    <div className="flex">
                        <input
                            type="text"
                            name="searchTerm"
                            placeholder="Enter plate number or VIN"
                            className="flex-grow border-2 border-gray-300 rounded-l-full p-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-orange-500 text-white p-4 rounded-r-full hover:bg-orange-600 transition-colors"
                        >
                            <Search className="w-6 h-6" />
                        </button>
                    </div>
                </form>

                {/* Display error if search fails */}
                {searchPerformed && state.error && (
                    <p className="text-red-500 bg-red-100 p-6 rounded-2xl text-lg">{state.error}</p>
                )}

                {/* Display vehicle details if search succeeds */}
                {searchPerformed && state.vehicle && (
                    <VehicleDetails vehicle={state.vehicle} />
                )}
            </div>
        </div>
    )
}

function VehicleDetails({ vehicle }: { vehicle: Vehicle }) {
    return (
        <div className="bg-white border rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-semibold text-blue-800 mb-6">Vehicle Details</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
                <DetailItem label="Make" value={vehicle.make} />
                <DetailItem label="Model" value={vehicle.model} />
                <DetailItem label="Year" value={vehicle.year.toString()} />
                <DetailItem label="Owner" value={vehicle.owner} />
                <DetailItem label="Plate Number" value={vehicle.plateNumber} />
                <DetailItem label="VIN" value={vehicle.vin} />
                {vehicle.salvageStatus && (
                    <DetailItem label="Salvage Status" value={vehicle.salvageStatus} />
                )}
            </div>

            <h3 className="text-2xl font-semibold text-blue-800 mb-6">Accident History</h3>
            {vehicle.accidents.length > 0 ? (
                vehicle.accidents.map((accident) => (
                    <AccidentDetails key={accident.id} accident={accident} />
                ))
            ) : (
                <p className="text-green-600 bg-green-100 p-6 rounded-2xl text-lg">
                    No accidents reported.
                </p>
            )}
        </div>
    )
}

function DetailItem({ label, value }: { label: string; value: string }) {
    return (
        <div className="bg-gray-50 p-4 rounded-lg">
            <span className="font-semibold text-gray-600 block mb-1">{label}</span>
            <span className="text-lg">{value}</span>
        </div>
    )
}

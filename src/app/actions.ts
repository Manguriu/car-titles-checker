'use server'

import { searchVehicle } from '@/utils/VehicleData'
import { Vehicle } from '@/utils/VehicleData'

export async function searchVehicleAction(
  state: { error?: string; vehicle?: Vehicle },
  formData: FormData
): Promise<{ error?: string; vehicle?: Vehicle }> {
  const searchTerm = formData.get('searchTerm') as string

  if (!searchTerm) {
    return { error: 'Please enter a plate number or VIN' }
  }

  const vehicle = searchVehicle(searchTerm)

  if (!vehicle) {
    return { error: 'No vehicle found with the provided plate number or VIN' }
  }

  return { vehicle }
}

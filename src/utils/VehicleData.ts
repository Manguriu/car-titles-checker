export interface Accident {
    id: string
    date: string
    location: string
    policeStation: string
    cause: string
    images: string[]
  }
  
  export interface Vehicle {
    plateNumber: string
    vin: string
    make: string
    model: string
    year: number
    owner: string
    accidents: Accident[]
    salvageStatus?: string
  }
  
  const mockVehicles: Vehicle[] = [
    {
      plateNumber: 'ABC123',
      vin: '1HGCM82633A004352',
      make: 'Honda',
      model: 'Accord',
      year: 2019,
      owner: 'John Doe',
      accidents: [
        {
          id: '1',
          date: '2021-05-15',
          location: 'Main St & 5th Ave, Cityville',
          policeStation: 'Cityville Central',
          cause: 'Natural accident',
          images: ['/damaged1.png']
        }
      ],
      salvageStatus: 'Clean'
    },
    {
      plateNumber: 'XYZ789',
      vin: '5XYZU3LB0DG006195',
      make: 'Toyota',
      model: 'Camry',
      year: 2020,
      owner: 'Jane Smith',
      accidents: [
        {
          id: '1',
          date: '2022-03-10',
          location: 'Highway 101, Mile Marker 25',
          policeStation: 'Highway Patrol Station 3',
          cause: 'Drunk driving',
          images: ['/damaged1to.png']
        },
        {
          id: '2',
          date: '2023-01-22',
          location: 'Oak St & Elm Rd, Townsville',
          policeStation: 'Townsville PD',
          cause: 'Brake fail',
          images: ['/damaged2.png']
        }
      ]
    }
  ]
  
  export function searchVehicle(searchTerm: string): Vehicle | null {
    return (
      mockVehicles.find(
        vehicle => vehicle.plateNumber === searchTerm || vehicle.vin === searchTerm
      ) || null
    )
  }
  
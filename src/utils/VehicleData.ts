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
      plateNumber: 'KDG123G',
      vin: 'ABC2345678X',
      make: 'Honda',
      model: 'Accord',
      year: 2019,
      owner: 'John Doe',
      accidents: [
        {
          id: '1',
          date: '2021-05-15',
          location: 'Nakuru Naivasha highway Kinugi',
          policeStation: 'Kinungi Police Post',
          cause: 'Natural accident',
          images: ['/damaged1.png']
        }
      ],
      salvageStatus: 'Clean'
    },
    {
      plateNumber: 'KDS456T',
      vin: 'ERC123456789W',
      make: 'Toyota',
      model: 'Camry',
      year: 2020,
      owner: 'Jane Smith',
      accidents: [
        {
          id: '1',
          date: '2022-03-10',
          location: 'Thika road Githurai',
          policeStation: 'Kasarani Police Station',
          cause: 'Drunk driving',
          images: ['/damaged1to.png']
        },
        {
          id: '2',
          date: '2023-01-22',
          location: 'Kilimani east side',
          policeStation: 'Kilimani Police Station',
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
  
import faker from 'faker'
import { GroupSingleQuestion, SingleQuestion } from './types'

const cars = Array.from(
  new Set(new Array(1000).fill(0).map(() => faker.vehicle.vehicle()))
)

export async function searchVehicles(query: string) {
  if (query === '') return []
  return cars
    .filter((car) => car.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 8)
}

export async function searchVehiclesWithIds(query: string) {
  if (query === '') return []
  return cars
    .filter((car) => car.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 8)
    .map((car, index) => ({ id: index, car: car }))
}

export function fetchQuestions(): (SingleQuestion | GroupSingleQuestion)[] {
  return [
    {
      discriminator: 'single',
      title: 'Do you get headaches several times a day?',
      answers: [
        { id: 'yes', label: 'Yes' },
        { id: 'no', label: 'No' },
        { id: 'dont-know', label: "Don't know" },
      ],
    },
    {
      discriminator: 'group-single',
      title: 'How would you describe the chest pain?',
      groups: [
        {
          label: 'Pressure',
          answers: [
            { id: 'yes', label: 'Yes' },
            { id: 'no', label: 'No' },
          ],
        },
        {
          label: 'Burning',
          answers: [
            { id: 'yes', label: 'Yes' },
            { id: 'no', label: 'No' },
          ],
        },
      ],
    },
  ]
}

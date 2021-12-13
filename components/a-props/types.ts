export type Book = {
  title: string
  author: string
  year: number
  photoUrl: string
}

export enum OrderStatus {
  New = 'new',
  Paid = 'paid',
  Sent = 'paid',
  Cancelled = 'cancelled',
}

export type Question = {
  title: string
  discriminator: 'single' | 'group-single'
}

export type SingleQuestion = Question & {
  discriminator: 'single',
  answers: { id: string; label: string }[]
}

export type GroupSingleQuestion = Question & {
  discriminator: 'group-single',
  groups: {
    label: string,
    answers: {
      id: string
      label: string
    }[]
  }[]
}

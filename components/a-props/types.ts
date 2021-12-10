export type Book = {
  title: string
  year: number
}

export enum LayoutType {
  Default = 'default',
  Sidebar = 'sidebar',
}

export type Question = {
  title: string
  discriminator: 'single' | 'group-single'
}

export type SingleQuestion = Question & {
  answers: { id: string; label: string }[]
}

export type GroupSingleQuestion = Question & {
  groups: {
    groupId: string
    answers: {
      id: string
      label: string
    }[]
  }[]
}

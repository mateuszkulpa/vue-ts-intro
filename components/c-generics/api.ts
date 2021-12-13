import faker from 'faker'

export async function fetchGenres(page: number, pageSize: number) {
  const results = new Array(pageSize).fill(0).map(() => ({
    name: faker.music.genre(),
    id: faker.git.commitSha(),
  }))
  return results
}

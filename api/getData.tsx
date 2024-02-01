export async function getData(url: string) {
  try {
    const res = await fetch(url)

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    const data = await res.json()

    if (!data) {
      throw new Error('Empty response')
    }

    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
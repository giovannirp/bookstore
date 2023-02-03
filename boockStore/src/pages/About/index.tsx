import { useEffect, useState } from 'react'
import { ContainerAbout, ContentAbout } from './styles'

export interface IAbout {
  id: number
  title: string
  description: string
}

export function About() {
  const [about, setAbout] = useState<IAbout[]>([])

  async function fetchAbout() {
    const url = 'http://localhost:3000/about'

    const res = await fetch(url)
    const data = await res.json()
    setAbout(data)
  }

  useEffect(() => {
    fetchAbout()
  }, [])

  return (
    <ContainerAbout>
      {about.map((item) => {
        return (
          <ContentAbout key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </ContentAbout>
        )
      })}
    </ContainerAbout>
  )
}

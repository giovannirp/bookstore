import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ContainerDoubt, ContentDoubt, LinkAbout } from './styles'

export interface IDoubt {
  id: number
  title: string
  description: string
}

export function Doubt() {
  const [doubt, setDoubt] = useState<IDoubt[]>([])

  async function fetchDoubt() {
    const url = 'http://localhost:3000/doubt'

    const res = await fetch(url)
    const data = await res.json()
    setDoubt(data)
  }

  useEffect(() => {
    console.log(doubt)
    fetchDoubt()
  }, [doubt])

  return (
    <ContainerDoubt>
      <h1>Tire todas suas duvidas</h1>
      {doubt.map((item) => {
        return (
          <>
            <ContentDoubt key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </ContentDoubt>
          </>
        )
      })}
      <LinkAbout to="about">Clique aqui e veja tudo sobre o sistemas</LinkAbout>
    </ContainerDoubt>
  )
}
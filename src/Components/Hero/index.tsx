import { useEffect, useState } from 'react'
import { Button, ContainerHero, ContentButton, MovableButton } from './styled'

export const HeroBanner = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 120,
    y: window.innerHeight * 0.668, // pega a porcentagem da tela
  })

  useEffect(() => {
    const handleResize = () => {
      setPosition((prev) => ({
        ...prev,
        y: window.innerHeight * 0.7, // Recalcula `y` a nova altura da tela
      }))
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const moveButton = () => {
    const maxX = window.innerWidth - 100 // Largura da tela menos a largura do botão
    const newX = Math.floor(Math.random() * maxX)

    setPosition((prevPosition) => ({
      x: newX,
      y: prevPosition.y, // Mantém `y` dinâmico e proporcional
    }))
  }

  return (
    <ContainerHero>
      <h2>31/12/2024</h2>

      <p>
        Em meio a tantas, foi você quem eu vi, sem esforço, como se o universo
        todo quisesse que meus olhos encontrassem os seus. Linda, delicada e
        sutil, como uma rosa cor-de-rosa, você é a diferença que faz{' '}
        <strong> meu coração bater mais forte. </strong> Nesta virada, não quero
        apenas virar de ano, mas começar uma nova história ao seu lado. E como a
        primeira interrogação desta historia, você aceita estar ao meu lado ?
      </p>

      <ContentButton>
        <Button>Simm</Button>
        <MovableButton
          x={position.x}
          y={position.y}
          onMouseEnter={moveButton}
          onTouchStart={moveButton}
        >
          Nãoo
        </MovableButton>
      </ContentButton>
    </ContainerHero>
  )
}

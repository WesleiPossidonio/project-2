
import Lottie from 'lottie-react'

import AnimationData from '../../assets/AnimationTwo.json'
import { Button, ContainerHero, ContainerText } from './styled'
import { useNavigate } from 'react-router-dom'

export const HeroBanner = () => {

  const navigate = useNavigate()

  return (
    <ContainerHero>
      <Lottie animationData={AnimationData} />

      <ContainerText>
        <h2>De Weslei para Carolina</h2>
        <Button onClick={() => navigate('/carta-weslei')}>Ler</Button>
      </ContainerText>

    </ContainerHero>
  )
}
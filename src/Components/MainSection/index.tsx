import Lottie from 'lottie-react'
import AnimationSvg from '../../assets/AnimationOne.json'
import { ContainerMainSection, ContainerText, Header, LinkNav, Text } from "./styled"
import { useNavigate } from 'react-router-dom'

export const MainSection = () => {

  const navigate = useNavigate()
  return (
    <ContainerMainSection>
      <Header>
        <Text>08/09/2024</Text>
        <LinkNav onClick={() => navigate('/')}>Voltar</LinkNav>
      </Header>

      <ContainerText>
        <Text>
          Em meio de tantas pessoas, foi você quem eu vi, sem esforço, como se o universo
          todo quisesse que meus olhos encontrassem os seus. Linda, delicada e
          sutil, como uma rosa cor-de-rosa. Você é a diferença que faz o meu coração bater mais forte.
        </Text>

        <Text>
          Isso é uma simples declaração para dizer que, você trouxe cor ao meu mundo cinza...
          E que sim, mesmo aguardando a resposta de Deus, eu estou muito feliz e amando te conhecer todos os dias.
        </Text>

        <Text>
          O meu desejo é que Deus esculte as nossas orações rsrs, enquanto isso vou fazendo na maneira certa,
          sabendo que não podemos perder o foco, a paz e a certeza que ele sabe o melhor para nós 🙏❤️️.

        </Text>
      </ContainerText>

      <Lottie animationData={AnimationSvg} />
    </ContainerMainSection>
  )
}



// import Lottie from 'lottie-react'
// import AnimationSvg from '../../assets/AnimationOne.json'
import { ContainerMainSection, ContainerText, Header, LinkNav, Text } from "./styled"
import { useNavigate } from 'react-router-dom'

export const MainSection = () => {

  // const date = new Date

  const navigate = useNavigate()
  return (
    <ContainerMainSection>
      <Header>
        <Text>22/02/2025</Text>
        <LinkNav onClick={() => navigate('/')}>Voltar</LinkNav>
      </Header>

      <ContainerText>
        <Text>
          {/* Em meio de tantas pessoas, foi você quem eu vi, sem esforço, como se o universo
          todo quisesse que meus olhos encontrassem os seus. Linda, delicada e
          sutil, como uma rosa cor-de-rosa. Você é a diferença que faz o meu coração bater mais forte. */}
          Posso dizer que, voce conseguiu me deixar pilhadooo kkakaka, mas não só isso,
          o tempo que passo com vc me faz muito bem, me faz ficar mais calmo sabe... Você é muito importante para mim...
        </Text>

        <Text>
          {/* Isso é uma simples declaração para dizer que, você trouxe cor ao meu mundo cinza...
          E que sim, mesmo aguardando a resposta de Deus, eu estou muito feliz e amando te conhecer todos os dias. */}
          Simmm não posso passar dos limites, kakaka, mas queria dizer que você é inclivel simm. Passou por semanas de pressão que Meu Deus,
          mas não deixou a peteca cair.
        </Text>

        <Text>
          Só peço uma coisa: Não deixe
          que nenhuma correia do dia ou problemas fazer você pensar ao contrário do que eu falei. Eu não me apaixonei por uma qualquer
          e você é muito mais do que falei até aqui. Pareiii, prometo!!!
          Como sempre falo confiaa, dará tudo certoo, Deus sabe de tudo e sabe o que faz.
        </Text>

        <Text>
          {/* O meu desejo é que Deus esculte as nossas orações rsrs, enquanto isso vou fazendo na maneira certa,
          sabendo que não podemos perder o foco, a paz e a certeza que ele sabe o melhor para nós 🙏❤️️. */}
          Saiba que, estou torcendo pelo seu sucesso e seu crescimento, e que pode comigo para o que for preciso.
          Te acompanhar de perto é uma felicidade para mim... Ainda mais te atentar e ver os seus biquinhos quando estar estressada kakaka.
          Pois isso salva os meus dias! rummm ksksks 💙
        </Text>
      </ContainerText>

      {/* <Lottie animationData={AnimationSvg} /> */}
    </ContainerMainSection>
  )
}



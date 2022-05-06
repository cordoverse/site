import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Header, Hero, Wrapper, SubHeader, HeroWrapper } from './styles'

const Main = () => {
  return (
    <Wrapper>
      <Parallax pages={4}>
        <ParallaxLayer
          offset={0}
          speed={0.1}
          style={{
            backgroundImage: `url('./images/criptowknd.jpg')`,
            backgroundSize: 'cover',
          }}
        >
          <HeroWrapper>
            <Hero>
              <Header>Finde Cripto Córdoba</Header>
              <SubHeader>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, urna eu tempor congue, nisi nunc tristique
                nunc, euismod aliquam nisl nunc euismod.
              </SubHeader>
            </Hero>
          </HeroWrapper>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5} factor={0.5}>
          <HeroWrapper>
            <Hero>
              <Header>Cronograma de charlas</Header>
              <SubHeader>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, urna eu tempor congue, nisi nunc tristique
                nunc, euismod aliquam nisl nunc euismod.
              </SubHeader>
            </Hero>
          </HeroWrapper>
        </ParallaxLayer>
      </Parallax>
    </Wrapper>
  )
}

export default Main

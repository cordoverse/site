import styled from '@emotion/styled';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export const Wrapper = styled.main`
  height: 100vh;
  background-color: #1A001F;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Hero = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;
`;

export const HeroWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const Header = styled.h1`
  font-size: 62px;
  font-weight: 800;
  color: #fff;
  margin: 0;
`;

export const SubHeader = styled.h3`
  font-size: 32px;
  font-weight: 300;
  color: #fff;
  margin: 0;
`
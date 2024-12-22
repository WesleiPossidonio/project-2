import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;   
  font-family: "Playwrite CO Guides", serif;
  text-decoration: none;
}



html {
  scroll-behavior: smooth;
  @media (max-width: 1024px) {
    font-size: 90.5%;
  }
}

main {
  width: 100%;
}
`

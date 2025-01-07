import styled from 'styled-components'

export const ContainerHero = styled.section`
  width: 100%;
  height: 100svh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  position: relative;

  padding: 1.5rem;
  background-color: #fff;

  position: relative;

  
`

export const ContainerText = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 1rem;

position: absolute;
top: 67%;



h2 {
    font-size: 1rem;
    color: #000;
  }

  p {
    max-width: 70%;
    font-size: 0.868rem;
    font-weight: 500;
    color: #000;

    margin-right: 0.6rem;
  }
`

export const Button = styled.button`
  width: 10rem;
  padding: 0.625rem 1.25rem;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #E50A7B;
  color: #fff;
  transition: all 0.2s ease-in-out;
`

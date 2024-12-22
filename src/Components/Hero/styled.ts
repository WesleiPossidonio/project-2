import styled from 'styled-components'

import bgImage from '../../assets/bgImage.jpeg'

export const ContainerHero = styled.section`
  width: 100vw;
  height: 100svh;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  padding: 1.5rem;

  background-image: url(${bgImage});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  position: relative;

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
export const ContentButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const Button = styled.button`
  padding: 0.625rem 1.25rem;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #000;
  color: #fff;
  transition: all 0.2s ease-in-out;
`

export const MovableButton = styled.button<{ x: number; y: number }>`
  position: absolute;
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;

  padding: 0.625rem 1.25rem;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #dc3545;
  color: #fff;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #c82333;
  }
`

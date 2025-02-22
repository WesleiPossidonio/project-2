import styled from "styled-components";

export const ContainerMainSection = styled.section`
width: 100%;
height: auto;
min-height:  100svh ;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

padding: 1.5rem;

text-align: center;
background-color: ${({ theme }) => theme.colors["base-white"]};
`

export const Header = styled.header`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`

export const LinkNav = styled.a`
align-self: flex-end;
font-size: ${({ theme }) => theme.FontSizes["text-regular-sm"]};
color: ${({ theme }) => theme.colors["base-text"]};
font-family: "Playwrite CO Guides", serif;
cursor: pointer;
`

export const ContainerText = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 1rem;

margin-top: 2rem;
/* margin-bottom: -4.6rem; */

`

export const Text = styled.p`
font-size: ${({ theme }) => theme.FontSizes["text-regular-s"]};
color: ${({ theme }) => theme.colors["base-text"]};
font-family: "Playwrite CO Guides", serif;
 `
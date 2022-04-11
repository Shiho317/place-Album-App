import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100%;
  height: 50vh;
  background: ${props => props.theme.color.blue};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  @media ${props => props.theme.device.laptop} {
    height: 30vh;
  }

  & p{
    font-size: 0.8rem;
    text-align: center;
    color: white;
  }
`

export const FooterContentsWrapper = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 0.3rem;

  @media ${props => props.theme.device.laptop} {
    flex-direction: row;
    justify-content: space-evenly;
    gap: 0;
  }
`

export const Contents = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  @media ${props => props.theme.device.laptop} {
    width: unset;
  }

  & ul{
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  & li{
    list-style: none;
  }

  & li a{
    text-decoration: none;
    font-size: 0.8rem;
    color: ${props => props.theme.color.middleblue};
    cursor: pointer;
    transition: all 0.5s ease;

    @media ${props => props.theme.device.laptop} {
      font-size: 1rem;
    }

    &:hover{
      color: ${props => props.theme.color.lightblue};
    }
  }

  & h1{
    color: ${props => props.theme.color.middleblue};
    font-size: 2rem;
    font-family: 'Oswald', sans-serif;

    @media ${props => props.theme.device.laptop} {
      font-size: 3rem;
    }
  }

  & h3{
    color: ${props => props.theme.color.middleblue};
    font-size: 1rem;

    @media ${props => props.theme.device.laptop} {
      font-size: 1.1rem;
    }
  }
`


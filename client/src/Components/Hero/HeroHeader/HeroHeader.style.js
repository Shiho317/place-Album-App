import styled from 'styled-components';

export const HeroHeaderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${props => props.theme.device.laptop} {
    flex-direction: row;
  }
`

export const HeroImg = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  & img{
    width: 100%;
  }

  @media ${props => props.theme.device.laptop} {

  }
`

export const HeroTitle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  & h1{
    text-align: center;
    font-size: 1.5rem;

    @media ${props => props.theme.device.laptop} {
      font-size: 2rem;
    }
  }

  & button{
    width: 10rem;
    height: 2.5rem;
    border: none;
    background: ${props => props.theme.color.middleblue};
    color: white;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;

    @media ${props => props.theme.device.laptop} {
      width: 15rem;
      height: 3rem;
      font-size: 1.1rem;
    }

    &:hover{
      background: ${props => props.theme.color.lightblue};
      transition: all 0.5s ease;
    }
  }
`
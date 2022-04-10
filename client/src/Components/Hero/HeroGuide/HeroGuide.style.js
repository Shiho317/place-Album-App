import styled from "styled-components";

export const GuideWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  & button{
    width: 10rem;
    height: 2.5rem;
    border: none;
    background: ${props => props.theme.color.middleblue};
    color: white;
    cursor: pointer;
    border-radius: 5px;
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

  & .time-line{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & .time-line-el {
    width: 70%;
  }

  & .step-img {
    width: 100%;
  }
`

export const GuideTitle = styled.div`
  width: 80%;
  height: 10vh;
  color: ${props => props.theme.color.middleblue};
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid ${props => props.theme.color.middleblue};

  @media ${props => props.theme.device.laptop} {
    width: 30%;
  }

  & h1{
    font-size: 1.5rem;

    @media ${props => props.theme.device.laptop} {
      font-size: 2rem;
    }
  }
`
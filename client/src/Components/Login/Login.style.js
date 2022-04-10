import styled from "styled-components"

export const LoginWrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(84, 140, 168, 0.5);
  width: 90%;
  height: 80%;
  border-radius: 1rem;
  box-shadow: 0 0 20px rgba(51, 66, 87, 0.5);

  @media ${props => props.theme.device.laptop} {
    flex-direction: row;
    width: 80%;
    height: 75%;
  }
`

export const LoginDetails = styled.div`
  flex: 1;
  text-align: center;
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  @media ${props => props.theme.device.laptop} {
    gap: 2rem;
  }

  & h1{
    font-size: 1.2rem;

    @media ${props => props.theme.device.laptop} {
      font-size: 2rem;
    }
  }

  & p{
    font-size: 0.8rem;

    @media ${props => props.theme.device.laptop} {
      font-size: 1rem;
    }
  }

  & a{
    color: ${props => props.theme.color.blue};
  }
`

export const LoginImage = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: ceter;
  justify-content: center;
  border-radius: 1rem 1rem 0 0;

  @media ${props => props.theme.device.laptop} {
    border-radius: 1rem 0 0 1rem;
  }

  & img{
    height: 100%;
  }
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contentL center;
  gap: 1rem;

  & input{
    width: 90%;
    height: 1.5rem;
    border: none;
    outline: none;

    @media ${props => props.theme.device.laptop} {
      width: 70%;
      height: 2rem;
    }
  }

  & button{
    width: 10rem;
    height: 2rem;
    border: none;
    background: ${props => props.theme.color.middleblue};
    color: white;
    cursor: pointer;
    border-radius: 5px;
    font-size: 0.8rem;

    @media ${props => props.theme.device.laptop} {
      width: 15rem;
      height: 2.5rem;
      font-size: 1rem;
    }

    &:hover{
      background: ${props => props.theme.color.lightblue};
      transition: all 0.5s ease;
    }
  }
`
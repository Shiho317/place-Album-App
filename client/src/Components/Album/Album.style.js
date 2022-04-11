import styled from "styled-components";

export const AlbumWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;

  @media ${props => props.theme.device.laptop} {
    height: 90vh;
    flex-direction: row;
    padding: 0;
  }
`

export const AlbumInputWrapper = styled.div`
  width: 90%;
  height: 100%;
  background: ${props => props.theme.color.middleblue};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media ${props => props.theme.device.laptop} {
    width: 30%;
    height: 100%;
    gap: 3rem;
  }

  & h1{
    font-size: 1.5rem;

    @media ${props => props.theme.device.laptop} {
      font-size: 2rem;
    }
  }
  
  & form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    & input{
      width: 80%;
      height: 2rem;
    }

    & textarea{
      width: 80%;
    }

    & button{
      width: 12rem;
      height: 2.5rem;
      background: ${props => props.theme.color.blue};
      border: none;
      color: white;
      border-radius: 5px;
      cursor: pointer;
      margin-bottom: 1rem;

      &:hover{
        background: ${props => props.theme.color.lightblue};
        transition: all 0.5s ease;
      }
    }
  }
`

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: ${props => props.theme.color.lightblue};

  & .stars{
    display: flex;
    slign-items: center;
  }
`

export const Card = styled.div`
  width: 10rem;
  height: 13rem;
  display: grid;
  grid-template-rows: 4fr 0.7fr 0.7fr 0.7fr 0.7fr 0.7fr 1.8fr 0.7fr;
  align-items: center;
  background: rgba(84, 140, 168, 0.5);

  @media ${props => props.theme.device.laptop} {
    width: 15rem;
    height: 20rem;
  }

  & label{
    color: ${props => props.theme.color.lightblue};
  }

  & .album-image{
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & img{
    height: 100%;
  }
`
import styled from "styled-components";

export const AlbumWrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const AlbumInputWrapper = styled.div`
  width: 30%;
  height: 100%;
  background: ${props => props.theme.color.middleblue};
  display: flex;
  align-items: center;
  justify-content: center;
  
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
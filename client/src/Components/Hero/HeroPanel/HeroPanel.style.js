import styled from "styled-components";

export const PanelWrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: grid;
  align-items: center;

  @media ${props => props.theme.device.laptop} {
    height: 70vh;
  }
`

export const Panel = styled.div`
  width: 80%;
  height: 60vh;
  margin: 0 auto;
  background: ${props => props.theme.color.middleblue};
  display: flex;
  align-items: center;
  border-radius: 10px;

  @media ${props => props.theme.device.laptop} {
    height: 50vh;
  }
`

export const PanelContents = styled.div`
  width: 80%;
  height: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;

  & h1{
    font-size: 2rem;

    @media ${props => props.theme.device.laptop} {
      font-size: 2.5rem;
    }
  }

`


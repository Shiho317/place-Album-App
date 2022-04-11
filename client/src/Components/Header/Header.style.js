import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 5rem;
  padding: 0 2rem;
  background: ${props => props.theme.color.blue};
  display: flex;
  justify-content: space-between;
  align-items: center;

  & h3{
    font-size: 1.3rem;
    color: white;
  }
`

export const HeaderNav = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media ${props => props.theme.device.laptop} {
    gap: 2rem;
  }

  & li{
    list-style: none;
    cursor: pointer;
  }

  & a{
    text-decoration: none;
    color: white;
    font-size: 0.8rem;

    @media ${props => props.theme.device.laptop} {
      font-size: 1rem;
    }

    &:hover{
      color: ${props => props.theme.color.lightblue};
      transition: all 0.3s ease;
    }
  }
`
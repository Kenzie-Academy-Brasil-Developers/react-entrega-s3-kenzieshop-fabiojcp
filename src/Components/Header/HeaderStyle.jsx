import styled, { keyframes } from "styled-components";
import devices from "../../Assets/Devices/Devices";
import "@fontsource/finger-paint";

export const DivMain = styled.div`
  @media ${devices.mobileSS} {
    overflow: visible;
  }
`;

const animation = keyframes`
    from{
        opacity: 0.8;
    }
    to{
        opacity: 1;
    }
`;
export const DivLogo = styled.div`
  animation: ${animation} 1s;
  @media ${devices.mobileSS} {
    display: flex;
    flex-direction: row;
    width: 100vw;
    align-items: center;
    justify-content: center;
    height: 8vh;
    background-image: url(${(props) => props.background});
    background-repeat: repeat;
    background-size: 9vw;
    box-shadow: inset 0 -1.5vh 10px #ffff;
  }
`;

export const Logo = styled.img`
  @media ${devices.mobileSS} {
    src: ${(props) => props.src};
    width: 8vw;
  }
`;

export const Title = styled.p`
  @media ${devices.mobileSS} {
    color: rgb(255, 49, 49);
    font-family: "Finger Paint", cursive;
    font-weight: bold;
    font-size: 8vw;
    width: 100vw;
    text-align: center;
    letter-spacing: 2vw;
    background-color: #ffffffa9;
  }
`;

export const Search = styled.div`
  @media ${devices.mobileSS} {
    position: sticky;
    top: 0;
    height: 5vh;
    display: flex;
    justify-content: flex-start;
    width: 100vw;
    padding: 0 10vw;
    scroll-behavior;
  }
`;

export const Span = styled.span`
  @media ${devices.mobileSS} {
    position: absolute;
    margin: 1vh 0 0 2vw;
    color: red;
  }
`;

export const Input = styled.input`
  @media ${devices.mobileSS} {
    width: 100%;
    height: 4vh;
    padding: 0 0 0 8vw;
    border-radius: 6px;
    border: none;
    background-color: #f2f2f2;
  }
`;

// DivAddCar, DivQnt, BtnSome, Qnt, DivAdd, Text, TotalPrice
import styled, { keyframes } from "styled-components";
import devices from "../../Assets/Devices/Devices";

const appear = keyframes`
    from{
        opacity: 0.6;
        transform: translatey(100vh);
    }
    to{
        opacity: 1;
    }
`;

export const DivMain = styled.div`
  animation: ${appear} 1s;
  @media ${devices.mobileSS} {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 50;
    background-color: white;
    height: 100vh;
    width: 100vw;
    overflow: scroll;
  }
`;

export const DivProduct = styled.div`
  @media ${devices.mobileSS} {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: scroll;
  }
`;

export const DivHeader = styled.div`
  @media ${devices.mobileSS} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 8%;
    padding: 0 10%;
    background-color: #30303023;
  }
`;

export const BtnClose = styled.div`
  @media ${devices.mobileSS} {
    color: rgb(255, 49, 49);
    font-size: 5vw;
  }
`;

export const SubTitle = styled.p`
  @media ${devices.mobileSS} {
    font-size: 4vw;
  }
`;

export const Title = styled.p`
  @media ${devices.mobileSS} {
    font-size: 6vw;
    margin: 0 5% 5% 5%;
  }
`;

export const Img = styled.div`
  @media ${devices.mobileSS} {
    height: 45%;
    width: 100%;
    background-image: url(${(props) => props.background});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const Bio = styled.div`
  @media ${devices.mobileSS} {
    font-size: 4vw;
    font-weight: 100;
    margin: 0 5% 5% 5%;
  }
`;

export const Price = styled.div`
  @media ${devices.mobileSS} {
    font-size: 6vw;
    margin: 0 5% 5% 5%;
    color: green;
  }
`;

export const DivAddCar = styled.div`
  @media ${devices.mobileSS} {
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 10vh;
    padding: 2vh 4vw;
    border-top: 1px solid rgb(245, 240, 235);
    z-index: 55;
    background-color: white;
  }
`;

export const DivQnt = styled.div`
  @media ${devices.mobileSS} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    padding: 0 2%;
    border: 1px solid rgb(220, 220, 220);
    border-radius: 6px;
  }
`;

export const BtnSome = styled.button`
  @media ${devices.mobileSS} {
    background: transparent;
    border: none;
    color: ${props => props.color};
  }
  &:active {
    filter: invert(0.6);
  }
`;

export const Qnt = styled.div`
  @media ${devices.mobileSS} {
  }
`;

export const DivAdd = styled.div`
  @media ${devices.mobileSS} {
    background-color: rgb(255, 49, 49);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 65%;
    border-radius: 6px;
    padding: 0 4%;
    color: white;
    font-size: 4.5vw;
  }
`;

export const Text = styled.div`
  @media ${devices.mobileSS} {
  }
`;

export const TotalPrice = styled.div`
  @media ${devices.mobileSS} {
  }
`;

export const Input = styled.textarea`
    @media ${devices.mobileSS} {
      width: 90vw;
      margin: 0vh 5vw;
      border-radius: 6px;
      border: 1px solid rgb(220, 220, 220);
      height: 20vw;
      padding: 1vh 1vw;
  }
`
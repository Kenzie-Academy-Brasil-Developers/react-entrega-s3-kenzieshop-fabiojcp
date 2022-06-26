import styled, { keyframes } from "styled-components";
import devices from "../../Assets/Devices/Devices";

export const DivTotal = styled.div`
  @media ${devices.mobileSS} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #dfdfdf;
    padding: 0px 2vw 2vh 0;
    margin: 2vh 5vw 0px;
  }
`;

export const BtnBuy = styled.div`
  @media ${devices.mobileSS} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color:rgb(255,49,49);
    width: 90%;
    margin: 0 5%;
    border-radius: 6px;
    color: white;
  }
`;
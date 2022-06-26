// DivMain, Badge, Img, TotalQnt, Title, TotalPrice
import styled, { keyframes } from "styled-components";
import devices from "../../Assets/Devices/Devices";

export const DivMain = styled.span`
  @media ${devices.mobileSS} {
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 8vh;
    padding: 0 6vw;
    background-color: rgb(255, 49, 49);
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Badge = styled.div`
  @media ${devices.mobileSS} {
  }
`;

export const Img = styled.span`
  @media ${devices.mobileSS} {
    font-size: 30px;
  }
`;

export const TotalQnt = styled.p`
  @media ${devices.mobileSS} {
    width: 15px;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    position: absolute;
    background-color: white;
    color: rgb(255, 49, 49);
    border-radius: 100%;
    margin: 0 0 0 20px;
    border: 1px solid rgb(255, 49, 49);
  }
`;

export const Title = styled.div`
  @media ${devices.mobileSS} {
  }
`;

export const TotalPrice = styled.div`
  @media ${devices.mobileSS} {
  }
`;

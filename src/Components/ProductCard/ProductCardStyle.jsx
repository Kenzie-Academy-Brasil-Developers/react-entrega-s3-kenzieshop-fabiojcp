import styled, { keyframes } from "styled-components";
import devices from "../../Assets/Devices/Devices";



export const DivMain = styled.div`
  @media ${devices.mobileSS} {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #dfdfdf;
    padding: 1.5vh 0;
  }
`;

export const DivContent = styled.div`
  @media ${devices.mobileSS} {
    display: flex;
    flex-direction: column;
    width: 70%;
  }
`;

export const DivText = styled.div`
  @media ${devices.mobileSS} {
    display: flex;
    flex-direction: column;
    
  }
`;

export const Title = styled.p`
  @media ${devices.mobileSS} {
    font-size: 5vw;
    margin: 0 0 1vh 0;
  }
`;

export const Bio = styled.p`
  @media ${devices.mobileSS} {
    font-size: 3vw;
    margin: 0 0 1vh 0;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    font-weight: 300;
  }
`;

export const Img = styled.div`
  @media ${devices.mobileSS} {
    width: 30%;
    background-image: url(${props => props.background});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;

  }
`;

export const Price = styled.p`
  @media ${devices.mobileSS} {
  }
`;
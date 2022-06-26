import styled, { keyframes } from "styled-components";
import devices from "../../Assets/Devices/Devices";

const appear = keyframes`
    from{
        opacity: 0.2;
    }
    to{
        opacity: 1;
    }
`;

export const ShowCase = styled.div`
  animation: ${appear} 1s;
  @media ${devices.mobileSS} {
    padding: 0 4vw 15vh 4vw;
  }
`;


export const Title = styled.p`
  @media ${devices.mobileSS} {
    font-size: 8vw;
    padding: 2vh 0;
    border-bottom: 1px solid #dfdfdf;
  }
`;

export const DivMain = styled.div`
  @media ${devices.mobileSS} {

  }
`;
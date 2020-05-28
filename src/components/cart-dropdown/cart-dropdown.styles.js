import styled, { keyframes, css } from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

const slideIn = keyframes`
  from {
    transform: translateX(300px);
  }
  to {
    transform: translateX(0px);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(300px);
  }
`;

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideIn};
  animation-fill-mode: forwards;

  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${slideOut};
    `}
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

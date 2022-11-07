import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1000px;
  border-radius: 10px;
  padding: 20px;
  text-align: center;

  p {
    font-size: 1rem;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.4s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    padding: 10px 10px 10px 10px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? "linear-gradient(90deg,#56ffa4,#59bc86)"
        : !correct && userClicked
        ? "linear-gradient(90deg,#ff5656,#c16868)"
        : "linear-gradient(90deg,#56ccff,#6eafb4)"};
  }
`;

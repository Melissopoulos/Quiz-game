import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html{
    height: 100%;
}

body{
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
}

*{
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .start {
    text-align: center;
    cursor: pointer;
    border: 2px solid #5f9ea0;
    background: ##56ffa4;
    margin: 10px 70px;
    padding: 0 40px;
  }
  .next {
    text-align: center;
    cursor: pointer;
    border: 2px solid #5f9ea0;
    background: ##56ffa4;
    margin: 10px 250px;
    padding: 0 40px;
  }
`;

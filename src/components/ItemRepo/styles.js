import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 80%;

  h3 {
    font-size: 2rem;
    color: #fafafa;
  }

  p {
    color: #fafafa60;
    margin-bottom: 1.25rem;
  }

  a {
    display: block;
    text-decoration: none;
    color: #fff;
    margin: 0 0 1.25rem 0;
  }

  a:hover{
    text-decoration: underline;
  }

  a.remover {
    color: #ff0000;
  }

  hr {
    color: #fafafa60;
    margin: 1.25rem 0;
  }
`;

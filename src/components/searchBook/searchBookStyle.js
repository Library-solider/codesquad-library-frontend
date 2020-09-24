import styled from "styled-components";

export const SearchBookWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: ${({ theme: { margins } }) => margins.xxxl};

  :empty {
    height: 100vh;
  }

  .catalog-svg {
    width: 70vw;
  }
`;

export const SearchBookInner = styled.div`
  width: 70vw;
  display: flex;
  flex-wrap: wrap;

  .book_item {
    width: 20%;
  }

  @media ${({ theme: { device } }) => device.mobileL} {
    .book_item {
      width: 100%;
    }
  }
`;

export const NoneResultWrapper = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 92px;

  svg {
    font-size: 10rem;
    margin: ${({ theme: { margins } }) => margins.base};
  }
  h1 {
    text-align: center;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.xxxl};
    color: ${({ theme: { colors } }) => colors.gray_2};
    font-weight: bold;
  }
`;

export const ItemPlaceholder = styled.div`
  width: 100%;
  height: 300px;
  padding: 10px;
  background-color: gray;
`;

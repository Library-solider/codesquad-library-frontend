import styled from "styled-components";

export const BookItemWrapper = styled.div`
  width: 100%;
  height: 28rem;

  padding: ${({ theme: { paddings } }) => paddings.small};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;

  position: relative;

  .book_title {
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding: ${({ theme: { paddings } }) => paddings.xs};
    font-weight: bold;
    text-align: center;
  }

  .author {
    padding-top: 0.1rem;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  a {
    color: ${({ theme: { colors } }) => colors.gray_2};
    width: 100%;
  }

  img {
    transition: 0.3s;
    width: 100%;
    box-shadow: ${({ theme: { boxShadow } }) => boxShadow.boxShadow_1};
    cursor: pointer;

    :hover {
      opacity: 0.7;
    }
  }
`;

import styled, { keyframes } from "styled-components";

const shine = keyframes`
to {
    background-position:
      100% 0,
      200px 0;
  }
`;

export const Skeleton = styled.div`
  &:empty {
    border-radius: 15px;
    background-repeat: repeat-x;
    background-image: linear-gradient(
        100deg,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.5) 50%,
        rgba(255, 255, 255, 0) 80%
      ),
      linear-gradient(#eeeeee 20px, transparent 0);
    background-size: 200px 70px, 200px 300px;
    background-position: 0 0, 200px 0;
    animation: ${shine} 1s infinite;
  }
`;

export const BookItemWrapper = styled.div`
  width: 100%;
  padding: ${({ theme: { paddings } }) => paddings.small};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;

  .book_title {
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding: ${({ theme: { paddings } }) => paddings.small};
    font-weight: bold;
    text-align: center;
  }

  .author {
    text-align: center;
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

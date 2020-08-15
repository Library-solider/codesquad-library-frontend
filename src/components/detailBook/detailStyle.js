import styled from "styled-components";

export const DetailWrapper = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: ${({ theme }) => theme.interval.base};
  margin-bottom: ${({ theme }) => theme.interval.xl};
  padding-bottom: ${({ theme }) => theme.interval.base};

  h3 {
    font-weight: bold;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.h3};
    padding-bottom: ${({ theme: { paddings } }) => paddings.base};
  }

  @media ${({ theme: { device } }) => device.mobileL} {
    h3 {
      font-size: ${({ theme: { fontSizes } }) => fontSizes.xl};
    }
  }
`;

export const DetailInner = styled.div`
  width: 50vw;

  img {
    width: 300px;
    box-shadow: ${({ theme: { boxShadow } }) => boxShadow.boxShadow_1};
  }

  @media ${({ theme: { device } }) => device.tabletL} {
    width: 90vw;
    img {
      width: 200px;
    }
    button {
      padding: 0;
    }
  }

  @media ${({ theme: { device } }) => device.mobileL} {
    width: 90vw;
    img {
      width: 120px;
    }
  }
`;

export const BookInfomationWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: ${({ theme: { interval } }) => interval.base};

  .title {
    color: ${({ theme: { colors } }) => colors.black};
  }

  .rental {
    button {
      width: 100%;
      font-weight: bold;
      font-size: ${({ theme: { fontSizes } }) => fontSizes.lg};
    }
    select {
      width: 100%;
    }
  }

  .book_detail_info {
    width: 100%;
    margin-left: ${({ theme: { margins } }) => margins.base};
    color: ${({ theme: { colors } }) => colors.gray_2};
    div {
      margin-bottom: ${({ theme: { margins } }) => margins.base};
    }
  }
`;

export const IsRental = styled.div`
  color: ${(props) => props.fontColor};
  font-weight: bold;
`;

export const BookDescriptionWrapper = styled.div`
  .title {
    border-bottom: 2px solid ${({ theme: { colors } }) => colors.gray_2};
    margin-bottom: ${({ theme: { margins } }) => margins.xxxl};
  }
  .description {
    color: ${({ theme: { colors } }) => colors.gray_2};
    line-height: ${({ theme: { lineHeight } }) => lineHeight.base};
  }
`;

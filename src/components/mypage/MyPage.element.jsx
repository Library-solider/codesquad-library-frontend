import styled from "styled-components";

export const MyPageWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10rem;
`;

export const MyPageInner = styled.div`
  width: 70vw;

  @media ${({ theme: { device } }) => device.mobileL} {
    width: 90vw;
  } ;
`;

export const MyProfileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 2rem;
  padding: 1.2rem;
  box-shadow: ${({ theme: { boxShadow } }) => boxShadow.boxShadow_1};

  .myprofile-left {
    display: flex;
    align-items: center;
    color: ${({ theme: { colors } }) => colors.gray_1};

    img {
      width: 5rem;
      border-radius: 50%;
      margin-right: 1.2rem;
    }
    .user-name {
      font-size: 1.6rem;
      font-weight: bold;
    }
  }

  @media ${({ theme: { device } }) => device.mobileL} {
    flex-direction: column;

    img {
      margin-bottom: 1rem;
    }
  } ;
`;

export const MyRentalWrapper = styled.div`
  width: 100%;

  margin-top: 2rem;
  padding: 1.2rem;
  box-shadow: ${({ theme: { boxShadow } }) => boxShadow.boxShadow_1};
  .my-rental-title {
    font-size: 1.6rem;
    font-weight: bold;
  }

  .none-rental-list {
    width: 100%;
    text-align: center;
    color: ${({ theme: { colors } }) => colors.gray_2};
    font-size: 1.4rem;
    padding: 1.2rem 0;
  }
`;

export const RentalCardList = styled.ul`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
`;

export const RentalCardWrapper = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 33.3333%;
  padding: 1rem;

  .return-date {
    font-weight: bold;
    margin: 0.4rem;
    color: ${(props) =>
      props.isReturn ? props.theme.colors.red_1 : props.theme.colors.blue_2};
  }

  @media ${({ theme: { device } }) => device.mobileL} {
    width: 100%;
  } ;
`;

export const ReturnModalInner = styled.div`
  text-align: center;

  .modal-buttons {
    margin-top: 1.5rem;

    button {
      margin: 0.5rem;
      justify-content: space-between;
      width: 45%;
    }
  }
`;

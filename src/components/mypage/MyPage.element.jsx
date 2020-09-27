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
  border-radius: 1.2rem;
  width: 100%;
  margin-top: 2rem;
  padding: 1.2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

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
  border-radius: 1.2rem;
  margin-top: 2rem;
  padding: 1.2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

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
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: inherit;
`;

export const RentalCardWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  padding: 1.2rem;
  margin: 1.2rem;
  border-radius: 1.2rem;
  flex-direction: column;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  .book-title {
    width: 100%;
    font-size: 1.2rem;
    font-weight: bold;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-align: center;
  }

  .return-date {
    margin: 0.4rem;
    font-weight: bold;
    color: ${({ theme: { colors } }) => colors.gray_2};
  }

  @media ${({ theme: { device } }) => device.mobileL} {
    width: 100%;
    text-align: center;

    button {
      margin-top: 0.8rem;
    }
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

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
  flex-wrap: wrap;
  width: inherit;
`;

export const RentalCardWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1.2rem;
  margin: 1.2rem 0;

  border-radius: 1.2rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  .book-title {
    font-size: 1.4rem;
    font-weight: bold;
  }

  .return-date {
    border-radius: 1.2rem;
    color: white;
    display: inline-block;
    padding: 0.6rem;
    margin-top: 0.4rem;
    margin-right: 0.4rem;
    background-color: ${({ theme: { colors } }) => colors.green_1};
    font-weight: bold;
  }

  @media ${({ theme: { device } }) => device.mobileL} {
    flex-direction: column;
    text-align: center;

    button {
      margin-top: 0.8rem;
    }
  } ;
`;

import styled from "styled-components";

export const SearchForm = styled.div`
  display: flex;
  width: 50vw;
  position: relative;

  input {
    position: relative;
    width: inherit;
    padding: ${({ theme: { paddings } }) => paddings.lg};
    border-radius: ${({ theme: { radius } }) => radius.xSmall};
  }

  .search_btn {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    padding-right: ${({ theme: { paddings } }) => paddings.small};
    background-color: ${({ theme: { colors } }) => colors.white};
    border-radius: ${({ theme: { radius } }) => radius.xSmall};

    svg {
      font-size: ${({ theme: { fontSizes } }) => fontSizes.xxxl};
    }
    :hover {
      color: ${({ theme: { colors } }) => colors.blue};
    }
  }

  @media ${({ theme: { device } }) => device.mobileL} {
    margin-top: ${({ theme: { margins } }) => margins.base};
    width: 100%;
    order: 2;
  }
`;

export const SearchHistoryWrapper = styled.ul`
  position: absolute;
  z-index: 2;
  top: 110%;
  width: 100%;
  border-radius: ${({ theme: { radius } }) => radius.xSmall};
  background-color: ${({ theme: { colors } }) => colors.white};
  box-shadow: ${({ theme: { boxShadow } }) => boxShadow.boxShadow_1};

  li {
    padding: ${({ theme: { paddings } }) => paddings.lg};
  }

  .recent_search {
    color: ${({ theme: { colors } }) => colors.gray_2};
  }

  .none_history {
    display: flex;
    justify-content: center;
    color: ${({ theme: { colors } }) => colors.gray_2};
    padding: ${({ theme: { paddings } }) => paddings.xxxl};
  }

  .clear_history {
    button {
      color: ${({ theme: { colors } }) => colors.blue_2};
      :hover {
        opacity: 0.7;
      }
    }
  }
`;

export const HistoryItemWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${(props) => props.isActive && props.theme.colors.gray_3};

  svg {
    font-size: ${({ theme: { fontSizes } }) => fontSizes.xl};
    color: ${({ theme: { colors } }) => colors.gray_2};
  }
`;

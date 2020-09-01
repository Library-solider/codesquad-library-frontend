import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { CATEGORY_LIST_DATA } from "../../constants/category";

const Category = () => {
  const history = useHistory();
  const currentPath = history.location.pathname;

  return (
    <CategoryWrapper>
      <CategoryInner>
        {CATEGORY_LIST_DATA.map((el, idx) => {
          return (
            <CategoryLink
              key={idx}
              href={el.HREF}
              isActive={currentPath === el.HREF ? true : false}
            >
              <el.ICON />
              <div>{el.CATEGORY_TITLE}</div>
            </CategoryLink>
          );
        })}
      </CategoryInner>
    </CategoryWrapper>
  );
};

const CategoryWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: ${(props) => props.fillColor};
  background-color: ${({ theme: { colors } }) => colors.gray_1};
  svg,
  div {
    color: ${({ theme: { colors } }) => colors.white};
  }
`;

const CategoryInner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70vw;
  overflow: auto;

  @media ${({ theme: { device } }) => device.mobileL} {
    width: 100vw;
  }
`;

const CategoryLink = styled.a`
  cursor: pointer;
  font-weight: bold;
  text-align: center;
  padding: 1.875rem;

  svg,
  div {
    color: ${(props) => props.isActive && props.theme.colors.blue};
  }

  svg {
    width: 3rem;
    height: 3rem;
    margin-bottom: ${({ theme: { margins } }) => margins.small};
    transition: 0.3s;
  }

  :hover {
    div,
    svg {
      color: ${({ theme: { colors } }) => colors.blue};
    }
  }
`;

export default Category;

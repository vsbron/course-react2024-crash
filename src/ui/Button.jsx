import styled, { css } from "styled-components";

import { mediaQuery } from "../utils/constants";

// Variations of Button sizes
const sizes = {
  large: css`
    font-size: 20px;
    padding: 10px 20px 12px;
  `,

  medium: css`
    font-size: 18px;
    padding: 6px 12px;

    ${mediaQuery.tablet} {
      padding: 5px 8px;
    }
  `,

  small: css`
    font-size: 15px;
    width: 20px;
    height: 20px;
    padding: 0;
    font-weight: 400;
    margin-left: 10px;

    ${mediaQuery.tablet} {
      margin-left: 3px;
    }
  `,
};

// Variations of Button types
const types = {
  regular: css`
    background: var(--color-blue-light-1);

    &:hover {
      background: var(--color-blue-light-2);
    }
  `,

  delete: css`
    background: var(--color-red-1);
    color: var(--color-white-1);

    &:hover {
      background: var(--color-red-2);
    }
  `,
};

// Button css
const Button = styled.button`
  color: inherit;
  line-height: 1;
  font-weight: 400;
  border: none;
  border-radius: var(--border-radius-sm);
  font-family: inherit;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:disabled {
    background: black;
    cursor: not-allowed;
  }

  & span {
    margin-right: 5px;
  }

  ${(props) => sizes[props.size]}
  ${(props) => types[props.type]}
`;

// Setting the default prop for the styled component
Button.defaultProps = { size: "medium", type: "regular" };

export default Button;

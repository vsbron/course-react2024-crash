import styled, { css } from "styled-components";

import { mediaQuery } from "../utils/constants";

// Variations of Button Color types
const types = {
  all: css`
    width: 100%;
  `,
  category: css`
    width: 100%;
    background: none;
  `,
  default: css`
    width: auto;
  `,
  filter: css`
    display: none;

    ${mediaQuery.tablet} {
      display: block;
      margin: 0 0 10px auto;
    }
  `,
};

// Variations of Button Color sizes
const sizes = {
  large: css`
    font-size: 2.5rem;
    padding: 2rem 3.2rem;
  `,
  medium: css`
    font-size: 2rem;
    padding: 16px 0;

    ${mediaQuery.mobile} {
      font-size: 1.5rem;
    }

    ${mediaQuery.small} {
      font-size: 1.2rem;
    }
  `,
  small: css`
    font-size: 1.5rem;
    padding: 8px 15px 5px;
  `,
};

// Variations of Button Color states
const states = {
  active: css`
    background-color: var(--color-white-1) !important;
  `,
};

// Button Color css
const ButtonColor = styled.button`
  background-image: linear-gradient(135deg, #3b82f6, #ef4444, #16a34a, #eab308);
  color: var(--color-white-1);
  border: none;
  border-width: 1px;
  border-style: solid;
  border-radius: var(--border-radius-sm);
  line-height: 1;
  text-transform: uppercase;

  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0.5em 0.5em -0.4em rgba(0, 0, 0, 0.15);
  }

  ${(props) => types[props.type]}
  ${(props) => sizes[props.size]}
  ${(props) => states[props.active]}
`;

// Setting the default prop for the styled component
ButtonColor.defaultProps = { size: "medium", type: "default" };

export default ButtonColor;

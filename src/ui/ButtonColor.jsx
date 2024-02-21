import styled, { css } from "styled-components";

import { mediaQuery } from "../utils/constants";

// Variations of Button Color types
const types = {
  all: css`
    font-size: 2rem;
    width: 100%;
    padding: 1.6rem 2.8rem;
  `,
  category: css`
    width: 100%;
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
    font-size: 2.2rem;
    padding: 2rem 3.2rem;

    ${mediaQuery.mobile} {
      padding: 1.6rem 2.8rem;
    }
  `,
  medium: css`
    font-size: 1.8rem;
    padding: 1rem 0;

    ${mediaQuery.mobile} {
      font-size: 1.5rem;
    }

    ${mediaQuery.small} {
      font-size: 1.4rem;
    }
  `,
  small: css`
    font-size: 1.4rem;
    padding: 8px 15px;
  `,
};

// Variations of Button Color states
const states = {
  active: css`
    background-color: var(--color-white-1) !important;
    color: var(--color-black);
    border-color: var(--color-black);
  `,
};

// Button Color css
const ButtonColor = styled.button`
  background: var(--color-blue-1);
  color: var(--color-white-1);
  border: transparent 1px solid;
  border-radius: var(--border-radius-sm);
  line-height: 1;
  text-transform: uppercase;

  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0.5em 0.5em -0.4em rgba(0, 0, 0, 0.15);
  }

  ${(props) => sizes[props.size]}
  ${(props) => types[props.type]}
  ${(props) => states[props.active]}
`;

// Setting the default prop for the styled component
ButtonColor.defaultProps = { size: "medium", type: "default" };

export default ButtonColor;

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
    font-size: 2rem;
    padding: 2rem 3.2rem 1.7rem;
  `,
  medium: css`
    font-size: 1.7rem;
    padding: 16px 0 13px;

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
    font-size: 2.5rem;

    ${mediaQuery.laptop} {
      font-size: 2.2rem;
    }

    ${mediaQuery.tablet} {
      font-size: 2rem;
    }

    ${mediaQuery.mobile} {
      font-size: 1.6rem;
    }

    ${mediaQuery.mobile} {
      font-size: 1.4rem;
    }
  `,
};

// Button Color css
const ButtonColor = styled.button`
  background-image: linear-gradient(135deg, #3b82f6, #ef4444, #16a34a, #eab308);
  color: var(--color-white-1);
  border: none;
  border-radius: var(--border-radius-sm);
  font-family: Coiny;
  line-height: 1;
  text-transform: uppercase;

  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1) rotate(-2deg);
  }

  ${(props) => types[props.type]}
  ${(props) => sizes[props.size]}
  ${(props) => states[props.active]}
`;

// Setting the default prop for the styled component
ButtonColor.defaultProps = { size: "medium", type: "default" };

export default ButtonColor;

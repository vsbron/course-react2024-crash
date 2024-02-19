import styled, { css } from "styled-components";

// Variations of Button Color types
const types = {
  all: css`
    width: 100%;
    margin-bottom: 16px;
  `,
  category: css`
    width: 100%;
    background: none;
  `,
  default: css`
    width: auto;
  `,
};

// Variations of Button Color sizes
const sizes = {
  large: css`
    font-size: 2rem;
    padding: 2rem 3.2rem 1.7rem;
  `,
  medium: css`
    font-size: 17px;
    padding: 16px 0 13px;
  `,
};

// Variations of Button Color states
const states = {
  active: css`
    font-size: 2.5rem;
  `,
};

// Button Color css
const ButtonColor = styled.button`
  background-image: linear-gradient(135deg, #3b82f6, #ef4444, #16a34a, #eab308);
  color: inherit;
  border: none;
  border-radius: 10rem;
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

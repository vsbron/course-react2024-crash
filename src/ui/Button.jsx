import styled, { css } from "styled-components";

const sizes = {
  large: css`
    font-size: 20px;
    padding: 10px 20px 12px;
  `,

  medium: css`
    font-size: 18px;
    padding: 6px 12px;
  `,

  small: css`
    font-size: 15px;
    width: 20px;
    height: 20px;
    padding: 0;
    font-weight: 400;
    margin-left: 10px;
  `,
};

const types = {
  regular: css`
    background: #78716c;
  `,

  delete: css`
    background: #ef4444;
  `,
};

const Button = styled.button`
  color: inherit;
  line-height: 1;
  font-weight: 600;
  border: none;
  border-radius: 10rem;
  font-family: inherit;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: #292524;
  }

  &:disabled {
    background: #44403c;
    cursor: not-allowed;
  }

  ${(props) => sizes[props.size]}
  ${(props) => types[props.type]}
`;

// Setting the default prop for the styled component
Button.defaultProps = { size: "medium", type: "regular" };

export default Button;

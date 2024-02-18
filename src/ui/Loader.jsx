import styled from "styled-components";

const StyledLoader = styled.div`
  width: 75px;
  height: 75px;
  border: 10px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  margin: 20px auto 0;
  animation: loader-rotate 1s linear infinite;

  @keyframes loader-rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

function Loader() {
  return <StyledLoader></StyledLoader>;
}

export default Loader;

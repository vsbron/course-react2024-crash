import styled from "styled-components";

import { mediaQuery } from "../utils/constants";

const StyledCopyright = styled.div`
  font-size: 1.3rem;
  color: var(--color-gray);
  margin: 1.6rem 1.2rem 0 0;
  align-self: flex-start;
  text-align: right;

  ${mediaQuery.tablet} {
    margin-right: 0;
  }

  ${mediaQuery.small} {
    font-size: 1rem;
  }
`;

function Copyright() {
  return (
    <StyledCopyright>
      Built by VSBroN as a part of the learning course.
      <br />
      This project is available on{" "}
      <a
        href="https://github.com/vsbron/course-react2024-crash"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
      . | ©2024. All rights reserved.
    </StyledCopyright>
  );
}

export default Copyright;

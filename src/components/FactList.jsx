import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

import { useFacts } from "../hooks/useFacts";
import Loader from "../ui/Loader";
import { mediaQuery } from "../utils/constants";

import Fact from "./Fact";

const StyledFactList = styled.div`
  height: 100%;
  overflow: scroll;
  scrollbar-width: 0;
`;

const Message = styled.p`
  text-align: center;
  text-transform: uppercase;
  font-size: 3.2rem;
  margin-top: 2.4rem;

  ${mediaQuery.mobile} {
    font-size: 2rem;
  }
`;

const TotalMessage = styled.p`
  text-align: right;
  font-size: 1.6rem;

  ${mediaQuery.mobile} {
    font-size: 1.2rem;
  }
`;

function FactList() {
  // Use effect hook that loads the initial facts
  const { isLoading, facts } = useFacts();

  // Getting the state from URL
  const [searchParams] = useSearchParams();

  // If data is still loading, show Loader component
  if (isLoading) return <Loader />;

  // Early return if there's no facts
  if (facts.length === 0)
    return (
      <Message>No facts for this category yet. Create the first one!</Message>
    );

  // Building the message at the bottom. Changes a little depends on how many facts are listed and under what category.
  const totalMessage =
    (facts.length > 1
      ? `There are ${facts.length} facts in the `
      : `There is 1 fact in the `) +
    `${
      searchParams.get("category") !== "all" &&
      searchParams.get("category") !== null
        ? searchParams.get("category") + " category"
        : "database"
    }. Add your own!`;

  return (
    <StyledFactList>
      <ul>
        {facts.map((fact) => (
          <Fact fact={fact} key={fact.id} />
        ))}
      </ul>
      <TotalMessage>&mdash; {totalMessage}</TotalMessage>
    </StyledFactList>
  );
}

export default FactList;

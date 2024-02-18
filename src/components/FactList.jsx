import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

import { useFacts } from "../hooks/useFacts";
import Loader from "../ui/Loader";

import Fact from "./Fact";

const Message = styled.p`
  text-align: center;
  text-transform: uppercase;
  font-size: 32px;
  font-weight: 600;
  margin-top: 24px;
`;

function FactList() {
  // Use effect hook that loads the initial facts
  const { isLoading, facts } = useFacts();

  // Getting the state from URL
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("category"));

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
      searchParams.get("category") !== "all"
        ? searchParams.get("category") + " category"
        : "database"
    }. Add your own!`;

  return (
    <section>
      <ul>
        {facts.map((fact) => (
          <Fact fact={fact} key={fact.id} />
        ))}
      </ul>
      <p>&mdash; {totalMessage}</p>
    </section>
  );
}

export default FactList;

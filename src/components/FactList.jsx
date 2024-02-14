import { useFacts } from "../hooks/useFacts";
import Loader from "../ui/Loader";
import Fact from "./Fact";

function FactList({ setFacts }) {
  // Use effect hook that loads the initial facts
  const { isLoading, facts } = useFacts();

  if (isLoading) return <Loader />;

  // Early return if there's no facts
  if (facts.length === 0)
    return (
      <p className="message">
        No facts for this category yet. Create the first one!
      </p>
    );

  return (
    <section>
      <ul>
        {facts.map((fact) => (
          <Fact fact={fact} key={fact.id} setFacts={setFacts} />
        ))}
      </ul>
      <p>
        &mdash; There are {facts.length} facts in the database. Add your own!
      </p>
    </section>
  );
}

export default FactList;

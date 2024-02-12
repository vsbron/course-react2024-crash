import Fact from "./Fact";

function FactList({ facts }) {
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
          <Fact fact={fact} key={fact.id} />
        ))}
      </ul>
      <p>
        &mdash; There are {facts.length} facts in the database. Add your own!
      </p>
    </section>
  );
}

export default FactList;

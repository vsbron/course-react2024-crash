import Fact from "./Fact";

function FactList({facts}) {

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

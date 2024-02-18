import { useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

import { useVote } from "../hooks/useVote";
import { CATEGORIES, mediaQuery } from "../utils/constants";

import DeleteModal from "../ui/DeleteModal";

const StyledFact = styled.li`
  background-color: #44403c;

  padding: 16px 2.4rem;
  margin-bottom: 16px;
  border-radius: 16px;

  font-size: 2rem;
  line-height: 1.4;
  letter-spacing: -1px;

  display: flex;
  align-items: center;
  gap: 2.4rem;

  ${mediaQuery.laptop} {
    flex-direction: column;
    align-items: flex-end;
    gap: 12px;
  }
`;

const Tag = styled.span`
  text-transform: uppercase;
  font-size: 14px;
  font-family: Coiny;
  padding: 3px 10px 0;
  border-radius: 10rem;
`;

const Source = styled.a`
  &:link,
  &:visited {
    color: #a8a29e;
    text-decoration: none;
    margin-left: 12px;
    transition: color 0.3s ease;
  }

  &:hover,
  &:active {
    color: #3b82f6;
  }
`;

const DisputedTag = styled.span`
  color: #ef4444;
  font-weight: 700;
  margin-right: 10px;
`;

function Fact({ fact }) {
  const {
    id,
    text,
    source,
    category,
    votesInteresting,
    votesMindblowing,
    votesFalse,
  } = fact;

  // Declaring whether the fact has more false votes than others (and any of them has at least 1 vote)
  const isDisputed =
    ((votesInteresting || votesMindblowing || votesFalse) &&
      votesFalse >= votesInteresting + votesMindblowing) ||
    "";

  // Setting the state for showing the Delete modal window
  const [showModal, setShowModal] = useState(false);

  // Getting the mutation functions and isVoting / isDeleting statuses from custom hooks
  const { isVoting, addVote } = useVote();

  // Vote handler
  function handleVote(e) {
    // Getting the current value of votes
    const newValue = Number(e.target.innerHTML.replace(/\D+/g, "")) + 1;

    // Calling the mutation function
    addVote({ columnName: e.target.name, newValue, id });
  }

  return (
    <>
      <StyledFact>
        <p>
          {isDisputed && <DisputedTag>[⛔ DISPUTED]</DisputedTag>}
          {text}
          <Source href={`${source}`} target="_blank" rel="noreferrer">
            (Source)
          </Source>
        </p>
        <Tag
          style={{
            backgroundColor: CATEGORIES.find(
              (cat) => cat.name === fact.category
            ).color,
          }}
        >
          {category}
        </Tag>
        <div className="vote-buttons">
          <button
            onClick={handleVote}
            disabled={isVoting}
            name="votesInteresting"
          >
            👍 {votesInteresting}
          </button>
          <button
            onClick={handleVote}
            disabled={isVoting}
            name="votesMindblowing"
          >
            🤯 {votesMindblowing}
          </button>
          <button onClick={handleVote} disabled={isVoting} name="votesFalse">
            ⛔ {votesFalse}
          </button>
          <button
            className="btn--small"
            onClick={() => setShowModal(true)}
            disabled={isVoting}
          >
            X
          </button>
        </div>
      </StyledFact>
      {/* Showing the prompt window using Create Portal function */}
      {showModal &&
        createPortal(
          <DeleteModal id={id} setShowModal={setShowModal} />,
          document.body
        )}
    </>
  );
}

export default Fact;

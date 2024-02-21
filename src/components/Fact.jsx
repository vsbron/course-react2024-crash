import { useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

import { useVote } from "../hooks/useVote";
import { CATEGORIES, mediaQuery } from "../utils/constants";

import Button from "../ui/Button";
import Modal from "../ui/Modal";
import DeleteFactPrompt from "./DeleteFactPrompt";

const StyledFact = styled.li`
  background-color: var(--color-white-1);

  padding: 16px 2.4rem;
  margin-bottom: 1.6rem;
  border: var(--color-white-3) 1px solid;
  border-radius: var(--border-radius-md);

  font-size: 2rem;
  line-height: 1.4;

  display: grid;
  grid-template-columns: auto auto auto 1fr;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;

  ${mediaQuery.laptop} {
    gap: 2rem 1rem;
  }

  ${mediaQuery.mobile} {
    gap: 1rem;
  }

  ${mediaQuery.small} {
    font-size: 1.6rem;
    grid-template-columns: 1fr;
    padding: 15px 2rem;
  }
`;

const FactText = styled.p`
  grid-column: 1 / -1;
  font-weight: 300;

  ${mediaQuery.mobile} {
    margin-bottom: 1rem;
  }
`;

const MoreLabelsWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  line-height: 1;
  font-weight: 400;

  ${mediaQuery.laptop} {
    font-size: 16px;
  }

  ${mediaQuery.small} {
    font-size: 14px;
  }
`;

const Source = styled.a`
  &:link,
  &:visited {
    color: var(--color-brown);
    margin-right: 10px;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  &:hover,
  &:active {
    color: var(--color-blue);
  }
`;

const DisputedTag = styled.span`
  color: var(--color-orange);
`;

const Tag = styled.span`
  text-transform: uppercase;
  font-size: 1.4rem;
  line-height: 1;
  padding: 0.3rem 1rem 0.5rem;
  color: var(--color-white-1);
  border-radius: var(--border-radius-sm);
  grid-column: span 2;
  justify-self: flex-start;
`;

const ButtonsWrapper = styled.div`
  margin-left: auto;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 8px;

  ${mediaQuery.mobile} {
    grid-column: 1 / -1;
  }
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
        <FactText>{text}</FactText>
        <Tag
          style={{
            backgroundColor: CATEGORIES.find(
              (cat) => cat.name === fact.category
            ).bgColor,
            color: CATEGORIES.find((cat) => cat.name === fact.category).color,
          }}
        >
          {category}
        </Tag>
        <MoreLabelsWrapper>
          <Source href={`${source}`} target="_blank" rel="noreferrer">
            [Source]
          </Source>
          {isDisputed && <DisputedTag>[DISPUTED]</DisputedTag>}
        </MoreLabelsWrapper>

        <ButtonsWrapper>
          <Button
            onClick={handleVote}
            disabled={isVoting}
            name="votesInteresting"
          >
            <span>👍</span>
            {votesInteresting}
          </Button>
          <Button
            onClick={handleVote}
            disabled={isVoting}
            name="votesMindblowing"
          >
            <span>🤯</span>
            {votesMindblowing}
          </Button>
          <Button onClick={handleVote} disabled={isVoting} name="votesFalse">
            <span>⛔</span>
            {votesFalse}
          </Button>
          <Button
            size="small"
            onClick={() => setShowModal(true)}
            disabled={isVoting}
          >
            X
          </Button>
        </ButtonsWrapper>
      </StyledFact>

      {/* Showing the prompt window using Create Portal function */}
      {showModal &&
        createPortal(
          <Modal setShowModal={setShowModal}>
            <DeleteFactPrompt id={id}></DeleteFactPrompt>
          </Modal>,

          document.body
        )}
    </>
  );
}

export default Fact;

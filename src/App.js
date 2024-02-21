import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import styled from "styled-components";

import { mediaQuery } from "./utils/constants";

import CategoryFilter from "./components/CategoryFilter";
import FactList from "./components/FactList";
import Header from "./components/Header";

import "./style.css";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 10.5rem calc(100vh - 10.5rem - 9.6rem);
  overflow: hidden;
  padding: 4.8rem 6.4rem;

  ${mediaQuery.laptop} {
    grid-template-rows: 10.5rem calc(100vh - 10.5rem - 6.4rem);
    padding: 3.2rem 4.8rem;
  }

  ${mediaQuery.tablet} {
    display: block;
    overflow: auto;
    padding: 3rem;
  }
`;

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 25rem 1fr;
  gap: 3rem;

  ${mediaQuery.laptop} {
    grid-template-columns: 22rem 1fr;
    gap: 3rem;
  }

  ${mediaQuery.tablet} {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

function App() {
  // Creating the query client with the options for React Query
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // staleTime: 60 * 1000, // Time until the state becomes stale (ms)
        staleTime: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      {/* Enabling the DevTools for React Query */}
      <ReactQueryDevtools initialIsOpen={false} />

      <BrowserRouter>
        <Wrapper>
          <Header />
          <StyledMain>
            <CategoryFilter />
            <FactList />
          </StyledMain>
        </Wrapper>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

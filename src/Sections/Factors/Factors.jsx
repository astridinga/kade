import React, { Component } from "react";
import { view } from "react-easy-state";
import styled, { keyframes } from "styled-components";
import TypeOfAnalysisTransitionContainer from "./TypeOfAnalysisTransitionContainer";
import UnrotatedFactorsTransitionContainer from "./UnrotatedFactorsTransitionContainer";
import ErrorNotification from "../Input/ErrorNotification";
import state from "../../store";

class Factors extends Component {
  render() {
    const showCentroidError = state.getState("showCentroidError");
    return (
      <MainContent>
        <TypeOfAnalysisTransitionContainer />
        <UnrotatedFactorsTransitionContainer />
        {showCentroidError ? <ErrorNotification /> : null}
      </MainContent>
    );
  }
}

export default view(Factors);

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 250px 1fr;
  grid-template-areas:
    "row1 row1 row1 row1"
    "titleRow titleRow titleRow titleRow"
    "weblinkRow weblinkRow weblinkRow weblinkRow"
    "linkboxRow1 linkboxRow1 linkboxRow1 linkboxRow1"
    "linkboxRow2 linkboxRow2 linkboxRow2 linkboxRow2";
  justify-items: center;
  align-items: center;
  background-color: white;
  visibility: ${props => (props.view ? "hidden" : "visible")};
  animation: ${props => (props.view ? fadeOut : fadeIn)} 0.5s linear;
  transition: visibility 0.5s linear;
  font-family: Helvetica;

  width: calc(100vw - 153px);
  box-sizing: border-box;
  max-height: calc(100vh - 22px);
  overflow: auto;
`;

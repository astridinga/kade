import React, { Component } from "react";
import { view, store } from "react-easy-state";
import styled, { keyframes } from "styled-components";
import { Tab } from "semantic-ui-react";
import state from "../../store";
import FactorVizOptions from "./FactorViz/FactorVizOptions";
import FactorVizDispatch from "./FactorVisualizations/FactorVizDispatch";
import DownloadResultsButtons from "./DownloadResultsButtons/DownloadResultsButtons";
import NoLoadingsFlaggedWarningModal from "../Loadings/LoadingsTable/NoLoadingsFlaggedWarningModal";
import DisplayVisualizationsButtons from "./DisplayVisualizationsButtons/DisplayVisualizationsButtons";
import FactorSelectionForOutputButtons from "./FactorSelectionForOutput/FactorSelectionForOutputButtons";
import OutputFactorTablesTransitionContainer from "./OutputFactorTablesTransitionContainer";
import MultipleFactorsFlaggedWarningModal from "./MultipleFactorsFlaggedWarningModal";
import RefreshFactorVizButton from "./FactorVisualizations/RefreshFactorVizButton";


let showTableDataNotSentWarning;

const panes = [
  {
    menuItem: "Options",
    render: () => (
      <Tab.Pane>
        { showTableDataNotSentWarning && <NoDataMessage>No Data - Click the "Send Table Data to Output" button in Section 6</NoDataMessage> }
        <DataWindow1>
          <FactorSelectionForOutputButtons />
          <DownloadResultsButtons />
          <NoLoadingsFlaggedWarningModal />
          <MultipleFactorsFlaggedWarningModal />
          <DisplayVisualizationsButtons />
          <FactorVizDispatch />
        </DataWindow1>
      </Tab.Pane>
    )
  },
  {
    menuItem: "Factor Tables",
    render: () => (
      <Tab.Pane>
        <DataWindow2>
          <OutputFactorTablesTransitionContainer />
        </DataWindow2>
      </Tab.Pane>
    )
  },
  {
    menuItem: "Factor Visualization Options",
    render: () => (
      <Tab.Pane>
        <DataWindow2>
          <FactorVizOptions />
          <RefreshFactorVizButton />
        </DataWindow2>
      </Tab.Pane>
    )
  }
];

const localStore = store({
  activeIndex: 0
});

class Output extends Component {
  handleTabChange(e, {activeIndex}) {
    localStore.activeIndex = activeIndex;
  }

  render() {
    const {activeIndex} = localStore;
    showTableDataNotSentWarning = state.getState("showTableDataNotSentWarning");

    // const shouldDisplayFactorViz = state.getState(
    //   "displayFactorVisualizations"
    // );
    // const showStandardErrorsDifferences = state.getState(
    //   "showStandardErrorsDifferences"
    // );

    // const showOutputFactorSelection = state.getState(
    //   "showOutputFactorSelection"
    // );

    // if (showOutputFactorSelection) {
    return (
      <MainContent>
        <Tab panes={ panes } activeIndex={ activeIndex } onTabChange={ this.handleTabChange } />
      </MainContent>
      );
  //   }
  // return (
  //   <DefaultMessage>
  //     No output. Click "Send Table Data to Output" in the "Loadings" section.
  //   </DefaultMessage>
  // );
  }
}

export default view(Output);

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
  background-color: #d6dbe0;

  /* 
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas:
    "row1 row1 row1 row1"
    "titleRow titleRow titleRow titleRow"
    "weblinkRow weblinkRow weblinkRow weblinkRow"
    "linkboxRow1 linkboxRow1 linkboxRow1 linkboxRow1"
    "linkboxRow2 linkboxRow2 linkboxRow2 linkboxRow2"; 
    
    
  padding: 5px;
  padding-top: 15px;
  padding-left: 15px;
  visibility: ${props => (props.view ? "hidden" : "visible")};
  animation: ${props => (props.view ? fadeOut : fadeIn)} 0.5s linear;
  transition: visibility 0.5s linear;

  font-family: Helvetica, sans-serif;
  font-size: 18px;
  background-color: white;

  width: calc(100vw - 153px);
  box-sizing: border-box;
  max-height: calc(100vh - 22px);
  overflow: auto;
    */
  overflow: auto;

 background-color: #d6dbe0;
  visibility: ${props => (props.view ? "hidden" : "visible")};
  animation: ${props => (props.view ? fadeOut : fadeIn)} 0.5s linear;
  transition: visibility 0.5s linear;

  width: 100vw;
  box-sizing: border-box;
  max-height: calc(100vh - 22px);



  .tabular-menu {
    display: grid;
    grid-template-columns: 100px 100px 140px 110px 150px 170px;
    background-color: #d6dbe0;
    padding-left: 20px !important;
    height: 45px;
    align-items: end;
    list-style: none;
    font-family: Helvetica;
    padding: 0;
    margin: 0;
    font-size: 25px;
  }

  .tabular-menu-item {
    display: grid;
    align-items: center;
    justify-items: center;
    margin-right: 20px;
    background-color: #d6dbe0;
    height: 80%;
    border-top: 5px solid #d6dbe0;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .tabular-menu-item a {
    cursor: pointer;
    color: black;
  }

  .tabs-menu-item:not(.is-active):hover {
    color: #3498db;
    background-color: white;
  }

  .tabular-menu-item.is-active {
    color: #3498db;
    background-color: white;
    border-top: 5px solid #0080ff;
    transition: all 0.25s linear;
  }

  .tabular-panel {
    padding: 10px 50px;
    background-color: white;
    padding-left: 20px !important;
  }
`;

// const DefaultMessage = styled.div`
//   margin-top: 50px;
//   font-size: 22px;
//   margin-left: 20px;
// `;

const DataWindow1 = styled.div`
  display: grid;
  grid-template-rows: 100px 100px 1fr;
  min-height: 600px;
  background-color: white;
  max-width: 1197;
`;

const DataWindow2 = styled.div`
  min-height: 600px;
  background-color: white;
  overflow: scroll;
  padding: 5px;
  padding-top: 5px;
  padding-left: 5px;
  width: calc(100vw - 122px);
  box-sizing: border-box;
  max-height: calc(100vh - 22px);
  overflow: auto;
`;

const NoDataMessage = styled.div`
  font-size: 25px;
  margin-left:50px;
  margin-top: 100px;
`;

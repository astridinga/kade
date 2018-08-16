import React from "react";
import { view } from "react-easy-state";
import styled from "styled-components";
import state from "../../store";
import Chart from "./FactorScreePlot/Chart";
// import { Transition } from 'semantic-ui-react';
import EigenTable from "./FactorTableEigen/EigenTable";
import CentroidTable from "./FactorTable/CentroidTable";

function resetSpinner() {
  state.setState({ showCentroidSpinner: false });
}

class UnrotatedFactorsTransitionContainer extends React.Component {
  render() {
    const showUnrotatedFactorTable = state.getState("showUnrotatedFactorTable");
    // let showEigenvaluesTable = store.getState("showEigenvaluesTable");
    // let showScreePlot = store.getState("showScreePlot");
    {
      /* <Transition visible={ showUnrotatedFactorTable } animation="fade" duration={ 10 }> */
    }
    // {/*  </Transition> */}

    if (showUnrotatedFactorTable) {
      resetSpinner();
      return (
        <Container>
          <CentroidTable />
          <EigenTable />
          <Chart />
        </Container>
      );
    }
    return null;
  }
}

export default view(UnrotatedFactorsTransitionContainer);

const Container = styled.div`
  grid-row-start: 2;
`;

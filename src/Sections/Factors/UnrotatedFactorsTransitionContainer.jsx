import React from "react";
import { view } from "react-easy-state";
import store from "../../store";
import Chart from "./FactorScreePlot/Chart";
// import { Transition } from 'semantic-ui-react';
import EigenTable from "./FactorTableEigen/EigenTable";
import CentroidTable from "./FactorTable/CentroidTable";

class UnrotatedFactorsTransitionContainer extends React.Component {
  render() {
    const showUnrotatedFactorTable = store.getState("showUnrotatedFactorTable");
    // let showEigenvaluesTable = store.getState("showEigenvaluesTable");
    // let showScreePlot = store.getState("showScreePlot");
    {
      /* <Transition visible={ showUnrotatedFactorTable } animation="fade" duration={ 10 }> */
    }
    // {/*  </Transition> */}

    if (showUnrotatedFactorTable) {
      return (
        <div>
          <CentroidTable />
          <EigenTable />
          <Chart />
        </div>
      );
    }
    return null;
  }
}

export default view(UnrotatedFactorsTransitionContainer);

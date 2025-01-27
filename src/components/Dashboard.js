import React, { Component } from "react";
import classnames from "classnames";
import Loading from "./Loading";
import Panel from "./Panel";
// mock data
const data = [
  {
    id: 1,
    label: "Total Interviews",
    value: 6
  },
  {
    id: 2,
    label: "Least Popular Time Slot",
    value: "1pm"
  },
  {
    id: 3,
    label: "Most Popular Day",
    value: "Wednesday"
  },
  {
    id: 4,
    label: "Interviews Per Day",
    value: "2.3"
  }
];

class Dashboard extends Component {
  state = {
    loading: false,
    focused: null
  };

  selectPanel(id) {
    this.setState(prev => ({
      focused: (prev.focused ? null : id)
    }));
   }

  render() {
    const dashboardClasses = classnames("dashboard", {
      "dashboard--focused": this.state.focused
     });

    const filteredData = this.state.focused ? data.filter(panel => this.state.focused === panel.id) : data;
    const panels = filteredData.map(panel => (<Panel {...panel} key={panel.id} onSelect={(event) => this.selectPanel(panel.id)}/>));
       
    if (this.state.loading) {
      return <Loading />;
    }
    return <main className={dashboardClasses}>{panels}</main>;
  }
}

export default Dashboard;

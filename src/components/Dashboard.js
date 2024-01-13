import React, { Component } from "react";
import classnames from "classnames";
import Panel from "./Panel"; 
import Loading from "./Loading"; 


const data = [
  {
    id: 1,
    label: "Total Photos",
    value: 10
  },
  {
    id: 2,
    label: "Total Topics",
    value: 4
  },
  {
    id: 3,
    label: "User with the most uploads",
    value: "Allison Saeng"
  },
  {
    id: 4,
    label: "User with the least uploads",
    value: "Lukas Souza" // Remove the extra double-quote here
  }
];


class Dashboard extends Component {
  state = {
    loading: false,
    focused: null
  };
  selectPanel = (id) => {
    this.setState({
      focused: id
    });
  };
  render() {
    const dashboardClasses = classnames("dashboard", {
      "dashboard--focused": this.state.focused});

    if (this.state.loading) {
      return <Loading />;
    }

    const panels=(this.state.focused ? data.filter(panel => this.state.focused === panel.id) : data).map(panel => (
      <Panel
        key={panel.id}
        id={panel.id}
        label={panel.label}
        value={panel.value}
        onSelect={this.selectPanel}
      />
    ));

    return <main className={dashboardClasses}>{panels}</main>;
  }
}
export default Dashboard;
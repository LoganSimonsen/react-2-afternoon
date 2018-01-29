import React, { Component } from 'react';

import Employee from './models/Employee';

import Header from './components/Header';
import EmployeeList from './components/EmployeeList';
import EmployeeEditor from './components/EmployeeEditor';

class App extends Component {
  // constructor
  constructor() {
    super();
    this.state = {
      employee: null,
      originalEmployee: null,
      notModified: true
    };
  }
  // selectEmployee

  // refresh

  render() {
    return (
      <div id="app">
        <Header />
        <div className="main-container">
          <EmployeeList employees={this.state.employees} selectEmployee={ this.selectEmployee } />
          <EmployeeEditor selected={this.state.selectedEmployee} refreshList={ this.refresh } />
        </div>
      </div>
    )
  }
}

export default App;

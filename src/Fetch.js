import React, { Component } from 'react'

class Fetch extends Component {
  state = {
    rows: []
  }

  getrows(){
    fetch('http://localhost:9292/employees')
      .then(response => response.json())
      .then(rows => this.setState({rows}))
      .catch(err => console.log(err))
  }

  // createData = (row) => {
  //   this.setState(prevState => ({
  //     rows: [...prevState.rows, row]
  //   }))
  // }

  updateState = (row) => {
    const rowIndex = this.state.rows.findIndex(data => data.id === row.id)
    const newArray = [
    // destructure all rows from beginning to the indexed row
      ...this.state.rows.slice(0, rowIndex),
    // add the updated row to the array
      row,
    // add the rest of the rows to the array from the index after the replaced row
      ...this.state.rows.slice(rowIndex + 1)
    ]
    this.setState({ rows: newArray })
  }

  deleteRowFromState = (id) => {
    const updatedrows = this.state.rows.filter(row => row.id !== id)
    this.setState({ rows: updatedrows })
  }

  componentDidMount(){
    this.getrows()
  }
}
export default Fetch
import React, { Component } from 'react'
import { Table } from 'reactstrap'
import { getListProduct } from './Services/product'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { Products: [] }
  }

  componentDidMount() {
    let self = this
    getListProduct().then(response => {
      let { data } = response
      self.setState({ Products: data })
    })
  }

  render() {
    let { Products } = this.state
    return (
      <div>
        <h1>Welcome to dummy data</h1>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Employee Name</th>
              <th>Age</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {Products && Products.map((item, index) =>
              <tr key={index}>
                <th scope="row">{index++}</th>
                <td>{item.employee_name}</td>
                <td>{item.employee_age}</td>
                <td>{item.employee_salary}</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default App

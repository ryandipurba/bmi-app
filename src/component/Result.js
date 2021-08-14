import React from 'react'
// import axios from 'axios'
import { Button, Table } from 'reactstrap'

const Result = (props) => {

  return (
    < div >
      <h1>Your BMI</h1>
      <Table striped>
        <tbody>
          <tr>
            <td>Nama</td>
            <td>: {props.people.name}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>: {props.people.age}</td>
          </tr>
          <tr>
            <td>Bmi</td>
            <td>: {props.people.bmi}</td>
          </tr>
          <tr>
            <td>Category</td>
            <td>: {props.people.category}</td>
          </tr>
        </tbody>
      </Table>
      <Button onClick={() => props.setResult(false)}>Back</Button>
    </div >
  )
}

export default Result

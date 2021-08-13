import React from 'react'
import { Button, Table } from 'reactstrap'

const Result = (props) => {

  return (
    <div>
      <h1>Your BMI</h1>
      <Table striped>
        <tbody>
          <tr>
            <td>Nama</td>
            <td>: {props.name}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>: {props.age}</td>
          </tr>
          <tr>
            <td>Nama</td>
            <td>: {props.bmi}</td>
          </tr>
          <tr>
            <td>Category</td>
            <td>: {props.bmiCategory}</td>
          </tr>
        </tbody>
      </Table>
      <Button onClick={() => props.setResult(false)}>Back</Button>
    </div>
  )
}

export default Result

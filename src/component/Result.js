import React from 'react'
import { Button, Table } from 'reactstrap'

const Result = (props) => {

  console.log(props.people)
  return (

    <div>
      <h1>Your BMI</h1>
      <Table striped>
        <tbody>
          <tr>
            <td>Nama</td>
            <td>: {props.people.name} </td>
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
            <td>: {props.people.bmiCategory}</td>
          </tr>
        </tbody>
      </Table>
      <Button onClick={() => props.setResult(false)}>Back</Button>
    </div>
  )
}

export default Result

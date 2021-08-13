import React from 'react'
import { Table } from 'reactstrap'

const Content = () => {


  return (
    <Table striped>
      <thead>
        <tr>
          <th>Category</th>
          <th>BMI</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Underweight </td>
          <td>&lt; 18.5</td>
        </tr>
        <tr>
          <td>Normal weight</td>
          <td>18.5 – 24.9</td>
        </tr>
        <tr>
          <td>Overweight </td>
          <td>25–29.9</td>
        </tr>
        <tr>
          <td>Obesity </td>
          <td>BMI of 30 or greater</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default Content

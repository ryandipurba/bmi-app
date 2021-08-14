import React, { useState } from 'react'
import axios from 'axios'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'

const BmiForm = (props) => {
  const formGroup = {
    margin: "10px 0px"
  }

  const [height, setHeight] = useState()
  const [weight, setWeight] = useState()
  const [name, setName] = useState()
  const [age, setAge] = useState()

  return (
    <div>
      <Form
        onSubmit={(event) => {
          event.preventDefault()

          axios({
            method: 'post',
            url: "https://bmi-api-v2.herokuapp.com/bmi",
            headers: {},
            data: {
              "name": name,
              "age": age,
              "height": height,
              "weight": weight // This is the body part
            }
          }).then(resp => {
            props.setpeople(resp.data)
            props.setResult(true)
            console.log(resp.data);
          }).catch(error => {
            console.log(error);
          });


        }}
      >
        <FormGroup style={formGroup}>
          <Label for="name">Your Name</Label>
          <Input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </FormGroup>
        <FormGroup style={formGroup}>
          <Label for="age">Your Age</Label>
          <Input type="text" name="age" id="age" value={age} onChange={(e) => setAge(e.target.value)} />
        </FormGroup>
        <FormGroup style={formGroup}>
          <Label for="weight">Your Weight</Label>
          <Input type="text" name="weight" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </FormGroup>
        <FormGroup style={formGroup}>
          <Label for="height">Your Height</Label>
          <Input type="text" name="height" id="height" value={height} onChange={(e) => setHeight(e.target.value)} />
        </FormGroup>
        <Button color="primary" style={formGroup}>Compute BMI</Button>
      </Form>
    </div >
  )
}

export default BmiForm

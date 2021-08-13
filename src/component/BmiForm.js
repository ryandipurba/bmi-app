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
  const [bmi, setBmi] = useState(0)
  const [bmiCategory, setBmiCategory] = useState("")

  return (
    <div>
      <Form
        onSubmit={(event) => {
          event.preventDefault()
          setBmi(props.countBmi(weight, height))
          setBmiCategory(props.bmiCategory(bmi))
          axios.put('https://my-json-server.typicode.com/ryandipurba/bmi-api/people', {
            "name": name,
            "age": age,
            "height": height,
            "weight": weight,
            "bmi": bmi,
            "bmiCategory": bmiCategory
          }).then(resp => {
            props.setpeople(resp.data)
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

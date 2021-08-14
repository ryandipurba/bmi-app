import React, { Fragment, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import BmiForm from "./component/BmiForm"
import Content from "./component/Content"
import Result from './component/Result'

const App = () => {
  const [result, setResult] = useState(false)
  const [people, setpeople] = useState()

  return (
    <Container>
      <h1>BMI Calculator</h1>
      {/* <p>Body Mass Index (BMI) is a value obtained from the calculation of a person's weight and height. With BMI, it can be known whether a person's body proportions are normal or not. Currently there are five categories of BMI: underweight, normal, overweight, obese I, and obese II. Abnormal BMI can predict a person's future health risks, such as metabolic disease such as hypertension, heart disease, stroke, and diabetes mellitus.</p>
      <p>Use this calculator to check your Body Mass Index (BMI) and check whether you are at your ideal weight or not. You can also use it to check your child's body mass index.</p> */}
      <Row>
        <Col md="6" sm="12">
          <BmiForm setpeople={setpeople} setResult={setResult} />
        </Col>
        <Col md="6" sm="12">
          {!result ? (
            <Fragment>
              <h3>BMI Category</h3>
              <Content />
            </Fragment>
          ) : (
            <Fragment>
              <Result setResult={setResult} people={people} />
            </Fragment>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default App

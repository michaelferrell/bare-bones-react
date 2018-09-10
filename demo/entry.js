import React from "react"
import { render } from "react-dom"
import Grid from "./../dist/main"
import styled, { injectGlobal } from "styled-components"

injectGlobal`
  body {
    font-family: "Open Sans", sans-serif;
    color: #515151;
    margin: 0;
    padding: 2em 0;
  }
`

const ColumnBg = styled.div`
  background-color: #ddd;
  padding: 1em 0;
  margin-top: 1em;
  box-sizing: border-box;
  transition: 0.15s all;
  text-align: center;
  &:hover {
    background-color: #428bca;
    color: #fff;
  }
`

const App = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column width={100}>
        <ColumnBg>100%</ColumnBg>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={50}>
        <ColumnBg>50%</ColumnBg>
      </Grid.Column>
      <Grid.Column width={50}>
        <ColumnBg>50%</ColumnBg>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={33}>
        <ColumnBg>33%</ColumnBg>
      </Grid.Column>
      <Grid.Column width={33}>
        <ColumnBg>33%</ColumnBg>
      </Grid.Column>
      <Grid.Column width={33}>
        <ColumnBg>33%</ColumnBg>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={25}>
        <ColumnBg>25%</ColumnBg>
      </Grid.Column>
      <Grid.Column width={25}>
        <ColumnBg>25%</ColumnBg>
      </Grid.Column>
      <Grid.Column width={25}>
        <ColumnBg>25%</ColumnBg>
      </Grid.Column>
      <Grid.Column width={25}>
        <ColumnBg>25%</ColumnBg>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={20}>
        <ColumnBg>20%</ColumnBg>
      </Grid.Column>
      <Grid.Column width={20}>
        <ColumnBg>20%</ColumnBg>
      </Grid.Column>
      <Grid.Column width={20}>
        <ColumnBg>20%</ColumnBg>
      </Grid.Column>
      <Grid.Column width={20}>
        <ColumnBg>20%</ColumnBg>
      </Grid.Column>
      <Grid.Column width={20}>
        <ColumnBg>20%</ColumnBg>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={10}>
        <ColumnBg>10%</ColumnBg>
      </Grid.Column>
      <Grid.Column width={10}>
        <ColumnBg>10%</ColumnBg>
      </Grid.Column>
      <Grid.Column width={10}>
        <ColumnBg>10%</ColumnBg>
      </Grid.Column>
      <Grid.Column width={10}>
        <ColumnBg>10%</ColumnBg>
      </Grid.Column>
      <Grid.Column width={10}>
        <ColumnBg>10%</ColumnBg>
      </Grid.Column>
      <Grid.Column width={10}>
        <ColumnBg>10%</ColumnBg>
      </Grid.Column>
      <Grid.Column width={10}>
        <ColumnBg>10%</ColumnBg>
      </Grid.Column>
      <Grid.Column width={10}>
        <ColumnBg>10%</ColumnBg>
      </Grid.Column>
      <Grid.Column width={10}>
        <ColumnBg>10%</ColumnBg>
      </Grid.Column>
      <Grid.Column width={10}>
        <ColumnBg>10%</ColumnBg>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={60}>
        <ColumnBg>60%</ColumnBg>
      </Grid.Column>
      <Grid.Column width={40}>
        <ColumnBg>40%</ColumnBg>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={66}>
        <ColumnBg>66%</ColumnBg>
      </Grid.Column>
      <Grid.Column width={33}>
        <ColumnBg>33%</ColumnBg>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={70}>
        <ColumnBg>70%</ColumnBg>
      </Grid.Column>
      <Grid.Column width={30}>
        <ColumnBg>30%</ColumnBg>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={75}>
        <ColumnBg>75%</ColumnBg>
      </Grid.Column>
      <Grid.Column width={25}>
        <ColumnBg>25%</ColumnBg>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={80}>
        <ColumnBg>80%</ColumnBg>
      </Grid.Column>
      <Grid.Column width={20}>
        <ColumnBg>20%</ColumnBg>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={90}>
        <ColumnBg>90%</ColumnBg>
      </Grid.Column>
      <Grid.Column width={10}>
        <ColumnBg>10%</ColumnBg>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={50} offset={25}>
        <ColumnBg>Offset 25%</ColumnBg>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={10} offset={25}>
        <ColumnBg>Offset 25%</ColumnBg>
      </Grid.Column>
      <Grid.Column width={10} offset={10}>
        <ColumnBg>Offset 10%</ColumnBg>
      </Grid.Column>
      <Grid.Column width={10} offset={10}>
        <ColumnBg>Offset 10%</ColumnBg>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

render(<App />, document.getElementById("app"))

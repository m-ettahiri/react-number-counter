# react-number-counter
a simple react counter which increments a number or decrements it

![center](https://raw.githubusercontent.com/m-ettahiri/react-number-counter/master/counter.gif)

## Quick start
### Installation : 
`npm install react-number-counter`
### Import :
`import Counter from 'react-number-counter'`
## Examples
`1. <Counter start={0} end={100} delay={10} />`   

`2. <Counter start={100} end={0} delay={10} />`     

`3. <Counter start={0} end={60} delay={1000} repeat />`     

The Counter component just returns a number without html element .

## Props

Name | Description | Default |
--- | --- | --- | 
start | the start of the counter | 0 |
end | the end of the counter | 60 |
delay | delay in milliseconds | 1000 |
repeat |counter loop  | false |
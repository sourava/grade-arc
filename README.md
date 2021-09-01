# Superficial Questions:

## What is React.js?
React js is a javascript library for building user interfaces.

## What are the features of React.js?
- Virtual DOM
- JSX

## How to install React.js?
We can use npm to install React.js

# Technical Questions

## What are props in React.js?
Props are arguments passed into React components.

## What is state in React.js?
React components has a built-in state object. The state object is where you store property values that belongs to the component. When the state object changes, the component re-renders.

## What is the difference between state and props?
Props
- are immutable, which lets React do fast reference checks
- are used to pass data down from your view-controller, your top level component
- have better performance

State
- should be managed in your view-controller, your top level component
- is mutable
- has worse performance

# Technical Express.js Querstions:

## What function are arguments available to Express JS route handlers?
- req
req is an object containing information about the HTTP request that raised the event.

- res
res is used to send back the desired HTTP response.

## How to allow CORS in express.js? Explain with an example?
CORS exists for security reasons and to limit which resources a browser can gain access to, from another website. We can allow cors in express js by adding a middleware which adds the cors headers as shown in below code.

```
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
```

## What is the use of next in Express.js?
It passes control to the next matching route.

# Technical Node.js questions?

## What is Node.js?
Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a web browser. Node.js is a popular, lightweight web framework.

## What are the benefits of using Node.js?
- The ability to scale up quickly
- The accessibility of a single programming language for both frontend and backend
- Fast-to-market-development

## What is LTS releases of Node.js and why should you care?
LTS release means "long-term support", which typically guarantees that critical bugs will be fixed for a total of 30 months. Production applications should only use Active LTS or Maintenance LTS releases.

# Technical chanllenge
Instructions for tasks

## Task 1
```
node src/Task1.js
```

## Task 2, 3, 4
```
yarn install
yarn start
```

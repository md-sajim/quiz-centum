import React from 'react';
import './Bolge.css'

const Bolge = () => {
    return (
        <div className='quastion-container'>
            <h1>Quastion and anser</h1>
            <h5>&#10031; What is purpose of react router?</h5>
            <p>&#10021; React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            <h5>&#10031; Who does work context api in react router?</h5>
            <p>&#10021; Context provides a way to pass data through the component tree without having to pass props down manually at every level.<br />
                In a typical React application, data is passed top-down parent to child via props, but such usage can be cumbersome for certain types of props e.g. locale preference, UI theme that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>
            <h5>&#10031; what is useref in react?</h5>
            <p>&#10021; Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with, React will set its .current property to the corresponding DOM node whenever that node changes.</p>
        </div>
    );
};

export default Bolge;
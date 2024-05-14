// Import React and the Component class from the 'react' library.
import React, { Component } from "react";
// Import the CSS file for styling the component.
import '../styles/App.css';

class App extends Component {
     // The render method is required in class components and returns the JSX to be rendered to the DOM.
    render() {
        return (
             // The component renders a div containing an h1 element.
            <div>
                <h1>My React App!</h1>
            </div>
        );
    }
}
export default App;

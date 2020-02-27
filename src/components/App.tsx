import * as React from 'react';
import "./app.scss";

const App: React.FC<{}> = ({}) => {
    document.title = "Hello World";
    return (
        <div className="app">
        Hello World!
    </div>
    )
};

export default App;
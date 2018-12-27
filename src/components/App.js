import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
    return (
        <div>
            Page One
            <Link to="/two"> Two </Link>
        </div>
            )
}

const PageTwo = () => {
    return (
        <div>
            Page Two
            <Link to="/">One</Link>
        </div>
        )
}

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={PageOne} />
                    <Route path="/two" component={PageTwo} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;
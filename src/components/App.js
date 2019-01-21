import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';  // custom history object only works with plain Router and not BrowserRouter.
import Header from './Header';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamList';

const App = () => {
    return (
        <div className="ui container">
            
            <Router history={history}>
               <div>
                <Header />
                    <Switch>
                        <Route path="/" exact component={StreamList} />
                        <Route path="/streams/new" exact component={StreamCreate} />
                        <Route path="/streams/edit/:id" exact component={StreamEdit} />
                        <Route path="/streams/delete/:id" exact component={StreamDelete} />
                        <Route path="/streams/:id" exact component={StreamShow} />
                    </Switch>
               </div>
            </Router>
        </div>
    )
}

export default App;
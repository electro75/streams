import React from 'react';
import { Router, Route } from 'react-router-dom';
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
                   <Route path="/" exact component={StreamList} />
                   <Route path="/streams/new" component={StreamCreate} />
                   <Route path="/streams/edit" component={StreamEdit} />
                   <Route path="/streams/delete" component={StreamDelete} />
                   <Route path="/streams/show" component={StreamShow} />
               </div>
            </Router>
        </div>
    )
}

export default App;
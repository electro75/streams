import createHistory from 'history/createBrowserHistory';

// creates a history object that is maintained by us and not the
// browser router so that we can get access to the object even from 
// non react component files such as action creators.
// helpful in programatic navigation.

export default createHistory();
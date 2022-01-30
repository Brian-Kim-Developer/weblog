import { Router, Route } from 'react-router-dom'; 

import Header from "./Header";
import PostList from "./posts/PostList";
import PostDetail from './posts/PostDetail';
import history from '../history';

import '../style/App.scss';

const App = () => {
  return (
    <Router history={history}>
      <div className="container">
        <Header />
        <Route path="/" exact component={PostList} />
        <Route path="/posts/:id" exact component={PostDetail} />
      </div>
    </Router>
  );
};

export default App;
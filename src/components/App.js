import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

const App = (props) => {
  useEffect(() => {
    props.fetchPosts();
  }, [])
  
  return (
      <div>{props.posts.length}</div>
  );
};

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(App);

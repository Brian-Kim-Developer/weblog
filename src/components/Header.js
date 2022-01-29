import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/">
        Overreacted
      </Link>
    </div>
  );
};

export default Header;

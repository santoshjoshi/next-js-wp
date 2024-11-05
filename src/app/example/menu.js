// components/Menu.js
import PropTypes from "prop-types";

const Menu = ({ menuItems }) => {
  return (
    <nav>
      <h2>Main Menu</h2>
      <ul>
        {menuItems?.map(item => (
          <li key={item.id}>
            <a href={item.url} title={item.title} dangerouslySetInnerHTML={{ __html: item.label }} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

Menu.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      uri: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
};

export default Menu;

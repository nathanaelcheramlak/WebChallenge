import PropTypes from 'prop-types';
import './component_style.css';

const MenuCard = ({ stepNo, stepDescription, isActive }) => {
  return (
    <div className="menu-card">
      <div className={isActive ? 'active' : 'default'}>{stepNo}</div>
      <div className='menu-card-content'>
        <h3>Step {stepNo}</h3>
        <p>{stepDescription}</p>
      </div>
    </div>
  )
};

MenuCard.propTypes = {
    stepNo: PropTypes.number.isRequired,
    stepDescription: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired
};

export default MenuCard;


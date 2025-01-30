import PropTypes from 'prop-types';
import { useForm } from '../context/useForm';
import './component_style.css';

const MenuCard = ({ stepNo, stepDescription }) => {
  const { step } = useForm();

  return (
    <div className="menu-card">
      <div className={ step === stepNo ? 'active' : 'default'}>{stepNo}</div>
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
};

export default MenuCard;


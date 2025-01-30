import PropTypes from 'prop-types';
import { useForm } from '../context/useForm';
import './component_style.css';

const InputInfo = ({ name, placeholder, type = 'text' }) => {
  const { personal, handlePersonal } = useForm();

  return (
    <div className='input-info'>
      <label htmlFor={name}>{name}</label>
      <input 
        type={type} 
        id={name} 
        name={name} 
        value={personal[name]}
        placeholder={placeholder} 
        onChange={handlePersonal} 
      />
    </div>
  );
};

InputInfo.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string
};

export default InputInfo;

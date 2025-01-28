import PropTypes from 'prop-types';
import './component_style.css';

const InputInfo = ({ name, placeholder, type = 'text', value, setValue }) => {
  return (
    <form className='input-info'>
      <label>{name}</label>
      <input type={type} name="name" value={value} placeholder={placeholder} onChange={setValue} />
    </form>
  )
}

InputInfo.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired
};

export default InputInfo

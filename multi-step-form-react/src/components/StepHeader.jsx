import PropTypes from 'prop-types';
import './component_style.css';

const StepHeader = ({ title, description }) => {
  return (
    <div className='step-header'>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
};

StepHeader.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default StepHeader

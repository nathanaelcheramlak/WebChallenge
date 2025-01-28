import PropTypes from 'prop-types';
import './container_style.css';
import StepHeader from '../components/StepHeader';
import InputInfo from '../components/InputInfo';

const StepOne = ({ value, setValue }) => {
  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className='step-one'>
      <StepHeader title={'Personal Info'} description={'Please provide your name, email address, and phone number.'}/>
      <InputInfo name={'Name'} placeholder={'e.g. Stephen King'} value={value.name} setValue={handleChange}/>
      <InputInfo name={'Email Address'} placeholder={'e.g. stephenking@lorem.com'} type={'email'} value={value.email} setValue={handleChange}/>
      <InputInfo name={'Phone Number'} placeholder={'e.g. +1 234 567 890'} value={value.phone} setValue={handleChange}/>
    </section>
  )
}

StepOne.propTypes = {
  value: PropTypes.object.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default StepOne

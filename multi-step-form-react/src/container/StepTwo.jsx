import PropTypes from 'prop-types';
import './container_style.css';
import StepHeader from '../components/StepHeader';
import PlanCard from '../components/PlanCard';


const StepTwo = ({ value, setValue }) => {
  return (
    <section className='step-two'>
      <StepHeader title={'Select your plan'} description={'You have the option of monthly or yearly billing.'}/>
      <div className='plan-card_container'>
        <PlanCard title={'arcade'} yearly_rate={90} isActive={'pro'}/>
        <PlanCard title={'advanced'} yearly_rate={120} isActive={'pro'} />
        <PlanCard title={'pro'} yearly_rate={150} isActive={'pro'} />
      </div>
      <div className='step-two_switch'>
        <p id='active'>Monthly</p>
        <div className='switch'>
          <input type='checkbox' id='toggle' />
          <label htmlFor="toggle"></label>
        </div>
        <p id='inactive'>Yearly</p>
      </div>
    </section>
  )
}

StepTwo.protoTypes = {
  value: PropTypes.object.isRequired,
  setValue: PropTypes.func.isRequired
};

export default StepTwo;

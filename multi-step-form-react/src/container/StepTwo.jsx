import './container_style.css';
import StepHeader from '../components/StepHeader';
import PlanCard from '../components/PlanCard';
import { useForm } from '../context/useForm';

const StepTwo = () => {
  const { plan, handlePlan, isMonthly, handleMonthly } = useForm();
  
  return (
    <section className='step-two'>
      <StepHeader title={'Select your plan'} description={'You have the option of monthly or yearly billing.'}/>
      <div className='plan-card_container'>
        <PlanCard title={'arcade'} yearly_rate={90} />
        <PlanCard title={'advanced'} yearly_rate={120} />
        <PlanCard title={'pro'} yearly_rate={150} />
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

export default StepTwo;

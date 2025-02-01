import './container_style.css';
import StepHeader from '../components/StepHeader';
import PlanCard from '../components/PlanCard';
import { useForm } from '../context/useForm';

const StepTwo = () => {
  const { isMonthly, handleMonthly } = useForm();
  
  return (
    <section className='step-two'>
      <StepHeader title={'Select your plan'} description={'You have the option of monthly or yearly billing.'}/>
      <div className='plan-card_container'>
        <PlanCard title={'arcade'} />
        <PlanCard title={'advanced'} />
        <PlanCard title={'pro'} />
      </div>
      <div className='step-two_switch'>
        <p id='active'>Monthly</p>
        <div className='switch'>
          <input type='checkbox' id='toggle' checked={!isMonthly} onChange={handleMonthly}/>
          <label htmlFor="toggle"></label>
        </div>
        <p id='inactive'>Yearly</p>
      </div>
    </section>
  )
}

export default StepTwo;

import FinalData from "../components/FinalData";
import StepHeader from "../components/StepHeader"
import { useForm } from "../context/useForm";
import { plan_yearly_rate, plan_monthly_rate, service_monthly_rate, service_yearly_rate } from "../assets/rates";

const StepFour = () => {
  const { plan, isMonthly, services } = useForm();
  const total = services.reduce((acc, service) => {
    return acc + (isMonthly ? service_monthly_rate[service] : service_yearly_rate[service]);
  }, isMonthly ? plan_monthly_rate[plan] : plan_yearly_rate[plan]);

  return (
    <section className="step-four">
      <StepHeader title='Finishing up' description="Double-check everything looks OK before confirming."/>
      <FinalData />
      <div className="total">
        <p>Total (per month)</p>
        <h3>+${total}/{isMonthly ? 'mo' : 'yr'}</h3>
      </div>
    </section>
  )
}

export default StepFour;

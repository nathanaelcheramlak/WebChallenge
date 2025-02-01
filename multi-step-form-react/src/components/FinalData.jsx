import { useForm } from "../context/useForm";
import { plan_monthly_rate, plan_yearly_rate, service_monthly_rate, service_yearly_rate } from "../assets/rates";

const FinalData = () => {
  const { plan, isMonthly, services, setStep } = useForm();
  return (
    <div className="final-data">
      <div className="final-data-split">
        <div>
            <h4>{plan} ({isMonthly ? 'Monthly' : 'Yearly'})</h4>
            <button onClick={() => setStep(2)}>Change</button>
        </div>
        <h5>${isMonthly ? plan_monthly_rate[plan] : plan_yearly_rate[plan]}/mo</h5>
      </div>
    
      <hr></hr>
      
      { services.map((service) => (
        <div className="final-data-split" key={service}>
          <p>{service.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</p>
          <h6>+${isMonthly ? service_monthly_rate[service] : service_yearly_rate[service]}/{isMonthly ? 'mo' : 'yr'}</h6>
        </div>
      ))}

    </div>
  )
}

export default FinalData

import PropTypes from "prop-types"
import { useForm } from "../context/useForm";
import { service_monthly_rate, service_yearly_rate } from "../assets/rates";

const AddOnCard = ({ service, title, description }) => {
  const { isMonthly, services, handleServices } = useForm();
  return (
    <div className="addon-card" id={services.includes(service) ? 'selected' : ''}>
      <input type='checkbox' checked={services.includes(service)} onChange={() => handleServices(service)} />
      <div className="addon-card-details">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <p>+{isMonthly ? service_monthly_rate[service] : service_yearly_rate[service]}/{isMonthly ? 'mo' : 'yr'}</p>
    </div>
  )
}

AddOnCard.propTypes = {
  service: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default AddOnCard

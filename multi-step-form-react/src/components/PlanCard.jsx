import PropTypes from 'prop-types';
import './component_style.css';
import { useForm } from '../context/useForm';
import { plan_monthly_rate, plan_yearly_rate } from '../assets/rates';

const PlanCard = ({ title }) => {
    const { plan, handlePlan, isMonthly } = useForm();

    return (
        <div className='plan-card' id={plan === title ? 'active-plan' : ''} onClick={() => handlePlan(title)}>
            {title === 'arcade' && <div className='plan-card_img arcade'></div>}
            {title === 'advanced' && <div className='plan-card_img advanced'></div>}
            {title === 'pro' && <div className='plan-card_img pro'></div>}

            <div className='plan-card_info'>
                <h3>{title}</h3>
                <p>${isMonthly ? plan_monthly_rate[title] : plan_yearly_rate[title]} / {isMonthly ? 'mo' : 'yr' }</p>
            </div>
        </div>
    );
};

PlanCard.propTypes = {
    title: PropTypes.string.isRequired,
};

export default PlanCard;
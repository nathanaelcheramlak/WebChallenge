import PropTypes from 'prop-types';
import './component_style.css';

const PlanCard = ({ title, monthly_rate = 0, yearly_rate = 0, yearly = true, isActive, setIsActive }) => {
    const handleClick = () => {
        if (setIsActive) {
            setIsActive(title); // or any logic to set the active state
        }
    };

    return (
        <div className='plan-card' id={isActive ? 'active' : ''} onClick={handleClick}>
            {title === 'arcade' && <div className='plan-card_img arcade'></div>}
            {title === 'advanced' && <div className='plan-card_img advanced'></div>}
            {title === 'pro' && <div className='plan-card_img pro'></div>}

            <div className='plan-card_info'>
                <h3>{title}</h3>
                <p>${yearly ? yearly_rate : monthly_rate} / {yearly ? 'yr' : 'mo'}</p>
            </div>
        </div>
    );
};

// Updated PropTypes
PlanCard.propTypes = {
    title: PropTypes.string.isRequired,
    monthly_rate: PropTypes.number,
    yearly_rate: PropTypes.number,
    yearly: PropTypes.bool,
    isActive: PropTypes.string,
    setIsActive: PropTypes.func,
};

export default PlanCard;
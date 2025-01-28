import { useState } from 'react';
import './container_style.css';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import StepFive from './StepFive';

const StepLayout = () => {
    const [currentStep, setCurrentStep] = useState(2);
    // Step One States
    const [personal, setPersonal] = useState({
        name: '',
        email: '',
        phone: ''
    });

    // Step Two States
    const [plan, setPlan] = useState({
        plan: '',
        duration: ''
    });

  return (
    <div className="step-layout">
        {/* <StepOne value={personal} setValue={setPersonal} /> */}
        {/* <StepTwo value={plan} setValue={setPlan}/> */}
        {/* <StepThree /> */}
        {/* <StepFour /> */}
        <StepFive />
        { currentStep !== 5 && 
        <div className='button-group'>
            {currentStep !== 1 && <button className='back-button'>Go Back</button>}
            <button className='next-button'>{currentStep === 4 ? `Confirm` : `Next Step`}</button>
        </div>
        }
    </div>
  )
}

export default StepLayout

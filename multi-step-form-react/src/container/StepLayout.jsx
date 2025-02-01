import { useForm } from '../context/useForm';
import './container_style.css';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import StepFive from './StepFive';

const StepLayout = () => {
    const { step, handleNextStep, handlePrevStep } = useForm();
  return (
    <div className="step-layout">
        { step === 1 && <StepOne /> }
        { step === 2 && <StepTwo /> }
        { step === 3 && <StepThree /> }
        { step === 4 && <StepFour /> }
        { step === 5 && <StepFive /> }
        { step !== 5 && 
        <div className='button-group'>
            {step !== 1 && <button className='back-button'  onClick={handlePrevStep}>Go Back</button>}
            <button className='next-button' onClick={handleNextStep}>{ step === 4 ? `Confirm` : `Next Step`}</button>
        </div>
        }
    </div>
  )
}

export default StepLayout

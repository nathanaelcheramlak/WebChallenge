import FinalData from "../components/FinalData";
import StepHeader from "../components/StepHeader"

const StepFour = () => {
  return (
    <section className="step-four">
      <StepHeader title='Finishing up' description="  Double-check everything looks OK before confirming."/>
      <FinalData />
      <div className="total">
        <p>Total (per month)</p>
        <h3>+$12/mo</h3>
      </div>
    </section>
  )
}

export default StepFour;

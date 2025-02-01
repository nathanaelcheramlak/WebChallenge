import AddOnCard from '../components/AddOnCard';
import StepHeader from '../components/StepHeader';
import './container_style.css';

const StepThree = () => {
  return (
    <section>
      <StepHeader title='Pick add-ons' description='Add-ons help enhance your gaming experience.' />
      <AddOnCard service={'online-service'} title='Online service' description={'Access to multiplayer games'} />
      <AddOnCard service={'larger-storage'} title='Larger storage' description={'Extra 1TB of cloud save'} />
      <AddOnCard service={'custom-profile'} title='Customizable Profile' description={'Custom theme on your profile'} />
    </section>
  )
}

export default StepThree

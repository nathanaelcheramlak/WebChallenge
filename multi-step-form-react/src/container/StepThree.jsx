import AddOnCard from '../components/AddOnCard';
import StepHeader from '../components/StepHeader';
import './container_style.css';

const StepThree = () => {
  return (
    <section>
      <StepHeader title='Pick add-ons' description='Add-ons help enhance your gaming experience.' />
      <AddOnCard title='Online service' description={'Access to multiplayer games'} price={'+$1/mo'}/>
      <AddOnCard title='Online service' description={'Access to multiplayer games'} price={'+$1/mo'}/>
      <AddOnCard title='Online service' description={'Access to multiplayer games'} price={'+$1/mo'}/>
    </section>
  )
}

export default StepThree

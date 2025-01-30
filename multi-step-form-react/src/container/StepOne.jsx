import { useForm } from '../context/useForm';
import './container_style.css';
import StepHeader from '../components/StepHeader';
import InputInfo from '../components/InputInfo';

const StepOne = () => {
  const { personal, handlePersonal } = useForm();

  return (
    <section className='step-one'>
      <StepHeader title={'Personal Info'} description={'Please provide your name, email address, and phone number.'}/>
      <InputInfo name="name" placeholder="e.g. Stephen King" value={personal.name} onChange={handlePersonal} />
      <InputInfo name="email" placeholder="e.g. stephenking@lorem.com" type="email" value={personal.email} onChange={handlePersonal} />
      <InputInfo name="phone" placeholder="e.g. +1 234 567 890" value={personal.phone} onChange={handlePersonal} />
    </section>
  );
};

export default StepOne;

import thanksIcon from '../assets/images/icon-thank-you.svg';

const StepFive = () => {
  return (
    <section className='step-five'>
      <div>
        <img src={thanksIcon} className='step-five-img'/>
        <h1>Thank you!</h1>
        <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
      </div>
    </section>
  )
}

export default StepFive

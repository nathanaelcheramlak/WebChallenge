const AddOnCard = ({ title, description, price}) => {
  return (
    <div className="addon-card">
      <input type='checkbox'/>
      <div className="addon-card-details">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <p>{price}</p>
    </div>
  )
}

export default AddOnCard

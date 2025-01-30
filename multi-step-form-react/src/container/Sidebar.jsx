import MenuCard from "../components/MenuCard"
import './container_style.css';

const Sidebar = () => {
  return (
    <div className="side-bar">
      <MenuCard stepNo={1} stepDescription={"Your info"} />
      <MenuCard stepNo={2} stepDescription={"Select plan"} />
      <MenuCard stepNo={3} stepDescription={"Add-ons"} />
      <MenuCard stepNo={4} stepDescription={"Summary"} />
    </div>
  )
}

export default Sidebar
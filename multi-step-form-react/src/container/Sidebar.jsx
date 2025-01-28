import MenuCard from "../components/MenuCard"
import './container_style.css';

const Sidebar = () => {
  return (
    <div className="side-bar">
      <MenuCard stepNo={1} stepDescription={"Your info"} isActive={true} />
      <MenuCard stepNo={2} stepDescription={"Select plan"} isActive={false} />
      <MenuCard stepNo={3} stepDescription={"Add-ons"} isActive={false} />
      <MenuCard stepNo={4} stepDescription={"Summary"} isActive={false} />
    </div>
  )
}

export default Sidebar
// Step 1
// Your info

// Step 2
// Select plan

// Step 3
// Add-ons

// Step 4
// Summary
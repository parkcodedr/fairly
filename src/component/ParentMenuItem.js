import { useState } from "react";
import SubMenu from "./SubMenu";
import { ArrowDown, ArrowUp } from "./vectors";

function ParentMenuItem({ item }) {
    const [isOpen, setIsOpen] = useState(false);
  
    function toggleSubMenu() {
      setIsOpen(prev=>!prev);
    }
  
    return (
      <div className="menu__wrapper">
        <div className="menu__item" onBlur={()=>setIsOpen(false)} onClick={toggleSubMenu}>
          <p>{item.title}</p>
          {
            isOpen?(<ArrowUp />):(<ArrowDown />)
          }
        </div>
        {isOpen && <SubMenu subMenuItems={item.subMenuItems} />}
      </div>
    );
  }
  
  export default ParentMenuItem
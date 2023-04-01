import ChildMenuItem from "./ChildMenuItem";

function SubMenu({ subMenuItems }) {
    return (
      <div className="sub__menu">
        {subMenuItems.map((item) => (
          <ChildMenuItem key={item.id} item={item} />
        ))}
      </div>
    );
  }

export default SubMenu
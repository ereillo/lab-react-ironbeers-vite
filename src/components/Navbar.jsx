import { NavLink } from "react-router-dom";

function Navbar() {
  const checkActiveUrl = (info) => {
    // console.log(info)

    // debe retornar el valor que tendra esa className o style
    if (info.isActive === true) {
      return "nav-active";
    } else {
      return "nav-inactive";
    }
  };
  return (
    <nav>
      
      <NavLink className={checkActiveUrl} to="/">
      <img src="../src/assets/home-icon.png" alt="" />
      </NavLink>
    </nav>
  );
}

export default Navbar;

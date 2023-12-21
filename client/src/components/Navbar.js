import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/Navbar";

const Navbar = () => {
  const { menuData } = useAppContext();
  return (
    <Wrapper>
      <nav className="navbarItems">
        <h1 className="logo">Personal Space</h1>
        <ul className="nav-menu">
          {menuData.map((item, index) => {
            const { cName, icon, title, url } = item;
            return (
              <li key={index}>
                <a href={url} className={cName}>
                  {icon}
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </Wrapper>
  );
};

export default Navbar;

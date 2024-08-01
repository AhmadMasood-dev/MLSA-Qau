import Button from "../generics/Button";
import logo from '../../assets/img/horizontal 1.1.png'
export default function NavBar() {
  const navLinks = ["Home", "About", "Events", "Team", "Contact"];
  return (
    <div>
      <div class="container main-nav flex items-center  ">
        <div className="flex gap-1  ">
          <a href="/" class="company-logo">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="nav-links  justify-center" id="nav-links">
          <ul className="flex ">
            {navLinks.map((navItem) => (
              <li>
                <a href="/" class="hover-links ml-2">
                  {navItem}
                </a>
              </li>
            ))}
            <Button name="Join Us" styles='primary-button' />
          </ul>
        </div>
        <a href="/" class="nav-toggle hover-links" id="nav-toggle">
          <i class="fa-solid fa-bars"></i>
        </a>
      </div>
    </div>
  );
}

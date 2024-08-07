import Button from "../generics/Button";
import logo from "../../assets/images/horizontal 1.1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  const navLinksContent = ["Home", "About", "Events", "Team", "Contact"];
  // const togglButton = document.getElementById("nav-toggle");
  // console.log("togglButton", togglButton);
  // const navlinks = document.getElementById("nav-links");
  // togglButton.addEventListener("click", () => {
  //   console.log("clicked");
  //   navlinks.classList.toggle("active");
  // });
  return (
    <div>
      <div>
        <div class="container main-nav flex items-center  ">
          <div className="flex gap-1  ">
            <a href="/" class="company-logo">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="nav-links  justify-center" id="nav-links">
            <ul className="flex ">
              {navLinksContent.map((navItem) => (
                <li>
                  <a href="/" class="hover-links ml-2">
                    {navItem}
                  </a>
                </li>
              ))}
              <Button name="Join Us" styles="primary-button" />
            </ul>
          </div>
          <a href="/" class="nav-toggle hover-links" id="nav-toggle">
            <FontAwesomeIcon icon={faBars} />
          </a>
        </div>
      </div>
    </div>
  );
}

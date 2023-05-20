import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
// import OurBusiness from "../pages/dropdown/ourBusiness";
// import OurCompany from "../pages/dropdown/ourCompany";
import "./navbar.css";
import NavMenu from "./navMenu";
import Progress from "../scrollBar";
import Logo from "../pictures/yt-logo.png";

const Navbar = (props) => {
  const [icon, setIcon] = useState(false);
  const [showCompanyDropdown, setCompanyDropdown] = useState(false);
  const [showBusinessDropdown, setBusinessDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(true);
  const [scrollAnime, setScrollAnime] = useState(0);
  const selectCompany = () => {
    setCompanyDropdown(true);
  };
  const unselectCompany = () => {
    setCompanyDropdown(false);
  };
  const selectBusiness = () => {
    setBusinessDropdown(true);
  };
  const unselectBusiness = () => {
    setBusinessDropdown(false);
  };

  const toggleIcon = () => {
    setIcon(!icon);
  };
  const closeSidebar = () => {
    setIcon(false);
  };

  let navbars = document.querySelector(".navbarSlide");
  console.log(navbars)
  window.onscroll = () => {
    setScrolled(!scrolled);
    if (window.scrollY > 100) {
      navbars.classList.add("nav-active");
      setScrolled(true);
    } else {
      navbars.classList.remove("nav-active");
      setScrolled(false);
    }
  };

  // show navbar on scroll up//
  let prevScrollPos = window.pageYOffset;
  window.addEventListener("scroll", () => {
    let currentScrollPos = window.pageYOffset;
    prevScrollPos > currentScrollPos
      ? (navbars.style.top = "0")
      : (navbars.style.top = "-100px");
    prevScrollPos = currentScrollPos;
  });
  console.log(prevScrollPos);

  useEffect(() => {
    listenToScrollEvent();
  }, []);
  const listenToScrollEvent = () => {
    window.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        calculateScrollDistance();
      });
    });
  };
  const calculateScrollDistance = () => {
    const scrolTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const docHeight = getDocHeight();

    const totalDocScrollLength = docHeight - windowHeight;
    const scrollPosition = Math.floor((scrolTop / totalDocScrollLength) * 100);
    setScrollAnime(scrollPosition);

    // console.log(getDocHeight);
  };

  const getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.body.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight,
      document.documentElement.clientHeight
    );
  };

  return (
    <>
      <Progress scroll={scrollAnime} />
      {/* <nav className="navbars"> */}
      {/* <NavMenu /> */}

      {/* <div onClick={toggleIcon} className="nav-icon">
          {icon ? (
            <FaTimes className="fa-times" />
          ) : (
            <FaBars className="fa-bars" />
          )}
        </div> */}
    <div className="navbarSlide">

      <nav class="navbar  navbar-expand-md position-static">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img className="nav-logo " alt="" src={Logo} />
            <div className="nav-head-title">
              {" "}
              <h1>
                {" "}
                {/* YAHOVA <span className="nav-head-traders">TRADERS</span>{" "}
                <span class="nav-head-span">PRIVATE LIMITED</span> */}
              </h1>
            </div>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="mynavbar">
            <ul
              class="navbar-nav me-auto"
              
            >
              <li class="nav-item dropdown nav-links"
              onMouseEnter={selectCompany}
              onMouseLeave={unselectCompany}>
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Our Company
                  {/* {showCompanyDropdown && <OurCompany />} */}
                </a>
                <ul
                  class={
                    showCompanyDropdown
                      ? "dropdown-menu show"
                      : "dropdown-menu "
                  }
                >
                  <li>
                    <a class="dropdown-item" href="/our-company/about-us">
                      About US
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/our-company/leadership">
                      Leadership
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="/our-company/company-profile"
                    >
                      Company Profile
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown nav-links"
              onMouseLeave={unselectBusiness}
              onMouseEnter={selectBusiness}>
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  
                >
                  Our Business
                  {/* {showBusinessDropdown && <OurBusiness />} */}
                </a>
                <ul
                  class={
                    showBusinessDropdown
                      ? "dropdown-menu show"
                      : "dropdown-menu "
                  }
                >
                  <li>
                    <a class="dropdown-item" href="/our-business/fishing">
                      Fishing
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/our-business/exports">
                      Exports
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/our-business/super-market">
                      Super Market
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item nav-links">
                <a class="nav-link" href="/contact-us">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* </nav> */}
    </div>
    </>
  );
};
export default Navbar;

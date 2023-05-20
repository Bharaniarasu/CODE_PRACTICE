import React from "react";
import "./navbar.scss";

const NavBar = () => {
  let header = document.getElementById("menu");
  // let btns = header.getElementsByClassName("nav_btn");
  console.log(header);
  // for (var i = 0; i < btns.length; i++) {
  //   btns[i].addEventListener("click", function () {
  //     var current = document.getElementsByClassName("active");
  //     current[0].className = current[0].className.replace(" active", "");
  //     this.className += " active";
  //   });
  // }
  return (
    <nav className="nav_panel ">
      <div className="nav_content">
        <a href="/" className="">
          <i className="fa fa-bars"></i>

          <span className=" ">Menu</span>
        </a>
        <ul className="" id="menu">
          <li className="nav_btn">
            <a href="/" className="">
              <i className="fa fa-font-awesome"></i>
              <span className="">Dashboard</span>
            </a>
          </li>

          <li className="nav_btn">
            <a href="/" className="">
              <i className="fa fa-briefcase"></i> <span className="">Jobs</span>
            </a>
          </li>
          <li className="nav_btn">
            <a href="/submenu2" data-bs-toggle="collapse" className=" ">
              <i className="fa fa-user"></i>{" "}
              <span className="">Candidates</span>
            </a>
          </li>
          <li className="nav_btn">
            <a href="/submenu3" data-bs-toggle="collapse" className="">
              <i className="fa fa-calendar"></i>{" "}
              <span className="">Interviews</span>{" "}
            </a>
          </li>

          <li className="nav_btn">
            <a href="/userlist" className=" ">
              <i className="fa fa-gears"></i>{" "}
              <span className=" ">Settings</span>{" "}
            </a>
            <ul className="nav_dropdown" id="submenu1">
              <li className="nav_btn">
                <a href="/" className="">
                  <i className="fa fa-id-badge"></i>
                  <span className="">Your Profile</span>{" "}
                </a>
              </li>
              <li className="nav_btn">
                <a href="/" className="">
                  <i className="fa fa-building"></i>{" "}
                  <span className="">Company Info</span>{" "}
                </a>
              </li>
              <li className="nav_btn">
                <a href="/userList" className=" ">
                  <i className="fa fa-user"></i> <span className="">Users</span>
                </a>
              </li>
              <li className="nav_btn">
                <a href="/" className="">
                  <i className="fa fa-power-off"></i>{" "}
                  <span className="">Logout</span>{" "}
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

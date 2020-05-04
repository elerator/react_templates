import React, { useState } from 'react';
import './App.css';
import { render } from "react-dom";
import { Navbar, Nav, NavItem, NavDropdown, Glyphicon } from "react-bootstrap";

/*const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};*/

const NavBar = () => {
  return (
    <Navbar sticky="top" className="navbar navbar-expand">
    <Navbar.Brand>
       <a class="navbar-brand" href="#"> &nbsp; algebrew · · · &nbsp;  </a>
    </Navbar.Brand>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav mr-auto">
      <NavDropdown bg="black" title="View" id="collasible-nav-dropdown" style={{ color: "#5299d3" }}>
        <NavDropdown.Item style={{ color: "#5299d3" }}>Toggle sidebar</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown bg="black" title="Menu" id="collasible-nav-dropdown" style={{ color: "#5299d3" }}>
        <NavDropdown.Item style={{ color: "#5299d3" }}>Home</NavDropdown.Item>
        <NavDropdown.Item style={{ color: "#5299d3" }}>Admin</NavDropdown.Item>
        <NavDropdown.Item style={{ color: "#5299d3" }}>Users</NavDropdown.Item>
        <NavDropdown.Item style={{ color: "#5299d3" }}>Lessons</NavDropdown.Item>
        <NavDropdown.Item style={{ color: "#5299d3" }}>Challenges</NavDropdown.Item>
      </NavDropdown>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
      </div>
    </Navbar>
  );
};

const SideBar = () => {
  return (
    <nav id="sidebar">
        <ul class="list-unstyled components">
            <li class="active">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"> Console </a>
                <ul class="collapse list-unstyled" id="homeSubmenu">
                  <div style={{"width":"100%"}}>
                    <div>
                      <textarea rows="10" style={{"width":"100%"}}></textarea>
                    <input style={{"width":"100%"}}></input>
                    </div>
                  </div>
                </ul>
            </li>
            <li>
                <a href="#pageSubmenu1" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Apply rule</a>
                <ul class="collapse list-unstyled" id="pageSubmenu1">
                    <li>
                        <a href="#">Page 1</a>
                    </li>
                </ul>
            </li>

            <li>
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Solve equation</a>
                <ul class="collapse list-unstyled" id="pageSubmenu">
                    <li>
                        <a href="#">Page 1</a>
                    </li>
                    <li>
                        <a href="#">Page 2</a>
                    </li>
                    <li>
                        <a href="#">Page 3</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#pageSubmenu2" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Insert and import</a>
                <ul class="collapse list-unstyled" id="pageSubmenu2">
                    <li>
                        <a href="#">Page 1</a>
                    </li>
                    <li>
                        <a href="#">Page 2</a>
                    </li>
                    <li>
                        <a href="#">Page 3</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#">About</a>
            </li>
        </ul>

        <ul class="list-unstyled CTAs">
            <li>
                <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" class="download">Download source</a>
            </li>
        </ul>
    </nav>
  );
};

const App = () => (
  <div>
    <NavBar></NavBar>
    <div class="wrapper">
      <SideBar></SideBar>
    </div>
  </div>
);


/*
const App = () => (

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#"> &nbsp; algebrew · · · &nbsp;  </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Open &nbsp; <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                View
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <button class="dropdown-item" id="sidebarCollapse">
                            Toggle Sidebar
                </button>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Action
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action &nbsp;</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">About &nbsp;</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
);
*/
export default App;

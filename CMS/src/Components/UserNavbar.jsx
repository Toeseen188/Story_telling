import React from 'react'
import { Link } from 'react-router-dom';

const UserNavbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const openSidebar = () => {
    setSidebarVisible(true);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };
  return (
    <div>
    {/* Sidebar */}
    <div
      className={`w3-sidebar w3-bar-block w3-collapse w3-card w3-animate-left ${sidebarVisible ? 'show' : 'hide'}`}
      style={{ width: '200px', display: sidebarVisible ? 'block' : 'none' }}
    >
      <button className="w3-bar-item w3-button w3-large w3-hide-large" onClick={closeSidebar}>
        Close &times;
      </button>
      <a href="#" className="w3-bar-item w3-button">
        Link 1
      </a>
      <a href="#" className="w3-bar-item w3-button">
        Link 2
      </a>
      <a href="#" className="w3-bar-item w3-button">
        Link 3
      </a>
    </div>

    {/* Main Content */}
    <div className="w3-main" style={{ marginLeft: sidebarVisible ? '200px' : '0px' }}>
      {/* Header */}
      <div className="w3-teal">
        <button
          className="w3-button w3-teal w3-xlarge w3-hide-large"
          onClick={openSidebar}
        >
          &#9776;
        </button>
        <div className="w3-container">
          <h1>My Page</h1>
        </div>
      </div>

      {/* Page Content */}
      <div className="w3-container">
        <h3>Responsive Sidebar</h3>
        <p>
          The sidebar in this example will always be displayed on screens wider than 992px,
          and hidden on tablets or mobile phones (screens less than 993px wide).
        </p>
        <p>
          On tablets and mobile phones the sidebar is replaced with a menu icon to open the sidebar.
        </p>
        <p>The sidebar will overlay the page content.</p>
        <p>
          <b>Resize the browser window to see how it works.</b>
        </p>
      </div>
    </div>
  </div>
  
  )
}

export default UserNavbar
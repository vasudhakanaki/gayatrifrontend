import React from 'react'

function DashBoardIndex() {
  return (
    <div>
              <aside className="left-sidebar">

<div>
  <div className="brand-logo d-flex align-items-center justify-content-between">
    <div className="mb-2">
      <a href="../" className="text-nowrap text-warning logo-img " style={{ fontSize: '21px', fontWeight: 'bolder' }}>
        &nbsp; <img src="/img/GayatriLogo.png" className="mt-3 " width="130%" height="90px" alt="" />
      </a>
    </div>
    <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
      <i className="ti ti-x fs-8"></i>
    </div>
  </div>

  <nav className="sidebar-nav scroll-sidebar" data-simplebar="init">
    <div className="simplebar-wrapper selected" style={{ margin: '0px -24px' }}>
      <div className="simplebar-height-auto-observer-wrapper">
        <div className="simplebar-height-auto-observer"></div>
      </div>
      <div className="simplebar-mask selected">
        <div className="simplebar-offset selected" style={{ right: '0px', bottom: '0px' }}>
          <div className="simplebar-content-wrapper selected" tabIndex="0" role="region" aria-label="scrollable content" style={{ height: '100%', overflow: 'hidden' }}>
            <div className="simplebar-content selected" style={{ padding: '0px 24px' }}>
              <ul id="sidebarnav" className="in">

                <li className="sidebar-item ">
                  <a className="sidebar-link " href="/userdashboard" aria-expanded="false">
                    <span>
                      <i className="ti ti-layout-dashboard"></i>
                    </span>
                    <span className="hide-menu">Dashboard</span>
                  </a>
                </li>


                <li className="sidebar-item">
                  <a className="sidebar-link" href="/appliedcourses" aria-expanded="false">
                    <span>
                      <i className="ti ti-list-numbers"></i>
                    </span>
                    <span className="hide-menu">Applied Courses</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" href="/fees" aria-expanded="false">
                    <span>
                      <i className="">₹</i>
                    </span>
                    <span className="hide-menu">Fees Structure</span>
                  </a>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </div>
  
  </nav>

</div>
</aside>
    </div>
  )
}

export default DashBoardIndex;
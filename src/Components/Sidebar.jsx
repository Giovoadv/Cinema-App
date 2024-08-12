import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import "../Components/Sidebar.css";

const Sidebar = () => {
  return (
    <div
      className="sidebar"
      style={{
        display: "flex",
        height: "100vh",
        overflow: "scroll initial",
        hover: "#ffff",
      }}
    >
      <CDBSidebar
        textColor="rgb(134, 132, 132)"
        backgroundColor="rgb(29, 28, 28)"
      >
        <CDBSidebarHeader
          style={{ border: "none" }}
          prefix={<i className="fa fa-bars fa-large"></i>}
        >
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Home
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink to="/" className="active">
              <CDBSidebarMenuItem className="menuItem" icon="columns">
                Dashboard
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/tables" className="active">
              <CDBSidebarMenuItem className="menuItem" icon="table">
                Tables
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/profile" className="active">
              <CDBSidebarMenuItem className="menuItem" icon="user">
                Profile Page
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/analytics" className="active">
              <CDBSidebarMenuItem className="menuItem" icon="chart-line">
                Analytics
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink to="/hero404" target="_blank" className="active">
              <CDBSidebarMenuItem
                className="menuItem"
                icon="exclamation-circle"
              >
                404 Page
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px",
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;

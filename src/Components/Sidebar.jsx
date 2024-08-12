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
            <NavLink exact to="/" className="active">
              <CDBSidebarMenuItem className="menuItem" icon="columns">
                <CDBSidebarMenuItem>Dashboard</CDBSidebarMenuItem>
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tables" className="active">
              <CDBSidebarMenuItem className="menuItem" icon="table">
                <CDBSidebarMenuItem>Tables</CDBSidebarMenuItem>
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" className="active">
              <CDBSidebarMenuItem className="menuItem" icon="user">
                <CDBSidebarMenuItem>Profile Page</CDBSidebarMenuItem>
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" className="active">
              <CDBSidebarMenuItem className="menuItem" icon="chart-line">
                <CDBSidebarMenuItem>Analytics</CDBSidebarMenuItem>
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/hero404" target="_blank" className="active">
              <CDBSidebarMenuItem
                className="menuItem"
                icon="exclamation-circle"
              >
                <CDBSidebarMenuItem>404 Page</CDBSidebarMenuItem>
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

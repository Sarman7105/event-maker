import React,{useState} from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBIcon,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isAdmin }) => {
  const [value, setValue] = useState('');
  return (
    <div
      style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
            Sidebar
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/dashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Dash Board</CDBSidebarMenuItem>
            </NavLink>

            {
              (isAdmin)? 
              (<><NavLink exact to="/addAdmin" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user-plus">Make Admin</CDBSidebarMenuItem>
            </NavLink> <NavLink exact to="/addservice" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="plus">
                Add Service
              </CDBSidebarMenuItem>
                  </NavLink></>) : <p>{" "}</p>
            }

            <NavLink
              exact to="/review"
            >
              <CDBSidebarMenuItem icon="border-all">
                Review
              </CDBSidebarMenuItem>
            </NavLink>
            
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
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
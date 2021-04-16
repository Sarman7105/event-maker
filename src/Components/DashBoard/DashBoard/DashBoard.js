import React from 'react';
import OrderList from '../OrderList/OrderList';
import Sidebar from '../Sidebar/Sidebar';

const DashBoard = () => {
    return (
        <div className="row">
            <div className="col-md-2 ">
                 <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 mt-5">
                <h6 style={{display:"inline-block"}}>Order List</h6>
                <h6 style={{float:'right',marginRight:'20px'}}>Name</h6>
                <OrderList></OrderList>
            </div>
           
        </div>
    );
};

export default DashBoard;
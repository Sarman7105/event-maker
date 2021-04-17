import React from 'react';
import OrderList from '../OrderList/OrderList';
import Sidebar from '../Sidebar/Sidebar';

const DashBoard = () => {
    return (
        <div className="row">
            <div className="col-md-2 col-sm-2 m3-5 ">
                 <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 col-sm-9 mt-5">
                <div className="p-2">
                    <h6 style={{display:"inline-block"}}>Order List</h6>
                    <h6 style={{float:'right',marginRight:'20px'}}>Name</h6>
                    <OrderList></OrderList>
                </div>
            </div>
           
        </div>
    );
};

export default DashBoard;
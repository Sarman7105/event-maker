import React,{useContext,useState,useEffect} from 'react';
import { UserContext } from '../../../App';
import OrderList from '../OrderList/OrderList';
import Sidebar from '../Sidebar/Sidebar';

const DashBoard = () => {
    const [user, setUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        const url = `https://shrouded-springs-84958.herokuapp.com/admin?email=${user.email}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.length) {
                    setIsAdmin(true);
                }
                else {
                    setIsAdmin(false);
                }
            });
    },[user.email])
    return (
        <div className="row">
            <div className="col-md-2 col-sm-2 m3-5 ">
                 <Sidebar isAdmin={isAdmin}></Sidebar>
            </div>
            <div className="col-md-9 col-sm-9 mt-5">
                <div className="p-2">
                    <h6 style={{display:"inline-block"}}>Order List</h6>
                    <h6 style={{ float: 'right', marginRight: '20px' }}>{ user.name}</h6>
                    <OrderList isAdmin={isAdmin}></OrderList>
                </div>
            </div>
           
        </div>
    );
};

export default DashBoard;
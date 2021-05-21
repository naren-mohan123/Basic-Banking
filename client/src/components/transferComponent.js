import React, {useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { updateUser,updateTransactions } from "../Redux/ActionCreators";

const Transfer = ({senderId,receiverId,amount}) => {
    
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    const sender = users.filter((user) => user._id === (senderId))[0];
    const receiver = users.filter((user) => user._id === (receiverId))[0];

    const trans = {"sender" : sender.name,"receiver" : receiver.name,"balance":amount};

    const x = receiver.balance;
    const data1 = {"balance" : sender.balance-amount};
    const data2 = {"balance" : Number(amount)+ Number(x) };

    console.log(trans);

    const perform = () => {
        dispatch(updateUser(senderId,data1));
        dispatch(updateUser(receiverId,data2));
        dispatch(updateTransactions(trans));
    }

    return(
        <div class="container">
        <h2 class="text-center pt-4" >Transfer from</h2>
            <div class="row">
                <div class="col">
                    <div class="table-responsive-sm">
                    <table class="table table-hover table-sm table-striped table-condensed table-bordered">
                        <thead>
                            <tr>
                            <th scope="col" class="text-center py-2">Name</th>
                            <th scope="col" class="text-center py-2">E-Mail</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr  >
                        <td class="py-2">{sender.name}</td>
                        <td class="py-2">{sender.email}</td>
                        </tr> 
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
            <h2 class="text-center pt-4" >Transfer to</h2>
            <div class="row">
                <div class="col">
                    <div class="table-responsive-sm">
                    <table class="table table-hover table-sm table-striped table-condensed table-bordered">
                        <thead>
                            <tr>
                            <th scope="col" class="text-center py-2">Name</th>
                            <th scope="col" class="text-center py-2">E-Mail</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr >
                        <td class="py-2">{receiver.name}</td>
                        <td class="py-2">{receiver.email}</td>
                        </tr> 
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
            <div className = "row ">
                <h2 className = "col-12 col-md-4 d-flex justify-content-md-start d-flex justify-content-center" >
                    Amount : 
                </h2>
                <h2 className = "col-12 col-md-8 d-flex justify-content-md-end d-flex justify-content-center" >
                    {amount}
                </h2>
            </div>
            <Link onClick = {perform} to = "/transaction" >
                <Button type="submit" color="primary" className = "m-5">
                    <span className="fa fa-check-circle fa-lg iconss"></span>Confirm
                </Button>
            </Link> 
    </div>
    )
};

export default Transfer;
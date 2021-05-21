import React, {useEffect, useState} from "react";
import {  useSelector } from 'react-redux';
import { Form,Label,Input,FormGroup,Col,Button } from "reactstrap";
import { Link } from "react-router-dom";
import { updateUser } from "../Redux/ActionCreators";
import { useDispatch } from "react-redux";

const PostDetail = ({userId,senderId,setSenderId,receiverId,setReceiverId,amount,setAmount}) => {

   const dispatch  = useDispatch();

    const users = useSelector((state) => state.users);
    const user = users.filter((user) => user._id === (userId))[0];
    
    const others = users.filter((user) => user._id != (userId));
    
    const [balance,setbalance] = useState(0);

    const setting = (receId) => {
        setSenderId(userId);
        setReceiverId(receId);

    }


    const handleSubmit = (e) => {

        e.preventDefault();

        if(balance <= 0){
            alert("please Enter the correct amount")
            setbalance(0);
            
        }
        else if(balance > user.balance){
            alert("Amount is insufficient in the account");
            setbalance(0);
        }
        else {
            const newBalance = user.balance - balance;
            setAmount(balance);
            alert("Please select the other person")        
        }
    }

    return(
        <div class="container">
        <h2 class="text-center pt-4" >Transfer Money</h2>
            <div class="row">
                <div class="col">
                    <div class="table-responsive-sm">
                    <table class="table table-hover table-sm table-striped table-condensed table-bordered">
                        <thead>
                            <tr>
                            <th scope="col" class="text-center py-2">Name</th>
                            <th scope="col" class="text-center py-2">E-Mail</th>
                            <th scope="col" class="text-center py-2">Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                        <td class="py-2">{user.name}</td>
                        <td class="py-2">{user.email}</td>
                        <td class="py-2">{user.balance}</td>
                    </tr> 

                        </tbody>
                    </table>
                    </div>
                </div>
                <div className = "row trans-content">
                <Form onSubmit = {handleSubmit} >
                    <FormGroup className = "row">
                        <Label htmlFor="balance" md = {2} className= "d-flex justify-content-start">Balance</Label>
                        <Col md = {6}>
                        <Input type="number" id="balance" name="balance" className = " form-control"
                        placeholder="Amount" value = {balance} onChange = {(e) => setbalance(e.target.value)} />
                        </Col>
                        <Col md={{size: 3}} className= "d-flex justify-content-md-start justify-content-center url">
                            <Button type="submit" color="info">
                                <span className="fa fa-check fa-lg"></span>Check
                            </Button>
                    </Col>
                    </FormGroup>
                    </Form>
                </div>

                <div class="row">
                <h2 class="text-center pt-4" >Please Select The Other Person</h2>
            
                <div class="col">
                    <div class="table-responsive-sm">
                    <table class="table table-hover table-sm table-striped table-condensed table-bordered">
                        <thead>
                            <tr>
                            <th scope="col" class="text-center py-2">Name</th>
                            <th scope="col" class="text-center py-2">E-Mail</th>
                            <th scope="col" class="text-center py-2">Balance</th>
                            <th scope="col" class="text-center py-2">Select</th>
                            </tr>
                        </thead>
                        <tbody>

                        {others.map((user) => (
                                <tr key = {user._id} >
                        <td class="py-2">{user.name}</td>
                        <td class="py-2">{user.email}</td>
                        <td class="py-2">{user.balance}</td>
                        <td>
                            <Button type="button" onClick = {() => setting(user._id)} className="btn" color ="primary">select</Button>                           
                        </td> 
                    </tr> 
    ))
                        }

                        </tbody>
                    </table>
                    </div>
                </div>
                <div className = "row-content">
                <Link to = "/transfer" >
                    <Button type = "button" className= "btn" color = "success">
                        Proceed
                    </Button>
                </Link>
                </div>
            </div>
            </div>  
    </div>
    )
};

export default PostDetail;
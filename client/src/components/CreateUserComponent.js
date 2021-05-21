import React, {useState} from "react";
import { Link, Redirect } from "react-router-dom";
import { Button } from "reactstrap";
import {  Form, Input,Label,FormGroup,Col } from "reactstrap";
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from "../Redux/ActionCreators";

const CreateUser = () => {

    const [postData,setPostData] = useState({name:"",email:"",balance:""});
    const dispatch = useDispatch()

    const clear = () => {
        setPostData({ name:"",email:"",balance:"" });
      };

    const handleSubmit = (e) => {

        console.log(postData);
        if(postData){
            dispatch(createUser(postData));
            clear();
        }
        e.preventDefault();
    }

    return(
        <div className = "container ">
            <div className = "row row-content">
            <div className="col-12">
                      <h3>Enter Your Details</h3>
                   </div>
            <div className = "col-12">
            <Form autoComplete="off" onSubmit={handleSubmit}>
                <FormGroup className = "row m-5">
                        <Label htmlFor="name" md = {2} >Name</Label>
                        <Col md = {10}>
                        <Input type="text" id="name" name="name" className = "form-control"
                        value = {postData.name}
                        placeholder="Name"
                        onChange={(e) => setPostData({ ...postData, name: e.target.value })} />
                        </Col>
                </FormGroup>
                <FormGroup className = "row m-5">
                        <Label htmlFor="email" md = {2} >Email</Label>
                        <Col md = {10}>
                        <Input type="text" id="email" name="email" className = " form-control"
                        placeholder="Email" value = {postData.email}
                        onChange={(e) => setPostData({ ...postData, email: e.target.value })} />
                        </Col>
                </FormGroup>
                <FormGroup className = "row m-5">
                        <Label htmlFor="balance" md = {2} >Balance</Label>
                        <Col md = {10}>
                        <Input type="number" id="balance" name="balance" className = " form-control"
                        placeholder="Balance" value = {postData.balance}
                        onChange={(e) => setPostData({ ...postData, balance: e.target.value })} />
                        </Col>
                </FormGroup>
                <FormGroup className = "row">
                <Col md={{size: 4, offset: 2}}>
                            <Button type="submit" color="primary" className = "url">
                                <span className="fa fa-plus-square fa-lg iconss"></span>Submit
                            </Button>
                    </Col>
                    <Col  md = {4} className>
                        <Button color = "primary" onClick = {clear} className = "url">
                            <span className="fa fa-minus fa-lg iconss"></span>Clear
                        </Button>
                    </Col>
                </FormGroup>
                </Form>
               
            </div>
            </div>
        </div>
    )
};

export default CreateUser;
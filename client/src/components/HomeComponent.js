import React from "react";
import { Card, CardImg, CardBody} from "reactstrap";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const Home = () => {
    return(
        <div className = "container">
            <div className = "row">
                <div className = "col-12 col-md m-1">
                    <Card>
                        <CardImg src = "assests/images/create.jpg" />
                    </Card>
                    <Link to = "/create">
                        <Button className = "m-2" color = "primary">
                            <span className="fa fa-plus-square fa-lg"></span>Create User
                        </Button>
                    </Link>
                </div>
                <div className = "col-12 col-md m-1">
                    <Card>
                        <CardImg src = "assests/images/user.jpg" />
                    </Card>
                    <Link to = "/users">
                        <Button className = "m-2" color = "info">
                            <span className="fa fa-users fa-lg"></span>Transfer Money
                        </Button>
                    </Link>
                </div>
                <div className = "col-12 col-md m-1">
                    <Card>
                        <CardImg src = "assests/images/history.jpg" />
                    </Card>
                    <Link to = "/Transaction">
                        <Button className = "m-2" color = "success">
                            <span className="fa fa-history fa-lg"></span>Transaction Histroy
                        </Button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Home;
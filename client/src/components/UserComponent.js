import React from "react";
import {  useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const Users = () => {
    const users = useSelector((state) => state.users);

    return (
        // <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        //   {posts.map((post) => (
        //     <Grid key={post._id} item xs={12} sm={6} md={6}>
        //       <Post post={post} setCurrentId={setCurrentId} />
        //     </Grid>
        //   ))}
        // </Grid>

      <div class="container">
        <h2 class="text-center pt-4" >Users</h2>
            <div class="row">
                <div class="col">
                    <div class="table-responsive-sm">
                    <table class="table table-hover table-sm table-striped table-condensed table-bordered">
                        <thead>
                            <tr>
                            <th scope="col" class="text-center py-2">Name</th>
                            <th scope="col" class="text-center py-2">E-Mail</th>
                            <th scope="col" class="text-center py-2">Balance</th>
                            <th scope="col" class="text-center py-2">Operation</th>
                            </tr>
                        </thead>
                        <tbody>

                        {users.map((user) => (
                                <tr key = {user._id} >
                        <td class="py-2">{user.name}</td>
                        <td class="py-2">{user.email}</td>
                        <td class="py-2">{user.balance}</td>
                        <td>
                            <Link to = {`/users/${user._id}`}>
                                <Button type="button" color = "primary" class="btn">Transact</Button>
                            </Link>
                        </td> 
                    </tr> 
    ))
                        }

                        </tbody>
                    </table>
                    </div>
                </div>
            </div> 
    </div>
    );
};

export default Users;
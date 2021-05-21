import React from "react";
import {  useSelector } from 'react-redux';

const Transaction = () => {

    const transactions = useSelector((state) => state.transactions);

    return(
        <div class="container">
        <h2 class="text-center pt-4" >Transfer Money</h2>
            <div class="row">
                <div class="col">
                    <div class="table-responsive-sm">
                    <table class="table table-hover table-sm table-striped table-condensed table-bordered">
                        <thead>
                            <tr>
                            <th scope="col" class="text-center py-2">Sender</th>
                            <th scope="col" class="text-center py-2">Receiver</th>
                            <th scope="col" class="text-center py-2">Amount</th>
                            <th scope="col" class="text-center py-2">Date</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                transactions.map((transaction) => (
                                    <tr key = {transaction._id}>
                                        <td class="py-2">{transaction.sender}</td>
                                        <td class="py-2">{transaction.receiver}</td>
                                        <td class="py-2">{transaction.balance}</td>
                                        <td class="py-2">{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(transaction.createdAt)))}</td>  
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    </div>
                </div>
            </div> 
    </div>
    )
}

export default Transaction;
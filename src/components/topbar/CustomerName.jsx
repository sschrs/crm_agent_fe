import React from "react";
import { useSelector } from "react-redux";

export const CustomerName = () => {
    const session = useSelector(state => state.session);
    const customer = session.customer;
    
    const isCustomerValid = customer && Object.keys(customer).length > 0;
    
    return (
        <div className="fw-bold">
            {isCustomerValid ? `Customer: ${customer.name}`: ``}
        </div>
    )
}
import React from 'react';
import Card from "./Card";

function EmployeeInfo({data}) {
    return (
        data.map(employee => (
            <Card 
                id={employee.id}
                name={employee.name}
                dept={employee.dept}
                phone={employee.phone}
            />
        ))
    )
}

export default EmployeeInfo;

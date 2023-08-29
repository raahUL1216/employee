// import models and save or update employees
let employees = [];

let employeeIdCounter = 1;

const upsertEmployee = async function(employee) {
    const { employee_id, first_name, last_name, email_address, department_id } = employee;

    if (!employee_id) {
        employee.employee_id = employeeIdCounter;  // random number
        employees.push(employee); 

        employeeIdCounter += 1;
    } else {
        // update employee
        let employee = employees.filter((employee) => employee.employee_id===employee_id)[0];

        if (employee) {
            employee.first_name = first_name;
            employee.last_name = last_name;
            employee.email_address = email_address;
            employee.department_id = department_id;
        }
    }

    // console.log(employees);
};

module.exports = {
    upsertEmployee,
    employees
}
# Problem
1. Implement a REST API with Express Js to save or update an employee with fields => employee_id, first_name, last_name, email_address, department_id
2. validate the request data as 
    first_name : required
    email_address : email address format
    department_id : valid department id 
3. configure rate limit to prevent multiple access from same user between 5 seconds
4. write integration tests for the api
*/

# Test 
http://localhost:3000/employee
{
    "employee_id": null,
    "first_name": "rahul",
    "last_name": "chodvadiya",
    "department_id": 1,
    "email_address": "rahul@gmail.com"
}
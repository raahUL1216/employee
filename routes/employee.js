const express = require('express');
const router = express.Router();

const employeeUtils = require('../utils/employee');
const { employeeDepartments } = require('../utils/departments');
const { validateEmail } = require('../utils/validation');


router.post('/employee', async function (req, res, next) {
    const employee = req.body;

    employee.employee_id = parseInt(employee.employee_id) || 0;
    employee.first_name = employee.first_name || '';

    if (!employee || Object.keys(employee) == 0) {
        return res.json({ status: false, message: 'Invalid payload.' })
    }

    // validate employee fields
    if (!employee.first_name.trim()) {
        return res.json({ status: false, message: 'first name is required.' })
    }

    if (!validateEmail(employee.email_address)) {
        return res.json({ status: false, message: 'Invalid email address.' })
    }

    const departments_ids = Object.keys(employeeDepartments).map((department) => parseInt(department) || 0);

    if (!departments_ids.includes(employee.department_id)) {
        return res.json({ status: false, message: 'Invalid employee department.' })
    }

    await employeeUtils.upsertEmployee(employee);

    return res.json({ status: true, message: 'Employee added/updated successfully.' })
});

module.exports = router;
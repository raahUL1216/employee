
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;

const app = require('../index');

describe('Create /employee', function () {
    it('should return error when invalid email is passed', function () {
        let employee = {
            employee_id: null,
            first_name: 'rahul',
            last_name: 'chodvadiya',
            email_address: 'invalid email',
            department_id: 1
        };

        chai
            .request(app)
            .post('/employee')
            .send(employee)
            .end((err, res) => {
                expect(res.body).to.have.property('status', false);
                expect(res.body).to.have.property('message', 'Invalid email address.');
            });
    });

    it('should return error when first name is not passed', function () {
        let employee = {
            employee_id: null,
            first_name: '',
            last_name: 'chodvadiya',
            email_address: 'rahul@gmail.com',
            department_id: 1
        };

        chai
            .request(app)
            .post('/employee')
            .send(employee)
            .end((err, res) => {
                expect(res.body).to.have.property('status', false);
                expect(res.body).to.have.property('message', 'first name is required.');
            });
    });

    it('should return error when invalid department is passed', function () {
        let employee = {
            employee_id: null,
            first_name: 'rahul',
            last_name: 'chodvadiya',
            email_address: 'rahul@gmail.com',
            department_id: 100
        };

        chai
            .request(app)
            .post('/employee')
            .send(employee)
            .end((err, res) => {
                expect(res.body).to.have.property('status', false);
                expect(res.body).to.have.property('message', 'Invalid employee department.');
            });
    });

    it('should create employee when correct payload is passed', function () {
        let employee = {
            employee_id: null,
            first_name: 'rahull',
            last_name: 'chodvadiyaa',
            email_address: 'rahul1215@gmail.com',
            department_id: 2
        };

        chai
            .request(app)
            .post('/employee')
            .send(employee)
            .end((err, res) => {
                expect(res.body).to.have.property('status', true);
                expect(res.body).to.have.property('message', 'Employee added/updated successfully.');
            });
    });
});

describe('Update /employee', function () {
    before(function() {
        // create dummy employee before and try to update it in test
    })

    // use pre fetched employee and test below cases similarly
    it('should return error when first name is not passed', function () {
    });

    it('should return error when invalid email is passed', function () {
        
    });

    it('should return error when invalid department is passed', function () {
       
    });

    it('should update employee when correct payload is passed', function () {

    });
});
/*
Unit tests for the login controller with Jest:
1. Response must have status code 200
2. The token must be returned in the response
3. The response should return a user object with 2 fields email and subscription, having the data type String
 */

const app = require("../../app");

const mongoose = require("mongoose");

const { DB_HOST_TEST, PORT } = process.env;

const request = require("supertest");
const { User } = require("../../models");

describe("test register rout", () => {
    let server = null;
    beforeAll(async () => {
        server = app.listen(PORT);
        await mongoose.connect(DB_HOST_TEST);
    });

    afterAll(async () => {
        server.close();
        await mongoose.connection.close();
    });

    beforeEach(async()=> {

    })

    afterEach(async () => { 
        await User.deleteMany({});
    });

    test("test register with correct data", async () => {
        const registerData = {
            name: "Mary",
            email: "mary@gmail.com",
            password: "123456"
        };

        const {statusCode, body} = await request(app).post("/api/auth/register").send(registerData);
        expect(statusCode).toBe(201);
        expect(body.user.name).toBe(registerData.name);
        expect(body.user.email).toBe(registerData.email);

        const user = await User.findOne({email: registerData.email, name: registerData.name});
        expect(user.name).toBe(registerData.name);
        expect(user.email).toBe(registerData.email);
    });
});
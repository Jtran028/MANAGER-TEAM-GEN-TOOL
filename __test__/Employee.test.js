const Employee = require("../lib/Employee"); // imports class from lib pathway

test("Can create an new employee.", () => {
    const employeeName = new Employee();
    expect(typeof(employeeName)).toBe("object"); //assertion
})

test("Testing name.", () => {
    const name = "Jeffrey";
    const employeeName= new Employee(name);
    expect(employeeName.name).toBe(name);
})

test("Testing ID.", () => {
    const id = 2;
    const employeeName = new Employee("Jeffrey", id);
    expect(employeeName.id).toBe(id);
})

test("Testing Employee.", () => {
    const name = "Jeffrey";
    const email = "jtran028@@gmail.com";
    const id = 2;
    const employeeName = new Employee(name, id, email);
    expect(employeeName.email).toBe(email);
    expect(employeeName.id).toBe(id);
    expect(employeeName.name).toBe(name);
})

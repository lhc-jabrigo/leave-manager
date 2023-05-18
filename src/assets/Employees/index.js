import axios from "axios";

export default {
  async getAllEmployees() {
    let employees = await axios.get("http://localhost:3000/employees/");
    return employees.data;
  },
  async getEmployee(id) {
    let employee = await axios.get(`http://localhost:3000/employees/${id}`);
    return employee.data;
  },
  async addEmployee(employeeInfo) {
    await axios.post("http://localhost:3000/employees/", employeeInfo);
  },
  async updateEmployee(employeeInfo) {
    await axios.put(
      `http://localhost:3000/employees/${employeeInfo.id}`,
      employeeInfo
    );
  },
  async deleteEmployee(id) {
    await axios.delete(`http://localhost:3000/employees/${id}`);
  },
};

import axios from "axios";

export default {
  async getAllLeaves() {
    let leaves = await axios.get("http://localhost:3000/leaves/");
    return leaves.data;
  },
  async getLeave(id) {
    let leave = await axios.get(`http://localhost:3000/leaves/${id}`);
    return leave.data;
  },
  async addLeave(leaveInfo) {
    await axios.post("http://localhost:3000/leaves/", leaveInfo);
  },
  async updateLeave(leaveInfo) {
    await axios.put(`http://localhost:3000/leaves/${leaveInfo.id}`, leaveInfo);
  },
  async deleteLeave(id) {
    await axios.delete(`http://localhost:3000/leaves/${id}`);
  },
};

const axiosInstance = require("../config/axiosConfig");
const { PROBLEM_ADMIN_SERVICE_URL } = require("../config/serverConfig");

const PROBLEM_ADMIN_API_URL = `${PROBLEM_ADMIN_SERVICE_URL}/api/v1`;

async function fetchProblemDetails(problemId) {
    try {
        const uri = `${PROBLEM_ADMIN_API_URL}/problems/${problemId}`;
        const response = await axiosInstance.get(uri);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log('Something went wrong while fetching the problem');
        console.log(error);
    }
}

module.exports = fetchProblemDetails;
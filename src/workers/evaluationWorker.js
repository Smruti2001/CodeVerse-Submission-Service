const { Worker } = require('bullmq');
const redisConnection = require('../config/redisConfig');
const axios = require('axios');
const SubmissionRepository = require('../repositories/submissionRepository');

async function evaluationWorker(queue) {

    new Worker(queue, async (job) => {
        if(job.name === 'EvaluationJob') {
            try {
                console.log(job.data);
                const response = await axios.post('http://localhost:3600/sendPayload', {userId: job.data.userId, payload: job.data});
                // console.log(response);
                const dbResponse = await new SubmissionRepository().updateSubmission(job.data.submissionId, job.data.response.status);
                console.log('dbResponse is', dbResponse);
            } catch (error) {
                console.log(error);
            }
        }
    },
        { connection: redisConnection }
    )
}

module.exports = evaluationWorker;
const { Queue } = require('bullmq');

module.exports = new Queue('SubmissionQueue');
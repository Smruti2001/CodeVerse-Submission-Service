const submissionQueue = require('../queues/submissionQueue');

module.exports = async function(payload) {
    await submissionQueue.add('SubmissionJob', payload);
    console.log('Added a submission job to the queue');
}
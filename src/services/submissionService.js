const submissionProducer = require("../producers/submissionQueueProducer");

class SubmissionService {
    constructor() {
        // Can Inject the repo instance in here
    }

    async pingCheck() {
        return 'Pong!!!!'
    }

    async addSubmissions(submission) {
        const response = await submissionProducer(submission);
        return response;
    }

}

module.exports = SubmissionService;
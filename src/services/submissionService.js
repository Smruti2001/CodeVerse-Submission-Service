const submissionProducer = require("../producers/submissionQueueProducer");

class SubmissionService {
    constructor(submissionRepository) {
        this.submissionRepository = submissionRepository;
    }

    async pingCheck() {
        return 'Pong!!!!'
    }

    async addSubmissions(submissionPayload) {
        const submission = await this.submissionRepository.addSubmission(submissionPayload);

        if(!submission) {
            throw {message: 'Not able to create the submission'};
        }

        console.log(submission);

        const response = await submissionProducer(submission);
        return {queueResponse: response, submission};
    }

}

module.exports = SubmissionService;
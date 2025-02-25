const Submission = require("../models/submissionModel");

class SubmissionRepository {
    async addSubmission(submission) {
        const response = await Submission.create(submission);
        return response;
    }
};


module.exports = SubmissionRepository;
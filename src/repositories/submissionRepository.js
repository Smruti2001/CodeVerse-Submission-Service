const Submission = require("../models/submissionModel");

class SubmissionRepository {
    async addSubmission(submission) {
        const response = await Submission.create(submission);
        return response;
    }

    async updateSubmission(submissionId, status) {
        const response = await Submission.findOneAndUpdate({ _id: submissionId }, {status: status}, { new: true });

        if(!response) {
            throw {message: 'Submission not found'};
        } else {
            console.log('Problem Updated successfully');
            return response;
        }
    }
};


module.exports = SubmissionRepository;
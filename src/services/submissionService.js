const fetchProblemDetails = require("../apis/problemAdminAPI");
const submissionProducer = require("../producers/submissionQueueProducer");

class SubmissionService {
    constructor(submissionRepository) {
        this.submissionRepository = submissionRepository;
    }

    async pingCheck() {
        return 'Pong!!!!'
    }

    async addSubmissions(submissionPayload) {
        const problemId = submissionPayload.problemId;
        const problemAdminApiResponse = await fetchProblemDetails(problemId);
        
        if(!problemAdminApiResponse) {
            throw {message: 'Unable to fetch the data from Problem Admin Service'};
        }

        const languageCodeStub = problemAdminApiResponse.data.codeStubs.find(codeStub => codeStub.language.toLowerCase() == submissionPayload.language.toLowerCase())

        submissionPayload.code = languageCodeStub.startSnippet + "\n\n" + submissionPayload.code + "\n\n" + languageCodeStub.endSnippet;

        const submission = await this.submissionRepository.addSubmission(submissionPayload);

        if(!submission) {
            throw {message: 'Not able to create the submission'};
        }

        console.log(submission);

        const response = await submissionProducer({
            [submission._id]: {
                code: submission.code,
                language: submission.language,
                inputTestCases: problemAdminApiResponse.data.testCases[0].input,
                outputTestCases: problemAdminApiResponse.data.testCases[0].output
            }
        });
        return {queueResponse: response, submission};
    }

}

module.exports = SubmissionService;
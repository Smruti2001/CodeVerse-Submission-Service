class SubmissionService {
    constructor() {
        // Can Inject the repo instance in here
    }

    async pingCheck() {
        return 'Pong!!!!'
    }

    async addSubmissions() {
        return 'Submission Service'
    }

}

module.exports = SubmissionService;
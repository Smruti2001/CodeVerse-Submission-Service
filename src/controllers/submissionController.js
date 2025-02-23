async function pingController(req, res) {
    const response = await this.submissionService.pingCheck();
    res.send({data: response});
}

async function submissionController(req, res) {
    const response = await this.submissionService.addSubmissions();
    res.send({data: response});
}

module.exports = { pingController, submissionController }
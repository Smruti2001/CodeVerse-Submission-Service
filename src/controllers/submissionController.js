async function pingController(req, res) {
    const response = await this.submissionService.pingCheck();
    res.send({data: response});
}

async function submissionController(req, res) {
    const response = await this.submissionService.addSubmissions(req.body);
    return res.status(201).send({
        error: {},
        data: response,
        success: true,
        message: 'Added submission successfully'
    })
}

module.exports = { pingController, submissionController }
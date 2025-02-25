async function pingController(req, res) {
    const response = await this.submissionService.pingCheck();
    res.send({data: response});
}

async function submissionController(req, res) {
    const response = await this.submissionService.addSubmissions();
    return res.status(201).json({
        error: {},
        data: response,
        success: true,
        message: 'Added submission successfully'
    })
}

module.exports = { pingController, submissionController }
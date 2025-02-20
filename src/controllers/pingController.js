function pingController(req, res) {
    const response = this.testService.pingCheck();
    res.send({data: response});
}

module.exports = { pingController }
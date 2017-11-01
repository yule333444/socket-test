// defined as class methods
module.exports = app => {
    class Controller extends app.Controller {
        async ping() {
            const message = this.ctx.args[0];
            await this.service.test.testSocket();
            // await this.ctx.socket.emit('res', `Hi! I've got your message: ${message}`);
        }
    }
    return Controller
};

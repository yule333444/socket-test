/**
 * Created by dell on 2017/11/1.
 */
module.exports = app => {
    class Controller extends app.Controller {
        async startTaskById() {
            setTimeout(() => {
                await this.service.test.testSocket();
            },3000);
        }
    }
    return Controller
};

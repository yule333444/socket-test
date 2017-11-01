/**
 * Created by dell on 2017/10/31.
 */
module.exports = app => {
    class TaskService extends app.Service {
        constructor(ctx) {
            super(ctx);
        }

        async testSocket () {
            await this.ctx.socket.emit('res', 'xxxxxxxxxxx');
        }
    }
    return TaskService;
};
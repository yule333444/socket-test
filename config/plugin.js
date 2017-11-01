'use strict';

exports.static = true;
exports.validate = {
    enable: true,
    package: 'egg-validate',
};

exports.security = {
    enable:false,
    csrf: {
        // 判断是否需要 ignore 的方法，请求上下文 context 作为第一个参数
        // ignore: ctx => isInnerIp(ctx.ip),
        enable:false
    },
};
exports.io = {
    enable: true,
    package: 'egg-socket.io',
};
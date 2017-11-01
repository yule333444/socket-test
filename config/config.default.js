'use strict';

module.exports = {
  keys: 'my super cool keys',
    platformTypes:{
      amazon:1
  },
    baseUrl:'http://47.52.106.40:8010/api/ezeeship',
    trackState:{
        UNKNOWN:1,
        DELIVERED:3,
        TRANSIT:2,
        FAILURE:4,
        RETURNED:4
    },
    // 所有请求任务允许的最大并发数
    taskThottle:{
        orderList:6,
        orderListItem:30,
        feed:15,
        feedResult:15
    },
    // 所有请求任务的冷却时间。
    taskThottleTime:{
        ListOrders: 60,
        Feed:60,
        FeedResult:60,
        ListOrdersByNextToken: 60,
        ListOrderItems: 2,
        ListOrderItemsByNextToken: 2,
        GetMatchingProductForId: 1
    },
    timeZone:'Asia/Shanghai',
    io:{
        init: { }, // passed to engine.io
        namespace: {
            '/': {
                connectionMiddleware: ['auth'],
                packetMiddleware: ['filter'],
            },
        }
        /* redis: {
            host: '127.0.0.1',
            port: 6379
        } */
    }
};

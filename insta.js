/*globals $*/
$(document).ready(function () {
    'use strict';
    var feed = new Instafeed({
        get: 'user',
        userId: '5780316749',
        accessToken: '5780316749.1677ed0.d7fefb8feee7437d8ee397fd71cedf31',
        resolution: 'low_resolution',
        sortBy: 'random',
        limit: 3
    });
    feed.run();
});

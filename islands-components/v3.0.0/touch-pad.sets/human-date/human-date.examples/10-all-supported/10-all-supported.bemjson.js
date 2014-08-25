var dates = [],
    now = Date.now(),
    // множители в днях
    multipliers = [
        -600, -60, -30, -29, -25, -10, -5, -2, -1, -0.5, -0.25, -0.02, 0,
        0.25, 0.5, 1, 2, 10, 25, 29, 30, 60, 600
    ],
    oneDayMs = 60 * 60 * 24 * 1000;

multipliers.map(function(multiplier) {
    dates.push(now + (oneDayMs * multiplier));
});

([
    {
        block: 'i-global',
        params: {
            lang: 'ru',
            'content-region': 'ru'
        }
    },
    {
        block: 'b-page',
        title: '10-all-supported',
        head: [
            {elem: 'css', url: '_10-all-supported.css'},
            {elem: 'css', url: '_10-all-supported', ie: true}
        ],
        content: [
            {
                block: 'example',
                content: dates.map(function(timestamp) {
                    return {
                        block: 'example',
                        elem: 'date',
                        content: [
                            {
                                elem: 'js',
                                content: (new Date(timestamp)).toString()
                            },
                            {
                                elem: 'human-date',
                                content: {
                                    block: 'human-date',
                                    timestamp: timestamp,
                                    showYear: true,
                                    showTime: true
                                }
                            }
                        ]
                    };
                })
            },
            {block: 'i-jquery', mods: {version: '1.8.3'}},
            {elem: 'js', url: '_10-all-supported.js'}
        ]
    }
]);

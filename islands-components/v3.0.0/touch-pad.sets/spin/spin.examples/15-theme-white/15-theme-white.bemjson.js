({
    block: 'b-page',
    title: 'spin',
    head: [
        {elem: 'css', url: '_15-theme-white.css', ie: false},
        {elem: 'css', url: '_15-theme-white', ie: true}
    ],
    content: [

        {
            block: 'example',
            js: true,
            content: [
                {
                    block: 'example-text',
                    content: '16x16:'
                },
                {
                    block: 'spin',
                    js: true,
                    mods: {'progress': 'yes', 'theme': 'white-16'}
                },
                {
                    block: 'example-text',
                    content: '24x24:'
                },
                {
                    block: 'spin',
                    js: true,
                    mods: {'progress': 'yes', 'theme': 'white-24'}
                },
                {
                    block: 'example-text',
                    content: '32x32:'
                },
                {
                    block: 'spin',
                    js: true,
                    mods: {'progress': 'yes', 'theme': 'white-32'}
                },
                {
                    block: 'example-text',
                    content: '48x48:'
                },
                {
                    block: 'spin',
                    js: true,
                    mods: {'progress': 'yes', 'theme': 'white-48'}
                }
            ]
        },

        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_15-theme-white.js'}

    ]
});

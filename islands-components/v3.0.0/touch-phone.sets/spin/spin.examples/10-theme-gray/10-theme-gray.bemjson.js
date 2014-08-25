({
    block: 'b-page',
    title: 'spin',
    head: [
        {elem: 'css', url: '_10-theme-gray.css', ie: false},
        {elem: 'css', url: '_10-theme-gray', ie: true}
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
                    mods: {'progress': 'yes', 'theme': 'gray-16'}
                },
                {
                    block: 'example-text',
                    content: '24x24:'
                },
                {
                    block: 'spin',
                    js: true,
                    mods: {'progress': 'yes', 'theme': 'gray-24'}
                },
                {
                    block: 'example-text',
                    content: '32x32 (размер по умолчанию):'
                },
                {
                    block: 'spin',
                    js: true,
                    mods: {'progress': 'yes'}
                },
                {
                    block: 'example-text',
                    content: '48x48:'
                },
                {
                    block: 'spin',
                    js: true,
                    mods: {'progress': 'yes', 'theme': 'gray-48'}
                }
            ]
        },

        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_10-theme-gray.js'}

    ]
});

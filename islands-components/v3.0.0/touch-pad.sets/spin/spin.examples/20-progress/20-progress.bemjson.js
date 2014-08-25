({
    block: 'b-page',
    title: 'spin',
    head: [
        {elem: 'css', url: '_20-progress.css', ie: false},
        {elem: 'css', url: '_20-progress', ie: true}
    ],
    content: [
        {
            block: 'example',
            js: true,
            content: [
                {
                    block: 'example-text',
                    content: '48x48'
                },
                {
                    block: 'check-button',
                    name: 'spin-active',
                    value: '1',
                    mods: {size: 's'},
                    mix: {block: 'example', elem: 'tumbler'},
                    content: 'progress "yes"'
                },
                {
                    block: 'spin',
                    js: true,
                    mods: {theme: 'gray-48'}
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_20-progress.js'}
    ]
});

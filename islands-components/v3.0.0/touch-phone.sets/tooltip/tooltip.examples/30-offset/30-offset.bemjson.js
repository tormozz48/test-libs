({
    block: 'b-page',
    title: 'тултип с отступом',
    head: [
        {elem: 'css', url: '_30-offset.css', ie: false},
        {elem: 'css', url: '_30-offset', ie: true}
    ],
    content: [
        {
            block: 'example',
            content: [
                {
                    block: 'button',
                    mods: {size: 'm'},
                    content: 'Owner'
                },
                {
                    block: 'tooltip',
                    mods: {
                        size: 'm',
                        theme: 'success',
                        autoclosable: 'yes'
                    },
                    js: {
                        offset: 42
                    },
                    content: 'Hello'
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_30-offset.js'}
    ]
});

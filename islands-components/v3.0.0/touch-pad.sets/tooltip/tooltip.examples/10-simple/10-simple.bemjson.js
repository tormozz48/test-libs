({
    block: 'b-page',
    title: 'Простой тултип',
    head: [
        {elem: 'css', url: '_10-simple.css', ie: false},
        {elem: 'css', url: '_10-simple', ie: true}
    ],
    content: [
        {
            block: 'example',
            content: [
                {
                    block: 'button',
                    mods: {size: 'xs'},
                    content: 'Owner'
                },
                {
                    block: 'tooltip',
                    mods: {
                        size: 'xs',
                        theme: 'success'
                    },
                    content: 'Hello'
                }
            ]
        },
        {
            block: 'example',
            content: [
                {
                    block: 'button',
                    mods: {size: 's'},
                    content: 'Owner'
                },
                {
                    block: 'tooltip',
                    mods: {
                        size: 's',
                        theme: 'normal'
                    },
                    content: 'Hello'
                }
            ]
        },
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
                        theme: 'error'
                    },
                    content: 'Hello'
                }
            ]
        },
        {
            block: 'example',
            content: [
                {
                    block: 'button',
                    mods: {size: 'l'},
                    content: 'Owner'
                },
                {
                    block: 'tooltip',
                    mods: {
                        size: 'l',
                        theme: 'success'
                    },
                    content: 'Hello'
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_10-simple.js'}
    ]
});

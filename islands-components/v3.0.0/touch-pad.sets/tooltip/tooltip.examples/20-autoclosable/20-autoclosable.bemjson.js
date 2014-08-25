({
    block: 'b-page',
    title: 'Самозакрывающийся тултип',
    head: [
        {elem: 'css', url: '_20-autoclosable.css', ie: false},
        {elem: 'css', url: '_20-autoclosable', ie: true}
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
                    content: 'Hello'
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_20-autoclosable.js'}
    ]
});

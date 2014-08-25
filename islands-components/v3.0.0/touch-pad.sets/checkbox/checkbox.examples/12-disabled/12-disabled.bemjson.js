({
    block: 'b-page',
    title: 'Простой переключатель',
    head: [
        {elem: 'css', url: '_12-disabled.css', ie: false},
        {elem: 'css', url: '_12-disabled', ie: true}
    ],
    content: [
        {
            block: 'example',
            content: {
                block: 'checkbox',
                mods: {
                    size: 's',
                    disabled: 'yes'
                }
            }
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', 'url': '_12-disabled.js'}
    ]
});

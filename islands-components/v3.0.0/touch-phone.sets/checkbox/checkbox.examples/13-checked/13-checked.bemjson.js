({
    block: 'b-page',
    title: 'Простой переключатель',
    head: [
        {elem: 'css', url: '_13-checked.css', ie: false},
        {elem: 'css', url: '_13-checked', ie: true}
    ],
    content: [
        {
            block: 'example',
            content: {
                block: 'checkbox',
                mods: {
                    size: 's',
                    checked: 'yes'
                }
            }
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', 'url': '_13-checked.js'}
    ]
});

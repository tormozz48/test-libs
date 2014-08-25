({
    block: 'b-page',
    title: 'Простой переключатель',
    head: [
        {elem: 'css', url: '_14-checked-disabled.css', ie: false},
        {elem: 'css', url: '_14-checked-disabled', ie: true}
    ],
    content: [
        {
            block: 'example',
            content: {
                block: 'checkbox',
                mods: {
                    size: 's',
                    checked: 'yes',
                    disabled: 'yes'
                }
            }
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', 'url': '_14-checked-disabled.js'}
    ]
});

({
    block: 'b-page',
    title: 'С меткой',
    head: [
        {elem: 'css', url: '_10-label.css', ie: false},
        {elem: 'css', url: '_10-label', ie: true}
    ],
    content: [
        {
            attrs: {style: 'width: 400px; padding: 20px'},
            content: {
                block: 'input',
                mods: {size: 's'},
                content: [
                    {elem: 'label', content: 'Метка для инпута'},
                    {elem: 'control'}
                ]
            }
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', 'url': '_10-label.js'}
    ]
});

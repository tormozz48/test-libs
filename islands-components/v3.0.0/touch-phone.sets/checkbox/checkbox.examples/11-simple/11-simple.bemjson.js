({
    block: 'b-page',
    title: 'Простой переключатель',
    head: [
        {elem: 'css', url: '_11-simple.css', ie: false},
        {elem: 'css', url: '_11-simple', ie: true}
    ],
    content: [
        {
            block: 'example',
            content: {
                block: 'checkbox',
                mods: {size: 's'}
            }
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', 'url': '_11-simple.js'}
    ]
});

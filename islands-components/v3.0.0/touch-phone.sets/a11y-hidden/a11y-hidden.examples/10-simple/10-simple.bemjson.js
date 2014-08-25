({
    block: 'b-page',
    title: 'Визуально скрытый блок',
    head: [
        {elem: 'css', url: '_10-simple.css'},
        {elem: 'css', url: '_10-simple', ie: true}
    ],
    mods: {theme: 'normal'},
    content: [
        {
            block: 'main',
            mix: [{block: 'a11y-hidden'}],
            content: 'Скрытое содержимое'
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url:'_10-simple.js'}
    ]
});

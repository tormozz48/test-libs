({
    block: 'b-page',
    title: 'input: Поле ввода',
    head: [
        {elem: 'css', url: '_07-autofocus.css', ie: false},
        {elem: 'css', url: '_07-autofocus', ie: true}
    ],
    content: [
        {
            attrs: {style: 'width: 400px; padding: 20px;'},
            content: {
                block: 'input',
                js: {autoFocus: 'yes'},
                mods: {size: 's'},
                content: {elem: 'control'}
            }
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', 'url': '_07-autofocus.js'}
    ]
});

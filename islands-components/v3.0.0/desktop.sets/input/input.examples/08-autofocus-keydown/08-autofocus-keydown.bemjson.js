({
    block: 'b-page',
    title: 'input: Поле ввода',
    head: [
        {elem: 'css', url: '_08-autofocus-keydown.css', ie: false},
        {elem: 'css', url: '_08-autofocus-keydown', ie: true}
    ],
    content: [
        {
            attrs: {style: 'width: 400px; padding: 20px;'},
            content: {
                block: 'input',
                mods: {size: 's', autofocus: 'yes'},
                content: {elem: 'control'}
            }
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', 'url': '_08-autofocus-keydown.js'}
    ]
});

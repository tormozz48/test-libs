({
    block: 'b-page',
    title: 'input: Поле ввода',
    head: [
        {elem: 'css', url: '_05-input.css'},
        {elem: 'css', url: '_05-input', ie: true}
    ],
    content: [
        {
            block: 'example',
            attrs: {style: 'width: 400px; padding: 20px;'},
            content: [
                {
                    block: 'input',
                    mods: {size: 's'},
                    content: {elem: 'control'}
                },
                '<br><br>',
                {
                    block: 'input',
                    mods: {size: 's'},
                    content: {elem: 'control'},
                    value: 'Сразу с текстом'
                },
                '<br><br>',
                {
                    block: 'input',
                    mods: {size: 's'},
                    content: {elem: 'control'},
                    value: 'Очень большая строка, которая не влезает в текстовое поле'
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', 'url': '_05-input.js'}
    ]
});

({
    block: 'b-page',
    title: 'input: Поле ввода',
    head: [
        {elem: 'css', url: '_30-clear.css', ie: false},
        {elem: 'css', url: '_30-clear', ie: true}
    ],
    content: [
        {
            attrs: {style: 'width: 400px; padding: 20px;'},
            content: [
                'Поле ввода с кнопкой очистки<br/><br/>',
                {
                    block: 'input',
                    mods: {size: 's'},
                    content: [
                        {elem: 'hint', content: 'Поле ввода с кнопкой очистки'},
                        {elem: 'control'}
                    ]
                }
            ]
        },
        {
            attrs: {style: 'width: 400px; padding: 20px;'},
            content: [
                'Нет тут крестика и не будет<br/><br/>',
                {
                    block: 'input',
                    mods: {size: 's', clear: 'no'},
                    content: [
                        {elem: 'hint', content: 'Нет тут крестика и не будет'},
                        {elem: 'control'}
                    ]
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', 'url': '_30-clear.js'}
    ]
});

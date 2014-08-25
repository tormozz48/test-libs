({
    block: 'b-page',
    mix: [{block: 'i-ua', js: true}],
    title: 'Кнопка без рамки',
    head: [
        {elem: 'css', url: '_57-clear.css', ie: false},
        {elem: 'css', url: '_57-clear', ie: true}
    ],
    content: [
        {
            block: 'example',
            attrs: {style: 'margin: 20px'},
            content: [
                {
                    block: 'button',
                    url: '#',
                    mods: {size: 's', theme: 'clear'},
                    content: 'Кнопка без рамки ссылкой S'
                },
                '<br><br>',
                {
                    block: 'button',
                    url: '#',
                    mods: {size: 'm', theme: 'clear'},
                    content: 'Кнопка без рамки ссылкой M'
                },
                '<br><br>',
                {
                    block: 'button',
                    mods: {size: 's', theme: 'clear'},
                    content: 'Кнопка без рамки S'
                },
                '<br><br>',
                {
                    block: 'button',
                    mods: {size: 'm', theme: 'clear'},
                    content: 'Кнопка без рамки M'
                },
                '<br><br>',
                {
                    elem: 'color-block',
                    mods: {color: 'yellow'},
                    content: {
                        block: 'button',
                        mods: {size: 'm', theme: 'clear'},
                        content: 'Кнопка без рамки'
                    }
                },
                {
                    elem: 'color-block',
                    mods: {color: 'green'},
                    content: {
                        block: 'button',
                        mods: {size: 'm', theme: 'clear'},
                        content: 'Кнопка без рамки'
                    }
                },
                {
                    elem: 'color-block',
                    mods: {color: 'blue'},
                    content: {
                        block: 'button',
                        mods: {size: 'm', theme: 'clear'},
                        content: 'Кнопка без рамки'
                    }
                },
                '<br><br>',
                {
                    attrs: {style: 'position: relative; background: #F5F5EA; padding: 20px;'},
                    content: [
                        'Кнопка в позиционированном блоке',
                        '<br><br>',
                        {
                            block: 'button',
                            mods: {size: 'm', theme: 'clear'},
                            content: 'Кнопка без рамки'
                        }
                    ]
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_57-clear.js'}
    ]
});

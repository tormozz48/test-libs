({
    block: 'b-page',
    title: 'Чекбоксы без рамки кнопками',
    head: [
        {elem: 'css', url: '_60-clear.css', ie: false},
        {elem: 'css', url: '_60-clear', ie: true}
    ],
    content: [
        {
            attrs: {style: 'margin: 20px'},
            content: [
                {
                    block: 'button',
                    mods: {size: 's', theme: 'clear'},
                    content: 'Кнопка без рамки размером S'
                },
                '&nbsp;&nbsp;',
                {
                    block: 'check-button',
                    mods: {size: 's', theme: 'clear', checked: 'yes'},
                    content: 'Чекбокс без рамки размером S'
                },
                '&nbsp;&nbsp;',
                {
                    block: 'check-button',
                    mods: {size: 's', theme: 'clear', disabled: 'yes'},
                    content: 'Чекбокс без рамки размером S - скрыт'
                }
            ]
        },
        {
            attrs: {style: 'margin: 20px'},
            content: [
                {
                    block: 'button',
                    mods: {size: 'm', theme: 'clear'},
                    content: 'Кнопка без рамки размером M'
                },
                '&nbsp;&nbsp;',
                {
                    block: 'check-button',
                    mods: {size: 'm', theme: 'clear'},
                    content: 'Чекбокс без рамки размером M'
                },
                '&nbsp;&nbsp;',
                {
                    block: 'check-button',
                    mods: {size: 'm', theme: 'clear', checked: 'yes', disabled: 'yes'},
                    content: 'Чекбокс без рамки размером M - скрыт'
                }
            ]
        },
        {
            attrs: {style: 'margin: 20px'},
            content: [
                {
                    block: 'button',
                    mods: {size: 'l', theme: 'clear'},
                    content: 'Кнопка без рамки размером L'
                },
                '&nbsp;&nbsp;',
                {
                    block: 'check-button',
                    mods: {size: 'l', theme: 'clear'},
                    content: 'Чекбокс без рамки размером L'
                },
                '&nbsp;&nbsp;',
                {
                    block: 'check-button',
                    mods: {size: 'l', theme: 'clear', checked: 'yes', disabled: 'yes'},
                    content: 'Чекбокс без рамки размером L - скрыт'
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_60-clear.js'}
    ]
});

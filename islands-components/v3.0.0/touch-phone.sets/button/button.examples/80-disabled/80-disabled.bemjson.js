({
    block: 'b-page',
    title: 'Неактивные кнопки',
    head: [
        {elem: 'css', url: '_80-disabled.css', ie: false},
        {elem: 'css', url: '_80-disabled', ie: true}
    ],
    content: {
        attrs: {style: 'margin: 20px'},
        content: [
            {
                block: 'button',
                mods: {size: 'm', theme: 'normal', disabled: 'yes'},
                content: 'Я.Кнопка'
            },
            '&nbsp;&nbsp;',
            {
                block: 'button',
                mods: {size: 'm', theme: 'normal', disabled: 'yes'},
                url: '#',
                content: 'Я.Кнопка-ссылка'
            },
            '&nbsp;&nbsp;',
            {
                block: 'button',
                mods: {size: 'm', theme: 'pseudo', disabled: 'yes'},
                content: 'Я.Псевдокнопка'
            },
            '&nbsp;&nbsp;',
            {
                block: 'button',
                mods: {size: 'm', theme: 'pseudo', disabled: 'yes'},
                url: '#',
                content: 'Я.Псевдокнопка-ссылка'
            },
            '&nbsp;&nbsp;',
            {
                block: 'button',
                mods: {size: 'm', theme: 'action', disabled: 'yes'},
                content: 'Я.Action'
            },
            '&nbsp;&nbsp;',
            {
                block: 'button',
                mods: {size: 'm', theme: 'action', disabled: 'yes'},
                url: '#',
                content: 'Я.Action-ссылка'
            },
            '&nbsp;&nbsp;',
            {
                block: 'button',
                mods: {size: 'm', theme: 'clear', disabled: 'yes'},
                content: 'Я.Clear - скрыта'
            },
            '&nbsp;&nbsp;',
            {
                block: 'button',
                mods: {size: 'm', theme: 'clear', disabled: 'yes'},
                url: '#',
                content: 'Я.Clear-ссылка - скрыта'
            },
            '&nbsp;&nbsp;',
            {block: 'i-jquery', mods: {version: '1.8.3'}},
            {elem: 'js', url: '_80-disabled.js'}
        ]
    }
});

({
    block: 'b-page',
    title: 'Реализованные высоты',
    head: [
        {elem: 'css', url: '_40-height.css', ie: false},
        {elem: 'css', url: '_40-height', ie: true}
    ],
    content: {
        attrs: {style: 'margin: 20px'},
        content: [
            {
                tag: 'p',
                content: {
                    block: 'button',
                    mods: {size: 'xs'},
                    content: 'Я.Кнопка размером XS'
                }
            },
            {
                tag: 'p',
                content: {
                    block: 'button',
                    mods: {size: 's'},
                    content: 'Я.Кнопка размером S'
                }
            },
            {
                tag: 'p',
                content: {
                    block: 'button',
                    mods: {size: 'm'},
                    content: 'Я.Кнопка размером M'
                }
            },
            {
                tag: 'p',
                content: {
                    block: 'button',
                    mods: {size: 'l'},
                    content: 'Я.Кнопка размером L'
                }
            },
            {block: 'i-jquery', mods: {version: '1.8.3'}},
            {elem: 'js', url: '_40-height.js'}
        ]
    }
});

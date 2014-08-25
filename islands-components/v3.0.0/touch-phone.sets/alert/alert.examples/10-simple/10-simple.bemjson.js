({
    block: 'b-page',
    mix: [
        {
            block: 'alert-controller',
            js: {
                message: {
                    error: 'Упс, что-то пошло не так&hellip; <br/> Попробуйте поискать снова',
                    block: 'Все сломалось!',
                    info: 'Все суперпупер круто, <br/> продолжайте в том же духе'
                },
                buttonTxt: 'Обновить'
            }
        }
    ],
    title: 'заголовок',
    head: [
        {
            elem: 'css',
            url: '_10-simple.css'
        },
        {elem: 'css', url: '_10-simple.ie.css', ie: 'IE 9'}
    ],
    content: [
        {
            block: 'button',
            js: true,
            mods: {
                message: 'error'
            },
            mix: [{block: 'alert-message'}],
            content: 'Показать сообщение об ошибке'
        },
        {
            block: 'button',
            js: true,
            mods: {
                message: 'block'
            },
            mix: [{block: 'alert-message'}],
            content: 'Показать блокирующее сообщение'
        },
        {
            block: 'image',
            src: 'http://funkyimg.com/u2/263/297/longcat.jpg'
        },
        {
            block: 'button',
            js: true,
            mods: {
                message: 'info'
            },
            mix: [{block:'alert-message'}],
            content: 'Показать информационное сообщение'
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_10-simple.js'}
    ]
});

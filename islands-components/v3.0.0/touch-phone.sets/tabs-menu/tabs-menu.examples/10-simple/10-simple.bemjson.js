({
    block: 'b-page',
    title: 'Простое меню из табиков',
    head: [
        {elem: 'css', url: '_10-simple.css'},
        {elem: 'css', url: '_10-simple', ie: true}
    ],
    content: [
        {
            block: 'example',
            content: {
                block: 'tabs-menu',
                mods: {
                    size: 'm',
                    theme: 'normal',
                    layout: 'horiz'
                },
                content: [
                    {elem: 'tab', content: 'Горячие новости', url: 'http://news.yandex.ru', elemMods: {active: 'yes'}},
                    {elem: 'tab', content: 'Технологии', url: 'http://tech.yandex.ru'},
                    {elem: 'tab', content: 'Блог', url: 'http://blog.yandex.ru'}
                ]
            }
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_10-simple.js'}
    ]
});

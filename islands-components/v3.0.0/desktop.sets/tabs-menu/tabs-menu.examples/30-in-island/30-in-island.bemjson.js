({
    block: 'b-page',
    title: 'Применение в острове',
    head: [
        {elem: 'css', url: '_30-in-island.css'},
        {elem: 'css', url: '_30-in-island', ie: true}
    ],
    content: [
        {
            block: 'example',
            mix: [{block: 'island'}],
            content: {
                block: 'tabs-menu',
                mix: {block: 'example', 'elem': 'menu'},
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
        {elem: 'js', url: '_30-in-island.js'}
    ]
});

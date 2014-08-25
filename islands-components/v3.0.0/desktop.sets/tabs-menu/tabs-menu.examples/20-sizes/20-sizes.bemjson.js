({
    block: 'b-page',
    title: 'Размеры',
    head: [
        {elem: 'css', url: '_20-sizes.css'},
        {elem: 'css', url: '_20-sizes', ie: true}
    ],
    content: [
        {
            block: 'example',
            mods: {type: 'table'},
            headers: ['Модификатор', 'line-height', 'font-size', 'Пример'],
            content: [
                {
                    elem: 'row', content: ['_size_m', '36px', '15px', {
                        block: 'tabs-menu',
                        mods: {
                            size: 'm',
                            theme: 'normal',
                            layout: 'horiz'
                        },
                        content: [
                            {elem: 'tab', content: 'Горячие новости', url: 'http://news.yandex.ru',
                                elemMods: {active: 'yes'}},
                            {elem: 'tab', content: 'Технологии', url: 'http://tech.yandex.ru'},
                            {elem: 'tab', content: 'Блог', url: 'http://blog.yandex.ru'}
                        ]
                    }]
                },
                {
                    elem: 'row', content: ['_size_s', '30px', '13px', {
                        block: 'tabs-menu',
                        mods: {
                            size: 's',
                            theme: 'normal',
                            layout: 'horiz'
                        },
                        content: [
                            {elem: 'tab', content: 'Горячие новости', url: 'http://news.yandex.ru',
                                elemMods: {active: 'yes'}},
                            {elem: 'tab', content: 'Технологии', url: 'http://tech.yandex.ru'},
                            {elem: 'tab', content: 'Блог', url: 'http://blog.yandex.ru'}
                        ]
                    }]
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_20-sizes.js'}
    ]
});

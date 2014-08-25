({
    block: 'b-page',
    title: 'Ссылка со счётчиком',
    head: [
        {elem: 'css', url: '_30-link-counter-always.css', ie: false},
        {elem: 'css', url: '_30-link-counter-always', ie: true}
    ],
    content: [
        {
            attrs: {style: 'margin: 20px 0 20px 20px;'},
            content: {
                block: 'link',
                mods: {counter: 'yes'},
                url: 'http://ya.ru',
                counter: '123',
                content: 'Ссылка со счётчиком с вероятностью показа по умолчанию'
            }
        },
        {
            attrs: {style: 'margin: 20px 0 20px 20px;'},
            content: {
                block: 'link',
                mods: {counter: 'yes'},
                url: 'http://ya.ru',
                counter: '123',
                'show-counter': '100',
                content: 'Ссылка, у которой всегда есть счётчик'
            }
        },
        {
            attrs: {style: 'margin: 20px 0 20px 20px;'},
            content: {
                block: 'link',
                mods: {counter: 'yes'},
                url: 'http://ya.ru',
                counter: '123',
                'show-counter': '50',
                content: 'Ссылка, у которой есть счётчик в половине случаев'
            }
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_30-link-counter-always.js'}
    ]

});

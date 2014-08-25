({
    block: 'b-page',
    title: 'Саджест маркета',
    head: [
        {elem: 'css', url: '_80-suggest-market.css', ie: false},
        {elem: 'css', url: '_80-suggest-market', ie: true}
    ],
    content: [
        {block: 'i-request'}, // TODO: Оторвать
        {
            tag: 'form',
            attrs: {action: '.', style: 'width: 380px; padding: 20px'},
            content: {
                block: 'input',
                mods: {size: 'm', suggest: 'yes'},
                js: {
                    dataprovider: {
                        name: 'i-href-dataprovider',
                        url: '//suggest.market.yandex.ru/suggest-market?callback=?'
                    },
                    popupMods: {size: 'm'}
                },
                content: {elem: 'control', attrs: {name: 'autocomplete'}}
            }
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', 'url': '_80-suggest-market.js'}
    ]
});

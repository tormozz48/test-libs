({
    block: 'b-page',
    title: 'Саджест серпа',
    head: [
        {elem: 'css', url: '_85-suggest-serp.css', ie: false},
        {elem: 'css', url: '_85-suggest-serp', ie: true}
    ],
    content: [
        {block: 'i-request'}, // TODO: Оторвать
        {
            tag: 'form',
            attrs: {action: '.', style: 'width: 380px; padding: 20px;'},
            content: {
                block: 'input',
                mods: {suggest: 'yes', size: 'm'},
                js: {
                    dataprovider: {url: '//suggest.yandex.ru/suggest-ya.cgi?v=4&callback=?'},
                    popupMods: {size: 'm'}
                },
                content: {elem: 'control', attrs: {name: 'autocomplete'}}
            }
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', 'url': '_85-suggest-serp.js'}
    ]
});

({
    block: 'b-page',
    title: 'Саджест для залипающей поисковой строки',
    head: [
        {elem: 'css', url: '_94-suggest-sticky-line.css', ie: false},
        {elem: 'css', url: '_94-suggest-sticky-line', ie: true}
    ],
    content: [
        {block: 'i-request'}, // TODO: Оторвать
        {
            tag: 'h3',
            attrs: {style: 'font-weight: normal; color: #333;'},
            content: 'Саджест покажется только при изменении исходного запроса'
        },
        {
            tag: 'form',
            attrs: {action: '.', style: 'width: 380px; padding: 20px 0;'},
            content: {
                block: 'input',
                mods: {suggest: 'yes', size: 'm'},
                js: {
                    dataprovider: {url: '//suggest.yandex.ru/suggest-ya.cgi?v=4&callback=?'},
                    showListOnFocus: false,
                    popupMods: {size: 'm'}
                },
                content: {elem: 'control', attrs: {name: 'autocomplete'}},
                value: 'Samsung'
            }
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', 'url': '_94-suggest-sticky-line.js'}
    ]
});

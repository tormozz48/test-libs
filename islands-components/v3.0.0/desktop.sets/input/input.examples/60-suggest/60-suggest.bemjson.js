({
    block: 'b-page',
    title: 'Простой саджест',
    head: [
        {elem: 'css', url: '_60-suggest.css', ie: false},
        {elem: 'css', url: '_60-suggest', ie: true}
    ],
    content: [
        {block: 'i-request'}, // TODO: Оторвать
        {
            tag: 'form',
            attrs: {action: '.', style: 'padding: 20px 2%'},
            content: {
                block: 'input',
                mods: {suggest: 'yes', size: 's'},
                js: {dataprovider: {url: '//suggest.yandex.ru/suggest-ya.cgi?v=4&callback=?'}},
                content: {elem: 'control', attrs: {name: 'autocomplete'}}
            }
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', 'url': '_60-suggest.js'}
    ]
});

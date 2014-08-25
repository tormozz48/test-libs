({
    block: 'b-page',
    title: 'Дополенение саджеста, не по словам, а полностью',
    head: [
        {elem: 'css', url: '_110-nosplit-words.css', ie: false},
        {elem: 'css', url: '_110-nosplit-words', ie: true}
    ],
    content: [
        {block: 'i-request'}, // TODO: Оторвать
        {
            tag: 'form',
            attrs: {action: '.', style: 'padding: 20px 2%'},
            content: {
                block: 'input',
                mods: {
                    size: 's',
                    suggest: 'yes',
                    'tap-ahead': 'yes',
                    'nosplit-words': 'yes'
                },
                js: {dataprovider: {url: '//suggest.yandex.ru/suggest-ya.cgi?v=4&callback=?'}},
                content: {elem: 'control', attrs: {name: 'autocomplete'}}
            }
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', 'url': '_110-nosplit-words.js'}
    ]
});

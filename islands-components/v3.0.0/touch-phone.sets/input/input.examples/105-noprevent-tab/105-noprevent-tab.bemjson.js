({
    block: 'b-page',
    title: 'Дополенение саджеста, TAB обрабатывается, если есть, что дополнять',
    head: [
        {elem: 'css', url: '_105-noprevent-tab.css', ie: false},
        {elem: 'css', url: '_105-noprevent-tab', ie: true}
    ],
    content: [
        {block: 'i-request'}, // TODO: Оторвать
        {
            tag: 'form',
            attrs: {action: '.', style: 'padding: 20px 2%'},
            content: [
                {
                    block: 'input',
                    mods: {
                        size: 's',
                        suggest: 'yes',
                        'tap-ahead': 'yes',
                        'noprevent-tab': 'yes'
                    },
                    js: {dataprovider: {url: '//suggest.yandex.ru/suggest-ya.cgi?v=4&callback=?'}},
                    content: {elem: 'control', attrs: {name: 'autocomplete'}}
                },
                {
                    block: 'input',
                    mods: {
                        size: 's',
                        suggest: 'yes',
                        'tap-ahead': 'yes',
                        'noprevent-tab': 'yes'
                    },
                    attrs: {style: 'margin-top: 10px;'},
                    js: {dataprovider: {url: '//suggest.yandex.ru/suggest-ya.cgi?v=4&callback=?'}},
                    content: {elem: 'control', attrs: {name: 'autocomplete'}}
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', 'url': '_105-noprevent-tab.js'}
    ]
});

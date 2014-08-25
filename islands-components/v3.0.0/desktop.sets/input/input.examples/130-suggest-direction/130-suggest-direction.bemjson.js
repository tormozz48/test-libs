({
    block: 'b-page',
    title: 'Пример с различными вариантами направлений для саджеста',
    head: [
        {elem: 'css', url: '_130-suggest-direction.css', ie: false},
        {elem: 'css', url: '_130-suggest-direction', ie: true}
    ],
    content: [
        {block: 'i-request'}, // TODO: Оторвать
        {
            tag: 'form',
            attrs: {action: '.', style: 'max-width: 400px; margin: auto;'},
            content: [
                {
                    block: 'input',
                    mods: {suggest: 'yes', size: 's'},
                    js: {dataprovider: {url: '//suggest.yandex.ru/suggest-ya.cgi?v=4&callback=?'}},
                    content: [
                        {elem: 'hint', content: 'по умолчанию - bottom-left'},
                        {elem: 'control', attrs: {name: 'autocomplete0'}}
                    ]
                },
                '<br />',
                '<br />',
                '<br />',
                {
                    block: 'input',
                    mods: {suggest: 'yes', size: 's'},
                    js: {
                        dataprovider: {url: '//suggest.yandex.ru/suggest-ya.cgi?v=4&callback=?'},
                        popupParams: {directions: 'left-top'}
                    },
                    content: [
                        {elem: 'hint', content: 'left-top'},
                        {elem: 'control', attrs: {name: 'autocomplete1'}}
                    ]
                },
                '<br />',
                '<br />',
                '<br />',
                {
                    block: 'input',
                    mods: {suggest: 'yes', size: 's'},
                    js: {
                        dataprovider: {url: '//suggest.yandex.ru/suggest-ya.cgi?v=4&callback=?'},
                        popupParams: {directions: 'right-top'}
                    },
                    content: [
                        {elem: 'hint', content: 'right-top'},
                        {elem: 'control', attrs: {name: 'autocomplete2'}}
                    ]
                },
                '<br />',
                '<br />',
                '<br />',
                {
                    block: 'input',
                    mods: {suggest: 'yes', size: 's'},
                    js: {
                        dataprovider: {url: '//suggest.yandex.ru/suggest-ya.cgi?v=4&callback=?'},
                        popupParams: {directions: 'top-left'}
                    },
                    content: [
                        {elem: 'hint', content: 'top-left'},
                        {elem: 'control', attrs: {name: 'autocomplete3'}}
                    ]
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', 'url': '_130-suggest-direction.js'}
    ]
});

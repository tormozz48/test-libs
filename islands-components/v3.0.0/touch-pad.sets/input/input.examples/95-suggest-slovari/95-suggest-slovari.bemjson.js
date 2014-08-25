({
    block: 'b-page',
    title: 'Саджест с переводом слов',
    head: [
        {elem: 'css', url: '_95-suggest-slovari.css', ie: false},
        {elem: 'css', url: '_95-suggest-slovari', ie: true}
    ],
    content: [
        {block: 'i-request'}, // TODO: Оторвать
        {
            tag: 'form',
            attrs: {action: '.', style: 'width: 380px; padding: 20px'},
            content: {
                block: 'input',
                mods: {suggest: 'yes', size: 'm'},
                js: {
                    dataprovider: {
                        url: '//suggest-slovari.yandex.ru/suggest-lingvo?v=5&lang=en&callback=?'
                    },
                    popupMods: {size: 'm', fade: 'yes'}
                },
                content: {elem: 'control', attrs: {name: 'autocomplete'}}
            }
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', 'url': '_95-suggest-slovari.js'}
    ]
});

({
    block: 'b-page',
    title: 'Простой саджест с элементом foot',
    head: [
        {elem: 'css', url: '_65-suggest-foot.css', ie: false},
        {elem: 'css', url: '_65-suggest-foot', ie: true}
    ],
    content: [
        {block: 'i-request'}, // TODO: Оторвать
        {
            tag: 'form',
            attrs: {action: '.', style: 'margin: 0 2%'},
            content: {
                block: 'input',
                js: {
                    dataprovider: {url: '//suggest.yandex.ru/suggest-ya.cgi?v=4&callback=?'},
                    popupMods: {size: 'm'},
                    foot: [
                        'foot',
                        'слово какккк <a class="link" href="ya.ru">Мои находки</a>'
                    ]
                },
                mods: {suggest: 'yes', size: 'm'},
                content: [
                    {
                        elem: 'control',
                        attrs: {name: 'autocomplete'}
                    }
                ]
            }
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', 'url': '_65-suggest-foot.js'}
    ]
});

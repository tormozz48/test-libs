({
    block: 'b-page',
    title: 'Саджест с установкой ширины по ширине большого инпута',
    head: [
        {elem: 'css', url: '_70-big-suggest.css', ie: false},
        {elem: 'css', url: '_70-big-suggest', ie: true}
    ],
    content: [
        {block: 'i-request'}, // TODO: Оторвать
        {
            tag: 'form',
            attrs: {action: '.', style: 'width: 380px; margin: 0 2% 0; padding: 20px 0;'},
            content: {
                block: 'input',
                mods: {suggest: 'yes', size: 'm'},
                js: {
                    dataprovider: {url: '//suggest.yandex.ru/suggest-ya.cgi?v=4&callback=?'},
                    popupMods: {size: 'm'}
                },
                content: [
                    {elem: 'hint', content: 'Набери одноклассники'},
                    {elem: 'control', attrs: {name: 'autocomplete'}}
                ]
            }
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', 'url': '_70-big-suggest.js'}
    ]
});

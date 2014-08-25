({
    block: 'b-page',
    title: 'Саджест с установкой ширины по ширине инпута и фэйдингом',
    head: [
        {elem: 'css', url: '_75-suggest-fade.css', ie: false},
        {elem: 'css', url: '_75-suggest-fade', ie: true}
    ],
    content: [
        {block: 'i-request'}, // TODO: Оторвать
        {
            tag: 'form',
            attrs: {action: '.', style: 'width: 380px; margin: 0 2% 0; padding: 20px 0;'},
            content: {
                block: 'input',
                mods: {size: 'm', suggest: 'yes'},
                js: {
                    dataprovider: {url: '//suggest.yandex.ru/suggest-ya.cgi?v=4&callback=?'},
                    popupMods: {fade: 'yes', size: 'm'}
                },
                content: [
                    {elem: 'hint', content: 'Набери одноклассники'},
                    {elem: 'control', attrs: {name: 'autocomplete'}}
                ]
            }
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', 'url': '_75-suggest-fade.js'}
    ]
});

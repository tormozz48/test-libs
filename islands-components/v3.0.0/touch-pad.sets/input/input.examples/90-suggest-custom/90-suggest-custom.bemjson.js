({
    block: 'b-page',
    title: 'Саджест с кастомными элементами (на примере Метро)',
    head: [
        {elem: 'css', url: '_90-suggest-custom.css', ie: false},
        {elem: 'css', url: '_90-suggest-custom', ie: true}
    ],
    content: [
        {block: 'i-request'}, // TODO: Оторвать
        {
            tag: 'h3',
            attrs: {style: 'font-weight: normal; color: #333;'},
            content: 'Начните вводить одно из названий метро — ' +
                'Шаболовская, Парк Культуры, Библиотека им. Ленина, Алексеевская...'
        },
        {
            tag: 'form',
            attrs: {action: '.', style: 'width: 380px; padding: 20px 0;'},
            content: {
                block: 'input',
                mods: {suggest: 'yes', size: 'm'},
                js: {
                    dataprovider: {name: 'i-my-dataprovider'},
                    popupMods: {size: 'm'}
                },
                content: {elem: 'control', attrs: {name: 'autocomplete'}}
            }
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', 'url': '_90-suggest-custom.js'}
    ]
});

({
    block: 'b-page',
    title: 'Пример отложенной инициализации на своем уровне',
    head: [
        {elem: 'css', url: '_120-live-init.css', ie: false},
        {elem: 'css', url: '_120-live-init', ie: true}
    ],
    content: [
        {
            tag: 'h3',
            attrs: {style: 'margin: 20px 10px; 0'},
            content: 'Инпут с начальным знчением, инициализируется отложенно'
        },
        {
            attrs: {style: 'width: 400px; padding: 20px'},
            content: {
                block: 'input',
                js: {'custom-js-params': true},
                mods: {size: 'm'},
                value: 'Есть и подсказка',
                content: [
                    {elem: 'hint', content: 'Подсказка'},
                    {elem: 'control'}
                ]
            }
        },
        {
            tag: 'h3',
            attrs: {style: 'margin: 20px 10px; 0'},
            content: 'Инпут с js-параметром `autoFocus: true`, принудительно инициализируется сразу'
        },
        {
            attrs: {style: 'width: 400px; padding: 20px'},
            content: {
                block: 'input',
                mods: {size: 'm'},
                js: {autoFocus: true},
                content: [
                    {elem: 'control'}
                ]
            }
        },
        {
            tag: 'h3',
            attrs: {style: 'margin: 20px 10px; 0'},
            content: 'Инпут с модификатором `autocomplete_on`, принудительно инициализируется сразу'
        },
        {
            attrs: {style: 'width: 400px; padding: 20px'},
            content: {
                block: 'input',
                mods: {size: 'm', autocomplete: 'on'},
                content: [
                    {elem: 'control'}
                ]
            }
        },
        {
            tag: 'h3',
            attrs: {style: 'margin: 20px 10px; 0'},
            content: 'Инпут с меткой, инициализируется отложенно'
        },
        {
            attrs: {style: 'width: 400px; padding: 20px'},
            content: {
                block: 'input',
                mods: {size: 's'},
                content: [
                    {elem: 'label', content: 'Метка для инпута'},
                    {elem: 'control'}
                ]
            }
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', 'url': '_120-live-init.js'}
    ]
});

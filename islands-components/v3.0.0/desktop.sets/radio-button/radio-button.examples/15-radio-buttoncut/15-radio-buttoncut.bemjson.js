({
    block: 'b-page',
    title: 'Разделенные кнопки',
    head: [
        {elem: 'css', url: '_15-radio-buttoncut.css', ie: false},
        {elem: 'css', url: '_15-radio-buttoncut', ie: true},
        {elem: 'meta', attrs: {name: 'viewport', content: 'initial-scale=1'}}
    ],
    content: [
        {
            attrs: {style: 'margin: 20px'},
            content: [
                {
                    block: 'radio-button',
                    js: {id: 'show_to'},
                    mods: {size: 'm'},
                    name: 'show_to',
                    content: [
                        {
                            elem: 'radio',
                            controlAttrs: {value: 'val-0'},
                            content: 'виден всем'
                        }
                    ]
                },
                '&nbsp;&nbsp;',
                {
                    block: 'radio-button',
                    js: {id: 'show_to'},
                    mods: {size: 'm'},
                    name: 'show_to',
                    value: 'val-2',
                    content: [
                        {
                            elem: 'radio',
                            controlAttrs: {value: 'val-1'},
                            content: 'только друзьям'
                        },
                        {
                            elem: 'radio',
                            controlAttrs: {value: 'val-2'},
                            content: 'только мне'
                        },
                        {
                            elem: 'radio',
                            controlAttrs: {value: 'val-3'},
                            content: 'только не мне'
                        }
                    ]
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_15-radio-buttoncut.js'}
    ]
});

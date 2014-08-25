({
    block: 'b-page',
    title: 'Состояния элементов радио-группы',
    head: [
        {elem: 'css', url: '_40-radiobox-different.css', ie: false},
        {elem: 'css', url: '_40-radiobox-different', ie: true},
        {elem: 'meta', attrs: {name: 'viewport', content: 'initial-scale=1'}}
    ],
    content: [
        {
            attrs: {style: 'margin: 20px'},
            content: [
                {
                    block: 'radiobox',
                    mods: {size: 's'},
                    name: 'bla-7',
                    content: [
                        {
                            elem: 'radio',
                            elemMods: {checked: 'yes'},
                            content: 'только друзьям',
                            controlAttrs: {value: 'val-1'}
                        },
                        '&nbsp;&nbsp;&nbsp;&nbsp;',
                        {
                            elem: 'radio',
                            elemMods: {focused: 'yes'},
                            content: 'только мне',
                            controlAttrs: {value: 'val-2'}
                        },
                        '&nbsp;&nbsp;&nbsp;&nbsp;',
                        {
                            elem: 'radio',
                            elemMods: {disabled: 'yes'},
                            content: 'только не мне',
                            controlAttrs: {value: 'val-3'}
                        }
                    ]
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_40-radiobox-different.js'}
    ]
});

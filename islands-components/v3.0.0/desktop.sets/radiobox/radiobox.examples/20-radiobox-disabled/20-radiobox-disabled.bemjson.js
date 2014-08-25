({
    block: 'b-page',
    title: 'Неактивная радио-группа',
    head: [
        {elem: 'css', url: '_20-radiobox-disabled.css', ie: false},
        {elem: 'css', url: '_20-radiobox-disabled', ie: true},
        {elem: 'meta', attrs: {name: 'viewport', content: 'initial-scale=1'}}
    ],
    content: [
        {
            attrs: {style: 'margin: 20px'},
            content: [
                {
                    block: 'radiobox',
                    mods: {size: 's', disabled: 'yes'},
                    name: 'bla-3',
                    content: [
                        {
                            elem: 'radio',
                            content: 'только друзьям',
                            controlAttrs: {value: 'val-1'}
                        },
                        '&nbsp;&nbsp;&nbsp;&nbsp;',
                        {
                            elem: 'radio',
                            elemMods: {checked: 'yes'},
                            content: 'только мне',
                            controlAttrs: {value: 'val-2'}
                        },
                        '&nbsp;&nbsp;&nbsp;&nbsp;',
                        {
                            elem: 'radio',
                            content: 'только не мне',
                            controlAttrs: {value: 'val-3'}
                        }
                    ]
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_20-radiobox-disabled.js'}
    ]
});

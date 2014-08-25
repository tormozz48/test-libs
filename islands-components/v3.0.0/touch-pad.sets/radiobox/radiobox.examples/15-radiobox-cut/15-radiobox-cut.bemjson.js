({
    block: 'b-page',
    title: 'Разделенная радио-группа',
    head: [
        {elem: 'css', url: '_15-radiobox-cut.css', ie: false},
        {elem: 'css', url: '_15-radiobox-cut', ie: true},
        {elem: 'meta', attrs: {name: 'viewport', content: 'initial-scale=1'}}
    ],
    content: [
        {
            attrs: {style: 'margin: 20px'},
            content: [
                {
                    block: 'radiobox',
                    js: {id: 'radio-group'},
                    mods: {size: 's'},
                    name: 'bla-2',
                    value: 'val-2',
                    content: [
                        {
                            elem: 'radio',
                            content: 'только друзьям',
                            controlAttrs: {value: 'val-1'}
                        },
                        '&nbsp;&nbsp;&nbsp;&nbsp;',
                        {
                            elem: 'radio',
                            content: 'только мне',
                            controlAttrs: {value: 'val-2'}
                        },'&nbsp;&nbsp;&nbsp;&nbsp;',
                        {
                            elem: 'radio',
                            content: 'только не мне',
                            controlAttrs: {value: 'val-3'}
                        },
                        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                    ]
                },
                {
                    block: 'radiobox',
                    js: {id: 'radio-group'},
                    mods: {size: 's'},
                    name: 'bla-2',
                    content: [
                        {
                            elem: 'radio',
                            content: 'виден всем',
                            controlAttrs: {value: 'val-4'}
                        }
                    ]
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_15-radiobox-cut.js'}
    ]
});

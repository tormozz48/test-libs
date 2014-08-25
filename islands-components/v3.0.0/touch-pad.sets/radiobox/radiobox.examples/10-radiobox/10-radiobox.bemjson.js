({
    block: 'b-page',
    title: 'Радио-группа',
    head: [
        {elem: 'css', url: '_10-radiobox.css', ie: false},
        {elem: 'css', url: '_10-radiobox', ie: true},
        {elem: 'meta', attrs: {name: 'viewport', content: 'initial-scale=1'}}
    ],
    content: [
        {
            attrs: {style: 'margin: 20px'},
            content: {
                block: 'radiobox',
                mods: {size: 's'},
                name: 'bla',
                content: [
                    {
                        elem: 'radio',
                        content: 'Радио 1',
                        controlAttrs: {value: 'val-1'}
                    },
                    '&nbsp;&nbsp;&nbsp;&nbsp;',
                    {
                        elem: 'radio',
                        content: 'Радио 2',
                        controlAttrs: {value: 'val-2'}
                    },
                    '&nbsp;&nbsp;&nbsp;&nbsp;',
                    {
                        elem: 'radio',
                        content: 'Радио 3',
                        controlAttrs: {value: 'val-3'}
                    }
                ]
            }
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_10-radiobox.js'}
    ]
});

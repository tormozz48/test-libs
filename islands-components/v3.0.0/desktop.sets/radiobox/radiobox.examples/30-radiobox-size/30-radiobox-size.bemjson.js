({
    block: 'b-page',
    title: 'Размеры радио-группы',
    head: [
        {elem: 'css', url: '_30-radiobox-size.css', ie: false},
        {elem: 'css', url: '_30-radiobox-size', ie: true},
        {elem: 'meta', attrs: {name: 'viewport', content: 'initial-scale=1'}}
    ],
    content: [
        {
            attrs: {style: 'margin: 20px'},
            content: [
                {
                    attrs: {style: 'margin: 20px 0'},
                    content: {
                        block: 'radiobox',
                        mods: {size: 's'},
                        name: 'bla-5',
                        value: 'val-1',
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
                {
                    attrs: {style: 'margin: 20px 0'},
                    content: {
                        block: 'radiobox',
                        mods: {size: 'm'},
                        name: 'bla-6',
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
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_30-radiobox-size.js'}
    ]
});

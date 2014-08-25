({
    block: 'b-page',
    title: 'Радио-группа внутри таблицы с вертикальным выравниванием',
    head: [
        {elem: 'css', url: '_60-radiobox-table.css', ie: false},
        {elem: 'css', url: '_60-radiobox-table', ie: true},
        {elem: 'meta', attrs: {name: 'viewport', content: 'initial-scale=1'}}
    ],
    content: [
        {
            attrs: {style: 'margin: 20px'},
            content: [
                {
                    block: 'mytable',
                    tag: 'table',
                    content: {
                        tag: 'tr',
                        content: [
                            {
                                elem: 'td',
                                tag: 'td',
                                content: [
                                    {
                                        block: 'radiobox',
                                        js: {id: 'radio-group-2'},
                                        mods: {size: 's'},
                                        name: 'bla-9',
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
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                elem: 'td',
                                tag: 'td',
                                elemMods: {valign: 'middle'},
                                content: [
                                    [
                                        'Люблю грозу в начале мая, когда весенний, первый гром как бы резвяся и ',
                                        'играя, грохочет в небе голубом.&nbsp;&nbsp;&nbsp;&nbsp;'
                                    ].join(''),
                                    {
                                        block: 'radiobox',
                                        js: {id: 'radio-group-2'},
                                        mods: {size: 's'},
                                        name: 'bla-9',
                                        content: [
                                            {
                                                elem: 'radio',
                                                content: 'только не мне',
                                                controlAttrs: {value: 'val-3'}
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                elem: 'td',
                                tag: 'td',
                                elemMods: {valign: 'bottom'},
                                content: [
                                    {
                                        block: 'radiobox',
                                        js: {id: 'radio-group-2'},
                                        mods: {size: 's'},
                                        name: 'bla-9',
                                        value: 'val-4',
                                        content: [
                                            {
                                                elem: 'radio',
                                                content: 'видно всем',
                                                controlAttrs: {value: 'val-4'}
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_60-radiobox-table.js'}
    ]
});

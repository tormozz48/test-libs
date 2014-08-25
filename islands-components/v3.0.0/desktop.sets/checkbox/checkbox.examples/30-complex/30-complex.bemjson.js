({
    block: 'b-page',
    title: 'В тексте',
    head: [
        {elem: 'css', url: '_30-complex.css', ie: false},
        {elem: 'css', url: '_30-complex', ie: true}
    ],
    content: [
        {
            block: 'b-my-table',
            tag: 'table',
            content: [
                {
                    tag: 'tr',
                    attrs: {style: 'background: #F4C724;'},
                    content: [
                        {
                            tag: 'td',
                            attrs: {colspan: 3},
                            content: {
                                block: 'b-static-text',
                                content: {
                                    tag: 'p',
                                    content: [
                                        'Для того, чтобы Яндекс выглядел аккуратнее и развивался в одном стиле, ' +
                                            'были разработаны декоративные (нестандартные для операционной системы) ' +
                                            'элементы. Одним из таких элементов является ',
                                        {block: 'checkbox', mods: {size: 's'}},
                                        ' чекбокс. '
                                    ]
                                }
                            }
                        }
                    ]
                },
                {
                    tag: 'tr',
                    attrs: {style: 'background: #1b4f88; color: #fff;'},
                    content: [
                        {
                            tag: 'td',
                            attrs: {style: 'text-align: left; vertical-align: top;'},
                            content: [
                                'Влево&nbsp;&nbsp;',
                                {block: 'checkbox', mods: {size: 's'}}
                            ]
                        },
                        {
                            tag: 'td',
                            attrs: {style: 'text-align: center; vertical-align: middle;'},
                            content: [
                                'по&nbsp;&nbsp;',
                                {block: 'checkbox', mods: {size: 's'}},
                                '&nbsp;&nbsp;центру'
                            ]
                        },
                        {
                            tag: 'td',
                            attrs: {style: 'text-align: right; vertical-align: bottom;'},
                            content: [
                                {block: 'checkbox', mods: {size: 's'}},
                                '&nbsp;&nbsp;и внизу'
                            ]
                        }
                    ]
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_30-complex.js'}
    ]
});

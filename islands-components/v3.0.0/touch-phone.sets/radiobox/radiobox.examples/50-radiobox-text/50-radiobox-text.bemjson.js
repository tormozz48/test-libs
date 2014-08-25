({
    block: 'b-page',
    title: 'Радио-группа внутри текста',
    head: [
        {elem: 'css', url: '_50-radiobox-text.css', ie: false},
        {elem: 'css', url: '_50-radiobox-text', ie: true},
        {elem: 'meta', attrs: {name: 'viewport', content: 'initial-scale=1'}}
    ],
    content: [
        {
            attrs: {style: 'margin: 20px'},
            content: [
                {
                    tag: 'p',
                    content: [
                        [
                            'Люблю грозу в начале мая, когда весенний, первый гром как бы резвяся и играя, ',
                            'грохочет в небе голубом.&nbsp;&nbsp;&nbsp;&nbsp;'
                        ].join(''),
                        {
                            block: 'radiobox',
                            mods: {size: 's'},
                            name: 'bla-8',
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
                                },
                                '&nbsp;&nbsp;&nbsp;&nbsp;',
                                {
                                    elem: 'radio',
                                    content: 'только не мне',
                                    controlAttrs: {value: 'val-3'}
                                }
                            ]
                        },
                        [
                            '&nbsp;&nbsp;&nbsp;&nbsp;Гремят раскаты молодые, вот дождик брызнул, ',
                            'пыль летит, повисли перлы дождевые и солнце нити золотит. ',
                            'С горы бежит поток проворный, в лесу не молкнет птичий гам. ',
                            'И гам лесной, и шум нагорный - все вторит весело громам.'
                        ].join('')

                    ]
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_50-radiobox-text.js'}
    ]
});

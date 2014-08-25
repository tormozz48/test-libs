({
    block: 'b-page',
    title: 'Тумблер в тексте',
    head: [
        {elem: 'css', url: '_10-text.css', ie: false},
        {elem: 'css', url: '_10-text', ie: true}
    ],
    content: [
        {
            attrs: {style: 'margin: 20px; font-size: 13px; line-height: 28px;'},
            content: [
                'Маленький переключатель можно ',
                {
                    block: 'tumbler',
                    mods: {size: 's'},
                    content: [
                        {
                            elem: 'option',
                            side: 'left',
                            content: 'выключить'
                        },
                        {
                            elem: 'option',
                            side: 'right',
                            content: 'и включить'
                        }
                    ]
                },
                ' в тексте мелкого размера.'
            ]
        },
        {
            attrs: {style: 'margin: 20px; font-size: 15px; line-height: 32px;'},
            content: [
                'Большой переключатель тоже можно ',
                {
                    block: 'tumbler',
                    mods: {
                        size: 'm',
                        checked: 'yes'
                    },
                    content: [
                        {
                            elem: 'option',
                            side: 'left',
                            content: 'выключить'
                        },
                        {
                            elem: 'option',
                            side: 'right',
                            content: 'и включить'
                        }
                    ]
                },
                ' в тексте, но крупного размера.'
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', 'url': '_10-text.js'}
    ]
});

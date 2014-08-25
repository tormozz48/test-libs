({
    block: 'b-page',
    title: 'С иконками',
    head: [
        {elem: 'css', url: '_40-icon.css', ie: false},
        {elem: 'css', url: '_40-icon', ie: true}
    ],
    content: [
        {
            attrs: {style: 'margin: 20px'},
            content: [
                {
                    block: 'check-button',
                    value: 'icon',
                    mods: {size: 'm', 'only-icon': 'yes'},
                    content: {
                        block: 'image',
                        mix: [
                            {block: 'check-button', elem: 'icon', mods: {'16': 'bus'}}
                        ],
                        alt: 'Bus'
                    }
                },
                '&nbsp;&nbsp;',
                {
                    block: 'check-button',
                    value: 'serp-icon',
                    mods: {size: 'm', checked: 'yes'},
                    content: [
                        {
                            block: 'image',
                            mix: [
                                {block: 'check-button', elem: 'icon', mods: {'16': 'metro'}}
                            ],
                            alt: 'Metro'
                        },
                        'Чекбокс с иконкой'
                    ]
                },
                '<br><br>',
                {
                    block: 'check-button',
                    value: 'icon',
                    mods: {size: 'm', checked: 'yes', 'only-icon': 'yes', theme: 'clear'},
                    content: {
                        block: 'image',
                        mix: [
                            {block: 'check-button', elem: 'icon', mods: {'16': 'bus'}}
                        ],
                        alt: 'Bus'
                    }
                },
                '&nbsp;&nbsp;',
                {
                    block: 'check-button',
                    value: 'serp-icon',
                    mods: {size: 'm', theme: 'clear'},
                    content: [
                        {
                            block: 'image',
                            mix: [
                                {block: 'check-button', elem: 'icon', mods: {'16': 'metro'}}
                            ],
                            alt: 'Metro'
                        },
                        'Чекбокс с иконкой'
                    ]
                },
                ' — чекбоксы без рамки'
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_40-icon.js'}
    ]
});

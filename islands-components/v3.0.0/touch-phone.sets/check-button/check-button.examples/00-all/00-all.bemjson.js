({
    block: 'b-page',
    head: [
        {elem: 'css', url: '_00-all.css', ie: false},
        {elem: 'css', url: '_00-all', ie: true}
    ],
    content: [
        {
            block:'simple-example',
            content: [
                {
                    elem:'example-text',
                    content:'Простой check-button'
                },
                'Найти ',
                {
                    block: 'check-button',
                    name: 'test',
                    value: '1',
                    mods: {size: 's'},
                    content: '1'
                }, '&nbsp;&nbsp;&nbsp;',
                {
                    block: 'check-button',
                    name: 'test',
                    mods: {size: 's'},
                    content: '2'
                }, '&nbsp;&nbsp;&nbsp;',
                {
                    block: 'check-button',
                    name: 'test',
                    value: '3',
                    mods: {size: 's'},
                    content: '3'
                }, '&nbsp;&nbsp;&nbsp;',
                {
                    block: 'check-button',
                    name: 'test',
                    value: '4plus',
                    mods: {size: 's', checked: 'yes'},
                    content: '4+'
                }, '&nbsp;&nbsp;&nbsp;',
                'комнатную квартиру'
            ]
        },
        {
            block:'simple-example',
            content: [
                {
                    elem:'example-text',
                    content:'Размеры S, M и L'
                },
                {
                    block: 'check-button',
                    value: 's',
                    mods: {size: 's'},
                    content: 'Размер S'
                },
                '&nbsp;&nbsp;',
                {
                    block: 'check-button',
                    value: 'm',
                    mods: {size: 'm'},
                    content: 'Размер M'
                },
                '&nbsp;&nbsp;',
                {
                    block: 'check-button',
                    value: 'l',
                    mods: {size: 'l'},
                    content: 'Размер L'
                }

            ]
        },
        {
            block:'simple-example',
            content: [
                {
                    elem:'example-text',
                    content:'Неактивные'
                },
                {
                    block: 'check-button',
                    value: 's',
                    mods: {size: 's', disabled: 'yes'},
                    content: 'Неактивный'
                },
                '&nbsp;&nbsp;',
                {
                    block: 'check-button',
                    value: 'm',
                    mods: {size: 'm', checked: 'yes', disabled: 'yes'},
                    content: 'Неактивный и выбранный'
                }
            ]
        },
        {
            block:'simple-example',
            mods: {icon: 'yes'},
            content: [
                {
                    elem:'example-text',
                    content:'С иконками'
                },
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
                }
            ]
        },
        {
            block:'simple-example',
            content: [
                {
                    elem:'example-text',
                    content:'Псевдо чекбоксы кнопками'
                },
                {
                    attrs: {style: 'margin: 20px'},
                    content: [
                        {
                            block: 'check-button',
                            mods: {size: 's', pseudo: 'yes', disabled: 'yes'},
                            content: 'Псевдо-чекбокс размером S'
                        },
                        '&nbsp;&nbsp;',
                        {
                            block: 'button',
                            mods: {size: 's', pseudo: 'yes'},
                            content: 'Псевдо-кнопка размером S'
                        },
                        '&nbsp;&nbsp;',
                        {
                            block: 'check-button',
                            mods: {size: 's', pseudo: 'yes', checked: 'yes'},
                            content: 'Псевдо-чекбокс размером S'
                        },
                        '&nbsp;&nbsp;',
                        ' — псевдо чекбокс выглядит как кнопка и может залипать, а псевдо кнопка не залипает'
                    ]
                },
                {
                    attrs: {style: 'margin: 20px'},
                    content: [
                        {
                            block: 'check-button',
                            mods: {size: 'm', pseudo: 'yes', checked: 'yes', disabled: 'yes'},
                            content: 'Псевдо-чекбокс размером M'
                        },
                        '&nbsp;&nbsp;',
                        {
                            block: 'button',
                            mods: {size: 'm', pseudo: 'yes'},
                            content: 'Псевдо-кнопка размером M'
                        },
                        '&nbsp;&nbsp;',
                        {
                            block: 'check-button',
                            mods: {size: 'm', pseudo: 'yes'},
                            content: 'Псевдо-чекбокс размером M'
                        },
                        '&nbsp;&nbsp;',
                        ' — у псевдо чекбоска пустой value'
                    ]
                },
                {
                    attrs: {style: 'margin: 20px'},
                    content: [
                        {
                            block: 'check-button',
                            mods: {size: 'l', pseudo: 'yes', checked: 'yes', disabled: 'yes'},
                            content: 'Псевдо-чекбокс размером L'
                        },
                        '&nbsp;&nbsp;',
                        {
                            block: 'button',
                            mods: {size: 'l', pseudo: 'yes'},
                            content: 'Псевдо-кнопка размером L'
                        },
                        '&nbsp;&nbsp;',
                        {
                            block: 'check-button',
                            mods: {size: 'l', pseudo: 'yes'},
                            content: 'Псевдо-чекбокс размером L'
                        }
                    ]
                }
            ]
        },
        {
            block:'simple-example',
            content: [
                {
                    elem:'example-text',
                    content:'Чекбоксы без рамки кнопками'
                },
                {
                    attrs: {style: 'margin: 20px'},
                    content: [
                        {
                            block: 'button',
                            mods: {size: 's', theme: 'clear'},
                            content: 'Кнопка без рамки размером S'
                        },
                        '&nbsp;&nbsp;',
                        {
                            block: 'check-button',
                            mods: {size: 's', theme: 'clear', checked: 'yes'},
                            content: 'Чекбокс без рамки размером S'
                        }
                    ]
                },
                {
                    attrs: {style: 'margin: 20px'},
                    content: [
                        {
                            block: 'button',
                            mods: {size: 'm', theme: 'clear'},
                            content: 'Кнопка без рамки размером M'
                        },
                        '&nbsp;&nbsp;',
                        {
                            block: 'check-button',
                            mods: {size: 'm', theme: 'clear'},
                            content: 'Чекбокс без рамки размером M'
                        }
                    ]
                },
                {
                    attrs: {style: 'margin: 20px'},
                    content: [
                        {
                            block: 'button',
                            mods: {size: 'l', theme: 'clear'},
                            content: 'Кнопка без рамки размером L'
                        },
                        '&nbsp;&nbsp;',
                        {
                            block: 'check-button',
                            mods: {size: 'l', theme: 'clear'},
                            content: 'Чекбокс без рамки размером L'
                        }
                    ]
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_00-all.js'}
    ]
});

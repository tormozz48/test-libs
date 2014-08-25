({
    block: 'b-page',
    title: 'C шириной auto',
    head: [
        {elem: 'css', url: '_10-auto.css', ie: false},
        {elem: 'css', url: '_10-auto', ie: true}
    ],
    content: [
        {
            block: 'example',
            attrs: {style: 'padding: 20px;'},
            js: true,
            content: {
                tag:'form',
                action: 'someAction',
                content: {
                    tag: 'table',
                    cls: 'b-form__table',
                    content: [
                        {
                            tag: 'tr',
                            content: [
                                {
                                    tag: 'td',
                                    content: 'select_size_s'
                                },
                                {
                                    tag: 'td',
                                    content: 'select_size_m'
                                }
                            ]
                        },
                        {
                            tag: 'tr',
                            content: [
                                {
                                    tag: 'td',
                                    content: {
                                        block: 'select',
                                        name: 'mail',
                                        mods: {size: 's', theme: 'normal'},
                                        content: [
                                            {
                                                block: 'button',
                                                content: 'Нож охотничий'
                                            },
                                            {
                                                elem: 'control',
                                                content: [
                                                    {
                                                        elem: 'option-group',
                                                        attrs: {label: 'Наиболее вероятное'},
                                                        content: [
                                                            {
                                                                elem: 'option',
                                                                attrs: {value: 'nozh'},
                                                                content: 'Нож охотничий'
                                                            },
                                                            {
                                                                elem: 'option',
                                                                attrs: {value: 'topor'},
                                                                content: 'Топор'
                                                            },
                                                            {
                                                                elem: 'option',
                                                                attrs: {value: 'metal'},
                                                                content: 'Металическая линейка'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        elem: 'option',
                                                        attrs: {value: 'nozh'},
                                                        content: 'Нож охотничий'
                                                    },
                                                    {
                                                        elem: 'option',
                                                        attrs: {value: 'nozh'},
                                                        content: 'Нож охотничий'
                                                    },
                                                    {
                                                        elem: 'option',
                                                        attrs: {value: 'nozh'},
                                                        content: 'Нож охотничий'
                                                    },
                                                    {
                                                        elem: 'option-group',
                                                        attrs: {label: 'Наиболее вероятное'},
                                                        content: [
                                                            {
                                                                elem: 'option',
                                                                attrs: {value: 'nozh'},
                                                                content: 'Нож охотничий'
                                                            },
                                                            {
                                                                elem: 'option',
                                                                attrs: {value: 'topor'},
                                                                content: 'Топор'
                                                            },
                                                            {
                                                                elem: 'option',
                                                                attrs: {value: 'metal'},
                                                                content: 'Металическая линейка'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        elem: 'option-group',
                                                        attrs: {label: 'Наименее'},
                                                        content: [
                                                            {
                                                                elem: 'option',
                                                                attrs: {value: 'vilka'},
                                                                content: 'Вилка'
                                                            },
                                                            {
                                                                elem: 'option',
                                                                attrs: {value: 'zub'},
                                                                content: 'Зубная щетка'
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                },
                                {
                                    tag: 'td',
                                    content: {
                                        block: 'select',
                                        name: 'mail',
                                        mods: {size: 'm', theme: 'normal'},
                                        content: [
                                            {
                                                block: 'button',
                                                content: 'Нож охотничий'
                                            },
                                            {
                                                elem: 'control',
                                                content: [
                                                    {
                                                        elem: 'option',
                                                        attrs: {value: 'nozh'},
                                                        content: 'Нож охотничий'
                                                    },
                                                    {
                                                        elem: 'option-group',
                                                        attrs: {label: 'Наиболее вероятное'},
                                                        content: [
                                                            {
                                                                elem: 'option',
                                                                attrs: {value: 'nozh'},
                                                                content: 'Нож охотничий'
                                                            },
                                                            {
                                                                elem: 'option',
                                                                attrs: {value: 'topor'},
                                                                content: 'Топор'
                                                            },
                                                            {
                                                                elem: 'option',
                                                                attrs: {value: 'metal'},
                                                                content: 'Металическая линейка'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        elem: 'option',
                                                        attrs: {value: 'nozh'},
                                                        content: 'Нож охотничий'
                                                    },
                                                    {
                                                        elem: 'option',
                                                        attrs: {value: 'nozh'},
                                                        content: 'Нож охотничий'
                                                    },
                                                    {
                                                        elem: 'option',
                                                        attrs: {value: 'nozh'},
                                                        content: 'Нож охотничий'
                                                    },
                                                    {
                                                        elem: 'option-group',
                                                        attrs: {label: 'Наименее'},
                                                        content: [
                                                            {
                                                                elem: 'option',
                                                                attrs: {value: 'vilka'},
                                                                content: 'Вилка'
                                                            },
                                                            {
                                                                elem: 'option',
                                                                attrs: {value: 'zub'},
                                                                content: 'Зубная щетка'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        elem: 'option',
                                                        attrs: {value: 'nozh'},
                                                        content: 'Нож охотничий'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    ]
                }
            }
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_10-auto.js'}
    ]
});

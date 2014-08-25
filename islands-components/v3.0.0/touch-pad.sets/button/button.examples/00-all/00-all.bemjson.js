({
    block: 'b-page',
    title: 'Кнопки',
    head: [
        {elem: 'css', url: '_00-all.css', ie: false},
        {elem: 'css', url: '_00-all', ie: true}
    ],
    content: [
        {
            block: 'simple-example',
            content: [
                {
                    elem: 'example-text',
                    content: 'Простая кнопка'
                },
                {
                    tag: 'form',
                    attrs: {action: 'bbb'},
                    content: [
                        {
                            block: 'button',
                            mods: {size: 'm'},
                            content: 'Я.Button'
                        }
                    ]
                }
            ]
        },
        {
            block: 'simple-example',
            content: [
                {
                    elem: 'example-text',
                    content: 'Кнопка без фокуса'
                },
                {
                    tag: 'form',
                    attrs: {action: 'bbb'},
                    content: [
                        {
                            block: 'button',
                            mods: {size: 'm', focus: 'no'},
                            content: 'Я.Button'
                        }
                    ]
                }
            ]
        },
        {
            block: 'simple-example',
            content: [
                {
                    elem: 'example-text',
                    content: 'Кнопка-ссылка'
                },
                {
                    block: 'button',
                    mods: {size: 'm'},
                    url: '#',
                    content: 'Я.Ссылка'
                },
                '<br><br>',
                {
                    block: 'button',
                    mods: {size: 'm', theme: 'pseudo'},
                    url: '#',
                    content: 'Я.Ссылка (pseudo)'
                },
                '<br><br>',
                {
                    block: 'button',
                    mods: {size: 'm', theme: 'action'},
                    url: '#',
                    content: 'Я.Ссылка (action)'
                },
                '<br><br>',
                {
                    block: 'button',
                    mods: {size: 'm', theme: 'clear'},
                    url: '#',
                    content: 'Я.Ссылка (clear)'
                }
            ]
        },
        {
            block: 'simple-example',
            content: [
                {
                    elem: 'example-text',
                    content: 'Размеры кнопки'
                },
                {
                    attrs: {style: 'margin: 10px 0;'},
                    content: {
                        block: 'button',
                        mods: {size: 'xs'},
                        content: 'Я.Кнопка размером XS'
                    }
                },
                {
                    attrs: {style: 'margin: 10px 0;'},
                    content: {
                        block: 'button',
                        mods: {size: 's'},
                        content: 'Я.Кнопка размером S'
                    }
                },
                {
                    attrs: {style: 'margin: 10px 0;'},
                    content: {
                        block: 'button',
                        mods: {size: 'm'},
                        content: 'Я.Кнопка размером M'
                    }
                },
                {
                    attrs: {style: 'margin: 10px 0;'},
                    content: {
                        block: 'button',
                        mods: {size: 'l'},
                        content: 'Я.Кнопка размером L'
                    }
                }
            ]
        },
        {
            block: 'simple-example',
            content: [
                {
                    elem: 'example-text',
                    content: 'Неактивная'
                },
                {
                    block: 'button',
                    mods: {size: 'm', theme: 'normal', disabled: 'yes'},
                    content: 'Я.Кнопка'
                },
                '&nbsp;&nbsp;',
                {
                    block: 'button',
                    mods: {size: 'm', theme: 'normal', disabled: 'yes'},
                    url: '#',
                    content: 'Я.Кнопка-ссылка'
                },
                '&nbsp;&nbsp;',
                {
                    block: 'button',
                    mods: {size: 'm', theme: 'pseudo', disabled: 'yes'},
                    content: 'Я.Псевдокнопка'
                },
                '&nbsp;&nbsp;',
                {
                    block: 'button',
                    mods: {size: 'm', theme: 'pseudo', disabled: 'yes'},
                    url: '#',
                    content: 'Я.Псевдокнопка-ссылка'
                },
                '&nbsp;&nbsp;',
                {
                    block: 'button',
                    mods: {size: 'm', theme: 'action', disabled: 'yes'},
                    content: 'Я.Action'
                },
                '&nbsp;&nbsp;',
                {
                    block: 'button',
                    mods: {size: 'm', theme: 'action', disabled: 'yes'},
                    url: '#',
                    content: 'Я.Action-ссылка'
                }
            ]
        },
        {
            block: 'simple-example',
            content: [
                {
                    elem: 'example-text',
                    content: 'С иконками'
                },
                {
                    attrs: {style: 'font-size: 15px;margin: 10px 0;'},
                    content: [
                        'Только с иконками —&nbsp;',
                        {
                            block: 'button',
                            mods: {size: 's', 'only-icon': 'yes'},
                            content: [
                                {
                                    block: 'image',
                                    mix: [{block: 'button', elem: 'icon', mods: {'16': 'comment'}}],
                                    alt: ''
                                }
                            ]
                        },
                        '&nbsp;&nbsp;',
                        {
                            block: 'button',
                            mods: {size: 'm', 'only-icon': 'yes'},
                            url: '#',
                            content: [
                                {
                                    block: 'image',
                                    mix: [{block: 'button', elem: 'icon', mods: {'16': 'comment'}}],
                                    alt: ''
                                }
                            ]
                        }
                    ]
                },
                {
                    attrs: {style: 'font-size: 15px;margin: 10px 0;'},
                    content: [
                        'С иконкой и текстом —&nbsp;',
                        {
                            block: 'button',
                            mods: {size: 'm'},
                            content: [
                                {
                                    block: 'image',
                                    mix: [{block: 'button', elem: 'icon', mods: {'16': 'settings'}}],
                                    alt: '/'
                                },
                                'Я.Кнопка'
                            ]
                        },
                        '&nbsp;&nbsp;',
                        {
                            block: 'button',
                            mods: {size: 'm'},
                            url: '#',
                            content: [
                                {
                                    block: 'image',
                                    mix: [{block: 'button', elem: 'icon', mods: {'16': 'settings'}}],
                                    alt: '/'
                                },
                                'Я.Cсылка'
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block: 'simple-example',
            content: [
                {
                    elem: 'example-text',
                    content: 'Псевдо-кнопки'
                },
                {
                    block: 'button',
                    url: '#',
                    mods: {size: 's', pseudo: 'yes'},
                    content: 'Псевдо-кнопка ссылкой S'
                },
                '<br><br>',
                {
                    block: 'button',
                    url: '#',
                    mods: {size: 'm', pseudo: 'yes'},
                    content: 'Псевдо-кнопка ссылкой M'
                },
                '<br><br>',
                {
                    block: 'button',
                    mods: {size: 's', pseudo: 'yes'},
                    content: 'Псевдо-кнопка S'
                },
                '<br><br>',
                {
                    block: 'button',
                    mods: {size: 'm', pseudo: 'yes'},
                    content: 'Псевдо-кнопка M'
                },
                '<br><br>',
                {
                    elem: 'color-block',
                    mods: {color: 'yellow'},
                    content: {
                        block: 'button',
                        mods: {size: 'm', pseudo: 'yes'},
                        content: 'Псевдо-кнопка'
                    }
                },
                {
                    elem: 'color-block',
                    mods: {color: 'green'},
                    content: {
                        block: 'button',
                        mods: {size: 'm', pseudo: 'yes'},
                        content: 'Псевдо-кнопка'
                    }
                },
                {
                    elem: 'color-block',
                    mods: {color: 'blue'},
                    content: {
                        block: 'button',
                        mods: {size: 'm', pseudo: 'yes'},
                        content: 'Псевдо-кнопка'
                    }
                },
                '<br><br>',
                {
                    attrs: {style: 'position: relative; background: #f5f5ea; padding: 20px;'},
                    content: [
                        'Кнопка в позиционированном блоке, ' +
                            '<a href="https: //st.yandex-team.ru/ISLCOMPONENTS-516">' +
                            'ISLCOMPONENTS-516</a>',
                        '&nbsp;&nbsp;&nbsp;<br><br>',
                        {
                            block: 'button',
                            mods: {size: 'm', pseudo: 'yes'},
                            content: 'Псевдо-кнопка'
                        }
                    ]
                }
            ]
        },
        {
            block: 'simple-example',
            content: [
                {
                    elem: 'example-text',
                    content: 'Кнопки без рамки'
                },
                {
                    block: 'button',
                    url: '#',
                    mods: {size: 's', theme: 'clear'},
                    content: 'Кнопка без рамки ссылкой S'
                },
                '<br><br>',
                {
                    block: 'button',
                    url: '#',
                    mods: {size: 'm', theme: 'clear'},
                    content: 'Кнопка без рамки ссылкой M'
                },
                '<br><br>',
                {
                    block: 'button',
                    mods: {size: 's', theme: 'clear'},
                    content: 'Кнопка без рамки S'
                },
                '<br><br>',
                {
                    block: 'button',
                    mods: {size: 'm', theme: 'clear'},
                    content: 'Кнопка без рамки M'
                },
                '<br><br>',
                {
                    elem: 'color-block',
                    mods: {color: 'yellow'},
                    content: {
                        block: 'button',
                        mods: {size: 'm', theme: 'clear'},
                        content: 'Кнопка без рамки'
                    }
                },
                {
                    elem: 'color-block',
                    mods: {color: 'green'},
                    content: {
                        block: 'button',
                        mods: {size: 'm', theme: 'clear'},
                        content: 'Кнопка без рамки'
                    }
                },
                {
                    elem: 'color-block',
                    mods: {color: 'blue'},
                    content: {
                        block: 'button',
                        mods: {size: 'm', theme: 'clear'},
                        content: 'Кнопка без рамки'
                    }
                },
                '<br><br>',
                {
                    attrs: {style: 'position: relative; background: #f5f5ea; padding: 20px;'},
                    content: [
                        'Кнопка в позиционированном блоке',
                        '<br><br>',
                        {
                            block: 'button',
                            mods: {size: 'm', theme: 'clear'},
                            content: 'Кнопка без рамки'
                        }
                    ]
                }
            ]
        },
        {
            block: 'simple-example',
            mods: {example: 'complex'},
            content: [
                {
                    elem: 'example-text',
                    content: 'Кнопки в тексте'
                },
                {
                    block: 'b-form',
                    cls: 'my-form',
                    url: '#',
                    content: {
                        tag: 'table',
                        attrs: {cellpadding: 0, cellspacing: 0},
                        content: [
                            {
                                tag: 'tr',
                                attrs: {style: 'background: #ee82ee;'},
                                content: [
                                    {
                                        tag: 'td',
                                        attrs: {colspan: 3},
                                        content: {
                                            block: 'simple-example',
                                            content: [
                                                'Для того, чтобы Яндекс выглядел аккуратнее ' +
                                                    'и развивался в одном стиле, были разработаны декоративные ' +
                                                    '(нестандартные для операционной системы) элементы. ' +
                                                    'Одним из таких элементов является ',
                                                {
                                                    block: 'button',
                                                    mods: {size: 's'},
                                                    url: '#',
                                                    content: 'кнопка'
                                                },
                                                '. Данная кнопка предназначена только для работы ' +
                                                    'с интерфейсами, она не подходит для промо-задач.'
                                            ]
                                        }
                                    }
                                ]
                            },
                            {
                                tag: 'tr',
                                attrs: {style: 'background: #6495ed;'},
                                content: [
                                    {
                                        tag: 'td',
                                        attrs: {style: 'text-align: left; vertical-align: top;'},
                                        content: [
                                            {
                                                tag: 'span',
                                                content: 'Влево'
                                            },
                                            '&nbsp;&nbsp;',
                                            {
                                                block: 'button',
                                                mods: {size: 'm'},
                                                content: 'И вверх'
                                            }
                                        ]
                                    },
                                    {
                                        tag: 'td',
                                        attrs: {style: 'text-align: center; vertical-align: middle;'},
                                        content: [
                                            {
                                                block: 'button',
                                                mods: {size: 's'},
                                                content: 'По центру'
                                            },
                                            '&nbsp;&nbsp;',
                                            {
                                                block: 'button',
                                                mods: {theme: 'action', size: 'm'},
                                                type: 'submit',
                                                content: 'По центру'
                                            }
                                        ]
                                    },
                                    {
                                        tag: 'td',
                                        attrs: {style: 'text-align: right; vertical-align: bottom;'},
                                        content: [
                                            {
                                                block: 'button',
                                                mods: {size: 'm'},
                                                content: 'Вправо'
                                            },
                                            '&nbsp;&nbsp;',
                                            {
                                                tag: 'span',
                                                content: 'и вниз'
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
        {
            block: 'simple-example',
            content: [
                {
                    elem: 'example-text',
                    content: 'Кнопка со стрелкой'
                },
                {
                    attrs: {style: 'margin: 20px 0;'},
                    content: {
                        block: 'button',
                        mods: {size: 's', arrow: 'down'},
                        content: 'Я.Кнопка размера S'
                    }
                },
                {
                    attrs: {style: 'margin: 20px 0;'},
                    content: {
                        block: 'button',
                        mods: {size: 'm', arrow: 'down'},
                        content: 'Я.Кнопка размера M'
                    }
                }
            ]
        },
        {
            block: 'simple-example',
            mods: {example: 'round-button'},
            content: [
                {
                    tag: 'form',
                    attrs: {action: 'bbb'},
                    content: [
                        {
                            block: 'button',
                            mods: {
                                round: 'yes',
                                state: 'pause'
                            }
                        },
                        {
                            block: 'button',
                            mods: {
                                round: 'yes',
                                state: 'play'
                            }
                        },
                        {
                            block: 'button',
                            mods: {
                                round: 'yes',
                                state: 'radio'
                            }
                        }
                    ]
                }
            ]
        },
        {
            block: 'simple-example',
            content: [
                {
                    tag: 'form',
                    attrs: {action: 'bbb'},
                    content: [
                        {
                            block: 'button',
                            mods: {size: 'm', side: 'left'},
                            content: 'side: left'
                        },
                        {
                            block: 'button',
                            mods: {size: 'm', side: 'right'},
                            content: 'side: right'
                        }
                    ]
                },
                '<br>',
                {
                    tag: 'form',
                    attrs: {action: 'bbb'},
                    content: [
                        {
                            block: 'button',
                            mods: {size: 'm', side: 'left', theme: 'action'},
                            content: 'side: left'
                        },
                        {
                            block: 'button',
                            mods: {size: 'm', side: 'right', theme: 'action'},
                            content: 'side: right'
                        }
                    ]
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_00-all.js'}
    ]
});

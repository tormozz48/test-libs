({
    block: 'b-page',
    title: 'input: Поле ввода',
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
                    content: 'Поле ввода'
                },
                {
                    attrs: {style: 'width: 400px; padding: 20px;'},
                    content: {
                        block: 'input',
                        mods: {size: 's'},
                        content: [
                            {elem: 'hint', content: 'Хинт для инпута'},
                            {elem: 'control'}
                        ]
                    }
                },
                {
                    attrs: {style: 'width: 400px; padding: 20px;'},
                    content: {
                        block: 'input',
                        mods: {size: 'm'},
                        content: [
                            {elem: 'hint', content: 'Хинт для инпута'},
                            {elem: 'control'}
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
                    content: 'Поле ввода с автофокусом'
                },
                {
                    attrs: {style: 'width: 400px; padding: 20px;'},
                    content: {
                        block: 'input',
                        js: {autoFocus: 'yes'},
                        mods: {size: 's'},
                        content: {elem: 'control'}
                    }
                }
            ]
        },
        {
            block: 'simple-example',
            content: [
                {
                    elem: 'example-text',
                    content: 'Поле ввода с автофокусом при вводе текста на странице'
                },
                {
                    attrs: {style: 'width: 400px; padding: 20px;'},
                    content: {
                        block: 'input',
                        mods: {size: 's', autofocus: 'yes'},
                        content: {elem: 'control'}
                    }
                }
            ]
        },
        {
            block: 'simple-example',
            content: [
                {
                    elem: 'example-text',
                    content: 'С меткой'
                },
                {
                    attrs: {style: 'width: 400px; padding: 20px'},
                    content: {
                        block: 'input',
                        mods: {size: 's'},
                        content: [
                            {elem: 'label', content: 'Метка для инпута'},
                            {elem: 'control'}
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
                    content: 'С меткой и подсказкой'
                },
                {
                    attrs: {style: 'width: 400px; padding: 20px;'},
                    content: {
                        block: 'input',
                        mods: {size: 's'},
                        content: [
                            {elem: 'label', content: 'Метка для инпута'},
                            {elem: 'hint', content: 'Хинт для инпута'},
                            {elem: 'control'}
                        ]
                    }
                },
                {
                    attrs: {style: 'width: 400px; padding: 20px;'},
                    content: {
                        block: 'input',
                        mods: {size: 's', disabled: 'yes'},
                        content: [
                            {elem: 'label', content: 'С модификатором _disabled_yes'},
                            {elem: 'hint', content: 'Хинт для инпута'},
                            {elem: 'control'}
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
                    content: 'С сообщением об ошибке'
                },
                {
                    attrs: {style: 'width: 400px; padding: 20px'},
                    content: {
                        block: 'input',
                        mods: {size: 's'},
                        content: [
                            {elem: 'control'},
                            {
                                elem: 'message',
                                elemMods: {type: 'error', visibility: 'visible'},
                                content: 'ошибка!'
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
                    content: 'С примерами'
                },
                {
                    attrs: {style: 'width: 400px; padding: 20px'},
                    content: {
                        block: 'input',
                        mods: {size: 's'},
                        content: [
                            {elem: 'control'},
                            {
                                elem: 'samples',
                                content: [
                                    {
                                        block: 'link',
                                        mods: {pseudo: 'yes'},
                                        mix: [
                                            {block: 'input', elem: 'sample'}
                                        ],
                                        content: 'пример 1'
                                    },
                                    ', ',
                                    {
                                        block: 'link',
                                        mods: {pseudo: 'yes'},
                                        mix: [
                                            {block: 'input', elem: 'sample'}
                                        ],
                                        content: 'пример 2'
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
                    content: 'Поле ввода с кнопкой очистки'
                },
                {
                    attrs: {style: 'width: 400px; padding: 20px;'},
                    content: [
                        'Поле ввода с кнопкой очистки<br/><br/>',
                        {
                            block: 'input',
                            mods: {size: 's'},
                            content: [
                                {elem: 'hint', content: 'Поле ввода с кнопкой очистки'},
                                {elem: 'control'}
                            ]
                        }
                    ]
                },
                {
                    attrs: {style: 'width: 400px; padding: 20px;'},
                    content: [
                        'Нет тут крестика и не будет<br/><br/>',
                        {
                            block: 'input',
                            mods: {size: 's', clear: 'no'},
                            content: [
                                {elem: 'hint', content: 'Нет тут крестика и не будет'},
                                {elem: 'control'}
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block: 'simple-example',
            mods: {example: 'table'},
            content: [
                {
                    elem: 'example-text',
                    content: 'В размерах с кнопками'
                },
                {
                    tag: 'h3',
                    attrs: {style: 'margin: 20px 10px; 0'},
                    content: 'Инпут как блочный элемент в table'
                },
                {
                    block: 'b-layout-table',
                    mods: {layout: '60-40'},
                    content: [
                        {
                            elem: 'row',
                            content: [
                                {
                                    elem: 'cell',
                                    elemMods: {position: 'l'},
                                    content: {
                                        block: 'input',
                                        mods: {size: 's'},
                                        content: [
                                            {elem: 'hint', content: 'С шириной 100%'},
                                            {elem: 'control'}
                                        ]
                                    }
                                },
                                {
                                    elem: 'cell',
                                    content: {
                                        block: 'button',
                                        mods: {size: 's'},
                                        type: 'button',
                                        content: 'Кнопка размером S'
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    tag: 'h3',
                    attrs: {style: 'margin: 20px 10px; 0'},
                    content: 'Инпут как инлайн-блочный элемент в div'
                },
                {
                    block: 'example',
                    content: [
                        {
                            tag: 'span',
                            content: 'Просто текст&nbsp;&nbsp;'
                        },
                        {
                            block: 'input',
                            mods: {size: 'm'},
                            value: 'с заданной шириной 300px',
                            content: [
                                {elem: 'hint', content: 'Подсказка'},
                                {elem: 'control'}
                            ]
                        },
                        {
                            block: 'button',
                            mods: {size: 'm'},
                            type: 'button',
                            content: 'Кнопка размером M'
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
                    content: 'Поле ввода текстовой областью в размерах'
                },
                {
                    attrs: {style: 'width: 400px; padding: 20px'},
                    content: {
                        block: 'input',
                        mods: {type: 'textarea', size: 's'},
                        value: 'Я текстовая область размера S',
                        content: {elem: 'control'}
                    }
                },
                {
                    attrs: {style: 'width: 400px; padding: 20px'},
                    content: {
                        block: 'input',
                        mods: {type: 'textarea', size: 'm'},
                        value: 'Я текстовая область размера M',
                        content: {elem: 'control'}
                    }
                }
            ]
        },
        {
            block: 'simple-example',
            content: [
                {
                    elem: 'example-text',
                    content: 'Неактивное состояние'
                },
                {
                    attrs: {style: 'width: 400px; padding: 20px'},
                    content: {
                        block: 'input',
                        mods: {disabled: 'yes', size: 'm'},
                        value: 'Я неактивный инпут',
                        content: {elem: 'control'}
                    }
                },
                {
                    attrs: {style: 'width: 400px; margin: 20px'},
                    content: {
                        block: 'input',
                        mods: {type: 'textarea', disabled: 'yes', size: 'm'},
                        value: 'Я неактивная текстовая область',
                        content: {elem: 'control'}
                    }
                }
            ]
        },
        {
            block: 'simple-example',
            mods: {example: 'color-table'},
            content: [
                {
                    elem: 'example-text',
                    content: 'В таблице'
                },
                {
                    tag: 'form',
                    attrs: {action: '/'},
                    content: {
                        block: 'mytable',
                        tag: 'table',
                        content: {
                            tag: 'tr',
                            content: [
                                {
                                    elem: 'td',
                                    mods: {type: 'first'},
                                    tag: 'td',
                                    content: {
                                        elem: 'i',
                                        content: {
                                            block: 'input',
                                            mods: {size: 's'},
                                            content: [
                                                {elem: 'label', content: 'Метка для инпута'},
                                                {elem: 'control'},
                                                {
                                                    elem: 'message',
                                                    elemMods: {type: 'error', visibility: 'visible'},
                                                    content: 'Ошиблись, бывает'},
                                                {
                                                    elem: 'samples',
                                                    content: [
                                                        {
                                                            block: 'link',
                                                            mods: {pseudo: 'yes'},
                                                            mix: [
                                                                {block: 'input', elem: 'sample'}
                                                            ],
                                                            content: 'пример 1'
                                                        },
                                                        ', ',
                                                        {
                                                            block: 'link',
                                                            mods: {pseudo: 'yes'},
                                                            mix: [
                                                                {block: 'input', elem: 'sample'}
                                                            ],
                                                            content: 'пример 2'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    elem: 'td',
                                    tag: 'td',
                                    content: {
                                        elem: 'i',
                                        content: {
                                            block: 'input',
                                            mods: {size: 's'},
                                            content: [
                                                {
                                                    elem: 'hint',
                                                    content: 'ПодсказкаПодсказкаПодсказкаПодсказкаПодсказкаПодсказка'
                                                },
                                                {elem: 'control'},
                                                {
                                                    elem: 'samples',
                                                    content: [
                                                        {
                                                            block: 'link',
                                                            mods: {pseudo: 'yes'},
                                                            mix: [
                                                                {block: 'input', elem: 'sample'}
                                                            ],
                                                            content: 'пример 1'
                                                        },
                                                        ', ',
                                                        {
                                                            block: 'link',
                                                            mods: {pseudo: 'yes'},
                                                            mix: [
                                                                {block: 'input', elem: 'sample'}
                                                            ],
                                                            content: 'пример 2'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    elem: 'td',
                                    mods: {type: 'last'},
                                    tag: 'td',
                                    content: {
                                        elem: 'i',
                                        content: {
                                            block: 'input',
                                            mods: {type: 'textarea', size: 's'},
                                            content: [
                                                {elem: 'hint', content: 'Подсказка для текстовой области'},
                                                {elem: 'control'},
                                                {
                                                    elem: 'samples',
                                                    content: [
                                                        {
                                                            block: 'link',
                                                            mods: {pseudo: 'yes'},
                                                            mix: [
                                                                {block: 'input', elem: 'sample'}
                                                            ],
                                                            content: 'пример 1'
                                                        },
                                                        ', ',
                                                        {
                                                            block: 'link',
                                                            mods: {pseudo: 'yes'},
                                                            mix: [
                                                                {block: 'input', elem: 'sample'}
                                                            ],
                                                            content: 'пример 2'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    }
                                }
                            ]
                        }
                    }
                }
            ]
        },
        {
            block: 'simple-example',
            content: [
                {
                    elem: 'example-text',
                    content: 'Инпут и кнопка рядом'
                },
                {
                    attrs: {style: 'width: 400px; padding: 20px;'},
                    content: [
                        {
                            block: 'input',
                            mods: {size: 's'},
                            content: [
                                {elem: 'hint', content: 'Инпут размером S'},
                                {elem: 'control'}
                            ]
                        },
                        {
                            block: 'button',
                            mods: {size: 's'},
                            type: 'button',
                            content: 'Кнопка размером S'
                        }
                    ]
                },
                {
                    attrs: {style: 'width: 400px; padding: 20px;'},
                    content: [
                        {
                            block: 'input',
                            mods: {size: 'm'},
                            content: [
                                {elem: 'hint', content: 'Инпут размером M'},
                                {elem: 'control'}
                            ]
                        },
                        {
                            block: 'button',
                            mods: {size: 'm'},
                            type: 'button',
                            content: 'Кнопка размером M'
                        }
                    ]
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', 'url': '_00-all.js'}
    ]
});

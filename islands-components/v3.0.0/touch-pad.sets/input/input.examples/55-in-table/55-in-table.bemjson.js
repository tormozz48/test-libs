({
    block: 'b-page',
    title: 'В таблице',
    head: [
        {elem: 'css', url: '_55-in-table.css', ie: false},
        {elem: 'css', url: '_55-in-table', ie: true}
    ],
    content: [
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
                                                    mix: [{block: 'input', elem: 'sample'}],
                                                    content: 'пример 1'
                                                },
                                                ', ',
                                                {
                                                    block: 'link',
                                                    mods: {pseudo: 'yes'},
                                                    mix: [{block: 'input', elem: 'sample'}],
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
                                            content: 'ПодсказкаПодсказкаПодсказкаПодсказкаПодсказкаПодсказкаПодсказка'
                                        },
                                        {elem: 'control'},
                                        {
                                            elem: 'samples',
                                            content: [
                                                {
                                                    block: 'link',
                                                    mods: {pseudo: 'yes'},
                                                    mix: [{block: 'input', elem: 'sample'}],
                                                    content: 'пример 1'
                                                },
                                                ', ',
                                                {
                                                    block: 'link',
                                                    mods: {pseudo: 'yes'},
                                                    mix: [{block: 'input', elem: 'sample'}],
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
                                                    mix: [{block: 'input', elem: 'sample'}],
                                                    content: 'пример 1'
                                                },
                                                ', ',
                                                {
                                                    block: 'link',
                                                    mods: {pseudo: 'yes'},
                                                    mix: [{block: 'input', elem: 'sample'}],
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
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', 'url': '_55-in-table.js'}
    ]
});

({
    block: 'b-page',
    title: '20-menu-type-hovered',
    head: [
        {elem: 'css', url: '_20-menu-type-hovered.css'},
        {elem: 'css', url: '_20-menu-type-hovered', ie: true}
    ],

    content: [

        {
            block: 'dropdown-menu',
            content: [

                {
                    elem: 'switcher',
                    content: {
                        block: 'button',
                        mods: {size: 'm', arrow: 'down'},
                        content: 'Меню, пожалуйста'
                    }
                },

                {
                    elem: 'popup',
                    menuMods: {type: 'hovered'},
                    content: [
                        {
                            elem: 'item',
                            content: {
                                block: 'link',
                                mods: {pseudo: 'yes'},
                                content: 'Поиск'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'link',
                                mods: {pseudo: 'yes'},
                                content: 'Карты'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'link',
                                mods: {pseudo: 'yes'},
                                content: 'Маркет'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'link',
                                mods: {pseudo: 'yes'},
                                content: 'Новости'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'link',
                                mods: {pseudo: 'yes'},
                                content: 'Словари'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'link',
                                mods: {pseudo: 'yes'},
                                content: 'Картинки'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'link',
                                mods: {pseudo: 'yes'},
                                content: 'Видео'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'link',
                                mods: {pseudo: 'yes'},
                                content: 'Музыка'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'link',
                                mods: {pseudo: 'yes'},
                                content: 'Перевод'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'link',
                                mods: {pseudo: 'yes'},
                                content: 'Блоги'
                            }
                        }
                    ]
                }

            ]
        },

        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url:'_20-menu-type-hovered.js'}

    ]

});

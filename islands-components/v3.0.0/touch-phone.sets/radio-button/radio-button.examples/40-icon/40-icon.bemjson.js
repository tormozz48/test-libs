({
    block: 'b-page',
    title: 'С иконками',
    head: [
        {elem: 'css', url: '_40-icon.css', ie: false},
        {elem: 'css', url: '_40-icon', ie: true},
        {elem: 'meta', attrs: {name: 'viewport', content: 'initial-scale=1'}}
    ],
    content: [
        {
            attrs: {style: 'margin: 20px'},
            content: [
                {
                    block: 'radio-button',
                    mods: {size: 'm'},
                    name: 'show_to',
                    content: [
                        {
                            elem: 'radio',
                            controlAttrs: {value: 'val-1'},
                            content: [
                                {
                                    block: 'image',
                                    mix: [{block: 'radio-button', elem: 'icon', mods: {'16': 'photo'}}]
                                },
                                'Фото'
                            ]
                        },
                        {
                            elem: 'radio',
                            controlAttrs: {value: 'val-2'},
                            content: [
                                {
                                    block: 'image',
                                    mix: [{block: 'radio-button', elem: 'icon', mods: {'16': 'comment'}}]
                                },
                                'Коммент'
                            ]
                        },
                        {
                            elem: 'radio',
                            controlAttrs: {value: 'val-3'},
                            content: [
                                {
                                    block: 'image',
                                    mix: [{block: 'radio-button', elem: 'icon', mods: {'16': 'settings'}}]
                                },
                                'Свойства'
                            ]
                        },
                        {
                            elem: 'radio',
                            controlAttrs: {value: 'val-4'},
                            content: [
                                {
                                    block: 'image',
                                    mix: [{block: 'radio-button', elem: 'icon', mods: {'16': 'view'}}]
                                },
                                'Просмотр'
                            ]
                        }
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
                            mix: [{block: 'button', elem: 'icon'}],
                            url: '//yastatic.net/lego/_/Kx6F6RQnQFitm0qRxX7vpvfP0K0.png',
                            alt: 'Иконка Серпа'
                        },
                        'Я.Кнопка ссылка'
                    ]
                }
            ]
        },
        {
            attrs: {style: 'margin: 20px'},
            content: [
                {
                    block: 'radio-button',
                    mods: {size: 'm'},
                    name: 'show_to_m',
                    value: 'photo',
                    content: [
                        {
                            elem: 'radio',
                            controlAttrs: {value: 'photo'},
                            elemMods: {'only-icon': 'yes'},
                            content: [
                                {
                                    block: 'image',
                                    mix: [{block: 'radio-button', elem: 'icon', mods: {'16': 'photo'}}],
                                    alt: 'Photo'
                                }
                            ]
                        },
                        {
                            elem: 'radio',
                            controlAttrs: {value: 'comment'},
                            elemMods: {'only-icon': 'yes'},
                            content: [
                                {
                                    block: 'image',
                                    mix: [{block: 'radio-button', elem: 'icon', mods: {'16': 'comment'}}],
                                    alt: 'Comment'
                                }
                            ]
                        },
                        {
                            elem: 'radio',
                            controlAttrs: {value: 'settings'},
                            elemMods: {'only-icon': 'yes'},
                            content: [
                                {
                                    block: 'image',
                                    mix: [{block: 'radio-button', elem: 'icon', mods: {'16': 'settings'}}],
                                    alt: 'Settings'
                                }
                            ]
                        },
                        {
                            elem: 'radio',
                            controlAttrs: {value: 'view'},
                            elemMods: {'only-icon': 'yes'},
                            content: [
                                {
                                    block: 'image',
                                    mix: [{block: 'radio-button', elem: 'icon', mods: {'16': 'view'}}],
                                    alt: 'View'
                                }
                            ]
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
                            mix: [{block: 'button', elem: 'icon'}],
                            url: '//yastatic.net/lego/_/sturUGEk_m_IG0u9Oo1lHK_4tGk.png',
                            alt: 'Андройд'
                        }
                    ]
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js',  url: '_40-icon.js'}
    ]
});

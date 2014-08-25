({
    block: 'b-page',
    title: 'В размерах с кнопками',
    head: [
        {elem: 'css', url: '_35-size.css', ie: false},
        {elem: 'css', url: '_35-size', ie: true}
    ],
    content: [
        {
            tag: 'h3',
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
            block: 'example',
            content: [
                {
                    tag: 'h3',
                    content: 'Инпут как инлайн-блочный элемент в div'
                },
                {
                    attrs: {style: 'margin: 20px 0;'},
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
                },
                {
                    tag: 'h3',
                    content: 'Инпут и кнопка рядом'
                },
                {
                    attrs: {style: 'margin: 20px 0;'},
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
                    attrs: {style: 'margin: 20px 0;'},
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
        {elem: 'js', 'url': '_35-size.js'}
    ]
});

({
    block: 'b-page',
    title: 'С другими контролами',
    head: [
        {elem: 'css', url: '_60-form.css', ie: false},
        {elem: 'css', url: '_60-form', ie: true}
    ],
    content: [
        {
            block: 'example',
    //        attrs: { style: 'padding: 20px' },
            content: [
                {
                    elem: 'row',
                    content: [
                        {
                            block: 'button',
                            mods: {size: 'm'},
                            type: 'submit',
                            content: 'Кнопка'
                        },
                        {
                            block: 'radio-button',
                            mods: {size: 'm'},
                            name: 'rrr',
                            content: [
                                {
                                    elem: 'radio',
                                    elemMods: {checked: 'yes'},
                                    controlAttrs: {value: 'radio'},
                                    content: 'Радио'
                                },
                                {
                                    elem: 'radio',
                                    controlAttrs: {value: 'group'},
                                    content: 'группа'
                                }
                            ]
                        },
                        {
                            block: 'check-button',
                            mods: {size: 'm'},
                            content: 'Чекбокс-кнопкой'
                        },
                        {
                            block: 'select',
                            name: 'mail',
                            mods: {size: 'm', theme: 'normal'},
                            content: [
                                {
                                    block: 'button',
                                    mods: {size: 'm'},
                                    content: 'Селект'
                                },
                                {
                                    elem: 'control',
                                    content: [
                                        {
                                            elem: 'option',
                                            attrs: {value: 'select'},
                                            content: 'Селект'
                                        },
                                        {
                                            elem: 'option',
                                            attrs: {value: '1'},
                                            content: '1'
                                        },
                                        {
                                            elem: 'option',
                                            attrs: {value: '2'},
                                            content: '2'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'row',
                    content:[
                        {
                            block: 'button',
                            attrs: {style: 'margin-right: 20px'},
                            mods: {theme: 'action', size: 'm'},
                            type: 'submit',
                            name: 'my-submit',
                            content: 'Я.Submit'
                        },
                        {
                            block: 'checkbox',
                            mods: {size: 'm'},
                            content: {elem: 'label', content: 'чекбокс'}
                        },
                        {
                            block: 'radiobox',
                            mods: {size: 'm'},
                            name: 'bla',
                            content: [
                                {
                                    elem: 'radio',
                                    content: 'радио кнопка',
                                    controlAttrs: {value: 'val-1'}
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'row',
                    content: [
                        {
                            block: 'slider',
                            mods: {
                                type: 'range',
                                theme: 'normal',
                                size: 'm',
                                orientation: 'horiz',
                                input: 'hidden'
                            },
                            js: {
                                min: 10,
                                max: 90,
                                scale: [
                                    {value: 0, step: 10},
                                    {value: 100}
                                ]
                            },
                            content: {
                                elem: 'info',
                                elemMods: {preset: 'inline'},
                                content: [
                                    {
                                        elem: 'title',
                                        content: 'Цена'
                                    },
                                    {
                                        block: 'input',
                                        mods: {size: 'm'},
                                        value: 30,
                                        content: {elem: 'control'}
                                    },
                                    {
                                        block: 'input',
                                        mods: {size: 'm'},
                                        value: 70,
                                        content: {elem: 'control'}
                                    },
                                    {
                                        elem: 'unit',
                                        content: 'руб.'
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    elem: 'row',
                    content: [
                        {
                            block: 'input',
                            mods: {size: 'm'},
                            content: [
                                {elem: 'hint', content: 'Инпут'},
                                {elem: 'control'}
                            ]
                        }
                    ]
                },
                {
                    elem: 'row',
                    content: [
                        {
                            block: 'input',
                            mods: {size: 'm', type: 'textarea'},
                            content: [
                                {elem: 'hint', content: 'Текстовая область'},
                                {elem: 'control'}
                            ]
                        }
                    ]
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_60-form.js'}
    ]
});

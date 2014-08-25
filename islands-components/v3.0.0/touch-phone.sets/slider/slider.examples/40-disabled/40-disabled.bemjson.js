({
    block: 'b-page',
    title: 'Неактивные слайдеры',
    head: [
        {elem: 'css', url: '_40-disabled.css', ie: false},
        {elem: 'css', url: '_40-disabled', ie: true}
    ],
    content: [
        {
            attrs: {style: 'margin: 20px'},
            content: [
                {
                    block: 'slider',
                    mods: {theme: 'normal', size: 'm', orientation: 'horiz', disabled: 'yes'},
                    js: {
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
                                content: {elem: 'control'},
                                value: 50
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
            attrs: {style: 'margin: 20px'},
            content: [
                {
                    block: 'slider',
                    mods: {
                        type: 'range',
                        theme: 'normal',
                        size: 'm',
                        orientation: 'horiz',
                        disabled: 'yes',
                        input: 'hidden'
                    },
                    js: {
                        min: 10,
                        max: 90,
                        scale: [
                            {value: 0, label: '0', step: 10},
                            {value: 100, label: '100'}
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
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_40-disabled.js'}
    ]

});

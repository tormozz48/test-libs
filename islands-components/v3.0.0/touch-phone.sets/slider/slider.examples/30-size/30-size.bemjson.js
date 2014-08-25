({
    block: 'b-page',
    title: 'Реализованые размеры',
    head: [
        {elem: 'css', url: '_30-size.css', ie: false},
        {elem: 'css', url: '_30-size', ie: true}
    ],
    content: [
        {
            block: 'b-layout-table',
            mods: {layout: '30-70'},
            content: [
                {
                    elem: 'row',
                    content: [{
                            elem: 'cell',
                            content: {
                                block: 'button',
                                mods: {size: 's'},
                                url: '#',
                                content: 'Размер S'
                            }
                        },
                        {
                            elem: 'cell',
                            elemMods: {position: 'r'},
                            content: [
                                {
                                    attrs: {style: 'margin: 20px'},
                                    content: {
                                        block: 'slider',
                                        mods: {
                                            theme: 'normal',
                                            size: 's',
                                            orientation: 'horiz',
                                            input: 'hidden'
                                        },
                                        js: {
                                            min: 10,
                                            max: 90,
                                            scale: [
                                                {value: 0, step: 40},
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
                                                    mods: {size: 's'},
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
                                }

                            ]
                        }
                    ]
                },
                {
                    elem: 'row',
                    content: [
                        {
                            elem: 'cell',
                            content: {
                                block: 'button',
                                mods: {size: 'm'},
                                url: '#',
                                content: 'Размер M'
                            }
                        },
                        {
                            elem: 'cell',
                            elemMods: {position: 'r'},
                            content: [
                                {
                                    attrs: {style: 'margin: 20px'},
                                    content: {
                                        block: 'slider',
                                        mods: {
                                            theme: 'normal',
                                            size: 'm',
                                            orientation: 'horiz',
                                            input: 'hidden'
                                        },
                                        js: {
                                            min: 10,
                                            max: 90,
                                            scale: [
                                                {value: 0, step: 50},
                                                {value: 300}
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
                                                    value: 40,
                                                    content: {elem: 'control'}
                                                },
                                                {
                                                    elem: 'unit',
                                                    content: 'руб.'
                                                }
                                            ]

                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_30-size.js'}
    ]
});

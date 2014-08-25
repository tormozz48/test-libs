({
    block: 'b-page',
    title: 'Радио-группа',
    head: [
        {elem: 'css', url: '_00-all.css', ie: false},
        {elem: 'css', url: '_00-all', ie: true},
        {elem: 'meta', attrs: {name: 'viewport', content: 'initial-scale=1'}}
    ],
    content: [
        {
            attrs: {style: 'margin: 20px'},
            content: [
                'normal<br><br>',
                {
                    block: 'radiobox',
                    mods: {size: 's'},
                    name: 'bla',
                    content: [
                        {
                            elem: 'radio',
                            content: 'Радио 1',
                            controlAttrs: {value: 'val-1'}
                        },
                        '&nbsp;&nbsp;&nbsp;&nbsp;',
                        {
                            elem: 'radio',
                            content: 'Радио 2',
                            controlAttrs: {value: 'val-2'}
                        },
                        '&nbsp;&nbsp;&nbsp;&nbsp;',
                        {
                            elem: 'radio',
                            content: 'Радио 3',
                            controlAttrs: {value: 'val-3'}
                        }
                    ]
                },'<br>','<br>',
                {
                    block: 'radiobox',
                    mods: {size: 'm'},
                    name: 'bla',
                    content: [
                        {
                            elem: 'radio',
                            content: 'Радио 1',
                            controlAttrs: {value: 'val-1'}
                        },
                        '&nbsp;&nbsp;&nbsp;&nbsp;',
                        {
                            elem: 'radio',
                            elemMods: {checked: 'yes'},
                            content: 'Радио 2',
                            controlAttrs: {value: 'val-2'}
                        },
                        '&nbsp;&nbsp;&nbsp;&nbsp;',
                        {
                            elem: 'radio',
                            content: 'Радио 3',
                            controlAttrs: {value: 'val-3'}
                        }
                    ]
                },'<br>','<br>',
                {
                    attrs: {style: 'padding: 20px; background: #f6f5f3;'},
                    content: [
                        'pseudo<br><br>',
                        {
                            block: 'radiobox',
                            mods: {size: 's', theme: 'pseudo'},
                            name: 'bla',
                            content: [
                                {
                                    elem: 'radio',
                                    content: 'Радио 1',
                                    controlAttrs: {value: 'val-1'}
                                },
                                '&nbsp;&nbsp;&nbsp;&nbsp;',
                                {
                                    elem: 'radio',
                                    content: 'Радио 2',
                                    controlAttrs: {value: 'val-2'}
                                },
                                '&nbsp;&nbsp;&nbsp;&nbsp;',
                                {
                                    elem: 'radio',
                                    content: 'Радио 3',
                                    controlAttrs: {value: 'val-3'}
                                }
                            ]
                        },'<br>','<br>',
                        {
                            block: 'radiobox',
                            mods: {size: 'm', theme: 'pseudo'},
                            name: 'bla',
                            content: [
                                {
                                    elem: 'radio',
                                    content: 'Радио 1',
                                    controlAttrs: {value: 'val-1'}
                                },
                                '&nbsp;&nbsp;&nbsp;&nbsp;',
                                {
                                    elem: 'radio',
                                    content: 'Радио 2',
                                    controlAttrs: {value: 'val-2'}
                                },
                                '&nbsp;&nbsp;&nbsp;&nbsp;',
                                {
                                    elem: 'radio',
                                    content: 'Радио 3',
                                    elemMods: {checked: 'yes'},
                                    controlAttrs: {value: 'val-3'}
                                }
                            ]
                        }
                    ]
                },
                'disabled normal<br><br>',
                {
                    block: 'radiobox',
                    mods: {size: 's', disabled: 'yes'},
                    name: 'bla',
                    content: [
                        {
                            elem: 'radio',
                            content: 'Радио 1',
                            controlAttrs: {value: 'val-1'}
                        },
                        '&nbsp;&nbsp;&nbsp;&nbsp;',
                        {
                            elem: 'radio',
                            content: 'Радио 2',
                            controlAttrs: {value: 'val-2'}
                        },
                        '&nbsp;&nbsp;&nbsp;&nbsp;',
                        {
                            elem: 'radio',
                            elemMods: {checked: 'yes'},
                            content: 'Радио 3',
                            controlAttrs: {value: 'val-3'}
                        }
                    ]
                },'<br><br>',
                'disabled pseudo<br><br>',
                {
                    block: 'radiobox',
                    mods: {size: 's', disabled: 'yes', theme: 'pseudo'},
                    name: 'bla',
                    content: [
                        {
                            elem: 'radio',
                            content: 'Радио 1',
                            controlAttrs: {value: 'val-1'}
                        },
                        '&nbsp;&nbsp;&nbsp;&nbsp;',
                        {
                            elem: 'radio',
                            content: 'Радио 2',
                            controlAttrs: {value: 'val-2'}
                        },
                        '&nbsp;&nbsp;&nbsp;&nbsp;',
                        {
                            elem: 'radio',
                            elemMods: {checked: 'yes'},
                            content: 'Радио 3',
                            controlAttrs: {value: 'val-3'}
                        }
                    ]
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_00-all.js'}
    ]
});

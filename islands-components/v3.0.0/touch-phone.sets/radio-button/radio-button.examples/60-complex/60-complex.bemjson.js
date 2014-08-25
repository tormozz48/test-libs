({
    block: 'b-page',
    title: 'В тексте',
    head: [
        {elem: 'css', url: '_60-complex.css', ie: false},
        {elem: 'css', url: '_60-complex', ie: true},
        {elem: 'meta', attrs: {name: 'viewport', content: 'initial-scale=1'}}
    ],
    content: [
        {
            block: 'my-form',
            tag: 'form',
            attrs: {action: 'bbb'},
            content: {
                block: 'my-table',
                tag: 'table',
                content: [
                    {
                        tag: 'tr',
                        attrs: {style: 'background: #36c; color: #fff;'},
                        content: {
                            tag: 'td',
                            content: [
                                'Радиогруппа: ',
                                {
                                    block: 'radio-button',
                                    mods: {size: 'm'},
                                    name: 'sex',
                                    content: [
                                        {
                                            elem: 'radio',
                                            controlAttrs: {value: 'm'},
                                            elemMods: {checked: 'yes'},
                                            content: 'М'
                                        },
                                        {
                                            elem: 'radio',
                                            controlAttrs: {value: 'w'},
                                            content: 'Ж'
                                        },
                                        {
                                            elem: 'radio',
                                            controlAttrs: {value: 'i'},
                                            content: '—'
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                ]
            }
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_60-complex.js'}
    ]
});

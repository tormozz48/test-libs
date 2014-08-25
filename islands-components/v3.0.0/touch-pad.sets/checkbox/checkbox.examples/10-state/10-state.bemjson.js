({
    block: 'b-page',
    title: 'Все состояния',
    head: [
        {elem: 'css', url: '_10-state.css', ie: false},
        {elem: 'css', url: '_10-state', ie: true}
    ],
    content: [
        {
            block: 'example',
            content: [
                {
                    attrs: {style: 'margin: 20px'},
                    content: [
                        {tag: 'b', content: 'Размер S:'},'<br/>',
                        {elem: 'example-text', content: 'normal &nbsp;'},
                        {
                            block: 'checkbox',
                            mods: {size: 's'}
                        },'<br/>',
                        {elem: 'example-text',content: 'checked &nbsp;'},
                        {
                            block: 'checkbox',
                            mods: {size: 's', checked: 'yes'}
                        },'<br/>',
                        {elem: 'example-text', content: 'disabled &nbsp;'},
                        {
                            block: 'checkbox',
                            mods: {size: 's', disabled: 'yes'}
                        },'<br/>',
                        {elem: 'example-text', content: 'with label &nbsp;'},
                        {
                            block: 'checkbox',
                            mods: {size: 's', checked: 'yes'},
                            content: {elem: 'label', content: 'label'}
                        },'<br/>',
                        {elem: 'example-text', content: 'disabled with label &nbsp;'},
                        {
                            block: 'checkbox',
                            mods: {size: 's', checked: 'yes', disabled: 'yes'},
                            content: {elem: 'label', content: 'label'}
                        }
                    ]
                },
                {
                    attrs: {style: 'margin: 20px'},
                    content: [
                        {tag: 'b', content: 'Размер M:'},'<br/>',
                        {elem: 'example-text', content: 'normal &nbsp;'},
                        {
                            block: 'checkbox',
                            mods: {size: 'm'},
                            checkboxAttrs: {id: 'nnn', value: 'iu', accesskey: 'kj', name: 'text', tabindex: 1}
                        },'<br/>',
                        {elem: 'example-text', content: 'checked &nbsp;'},
                        {
                            block: 'checkbox',
                            mods: {size: 'm', checked: 'yes'}
                        },'<br/>',
                        {elem: 'example-text', content: 'disabled &nbsp;'},
                        {
                            block: 'checkbox',
                            mods: {size: 'm', disabled: 'yes'}
                        },'<br/>',
                        {elem: 'example-text', content: 'with label &nbsp;'},
                        {
                            block: 'checkbox',
                            mods: {size: 'm', checked: 'yes'},
                            content: {elem: 'label', content: 'label'}
                        },'<br/>',
                        {elem: 'example-text', content: 'disabled with label &nbsp;'},
                        {
                            block: 'checkbox',
                            mods: {size: 'm', disabled: 'yes', checked: 'yes'},
                            content: {elem: 'label', content: 'label'}
                        }
                    ]
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', 'url': '_10-state.js'}
    ]
});

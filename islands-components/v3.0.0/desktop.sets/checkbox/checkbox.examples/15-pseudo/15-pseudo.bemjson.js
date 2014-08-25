({
    block: 'b-page',
    title: 'Все состояния _theme_pseudo',
    head: [
        {elem: 'css', url: '_15-pseudo.css', ie: false},
        {elem: 'css', url: '_15-pseudo', ie: true}
    ],
    content: [
        {
            block: 'example',
            content: [
                {
                    attrs: {style: 'margin: 20px'},
                    content: [
                        {tag: 'b', content: 'Размер S:'},'<br/>',
                        {elem: 'example-text', content: 'pseudo &nbsp;'},
                        {
                            block: 'checkbox',
                            mods: {size: 's', theme: 'pseudo'}
                        },'<br/>',
                        {elem: 'example-text',content: 'checked &nbsp;'},
                        {
                            block: 'checkbox',
                            mods: {size: 's', theme: 'pseudo', checked: 'yes'}
                        },'<br/>',
                        {elem: 'example-text', content: 'disabled &nbsp;'},
                        {
                            block: 'checkbox',
                            mods: {size: 's', theme: 'pseudo', disabled: 'yes'}
                        },'<br/>',
                        {elem: 'example-text', content: 'with label &nbsp;'},
                        {
                            block: 'checkbox',
                            mods: {size: 's', theme: 'pseudo', checked: 'yes'},
                            content: {elem: 'label', content: 'label'}
                        },'<br/>',
                        {elem: 'example-text', content: 'disabled with label &nbsp;'},
                        {
                            block: 'checkbox',
                            mods: {size: 's', theme: 'pseudo', disabled: 'yes', checked: 'yes'},
                            content: {elem: 'label', content: 'label'}
                        }
                    ]
                },
                {
                    attrs: {style: 'margin: 20px'},
                    content: [
                        {tag: 'b', content: 'Размер M:'},'<br/>',
                        {elem: 'example-text', content: 'pseudo &nbsp;'},
                        {
                            block: 'checkbox',
                            mods: {size: 'm', theme: 'pseudo'},
                            checkboxAttrs: {id: 'nnn', value: 'iu', accesskey: 'kj', name: 'text', tabindex: 1}
                        },'<br/>',
                        {elem: 'example-text', content: 'checked &nbsp;'},
                        {
                            block: 'checkbox',
                            mods: {size: 'm', theme: 'pseudo', checked: 'yes'}
                        },'<br/>',
                        {elem: 'example-text', content: 'disabled &nbsp;'},
                        {
                            block: 'checkbox',
                            mods: {size: 'm', theme: 'pseudo', disabled: 'yes'}
                        },'<br/>',
                        {elem: 'example-text', content: 'with label &nbsp;'},
                        {
                            block: 'checkbox',
                            mods: {size: 'm', theme: 'pseudo', checked: 'yes'},
                            content: {elem: 'label', content: 'label'}
                        },'<br/>',
                        {elem: 'example-text', content: 'disabled with label &nbsp;'},
                        {
                            block: 'checkbox',
                            mods: {size: 'm', theme: 'pseudo', disabled: 'yes', checked: 'yes'},
                            content: {elem: 'label', content: 'label'}
                        }
                    ]
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', 'url': '_15-pseudo.js'}
    ]
});

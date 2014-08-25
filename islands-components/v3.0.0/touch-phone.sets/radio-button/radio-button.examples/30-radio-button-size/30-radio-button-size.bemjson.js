({
    block: 'b-page',
    title: 'Реализованные высоты',
    head: [
        {elem: 'css', url: '_30-radio-button-size.css', ie: false},
        {elem: 'css', url: '_30-radio-button-size', ie: true},
        {elem: 'meta', attrs: {name: 'viewport', content: 'initial-scale=1'}}
    ],
    content: [
        {
            attrs: {style: 'margin: 20px'},
            content: {
                block: 'radio-button',
                mods: {size: 's'},
                name: 'show_to_s',
                value: 'my',
                content: [
                    {
                        elem: 'radio',
                        controlAttrs: {value: 'all'},
                        content: 'виден всем'
                    },
                    {
                        elem: 'radio',
                        controlAttrs: {value: 'fr'},
                        content: 'только друзьям'
                    },
                    {
                        elem: 'radio',
                        controlAttrs: {value: 'my'},
                        content: 'только мне'
                    },
                    {
                        elem: 'radio',
                        controlAttrs: {value: 'yours'},
                        content: 'только не мне'
                    }
                ]
            }
        },
        {
            attrs: {style: 'margin: 20px'},
            content: {
                block: 'radio-button',
                mods: {size: 'm'},
                name: 'show_to_m',
                value: 'val-3',
                content: [
                    {
                        elem: 'radio',
                        controlAttrs: {value: 'val-1'},
                        content: 'виден всем'
                    },
                    {
                        elem: 'radio',
                        controlAttrs: {value: 'val-2'},
                        content: 'только друзьям'
                    },
                    {
                        elem: 'radio',
                        controlAttrs: {value: 'val-3'},
                        content: 'только мне'
                    },
                    {
                        elem: 'radio',
                        controlAttrs: {value: 'val-4'},
                        content: 'только не мне'
                    }
                ]
            }
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_30-radio-button-size.js'}
    ]
});

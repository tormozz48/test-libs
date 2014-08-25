({
    block: 'b-page',
    title: 'Cостояния кнопки',
    head: [
        {elem: 'css', url: '_50-radio-button-different.css', ie: false},
        {elem: 'css', url: '_50-radio-button-different', ie: true},
        {elem: 'meta', attrs: {name: 'viewport', content: 'initial-scale=1'}}
    ],
    content: [
        {
            attrs: {style: 'margin: 20px'},
            content: {
                block: 'radio-button',
                mods: {size: 'm'},
                name: 'show_to',
                content: [
                    {
                        elem: 'radio',
                        controlAttrs: {id: 'show_all', value: 'all'},
                        content: 'виден всем'
                    },
                    {
                        elem: 'radio',
                        controlAttrs: {value: 'friends'},
                        elemMods: {focused: 'yes'},
                        content: 'только друзьям'
                    },
                    {
                        elem: 'radio',
                        controlAttrs: {value: 'me'},
                        elemMods: {checked: 'yes'},
                        content: 'только мне'
                    },
                    {
                        elem: 'radio',
                        controlAttrs: {value: 'other'},
                        content: 'только не мне'
                    }
                ]
            }
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_50-radio-button-different.js'}
    ]
});

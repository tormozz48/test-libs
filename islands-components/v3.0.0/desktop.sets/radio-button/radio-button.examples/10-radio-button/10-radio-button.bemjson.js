({
    block: 'b-page',
    title: 'Радио-группа',
    head: [
        {elem: 'css', url: '_10-radio-button.css', ie: false},
        {elem: 'css', url: '_10-radio-button', ie: true},
        {elem: 'meta', attrs: {name: 'viewport', content: 'initial-scale=1'}}
    ],
    content: [
        {
            attrs: {style: 'margin: 20px'},
            content: {
                block: 'radio-button',
                mods: {size: 'm'},
                name: 'show_to',
                value: 'friends',
                content: [
                    {
                        elem: 'radio',
                        controlAttrs: {value: 'all'},
                        elemMods: {disabled: 'yes'},
                        content: 'виден всем'
                    },
                    {
                        elem: 'radio',
                        controlAttrs: {value: 'friends'},
                        content: 'только друзьям'
                    },
                    {
                        elem: 'radio',
                        controlAttrs: {value: 'me'},
                        elemMods: {disabled: 'yes'},
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
        {elem: 'js', url: '_10-radio-button.js'}
    ]
});

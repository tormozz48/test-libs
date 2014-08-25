({
    block: 'b-page',
    title: 'Неактивный блок',
    head: [
        {elem: 'css', url: '_20-radio-button-checked.css', ie: false},
        {elem: 'css', url: '_20-radio-button-checked', ie: true},
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
                        controlAttrs: {value: 'val-1'},
                        elemMods: {disabled: 'yes'},
                        content: 'виден всем'
                    },
                    {
                        elem: 'radio',
                        elemMods: {checked: 'yes'},
                        controlAttrs: {value: 'val-2'},
                        content: 'только друзьям'
                    },
                    {
                        elem: 'radio',
                        controlAttrs: {value: 'val-3'},
                        elemMods: {disabled: 'yes'},
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
        {elem: 'js', url: '_20-radio-button-checked.js'}
    ]
});

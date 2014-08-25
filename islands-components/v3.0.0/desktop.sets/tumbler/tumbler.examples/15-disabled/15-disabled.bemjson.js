({
    block: 'b-page',
    title: 'Неактивный тумблер',
    head: [
        {elem: 'css', url: '_15-disabled.css', ie: false},
        {elem: 'css', url: '_15-disabled', ie: true}
    ],
    content: [
        {
            attrs: {style: 'margin: 20px;'},
            content: [
                {
                    block: 'tumbler',
                    mods: {
                        size: 's',
                        disabled: 'yes'
                    },
                    content: [
                        {
                            elem: 'option',
                            side: 'left',
                            content: 'слева'
                        },
                        {
                            elem: 'option',
                            side: 'right',
                            content: 'справа'
                        }
                    ]
                }
            ]
        },
        {
            attrs: {style: 'margin: 20px;'},
            content: [
                {
                    block: 'tumbler',
                    mods: {
                        size: 'm',
                        checked: 'yes',
                        disabled: 'yes'
                    },
                    content: [
                        {
                            elem: 'option',
                            side: 'left',
                            content: 'слева'
                        },
                        {
                            elem: 'option',
                            side: 'right',
                            content: 'справа'
                        }
                    ]
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', 'url': '_15-disabled.js'}
    ]
});

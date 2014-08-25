({
    block: 'b-page',
    title: 'Тумблер размера S и M',
    head: [
        {elem: 'css', url: '_05-simple.css', ie: false},
        {elem: 'css', url: '_05-simple', ie: true}
    ],
    content: [
        {
            attrs: {style: 'margin: 20px'},
            content: [
                'Размер S:<br/><br/>',
                {
                    block: 'tumbler',
                    mods: {size: 's'},
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
            attrs: {style: 'margin: 20px'},
            content: [
                'Размер M:<br/><br/>',
                {
                    block: 'tumbler',
                    mods: {
                        size: 'm',
                        checked: 'yes'
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
        {elem: 'js', 'url': '_05-simple.js'}
    ]
});

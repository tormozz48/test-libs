({
    block: 'b-page',
    title: 'Тумблер с одним лейблом',
    head: [
        {elem: 'css', url: '_20-single.css', ie: false},
        {elem: 'css', url: '_20-single', ie: true}
    ],
    content: [
        {
            attrs: {style: 'margin: 20px;'},
            content: [
                {
                    block: 'tumbler',
                    mods: {size: 's'},
                    mix: {block: 'example'},
                    content: [
                        {
                            elem: 'option',
                            side: 'left',
                            content: 'Подпись только слева'
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
                        checked: 'yes'
                    },
                    mix: {block: 'example'},
                    content: [
                        {
                            elem: 'option',
                            side: 'right',
                            content: 'подпись только справа'
                        }
                    ]
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', 'url': '_20-single.js'}
    ]
});

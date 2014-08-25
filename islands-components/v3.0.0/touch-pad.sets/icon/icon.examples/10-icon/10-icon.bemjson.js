({
    block: 'b-page',
    title: 'icon',
    head: [
        {elem: 'css', url: '_10-icon.css', ie: false},
        {elem: 'css', url: '_10-icon', ie: true}
    ],
    content: [
        {
            block: 'example',
            content: [
                {
                    block: 'button',
                    mods: {size: 'm'},
                    content: [
                        {
                            block: 'icon',
                            mods: {theme: 'serp'}
                        },
                        ' Иконка серпа'
                    ]
                },
                '&nbsp;&nbsp; — параметры иконки заданы в её модификаторе'
            ]
        },
        {
            block: 'example',
            content: [
                {
                    block: 'button',
                    mods: {size: 'm', icon: 'comment'},
                    content: [
                        {
                            block: 'icon'
                        },
                        ' Комментарий'
                    ]
                },
                '&nbsp;&nbsp; — параметры иконки заданы в модификаторе родительского блока'
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_10-icon.js'}
    ]
});

({
    block: 'b-page',
    title: 'Размеры S, M и L',
    head: [
        {elem: 'css', url: '_20-size.css', ie: false},
        {elem: 'css', url: '_20-size', ie: true}
    ],
    content: [
        {
            attrs: {style: 'margin: 20px'},
            content: [
                {
                    block: 'check-button',
                    value: 's',
                    mods: {size: 's'},
                    content: 'Размер S'
                },
                '&nbsp;&nbsp;',
                {
                    block: 'check-button',
                    value: 'm',
                    mods: {size: 'm'},
                    content: 'Размер M'
                },
                '&nbsp;&nbsp;',
                {
                    block: 'check-button',
                    value: 'l',
                    mods: {size: 'l'},
                    content: 'Размер L'
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_20-size.js'}
    ]
});

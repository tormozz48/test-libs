({
    block: 'b-page',
    title: 'Тумблер без лейблов',
    head: [
        {elem: 'css', url: '_22-alone.css', ie: false},
        {elem: 'css', url: '_22-alone', ie: true}
    ],
    content: [
        {
            attrs: {style: 'margin: 20px;'},
            content: {
                block: 'tumbler',
                mods: {size: 's'}
            }
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', 'url': '_22-alone.js'}
    ]
});

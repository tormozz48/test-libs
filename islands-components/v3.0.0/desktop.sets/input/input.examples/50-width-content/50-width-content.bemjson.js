({
    block: 'b-page',
    title: 'С автоматическим ресайзом по содержимому',
    head: [
        {elem: 'css', url: '_50-width-content.css', ie: false},
        {elem: 'css', url: '_50-width-content', ie: true}
    ],
    content: [
        {
            block: 'example',
            js: true,
            content: [
                {
                    tag: 'h3',
                    attrs: {style: 'font-weight: normal; color: #333;'},
                    content: 'Инпут должен подстраиваться под изменение ширины'
                },
                {elem: 'transform', elemMods: {type: 'reduce'}, content: 'уменинить ширину'},
                {elem: 'transform', elemMods: {type: 'increase'}, content: 'увеличить ширину'},
                {tag: 'br'},
                {tag: 'br'},
                {
                    block: 'input',
                    mods: {size: 'm', width: 'content'},
                    content: [{elem: 'control'}]
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_50-width-content.js'}
    ]
});

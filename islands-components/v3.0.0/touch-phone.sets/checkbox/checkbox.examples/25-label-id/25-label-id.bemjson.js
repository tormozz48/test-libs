({
    block: 'b-page',
    title: 'С label и генерацией случайного id',
    head: [
        {elem: 'css', url: '_25-label-id.css', ie: false},
        {elem: 'css', url: '_25-label-id', ie: true}
    ],
    content: [
        {
            attrs: {style: 'margin: 20px'},
            content: [
                {
                    block: 'checkbox',
                    mods: {size: 'm'},
                    content: {elem: 'label', content: 'запомнить меня'}
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_25-label-id.js'}
    ]
});

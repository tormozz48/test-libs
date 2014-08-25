({
    block: 'b-page',
    title: 'С label',
    head: [
        {elem: 'css', url: '_20-label.css', ie: false},
        {elem: 'css', url: '_20-label', ie: true}
    ],
    content: [
        {
            attrs: {style: 'margin: 20px'},
            content: [
                {
                    block: 'checkbox',
                    mods: {size: 'm'},
                    checkboxAttrs: {id: 'login'},
                    content: {elem: 'label', content: 'запомнить меня'}
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_20-label.js'}
    ]
});

({
    block: 'b-page',
    title: 'Простая кнопка c подписью на событие click',
    head: [
        {elem: 'css', url: '_115-trigger-click.css', ie: false},
        {elem: 'css', url: '_115-trigger-click-focus-no', ie: true}
    ],
    content: [
        {
            attrs: {style: 'margin: 20px'},
            block: 'click-handler',
            js: true,
            content: [
                {
                    block: 'button',
                    mods: {size: 'm', focus: 'no'},
                    content: [
                        'Клики:',
                        {
                            elem: 'click-counter',
                            content: ' 0',
                            tag: 'span'
                        }
                    ]
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_115-trigger-click.js'}
    ]
});

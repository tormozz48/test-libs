({
    block: 'b-page',
    title: 'Неактивные чекбоксы',
    head: [
        {elem: 'css', url: '_30-disabled.css', ie: false},
        {elem: 'css', url: '_30-disabled', ie: true}
    ],
    content: {
        attrs: {style: 'margin: 20px'},
        content: [
            {
                block: 'check-button',
                value: 's',
                mods: {size: 's', disabled: 'yes'},
                content: 'Неактивный'
            },
            '&nbsp;&nbsp;',
            {
                block: 'check-button',
                value: 'm',
                mods: {size: 'm', checked: 'yes', disabled: 'yes'},
                content: 'Неактивный и выбранный'
            },
            {block: 'i-jquery', mods: {version: '1.8.3'}},
            {elem: 'js', url: '_30-disabled.js'}
        ]
    }
});

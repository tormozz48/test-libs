({
    block: 'b-page',
    title: 'Неактивное состояние',
    head: [
        {elem: 'css', url: '_45-disabled.css', ie: false},
        {elem: 'css', url: '_45-disabled', ie: true}
    ],
    content: [
        {
            attrs: {style: 'width: 400px; padding: 20px'},
            content: {
                block: 'input',
                mods: {disabled: 'yes', size: 'm'},
                value: 'Я неактивный инпут',
                content: {elem: 'control'}
            }
        },
        {
            attrs: {style: 'width: 400px; margin: 20px'},
            content: {
                block: 'input',
                mods: {type: 'textarea', disabled: 'yes', size: 'm'},
                value: 'Я неактивная текстовая область',
                content: {elem: 'control'}
            }
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', 'url': '_45-disabled.js'}
    ]
});

({
    block: 'b-page',
    title: 'Поле ввода текстовой областью в размерах',
    head: [
        {elem: 'css', url: '_40-textarea.css', ie: false},
        {elem: 'css', url: '_40-textarea', ie: true}
    ],
    content: [
        {
            attrs: {style: 'width: 400px; padding: 20px'},
            content: {
                block: 'input',
                mods: {type: 'textarea', size: 's'},
                value: 'Я текстовая область размера S',
                content: {elem: 'control'}
            }
        },
        {
            attrs: {style: 'width: 400px; padding: 20px'},
            content: {
                block: 'input',
                mods: {type: 'textarea', size: 'm'},
                value: 'Я текстовая область размера M',
                content: {elem: 'control'}
            }
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', 'url': '_40-textarea.js'}
    ]
});

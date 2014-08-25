({
    block: 'b-page',
    title: 'С сообщением об ошибке',
    head: [
        {elem: 'css', url: '_20-message-error.css', ie: false},
        {elem: 'css', url: '_20-message-error', ie: true}
    ],
    content: [
        {
            attrs: {style: 'width: 400px; padding: 20px'},
            content: {
                block: 'input',
                mods: {size: 's'},
                content: [
                    {elem: 'control'},
                    {
                        elem: 'message',
                        elemMods: {type: 'error', visibility: 'visible'},
                        content: 'ошибка!'
                    }
                ]
            }
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', 'url': '_20-message-error.js'}
    ]
});

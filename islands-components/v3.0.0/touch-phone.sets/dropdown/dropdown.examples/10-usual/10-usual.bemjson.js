({
    block: 'b-page',
    title: '10-usual',
    head: [
        {elem: 'css', url: '_10-usual.css'},
        {elem: 'css', url: '_10-usual', ie: true}
    ],

    content: [

        {
            block: 'dropdown',
            content: [
                {
                    block: 'link',
                    mix: [{block: 'dropdown', elem: 'switcher'}],
                    mods: {pseudo: 'yes'},
                    url: 'http://www.yandex.ru/all',
                    content: 'ещё'
                },
                {
                    elem: 'popup',
                    content: 'I am a dropdown here!'
                }
            ]
        },

        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url:'_10-usual.js'}

    ]

});

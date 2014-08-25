({
    block: 'b-page',
    title: '20-close-it',
    head: [
        {elem: 'css', url: '_20-close-it.css'},
        {elem: 'css', url: '_20-close-it', ie: true}
    ],

    content: [
        {
            block: 'example',
            js: true,
            content: {
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
                        content: {
                            block: 'button',
                            mods: {size: 'm'},
                            content: 'Закрыть'
                        }
                    }
                ]
            }
        },

        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url:'_20-close-it.js'}

    ]

});

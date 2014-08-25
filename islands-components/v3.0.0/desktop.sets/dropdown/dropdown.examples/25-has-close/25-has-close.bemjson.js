({
    block: 'b-page',
    title: '25-has-close',
    head: [
        {elem: 'css', url: '_25-has-close.css'},
        {elem: 'css', url: '_25-has-close', ie: true}
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
                        // FIXME: Депсы пришлось указать на уровне 25-has-close.blocks. Косяк сборки, нужно разобраться
                        mods: {'has-close': 'yes'},
                        content: 'Парам пам пам'
                    }
                ]
            }
        },

        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url:'_25-has-close.js'}

    ]

});

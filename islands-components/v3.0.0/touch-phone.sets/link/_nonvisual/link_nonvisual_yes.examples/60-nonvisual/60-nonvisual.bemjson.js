({
    block: 'b-page',
    title: 'Невизуальная ссылка',
    head: [
        {elem: 'css', url: '_60-nonvisual.css'},
        {elem: 'css', url: '_60-nonvisual', ie: true}
    ],
    mods: {theme: 'normal'},
    content: {
        attrs: {style: 'padding:40px'},
        content: [
            {
                block: 'link',
                url: 'http://example.com',
                content: 'Обыкновенная ссылка'
            },
            {
                attrs: {style: 'margin-top:40px'},
                content: {
                    block: 'link',
                    mods: {pseudo: 'yes'},
                    url: 'http://example.com',
                    content: 'Псевдо-ссылка'
                }
            },
            {
                attrs: {style: 'margin-top:40px;margin-left:120px;'},
                content: [
                    {
                        block: 'link',
                        mods: {nonvisual: 'yes'},
                        url: 'http://example.com',
                        content: 'Невизуальная ссылка'
                    },
                    {
                        block: 'link',
                        mods: {pseudo: 'yes', nonvisual: 'yes'},
                        url: 'http://example.com',
                        content: 'Невизуальная псевдо-ссылка'
                    },
                    {
                        tag: 'ul',
                        content: [
                            {tag: 'li', content: 'Раз'},
                            {tag: 'li', content: 'Два'},
                            {tag: 'li', content: 'Три'}
                        ]
                    }
                ]
            },
            {
                attrs: {style: 'margin-top:40px'},
                content: {
                    block: 'link',
                    url: 'http://example.com',
                    content: 'Ещё одна ссылка'
                }
            },
            {block: 'i-jquery', mods: {version: '1.8.3'}},
            {elem: 'js', url:'_60-nonvisual.js'}
        ]
    }
});

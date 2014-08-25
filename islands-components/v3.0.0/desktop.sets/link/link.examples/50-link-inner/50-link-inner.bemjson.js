({
    block: 'b-page',
    title: 'С иконкой и внтуренним элементом',
    head: [
        {elem: 'css', url: '_50-link-inner.css', ie: false},
        {elem: 'css', url: '_50-link-inner', ie: true}
    ],
    content: [
        {
            attrs: {style: 'margin: 20px 0 20px 20px;'},
            content: {
                block: 'link',
                mods: {inner: 'yes'},
                url: '#',
                content: [
                    {
                        block: 'image',
                        mix: [{block: 'link', elem: 'icon'}],
                        url: '//yastatic.net/lego/_/q3pWfvEp2kyq8alkR67Ry863-14.png',
                        alt: '16x16 icon'
                    },
                    {
                        elem: 'inner',
                        content: 'Ссылка с иконкой 16x16'
                    }
                ]
            }
        },
        {
            attrs: {style: 'margin: 20px 0 20px 20px;'},
            content: {
                block: 'link',
                mods: {pseudo: 'yes', inner: 'yes'},
                url: 'http://ya.ru',
                content: [
                    {
                        block: 'image',
                        mix: [{block: 'link', elem: 'icon'}],
                        url: '//yastatic.net/lego/_/q3pWfvEp2kyq8alkR67Ry863-14.png',
                        alt: '16x16 icon'
                    },
                    {
                        elem: 'inner',
                        content: 'Псевдо-ссылка с иконкой 16x16'
                    }
                ]
            }
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_50-link-inner.js'}
    ]

});

({
    block: 'b-page',
    title: 'Псевдо-ссылка',
    head: [
        {elem: 'css', url: '_40-link-pseudo.css', ie: false},
        {elem: 'css', url: '_40-link-pseudo', ie: true}
    ],
    content: [
        {
            attrs: {style: 'margin: 20px 0 20px 20px;'},
            content: [
                {
                    block: 'link',
                    mods: {pseudo: 'yes'},
                    content: 'Псевдо-ссылка спаном'
                }, '&nbsp;&nbsp;',
                {
                    block: 'link',
                    mods: {pseudo: 'yes'},
                    url: 'http://ya.ru',
                    content: 'Псевдо-ссылка ссылкой'
                }
            ]
        },
        {
            attrs: {style: 'margin: 20px 0 20px 20px;'},
            content: {
                block: 'link',
                mods: {pseudo: 'yes'},
                url: 'http://ya.ru',
                target: '_blank',
                title: 'Заголовок',
                content: 'Псевдо-ссылка ссылкой с атрибутами title и target'
            }
        },
        {
            attrs: {style: 'margin: 20px 0 20px 20px;'},
            content: [
                {
                    block: 'link',
                    mods: {pseudo: 'yes', disabled: 'yes'},
                    content: 'Неактивная псевдо-ссылка спаном'
                }, '<br><br>',
                {
                    block: 'link',
                    mods: {pseudo: 'yes', disabled: 'yes'},
                    url: 'http://ya.ru',
                    content: 'Неактивная псевдо-ссылка ссылкой'
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_40-link-pseudo.js'}
    ]
});

({
    block: 'b-page',
    title: 'Внешняя ссылка',
    head: [
        {elem: 'css', url: '_15-link-simple-outer.css', ie: false},
        {elem: 'css', url: '_15-link-simple-outer', ie: true}
    ],
    content: [
        {
            attrs: {style: 'font-size: 16px; margin: 20px 0 20px 20px;'},
            content: {
                block: 'link',
                mods: {outer: 'yes'},
                url: 'http://ya.ru',
                content: 'Внешняя ссылка'
            }
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_15-link-simple-outer.js'}
    ]
});

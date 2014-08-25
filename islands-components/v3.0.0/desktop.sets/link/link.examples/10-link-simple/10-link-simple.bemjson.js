({
    block: 'b-page',
    title: 'Простая ссылка',
    head: [
        {elem: 'css', url: '_10-link-simple.css', ie: false},
        {elem: 'css', url: '_10-link-simple', ie: true}
    ],
    content: [
        {
            attrs: {style: 'margin: 20px 0 20px 20px;'},
            content: {
                block: 'link',
                url: 'http://ya.ru',
                content: 'Самая посещаемая страница Рунета'
            }
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_10-link-simple.js'}
    ]
});

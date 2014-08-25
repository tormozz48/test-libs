({
    block: 'b-page',
    title: 'Ссылка, открывающаяся в новом окне',
    head: [
        {elem: 'css', url: '_20-link-attributes.css', ie: false},
        {elem: 'css', url: '_20-link-attributes', ie: true}
    ],
    content: [
        {
            attrs: {style: 'margin: 20px 0 20px 20px;'},
            content: {
                block: 'link',
                target: '_blank',
                title: 'Ссылка',
                url: 'http://ya.ru',
                tabindex: '2',
                content: 'Ссылка, открывающаяся в новом окне'
            }
        },
        {
            attrs: {style: 'margin: 20px 0 20px 20px;'},
            content: {
                block: 'link',
                mods: {disabled: 'yes'},
                target: '_blank',
                title: 'Ссылка disabled',
                tabindex: '2',
                content: 'Ссылка не получает фокус по Tab'
            }
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_20-link-attributes.js'}
    ]
});

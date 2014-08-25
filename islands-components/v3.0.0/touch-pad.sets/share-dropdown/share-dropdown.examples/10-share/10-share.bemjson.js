([
{
    block: 'i-global',
    params: {
        url: '//hahahahhahahahha.com'
    }
},
{
    block: 'b-page',
    title: 'Поделиться',
    head: [
        {elem: 'css', url: '_10-share.css'},
        {elem: 'css', url: '_10-share', ie: true}
    ],
    attrs: {style: 'padding: 20px;'},
    content: [
        {
            block: 'share-dropdown',
            share: {
                title: 'Это title ст #раницы',
                description: 'Это описание страницы (description)',
                image: '//yastatic.net/lego/_/X31pO5JJJKEifJ7sfvuf3mGeD_8.png'
            },
            content: [
                {
                    elem: 'share-item',
                    service: 'facebook'
                },
                {
                    elem: 'share-item',
                    service: 'pinterest'
                },
                {
                    elem: 'share-item',
                    service: 'twitter'
                },
                {
                    elem: 'share-item',
                    service: 'vkontakte'
                },
                {
                    elem: 'share-item',
                    service: 'odnoklassniki'
                },
                {
                    elem: 'share-item',
                    service: 'gplus'
                },
                {
                    elem: 'share-item',
                    service: 'moimir'
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_10-share.js'}
    ]
}
]);

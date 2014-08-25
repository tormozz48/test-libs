({
    block: 'b-page',
    title: '20-all',
    head: [
        {elem: 'css', url: '_20-all.css'},
        {elem: 'css', url: '_20-all', ie: true}
    ],
    content: [
        {
            block: 'lang-switcher',
            lang: {code: 'ru', name: 'Ru'},
            content: [
                {
                    elem: 'lang',
                    lang: {code: 'ua', name: 'Ua'},
                    url: '#'
                },
                {
                    elem: 'lang',
                    lang: {code: 'en', name: 'En'},
                    url: '#'
                },
                {
                    elem: 'lang',
                    lang: {code: 'ru', name: 'Ru'},
                    mods: {selected: 'yes'},
                    url: '#'
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url:'_20-all.js'}
    ]

});

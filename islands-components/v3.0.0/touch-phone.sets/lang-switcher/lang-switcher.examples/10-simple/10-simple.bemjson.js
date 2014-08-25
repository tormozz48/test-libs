({
    block: 'b-page',
    title: '10-simple',
    head: [
        {elem: 'css', url: '_10-simple.css'},
        {elem: 'css', url: '_10-simple', ie: true}
    ],
    content: [
        {
            block: 'lang-switcher',
            lang: {code: 'ru', name: 'Ru'},
            content: [
                {
                    elem: 'lang',
                    lang: {langCode: 'be', name: 'Be'}
                },

                {
                    elem: 'lang',
                    lang: {langCode: 'en', name: 'En'}
                },
                {
                    elem: 'lang',
                    lang: {langCode: 'kk', name: 'Kk'}
                },
                {
                    elem: 'lang',
                    mods: {selected: 'yes'},
                    lang: {langCode: 'ru', name: 'Ru'}
                },
                {
                    elem: 'lang',
                    lang: {langCode: 'tr', name: 'Tr'}
                },
                {
                    elem: 'lang',
                    lang: {langCode: 'tt', name: 'Tt'}
                },
                {
                    elem: 'lang',
                    lang: {langCode: 'uk', name: 'Uk'}
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url:'_10-simple.js'}
    ]

});

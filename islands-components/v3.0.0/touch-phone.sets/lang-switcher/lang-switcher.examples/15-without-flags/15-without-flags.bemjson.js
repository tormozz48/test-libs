({
    block: 'b-page',
    title: '15-without-flags',
    head: [
        {elem: 'css', url: '_15-without-flags.css'},
        {elem: 'css', url: '_15-without-flags', ie: true}
    ],
    content: [
        {
            block: 'lang-switcher',
            lang: {code: 'ru', name: 'Ru'},
            mods: {noflags: 'yes'},
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
        {elem: 'js', url:'_15-without-flags.js'}
    ]
});

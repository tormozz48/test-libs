({
    block: 'b-page',
    title: 'Инпут с саджестом в попапе',
    head: [
        {elem: 'css', url: '_62-suggest-in-popup.css', ie: false},
        {elem: 'css', url: '_62-suggest-in-popup', ie: true}
    ],
    content: [
        {
            block: 'example',
            js: true,
            content: [
                {
                    block: 'button',
                    mods: {size: 'm'},
                    content: 'I am Owner'
                },
                {
                    block: 'popup',
                    js: {
                        directions: ['bottom', 'bottom-right', 'bottom-left']
                    },
                    content: [
                        {elem: 'tail'},
                        {
                            elem: 'content',
                            mix: [{block: 'example', elem: 'popup-content'}],
                            content: [
                                {
                                    block: 'input',
                                    mods: {suggest: 'yes', size: 'm'},
                                    js: {dataprovider: {url: '//suggest.yandex.ru/suggest-ya.cgi?v=4&callback=?'}},
                                    content: [
                                        {elem: 'hint', content: 'Скажи "А"'},
                                        {elem: 'control', attrs: {name: 'autocomplete'}}
                                    ]
                                },
                                {
                                    tag: 'p',
                                    content: 'При выборе подсказки в саджесте, основной попап не должен закрываться'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', 'url': '_62-suggest-in-popup.js'}
    ]
});

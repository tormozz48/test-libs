({
    block: 'b-page',
    mix: [{block: 'i-ua', js: true}],
    title: 'Псевдо-кнопка',
    head: [
        {elem: 'css', url: '_55-pseudo.css', ie: false},
        {elem: 'css', url: '_55-pseudo', ie: true}
    ],
    content: [
        {
            block: 'example',
            attrs: {style: 'margin: 20px'},
            content: [
    //            'Чаще всего псевдо-кнопка — это ссылка, при нажатии на которую ' +
    //            'JavaScript запускает какое-либо действие (popup и прочее). ' +
    //            'При отстуствии JavaScript происходит переход по ссылке <br><br>',
                {
                    block: 'button',
                    url: '#',
                    mods: {size: 's', pseudo: 'yes'},
                    content: 'Псевдо-кнопка ссылкой S'
                },
                '<br><br>',
                {
                    block: 'button',
                    url: '#',
                    mods: {size: 'm', pseudo: 'yes'},
                    content: 'Псевдо-кнопка ссылкой M'
                },
                '<br><br>',
                {
                    block: 'button',
                    mods: {size: 's', pseudo: 'yes'},
                    content: 'Псевдо-кнопка S'
                },
                '<br><br>',
                {
                    block: 'button',
                    mods: {size: 'm', pseudo: 'yes'},
                    content: 'Псевдо-кнопка M'
                },
                '<br><br>',
                {
                    elem: 'color-block',
                    mods: {color: 'yellow'},
                    content: {
                        block: 'button',
                        mods: {size: 'm', pseudo: 'yes'},
                        content: 'Псевдо-кнопка'
                    }
                },
                {
                    elem: 'color-block',
                    mods: {color: 'green'},
                    content: {
                        block: 'button',
                        mods: {size: 'm', pseudo: 'yes'},
                        content: 'Псевдо-кнопка'
                    }
                },
                {
                    elem: 'color-block',
                    mods: {color: 'blue'},
                    content: {
                        block: 'button',
                        mods: {size: 'm', pseudo: 'yes'},
                        content: 'Псевдо-кнопка'
                    }
                },
                '<br><br>',
                {
                    attrs: {style: 'position: relative; background: #F5F5EA; padding: 20px;'},
                    content: [
                        'Кнопка в позиционированном блоке, ' +
                        '<a href="https://st.yandex-team.ru/ISLCOMPONENTS-516">' +
                        'ISLCOMPONENTS-516</a>',
                        '<br><br>',
                        {
                            block: 'button',
                            mods: {size: 'm', pseudo: 'yes'},
                            content: 'Псевдо-кнопка'
                        }
                    ]
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_55-pseudo.js'}
    ]
});

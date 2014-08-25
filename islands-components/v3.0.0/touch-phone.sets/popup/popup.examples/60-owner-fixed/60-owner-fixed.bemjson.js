({
    block: 'b-page',
    title: '60owner-fixed',
    head: [
        {elem: 'css', url: '_60-owner-fixed.css', ie: false},
        {elem: 'css', url: '_60-owner-fixed', ie: true}
    ],

    content: [

        {
            block: 'example',
            js: true,

            content: [

                {
                    tag: 'p',
                    content: 'Стоит уменьшить высоту окна браузера чтобы появилась полоса прокрутки'
                },

                {
                    block: 'button',
                    mix: {block: 'owner'},
                    mods: {size: 'm'},
                    content: 'Я.Owner с position: fixed'
                },

                {
                    block: 'popup',
                    js: {directions: 'right-bottom'},
                    mods: {
                        'watch-scroll': 'yes',
                        position: 'fixed'
                    },
                    content: [

                        {elem: 'tail'},
                        {
                            elem: 'content',
                            attrs: {style: 'width: 450px'},
                            content: [
                                'Далеко-далеко за словесными горами в стране гласных и согласных',
                                ' живут рыбные тексты. Вдали от всех живут они в буквенных домах на берегу ',
                                'Семантика большого языкового океана. Маленький ручеек Даль журчит по ',
                                'всей стране и обеспечивает ее всеми необходимыми правилами.'
                            ].join('')
                        }

                    ]
                }

            ]

        },

        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url:'_60-owner-fixed.js'}

    ]
});

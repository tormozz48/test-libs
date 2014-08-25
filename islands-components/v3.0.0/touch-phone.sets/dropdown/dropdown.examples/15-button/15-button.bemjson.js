({
    block: 'b-page',
    title: '15-button',
    head: [
        {elem: 'css', url: '_15-button.css'},
        {elem: 'css', url: '_15-button', ie: true}
    ],

    content: [
        {
            block: 'dropdown',
            content: [
                {
                    block: 'button',
                    mix: [{block: 'dropdown', elem: 'switcher'}],
                    mods: {size: 'm', arrow: 'down'},
                    content: 'Действия'
                },
                {
                    elem: 'popup',
                    js: {
                        directions: 'bottom-left-center'
                    },
                    // Ширина в popup задана в css примера
                    content: [
                        'Душа моя озарена неземной радостью, как эти чудесные весенние утра, ',
                        'которыми я наслаждаюсь от всего сердца. Я совсем один и блаженствую в здешнем краю, ',
                        'словно созданном для таких, как я. Я так счастлив, мой друг, так упоен ощущением покоя, ',
                        'что искусство мое страдает от этого.'
                    ].join('')
                }
            ]
        },

        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url:'_15-button.js'}

    ]

});

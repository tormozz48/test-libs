({
    block: 'b-page',
    js: true,
    title: '30-button-disabled',
    head: [
        {elem: 'css', url: '_30-button-disabled.css'},
        {elem: 'css', url: '_30-button-disabled', ie: true}
    ],
    content: [
        {
            tag: 'p',
            bem: false,
            content: {
                block: 'button',
                mods: {theme: 'action', size: 'm'},
                content: 'Задисейблить/Раздисейблить действия'
            }
        },
        {
            block: 'dropdown',
            js: {
                switcherBlock: 'button'
            },
            content: [
                {
                    block: 'button',
                    mix: [{block: 'dropdown', elem: 'switcher'}],
                    mods: {size: 'm', arrow: 'down', disabled: 'yes'},
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
        {elem: 'js', url:'_30-button-disabled.js'}
    ]
});

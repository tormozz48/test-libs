({
    block: 'b-page',
    mix: [
        {block: 'i-ua', js: true}
    ],
    title: 'Псевдо чекбоксы кнопками',
    head: [
        {elem: 'css', url: '_50-pseudo.css', ie: false},
        {elem: 'css', url: '_50-pseudo', ie: true}
    ],
    content: [
        {
            attrs: {style: 'margin: 20px'},
            content: [
                {
                    block: 'check-button',
                    mods: {size: 's', pseudo: 'yes', disabled: 'yes'},
                    content: 'Псевдо-чекбокс размером S'
                },
                '&nbsp;&nbsp;',
                {
                    block: 'button',
                    mods: {size: 's', pseudo: 'yes'},
                    content: 'Псевдо-кнопка размером S'
                },
                '&nbsp;&nbsp;',
                {
                    block: 'check-button',
                    mods: {size: 's', pseudo: 'yes', checked: 'yes'},
                    content: 'Псевдо-чекбокс размером S'
                },
                '&nbsp;&nbsp;',
                ' — псевдо чекбокс выглядит как кнопка и может залипать, а псевдо кнопка не залипает'
            ]
        },
        {
            attrs: {style: 'margin: 20px'},
            content: [
                {
                    block: 'check-button',
                    mods: {size: 'm', pseudo: 'yes', checked: 'yes', disabled: 'yes'},
                    content: 'Псевдо-чекбокс размером M'
                },
                '&nbsp;&nbsp;',
                {
                    block: 'button',
                    mods: {size: 'm', pseudo: 'yes'},
                    content: 'Псевдо-кнопка размером M'
                },
                '&nbsp;&nbsp;',
                {
                    block: 'check-button',
                    mods: {size: 'm', pseudo: 'yes'},
                    content: 'Псевдо-чекбокс размером M'
                },
                '&nbsp;&nbsp;',
                ' — у псевдо чекбоска пустой value'
            ]
        },
        {
            attrs: {style: 'margin: 20px'},
            content: [
                {
                    block: 'check-button',
                    mods: {size: 'l', pseudo: 'yes', checked: 'yes', disabled: 'yes'},
                    content: 'Псевдо-чекбокс размером L'
                },
                '&nbsp;&nbsp;',
                {
                    block: 'button',
                    mods: {size: 'l', pseudo: 'yes'},
                    content: 'Псевдо-кнопка размером L'
                },
                '&nbsp;&nbsp;',
                {
                    block: 'check-button',
                    mods: {size: 'l', pseudo: 'yes'},
                    content: 'Псевдо-чекбокс размером L'
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_50-pseudo.js'}
    ]
});

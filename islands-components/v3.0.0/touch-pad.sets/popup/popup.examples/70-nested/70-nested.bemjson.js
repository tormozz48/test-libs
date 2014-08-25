({
    block: 'b-page',
    title: 'Попап вложен в попап',
    head: [
        {elem: 'css', url: '_70-nested.css', ie: false},
        {elem: 'css', url: '_70-nested', ie: true}
    ],
    content: [
        {
            block: 'example',
            js: true,
            content: [
                {
                    block: 'button',
                    mods: {size: 'm'},
                    content: 'owner'
                },
                {
                    block: 'popup',
                    zIndex: 123,
                    js: {
                        directions: 'right-top'
                    },
                    attrs: {style: 'width: 200px'},
                    content: [
                        {elem: 'tail'},
                        {
                            elem: 'content',
                            content: [
                                [
                                    'Далеко-далеко за словесными горами в стране гласных и согласных',
                                    ' живут рыбные тексты. Вдали от всех живут они в буквенных домах на берегу ',
                                    'Семантика большого языкового океана. Маленький ручеек Даль журчит по ',
                                    'всей стране и обеспечивает ее всеми необходимыми правилами.'
                                ].join(''),
                                {
                                    block: 'example',
                                    js: true,
                                    content: [
                                        {
                                            block: 'button',
                                            mods: {size: 'm'},
                                            content: 'popup2 owner'
                                        },
                                        {
                                            block: 'popup',
                                            mods: {theme: 'drunktankpink'},
                                            js: {
                                                directions: 'right-top'
                                            },
                                            attrs: {style: 'width:200px'},
                                            content: [
                                                {elem: 'tail'},
                                                {
                                                    elem: 'content',
                                                    content: [
                                                        'Далеко-далеко за словесными горами в стране гласных и ',
                                                        ' согласных живут рыбные тексты. Вдали от всех живут они  ',
                                                        'в буквенных домах на берегу Семантика большого языкового ',
                                                        'океана. Маленький ручеек Даль журчит по всей стране и ',
                                                        'обеспечивает ее всеми необходимыми правилами.'
                                                    ].join('')
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url:'_70-nested.js'}
    ]
});

({
    block: 'b-page',
    title: '55static-position',
    head: [
        {elem: 'css', url: '_55-static-position.css', ie: false},
        {elem: 'css', url: '_55-static-position', ie: true}
    ],

    content: [

        {

            block: 'example',
            js: true,

            content: [

                {

                    block: 'popup',
                    attrs: {style: 'width:200px'},
                    mods: {adaptive: 'yes', autoclosable: 'no'},
                    /*
                     * Почему bottom-left?
                     * Потому что если попросить блок расположиться по умолчанию(bottom-center)
                     * То он расположит центр верхней границы в точке left
                     * указанных координат
                     * Иными словами точка это как невидимый owner размером 1x1
                     */
                    js: {
                        directions: 'bottom-left'
                    },

                    content: [
                        {
                            elem: 'content',
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
        {elem: 'js', url:'_55-static-position.js'}

    ]
});

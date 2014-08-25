({
    block: 'b-page',
    title: 'Заданный диапазон, неравномерная шкала',
    head: [
        {elem: 'css', url: '_10-slider.css', ie: false},
        {elem: 'css', url: '_10-slider', ie: true}
    ],
    content: [
        {
            attrs: {style: 'margin: 20px'},
            content: [
                {
                    block: 'slider',
                    attrs: {style: 'width: 700px;'},
                    mods: {theme: 'normal', size: 's', orientation: 'horiz'},
                    js: {
                        min: 10,
                        max: 300,
                        scale: [
                            {value: 0, step: 10, label: '0'},
                            {value: 10, step: 5, label: '10', percent: 10},
                            {value: 40, step: 10, percent: 40},
                            {value: 300, step: 20, label: '300', percent: 80},
                            {value: 500, label: '500'}
                        ]
                    },
                    content: {
                        elem: 'info',
                        elemMods: {preset: 'inline'},
                        content: [
                            {
                                elem: 'title',
                                content: 'Цена'
                            },
                            {
                                block: 'input',
                                mods: {size: 'm'},
                                content: {elem: 'control'},
                                value: 40
                            },
                            {
                                elem: 'unit',
                                content: 'руб.'
                            }
                        ]
                    }
                },
                '<br><br><br><br>',
                {
                    block: 'slider',
                    attrs: {style: 'width: 700px;'},
                    mods: {theme: 'normal', size: 'm', orientation: 'horiz'},
                    js: {
                        min: 10,
                        max: 300,
                        scale: [
                            {value: 0, step: 10, label: '0'},
                            {value: 10, step: 5, label: '10', percent: 10},
                            {value: 40, step: 10, percent: 40},
                            {value: 300, step: 20, label: '300', percent: 80},
                            {value: 500, label: '500'}
                        ]
                    },
                    content: {
                        elem: 'info',
                        elemMods: {preset: 'inline'},
                        content: [
                            {
                                elem: 'title',
                                content: 'Цена'
                            },
                            {
                                block: 'input',
                                mods: {size: 'm'},
                                content: {elem: 'control'},
                                value: 40
                            },
                            {
                                elem: 'unit',
                                content: 'руб.'
                            }
                        ]
                    }

                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_10-slider.js'}
    ]
});

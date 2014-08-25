({
    block: 'b-page',
    title: 'Указание диапазона',
    head: [
        {elem: 'css', url: '_20-range.css', ie: false},
        {elem: 'css', url: '_20-range', ie: true}
    ],
    content: [
        {
            attrs: {style: 'margin: 20px'},
            content: [
                {
                    block: 'slider',
                    mods: {type: 'range', theme: 'normal', size: 'm', orientation: 'horiz'},
                    js: {
                        min: 10,
                        max: 90,
                        scale: [
                            {value: 0, step: 10},
                            {value: 100}
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
                                value: 30,
                                content: {elem: 'control'}
                           },
                            {
                                block: 'input',
                                mods: {size: 'm'},
                                value: 70,
                                content: {elem: 'control'}
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
        {elem: 'js', url: '_20-range.js'}
    ]
});

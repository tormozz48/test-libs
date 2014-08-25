({
    block: 'b-page',
    title: 'С рисочками',
    head: [
        {elem: 'css', url: '_12-slider.css', ie: false},
        {elem: 'css', url: '_12-slider', ie: true}
    ],
    content: [
        {
            attrs: {style: 'margin: 20px'},
            content: [
                {
                    block: 'slider',
                    mods: {theme: 'normal',  size: 'm', orientation: 'horiz'},
                    js: {
                        min: 10,
                        max: 300,
                        scale: [
                            {value: 0, step: 10, label: ' '},
                            {value: 10, step: 5, label: ' ', percent: 10},
                            {value: 40, step: 10, label: ' ', percent: 40},
                            {value: 300, step: 20, label: ' ', percent: 80},
                            {value: 500, label: ' '}
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
        {elem: 'js', url: '_12-slider.js'}
    ]
});

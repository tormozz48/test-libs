({
    block: 'b-page',
    title: 'Равномерная шкала',
    head: [
        {elem: 'css', url: '_05-slider-simple.css', ie: false},
        {elem: 'css', url: '_05-slider-simple', ie: true}
    ],
    content: [
        {
            attrs: {style: 'margin: 20px'},
            content: [
                {
                    block: 'slider',
                    mods: {theme: 'normal',  size: 'm', orientation: 'horiz'},
                    js: {
                        scale: [
                            {value: 0, step: 10, label: '0'},
                            {value: 100, label: '100'}
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
                                value: 50
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
        {elem: 'js', url: '_05-slider-simple.js'}
    ]
});

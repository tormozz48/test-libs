({
    block: 'b-page',
    title: '35adaptive',
    head: [
        {elem: 'css', url: '_35-adaptive.css', ie: false},
        {elem: 'css', url: '_35-adaptive', ie: true}
    ],

    content: [

        {

            block: 'example',
            js: true,

            content: [

                {
                    block: 'button',
                    mods: {size: 'm'},
                    mix: [{block: 'owner'}],
                    content: 'Я.Owner'
                },

                {

                    block: 'popup',
                    attrs: {style: 'width:300px'},
                    mods: {adaptive: 'yes', autosize: 'yes'},

                    /**
                     * Блок будет перестраивать себя только в указанных directions
                     */
                    js: {
                        directions: [
                            {to:'right',offset:{right:-20}},
                            {to:'bottom',offset:{bottom:-20}},
                            {to:'top',offset:{top:-20}}
                        ]
                    },

                    content: [
                        {elem: 'tail'},
                        {
                            elem: 'content',
                            content:[
                                'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, ',
                                'что он у себя в постели превратился в страшное насекомое. ',
                                'Лежа на панцирнотвердой спине, он видел, стоило ему приподнять голову, ',
                                'свой коричневый, выпуклый, разделенный дугообразными чешуйками живот, ',
                                'на верхушке которого еле держалось готовое вот-вот окончательно сползти одеяло.'
                            ].join('')
                        }
                    ]

                },
                {
                    block: 'tumbler',
                    name: 'autosize',
                    attrs: {style:'display:block; margin-top: 20px'},
                    mods: {size: 's', checked: 'yes'},
                    content:[
                        {
                            elem: 'option',
                            side: 'left',
                            value:'',
                            content: 'autosize'
                        },
                        {
                            elem: 'option',
                            side: 'right',
                            value:'yes'
                        }
                    ]
                }

            ]

        },

        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url:'_35-adaptive.js'}

    ]
});

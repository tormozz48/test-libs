({
    block: 'b-page',
    title: 'тултип в попапе',
    head: [
        {elem: 'css', url: '_40-popup.css', ie: false},
        {elem: 'css', url: '_40-popup', ie: true}
    ],
    content: [
        {
            block: 'example',
            content: [
                {
                    block: 'button',
                    mods: {size: 'm'},
                    content: 'Open popup'
                },
                {
                    block: 'popup',
                    attrs: {style: 'width:200px; height:40px'},
                    content: [
                        {elem: 'tail'},
                        {
                            elem: 'content',
                            content: [
                                {
                                    block: 'tooltip-owner',
                                    content: 'tooltip'
                                },
                                {
                                    block: 'tooltip',
                                    mods: {
                                        size: 'm',
                                        theme: 'success',
                                        autoclosable: 'yes'
                                    },
                                    content: 'Hello'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_40-popup.js'}
    ]
});

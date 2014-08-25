({
    block: 'b-page',
    title: 'В виде меню',
    head: [
        {elem: 'css', url: '_10-control-menu.css'},
        {elem: 'css', url: '_10-control-menu', ie: true}
    ],
    content: [
        {
            block: 'example',
            content: [
                {
                    block: 'tabs',
                    mods: {
                        control: 'menu',
                        size: 'm',
                        theme: 'normal',
                        layout: 'horiz'
                    },
                    panes: 'oh-my-tabs',
                    content: [
                        {elem: 'tab', content: 'Tab 1', elemMods: {active: 'yes'}},
                        {elem: 'tab', content: 'Tab 2'},
                        {elem: 'tab', content: 'Tab 3', elemMods: {disabled: 'yes'}}
                    ]
                },
                {
                    block: 'tabs-panes',
                    id: 'oh-my-tabs',
                    content: [
                        {elem: 'pane', content: 'Pane 1', elemMods: {active: 'yes'}},
                        {elem: 'pane', content: 'Pane 2'},
                        {elem: 'pane', content: 'Pane 3'}
                    ]
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_10-control-menu.js'}
    ]
});

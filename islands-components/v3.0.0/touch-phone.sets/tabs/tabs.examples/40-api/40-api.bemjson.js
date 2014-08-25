({
    block: 'b-page',
    title: 'API - песочница',
    head: [
        {elem: 'css', url: '_40-api.css'},
        {elem: 'css', url: '_40-api', ie: true}
    ],
    content: [
        {
            block: 'example',
            js: true,
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
                        {elem: 'tab', content: 'Tab 0', elemMods: {active: 'yes'}},
                        {elem: 'tab', content: 'Tab 1'},
                        {elem: 'tab', content: 'Tab 2', elemMods: {disabled: 'yes'}}
                    ]
                },
                {
                    block: 'tabs-panes',
                    id: 'oh-my-tabs',
                    content: [
                        {elem: 'pane', content: 'Pane 0', elemMods: {active: 'yes'}},
                        {elem: 'pane', content: 'Pane 1'},
                        {elem: 'pane', content: 'Pane 2'}
                    ]
                },
                {tag: 'br'},
                {
                    block: 'button',
                    mix: [{block: 'example', elem: 'action', js: ['activate', [0]]}],
                    mods: {size: 's', pseudo: 'yes'},
                    content: '.activate(0)'
                }, '&nbsp;',
                {
                    block: 'button',
                    mix: [{block: 'example', elem: 'action', js: ['activate', [1]]}],
                    mods: {size: 's', pseudo: 'yes'},
                    content: '.activate(1)'
                }, '&nbsp;',
                {
                    block: 'button',
                    mix: [{block: 'example', elem: 'action', js: ['activate', [2]]}],
                    mods: {size: 's', pseudo: 'yes'},
                    content: '.activate(2)'
                }, '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
                {
                    block: 'button',
                    mix: [{block: 'example', elem: 'action', js: ['disable', [2]]}],
                    mods: {size: 's', pseudo: 'yes'},
                    content: '.disable(2)'
                }, '&nbsp;',
                {
                    block: 'button',
                    mix: [{block: 'example', elem: 'action', js: ['enable', [2]]}],
                    mods: {size: 's', pseudo: 'yes'},
                    content: '.enable(2)'
                }, '&nbsp;',
                {
                    block: 'button',
                    mix: [{block: 'example', elem: 'action', js: ['isDisabled', [2], true]}],
                    mods: {size: 's', pseudo: 'yes'},
                    content: '.isDisabled(2)'
                }, '&nbsp;',
                {elem: 'output'}
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_40-api.js'}
    ]
});

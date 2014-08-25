var BEMHTML = function() {
  var $$mode, $$block, $$elem, $$elemMods, $$mods;
  var cache,
      exports = {},
      xjst = (function (exports) {
    function $1(__$ctx) {
        var __t = $$block;
        if (__t === 'popup') {
            var __t = $$mode;
            if (__t === 'content') {
                if (!!$$elem === false) {
                    return [
                        {
                            elem: 'under',
                            mods: __$ctx.ctx.underMods
                        },
                        __$ctx.ctx.content
                    ];
                    return;
                } else {
                    return $16(__$ctx);
                }
            } else if (__t === 'default') {
                return $8(__$ctx);
            } else {
                return $16(__$ctx);
            }
        } else if (__t === 'suggest-item') {
            var __t = $$mode;
            if (__t === 'content') {
                var __t = $$elem;
                if (__t === 'wrapper') {
                    if (!($$elemMods && $$elemMods.column === 'jump') === false) {
                        return [
                            {
                                elem: 'left',
                                content: __$ctx.ctx.text
                            },
                            {
                                tag: 'span',
                                content: ' '
                            },
                            {
                                elem: 'right',
                                content: __$ctx.ctx.answer
                            }
                        ];
                        return;
                    } else {
                        if (!($$elemMods && $$elemMods.column === 'ellipsis') === false) {
                            return [
                                {
                                    elem: 'left',
                                    content: {
                                        elem: 'ellipsis',
                                        content: {
                                            elem: 'ellipsis-text',
                                            content: __$ctx.ctx.text
                                        }
                                    }
                                },
                                {
                                    elem: 'right',
                                    content: __$ctx.ctx.answer
                                }
                            ];
                            return;
                        } else {
                            return $33(__$ctx);
                        }
                    }
                } else if (__t === 'answer') {
                    return [
                        {
                            elem: 'answer-label',
                            content: BEM.I18N('suggest-item', 'quick-answer')
                        },
                        __$ctx.ctx.content
                    ];
                    return;
                } else {
                    return $33(__$ctx);
                }
            } else if (__t === 'icon') {
                return $240(__$ctx);
            } else if (__t === 'js') {
                if (!($$mods && $$mods.type === 'icon') === false) {
                    if (!__$ctx._url === false) {
                        if (!!$$elem === false) {
                            return { val: __$ctx._url };
                            return;
                        } else {
                            return $263(__$ctx);
                        }
                    } else {
                        return $263(__$ctx);
                    }
                } else {
                    return $263(__$ctx);
                }
            } else if (__t === 'default') {
                return $286(__$ctx);
            } else if (__t === 'value') {
                return $226(__$ctx);
            } else if (__t === 'attrs') {
                if ($$elem === 'icon') {
                    var __r0, __r1, __r2, __r3;
                    return { style: ('', __r0 = $$mode, $$mode = 'png', __r1 = $347(__$ctx), $$mode = __r0, '', __r1) + ('', __r2 = $$mode, $$mode = 'svg', __r3 = $342(__$ctx), $$mode = __r2, '', __r3) };
                    return;
                } else {
                    if (!!$$elem === false) {
                        return BEM.blocks['i-ua'].wp ? { onmousedown: 'return true' } : '';
                        return;
                    } else {
                        return $525(__$ctx);
                    }
                }
            } else if (__t === 'svg') {
                if ($$elem === 'icon') {
                    return $342(__$ctx);
                } else {
                    return $525(__$ctx);
                }
            } else if (__t === 'png') {
                if ($$elem === 'icon') {
                    return $347(__$ctx);
                } else {
                    return $525(__$ctx);
                }
            } else if (__t === 'link') {
                if (!($$mods && $$mods.type === 'nav') === false) {
                    if (!!$$elem === false) {
                        return $353(__$ctx);
                    } else {
                        return $525(__$ctx);
                    }
                } else {
                    return $525(__$ctx);
                }
            } else if (__t === 'wrap-ellipsis') {
                if (!!$$elem === false) {
                    return $360(__$ctx);
                } else {
                    return $525(__$ctx);
                }
            } else if (__t === 'text') {
                return $188(__$ctx);
            } else if (__t === 'wrap-jump') {
                if (!!$$elem === false) {
                    return $365(__$ctx);
                } else {
                    return $525(__$ctx);
                }
            } else if (__t === 'tag') {
                var __t = $$elem;
                if (__t === 'answer-label' || __t === 'answer') {
                    return 'span';
                    return;
                } else if (__t === 'icon') {
                    return 'i';
                    return;
                } else {
                    if (!!$$elem === false) {
                        return 'div';
                        return;
                    } else {
                        var __t = $$elem;
                        if (__t === 'icon') {
                            return 'i';
                            return;
                        } else if (__t === 'value' || __t === 'text' || __t === 'hint') {
                            return 'span';
                            return;
                        } else {
                            if (!!$$elem === false) {
                                return 'li';
                                return;
                            } else {
                                return $525(__$ctx);
                            }
                        }
                    }
                }
            } else if (__t === 'wrap-column') {
                if (!!$$elem === false) {
                    return $370(__$ctx);
                } else {
                    return $525(__$ctx);
                }
            } else if (__t === 'mix') {
                if ($$elem === 'answer-label') {
                    return [{ block: 'a11y-hidden' }];
                    return;
                } else {
                    if (!($$mods && $$mods.type === 'icon') === false) {
                        if (!__$ctx._url === false) {
                            if (!!$$elem === false) {
                                return { mods: { nav: 'yes' } };
                                return;
                            } else {
                                return $153(__$ctx);
                            }
                        } else {
                            return $153(__$ctx);
                        }
                    } else {
                        return $153(__$ctx);
                    }
                }
            } else if (__t === 'wrap') {
                if (!!$$elem === false) {
                    return $375(__$ctx);
                } else {
                    return $525(__$ctx);
                }
            } else if (__t === 'answer') {
                return $312(__$ctx);
            } else {
                return $525(__$ctx);
            }
        } else if (__t === 'i-bem') {
            if ($$mode === 'default') {
                if ($$elem === 'i18n') {
                    return $383(__$ctx);
                } else {
                    return $525(__$ctx);
                }
            } else {
                return $525(__$ctx);
            }
        } else if (__t === 'link') {
            var __t = $$mode;
            if (__t === 'mix') {
                return $389(__$ctx);
            } else if (__t === 'tag') {
                if ($$elem === 'inner') {
                    return 'span';
                    return;
                } else {
                    if (!!$$elem === false) {
                        return __$ctx.ctx.url ? 'a' : 'span';
                        return;
                    } else {
                        return $525(__$ctx);
                    }
                }
            } else if (__t === 'attrs') {
                return $405(__$ctx);
            } else if (__t === 'js') {
                if (!__$ctx.ctx.hasOwnProperty('tabindex') === false) {
                    return { origTabindex: String(__$ctx.ctx.tabindex) };
                    return;
                } else {
                    return $525(__$ctx);
                }
            } else {
                return $525(__$ctx);
            }
        } else if (__t === 'suggest') {
            var __t = $$elem;
            if (__t === 'padding') {
                var __t = $$mode;
                if (__t === 'content') {
                    return [
                        '.suggest .suggest-item{padding-left:',
                        __$ctx.ctx.itemPaddingLeft,
                        'px;} ',
                        '.suggest .suggest__title{width:',
                        __$ctx.ctx.titleWidth,
                        'px;}'
                    ];
                    return;
                } else if (__t === 'attrs') {
                    return { type: 'text/css' };
                    return;
                } else if (__t === 'bem') {
                    return false;
                    return;
                } else if (__t === 'tag') {
                    return 'style';
                    return;
                } else {
                    return $469(__$ctx);
                }
            } else if (__t === 'group') {
                var __t = $$mode;
                if (__t === 'default') {
                    return $439(__$ctx);
                } else if (__t === 'attrs') {
                    return {
                        role: 'group',
                        'aria-labelledby': __$ctx._titleId
                    };
                    return;
                } else {
                    return $469(__$ctx);
                }
            } else if (__t === 'items') {
                if ($$mode === 'tag') {
                    return 'ul';
                    return;
                } else {
                    return $469(__$ctx);
                }
            } else if (__t === 'title-hidden') {
                var __t = $$mode;
                if (__t === 'mix') {
                    return [{ block: 'a11y-hidden' }];
                    return;
                } else if (__t === 'tag') {
                    return 'span';
                    return;
                } else {
                    return $469(__$ctx);
                }
            } else if (__t === 'title') {
                var __t = $$mode;
                if (__t === 'content') {
                    return [
                        {
                            elem: 'title-hidden',
                            content: BEM.I18N('suggest', 'group')
                        },
                        __$ctx.ctx.content
                    ];
                    return;
                } else if (__t === 'attrs') {
                    return { id: __$ctx._titleId };
                    return;
                } else if (__t === 'tag') {
                    return 'span';
                    return;
                } else {
                    return $469(__$ctx);
                }
            } else {
                return $469(__$ctx);
            }
        } else if (__t === 'b-page') {
            if ($$mode === 'js-params') {
                if (!!$$elem === false) {
                    return $480(__$ctx);
                } else {
                    return $525(__$ctx);
                }
            } else {
                return $525(__$ctx);
            }
        } else if (__t === 'i-global') {
            var __t = $$mode;
            if (__t === 'public-params') {
                return $486(__$ctx);
            } else if (__t === 'default') {
                return $491(__$ctx);
            } else if (__t === 'env') {
                return $518(__$ctx);
            } else {
                return $525(__$ctx);
            }
        } else {
            return $525(__$ctx);
        }
    }
    function $8(__$ctx) {
        if (!!__$ctx._popupDefaults === false) {
            if (!!$$elem === false) {
                return $11(__$ctx);
            } else {
                return $16(__$ctx);
            }
        } else {
            return $16(__$ctx);
        }
    }
    function $11(__$ctx) {
        var _$683ctx = __$ctx.ctx;
        _$683ctx.mods = $$mods = __$ctx.extend({
            theme: 'ffffff',
            autoclosable: 'yes',
            adaptive: 'yes',
            animate: 'yes'
        }, $$mods);
        if (_$683ctx.zIndex) {
            var _$683attrs = _$683ctx.attrs || (_$683ctx.attrs = {});
            _$683attrs.style = (_$683attrs.style || '') + ';z-index:' + _$683ctx.zIndex + ';';
        } else {
            undefined;
        }
        {
            '';
            var __r0 = __$ctx._popupDefaults;
            __$ctx._popupDefaults = true;
            $8(__$ctx);
            __$ctx._popupDefaults = __r0;
            '';
        }
        undefined;
        return;
    }
    function $16(__$ctx) {
        if (!($$mode === '' && __$ctx._popupDefaults) === false) {
            delete __$ctx._popupDefaults;
            applyc(__$ctx);
            undefined;
            return;
        } else {
            return $525(__$ctx);
        }
    }
    function $33(__$ctx) {
        if (!(__$ctx['__$anflg833'] !== true) === false) {
            if (!($$mods && $$mods.type === 'icon') === false) {
                if (!!$$elem === false) {
                    return $37(__$ctx);
                } else {
                    return $42(__$ctx);
                }
            } else {
                return $42(__$ctx);
            }
        } else {
            return $42(__$ctx);
        }
    }
    function $37(__$ctx) {
        var __r12, __r0, __r1, __r4, __r5, __r10, __r11, __r13, __r2, __r3, __r6, __r7, __r8, __r9;
        return '', __r0 = __$ctx['__$anflg833'], __$ctx['__$anflg833'] = true, __r13 = ('', __r1 = $$mode, $$mode = 'wrap-jump', __r4 = __$ctx.ctx, __r5 = __r4.text, __r4.text = ('', __r2 = $$mode, $$mode = 'text', __r3 = $189(__$ctx), $$mode = __r2, '', __r3), __r10 = __$ctx.ctx, __r11 = __r10.answer, __r10.answer = {
            elem: 'hint',
            content: [
                ('', __r6 = $$mode, $$mode = 'icon', __r7 = $243(__$ctx), $$mode = __r6, '', __r7),
                ('', __r8 = $$mode, $$mode = 'value', __r9 = $229(__$ctx), $$mode = __r8, '', __r9)
            ]
        }, __r12 = $365(__$ctx), $$mode = __r1, __r4.text = __r5, __r10.answer = __r11, '', __r12), __$ctx['__$anflg833'] = __r0, '', __r13;
        return;
    }
    function $42(__$ctx) {
        if (!($$mods && $$mods.type === 'icon') === false) {
            if (!!$$elem === false) {
                return $45(__$ctx);
            } else {
                return $48(__$ctx);
            }
        } else {
            return $48(__$ctx);
        }
    }
    function $45(__$ctx) {
        var __r0, __r1, __r2, __r3, __r4, __r5;
        return [
            ('', __r0 = $$mode, $$mode = 'text', __r1 = $189(__$ctx), $$mode = __r0, '', __r1),
            ('', __r2 = $$mode, $$mode = 'icon', __r3 = $243(__$ctx), $$mode = __r2, '', __r3),
            ('', __r4 = $$mode, $$mode = 'value', __r5 = $229(__$ctx), $$mode = __r4, '', __r5)
        ];
        return;
    }
    function $48(__$ctx) {
        if (!(__$ctx['__$anflg831'] !== true) === false) {
            if (!($$mods && $$mods.type === 'weather') === false) {
                if (!!$$elem === false) {
                    return $52(__$ctx);
                } else {
                    return $57(__$ctx);
                }
            } else {
                return $57(__$ctx);
            }
        } else {
            return $57(__$ctx);
        }
    }
    function $52(__$ctx) {
        var __r9, __r0, __r1, __r4, __r5, __r8, __r11, __r10, __r2, __r3, __r6, __r7;
        return '', __r0 = __$ctx['__$anflg831'], __$ctx['__$anflg831'] = true, __r11 = ('', __r1 = $$mode, $$mode = 'wrap-ellipsis', __r4 = __$ctx.ctx, __r5 = __r4.text, __r4.text = ('', __r2 = $$mode, $$mode = 'text', __r3 = $188(__$ctx), $$mode = __r2, '', __r3), __r8 = __$ctx.ctx, __r9 = __r8.answer, __r8.answer = ('', __r6 = $$mode, $$mode = 'answer', __r7 = $315(__$ctx), $$mode = __r6, '', __r7), __r10 = $360(__$ctx), $$mode = __r1, __r4.text = __r5, __r8.answer = __r9, '', __r10), __$ctx['__$anflg831'] = __r0, '', __r11;
        return;
    }
    function $57(__$ctx) {
        if (!($$mods && $$mods.type === 'weather') === false) {
            if (!!$$elem === false) {
                var __r0, __r1, __r2, __r3;
                return [
                    ('', __r0 = $$mode, $$mode = 'text', __r1 = $188(__$ctx), $$mode = __r0, '', __r1),
                    ('', __r2 = $$mode, $$mode = 'answer', __r3 = $315(__$ctx), $$mode = __r2, '', __r3)
                ];
                return;
            } else {
                return $63(__$ctx);
            }
        } else {
            return $63(__$ctx);
        }
    }
    function $63(__$ctx) {
        if (!(__$ctx['__$anflg830'] !== true) === false) {
            if (!($$mods && $$mods.type === 'traffic') === false) {
                if (!!$$elem === false) {
                    return $67(__$ctx);
                } else {
                    return $72(__$ctx);
                }
            } else {
                return $72(__$ctx);
            }
        } else {
            return $72(__$ctx);
        }
    }
    function $67(__$ctx) {
        var __r0, __r9, __r1, __r2, __r3, __r6, __r7, __r8, __r4, __r5;
        return '', __r0 = __$ctx['__$anflg830'], __$ctx['__$anflg830'] = true, __r9 = ('', __r1 = $$mode, $$mode = 'wrap-ellipsis', __r2 = __$ctx.ctx, __r3 = __r2.text, __r2.text = __$ctx.ctx.data[1], __r6 = __$ctx.ctx, __r7 = __r6.answer, __r6.answer = ('', __r4 = $$mode, $$mode = 'answer', __r5 = $312(__$ctx), $$mode = __r4, '', __r5), __r8 = $360(__$ctx), $$mode = __r1, __r2.text = __r3, __r6.answer = __r7, '', __r8), __$ctx['__$anflg830'] = __r0, '', __r9;
        return;
    }
    function $72(__$ctx) {
        if (!($$mods && $$mods.type === 'traffic') === false) {
            if (!!$$elem === false) {
                var __r0, __r1, __r2, __r3;
                return [
                    ('', __r0 = $$mode, $$mode = 'text', __r1 = $188(__$ctx), $$mode = __r0, '', __r1),
                    ('', __r2 = $$mode, $$mode = 'answer', __r3 = $312(__$ctx), $$mode = __r2, '', __r3)
                ];
                return;
            } else {
                return $78(__$ctx);
            }
        } else {
            return $78(__$ctx);
        }
    }
    function $78(__$ctx) {
        if (!(__$ctx['__$anflg829'] !== true) === false) {
            if (!($$mods && $$mods.type === 'text') === false) {
                if (!!$$elem === false) {
                    return $82(__$ctx);
                } else {
                    return $87(__$ctx);
                }
            } else {
                return $87(__$ctx);
            }
        } else {
            return $87(__$ctx);
        }
    }
    function $82(__$ctx) {
        var __r0, __r7, __r1, __r4, __r5, __r6, __r2, __r3;
        return '', __r0 = __$ctx['__$anflg829'], __$ctx['__$anflg829'] = true, __r7 = ('', __r1 = $$mode, $$mode = 'wrap', __r4 = __$ctx.ctx, __r5 = __r4.text, __r4.text = ('', __r2 = $$mode, $$mode = 'text', __r3 = $188(__$ctx), $$mode = __r2, '', __r3), __r6 = $375(__$ctx), $$mode = __r1, __r4.text = __r5, '', __r6), __$ctx['__$anflg829'] = __r0, '', __r7;
        return;
    }
    function $87(__$ctx) {
        if (!($$mods && $$mods.type === 'text') === false) {
            if (!!$$elem === false) {
                var __r0, __r1;
                return '', __r0 = $$mode, $$mode = 'text', __r1 = $188(__$ctx), $$mode = __r0, '', __r1;
                return;
            } else {
                return $93(__$ctx);
            }
        } else {
            return $93(__$ctx);
        }
    }
    function $93(__$ctx) {
        if (!(__$ctx['__$anflg825'] !== true) === false) {
            if (!($$mods && $$mods.type === 'nav') === false) {
                if (!!$$elem === false) {
                    return $97(__$ctx);
                } else {
                    return $102(__$ctx);
                }
            } else {
                return $102(__$ctx);
            }
        } else {
            return $102(__$ctx);
        }
    }
    function $97(__$ctx) {
        var __r0, __r9, __r1, __r4, __r5, __r6, __r7, __r8, __r2, __r3;
        return '', __r0 = __$ctx['__$anflg825'], __$ctx['__$anflg825'] = true, __r9 = ('', __r1 = $$mode, $$mode = 'wrap', __r4 = __$ctx.ctx, __r5 = __r4.text, __r4.text = ('', __r2 = $$mode, $$mode = 'link', __r3 = $353(__$ctx), $$mode = __r2, '', __r3), __r6 = __$ctx.ctx, __r7 = __r6.answer, __r6.answer = {
            elem: 'hint',
            content: __$ctx.ctx.data[2]
        }, __r8 = $375(__$ctx), $$mode = __r1, __r4.text = __r5, __r6.answer = __r7, '', __r8), __$ctx['__$anflg825'] = __r0, '', __r9;
        return;
    }
    function $102(__$ctx) {
        if (!($$mods && $$mods.type === 'nav') === false) {
            if (!!$$elem === false) {
                var __r0, __r1;
                return [
                    ('', __r0 = $$mode, $$mode = 'link', __r1 = $353(__$ctx), $$mode = __r0, '', __r1),
                    {
                        elem: 'answer',
                        content: [
                            '&nbsp;&mdash;&nbsp;',
                            {
                                elem: 'text',
                                content: __$ctx.ctx.data[2]
                            }
                        ]
                    }
                ];
                return;
            } else {
                return $108(__$ctx);
            }
        } else {
            return $108(__$ctx);
        }
    }
    function $108(__$ctx) {
        if (!(__$ctx['__$anflg823'] !== true) === false) {
            if (!($$mods && $$mods.type === 'fact') === false) {
                if (!!$$elem === false) {
                    return $112(__$ctx);
                } else {
                    return $117(__$ctx);
                }
            } else {
                return $117(__$ctx);
            }
        } else {
            return $117(__$ctx);
        }
    }
    function $112(__$ctx) {
        var __r9, __r0, __r1, __r4, __r5, __r8, __r11, __r10, __r2, __r3, __r6, __r7;
        return '', __r0 = __$ctx['__$anflg823'], __$ctx['__$anflg823'] = true, __r11 = ('', __r1 = $$mode, $$mode = 'wrap-jump', __r4 = __$ctx.ctx, __r5 = __r4.text, __r4.text = ('', __r2 = $$mode, $$mode = 'text', __r3 = $188(__$ctx), $$mode = __r2, '', __r3), __r8 = __$ctx.ctx, __r9 = __r8.answer, __r8.answer = ('', __r6 = $$mode, $$mode = 'answer', __r7 = $312(__$ctx), $$mode = __r6, '', __r7), __r10 = $365(__$ctx), $$mode = __r1, __r4.text = __r5, __r8.answer = __r9, '', __r10), __$ctx['__$anflg823'] = __r0, '', __r11;
        return;
    }
    function $117(__$ctx) {
        if (!($$mods && $$mods.type === 'fact') === false) {
            if (!!$$elem === false) {
                var __r0, __r1, __r2, __r3;
                return [
                    ('', __r0 = $$mode, $$mode = 'text', __r1 = $188(__$ctx), $$mode = __r0, '', __r1),
                    ('', __r2 = $$mode, $$mode = 'answer', __r3 = $312(__$ctx), $$mode = __r2, '', __r3)
                ];
                return;
            } else {
                return $123(__$ctx);
            }
        } else {
            return $123(__$ctx);
        }
    }
    function $123(__$ctx) {
        if ($$elem === 'hint') {
            return __$ctx.isArray(__$ctx.ctx.content) ? __$ctx.ctx.content : __$ctx.xmlEscape(__$ctx.ctx.content);
            return;
        } else {
            if (!(__$ctx['__$anflg822'] !== true) === false) {
                if (!!$$elem === false) {
                    var __r0, __r3, __r1, __r2;
                    return '', __r0 = __$ctx['__$anflg822'], __$ctx['__$anflg822'] = true, __r3 = ('', __r1 = $$mode, $$mode = 'wrap', __r2 = $375(__$ctx), $$mode = __r1, '', __r2), __$ctx['__$anflg822'] = __r0, '', __r3;
                    return;
                } else {
                    return $132(__$ctx);
                }
            } else {
                return $132(__$ctx);
            }
        }
    }
    function $132(__$ctx) {
        var __t = $$elem;
        if (__t === 'value' || __t === 'text' || __t === 'hint') {
            return __$ctx.xmlEscape(__$ctx.ctx.content);
            return;
        } else {
            return $525(__$ctx);
        }
    }
    function $153(__$ctx) {
        if (!($$mods && $$mods.type === 'nav') === false) {
            if (!!$$elem === false) {
                return [{ mods: { nav: 'yes' } }];
                return;
            } else {
                return $159(__$ctx);
            }
        } else {
            return $159(__$ctx);
        }
    }
    function $159(__$ctx) {
        if (!!$$elem === false) {
            var _$66fmix = __$ctx.ctx.mix || [];
            _$66fmix.push({
                block: 'i-pressed-controller',
                js: true
            });
            __$ctx.isFirst() && _$66fmix.push({ elemMods: { pos: 'first' } });
            __$ctx.isLast() && _$66fmix.push({ elemMods: { pos: 'last' } });
            __$ctx.ctx.pers && _$66fmix.push({ elemMods: { pers: 'yes' } });
            return _$66fmix;
            return;
        } else {
            return $525(__$ctx);
        }
    }
    function $188(__$ctx) {
        if (!($$mods && $$mods.type === 'icon') === false) {
            return $189(__$ctx);
        } else {
            return $200(__$ctx);
        }
    }
    function $189(__$ctx) {
        if (!__$ctx._url === false) {
            if (!!$$elem === false) {
                return {
                    block: 'suggest-item',
                    elem: 'link',
                    url: __$ctx._url,
                    content: __$ctx._text
                };
                return;
            } else {
                return $195(__$ctx);
            }
        } else {
            return $195(__$ctx);
        }
    }
    function $195(__$ctx) {
        if (!!$$elem === false) {
            return {
                elem: 'text',
                content: __$ctx._text
            };
            return;
        } else {
            return $200(__$ctx);
        }
    }
    function $200(__$ctx) {
        if (!($$mods && $$mods.type === 'weather') === false) {
            if (!!$$elem === false) {
                return __$ctx.ctx.data[1];
                return;
            } else {
                return $206(__$ctx);
            }
        } else {
            return $206(__$ctx);
        }
    }
    function $206(__$ctx) {
        if (!($$mods && $$mods.type === 'traffic') === false) {
            if (!!$$elem === false) {
                return {
                    elem: 'text',
                    content: __$ctx.ctx.data[1]
                };
                return;
            } else {
                return $212(__$ctx);
            }
        } else {
            return $212(__$ctx);
        }
    }
    function $212(__$ctx) {
        if (!($$mods && $$mods.type === 'text') === false) {
            if (!!$$elem === false) {
                return {
                    elem: 'text',
                    content: __$ctx._.isArray(__$ctx.ctx.data) ? __$ctx.ctx.data[1] : __$ctx.ctx.data
                };
                return;
            } else {
                return $218(__$ctx);
            }
        } else {
            return $218(__$ctx);
        }
    }
    function $218(__$ctx) {
        if (!($$mods && $$mods.type === 'fact') === false) {
            if (!!$$elem === false) {
                return {
                    elem: 'text',
                    content: __$ctx.ctx.data[1]
                };
                return;
            } else {
                return $525(__$ctx);
            }
        } else {
            return $525(__$ctx);
        }
    }
    function $226(__$ctx) {
        if (!($$mods && $$mods.type === 'icon') === false) {
            if (!!$$elem === false) {
                return $229(__$ctx);
            } else {
                return $232(__$ctx);
            }
        } else {
            return $232(__$ctx);
        }
    }
    function $229(__$ctx) {
        return {
            elem: 'value',
            content: __$ctx.xmlEscape(__$ctx._fact)
        };
        return;
    }
    function $232(__$ctx) {
        if (!($$mods && $$mods.type === 'weather') === false) {
            if (!!$$elem === false) {
                return {
                    elem: 'value',
                    content: __$ctx.ctx.data[2]
                };
                return;
            } else {
                return $525(__$ctx);
            }
        } else {
            return $525(__$ctx);
        }
    }
    function $240(__$ctx) {
        if (!($$mods && $$mods.type === 'icon') === false) {
            if (!!$$elem === false) {
                return $243(__$ctx);
            } else {
                return $246(__$ctx);
            }
        } else {
            return $246(__$ctx);
        }
    }
    function $243(__$ctx) {
        return {
            elem: 'icon',
            mods: { type: 'favicon' },
            svg: __$ctx._icons.svg,
            png: __$ctx._icons.png
        };
        return;
    }
    function $246(__$ctx) {
        if (!($$mods && $$mods.type === 'weather') === false) {
            if (!!$$elem === false) {
                return {
                    elem: 'icon',
                    elemMods: { weather: __$ctx.ctx.data[3].replace('-', 'minus-').replace('+', 'plus-').replace(/_/g, '-') }
                };
                return;
            } else {
                return $525(__$ctx);
            }
        } else {
            return $525(__$ctx);
        }
    }
    function $263(__$ctx) {
        if (!($$mods && $$mods.type === 'nav') === false) {
            if (!!$$elem === false) {
                return { val: __$ctx._url };
                return;
            } else {
                return $269(__$ctx);
            }
        } else {
            return $269(__$ctx);
        }
    }
    function $269(__$ctx) {
        if (!!$$elem === false) {
            return true;
            return;
        } else {
            if (!__$ctx.ctx.pers === false) {
                if (!!$$elem === false) {
                    return { pers: 1 };
                    return;
                } else {
                    return $278(__$ctx);
                }
            } else {
                return $278(__$ctx);
            }
        }
    }
    function $278(__$ctx) {
        if (!__$ctx.ctx['search_cgi'] === false) {
            if (!!$$elem === false) {
                return { cgi: __$ctx.ctx['search_cgi'] };
                return;
            } else {
                return $525(__$ctx);
            }
        } else {
            return $525(__$ctx);
        }
    }
    function $286(__$ctx) {
        if (!(__$ctx['__$anflg832'] !== true) === false) {
            if (!($$mods && $$mods.type === 'icon') === false) {
                if (!!$$elem === false) {
                    return $290(__$ctx);
                } else {
                    return $295(__$ctx);
                }
            } else {
                return $295(__$ctx);
            }
        } else {
            return $295(__$ctx);
        }
    }
    function $290(__$ctx) {
        if (!Array.isArray(__$ctx.ctx.data)) {
            return undefined;
        } else {
            undefined;
        }
        var _$67mdata = __$ctx.ctx.data.slice(1), _$67minfo = _$67mdata[1] || {};
        if (!_$67minfo.icon) {
            return undefined;
        } else {
            undefined;
        }
        var _$67micons = {};
        if (Array.isArray(_$67minfo.icon[0])) {
            _$67minfo.icon.forEach(function (icon) {
                _$67micons[icon[0]] = icon[1];
            });
        } else {
            _$67micons[_$67minfo.icon[0]] = _$67minfo.icon[1];
        }
        if (_$67minfo.url) {
            __$ctx._url = (/[\/]{2}/.test(_$67minfo.url) ? '' : 'http://') + _$67minfo.url;
        } else {
            undefined;
        }
        {
            '';
            var __r0 = __$ctx['__$anflg832'];
            __$ctx['__$anflg832'] = true;
            {
                '';
                var __r1 = __$ctx._text;
                __$ctx._text = __$ctx.xmlEscape(_$67mdata[0]) || '';
                var __r2 = __$ctx._icons;
                __$ctx._icons = _$67micons;
                var __r3 = __$ctx._fact;
                __$ctx._fact = _$67minfo.fact || '';
                $286(__$ctx);
                __$ctx._text = __r1;
                __$ctx._icons = __r2;
                __$ctx._fact = __r3;
                '';
            }
            __$ctx['__$anflg832'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $295(__$ctx) {
        if ($$elem === 'link') {
            if (!(__$ctx['__$anflg828'] !== true) === false) {
                return $298(__$ctx);
            } else {
                return $301(__$ctx);
            }
        } else {
            return $301(__$ctx);
        }
    }
    function $298(__$ctx) {
        var __r0, __r4, __r1, __r2, __r3;
        return '', __r0 = __$ctx['__$anflg828'], __$ctx['__$anflg828'] = true, __r4 = ('', __r1 = __$ctx.ctx, __$ctx.ctx = {
            block: 'link',
            url: __$ctx.ctx.url,
            target: '_blank',
            mix: {
                block: $$block,
                elem: $$elem
            },
            content: __$ctx.ctx.content
        }, __r2 = $$mode, $$mode = '', __r3 = $526(__$ctx), __$ctx.ctx = __r1, $$mode = __r2, '', __r3), __$ctx['__$anflg828'] = __r0, '', __r4;
        return;
    }
    function $301(__$ctx) {
        if (!(__$ctx['__$anflg824'] !== true) === false) {
            if (!($$mods && $$mods.type === 'nav') === false) {
                if (!!$$elem === false) {
                    var _$66qurl = __$ctx.ctx.data[4];
                    {
                        '';
                        var __r0 = __$ctx['__$anflg824'];
                        __$ctx['__$anflg824'] = true;
                        {
                            '';
                            var __r1 = __$ctx._url;
                            __$ctx._url = (_$66qurl.match(/^\w[\w-]*:\/\//g) ? '' : 'http://') + _$66qurl;
                            $286(__$ctx);
                            __$ctx._url = __r1;
                            '';
                        }
                        __$ctx['__$anflg824'] = __r0;
                        '';
                    }
                    undefined;
                    return;
                } else {
                    return $525(__$ctx);
                }
            } else {
                return $525(__$ctx);
            }
        } else {
            return $525(__$ctx);
        }
    }
    function $312(__$ctx) {
        if (!($$mods && $$mods.type === 'weather') === false) {
            if (!!$$elem === false) {
                return $315(__$ctx);
            } else {
                return $318(__$ctx);
            }
        } else {
            return $318(__$ctx);
        }
    }
    function $315(__$ctx) {
        var __r0, __r1, __r2, __r3;
        return {
            elem: 'answer',
            content: [
                ('', __r0 = $$mode, $$mode = 'value', __r1 = $226(__$ctx), $$mode = __r0, '', __r1),
                ('', __r2 = $$mode, $$mode = 'icon', __r3 = $240(__$ctx), $$mode = __r2, '', __r3)
            ]
        };
        return;
    }
    function $318(__$ctx) {
        if (!($$mods && $$mods.type === 'traffic') === false) {
            if (!!$$elem === false) {
                return {
                    elem: 'answer',
                    content: [
                        {
                            elem: 'icon',
                            elemMods: { traffic: __$ctx.ctx.data[3] }
                        },
                        {
                            elem: 'value',
                            content: __$ctx.ctx.data[2]
                        }
                    ]
                };
                return;
            } else {
                return $324(__$ctx);
            }
        } else {
            return $324(__$ctx);
        }
    }
    function $324(__$ctx) {
        if (!($$mods && $$mods.type === 'fact') === false) {
            if (!!$$elem === false) {
                return {
                    elem: 'answer',
                    content: [{
                            elem: 'hint',
                            content: __$ctx.ctx.data[2]
                        }]
                };
                return;
            } else {
                return $525(__$ctx);
            }
        } else {
            return $525(__$ctx);
        }
    }
    function $342(__$ctx) {
        return __$ctx.ctx.svg ? 'background-image:none,url("' + __$ctx.ctx.svg + '")' : '';
        return;
    }
    function $347(__$ctx) {
        return __$ctx.ctx.png ? 'background-image:url("' + __$ctx.ctx.png + '");' : '';
        return;
    }
    function $353(__$ctx) {
        return {
            elem: 'link',
            url: __$ctx._url,
            content: __$ctx.ctx.data[3]
        };
        return;
    }
    function $360(__$ctx) {
        var __r0, __r1, __r2, __r3;
        return '', __r0 = $$mode, $$mode = 'wrap-column', __r1 = __$ctx.ctx, __r2 = __r1.column, __r1.column = 'ellipsis', __r3 = $370(__$ctx), $$mode = __r0, __r1.column = __r2, '', __r3;
        return;
    }
    function $365(__$ctx) {
        var __r0, __r1, __r2, __r3;
        return '', __r0 = $$mode, $$mode = 'wrap-column', __r1 = __$ctx.ctx, __r2 = __r1.column, __r1.column = 'jump', __r3 = $370(__$ctx), $$mode = __r0, __r1.column = __r2, '', __r3;
        return;
    }
    function $370(__$ctx) {
        return {
            elem: 'wrapper',
            elemMods: { column: __$ctx.ctx.column },
            text: __$ctx.ctx.text,
            answer: __$ctx.ctx.answer
        };
        return;
    }
    function $375(__$ctx) {
        return {
            elem: 'wrapper',
            content: __$ctx.ctx.text
        };
        return;
    }
    function $383(__$ctx) {
        var __r0, __r1, __r2, __r3;
        if (!__$ctx.ctx) {
            return '';
        } else {
            undefined;
        }
        var _$67vctx = __$ctx.ctx, _$67vkeyset = _$67vctx.keyset, _$67vkey = _$67vctx.key, _$67vparams = _$67vctx.params || {};
        if (!(_$67vkeyset || _$67vkey)) {
            return '';
        } else {
            undefined;
        }
        if (_$67vctx.content) {
            var _$67vcnt;
            _$67vparams.content = (_$67vcnt = [], '', __r0 = __$ctx._buf, __$ctx._buf = _$67vcnt, __r1 = $$mode, $$mode = '', __r2 = __$ctx.ctx, __$ctx.ctx = _$67vctx.content, __r3 = $526(__$ctx), __$ctx._buf = __r0, $$mode = __r1, __$ctx.ctx = __r2, '', __r3, _$67vcnt.join(''));
        } else {
            undefined;
        }
        __$ctx._buf.push(BEM.I18N(_$67vkeyset, _$67vkey, _$67vparams));
        return;
    }
    function $389(__$ctx) {
        if (!(__$ctx['__$anflg827'] !== true) === false) {
            if (!!$$elem === false) {
                var __r0, __r1;
                var _$671mix = ('', __r0 = __$ctx['__$anflg827'], __$ctx['__$anflg827'] = true, __r1 = $389(__$ctx), __$ctx['__$anflg827'] = __r0, '', __r1) || [];
                _$671mix.push({
                    block: 'i-pressed-controller',
                    js: true
                });
                return _$671mix;
                return;
            } else {
                return $525(__$ctx);
            }
        } else {
            return $525(__$ctx);
        }
    }
    function $405(__$ctx) {
        if (!(__$ctx['__$anflg826'] !== true) === false) {
            if (!($$mods && $$mods.disabled === 'yes') === false) {
                if (!!$$elem === false) {
                    var __r0, __r1;
                    var _$66zattrs = ('', __r0 = __$ctx['__$anflg826'], __$ctx['__$anflg826'] = true, __r1 = $405(__$ctx), __$ctx['__$anflg826'] = __r0, '', __r1) || {};
                    _$66zattrs.tabindex = -1;
                    _$66zattrs['aria-disabled'] = true;
                    return _$66zattrs;
                    return;
                } else {
                    return $414(__$ctx);
                }
            } else {
                return $414(__$ctx);
            }
        } else {
            return $414(__$ctx);
        }
    }
    function $414(__$ctx) {
        if (!!$$elem === false) {
            return $416(__$ctx);
        } else {
            return $525(__$ctx);
        }
    }
    function $416(__$ctx) {
        var _$66yctx = __$ctx.ctx, _$66yattrs = {};
        [
            'title',
            'target',
            'id',
            'tabindex'
        ].forEach(function (param) {
            if (_$66yctx.hasOwnProperty(param)) {
                _$66yattrs[param] = String(_$66yctx[param]);
            } else {
                undefined;
            }
        });
        if (_$66yctx.url !== null && typeof _$66yctx.url !== 'undefined') {
            if (__$ctx.isSimple(_$66yctx.url)) {
                _$66yattrs.href = String(_$66yctx.url);
            } else {
                var _$66ybuf = [];
                {
                    '';
                    var __r0 = $$mode;
                    $$mode = '';
                    var __r1 = __$ctx._buf;
                    __$ctx._buf = _$66ybuf;
                    var __r2 = __$ctx.ctx;
                    __$ctx.ctx = _$66yctx.url;
                    $526(__$ctx);
                    $$mode = __r0;
                    __$ctx._buf = __r1;
                    __$ctx.ctx = __r2;
                    '';
                }
                undefined;
                _$66yattrs.href = _$66ybuf.join('');
            }
        } else {
            _$66yattrs.role = 'button';
            if (!_$66yattrs.tabindex) {
                _$66yattrs.tabindex = '0';
            } else {
                undefined;
            }
        }
        return _$66yattrs;
        return;
    }
    function $439(__$ctx) {
        if (!(__$ctx['__$anflg821'] !== true) === false) {
            {
                '';
                var __r0 = __$ctx['__$anflg821'];
                __$ctx['__$anflg821'] = true;
                {
                    '';
                    var __r1 = __$ctx._titleId;
                    __$ctx._titleId = __$ctx.generateId();
                    $439(__$ctx);
                    __$ctx._titleId = __r1;
                    '';
                }
                __$ctx['__$anflg821'] = __r0;
                '';
            }
            undefined;
            return;
        } else {
            return $469(__$ctx);
        }
    }
    function $469(__$ctx) {
        if ($$mode === 'js') {
            if (!!$$elem === false) {
                return true;
                return;
            } else {
                return $525(__$ctx);
            }
        } else {
            return $525(__$ctx);
        }
    }
    function $480(__$ctx) {
        var __r0, __r1, __r2, __r3;
        var _$65m_this = __$ctx['i-global'], _$65mjs = {}, _$65mblock = {
                block: 'i-global',
                js: _$65mjs
            }, _$65me;
        for (_$65me in _$65m_this) {
            if (_$65m_this.hasOwnProperty(_$65me) && ('', __r0 = $$mode, $$mode = 'public-params', __r1 = $$block, $$block = 'i-global', __r2 = $$elem, $$elem = _$65me, __r3 = $486(__$ctx), $$mode = __r0, $$block = __r1, $$elem = __r2, '', __r3)) {
                _$65mjs[_$65me] = _$65m_this[_$65me];
            } else {
                undefined;
            }
        }
        return _$65mblock;
        return;
    }
    function $486(__$ctx) {
        if (!$$elem === false) {
            return {
                id: 1,
                lang: 1,
                tld: 1,
                'content-region': 1,
                'user-region': 1,
                login: 1,
                displayName: 1,
                index: 1,
                yandexuid: 1,
                'passport-host': 1,
                'pass-host': 1,
                'passport-msg': 1,
                'static-host': 1,
                'lego-static-host': 1,
                'social-host': 1,
                clck: 1,
                'click-host': 1,
                'export-host': 1,
                'i-host': 1,
                'social-retpath': 1,
                'lego-path': 1,
                sid: 1,
                retpath: 1,
                uid: 1
            }[$$elem] || false;
            return;
        } else {
            return $525(__$ctx);
        }
    }
    function $491(__$ctx) {
        var __t = $$elem;
        if (__t === 'lego-static-host') {
            return '//yastatic.net/lego/2.10-142';
            return;
        } else if (__t === 'export-host') {
            return '//export.yandex.ru';
            return;
        } else if (__t === 'social-host') {
            return '//social.yandex.ru';
            return;
        } else if (__t === 'pass-host') {
            return '//pass.yandex.ru';
            return;
        } else if (__t === 'passport-host') {
            return 'https://passport.yandex.ru';
            return;
        } else if (__t === 'click-host') {
            return '//clck.yandex.ru';
            return;
        } else if (__t === 'content-region' || __t === 'tld' || __t === 'lang') {
            return 'ru';
            return;
        } else {
            if (!$$elem === false) {
                return '';
                return;
            } else {
                if (!!$$elem === false) {
                    return $515(__$ctx);
                } else {
                    return $525(__$ctx);
                }
            }
        }
    }
    function $515(__$ctx) {
        var _$65aparams = __$ctx.ctx.params || {}, _$65aiGlobal = __$ctx['i-global'], _$65aisTldChanged = _$65aparams.tld && _$65aparams.tld !== _$65aiGlobal.tld, _$65atld, _$65axYaDomain, _$65ayaDomain;
        if (_$65aisTldChanged) {
            _$65atld = _$65aparams.tld;
            _$65axYaDomain = _$65atld === 'tr' ? 'yandex.com.tr' : 'yandex.' + _$65atld;
            _$65ayaDomain = [
                'ua',
                'by',
                'kz'
            ].indexOf(_$65atld) != -1 ? 'yandex.ru' : _$65axYaDomain;
            _$65aiGlobal['content-region'] = _$65atld;
            _$65aiGlobal['click-host'] = '//clck.' + _$65ayaDomain;
            _$65aiGlobal['passport-host'] = 'https://passport.' + _$65ayaDomain;
            _$65aiGlobal['pass-host'] = '//pass.' + _$65axYaDomain;
            _$65aiGlobal['social-host'] = '//social.' + _$65axYaDomain;
            _$65aiGlobal['export-host'] = '//export.' + _$65axYaDomain;
        } else {
            undefined;
        }
        for (var _$65ap in _$65aparams) {
            _$65aiGlobal[_$65ap] = _$65aparams[_$65ap];
        }
        return;
    }
    function $518(__$ctx) {
        if (!!$$elem === false) {
            return {};
            return;
        } else {
            return $525(__$ctx);
        }
    }
    function $525(__$ctx) {
        if ($$mode === '') {
            return $526(__$ctx);
        } else {
            return $531(__$ctx);
        }
    }
    function $526(__$ctx) {
        if (!!__$ctx['i-global'] === false) {
            return $528(__$ctx);
        } else {
            return $531(__$ctx);
        }
    }
    function $528(__$ctx) {
        var __r0, __r1, __r2, __r3, __r4, __r5, __r6;
        var _$658ps = {}, _$658es = [
                'lang',
                'tld',
                'content-region',
                'click-host',
                'passport-host',
                'pass-host',
                'social-host',
                'export-host',
                'login',
                'lego-static-host'
            ], _$658e;
        while (_$658e = _$658es.shift()) {
            _$658ps[_$658e] = ('', __r0 = $$mode, $$mode = 'default', __r1 = $$block, $$block = 'i-global', __r2 = $$elem, $$elem = _$658e, __r3 = $491(__$ctx), $$mode = __r0, $$block = __r1, $$elem = __r2, '', __r3);
        }
        __$ctx['i-global'] = __$ctx._.extend(_$658ps, ('', __r4 = $$mode, $$mode = 'env', __r5 = $$block, $$block = 'i-global', __r6 = $518(__$ctx), $$mode = __r4, $$block = __r5, '', __r6));
        applyc(__$ctx);
        undefined;
        return;
    }
    function $531(__$ctx) {
        var __t = $$block;
        if (__t === 'i-ua') {
            var __t = $$mode;
            if (__t === 'content') {
                return $533(__$ctx);
            } else if (__t === 'bem') {
                if (!!$$elem === false) {
                    return false;
                    return;
                } else {
                    return $640(__$ctx);
                }
            } else if (__t === 'tag') {
                if (!!$$elem === false) {
                    return 'script';
                    return;
                } else {
                    return $640(__$ctx);
                }
            } else {
                return $640(__$ctx);
            }
        } else if (__t === 'input') {
            var __t = $$mode;
            if (__t === 'content') {
                var __t = $$elem;
                if (__t === 'clear') {
                    if (!!__$ctx.ctx.content === false) {
                        return '';
                        return;
                    } else {
                        return $640(__$ctx);
                    }
                } else if (__t === 'ahead') {
                    return [
                        { elem: 'ahead-filler' },
                        { elem: 'ahead-hint' }
                    ];
                    return;
                } else {
                    return $640(__$ctx);
                }
            } else if (__t === 'tag') {
                var __t = $$elem;
                if (__t === 'clear') {
                    return 'a';
                    return;
                } else if (__t === 'control') {
                    return 'input';
                    return;
                } else if (__t === 'ahead-hint' || __t === 'ahead-filler') {
                    return 'span';
                    return;
                } else {
                    if (!!$$elem === false) {
                        return 'span';
                        return;
                    } else {
                        return $640(__$ctx);
                    }
                }
            } else if (__t === 'attrs') {
                var __t = $$elem;
                if (__t === 'clear') {
                    return { unselectable: 'on' };
                    return;
                } else if (__t === 'control') {
                    return $584(__$ctx);
                } else {
                    return $640(__$ctx);
                }
            } else if (__t === 'default') {
                return $591(__$ctx);
            } else if (__t === 'mix') {
                if ($$elem === 'ahead') {
                    return [{
                            block: 'input',
                            elem: 'input'
                        }];
                    return;
                } else {
                    return $640(__$ctx);
                }
            } else if (__t === 'value') {
                return $613(__$ctx);
            } else if (__t === 'js') {
                if (!!$$elem === false) {
                    if ($$mods.popup == 'gradient') {
                        return {
                            live: false,
                            popupMods: { gradient: 'yes' }
                        };
                    } else {
                        return { live: false };
                    }
                    return;
                } else {
                    return $640(__$ctx);
                }
            } else {
                return $640(__$ctx);
            }
        } else {
            return $640(__$ctx);
        }
    }
    function $533(__$ctx) {
        if (!(__$ctx['__$anflg820'] !== true) === false) {
            if (!!$$elem === false) {
                var __r0, __r1;
                var _$657c = ('', __r0 = __$ctx['__$anflg820'], __$ctx['__$anflg820'] = true, __r1 = $533(__$ctx), __$ctx['__$anflg820'] = __r0, '', __r1);
                _$657c += [
                    ';(function(d,e,c,r,n,w,v,f){',
                    'e=d.documentElement;',
                    'c="className";',
                    'r="replace";',
                    'n="createElementNS";',
                    'f="firstChild";',
                    'w="http://www.w3.org/2000/svg";',
                    'e[c]+=" i-ua_svg_"+(!!d[n]&&!!d[n](w,"svg").createSVGRect?"yes":"no");',
                    'v=d.createElement("div");',
                    'v.innerHTML="<svg/>";',
                    'e[c]+=" i-ua_inlinesvg_"+((v[f]&&v[f].namespaceURI)==w?"yes":"no");',
                    '})(document);'
                ].join('');
                return _$657c;
                return;
            } else {
                return $539(__$ctx);
            }
        } else {
            return $539(__$ctx);
        }
    }
    function $539(__$ctx) {
        if (!!$$elem === false) {
            return [
                ';(function(d,e,c,r){',
                'e=d.documentElement;',
                'c="className";',
                'r="replace";',
                'e[c]=e[c][r]("i-ua_js_no","i-ua_js_yes");',
                'if(d.compatMode!="CSS1Compat")',
                'e[c]=e[c][r]("i-ua_css_standart","i-ua_css_quirks")',
                '})(document);'
            ].join('');
            return;
        } else {
            return $640(__$ctx);
        }
    }
    function $584(__$ctx) {
        if (!(__$ctx['__$anflg819'] !== true) === false) {
            var __r0, __r1;
            var _$64yctx = __$ctx.ctx, _$64ya = __$ctx._.extend(('', __r0 = __$ctx['__$anflg819'], __$ctx['__$anflg819'] = true, __r1 = $584(__$ctx), __$ctx['__$anflg819'] = __r0, '', __r1), {
                    autocomplete: _$64yctx.autocomplete || 'off',
                    autocorrect: _$64yctx.autocorrect || 'off',
                    autocapitalize: _$64yctx.autocapitalize || 'off',
                    spellcheck: _$64yctx.spellcheck || 'false'
                });
            return _$64ya;
            return;
        } else {
            var _$64wa = __$ctx._.extend({
                    id: __$ctx._inputId,
                    name: __$ctx._name
                }, __$ctx.ctx.controlAttrs);
            (__$ctx._value || __$ctx._value === 0) && (_$64wa.value = __$ctx._value);
            $$mods.disabled && (_$64wa.disabled = 'disabled');
            _$64wa['aria-labelledby'] = __$ctx._labelId + ' ' + __$ctx._hintId;
            return _$64wa;
            return;
        }
    }
    function $591(__$ctx) {
        if ($$elem === 'control') {
            if (!(__$ctx['__$anflg818'] !== true) === false) {
                if (!!$$mods.clear === false) {
                    return $595(__$ctx);
                } else {
                    return $600(__$ctx);
                }
            } else {
                return $600(__$ctx);
            }
        } else {
            return $600(__$ctx);
        }
    }
    function $595(__$ctx) {
        {
            '';
            var __r0 = __$ctx['__$anflg818'];
            __$ctx['__$anflg818'] = true;
            {
                '';
                var __r1 = __$ctx.ctx;
                __$ctx.ctx = {
                    elem: 'box',
                    tag: 'span',
                    content: [
                        __$ctx.ctx,
                        {
                            elem: 'clear',
                            elemMods: __$ctx._value || __$ctx._value === 0 ? { visibility: 'visible' } : undefined
                        }
                    ]
                };
                var __r2 = $$mode;
                $$mode = '';
                $526(__$ctx);
                __$ctx.ctx = __r1;
                $$mode = __r2;
                '';
            }
            __$ctx['__$anflg818'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $600(__$ctx) {
        if (!(__$ctx['__$anflg817'] !== true) === false) {
            if (!!$$elem === false) {
                return $603(__$ctx);
            } else {
                return $640(__$ctx);
            }
        } else {
            return $640(__$ctx);
        }
    }
    function $603(__$ctx) {
        var __r0, __r1, __r2;
        var _$64nvalue = ('', __r0 = $$mode, $$mode = 'value', __r1 = __$ctx.ctx, __$ctx.ctx = __$ctx.ctx.value, __r2 = $613(__$ctx), $$mode = __r0, __$ctx.ctx = __r1, '', __r2), _$64nid = __$ctx.ctx.id || __$ctx.generateId(), _$64nmods = __$ctx.ctx.mods || {};
        _$64nmods.theme = _$64nmods.theme || 'normal';
        {
            '';
            var __r3 = __$ctx['__$anflg817'];
            __$ctx['__$anflg817'] = true;
            {
                '';
                var __r4 = __$ctx._inputId;
                __$ctx._inputId = _$64nid;
                var __r5 = __$ctx._labelId;
                __$ctx._labelId = 'label' + _$64nid;
                var __r6 = __$ctx._hintId;
                __$ctx._hintId = 'hint' + _$64nid;
                var __r7 = __$ctx._name;
                __$ctx._name = __$ctx.ctx.name || '';
                var __r8 = __$ctx._value;
                __$ctx._value = _$64nvalue;
                var __r9 = __$ctx._inputLink;
                __$ctx._inputLink = true;
                var __r10 = __$ctx._disabled;
                __$ctx._disabled = $$mods.disabled;
                var __r11 = __$ctx.ctx, __r12 = __r11.mods;
                __r11.mods = _$64nmods;
                $591(__$ctx);
                __$ctx._inputId = __r4;
                __$ctx._labelId = __r5;
                __$ctx._hintId = __r6;
                __$ctx._name = __r7;
                __$ctx._value = __r8;
                __$ctx._inputLink = __r9;
                __$ctx._disabled = __r10;
                __r11.mods = __r12;
                '';
            }
            __$ctx['__$anflg817'] = __r3;
            '';
        }
        undefined;
        return;
    }
    function $613(__$ctx) {
        if (!__$ctx.isSimple(__$ctx.ctx) === false) {
            if (!!$$elem === false) {
                return __$ctx.ctx;
                return;
            } else {
                return $619(__$ctx);
            }
        } else {
            return $619(__$ctx);
        }
    }
    function $619(__$ctx) {
        if (!__$ctx.ctx === false) {
            if (!!$$elem === false) {
                var _$64pvalue = [];
                {
                    '';
                    var __r0 = __$ctx._buf;
                    __$ctx._buf = _$64pvalue;
                    var __r1 = $$mode;
                    $$mode = '';
                    $526(__$ctx);
                    __$ctx._buf = __r0;
                    $$mode = __r1;
                    '';
                }
                undefined;
                return _$64pvalue.join('');
                return;
            } else {
                return $625(__$ctx);
            }
        } else {
            return $625(__$ctx);
        }
    }
    function $625(__$ctx) {
        if (!true === false) {
            if (!!$$elem === false) {
                return '';
                return;
            } else {
                return $640(__$ctx);
            }
        } else {
            return $640(__$ctx);
        }
    }
    function $640(__$ctx) {
        var __t = $$mode;
        if (__t === 'content') {
            return __$ctx.ctx.content;
            return;
        } else if (__t === 'mix' || __t === 'bem' || __t === 'jsAttr' || __t === 'js' || __t === 'cls' || __t === 'attrs' || __t === 'tag') {
            return undefined;
            return;
        } else {
            if (!__$ctx.ctx === false) {
                if (!__$ctx.ctx.link === false) {
                    if (!!__$ctx._.isSimple(__$ctx.ctx) === false) {
                        return $661(__$ctx);
                    } else {
                        return $666(__$ctx);
                    }
                } else {
                    return $666(__$ctx);
                }
            } else {
                return $666(__$ctx);
            }
        }
    }
    function $661(__$ctx) {
        var __r0, __r1;
        function _$64cfollow() {
            if (this.ctx.link === 'no-follow') {
                return undefined;
            } else {
                undefined;
            }
            var data = this._links[this.ctx.link];
            return '', __r0 = this.ctx, this.ctx = data, __r1 = $1(__$ctx), this.ctx = __r0, '', __r1;
        }
        if (!cache || !__$ctx._cacheLog) {
            return _$64cfollow.call(__$ctx);
        } else {
            undefined;
        }
        var _$64ccontents = __$ctx._buf.slice(__$ctx._cachePos).join('');
        __$ctx._cachePos = __$ctx._buf.length;
        __$ctx._cacheLog.push(_$64ccontents, {
            log: __$ctx._localLog.slice(),
            link: __$ctx.ctx.link
        });
        var _$64cres = _$64cfollow.call(__$ctx);
        __$ctx._cachePos = __$ctx._buf.length;
        return _$64cres;
        return;
    }
    function $666(__$ctx) {
        if (!cache === false) {
            if (!__$ctx.ctx === false) {
                if (!__$ctx.ctx.cache === false) {
                    return $670(__$ctx);
                } else {
                    return $675(__$ctx);
                }
            } else {
                return $675(__$ctx);
            }
        } else {
            return $675(__$ctx);
        }
    }
    function $670(__$ctx) {
        var _$64bcached;
        function _$64bsetProperty(obj, key, value) {
            if (key.length === 0) {
                return undefined;
            } else {
                undefined;
            }
            if (Array.isArray(value)) {
                var target = obj;
                for (var i = 0; i < value.length - 1; i++) {
                    target = target[value[i]];
                }
                value = target[value[i]];
            } else {
                undefined;
            }
            var host = obj, previous;
            for (var i = 0; i < key.length - 1; i++) {
                host = host[key[i]];
            }
            previous = host[key[i]];
            host[key[i]] = value;
            return previous;
        }
        if (_$64bcached = cache.get(__$ctx.ctx.cache)) {
            var _$64boldLinks = __$ctx._links;
            if (__$ctx.ctx.links) {
                __$ctx._links = __$ctx.ctx.links;
            } else {
                undefined;
            }
            for (var _$64bi = 0; _$64bi < _$64bcached.log.length; _$64bi++) {
                if (typeof _$64bcached.log[_$64bi] === 'string') {
                    __$ctx._buf.push(_$64bcached.log[_$64bi]);
                    continue;
                } else {
                    undefined;
                }
                var _$64blog = _$64bcached.log[_$64bi], _$64breverseLog;
                _$64breverseLog = _$64blog.log.map(function (entry) {
                    return {
                        key: entry[0],
                        value: _$64bsetProperty(this, entry[0], entry[1])
                    };
                }, __$ctx).reverse();
                {
                    '';
                    var __r0 = __$ctx.ctx, __r1 = __r0.cache;
                    __r0.cache = null;
                    var __r2 = __$ctx._cacheLog;
                    __$ctx._cacheLog = null;
                    var __r3 = __$ctx.ctx, __r4 = __r3.link;
                    __r3.link = _$64blog.link;
                    $1(__$ctx);
                    __r0.cache = __r1;
                    __$ctx._cacheLog = __r2;
                    __r3.link = __r4;
                    '';
                }
                undefined;
                _$64breverseLog.forEach(function (entry) {
                    _$64bsetProperty(this, entry.key, entry.value);
                }, __$ctx);
            }
            __$ctx._links = _$64boldLinks;
            return _$64bcached.res;
        } else {
            undefined;
        }
        var _$64bcacheLog = [], _$64bres;
        {
            '';
            var __r5 = __$ctx.ctx, __r6 = __r5.cache;
            __r5.cache = null;
            var __r7 = __$ctx._cachePos;
            __$ctx._cachePos = __$ctx._buf.length;
            var __r8 = __$ctx._cacheLog;
            __$ctx._cacheLog = _$64bcacheLog;
            var __r9 = __$ctx._localLog;
            __$ctx._localLog = [];
            {
                _$64bres = $1(__$ctx);
                var _$64btail = __$ctx._buf.slice(__$ctx._cachePos).join('');
                if (_$64btail) {
                    _$64bcacheLog.push(_$64btail);
                } else {
                    undefined;
                }
            }
            __r5.cache = __r6;
            __$ctx._cachePos = __r7;
            __$ctx._cacheLog = __r8;
            __$ctx._localLog = __r9;
            '';
        }
        cache.set(__$ctx.ctx.cache, {
            log: _$64bcacheLog,
            res: _$64bres
        });
        return _$64bres;
        return;
    }
    function $675(__$ctx) {
        var __t = $$mode;
        if (__t === 'default') {
            return $677(__$ctx);
        } else if (__t === '') {
            if (!__$ctx._.isSimple(__$ctx.ctx) === false) {
                __$ctx._listLength--;
                var _$649ctx = __$ctx.ctx;
                (_$649ctx && _$649ctx !== true || _$649ctx === 0) && __$ctx._buf.push(_$649ctx);
                return;
            } else {
                if (!!__$ctx.ctx === false) {
                    __$ctx._listLength--;
                    return;
                } else {
                    if (!__$ctx._.isArray(__$ctx.ctx) === false) {
                        return $686(__$ctx);
                    } else {
                        if (!true === false) {
                            return $689(__$ctx);
                        } else {
                            return $e(__$ctx);
                        }
                    }
                }
            }
        } else {
            return $e(__$ctx);
        }
    }
    function $677(__$ctx) {
        var __r13, __r0, __r4, __r5, __r6, __r7, __r8, __r9, __r10, __r11, __r12, __r1, __r14, __r15, __r16, __r17, __r20, __r21, __r22, __r23, __r24, __r25;
        var _$64aBEM_ = __$ctx.BEM, _$64av = __$ctx.ctx, _$64abuf = __$ctx._buf, _$64atag;
        _$64atag = ('', __r0 = $$mode, $$mode = 'tag', __r1 = $1(__$ctx), $$mode = __r0, '', __r1);
        typeof _$64atag != 'undefined' || (_$64atag = _$64av.tag);
        typeof _$64atag != 'undefined' || (_$64atag = 'div');
        if (_$64atag) {
            var _$64ajsParams, _$64ajs;
            if ($$block && _$64av.js !== false) {
                _$64ajs = ('', __r4 = $$mode, $$mode = 'js', __r5 = $1(__$ctx), $$mode = __r4, '', __r5);
                _$64ajs = _$64ajs ? __$ctx._.extend(_$64av.js, _$64ajs === true ? {} : _$64ajs) : _$64av.js === true ? {} : _$64av.js;
                _$64ajs && ((_$64ajsParams = {})[_$64aBEM_.INTERNAL.buildClass($$block, _$64av.elem)] = _$64ajs);
            } else {
                undefined;
            }
            _$64abuf.push('<', _$64atag);
            var _$64aisBEM = ('', __r6 = $$mode, $$mode = 'bem', __r7 = $1(__$ctx), $$mode = __r6, '', __r7);
            typeof _$64aisBEM != 'undefined' || (_$64aisBEM = typeof _$64av.bem != 'undefined' ? _$64av.bem : _$64av.block || _$64av.elem);
            var _$64acls = ('', __r8 = $$mode, $$mode = 'cls', __r9 = $1(__$ctx), $$mode = __r8, '', __r9);
            _$64acls || (_$64acls = _$64av.cls);
            var _$64aaddJSInitClass = _$64av.block && _$64ajsParams;
            if (_$64aisBEM || _$64acls) {
                _$64abuf.push(' class="');
                if (_$64aisBEM) {
                    _$64aBEM_.INTERNAL.buildClasses($$block, _$64av.elem, _$64av.elemMods || _$64av.mods, _$64abuf);
                    var _$64amix = ('', __r10 = $$mode, $$mode = 'mix', __r11 = $1(__$ctx), $$mode = __r10, '', __r11);
                    _$64av.mix && (_$64amix = _$64amix ? _$64amix.concat(_$64av.mix) : _$64av.mix);
                    if (_$64amix) {
                        var _$64avisited = {};
                        function _$64avisitedKey(block, elem) {
                            return (block || '') + '__' + (elem || '');
                        }
                        _$64avisited[_$64avisitedKey($$block, $$elem)] = true;
                        if (!__$ctx._.isArray(_$64amix)) {
                            _$64amix = [_$64amix];
                        } else {
                            undefined;
                        }
                        for (var _$64ai = 0; _$64ai < _$64amix.length; _$64ai++) {
                            var _$64amixItem = _$64amix[_$64ai];
                            if (!_$64amixItem) {
                                continue;
                            } else {
                                undefined;
                            }
                            var _$64ahasItem = _$64amixItem.block || _$64amixItem.elem, _$64ablock = _$64amixItem.block || _$64amixItem._block || $$block, _$64aelem = _$64amixItem.elem || _$64amixItem._elem || $$elem, _$64amods = _$64amixItem.mods || $$mods, _$64aelemMods = _$64amixItem.elemMods || {};
                            _$64ahasItem && _$64abuf.push(' ');
                            _$64aBEM_.INTERNAL[_$64ahasItem ? 'buildClasses' : 'buildModsClasses'](_$64ablock, _$64amixItem.elem || _$64amixItem._elem || (_$64amixItem.block ? undefined : $$elem), _$64amixItem.elemMods || _$64amixItem.mods, _$64abuf);
                            if (_$64amixItem.js) {
                                (_$64ajsParams || (_$64ajsParams = {}))[_$64aBEM_.INTERNAL.buildClass(_$64ablock, _$64amixItem.elem)] = _$64amixItem.js === true ? {} : _$64amixItem.js;
                                _$64aaddJSInitClass || (_$64aaddJSInitClass = _$64ablock && !_$64amixItem.elem);
                            } else {
                                undefined;
                            }
                            if (_$64ahasItem && !_$64avisited[_$64avisitedKey(_$64ablock, _$64aelem)]) {
                                _$64avisited[_$64avisitedKey(_$64ablock, _$64aelem)] = true;
                                var _$64anestedMix = ('', __r12 = $$block, $$block = _$64ablock, __r13 = $$elem, $$elem = _$64aelem, __r14 = $$mods, $$mods = _$64amods, __r15 = $$elemMods, $$elemMods = _$64aelemMods, __r16 = $$mode, $$mode = 'mix', __r17 = $1(__$ctx), $$block = __r12, $$elem = __r13, $$mods = __r14, $$elemMods = __r15, $$mode = __r16, '', __r17);
                                if (_$64anestedMix) {
                                    for (var _$64aj = 0; _$64aj < _$64anestedMix.length; _$64aj++) {
                                        var _$64anestedItem = _$64anestedMix[_$64aj];
                                        if (!_$64anestedItem.block && !_$64anestedItem.elem || !_$64avisited[_$64avisitedKey(_$64anestedItem.block, _$64anestedItem.elem)]) {
                                            _$64anestedItem._block = _$64ablock;
                                            _$64anestedItem._elem = _$64aelem;
                                            _$64amix.splice(_$64ai + 1, 0, _$64anestedItem);
                                        } else {
                                            undefined;
                                        }
                                    }
                                } else {
                                    undefined;
                                }
                            } else {
                                undefined;
                            }
                        }
                    } else {
                        undefined;
                    }
                } else {
                    undefined;
                }
                _$64acls && _$64abuf.push(_$64aisBEM ? ' ' : '', _$64acls);
                _$64aaddJSInitClass && _$64abuf.push(' i-bem');
                _$64abuf.push('"');
            } else {
                undefined;
            }
            if (_$64ajsParams) {
                var _$64ajsAttr = ('', __r20 = $$mode, $$mode = 'jsAttr', __r21 = $1(__$ctx), $$mode = __r20, '', __r21);
                _$64abuf.push(' ', _$64ajsAttr || 'data-bem', '="', __$ctx._.attrEscape(JSON.stringify(_$64ajsParams)), '"');
            } else {
                undefined;
            }
            var _$64aattrs = ('', __r22 = $$mode, $$mode = 'attrs', __r23 = $1(__$ctx), $$mode = __r22, '', __r23);
            _$64aattrs = __$ctx._.extend(_$64aattrs, _$64av.attrs);
            if (_$64aattrs) {
                var _$64aname;
                for (_$64aname in _$64aattrs) {
                    if (_$64aattrs[_$64aname] === undefined) {
                        continue;
                    } else {
                        undefined;
                    }
                    _$64abuf.push(' ', _$64aname, '="', __$ctx._.attrEscape(_$64aattrs[_$64aname]), '"');
                }
            } else {
                undefined;
            }
        } else {
            undefined;
        }
        if (__$ctx._.isShortTag(_$64atag)) {
            _$64abuf.push('/>');
        } else {
            _$64atag && _$64abuf.push('>');
            var _$64acontent = ('', __r24 = $$mode, $$mode = 'content', __r25 = $1(__$ctx), $$mode = __r24, '', __r25);
            if (_$64acontent || _$64acontent === 0) {
                var _$64aisBEM = $$block || $$elem;
                {
                    '';
                    var __r26 = __$ctx._notNewList;
                    __$ctx._notNewList = false;
                    var __r27 = __$ctx.position;
                    __$ctx.position = _$64aisBEM ? 1 : __$ctx.position;
                    var __r28 = __$ctx._listLength;
                    __$ctx._listLength = _$64aisBEM ? 1 : __$ctx._listLength;
                    var __r29 = __$ctx.ctx;
                    __$ctx.ctx = _$64acontent;
                    var __r30 = $$mode;
                    $$mode = '';
                    $1(__$ctx);
                    __$ctx._notNewList = __r26;
                    __$ctx.position = __r27;
                    __$ctx._listLength = __r28;
                    __$ctx.ctx = __r29;
                    $$mode = __r30;
                    '';
                }
                undefined;
            } else {
                undefined;
            }
            _$64atag && _$64abuf.push('</', _$64atag, '>');
        }
        return;
    }
    function $686(__$ctx) {
        var _$647v = __$ctx.ctx, _$647l = _$647v.length, _$647i = 0, _$647prevPos = __$ctx.position, _$647prevNotNewList = __$ctx._notNewList;
        if (_$647prevNotNewList) {
            __$ctx._listLength += _$647l - 1;
        } else {
            __$ctx.position = 0;
            __$ctx._listLength = _$647l;
        }
        __$ctx._notNewList = true;
        while (_$647i < _$647l) {
            var _$647newCtx = _$647v[_$647i++];
            {
                '';
                var __r0 = __$ctx.ctx;
                __$ctx.ctx = _$647newCtx == null ? '' : _$647newCtx;
                $1(__$ctx);
                __$ctx.ctx = __r0;
                '';
            }
            undefined;
        }
        _$647prevNotNewList || (__$ctx.position = _$647prevPos);
        return;
    }
    function $689(__$ctx) {
        var _$646vBlock = __$ctx.ctx.block, _$646vElem = __$ctx.ctx.elem, _$646block = __$ctx._currBlock || $$block;
        __$ctx.ctx || (__$ctx.ctx = {});
        {
            '';
            var __r0 = $$mode;
            $$mode = 'default';
            var __r1 = __$ctx._links;
            __$ctx._links = __$ctx.ctx.links || __$ctx._links;
            var __r2 = $$block;
            $$block = _$646vBlock || (_$646vElem ? _$646block : undefined);
            var __r3 = __$ctx._currBlock;
            __$ctx._currBlock = _$646vBlock || _$646vElem ? undefined : _$646block;
            var __r4 = $$elem;
            $$elem = __$ctx.ctx.elem;
            var __r5 = $$mods;
            $$mods = (_$646vBlock ? __$ctx.ctx.mods : $$mods) || {};
            var __r6 = $$elemMods;
            $$elemMods = __$ctx.ctx.elemMods || {};
            {
                $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
                $1(__$ctx);
                undefined;
            }
            $$mode = __r0;
            __$ctx._links = __r1;
            $$block = __r2;
            __$ctx._currBlock = __r3;
            $$elem = __r4;
            $$mods = __r5;
            $$elemMods = __r6;
            '';
        }
        return;
    }
    function $e(__$ctx) {
        throw new Error(this);
        return;
    }
    !function oninit() {
        (function (global, bem_) {
            if (bem_.I18N) {
                return undefined;
            } else {
                undefined;
            }
            global.BEM = bem_;
            var i18n = bem_.I18N = function (keyset, key) {
                    return key;
                };
            i18n.keyset = function () {
                return i18n;
            };
            i18n.key = function (key) {
                return key;
            };
            i18n.lang = function () {
                return undefined;
            };
        }(this, typeof BEM === 'undefined' ? {} : BEM));
    }();
    !function oninit() {
        var BEM_ = {}, toString = Object.prototype.toString, SHORT_TAGS = {
                area: 1,
                base: 1,
                br: 1,
                col: 1,
                command: 1,
                embed: 1,
                hr: 1,
                img: 1,
                input: 1,
                keygen: 1,
                link: 1,
                meta: 1,
                param: 1,
                source: 1,
                wbr: 1
            };
        (function (BEM, undefined) {
            var MOD_DELIM = '_', ELEM_DELIM = '__', NAME_PATTERN = '[a-zA-Z0-9-]+';
            function buildModPostfix(modName, modVal, buffer) {
                buffer.push(MOD_DELIM, modName, MOD_DELIM, modVal);
            }
            function buildBlockClass(name, modName, modVal, buffer) {
                buffer.push(name);
                modVal && buildModPostfix(modName, modVal, buffer);
            }
            function buildElemClass(block, name, modName, modVal, buffer) {
                buildBlockClass(block, undefined, undefined, buffer);
                buffer.push(ELEM_DELIM, name);
                modVal && buildModPostfix(modName, modVal, buffer);
            }
            BEM.INTERNAL = {
                NAME_PATTERN: NAME_PATTERN,
                MOD_DELIM: MOD_DELIM,
                ELEM_DELIM: ELEM_DELIM,
                buildModPostfix: function (modName, modVal, buffer) {
                    var res = buffer || [];
                    buildModPostfix(modName, modVal, res);
                    return buffer ? res : res.join('');
                },
                buildClass: function (block, elem, modName, modVal, buffer) {
                    var typeOf = typeof modName;
                    if (typeOf == 'string') {
                        if (typeof modVal != 'string') {
                            buffer = modVal;
                            modVal = modName;
                            modName = elem;
                            elem = undefined;
                        } else {
                            undefined;
                        }
                    } else {
                        if (typeOf != 'undefined') {
                            buffer = modName;
                            modName = undefined;
                        } else {
                            if (elem && typeof elem != 'string') {
                                buffer = elem;
                                elem = undefined;
                            } else {
                                undefined;
                            }
                        }
                    }
                    if (!(elem || modName || buffer)) {
                        return block;
                    } else {
                        undefined;
                    }
                    var res = buffer || [];
                    elem ? buildElemClass(block, elem, modName, modVal, res) : buildBlockClass(block, modName, modVal, res);
                    return buffer ? res : res.join('');
                },
                buildModsClasses: function (block, elem, mods, buffer) {
                    var res = buffer || [];
                    if (mods) {
                        var modName;
                        for (modName in mods) {
                            if (!mods.hasOwnProperty(modName)) {
                                continue;
                            } else {
                                undefined;
                            }
                            var modVal = mods[modName];
                            if (modVal == null) {
                                continue;
                            } else {
                                undefined;
                            }
                            modVal = mods[modName] + '';
                            if (!modVal) {
                                continue;
                            } else {
                                undefined;
                            }
                            res.push(' ');
                            if (elem) {
                                buildElemClass(block, elem, modName, modVal, res);
                            } else {
                                buildBlockClass(block, modName, modVal, res);
                            }
                        }
                    } else {
                        undefined;
                    }
                    return buffer ? res : res.join('');
                },
                buildClasses: function (block, elem, mods, buffer) {
                    var res = buffer || [];
                    elem ? buildElemClass(block, elem, undefined, undefined, res) : buildBlockClass(block, undefined, undefined, res);
                    this.buildModsClasses(block, elem, mods, buffer);
                    return buffer ? res : res.join('');
                }
            };
        }(BEM_));
        var buildEscape = function () {
                var ts = {
                        '"': '&quot;',
                        '&': '&amp;',
                        '<': '&lt;',
                        '>': '&gt;'
                    }, f = function (t) {
                        return ts[t] || t;
                    };
                return function (r) {
                    r = new RegExp(r, 'g');
                    return function (s) {
                        return ('' + s).replace(r, f);
                    };
                };
            }();
        function BEMContext(context, apply_) {
            this.ctx = typeof context === null ? '' : context;
            this.apply = apply_;
            this._buf = [];
            this._ = this;
            this._start = true;
            this._listLength = 0;
            this._notNewList = false;
            this.position = 0;
        }
        BEMContext.prototype.isArray = function isArray(obj) {
            return toString.call(obj) === '[object Array]';
        };
        BEMContext.prototype.isSimple = function isSimple(obj) {
            var t = typeof obj;
            return t === 'string' || t === 'number' || t === 'boolean';
        };
        BEMContext.prototype.isShortTag = function isShortTag(t) {
            return SHORT_TAGS.hasOwnProperty(t);
        };
        BEMContext.prototype.extend = function extend(o1, o2) {
            if (!o1 || !o2) {
                return o1 || o2;
            } else {
                undefined;
            }
            var res = {}, n;
            for (n in o1) {
                o1.hasOwnProperty(n) && (res[n] = o1[n]);
            }
            for (n in o2) {
                o2.hasOwnProperty(n) && (res[n] = o2[n]);
            }
            return res;
        };
        BEMContext.prototype.identify = function () {
            var cnt = 0, id = BEM_['__id'] = +new Date(), expando = '__' + id, get = function () {
                    return 'uniq' + id + ++cnt;
                };
            return function (obj, onlyGet) {
                if (!obj) {
                    return get();
                } else {
                    undefined;
                }
                if (onlyGet || obj[expando]) {
                    return obj[expando];
                } else {
                    return obj[expando] = get();
                }
            };
        }();
        BEMContext.prototype.xmlEscape = buildEscape('[&<>]');
        BEMContext.prototype.attrEscape = buildEscape('["&<>]');
        BEMContext.prototype.BEM = BEM_;
        BEMContext.prototype.isFirst = function isFirst() {
            return this.position === 1;
        };
        BEMContext.prototype.isLast = function isLast() {
            return this.position === this._listLength;
        };
        BEMContext.prototype.generateId = function generateId() {
            return this.identify(this.ctx);
        };
        exports.apply = BEMContext.apply = function _apply() {
            var ctx = new BEMContext(this, apply);
            ctx.apply();
            return ctx._buf.join('');
        };
    }();
    return exports;
    exports.apply = apply;
    function apply(ctx) {
        return applyc(ctx || this);
    }
    function applyc(__$ctx) {
        return $1(__$ctx);
    }
    return exports;
}(typeof exports === 'undefined' ? {} : exports));;
  return function(options) {
    var context = this;
    if (!options) options = {};
    cache = options.cache;
    return function() {
      if (context === this) {
        context = undefined;
$$mode = ''
$$block = ''
$$elem = ''
$$elemMods = ''
$$mods = ''
      } else {
$$mode = '';
$$block = '';
$$elem = '';
$$elemMods = '';
$$mods = '';
      }
      return xjst.apply.call(
[context]
      );
    }.call(null);
  };
}();
typeof exports === "undefined" || (exports.BEMHTML = BEMHTML);/*borschik:include:../../../../libs/bem-bl/blocks-common/i-jquery/__inherit/i-jquery__inherit.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-jquery/__identify/i-jquery__identify.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-jquery/__is-empty-object/i-jquery__is-empty-object.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-jquery/__debounce/i-jquery__debounce.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-jquery/__observable/i-jquery__observable.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-touch/i-fastclick/i-fastclick.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-touch/i-pointer-events/i-pointer-events.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-bem/i-bem.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-ecma/__object/i-ecma__object.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-ecma/__array/i-ecma__array.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-ecma/__function/i-ecma__function.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-bem/__internal/i-bem__internal.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-bem/__dom/i-bem__dom.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-ecma/__string/i-ecma__string.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-ecma/__json/i-ecma__json.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-bem/__dom/_init/i-bem__dom_init_auto.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-touch/i-ua/i-ua.js*/;
/*borschik:include:../../../../libs/islands-romochka/touch.blocks/i-ua/i-ua.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-jquery/__cookie/i-jquery__cookie.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-jquery/__decodeuri/i-jquery__decodeuri.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-common/check-session/i-common__check-session.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-global/i-global.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-counter/i-counter.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-common/cookie/i-common__cookie.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-common/init/i-common__init.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-common/i-common.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-ua/_interaction/i-ua_interaction_yes.js*/;
/*borschik:include:../../../../common.blocks/suggest/suggest.examples/10-simple.blocks/example/example.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-touch/i-jquery/__tap/i-jquery__tap.js*/;
/*borschik:include:../../../../common.blocks/suggest/suggest.js*/;
/*borschik:include:../../../../touch.blocks/suggest/suggest.js*/;
/*borschik:include:../../../../touch-phone.blocks/suggest/suggest.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-request/i-request.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-request/_type/i-request_type_ajax.js*/;
/*borschik:include:../../../../common.blocks/suggest/__provider/suggest__provider.js*/;
/*borschik:include:../../../../common.blocks/suggest-item/suggest-item.js*/;
/*borschik:include:../../../../touch.blocks/suggest-item/suggest-item.js*/;
/*borschik:include:../../../../touch-phone.blocks/suggest-item/suggest-item.js*/;
/*borschik:include:../../../../common.blocks/suggest-item/_nav/suggest-item_nav_yes.js*/;
/*borschik:include:../../../../common.blocks/link/link.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-touch/i-pressed-controller/i-pressed-controller.js*/;
/*borschik:include:../../../../common.blocks/popup/popup.js*/;
/*borschik:include:../../../../common.blocks/popup/_autoclosable/popup_autoclosable_yes.js*/;
/*borschik:include:../../../../common.blocks/popup/_adaptive/popup_adaptive_yes.js*/;
/*borschik:include:../../../../common.blocks/popup/_animate/popup_animate_yes.js*/;
/*borschik:include:../../../../common.blocks/popup/__under/popup__under.js*/;
/*borschik:include:../../../../touch.blocks/popup/__under/popup__under.js*/;
/*borschik:include:../../../../common.blocks/input/input.js*/;
/*borschik:include:../../../../touch.blocks/input/input.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-system/i-system.js*/;
/*borschik:include:../../../../common.blocks/input/__clear/input__clear.js*/;
/*borschik:include:../../../../touch-phone.blocks/input/__clear/input__clear.js*/;


/* global BEM, i18n */
(function(global_, bem_, undefined) {

// Check if BEM.I18N was already initialized
if(typeof bem_.I18N === 'function' && bem_.I18N._proto) {
    return bem_.I18N;
}

/**
 * Support tanker-like syntax of keys in `i-bem__i18n`
 * @example
 *  i18n['prj']['keyset']['key'](params)
 */
if(typeof i18n === 'undefined') {
    /* jshint -W020 */
    i18n = {};
    /* jshint +W020 */
}

/* jshint -W020 */
BEM = bem_;
/* jshint +W020 */

var MOD_DELIM = '_',
    ELEM_DELIM = '__',
    DEFAULT_LANG = 'ru',
    cache = {},
    // {String[]} A stack used for restoring context of dynamic keysets
    stack = [],
    debug = false,
    // @see http://whattheheadsaid.com/2011/04/internet-explorer-9s-problematic-console-object
    hasConsole = typeof console !== 'undefined' && typeof console.log === 'function';

function log() {
    if(debug && hasConsole) {
        console.log.apply(console, arguments);
    }
}

function bemName(decl) {
    typeof decl === 'string' && (decl = { block: decl });

    return decl.block +
        (decl.elem ? (ELEM_DELIM + decl.elem) : '') +
        (decl.modName ? MOD_DELIM + decl.modName + MOD_DELIM + decl.modVal : '');
}

function bemParse(name) {
    var bemitem = {};

    name.split(ELEM_DELIM).forEach(function(item, i) {
        var keys = [ i ? 'elem' : 'block', 'mod', 'val' ];

        item.split(MOD_DELIM).forEach(function(part, j) {
            bemitem[keys[j]] = part;
        });
    });

    return bemitem;
}

function _pushStack(name) {
    if(!name) return false;
    return stack.push(name);
}

function _popStack() {
    return stack.length && stack.pop();
}


/**
 * @constructor
 */
function _i18n() {
    this._lang = '';
    this._prj = 'lego'; // FIXME: bem-bl?
    this._keyset = '';
    this._key = '';
}

_i18n.prototype = {

    lang : function(name) {
        this._lang = name;
        return this;
    },

    project : function(name) {
        this._prj = name;
        return this;
    },

    keyset : function(name, saveCtx) {
        saveCtx && _pushStack(this._keyset);

        this._keyset = bemName(name);
        return this;
    },

    key : function(name) {
        this._key = name;
        return this;
    },

    /**
     * FIXME: Move legacy-syntax support into separat method
     * @param {Object|Function} v
     */
    decl : function(v) {
        var bemitem = bemParse(this._keyset),
            // tanker legacy syntax
            prj = bemitem.block === 'i-tanker' ? 'tanker' : this._prj,
            keyset = bemitem.elem || this._keyset,
            key = this._key;

        prj = i18n[prj] || (i18n[prj] = {});
        keyset = prj[keyset] || (prj[keyset] = {});
        keyset[key] = typeof v === 'function' ? v : (function(p) { return (v); });

        // `BEM.I18N` syntax
        var l = cache[this._lang] || (cache[this._lang] = {}),
            k = l[this._keyset] || (l[this._keyset] = {});

        k[key] = v;
    },

    val : function(params, ctx) {
        var value = cache[this._lang] && cache[this._lang][this._keyset],
            debugString = 'keyset: ' + this._keyset + ' key: ' + this._key + ' (lang: ' + this._lang + ')';

        if(!value) {
            log('[I18N_NO_KEYSET] %s', debugString);
            return '';
        }

        value = value[this._key];

        var valtype = typeof value;
        if(valtype === 'undefined') {
            log("[I18N_NO_VALUE] %s", debugString);
            return '';
        }

        if(valtype === 'string') {
            return value;
        }

        ctx || (ctx = this);
        // TODO: try/catch
        return value.call(ctx, params);
    },

    _cache : function() { return cache; }

};

/**
 * @namespace
 * @lends BEM.I18N
 */
bem_.I18N = (function(base) {

    /**
     * Shortcut to get key value
     *
     * @param {String|Object} keyset
     * @param {String} key
     * @param {Object} [params]
     * @returns {String}
     */
    var klass = function(keyset, key, params) {
        return klass.keyset(keyset).key(key, params);
    };

    klass._proto = base;

    /**
     * @param {String} name
     * @returns {BEM.I18N}
     */
    klass.project = function(name) {
        this._proto.project(name);
        return this;
    };

    /**
     * @param {String} name
     * @returns {BEM.I18N}
     */
    klass.keyset = function(name) {
        this._proto.keyset(name, true);
        return this;
    };

    /**
     * @param {String} name Key name
     * @param {Object} params
     * @returns {String}
     */
    klass.key = function(name, params) {
        var proto = this._proto,
            result,
            ksetRestored;

        proto.lang(this._lang).key(name);

        // TODO: kiss
        result = proto.val.call(proto, params, klass);

        // restoring keyset's context
        // NOTE: should not save current ctx, `saveCtx = false`
        ksetRestored = _popStack();
        ksetRestored && proto.keyset(ksetRestored, false);

        return result;
    };

    /**
     * Declaration of translations
     *
     * @param {String|Object} bemitem
     * @param {Object} keysets
     * @param {Object} [params] declaration params
     * @returns {BEM.I18N}
     */
    klass.decl = function(bemitem, keysets, params) {
        var proto = this._proto,
            k;

        params || (params = {});
        params.lang && proto.lang(params.lang);

        proto.keyset(bemitem);

        for(k in keysets) {
            if(keysets.hasOwnProperty(k)) {
                proto.key(k).decl(keysets[k]);
            }
        }

        return this;
    };

    /**
     * Get/set current language
     *
     * @param {String} [lang]
     * @returns {String}
     */
    klass.lang = function(lang) {
        typeof lang !== 'undefined' && (this._lang = lang);
        return this._lang;
    };

    klass.debug = function(flag) {
        debug = !!flag;
    };

    klass.lang(DEFAULT_LANG);

    return klass;

}(new _i18n()));

})(this, typeof BEM === 'undefined' ? {} : BEM);


BEM.I18N.decl('suggest', {"fact": 'Facts',"group": 'Group of suggestions',"nah": 'You searched for',"nav": 'Site',"text": 'Search',"traffic": 'Traffic',"weather": 'Weather'}, {
"lang": "en"
});

BEM.I18N.decl('suggest-item', {"quick-answer": 'Quick answer'}, {
"lang": "en"
});

BEM.I18N.lang('en');

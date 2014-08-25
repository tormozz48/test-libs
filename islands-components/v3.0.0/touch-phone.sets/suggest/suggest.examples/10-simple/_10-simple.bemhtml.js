var BEMHTML = function() {
  var $$mode, $$block, $$elem, $$elemMods, $$mods;
  var cache,
      exports = {},
      xjst = (function (exports) {
    function $1(__$ctx) {
        var __t = $$block;
        if (__t === 'i-jquery') {
            if ($$mode === 'default') {
                if (!(__$ctx['__$anflg22'] !== true) === false) {
                    if (!!$$elem === false) {
                        return $6(__$ctx);
                    } else {
                        return $9(__$ctx);
                    }
                } else {
                    return $9(__$ctx);
                }
            } else {
                return $725(__$ctx);
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
                        return $725(__$ctx);
                    }
                } else if (__t === 'ahead') {
                    return [
                        { elem: 'ahead-filler' },
                        { elem: 'ahead-hint' }
                    ];
                    return;
                } else {
                    return $725(__$ctx);
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
                        return $725(__$ctx);
                    }
                }
            } else if (__t === 'attrs') {
                var __t = $$elem;
                if (__t === 'clear') {
                    return { unselectable: 'on' };
                    return;
                } else if (__t === 'control') {
                    return $47(__$ctx);
                } else {
                    return $725(__$ctx);
                }
            } else if (__t === 'default') {
                return $54(__$ctx);
            } else if (__t === 'mix') {
                if ($$elem === 'ahead') {
                    return [{
                            block: 'input',
                            elem: 'input'
                        }];
                    return;
                } else {
                    return $725(__$ctx);
                }
            } else if (__t === 'value') {
                return $76(__$ctx);
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
                    return $725(__$ctx);
                }
            } else {
                return $725(__$ctx);
            }
        } else if (__t === 'popup') {
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
                    return $117(__$ctx);
                }
            } else if (__t === 'default') {
                return $109(__$ctx);
            } else {
                return $117(__$ctx);
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
                            return $134(__$ctx);
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
                    return $134(__$ctx);
                }
            } else if (__t === 'icon') {
                return $341(__$ctx);
            } else if (__t === 'js') {
                if (!($$mods && $$mods.type === 'icon') === false) {
                    if (!__$ctx._url === false) {
                        if (!!$$elem === false) {
                            return { val: __$ctx._url };
                            return;
                        } else {
                            return $364(__$ctx);
                        }
                    } else {
                        return $364(__$ctx);
                    }
                } else {
                    return $364(__$ctx);
                }
            } else if (__t === 'default') {
                return $387(__$ctx);
            } else if (__t === 'value') {
                return $327(__$ctx);
            } else if (__t === 'attrs') {
                if ($$elem === 'icon') {
                    var __r0, __r1, __r2, __r3;
                    return { style: ('', __r0 = $$mode, $$mode = 'png', __r1 = $448(__$ctx), $$mode = __r0, '', __r1) + ('', __r2 = $$mode, $$mode = 'svg', __r3 = $443(__$ctx), $$mode = __r2, '', __r3) };
                    return;
                } else {
                    if (!!$$elem === false) {
                        return BEM.blocks['i-ua'].wp ? { onmousedown: 'return true' } : '';
                        return;
                    } else {
                        return $725(__$ctx);
                    }
                }
            } else if (__t === 'svg') {
                if ($$elem === 'icon') {
                    return $443(__$ctx);
                } else {
                    return $725(__$ctx);
                }
            } else if (__t === 'png') {
                if ($$elem === 'icon') {
                    return $448(__$ctx);
                } else {
                    return $725(__$ctx);
                }
            } else if (__t === 'link') {
                if (!($$mods && $$mods.type === 'nav') === false) {
                    if (!!$$elem === false) {
                        return $454(__$ctx);
                    } else {
                        return $725(__$ctx);
                    }
                } else {
                    return $725(__$ctx);
                }
            } else if (__t === 'wrap-ellipsis') {
                if (!!$$elem === false) {
                    return $461(__$ctx);
                } else {
                    return $725(__$ctx);
                }
            } else if (__t === 'text') {
                return $289(__$ctx);
            } else if (__t === 'wrap-jump') {
                if (!!$$elem === false) {
                    return $466(__$ctx);
                } else {
                    return $725(__$ctx);
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
                                return $725(__$ctx);
                            }
                        }
                    }
                }
            } else if (__t === 'wrap-column') {
                if (!!$$elem === false) {
                    return $471(__$ctx);
                } else {
                    return $725(__$ctx);
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
                                return $254(__$ctx);
                            }
                        } else {
                            return $254(__$ctx);
                        }
                    } else {
                        return $254(__$ctx);
                    }
                }
            } else if (__t === 'wrap') {
                if (!!$$elem === false) {
                    return $476(__$ctx);
                } else {
                    return $725(__$ctx);
                }
            } else if (__t === 'answer') {
                return $413(__$ctx);
            } else {
                return $725(__$ctx);
            }
        } else if (__t === 'link') {
            var __t = $$mode;
            if (__t === 'mix') {
                return $482(__$ctx);
            } else if (__t === 'tag') {
                if ($$elem === 'inner') {
                    return 'span';
                    return;
                } else {
                    if (!!$$elem === false) {
                        return __$ctx.ctx.url ? 'a' : 'span';
                        return;
                    } else {
                        return $725(__$ctx);
                    }
                }
            } else if (__t === 'attrs') {
                return $498(__$ctx);
            } else if (__t === 'js') {
                if (!__$ctx.ctx.hasOwnProperty('tabindex') === false) {
                    return { origTabindex: String(__$ctx.ctx.tabindex) };
                    return;
                } else {
                    return $725(__$ctx);
                }
            } else {
                return $725(__$ctx);
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
                    return $562(__$ctx);
                }
            } else if (__t === 'group') {
                var __t = $$mode;
                if (__t === 'default') {
                    return $532(__$ctx);
                } else if (__t === 'attrs') {
                    return {
                        role: 'group',
                        'aria-labelledby': __$ctx._titleId
                    };
                    return;
                } else {
                    return $562(__$ctx);
                }
            } else if (__t === 'items') {
                if ($$mode === 'tag') {
                    return 'ul';
                    return;
                } else {
                    return $562(__$ctx);
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
                    return $562(__$ctx);
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
                    return $562(__$ctx);
                }
            } else {
                return $562(__$ctx);
            }
        } else if (__t === 'b-page') {
            var __t = $$mode;
            if (__t === 'mix') {
                return $571(__$ctx);
            } else if (__t === 'attrs') {
                var __t = $$elem;
                if (__t === 'root') {
                    return { lang: __$ctx['i-global'].lang || 'ru' };
                    return;
                } else if (__t === 'js') {
                    return __$ctx.ctx.url ? { src: __$ctx.ctx.url } : {};
                    return;
                } else if (__t === 'css') {
                    if (!__$ctx.ctx.url === false) {
                        return {
                            rel: 'stylesheet',
                            href: __$ctx.ctx.url
                        };
                        return;
                    } else {
                        return $725(__$ctx);
                    }
                } else if (__t === 'meta') {
                    return __$ctx.ctx.attrs;
                    return;
                } else {
                    return $725(__$ctx);
                }
            } else if (__t === 'tag') {
                var __t = $$elem;
                if (__t === 'js') {
                    return 'script';
                    return;
                } else if (__t === 'css') {
                    if (!__$ctx.ctx.url === false) {
                        return 'link';
                        return;
                    } else {
                        return 'style';
                        return;
                    }
                } else if (__t === 'meta') {
                    return 'meta';
                    return;
                } else if (__t === 'link') {
                    return 'link';
                    return;
                } else if (__t === 'body') {
                    return 'body';
                    return;
                } else if (__t === 'head') {
                    return 'head';
                    return;
                } else if (__t === 'root') {
                    return 'html';
                    return;
                } else {
                    return $725(__$ctx);
                }
            } else if (__t === 'bem') {
                var __t = $$elem;
                if (__t === 'js' || __t === 'css' || __t === 'meta' || __t === 'link' || __t === 'head' || __t === 'root') {
                    return false;
                    return;
                } else {
                    return $725(__$ctx);
                }
            } else if (__t === 'default') {
                var __t = $$elem;
                if (__t === 'css') {
                    if (!__$ctx.ctx.ie === false) {
                        if (!__$ctx.ctx.url === false) {
                            if (!!__$ctx._IE === false) {
                                {
                                    '';
                                    var __r0 = $$mode;
                                    $$mode = '';
                                    var __r1 = __$ctx._IE;
                                    __$ctx._IE = true;
                                    var __r2 = __$ctx.ctx;
                                    __$ctx.ctx = [
                                        '<!--[if gte IE 9]>',
                                        __$ctx.ctx,
                                        '<![endif]-->'
                                    ];
                                    $726(__$ctx);
                                    $$mode = __r0;
                                    __$ctx._IE = __r1;
                                    __$ctx.ctx = __r2;
                                    '';
                                }
                                return;
                            } else {
                                return $644(__$ctx);
                            }
                        } else {
                            return $644(__$ctx);
                        }
                    } else {
                        return $644(__$ctx);
                    }
                } else if (__t === 'icon') {
                    return $656(__$ctx);
                } else {
                    return $657(__$ctx);
                }
            } else if (__t === 'cls') {
                if ($$elem === 'root') {
                    return 'i-ua_js_no i-ua_css_standard';
                    return;
                } else {
                    return $725(__$ctx);
                }
            } else if (__t === 'js-params') {
                return $670(__$ctx);
            } else {
                return $725(__$ctx);
            }
        } else if (__t === 'i-bem') {
            if ($$mode === 'default') {
                if ($$elem === 'i18n') {
                    return $680(__$ctx);
                } else {
                    return $725(__$ctx);
                }
            } else {
                return $725(__$ctx);
            }
        } else if (__t === 'i-global') {
            var __t = $$mode;
            if (__t === 'public-params') {
                return $686(__$ctx);
            } else if (__t === 'default') {
                return $691(__$ctx);
            } else if (__t === 'env') {
                return $718(__$ctx);
            } else {
                return $725(__$ctx);
            }
        } else {
            return $725(__$ctx);
        }
    }
    function $6(__$ctx) {
        var __r0, __r4, __r1, __r2, __r3;
        return '', __r0 = __$ctx['__$anflg22'], __$ctx['__$anflg22'] = true, __r4 = ('', __r1 = __$ctx.ctx, __$ctx.ctx = {
            block: 'b-page',
            elem: 'js',
            url: __$ctx.ctx.url || (__$ctx.ctx.protocol ? __$ctx.ctx.protocol + ':' : '') + '//yastatic.net/jquery/' + $$mods.version + '/jquery.min.js'
        }, __r2 = $$mode, $$mode = '', __r3 = $726(__$ctx), __$ctx.ctx = __r1, $$mode = __r2, '', __r3), __$ctx['__$anflg22'] = __r0, '', __r4;
        return;
    }
    function $9(__$ctx) {
        if (!(__$ctx['__$anflg21'] !== true) === false) {
            if (!!$$elem === false) {
                return $12(__$ctx);
            } else {
                return $725(__$ctx);
            }
        } else {
            return $725(__$ctx);
        }
    }
    function $12(__$ctx) {
        var __r0, __r4, __r1, __r2, __r3;
        return '', __r0 = __$ctx['__$anflg21'], __$ctx['__$anflg21'] = true, __r4 = ('', __r1 = __$ctx.ctx, __$ctx.ctx = {
            block: 'b-page',
            elem: 'js',
            url: __$ctx.ctx.url || (__$ctx.ctx.protocol ? __$ctx.ctx.protocol + ':' : '') + '//yastatic.net/jquery/' + $$mods.version + '/jquery.min.js'
        }, __r2 = $$mode, $$mode = '', __r3 = $726(__$ctx), __$ctx.ctx = __r1, $$mode = __r2, '', __r3), __$ctx['__$anflg21'] = __r0, '', __r4;
        return;
    }
    function $47(__$ctx) {
        if (!(__$ctx['__$anflg20'] !== true) === false) {
            var __r0, __r1;
            var _$4jctx = __$ctx.ctx, _$4ja = __$ctx._.extend(('', __r0 = __$ctx['__$anflg20'], __$ctx['__$anflg20'] = true, __r1 = $47(__$ctx), __$ctx['__$anflg20'] = __r0, '', __r1), {
                    autocomplete: _$4jctx.autocomplete || 'off',
                    autocorrect: _$4jctx.autocorrect || 'off',
                    autocapitalize: _$4jctx.autocapitalize || 'off',
                    spellcheck: _$4jctx.spellcheck || 'false'
                });
            return _$4ja;
            return;
        } else {
            var _$4ha = __$ctx._.extend({
                    id: __$ctx._inputId,
                    name: __$ctx._name
                }, __$ctx.ctx.controlAttrs);
            (__$ctx._value || __$ctx._value === 0) && (_$4ha.value = __$ctx._value);
            $$mods.disabled && (_$4ha.disabled = 'disabled');
            _$4ha['aria-labelledby'] = __$ctx._labelId + ' ' + __$ctx._hintId;
            return _$4ha;
            return;
        }
    }
    function $54(__$ctx) {
        if ($$elem === 'control') {
            if (!(__$ctx['__$anflg19'] !== true) === false) {
                if (!!$$mods.clear === false) {
                    return $58(__$ctx);
                } else {
                    return $63(__$ctx);
                }
            } else {
                return $63(__$ctx);
            }
        } else {
            return $63(__$ctx);
        }
    }
    function $58(__$ctx) {
        {
            '';
            var __r0 = __$ctx['__$anflg19'];
            __$ctx['__$anflg19'] = true;
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
                $726(__$ctx);
                __$ctx.ctx = __r1;
                $$mode = __r2;
                '';
            }
            __$ctx['__$anflg19'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $63(__$ctx) {
        if (!(__$ctx['__$anflg18'] !== true) === false) {
            if (!!$$elem === false) {
                return $66(__$ctx);
            } else {
                return $725(__$ctx);
            }
        } else {
            return $725(__$ctx);
        }
    }
    function $66(__$ctx) {
        var __r0, __r1, __r2;
        var _$48value = ('', __r0 = $$mode, $$mode = 'value', __r1 = __$ctx.ctx, __$ctx.ctx = __$ctx.ctx.value, __r2 = $76(__$ctx), $$mode = __r0, __$ctx.ctx = __r1, '', __r2), _$48id = __$ctx.ctx.id || __$ctx.generateId(), _$48mods = __$ctx.ctx.mods || {};
        _$48mods.theme = _$48mods.theme || 'normal';
        {
            '';
            var __r3 = __$ctx['__$anflg18'];
            __$ctx['__$anflg18'] = true;
            {
                '';
                var __r4 = __$ctx._inputId;
                __$ctx._inputId = _$48id;
                var __r5 = __$ctx._labelId;
                __$ctx._labelId = 'label' + _$48id;
                var __r6 = __$ctx._hintId;
                __$ctx._hintId = 'hint' + _$48id;
                var __r7 = __$ctx._name;
                __$ctx._name = __$ctx.ctx.name || '';
                var __r8 = __$ctx._value;
                __$ctx._value = _$48value;
                var __r9 = __$ctx._inputLink;
                __$ctx._inputLink = true;
                var __r10 = __$ctx._disabled;
                __$ctx._disabled = $$mods.disabled;
                var __r11 = __$ctx.ctx, __r12 = __r11.mods;
                __r11.mods = _$48mods;
                $54(__$ctx);
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
            __$ctx['__$anflg18'] = __r3;
            '';
        }
        undefined;
        return;
    }
    function $76(__$ctx) {
        if (!__$ctx.isSimple(__$ctx.ctx) === false) {
            if (!!$$elem === false) {
                return __$ctx.ctx;
                return;
            } else {
                return $82(__$ctx);
            }
        } else {
            return $82(__$ctx);
        }
    }
    function $82(__$ctx) {
        if (!__$ctx.ctx === false) {
            if (!!$$elem === false) {
                var _$4avalue = [];
                {
                    '';
                    var __r0 = __$ctx._buf;
                    __$ctx._buf = _$4avalue;
                    var __r1 = $$mode;
                    $$mode = '';
                    $726(__$ctx);
                    __$ctx._buf = __r0;
                    $$mode = __r1;
                    '';
                }
                undefined;
                return _$4avalue.join('');
                return;
            } else {
                return $88(__$ctx);
            }
        } else {
            return $88(__$ctx);
        }
    }
    function $88(__$ctx) {
        if (!true === false) {
            if (!!$$elem === false) {
                return '';
                return;
            } else {
                return $725(__$ctx);
            }
        } else {
            return $725(__$ctx);
        }
    }
    function $109(__$ctx) {
        if (!!__$ctx._popupDefaults === false) {
            if (!!$$elem === false) {
                return $112(__$ctx);
            } else {
                return $117(__$ctx);
            }
        } else {
            return $117(__$ctx);
        }
    }
    function $112(__$ctx) {
        var _$44ctx = __$ctx.ctx;
        _$44ctx.mods = $$mods = __$ctx.extend({
            theme: 'ffffff',
            autoclosable: 'yes',
            adaptive: 'yes',
            animate: 'yes'
        }, $$mods);
        if (_$44ctx.zIndex) {
            var _$44attrs = _$44ctx.attrs || (_$44ctx.attrs = {});
            _$44attrs.style = (_$44attrs.style || '') + ';z-index:' + _$44ctx.zIndex + ';';
        } else {
            undefined;
        }
        {
            '';
            var __r0 = __$ctx._popupDefaults;
            __$ctx._popupDefaults = true;
            $109(__$ctx);
            __$ctx._popupDefaults = __r0;
            '';
        }
        undefined;
        return;
    }
    function $117(__$ctx) {
        if (!($$mode === '' && __$ctx._popupDefaults) === false) {
            delete __$ctx._popupDefaults;
            applyc(__$ctx);
            undefined;
            return;
        } else {
            return $725(__$ctx);
        }
    }
    function $134(__$ctx) {
        if (!(__$ctx['__$anflg17'] !== true) === false) {
            if (!($$mods && $$mods.type === 'icon') === false) {
                if (!!$$elem === false) {
                    return $138(__$ctx);
                } else {
                    return $143(__$ctx);
                }
            } else {
                return $143(__$ctx);
            }
        } else {
            return $143(__$ctx);
        }
    }
    function $138(__$ctx) {
        var __r12, __r0, __r1, __r4, __r5, __r10, __r11, __r13, __r2, __r3, __r6, __r7, __r8, __r9;
        return '', __r0 = __$ctx['__$anflg17'], __$ctx['__$anflg17'] = true, __r13 = ('', __r1 = $$mode, $$mode = 'wrap-jump', __r4 = __$ctx.ctx, __r5 = __r4.text, __r4.text = ('', __r2 = $$mode, $$mode = 'text', __r3 = $290(__$ctx), $$mode = __r2, '', __r3), __r10 = __$ctx.ctx, __r11 = __r10.answer, __r10.answer = {
            elem: 'hint',
            content: [
                ('', __r6 = $$mode, $$mode = 'icon', __r7 = $344(__$ctx), $$mode = __r6, '', __r7),
                ('', __r8 = $$mode, $$mode = 'value', __r9 = $330(__$ctx), $$mode = __r8, '', __r9)
            ]
        }, __r12 = $466(__$ctx), $$mode = __r1, __r4.text = __r5, __r10.answer = __r11, '', __r12), __$ctx['__$anflg17'] = __r0, '', __r13;
        return;
    }
    function $143(__$ctx) {
        if (!($$mods && $$mods.type === 'icon') === false) {
            if (!!$$elem === false) {
                return $146(__$ctx);
            } else {
                return $149(__$ctx);
            }
        } else {
            return $149(__$ctx);
        }
    }
    function $146(__$ctx) {
        var __r0, __r1, __r2, __r3, __r4, __r5;
        return [
            ('', __r0 = $$mode, $$mode = 'text', __r1 = $290(__$ctx), $$mode = __r0, '', __r1),
            ('', __r2 = $$mode, $$mode = 'icon', __r3 = $344(__$ctx), $$mode = __r2, '', __r3),
            ('', __r4 = $$mode, $$mode = 'value', __r5 = $330(__$ctx), $$mode = __r4, '', __r5)
        ];
        return;
    }
    function $149(__$ctx) {
        if (!(__$ctx['__$anflg15'] !== true) === false) {
            if (!($$mods && $$mods.type === 'weather') === false) {
                if (!!$$elem === false) {
                    return $153(__$ctx);
                } else {
                    return $158(__$ctx);
                }
            } else {
                return $158(__$ctx);
            }
        } else {
            return $158(__$ctx);
        }
    }
    function $153(__$ctx) {
        var __r9, __r0, __r1, __r4, __r5, __r8, __r11, __r10, __r2, __r3, __r6, __r7;
        return '', __r0 = __$ctx['__$anflg15'], __$ctx['__$anflg15'] = true, __r11 = ('', __r1 = $$mode, $$mode = 'wrap-ellipsis', __r4 = __$ctx.ctx, __r5 = __r4.text, __r4.text = ('', __r2 = $$mode, $$mode = 'text', __r3 = $289(__$ctx), $$mode = __r2, '', __r3), __r8 = __$ctx.ctx, __r9 = __r8.answer, __r8.answer = ('', __r6 = $$mode, $$mode = 'answer', __r7 = $416(__$ctx), $$mode = __r6, '', __r7), __r10 = $461(__$ctx), $$mode = __r1, __r4.text = __r5, __r8.answer = __r9, '', __r10), __$ctx['__$anflg15'] = __r0, '', __r11;
        return;
    }
    function $158(__$ctx) {
        if (!($$mods && $$mods.type === 'weather') === false) {
            if (!!$$elem === false) {
                var __r0, __r1, __r2, __r3;
                return [
                    ('', __r0 = $$mode, $$mode = 'text', __r1 = $289(__$ctx), $$mode = __r0, '', __r1),
                    ('', __r2 = $$mode, $$mode = 'answer', __r3 = $416(__$ctx), $$mode = __r2, '', __r3)
                ];
                return;
            } else {
                return $164(__$ctx);
            }
        } else {
            return $164(__$ctx);
        }
    }
    function $164(__$ctx) {
        if (!(__$ctx['__$anflg14'] !== true) === false) {
            if (!($$mods && $$mods.type === 'traffic') === false) {
                if (!!$$elem === false) {
                    return $168(__$ctx);
                } else {
                    return $173(__$ctx);
                }
            } else {
                return $173(__$ctx);
            }
        } else {
            return $173(__$ctx);
        }
    }
    function $168(__$ctx) {
        var __r0, __r9, __r1, __r2, __r3, __r6, __r7, __r8, __r4, __r5;
        return '', __r0 = __$ctx['__$anflg14'], __$ctx['__$anflg14'] = true, __r9 = ('', __r1 = $$mode, $$mode = 'wrap-ellipsis', __r2 = __$ctx.ctx, __r3 = __r2.text, __r2.text = __$ctx.ctx.data[1], __r6 = __$ctx.ctx, __r7 = __r6.answer, __r6.answer = ('', __r4 = $$mode, $$mode = 'answer', __r5 = $413(__$ctx), $$mode = __r4, '', __r5), __r8 = $461(__$ctx), $$mode = __r1, __r2.text = __r3, __r6.answer = __r7, '', __r8), __$ctx['__$anflg14'] = __r0, '', __r9;
        return;
    }
    function $173(__$ctx) {
        if (!($$mods && $$mods.type === 'traffic') === false) {
            if (!!$$elem === false) {
                var __r0, __r1, __r2, __r3;
                return [
                    ('', __r0 = $$mode, $$mode = 'text', __r1 = $289(__$ctx), $$mode = __r0, '', __r1),
                    ('', __r2 = $$mode, $$mode = 'answer', __r3 = $413(__$ctx), $$mode = __r2, '', __r3)
                ];
                return;
            } else {
                return $179(__$ctx);
            }
        } else {
            return $179(__$ctx);
        }
    }
    function $179(__$ctx) {
        if (!(__$ctx['__$anflg13'] !== true) === false) {
            if (!($$mods && $$mods.type === 'text') === false) {
                if (!!$$elem === false) {
                    return $183(__$ctx);
                } else {
                    return $188(__$ctx);
                }
            } else {
                return $188(__$ctx);
            }
        } else {
            return $188(__$ctx);
        }
    }
    function $183(__$ctx) {
        var __r0, __r7, __r1, __r4, __r5, __r6, __r2, __r3;
        return '', __r0 = __$ctx['__$anflg13'], __$ctx['__$anflg13'] = true, __r7 = ('', __r1 = $$mode, $$mode = 'wrap', __r4 = __$ctx.ctx, __r5 = __r4.text, __r4.text = ('', __r2 = $$mode, $$mode = 'text', __r3 = $289(__$ctx), $$mode = __r2, '', __r3), __r6 = $476(__$ctx), $$mode = __r1, __r4.text = __r5, '', __r6), __$ctx['__$anflg13'] = __r0, '', __r7;
        return;
    }
    function $188(__$ctx) {
        if (!($$mods && $$mods.type === 'text') === false) {
            if (!!$$elem === false) {
                var __r0, __r1;
                return '', __r0 = $$mode, $$mode = 'text', __r1 = $289(__$ctx), $$mode = __r0, '', __r1;
                return;
            } else {
                return $194(__$ctx);
            }
        } else {
            return $194(__$ctx);
        }
    }
    function $194(__$ctx) {
        if (!(__$ctx['__$anflg9'] !== true) === false) {
            if (!($$mods && $$mods.type === 'nav') === false) {
                if (!!$$elem === false) {
                    return $198(__$ctx);
                } else {
                    return $203(__$ctx);
                }
            } else {
                return $203(__$ctx);
            }
        } else {
            return $203(__$ctx);
        }
    }
    function $198(__$ctx) {
        var __r0, __r9, __r1, __r4, __r5, __r6, __r7, __r8, __r2, __r3;
        return '', __r0 = __$ctx['__$anflg9'], __$ctx['__$anflg9'] = true, __r9 = ('', __r1 = $$mode, $$mode = 'wrap', __r4 = __$ctx.ctx, __r5 = __r4.text, __r4.text = ('', __r2 = $$mode, $$mode = 'link', __r3 = $454(__$ctx), $$mode = __r2, '', __r3), __r6 = __$ctx.ctx, __r7 = __r6.answer, __r6.answer = {
            elem: 'hint',
            content: __$ctx.ctx.data[2]
        }, __r8 = $476(__$ctx), $$mode = __r1, __r4.text = __r5, __r6.answer = __r7, '', __r8), __$ctx['__$anflg9'] = __r0, '', __r9;
        return;
    }
    function $203(__$ctx) {
        if (!($$mods && $$mods.type === 'nav') === false) {
            if (!!$$elem === false) {
                var __r0, __r1;
                return [
                    ('', __r0 = $$mode, $$mode = 'link', __r1 = $454(__$ctx), $$mode = __r0, '', __r1),
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
                return $209(__$ctx);
            }
        } else {
            return $209(__$ctx);
        }
    }
    function $209(__$ctx) {
        if (!(__$ctx['__$anflg7'] !== true) === false) {
            if (!($$mods && $$mods.type === 'fact') === false) {
                if (!!$$elem === false) {
                    return $213(__$ctx);
                } else {
                    return $218(__$ctx);
                }
            } else {
                return $218(__$ctx);
            }
        } else {
            return $218(__$ctx);
        }
    }
    function $213(__$ctx) {
        var __r9, __r0, __r1, __r4, __r5, __r8, __r11, __r10, __r2, __r3, __r6, __r7;
        return '', __r0 = __$ctx['__$anflg7'], __$ctx['__$anflg7'] = true, __r11 = ('', __r1 = $$mode, $$mode = 'wrap-jump', __r4 = __$ctx.ctx, __r5 = __r4.text, __r4.text = ('', __r2 = $$mode, $$mode = 'text', __r3 = $289(__$ctx), $$mode = __r2, '', __r3), __r8 = __$ctx.ctx, __r9 = __r8.answer, __r8.answer = ('', __r6 = $$mode, $$mode = 'answer', __r7 = $413(__$ctx), $$mode = __r6, '', __r7), __r10 = $466(__$ctx), $$mode = __r1, __r4.text = __r5, __r8.answer = __r9, '', __r10), __$ctx['__$anflg7'] = __r0, '', __r11;
        return;
    }
    function $218(__$ctx) {
        if (!($$mods && $$mods.type === 'fact') === false) {
            if (!!$$elem === false) {
                var __r0, __r1, __r2, __r3;
                return [
                    ('', __r0 = $$mode, $$mode = 'text', __r1 = $289(__$ctx), $$mode = __r0, '', __r1),
                    ('', __r2 = $$mode, $$mode = 'answer', __r3 = $413(__$ctx), $$mode = __r2, '', __r3)
                ];
                return;
            } else {
                return $224(__$ctx);
            }
        } else {
            return $224(__$ctx);
        }
    }
    function $224(__$ctx) {
        if ($$elem === 'hint') {
            return __$ctx.isArray(__$ctx.ctx.content) ? __$ctx.ctx.content : __$ctx.xmlEscape(__$ctx.ctx.content);
            return;
        } else {
            if (!(__$ctx['__$anflg6'] !== true) === false) {
                if (!!$$elem === false) {
                    var __r0, __r3, __r1, __r2;
                    return '', __r0 = __$ctx['__$anflg6'], __$ctx['__$anflg6'] = true, __r3 = ('', __r1 = $$mode, $$mode = 'wrap', __r2 = $476(__$ctx), $$mode = __r1, '', __r2), __$ctx['__$anflg6'] = __r0, '', __r3;
                    return;
                } else {
                    return $233(__$ctx);
                }
            } else {
                return $233(__$ctx);
            }
        }
    }
    function $233(__$ctx) {
        var __t = $$elem;
        if (__t === 'value' || __t === 'text' || __t === 'hint') {
            return __$ctx.xmlEscape(__$ctx.ctx.content);
            return;
        } else {
            return $725(__$ctx);
        }
    }
    function $254(__$ctx) {
        if (!($$mods && $$mods.type === 'nav') === false) {
            if (!!$$elem === false) {
                return [{ mods: { nav: 'yes' } }];
                return;
            } else {
                return $260(__$ctx);
            }
        } else {
            return $260(__$ctx);
        }
    }
    function $260(__$ctx) {
        if (!!$$elem === false) {
            var _$2hmix = __$ctx.ctx.mix || [];
            _$2hmix.push({
                block: 'i-pressed-controller',
                js: true
            });
            __$ctx.isFirst() && _$2hmix.push({ elemMods: { pos: 'first' } });
            __$ctx.isLast() && _$2hmix.push({ elemMods: { pos: 'last' } });
            __$ctx.ctx.pers && _$2hmix.push({ elemMods: { pers: 'yes' } });
            return _$2hmix;
            return;
        } else {
            return $725(__$ctx);
        }
    }
    function $289(__$ctx) {
        if (!($$mods && $$mods.type === 'icon') === false) {
            return $290(__$ctx);
        } else {
            return $301(__$ctx);
        }
    }
    function $290(__$ctx) {
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
                return $296(__$ctx);
            }
        } else {
            return $296(__$ctx);
        }
    }
    function $296(__$ctx) {
        if (!!$$elem === false) {
            return {
                elem: 'text',
                content: __$ctx._text
            };
            return;
        } else {
            return $301(__$ctx);
        }
    }
    function $301(__$ctx) {
        if (!($$mods && $$mods.type === 'weather') === false) {
            if (!!$$elem === false) {
                return __$ctx.ctx.data[1];
                return;
            } else {
                return $307(__$ctx);
            }
        } else {
            return $307(__$ctx);
        }
    }
    function $307(__$ctx) {
        if (!($$mods && $$mods.type === 'traffic') === false) {
            if (!!$$elem === false) {
                return {
                    elem: 'text',
                    content: __$ctx.ctx.data[1]
                };
                return;
            } else {
                return $313(__$ctx);
            }
        } else {
            return $313(__$ctx);
        }
    }
    function $313(__$ctx) {
        if (!($$mods && $$mods.type === 'text') === false) {
            if (!!$$elem === false) {
                return {
                    elem: 'text',
                    content: __$ctx._.isArray(__$ctx.ctx.data) ? __$ctx.ctx.data[1] : __$ctx.ctx.data
                };
                return;
            } else {
                return $319(__$ctx);
            }
        } else {
            return $319(__$ctx);
        }
    }
    function $319(__$ctx) {
        if (!($$mods && $$mods.type === 'fact') === false) {
            if (!!$$elem === false) {
                return {
                    elem: 'text',
                    content: __$ctx.ctx.data[1]
                };
                return;
            } else {
                return $725(__$ctx);
            }
        } else {
            return $725(__$ctx);
        }
    }
    function $327(__$ctx) {
        if (!($$mods && $$mods.type === 'icon') === false) {
            if (!!$$elem === false) {
                return $330(__$ctx);
            } else {
                return $333(__$ctx);
            }
        } else {
            return $333(__$ctx);
        }
    }
    function $330(__$ctx) {
        return {
            elem: 'value',
            content: __$ctx.xmlEscape(__$ctx._fact)
        };
        return;
    }
    function $333(__$ctx) {
        if (!($$mods && $$mods.type === 'weather') === false) {
            if (!!$$elem === false) {
                return {
                    elem: 'value',
                    content: __$ctx.ctx.data[2]
                };
                return;
            } else {
                return $725(__$ctx);
            }
        } else {
            return $725(__$ctx);
        }
    }
    function $341(__$ctx) {
        if (!($$mods && $$mods.type === 'icon') === false) {
            if (!!$$elem === false) {
                return $344(__$ctx);
            } else {
                return $347(__$ctx);
            }
        } else {
            return $347(__$ctx);
        }
    }
    function $344(__$ctx) {
        return {
            elem: 'icon',
            mods: { type: 'favicon' },
            svg: __$ctx._icons.svg,
            png: __$ctx._icons.png
        };
        return;
    }
    function $347(__$ctx) {
        if (!($$mods && $$mods.type === 'weather') === false) {
            if (!!$$elem === false) {
                return {
                    elem: 'icon',
                    elemMods: { weather: __$ctx.ctx.data[3].replace('-', 'minus-').replace('+', 'plus-').replace(/_/g, '-') }
                };
                return;
            } else {
                return $725(__$ctx);
            }
        } else {
            return $725(__$ctx);
        }
    }
    function $364(__$ctx) {
        if (!($$mods && $$mods.type === 'nav') === false) {
            if (!!$$elem === false) {
                return { val: __$ctx._url };
                return;
            } else {
                return $370(__$ctx);
            }
        } else {
            return $370(__$ctx);
        }
    }
    function $370(__$ctx) {
        if (!!$$elem === false) {
            return true;
            return;
        } else {
            if (!__$ctx.ctx.pers === false) {
                if (!!$$elem === false) {
                    return { pers: 1 };
                    return;
                } else {
                    return $379(__$ctx);
                }
            } else {
                return $379(__$ctx);
            }
        }
    }
    function $379(__$ctx) {
        if (!__$ctx.ctx['search_cgi'] === false) {
            if (!!$$elem === false) {
                return { cgi: __$ctx.ctx['search_cgi'] };
                return;
            } else {
                return $725(__$ctx);
            }
        } else {
            return $725(__$ctx);
        }
    }
    function $387(__$ctx) {
        if (!(__$ctx['__$anflg16'] !== true) === false) {
            if (!($$mods && $$mods.type === 'icon') === false) {
                if (!!$$elem === false) {
                    return $391(__$ctx);
                } else {
                    return $396(__$ctx);
                }
            } else {
                return $396(__$ctx);
            }
        } else {
            return $396(__$ctx);
        }
    }
    function $391(__$ctx) {
        if (!Array.isArray(__$ctx.ctx.data)) {
            return undefined;
        } else {
            undefined;
        }
        var _$3odata = __$ctx.ctx.data.slice(1), _$3oinfo = _$3odata[1] || {};
        if (!_$3oinfo.icon) {
            return undefined;
        } else {
            undefined;
        }
        var _$3oicons = {};
        if (Array.isArray(_$3oinfo.icon[0])) {
            _$3oinfo.icon.forEach(function (icon) {
                _$3oicons[icon[0]] = icon[1];
            });
        } else {
            _$3oicons[_$3oinfo.icon[0]] = _$3oinfo.icon[1];
        }
        if (_$3oinfo.url) {
            __$ctx._url = (/[\/]{2}/.test(_$3oinfo.url) ? '' : 'http://') + _$3oinfo.url;
        } else {
            undefined;
        }
        {
            '';
            var __r0 = __$ctx['__$anflg16'];
            __$ctx['__$anflg16'] = true;
            {
                '';
                var __r1 = __$ctx._text;
                __$ctx._text = __$ctx.xmlEscape(_$3odata[0]) || '';
                var __r2 = __$ctx._icons;
                __$ctx._icons = _$3oicons;
                var __r3 = __$ctx._fact;
                __$ctx._fact = _$3oinfo.fact || '';
                $387(__$ctx);
                __$ctx._text = __r1;
                __$ctx._icons = __r2;
                __$ctx._fact = __r3;
                '';
            }
            __$ctx['__$anflg16'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $396(__$ctx) {
        if ($$elem === 'link') {
            if (!(__$ctx['__$anflg12'] !== true) === false) {
                return $399(__$ctx);
            } else {
                return $402(__$ctx);
            }
        } else {
            return $402(__$ctx);
        }
    }
    function $399(__$ctx) {
        var __r0, __r4, __r1, __r2, __r3;
        return '', __r0 = __$ctx['__$anflg12'], __$ctx['__$anflg12'] = true, __r4 = ('', __r1 = __$ctx.ctx, __$ctx.ctx = {
            block: 'link',
            url: __$ctx.ctx.url,
            target: '_blank',
            mix: {
                block: $$block,
                elem: $$elem
            },
            content: __$ctx.ctx.content
        }, __r2 = $$mode, $$mode = '', __r3 = $726(__$ctx), __$ctx.ctx = __r1, $$mode = __r2, '', __r3), __$ctx['__$anflg12'] = __r0, '', __r4;
        return;
    }
    function $402(__$ctx) {
        if (!(__$ctx['__$anflg8'] !== true) === false) {
            if (!($$mods && $$mods.type === 'nav') === false) {
                if (!!$$elem === false) {
                    var _$2surl = __$ctx.ctx.data[4];
                    {
                        '';
                        var __r0 = __$ctx['__$anflg8'];
                        __$ctx['__$anflg8'] = true;
                        {
                            '';
                            var __r1 = __$ctx._url;
                            __$ctx._url = (_$2surl.match(/^\w[\w-]*:\/\//g) ? '' : 'http://') + _$2surl;
                            $387(__$ctx);
                            __$ctx._url = __r1;
                            '';
                        }
                        __$ctx['__$anflg8'] = __r0;
                        '';
                    }
                    undefined;
                    return;
                } else {
                    return $725(__$ctx);
                }
            } else {
                return $725(__$ctx);
            }
        } else {
            return $725(__$ctx);
        }
    }
    function $413(__$ctx) {
        if (!($$mods && $$mods.type === 'weather') === false) {
            if (!!$$elem === false) {
                return $416(__$ctx);
            } else {
                return $419(__$ctx);
            }
        } else {
            return $419(__$ctx);
        }
    }
    function $416(__$ctx) {
        var __r0, __r1, __r2, __r3;
        return {
            elem: 'answer',
            content: [
                ('', __r0 = $$mode, $$mode = 'value', __r1 = $327(__$ctx), $$mode = __r0, '', __r1),
                ('', __r2 = $$mode, $$mode = 'icon', __r3 = $341(__$ctx), $$mode = __r2, '', __r3)
            ]
        };
        return;
    }
    function $419(__$ctx) {
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
                return $425(__$ctx);
            }
        } else {
            return $425(__$ctx);
        }
    }
    function $425(__$ctx) {
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
                return $725(__$ctx);
            }
        } else {
            return $725(__$ctx);
        }
    }
    function $443(__$ctx) {
        return __$ctx.ctx.svg ? 'background-image:none,url("' + __$ctx.ctx.svg + '")' : '';
        return;
    }
    function $448(__$ctx) {
        return __$ctx.ctx.png ? 'background-image:url("' + __$ctx.ctx.png + '");' : '';
        return;
    }
    function $454(__$ctx) {
        return {
            elem: 'link',
            url: __$ctx._url,
            content: __$ctx.ctx.data[3]
        };
        return;
    }
    function $461(__$ctx) {
        var __r0, __r1, __r2, __r3;
        return '', __r0 = $$mode, $$mode = 'wrap-column', __r1 = __$ctx.ctx, __r2 = __r1.column, __r1.column = 'ellipsis', __r3 = $471(__$ctx), $$mode = __r0, __r1.column = __r2, '', __r3;
        return;
    }
    function $466(__$ctx) {
        var __r0, __r1, __r2, __r3;
        return '', __r0 = $$mode, $$mode = 'wrap-column', __r1 = __$ctx.ctx, __r2 = __r1.column, __r1.column = 'jump', __r3 = $471(__$ctx), $$mode = __r0, __r1.column = __r2, '', __r3;
        return;
    }
    function $471(__$ctx) {
        return {
            elem: 'wrapper',
            elemMods: { column: __$ctx.ctx.column },
            text: __$ctx.ctx.text,
            answer: __$ctx.ctx.answer
        };
        return;
    }
    function $476(__$ctx) {
        return {
            elem: 'wrapper',
            content: __$ctx.ctx.text
        };
        return;
    }
    function $482(__$ctx) {
        if (!(__$ctx['__$anflg11'] !== true) === false) {
            if (!!$$elem === false) {
                var __r0, __r1;
                var _$33mix = ('', __r0 = __$ctx['__$anflg11'], __$ctx['__$anflg11'] = true, __r1 = $482(__$ctx), __$ctx['__$anflg11'] = __r0, '', __r1) || [];
                _$33mix.push({
                    block: 'i-pressed-controller',
                    js: true
                });
                return _$33mix;
                return;
            } else {
                return $725(__$ctx);
            }
        } else {
            return $725(__$ctx);
        }
    }
    function $498(__$ctx) {
        if (!(__$ctx['__$anflg10'] !== true) === false) {
            if (!($$mods && $$mods.disabled === 'yes') === false) {
                if (!!$$elem === false) {
                    var __r0, __r1;
                    var _$31attrs = ('', __r0 = __$ctx['__$anflg10'], __$ctx['__$anflg10'] = true, __r1 = $498(__$ctx), __$ctx['__$anflg10'] = __r0, '', __r1) || {};
                    _$31attrs.tabindex = -1;
                    _$31attrs['aria-disabled'] = true;
                    return _$31attrs;
                    return;
                } else {
                    return $507(__$ctx);
                }
            } else {
                return $507(__$ctx);
            }
        } else {
            return $507(__$ctx);
        }
    }
    function $507(__$ctx) {
        if (!!$$elem === false) {
            return $509(__$ctx);
        } else {
            return $725(__$ctx);
        }
    }
    function $509(__$ctx) {
        var _$30ctx = __$ctx.ctx, _$30attrs = {};
        [
            'title',
            'target',
            'id',
            'tabindex'
        ].forEach(function (param) {
            if (_$30ctx.hasOwnProperty(param)) {
                _$30attrs[param] = String(_$30ctx[param]);
            } else {
                undefined;
            }
        });
        if (_$30ctx.url !== null && typeof _$30ctx.url !== 'undefined') {
            if (__$ctx.isSimple(_$30ctx.url)) {
                _$30attrs.href = String(_$30ctx.url);
            } else {
                var _$30buf = [];
                {
                    '';
                    var __r0 = $$mode;
                    $$mode = '';
                    var __r1 = __$ctx._buf;
                    __$ctx._buf = _$30buf;
                    var __r2 = __$ctx.ctx;
                    __$ctx.ctx = _$30ctx.url;
                    $726(__$ctx);
                    $$mode = __r0;
                    __$ctx._buf = __r1;
                    __$ctx.ctx = __r2;
                    '';
                }
                undefined;
                _$30attrs.href = _$30buf.join('');
            }
        } else {
            _$30attrs.role = 'button';
            if (!_$30attrs.tabindex) {
                _$30attrs.tabindex = '0';
            } else {
                undefined;
            }
        }
        return _$30attrs;
        return;
    }
    function $532(__$ctx) {
        if (!(__$ctx['__$anflg5'] !== true) === false) {
            {
                '';
                var __r0 = __$ctx['__$anflg5'];
                __$ctx['__$anflg5'] = true;
                {
                    '';
                    var __r1 = __$ctx._titleId;
                    __$ctx._titleId = __$ctx.generateId();
                    $532(__$ctx);
                    __$ctx._titleId = __r1;
                    '';
                }
                __$ctx['__$anflg5'] = __r0;
                '';
            }
            undefined;
            return;
        } else {
            return $562(__$ctx);
        }
    }
    function $562(__$ctx) {
        if ($$mode === 'js') {
            if (!!$$elem === false) {
                return true;
                return;
            } else {
                return $725(__$ctx);
            }
        } else {
            return $725(__$ctx);
        }
    }
    function $571(__$ctx) {
        if ($$elem === 'body') {
            return $572(__$ctx);
        } else {
            return $577(__$ctx);
        }
    }
    function $572(__$ctx) {
        if (!!__$ctx.ctx._iGlobal === false) {
            return $574(__$ctx);
        } else {
            return $577(__$ctx);
        }
    }
    function $574(__$ctx) {
        var __r0, __r1, __r2, __r3, __r4, __r5;
        var _$1omix = ('', __r0 = __$ctx.ctx, __r1 = __r0._iGlobal, __r0._iGlobal = true, __r2 = $572(__$ctx), __r0._iGlobal = __r1, '', __r2), _$1ojsParams = ('', __r3 = $$mode, $$mode = 'js-params', __r4 = $$elem, $$elem = '', __r5 = $670(__$ctx), $$mode = __r3, $$elem = __r4, '', __r5);
        _$1omix ? _$1omix.push(_$1ojsParams) : _$1omix = [_$1ojsParams];
        return _$1omix;
        return;
    }
    function $577(__$ctx) {
        if (!(__$ctx['__$anflg4'] !== true) === false) {
            if (!!$$elem === false) {
                var __r0, __r1;
                var _$1mmix = ('', __r0 = __$ctx['__$anflg4'], __$ctx['__$anflg4'] = true, __r1 = $571(__$ctx), __$ctx['__$anflg4'] = __r0, '', __r1) || [];
                _$1mmix.push({
                    block: 'i-ua',
                    mods: { interaction: 'yes' },
                    js: true
                });
                return _$1mmix;
                return;
            } else {
                return $725(__$ctx);
            }
        } else {
            return $725(__$ctx);
        }
    }
    function $644(__$ctx) {
        if (!__$ctx.ctx.url === false) {
            if (!!__$ctx._notIE === false) {
                if (!!__$ctx.ctx.ie === false) {
                    {
                        '';
                        var __r0 = $$mode;
                        $$mode = '';
                        var __r1 = __$ctx._notIE;
                        __$ctx._notIE = true;
                        var __r2 = __$ctx.ctx;
                        __$ctx.ctx = [__$ctx.ctx];
                        $726(__$ctx);
                        $$mode = __r0;
                        __$ctx._notIE = __r1;
                        __$ctx.ctx = __r2;
                        '';
                    }
                    return;
                } else {
                    return $657(__$ctx);
                }
            } else {
                return $657(__$ctx);
            }
        } else {
            return $657(__$ctx);
        }
    }
    function $656(__$ctx) {
        {
            '';
            var __r0 = $$mode;
            $$mode = '';
            var __r1 = __$ctx.ctx;
            __$ctx.ctx = [
                __$ctx.ctx.src16 && {
                    elem: 'link',
                    attrs: {
                        rel: 'shortcut icon',
                        href: __$ctx.ctx.src16
                    }
                },
                __$ctx.ctx.src152 && {
                    elem: 'link',
                    attrs: {
                        rel: 'apple-touch-icon-precomposed',
                        sizes: '152x152',
                        href: __$ctx.ctx.src152
                    }
                },
                __$ctx.ctx.src144 && {
                    elem: 'link',
                    attrs: {
                        rel: 'apple-touch-icon-precomposed',
                        sizes: '144x144',
                        href: __$ctx.ctx.src144
                    }
                },
                __$ctx.ctx.src120 && {
                    elem: 'link',
                    attrs: {
                        rel: 'apple-touch-icon-precomposed',
                        sizes: '120x120',
                        href: __$ctx.ctx.src120
                    }
                },
                __$ctx.ctx.src114 && {
                    elem: 'link',
                    attrs: {
                        rel: 'apple-touch-icon-precomposed',
                        sizes: '114x114',
                        href: __$ctx.ctx.src114
                    }
                },
                __$ctx.ctx.src76 && {
                    elem: 'link',
                    attrs: {
                        rel: 'apple-touch-icon-precomposed',
                        sizes: '76x76',
                        href: __$ctx.ctx.src76
                    }
                },
                __$ctx.ctx.src72 && {
                    elem: 'link',
                    attrs: {
                        rel: 'apple-touch-icon-precomposed',
                        sizes: '72x72',
                        href: __$ctx.ctx.src72
                    }
                },
                __$ctx.ctx.src57 && {
                    elem: 'link',
                    attrs: {
                        rel: 'apple-touch-icon-precomposed',
                        href: __$ctx.ctx.src57
                    }
                }
            ];
            $726(__$ctx);
            $$mode = __r0;
            __$ctx.ctx = __r1;
            '';
        }
        return;
    }
    function $657(__$ctx) {
        if (!(__$ctx['__$anflg3'] !== true) === false) {
            if (!!$$elem === false) {
                return $660(__$ctx);
            } else {
                return $725(__$ctx);
            }
        } else {
            return $725(__$ctx);
        }
    }
    function $660(__$ctx) {
        var __r1, __r2;
        __$ctx._buf.push('<!DOCTYPE html>');
        {
            '';
            var __r0 = __$ctx['__$anflg3'];
            __$ctx['__$anflg3'] = true;
            {
                '';
                var __r3 = __$ctx.ctx;
                __$ctx.ctx = {
                    elem: 'root',
                    content: [
                        {
                            elem: 'head',
                            content: [
                                {
                                    elem: 'meta',
                                    attrs: { charset: 'utf-8' }
                                },
                                {
                                    tag: 'title',
                                    content: __$ctx.ctx.title
                                },
                                {
                                    elem: 'meta',
                                    attrs: {
                                        name: 'viewport',
                                        content: __$ctx.ctx.zoom ? 'width=device-width,initial-scale=1' : 'width=device-width,maximum-scale=1,initial-scale=1,user-scalable=0'
                                    }
                                },
                                {
                                    elem: 'meta',
                                    attrs: {
                                        name: 'format-detection',
                                        content: 'telephone=no'
                                    }
                                },
                                {
                                    elem: 'link',
                                    attrs: {
                                        name: 'apple-mobile-web-app-capable',
                                        content: 'yes'
                                    }
                                },
                                {
                                    block: 'i-ua',
                                    js: true
                                },
                                __$ctx.ctx.head
                            ]
                        },
                        {
                            elem: 'body',
                            mix: [
                                __$ctx.ctx,
                                {
                                    block: 'i-ua',
                                    js: true
                                }
                            ].concat(('', __r1 = $$mode, $$mode = 'mix', __r2 = $571(__$ctx), $$mode = __r1, '', __r2) || [], __$ctx.ctx.mix || []),
                            content: __$ctx.ctx.content
                        }
                    ]
                };
                var __r4 = $$mode;
                $$mode = '';
                $726(__$ctx);
                __$ctx.ctx = __r3;
                $$mode = __r4;
                '';
            }
            __$ctx['__$anflg3'] = __r0;
            '';
        }
        return;
    }
    function $670(__$ctx) {
        if (!!$$elem === false) {
            return $672(__$ctx);
        } else {
            return $725(__$ctx);
        }
    }
    function $672(__$ctx) {
        var __r0, __r1, __r2, __r3;
        var _$y_this = __$ctx['i-global'], _$yjs = {}, _$yblock = {
                block: 'i-global',
                js: _$yjs
            }, _$ye;
        for (_$ye in _$y_this) {
            if (_$y_this.hasOwnProperty(_$ye) && ('', __r0 = $$mode, $$mode = 'public-params', __r1 = $$block, $$block = 'i-global', __r2 = $$elem, $$elem = _$ye, __r3 = $686(__$ctx), $$mode = __r0, $$block = __r1, $$elem = __r2, '', __r3)) {
                _$yjs[_$ye] = _$y_this[_$ye];
            } else {
                undefined;
            }
        }
        return _$yblock;
        return;
    }
    function $680(__$ctx) {
        var __r0, __r1, __r2, __r3;
        if (!__$ctx.ctx) {
            return '';
        } else {
            undefined;
        }
        var _$zctx = __$ctx.ctx, _$zkeyset = _$zctx.keyset, _$zkey = _$zctx.key, _$zparams = _$zctx.params || {};
        if (!(_$zkeyset || _$zkey)) {
            return '';
        } else {
            undefined;
        }
        if (_$zctx.content) {
            var _$zcnt;
            _$zparams.content = (_$zcnt = [], '', __r0 = __$ctx._buf, __$ctx._buf = _$zcnt, __r1 = $$mode, $$mode = '', __r2 = __$ctx.ctx, __$ctx.ctx = _$zctx.content, __r3 = $726(__$ctx), __$ctx._buf = __r0, $$mode = __r1, __$ctx.ctx = __r2, '', __r3, _$zcnt.join(''));
        } else {
            undefined;
        }
        __$ctx._buf.push(BEM.I18N(_$zkeyset, _$zkey, _$zparams));
        return;
    }
    function $686(__$ctx) {
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
            return $725(__$ctx);
        }
    }
    function $691(__$ctx) {
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
                    return $715(__$ctx);
                } else {
                    return $725(__$ctx);
                }
            }
        }
    }
    function $715(__$ctx) {
        var _$mparams = __$ctx.ctx.params || {}, _$miGlobal = __$ctx['i-global'], _$misTldChanged = _$mparams.tld && _$mparams.tld !== _$miGlobal.tld, _$mtld, _$mxYaDomain, _$myaDomain;
        if (_$misTldChanged) {
            _$mtld = _$mparams.tld;
            _$mxYaDomain = _$mtld === 'tr' ? 'yandex.com.tr' : 'yandex.' + _$mtld;
            _$myaDomain = [
                'ua',
                'by',
                'kz'
            ].indexOf(_$mtld) != -1 ? 'yandex.ru' : _$mxYaDomain;
            _$miGlobal['content-region'] = _$mtld;
            _$miGlobal['click-host'] = '//clck.' + _$myaDomain;
            _$miGlobal['passport-host'] = 'https://passport.' + _$myaDomain;
            _$miGlobal['pass-host'] = '//pass.' + _$mxYaDomain;
            _$miGlobal['social-host'] = '//social.' + _$mxYaDomain;
            _$miGlobal['export-host'] = '//export.' + _$mxYaDomain;
        } else {
            undefined;
        }
        for (var _$mp in _$mparams) {
            _$miGlobal[_$mp] = _$mparams[_$mp];
        }
        return;
    }
    function $718(__$ctx) {
        if (!!$$elem === false) {
            return {};
            return;
        } else {
            return $725(__$ctx);
        }
    }
    function $725(__$ctx) {
        if ($$mode === '') {
            return $726(__$ctx);
        } else {
            return $731(__$ctx);
        }
    }
    function $726(__$ctx) {
        if (!!__$ctx['i-global'] === false) {
            return $728(__$ctx);
        } else {
            return $731(__$ctx);
        }
    }
    function $728(__$ctx) {
        var __r0, __r1, __r2, __r3, __r4, __r5, __r6;
        var _$kps = {}, _$kes = [
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
            ], _$ke;
        while (_$ke = _$kes.shift()) {
            _$kps[_$ke] = ('', __r0 = $$mode, $$mode = 'default', __r1 = $$block, $$block = 'i-global', __r2 = $$elem, $$elem = _$ke, __r3 = $691(__$ctx), $$mode = __r0, $$block = __r1, $$elem = __r2, '', __r3);
        }
        __$ctx['i-global'] = __$ctx._.extend(_$kps, ('', __r4 = $$mode, $$mode = 'env', __r5 = $$block, $$block = 'i-global', __r6 = $718(__$ctx), $$mode = __r4, $$block = __r5, '', __r6));
        applyc(__$ctx);
        undefined;
        return;
    }
    function $731(__$ctx) {
        var __t = $$block;
        if (__t === 'i-ua') {
            var __t = $$mode;
            if (__t === 'content') {
                return $733(__$ctx);
            } else if (__t === 'bem') {
                if (!!$$elem === false) {
                    return false;
                    return;
                } else {
                    return $767(__$ctx);
                }
            } else if (__t === 'tag') {
                if (!!$$elem === false) {
                    return 'script';
                    return;
                } else {
                    return $767(__$ctx);
                }
            } else {
                return $767(__$ctx);
            }
        } else if (__t === 'i-jquery') {
            if ($$mode === 'default') {
                if ($$elem === 'core') {
                    if (!(__$ctx['__$anflg1'] !== true) === false) {
                        return $760(__$ctx);
                    } else {
                        return $767(__$ctx);
                    }
                } else {
                    return $767(__$ctx);
                }
            } else {
                return $767(__$ctx);
            }
        } else {
            return $767(__$ctx);
        }
    }
    function $733(__$ctx) {
        if (!(__$ctx['__$anflg2'] !== true) === false) {
            if (!!$$elem === false) {
                var __r0, __r1;
                var _$jc = ('', __r0 = __$ctx['__$anflg2'], __$ctx['__$anflg2'] = true, __r1 = $733(__$ctx), __$ctx['__$anflg2'] = __r0, '', __r1);
                _$jc += [
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
                return _$jc;
                return;
            } else {
                return $739(__$ctx);
            }
        } else {
            return $739(__$ctx);
        }
    }
    function $739(__$ctx) {
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
            return $767(__$ctx);
        }
    }
    function $760(__$ctx) {
        var __r0, __r4, __r1, __r2, __r3;
        return '', __r0 = __$ctx['__$anflg1'], __$ctx['__$anflg1'] = true, __r4 = ('', __r1 = __$ctx.ctx, __$ctx.ctx = {
            block: 'b-page',
            elem: 'js',
            url: 'http://yastatic.net/jquery/1.8.3/jquery.min.js'
        }, __r2 = $$mode, $$mode = '', __r3 = $726(__$ctx), __$ctx.ctx = __r1, $$mode = __r2, '', __r3), __$ctx['__$anflg1'] = __r0, '', __r4;
        return;
    }
    function $767(__$ctx) {
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
                        return $788(__$ctx);
                    } else {
                        return $793(__$ctx);
                    }
                } else {
                    return $793(__$ctx);
                }
            } else {
                return $793(__$ctx);
            }
        }
    }
    function $788(__$ctx) {
        var __r0, __r1;
        function _$6follow() {
            if (this.ctx.link === 'no-follow') {
                return undefined;
            } else {
                undefined;
            }
            var data = this._links[this.ctx.link];
            return '', __r0 = this.ctx, this.ctx = data, __r1 = $1(__$ctx), this.ctx = __r0, '', __r1;
        }
        if (!cache || !__$ctx._cacheLog) {
            return _$6follow.call(__$ctx);
        } else {
            undefined;
        }
        var _$6contents = __$ctx._buf.slice(__$ctx._cachePos).join('');
        __$ctx._cachePos = __$ctx._buf.length;
        __$ctx._cacheLog.push(_$6contents, {
            log: __$ctx._localLog.slice(),
            link: __$ctx.ctx.link
        });
        var _$6res = _$6follow.call(__$ctx);
        __$ctx._cachePos = __$ctx._buf.length;
        return _$6res;
        return;
    }
    function $793(__$ctx) {
        if (!cache === false) {
            if (!__$ctx.ctx === false) {
                if (!__$ctx.ctx.cache === false) {
                    return $797(__$ctx);
                } else {
                    return $802(__$ctx);
                }
            } else {
                return $802(__$ctx);
            }
        } else {
            return $802(__$ctx);
        }
    }
    function $797(__$ctx) {
        var _$5cached;
        function _$5setProperty(obj, key, value) {
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
        if (_$5cached = cache.get(__$ctx.ctx.cache)) {
            var _$5oldLinks = __$ctx._links;
            if (__$ctx.ctx.links) {
                __$ctx._links = __$ctx.ctx.links;
            } else {
                undefined;
            }
            for (var _$5i = 0; _$5i < _$5cached.log.length; _$5i++) {
                if (typeof _$5cached.log[_$5i] === 'string') {
                    __$ctx._buf.push(_$5cached.log[_$5i]);
                    continue;
                } else {
                    undefined;
                }
                var _$5log = _$5cached.log[_$5i], _$5reverseLog;
                _$5reverseLog = _$5log.log.map(function (entry) {
                    return {
                        key: entry[0],
                        value: _$5setProperty(this, entry[0], entry[1])
                    };
                }, __$ctx).reverse();
                {
                    '';
                    var __r0 = __$ctx.ctx, __r1 = __r0.cache;
                    __r0.cache = null;
                    var __r2 = __$ctx._cacheLog;
                    __$ctx._cacheLog = null;
                    var __r3 = __$ctx.ctx, __r4 = __r3.link;
                    __r3.link = _$5log.link;
                    $1(__$ctx);
                    __r0.cache = __r1;
                    __$ctx._cacheLog = __r2;
                    __r3.link = __r4;
                    '';
                }
                undefined;
                _$5reverseLog.forEach(function (entry) {
                    _$5setProperty(this, entry.key, entry.value);
                }, __$ctx);
            }
            __$ctx._links = _$5oldLinks;
            return _$5cached.res;
        } else {
            undefined;
        }
        var _$5cacheLog = [], _$5res;
        {
            '';
            var __r5 = __$ctx.ctx, __r6 = __r5.cache;
            __r5.cache = null;
            var __r7 = __$ctx._cachePos;
            __$ctx._cachePos = __$ctx._buf.length;
            var __r8 = __$ctx._cacheLog;
            __$ctx._cacheLog = _$5cacheLog;
            var __r9 = __$ctx._localLog;
            __$ctx._localLog = [];
            {
                _$5res = $1(__$ctx);
                var _$5tail = __$ctx._buf.slice(__$ctx._cachePos).join('');
                if (_$5tail) {
                    _$5cacheLog.push(_$5tail);
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
            log: _$5cacheLog,
            res: _$5res
        });
        return _$5res;
        return;
    }
    function $802(__$ctx) {
        var __t = $$mode;
        if (__t === 'default') {
            return $804(__$ctx);
        } else if (__t === '') {
            if (!__$ctx._.isSimple(__$ctx.ctx) === false) {
                __$ctx._listLength--;
                var _$3ctx = __$ctx.ctx;
                (_$3ctx && _$3ctx !== true || _$3ctx === 0) && __$ctx._buf.push(_$3ctx);
                return;
            } else {
                if (!!__$ctx.ctx === false) {
                    __$ctx._listLength--;
                    return;
                } else {
                    if (!__$ctx._.isArray(__$ctx.ctx) === false) {
                        return $813(__$ctx);
                    } else {
                        if (!true === false) {
                            return $816(__$ctx);
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
    function $804(__$ctx) {
        var __r13, __r0, __r4, __r5, __r6, __r7, __r8, __r9, __r10, __r11, __r12, __r1, __r14, __r15, __r16, __r17, __r20, __r21, __r22, __r23, __r24, __r25;
        var _$4BEM_ = __$ctx.BEM, _$4v = __$ctx.ctx, _$4buf = __$ctx._buf, _$4tag;
        _$4tag = ('', __r0 = $$mode, $$mode = 'tag', __r1 = $1(__$ctx), $$mode = __r0, '', __r1);
        typeof _$4tag != 'undefined' || (_$4tag = _$4v.tag);
        typeof _$4tag != 'undefined' || (_$4tag = 'div');
        if (_$4tag) {
            var _$4jsParams, _$4js;
            if ($$block && _$4v.js !== false) {
                _$4js = ('', __r4 = $$mode, $$mode = 'js', __r5 = $1(__$ctx), $$mode = __r4, '', __r5);
                _$4js = _$4js ? __$ctx._.extend(_$4v.js, _$4js === true ? {} : _$4js) : _$4v.js === true ? {} : _$4v.js;
                _$4js && ((_$4jsParams = {})[_$4BEM_.INTERNAL.buildClass($$block, _$4v.elem)] = _$4js);
            } else {
                undefined;
            }
            _$4buf.push('<', _$4tag);
            var _$4isBEM = ('', __r6 = $$mode, $$mode = 'bem', __r7 = $1(__$ctx), $$mode = __r6, '', __r7);
            typeof _$4isBEM != 'undefined' || (_$4isBEM = typeof _$4v.bem != 'undefined' ? _$4v.bem : _$4v.block || _$4v.elem);
            var _$4cls = ('', __r8 = $$mode, $$mode = 'cls', __r9 = $1(__$ctx), $$mode = __r8, '', __r9);
            _$4cls || (_$4cls = _$4v.cls);
            var _$4addJSInitClass = _$4v.block && _$4jsParams;
            if (_$4isBEM || _$4cls) {
                _$4buf.push(' class="');
                if (_$4isBEM) {
                    _$4BEM_.INTERNAL.buildClasses($$block, _$4v.elem, _$4v.elemMods || _$4v.mods, _$4buf);
                    var _$4mix = ('', __r10 = $$mode, $$mode = 'mix', __r11 = $1(__$ctx), $$mode = __r10, '', __r11);
                    _$4v.mix && (_$4mix = _$4mix ? _$4mix.concat(_$4v.mix) : _$4v.mix);
                    if (_$4mix) {
                        var _$4visited = {};
                        function _$4visitedKey(block, elem) {
                            return (block || '') + '__' + (elem || '');
                        }
                        _$4visited[_$4visitedKey($$block, $$elem)] = true;
                        if (!__$ctx._.isArray(_$4mix)) {
                            _$4mix = [_$4mix];
                        } else {
                            undefined;
                        }
                        for (var _$4i = 0; _$4i < _$4mix.length; _$4i++) {
                            var _$4mixItem = _$4mix[_$4i];
                            if (!_$4mixItem) {
                                continue;
                            } else {
                                undefined;
                            }
                            var _$4hasItem = _$4mixItem.block || _$4mixItem.elem, _$4block = _$4mixItem.block || _$4mixItem._block || $$block, _$4elem = _$4mixItem.elem || _$4mixItem._elem || $$elem, _$4mods = _$4mixItem.mods || $$mods, _$4elemMods = _$4mixItem.elemMods || {};
                            _$4hasItem && _$4buf.push(' ');
                            _$4BEM_.INTERNAL[_$4hasItem ? 'buildClasses' : 'buildModsClasses'](_$4block, _$4mixItem.elem || _$4mixItem._elem || (_$4mixItem.block ? undefined : $$elem), _$4mixItem.elemMods || _$4mixItem.mods, _$4buf);
                            if (_$4mixItem.js) {
                                (_$4jsParams || (_$4jsParams = {}))[_$4BEM_.INTERNAL.buildClass(_$4block, _$4mixItem.elem)] = _$4mixItem.js === true ? {} : _$4mixItem.js;
                                _$4addJSInitClass || (_$4addJSInitClass = _$4block && !_$4mixItem.elem);
                            } else {
                                undefined;
                            }
                            if (_$4hasItem && !_$4visited[_$4visitedKey(_$4block, _$4elem)]) {
                                _$4visited[_$4visitedKey(_$4block, _$4elem)] = true;
                                var _$4nestedMix = ('', __r12 = $$block, $$block = _$4block, __r13 = $$elem, $$elem = _$4elem, __r14 = $$mods, $$mods = _$4mods, __r15 = $$elemMods, $$elemMods = _$4elemMods, __r16 = $$mode, $$mode = 'mix', __r17 = $1(__$ctx), $$block = __r12, $$elem = __r13, $$mods = __r14, $$elemMods = __r15, $$mode = __r16, '', __r17);
                                if (_$4nestedMix) {
                                    for (var _$4j = 0; _$4j < _$4nestedMix.length; _$4j++) {
                                        var _$4nestedItem = _$4nestedMix[_$4j];
                                        if (!_$4nestedItem.block && !_$4nestedItem.elem || !_$4visited[_$4visitedKey(_$4nestedItem.block, _$4nestedItem.elem)]) {
                                            _$4nestedItem._block = _$4block;
                                            _$4nestedItem._elem = _$4elem;
                                            _$4mix.splice(_$4i + 1, 0, _$4nestedItem);
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
                _$4cls && _$4buf.push(_$4isBEM ? ' ' : '', _$4cls);
                _$4addJSInitClass && _$4buf.push(' i-bem');
                _$4buf.push('"');
            } else {
                undefined;
            }
            if (_$4jsParams) {
                var _$4jsAttr = ('', __r20 = $$mode, $$mode = 'jsAttr', __r21 = $1(__$ctx), $$mode = __r20, '', __r21);
                _$4buf.push(' ', _$4jsAttr || 'data-bem', '="', __$ctx._.attrEscape(JSON.stringify(_$4jsParams)), '"');
            } else {
                undefined;
            }
            var _$4attrs = ('', __r22 = $$mode, $$mode = 'attrs', __r23 = $1(__$ctx), $$mode = __r22, '', __r23);
            _$4attrs = __$ctx._.extend(_$4attrs, _$4v.attrs);
            if (_$4attrs) {
                var _$4name;
                for (_$4name in _$4attrs) {
                    if (_$4attrs[_$4name] === undefined) {
                        continue;
                    } else {
                        undefined;
                    }
                    _$4buf.push(' ', _$4name, '="', __$ctx._.attrEscape(_$4attrs[_$4name]), '"');
                }
            } else {
                undefined;
            }
        } else {
            undefined;
        }
        if (__$ctx._.isShortTag(_$4tag)) {
            _$4buf.push('/>');
        } else {
            _$4tag && _$4buf.push('>');
            var _$4content = ('', __r24 = $$mode, $$mode = 'content', __r25 = $1(__$ctx), $$mode = __r24, '', __r25);
            if (_$4content || _$4content === 0) {
                var _$4isBEM = $$block || $$elem;
                {
                    '';
                    var __r26 = __$ctx._notNewList;
                    __$ctx._notNewList = false;
                    var __r27 = __$ctx.position;
                    __$ctx.position = _$4isBEM ? 1 : __$ctx.position;
                    var __r28 = __$ctx._listLength;
                    __$ctx._listLength = _$4isBEM ? 1 : __$ctx._listLength;
                    var __r29 = __$ctx.ctx;
                    __$ctx.ctx = _$4content;
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
            _$4tag && _$4buf.push('</', _$4tag, '>');
        }
        return;
    }
    function $813(__$ctx) {
        var _$1v = __$ctx.ctx, _$1l = _$1v.length, _$1i = 0, _$1prevPos = __$ctx.position, _$1prevNotNewList = __$ctx._notNewList;
        if (_$1prevNotNewList) {
            __$ctx._listLength += _$1l - 1;
        } else {
            __$ctx.position = 0;
            __$ctx._listLength = _$1l;
        }
        __$ctx._notNewList = true;
        while (_$1i < _$1l) {
            var _$1newCtx = _$1v[_$1i++];
            {
                '';
                var __r0 = __$ctx.ctx;
                __$ctx.ctx = _$1newCtx == null ? '' : _$1newCtx;
                $1(__$ctx);
                __$ctx.ctx = __r0;
                '';
            }
            undefined;
        }
        _$1prevNotNewList || (__$ctx.position = _$1prevPos);
        return;
    }
    function $816(__$ctx) {
        var _$0vBlock = __$ctx.ctx.block, _$0vElem = __$ctx.ctx.elem, _$0block = __$ctx._currBlock || $$block;
        __$ctx.ctx || (__$ctx.ctx = {});
        {
            '';
            var __r0 = $$mode;
            $$mode = 'default';
            var __r1 = __$ctx._links;
            __$ctx._links = __$ctx.ctx.links || __$ctx._links;
            var __r2 = $$block;
            $$block = _$0vBlock || (_$0vElem ? _$0block : undefined);
            var __r3 = __$ctx._currBlock;
            __$ctx._currBlock = _$0vBlock || _$0vElem ? undefined : _$0block;
            var __r4 = $$elem;
            $$elem = __$ctx.ctx.elem;
            var __r5 = $$mods;
            $$mods = (_$0vBlock ? __$ctx.ctx.mods : $$mods) || {};
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
typeof exports === "undefined" || (exports.BEMHTML = BEMHTML);
var BEMHTML = function() {
  var $$mode, $$block, $$elem, $$elemMods, $$mods;
  var cache,
      exports = {},
      xjst = (function (exports) {
    function $1(__$ctx) {
        var __t = $$mode;
        if (__t === 'default') {
            return $2(__$ctx);
        } else if (__t === 'attrs') {
            return $216(__$ctx);
        } else if (__t === 'mix') {
            return $252(__$ctx);
        } else if (__t === 'bem') {
            return $290(__$ctx);
        } else if (__t === 'tag') {
            return $165(__$ctx);
        } else if (__t === 'cls') {
            return $321(__$ctx);
        } else if (__t === 'doctype') {
            if ($$block === 'b-page') {
                if (!!$$elem === false) {
                    return $332(__$ctx);
                } else {
                    return $368(__$ctx);
                }
            } else {
                return $368(__$ctx);
            }
        } else if (__t === 'js-params') {
            if ($$block === 'b-page') {
                if (!!$$elem === false) {
                    return $340(__$ctx);
                } else {
                    return $368(__$ctx);
                }
            } else {
                return $368(__$ctx);
            }
        } else if (__t === 'public-params') {
            if ($$block === 'i-global') {
                return $346(__$ctx);
            } else {
                return $368(__$ctx);
            }
        } else if (__t === 'env') {
            if ($$block === 'i-global') {
                return $354(__$ctx);
            } else {
                return $368(__$ctx);
            }
        } else if (__t === 'content') {
            return $128(__$ctx);
        } else if (__t === '') {
            return $361(__$ctx);
        } else if (__t === 'js') {
            return $102(__$ctx);
        } else if (__t === 'jsAttr') {
            return $367(__$ctx);
        } else if (__t === 'xUACompatible') {
            if ($$block === 'b-page') {
                if (!!$$elem === false) {
                    return $316(__$ctx);
                } else {
                    return $368(__$ctx);
                }
            } else {
                return $368(__$ctx);
            }
        } else {
            return $368(__$ctx);
        }
    }
    function $2(__$ctx) {
        var __t = $$block;
        if (__t === 'i-jquery') {
            if (!(__$ctx['__$anflg10'] !== true) === false) {
                if (!!$$elem === false) {
                    return $6(__$ctx);
                } else {
                    return $9(__$ctx);
                }
            } else {
                return $9(__$ctx);
            }
        } else if (__t === 'radio-button') {
            return $23(__$ctx);
        } else if (__t === 'radiobox') {
            return $37(__$ctx);
        } else if (__t === 'b-page') {
            if ($$elem === 'css') {
                if (!__$ctx.ctx.hasOwnProperty('ie') === false) {
                    if (!!__$ctx.ctx._ieCommented === false) {
                        return $55(__$ctx);
                    } else {
                        return $60(__$ctx);
                    }
                } else {
                    return $60(__$ctx);
                }
            } else {
                return $60(__$ctx);
            }
        } else if (__t === 'i-bem') {
            if ($$elem === 'i18n') {
                return $70(__$ctx);
            } else {
                return $368(__$ctx);
            }
        } else if (__t === 'i-global') {
            return $73(__$ctx);
        } else {
            return $368(__$ctx);
        }
    }
    function $6(__$ctx) {
        var __r0, __r4, __r1, __r2, __r3;
        return '', __r0 = __$ctx['__$anflg10'], __$ctx['__$anflg10'] = true, __r4 = ('', __r1 = __$ctx.ctx, __$ctx.ctx = {
            block: 'b-page',
            elem: 'js',
            url: __$ctx.ctx.url || (__$ctx.ctx.protocol ? __$ctx.ctx.protocol + ':' : '') + '//yastatic.net/jquery/' + $$mods.version + '/jquery.min.js'
        }, __r2 = $$mode, $$mode = '', __r3 = $361(__$ctx), __$ctx.ctx = __r1, $$mode = __r2, '', __r3), __$ctx['__$anflg10'] = __r0, '', __r4;
        return;
    }
    function $9(__$ctx) {
        if (!(__$ctx['__$anflg9'] !== true) === false) {
            if (!!$$elem === false) {
                return $12(__$ctx);
            } else {
                return $15(__$ctx);
            }
        } else {
            return $15(__$ctx);
        }
    }
    function $12(__$ctx) {
        var __r0, __r4, __r1, __r2, __r3;
        return '', __r0 = __$ctx['__$anflg9'], __$ctx['__$anflg9'] = true, __r4 = ('', __r1 = __$ctx.ctx, __$ctx.ctx = {
            block: 'b-page',
            elem: 'js',
            url: __$ctx.ctx.url || (__$ctx.ctx.protocol ? __$ctx.ctx.protocol + ':' : '') + '//yastatic.net/jquery/' + $$mods.version + '/jquery.min.js'
        }, __r2 = $$mode, $$mode = '', __r3 = $361(__$ctx), __$ctx.ctx = __r1, $$mode = __r2, '', __r3), __$ctx['__$anflg9'] = __r0, '', __r4;
        return;
    }
    function $15(__$ctx) {
        if ($$elem === 'core') {
            if (!(__$ctx['__$anflg2'] !== true) === false) {
                return $18(__$ctx);
            } else {
                return $368(__$ctx);
            }
        } else {
            return $368(__$ctx);
        }
    }
    function $18(__$ctx) {
        var __r0, __r4, __r1, __r2, __r3;
        return '', __r0 = __$ctx['__$anflg2'], __$ctx['__$anflg2'] = true, __r4 = ('', __r1 = __$ctx.ctx, __$ctx.ctx = {
            block: 'b-page',
            elem: 'js',
            url: '//yastatic.net/jquery/1.8.3/jquery.min.js'
        }, __r2 = $$mode, $$mode = '', __r3 = $361(__$ctx), __$ctx.ctx = __r1, $$mode = __r2, '', __r3), __$ctx['__$anflg2'] = __r0, '', __r4;
        return;
    }
    function $23(__$ctx) {
        if (!(__$ctx['__$anflg8'] !== true) === false) {
            if (!!$$elem === false) {
                return $26(__$ctx);
            } else {
                return $29(__$ctx);
            }
        } else {
            return $29(__$ctx);
        }
    }
    function $26(__$ctx) {
        var _$2cmods = __$ctx.ctx.mods || {};
        _$2cmods.theme = _$2cmods.theme || 'normal';
        {
            '';
            var __r0 = __$ctx['__$anflg8'];
            __$ctx['__$anflg8'] = true;
            {
                '';
                var __r1 = __$ctx.ctx, __r2 = __r1.mods;
                __r1.mods = _$2cmods;
                var __r3 = __$ctx._modsDisabled;
                __$ctx._modsDisabled = __$ctx.ctx.mods && __$ctx.ctx.mods.disabled;
                var __r4 = __$ctx._name;
                __$ctx._name = __$ctx.ctx.name;
                var __r5 = __$ctx._value;
                __$ctx._value = __$ctx.ctx.value;
                var __r6 = __$ctx._nextForChecked;
                __$ctx._nextForChecked = false;
                $23(__$ctx);
                __r1.mods = __r2;
                __$ctx._modsDisabled = __r3;
                __$ctx._name = __r4;
                __$ctx._value = __r5;
                __$ctx._nextForChecked = __r6;
                '';
            }
            __$ctx['__$anflg8'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $29(__$ctx) {
        if ($$elem === 'radio') {
            if (!(__$ctx['__$anflg7'] !== true) === false) {
                return $32(__$ctx);
            } else {
                return $368(__$ctx);
            }
        } else {
            return $368(__$ctx);
        }
    }
    function $32(__$ctx) {
        var __r0, __r4, __r1, __r2, __r3;
        var _$25ctx = __$ctx.ctx, _$25elemMods = _$25ctx.elemMods || {}, _$25ctxControlAttrs = _$25ctx.controlAttrs || {}, _$25valuesMatched = _$25ctxControlAttrs.value != undefined && _$25ctxControlAttrs.value == __$ctx._value, _$25controlAttrs = __$ctx._.extend(_$25ctxControlAttrs, {
                checked: (_$25valuesMatched || _$25elemMods.checked) && (__$ctx._nextForChecked = true),
                disabled: __$ctx._modsDisabled || _$25elemMods.disabled
            });
        _$25controlAttrs.id || (_$25controlAttrs.id = __$ctx.generateId());
        return '', __r0 = __$ctx['__$anflg7'], __$ctx['__$anflg7'] = true, __r4 = ('', __r1 = __$ctx._controlAttrs, __$ctx._controlAttrs = _$25controlAttrs, __r2 = __$ctx._valuesMatched, __$ctx._valuesMatched = _$25valuesMatched, __r3 = $23(__$ctx), __$ctx._controlAttrs = __r1, __$ctx._valuesMatched = __r2, '', __r3), __$ctx['__$anflg7'] = __r0, '', __r4;
        return;
    }
    function $37(__$ctx) {
        if ($$elem === 'radio') {
            return $38(__$ctx);
        } else {
            return $43(__$ctx);
        }
    }
    function $38(__$ctx) {
        if (!(__$ctx['__$anflg6'] !== true) === false) {
            return $40(__$ctx);
        } else {
            return $43(__$ctx);
        }
    }
    function $40(__$ctx) {
        var __r0, __r4, __r1, __r2, __r3;
        var _$1yctx = __$ctx.ctx, _$1yelemMods = _$1yctx.elemMods || {}, _$1yctxControlAttrs = _$1yctx.controlAttrs || {}, _$1yvaluesMatched = _$1yctxControlAttrs.value != undefined && _$1yctxControlAttrs.value == __$ctx._value, _$1ycontrolAttrs = __$ctx._.extend(_$1yctxControlAttrs, {
                checked: _$1yvaluesMatched || _$1yelemMods.checked,
                disabled: __$ctx._modsDisabled || _$1yelemMods.disabled
            });
        _$1ycontrolAttrs.id || (_$1ycontrolAttrs.id = __$ctx.generateId());
        return '', __r0 = __$ctx['__$anflg6'], __$ctx['__$anflg6'] = true, __r4 = ('', __r1 = __$ctx._controlAttrs, __$ctx._controlAttrs = _$1ycontrolAttrs, __r2 = __$ctx._valuesMatched, __$ctx._valuesMatched = _$1yvaluesMatched, __r3 = $38(__$ctx), __$ctx._controlAttrs = __r1, __$ctx._valuesMatched = __r2, '', __r3), __$ctx['__$anflg6'] = __r0, '', __r4;
        return;
    }
    function $43(__$ctx) {
        if (!(__$ctx['__$anflg5'] !== true) === false) {
            if (!!$$elem === false) {
                return $46(__$ctx);
            } else {
                return $368(__$ctx);
            }
        } else {
            return $368(__$ctx);
        }
    }
    function $46(__$ctx) {
        var _$1vmods = __$ctx.ctx.mods || {};
        _$1vmods.theme = _$1vmods.theme || 'normal';
        {
            '';
            var __r0 = __$ctx['__$anflg5'];
            __$ctx['__$anflg5'] = true;
            {
                '';
                var __r1 = __$ctx.ctx, __r2 = __r1.mods;
                __r1.mods = _$1vmods;
                var __r3 = __$ctx._modsDisabled;
                __$ctx._modsDisabled = __$ctx.ctx.mods && __$ctx.ctx.mods.disabled;
                var __r4 = __$ctx._name;
                __$ctx._name = __$ctx.ctx.name;
                var __r5 = __$ctx._value;
                __$ctx._value = __$ctx.ctx.value;
                $37(__$ctx);
                __r1.mods = __r2;
                __$ctx._modsDisabled = __r3;
                __$ctx._name = __r4;
                __$ctx._value = __r5;
                '';
            }
            __$ctx['__$anflg5'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $55(__$ctx) {
        var _$1oie = __$ctx.ctx.ie;
        if (_$1oie === true) {
            {
                '';
                var __r2 = $$mode;
                $$mode = '';
                var __r3 = __$ctx.ctx;
                __$ctx.ctx = [
                    6,
                    7,
                    8,
                    9
                ].map(function (v) {
                    return {
                        elem: 'css',
                        url: this.ctx.url + '.ie' + v + '.css',
                        ie: 'IE ' + v
                    };
                }, __$ctx);
                $361(__$ctx);
                $$mode = __r2;
                __$ctx.ctx = __r3;
                '';
            }
            undefined;
        } else {
            var _$1ohideRule = !_$1oie ? [
                    'gt IE 9',
                    '<!-->',
                    '<!--'
                ] : _$1oie === '!IE' ? [
                    _$1oie,
                    '<!-->',
                    '<!--'
                ] : [
                    _$1oie,
                    '',
                    ''
                ];
            {
                '';
                var __r4 = $$mode;
                $$mode = '';
                var __r5 = __$ctx.ctx, __r6 = __r5._ieCommented;
                __r5._ieCommented = true;
                var __r7 = __$ctx.ctx;
                __$ctx.ctx = [
                    '<!--[if ' + _$1ohideRule[0] + ']>',
                    _$1ohideRule[1],
                    __$ctx.ctx,
                    _$1ohideRule[2],
                    '<![endif]-->'
                ];
                $361(__$ctx);
                $$mode = __r4;
                __r5._ieCommented = __r6;
                __$ctx.ctx = __r7;
                '';
            }
            undefined;
        }
        return;
    }
    function $60(__$ctx) {
        if (!(__$ctx['__$anflg3'] !== true) === false) {
            if (!!$$elem === false) {
                return $63(__$ctx);
            } else {
                return $368(__$ctx);
            }
        } else {
            return $368(__$ctx);
        }
    }
    function $63(__$ctx) {
        var __r0, __r1, __r2, __r3;
        var _$12ctx = __$ctx.ctx, _$12dtype = ('', __r0 = $$mode, $$mode = 'doctype', __r1 = $332(__$ctx), $$mode = __r0, '', __r1), _$12xUA = ('', __r2 = $$mode, $$mode = 'xUACompatible', __r3 = $316(__$ctx), $$mode = __r2, '', __r3), _$12buf = [
                _$12dtype,
                {
                    elem: 'root',
                    content: [
                        {
                            elem: 'head',
                            content: [
                                {
                                    tag: 'meta',
                                    attrs: { charset: 'utf-8' }
                                },
                                _$12xUA,
                                {
                                    tag: 'title',
                                    content: _$12ctx.title
                                },
                                _$12ctx.favicon ? {
                                    elem: 'favicon',
                                    url: _$12ctx.favicon
                                } : '',
                                _$12ctx.meta,
                                { block: 'i-ua' },
                                _$12ctx.head
                            ]
                        },
                        _$12ctx
                    ]
                }
            ];
        {
            '';
            var __r4 = __$ctx['__$anflg3'];
            __$ctx['__$anflg3'] = true;
            {
                '';
                var __r5 = __$ctx.ctx;
                __$ctx.ctx = _$12buf;
                var __r6 = $$mode;
                $$mode = '';
                $361(__$ctx);
                __$ctx.ctx = __r5;
                $$mode = __r6;
                '';
            }
            __$ctx['__$anflg3'] = __r4;
            '';
        }
        undefined;
        return;
    }
    function $70(__$ctx) {
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
            _$zparams.content = (_$zcnt = [], '', __r0 = __$ctx._buf, __$ctx._buf = _$zcnt, __r1 = $$mode, $$mode = '', __r2 = __$ctx.ctx, __$ctx.ctx = _$zctx.content, __r3 = $361(__$ctx), __$ctx._buf = __r0, $$mode = __r1, __$ctx.ctx = __r2, '', __r3, _$zcnt.join(''));
        } else {
            undefined;
        }
        __$ctx._buf.push(BEM.I18N(_$zkeyset, _$zkey, _$zparams));
        return;
    }
    function $73(__$ctx) {
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
                    return $97(__$ctx);
                } else {
                    return $368(__$ctx);
                }
            }
        }
    }
    function $97(__$ctx) {
        var _$hparams = __$ctx.ctx.params || {}, _$hiGlobal = __$ctx['i-global'], _$hisTldChanged = _$hparams.tld && _$hparams.tld !== _$hiGlobal.tld, _$htld, _$hxYaDomain, _$hyaDomain;
        if (_$hisTldChanged) {
            _$htld = _$hparams.tld;
            _$hxYaDomain = _$htld === 'tr' ? 'yandex.com.tr' : 'yandex.' + _$htld;
            _$hyaDomain = [
                'ua',
                'by',
                'kz'
            ].indexOf(_$htld) != -1 ? 'yandex.ru' : _$hxYaDomain;
            _$hiGlobal['content-region'] = _$htld;
            _$hiGlobal['click-host'] = '//clck.' + _$hyaDomain;
            _$hiGlobal['passport-host'] = 'https://passport.' + _$hyaDomain;
            _$hiGlobal['pass-host'] = '//pass.' + _$hxYaDomain;
            _$hiGlobal['social-host'] = '//social.' + _$hxYaDomain;
            _$hiGlobal['export-host'] = '//export.' + _$hxYaDomain;
        } else {
            undefined;
        }
        for (var _$hp in _$hparams) {
            _$hiGlobal[_$hp] = _$hparams[_$hp];
        }
        return;
    }
    function $102(__$ctx) {
        var __t = $$block;
        if (__t === 'tabs-panes') {
            if (!!$$elem === false) {
                return { id: __$ctx.ctx.id };
                return;
            } else {
                return $127(__$ctx);
            }
        } else if (__t === 'tabs') {
            if (!($$mods && $$mods.control === 'buttons') === false) {
                if (!!$$elem === false) {
                    return true;
                    return;
                } else {
                    return $127(__$ctx);
                }
            } else {
                return $127(__$ctx);
            }
        } else if (__t === 'radio-button' || __t === 'radiobox') {
            if (!!$$elem === false) {
                return true;
                return;
            } else {
                return $127(__$ctx);
            }
        } else {
            return $127(__$ctx);
        }
    }
    function $127(__$ctx) {
        return undefined;
        return;
    }
    function $128(__$ctx) {
        var __t = $$block;
        if (__t === 'tabs') {
            if (!($$mods && $$mods.control === 'buttons') === false) {
                if (!!$$elem === false) {
                    return $132(__$ctx);
                } else {
                    return $164(__$ctx);
                }
            } else {
                return $164(__$ctx);
            }
        } else if (__t === 'radio-button') {
            if ($$elem === 'radio') {
                return [
                    { elem: 'control' },
                    {
                        elem: 'text',
                        tag: 'span',
                        content: __$ctx.ctx.content
                    }
                ];
                return;
            } else {
                return $164(__$ctx);
            }
        } else if (__t === 'radiobox') {
            if ($$elem === 'radio') {
                return [
                    {
                        elem: 'box',
                        tag: 'span',
                        content: { elem: 'control' }
                    },
                    __$ctx.ctx.content
                ];
                return;
            } else {
                return $164(__$ctx);
            }
        } else if (__t === 'b-page') {
            if (!!$$elem === false) {
                return {
                    elem: 'body',
                    content: __$ctx.ctx.content
                };
                return;
            } else {
                return $164(__$ctx);
            }
        } else if (__t === 'i-ua') {
            return $152(__$ctx);
        } else {
            return $164(__$ctx);
        }
    }
    function $132(__$ctx) {
        var _$2gctx = __$ctx.ctx, _$2gactiveValue, _$2gproxyMods = __$ctx.extend({}, _$2gctx.mods), _$2gradios = _$2gctx.content.map(function (tab, i) {
                if (tab.elem === 'tab') {
                    var radio = this.extend(tab, {
                            block: 'radio-button',
                            elem: 'radio',
                            controlAttrs: this.extend({ value: i }, tab.controlAttrs)
                        });
                    if ((radio.elemMods || {}).active === 'yes') {
                        radio.elemMods = this.extend({}, radio.elemMods);
                        delete radio.elemMods.active;
                        _$2gactiveValue = radio.controlAttrs.value;
                    } else {
                        undefined;
                    }
                    return radio;
                } else {
                    return tab;
                }
            }, __$ctx);
        delete _$2gproxyMods.control;
        return {
            block: 'radio-button',
            mix: [{
                    block: $$block,
                    elem: 'control'
                }],
            mods: _$2gproxyMods,
            value: _$2gactiveValue,
            name: _$2gctx.name || __$ctx.generateId(),
            content: _$2gradios
        };
        return;
    }
    function $152(__$ctx) {
        if (!(__$ctx['__$anflg1'] !== true) === false) {
            if (!!$$elem === false) {
                var __r0, __r1;
                var _$xc = ('', __r0 = __$ctx['__$anflg1'], __$ctx['__$anflg1'] = true, __r1 = $152(__$ctx), __$ctx['__$anflg1'] = __r0, '', __r1);
                _$xc += [
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
                return _$xc;
                return;
            } else {
                return $158(__$ctx);
            }
        } else {
            return $158(__$ctx);
        }
    }
    function $158(__$ctx) {
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
            return $164(__$ctx);
        }
    }
    function $164(__$ctx) {
        return __$ctx.ctx.content;
        return;
    }
    function $165(__$ctx) {
        var __t = $$block;
        if (__t === 'radio-button') {
            if (!!$$elem === false) {
                return 'span';
                return;
            } else {
                var __t = $$elem;
                if (__t === 'control') {
                    return 'input';
                    return;
                } else if (__t === 'radio') {
                    return 'label';
                    return;
                } else {
                    return $215(__$ctx);
                }
            }
        } else if (__t === 'radiobox') {
            var __t = $$elem;
            if (__t === 'control') {
                return 'input';
                return;
            } else if (__t === 'radio') {
                return 'label';
                return;
            } else {
                if (!!$$elem === false) {
                    return 'span';
                    return;
                } else {
                    return $215(__$ctx);
                }
            }
        } else if (__t === 'b-page') {
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
            } else if (__t === 'body') {
                return '';
                return;
            } else if (__t === 'favicon') {
                return 'link';
                return;
            } else if (__t === 'meta') {
                return 'meta';
                return;
            } else if (__t === 'head') {
                return 'head';
                return;
            } else if (__t === 'root') {
                return 'html';
                return;
            } else {
                if (!!$$elem === false) {
                    return 'body';
                    return;
                } else {
                    return $215(__$ctx);
                }
            }
        } else if (__t === 'i-ua') {
            if (!!$$elem === false) {
                return 'script';
                return;
            } else {
                return $215(__$ctx);
            }
        } else {
            return $215(__$ctx);
        }
    }
    function $215(__$ctx) {
        return undefined;
        return;
    }
    function $216(__$ctx) {
        var __t = $$block;
        if (__t === 'radio-button') {
            var __t = $$elem;
            if (__t === 'control') {
                var _$2ba = __$ctx._controlAttrs;
                if (!_$2ba.disabled) {
                    delete _$2ba.disabled;
                } else {
                    _$2ba.disabled = 'disabled';
                    _$2ba.tabindex = '-1';
                }
                if (!_$2ba.checked) {
                    delete _$2ba.checked;
                } else {
                    _$2ba.checked = 'checked';
                }
                _$2ba.type = 'radio';
                _$2ba.name = __$ctx._name;
                typeof _$2ba.value === 'undefined' && delete _$2ba.value;
                return _$2ba;
                return;
            } else if (__t === 'radio') {
                return { 'for': __$ctx._controlAttrs.id };
                return;
            } else {
                return $251(__$ctx);
            }
        } else if (__t === 'radiobox') {
            var __t = $$elem;
            if (__t === 'control') {
                var _$24a = __$ctx._controlAttrs;
                if (!_$24a.disabled) {
                    delete _$24a.disabled;
                } else {
                    _$24a.disabled = 'disabled';
                    _$24a.tabindex = '-1';
                }
                if (!_$24a.checked) {
                    delete _$24a.checked;
                } else {
                    _$24a.checked = 'checked';
                }
                _$24a.type = 'radio';
                _$24a.name = __$ctx._name;
                typeof _$24a.value === 'undefined' && delete _$24a.value;
                return _$24a;
                return;
            } else if (__t === 'radio') {
                return { 'for': __$ctx._controlAttrs.id };
                return;
            } else {
                return $251(__$ctx);
            }
        } else if (__t === 'b-page') {
            var __t = $$elem;
            if (__t === 'js') {
                if (!__$ctx.ctx.url === false) {
                    return { src: __$ctx.ctx.url };
                    return;
                } else {
                    return $251(__$ctx);
                }
            } else if (__t === 'css') {
                if (!__$ctx.ctx.url === false) {
                    return {
                        rel: 'stylesheet',
                        href: __$ctx.ctx.url
                    };
                    return;
                } else {
                    return $251(__$ctx);
                }
            } else if (__t === 'root') {
                return { lang: __$ctx['i-global'].lang || 'ru' };
                return;
            } else if (__t === 'favicon') {
                return {
                    rel: 'shortcut icon',
                    href: __$ctx.ctx.url
                };
                return;
            } else if (__t === 'meta') {
                return __$ctx.ctx.attrs;
                return;
            } else {
                return $251(__$ctx);
            }
        } else {
            return $251(__$ctx);
        }
    }
    function $251(__$ctx) {
        return undefined;
        return;
    }
    function $252(__$ctx) {
        var __t = $$block;
        if (__t === 'radio-button') {
            if ($$elem === 'radio') {
                return $255(__$ctx);
            } else {
                return $289(__$ctx);
            }
        } else if (__t === 'radiobox') {
            if ($$elem === 'radio') {
                var _$21elemMods = {};
                __$ctx._modsDisabled && (_$21elemMods.disabled = 'yes');
                __$ctx._valuesMatched && (_$21elemMods.checked = 'yes');
                return [{ elemMods: _$21elemMods }];
                return;
            } else {
                return $289(__$ctx);
            }
        } else if (__t === 'tabs') {
            if (!__$ctx.ctx.panes === false) {
                if (!!$$elem === false) {
                    return [{
                            block: 'tabs-panes',
                            js: { id: __$ctx.ctx.panes }
                        }];
                    return;
                } else {
                    return $289(__$ctx);
                }
            } else {
                return $289(__$ctx);
            }
        } else if (__t === 'b-page') {
            return $271(__$ctx);
        } else {
            return $289(__$ctx);
        }
    }
    function $255(__$ctx) {
        var _$28controlAttrs = __$ctx._controlAttrs, _$28elemMods = {}, _$28side = (__$ctx.ctx.mods || {}).side;
        if (!_$28side) {
            _$28side = __$ctx.isFirst() ? __$ctx.isLast() ? 'both' : 'left' : __$ctx.isLast() ? 'right' : '';
        } else {
            undefined;
        }
        _$28side && (_$28elemMods.side = _$28side);
        __$ctx._nextForChecked && !_$28controlAttrs.checked && (__$ctx._nextForChecked = null, _$28elemMods['next-for-pressed'] = 'yes');
        __$ctx._modsDisabled && (_$28elemMods.disabled = 'yes');
        __$ctx._valuesMatched && (_$28elemMods.checked = 'yes');
        _$28controlAttrs.checked && (_$28elemMods.pressed = 'yes');
        return [{ elemMods: _$28elemMods }];
        return;
    }
    function $271(__$ctx) {
        if (!!__$ctx.ctx._iGlobal === false) {
            if (!!$$elem === false) {
                return $274(__$ctx);
            } else {
                return $277(__$ctx);
            }
        } else {
            return $277(__$ctx);
        }
    }
    function $274(__$ctx) {
        var __r0, __r1, __r2, __r3, __r4;
        var _$1kmix = ('', __r0 = __$ctx.ctx, __r1 = __r0._iGlobal, __r0._iGlobal = true, __r2 = $271(__$ctx), __r0._iGlobal = __r1, '', __r2), _$1kjsParams = ('', __r3 = $$mode, $$mode = 'js-params', __r4 = $340(__$ctx), $$mode = __r3, '', __r4);
        _$1kmix ? _$1kmix.push(_$1kjsParams) : _$1kmix = [_$1kjsParams];
        return _$1kmix;
        return;
    }
    function $277(__$ctx) {
        if (!(__$ctx['__$anflg4'] !== true) === false) {
            if (!!$$elem === false) {
                var __r0, __r1;
                var _$1gmix = ('', __r0 = __$ctx['__$anflg4'], __$ctx['__$anflg4'] = true, __r1 = $271(__$ctx), __$ctx['__$anflg4'] = __r0, '', __r1) || [];
                _$1gmix.push({
                    block: 'i-ua',
                    mods: { interaction: 'yes' },
                    js: true
                });
                return _$1gmix;
                return;
            } else {
                return $283(__$ctx);
            }
        } else {
            return $283(__$ctx);
        }
    }
    function $283(__$ctx) {
        if (!!$$elem === false) {
            return [{ elem: 'body' }];
            return;
        } else {
            return $289(__$ctx);
        }
    }
    function $289(__$ctx) {
        return undefined;
        return;
    }
    function $290(__$ctx) {
        var __t = $$block;
        if (__t === 'b-page') {
            var __t = $$elem;
            if (__t === 'js' || __t === 'css' || __t === 'favicon' || __t === 'meta' || __t === 'head' || __t === 'root') {
                return false;
                return;
            } else {
                return $312(__$ctx);
            }
        } else if (__t === 'i-ua') {
            if (!!$$elem === false) {
                return false;
                return;
            } else {
                return $312(__$ctx);
            }
        } else {
            return $312(__$ctx);
        }
    }
    function $312(__$ctx) {
        return undefined;
        return;
    }
    function $316(__$ctx) {
        if (__$ctx.ctx['x-ua-compatible'] === false) {
            return false;
        } else {
            return {
                tag: 'meta',
                attrs: {
                    'http-equiv': 'X-UA-Compatible',
                    content: __$ctx.ctx['x-ua-compatible'] || 'IE=edge'
                }
            };
        }
        return;
    }
    function $321(__$ctx) {
        if ($$block === 'b-page') {
            if ($$elem === 'root') {
                return 'i-ua_js_no i-ua_css_standard';
                return;
            } else {
                return $328(__$ctx);
            }
        } else {
            return $328(__$ctx);
        }
    }
    function $328(__$ctx) {
        return undefined;
        return;
    }
    function $332(__$ctx) {
        return __$ctx.ctx.doctype || '<!DOCTYPE html>';
        return;
    }
    function $340(__$ctx) {
        var __r0, __r1, __r2, __r3;
        var _$t_this = __$ctx['i-global'], _$tjs = {}, _$tblock = {
                block: 'i-global',
                js: _$tjs
            }, _$te;
        for (_$te in _$t_this) {
            if (_$t_this.hasOwnProperty(_$te) && ('', __r0 = $$mode, $$mode = 'public-params', __r1 = $$block, $$block = 'i-global', __r2 = $$elem, $$elem = _$te, __r3 = $346(__$ctx), $$mode = __r0, $$block = __r1, $$elem = __r2, '', __r3)) {
                _$tjs[_$te] = _$t_this[_$te];
            } else {
                undefined;
            }
        }
        return _$tblock;
        return;
    }
    function $346(__$ctx) {
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
            return $368(__$ctx);
        }
    }
    function $354(__$ctx) {
        if (!!$$elem === false) {
            return {};
            return;
        } else {
            return $368(__$ctx);
        }
    }
    function $361(__$ctx) {
        if (!!__$ctx['i-global'] === false) {
            return $363(__$ctx);
        } else {
            return $368(__$ctx);
        }
    }
    function $363(__$ctx) {
        var __r0, __r1, __r2, __r3, __r4, __r5, __r6;
        var _$fps = {}, _$fes = [
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
            ], _$fe;
        while (_$fe = _$fes.shift()) {
            _$fps[_$fe] = ('', __r0 = $$mode, $$mode = 'default', __r1 = $$block, $$block = 'i-global', __r2 = $$elem, $$elem = _$fe, __r3 = $73(__$ctx), $$mode = __r0, $$block = __r1, $$elem = __r2, '', __r3);
        }
        __$ctx['i-global'] = __$ctx._.extend(_$fps, ('', __r4 = $$mode, $$mode = 'env', __r5 = $$block, $$block = 'i-global', __r6 = $354(__$ctx), $$mode = __r4, $$block = __r5, '', __r6));
        applyc(__$ctx);
        undefined;
        return;
    }
    function $367(__$ctx) {
        return undefined;
        return;
    }
    function $368(__$ctx) {
        if (!__$ctx.ctx === false) {
            if (!__$ctx.ctx.link === false) {
                if (!!__$ctx._.isSimple(__$ctx.ctx) === false) {
                    return $372(__$ctx);
                } else {
                    return $377(__$ctx);
                }
            } else {
                return $377(__$ctx);
            }
        } else {
            return $377(__$ctx);
        }
    }
    function $372(__$ctx) {
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
    function $377(__$ctx) {
        if (!cache === false) {
            if (!__$ctx.ctx === false) {
                if (!__$ctx.ctx.cache === false) {
                    return $381(__$ctx);
                } else {
                    return $386(__$ctx);
                }
            } else {
                return $386(__$ctx);
            }
        } else {
            return $386(__$ctx);
        }
    }
    function $381(__$ctx) {
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
    function $386(__$ctx) {
        var __t = $$mode;
        if (__t === 'default') {
            return $388(__$ctx);
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
                        return $397(__$ctx);
                    } else {
                        if (!true === false) {
                            return $400(__$ctx);
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
    function $388(__$ctx) {
        var __r13, __r0, __r4, __r5, __r6, __r7, __r8, __r9, __r10, __r11, __r12, __r1, __r14, __r15, __r16, __r17, __r20, __r21, __r22, __r23, __r24, __r25;
        var _$4BEM_ = __$ctx.BEM, _$4v = __$ctx.ctx, _$4buf = __$ctx._buf, _$4tag;
        _$4tag = ('', __r0 = $$mode, $$mode = 'tag', __r1 = $165(__$ctx), $$mode = __r0, '', __r1);
        typeof _$4tag != 'undefined' || (_$4tag = _$4v.tag);
        typeof _$4tag != 'undefined' || (_$4tag = 'div');
        if (_$4tag) {
            var _$4jsParams, _$4js;
            if ($$block && _$4v.js !== false) {
                _$4js = ('', __r4 = $$mode, $$mode = 'js', __r5 = $102(__$ctx), $$mode = __r4, '', __r5);
                _$4js = _$4js ? __$ctx._.extend(_$4v.js, _$4js === true ? {} : _$4js) : _$4v.js === true ? {} : _$4v.js;
                _$4js && ((_$4jsParams = {})[_$4BEM_.INTERNAL.buildClass($$block, _$4v.elem)] = _$4js);
            } else {
                undefined;
            }
            _$4buf.push('<', _$4tag);
            var _$4isBEM = ('', __r6 = $$mode, $$mode = 'bem', __r7 = $290(__$ctx), $$mode = __r6, '', __r7);
            typeof _$4isBEM != 'undefined' || (_$4isBEM = typeof _$4v.bem != 'undefined' ? _$4v.bem : _$4v.block || _$4v.elem);
            var _$4cls = ('', __r8 = $$mode, $$mode = 'cls', __r9 = $321(__$ctx), $$mode = __r8, '', __r9);
            _$4cls || (_$4cls = _$4v.cls);
            var _$4addJSInitClass = _$4v.block && _$4jsParams;
            if (_$4isBEM || _$4cls) {
                _$4buf.push(' class="');
                if (_$4isBEM) {
                    _$4BEM_.INTERNAL.buildClasses($$block, _$4v.elem, _$4v.elemMods || _$4v.mods, _$4buf);
                    var _$4mix = ('', __r10 = $$mode, $$mode = 'mix', __r11 = $252(__$ctx), $$mode = __r10, '', __r11);
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
                                var _$4nestedMix = ('', __r12 = $$block, $$block = _$4block, __r13 = $$elem, $$elem = _$4elem, __r14 = $$mods, $$mods = _$4mods, __r15 = $$elemMods, $$elemMods = _$4elemMods, __r16 = $$mode, $$mode = 'mix', __r17 = $252(__$ctx), $$block = __r12, $$elem = __r13, $$mods = __r14, $$elemMods = __r15, $$mode = __r16, '', __r17);
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
                var _$4jsAttr = ('', __r20 = $$mode, $$mode = 'jsAttr', __r21 = $367(__$ctx), $$mode = __r20, '', __r21);
                _$4buf.push(' ', _$4jsAttr || 'data-bem', '="', __$ctx._.attrEscape(JSON.stringify(_$4jsParams)), '"');
            } else {
                undefined;
            }
            var _$4attrs = ('', __r22 = $$mode, $$mode = 'attrs', __r23 = $216(__$ctx), $$mode = __r22, '', __r23);
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
            var _$4content = ('', __r24 = $$mode, $$mode = 'content', __r25 = $128(__$ctx), $$mode = __r24, '', __r25);
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
                    $361(__$ctx);
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
    function $397(__$ctx) {
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
                $361(__$ctx);
                __$ctx.ctx = __r0;
                '';
            }
            undefined;
        }
        _$1prevNotNewList || (__$ctx.position = _$1prevPos);
        return;
    }
    function $400(__$ctx) {
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
                $2(__$ctx);
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
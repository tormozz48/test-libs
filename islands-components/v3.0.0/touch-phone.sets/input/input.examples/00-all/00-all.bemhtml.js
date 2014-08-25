var BEMHTML = function() {
  var $$mode, $$block, $$elem, $$elemMods, $$mods;
  var cache,
      exports = {},
      xjst = (function (exports) {
    function $1(__$ctx) {
        var __t = $$block;
        if (__t === 'i-jquery') {
            if ($$mode === 'default') {
                if (!(__$ctx['__$anflg17'] !== true) === false) {
                    if (!!$$elem === false) {
                        return $6(__$ctx);
                    } else {
                        return $9(__$ctx);
                    }
                } else {
                    return $9(__$ctx);
                }
            } else {
                return $458(__$ctx);
            }
        } else if (__t === 'button') {
            var __t = $$mode;
            if (__t === 'content') {
                if (!!$$elem === false) {
                    return {
                        elem: 'text',
                        tag: 'span',
                        content: __$ctx.ctx.content
                    };
                    return;
                } else {
                    return $458(__$ctx);
                }
            } else if (__t === 'attrs') {
                return $25(__$ctx);
            } else if (__t === 'default') {
                return $51(__$ctx);
            } else if (__t === 'js') {
                if (!!$$elem === false) {
                    return true;
                    return;
                } else {
                    return $458(__$ctx);
                }
            } else if (__t === 'tag') {
                if (!__$ctx.ctx.url === false) {
                    if (!!$$elem === false) {
                        return 'a';
                        return;
                    } else {
                        return $70(__$ctx);
                    }
                } else {
                    return $70(__$ctx);
                }
            } else {
                return $458(__$ctx);
            }
        } else if (__t === 'link') {
            var __t = $$mode;
            if (__t === 'content') {
                if (!($$mods && $$mods.pseudo === 'yes') === false) {
                    if (!!__$ctx.ctx._wrap === false) {
                        if (!!$$elem === false) {
                            if (!!$$mods.inner === false) {
                                {
                                    '';
                                    var __r0 = $$mode;
                                    $$mode = '';
                                    var __r1 = __$ctx.ctx;
                                    __$ctx.ctx = {
                                        elem: 'inner',
                                        content: __$ctx.ctx.content,
                                        _wrap: true
                                    };
                                    $459(__$ctx);
                                    $$mode = __r0;
                                    __$ctx.ctx = __r1;
                                    '';
                                }
                                undefined;
                                return;
                            } else {
                                return $458(__$ctx);
                            }
                        } else {
                            return $458(__$ctx);
                        }
                    } else {
                        return $458(__$ctx);
                    }
                } else {
                    return $458(__$ctx);
                }
            } else if (__t === 'attrs') {
                return $92(__$ctx);
            } else if (__t === 'js') {
                if (!($$mods && $$mods.pseudo === 'yes') === false) {
                    if (!!$$elem === false) {
                        return true;
                        return;
                    } else {
                        return $121(__$ctx);
                    }
                } else {
                    return $121(__$ctx);
                }
            } else if (__t === 'mix') {
                return $126(__$ctx);
            } else if (__t === 'tag') {
                if ($$elem === 'inner') {
                    return 'span';
                    return;
                } else {
                    if (!!$$elem === false) {
                        return __$ctx.ctx.url ? 'a' : 'span';
                        return;
                    } else {
                        return $458(__$ctx);
                    }
                }
            } else {
                return $458(__$ctx);
            }
        } else if (__t === 'input') {
            var __t = $$mode;
            if (__t === 'content') {
                var __t = $$elem;
                if (__t === 'control') {
                    if (!($$mods && $$mods.type === 'textarea') === false) {
                        return __$ctx.xmlEscape(__$ctx._value || __$ctx.ctx.content || '');
                        return;
                    } else {
                        return $458(__$ctx);
                    }
                } else if (__t === 'clear') {
                    if (!!__$ctx.ctx.content === false) {
                        return '';
                        return;
                    } else {
                        return $458(__$ctx);
                    }
                } else if (__t === 'ahead') {
                    return [
                        { elem: 'ahead-filler' },
                        { elem: 'ahead-hint' }
                    ];
                    return;
                } else {
                    return $458(__$ctx);
                }
            } else if (__t === 'attrs') {
                var __t = $$elem;
                if (__t === 'control') {
                    return $170(__$ctx);
                } else if (__t === 'sample') {
                    return { role: 'listitem' };
                    return;
                } else if (__t === 'samples') {
                    return { role: 'list' };
                    return;
                } else if (__t === 'message') {
                    if (!($$elemMods && $$elemMods.visibility === 'visible') === false) {
                        return { 'aria-hidden': 'false' };
                        return;
                    } else {
                        if (!($$elemMods && $$elemMods.type === 'error') === false) {
                            return { role: 'alert' };
                            return;
                        } else {
                            return { 'aria-hidden': 'true' };
                            return;
                        }
                    }
                } else if (__t === 'label') {
                    return {
                        id: __$ctx._labelId,
                        'for': __$ctx._inputId,
                        'aria-hidden': true
                    };
                    return;
                } else if (__t === 'hint') {
                    return {
                        id: __$ctx._hintId,
                        'for': __$ctx._inputId,
                        'aria-hidden': true
                    };
                    return;
                } else if (__t === 'clear') {
                    return { unselectable: 'on' };
                    return;
                } else {
                    return $458(__$ctx);
                }
            } else if (__t === 'tag') {
                var __t = $$elem;
                if (__t === 'control') {
                    if (!($$mods && $$mods.type === 'textarea') === false) {
                        return 'textarea';
                        return;
                    } else {
                        return 'input';
                        return;
                    }
                } else if (__t === 'sample' || __t === 'samples' || __t === 'message') {
                    return 'span';
                    return;
                } else if (__t === 'label' || __t === 'hint') {
                    return 'label';
                    return;
                } else if (__t === 'clear') {
                    return 'a';
                    return;
                } else if (__t === 'ahead-hint' || __t === 'ahead-filler') {
                    return 'span';
                    return;
                } else {
                    if (!!$$elem === false) {
                        return 'span';
                        return;
                    } else {
                        return $458(__$ctx);
                    }
                }
            } else if (__t === 'default') {
                return $228(__$ctx);
            } else if (__t === 'js') {
                return $262(__$ctx);
            } else if (__t === 'mix') {
                if ($$elem === 'ahead') {
                    return [{
                            block: 'input',
                            elem: 'input'
                        }];
                    return;
                } else {
                    return $458(__$ctx);
                }
            } else if (__t === 'value') {
                return $281(__$ctx);
            } else {
                return $458(__$ctx);
            }
        } else if (__t === 'b-page') {
            var __t = $$mode;
            if (__t === 'mix') {
                return $304(__$ctx);
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
                        return $458(__$ctx);
                    }
                } else if (__t === 'meta') {
                    return __$ctx.ctx.attrs;
                    return;
                } else {
                    return $458(__$ctx);
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
                    return $458(__$ctx);
                }
            } else if (__t === 'bem') {
                var __t = $$elem;
                if (__t === 'js' || __t === 'css' || __t === 'meta' || __t === 'link' || __t === 'head' || __t === 'root') {
                    return false;
                    return;
                } else {
                    return $458(__$ctx);
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
                                    $459(__$ctx);
                                    $$mode = __r0;
                                    __$ctx._IE = __r1;
                                    __$ctx.ctx = __r2;
                                    '';
                                }
                                return;
                            } else {
                                return $377(__$ctx);
                            }
                        } else {
                            return $377(__$ctx);
                        }
                    } else {
                        return $377(__$ctx);
                    }
                } else if (__t === 'icon') {
                    return $389(__$ctx);
                } else {
                    return $390(__$ctx);
                }
            } else if (__t === 'cls') {
                if ($$elem === 'root') {
                    return 'i-ua_js_no i-ua_css_standard';
                    return;
                } else {
                    return $458(__$ctx);
                }
            } else if (__t === 'js-params') {
                return $403(__$ctx);
            } else {
                return $458(__$ctx);
            }
        } else if (__t === 'i-bem') {
            if ($$mode === 'default') {
                if ($$elem === 'i18n') {
                    return $413(__$ctx);
                } else {
                    return $458(__$ctx);
                }
            } else {
                return $458(__$ctx);
            }
        } else if (__t === 'i-global') {
            var __t = $$mode;
            if (__t === 'public-params') {
                return $419(__$ctx);
            } else if (__t === 'default') {
                return $424(__$ctx);
            } else if (__t === 'env') {
                return $451(__$ctx);
            } else {
                return $458(__$ctx);
            }
        } else {
            return $458(__$ctx);
        }
    }
    function $6(__$ctx) {
        var __r0, __r4, __r1, __r2, __r3;
        return '', __r0 = __$ctx['__$anflg17'], __$ctx['__$anflg17'] = true, __r4 = ('', __r1 = __$ctx.ctx, __$ctx.ctx = {
            block: 'b-page',
            elem: 'js',
            url: __$ctx.ctx.url || (__$ctx.ctx.protocol ? __$ctx.ctx.protocol + ':' : '') + '//yastatic.net/jquery/' + $$mods.version + '/jquery.min.js'
        }, __r2 = $$mode, $$mode = '', __r3 = $459(__$ctx), __$ctx.ctx = __r1, $$mode = __r2, '', __r3), __$ctx['__$anflg17'] = __r0, '', __r4;
        return;
    }
    function $9(__$ctx) {
        if (!(__$ctx['__$anflg16'] !== true) === false) {
            if (!!$$elem === false) {
                return $12(__$ctx);
            } else {
                return $458(__$ctx);
            }
        } else {
            return $458(__$ctx);
        }
    }
    function $12(__$ctx) {
        var __r0, __r4, __r1, __r2, __r3;
        return '', __r0 = __$ctx['__$anflg16'], __$ctx['__$anflg16'] = true, __r4 = ('', __r1 = __$ctx.ctx, __$ctx.ctx = {
            block: 'b-page',
            elem: 'js',
            url: __$ctx.ctx.url || (__$ctx.ctx.protocol ? __$ctx.ctx.protocol + ':' : '') + '//yastatic.net/jquery/' + $$mods.version + '/jquery.min.js'
        }, __r2 = $$mode, $$mode = '', __r3 = $459(__$ctx), __$ctx.ctx = __r1, $$mode = __r2, '', __r3), __$ctx['__$anflg16'] = __r0, '', __r4;
        return;
    }
    function $25(__$ctx) {
        if (!(__$ctx['__$anflg15'] !== true) === false) {
            if (!__$ctx.ctx.url === false) {
                if (!!$$elem === false) {
                    var __r0, __r1;
                    var _$36ctx = __$ctx.ctx, _$36p = ('', __r0 = __$ctx['__$anflg15'], __$ctx['__$anflg15'] = true, __r1 = $25(__$ctx), __$ctx['__$anflg15'] = __r0, '', __r1), _$36a = { href: _$36ctx.url };
                    _$36ctx.target && (_$36a.target = _$36ctx.target);
                    $$mods.disabled && (_$36a['aria-disabled'] = true);
                    return __$ctx._.extend(_$36p, _$36a);
                    return;
                } else {
                    return $34(__$ctx);
                }
            } else {
                return $34(__$ctx);
            }
        } else {
            return $34(__$ctx);
        }
    }
    function $34(__$ctx) {
        if (!(__$ctx['__$anflg14'] !== true) === false) {
            if (!!$$elem === false) {
                if (!!__$ctx.ctx.url === false) {
                    return $38(__$ctx);
                } else {
                    return $43(__$ctx);
                }
            } else {
                return $43(__$ctx);
            }
        } else {
            return $43(__$ctx);
        }
    }
    function $38(__$ctx) {
        var __r0, __r1;
        var _$35ctx = __$ctx.ctx, _$35p = ('', __r0 = __$ctx['__$anflg14'], __$ctx['__$anflg14'] = true, __r1 = $25(__$ctx), __$ctx['__$anflg14'] = __r0, '', __r1), _$35a = { type: _$35ctx.type || 'button' }, _$35props = [
                'name',
                'value'
            ], _$35i;
        while (_$35i = _$35props.shift()) {
            _$35ctx[_$35i] && (_$35a[_$35i] = _$35ctx[_$35i]);
        }
        $$mods.disabled && (_$35a.disabled = 'disabled');
        return __$ctx._.extend(_$35p, _$35a);
        return;
    }
    function $43(__$ctx) {
        if (!true === false) {
            if (!!$$elem === false) {
                var _$34ctx = __$ctx.ctx, _$34a = { role: 'button' };
                _$34ctx.tabindex && (_$34a.tabindex = _$34ctx.tabindex);
                return _$34a;
                return;
            } else {
                return $458(__$ctx);
            }
        } else {
            return $458(__$ctx);
        }
    }
    function $51(__$ctx) {
        if (!(__$ctx['__$anflg13'] !== true) === false) {
            if (!!$$elem === false) {
                var _$33mods = __$ctx.ctx.mods || {};
                _$33mods.theme = _$33mods.theme || 'normal';
                {
                    '';
                    var __r0 = __$ctx['__$anflg13'];
                    __$ctx['__$anflg13'] = true;
                    {
                        '';
                        var __r1 = __$ctx.ctx, __r2 = __r1.mods;
                        __r1.mods = _$33mods;
                        $51(__$ctx);
                        __r1.mods = __r2;
                        '';
                    }
                    __$ctx['__$anflg13'] = __r0;
                    '';
                }
                undefined;
                return;
            } else {
                return $458(__$ctx);
            }
        } else {
            return $458(__$ctx);
        }
    }
    function $70(__$ctx) {
        if (!!$$elem === false) {
            return 'button';
            return;
        } else {
            return $458(__$ctx);
        }
    }
    function $92(__$ctx) {
        if (!($$mods && $$mods.pseudo === 'yes') === false) {
            if (!!$$elem === false) {
                if (!!__$ctx.ctx.url === false) {
                    var _$2ydisabled = (__$ctx.ctx.mods || {}).disabled === 'yes', _$2ya = {
                            role: 'button',
                            tabindex: 0
                        };
                    if (_$2ydisabled) {
                        _$2ya['aria-disabled'] = true;
                        delete _$2ya.tabindex;
                    } else {
                        undefined;
                    }
                    return _$2ya;
                    return;
                } else {
                    return $101(__$ctx);
                }
            } else {
                return $101(__$ctx);
            }
        } else {
            return $101(__$ctx);
        }
    }
    function $101(__$ctx) {
        if (!(__$ctx['__$anflg9'] !== true) === false) {
            if (!($$mods && $$mods.disabled === 'yes') === false) {
                if (!!$$elem === false) {
                    var __r0, __r1;
                    var _$2pattrs = ('', __r0 = __$ctx['__$anflg9'], __$ctx['__$anflg9'] = true, __r1 = $92(__$ctx), __$ctx['__$anflg9'] = __r0, '', __r1) || {};
                    _$2pattrs.tabindex = -1;
                    _$2pattrs['aria-disabled'] = true;
                    return _$2pattrs;
                    return;
                } else {
                    return $110(__$ctx);
                }
            } else {
                return $110(__$ctx);
            }
        } else {
            return $110(__$ctx);
        }
    }
    function $110(__$ctx) {
        if (!!$$elem === false) {
            return $112(__$ctx);
        } else {
            return $458(__$ctx);
        }
    }
    function $112(__$ctx) {
        var _$2octx = __$ctx.ctx, _$2oattrs = {};
        [
            'title',
            'target',
            'id',
            'tabindex'
        ].forEach(function (param) {
            if (_$2octx.hasOwnProperty(param)) {
                _$2oattrs[param] = String(_$2octx[param]);
            } else {
                undefined;
            }
        });
        if (_$2octx.url !== null && typeof _$2octx.url !== 'undefined') {
            if (__$ctx.isSimple(_$2octx.url)) {
                _$2oattrs.href = String(_$2octx.url);
            } else {
                var _$2obuf = [];
                {
                    '';
                    var __r0 = $$mode;
                    $$mode = '';
                    var __r1 = __$ctx._buf;
                    __$ctx._buf = _$2obuf;
                    var __r2 = __$ctx.ctx;
                    __$ctx.ctx = _$2octx.url;
                    $459(__$ctx);
                    $$mode = __r0;
                    __$ctx._buf = __r1;
                    __$ctx.ctx = __r2;
                    '';
                }
                undefined;
                _$2oattrs.href = _$2obuf.join('');
            }
        } else {
            _$2oattrs.role = 'button';
            if (!_$2oattrs.tabindex) {
                _$2oattrs.tabindex = '0';
            } else {
                undefined;
            }
        }
        return _$2oattrs;
        return;
    }
    function $121(__$ctx) {
        if (!__$ctx.ctx.hasOwnProperty('tabindex') === false) {
            return { origTabindex: String(__$ctx.ctx.tabindex) };
            return;
        } else {
            return $458(__$ctx);
        }
    }
    function $126(__$ctx) {
        if (!(__$ctx['__$anflg10'] !== true) === false) {
            if (!!$$elem === false) {
                var __r0, __r1;
                var _$2rmix = ('', __r0 = __$ctx['__$anflg10'], __$ctx['__$anflg10'] = true, __r1 = $126(__$ctx), __$ctx['__$anflg10'] = __r0, '', __r1) || [];
                _$2rmix.push({
                    block: 'i-pressed-controller',
                    js: true
                });
                return _$2rmix;
                return;
            } else {
                return $132(__$ctx);
            }
        } else {
            return $132(__$ctx);
        }
    }
    function $132(__$ctx) {
        if (!__$ctx._disabled === false) {
            if (!__$ctx._inputLink === false) {
                if (!!$$elem === false) {
                    return [{ mods: { disabled: 'yes' } }];
                    return;
                } else {
                    return $458(__$ctx);
                }
            } else {
                return $458(__$ctx);
            }
        } else {
            return $458(__$ctx);
        }
    }
    function $170(__$ctx) {
        if (!($$mods && $$mods.type === 'textarea') === false) {
            return $171(__$ctx);
        } else {
            return $176(__$ctx);
        }
    }
    function $171(__$ctx) {
        if (!!__$ctx._baseAttrsApplyed === false) {
            var __r0, __r1, __r2;
            var _$2va = ('', __r0 = __$ctx._value, __$ctx._value = null, __r1 = __$ctx._baseAttrsApplyed, __$ctx._baseAttrsApplyed = true, __r2 = $171(__$ctx), __$ctx._value = __r0, __$ctx._baseAttrsApplyed = __r1, '', __r2);
            return __$ctx._.extend(_$2va, {
                rows: 10,
                cols: 10
            });
            return;
        } else {
            return $176(__$ctx);
        }
    }
    function $176(__$ctx) {
        if (!(__$ctx['__$anflg7'] !== true) === false) {
            var __r0, __r1;
            var _$22ctx = __$ctx.ctx, _$22a = __$ctx._.extend(('', __r0 = __$ctx['__$anflg7'], __$ctx['__$anflg7'] = true, __r1 = $170(__$ctx), __$ctx['__$anflg7'] = __r0, '', __r1), {
                    autocomplete: _$22ctx.autocomplete || 'off',
                    autocorrect: _$22ctx.autocorrect || 'off',
                    autocapitalize: _$22ctx.autocapitalize || 'off',
                    spellcheck: _$22ctx.spellcheck || 'false'
                });
            return _$22a;
            return;
        } else {
            var _$20a = __$ctx._.extend({
                    id: __$ctx._inputId,
                    name: __$ctx._name
                }, __$ctx.ctx.controlAttrs);
            (__$ctx._value || __$ctx._value === 0) && (_$20a.value = __$ctx._value);
            $$mods.disabled && (_$20a.disabled = 'disabled');
            _$20a['aria-labelledby'] = __$ctx._labelId + ' ' + __$ctx._hintId;
            return _$20a;
            return;
        }
    }
    function $228(__$ctx) {
        var __t = $$elem;
        if (__t === 'control') {
            if (!(__$ctx['__$anflg12'] !== true) === false) {
                if (!($$mods && $$mods.clear === 'no') === false) {
                    {
                        '';
                        var __r0 = __$ctx['__$anflg12'];
                        __$ctx['__$anflg12'] = true;
                        {
                            '';
                            var __r1 = __$ctx.ctx;
                            __$ctx.ctx = {
                                elem: 'box',
                                tag: 'span',
                                content: __$ctx.ctx
                            };
                            var __r2 = $$mode;
                            $$mode = '';
                            $459(__$ctx);
                            __$ctx.ctx = __r1;
                            $$mode = __r2;
                            '';
                        }
                        __$ctx['__$anflg12'] = __r0;
                        '';
                    }
                    undefined;
                    return;
                } else {
                    return $235(__$ctx);
                }
            } else {
                return $235(__$ctx);
            }
        } else if (__t === 'hint') {
            if (!(__$ctx['__$anflg8'] !== true) === false) {
                if (!!__$ctx._value === false) {
                    if (!(__$ctx._value !== 0) === false) {
                        return $247(__$ctx);
                    } else {
                        return $254(__$ctx);
                    }
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
    function $235(__$ctx) {
        if (!(__$ctx['__$anflg6'] !== true) === false) {
            if (!!$$mods.clear === false) {
                return $238(__$ctx);
            } else {
                return $254(__$ctx);
            }
        } else {
            return $254(__$ctx);
        }
    }
    function $238(__$ctx) {
        {
            '';
            var __r0 = __$ctx['__$anflg6'];
            __$ctx['__$anflg6'] = true;
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
                $459(__$ctx);
                __$ctx.ctx = __r1;
                $$mode = __r2;
                '';
            }
            __$ctx['__$anflg6'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $247(__$ctx) {
        var __r0, __r4, __r1, __r2, __r3;
        var _$2actx = __$ctx.ctx, _$2aelemMods = _$2actx.elemMods || (_$2actx.elemMods = {});
        _$2aelemMods.visibility = 'visible';
        return '', __r0 = __$ctx['__$anflg8'], __$ctx['__$anflg8'] = true, __r4 = ('', __r1 = __$ctx.ctx, __$ctx.ctx = _$2actx, __r2 = $$mode, $$mode = '', __r3 = $459(__$ctx), __$ctx.ctx = __r1, $$mode = __r2, '', __r3), __$ctx['__$anflg8'] = __r0, '', __r4;
        return;
    }
    function $254(__$ctx) {
        if (!(__$ctx['__$anflg5'] !== true) === false) {
            if (!!$$elem === false) {
                return $257(__$ctx);
            } else {
                return $458(__$ctx);
            }
        } else {
            return $458(__$ctx);
        }
    }
    function $257(__$ctx) {
        var __r0, __r1, __r2;
        var _$1rvalue = ('', __r0 = $$mode, $$mode = 'value', __r1 = __$ctx.ctx, __$ctx.ctx = __$ctx.ctx.value, __r2 = $281(__$ctx), $$mode = __r0, __$ctx.ctx = __r1, '', __r2), _$1rid = __$ctx.ctx.id || __$ctx.generateId(), _$1rmods = __$ctx.ctx.mods || {};
        _$1rmods.theme = _$1rmods.theme || 'normal';
        {
            '';
            var __r3 = __$ctx['__$anflg5'];
            __$ctx['__$anflg5'] = true;
            {
                '';
                var __r4 = __$ctx._inputId;
                __$ctx._inputId = _$1rid;
                var __r5 = __$ctx._labelId;
                __$ctx._labelId = 'label' + _$1rid;
                var __r6 = __$ctx._hintId;
                __$ctx._hintId = 'hint' + _$1rid;
                var __r7 = __$ctx._name;
                __$ctx._name = __$ctx.ctx.name || '';
                var __r8 = __$ctx._value;
                __$ctx._value = _$1rvalue;
                var __r9 = __$ctx._inputLink;
                __$ctx._inputLink = true;
                var __r10 = __$ctx._disabled;
                __$ctx._disabled = $$mods.disabled;
                var __r11 = __$ctx.ctx, __r12 = __r11.mods;
                __r11.mods = _$1rmods;
                $228(__$ctx);
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
            __$ctx['__$anflg5'] = __r3;
            '';
        }
        undefined;
        return;
    }
    function $262(__$ctx) {
        if (!(__$ctx['__$anflg11'] !== true) === false) {
            if (!($$mods && $$mods.autofocus === 'yes') === false) {
                if (!!$$elem === false) {
                    var __r0, __r1;
                    return __$ctx.extend(('', __r0 = __$ctx['__$anflg11'], __$ctx['__$anflg11'] = true, __r1 = $262(__$ctx), __$ctx['__$anflg11'] = __r0, '', __r1), { live: false });
                    return;
                } else {
                    return $271(__$ctx);
                }
            } else {
                return $271(__$ctx);
            }
        } else {
            return $271(__$ctx);
        }
    }
    function $271(__$ctx) {
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
            return $458(__$ctx);
        }
    }
    function $281(__$ctx) {
        if (!__$ctx.isSimple(__$ctx.ctx) === false) {
            if (!!$$elem === false) {
                return __$ctx.ctx;
                return;
            } else {
                return $287(__$ctx);
            }
        } else {
            return $287(__$ctx);
        }
    }
    function $287(__$ctx) {
        if (!__$ctx.ctx === false) {
            if (!!$$elem === false) {
                var _$1tvalue = [];
                {
                    '';
                    var __r0 = __$ctx._buf;
                    __$ctx._buf = _$1tvalue;
                    var __r1 = $$mode;
                    $$mode = '';
                    $459(__$ctx);
                    __$ctx._buf = __r0;
                    $$mode = __r1;
                    '';
                }
                undefined;
                return _$1tvalue.join('');
                return;
            } else {
                return $293(__$ctx);
            }
        } else {
            return $293(__$ctx);
        }
    }
    function $293(__$ctx) {
        if (!true === false) {
            if (!!$$elem === false) {
                return '';
                return;
            } else {
                return $458(__$ctx);
            }
        } else {
            return $458(__$ctx);
        }
    }
    function $304(__$ctx) {
        if ($$elem === 'body') {
            return $305(__$ctx);
        } else {
            return $310(__$ctx);
        }
    }
    function $305(__$ctx) {
        if (!!__$ctx.ctx._iGlobal === false) {
            return $307(__$ctx);
        } else {
            return $310(__$ctx);
        }
    }
    function $307(__$ctx) {
        var __r0, __r1, __r2, __r3, __r4, __r5;
        var _$1omix = ('', __r0 = __$ctx.ctx, __r1 = __r0._iGlobal, __r0._iGlobal = true, __r2 = $305(__$ctx), __r0._iGlobal = __r1, '', __r2), _$1ojsParams = ('', __r3 = $$mode, $$mode = 'js-params', __r4 = $$elem, $$elem = '', __r5 = $403(__$ctx), $$mode = __r3, $$elem = __r4, '', __r5);
        _$1omix ? _$1omix.push(_$1ojsParams) : _$1omix = [_$1ojsParams];
        return _$1omix;
        return;
    }
    function $310(__$ctx) {
        if (!(__$ctx['__$anflg4'] !== true) === false) {
            if (!!$$elem === false) {
                var __r0, __r1;
                var _$1mmix = ('', __r0 = __$ctx['__$anflg4'], __$ctx['__$anflg4'] = true, __r1 = $304(__$ctx), __$ctx['__$anflg4'] = __r0, '', __r1) || [];
                _$1mmix.push({
                    block: 'i-ua',
                    mods: { interaction: 'yes' },
                    js: true
                });
                return _$1mmix;
                return;
            } else {
                return $458(__$ctx);
            }
        } else {
            return $458(__$ctx);
        }
    }
    function $377(__$ctx) {
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
                        $459(__$ctx);
                        $$mode = __r0;
                        __$ctx._notIE = __r1;
                        __$ctx.ctx = __r2;
                        '';
                    }
                    return;
                } else {
                    return $390(__$ctx);
                }
            } else {
                return $390(__$ctx);
            }
        } else {
            return $390(__$ctx);
        }
    }
    function $389(__$ctx) {
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
            $459(__$ctx);
            $$mode = __r0;
            __$ctx.ctx = __r1;
            '';
        }
        return;
    }
    function $390(__$ctx) {
        if (!(__$ctx['__$anflg3'] !== true) === false) {
            if (!!$$elem === false) {
                return $393(__$ctx);
            } else {
                return $458(__$ctx);
            }
        } else {
            return $458(__$ctx);
        }
    }
    function $393(__$ctx) {
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
                            ].concat(('', __r1 = $$mode, $$mode = 'mix', __r2 = $304(__$ctx), $$mode = __r1, '', __r2) || [], __$ctx.ctx.mix || []),
                            content: __$ctx.ctx.content
                        }
                    ]
                };
                var __r4 = $$mode;
                $$mode = '';
                $459(__$ctx);
                __$ctx.ctx = __r3;
                $$mode = __r4;
                '';
            }
            __$ctx['__$anflg3'] = __r0;
            '';
        }
        return;
    }
    function $403(__$ctx) {
        if (!!$$elem === false) {
            return $405(__$ctx);
        } else {
            return $458(__$ctx);
        }
    }
    function $405(__$ctx) {
        var __r0, __r1, __r2, __r3;
        var _$y_this = __$ctx['i-global'], _$yjs = {}, _$yblock = {
                block: 'i-global',
                js: _$yjs
            }, _$ye;
        for (_$ye in _$y_this) {
            if (_$y_this.hasOwnProperty(_$ye) && ('', __r0 = $$mode, $$mode = 'public-params', __r1 = $$block, $$block = 'i-global', __r2 = $$elem, $$elem = _$ye, __r3 = $419(__$ctx), $$mode = __r0, $$block = __r1, $$elem = __r2, '', __r3)) {
                _$yjs[_$ye] = _$y_this[_$ye];
            } else {
                undefined;
            }
        }
        return _$yblock;
        return;
    }
    function $413(__$ctx) {
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
            _$zparams.content = (_$zcnt = [], '', __r0 = __$ctx._buf, __$ctx._buf = _$zcnt, __r1 = $$mode, $$mode = '', __r2 = __$ctx.ctx, __$ctx.ctx = _$zctx.content, __r3 = $459(__$ctx), __$ctx._buf = __r0, $$mode = __r1, __$ctx.ctx = __r2, '', __r3, _$zcnt.join(''));
        } else {
            undefined;
        }
        __$ctx._buf.push(BEM.I18N(_$zkeyset, _$zkey, _$zparams));
        return;
    }
    function $419(__$ctx) {
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
            return $458(__$ctx);
        }
    }
    function $424(__$ctx) {
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
                    return $448(__$ctx);
                } else {
                    return $458(__$ctx);
                }
            }
        }
    }
    function $448(__$ctx) {
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
    function $451(__$ctx) {
        if (!!$$elem === false) {
            return {};
            return;
        } else {
            return $458(__$ctx);
        }
    }
    function $458(__$ctx) {
        if ($$mode === '') {
            return $459(__$ctx);
        } else {
            return $464(__$ctx);
        }
    }
    function $459(__$ctx) {
        if (!!__$ctx['i-global'] === false) {
            return $461(__$ctx);
        } else {
            return $464(__$ctx);
        }
    }
    function $461(__$ctx) {
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
            _$kps[_$ke] = ('', __r0 = $$mode, $$mode = 'default', __r1 = $$block, $$block = 'i-global', __r2 = $$elem, $$elem = _$ke, __r3 = $424(__$ctx), $$mode = __r0, $$block = __r1, $$elem = __r2, '', __r3);
        }
        __$ctx['i-global'] = __$ctx._.extend(_$kps, ('', __r4 = $$mode, $$mode = 'env', __r5 = $$block, $$block = 'i-global', __r6 = $451(__$ctx), $$mode = __r4, $$block = __r5, '', __r6));
        applyc(__$ctx);
        undefined;
        return;
    }
    function $464(__$ctx) {
        var __t = $$block;
        if (__t === 'i-ua') {
            var __t = $$mode;
            if (__t === 'content') {
                return $466(__$ctx);
            } else if (__t === 'bem') {
                if (!!$$elem === false) {
                    return false;
                    return;
                } else {
                    return $500(__$ctx);
                }
            } else if (__t === 'tag') {
                if (!!$$elem === false) {
                    return 'script';
                    return;
                } else {
                    return $500(__$ctx);
                }
            } else {
                return $500(__$ctx);
            }
        } else if (__t === 'i-jquery') {
            if ($$mode === 'default') {
                if ($$elem === 'core') {
                    if (!(__$ctx['__$anflg1'] !== true) === false) {
                        return $493(__$ctx);
                    } else {
                        return $500(__$ctx);
                    }
                } else {
                    return $500(__$ctx);
                }
            } else {
                return $500(__$ctx);
            }
        } else {
            return $500(__$ctx);
        }
    }
    function $466(__$ctx) {
        if (!(__$ctx['__$anflg2'] !== true) === false) {
            if (!!$$elem === false) {
                var __r0, __r1;
                var _$jc = ('', __r0 = __$ctx['__$anflg2'], __$ctx['__$anflg2'] = true, __r1 = $466(__$ctx), __$ctx['__$anflg2'] = __r0, '', __r1);
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
                return $472(__$ctx);
            }
        } else {
            return $472(__$ctx);
        }
    }
    function $472(__$ctx) {
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
            return $500(__$ctx);
        }
    }
    function $493(__$ctx) {
        var __r0, __r4, __r1, __r2, __r3;
        return '', __r0 = __$ctx['__$anflg1'], __$ctx['__$anflg1'] = true, __r4 = ('', __r1 = __$ctx.ctx, __$ctx.ctx = {
            block: 'b-page',
            elem: 'js',
            url: 'http://yastatic.net/jquery/1.8.3/jquery.min.js'
        }, __r2 = $$mode, $$mode = '', __r3 = $459(__$ctx), __$ctx.ctx = __r1, $$mode = __r2, '', __r3), __$ctx['__$anflg1'] = __r0, '', __r4;
        return;
    }
    function $500(__$ctx) {
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
                        return $521(__$ctx);
                    } else {
                        return $526(__$ctx);
                    }
                } else {
                    return $526(__$ctx);
                }
            } else {
                return $526(__$ctx);
            }
        }
    }
    function $521(__$ctx) {
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
    function $526(__$ctx) {
        if (!cache === false) {
            if (!__$ctx.ctx === false) {
                if (!__$ctx.ctx.cache === false) {
                    return $530(__$ctx);
                } else {
                    return $535(__$ctx);
                }
            } else {
                return $535(__$ctx);
            }
        } else {
            return $535(__$ctx);
        }
    }
    function $530(__$ctx) {
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
    function $535(__$ctx) {
        var __t = $$mode;
        if (__t === 'default') {
            return $537(__$ctx);
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
                        return $546(__$ctx);
                    } else {
                        if (!true === false) {
                            return $549(__$ctx);
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
    function $537(__$ctx) {
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
    function $546(__$ctx) {
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
    function $549(__$ctx) {
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
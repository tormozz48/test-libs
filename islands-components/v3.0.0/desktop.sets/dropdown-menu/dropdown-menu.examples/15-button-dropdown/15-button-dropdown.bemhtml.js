var BEMHTML = function() {
  var $$mode, $$block, $$elem, $$elemMods, $$mods;
  var cache,
      exports = {},
      xjst = (function (exports) {
    function $1(__$ctx) {
        var __t = $$mode;
        if (__t === 'default') {
            return $2(__$ctx);
        } else if (__t === 'content') {
            return $78(__$ctx);
        } else if (__t === 'attrs') {
            return $116(__$ctx);
        } else if (__t === 'js') {
            return $191(__$ctx);
        } else if (__t === 'tag') {
            return $223(__$ctx);
        } else if (__t === 'mix') {
            return $276(__$ctx);
        } else {
            return $289(__$ctx);
        }
    }
    function $2(__$ctx) {
        var __t = $$block;
        if (__t === 'i-jquery') {
            if (!(__$ctx['__$anflg17'] !== true) === false) {
                if (!!$$elem === false) {
                    return $6(__$ctx);
                } else {
                    return $9(__$ctx);
                }
            } else {
                return $9(__$ctx);
            }
        } else if (__t === 'button') {
            return $17(__$ctx);
        } else if (__t === 'b-menu-horiz') {
            if ($$elem === 'item') {
                if (!(__$ctx['__$anflg11'] !== true) === false) {
                    if (!$$mods === false) {
                        return $29(__$ctx);
                    } else {
                        return $289(__$ctx);
                    }
                } else {
                    return $289(__$ctx);
                }
            } else {
                return $289(__$ctx);
            }
        } else if (__t === 'b-menu-vert') {
            if ($$elem === 'item') {
                if (!(__$ctx['__$anflg10'] !== true) === false) {
                    return $39(__$ctx);
                } else {
                    return $289(__$ctx);
                }
            } else {
                return $289(__$ctx);
            }
        } else if (__t === 'dropdown-menu') {
            var __t = $$elem;
            if (__t === 'switcher') {
                if (!(__$ctx['__$anflg9'] !== true) === false) {
                    return $47(__$ctx);
                } else {
                    return $60(__$ctx);
                }
            } else if (__t === 'popup') {
                if (!(__$ctx['__$anflg8'] !== true) === false) {
                    return $52(__$ctx);
                } else {
                    return $60(__$ctx);
                }
            } else if (__t === 'menu') {
                if (!(__$ctx['__$anflg7'] !== true) === false) {
                    return $57(__$ctx);
                } else {
                    return $60(__$ctx);
                }
            } else {
                return $60(__$ctx);
            }
        } else if (__t === 'popup') {
            return $68(__$ctx);
        } else {
            return $289(__$ctx);
        }
    }
    function $6(__$ctx) {
        var __r0, __r4, __r1, __r2, __r3;
        return '', __r0 = __$ctx['__$anflg17'], __$ctx['__$anflg17'] = true, __r4 = ('', __r1 = __$ctx.ctx, __$ctx.ctx = {
            block: 'b-page',
            elem: 'js',
            url: __$ctx.ctx.url || (__$ctx.ctx.protocol ? __$ctx.ctx.protocol + ':' : '') + '//yastatic.net/jquery/' + $$mods.version + '/jquery.min.js'
        }, __r2 = $$mode, $$mode = '', __r3 = $540(__$ctx), __$ctx.ctx = __r1, $$mode = __r2, '', __r3), __$ctx['__$anflg17'] = __r0, '', __r4;
        return;
    }
    function $9(__$ctx) {
        if (!(__$ctx['__$anflg16'] !== true) === false) {
            if (!!$$elem === false) {
                return $12(__$ctx);
            } else {
                return $289(__$ctx);
            }
        } else {
            return $289(__$ctx);
        }
    }
    function $12(__$ctx) {
        var __r0, __r4, __r1, __r2, __r3;
        return '', __r0 = __$ctx['__$anflg16'], __$ctx['__$anflg16'] = true, __r4 = ('', __r1 = __$ctx.ctx, __$ctx.ctx = {
            block: 'b-page',
            elem: 'js',
            url: __$ctx.ctx.url || (__$ctx.ctx.protocol ? __$ctx.ctx.protocol + ':' : '') + '//yastatic.net/jquery/' + $$mods.version + '/jquery.min.js'
        }, __r2 = $$mode, $$mode = '', __r3 = $540(__$ctx), __$ctx.ctx = __r1, $$mode = __r2, '', __r3), __$ctx['__$anflg16'] = __r0, '', __r4;
        return;
    }
    function $17(__$ctx) {
        if (!(__$ctx['__$anflg12'] !== true) === false) {
            if (!!$$elem === false) {
                var _$2nmods = __$ctx.ctx.mods || {};
                _$2nmods.theme = _$2nmods.theme || 'normal';
                {
                    '';
                    var __r0 = __$ctx['__$anflg12'];
                    __$ctx['__$anflg12'] = true;
                    {
                        '';
                        var __r1 = __$ctx.ctx, __r2 = __r1.mods;
                        __r1.mods = _$2nmods;
                        $17(__$ctx);
                        __r1.mods = __r2;
                        '';
                    }
                    __$ctx['__$anflg12'] = __r0;
                    '';
                }
                undefined;
                return;
            } else {
                return $289(__$ctx);
            }
        } else {
            return $289(__$ctx);
        }
    }
    function $29(__$ctx) {
        {
            '';
            var __r0 = __$ctx['__$anflg11'];
            __$ctx['__$anflg11'] = true;
            {
                '';
                var __r1 = $$mode;
                $$mode = '';
                var __r2 = __$ctx.position;
                __$ctx.position = __$ctx.position - 1;
                var __r3 = __$ctx.ctx;
                __$ctx.ctx = {
                    elem: 'layout-unit',
                    content: __$ctx.ctx
                };
                $540(__$ctx);
                $$mode = __r1;
                __$ctx.position = __r2;
                __$ctx.ctx = __r3;
                '';
            }
            __$ctx['__$anflg11'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $39(__$ctx) {
        {
            '';
            var __r0 = __$ctx['__$anflg10'];
            __$ctx['__$anflg10'] = true;
            {
                '';
                var __r1 = $$mode;
                $$mode = '';
                var __r2 = __$ctx.position;
                __$ctx.position = __$ctx.position - 1;
                var __r3 = __$ctx.ctx;
                __$ctx.ctx = {
                    elem: 'layout-unit',
                    content: [
                        __$ctx.ctx,
                        __$ctx.ctx['item-content']
                    ]
                };
                $540(__$ctx);
                $$mode = __r1;
                __$ctx.position = __r2;
                __$ctx.ctx = __r3;
                '';
            }
            __$ctx['__$anflg10'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $47(__$ctx) {
        var _$27ctx = __$ctx.ctx.content;
        _$27ctx.mix = (_$27ctx.mix || []).concat([{
                block: 'dropdown-menu',
                elem: 'switcher'
            }]);
        {
            '';
            var __r0 = __$ctx['__$anflg9'];
            __$ctx['__$anflg9'] = true;
            {
                '';
                var __r1 = __$ctx.ctx;
                __$ctx.ctx = _$27ctx;
                var __r2 = $$mode;
                $$mode = '';
                $540(__$ctx);
                __$ctx.ctx = __r1;
                $$mode = __r2;
                '';
            }
            __$ctx['__$anflg9'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $52(__$ctx) {
        var _$26ctx = __$ctx.ctx;
        {
            '';
            var __r0 = __$ctx['__$anflg8'];
            __$ctx['__$anflg8'] = true;
            {
                '';
                var __r1 = __$ctx.ctx;
                __$ctx.ctx = {
                    block: 'dropdown',
                    elem: 'popup',
                    js: __$ctx.ctx.js,
                    mix: (_$26ctx.mix || []).concat({
                        block: 'dropdown-menu',
                        elem: 'popup',
                        mods: __$ctx._.extend({ size: __$ctx.dropdownMenuSize }, _$26ctx.mods)
                    }),
                    attrs: _$26ctx.attrs,
                    content: {
                        block: 'dropdown-menu',
                        elem: 'menu',
                        title: _$26ctx.menuTitle,
                        type: _$26ctx.type,
                        mods: _$26ctx.menuMods,
                        mix: _$26ctx.menuMix,
                        content: _$26ctx.content
                    }
                };
                var __r2 = $$mode;
                $$mode = '';
                $540(__$ctx);
                __$ctx.ctx = __r1;
                $$mode = __r2;
                '';
            }
            __$ctx['__$anflg8'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $57(__$ctx) {
        var _$23ctx = __$ctx.ctx, _$23type = _$23ctx.type || 'vert', _$23menuMods = _$23ctx.mods || {};
        _$23menuMods.theme || (_$23menuMods.theme = 'ffffff');
        {
            '';
            var __r0 = __$ctx['__$anflg7'];
            __$ctx['__$anflg7'] = true;
            {
                '';
                var __r1 = __$ctx.ctx;
                __$ctx.ctx = (__$ctx._inDropdownMenu = true, {
                    block: 'b-menu-' + _$23type,
                    mix: (_$23ctx.mix || []).concat({
                        block: 'dropdown-menu',
                        elem: 'menu',
                        mods: _$23menuMods
                    }),
                    title: _$23ctx.title,
                    content: _$23ctx.content
                });
                var __r2 = $$mode;
                $$mode = '';
                $540(__$ctx);
                __$ctx.ctx = __r1;
                $$mode = __r2;
                '';
            }
            __$ctx['__$anflg7'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $60(__$ctx) {
        if (!(__$ctx['__$anflg6'] !== true) === false) {
            if (!!$$elem === false) {
                return $63(__$ctx);
            } else {
                return $289(__$ctx);
            }
        } else {
            return $289(__$ctx);
        }
    }
    function $63(__$ctx) {
        var _$22ctx = __$ctx.ctx, _$22mods = _$22ctx.mods || (_$22ctx.mods = {});
        _$22mods.theme || (_$22mods.theme = 'ffffff');
        __$ctx.dropdownMenuSize = _$22mods.size;
        {
            '';
            var __r0 = __$ctx['__$anflg6'];
            __$ctx['__$anflg6'] = true;
            {
                '';
                var __r1 = __$ctx.ctx;
                __$ctx.ctx = _$22ctx;
                var __r2 = $$mode;
                $$mode = '';
                $540(__$ctx);
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
    function $68(__$ctx) {
        if (!!__$ctx._popupDefaults === false) {
            if (!!$$elem === false) {
                return $71(__$ctx);
            } else {
                return $289(__$ctx);
            }
        } else {
            return $289(__$ctx);
        }
    }
    function $71(__$ctx) {
        var _$1yctx = __$ctx.ctx;
        _$1yctx.mods = $$mods = __$ctx.extend({
            theme: 'ffffff',
            autoclosable: 'yes',
            adaptive: 'yes',
            animate: 'yes'
        }, $$mods);
        if (_$1yctx.zIndex) {
            var _$1yattrs = _$1yctx.attrs || (_$1yctx.attrs = {});
            _$1yattrs.style = (_$1yattrs.style || '') + ';z-index:' + _$1yctx.zIndex + ';';
        } else {
            undefined;
        }
        {
            '';
            var __r0 = __$ctx._popupDefaults;
            __$ctx._popupDefaults = true;
            $68(__$ctx);
            __$ctx._popupDefaults = __r0;
            '';
        }
        undefined;
        return;
    }
    function $78(__$ctx) {
        var __t = $$block;
        if (__t === 'link') {
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
                                $540(__$ctx);
                                $$mode = __r0;
                                __$ctx.ctx = __r1;
                                '';
                            }
                            undefined;
                            return;
                        } else {
                            return $289(__$ctx);
                        }
                    } else {
                        return $289(__$ctx);
                    }
                } else {
                    return $289(__$ctx);
                }
            } else {
                return $289(__$ctx);
            }
        } else if (__t === 'button') {
            if ($$elem === 'text') {
                if (!($$mods && $$mods['only-icon'] === 'yes') === false) {
                    return [
                        '&#160;',
                        __$ctx.ctx.content
                    ];
                    return;
                } else {
                    return $99(__$ctx);
                }
            } else {
                return $99(__$ctx);
            }
        } else if (__t === 'b-menu-vert') {
            if (!!$$elem === false) {
                return [
                    __$ctx.ctx.title,
                    {
                        elem: 'layout',
                        content: __$ctx.ctx.content
                    }
                ];
                return;
            } else {
                return $289(__$ctx);
            }
        } else if (__t === 'popup') {
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
                return $289(__$ctx);
            }
        } else {
            return $289(__$ctx);
        }
    }
    function $99(__$ctx) {
        if (!!$$elem === false) {
            return {
                elem: 'text',
                tag: 'span',
                content: __$ctx.ctx.content
            };
            return;
        } else {
            return $289(__$ctx);
        }
    }
    function $116(__$ctx) {
        var __t = $$block;
        if (__t === 'link') {
            return $117(__$ctx);
        } else if (__t === 'image') {
            if (!!$$elem === false) {
                var _$2uctx = __$ctx.ctx, _$2ua = {
                        src: '//yastatic.net/lego/_/La6qi18Z8LwgnZdsAr1qy1GwCwo.gif',
                        alt: ''
                    }, _$2uprops = [
                        'alt',
                        'width',
                        'height'
                    ], _$2up;
                _$2uctx.url && (_$2ua.src = _$2uctx.url);
                while (_$2up = _$2uprops.shift()) {
                    _$2uctx[_$2up] && (_$2ua[_$2up] = _$2uctx[_$2up]);
                }
                return _$2ua;
                return;
            } else {
                return $171(__$ctx);
            }
        } else if (__t === 'button') {
            return $145(__$ctx);
        } else {
            return $171(__$ctx);
        }
    }
    function $117(__$ctx) {
        if (!($$mods && $$mods.pseudo === 'yes') === false) {
            if (!!$$elem === false) {
                if (!!__$ctx.ctx.url === false) {
                    var _$31disabled = (__$ctx.ctx.mods || {}).disabled === 'yes', _$31a = {
                            role: 'button',
                            tabindex: 0
                        };
                    if (_$31disabled) {
                        _$31a['aria-disabled'] = true;
                        delete _$31a.tabindex;
                    } else {
                        undefined;
                    }
                    return _$31a;
                    return;
                } else {
                    return $126(__$ctx);
                }
            } else {
                return $126(__$ctx);
            }
        } else {
            return $126(__$ctx);
        }
    }
    function $126(__$ctx) {
        if (!(__$ctx['__$anflg15'] !== true) === false) {
            if (!($$mods && $$mods.disabled === 'yes') === false) {
                if (!!$$elem === false) {
                    var __r0, __r1;
                    var _$2yattrs = ('', __r0 = __$ctx['__$anflg15'], __$ctx['__$anflg15'] = true, __r1 = $117(__$ctx), __$ctx['__$anflg15'] = __r0, '', __r1) || {};
                    _$2yattrs.tabindex = -1;
                    _$2yattrs['aria-disabled'] = true;
                    return _$2yattrs;
                    return;
                } else {
                    return $135(__$ctx);
                }
            } else {
                return $135(__$ctx);
            }
        } else {
            return $135(__$ctx);
        }
    }
    function $135(__$ctx) {
        if (!!$$elem === false) {
            return $137(__$ctx);
        } else {
            return $171(__$ctx);
        }
    }
    function $137(__$ctx) {
        var _$2xctx = __$ctx.ctx, _$2xattrs = {};
        [
            'title',
            'target',
            'id',
            'tabindex'
        ].forEach(function (param) {
            if (_$2xctx.hasOwnProperty(param)) {
                _$2xattrs[param] = String(_$2xctx[param]);
            } else {
                undefined;
            }
        });
        if (_$2xctx.url !== null && typeof _$2xctx.url !== 'undefined') {
            if (__$ctx.isSimple(_$2xctx.url)) {
                _$2xattrs.href = String(_$2xctx.url);
            } else {
                var _$2xbuf = [];
                {
                    '';
                    var __r0 = $$mode;
                    $$mode = '';
                    var __r1 = __$ctx._buf;
                    __$ctx._buf = _$2xbuf;
                    var __r2 = __$ctx.ctx;
                    __$ctx.ctx = _$2xctx.url;
                    $540(__$ctx);
                    $$mode = __r0;
                    __$ctx._buf = __r1;
                    __$ctx.ctx = __r2;
                    '';
                }
                undefined;
                _$2xattrs.href = _$2xbuf.join('');
            }
        } else {
            _$2xattrs.role = 'button';
            if (!_$2xattrs.tabindex) {
                _$2xattrs.tabindex = '0';
            } else {
                undefined;
            }
        }
        return _$2xattrs;
        return;
    }
    function $145(__$ctx) {
        if (!(__$ctx['__$anflg14'] !== true) === false) {
            if (!__$ctx.ctx.url === false) {
                if (!!$$elem === false) {
                    var __r0, __r1;
                    var _$2qctx = __$ctx.ctx, _$2qp = ('', __r0 = __$ctx['__$anflg14'], __$ctx['__$anflg14'] = true, __r1 = $145(__$ctx), __$ctx['__$anflg14'] = __r0, '', __r1), _$2qa = { href: _$2qctx.url };
                    _$2qctx.target && (_$2qa.target = _$2qctx.target);
                    $$mods.disabled && (_$2qa['aria-disabled'] = true);
                    return __$ctx._.extend(_$2qp, _$2qa);
                    return;
                } else {
                    return $154(__$ctx);
                }
            } else {
                return $154(__$ctx);
            }
        } else {
            return $154(__$ctx);
        }
    }
    function $154(__$ctx) {
        if (!(__$ctx['__$anflg13'] !== true) === false) {
            if (!!$$elem === false) {
                if (!!__$ctx.ctx.url === false) {
                    return $158(__$ctx);
                } else {
                    return $163(__$ctx);
                }
            } else {
                return $163(__$ctx);
            }
        } else {
            return $163(__$ctx);
        }
    }
    function $158(__$ctx) {
        var __r0, __r1;
        var _$2pctx = __$ctx.ctx, _$2pp = ('', __r0 = __$ctx['__$anflg13'], __$ctx['__$anflg13'] = true, __r1 = $145(__$ctx), __$ctx['__$anflg13'] = __r0, '', __r1), _$2pa = { type: _$2pctx.type || 'button' }, _$2pprops = [
                'name',
                'value'
            ], _$2pi;
        while (_$2pi = _$2pprops.shift()) {
            _$2pctx[_$2pi] && (_$2pa[_$2pi] = _$2pctx[_$2pi]);
        }
        $$mods.disabled && (_$2pa.disabled = 'disabled');
        return __$ctx._.extend(_$2pp, _$2pa);
        return;
    }
    function $163(__$ctx) {
        if (!true === false) {
            if (!!$$elem === false) {
                var _$2octx = __$ctx.ctx, _$2oa = { role: 'button' };
                _$2octx.tabindex && (_$2oa.tabindex = _$2octx.tabindex);
                return _$2oa;
                return;
            } else {
                return $171(__$ctx);
            }
        } else {
            return $171(__$ctx);
        }
    }
    function $171(__$ctx) {
        if ($$elem === 'item') {
            if (!($$block === 'b-menu-vert' || $$block === 'b-menu-horiz') === false) {
                if (!__$ctx._inDropdownMenu === false) {
                    return { role: 'menuitem' };
                    return;
                } else {
                    return $180(__$ctx);
                }
            } else {
                return $180(__$ctx);
            }
        } else {
            return $180(__$ctx);
        }
    }
    function $180(__$ctx) {
        if (!($$block === 'b-menu-vert' || $$block === 'b-menu-horiz') === false) {
            if (!__$ctx._inDropdownMenu === false) {
                if (!!$$elem === false) {
                    return { role: 'menu' };
                    return;
                } else {
                    return $289(__$ctx);
                }
            } else {
                return $289(__$ctx);
            }
        } else {
            return $289(__$ctx);
        }
    }
    function $191(__$ctx) {
        var __t = $$block;
        if (__t === 'link') {
            if (!($$mods && $$mods.pseudo === 'yes') === false) {
                if (!!$$elem === false) {
                    return true;
                    return;
                } else {
                    return $198(__$ctx);
                }
            } else {
                return $198(__$ctx);
            }
        } else if (__t === 'button') {
            if (!!$$elem === false) {
                return true;
                return;
            } else {
                return $289(__$ctx);
            }
        } else if (__t === 'b-menu-horiz') {
            if (!$$mods === false) {
                if (!!$$elem === false) {
                    return true;
                    return;
                } else {
                    return $289(__$ctx);
                }
            } else {
                return $289(__$ctx);
            }
        } else if (__t === 'dropdown-menu') {
            if (!!$$elem === false) {
                return true;
                return;
            } else {
                return $289(__$ctx);
            }
        } else {
            return $289(__$ctx);
        }
    }
    function $198(__$ctx) {
        if (!__$ctx.ctx.hasOwnProperty('tabindex') === false) {
            return { origTabindex: String(__$ctx.ctx.tabindex) };
            return;
        } else {
            return $289(__$ctx);
        }
    }
    function $223(__$ctx) {
        var __t = $$block;
        if (__t === 'link') {
            if ($$elem === 'inner') {
                return 'span';
                return;
            } else {
                if (!!$$elem === false) {
                    return __$ctx.ctx.url ? 'a' : 'span';
                    return;
                } else {
                    return $289(__$ctx);
                }
            }
        } else if (__t === 'image') {
            if (!!$$elem === false) {
                return 'img';
                return;
            } else {
                return $289(__$ctx);
            }
        } else if (__t === 'button') {
            if (!__$ctx.ctx.url === false) {
                if (!!$$elem === false) {
                    return 'a';
                    return;
                } else {
                    return $243(__$ctx);
                }
            } else {
                return $243(__$ctx);
            }
        } else if (__t === 'b-menu-horiz') {
            if ($$elem === 'item-selector') {
                if (!$$mods === false) {
                    return 'span';
                    return;
                } else {
                    return $289(__$ctx);
                }
            } else {
                return $289(__$ctx);
            }
        } else if (__t === 'b-menu-vert') {
            var __t = $$elem;
            if (__t === 'submenu') {
                return 'ul';
                return;
            } else if (__t === 'item-selector') {
                return 'span';
                return;
            } else if (__t === 'layout-unit') {
                return 'li';
                return;
            } else if (__t === 'layout') {
                return 'ul';
                return;
            } else if (__t === 'title') {
                return 'h3';
                return;
            } else {
                return $289(__$ctx);
            }
        } else if (__t === 'popup') {
            if ($$elem === 'tail') {
                return 'i';
                return;
            } else {
                return $289(__$ctx);
            }
        } else {
            return $289(__$ctx);
        }
    }
    function $243(__$ctx) {
        if (!!$$elem === false) {
            return 'button';
            return;
        } else {
            return $289(__$ctx);
        }
    }
    function $276(__$ctx) {
        if ($$elem === 'layout-unit') {
            var __t = $$block;
            if (__t === 'b-menu-horiz') {
                if (!$$mods === false) {
                    var _$2imix = [];
                    __$ctx.isFirst() && _$2imix.push({ elemMods: { position: 'first' } });
                    __$ctx.isLast() && _$2imix.push({ elemMods: { position: 'last' } });
                    return _$2imix;
                    return;
                } else {
                    return $289(__$ctx);
                }
            } else if (__t === 'b-menu-vert') {
                var _$2dmix = [];
                __$ctx.isFirst() && _$2dmix.push({ elemMods: { position: 'first' } });
                __$ctx.isLast() && _$2dmix.push({ elemMods: { position: 'last' } });
                return _$2dmix;
                return;
            } else {
                return $289(__$ctx);
            }
        } else {
            return $289(__$ctx);
        }
    }
    function $289(__$ctx) {
        if ($$block === 'popup') {
            if (!($$mode === '' && __$ctx._popupDefaults) === false) {
                delete __$ctx._popupDefaults;
                applyc(__$ctx);
                undefined;
                return;
            } else {
                return $295(__$ctx);
            }
        } else {
            return $295(__$ctx);
        }
    }
    function $295(__$ctx) {
        var __t = $$mode;
        if (__t === 'default') {
            var __t = $$block;
            if (__t === 'dropdown') {
                if ($$elem === 'popup') {
                    if (!(__$ctx['__$anflg5'] !== true) === false) {
                        return $300(__$ctx);
                    } else {
                        return $547(__$ctx);
                    }
                } else {
                    return $547(__$ctx);
                }
            } else if (__t === 'b-page') {
                if ($$elem === 'css') {
                    if (!__$ctx.ctx.hasOwnProperty('ie') === false) {
                        if (!!__$ctx.ctx._ieCommented === false) {
                            return $309(__$ctx);
                        } else {
                            return $314(__$ctx);
                        }
                    } else {
                        return $314(__$ctx);
                    }
                } else {
                    return $314(__$ctx);
                }
            } else if (__t === 'i-bem') {
                if ($$elem === 'i18n') {
                    return $324(__$ctx);
                } else {
                    return $547(__$ctx);
                }
            } else if (__t === 'i-jquery') {
                if ($$elem === 'core') {
                    if (!(__$ctx['__$anflg2'] !== true) === false) {
                        return $330(__$ctx);
                    } else {
                        return $547(__$ctx);
                    }
                } else {
                    return $547(__$ctx);
                }
            } else if (__t === 'i-global') {
                return $335(__$ctx);
            } else {
                return $547(__$ctx);
            }
        } else if (__t === 'tag') {
            var __t = $$block;
            if (__t === 'b-page') {
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
                        return $449(__$ctx);
                    }
                }
            } else if (__t === 'i-ua') {
                if (!!$$elem === false) {
                    return 'script';
                    return;
                } else {
                    return $449(__$ctx);
                }
            } else {
                return $449(__$ctx);
            }
        } else if (__t === 'bem') {
            var __t = $$block;
            if (__t === 'b-page') {
                var __t = $$elem;
                if (__t === 'js' || __t === 'css' || __t === 'favicon' || __t === 'meta' || __t === 'head' || __t === 'root') {
                    return false;
                    return;
                } else {
                    return $472(__$ctx);
                }
            } else if (__t === 'i-ua') {
                if (!!$$elem === false) {
                    return false;
                    return;
                } else {
                    return $472(__$ctx);
                }
            } else {
                return $472(__$ctx);
            }
        } else if (__t === 'xUACompatible') {
            if ($$block === 'b-page') {
                if (!!$$elem === false) {
                    return $476(__$ctx);
                } else {
                    return $547(__$ctx);
                }
            } else {
                return $547(__$ctx);
            }
        } else if (__t === 'attrs') {
            if ($$block === 'b-page') {
                var __t = $$elem;
                if (__t === 'js') {
                    if (!__$ctx.ctx.url === false) {
                        return { src: __$ctx.ctx.url };
                        return;
                    } else {
                        return $418(__$ctx);
                    }
                } else if (__t === 'css') {
                    if (!__$ctx.ctx.url === false) {
                        return {
                            rel: 'stylesheet',
                            href: __$ctx.ctx.url
                        };
                        return;
                    } else {
                        return $418(__$ctx);
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
                    return $418(__$ctx);
                }
            } else {
                return $418(__$ctx);
            }
        } else if (__t === 'cls') {
            if ($$block === 'b-page') {
                if ($$elem === 'root') {
                    return 'i-ua_js_no i-ua_css_standard';
                    return;
                } else {
                    return $507(__$ctx);
                }
            } else {
                return $507(__$ctx);
            }
        } else if (__t === 'doctype') {
            if ($$block === 'b-page') {
                if (!!$$elem === false) {
                    return $511(__$ctx);
                } else {
                    return $547(__$ctx);
                }
            } else {
                return $547(__$ctx);
            }
        } else if (__t === 'js-params') {
            if ($$block === 'b-page') {
                if (!!$$elem === false) {
                    return $519(__$ctx);
                } else {
                    return $547(__$ctx);
                }
            } else {
                return $547(__$ctx);
            }
        } else if (__t === 'public-params') {
            if ($$block === 'i-global') {
                return $525(__$ctx);
            } else {
                return $547(__$ctx);
            }
        } else if (__t === 'env') {
            if ($$block === 'i-global') {
                return $533(__$ctx);
            } else {
                return $547(__$ctx);
            }
        } else if (__t === 'js') {
            if ($$block === 'dropdown') {
                if (!!$$elem === false) {
                    return true;
                    return;
                } else {
                    return $396(__$ctx);
                }
            } else {
                return $396(__$ctx);
            }
        } else if (__t === '') {
            return $540(__$ctx);
        } else if (__t === 'mix') {
            var __t = $$block;
            if (__t === 'dropdown') {
                if (!!$$elem === false) {
                    return [{ mods: { action: 'closed' } }];
                    return;
                } else {
                    return $388(__$ctx);
                }
            } else if (__t === 'b-page') {
                if (!!__$ctx.ctx._iGlobal === false) {
                    if (!!$$elem === false) {
                        return $373(__$ctx);
                    } else {
                        return $376(__$ctx);
                    }
                } else {
                    return $376(__$ctx);
                }
            } else {
                return $388(__$ctx);
            }
        } else if (__t === 'jsAttr') {
            return undefined;
            return;
        } else if (__t === 'content') {
            var __t = $$block;
            if (__t === 'b-page') {
                if (!!$$elem === false) {
                    return {
                        elem: 'body',
                        content: __$ctx.ctx.content
                    };
                    return;
                } else {
                    return $499(__$ctx);
                }
            } else if (__t === 'i-ua') {
                return $487(__$ctx);
            } else {
                return $499(__$ctx);
            }
        } else {
            return $547(__$ctx);
        }
    }
    function $300(__$ctx) {
        var _$1wctx = __$ctx.ctx, _$1wmix = [{
                    block: 'dropdown',
                    elem: 'popup'
                }];
        _$1wctx.mix && (_$1wmix = _$1wmix.concat(_$1wctx.mix));
        {
            '';
            var __r0 = __$ctx['__$anflg5'];
            __$ctx['__$anflg5'] = true;
            {
                '';
                var __r1 = __$ctx.ctx;
                __$ctx.ctx = {
                    block: 'popup',
                    mix: _$1wmix,
                    mods: _$1wctx.mods,
                    attrs: _$1wctx.attrs,
                    js: _$1wctx.js,
                    content: [
                        { elem: 'tail' },
                        {
                            elem: 'content',
                            content: _$1wctx.content
                        }
                    ]
                };
                var __r2 = $$mode;
                $$mode = '';
                $540(__$ctx);
                __$ctx.ctx = __r1;
                $$mode = __r2;
                '';
            }
            __$ctx['__$anflg5'] = __r0;
            '';
        }
        return;
    }
    function $309(__$ctx) {
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
                $540(__$ctx);
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
                $540(__$ctx);
                $$mode = __r4;
                __r5._ieCommented = __r6;
                __$ctx.ctx = __r7;
                '';
            }
            undefined;
        }
        return;
    }
    function $314(__$ctx) {
        if (!(__$ctx['__$anflg3'] !== true) === false) {
            if (!!$$elem === false) {
                return $317(__$ctx);
            } else {
                return $547(__$ctx);
            }
        } else {
            return $547(__$ctx);
        }
    }
    function $317(__$ctx) {
        var __r0, __r1, __r2, __r3;
        var _$12ctx = __$ctx.ctx, _$12dtype = ('', __r0 = $$mode, $$mode = 'doctype', __r1 = $511(__$ctx), $$mode = __r0, '', __r1), _$12xUA = ('', __r2 = $$mode, $$mode = 'xUACompatible', __r3 = $476(__$ctx), $$mode = __r2, '', __r3), _$12buf = [
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
                $540(__$ctx);
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
    function $324(__$ctx) {
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
            _$zparams.content = (_$zcnt = [], '', __r0 = __$ctx._buf, __$ctx._buf = _$zcnt, __r1 = $$mode, $$mode = '', __r2 = __$ctx.ctx, __$ctx.ctx = _$zctx.content, __r3 = $540(__$ctx), __$ctx._buf = __r0, $$mode = __r1, __$ctx.ctx = __r2, '', __r3, _$zcnt.join(''));
        } else {
            undefined;
        }
        __$ctx._buf.push(BEM.I18N(_$zkeyset, _$zkey, _$zparams));
        return;
    }
    function $330(__$ctx) {
        var __r0, __r4, __r1, __r2, __r3;
        return '', __r0 = __$ctx['__$anflg2'], __$ctx['__$anflg2'] = true, __r4 = ('', __r1 = __$ctx.ctx, __$ctx.ctx = {
            block: 'b-page',
            elem: 'js',
            url: '//yastatic.net/jquery/1.8.3/jquery.min.js'
        }, __r2 = $$mode, $$mode = '', __r3 = $540(__$ctx), __$ctx.ctx = __r1, $$mode = __r2, '', __r3), __$ctx['__$anflg2'] = __r0, '', __r4;
        return;
    }
    function $335(__$ctx) {
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
                    return $359(__$ctx);
                } else {
                    return $547(__$ctx);
                }
            }
        }
    }
    function $359(__$ctx) {
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
    function $373(__$ctx) {
        var __r0, __r1, __r2, __r3, __r4;
        var _$1kmix = ('', __r0 = __$ctx.ctx, __r1 = __r0._iGlobal, __r0._iGlobal = true, __r2 = $276(__$ctx), __r0._iGlobal = __r1, '', __r2), _$1kjsParams = ('', __r3 = $$mode, $$mode = 'js-params', __r4 = $519(__$ctx), $$mode = __r3, '', __r4);
        _$1kmix ? _$1kmix.push(_$1kjsParams) : _$1kmix = [_$1kjsParams];
        return _$1kmix;
        return;
    }
    function $376(__$ctx) {
        if (!(__$ctx['__$anflg4'] !== true) === false) {
            if (!!$$elem === false) {
                var __r0, __r1;
                var _$1gmix = ('', __r0 = __$ctx['__$anflg4'], __$ctx['__$anflg4'] = true, __r1 = $276(__$ctx), __$ctx['__$anflg4'] = __r0, '', __r1) || [];
                _$1gmix.push({
                    block: 'i-ua',
                    mods: { interaction: 'yes' },
                    js: true
                });
                return _$1gmix;
                return;
            } else {
                return $382(__$ctx);
            }
        } else {
            return $382(__$ctx);
        }
    }
    function $382(__$ctx) {
        if (!!$$elem === false) {
            return [{ elem: 'body' }];
            return;
        } else {
            return $388(__$ctx);
        }
    }
    function $388(__$ctx) {
        return undefined;
        return;
    }
    function $396(__$ctx) {
        return undefined;
        return;
    }
    function $418(__$ctx) {
        return undefined;
        return;
    }
    function $449(__$ctx) {
        return undefined;
        return;
    }
    function $472(__$ctx) {
        return undefined;
        return;
    }
    function $476(__$ctx) {
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
    function $487(__$ctx) {
        if (!(__$ctx['__$anflg1'] !== true) === false) {
            if (!!$$elem === false) {
                var __r0, __r1;
                var _$xc = ('', __r0 = __$ctx['__$anflg1'], __$ctx['__$anflg1'] = true, __r1 = $487(__$ctx), __$ctx['__$anflg1'] = __r0, '', __r1);
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
                return $493(__$ctx);
            }
        } else {
            return $493(__$ctx);
        }
    }
    function $493(__$ctx) {
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
            return $499(__$ctx);
        }
    }
    function $499(__$ctx) {
        return __$ctx.ctx.content;
        return;
    }
    function $507(__$ctx) {
        return undefined;
        return;
    }
    function $511(__$ctx) {
        return __$ctx.ctx.doctype || '<!DOCTYPE html>';
        return;
    }
    function $519(__$ctx) {
        var __r0, __r1, __r2, __r3;
        var _$t_this = __$ctx['i-global'], _$tjs = {}, _$tblock = {
                block: 'i-global',
                js: _$tjs
            }, _$te;
        for (_$te in _$t_this) {
            if (_$t_this.hasOwnProperty(_$te) && ('', __r0 = $$mode, $$mode = 'public-params', __r1 = $$block, $$block = 'i-global', __r2 = $$elem, $$elem = _$te, __r3 = $525(__$ctx), $$mode = __r0, $$block = __r1, $$elem = __r2, '', __r3)) {
                _$tjs[_$te] = _$t_this[_$te];
            } else {
                undefined;
            }
        }
        return _$tblock;
        return;
    }
    function $525(__$ctx) {
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
            return $547(__$ctx);
        }
    }
    function $533(__$ctx) {
        if (!!$$elem === false) {
            return {};
            return;
        } else {
            return $547(__$ctx);
        }
    }
    function $540(__$ctx) {
        if (!!__$ctx['i-global'] === false) {
            return $542(__$ctx);
        } else {
            return $547(__$ctx);
        }
    }
    function $542(__$ctx) {
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
            _$fps[_$fe] = ('', __r0 = $$mode, $$mode = 'default', __r1 = $$block, $$block = 'i-global', __r2 = $$elem, $$elem = _$fe, __r3 = $335(__$ctx), $$mode = __r0, $$block = __r1, $$elem = __r2, '', __r3);
        }
        __$ctx['i-global'] = __$ctx._.extend(_$fps, ('', __r4 = $$mode, $$mode = 'env', __r5 = $$block, $$block = 'i-global', __r6 = $533(__$ctx), $$mode = __r4, $$block = __r5, '', __r6));
        applyc(__$ctx);
        undefined;
        return;
    }
    function $547(__$ctx) {
        if (!__$ctx.ctx === false) {
            if (!__$ctx.ctx.link === false) {
                if (!!__$ctx._.isSimple(__$ctx.ctx) === false) {
                    return $551(__$ctx);
                } else {
                    return $556(__$ctx);
                }
            } else {
                return $556(__$ctx);
            }
        } else {
            return $556(__$ctx);
        }
    }
    function $551(__$ctx) {
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
    function $556(__$ctx) {
        if (!cache === false) {
            if (!__$ctx.ctx === false) {
                if (!__$ctx.ctx.cache === false) {
                    return $560(__$ctx);
                } else {
                    return $565(__$ctx);
                }
            } else {
                return $565(__$ctx);
            }
        } else {
            return $565(__$ctx);
        }
    }
    function $560(__$ctx) {
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
    function $565(__$ctx) {
        var __t = $$mode;
        if (__t === 'default') {
            return $567(__$ctx);
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
                        return $576(__$ctx);
                    } else {
                        if (!true === false) {
                            return $579(__$ctx);
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
    function $567(__$ctx) {
        var __r13, __r0, __r4, __r5, __r6, __r7, __r8, __r9, __r10, __r11, __r12, __r1, __r14, __r15, __r16, __r17, __r20, __r21, __r22, __r23, __r24, __r25;
        var _$4BEM_ = __$ctx.BEM, _$4v = __$ctx.ctx, _$4buf = __$ctx._buf, _$4tag;
        _$4tag = ('', __r0 = $$mode, $$mode = 'tag', __r1 = $223(__$ctx), $$mode = __r0, '', __r1);
        typeof _$4tag != 'undefined' || (_$4tag = _$4v.tag);
        typeof _$4tag != 'undefined' || (_$4tag = 'div');
        if (_$4tag) {
            var _$4jsParams, _$4js;
            if ($$block && _$4v.js !== false) {
                _$4js = ('', __r4 = $$mode, $$mode = 'js', __r5 = $191(__$ctx), $$mode = __r4, '', __r5);
                _$4js = _$4js ? __$ctx._.extend(_$4v.js, _$4js === true ? {} : _$4js) : _$4v.js === true ? {} : _$4v.js;
                _$4js && ((_$4jsParams = {})[_$4BEM_.INTERNAL.buildClass($$block, _$4v.elem)] = _$4js);
            } else {
                undefined;
            }
            _$4buf.push('<', _$4tag);
            var _$4isBEM = ('', __r6 = $$mode, $$mode = 'bem', __r7 = $289(__$ctx), $$mode = __r6, '', __r7);
            typeof _$4isBEM != 'undefined' || (_$4isBEM = typeof _$4v.bem != 'undefined' ? _$4v.bem : _$4v.block || _$4v.elem);
            var _$4cls = ('', __r8 = $$mode, $$mode = 'cls', __r9 = $289(__$ctx), $$mode = __r8, '', __r9);
            _$4cls || (_$4cls = _$4v.cls);
            var _$4addJSInitClass = _$4v.block && _$4jsParams;
            if (_$4isBEM || _$4cls) {
                _$4buf.push(' class="');
                if (_$4isBEM) {
                    _$4BEM_.INTERNAL.buildClasses($$block, _$4v.elem, _$4v.elemMods || _$4v.mods, _$4buf);
                    var _$4mix = ('', __r10 = $$mode, $$mode = 'mix', __r11 = $276(__$ctx), $$mode = __r10, '', __r11);
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
                                var _$4nestedMix = ('', __r12 = $$block, $$block = _$4block, __r13 = $$elem, $$elem = _$4elem, __r14 = $$mods, $$mods = _$4mods, __r15 = $$elemMods, $$elemMods = _$4elemMods, __r16 = $$mode, $$mode = 'mix', __r17 = $276(__$ctx), $$block = __r12, $$elem = __r13, $$mods = __r14, $$elemMods = __r15, $$mode = __r16, '', __r17);
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
                var _$4jsAttr = ('', __r20 = $$mode, $$mode = 'jsAttr', __r21 = $289(__$ctx), $$mode = __r20, '', __r21);
                _$4buf.push(' ', _$4jsAttr || 'data-bem', '="', __$ctx._.attrEscape(JSON.stringify(_$4jsParams)), '"');
            } else {
                undefined;
            }
            var _$4attrs = ('', __r22 = $$mode, $$mode = 'attrs', __r23 = $116(__$ctx), $$mode = __r22, '', __r23);
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
            var _$4content = ('', __r24 = $$mode, $$mode = 'content', __r25 = $78(__$ctx), $$mode = __r24, '', __r25);
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
                    $289(__$ctx);
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
    function $576(__$ctx) {
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
                $289(__$ctx);
                __$ctx.ctx = __r0;
                '';
            }
            undefined;
        }
        _$1prevNotNewList || (__$ctx.position = _$1prevPos);
        return;
    }
    function $579(__$ctx) {
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
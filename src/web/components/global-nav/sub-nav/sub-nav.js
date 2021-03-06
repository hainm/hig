import './sub-nav.scss';

var Template = require('./sub-nav.html');
var Interface = require('interface.json');
var Core = require('_core.js');

var Tabs = require('./tabs/tabs.js');

/**
 * Creates an SubNav
 *
 * @class
 */

class SubNav extends Core {

    constructor(options){
        super(options);
        this._render(Template, options);
    }

    setModuleIndicatorName(name){
        this._findDOMEl('.hig__global-nav__sub-nav__module-indicator__name', this.el).textContent = name;
        this._findDOMEl('.hig__global-nav__sub-nav__module-indicator__name.hig__global-nav__sub-nav__spacer', this.el).textContent = name;
    }

    setModuleIndicatorIcon(icon){
        this._findDOMEl('.hig__global-nav__sub-nav__module-indicator__icon', this.el).innerHTML = this._getIconString(icon);
        this._findDOMEl('.hig__global-nav__sub-nav__module-indicator__icon.hig__global-nav__sub-nav__spacer', this.el).innerHTML = this._getIconString(icon);
    }

    addTabs(tabsInstance){
        if(tabsInstance instanceof Tabs) {
            this.mountPartialToComment('TABS', tabsInstance)
        }
    }

    onModuleIndicatorClick(fn){
        return this._attachListener("click", '.hig__global-nav__sub-nav__module-indicator', this.el, fn);
    }

}

SubNav._interface = Interface['components']['GlobalNav']['partials']['SubNav'];
SubNav._defaults = {
    "moduleIndicatorName": "Module Name",
    "moduleIndicatorIcon": "#"
};
SubNav._partials = {
    Tabs: Tabs
};

module.exports = SubNav;
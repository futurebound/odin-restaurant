/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
:root {
  --fuchsia-50: #fdf2f8;
  --fuchsia-100: #fae8ff;
  --fuchsia-200: #f5d0fe;
  --fuchsia-300: #f0abfc;
  --fuchsia-400: #e879f9;
  --fuchsia-500: #d946ef;
  --fuchsia-600: #c026d3;
  --fuchsia-700: #a21caf;
  --fuchsia-800: #86198f;
  --fuchsia-900: #701a75;
  --fuchsia-950: #4a044e;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;  
  flex-direction: column;
  scrollbar-width: none;
}

::-webkit-scrollbar {
  display: none;
}

#content img {
  width: 100%;
}

header {
  top: 0;
  position: sticky;
  
  width: 100%;
  display: flex;
  padding: 12px 16px;
  align-items: center;
  background-color: var(--fuchsia-300);
}

.logo {
  gap: 16px;
  display: flex;
  align-items: center;
}

.logo span {
  font-size: xx-large;
  font-weight: bold;
  color: var(--fuchsia-950);
}

header nav {
  margin-left: auto;
}

button {
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  margin-left: 16px;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: var(--fuchsia-950);
  transition: all 100ms ease-in-out;
}

button:hover {
  color: var(--fuchsia-200);
  background-color: var(--fuchsia-600);
  box-shadow: 0 0 5px var(--fuchsia-800);
  text-shadow: 0 0 5px var(--fuchsia-800);
}

#content {
  padding: 0 5%;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr;
  padding-bottom: 10%;
}

.home, .menu, .about {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  width: 100%;
  height: 100%;
}

.carousel {
  text-align: center;
}

.carousel img {
  width: 100%;
}

.info {
  text-align: center;
  padding: 24px 48px;
}

.info h1 {
  margin-bottom: 12px;
}

.menu-container {
  text-align: center;
}

/* .menu-img {
  width: 100%;
} */

.side-by-side {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 12px;
}

footer {
  position: fixed;
  bottom: 0;

  width: 100%;
  display: flex;
  padding: 12px 16px;
  align-items: center;
  background-color: var(--fuchsia-300);
}

.icons {
  display: flex;
  list-style: none;
  gap: 12px;
  align-items: center;
}

footer nav {
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 24px;
}

a {
  text-decoration: none;
  color: var(--fuchsia-950);
  font-weight: bold;
  transition: all 100ms ease-in-out;
}

a:hover {
  color: white;
  text-shadow: 0 0 5px var(--fuchsia-800);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AACA;EACE,qBAAqB;EACrB,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;AACxB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,qBAAqB;AACvB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,MAAM;EACN,gBAAgB;;EAEhB,WAAW;EACX,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,oCAAoC;AACtC;;AAEA;EACE,SAAS;EACT,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,eAAe;EACf,iBAAiB;EACjB,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;EAClB,oCAAoC;EACpC,iCAAiC;AACnC;;AAEA;EACE,yBAAyB;EACzB,oCAAoC;EACpC,sCAAsC;EACtC,uCAAuC;AACzC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,0BAA0B;EAC1B,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,0BAA0B;EAC1B,SAAS;EACT,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;GAEG;;AAEH;EACE,aAAa;EACb,8BAA8B;EAC9B,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,SAAS;;EAET,WAAW;EACX,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,oBAAoB;EACpB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,qBAAqB;EACrB,yBAAyB;EACzB,iBAAiB;EACjB,iCAAiC;AACnC;;AAEA;EACE,YAAY;EACZ,uCAAuC;AACzC","sourcesContent":["\n:root {\n  --fuchsia-50: #fdf2f8;\n  --fuchsia-100: #fae8ff;\n  --fuchsia-200: #f5d0fe;\n  --fuchsia-300: #f0abfc;\n  --fuchsia-400: #e879f9;\n  --fuchsia-500: #d946ef;\n  --fuchsia-600: #c026d3;\n  --fuchsia-700: #a21caf;\n  --fuchsia-800: #86198f;\n  --fuchsia-900: #701a75;\n  --fuchsia-950: #4a044e;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;  \n  flex-direction: column;\n  scrollbar-width: none;\n}\n\n::-webkit-scrollbar {\n  display: none;\n}\n\n#content img {\n  width: 100%;\n}\n\nheader {\n  top: 0;\n  position: sticky;\n  \n  width: 100%;\n  display: flex;\n  padding: 12px 16px;\n  align-items: center;\n  background-color: var(--fuchsia-300);\n}\n\n.logo {\n  gap: 16px;\n  display: flex;\n  align-items: center;\n}\n\n.logo span {\n  font-size: xx-large;\n  font-weight: bold;\n  color: var(--fuchsia-950);\n}\n\nheader nav {\n  margin-left: auto;\n}\n\nbutton {\n  border: none;\n  color: white;\n  cursor: pointer;\n  font-size: 1rem;\n  font-weight: bold;\n  margin-left: 16px;\n  padding: 8px 16px;\n  border-radius: 8px;\n  background-color: var(--fuchsia-950);\n  transition: all 100ms ease-in-out;\n}\n\nbutton:hover {\n  color: var(--fuchsia-200);\n  background-color: var(--fuchsia-600);\n  box-shadow: 0 0 5px var(--fuchsia-800);\n  text-shadow: 0 0 5px var(--fuchsia-800);\n}\n\n#content {\n  padding: 0 5%;\n  align-items: center;\n  display: grid;\n  grid-template-columns: 1fr;\n  padding-bottom: 10%;\n}\n\n.home, .menu, .about {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 24px;\n  width: 100%;\n  height: 100%;\n}\n\n.carousel {\n  text-align: center;\n}\n\n.carousel img {\n  width: 100%;\n}\n\n.info {\n  text-align: center;\n  padding: 24px 48px;\n}\n\n.info h1 {\n  margin-bottom: 12px;\n}\n\n.menu-container {\n  text-align: center;\n}\n\n/* .menu-img {\n  width: 100%;\n} */\n\n.side-by-side {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-top: 12px;\n}\n\nfooter {\n  position: fixed;\n  bottom: 0;\n\n  width: 100%;\n  display: flex;\n  padding: 12px 16px;\n  align-items: center;\n  background-color: var(--fuchsia-300);\n}\n\n.icons {\n  display: flex;\n  list-style: none;\n  gap: 12px;\n  align-items: center;\n}\n\nfooter nav {\n  width: 100%;\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  gap: 24px;\n}\n\na {\n  text-decoration: none;\n  color: var(--fuchsia-950);\n  font-weight: bold;\n  transition: all 100ms ease-in-out;\n}\n\na:hover {\n  color: white;\n  text-shadow: 0 0 5px var(--fuchsia-800);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/about.js":
/*!*************************!*\
  !*** ./src/js/about.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _img_restaurant_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/restaurant.jpg */ "./src/img/restaurant.jpg");







const loadAbout = () => {
  const aboutDiv = document.createElement("div");
  aboutDiv.classList.add("about");

  const aboutInfo = document.createElement("div");
  aboutInfo.classList.add("info");
  const aboutTitle = (0,_utils__WEBPACK_IMPORTED_MODULE_0__["default"])("h1", "OUR STORY");

  const restaurantImg = new Image();
  restaurantImg.src = _img_restaurant_jpg__WEBPACK_IMPORTED_MODULE_1__;
  restaurantImg.alt = "inside of restaurant";

  aboutInfo.appendChild(aboutTitle);
  aboutInfo.appendChild((0,_utils__WEBPACK_IMPORTED_MODULE_0__["default"])("p", _utils__WEBPACK_IMPORTED_MODULE_0__.LOREM_TEXT));
  aboutInfo.appendChild((0,_utils__WEBPACK_IMPORTED_MODULE_0__["default"])("p", _utils__WEBPACK_IMPORTED_MODULE_0__.LOREM_TEXT));
  aboutInfo.appendChild(restaurantImg);
  aboutInfo.appendChild((0,_utils__WEBPACK_IMPORTED_MODULE_0__["default"])("p", _utils__WEBPACK_IMPORTED_MODULE_0__.LOREM_TEXT));
  aboutInfo.appendChild((0,_utils__WEBPACK_IMPORTED_MODULE_0__["default"])("p", _utils__WEBPACK_IMPORTED_MODULE_0__.LOREM_TEXT));

  aboutDiv.appendChild(aboutInfo);
  return aboutDiv;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAbout);

/***/ }),

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_home_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/home.jpg */ "./src/img/home.jpg");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");




const loadHome = () => {
  const homeDiv = document.createElement("div");
  homeDiv.classList.add("home");
  
  const carouselDiv = loadCarousel();
  const hoursDiv = loadHours();
  const reservationsDiv = loadReservations();
  const dressCodeDiv = loadDressCode();
  
  homeDiv.appendChild(carouselDiv);
  homeDiv.appendChild(hoursDiv);
  homeDiv.appendChild(reservationsDiv);
  homeDiv.appendChild(dressCodeDiv);

  return homeDiv;
}

const loadCarousel = () => {
  const carouselDiv = document.createElement("div");
  carouselDiv.classList.add("carousel");
  const foodOne = new Image();
  foodOne.src = _img_home_jpg__WEBPACK_IMPORTED_MODULE_0__;
  foodOne.alt = "photo of food";

  const photoCredit = document.createElement("p");
  const photoCreditLink = document.createElement("a");
  photoCreditLink.href="https://unsplash.com/@ellaolsson";
  photoCreditLink.textContent = "Ella Olsson";
  photoCredit.textContent = "Photo from Unsplash by ";
  photoCredit.appendChild(photoCreditLink);

  carouselDiv.appendChild(foodOne);
  carouselDiv.appendChild(photoCredit);

  return carouselDiv;
}

const loadHours = () => {
  const hoursDiv = document.createElement("div");
  hoursDiv.classList.add("info");

  hoursDiv.appendChild((0,_utils__WEBPACK_IMPORTED_MODULE_1__["default"])("h1", "HOURS & LOCATION"));
  hoursDiv.appendChild((0,_utils__WEBPACK_IMPORTED_MODULE_1__["default"])("p", "133 N Moon Landing Way"));
  hoursDiv.appendChild((0,_utils__WEBPACK_IMPORTED_MODULE_1__["default"])("p", "Houston, TX 88003"));
  hoursDiv.appendChild((0,_utils__WEBPACK_IMPORTED_MODULE_1__["default"])("p", "(888) 888 - 8888"));
  hoursDiv.appendChild((0,_utils__WEBPACK_IMPORTED_MODULE_1__["default"])("h2", "Breakfast"));
  hoursDiv.appendChild((0,_utils__WEBPACK_IMPORTED_MODULE_1__["default"])("p", "Friday - Saturday"));
  hoursDiv.appendChild((0,_utils__WEBPACK_IMPORTED_MODULE_1__["default"])("p", "9AM - 1PM"));
  hoursDiv.appendChild((0,_utils__WEBPACK_IMPORTED_MODULE_1__["default"])("h2", "Lunch"));
  hoursDiv.appendChild((0,_utils__WEBPACK_IMPORTED_MODULE_1__["default"])("p", "Daily"));
  hoursDiv.appendChild((0,_utils__WEBPACK_IMPORTED_MODULE_1__["default"])("p", "1PM - 5PM"));
  hoursDiv.appendChild((0,_utils__WEBPACK_IMPORTED_MODULE_1__["default"])("h2", "Dinner"));
  hoursDiv.appendChild((0,_utils__WEBPACK_IMPORTED_MODULE_1__["default"])("p", "Daily"));
  hoursDiv.appendChild((0,_utils__WEBPACK_IMPORTED_MODULE_1__["default"])("p", "5PM - 9pm"));

  return hoursDiv;
}

const loadReservations = () => {
  const reservationsDiv = document.createElement("div");
  reservationsDiv.classList.add("info");

  reservationsDiv.appendChild((0,_utils__WEBPACK_IMPORTED_MODULE_1__["default"])("h1", "RESERVATIONS"));
  reservationsDiv.appendChild((0,_utils__WEBPACK_IMPORTED_MODULE_1__["default"])("p", _utils__WEBPACK_IMPORTED_MODULE_1__.LOREM_TEXT));
  reservationsDiv.appendChild((0,_utils__WEBPACK_IMPORTED_MODULE_1__["default"])("p", _utils__WEBPACK_IMPORTED_MODULE_1__.LOREM_TEXT));

  return reservationsDiv;
}

const loadDressCode = () => {
  const dressCodeDiv = document.createElement("div");
  dressCodeDiv.classList.add("info");

  dressCodeDiv.appendChild((0,_utils__WEBPACK_IMPORTED_MODULE_1__["default"])("h1", "DRESS CODE"));
  dressCodeDiv.appendChild((0,_utils__WEBPACK_IMPORTED_MODULE_1__["default"])("p", _utils__WEBPACK_IMPORTED_MODULE_1__.LOREM_TEXT));

  return dressCodeDiv;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _img_breakfast_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/breakfast.jpg */ "./src/img/breakfast.jpg");
/* harmony import */ var _img_breakfast_menu_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/breakfast-menu.png */ "./src/img/breakfast-menu.png");
/* harmony import */ var _img_lunch_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/lunch.jpg */ "./src/img/lunch.jpg");
/* harmony import */ var _img_lunch_menu_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/lunch-menu.png */ "./src/img/lunch-menu.png");
/* harmony import */ var _img_dinner_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/dinner.jpg */ "./src/img/dinner.jpg");
/* harmony import */ var _img_dinner_menu_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/dinner-menu.png */ "./src/img/dinner-menu.png");











const loadMenu = () => { 
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu");

  const breakfastDiv = loadBreakfast();
  const lunchDiv = loadLunch();
  const dinnerDiv = loadDinner();
  
  menuDiv.appendChild(breakfastDiv);
  menuDiv.appendChild(lunchDiv);
  menuDiv.appendChild(dinnerDiv);

  return menuDiv;
}

const loadBreakfast = () => {
  const breakfastDiv = document.createElement("div");
  breakfastDiv.classList.add("menu-container");
  const breakfastTitle = (0,_utils__WEBPACK_IMPORTED_MODULE_0__["default"])("h1", "Breakfast");

  const breakfastSideBySide = document.createElement("div");
  breakfastSideBySide.classList.add("side-by-side");

  const breakfastMenuImg = new Image();
  breakfastMenuImg.classList.add("menu-img");
  breakfastMenuImg.src = _img_breakfast_menu_png__WEBPACK_IMPORTED_MODULE_2__;
  breakfastMenuImg.alt = "breakfast menu image";

  const breakfastImg = new Image();
  breakfastImg.classList.add("menu-img");
  breakfastImg.src = _img_breakfast_jpg__WEBPACK_IMPORTED_MODULE_1__;
  breakfastImg.alt = "french toast breakfast";
  
  breakfastSideBySide.appendChild(breakfastMenuImg);
  breakfastSideBySide.appendChild(breakfastImg);

  breakfastDiv.appendChild(breakfastTitle);
  breakfastDiv.appendChild(breakfastSideBySide);

  return breakfastDiv;
}

const loadLunch = () => {
  const lunchDiv = document.createElement("div");
  lunchDiv.classList.add("menu-container");
  const lunchTitle = (0,_utils__WEBPACK_IMPORTED_MODULE_0__["default"])("h1", "Lunch");

  const lunchSideBySide = document.createElement("div");
  lunchSideBySide.classList.add("side-by-side");

  const lunchMenuImg = new Image();
  lunchMenuImg.classList.add("menu-img");
  lunchMenuImg.src = _img_lunch_menu_png__WEBPACK_IMPORTED_MODULE_4__;
  lunchMenuImg.alt = "lunch menu image";

  const lunchImg = new Image();
  lunchImg.classList.add("menu-img");
  lunchImg.src = _img_lunch_jpg__WEBPACK_IMPORTED_MODULE_3__;
  lunchImg.alt = "steak sides and salad lunch";
  
  lunchSideBySide.appendChild(lunchImg);
  lunchSideBySide.appendChild(lunchMenuImg);

  lunchDiv.appendChild(lunchTitle);
  lunchDiv.appendChild(lunchSideBySide);

  return lunchDiv;
}

const loadDinner = () => {
  const dinnerDiv = document.createElement("div");
  dinnerDiv.classList.add("menu-container");
  const dinnerTitle = (0,_utils__WEBPACK_IMPORTED_MODULE_0__["default"])("h1", "Dinner");

  const dinnerSideBySide = document.createElement("div");
  dinnerSideBySide.classList.add("side-by-side");

  const dinnerMenuImg = new Image();
  dinnerMenuImg.classList.add("menu-img");
  dinnerMenuImg.src = _img_dinner_menu_png__WEBPACK_IMPORTED_MODULE_6__;
  dinnerMenuImg.alt = "dinner menu image";

  const dinnerImg = new Image();
  dinnerImg.classList.add("menu-img");
  dinnerImg.src = _img_dinner_jpg__WEBPACK_IMPORTED_MODULE_5__;
  dinnerImg.alt = "pasta dinner";
  
  dinnerSideBySide.appendChild(dinnerMenuImg);
  dinnerSideBySide.appendChild(dinnerImg);

  dinnerDiv.appendChild(dinnerTitle);
  dinnerDiv.appendChild(dinnerSideBySide);

  return dinnerDiv;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LOREM_TEXT: () => (/* binding */ LOREM_TEXT),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const LOREM_TEXT = `Lorem ipsum dolor sit amet consectetur adipisicing
  elit. Minima excepturi voluptate rem sed, aut eligendi quas tenetur eius 
  pariatur labore maiores alias consequatur aliquam, possimus vitae, 
  provident dolorum illum. Nesciunt distinctio sint, officiis laudantium 
  aspernatur labore hic cupiditate voluptas quo aliquam optio quae, 
  necessitatibus corporis maiores, a officia? Fugiat deleniti veritatis 
  earum labore facere placeat perferendis. Distinctio, officiis, vel 
  dignissimos corrupti amet earum commodi praesentium quae, quasi aliquid 
  facilis eligendi odio ea. Ipsum incidunt nostrum ut nobis sint sequi 
  corrupti!`;

const generateTextElement = (type, text) => {
  const element = document.createElement(type);
  element.textContent = text;
  return element;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateTextElement);

/***/ }),

/***/ "./src/img/breakfast-menu.png":
/*!************************************!*\
  !*** ./src/img/breakfast-menu.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2a2042e3170001075c4d.png";

/***/ }),

/***/ "./src/img/breakfast.jpg":
/*!*******************************!*\
  !*** ./src/img/breakfast.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7d1407e4437e4a65ee57.jpg";

/***/ }),

/***/ "./src/img/dinner-menu.png":
/*!*********************************!*\
  !*** ./src/img/dinner-menu.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2a2042e3170001075c4d.png";

/***/ }),

/***/ "./src/img/dinner.jpg":
/*!****************************!*\
  !*** ./src/img/dinner.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "58367b26c1bbc79420bb.jpg";

/***/ }),

/***/ "./src/img/home.jpg":
/*!**************************!*\
  !*** ./src/img/home.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "08cdd5309f316ad2fc1b.jpg";

/***/ }),

/***/ "./src/img/lunch-menu.png":
/*!********************************!*\
  !*** ./src/img/lunch-menu.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2a2042e3170001075c4d.png";

/***/ }),

/***/ "./src/img/lunch.jpg":
/*!***************************!*\
  !*** ./src/img/lunch.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ad0f8b830637d13eb59d.jpg";

/***/ }),

/***/ "./src/img/restaurant.jpg":
/*!********************************!*\
  !*** ./src/img/restaurant.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "286d95f66a54208e078e.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _js_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/home */ "./src/js/home.js");
/* harmony import */ var _js_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/menu */ "./src/js/menu.js");
/* harmony import */ var _js_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/about */ "./src/js/about.js");







const contentDiv = document.querySelector("#content");
const homeButton = document.querySelector("#home-btn");
const menuButton = document.querySelector("#menu-btn");
const aboutButton = document.querySelector("#about-btn");

homeButton.addEventListener("click", () => {
  contentDiv.replaceChildren();
  const homeDiv = (0,_js_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
  contentDiv.appendChild(homeDiv);
});

menuButton.addEventListener("click", () => {
  contentDiv.replaceChildren();
  const menuDiv = (0,_js_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
  contentDiv.appendChild(menuDiv);
});

aboutButton.addEventListener("click", () => {
  contentDiv.replaceChildren();
  const aboutDiv = (0,_js_about__WEBPACK_IMPORTED_MODULE_3__["default"])();
  contentDiv.appendChild(aboutDiv);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sNEVBQTRFLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLG1DQUFtQywwQkFBMEIsMkJBQTJCLDJCQUEyQiwyQkFBMkIsMkJBQTJCLDJCQUEyQiwyQkFBMkIsMkJBQTJCLDJCQUEyQiwyQkFBMkIsMkJBQTJCLEdBQUcsT0FBTyxjQUFjLGVBQWUsMkJBQTJCLEdBQUcsVUFBVSxvQkFBb0IsMkJBQTJCLDBCQUEwQixHQUFHLHlCQUF5QixrQkFBa0IsR0FBRyxrQkFBa0IsZ0JBQWdCLEdBQUcsWUFBWSxXQUFXLHFCQUFxQixvQkFBb0Isa0JBQWtCLHVCQUF1Qix3QkFBd0IseUNBQXlDLEdBQUcsV0FBVyxjQUFjLGtCQUFrQix3QkFBd0IsR0FBRyxnQkFBZ0Isd0JBQXdCLHNCQUFzQiw4QkFBOEIsR0FBRyxnQkFBZ0Isc0JBQXNCLEdBQUcsWUFBWSxpQkFBaUIsaUJBQWlCLG9CQUFvQixvQkFBb0Isc0JBQXNCLHNCQUFzQixzQkFBc0IsdUJBQXVCLHlDQUF5QyxzQ0FBc0MsR0FBRyxrQkFBa0IsOEJBQThCLHlDQUF5QywyQ0FBMkMsNENBQTRDLEdBQUcsY0FBYyxrQkFBa0Isd0JBQXdCLGtCQUFrQiwrQkFBK0Isd0JBQXdCLEdBQUcsMEJBQTBCLGtCQUFrQiwrQkFBK0IsY0FBYyxnQkFBZ0IsaUJBQWlCLEdBQUcsZUFBZSx1QkFBdUIsR0FBRyxtQkFBbUIsZ0JBQWdCLEdBQUcsV0FBVyx1QkFBdUIsdUJBQXVCLEdBQUcsY0FBYyx3QkFBd0IsR0FBRyxxQkFBcUIsdUJBQXVCLEdBQUcsa0JBQWtCLGdCQUFnQixJQUFJLHFCQUFxQixrQkFBa0IsbUNBQW1DLGNBQWMscUJBQXFCLEdBQUcsWUFBWSxvQkFBb0IsY0FBYyxrQkFBa0Isa0JBQWtCLHVCQUF1Qix3QkFBd0IseUNBQXlDLEdBQUcsWUFBWSxrQkFBa0IscUJBQXFCLGNBQWMsd0JBQXdCLEdBQUcsZ0JBQWdCLGdCQUFnQixrQkFBa0IseUJBQXlCLHdCQUF3QixjQUFjLEdBQUcsT0FBTywwQkFBMEIsOEJBQThCLHNCQUFzQixzQ0FBc0MsR0FBRyxhQUFhLGlCQUFpQiw0Q0FBNEMsR0FBRyxtQkFBbUI7QUFDbDhIO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDN0sxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2JhOztBQUU2QjtBQUNMO0FBQ2lCOzs7QUFHdEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsa0RBQW1COztBQUV4QztBQUNBLHNCQUFzQixnREFBaUI7QUFDdkM7O0FBRUE7QUFDQSx3QkFBd0Isa0RBQW1CLE1BQU0sOENBQVU7QUFDM0Qsd0JBQXdCLGtEQUFtQixNQUFNLDhDQUFVO0FBQzNEO0FBQ0Esd0JBQXdCLGtEQUFtQixNQUFNLDhDQUFVO0FBQzNELHdCQUF3QixrREFBbUIsTUFBTSw4Q0FBVTs7QUFFM0Q7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QmtCO0FBQ0w7QUFDSzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwwQ0FBVztBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsa0RBQW1CO0FBQzFDLHVCQUF1QixrREFBbUI7QUFDMUMsdUJBQXVCLGtEQUFtQjtBQUMxQyx1QkFBdUIsa0RBQW1CO0FBQzFDLHVCQUF1QixrREFBbUI7QUFDMUMsdUJBQXVCLGtEQUFtQjtBQUMxQyx1QkFBdUIsa0RBQW1CO0FBQzFDLHVCQUF1QixrREFBbUI7QUFDMUMsdUJBQXVCLGtEQUFtQjtBQUMxQyx1QkFBdUIsa0RBQW1CO0FBQzFDLHVCQUF1QixrREFBbUI7QUFDMUMsdUJBQXVCLGtEQUFtQjtBQUMxQyx1QkFBdUIsa0RBQW1COztBQUUxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEIsa0RBQW1CO0FBQ2pELDhCQUE4QixrREFBbUIsTUFBTSw4Q0FBVTtBQUNqRSw4QkFBOEIsa0RBQW1CLE1BQU0sOENBQVU7O0FBRWpFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDJCQUEyQixrREFBbUI7QUFDOUMsMkJBQTJCLGtEQUFtQixNQUFNLDhDQUFVOztBQUU5RDtBQUNBOztBQUVBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25GVjs7QUFFNkI7QUFDVTtBQUNTO0FBQ2pCO0FBQ1M7QUFDUDtBQUNTOzs7QUFHdkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGtEQUFtQjs7QUFFNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLG9EQUFvQjtBQUM3Qzs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLCtDQUFnQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGtEQUFtQjs7QUFFeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLGdEQUFnQjtBQUNyQzs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLDJDQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isa0RBQW1COztBQUV6QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsaURBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsNENBQWE7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7OztBQzNHVjs7QUFFTjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLG1CQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQmxDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQWE7O0FBRVE7QUFDWTtBQUNBO0FBQ0U7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0Isb0RBQVE7QUFDMUI7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxrQkFBa0Isb0RBQVE7QUFDMUI7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxtQkFBbUIscURBQVM7QUFDNUI7QUFDQSxDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvanMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9qcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvanMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2pzL3V0aWxzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYFxuOnJvb3Qge1xuICAtLWZ1Y2hzaWEtNTA6ICNmZGYyZjg7XG4gIC0tZnVjaHNpYS0xMDA6ICNmYWU4ZmY7XG4gIC0tZnVjaHNpYS0yMDA6ICNmNWQwZmU7XG4gIC0tZnVjaHNpYS0zMDA6ICNmMGFiZmM7XG4gIC0tZnVjaHNpYS00MDA6ICNlODc5Zjk7XG4gIC0tZnVjaHNpYS01MDA6ICNkOTQ2ZWY7XG4gIC0tZnVjaHNpYS02MDA6ICNjMDI2ZDM7XG4gIC0tZnVjaHNpYS03MDA6ICNhMjFjYWY7XG4gIC0tZnVjaHNpYS04MDA6ICM4NjE5OGY7XG4gIC0tZnVjaHNpYS05MDA6ICM3MDFhNzU7XG4gIC0tZnVjaHNpYS05NTA6ICM0YTA0NGU7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4OyAgXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNjb250ZW50IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5oZWFkZXIge1xuICB0b3A6IDA7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mdWNoc2lhLTMwMCk7XG59XG5cbi5sb2dvIHtcbiAgZ2FwOiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubG9nbyBzcGFuIHtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1mdWNoc2lhLTk1MCk7XG59XG5cbmhlYWRlciBuYXYge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZ1Y2hzaWEtOTUwKTtcbiAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG5idXR0b246aG92ZXIge1xuICBjb2xvcjogdmFyKC0tZnVjaHNpYS0yMDApO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mdWNoc2lhLTYwMCk7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggdmFyKC0tZnVjaHNpYS04MDApO1xuICB0ZXh0LXNoYWRvdzogMCAwIDVweCB2YXIoLS1mdWNoc2lhLTgwMCk7XG59XG5cbiNjb250ZW50IHtcbiAgcGFkZGluZzogMCA1JTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIHBhZGRpbmctYm90dG9tOiAxMCU7XG59XG5cbi5ob21lLCAubWVudSwgLmFib3V0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdhcDogMjRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNhcm91c2VsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2Fyb3VzZWwgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbmZvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyNHB4IDQ4cHg7XG59XG5cbi5pbmZvIGgxIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLm1lbnUtY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiAubWVudS1pbWcge1xuICB3aWR0aDogMTAwJTtcbn0gKi9cblxuLnNpZGUtYnktc2lkZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG5mb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcblxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mdWNoc2lhLTMwMCk7XG59XG5cbi5pY29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGdhcDogMTJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuZm9vdGVyIG5hdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyNHB4O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogdmFyKC0tZnVjaHNpYS05NTApO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzogMCAwIDVweCB2YXIoLS1mdWNoc2lhLTgwMCk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsTUFBTTtFQUNOLGdCQUFnQjs7RUFFaEIsV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsb0NBQW9DO0VBQ3BDLHNDQUFzQztFQUN0Qyx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7O0dBRUc7O0FBRUg7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFNBQVM7RUFDVCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsU0FBUzs7RUFFVCxXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLFlBQVk7RUFDWix1Q0FBdUM7QUFDekNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuOnJvb3Qge1xcbiAgLS1mdWNoc2lhLTUwOiAjZmRmMmY4O1xcbiAgLS1mdWNoc2lhLTEwMDogI2ZhZThmZjtcXG4gIC0tZnVjaHNpYS0yMDA6ICNmNWQwZmU7XFxuICAtLWZ1Y2hzaWEtMzAwOiAjZjBhYmZjO1xcbiAgLS1mdWNoc2lhLTQwMDogI2U4NzlmOTtcXG4gIC0tZnVjaHNpYS01MDA6ICNkOTQ2ZWY7XFxuICAtLWZ1Y2hzaWEtNjAwOiAjYzAyNmQzO1xcbiAgLS1mdWNoc2lhLTcwMDogI2EyMWNhZjtcXG4gIC0tZnVjaHNpYS04MDA6ICM4NjE5OGY7XFxuICAtLWZ1Y2hzaWEtOTAwOiAjNzAxYTc1O1xcbiAgLS1mdWNoc2lhLTk1MDogIzRhMDQ0ZTtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4OyAgXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNjb250ZW50IGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHRvcDogMDtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICBcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDEycHggMTZweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mdWNoc2lhLTMwMCk7XFxufVxcblxcbi5sb2dvIHtcXG4gIGdhcDogMTZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubG9nbyBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB2YXIoLS1mdWNoc2lhLTk1MCk7XFxufVxcblxcbmhlYWRlciBuYXYge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mdWNoc2lhLTk1MCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tZnVjaHNpYS0yMDApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZnVjaHNpYS02MDApO1xcbiAgYm94LXNoYWRvdzogMCAwIDVweCB2YXIoLS1mdWNoc2lhLTgwMCk7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDVweCB2YXIoLS1mdWNoc2lhLTgwMCk7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIHBhZGRpbmc6IDAgNSU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgcGFkZGluZy1ib3R0b206IDEwJTtcXG59XFxuXFxuLmhvbWUsIC5tZW51LCAuYWJvdXQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ2FwOiAyNHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jYXJvdXNlbCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jYXJvdXNlbCBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5pbmZvIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDI0cHggNDhweDtcXG59XFxuXFxuLmluZm8gaDEge1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG59XFxuXFxuLm1lbnUtY29udGFpbmVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogLm1lbnUtaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn0gKi9cXG5cXG4uc2lkZS1ieS1zaWRlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBnYXA6IDEycHg7XFxuICBtYXJnaW4tdG9wOiAxMnB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcblxcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMTJweCAxNnB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZ1Y2hzaWEtMzAwKTtcXG59XFxuXFxuLmljb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZ2FwOiAxMnB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZm9vdGVyIG5hdiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDI0cHg7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWZ1Y2hzaWEtOTUwKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5hOmhvdmVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtc2hhZG93OiAwIDAgNXB4IHZhcigtLWZ1Y2hzaWEtODAwKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZ2VuZXJhdGVUZXh0RWxlbWVudCBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0IHsgTE9SRU1fVEVYVCB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgcmVzdGF1cmFudEltZ1BhdGggZnJvbSBcIi4uL2ltZy9yZXN0YXVyYW50LmpwZ1wiO1xuXG5cbmNvbnN0IGxvYWRBYm91dCA9ICgpID0+IHtcbiAgY29uc3QgYWJvdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhYm91dERpdi5jbGFzc0xpc3QuYWRkKFwiYWJvdXRcIik7XG5cbiAgY29uc3QgYWJvdXRJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWJvdXRJbmZvLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuICBjb25zdCBhYm91dFRpdGxlID0gZ2VuZXJhdGVUZXh0RWxlbWVudChcImgxXCIsIFwiT1VSIFNUT1JZXCIpO1xuXG4gIGNvbnN0IHJlc3RhdXJhbnRJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgcmVzdGF1cmFudEltZy5zcmMgPSByZXN0YXVyYW50SW1nUGF0aDtcbiAgcmVzdGF1cmFudEltZy5hbHQgPSBcImluc2lkZSBvZiByZXN0YXVyYW50XCI7XG5cbiAgYWJvdXRJbmZvLmFwcGVuZENoaWxkKGFib3V0VGl0bGUpO1xuICBhYm91dEluZm8uYXBwZW5kQ2hpbGQoZ2VuZXJhdGVUZXh0RWxlbWVudChcInBcIiwgTE9SRU1fVEVYVCkpO1xuICBhYm91dEluZm8uYXBwZW5kQ2hpbGQoZ2VuZXJhdGVUZXh0RWxlbWVudChcInBcIiwgTE9SRU1fVEVYVCkpO1xuICBhYm91dEluZm8uYXBwZW5kQ2hpbGQocmVzdGF1cmFudEltZyk7XG4gIGFib3V0SW5mby5hcHBlbmRDaGlsZChnZW5lcmF0ZVRleHRFbGVtZW50KFwicFwiLCBMT1JFTV9URVhUKSk7XG4gIGFib3V0SW5mby5hcHBlbmRDaGlsZChnZW5lcmF0ZVRleHRFbGVtZW50KFwicFwiLCBMT1JFTV9URVhUKSk7XG5cbiAgYWJvdXREaXYuYXBwZW5kQ2hpbGQoYWJvdXRJbmZvKTtcbiAgcmV0dXJuIGFib3V0RGl2O1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkQWJvdXQ7IiwiaW1wb3J0IGhvbWVJbWdQYXRoIGZyb20gXCIuLi9pbWcvaG9tZS5qcGdcIjtcbmltcG9ydCB7IExPUkVNX1RFWFQgfSBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0IGdlbmVyYXRlVGV4dEVsZW1lbnQgZnJvbSBcIi4vdXRpbHNcIjtcblxuY29uc3QgbG9hZEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob21lRGl2LmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xuICBcbiAgY29uc3QgY2Fyb3VzZWxEaXYgPSBsb2FkQ2Fyb3VzZWwoKTtcbiAgY29uc3QgaG91cnNEaXYgPSBsb2FkSG91cnMoKTtcbiAgY29uc3QgcmVzZXJ2YXRpb25zRGl2ID0gbG9hZFJlc2VydmF0aW9ucygpO1xuICBjb25zdCBkcmVzc0NvZGVEaXYgPSBsb2FkRHJlc3NDb2RlKCk7XG4gIFxuICBob21lRGl2LmFwcGVuZENoaWxkKGNhcm91c2VsRGl2KTtcbiAgaG9tZURpdi5hcHBlbmRDaGlsZChob3Vyc0Rpdik7XG4gIGhvbWVEaXYuYXBwZW5kQ2hpbGQocmVzZXJ2YXRpb25zRGl2KTtcbiAgaG9tZURpdi5hcHBlbmRDaGlsZChkcmVzc0NvZGVEaXYpO1xuXG4gIHJldHVybiBob21lRGl2O1xufVxuXG5jb25zdCBsb2FkQ2Fyb3VzZWwgPSAoKSA9PiB7XG4gIGNvbnN0IGNhcm91c2VsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2Fyb3VzZWxEaXYuY2xhc3NMaXN0LmFkZChcImNhcm91c2VsXCIpO1xuICBjb25zdCBmb29kT25lID0gbmV3IEltYWdlKCk7XG4gIGZvb2RPbmUuc3JjID0gaG9tZUltZ1BhdGg7XG4gIGZvb2RPbmUuYWx0ID0gXCJwaG90byBvZiBmb29kXCI7XG5cbiAgY29uc3QgcGhvdG9DcmVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgcGhvdG9DcmVkaXRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIHBob3RvQ3JlZGl0TGluay5ocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQGVsbGFvbHNzb25cIjtcbiAgcGhvdG9DcmVkaXRMaW5rLnRleHRDb250ZW50ID0gXCJFbGxhIE9sc3NvblwiO1xuICBwaG90b0NyZWRpdC50ZXh0Q29udGVudCA9IFwiUGhvdG8gZnJvbSBVbnNwbGFzaCBieSBcIjtcbiAgcGhvdG9DcmVkaXQuYXBwZW5kQ2hpbGQocGhvdG9DcmVkaXRMaW5rKTtcblxuICBjYXJvdXNlbERpdi5hcHBlbmRDaGlsZChmb29kT25lKTtcbiAgY2Fyb3VzZWxEaXYuYXBwZW5kQ2hpbGQocGhvdG9DcmVkaXQpO1xuXG4gIHJldHVybiBjYXJvdXNlbERpdjtcbn1cblxuY29uc3QgbG9hZEhvdXJzID0gKCkgPT4ge1xuICBjb25zdCBob3Vyc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvdXJzRGl2LmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuXG4gIGhvdXJzRGl2LmFwcGVuZENoaWxkKGdlbmVyYXRlVGV4dEVsZW1lbnQoXCJoMVwiLCBcIkhPVVJTICYgTE9DQVRJT05cIikpO1xuICBob3Vyc0Rpdi5hcHBlbmRDaGlsZChnZW5lcmF0ZVRleHRFbGVtZW50KFwicFwiLCBcIjEzMyBOIE1vb24gTGFuZGluZyBXYXlcIikpO1xuICBob3Vyc0Rpdi5hcHBlbmRDaGlsZChnZW5lcmF0ZVRleHRFbGVtZW50KFwicFwiLCBcIkhvdXN0b24sIFRYIDg4MDAzXCIpKTtcbiAgaG91cnNEaXYuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVUZXh0RWxlbWVudChcInBcIiwgXCIoODg4KSA4ODggLSA4ODg4XCIpKTtcbiAgaG91cnNEaXYuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVUZXh0RWxlbWVudChcImgyXCIsIFwiQnJlYWtmYXN0XCIpKTtcbiAgaG91cnNEaXYuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVUZXh0RWxlbWVudChcInBcIiwgXCJGcmlkYXkgLSBTYXR1cmRheVwiKSk7XG4gIGhvdXJzRGl2LmFwcGVuZENoaWxkKGdlbmVyYXRlVGV4dEVsZW1lbnQoXCJwXCIsIFwiOUFNIC0gMVBNXCIpKTtcbiAgaG91cnNEaXYuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVUZXh0RWxlbWVudChcImgyXCIsIFwiTHVuY2hcIikpO1xuICBob3Vyc0Rpdi5hcHBlbmRDaGlsZChnZW5lcmF0ZVRleHRFbGVtZW50KFwicFwiLCBcIkRhaWx5XCIpKTtcbiAgaG91cnNEaXYuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVUZXh0RWxlbWVudChcInBcIiwgXCIxUE0gLSA1UE1cIikpO1xuICBob3Vyc0Rpdi5hcHBlbmRDaGlsZChnZW5lcmF0ZVRleHRFbGVtZW50KFwiaDJcIiwgXCJEaW5uZXJcIikpO1xuICBob3Vyc0Rpdi5hcHBlbmRDaGlsZChnZW5lcmF0ZVRleHRFbGVtZW50KFwicFwiLCBcIkRhaWx5XCIpKTtcbiAgaG91cnNEaXYuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVUZXh0RWxlbWVudChcInBcIiwgXCI1UE0gLSA5cG1cIikpO1xuXG4gIHJldHVybiBob3Vyc0Rpdjtcbn1cblxuY29uc3QgbG9hZFJlc2VydmF0aW9ucyA9ICgpID0+IHtcbiAgY29uc3QgcmVzZXJ2YXRpb25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcmVzZXJ2YXRpb25zRGl2LmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuXG4gIHJlc2VydmF0aW9uc0Rpdi5hcHBlbmRDaGlsZChnZW5lcmF0ZVRleHRFbGVtZW50KFwiaDFcIiwgXCJSRVNFUlZBVElPTlNcIikpO1xuICByZXNlcnZhdGlvbnNEaXYuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVUZXh0RWxlbWVudChcInBcIiwgTE9SRU1fVEVYVCkpO1xuICByZXNlcnZhdGlvbnNEaXYuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVUZXh0RWxlbWVudChcInBcIiwgTE9SRU1fVEVYVCkpO1xuXG4gIHJldHVybiByZXNlcnZhdGlvbnNEaXY7XG59XG5cbmNvbnN0IGxvYWREcmVzc0NvZGUgPSAoKSA9PiB7XG4gIGNvbnN0IGRyZXNzQ29kZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRyZXNzQ29kZURpdi5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcblxuICBkcmVzc0NvZGVEaXYuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVUZXh0RWxlbWVudChcImgxXCIsIFwiRFJFU1MgQ09ERVwiKSk7XG4gIGRyZXNzQ29kZURpdi5hcHBlbmRDaGlsZChnZW5lcmF0ZVRleHRFbGVtZW50KFwicFwiLCBMT1JFTV9URVhUKSk7XG5cbiAgcmV0dXJuIGRyZXNzQ29kZURpdjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBnZW5lcmF0ZVRleHRFbGVtZW50IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgYnJlYWtmYXN0SW1nUGF0aCBmcm9tIFwiLi4vaW1nL2JyZWFrZmFzdC5qcGdcIjtcbmltcG9ydCBicmVha2Zhc3RNZW51SW1nUGF0aCBmcm9tIFwiLi4vaW1nL2JyZWFrZmFzdC1tZW51LnBuZ1wiO1xuaW1wb3J0IGx1bmNoSW1nUGF0aCBmcm9tIFwiLi4vaW1nL2x1bmNoLmpwZ1wiO1xuaW1wb3J0IGx1bmNoTWVudUltZ1BhdGggZnJvbSBcIi4uL2ltZy9sdW5jaC1tZW51LnBuZ1wiO1xuaW1wb3J0IGRpbm5lckltZ1BhdGggZnJvbSBcIi4uL2ltZy9kaW5uZXIuanBnXCI7XG5pbXBvcnQgZGlubmVyTWVudUltZ1BhdGggZnJvbSBcIi4uL2ltZy9kaW5uZXItbWVudS5wbmdcIjtcblxuXG5jb25zdCBsb2FkTWVudSA9ICgpID0+IHsgXG4gIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51RGl2LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuXG4gIGNvbnN0IGJyZWFrZmFzdERpdiA9IGxvYWRCcmVha2Zhc3QoKTtcbiAgY29uc3QgbHVuY2hEaXYgPSBsb2FkTHVuY2goKTtcbiAgY29uc3QgZGlubmVyRGl2ID0gbG9hZERpbm5lcigpO1xuICBcbiAgbWVudURpdi5hcHBlbmRDaGlsZChicmVha2Zhc3REaXYpO1xuICBtZW51RGl2LmFwcGVuZENoaWxkKGx1bmNoRGl2KTtcbiAgbWVudURpdi5hcHBlbmRDaGlsZChkaW5uZXJEaXYpO1xuXG4gIHJldHVybiBtZW51RGl2O1xufVxuXG5jb25zdCBsb2FkQnJlYWtmYXN0ID0gKCkgPT4ge1xuICBjb25zdCBicmVha2Zhc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBicmVha2Zhc3REaXYuY2xhc3NMaXN0LmFkZChcIm1lbnUtY29udGFpbmVyXCIpO1xuICBjb25zdCBicmVha2Zhc3RUaXRsZSA9IGdlbmVyYXRlVGV4dEVsZW1lbnQoXCJoMVwiLCBcIkJyZWFrZmFzdFwiKTtcblxuICBjb25zdCBicmVha2Zhc3RTaWRlQnlTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnJlYWtmYXN0U2lkZUJ5U2lkZS5jbGFzc0xpc3QuYWRkKFwic2lkZS1ieS1zaWRlXCIpO1xuXG4gIGNvbnN0IGJyZWFrZmFzdE1lbnVJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgYnJlYWtmYXN0TWVudUltZy5jbGFzc0xpc3QuYWRkKFwibWVudS1pbWdcIik7XG4gIGJyZWFrZmFzdE1lbnVJbWcuc3JjID0gYnJlYWtmYXN0TWVudUltZ1BhdGg7XG4gIGJyZWFrZmFzdE1lbnVJbWcuYWx0ID0gXCJicmVha2Zhc3QgbWVudSBpbWFnZVwiO1xuXG4gIGNvbnN0IGJyZWFrZmFzdEltZyA9IG5ldyBJbWFnZSgpO1xuICBicmVha2Zhc3RJbWcuY2xhc3NMaXN0LmFkZChcIm1lbnUtaW1nXCIpO1xuICBicmVha2Zhc3RJbWcuc3JjID0gYnJlYWtmYXN0SW1nUGF0aDtcbiAgYnJlYWtmYXN0SW1nLmFsdCA9IFwiZnJlbmNoIHRvYXN0IGJyZWFrZmFzdFwiO1xuICBcbiAgYnJlYWtmYXN0U2lkZUJ5U2lkZS5hcHBlbmRDaGlsZChicmVha2Zhc3RNZW51SW1nKTtcbiAgYnJlYWtmYXN0U2lkZUJ5U2lkZS5hcHBlbmRDaGlsZChicmVha2Zhc3RJbWcpO1xuXG4gIGJyZWFrZmFzdERpdi5hcHBlbmRDaGlsZChicmVha2Zhc3RUaXRsZSk7XG4gIGJyZWFrZmFzdERpdi5hcHBlbmRDaGlsZChicmVha2Zhc3RTaWRlQnlTaWRlKTtcblxuICByZXR1cm4gYnJlYWtmYXN0RGl2O1xufVxuXG5jb25zdCBsb2FkTHVuY2ggPSAoKSA9PiB7XG4gIGNvbnN0IGx1bmNoRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbHVuY2hEaXYuY2xhc3NMaXN0LmFkZChcIm1lbnUtY29udGFpbmVyXCIpO1xuICBjb25zdCBsdW5jaFRpdGxlID0gZ2VuZXJhdGVUZXh0RWxlbWVudChcImgxXCIsIFwiTHVuY2hcIik7XG5cbiAgY29uc3QgbHVuY2hTaWRlQnlTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbHVuY2hTaWRlQnlTaWRlLmNsYXNzTGlzdC5hZGQoXCJzaWRlLWJ5LXNpZGVcIik7XG5cbiAgY29uc3QgbHVuY2hNZW51SW1nID0gbmV3IEltYWdlKCk7XG4gIGx1bmNoTWVudUltZy5jbGFzc0xpc3QuYWRkKFwibWVudS1pbWdcIik7XG4gIGx1bmNoTWVudUltZy5zcmMgPSBsdW5jaE1lbnVJbWdQYXRoO1xuICBsdW5jaE1lbnVJbWcuYWx0ID0gXCJsdW5jaCBtZW51IGltYWdlXCI7XG5cbiAgY29uc3QgbHVuY2hJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgbHVuY2hJbWcuY2xhc3NMaXN0LmFkZChcIm1lbnUtaW1nXCIpO1xuICBsdW5jaEltZy5zcmMgPSBsdW5jaEltZ1BhdGg7XG4gIGx1bmNoSW1nLmFsdCA9IFwic3RlYWsgc2lkZXMgYW5kIHNhbGFkIGx1bmNoXCI7XG4gIFxuICBsdW5jaFNpZGVCeVNpZGUuYXBwZW5kQ2hpbGQobHVuY2hJbWcpO1xuICBsdW5jaFNpZGVCeVNpZGUuYXBwZW5kQ2hpbGQobHVuY2hNZW51SW1nKTtcblxuICBsdW5jaERpdi5hcHBlbmRDaGlsZChsdW5jaFRpdGxlKTtcbiAgbHVuY2hEaXYuYXBwZW5kQ2hpbGQobHVuY2hTaWRlQnlTaWRlKTtcblxuICByZXR1cm4gbHVuY2hEaXY7XG59XG5cbmNvbnN0IGxvYWREaW5uZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGRpbm5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpbm5lckRpdi5jbGFzc0xpc3QuYWRkKFwibWVudS1jb250YWluZXJcIik7XG4gIGNvbnN0IGRpbm5lclRpdGxlID0gZ2VuZXJhdGVUZXh0RWxlbWVudChcImgxXCIsIFwiRGlubmVyXCIpO1xuXG4gIGNvbnN0IGRpbm5lclNpZGVCeVNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaW5uZXJTaWRlQnlTaWRlLmNsYXNzTGlzdC5hZGQoXCJzaWRlLWJ5LXNpZGVcIik7XG5cbiAgY29uc3QgZGlubmVyTWVudUltZyA9IG5ldyBJbWFnZSgpO1xuICBkaW5uZXJNZW51SW1nLmNsYXNzTGlzdC5hZGQoXCJtZW51LWltZ1wiKTtcbiAgZGlubmVyTWVudUltZy5zcmMgPSBkaW5uZXJNZW51SW1nUGF0aDtcbiAgZGlubmVyTWVudUltZy5hbHQgPSBcImRpbm5lciBtZW51IGltYWdlXCI7XG5cbiAgY29uc3QgZGlubmVySW1nID0gbmV3IEltYWdlKCk7XG4gIGRpbm5lckltZy5jbGFzc0xpc3QuYWRkKFwibWVudS1pbWdcIik7XG4gIGRpbm5lckltZy5zcmMgPSBkaW5uZXJJbWdQYXRoO1xuICBkaW5uZXJJbWcuYWx0ID0gXCJwYXN0YSBkaW5uZXJcIjtcbiAgXG4gIGRpbm5lclNpZGVCeVNpZGUuYXBwZW5kQ2hpbGQoZGlubmVyTWVudUltZyk7XG4gIGRpbm5lclNpZGVCeVNpZGUuYXBwZW5kQ2hpbGQoZGlubmVySW1nKTtcblxuICBkaW5uZXJEaXYuYXBwZW5kQ2hpbGQoZGlubmVyVGl0bGUpO1xuICBkaW5uZXJEaXYuYXBwZW5kQ2hpbGQoZGlubmVyU2lkZUJ5U2lkZSk7XG5cbiAgcmV0dXJuIGRpbm5lckRpdjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBMT1JFTV9URVhUID0gYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nXG4gIGVsaXQuIE1pbmltYSBleGNlcHR1cmkgdm9sdXB0YXRlIHJlbSBzZWQsIGF1dCBlbGlnZW5kaSBxdWFzIHRlbmV0dXIgZWl1cyBcbiAgcGFyaWF0dXIgbGFib3JlIG1haW9yZXMgYWxpYXMgY29uc2VxdWF0dXIgYWxpcXVhbSwgcG9zc2ltdXMgdml0YWUsIFxuICBwcm92aWRlbnQgZG9sb3J1bSBpbGx1bS4gTmVzY2l1bnQgZGlzdGluY3RpbyBzaW50LCBvZmZpY2lpcyBsYXVkYW50aXVtIFxuICBhc3Blcm5hdHVyIGxhYm9yZSBoaWMgY3VwaWRpdGF0ZSB2b2x1cHRhcyBxdW8gYWxpcXVhbSBvcHRpbyBxdWFlLCBcbiAgbmVjZXNzaXRhdGlidXMgY29ycG9yaXMgbWFpb3JlcywgYSBvZmZpY2lhPyBGdWdpYXQgZGVsZW5pdGkgdmVyaXRhdGlzIFxuICBlYXJ1bSBsYWJvcmUgZmFjZXJlIHBsYWNlYXQgcGVyZmVyZW5kaXMuIERpc3RpbmN0aW8sIG9mZmljaWlzLCB2ZWwgXG4gIGRpZ25pc3NpbW9zIGNvcnJ1cHRpIGFtZXQgZWFydW0gY29tbW9kaSBwcmFlc2VudGl1bSBxdWFlLCBxdWFzaSBhbGlxdWlkIFxuICBmYWNpbGlzIGVsaWdlbmRpIG9kaW8gZWEuIElwc3VtIGluY2lkdW50IG5vc3RydW0gdXQgbm9iaXMgc2ludCBzZXF1aSBcbiAgY29ycnVwdGkhYDtcblxuY29uc3QgZ2VuZXJhdGVUZXh0RWxlbWVudCA9ICh0eXBlLCB0ZXh0KSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlVGV4dEVsZW1lbnQ7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGxvYWRIb21lIGZyb20gXCIuL2pzL2hvbWVcIjtcbmltcG9ydCBsb2FkTWVudSBmcm9tIFwiLi9qcy9tZW51XCI7XG5pbXBvcnQgbG9hZEFib3V0IGZyb20gXCIuL2pzL2Fib3V0XCI7XG5cbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5jb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob21lLWJ0blwiKTtcbmNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtYnRuXCIpO1xuY29uc3QgYWJvdXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Fib3V0LWJ0blwiKTtcblxuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb250ZW50RGl2LnJlcGxhY2VDaGlsZHJlbigpO1xuICBjb25zdCBob21lRGl2ID0gbG9hZEhvbWUoKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChob21lRGl2KTtcbn0pO1xuXG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnRlbnREaXYucmVwbGFjZUNoaWxkcmVuKCk7XG4gIGNvbnN0IG1lbnVEaXYgPSBsb2FkTWVudSgpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1lbnVEaXYpO1xufSk7XG5cbmFib3V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnRlbnREaXYucmVwbGFjZUNoaWxkcmVuKCk7XG4gIGNvbnN0IGFib3V0RGl2ID0gbG9hZEFib3V0KCk7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoYWJvdXREaXYpO1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["chord-symbol"] = factory();
	else
		root["chord-symbol"] = factory();
})(typeof self !== 'undefined' ? self : this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 9515:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(8761),
    root = __webpack_require__(7772);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ 9612:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hashClear = __webpack_require__(2118),
    hashDelete = __webpack_require__(6909),
    hashGet = __webpack_require__(8138),
    hashHas = __webpack_require__(4174),
    hashSet = __webpack_require__(7942);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ 235:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var listCacheClear = __webpack_require__(3945),
    listCacheDelete = __webpack_require__(1846),
    listCacheGet = __webpack_require__(8028),
    listCacheHas = __webpack_require__(2344),
    listCacheSet = __webpack_require__(4769);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ 326:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(8761),
    root = __webpack_require__(7772);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ 6738:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var mapCacheClear = __webpack_require__(2411),
    mapCacheDelete = __webpack_require__(6417),
    mapCacheGet = __webpack_require__(6928),
    mapCacheHas = __webpack_require__(9493),
    mapCacheSet = __webpack_require__(4150);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ 2760:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(8761),
    root = __webpack_require__(7772);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ 2143:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(8761),
    root = __webpack_require__(7772);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ 5386:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MapCache = __webpack_require__(6738),
    setCacheAdd = __webpack_require__(2842),
    setCacheHas = __webpack_require__(2482);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ 6571:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(235),
    stackClear = __webpack_require__(5243),
    stackDelete = __webpack_require__(2858),
    stackGet = __webpack_require__(4417),
    stackHas = __webpack_require__(8605),
    stackSet = __webpack_require__(1418);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ 857:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(7772);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ 9162:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(7772);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ 3215:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(8761),
    root = __webpack_require__(7772);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ 9432:
/***/ ((module) => {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ 2517:
/***/ ((module) => {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ 7552:
/***/ ((module) => {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ 8333:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIndexOf = __webpack_require__(7832);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),

/***/ 4893:
/***/ ((module) => {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),

/***/ 1634:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTimes = __webpack_require__(6473),
    isArguments = __webpack_require__(9631),
    isArray = __webpack_require__(6152),
    isBuffer = __webpack_require__(3226),
    isIndex = __webpack_require__(9045),
    isTypedArray = __webpack_require__(7598);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ 343:
/***/ ((module) => {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ 5067:
/***/ ((module) => {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ 7064:
/***/ ((module) => {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ 91:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(3940),
    eq = __webpack_require__(1225);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ 2218:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(1225);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ 7993:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(752),
    keys = __webpack_require__(249);

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),

/***/ 5906:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(752),
    keysIn = __webpack_require__(8582);

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),

/***/ 3940:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(3043);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ 8874:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(6571),
    arrayEach = __webpack_require__(2517),
    assignValue = __webpack_require__(91),
    baseAssign = __webpack_require__(7993),
    baseAssignIn = __webpack_require__(5906),
    cloneBuffer = __webpack_require__(2175),
    copyArray = __webpack_require__(1522),
    copySymbols = __webpack_require__(7680),
    copySymbolsIn = __webpack_require__(9987),
    getAllKeys = __webpack_require__(3483),
    getAllKeysIn = __webpack_require__(6939),
    getTag = __webpack_require__(940),
    initCloneArray = __webpack_require__(9917),
    initCloneByTag = __webpack_require__(8222),
    initCloneObject = __webpack_require__(8725),
    isArray = __webpack_require__(6152),
    isBuffer = __webpack_require__(3226),
    isMap = __webpack_require__(4714),
    isObject = __webpack_require__(9259),
    isSet = __webpack_require__(3679),
    keys = __webpack_require__(249),
    keysIn = __webpack_require__(8582);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),

/***/ 9413:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(9259);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ 5246:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(5386),
    arrayIncludes = __webpack_require__(8333),
    arrayIncludesWith = __webpack_require__(4893),
    arrayMap = __webpack_require__(343),
    baseUnary = __webpack_require__(7826),
    cacheHas = __webpack_require__(9950);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee == null ? value : iteratee(value);

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

module.exports = baseDifference;


/***/ }),

/***/ 1359:
/***/ ((module) => {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ 2034:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(5067),
    isFlattenable = __webpack_require__(5882);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ 5308:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createBaseFor = __webpack_require__(5463);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ 6548:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFor = __webpack_require__(5308),
    keys = __webpack_require__(249);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ 3324:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(7297),
    toKey = __webpack_require__(3812);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ 1897:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(5067),
    isArray = __webpack_require__(6152);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ 3366:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(857),
    getRawTag = __webpack_require__(2107),
    objectToString = __webpack_require__(7157);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ 187:
/***/ ((module) => {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ 7832:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFindIndex = __webpack_require__(1359),
    baseIsNaN = __webpack_require__(2195),
    strictIndexOf = __webpack_require__(6024);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),

/***/ 8656:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseForOwn = __webpack_require__(6548);

/**
 * The base implementation of `_.invert` and `_.invertBy` which inverts
 * `object` with values transformed by `iteratee` and set by `setter`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform values.
 * @param {Object} accumulator The initial inverted object.
 * @returns {Function} Returns `accumulator`.
 */
function baseInverter(object, setter, iteratee, accumulator) {
  baseForOwn(object, function(value, key, object) {
    setter(accumulator, iteratee(value), key, object);
  });
  return accumulator;
}

module.exports = baseInverter;


/***/ }),

/***/ 5183:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(3366),
    isObjectLike = __webpack_require__(5125);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ 8746:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqualDeep = __webpack_require__(1952),
    isObjectLike = __webpack_require__(5125);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ 1952:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(6571),
    equalArrays = __webpack_require__(4871),
    equalByTag = __webpack_require__(1491),
    equalObjects = __webpack_require__(7416),
    getTag = __webpack_require__(940),
    isArray = __webpack_require__(6152),
    isBuffer = __webpack_require__(3226),
    isTypedArray = __webpack_require__(7598);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ 4511:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getTag = __webpack_require__(940),
    isObjectLike = __webpack_require__(5125);

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),

/***/ 7036:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(6571),
    baseIsEqual = __webpack_require__(8746);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),

/***/ 2195:
/***/ ((module) => {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),

/***/ 6840:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(1049),
    isMasked = __webpack_require__(7394),
    isObject = __webpack_require__(9259),
    toSource = __webpack_require__(7035);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ 8436:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getTag = __webpack_require__(940),
    isObjectLike = __webpack_require__(5125);

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),

/***/ 5522:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(3366),
    isLength = __webpack_require__(1158),
    isObjectLike = __webpack_require__(5125);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ 8286:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseMatches = __webpack_require__(6423),
    baseMatchesProperty = __webpack_require__(4716),
    identity = __webpack_require__(3059),
    isArray = __webpack_require__(6152),
    property = __webpack_require__(5798);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),

/***/ 6411:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isPrototype = __webpack_require__(6001),
    nativeKeys = __webpack_require__(4248);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ 8390:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(9259),
    isPrototype = __webpack_require__(6001),
    nativeKeysIn = __webpack_require__(2966);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ 6423:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsMatch = __webpack_require__(7036),
    getMatchData = __webpack_require__(5225),
    matchesStrictComparable = __webpack_require__(3477);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),

/***/ 4716:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqual = __webpack_require__(8746),
    get = __webpack_require__(2579),
    hasIn = __webpack_require__(5041),
    isKey = __webpack_require__(1401),
    isStrictComparable = __webpack_require__(8792),
    matchesStrictComparable = __webpack_require__(3477),
    toKey = __webpack_require__(3812);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),

/***/ 256:
/***/ ((module) => {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ 2952:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(3324);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),

/***/ 6060:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var identity = __webpack_require__(3059),
    overRest = __webpack_require__(3114),
    setToString = __webpack_require__(5251);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ 6532:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var constant = __webpack_require__(6874),
    defineProperty = __webpack_require__(3043),
    identity = __webpack_require__(3059);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ 9872:
/***/ ((module) => {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),

/***/ 6473:
/***/ ((module) => {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ 1054:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(857),
    arrayMap = __webpack_require__(343),
    isArray = __webpack_require__(6152),
    isSymbol = __webpack_require__(4795);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ 1704:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var trimmedEndIndex = __webpack_require__(2153);

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ 7826:
/***/ ((module) => {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ 7326:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(5386),
    arrayIncludes = __webpack_require__(8333),
    arrayIncludesWith = __webpack_require__(4893),
    cacheHas = __webpack_require__(9950),
    createSet = __webpack_require__(8803),
    setToArray = __webpack_require__(4207);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),

/***/ 9078:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(7297),
    last = __webpack_require__(6974),
    parent = __webpack_require__(2721),
    toKey = __webpack_require__(3812);

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}

module.exports = baseUnset;


/***/ }),

/***/ 9950:
/***/ ((module) => {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ 7297:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(6152),
    isKey = __webpack_require__(1401),
    stringToPath = __webpack_require__(4452),
    toString = __webpack_require__(6188);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ 9882:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Uint8Array = __webpack_require__(9162);

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ 2175:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(7772);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;


/***/ }),

/***/ 4727:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cloneArrayBuffer = __webpack_require__(9882);

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),

/***/ 6058:
/***/ ((module) => {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),

/***/ 169:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(857);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),

/***/ 6190:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cloneArrayBuffer = __webpack_require__(9882);

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ 1522:
/***/ ((module) => {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ 752:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignValue = __webpack_require__(91),
    baseAssignValue = __webpack_require__(3940);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ 7680:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(752),
    getSymbols = __webpack_require__(633);

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),

/***/ 9987:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(752),
    getSymbolsIn = __webpack_require__(2680);

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),

/***/ 4019:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(7772);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ 5463:
/***/ ((module) => {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ 8776:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIteratee = __webpack_require__(8286),
    isArrayLike = __webpack_require__(7878),
    keys = __webpack_require__(249);

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate, 3);
      collection = keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

module.exports = createFind;


/***/ }),

/***/ 933:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseInverter = __webpack_require__(8656);

/**
 * Creates a function like `_.invertBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} toIteratee The function to resolve iteratees.
 * @returns {Function} Returns the new inverter function.
 */
function createInverter(setter, toIteratee) {
  return function(object, iteratee) {
    return baseInverter(object, setter, toIteratee(iteratee), {});
  };
}

module.exports = createInverter;


/***/ }),

/***/ 8803:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Set = __webpack_require__(2143),
    noop = __webpack_require__(4291),
    setToArray = __webpack_require__(4207);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

module.exports = createSet;


/***/ }),

/***/ 8642:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isPlainObject = __webpack_require__(7030);

/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */
function customOmitClone(value) {
  return isPlainObject(value) ? undefined : value;
}

module.exports = customOmitClone;


/***/ }),

/***/ 3043:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(8761);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ 4871:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(5386),
    arraySome = __webpack_require__(7064),
    cacheHas = __webpack_require__(9950);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ 1491:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(857),
    Uint8Array = __webpack_require__(9162),
    eq = __webpack_require__(1225),
    equalArrays = __webpack_require__(4871),
    mapToArray = __webpack_require__(5179),
    setToArray = __webpack_require__(4207);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ 7416:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getAllKeys = __webpack_require__(3483);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ 9097:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var flatten = __webpack_require__(5676),
    overRest = __webpack_require__(3114),
    setToString = __webpack_require__(5251);

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ }),

/***/ 1242:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ 3483:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetAllKeys = __webpack_require__(1897),
    getSymbols = __webpack_require__(633),
    keys = __webpack_require__(249);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ 6939:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetAllKeys = __webpack_require__(1897),
    getSymbolsIn = __webpack_require__(2680),
    keysIn = __webpack_require__(8582);

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ 7937:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isKeyable = __webpack_require__(8304);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ 5225:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isStrictComparable = __webpack_require__(8792),
    keys = __webpack_require__(249);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),

/***/ 8761:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsNative = __webpack_require__(6840),
    getValue = __webpack_require__(8109);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ 7353:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(241);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ 2107:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(857);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ 633:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayFilter = __webpack_require__(7552),
    stubArray = __webpack_require__(981);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ 2680:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(5067),
    getPrototype = __webpack_require__(7353),
    getSymbols = __webpack_require__(633),
    stubArray = __webpack_require__(981);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ 940:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DataView = __webpack_require__(9515),
    Map = __webpack_require__(326),
    Promise = __webpack_require__(2760),
    Set = __webpack_require__(2143),
    WeakMap = __webpack_require__(3215),
    baseGetTag = __webpack_require__(3366),
    toSource = __webpack_require__(7035);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ 8109:
/***/ ((module) => {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ 1369:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(7297),
    isArguments = __webpack_require__(9631),
    isArray = __webpack_require__(6152),
    isIndex = __webpack_require__(9045),
    isLength = __webpack_require__(1158),
    toKey = __webpack_require__(3812);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ 2118:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(9191);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ 6909:
/***/ ((module) => {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ 8138:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(9191);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ 4174:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(9191);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ 7942:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(9191);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ 9917:
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),

/***/ 8222:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cloneArrayBuffer = __webpack_require__(9882),
    cloneDataView = __webpack_require__(4727),
    cloneRegExp = __webpack_require__(6058),
    cloneSymbol = __webpack_require__(169),
    cloneTypedArray = __webpack_require__(6190);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),

/***/ 8725:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseCreate = __webpack_require__(9413),
    getPrototype = __webpack_require__(7353),
    isPrototype = __webpack_require__(6001);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ 5882:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(857),
    isArguments = __webpack_require__(9631),
    isArray = __webpack_require__(6152);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ 9045:
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ 1401:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(6152),
    isSymbol = __webpack_require__(4795);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ 8304:
/***/ ((module) => {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ 7394:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var coreJsData = __webpack_require__(4019);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ 6001:
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ 8792:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(9259);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),

/***/ 3945:
/***/ ((module) => {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ 1846:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(2218);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ 8028:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(2218);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ 2344:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(2218);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ 4769:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(2218);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ 2411:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Hash = __webpack_require__(9612),
    ListCache = __webpack_require__(235),
    Map = __webpack_require__(326);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ 6417:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(7937);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ 6928:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(7937);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ 9493:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(7937);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ 4150:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(7937);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ 5179:
/***/ ((module) => {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ 3477:
/***/ ((module) => {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),

/***/ 7777:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var memoize = __webpack_require__(733);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ 9191:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(8761);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ 4248:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(241);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ 2966:
/***/ ((module) => {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ 4146:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(1242);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;


/***/ }),

/***/ 7157:
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ 241:
/***/ ((module) => {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ 3114:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var apply = __webpack_require__(9432);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ 2721:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(3324),
    baseSlice = __webpack_require__(9872);

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}

module.exports = parent;


/***/ }),

/***/ 7772:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(1242);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ 2842:
/***/ ((module) => {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ 2482:
/***/ ((module) => {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ 4207:
/***/ ((module) => {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ 5251:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseSetToString = __webpack_require__(6532),
    shortOut = __webpack_require__(7787);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ 7787:
/***/ ((module) => {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ 5243:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(235);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ 2858:
/***/ ((module) => {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ 4417:
/***/ ((module) => {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ 8605:
/***/ ((module) => {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ 1418:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(235),
    Map = __webpack_require__(326),
    MapCache = __webpack_require__(6738);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ 6024:
/***/ ((module) => {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ 4452:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var memoizeCapped = __webpack_require__(7777);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ 3812:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isSymbol = __webpack_require__(4795);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ 7035:
/***/ ((module) => {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ 2153:
/***/ ((module) => {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ 4004:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseClone = __webpack_require__(8874);

/** Used to compose bitmasks for cloning. */
var CLONE_SYMBOLS_FLAG = 4;

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
function clone(value) {
  return baseClone(value, CLONE_SYMBOLS_FLAG);
}

module.exports = clone;


/***/ }),

/***/ 9850:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseClone = __webpack_require__(8874);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;


/***/ }),

/***/ 6874:
/***/ ((module) => {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ 7335:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseDifference = __webpack_require__(5246),
    baseFlatten = __webpack_require__(2034),
    baseRest = __webpack_require__(6060),
    isArrayLikeObject = __webpack_require__(3746);

/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * **Note:** Unlike `_.pullAll`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.without, _.xor
 * @example
 *
 * _.difference([2, 1], [2, 3]);
 * // => [1]
 */
var difference = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
    : [];
});

module.exports = difference;


/***/ }),

/***/ 1225:
/***/ ((module) => {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ 5281:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createFind = __webpack_require__(8776),
    findIndex = __webpack_require__(2982);

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

module.exports = find;


/***/ }),

/***/ 2982:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFindIndex = __webpack_require__(1359),
    baseIteratee = __webpack_require__(8286),
    toInteger = __webpack_require__(8101);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;


/***/ }),

/***/ 5676:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFlatten = __webpack_require__(2034);

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),

/***/ 2579:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(3324);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ 5041:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseHasIn = __webpack_require__(187),
    hasPath = __webpack_require__(1369);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ 3059:
/***/ ((module) => {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ 5380:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var constant = __webpack_require__(6874),
    createInverter = __webpack_require__(933),
    identity = __webpack_require__(3059);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Creates an object composed of the inverted keys and values of `object`.
 * If `object` contains duplicate values, subsequent values overwrite
 * property assignments of previous values.
 *
 * @static
 * @memberOf _
 * @since 0.7.0
 * @category Object
 * @param {Object} object The object to invert.
 * @returns {Object} Returns the new inverted object.
 * @example
 *
 * var object = { 'a': 1, 'b': 2, 'c': 1 };
 *
 * _.invert(object);
 * // => { '1': 'c', '2': 'b' }
 */
var invert = createInverter(function(result, value, key) {
  if (value != null &&
      typeof value.toString != 'function') {
    value = nativeObjectToString.call(value);
  }

  result[value] = key;
}, constant(identity));

module.exports = invert;


/***/ }),

/***/ 9631:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsArguments = __webpack_require__(5183),
    isObjectLike = __webpack_require__(5125);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ 6152:
/***/ ((module) => {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ 7878:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(1049),
    isLength = __webpack_require__(1158);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ 3746:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArrayLike = __webpack_require__(7878),
    isObjectLike = __webpack_require__(5125);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),

/***/ 3226:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(7772),
    stubFalse = __webpack_require__(6330);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;


/***/ }),

/***/ 8149:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqual = __webpack_require__(8746);

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;


/***/ }),

/***/ 1049:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(3366),
    isObject = __webpack_require__(9259);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ 1158:
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ 4714:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsMap = __webpack_require__(4511),
    baseUnary = __webpack_require__(7826),
    nodeUtil = __webpack_require__(4146);

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),

/***/ 9259:
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ 5125:
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ 7030:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(3366),
    getPrototype = __webpack_require__(7353),
    isObjectLike = __webpack_require__(5125);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ 3679:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsSet = __webpack_require__(8436),
    baseUnary = __webpack_require__(7826),
    nodeUtil = __webpack_require__(4146);

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),

/***/ 5505:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(3366),
    isArray = __webpack_require__(6152),
    isObjectLike = __webpack_require__(5125);

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),

/***/ 4795:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(3366),
    isObjectLike = __webpack_require__(5125);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ 7598:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsTypedArray = __webpack_require__(5522),
    baseUnary = __webpack_require__(7826),
    nodeUtil = __webpack_require__(4146);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ 249:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(1634),
    baseKeys = __webpack_require__(6411),
    isArrayLike = __webpack_require__(7878);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ 8582:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(1634),
    baseKeysIn = __webpack_require__(8390),
    isArrayLike = __webpack_require__(7878);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ 6974:
/***/ ((module) => {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ }),

/***/ 733:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MapCache = __webpack_require__(6738);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ 4291:
/***/ ((module) => {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),

/***/ 7620:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayMap = __webpack_require__(343),
    baseClone = __webpack_require__(8874),
    baseUnset = __webpack_require__(9078),
    castPath = __webpack_require__(7297),
    copyObject = __webpack_require__(752),
    customOmitClone = __webpack_require__(8642),
    flatRest = __webpack_require__(9097),
    getAllKeysIn = __webpack_require__(6939);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap(paths, function(path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});

module.exports = omit;


/***/ }),

/***/ 5798:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseProperty = __webpack_require__(256),
    basePropertyDeep = __webpack_require__(2952),
    isKey = __webpack_require__(1401),
    toKey = __webpack_require__(3812);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),

/***/ 981:
/***/ ((module) => {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ 6330:
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ 5707:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toNumber = __webpack_require__(7642);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ 8101:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toFinite = __webpack_require__(5707);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ 7642:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTrim = __webpack_require__(1704),
    isObject = __webpack_require__(9259),
    isSymbol = __webpack_require__(4795);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ 6188:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseToString = __webpack_require__(1054);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ 5652:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseUniq = __webpack_require__(7326);

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length) ? baseUniq(array) : [];
}

module.exports = uniq;


/***/ }),

/***/ 7304:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseDifference = __webpack_require__(5246),
    baseRest = __webpack_require__(6060),
    isArrayLikeObject = __webpack_require__(3746);

/**
 * Creates an array excluding all given values using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * **Note:** Unlike `_.pull`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...*} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.difference, _.xor
 * @example
 *
 * _.without([2, 1, 2, 3], 1, 2);
 * // => [3]
 */
var without = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, values)
    : [];
});

module.exports = without;


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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  chordParserFactory: () => (/* reexport */ parser_chordParserFactory),
  chordRendererFactory: () => (/* reexport */ renderer_chordRendererFactory)
});

;// CONCATENATED MODULE: ./src/helpers/chain.js
/**
 * Execute given functions in sequence, feeding the result of one as an input to the next.
 *
 * @param {Function[]} allFunctions
 * @param {*} input - parameter given to the first function
 * @returns {*} return value of the last function
 */
function chain(allFunctions, input) {
  return allFunctions.reduce(function (value, fn) {
    return value ? fn(value) : null;
  }, input);
}
// EXTERNAL MODULE: ../../node_modules/lodash/cloneDeep.js
var cloneDeep = __webpack_require__(9850);
var cloneDeep_default = /*#__PURE__*/__webpack_require__.n(cloneDeep);
// EXTERNAL MODULE: ../../node_modules/lodash/isString.js
var isString = __webpack_require__(5505);
var isString_default = /*#__PURE__*/__webpack_require__.n(isString);
;// CONCATENATED MODULE: ./src/helpers/checkCustomFilters.js
var checkCustomFilters = function checkCustomFilters(customFilters) {
  if (!Array.isArray(customFilters)) {
    throw new TypeError('customFilters should be given as an array');
  }
  if (customFilters.some(function (filter) {
    return typeof filter !== 'function';
  })) {
    throw new TypeError("The given filter is not a function");
  }
  return true;
};
/* harmony default export */ const helpers_checkCustomFilters = (checkCustomFilters);
// EXTERNAL MODULE: ../../node_modules/lodash/invert.js
var invert = __webpack_require__(5380);
var invert_default = /*#__PURE__*/__webpack_require__.n(invert);
// EXTERNAL MODULE: ../../node_modules/lodash/omit.js
var omit = __webpack_require__(7620);
var omit_default = /*#__PURE__*/__webpack_require__.n(omit);
;// CONCATENATED MODULE: ./src/dictionaries/notes.js
var _sharpsToFlats;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var notes = {
  AFlat: 'Ab',
  A: 'A',
  ASharp: 'A#',
  BFlat: 'Bb',
  B: 'B',
  C: 'C',
  CSharp: 'C#',
  DFlat: 'Db',
  D: 'D',
  DSharp: 'D#',
  EFlat: 'Eb',
  E: 'E',
  F: 'F',
  FSharp: 'F#',
  GFlat: 'Gb',
  G: 'G',
  GSharp: 'G#'
};
var english = {
  Ab: notes.AFlat,
  A: notes.A,
  'A#': notes.ASharp,
  Bb: notes.BFlat,
  B: notes.B,
  'B#': notes.C,
  Cb: notes.B,
  C: notes.C,
  'C#': notes.CSharp,
  Db: notes.DFlat,
  D: notes.D,
  'D#': notes.DSharp,
  Eb: notes.EFlat,
  E: notes.E,
  'E#': notes.F,
  Fb: notes.E,
  F: notes.F,
  'F#': notes.FSharp,
  Gb: notes.GFlat,
  G: notes.G,
  'G#': notes.GSharp
};
var latin = {
  Lab: notes.AFlat,
  La: notes.A,
  'La#': notes.ASharp,
  Sib: notes.BFlat,
  Si: notes.B,
  'Si#': notes.C,
  Dob: notes.B,
  Do: notes.C,
  'Do#': notes.CSharp,
  Reb: notes.DFlat,
  Réb: notes.DFlat,
  Re: notes.D,
  Ré: notes.D,
  'Re#': notes.DSharp,
  'Ré#': notes.DSharp,
  Mib: notes.EFlat,
  Mi: notes.E,
  'Mi#': notes.F,
  Fab: notes.E,
  Fa: notes.F,
  'Fa#': notes.FSharp,
  Solb: notes.GFlat,
  Sol: notes.G,
  'Sol#': notes.GSharp
};
var german = _objectSpread(_objectSpread({}, omit_default()(english, ['Bb', 'B', 'B#'])), {}, {
  As: notes.AFlat,
  Ais: notes.ASharp,
  Hb: notes.BFlat,
  Hes: notes.BFlat,
  H: notes.B,
  His: notes.C,
  'H#': notes.C,
  Ces: notes.B,
  Cis: notes.CSharp,
  Des: notes.DFlat,
  Dis: notes.DSharp,
  Es: notes.EFlat,
  Eis: notes.F,
  Fes: notes.E,
  Fis: notes.FSharp,
  Ges: notes.GFlat,
  Gis: notes.GSharp
});
function getAccidentalsVariation(source) {
  var variant;
  return Object.keys(source).reduce(function (acc, curr) {
    if (curr.match(/.[b|#]$/)) {
      variant = curr.replace('#', '♯').replace('b', '♭');
      acc[variant] = source[curr];
    }
    return acc;
  }, {});
}
var englishVariantsToNotes = _objectSpread(_objectSpread({}, english), getAccidentalsVariation(english));
var latinVariantsToNotes = _objectSpread(_objectSpread({}, latin), getAccidentalsVariation(latin));
var germanVariantsToNotes = _objectSpread(_objectSpread({}, german), getAccidentalsVariation(german));
var allVariantsToNotes = _objectSpread(_objectSpread(_objectSpread({}, englishVariantsToNotes), latinVariantsToNotes), germanVariantsToNotes);
var allVariants = Object.keys(allVariantsToNotes).sort(function (a, b) {
  return b.length - a.length;
});
var englishVariants = Object.keys(englishVariantsToNotes).sort(function (a, b) {
  return b.length - a.length;
});
var latinVariants = Object.keys(latinVariantsToNotes).sort(function (a, b) {
  return b.length - a.length;
});
var germanVariants = Object.keys(germanVariantsToNotes).sort(function (a, b) {
  return b.length - a.length;
});
var allVariantsPerGroup = [{
  name: 'english',
  notes: englishVariants
}, {
  name: 'german',
  notes: germanVariants
}, {
  name: 'latin',
  notes: latinVariants
}];
var notesSharp = [notes.A, notes.ASharp, notes.B, notes.C, notes.CSharp, notes.D, notes.DSharp, notes.E, notes.F, notes.FSharp, notes.G, notes.GSharp];
var notesFlat = [notes.A, notes.BFlat, notes.B, notes.C, notes.DFlat, notes.D, notes.EFlat, notes.E, notes.F, notes.GFlat, notes.G, notes.AFlat];
var sharpsToFlats = (_sharpsToFlats = {}, _defineProperty(_sharpsToFlats, notes.CSharp, notes.DFlat), _defineProperty(_sharpsToFlats, notes.DSharp, notes.EFlat), _defineProperty(_sharpsToFlats, notes.FSharp, notes.GFlat), _defineProperty(_sharpsToFlats, notes.GSharp, notes.AFlat), _defineProperty(_sharpsToFlats, notes.ASharp, notes.BFlat), _sharpsToFlats);
var flatsToSharps = invert_default()(sharpsToFlats);

;// CONCATENATED MODULE: ./src/dictionaries/allKeys.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var allKeys = [].concat(_toConsumableArray(Object.values(notes)), _toConsumableArray(Object.values(notes).map(function (key) {
  return key + 'm';
})));
;// CONCATENATED MODULE: ./src/helpers/ChordParsingError.js
function ChordParsingError_typeof(o) { "@babel/helpers - typeof"; return ChordParsingError_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, ChordParsingError_typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, ChordParsingError_toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function ChordParsingError_toPropertyKey(arg) { var key = ChordParsingError_toPrimitive(arg, "string"); return ChordParsingError_typeof(key) === "symbol" ? key : String(key); }
function ChordParsingError_toPrimitive(input, hint) { if (ChordParsingError_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (ChordParsingError_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (ChordParsingError_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var InvalidInputError = /*#__PURE__*/function (_Error) {
  _inherits(InvalidInputError, _Error);
  var _super = _createSuper(InvalidInputError);
  /**
   *  The parser was not given a valid string to parse
   *  ex: `parseChord(null)`
   */
  function InvalidInputError() {
    var _this;
    _classCallCheck(this, InvalidInputError);
    _this = _super.call(this, 'The given symbol is not a valid string');
    _this.name = 'InvalidInput';
    return _this;
  }
  return _createClass(InvalidInputError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
var UnexpectedError = /*#__PURE__*/function (_Error2) {
  _inherits(UnexpectedError, _Error2);
  var _super2 = _createSuper(UnexpectedError);
  /**
   * This error is very unlikely to happen.
   * If it does, it is probably in the context of a custom filter that returns `null` instead of throwing an exception.
   */
  function UnexpectedError() {
    var _this2;
    _classCallCheck(this, UnexpectedError);
    var message = 'An unexpected error happened. Maybe a custom filter returned null instead of throwing an exception?';
    _this2 = _super2.call(this, message);
    _this2.name = 'UnexpectedError';
    return _this2;
  }
  return _createClass(UnexpectedError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
var ChordSymbolError = /*#__PURE__*/function (_Error3) {
  _inherits(ChordSymbolError, _Error3);
  var _super3 = _createSuper(ChordSymbolError);
  function ChordSymbolError(message, chord, errorName) {
    var _this3;
    _classCallCheck(this, ChordSymbolError);
    _this3 = _super3.call(this, message);
    _this3.name = errorName;
    _this3.chord = chord;
    return _this3;
  }
  return _createClass(ChordSymbolError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
var NoSymbolFoundError = /*#__PURE__*/function (_ChordSymbolError) {
  _inherits(NoSymbolFoundError, _ChordSymbolError);
  var _super4 = _createSuper(NoSymbolFoundError);
  /**
   * The given string cannot be confused with a chord symbol in the current notation system
   * ex: `parseChord('Ape')`
   * @param {Chord} chord - the chord object, in the state that it was when the error occurred
   */
  function NoSymbolFoundError(chord) {
    _classCallCheck(this, NoSymbolFoundError);
    var message = "\"".concat(chord.input.symbol, "\" does not seems to be a chord");
    return _super4.call(this, message, chord, 'NoSymbolFound');
  }
  return _createClass(NoSymbolFoundError);
}(ChordSymbolError);
var InvalidModifierError = /*#__PURE__*/function (_ChordSymbolError2) {
  _inherits(InvalidModifierError, _ChordSymbolError2);
  var _super5 = _createSuper(InvalidModifierError);
  /**
   * The given string looks like a chord symbol, but `ChordSymbol` does not understand its descriptor.
   * It can be either because of a typo, or just because the given word is not a symbol.
   * ex: `parseChord('Amid')`
   * @param {Chord} chord - the chord object, in the state that it was when the error occurred
   * @param {String} invalidChars - the characters that proved problematic when parsing the symbol
   */
  function InvalidModifierError(chord, invalidChars) {
    _classCallCheck(this, InvalidModifierError);
    var message = "The chord descriptor \"".concat(chord.input.descriptor, "\" contains unknown or duplicated modifiers: \"").concat(invalidChars, "\"");
    return _super5.call(this, message, chord, 'InvalidModifier');
  }
  return _createClass(InvalidModifierError);
}(ChordSymbolError);
var InvalidIntervalsError = /*#__PURE__*/function (_ChordSymbolError3) {
  _inherits(InvalidIntervalsError, _ChordSymbolError3);
  var _super6 = _createSuper(InvalidIntervalsError);
  /**
   * The given string is a chord symbol, but the resulting interval list is not valid
   * ex: `parseChord('A7M7')`
   * @param {Chord} chord - the chord object, in the state that it was when the error occurred
   * @param {String[]} forbiddenCombo - intervals that should not belong together in a chord
   */
  function InvalidIntervalsError(chord, forbiddenCombo) {
    _classCallCheck(this, InvalidIntervalsError);
    var message = "\"".concat(chord.input.symbol, "\" describes a chord with an invalid intervals combo: ") + forbiddenCombo.join(' and ');
    return _super6.call(this, message, chord, 'InvalidIntervals');
  }
  return _createClass(InvalidIntervalsError);
}(ChordSymbolError);

// EXTERNAL MODULE: ../../node_modules/lodash/isArray.js
var isArray = __webpack_require__(6152);
var isArray_default = /*#__PURE__*/__webpack_require__.n(isArray);
// EXTERNAL MODULE: ../../node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(8149);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
;// CONCATENATED MODULE: ./src/helpers/hasElement.js


function hasExactly(allIntervals, search) {
  var arraySearch = isArray_default()(search) ? search : [search];
  return isEqual_default()(allIntervals, arraySearch);
}
function hasOneOf(allIntervals, search) {
  return has(allIntervals, search, 'oneOf');
}
function hasAll(allIntervals, search) {
  return has(allIntervals, search, 'all');
}
function hasNoneOf(allIntervals, search) {
  return has(allIntervals, search, 'none');
}
function has(allIntervals, search, require) {
  var arraySearch = isArray_default()(search) ? search : [search];
  var lookupMethod = require === 'oneOf' ? 'some' : 'every';
  return arraySearch[lookupMethod](function (interval) {
    return require === 'none' ? !allIntervals.includes(interval) : allIntervals.includes(interval);
  });
}

;// CONCATENATED MODULE: ./src/parser/filters/checkIntervalsConsistency.js


var allForbiddenCombos = [['2', '3'], ['2', '9'], ['3', 'b3'],
//['3',  '4'], // valid in the Real Book: F#7SUS(add 3)
['4', '11'], ['5', 'b5'], ['5', '#5'], ['b6', '#5'], ['b6', '6'], ['b6', '13'], ['6', '13'], ['b7', 'bb7'], ['7', 'b7'], ['9', 'b9'], ['9', '#9'], ['11', '#11'], ['13', 'b13']];

/**
 * Check parsed interval list to detect potential inconsistencies
 *
 * @param {Chord} chord
 * @returns {(Chord|Null)}
 */
function checkIntervalsConsistency(chord) {
  var intervals = chord.normalized.intervals;
  var forbiddenCombo = allForbiddenCombos.find(function (combo) {
    return hasAll(intervals, combo);
  });
  if (forbiddenCombo) {
    throw new InvalidIntervalsError(chord, forbiddenCombo);
  }
  return chord;
}
;// CONCATENATED MODULE: ./src/parser/filters/formatSymbol.js
/**
 * Render the chord by assembling all its components
 *
 * @param {Chord} chord
 * @returns {Chord}
 */
function formatSymbol(chord) {
  var _chord$formatted = chord.formatted,
    rootNote = _chord$formatted.rootNote,
    bassNote = _chord$formatted.bassNote,
    descriptor = _chord$formatted.descriptor,
    chordChanges = _chord$formatted.chordChanges;
  var symbol = rootNote;
  if (descriptor) {
    symbol += descriptor;
  }
  if (chordChanges && chordChanges.length) {
    symbol += '(' + chordChanges.join(',') + ')';
  }
  if (bassNote) {
    symbol += '/' + bassNote;
  }
  chord.formatted.symbol = symbol;
  return chord;
}
;// CONCATENATED MODULE: ./src/dictionaries/qualities.js
var qualities = {
  ma: 'major',
  ma6: 'major6',
  ma7: 'major7',
  dom7: 'dominant7',
  mi: 'minor',
  mi6: 'minor6',
  mi7: 'minor7',
  miMa7: 'minorMajor7',
  aug: 'augmented',
  dim: 'diminished',
  dim7: 'diminished7',
  power: 'power',
  bass: 'bass'
};
var majorQualities = [qualities.ma, qualities.ma6, qualities.ma7, qualities.dom7, qualities.aug];
var minorQualities = [qualities.mi, qualities.mi6, qualities.mi7, qualities.miMa7, qualities.dim, qualities.dim7];

;// CONCATENATED MODULE: ./src/parser/filters/formatSymbolParts.js
var _qualityToDescriptor;
function formatSymbolParts_typeof(o) { "@babel/helpers - typeof"; return formatSymbolParts_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, formatSymbolParts_typeof(o); }
function formatSymbolParts_toConsumableArray(arr) { return formatSymbolParts_arrayWithoutHoles(arr) || formatSymbolParts_iterableToArray(arr) || formatSymbolParts_unsupportedIterableToArray(arr) || formatSymbolParts_nonIterableSpread(); }
function formatSymbolParts_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function formatSymbolParts_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return formatSymbolParts_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return formatSymbolParts_arrayLikeToArray(o, minLen); }
function formatSymbolParts_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function formatSymbolParts_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return formatSymbolParts_arrayLikeToArray(arr); }
function formatSymbolParts_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function formatSymbolParts_defineProperty(obj, key, value) { key = formatSymbolParts_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function formatSymbolParts_toPropertyKey(arg) { var key = formatSymbolParts_toPrimitive(arg, "string"); return formatSymbolParts_typeof(key) === "symbol" ? key : String(key); }
function formatSymbolParts_toPrimitive(input, hint) { if (formatSymbolParts_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (formatSymbolParts_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var qualityToDescriptor = (_qualityToDescriptor = {}, formatSymbolParts_defineProperty(_qualityToDescriptor, qualities.ma, function () {
  return '';
}), formatSymbolParts_defineProperty(_qualityToDescriptor, qualities.ma6, function (chord) {
  return chord.normalized.intervals.includes('9') ? '69' : '6';
}), formatSymbolParts_defineProperty(_qualityToDescriptor, qualities.ma7, function (chord) {
  return 'ma' + getHighestExtension(chord);
}), formatSymbolParts_defineProperty(_qualityToDescriptor, qualities.dom7, function (chord) {
  return chord.normalized.intents.alt ? '7alt' : getHighestExtension(chord);
}), formatSymbolParts_defineProperty(_qualityToDescriptor, qualities.mi, function () {
  return 'mi';
}), formatSymbolParts_defineProperty(_qualityToDescriptor, qualities.mi6, function (chord) {
  return chord.normalized.intervals.includes('9') ? 'mi69' : 'mi6';
}), formatSymbolParts_defineProperty(_qualityToDescriptor, qualities.mi7, function (chord) {
  return 'mi' + getHighestExtension(chord);
}), formatSymbolParts_defineProperty(_qualityToDescriptor, qualities.miMa7, function (chord) {
  return 'miMa' + getHighestExtension(chord);
}), formatSymbolParts_defineProperty(_qualityToDescriptor, qualities.aug, function () {
  return '+';
}), formatSymbolParts_defineProperty(_qualityToDescriptor, qualities.dim, function () {
  return 'dim';
}), formatSymbolParts_defineProperty(_qualityToDescriptor, qualities.dim7, function () {
  return 'dim7';
}), formatSymbolParts_defineProperty(_qualityToDescriptor, qualities.power, function () {
  return '5';
}), formatSymbolParts_defineProperty(_qualityToDescriptor, qualities.bass, function () {
  return ' bass';
}), _qualityToDescriptor);
var chordChangesDescriptors = {
  add: 'add',
  add7: 'Ma7',
  omit: 'omit',
  sus: 'sus'
};

/**
 * Pre-render the chord by formatting all his components: root and bass notes, descriptor and changes
 *
 * @param {Chord} chord
 * @returns {Chord}
 */
function formatSymbolParts(chord) {
  chord.formatted = {
    rootNote: chord.normalized.rootNote,
    bassNote: chord.normalized.bassNote,
    descriptor: getDescriptor(chord),
    chordChanges: getChordChanges(chord)
  };
  return chord;
}
function getDescriptor(chord) {
  var descriptor = qualityToDescriptor[chord.normalized.quality](chord);
  if (chord.normalized.isSuspended) {
    descriptor += chordChangesDescriptors.sus;
  }
  return descriptor;
}
function getHighestExtension(chord) {
  var extensions = chord.normalized.extensions;
  var highestExtension = extensions[extensions.length - 1];
  if (highestExtension === '11' && chord.normalized.intents.major) {
    highestExtension = hasNoneOf(chord.normalized.alterations, ['b9', '#9']) ? '9' : '7';
  }
  return highestExtension || '7';
}
function getChordChanges(chord) {
  var formattedOmits = formatOmits(chord.normalized.omits);
  if (isAltered(chord)) {
    return formattedOmits;
  }
  var formattedAdds = formatAdds(chord.normalized.quality, chord.normalized.adds);
  return [].concat(formatSymbolParts_toConsumableArray(chord.normalized.alterations), formatSymbolParts_toConsumableArray(formattedAdds), formatSymbolParts_toConsumableArray(formattedOmits));
}
function isAltered(chord) {
  return chord.normalized.intents.alt && chord.normalized.quality === qualities.dom7;
}
function formatAdds(quality, adds) {
  return adds.filter(function (add) {
    return !([qualities.ma6, qualities.mi6].includes(quality) && add === '9');
  }).map(function (add, index) {
    var formatted = '';
    if (index === 0) {
      formatted += chordChangesDescriptors.add;
      if (['b', '#'].includes(add[0])) {
        formatted += ' ';
      }
    }
    formatted += add === '7' ? chordChangesDescriptors.add7 : add;
    return formatted;
  });
}
function formatOmits(omits) {
  return omits.map(function (omitted, index) {
    var formatted = '';
    if (index === 0) {
      formatted += chordChangesDescriptors.omit;
    }
    formatted += omitted === 'b3' ? '3' : omitted;
    return formatted;
  });
}
;// CONCATENATED MODULE: ./src/dictionaries/degrees.js
var u = {
  flat: "\u266D",
  // ♭
  sharp: "\u266F" // ♯
};

var semitonesToDegree = {
  major: {
    0: "I",
    //1: `${u.flat}II`,
    2: "II",
    3: "".concat(u.flat, "III"),
    4: "III",
    5: "IV",
    //6: `${u.flat}V`,
    7: "V",
    8: "".concat(u.flat, "VI"),
    9: "VI",
    10: "".concat(u.flat, "VII"),
    11: "VII"
  },
  minor: {
    0: "I",
    //1: `${u.sharp}I`,
    2: "II",
    3: "III",
    4: "".concat(u.sharp, "III"),
    5: "IV",
    //6: `${u.sharp}IV`,
    7: "V",
    8: "VI",
    9: "".concat(u.sharp, "VI"),
    10: "VII",
    11: "".concat(u.sharp, "VII")
  }
};
;// CONCATENATED MODULE: ./src/parser/filters/formatNumeralSymbol.js
var formatNumeralSymbol_qualityToDescriptor;
function formatNumeralSymbol_typeof(o) { "@babel/helpers - typeof"; return formatNumeralSymbol_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, formatNumeralSymbol_typeof(o); }
function formatNumeralSymbol_defineProperty(obj, key, value) { key = formatNumeralSymbol_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function formatNumeralSymbol_toPropertyKey(arg) { var key = formatNumeralSymbol_toPrimitive(arg, "string"); return formatNumeralSymbol_typeof(key) === "symbol" ? key : String(key); }
function formatNumeralSymbol_toPrimitive(input, hint) { if (formatNumeralSymbol_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (formatNumeralSymbol_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var formatNumeralSymbol_u = {
  sup2: "\xB2",
  // ²
  sup4: "\u2074",
  // ⁴
  sup5: "\u2075",
  // ⁵
  sup6: "\u2076",
  // ⁶
  sup7: "\u2077",
  // ⁷
  sub3: "\u2083",
  // ₃
  sub4: "\u2084",
  // ₄
  sub5: "\u2085",
  // ₅
  flat: "\u266D",
  // ♭
  sharp: "\u266F" // ♯
};

var diatonicChords = {
  major: ["I", "ii", "iii", "IV", "V", "vi", "vii\xB0"],
  dom7: ["I\u0394", "ii".concat(formatNumeralSymbol_u.sup7), "iii".concat(formatNumeralSymbol_u.sup7), "IV\u0394", "V".concat(formatNumeralSymbol_u.sup7), "vi".concat(formatNumeralSymbol_u.sup7), "vii\xF8"],
  minor: ["i", "ii\xB0", "III", "iv", "v", "VI", "VII"],
  minor7: ["i".concat(formatNumeralSymbol_u.sup7), "ii\xF8", "III\u0394", "iv".concat(formatNumeralSymbol_u.sup7), "v".concat(formatNumeralSymbol_u.sup7), "VI\u0394", "VII\u0394"]
};
var borrowedChords = {
  borrowedFromMinor: ["i", "ii\xB0", "".concat(formatNumeralSymbol_u.flat, "III"), "iv", "v", "".concat(formatNumeralSymbol_u.flat, "VI"), "".concat(formatNumeralSymbol_u.flat, "VII")],
  borrowedFromMinor7: ["i".concat(formatNumeralSymbol_u.sup7), "ii\xF8", "".concat(formatNumeralSymbol_u.flat, "III\u0394"), "iv".concat(formatNumeralSymbol_u.sup7), "v".concat(formatNumeralSymbol_u.sup7), "".concat(formatNumeralSymbol_u.flat, "VI\u0394"), "".concat(formatNumeralSymbol_u.flat, "VII\u0394")],
  borrowedFromMajor: ["I", "ii", "".concat(formatNumeralSymbol_u.sharp, "iii"), "IV", "V", "".concat(formatNumeralSymbol_u.sharp, "vi"), "".concat(formatNumeralSymbol_u.sharp, "vii\xB0")],
  borrowedFromDom7: ["I\u0394", "ii".concat(formatNumeralSymbol_u.sup7), "".concat(formatNumeralSymbol_u.sharp, "iii").concat(formatNumeralSymbol_u.sup7), "IV\u0394", "V".concat(formatNumeralSymbol_u.sup7), "".concat(formatNumeralSymbol_u.sharp, "vi").concat(formatNumeralSymbol_u.sup7), "".concat(formatNumeralSymbol_u.sharp, "vii\xF8")]
};

/**
 * Construct the roman numeral symbol for a chord
 * @param {String} key
 * @param {Chord} chord
 * @returns {Chord}
 */
function formatNumeralSymbol() {
  var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var chord = arguments.length > 1 ? arguments[1] : undefined;
  var degree;
  var symbol;
  var type;
  if (!key) key = chord.normalized.rootNote;
  var keyQuality = key.indexOf('m') > -1 ? 'minor' : 'major';
  var thirdQuality = minorQualities.includes(chord.normalized.quality) ? 'minor' : 'major';
  degree = getRomanDegree(key, keyQuality, chord, thirdQuality);
  var inversion = getInversion(chord);
  var descriptor = filters_formatNumeralSymbol_qualityToDescriptor[chord.normalized.quality](chord, inversion);
  symbol = "".concat(degree).concat(descriptor);
  if (isDiatonic(keyQuality, symbol)) {
    type = 'diatonic';
  } else if (isBorrowed(keyQuality, symbol)) {
    type = 'borrowed';
  } else {
    type = 'unknown';
    degree = '?';
    symbol = "".concat(degree).concat(descriptor);
  }
  symbol += inversion;
  chord.numeral = {
    symbol: symbol,
    degree: degree,
    descriptor: descriptor,
    inversion: inversion,
    type: type,
    thirdQuality: thirdQuality
  };
  return chord;
}
function getRomanDegree(key, keyQuality, chord, thirdQuality) {
  var keyNote = key.replace('m', '');
  var interval = getIntervalBetweenNotes(keyNote, chord.normalized.rootNote);
  var romanDegree = semitonesToDegree[keyQuality][interval] || '?';
  return thirdQuality === 'minor' ? romanDegree.toLowerCase() : romanDegree;
}
function getIntervalBetweenNotes(note1, note2) {
  var note1Index = notesSharp.indexOf(flatsToSharps[note1] || note1);
  var note2Index = notesSharp.indexOf(flatsToSharps[note2] || note2);
  return (note2Index - note1Index + 12) % 12;
}
var filters_formatNumeralSymbol_qualityToDescriptor = (formatNumeralSymbol_qualityToDescriptor = {}, formatNumeralSymbol_defineProperty(formatNumeralSymbol_qualityToDescriptor, qualities.ma, function () {
  return '';
}), formatNumeralSymbol_defineProperty(formatNumeralSymbol_qualityToDescriptor, qualities.ma6, function () {
  return '';
}), formatNumeralSymbol_defineProperty(formatNumeralSymbol_qualityToDescriptor, qualities.ma7, function () {
  return 'Δ';
}), formatNumeralSymbol_defineProperty(formatNumeralSymbol_qualityToDescriptor, qualities.dom7, function (chord, inversion) {
  return inversion === '' ? "".concat(formatNumeralSymbol_u.sup7) : '';
}), formatNumeralSymbol_defineProperty(formatNumeralSymbol_qualityToDescriptor, qualities.mi, function () {
  return '';
}), formatNumeralSymbol_defineProperty(formatNumeralSymbol_qualityToDescriptor, qualities.mi6, function () {
  return '';
}), formatNumeralSymbol_defineProperty(formatNumeralSymbol_qualityToDescriptor, qualities.mi7, function (chord, inversion) {
  if (chord.normalized.intervals.includes('b5')) {
    return 'ø';
  } else {
    return inversion === '' ? "".concat(formatNumeralSymbol_u.sup7) : '';
  }
}), formatNumeralSymbol_defineProperty(formatNumeralSymbol_qualityToDescriptor, qualities.miMa7, function () {
  return 'mΔ';
}), formatNumeralSymbol_defineProperty(formatNumeralSymbol_qualityToDescriptor, qualities.aug, function () {
  return '+';
}), formatNumeralSymbol_defineProperty(formatNumeralSymbol_qualityToDescriptor, qualities.dim, function () {
  return '°';
}), formatNumeralSymbol_defineProperty(formatNumeralSymbol_qualityToDescriptor, qualities.dim7, function (chord, inversion) {
  return inversion === '' ? "\xB0".concat(formatNumeralSymbol_u.sup7) : '°';
}), formatNumeralSymbol_defineProperty(formatNumeralSymbol_qualityToDescriptor, qualities.power, function () {
  return '';
}), formatNumeralSymbol_defineProperty(formatNumeralSymbol_qualityToDescriptor, qualities.bass, function () {
  return '';
}), formatNumeralSymbol_qualityToDescriptor);
function isDiatonic(keyQuality, symbol) {
  if (keyQuality === 'major') {
    return diatonicChords.major.includes(symbol) || diatonicChords.dom7.includes(symbol);
  } else {
    return diatonicChords.minor.includes(symbol) || diatonicChords.minor7.includes(symbol);
  }
}
function isBorrowed(keyQuality, symbol) {
  if (keyQuality === 'major') {
    return borrowedChords.borrowedFromMinor.includes(symbol) || borrowedChords.borrowedFromMinor7.includes(symbol);
  } else {
    return borrowedChords.borrowedFromMajor.includes(symbol) || borrowedChords.borrowedFromDom7.includes(symbol);
  }
}
function getInversion(chord) {
  var inversion = '';
  if (chord.normalized.bassNote) {
    if (bassIsThird(chord)) {
      inversion = isSeventh(chord) ? "".concat(formatNumeralSymbol_u.sup6).concat(formatNumeralSymbol_u.sub5) : "".concat(formatNumeralSymbol_u.sup6);
    } else if (bassIsFifth(chord)) {
      inversion = isSeventh(chord) ? "".concat(formatNumeralSymbol_u.sup4).concat(formatNumeralSymbol_u.sub3) : "".concat(formatNumeralSymbol_u.sup6).concat(formatNumeralSymbol_u.sub4);
    } else if (bassIsSeventh(chord)) {
      inversion = "\xB2";
    }
  }
  return inversion;
}
function isSeventh(chord) {
  return [qualities.ma7, qualities.mi7, qualities.miMa7, qualities.dom7, qualities.dim7].includes(chord.normalized.quality);
}
function bassIsThird(chord) {
  return bassIsIntervalNote(chord, 'b3') || bassIsIntervalNote(chord, '3');
}
function bassIsFifth(chord) {
  return bassIsIntervalNote(chord, 'b5') || bassIsIntervalNote(chord, '5') || bassIsIntervalNote(chord, '#5');
}
function bassIsSeventh(chord) {
  return bassIsIntervalNote(chord, 'bb7') || bassIsIntervalNote(chord, 'b7') || bassIsIntervalNote(chord, '7');
}
function bassIsIntervalNote(chord, interval) {
  var intervalNoteIndex = chord.normalized.intervals.indexOf(interval);
  if (intervalNoteIndex === -1) return false;
  var normalizedBassNote = flatsToSharps[chord.normalized.bassNote] || chord.normalized.bassNote;
  var normalizedIntervalNote = flatsToSharps[chord.normalized.notes[intervalNoteIndex]] || chord.normalized.notes[intervalNoteIndex];
  return normalizedBassNote === normalizedIntervalNote;
}
;// CONCATENATED MODULE: ./src/parser/filters/getParsableDescriptor.js


/**
 * Prepare whatever string has been identified as a descriptor so it is parsable by the next filter
 *
 * @param {Chord} chord
 * @returns {Chord}
 */
function getParsableDescriptor(chord) {
  var allFilters = [toLowerCaseExceptMajorM, removeSpaces, addDisambiguators, addMissingVerbs];
  if (chord.input.descriptor) {
    chord.input.parsableDescriptor = chain(allFilters, chord.input.descriptor);
  }
  return chord;
}
function toLowerCaseExceptMajorM(descriptor) {
  return descriptor.replace(/[A-LN-Za-z]+/g, function (match) {
    return match.toLowerCase();
  }).replace('oMit', 'omit').replace('diM', 'dim').replace('augMented', 'augmented');
}
function removeSpaces(descriptor) {
  return descriptor.replace(/ /g, '');
}
function addDisambiguators(descriptor) {
  return descriptor.replace(/(7?dim)(alt|add)/g, '$1 $2').replace(/([m|M])(alt|add)/g, '$1 $2').replace(/i(no[35])/g, 'i $1').replace(/([b♭#♯]9)6/g, '$1 6').replace(/(9\/?6)/g, ' $1').replaceAll('+5', '#5').replaceAll('-5', 'b5');
}
function addMissingVerbs(descriptor) {
  var allTokensWithVerbs;
  var currentVerb;
  var hasVerb;
  return descriptor.replace(/\((.*?)\)/g, function (match, parenthesis) {
    allTokensWithVerbs = [];
    currentVerb = '';
    parenthesis.split(',').forEach(function (token) {
      hasVerb = true;
      if (token.startsWith('add')) {
        currentVerb = 'add';
      } else if (token.startsWith('omit')) {
        currentVerb = 'omit';
      } else if (token.startsWith('no')) {
        currentVerb = 'no';
      } else {
        hasVerb = false;
      }
      if (hasVerb) {
        allTokensWithVerbs.push(token);
      } else {
        allTokensWithVerbs.push(currentVerb + token);
      }
    });
    return ' ' + allTokensWithVerbs.join(' ') + ' ';
  });
}
;// CONCATENATED MODULE: ./src/parser/filters/initChord.js


/**
 * @param {String} symbol
 * @param {Object} parserConfiguration
 * @returns {Chord}
 */
function initChord() {
  var parserConfiguration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var symbol = arguments.length > 1 ? arguments[1] : undefined;
  return {
    input: {
      symbol: symbol
    },
    normalized: {},
    formatted: {},
    parserConfiguration: cloneDeep_default()(parserConfiguration)
  };
}
;// CONCATENATED MODULE: ./src/dictionaries/scales.js
var scaleToAccidental = {
  C: 'flat',
  D: 'sharp',
  E: 'sharp',
  F: 'flat',
  G: 'sharp',
  A: 'sharp',
  B: 'sharp',
  Cm: 'flat',
  Dm: 'flat',
  Em: 'sharp',
  Fm: 'flat',
  Gm: 'flat',
  Am: 'flat',
  Bm: 'sharp'
};
function getScaleAccidental(scale) {
  if (scale.indexOf('#') > -1) {
    return 'sharp';
  } else if (scale.indexOf('b') > -1) {
    return 'flat';
  } else return scaleToAccidental[scale];
}

;// CONCATENATED MODULE: ./src/parser/filters/nameIndividualChordNotes.js
function nameIndividualChordNotes_toConsumableArray(arr) { return nameIndividualChordNotes_arrayWithoutHoles(arr) || nameIndividualChordNotes_iterableToArray(arr) || nameIndividualChordNotes_unsupportedIterableToArray(arr) || nameIndividualChordNotes_nonIterableSpread(); }
function nameIndividualChordNotes_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function nameIndividualChordNotes_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return nameIndividualChordNotes_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return nameIndividualChordNotes_arrayLikeToArray(o, minLen); }
function nameIndividualChordNotes_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function nameIndividualChordNotes_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return nameIndividualChordNotes_arrayLikeToArray(arr); }
function nameIndividualChordNotes_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }




/**
 * Convert intervals in actual notes.
 *
 * @param {Chord} chord
 * @returns {Chord}
 */
function nameIndividualChordNotes(chord) {
  var rootNote = chord.normalized.rootNote;
  var semitones = chord.normalized.semitones;
  var quality = chord.normalized.quality;
  var scale = rootNote;
  if (minorQualities.includes(quality)) {
    scale += 'm';
  }
  var refNotes = getScaleAccidental(scale) === 'sharp' ? notesSharp : notesFlat;
  var rootNoteIndex = refNotes.indexOf(rootNote);
  var indexedNotes = [].concat(nameIndividualChordNotes_toConsumableArray(refNotes.slice(rootNoteIndex)), nameIndividualChordNotes_toConsumableArray(refNotes.slice(0, rootNoteIndex)), nameIndividualChordNotes_toConsumableArray(refNotes.slice(rootNoteIndex)), nameIndividualChordNotes_toConsumableArray(refNotes.slice(0, rootNoteIndex)));
  chord.normalized.notes = semitones.map(function (i) {
    return indexedNotes[i];
  });
  return chord;
}
;// CONCATENATED MODULE: ./src/parser/filters/normalizeNotes.js


/**
 * Convert root/bass notes to English names
 *
 * @param {Chord} chord
 * @returns {Chord}
 */
function normalizeNotes(chord) {
  chord.normalized.rootNote = allVariantsToNotes[chord.input.rootNote];
  if (chord.input.bassNote) {
    chord.normalized.bassNote = allVariantsToNotes[chord.input.bassNote];
  }
  return chord;
}
// EXTERNAL MODULE: ../../node_modules/lodash/clone.js
var clone = __webpack_require__(4004);
var clone_default = /*#__PURE__*/__webpack_require__.n(clone);
// EXTERNAL MODULE: ../../node_modules/lodash/find.js
var find = __webpack_require__(5281);
var find_default = /*#__PURE__*/__webpack_require__.n(find);
// EXTERNAL MODULE: ../../node_modules/lodash/uniq.js
var uniq = __webpack_require__(5652);
var uniq_default = /*#__PURE__*/__webpack_require__.n(uniq);
// EXTERNAL MODULE: ../../node_modules/lodash/without.js
var without = __webpack_require__(7304);
var without_default = /*#__PURE__*/__webpack_require__.n(without);
;// CONCATENATED MODULE: ./src/parser/filters/normalizeDescriptor.js
function normalizeDescriptor_typeof(o) { "@babel/helpers - typeof"; return normalizeDescriptor_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, normalizeDescriptor_typeof(o); }
function normalizeDescriptor_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function normalizeDescriptor_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? normalizeDescriptor_ownKeys(Object(t), !0).forEach(function (r) { normalizeDescriptor_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : normalizeDescriptor_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function normalizeDescriptor_defineProperty(obj, key, value) { key = normalizeDescriptor_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function normalizeDescriptor_toPropertyKey(arg) { var key = normalizeDescriptor_toPrimitive(arg, "string"); return normalizeDescriptor_typeof(key) === "symbol" ? key : String(key); }
function normalizeDescriptor_toPrimitive(input, hint) { if (normalizeDescriptor_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (normalizeDescriptor_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function normalizeDescriptor_toConsumableArray(arr) { return normalizeDescriptor_arrayWithoutHoles(arr) || normalizeDescriptor_iterableToArray(arr) || normalizeDescriptor_unsupportedIterableToArray(arr) || normalizeDescriptor_nonIterableSpread(); }
function normalizeDescriptor_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function normalizeDescriptor_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return normalizeDescriptor_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return normalizeDescriptor_arrayLikeToArray(o, minLen); }
function normalizeDescriptor_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function normalizeDescriptor_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return normalizeDescriptor_arrayLikeToArray(arr); }
function normalizeDescriptor_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }








/**
 * Detect chord quality and changes (extensions, alterations, adds and omits)
 *
 * @param {Chord} chord
 * @returns {Chord}
 */
function normalizeDescriptor(chord) {
  var chordIntervals = clone_default()(chord.normalized.intervals);
  var normalized = {
    quality: '',
    isSuspended: false,
    extensions: [],
    alterations: [],
    adds: [],
    omits: []
  };
  if (isPowerChord(chordIntervals)) {
    normalized.quality = qualities.power;
  } else if (isBass(chordIntervals)) {
    normalized.quality = qualities.bass;
  } else {
    var omits = getOmits(chordIntervals, chord.normalized.intents.major);
    var isSuspended = getIsSuspended(chordIntervals, chord.normalized.intents.major);
    var _getChordQuality = getChordQuality(chordIntervals, chord, isSuspended, omits),
      qualityIntervals = _getChordQuality.qualityIntervals,
      quality = _getChordQuality.quality;
    var extensions = getExtensions(chordIntervals, quality);

    // to be able to detect adds and alterations, we build the "straight" version of the chord,
    // ie. the chord as if no alterations/adds/omits where present.
    // we will compare this to the actual intervals later on
    var baseIntervals = ['1'].concat(normalizeDescriptor_toConsumableArray(qualityIntervals), normalizeDescriptor_toConsumableArray(extensions));
    var _getAddsAndAlteration = getAddsAndAlterations(chordIntervals, baseIntervals, quality),
      adds = _getAddsAndAlteration.adds,
      alterations = _getAddsAndAlteration.alterations;
    normalized = normalizeDescriptor_objectSpread(normalizeDescriptor_objectSpread({}, normalized), {}, {
      quality: quality,
      isSuspended: isSuspended,
      extensions: extensions,
      alterations: alterations,
      adds: adds,
      omits: omits
    });
  }
  return normalizeDescriptor_objectSpread(normalizeDescriptor_objectSpread({}, chord), {}, {
    normalized: normalizeDescriptor_objectSpread(normalizeDescriptor_objectSpread({}, chord.normalized), normalized)
  });
}
function isPowerChord(intervals) {
  return hasExactly(intervals, ['1', '5']);
}
function isBass(intervals) {
  return hasExactly(intervals, ['1']);
}
function getIsSuspended(intervals, hasMajorIntent) {
  return intervals.includes('4') || intervals.includes('11') && hasMajorIntent && !intervals.includes('3');
}
function getOmits(intervals, hasMajorIntent) {
  var omits = [];
  if (hasNoneOf(intervals, ['b3', '3', '4', '11']) || !hasMajorIntent && hasNoneOf(intervals, ['b3', '4'])) {
    omits.push(hasMajorIntent ? '3' : 'b3');
  }
  if (hasNoneOf(intervals, ['b5', '5', '#5', 'b13'])) {
    omits.push('5');
  }
  return omits;
}
function getChordQuality(allIntervals, chord, isSuspended, omits) {
  var intervalsForQualityDetection = getIntervalsForQualityDetection(allIntervals, chord, isSuspended, omits);
  var intervalsToQualities = [
  // !!! do not change order without a good reason
  {
    qualityIntervals: ['b3'],
    quality: qualities.mi
  }, {
    qualityIntervals: ['b3', '6'],
    quality: qualities.mi6
  }, {
    qualityIntervals: ['b3', '7'],
    quality: qualities.miMa7
  }, {
    qualityIntervals: ['b3', 'b7'],
    quality: qualities.mi7
  }, {
    qualityIntervals: ['3'],
    quality: qualities.ma
  }, {
    qualityIntervals: ['3', '6'],
    quality: qualities.ma6
  }, {
    qualityIntervals: ['3', '7'],
    quality: qualities.ma7
  }, {
    qualityIntervals: ['3', 'b7'],
    quality: qualities.dom7
  }, {
    qualityIntervals: ['3', '#5'],
    quality: qualities.aug
  }, {
    qualityIntervals: ['b3', 'b5'],
    quality: qualities.dim
  }, {
    qualityIntervals: ['b3', 'b5', 'bb7'],
    quality: qualities.dim7
  }].sort(function (a, b) {
    return b.qualityIntervals.length - a.qualityIntervals.length;
  });
  return find_default()(intervalsToQualities, function (o) {
    return hasAll(intervalsForQualityDetection, o.qualityIntervals);
  });
}

// To properly detect the chord quality, we need a "straight" version of the chord,
// meaning with a third interval (= un-suspended, no omit3)
function getIntervalsForQualityDetection(allIntervals, chord, isSuspended, omits) {
  var allFilters = [undoOmit3.bind(null, omits), undoSuspension.bind(null, isSuspended, chord.normalized.intents.major), undoAlt5.bind(null, chord.normalized.intents.alt), (uniq_default())];
  return chain(allFilters, clone_default()(allIntervals));
}
function undoOmit3(omits, allIntervals) {
  var with3rd = clone_default()(allIntervals);
  if (omits.includes('3')) {
    with3rd.push('3');
  } else if (omits.includes('b3')) {
    with3rd.push('b3');
  }
  return with3rd;
}
function undoSuspension(isSuspended, hasMajorIntent, allIntervals) {
  if (isSuspended) {
    var unSuspended = without_default()(allIntervals, '4');
    unSuspended.push(hasMajorIntent ? '3' : 'b3');
    return unSuspended;
  }
  return allIntervals;
}
function undoAlt5(isAlt, allIntervals) {
  if (isAlt) {
    var unaltered = without_default()(allIntervals, 'b5', '#5');
    unaltered.push('5');
    return unaltered;
  }
  return allIntervals;
}
function getExtensions(allIntervals, quality) {
  var extensions = [];
  if (canBeExtended(quality)) {
    if (isMinorExtended13th(allIntervals, quality)) {
      extensions.push('9', '11', '13');
    } else if (isMajorExtended13th(allIntervals, quality)) {
      extensions.push('9', '13');
    } else if (isExtended11th(allIntervals)) {
      extensions.push('9', '11');
    } else if (isExtended9th(allIntervals)) {
      extensions.push('9');
    }
  }
  return extensions;
}
function canBeExtended(quality) {
  return [qualities.ma7, qualities.dom7, qualities.mi7, qualities.miMa7].includes(quality);
}
function canHave11th(quality) {
  return [qualities.mi7, qualities.miMa7].includes(quality);
}
function isMinorExtended13th(allIntervals, quality) {
  return canHave11th(quality) && hasOneOf(allIntervals, '13') && hasOneOf(allIntervals, ['11', '#11']) && hasOneOf(allIntervals, ['b9', '9', '#9']);
}
function isMajorExtended13th(allIntervals, quality) {
  return !canHave11th(quality) && hasOneOf(allIntervals, '13') && hasOneOf(allIntervals, ['b9', '9', '#9']);
}
function isExtended11th(allIntervals) {
  return hasOneOf(allIntervals, '11') && hasOneOf(allIntervals, ['b9', '9', '#9']);
}
function isExtended9th(allIntervals) {
  return allIntervals.includes('9');
}
function getAddsAndAlterations(chordIntervals, baseIntervals, quality) {
  var adds = [];
  var alterations = [];
  chordIntervals.filter(function (interval) {
    return interval !== '5' && interval !== '4';
  }).forEach(function (interval) {
    if (!baseIntervals.includes(interval)) {
      if (isAlteration(quality, interval)) {
        alterations.push(interval);
      } else {
        adds.push(interval);
      }
    }
  });
  if (hasAdd3(chordIntervals)) {
    adds.push('3');
  }
  return {
    adds: sortIntervals(adds),
    alterations: sortIntervals(alterations)
  };
}
function isAlteration(quality, interval) {
  var _qualityAlterations;
  var qualityAlterations = (_qualityAlterations = {}, normalizeDescriptor_defineProperty(_qualityAlterations, qualities.ma, ['b5', '#5', '#11', 'b13']), normalizeDescriptor_defineProperty(_qualityAlterations, qualities.ma6, ['b5', '#5', '#11', 'b13']), normalizeDescriptor_defineProperty(_qualityAlterations, qualities.ma7, ['b5', '#5', '#11', 'b13']), normalizeDescriptor_defineProperty(_qualityAlterations, qualities.dom7, ['b5', '#5', 'b9', '#9', '#11', 'b13']), normalizeDescriptor_defineProperty(_qualityAlterations, qualities.mi, ['b5', '#5', '#11', 'b13']), normalizeDescriptor_defineProperty(_qualityAlterations, qualities.mi6, ['b5', '#5', '#11', 'b13']), normalizeDescriptor_defineProperty(_qualityAlterations, qualities.mi7, ['b5', '#5', '#11', 'b13']), normalizeDescriptor_defineProperty(_qualityAlterations, qualities.miMa7, ['b5', '#5', '#11', 'b13']), normalizeDescriptor_defineProperty(_qualityAlterations, qualities.aug, []), normalizeDescriptor_defineProperty(_qualityAlterations, qualities.dim, []), normalizeDescriptor_defineProperty(_qualityAlterations, qualities.dim7, []), _qualityAlterations);
  return qualityAlterations[quality].includes(interval);
}
function hasAdd3(allIntervals) {
  return hasAll(allIntervals, ['3', '4']);
}
function sortIntervals(intervals) {
  return intervals.sort(function (a, b) {
    var sortableA = Number.parseInt(a.replace(/[b#]/, ''));
    var sortableB = Number.parseInt(b.replace(/[b#]/, ''));
    return sortableA - sortableB;
  });
}
;// CONCATENATED MODULE: ./src/parser/filters/parseBase.js


/**
 * Split symbol in root/bass note and descriptor.
 * Returns null if the given string does not seems to be a chord.
 *
 * @param {String[]} noteVariants - all notes within a given notation system (English, Latin, German...)
 * @param {Chord} chord
 * @returns {(Chord|Null)}
 */
function parseBase(noteVariants, chord) {
  var symbol = chord.input.symbol;
  var notesRegex = noteVariants.join('|');
  var notesAndDescriptorRegex = new RegExp('^' + '(' + notesRegex + ')' + '(.*?)' + '(/(' + notesRegex + '))?' + '$');
  var result = symbol.match(notesAndDescriptorRegex);
  if (result && result[1]) {
    chord.input.rootNote = result[1];
    if (result[2]) {
      chord.input.descriptor = result[2];
    }
    if (result[4]) {
      chord.input.bassNote = result[4];
    }
    return chord;
  } else {
    throw new NoSymbolFoundError(chord);
  }
}
;// CONCATENATED MODULE: ./src/dictionaries/modifiers.js
function modifiers_typeof(o) { "@babel/helpers - typeof"; return modifiers_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, modifiers_typeof(o); }
function modifiers_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function modifiers_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? modifiers_ownKeys(Object(t), !0).forEach(function (r) { modifiers_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : modifiers_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function modifiers_defineProperty(obj, key, value) { key = modifiers_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function modifiers_toPropertyKey(arg) { var key = modifiers_toPrimitive(arg, "string"); return modifiers_typeof(key) === "symbol" ? key : String(key); }
function modifiers_toPrimitive(input, hint) { if (modifiers_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (modifiers_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var allModifiers = {
  // base
  ma: 'ma',
  mi: 'mi',
  dim: 'dim',
  halfDim: 'halfDim',
  aug: 'aug',
  seventh: 'seventh',
  // suspended
  sus: 'sus',
  sus2: 'sus2',
  // extensions
  ninth: 'ninth',
  eleventh: 'eleventh',
  thirteenth: 'thirteenth',
  // alterations
  fifthFlat: 'b5',
  fifthSharp: '#5',
  ninthFlat: 'b9',
  ninthSharp: '#9',
  eleventhSharp: '#11',
  thirteenthFlat: 'b13',
  // added
  add3: 'add3',
  add4: 'add4',
  addb6: 'addb6',
  add6: 'add6',
  add69: 'add69',
  add7: 'add7',
  add9: 'add9',
  add11: 'add11',
  add13: 'add13',
  // special
  bass: 'bass',
  omit3: 'omit3',
  omit5: 'omit5',
  power: 'power',
  alt: 'alt'
};

/**
 * WARNING: when adding new modifiers symbols, be careful of possible edge cases that might arise with some combinations.
 * For example, without edge case handling, "madd9" would be parsed as "ma" instead of "m"+"add9"
 */

var major = {
  '^': [allModifiers.ma, allModifiers.add7],
  Δ: [allModifiers.ma, allModifiers.add7],
  M: allModifiers.ma,
  Ma: allModifiers.ma,
  Maj: allModifiers.ma,
  Major: allModifiers.ma,
  ma: allModifiers.ma,
  maj: allModifiers.ma,
  major: allModifiers.ma
};
var major7th = getDerivedModifiers(major, allModifiers.add7, function (symbol) {
  return symbol + '7';
});
var add7 = getDerivedModifiers(major, allModifiers.add7, function (symbol) {
  return 'add' + symbol + '7';
});
var allSymbols = modifiers_objectSpread(modifiers_objectSpread(modifiers_objectSpread(modifiers_objectSpread({}, major), major7th), {}, {
  // minor
  '-': allModifiers.mi,
  m: allModifiers.mi,
  Mi: allModifiers.mi,
  Min: allModifiers.mi,
  Minor: allModifiers.mi,
  mi: allModifiers.mi,
  min: allModifiers.mi,
  minor: allModifiers.mi,
  // diminished / augmented
  '°': allModifiers.dim,
  o: allModifiers.dim,
  0: allModifiers.dim,
  dim: allModifiers.dim,
  'dim.': allModifiers.dim,
  diminished: allModifiers.dim,
  Ø: allModifiers.halfDim,
  ø: allModifiers.halfDim,
  h: allModifiers.halfDim,
  '+': allModifiers.aug,
  aug: allModifiers.aug,
  augmented: allModifiers.aug,
  // seventh
  7: allModifiers.seventh,
  // suspended
  4: allModifiers.sus,
  sus: allModifiers.sus,
  sus4: allModifiers.sus,
  suspended: allModifiers.sus,
  suspended4: allModifiers.sus,
  sus2: allModifiers.sus2,
  suspended2: allModifiers.sus2,
  // extensions
  9: allModifiers.ninth,
  11: allModifiers.eleventh,
  13: allModifiers.thirteenth,
  // alterations
  b3: allModifiers.mi,
  b5: allModifiers.fifthFlat,
  '♭5': allModifiers.fifthFlat,
  '#5': allModifiers.fifthSharp,
  '♯5': allModifiers.fifthSharp,
  b9: allModifiers.ninthFlat,
  '♭9': allModifiers.ninthFlat,
  addb9: allModifiers.ninthFlat,
  'add♭9': allModifiers.ninthFlat,
  '#9': allModifiers.ninthSharp,
  '♯9': allModifiers.ninthSharp,
  'add#9': allModifiers.ninthSharp,
  'add♯9': allModifiers.ninthSharp,
  '#11': allModifiers.eleventhSharp,
  '♯11': allModifiers.eleventhSharp,
  'add#11': allModifiers.eleventhSharp,
  b13: allModifiers.thirteenthFlat,
  '♭13': allModifiers.thirteenthFlat,
  addb13: allModifiers.thirteenthFlat,
  'add♭13': allModifiers.thirteenthFlat
}, add7), {}, {
  2: allModifiers.add9,
  add2: allModifiers.add9,
  add3: allModifiers.add3,
  add4: allModifiers.add4,
  addb6: allModifiers.addb6,
  b6: allModifiers.addb6,
  6: allModifiers.add6,
  add6: allModifiers.add6,
  '6/9': allModifiers.add69,
  69: allModifiers.add69,
  96: allModifiers.add69,
  '9/6': allModifiers.add69,
  add9: allModifiers.add9,
  add11: allModifiers.add11,
  add13: allModifiers.add13,
  // special
  bass: allModifiers.bass,
  omit3: allModifiers.omit3,
  no3: allModifiers.omit3,
  omit5: allModifiers.omit5,
  no5: allModifiers.omit5,
  5: allModifiers.power,
  alt: allModifiers.alt,
  'alt.': allModifiers.alt,
  altered: allModifiers.alt
});
function getDerivedModifiers(source, modifierId, derivedFn) {
  return Object.keys(source).map(derivedFn).reduce(function (acc, curr) {
    acc[curr] = modifierId;
    return acc;
  }, {});
}
var modifiers_allVariants = Object.keys(allSymbols).sort(function (a, b) {
  return b.length - a.length;
});

/* harmony default export */ const modifiers = (allModifiers);
;// CONCATENATED MODULE: ./src/dictionaries/intervalsToSemitones.js
/* harmony default export */ const intervalsToSemitones = ({
  1: 0,
  2: 2,
  b3: 3,
  3: 4,
  4: 5,
  b5: 6,
  5: 7,
  '#5': 8,
  b6: 8,
  6: 9,
  bb7: 9,
  b7: 10,
  7: 11,
  b9: 13,
  9: 14,
  '#9': 15,
  11: 17,
  '#11': 18,
  b13: 20,
  13: 21
});
;// CONCATENATED MODULE: ./src/parser/filters/parseDescriptor.js
function parseDescriptor_toConsumableArray(arr) { return parseDescriptor_arrayWithoutHoles(arr) || parseDescriptor_iterableToArray(arr) || parseDescriptor_unsupportedIterableToArray(arr) || parseDescriptor_nonIterableSpread(); }
function parseDescriptor_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function parseDescriptor_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return parseDescriptor_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return parseDescriptor_arrayLikeToArray(o, minLen); }
function parseDescriptor_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function parseDescriptor_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return parseDescriptor_arrayLikeToArray(arr); }
function parseDescriptor_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }







/**
 * Convert the descriptor into a suite of intervals, semitones and intents
 *
 * @param {Array<('b5'|'#5'|'b9'|'#9'|'#11'|'b13')>} altIntervals
 * @param {Chord} chord
 * @returns {(Chord|Null)}
 */
function parseDescriptor(altIntervals, chord) {
  var allModifiers = [];
  if (chord.input.parsableDescriptor) {
    allModifiers = getModifiers(chord);
  }
  chord.input.modifiers = allModifiers;
  chord.normalized.intervals = getIntervals(allModifiers, altIntervals);
  chord.normalized.semitones = getSemitones(chord.normalized.intervals);
  chord.normalized.intents = getIntents(allModifiers);
  return chord;
}
function getModifiers(chord) {
  var parsableDescriptor = chord.input.parsableDescriptor;
  var modifiers = [];
  var descriptorRegex = new RegExp(modifiers_allVariants.map(escapeRegex).join('|'), 'g');
  var descriptorMatches = parsableDescriptor.match(descriptorRegex);
  var remainingChars = parsableDescriptor;
  var allModifiersId;
  if (descriptorMatches) {
    descriptorMatches.forEach(function (match) {
      allModifiersId = allSymbols[match];
      if (!Array.isArray(allModifiersId)) {
        allModifiersId = [allModifiersId];
      }
      allModifiersId.forEach(function (modifierId) {
        if (modifiers.includes(modifierId)) {
          return;
        }
        modifiers.push(modifierId);
        remainingChars = remainingChars.replace(match, '');
      });
    });
  }
  if (modifiers.length === 0) {
    throw new NoSymbolFoundError(chord);
  }
  if (remainingChars.trim().length > 0) {
    throw new InvalidModifierError(chord, remainingChars);
  }
  return modifiers;
}
function getIntervals(allModifiers, altIntervals) {
  if (allModifiers.includes(modifiers.power)) {
    return ['1', '5'];
  } else if (allModifiers.includes(modifiers.bass)) {
    return ['1'];
  }
  return uniq_default()(['1'].concat(parseDescriptor_toConsumableArray(getThird(allModifiers)), parseDescriptor_toConsumableArray(getFourth(allModifiers)), parseDescriptor_toConsumableArray(getFifths(allModifiers, altIntervals)), parseDescriptor_toConsumableArray(getSixth(allModifiers)), parseDescriptor_toConsumableArray(getSevenths(allModifiers)), parseDescriptor_toConsumableArray(getNinths(allModifiers, altIntervals)), parseDescriptor_toConsumableArray(getElevenths(allModifiers, altIntervals)), parseDescriptor_toConsumableArray(getThirteenths(allModifiers, altIntervals)))).sort(function (a, b) {
    return intervalsToSemitones[a] - intervalsToSemitones[b];
  });
}
function getThird(allModifiers) {
  var third = [];
  if (allModifiers.includes(modifiers.omit3)) {
    return [];
  }
  if (!hasOneOf(allModifiers, [modifiers.sus, modifiers.sus2])) {
    if (!hasMajorIntent(allModifiers)) {
      third.push('b3');
    } else if (!allModifiers.includes(modifiers.eleventh)) {
      third.push('3');
    }
  }
  if (allModifiers.includes(modifiers.add3)) {
    third.push('3');
  }
  return third;
}
function getFourth(allModifiers) {
  var fourth = [];
  if (hasOneOf(allModifiers, [modifiers.sus, modifiers.add4])) {
    fourth.push('4');
  }
  return fourth;
}
function getFifths(allModifiers, altIntervals) {
  var fifths = [];
  if (allModifiers.includes(modifiers.omit5)) {
    return [];
  }
  if (hasOneOf(allModifiers, [modifiers.dim, modifiers.halfDim, modifiers.fifthFlat]) || shouldAlter(allModifiers, altIntervals, 'b5')) {
    fifths.push('b5');
  }
  if (hasOneOf(allModifiers, [modifiers.aug, modifiers.fifthSharp]) || shouldAlter(allModifiers, altIntervals, '#5')) {
    fifths.push('#5');
  }
  if (!fifths.length && !allModifiers.includes(modifiers.thirteenthFlat)) {
    fifths.push('5');
  }
  return fifths;
}
function getSixth(allModifiers) {
  var sixth = [];
  if (hasOneOf(allModifiers, [modifiers.addb6])) {
    sixth.push('b6');
  }
  if (hasOneOf(allModifiers, [modifiers.add6, modifiers.add69]) && !isExtended(allModifiers) && !hasOneOf(allModifiers, [modifiers.halfDim])) {
    sixth.push('6');
  }
  return sixth;
}
function getSevenths(allModifiers) {
  var sevenths = [];
  if (hasOneOf(allModifiers, [modifiers.alt])) {
    sevenths.push('b7');
  }
  if (hasOneOf(allModifiers, [modifiers.seventh, modifiers.halfDim])) {
    if (allModifiers.includes(modifiers.dim)) {
      sevenths.push('bb7');
    } else if (allModifiers.includes(modifiers.halfDim)) {
      sevenths.push('b7');
    } else {
      sevenths.push(getMinorOrMajorSeventh(allModifiers));
    }
  } else if (hasOneOf(allModifiers, [modifiers.ninth, modifiers.eleventh, modifiers.thirteenth])) {
    sevenths.push(getMinorOrMajorSeventh(allModifiers));
  }
  if (allModifiers.includes(modifiers.add7)) {
    sevenths.push('7');
  }
  return sevenths;
}
function getMinorOrMajorSeventh(allModifiers) {
  return allModifiers.includes(modifiers.ma) ? '7' : 'b7';
}
function getNinths(allModifiers, altIntervals) {
  var ninth = [];
  if (hasOneOf(allModifiers, [modifiers.add69, modifiers.ninth, modifiers.eleventh, modifiers.thirteenth]) && hasNoneOf(allModifiers, [modifiers.ninthFlat, modifiers.ninthSharp])) {
    ninth.push('9');
  }
  if (hasOneOf(allModifiers, [modifiers.sus2, modifiers.add9])) {
    ninth.push('9');
  }
  if (hasOneOf(allModifiers, [modifiers.ninthFlat]) || shouldAlter(allModifiers, altIntervals, 'b9')) {
    ninth.push('b9');
  }
  if (hasOneOf(allModifiers, [modifiers.ninthSharp]) || shouldAlter(allModifiers, altIntervals, '#9')) {
    ninth.push('#9');
  }
  return ninth;
}
function getElevenths(allModifiers, altIntervals) {
  var elevenths = [];
  if (hasOneOf(allModifiers, [modifiers.thirteenth]) && !hasMajorIntent(allModifiers)) {
    elevenths.push('11');
  } else if (hasOneOf(allModifiers, [modifiers.eleventh, modifiers.add11])) {
    elevenths.push('11');
  }
  if (hasOneOf(allModifiers, [modifiers.eleventhSharp]) || shouldAlter(allModifiers, altIntervals, '#11')) {
    elevenths.push('#11');
  }
  return elevenths;
}
function getThirteenths(allModifiers, altIntervals) {
  var thirteenths = [];
  if (hasOneOf(allModifiers, [modifiers.add13, modifiers.thirteenth]) || hasOneOf(allModifiers, [modifiers.add6, modifiers.add69]) && isExtended(allModifiers) || hasOneOf(allModifiers, [modifiers.add6, modifiers.add69]) && hasOneOf(allModifiers, [modifiers.halfDim])) {
    thirteenths.push('13');
  }
  if (hasOneOf(allModifiers, [modifiers.thirteenthFlat]) || shouldAlter(allModifiers, altIntervals, 'b13')) {
    thirteenths.push('b13');
  }
  return thirteenths;
}
function shouldAlter(allModifiers, altIntervals, interval) {
  return allModifiers.includes(modifiers.alt) && altIntervals.includes(interval);
}
function hasMajorIntent(allModifiers) {
  return hasNoneOf(allModifiers, [modifiers.mi, modifiers.dim, modifiers.dim7, modifiers.halfDim]);
}
function isExtended(allModifiers) {
  return hasOneOf(allModifiers, [modifiers.seventh, modifiers.ninth, modifiers.eleventh, modifiers.thirteenth]);
}

// Based on https://stackoverflow.com/a/6969486
function escapeRegex(string) {
  return string.replace(/[.\-*+?^${}()|[\]\\]/g, '\\$&');
}
function getSemitones(allIntervals) {
  return allIntervals.map(function (interval) {
    return intervalsToSemitones[interval];
  }).sort(function (a, b) {
    return a - b;
  });
}

// intents will be used later at formatting for disambiguation of some potentially confusing cases
function getIntents(allModifiers) {
  return {
    major: hasMajorIntent(allModifiers),
    eleventh: allModifiers.includes(modifiers.eleventh),
    alt: allModifiers.includes(modifiers.alt)
  };
}
;// CONCATENATED MODULE: ./src/parser/chordParserFactory.js
function chordParserFactory_toConsumableArray(arr) { return chordParserFactory_arrayWithoutHoles(arr) || chordParserFactory_iterableToArray(arr) || chordParserFactory_unsupportedIterableToArray(arr) || chordParserFactory_nonIterableSpread(); }
function chordParserFactory_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function chordParserFactory_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return chordParserFactory_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return chordParserFactory_arrayLikeToArray(o, minLen); }
function chordParserFactory_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function chordParserFactory_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return chordParserFactory_arrayLikeToArray(arr); }
function chordParserFactory_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }



















/**
 * Create a chord parser function
 * @param {ParserConfiguration} [parserConfiguration]
 * @returns {function(String): MaybeChord}
 */
function chordParserFactory() {
  var parserConfiguration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var allAltIntervals = ['b5', '#5', 'b9', '#9', '#11', 'b13'];
  var allNotationSystems = ['english', 'german', 'latin'];
  var _parserConfiguration$ = parserConfiguration.notationSystems,
    notationSystems = _parserConfiguration$ === void 0 ? cloneDeep_default()(allNotationSystems) : _parserConfiguration$,
    _parserConfiguration$2 = parserConfiguration.altIntervals,
    altIntervals = _parserConfiguration$2 === void 0 ? cloneDeep_default()(allAltIntervals) : _parserConfiguration$2,
    _parserConfiguration$3 = parserConfiguration.customFilters,
    customFilters = _parserConfiguration$3 === void 0 ? [] : _parserConfiguration$3,
    _parserConfiguration$4 = parserConfiguration.key,
    key = _parserConfiguration$4 === void 0 ? '' : _parserConfiguration$4;
  checkAltIntervals(altIntervals, allAltIntervals);
  checkNotationSystems(notationSystems, allNotationSystems);
  helpers_checkCustomFilters(customFilters);
  checkKey(key);
  return parseChord;

  /**
   * Convert an input string into an abstract chord structure
   * @param {String} symbol - the chord symbol candidate
   * @returns {MaybeChord} A chord data object if the given string is successfully parsed.
   *   A chord parse failure object with an `error` property otherwise.
   */
  function parseChord(symbol) {
    var allErrors = [];
    if (!isInputValid(symbol)) {
      var e = new InvalidInputError();
      allErrors.push(formatError(e));
    }
    var allVariantsPerGroupCopy = cloneDeep_default()(allVariantsPerGroup).filter(function (variantsGroup) {
      return notationSystems.includes(variantsGroup.name);
    });
    var chord;
    var allFilters;
    var variants;
    if (!allErrors.length) {
      while (allVariantsPerGroupCopy.length && !chord) {
        variants = allVariantsPerGroupCopy.shift();
        allFilters = [initChord.bind(null, parserConfiguration), parseBase.bind(null, variants.notes), getParsableDescriptor, parseDescriptor.bind(null, altIntervals), checkIntervalsConsistency, normalizeNotes, normalizeDescriptor, formatSymbolParts, formatSymbol, nameIndividualChordNotes, formatNumeralSymbol.bind(null, key)].concat(chordParserFactory_toConsumableArray(customFilters));
        try {
          chord = chain(allFilters, symbol);
          if (chord) {
            chord.input.notationSystem = variants.name;
          } else {
            allErrors.push(getUnexpectedError(variants.name));
          }
        } catch (e) {
          allErrors.push(formatError(e, variants.name));
        }
      }
    }
    return chord ? chord : {
      error: allErrors
    };
  }
}
function checkAltIntervals(altIntervals, allAltIntervals) {
  checkArray('altIntervals', altIntervals, allAltIntervals, true);
}
function checkNotationSystems(notationSystems, allNotationSystems) {
  checkArray('notationSystems', notationSystems, allNotationSystems);
}
function checkArray(arrayName, arrayToTest, allowedValues, allowEmpty) {
  if (!Array.isArray(arrayToTest)) {
    throw new TypeError("'".concat(arrayName, "' should be an array"));
  }
  if (!allowEmpty && arrayToTest.length === 0) {
    throw new TypeError("'".concat(arrayName, "' cannot be empty"));
  }
  arrayToTest.forEach(function (system) {
    if (!allowedValues.includes(system)) {
      throw new TypeError("'".concat(system, "' is not a valid value for ").concat(arrayName));
    }
  });
}
function checkKey(key) {
  if (key !== '' && (!isString_default()(key) || !allKeys.includes(key))) {
    throw new TypeError("'".concat(key, "' is not a valid value for key"));
  }
}
function isInputValid(input) {
  return typeof input === 'string' && input.length > 0;
}
function getUnexpectedError(notationSystem) {
  var error = new UnexpectedError();
  return formatError(error, notationSystem);
}
function formatError(exceptionError, notationSystem) {
  return {
    type: exceptionError.name,
    chord: exceptionError.chord,
    message: exceptionError.message,
    notationSystem: notationSystem
  };
}

/**
 * @module chordParserFactory
 * Expose the chordParserFactory() function
 */
/* harmony default export */ const parser_chordParserFactory = (chordParserFactory);
;// CONCATENATED MODULE: ./src/renderer/filters/shortenNormalized.js
function shortenNormalized_typeof(o) { "@babel/helpers - typeof"; return shortenNormalized_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, shortenNormalized_typeof(o); }
function shortenNormalized_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function shortenNormalized_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? shortenNormalized_ownKeys(Object(t), !0).forEach(function (r) { shortenNormalized_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : shortenNormalized_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function shortenNormalized_defineProperty(obj, key, value) { key = shortenNormalized_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function shortenNormalized_toPropertyKey(arg) { var key = shortenNormalized_toPrimitive(arg, "string"); return shortenNormalized_typeof(key) === "symbol" ? key : String(key); }
function shortenNormalized_toPrimitive(input, hint) { if (shortenNormalized_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (shortenNormalized_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var shortDescriptors = {
  sus2: 'sus2',
  add2: '2',
  omit: 'no',
  ma: 'M',
  mi: 'm',
  dim: '°',
  aug7: '7+',
  eleventh: '11'
};

/**
 * @param {Chord} chord
 * @returns {Chord}
 */
function shortenNormalized(chord) {
  var descriptor;
  var chordChanges = chord.formatted.chordChanges;
  if (isSus2(chord)) {
    descriptor = shortDescriptors.sus2;
    chordChanges = [];
  } else if (isAdd2(chord)) {
    descriptor = shortDescriptors.add2;
    chordChanges = [];
  } else if (isAug7(chord)) {
    descriptor = shortDescriptors.aug7;
    chordChanges = [];
  } else {
    descriptor = chord.formatted.descriptor.replace('mi', shortDescriptors.mi).replace(/[m|M]a/, shortDescriptors.ma).replace('dim', shortDescriptors.dim);
    if (isEleventh(chord)) {
      descriptor = descriptor.replace(/7sus|9sus/, shortDescriptors.eleventh);
    }
  }
  chordChanges = chordChanges.map(function (change) {
    return change.replace(/[m|M]a/, shortDescriptors.ma).replace('omit', shortDescriptors.omit);
  });
  return shortenNormalized_objectSpread(shortenNormalized_objectSpread({}, chord), {}, {
    formatted: shortenNormalized_objectSpread(shortenNormalized_objectSpread({}, chord.formatted), {}, {
      descriptor: descriptor,
      chordChanges: chordChanges
    })
  });
}
function isSus2(chord) {
  return hasExactly(chord.normalized.intervals, ['1', '5', '9']);
}
function isAdd2(chord) {
  return hasExactly(chord.normalized.intervals, ['1', '3', '5', '9']);
}
function isAug7(chord) {
  return hasExactly(chord.normalized.intervals, ['1', '3', '#5', 'b7']);
}
function isEleventh(chord) {
  return chord.normalized.intents.eleventh;
}
// EXTERNAL MODULE: ../../node_modules/lodash/difference.js
var difference = __webpack_require__(7335);
var difference_default = /*#__PURE__*/__webpack_require__.n(difference);
;// CONCATENATED MODULE: ./src/renderer/filters/simplify.js








/**
 * @param {Chord} chord
 * @param {('none'|'max'|'core')} level
 * @returns {Chord}
 */
function simplify_simplify() {
  var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'none';
  var chord = arguments.length > 1 ? arguments[1] : undefined;
  if (level === 'none') {
    return chord;
  }
  var intervalsToRemove = {
    max: ['4', 'b5', '#5', '6', 'bb7', 'b7', '7', 'b9', '9', '#9', '11', '#11', 'b13', '13'],
    core: ['4', 'b9', '9', '#9', '11', '#11', 'b13', '13']
  };
  var intervals = difference_default()(chord.normalized.intervals, intervalsToRemove[level]);
  if (hasNoneOf(intervals, ['b3', '3'])) {
    intervals.push(chord.normalized.intents.major ? '3' : 'b3');
  }
  if (hasNoneOf(intervals, ['b5', '5', '#5'])) {
    intervals.push('5');
  }
  chord.normalized.intervals = intervals;
  chord.normalized.semitones = intervals.map(function (interval) {
    return intervalsToSemitones[interval];
  });
  chord.normalized.intents.eleventh = false;
  chord.normalized.intents.alt = false;
  if (level === 'max') {
    delete chord.normalized.bassNote;
  }
  var allFilters = [normalizeDescriptor, formatSymbolParts, nameIndividualChordNotes];
  return chain(allFilters, chord);
}
;// CONCATENATED MODULE: ./src/renderer/filters/transpose.js


function transpose(transposeValue, accidental, chord) {
  var _chord$normalized = chord.normalized,
    rootNote = _chord$normalized.rootNote,
    bassNote = _chord$normalized.bassNote;
  var rootSharp = convertToSharp(rootNote);
  chord.normalized.rootNote = transposeNote(rootSharp, transposeValue, accidental);
  chord.formatted.rootNote = chord.normalized.rootNote;
  if (bassNote) {
    var bassSharp = convertToSharp(bassNote);
    chord.normalized.bassNote = transposeNote(bassSharp, transposeValue, accidental);
    chord.formatted.bassNote = chord.normalized.bassNote;
  }
  return nameIndividualChordNotes(chord);
}
function transposeNote(note, value, accidental) {
  var noteIndex = notesSharp.indexOf(note);
  var transposedIndex = noteIndex + value;
  var octaves = Math.floor(transposedIndex / 12);
  var correctedTransposedIndex = transposedIndex - octaves * 12;
  var transposed = notesSharp[correctedTransposedIndex];
  return accidental === 'flat' ? sharpsToFlats[transposed] || transposed : transposed;
}
function convertToSharp(note) {
  return flatsToSharps[note] || note;
}
;// CONCATENATED MODULE: ./src/renderer/filters/convertNotationSystem.js
var translationTables = {
  german: {
    Ab: 'As',
    A: 'A',
    'A#': 'Ais',
    Bb: 'Hes',
    B: 'H',
    C: 'C',
    'C#': 'Cis',
    Db: 'Des',
    D: 'D',
    'D#': 'Dis',
    Eb: 'Es',
    E: 'E',
    F: 'F',
    'F#': 'Fis',
    Gb: 'Ges',
    G: 'G',
    'G#': 'Gis'
  },
  latin: {
    Ab: 'Lab',
    A: 'La',
    'A#': 'La#',
    Bb: 'Sib',
    B: 'Si',
    C: 'Do',
    'C#': 'Do#',
    Db: 'Reb',
    D: 'Re',
    'D#': 'Re#',
    Eb: 'Mib',
    E: 'Mi',
    F: 'Fa',
    'F#': 'Fa#',
    Gb: 'Solb',
    G: 'Sol',
    'G#': 'Sol#'
  }
};
var allNotationSystems = Object.keys(translationTables);

/**
 * @param {('auto'|'english'|'german'|'latin')} notationSystem
 * @param {Chord} chord
 * @returns {Chord|Null}
 */
function convertNotationSystem() {
  var notationSystem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'english';
  var chord = arguments.length > 1 ? arguments[1] : undefined;
  var finalNotationSystem = notationSystem === 'auto' ? chord.input.notationSystem : notationSystem;
  if (finalNotationSystem === 'english') return chord;
  if (!allNotationSystems.includes(finalNotationSystem)) return null;
  chord.formatted.rootNote = translationTables[finalNotationSystem][chord.formatted.rootNote];
  if (chord.formatted.bassNote) {
    chord.formatted.bassNote = translationTables[finalNotationSystem][chord.formatted.bassNote];
  }
  return chord;
}
;// CONCATENATED MODULE: ./src/renderer/printer/text.js
/**
 * @param {Chord} chord
 * @returns {String}
 */
function textPrinter(chord) {
  return chord && chord.formatted && chord.formatted.symbol ? chord.formatted.symbol : null;
}
;// CONCATENATED MODULE: ./src/renderer/printer/raw.js




/**
 * This printer returns a `chord` object reflecting the applied rendering filters. This object is very close to what would
 * be obtained by re-parsing the rendered chord.
 * It is basically the `chord` object in its current state, with 2 differences:
 * - a re-built `input` property to include all the changes applied during rendering (transposition, simplification, etc.)
 * - a removed `notationSystems` parser configuration since it may not be relevant anymore, especially if the rendering changed the notation system
 *
 * @param {Chord} chord
 * @returns {Chord}
 */
function rawPrinter(chord) {
  // make sure the chord can be re-parsed, whichever notation system was used for the rendering
  delete chord.parserConfiguration.notationSystems;
  var cloned = cloneDeep_default()(chord);

  // Re-parse the rendered chord to get the 'input' property right
  var textPrinted = textPrinter(chord);
  var parseChord = parser_chordParserFactory(chord.parserConfiguration);
  var reParsed = parseChord(textPrinted);
  cloned.input = reParsed.input;
  return cloned;
}
;// CONCATENATED MODULE: ./src/renderer/chordRendererFactory.js
function chordRendererFactory_typeof(o) { "@babel/helpers - typeof"; return chordRendererFactory_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, chordRendererFactory_typeof(o); }
function chordRendererFactory_toConsumableArray(arr) { return chordRendererFactory_arrayWithoutHoles(arr) || chordRendererFactory_iterableToArray(arr) || chordRendererFactory_unsupportedIterableToArray(arr) || chordRendererFactory_nonIterableSpread(); }
function chordRendererFactory_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function chordRendererFactory_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return chordRendererFactory_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return chordRendererFactory_arrayLikeToArray(o, minLen); }
function chordRendererFactory_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function chordRendererFactory_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return chordRendererFactory_arrayLikeToArray(arr); }
function chordRendererFactory_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }











/**
 * Create a pre-configured chord rendering function
 * @param {RendererConfiguration} [rendererConfiguration]
 * @returns {function(Chord): String}
 */
function chordRendererFactory() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$accidental = _ref.accidental,
    accidental = _ref$accidental === void 0 ? 'original' : _ref$accidental,
    _ref$customFilters = _ref.customFilters,
    customFilters = _ref$customFilters === void 0 ? [] : _ref$customFilters,
    _ref$notationSystem = _ref.notationSystem,
    notationSystem = _ref$notationSystem === void 0 ? 'english' : _ref$notationSystem,
    _ref$printer = _ref.printer,
    printer = _ref$printer === void 0 ? 'text' : _ref$printer,
    _ref$simplify = _ref.simplify,
    simplify = _ref$simplify === void 0 ? 'none' : _ref$simplify,
    _ref$transposeValue = _ref.transposeValue,
    transposeValue = _ref$transposeValue === void 0 ? 0 : _ref$transposeValue,
    _ref$useShortNamings = _ref.useShortNamings,
    useShortNamings = _ref$useShortNamings === void 0 ? false : _ref$useShortNamings;
  helpers_checkCustomFilters(customFilters);
  var allFilters = [];
  if (['max', 'core'].includes(simplify)) {
    allFilters.push(simplify_simplify.bind(null, simplify));
  }
  if (accidental !== 'original' || transposeValue !== 0) {
    allFilters.push(transpose.bind(null, transposeValue, accidental));
  }
  if (useShortNamings) {
    allFilters.push(shortenNormalized);
  }
  allFilters.push.apply(allFilters, [convertNotationSystem.bind(null, notationSystem), formatSymbol].concat(chordRendererFactory_toConsumableArray(customFilters)));
  return renderChord;

  /**
   * Render a chord structure
   * @param {Chord} chord - the chord structure to render
   * @returns {(String|Chord)} output depends on the selected printer: string for text printer (default), Chord for raw printer
   */
  function renderChord(chord) {
    if (!isValidChord(chord)) {
      return null;
    }
    var filteredChord = chain(allFilters, cloneDeep_default()(chord));
    return printer === 'raw' ? rawPrinter(filteredChord) : textPrinter(filteredChord);
  }
}
var isValidChord = function isValidChord(chord) {
  return chord && chordRendererFactory_typeof(chord) === 'object' && !chord.error && chord.input;
};

/**
 * @module chordRendererFactory
 * Expose the chordRendererFactory() function
 **/
/* harmony default export */ const renderer_chordRendererFactory = (chordRendererFactory);
;// CONCATENATED MODULE: ./src/index.js




})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=chord-symbol.js.map
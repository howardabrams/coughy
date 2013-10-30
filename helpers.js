// This file sets up some "global" variables and functions to make our
// code appear easier to read. Specifically, it "transfers" some of the
// underscore functions into the global namespace.
//
// Yes, this is considered evil, but this is just for my nefarious,
// teaching purposes.

__ = require('underscore');

print  = function() { console.log.apply(this, arguments); };

// Include some useful Lisp functions:
construct = function(h, t) { [ h ].concat(t); };
cons = construct;

// Import "most" of the Underscore library into the global namespace:
after = __.after;
all = __.all;
any = __.any;
bind = __.bind;
bindAll = __.bindAll;
chain = __.chain;
clone = __.clone;
collect = __.collect;
compact = __.compact;
compose = __.compose;
contains = __.contains;
countBy = __.countBy;
debounce = __.debounce;
defaults = __.defaults;
delay = __.delay;
detect = __.detect;
difference = __.difference;
drop = __.drop;
each = __.each;
// escape = __.escape;
every = __.every;
extend = __.extend;
filter = __.filter;
find = __.find;
findWhere = __.findWhere;
first = __.first;
flatten = __.flatten;
foldl = __.foldl;
foldr = __.foldr;
forEach = __.forEach;
functions = __.functions;
groupBy = __.groupBy;
has = __.has;
head = __.head;
identity = __.identity;
include = __.include;
indexBy = __.indexBy;
indexOf = __.indexOf;
initial = __.initial;
inject = __.inject;
intersection = __.intersection;
invert = __.invert;
invoke = __.invoke;
isArguments = __.isArguments;
isArray = __.isArray;
isBoolean = __.isBoolean;
isDate = __.isDate;
isElement = __.isElement;
isEmpty = __.isEmpty;
isEqual = __.isEqual;
// isFinite = __.isFinite;
isFunction = __.isFunction;
// isNaN = __.isNaN;
isNull = __.isNull;
isNumber = __.isNumber;
isObject = __.isObject;
isRegExp = __.isRegExp;
isString = __.isString;
isUndefined = __.isUndefined;
keys = __.keys;
last = __.last;
lastIndexOf = __.lastIndexOf;
map = __.map;
max = __.max;
memoize = __.memoize;
methods = __.methods;
min = __.min;
mixin = __.mixin;
noConflict = __.noConflict;
object = __.object;
omit = __.omit;
once = __.once;
pairs = __.pairs;
partial = __.partial;
pick = __.pick;
pluck = __.pluck;
random = __.random;
range = __.range;
reduce = __.reduce;
reduceRight = __.reduceRight;
reject = __.reject;
rest = __.rest;
result = __.result;
sample = __.sample;
select = __.select;
shuffle = __.shuffle;
size = __.size;
some = __.some;
sortBy = __.sortBy;
sortedIndex = __.sortedIndex;
tail = __.tail;
take = __.take;
tap = __.tap;
template = __.template;
throttle = __.throttle;
times = __.times;
toArray = __.toArray;
// unescape = __.unescape;
union = __.union;
uniq = __.uniq;
unique = __.unique;
uniqueId = __.uniqueId;
values = __.values;
where = __.where;
without = __.without;
wrap = __.wrap;
zip = __.zip;

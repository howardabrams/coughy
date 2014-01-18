mori = require("mori");

/**
 Can I hone a fairly descent prime number predicate?
 */
var is_prime = function(num) {
  if (num == 2 || num == 3) {
    return true;
  }
  else if (num < 2 || num % 2 === 0) {
    return false;
  }
  else {
    for (var i = 3; i < parseInt( Math.sqrt(num) ); i += 2) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
};

var assert_is_prime = function() {
  return (is_prime(2) === true &&
          is_prime(3) === true &&
          is_prime(4) === false &&
          is_prime(5) === true &&
          is_prime(6) === false &&
          is_prime(12) === false &&
          is_prime(13) === true );
};

count = mori.count;
empty = mori.empty;
first = mori.first;
rest = mori.rest;
seq = mori.seq;
conj = mori.conj;
cons = mori.cons;
find = mori.find;
nth = mori.nth;
last = mori.last;
assoc = mori.assoc;
dissoc = mori.dissoc;
get_in = mori.get_in;
update_in = mori.update_in;
assoc_in = mori.assoc_in;
fnil = mori.fnil;
disj = mori.disj;
pop = mori.pop;
peek = mori.peek;
hash = mori.hash;
get = mori.get;
has_key = mori.has_key;
is_empty = mori.is_empty;
reverse = mori.reverse;
take = mori.take;
drop = mori.drop;
partition = mori.partition;
partition_by = mori.partition_by;
iterate = mori.iterate;
into = mori.into;
subvec = mori.subvec;
take_while = mori.take_while;
drop_while = mori.drop_while;
group_by = mori.group_by;
interpose = mori.interpose;
interleave = mori.interleave;
concat = mori.concat;
flatten = mori.flatten;
keys = mori.keys;
vals = mori.vals;
prim_seq = mori.prim_seq;
map = mori.map;
mapcat = mori.mapcat;
reduce = mori.reduce;
reduce_kv = mori.reduce_kv;
filter = mori.filter;
remove = mori.remove;
some = mori.some;
every = mori.every;
equals = mori.equals;
range = mori.range;
repeat = mori.repeat;
repeatedly = mori.repeatedly;
sort = mori.sort;
sort_by = mori.sort_by;
into_array = mori.into_array;
subseq = mori.subseq;
rmap = mori.rmap;
rfilter = mori.rfilter;
rremove = mori.rremove;
rtake = mori.rtake;
rtake_while = mori.rtake_while;
rdrop = mori.rdrop;
rflatten = mori.rflatten;
list = mori.list;
vector = mori.vector;
array_map = mori.array_map;
hash_map = mori.hash_map;
sorted_set = mori.sorted_set;
sorted_set_by = mori.sorted_set_by;
sorted_map = mori.sorted_map;
sorted_map_by = mori.sorted_map_by;
zipmap = mori.zipmap;
is_list = mori.is_list;
is_seq = mori.is_seq;
is_vector = mori.is_vector;
is_map = mori.is_map;
is_set = mori.is_set;
is_collection = mori.is_collection;
is_sequential = mori.is_sequential;
is_associative = mori.is_associative;
is_counted = mori.is_counted;
is_indexed = mori.is_indexed;
is_reduceable = mori.is_reduceable;
is_seqable = mori.is_seqable;
is_reversible = mori.is_reversible;
union = mori.union;
intersection = mori.intersection;
difference = mori.difference;
is_subset = mori.is_subset;
is_superset = mori.is_superset;
partial = mori.partial;
comp = mori.comp;
pipeline = mori.pipeline;
curry = mori.curry;
juxt = mori.juxt;
knit = mori.knit;
sum = mori.sum;
inc = mori.inc;
dec = mori.dec;
is_even = mori.is_even;
is_odd = mori.is_odd;
each = mori.each;
identity = mori.identity;
constantly = mori.constantly;
clj_to_js = mori.clj_to_js;
js_to_clj = mori.js_to_clj;
zip = mori.zip;
mutable = mori.mutable;

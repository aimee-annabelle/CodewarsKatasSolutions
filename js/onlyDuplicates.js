function onlyDuplicates(str) {
    let set = new Set();
    let arr = Array.from(str);
    let duplicates = arr.filter(a => set.size === set.add(a).size);
    return arr.filter(a => duplicates.includes(a)).join('')
  }
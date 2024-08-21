function hamming(a, b) {
	const array1 = a.split("");
    const array2 = b.split("");
    let differenceCount = 0;
    array1.map((char,idx) => char !== array2[idx] ? differenceCount++ : char);
    return differenceCount;
}
hamming("espresso","Expresso")
/**
 * a = "I like turtles"
 * b = "I like turkeys"
 * Result: 3
 */
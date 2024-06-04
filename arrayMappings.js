    function map(callback) {
    if (Array.isArray(this)) {
        console.log(this);
    }
    console.log(callback);
    }

    [1, 2, 3].map((x) => x ** 2);

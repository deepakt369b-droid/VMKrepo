const rx = /drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?(?:export=view&)?id=)([a-zA-Z0-9_-]+)/;

const test1 = 'https://drive.google.com/file/d/1XzN20oUVgiigCSW-Ut07pWauyusH8PrV/view?usp=sharing';
console.log('test1 matcher:', test1.match(rx)?.[1]); // Should extract ID

const test2 = 'https://unsplash.com/photos/an-aerial-view-of-a-city-with-high-rise-buildings-9MsvwQVimvE';
console.log('test2 matcher:', test2.match(rx)); // Should be null

const test3 = 'https://share.google/pbbgEpoQ5171TYIhJ';
console.log('test3:', test3.match(rx)); // Should be null

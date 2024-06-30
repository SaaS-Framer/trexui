const getColor = (color: string) => {
    if (checkStrings("TailwindCSS", color)) return "#38BD6F"
    if (checkStrings("React Native", color)) return "#4338CA"
    return "#292b2e"
}

function checkStrings(A: string, B: string): boolean {
    // Remove whitespace from both strings
    A = A.replace(/\s/g, "");
    B = B.replace(/\s/g, "");

    // Convert strings to lowercase
    A = A.toLowerCase();
    B = B.toLowerCase();

    // Create character frequency objects for A and B
    const objA: { [key: string]: number } = {};
    const objB: { [key: string]: number } = {};

    for (let char of A) {
        objA[char] = (objA[char] || 0) + 1;
    }

    for (let char of B) {
        objB[char] = (objB[char] || 0) + 1;
    }

    // Check if characters in A exist in B
    for (let char in objA) {
        if (!(char in objB) || objA[char] > objB[char]) {
            return false;
        }
    }

    return true;
}

export { getColor }
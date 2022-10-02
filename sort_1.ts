type sortType = 'ASC' | 'DESC';

function bubbleSort<T>(source: T[], compareFunction: (a1: T, a2: T) => number, type: sortType){
    const clonedSource = [...source];
    let isDone = true;
    let temp;
    const len = clonedSource.length;
    if (len <= 1) {
        return clonedSource;
    }

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
           let current = clonedSource[j];
           let next = clonedSource[j + 1];
           let compareRes = compareFunction(current, next);
           if (type === 'ASC'?compareRes > 1 : compareRes < 1 ) {
                isDone = false;
                temp = clonedSource[j];
                clonedSource[j] = clonedSource[j + 1];
                clonedSource[j + 1] = temp;
           }
        }
        if (isDone) {
            break;
        }
    }
    return clonedSource;
}

function insertSort<T>(source: T[], compareFunction: (a1: T, a2: T) => number, type: sortType) {
    const clonedSource = [...source];
    const len = clonedSource.length;
    let current;
    for (let i = 1; i < len; i++) {
        current = clonedSource[i];
        let j = i - 1;
        for (; j >= 0; j--) {
            let compareRes = compareFunction(current, clonedSource[j]);
            if (type === 'ASC'? compareRes > 1 : compareRes < 1) {
                clonedSource[j + 1] = clonedSource[j];
            }else {
                break;
            }
        }
        clonedSource[j + 1] = current;
    }

}

function selectionSort<T>(source: T[], compareFunction: (a1: T, a2: T) => number, type: sortType) {
    const clonedSource = [...source];
    const len = clonedSource.length;
    let minIndex;
    for (let i = 0; i < len - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < len; j++) {
            let compareRes = compareFunction(clonedSource[minIndex], clonedSource[j])
            if (type === "ASC"? compareRes > 1: compareRes < 1) {
                minIndex = j;
            }
        }
        let temp = clonedSource[i];
        clonedSource[i] = clonedSource[minIndex];
        clonedSource[minIndex] = temp;
    }
}

function minMax<T>(s: T[]) {
    let target;
    for (let i = 0; i < s.length - 1; i++) {

    }
} 
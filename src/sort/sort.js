const sortDirection = {
    ascd: "ASCD",
    dscd: "DSCD"
}

const check = (itemOne, itemTwo, compare) => {
    return compare === sortDirection.ascd ? itemOne > itemTwo : itemOne < itemTwo;
}

const bubbleSort = (arr, compare = sortDirection.ascd) => {
    for(i = 0;  arr.length > i;  i++){
        for(j = i + 1;  arr.length > j; j++){
            if(check(arr[i], arr[j], compare)){
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr
}

const selectionSort = (arr, compare = sortDirection.ascd) => {
    for(i = 0;  arr.length > i;  i++){
        let index = i;
        for(j = i + 1;  arr.length > j; j++){
            if(check(arr[index], arr[j], compare)){
                index = j;
            }
        }
        if(index !== i){
            const temp = arr[index];
            arr[index] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}

module.exports = {bubbleSort, selectionSort,  sortDirection}
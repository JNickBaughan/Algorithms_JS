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

module.exports = {bubbleSort, sortDirection}
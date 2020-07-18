const matrixSpiral = (n) => {
    const result = []
    for(i = n; i > 0; i--){
        result.push([])
    }
    
    let count = 1;
    let startCol = 0;
    let endCol = n - 1;
    let startRow = 0;
    let endRow = n - 1;
    while(startCol <= endCol && startRow <= endRow){
        
        for(i = startCol; i <= endCol; i++){
            result[startRow][i] = count;
            count++;
        }

        startRow++;

        for(i = startRow; i <= endRow; i++){
            result[i][endCol] = count;
            count++
        }

        endCol--;
        
        for(i = endCol; i >= startCol; i--){
            result[endRow][i] = count;
            count++;
        }

        endRow--;

        for(i = endRow; i >= startRow; i--){
            result[i][startCol] = count;
            count++;
        }

       startCol++;
    }

    return result;
}

module.exports = { matrixSpiral}
const dataArray = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66]
function urutkanData(ascending, descending) {
    console.log(`Sebelumnya : ${dataArray}`)
    ascending = dataArray.sort();
    console.log(`Ascending : ${ascending}`)
    descending = ascending.reverse()
    console.log(`Descending : ${descending}`)
}
urutkanData()
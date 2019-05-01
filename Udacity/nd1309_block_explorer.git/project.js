/* Using BlockExplorer API to search Block Data */
// require the module
const be = require('blockexplorer');

/*
// Explore Block Data function
function getBlock() {
    // console.log("Hello Davis!");   
    var hash = blockexplorer.block(hash);
    console.log(hash);
    // Start by requesting the hash
    // Then, request the block and use console.log.
}
getBlock();
*/

be.blockIndex(2)
    .then((result) => {
        hash = result;
        console.log(hash);
        let parsedHash = JSON.stringify(JSON.parse(hash).blockHash);
        console.log(parsedHash);
    })
    .catch((err) => {
        throw err
    })

be.block("000000006a625f06636b8bb6ac7b960a8d03705d1ace08b1a19da3fdcc99ddbd")
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        throw err
    })
/*
(function theLoop(i) {
    setTimeout(function () {
        getBlock(i);
        i++;
        if (i < 3) theLoop(i);
    }, 3600);
})(0);
*/
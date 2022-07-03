function wave(str){
    let strArr = str.split('');
    let waveArr = [];

    for (let i=0; i<str.length; i++) {
        if (str[i] === ' ') {
            continue;
        }
        let crest = [];
        strArr.forEach((item, index, arr) => {
            if (index === i){
                crest.push(item.toUpperCase());
            } else {
                crest.push(item);
            }
        })
        waveArr.push(crest.join(''));
    }
    return waveArr;
}

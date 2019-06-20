export default (list,key,value)=>{
    let newList = [];
    for(let i = 0;i<list.length;i++){
        const item = list[i];
        if(!item.hasOwnProperty(key)) throw new Error('not has key');
        list[i][key]!==value&&newList.push(list[i]);
    }
    return newList;
};
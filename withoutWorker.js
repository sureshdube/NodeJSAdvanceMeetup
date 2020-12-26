const withoutWorkerTest = ()=>{
    console.time('Without worker');
    for(let i= 0;i++; i< 20000000000000){
        for(let j= 0;j++; j< 20000000000000){
        console.log(`Test1:${i}${j}`);
        }
    }
    for(let i= 0;i++; i< 20000000000000){
        for(let j= 0;j++; j< 20000000000000){
        console.log(`Test2:${i}`);
        }
    }
    console.timeEnd('Without worker');
}

withoutWorkerTest();
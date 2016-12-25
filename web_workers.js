var countNum = 0;
function count(){
    postMessage(countNum);//回传消息
    countNum++;
    setTimeout(count,1000);
}
count();
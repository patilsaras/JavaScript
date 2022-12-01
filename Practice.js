function disccount(amount,qty,dis)
{
    var actual=amount*qty;
    var withDis=(actual*dis)/100
    console.log(actual-withDis);
}
disccount(100,1,20);

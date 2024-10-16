const receivesAFunction = (aCallBack) => {
    aCallBack();

}
const returnsANamedFunction = () => {
    return function iAmNamed(){
        console.log('Ssup');
    };
};
const returnsAnAnonymousFunction = () => {
    return function(){
        console.log('hello');
    };
};
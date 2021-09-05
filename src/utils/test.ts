export const testSelf = (params: boolean) => {
    return function(target) {
        console.log('test-----', target);
        target.aaa = 111;
    
        return class extends target {
            congratulationMe() {
                console.log('myOrigin----');
            }
        }
    }
}
class MainService{
    constructor($q, $timeout){
        this.timeout = $timeout;
        this.q = $q;
    }
    getData(){
        var data = [
            {
                name: 'John',
                age: 65,
                city: 'Moscow'
            },
            {
                name: 'Alex',
                age: 70,
                city: 'Minsk'
            }
        ];
        var self = this;
        return new Promise((resolve, reject) => {
            self.timeout(()=>{
               resolve(data)
            }, 10)
        });
        //var d = this.q.defer();
        //this.timeout(() =>{
        //    d.resolve(data)
        //}, 1000);
        //return d.promise;
    }
}

MainService.$inject = ['$q','$timeout'];
export default MainService;
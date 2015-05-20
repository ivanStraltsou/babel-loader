class MainController{
    constructor(MainService, $scope){
        this.scope = $scope;
        this.MainService = MainService;
        this.init();
        this.edit = false;
        this.data = [];
        this.record = {};
    }
    init(){
        function callback(data){
            this.data = data;
            this.scope.$apply();
        }
        this.MainService.getData().then(callback.bind(this));
    }
    addRecord(){
        this.data.push(this.record);
        this.record = {};
    }
    setSelected(ind){
        this.selected = ind;
    }
    ifSelected(index){
        return this.selected == index;
    }
    save(){
        this.selected = null;
    }
}

MainController.$inject = ['MainService', '$scope'];

export default MainController;
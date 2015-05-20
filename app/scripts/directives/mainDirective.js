var template = require('./../../templates/mainDirective.html');
class mainDirective{
    constructor(){
        this.restrict = 'AE';
        this.controllerAs = 'DirCtrl';
        this.template = template;
    }
    controller($scope){
        this.number = 1;
        this.update = function(val){
            if(val !== undefined) {
                this.output = val * 2;
            }
        };
    }
    static directiveFactory(){
        mainDirective.instance =new mainDirective();
        return mainDirective.instance;
    }
}

export default mainDirective;
var template = require('./../../templates/rowDirective.html');
class rowDirective{
    constructor(){
        this.restrict = 'AE';
        this.controllerAs = 'RowCtrl';
        this.replace = true;
        this.template = template;
        this.scope = {
            model : '=',
             ind : '='
        }
    }
    controller($scope){
        this.setSelected = function(ind){
            this.selected = ind;
        };
        this.ifSelected = function(index){
            if (index === undefined) return false;
            return this.selected == index;
        };
        this.save = function(){
            this.selected = null;
        }
    }
    static directiveFactory(){
        rowDirective.instance =new rowDirective();
        return rowDirective.instance;
    }
}

export default rowDirective;
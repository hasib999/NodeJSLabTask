var employee=[];

module.exports=function(){
    return{
        getAllemployee:function(){
            return employee;
        },
        getEmployee:function(){
            for(var i=0;i<employee.length;i++){
                if(employee[i].id==id){
                    return employee[i];
                }
            }
        },
        createEmployee:function(emp){
            var id=employee.length+1;
            emp.id=id;
            employee.push(emp);
        },
    }
}
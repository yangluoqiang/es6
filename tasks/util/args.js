import yargs from 'yargs';
const args=yargs 
.option('production',{  //区分生产环境和线上环境
    boolean:true,  //在开发环境
    default:false, //默认是生产环境
    describe:"min all scripts" //用来描述

})

.option('watch',{   
    boolean:true,
    default:false,
    describe:"//监听开发环境中的文件"
})
.option('verbose',{   
    boolean:true,
    default:false,
    describe:"//要不要详细输出命令行日志"
})
.option('sourcemaps',{   //处理映射
    describe:'force the creation of sroucemaps' //强制生成sroucemaps

})
.option('port',{    //设置服务器端口
string:true,      //默认字符串类型
default:8080,    //默认端口
describe:'server port'
})
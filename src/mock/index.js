/**
 * Created by apple on 2019/9/7.
 */
import Mock from 'mockjs'

//负责拦截ajax请求,返回模板数据
Mock.mock('/books','get',{
   "status":200,
    "list|5":[
        {
            //"id|+1":1  字段值自增1
            //"navTitle|+1":[]  顺序从数组中取一个值作为当前字段的值
            //"views|1000-999999":0  随机一个指定范围的整数
            "navTitle|+1":['全部','儿童故事','启蒙课堂','其他','国学经典'],
            "content|5":[
                {
                    "id|+1":1,
                    "title":'@ctitle',
                    "desc":'@cparagraph(1)',
                    "views|1000-999999":0
                }
            ]
        }
    ]
});

//负责拦截ajax请求,返回模板数据
Mock.mock('/list','get',{
   "status":200,
    "list|5":[
        {
            //"id|+1":1  字段值自增
            //"navTitle|+1":[]  顺序从数组中取一个值作为当前字段的值
            //"views|1000-999999":0  随机一个指定范围的整数
            "navTitle|+1":['全部','儿童故事','启蒙课堂','其他','国学经典'],
            "content|5":[
                {
                    "id|+1":1,
                    "title":'@ctitle',
                    "desc":'@cparagraph(1)',
                    "views|1000-999999":0
                }
            ]
        }
    ]
});
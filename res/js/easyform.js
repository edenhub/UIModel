/**
 * Created by lab on 2015/4/30.
 */
function efCommon(_globalId){
    this._globalId = _globalId;
}

efCommon.prototype = {

    //全局Id，用户组件的索引
    _globalId:"",

    //组件的name属性
    _name:"",

    //组件的id
    _id:"",

    //组件的class属性
    _class:new Array(),

    //组件的style属性
    _style:"",

    //组件的xml标签
    _tag:"efCommon",

    //用json字符串反序列化对象
    rebuildObject:function(_jsonRef){},

    //返回属性的Json表示，用于持久化
    toJsonCode:function(){},

    //返回组件的Dom对象，jquery对象
    toJQueryObj:function(){},

    //返回组件的Xml表示
    toXml:function(){}
};

function efComponent(_globalId){
    this._globalId = _globalId;

    this._type = "";

    this._parent = null
}

efComponent.prototype = new efComponent();

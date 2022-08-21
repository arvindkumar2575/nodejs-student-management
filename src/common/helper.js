
const helper={};

helper.isEmpty = (str)=>{
    return str===undefined || str===null || str.length===0 || str==='';
}

module.exports = helper;
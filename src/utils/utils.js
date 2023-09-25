export default class utilsFunctions {
    constructor() {

    }
    convertToBarChartData(dataArr,trimLabel) {
        try {
            let keys = Object.keys(dataArr);
            let formatedData = [];
            if (dataArr && keys && keys.length > 0) {
                formatedData = keys.map((val) => {
                    let labelStr = val;
                    if(trimLabel){
                        labelStr = val.length>5?val.substring(0,3):val;
                    }
                    return { label: labelStr, data: dataArr[val] }
                })
            }
            return formatedData;
        }catch(e){
            console.log("ERROR : ",e);
        }
    }

    twoColListDataFormat(dataArr){
        try {
            let formatedData = [];
            if(dataArr && dataArr.length>0){
                let dataList = JSON.parse(JSON.stringify(dataArr));
                formatedData = dataList.map((val)=>{
                    val.status = val.stock?"In-Stock":"Out of Stock";
                    return val;
                })
            }
            return formatedData;
        }catch(e){
            console.log("ERROR : ",e);
        }
    }
}
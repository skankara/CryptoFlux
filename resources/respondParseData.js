var exports = module.exports = {};

exports.respondWithParsedDataList = (rawJsonData,currencyType) => {
  let priceList = [];
  let symbol,name,price,currency;
  rawJsonData.forEach((element, i) => {
     symbol = element.symbol;
     name = element.name;
     price = element.price;
     currency = currencyType;
     tempPriceObj = {"symbol":symbol,"name":name,"price":price,"currency":currency};
     priceList.push(tempPriceObj);
  });
  console.log("priceList : ", priceList);
}

const axios = require('axios');
const JSSoup = require('jssoup').default;
 
const requestHttp = async (url) => {
    const result = [];
    axios.get(url)
    .then(function (response) {
      // handle success
      var soup = new JSSoup(response.data); 
      var tag = soup.find('body').find("div","content_bg").find("section").find("div").find("div","items").find("div","items_list")
     const ids = tag.contents.map((entry)=>{
         return entry.attrs["data-item-id"];
     });
     result.push(ids);
    })
    .catch(function (error) {
      // handle error
      return undefined
      //console.log(error);
    });
return result;
}
const output = requestHttp('https://bina.az/baki/kiraye/menziller/2-otaqli?location_ids%5B%5D=34&location_ids%5B%5D=2&location_ids%5B%5D=1&location_ids%5B%5D=35&price_from=500&price_to=850');
console.log(output)

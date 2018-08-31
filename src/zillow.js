import { xml2json } from 'xml-js';

export default function callZillow(addressObj) {
    const addressFromHomeVal = addressObj.address;
    const cityStateFromHomeVal = addressObj.cityState;

    let zillowResponse = {
        address: '',
        bathrooms: '',
        bedrooms: '',
        yearBuilt: '',
        finishedSqFt: '',
        zestimate: ''
    };

    // Personal Heroku instance of cors-anywhere.herokuapp.com
    const proxyUrl = 'https://peaceful-gorge-67298.herokuapp.com/',
          zillowURL = `https://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=${process.env.REACT_APP_ZILLOW_API_KEY}&address=${addressFromHomeVal}&citystatezip=${cityStateFromHomeVal}`;

    return fetch(proxyUrl + zillowURL)
        .then((result) => {
            return result.text();
        }).then((jsonResult) => {
            const jsonString = xml2json(jsonResult.toString(), {compact: true, spaces: 4});
            const obj = JSON.parse(jsonString);

            if (obj["SearchResults:searchresults"]["response"]) {
                zillowResponse.address = obj["SearchResults:searchresults"]["response"]["results"]["result"]["address"];
                zillowResponse.bathrooms = obj["SearchResults:searchresults"]["response"]["results"]["result"]["bathrooms"];
                zillowResponse.bedrooms = obj["SearchResults:searchresults"]["response"]["results"]["result"]["bedrooms"];
                zillowResponse.yearBuilt = obj["SearchResults:searchresults"]["response"]["results"]["result"]["yearBuilt"];
                zillowResponse.finishedSqFt = obj["SearchResults:searchresults"]["response"]["results"]["result"]["finishedSqFt"];
                zillowResponse.zestimate = obj["SearchResults:searchresults"]["response"]["results"]["result"]["zestimate"];
                return zillowResponse;
            }
        });

}
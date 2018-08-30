import { xml2json } from 'xml-js';

export default function callZillow(addressObj) {
    const address = addressObj.address;
    const cityState = addressObj.cityState;

    let zillowResponse = {
        address: '',
        bathrooms: '',
        bedrooms: '',
        yearBuilt: '',
        finishedSqFt: '',
        zestimate: ''
    };

    const zillowURL = `http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=X1-ZWz18e52ev79xn_1d5w6&address=${address}&citystatezip=${cityState}`;

    return fetch(zillowURL)
        .then((result) => {
            return result.text();
        }).then((jsonResult) => {
            const jsonString = xml2json(jsonResult.toString(), {compact: true, spaces: 4});
            const obj = JSON.parse(jsonString);

            if (obj["SearchResults:searchresults"]["response"] !== null) {
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

// what is async and await?
/**
 * Async and Await is moder JS ES6.
 * Async and Await mitigate the issue of your JS native behavior of compiling the code to your browser without understanding time complexity in API calls
 * In better words, if oyu are declaring an async function you are instructing the code that this will be an async opreation, thefore it might take sme time
 * not sure how long, not sure how big is the response. For this reason JS needs to know in advance that this will be an async operation.
 * So, if you have an async function you must await the response, by using the keyword await.
 */

const fetchData = async () => {
    const response =  await fetch(
      'https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json'
    );
    // The response needs to be parsed to a json object to we can successfully utilize the data and present it.
    const data = await response.json();
    return data;
  };
  
  export default fetchData;
const getData = async () => {
  try {
    //await means this initialization waits until data fetched
    const apiData = await fetch("https://jsonplaceholder.typicode.com/todos");
    //apiData.ok returns true if the data fetched successfully
    if (!apiData.ok) throw new Error(apiData.status);
    //this initialize waits untill converts all fetched data to json format
    const data = await apiData.json();
    return data;
  } catch (e) {
    return e;
  }
};
//async functions always work like promisses and always return a promise
//we can get the result data by uning the then method
getData()
  .then((res) => console.log(res))
  .catch((e) => console.log(e));

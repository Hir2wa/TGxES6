var data = {
    id: 1,
    items: [
      {id: 2},
      {id: 3, items: [
        {id: 4},
        {id: 5}
      ]}
    ]
  }
  

  function dataset(data) {
    let result = [data.id]; 

    if (Array.isArray(data.items)) { 
        let extractedIds = data.items.map(dataset); // Recursively process nested objects
        result = result.concat(...extractedIds); // Flatten the nested arrays
    }

    return result;
}


console.log(dataset(data));

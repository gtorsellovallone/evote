function populateList(route, callback) {
    axios.get(route)
    .then(function (response) {
        // handle success
        console.log(response);
        callback({state: "ok", msg: "populateList executed", data: response});
    })
    .catch(function (error) {
        // handle error
        console.log(error);
        callback({state: "error", msg: "populateList error", data: error});
    });
}
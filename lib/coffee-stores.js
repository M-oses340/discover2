

function getUrlForCoffeeStores(_latlong, _query, _limit) {
    return 'https://api.foursquare.com/v3/places/search?query=${query}&ll=${latlong}&limit=${limit}';

}

export const fetchCoffeeStores = async () =>{
    const options = {
     method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:"fsq3TzbDW6rUbNxpyzR6dBcKkc6J3I/CO1GfTGIo+sM1bYg=",
        },
    };
      
    const response = await fetch(
        getUrlForCoffeeStores(
            "-1.3059509260459738%2C36.823351090905305",
            "coffee",
            6
        ),
     options
    );
    const data = await response.json();
    return data.results;

    
     
    //.catch(err => console.error(err))
}
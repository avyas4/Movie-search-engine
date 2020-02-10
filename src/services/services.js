import Constants from "../constants/AppConstants";

async function services(search, title, page) {
    try {
        const params = new URLSearchParams([
            ['apikey', Constants.API_KEY],
            ['s', search],
            ['t', title],
            ['page', page]
        ]);
        const response = await fetch(Constants.URL + params);
        const json = await response.json();
        return json;
    } catch (e) {
        return e;
    }
}

export default services;

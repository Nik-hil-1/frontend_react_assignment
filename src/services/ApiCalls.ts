import axios from "axios";
import IDataList from "../models/IDataList";

const getDataFromServer = (section : string) => {

    let url =  `http://localhost:3001/data.json${section}`;

        return axios.get<IDataList[]>(url)
        .then(response => response.data)
}

const addToFavourites = (movieData: Omit<IDataList, "id">) => {
    return axios.post<IDataList>(`http://localhost:3001/data.json/favourite`, movieData, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.data)
}

const removeFromFavourites = (id : string | number) => {
    return axios.delete<IDataList>(`http://localhost:3001/data.json/favourite/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.data)
}

export { getDataFromServer, addToFavourites, removeFromFavourites };
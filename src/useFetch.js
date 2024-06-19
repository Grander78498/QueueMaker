import { useState, useEffect } from 'react';

const useFetch = (url) => {
    let [data, setData] = useState(null);
    let [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        setTimeout(() => fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error("Error in connecting to db");
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsFetching(false);
            })
            .catch(err => {
                console.log(err.message);
                setIsFetching(false);
            }), 10);
    }, [url]);

    return [data, isFetching];
}

export default useFetch;
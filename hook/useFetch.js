import { useState, useEffect } from "react";
import axios from "axios";
import myData from '/Users/richella/Desktop/react_native_jobs/hook/data';
import myDetail from '/Users/richella/Desktop/react_native_jobs/hook/detail_data';
// import { RAPID_API_KEY } from '@env';

// const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
          'X-RapidAPI-Key': '8152f7e528msh3a496e00376224bp1de84ejsn859d66feb2e0',
        //   'X-RapidAPI-Key': '',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {...query},
    };
    const fetchData = async () => {
        setIsLoading(true);

        // try {
        //     const response = await axios.request(options);
        //     // console.log(response)
        //     setData(response.data.data);
        //     setIsLoading(false);
        // } catch (error) {
        //     setError(error);
        //     alert('There is an error');
        // } finally {
        //     setIsLoading(false);
        // }
        switch (endpoint) {
            case 'search':
                setData(myData.data);
                break;
            case 'job-details':
                setData(myDetail.data);
                break;
            default:
                setData(myData.data);
        }
        setIsLoading(false);
    }
    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch };
}

export default useFetch;  
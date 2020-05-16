import React, {useEffect, useState} from 'react'
import axios from 'axios'

function useAxiosGet(url) {
    const [request, setRequest] = useState({
        loading : false,
        data: null,
        error:false
    })

    // use effect to call api once, if you're calling the api without use effect, it will be calling over and over 
    useEffect(() => {
        setRequest({
            loading: true,
            data: null,
            error:false
        })
        axios.get(url)
            .then(response => {
                setRequest({
                    loading : false,
                    data: response.data,
                    error:false
                })
        }).catch(() => {
            setRequest({
                loading : false,
                data: null,
                error:true
            })
        })
    }, [url])

    return request
}

export default useAxiosGet
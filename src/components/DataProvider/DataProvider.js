import React, {useEffect, useState} from 'react';

export default ( {url, renderContent} ) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => {
                setData(json)
            })
    });

    return <>{renderContent(data)}</>

}

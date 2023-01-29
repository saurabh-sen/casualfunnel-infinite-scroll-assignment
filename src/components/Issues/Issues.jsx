import React, { useEffect, useState, useRef } from 'react'
import IssueThread from '../IssueThread/IssueThread';
import Loading from "../Loading/Loading"

const Issues = () => {

    const target = useRef(null)
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    const dataLoader = async (page) => {
        return await fetch(
            `https://api.github.com/repos/facebook/react/issues?page=${page}`
        ).then((response) => response.json()).then((data) => data);
    };

    const createObserver = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setLoading(true);
                    dataLoader(page).then((newItem) => {
                        setData((prev) => [...prev, ...newItem]);
                        setLoading(false);
                        setPage((prev) => prev + 1);
                    });
                }
            });
        });

        return observer;
    };

    useEffect(() => {
        const observer = createObserver();
        observer.observe(target.current);
        return () => observer.disconnect();
    }, [page]);

    return (
        <>
            {data?.map((data, i) => <IssueThread key={i} data={data} />)}
            {loading && <Loading />}
            <div ref={target} />
        </>
    )
}

export default Issues
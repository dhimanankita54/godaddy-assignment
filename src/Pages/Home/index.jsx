import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const fetchData = useMemo(() => async () => {
        try {
            let response = await axios.get("https://api.github.com/orgs/godaddy/repos");
            setData(response?.data);
        }
        catch (error) {
            console.log("Error fetching data:", error)
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <div className='flex w-full flex-wrap items-center justify-center gap-4 p-8'>
            {data?.map((repo, index) => (
                <div
                    key={index}
                    className="w-full lg:w-[49%] xl:w-[32%] bg-neutral-900 rounded-lg p-4 cursor-pointer"
                    onClick={() => navigate(`/${repo?.id}`, {
                        state: {
                            repoData: {
                                name: repo?.name,
                                description: repo?.description,
                                html_url: repo?.html_url,
                                language: repo?.language,
                                forks: repo?.forks,
                                open_issues: repo?.open_issues,
                                watchers: repo?.watchers,
                            }
                        }
                    })}
                >
                    <p className='text-lg capitalize font-medium font-open-sans tracking-wide text-wrap break-all'>
                        {index + 1}. {repo?.name}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default Home

import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";


const Details = () => {
    const location = useLocation();
    const navigate = useNavigate();
    let repoData = location?.state?.repoData || {};

    return (
        <div className='p-6 md:p-10 lg:p-16 xl:p-20'>

            <button
                className='px-6 py-1 border rounded-md mb-8 flex items-center justify-center gap-2'
                onClick={() => navigate("/")}
            >
                <FaArrowLeft />
                Back
            </button>

            <p className='text-4xl capitalize font-bold tracking-wide font-open-sans'>
                {repoData?.name}
            </p>

            <p className='text-xl font-medium tracking-wide font-open-sans mt-4'>
                {repoData?.description}
            </p>

            <Link to={repoData?.html_url} target='_blank' className='mt-4 text-base text-blue-500 tracking-wide  font-open-sans font-medium flex w-fit items-center justify-center gap-2'>
                <FaExternalLinkAlt />
                Github Repo
            </Link>

            <p className='font-bold text-2xl flex flex-col gap-2 tracking-wide font-open-sans mt-8'>
                Language Used:
                <span className='text-xl font-medium'>{repoData?.language}</span>
            </p>

            <div className='mt-8 flex flex-col items-start justify-start gap-2'>
                <p className='text-base font-medium normal-case font-open-sans'>Forks: {repoData?.forks}</p>
                <p className='text-base font-medium normal-case font-open-sans'>Open Issues: {repoData?.open_issues}</p>
                <p className='text-base font-medium normal-case font-open-sans'>Watchers: {repoData?.watchers}</p>
            </div>

        </div>
    )
}

export default Details

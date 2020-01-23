import React from 'react';

interface IIcon {
    type: "done" | "delete" | "remove" | "edit";
}

const Icon: React.FC<IIcon> = React.memo(({ type }) => <>
    {
        type === "done" && <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                fill="none"
                d="M0 0h24v24H0z"
            />
            <path
                d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
            />
        </svg>
    }
    {
        type === "delete" && <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                fill="none"
                d="M0 0h24v24H0V0z"
            />
            <path
                d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 
                   2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41
                   14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1
                   1H5v2h14V4z" />
            <path 
                fill="none"
                d="M0 0h24v24H0z"
            />
        </svg>
    }
    {
        type === "remove" && <svg xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
        >
            <path 
                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59
                     12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59
                     13.41 12z"/>
            <path 
                d="M0 0h24v24H0z"
                fill="none"
            />
        </svg>
    }
    {
        type === "edit" && <svg 
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path 
                    d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71
                     7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41
                     0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
            <path 
                d="M0 0h24v24H0z"
                fill="none"
            />
        </svg>
    }
</>);

export default Icon;

import React, {useEffect} from 'react';
import Link from "next/link";
import {useRouter} from "next/router";

function NotFound() {
    const router = useRouter();
    useEffect(() => {
        console.log('useEffect ran');
        setTimeout(() => {
            router.push('/');
        }, 3000);
    })
    return (
        <div className="not-found">
            <h1>Oooops...</h1>
            <h2>This page cannot be found</h2>
            <p>You are being redirected to the <Link href="/">homepage</Link>...</p>
        </div>
    );
}

export default NotFound;
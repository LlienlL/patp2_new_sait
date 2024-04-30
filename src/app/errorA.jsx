'use client'

import { useEffect } from "react"
import { useRouter } from 'next/router'

export default function Error({ error, reset }) {
    router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push("/about")
        }, 3000);
    }, []);

    return (
        <div>
            <h2>Произошла ошибка. Вы будете перенаправлены на главную страницу</h2>
        </div>
    )
}
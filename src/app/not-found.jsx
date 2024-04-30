import { redirect } from 'next/navigation'

export default async function NotFound({ error, reset }) {
    redirect("/about", "replace");
}
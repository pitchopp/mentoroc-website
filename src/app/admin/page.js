import { redirect } from 'next/navigation'


export default async function Admin() {
    redirect(process.env.PRIVATE_ADMINE_URL)
}

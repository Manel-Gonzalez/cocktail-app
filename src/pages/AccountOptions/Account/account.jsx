import { useState, useEffect } from 'react'
import { supabase } from "../../../supabaseClient";
import "./account.css"

export default function Account() {
    const [loading, setLoading] = useState(true)
    const [username, setUsername] = useState(null)
    const [avatar_url, setAvatarUrl] = useState(null)
    const session = JSON.parse(localStorage.getItem('sb-duikvocbgzzeryjwusap-auth-token'))
    useEffect(() => {
        async function getProfile() {
            setLoading(true)
            const { user } = session

            let { data, error } = await supabase
                .from('profiles')
                .select(`username, avatar_url`)
                .eq('id', user.id)
                .single()

            if (error) {
                console.warn(error)
            } else if (data) {
                setUsername(data.username)
                setAvatarUrl(data.avatar_url)
            }
            setLoading(false)
        }

        getProfile()
    }, [])

    async function updateProfile(event) {
        event.preventDefault()

        setLoading(true)
        const { user } = session

        const updates = {
            id: user.id,
            username,
            avatar_url,
            updated_at: new Date(),
        }

        let { error } = await supabase.from('profiles').upsert(updates)

        if (error) {
            alert(error.message)
        }
        setLoading(false)
    }

    return (
        <div>
            <h2>Perfil</h2>
            <form onSubmit={updateProfile} className="form-widget">
                <div className='emailBox'>
                    <label className='labels' htmlFor="email">Email</label>
                    <input id="email" type="text" value={session?.user?.email} disabled />
                </div>
                <div className='nameBox'>
                    <label className='labels' htmlFor="username">Name</label>
                    <input
                        id="username"
                        type="text"
                        required
                        value={username || ''}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>


                <div>
                    <button className="button block primary" type="submit" disabled={loading}>
                        {loading ? 'Loading ...' : 'Update'}
                    </button>
                </div>
            </form>
        </div>


    )
}

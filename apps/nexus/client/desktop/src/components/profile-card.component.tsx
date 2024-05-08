import { useStore } from '@nanostores/react'
import { $User } from '../stores'
import { Utils } from '../common'

const ProfileCard = () => {
    const user = useStore($User)

    return (
        <div className="flex g-4">
            <div className="flex-center rounded-full h-10 w-10 bg-[#DDE8FE]">
                <span className="font-medium">{user && user.profile.firstname.charAt(0)}</span>
            </div>
            <div>
                <h4 id="name">
                    {user && user.profile.firstname} {user && Utils.formatLastname(user.profile.lastname)}
                </h4>
                <span className="text-xs">{user && user.email}</span>
            </div>
        </div>
    )
}

export default ProfileCard

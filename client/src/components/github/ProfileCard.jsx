const ProfileCard = ({ user }) => {

  return (
    <div className="card p-6 h-fit sticky top-24">

      <div className="flex flex-col items-center text-center">

        <img
          src={user.avatar_url}
          alt="avatar"
          className="w-28 h-28 rounded-full border-4 border-indigo-500 shadow-lg"
        />

        <h2 className="text-2xl font-bold mt-5 break-words">
          {user.name}
        </h2>

        <p className="text-indigo-400 mt-1">
          @{user.login}
        </p>

        <p className="text-sm text-slate-400 mt-4 leading-7">
          {user.bio || 'No bio available'}
        </p>

        <div className="grid grid-cols-3 gap-4 mt-8 w-full">

          <div>
            <h3 className="font-bold text-2xl">
              {user.followers}
            </h3>

            <p className="text-slate-400 text-sm mt-1">
              Followers
            </p>
          </div>

          <div>
            <h3 className="font-bold text-2xl">
              {user.following}
            </h3>

            <p className="text-slate-400 text-sm mt-1">
              Following
            </p>
          </div>

          <div>
            <h3 className="font-bold text-2xl">
              {user.public_repos}
            </h3>

            <p className="text-slate-400 text-sm mt-1">
              Repos
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default ProfileCard
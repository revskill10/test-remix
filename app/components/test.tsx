import React from 'react'
import { useData } from '~/hooks/use-data'
const UserWelcome = () => {
  const { data: userDetails, error } = useData({ suspense: true })

  if (error) return <div>Error</div>
  return (
    <div>
      <p>
        Welcome <span className="user-name">{userDetails.name}</span>, here are
        your Todos for today
      </p>
      <small>Completed todos have a line through them</small>
    </div>
  )
}

export default UserWelcome

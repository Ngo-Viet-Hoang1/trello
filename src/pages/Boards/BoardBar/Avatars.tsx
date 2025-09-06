import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'

export default function Avatars() {
  return (
    <AvatarGroup total={24} sx={{ '& .MuiAvatar-root': { fontSize: 12 } }}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sizes="20px" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
    </AvatarGroup>
  )
}

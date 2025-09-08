import AttachFileIcon from '@mui/icons-material/AttachFile'
import CommentIcon from '@mui/icons-material/Comment'
import GroupIcon from '@mui/icons-material/Group'
import Button from '@mui/material/Button'
import TrelloCard from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import type ICard from '~/interfaces/Card'

function Card({ card }: { card: ICard }) {
  const isShowCardActions =
    card.memberIds?.length > 0 &&
    card.comments?.length > 0 &&
    card.attachments?.length > 0

  return (
    <TrelloCard
      sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0, 0, 0, 0.1)',
        overflow: 'unset',
      }}
    >
      {card.cover && (
        <CardMedia
          component="img"
          alt={card.title}
          height="140"
          image={card.cover}
          sx={{
            borderTopLeftRadius: 'inherit',
            borderTopRightRadius: 'inherit',
          }}
        />
      )}

      <CardContent sx={{ p: 1.5, '&:last-child': { pb: 1.5 } }}>
        <Typography>{card.title}</Typography>
      </CardContent>

      {isShowCardActions && (
        <CardActions sx={{ p: '0 4px 8px 4px' }}>
          {card.memberIds?.length > 0 && (
            <Button size="small" startIcon={<GroupIcon />}>
              {card.memberIds.length}
            </Button>
          )}
          {card.comments?.length > 0 && (
            <Button size="small" startIcon={<CommentIcon />}>
              {card.comments.length}
            </Button>
          )}
          {card.attachments?.length > 0 && (
            <Button size="small" startIcon={<AttachFileIcon />}>
              {card.attachments.length}
            </Button>
          )}
        </CardActions>
      )}
    </TrelloCard>
  )
}

export default Card

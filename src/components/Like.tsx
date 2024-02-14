import { useEffect, useState } from 'react';
import { IconButton, Badge } from '@mui/material';
import { ThumbUpAlt, ThumbDownAlt } from '@mui/icons-material';
import { useAppDispatch } from '../store/store';
import { addLikeCount } from '../store/postSlice';

interface LikeProps {
  color: string;
  type: string;
  postId: number | string;
  currentCount: number;
}

export default function Like({ color, type, postId, currentCount }: LikeProps) {
  const [count, setCount] = useState(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (count) {
      dispatch(addLikeCount({ type, id: postId, count }));
    }
  }, [count]);

  return (
    <IconButton
      aria-label='reduce'
      onClick={() => {
        setCount(count + 1);
      }}
    >
      <Badge
        color={color}
        badgeContent={currentCount}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        sx={{
          '& .MuiBadge-badge': { fontSize: 10, height: 17, minWidth: 15 },
        }}
      >
        {type === 'like' && <ThumbUpAlt fontSize='large' />}
        {type === 'dislike' && <ThumbDownAlt fontSize='large' />}
      </Badge>
    </IconButton>
  );
}

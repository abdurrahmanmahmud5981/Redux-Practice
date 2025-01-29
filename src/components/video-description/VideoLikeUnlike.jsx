import { useDispatch } from "react-redux";
import Like from "../../assets/like.svg";
import UnLike from "../../assets/unlike.svg";

import { dislike, like } from "../../features/video/videoSlice";
export default function VideoLikeUnlike({ likes, dislikes }) {
  const dispatch = useDispatch();

  const handleLikeClick = () => {
    dispatch(like());
  };

  const handleUnlikeClick = () => {
    dispatch(dislike());
  };
  return (
    <div className="flex gap-10 w-48">
      <div className="flex gap-1">
        <div className="shrink-0">
          <button onClick={handleLikeClick}>
            <img className="w-5 block" src={Like} alt="Like" />
          </button>
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {likes}
        </div>
      </div>
      <div className="flex gap-1">
        <div className="shrink-0">
          <button onClick={handleUnlikeClick}>
            <img className="w-5 block" src={UnLike} alt="Unlike" />
          </button>
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {dislikes}
        </div>
      </div>
    </div>
  );
}

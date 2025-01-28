import { useSelector } from "react-redux";
import Like from "../../assets/like.svg";
import UnLike from "../../assets/unlike.svg";
export default function VideoLikeUnlike({ likes, dislikes }) {
  // const {likes, unlikes} = useSelector(state=>state.video);
  // const isLiked = likes.includes(userId);
  // const isUnliked = unlikes.includes(userId);

  // const handleLikeClick = () => {
  //     if(isLiked) dispatch(unlikeVideo(videoId));
  //     else dispatch(likeVideo(videoId));
  // };

  // const handleUnlikeClick = () => {
  //     if(isUnliked) dispatch(unlikeVideo(videoId));
  //     else dispatch(likeVideo(videoId));
  // };
  return (
    <div className="flex gap-10 w-48">
      <div className="flex gap-1">
        <div className="shrink-0">
          <img className="w-5 block" src={Like} alt="Like" />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {likes}
        </div>
      </div>
      <div  className="flex gap-1">
        <div className="shrink-0">
          <img className="w-5 block" src={UnLike} alt="Unlike" />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {dislikes}
        </div>
      </div>
    </div>
  );
}

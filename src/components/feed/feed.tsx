import { IPhoto } from "@/actions/photos-get";
import FeedPhotos from "./feed-photos";

export default function Feed({ photos }: { photos: IPhoto[] }) {
  return (
    <div>
      <FeedPhotos photos={photos} />
    </div>
  );
}

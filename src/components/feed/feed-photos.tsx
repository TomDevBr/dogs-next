import { IPhoto } from "@/actions/photos-get";
import Image from "next/image";
import Link from "next/link";
import styles from "./feed.module.css";

export default function FeedPhotos({ photos }: { photos: IPhoto[] }) {
  return (
    <div>
      <h1>Feed</h1>
      <ul className={`${styles.feed} animeLeft`}>
        {photos.map((photo) => (
          <li className={styles.photo} key={photo.id}>
            <Link href={`/photo/${photo.id}`} scroll={false}>
              <Image
                src={photo.src}
                alt={photo.title}
                width={1500}
                height={1500}
                sizes="80vw"
              />
              <span className={styles.visualizacao}>{photo.acessos}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

import postImg1 from '../../public/image-instagram-post-1.jpg'
import postImg2 from '../../public/image-instagram-post-2.jpg'
import postImg3 from '../../public/image-instagram-post-3.jpg'
import postImg4 from '../../public/image-instagram-post-4.jpg'
import postImg5 from '../../public/image-instagram-post-5.jpg'
import postImg6 from '../../public/image-instagram-post-6.jpg'

export function PostInstagram() {
  return (
    <div className="mx-auto grid grid-cols-2 gap-2 md:grid md:grid-cols-3 md:gap-4">
      <div className="h-36 w-36 bg-bege-400 transition duration-200 hover:opacity-70 md:h-64 md:w-64 lg:h-80 lg:w-80">
        <a
          href="https://www.instagram.com/p/CT97awDr8Pw/?img_index=1"
          target="_blank"
          rel="noreferrer"
        >
          <img src={postImg1} className="h-full w-full object-cover" />
        </a>
      </div>
      <div className="h-36 w-36 bg-bege-400 transition duration-200 hover:opacity-70 md:h-64 md:w-64 lg:h-80 lg:w-80">
        <a
          href="https://www.instagram.com/p/CQZGx78Heon/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={postImg2} className="h-full w-full object-cover" />
        </a>
      </div>
      <div className="h-36 w-36 bg-bege-400 transition duration-200 hover:opacity-70 md:h-64 md:w-64 lg:h-80 lg:w-80">
        <a
          href="https://www.instagram.com/p/CQHYB9nngDm/?img_index=1"
          target="_blank"
          rel="noreferrer"
        >
          <img src={postImg3} className="h-full w-full object-cover" />
        </a>
      </div>
      <div className="h-36 w-36 bg-bege-400 transition duration-200 hover:opacity-70 md:h-64 md:w-64 lg:h-80 lg:w-80">
        <a
          href="https://www.instagram.com/p/COBiWTSnQ0b/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={postImg4} className="h-full w-full object-cover" />
        </a>
      </div>
      <div className="h-36 w-36 bg-bege-400 transition duration-200 hover:opacity-70 md:h-64 md:w-64 lg:h-80 lg:w-80">
        <a
          href="https://www.instagram.com/p/CmfNjiWu8pB/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={postImg5} className="h-full w-full object-cover" />
        </a>
      </div>
      <div className="h-36 w-36 bg-bege-400 transition duration-200 hover:opacity-70 md:h-64 md:w-64 lg:h-80 lg:w-80">
        <a
          href="https://www.instagram.com/p/CwVwY0xqVz4/?img_index=1"
          target="_blank"
          rel="noreferrer"
        >
          <img src={postImg6} className="h-full w-full object-cover" />
        </a>
      </div>
    </div>
  )
}

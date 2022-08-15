import Image from 'next/image'
import timeago from 'lib/timeago'

export default function Tweet({ tweet }) {
  return (
    <p>
      {tweet.author.image && (
        <Image
          className="rounded-full"
          src={tweet.author.image}
          alt={tweet.author.name}
          width="40"
          height="40"
        />
      )}
      {timeago.format(new Date(tweet.createdAt))} {tweet.author.name}{' '}
      {tweet.content}
    </p>
  )
}

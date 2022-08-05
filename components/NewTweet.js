import { useState } from 'react'
import { useSession } from 'next-auth/react'

export default function NewTweet() {
  const [content, setContent] = useState('')
  const { data: session } = useSession()

  //don't display if we're not logged in
  if (!session) return null

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault()

        if (!content) {
          alert('No content')
          return
        }

        fetch('/api/tweet', {
          body: JSON.stringify({
            content,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
        })
      }}
    >
      <div className="flex">
        <div className="flex-1 px-1 pt-2 mt-2 mr-1 ml-1">
          <textarea
            name="content"
            cols="50"
            rows="2"
            placeholder="What's happening?"
            className="border p-4 w-full text-lg font-medium bg-transparent outline-none color-primary"
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
      </div>

      <div className="flex">
        <div className="flex-1 mb-5">
          <button className="border float-right px-8 py-2 mt-0 mr-2 font-bold rounded-full">
            Tweet
          </button>
        </div>
      </div>
    </form>
  )
}

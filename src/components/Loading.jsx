import React from 'react'

const Loading = () => {
  return (
    <div class="h-screen flex flex-col justify-center items-center">
        <svg width="51px" height="50px" viewBox="0 0 51 50">
          <rect y="0" width="13" height="50" fill="#ef4444">
            <animate
              attributeName="height"
              values="50;10;50"
              begin="0s"
              dur="1s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              values="0;20;0"
              begin="0s"
              dur="1s"
              repeatCount="indefinite"
            />
          </rect>

          <rect x="19" y="0" width="13" height="50" fill="#ea580c">
            <animate
              attributeName="height"
              values="50;10;50"
              begin="0.2s"
              dur="1s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              values="0;20;0"
              begin="0.2s"
              dur="1s"
              repeatCount="indefinite"
            />
          </rect>

          <rect x="38" y="0" width="13" height="50" fill="#dc2626">
            <animate
              attributeName="height"
              values="50;10;50"
              begin="0.4s"
              dur="1s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              values="0;20;0"
              begin="0.4s"
              dur="1s"
              repeatCount="indefinite"
            />
          </rect>
        </svg>
        <p className="text-black dark:text-white mt-5 text-lg animate-bounce">Loading</p>
      </div>
  )
}

export default Loading
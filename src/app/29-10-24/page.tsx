const cssModule = `
.scrollContainer {
  width: 100%;
  overflow: hidden;
  padding: 1rem 0;
  margin-bottom: 1rem;
}

.scrollWrapper {
  position: relative;
  white-space: nowrap;
}

.scrollText {
  display: inline-block;
}

.scrollTextContent {
  font-size: 1.125rem;
}

.scrollLeft {
  animation: scrollLeft 60s linear infinite;
}

.scrollRight {
  animation: scrollRight 60s linear infinite;
}

@keyframes scrollLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes scrollRight {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
`

const ScrollingText = ({
  text = 'This is a scrolling text message • ',
  direction = 'left',
}) => {
  const repeatedText = text.repeat(100)
  const scrollClass = direction === 'left' ? 'scrollLeft' : 'scrollRight'

  return (
    <div className="scrollContainer ">
      <div className="scrollWrapper">
        <div className={`scrollText ${scrollClass}`}>
          <span className="text-5xl tracking-widest">{repeatedText}</span>
        </div>
        <div className={`scrollText ${scrollClass}`}>
          <span className="text-5xl tracking-widest">{repeatedText}</span>
        </div>
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <div className="bg-orange-600 h-screen font-mono overflow-hidden">
      <div className="demoSection text-orange-50">
        <div className="absolute z-10 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-orange-800 bg-opacity-60 px-8 py-6 rounded-3xl">
          <div className="flex flex-col gap-8">
            <h1 className="text-7xl italic text-center font-bold ">
              Thanks again<span className="text-orange-400">!</span>
            </h1>
            <p className="text-xl italic text-center  font-bold animate-pulse">molto bene</p>
          </div>
        </div>
        <ScrollingText text="🍝" direction="left" />
        <ScrollingText text="👩‍🍳" direction="right" />
        <ScrollingText text="🧀" direction="left" />
        <ScrollingText text="🧅" direction="right" />
        <ScrollingText text="🤌" direction="left" />
        <ScrollingText text="🍅" direction="right" />
        <ScrollingText text="🍪" direction="left" />
        <ScrollingText text="🏴󠁧󠁢󠁳󠁣󠁴󠁿" direction="right" />
        <ScrollingText text="🥫" direction="left" />
        <ScrollingText text="🪱" direction="right" />
        <ScrollingText text="🎃" direction="left" />
      </div>

      <style>{cssModule}</style>
    </div>
  )
}

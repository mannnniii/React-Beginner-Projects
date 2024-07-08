import React from 'react'
import { accordionData } from './utils/content'
import Accordion from './Accordion'

function App() {
  return (
    <div>
      <div className="accordion">
        {accordionData.map(({ title, content }) => {
      return   <Accordion title={title} content={content} />
        })}
      </div>
    </div>
  )
}

export default App

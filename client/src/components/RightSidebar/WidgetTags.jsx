import React from 'react'

const WidgetTags = () => {

  const tags = ['c','c++','javascript','python','java','html','react','node','react','sql','php','mongoDB','mern','express','css']

  return (
    <div className='widget-tags'>
      <h3>Watched Tags</h3>
      <div className='widget-tags-div'>
        {
          tags.map((tag) => (
            <p key={tag}>{tag}</p>
          ))
        }
      </div>
    </div>
  )
}

export default WidgetTags

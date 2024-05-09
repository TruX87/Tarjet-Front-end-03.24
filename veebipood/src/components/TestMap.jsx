import React from 'react'

function TestMap() {
    return (
        <div className='testmap'>
          <iframe 
          src="https://my.atlist.com/map/6d824049-d2a3-4b87-8183-05544da62d10/?share=true" 
          allow="geolocation 'self' https://my.atlist.com" 
          width="100%" 
          height="800px" 
          loading="lazy" 
          frameborder="0" 
          scrolling="no" 
          allowfullscreen id="atlist-embed"
          ></iframe>


        </div>
      );
}

export default TestMap
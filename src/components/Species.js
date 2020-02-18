import React from 'react'

const swapi = ({PageContext}) => (
    <div>
        <h1>{PageContext.name}</h1>
        <div dangerouslySetInnerHTML={{ __html: pageContext.name }} />
        </div>
)
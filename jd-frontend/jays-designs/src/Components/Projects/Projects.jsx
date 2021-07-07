import React from 'react'
import { ImageList, ImageListItem, ImageListItemBar } from '@material-ui/core'
import itemData from './work'


function Projects() {
    return (
        <div>
            <div className="page-container">
                <div className="work-container">
                <ImageList sx={{ width: 500, height: 500 }} cols={3} rowHeight={300}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                srcSet={`${item.img}?w=161&fit=crop&auto=format 1x,
                                ${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                            />
                            <ImageListItemBar
                                title={item.title}
                                postition="below"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
                </div>
            </div>
        </div>
    )
}

export default Projects
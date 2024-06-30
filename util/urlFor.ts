import React from 'react'
import myConfiguredSanityClient from './client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(myConfiguredSanityClient)

function urlFor(source: any) {
    return builder.image(source)
}
export default urlFor
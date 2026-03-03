import React from 'react'
import FeatureCard from './FeatureCard'
import feature1 from '../assets/feature1.jpg'
import feature2 from '../assets/feature2.jpg'
import feature3 from '../assets/feature3.jpg'
import feature4 from '../assets/feature4.jpg'

const featureCard = [
    {
        image: feature1,
        title: 'Tanzanite Crystal',
        desc: '45.2ct',
        price: '$2,850'
    },
    {
        image: feature2,
        title: 'Emerald Cut Sapphire',
        desc: '3.15ct',
        price: 'Price on request'
    },
    {
        image: feature3,
        title: 'Quartz Cluster',
        desc: '125g',
        price: '$485'
    },
    {
        image: feature4,
        title: 'Ruby Specimen',
        desc: '8.7ct',
        price: '$1,250'
    },
]

const FeaturedSection = () => {
  return (
    <div>
        <div className="flex justify-center items-center flex-col">
            <h1 className='font-bold text-[32px] my-20'>Featured Pieces</h1>
            <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featureCard.map((item)=>(
        <div className="">
              <FeatureCard image={item.image} title={item.title} desc={item.desc} price={item.price} />
        </div>
    ))}
            </div>
        </div>
    </div>
  )
}

export default FeaturedSection

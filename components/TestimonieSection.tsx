import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import quoteIcon from '../assets/tick.png'
import starIcon from '../assets/star.png'
import userImg from '../assets/usercard.png'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const TestimonieSection = () => {
  return (
    <AnimationOnScroll animateIn="animate__backInUp" animateOnce={false}>
      <Section className="mt-20">
        <div className="container mx-auto py-6 xl:py-20 grid grid-cols-1 md:grid-cols-1 md:gap-4 lg:grid-cols-2 lg:gap-2">
          <div className="user-img">
            {/* <div className="user-card grid grid-cols-1 md:grid-cols-1 md:gap-6 lg:grid-cols-2 lg:gap-2">
              <div className="card-head">
                <p className="text-sm mt-4 font-semibold">Angela Taylor</p>
                <p className="text-sm text-gray-400 mt-1">CEO SAMSUNG</p>
              </div>
            </div> */}
            <Image src={userImg} alt="quoteIcon" width={600} height={300} className="mt-4" />
          </div>
          <div className="content mt-10">
            <Image src={quoteIcon} alt="quoteIcon" width={30} height={30} />
            <h4 className="my-4 font-bold text-lg">Save Time Managing Social Media For Your Business</h4>
            <p>Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.</p>
            <p className="mt-6">Believing neglected so so allowance existence departure in. In design active temper be uneasy.</p>

            <Image src={starIcon} alt="quoteIcon" width={100} height={100} className="mt-4" />
            <p className="text-sm mt-4 font-semibold">Angela Taylor</p>
            <p className="text-sm text-gray-400 mt-1">CEO SAMSUNG</p>
          </div>
        </div>
      </Section>
    </AnimationOnScroll>
  )
}

const Section = styled.section`
  /* background: #F3F7FA; */
  background-image: url(./sectionbg.png);
  background-position: center;
  background-size: cover;
  margin-top: 5rem;

`

export default TestimonieSection

'use client'

import React, { useState, useRef, useEffect } from 'react'
import Button from '../atoms/Button'
import Image from 'next/image'

const AccordionItem = ({ item, isOpen, onToggle }) => {
  const contentRef = useRef(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight)
    } else {
      setHeight(0)
    }
  }, [isOpen])

  return (
    <div className={`accordian-wrapper ${isOpen ? 'open' : ''}`}>
      <div className="title" onClick={onToggle}>
        <h4>{item.mainTitle}</h4>
      </div>
      <div
        className="description"
        ref={contentRef}
        style={{
          height: `${height}px`,
          overflow: 'hidden',
          transition: 'height 0.35s ease',
        }}
      >
        <p>{item.paragraph}</p>
        {item.isButtonVisible ? (<Button className="btn gradient-btn" href="/Become a Donner Popup">Become a Donor</Button>) : null}
        {item.isImageVisible ? (
          <figure>
            <Image src={item.imageSrc} height={429} width={643} alt="ico"></Image>
          </figure>
        ) : null}
      </div>
    </div>
  )
}

const Accordion = ({ data = [], allowMultiple = false }) => {
  const [openIndexes, setOpenIndexes] = useState([0])

  const handleToggle = (index) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      )
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]))
    }
  }

  return (
    <>
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          isOpen={openIndexes.includes(index)}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </>
  )
}

export default Accordion
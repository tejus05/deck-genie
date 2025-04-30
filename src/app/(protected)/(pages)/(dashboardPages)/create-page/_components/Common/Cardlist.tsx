'use client'
import { OutlineCard } from '@/lib/types'
import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'

type Props = {

    outlines: OutlineCard []   
    editingCard: string | null   
    selectedCard: string | null    
    editText: string   
    addOutline?: (card: OutlineCard) => void   
    onEditChange: (value: string) => void   
    onCardSelect: (id: string) => void   
    onCardDoubleClick: (id: string, title: string) => void   
    setEditText: (value: string) => void    
    setEditingCard: (id: string | null) => void  
    setSelectedCard: (id: string | null) => void  
    addMultipleOutlines: (cards: OutlineCard []) => void
    
}

const CardList = ({
addMultipleOutlines,
editText,
editingCard,
onCardDoubleClick,
onCardSelect,
onEditChange,
outlines,
selectedCard,
setEditText,
setEditingCard,
setSelectedCard ,
addOutline,
}: Props) => {
  return <motion.div
    className="space-y-2 -my-2"
    layout
    onDragOver={(e) => {
        e.preventDefault()
        if(outlines.length === 0 || e.clientY > e.currentYarget.getBoundingClientRect().
        bottom - 20){
            
        }
    }}
  ></motion.div>
}

export default CardList
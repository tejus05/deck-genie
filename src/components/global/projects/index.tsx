import { containerVariants } from '@/lib/constants'
import { Project } from '@prisma/client'
import { motion } from 'framer-motion'
import React from 'react'

type props = {
    projects: Project[]
}

const Projects = ({ projects }: Props) => {
    return (
        <motion.div
            className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            variants = {containerVariants}
            initial = "hidden"
            animate = "visible"
        >
            {projects.map((project, id) => (
                < projectCard 
                    key = {id} 
                    projectId = {project?.id}
                    title={project?.title}
                    createdAt={project?.createdAt.toString()}
                    isDelete={project?.isDeleted}
                    slideData={project?.slides}
                    src={
                        project.thumbnail ||
                        // link to some basic image 
                        ' '
                    }
                />
            ))}

        </motion.div>
    )
}

export default Projects
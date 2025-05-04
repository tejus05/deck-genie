"use server"

import { client } from '@/lib/prisma'
import {onAuthenticateUser} from './user'
export const getAllProjects = async () => {
    try{
        const checkUser = await onAuthenticateUser()
        if(checkUser.status!==200 || !checkUser.user){
            return{status:403,error:'User Not Authenticated'}
        }


        const projects = await client.project.findMany({
            where:{
                userId:checkUser.user.id,
                isDeleted : false,

            },
            orderBy:{
                updatedAt:'desc',
            },
        })

        if(projects.length === 0){
            return{status:404,error:'No Projects Found'}
        }

        return{ status:200,data:projects}
    }catch (error){
        console.log('🔴 ERROR', error);
        return { status: 500 , error:'Intenal Server Error'};
    }
}



export const getRecentProjects = async () => {
    try{
        const checkUser = await onAuthenticateUser()
        if(checkUser.status !== 200 || !checkUser.user){
            return {status : 403, error : 'User not authenticated' }
        }

        const projects = await client.project.findMany({
            where: {
                userId: checkUser.user.id,
                isDeleted:false
            },

            orderBy:{
                updatedAt: 'desc',
            },
            take: 5,
        })

        if(projects.length() === 0){
            return{
                status:404, error: 'No recent Projects available',
            }
        }

        return { status: 200, data : projects}
    } catch (error) {
        console.log('🔴 ERROR', error);
        return { status: 500 , error:'Intenal Server Error'};
    }
}

export const recoverProject = async (projectId: string) => {
    try{
        const checkUser = await onAuthenticateUser()

        if(checkUser.status !== 200 || !checkUser.user){
            return {status : 403, error : 'User not authenticated' }
        }
        const updatedProject = await client.project.update({
            where:{
                id: projectId,
            },
            data:{
                isDeleted: false,
            },
        })
        if(!updatedProject){
            return { status : 500, error: 'Failed to recover project'}
        }
        return { status: 200, data: updatedProject}
    }
    catch(error) {
        console.log('🔴 ERROR', error);
        return { status: 500 , error:'Intenal Server Error'};
    }
}

export const deleteProject = async (projectId: string) => {
    try{
        const checkUser = await onAuthenticateUser()
        if(checkUser.status !== 200 || !checkUser.user){
            return {status : 403, error : 'User not authenticated' }
        }
        const updatedProject = await client.project.update({
            where:{
                id: projectId,
            },
            data:{
                isDeleted: true,
            },
        })

        if(!updatedProject){
            return { status : 500, error: 'Failed to delete project'}
        }
        return { status: 200, data: updatedProject}
    }catch (error){
        console.log('🔴 ERROR', error);
        return { status: 500 , error:'Intenal Server Error'};
    }
}
export const createProject = async (title: string, outlines: OutlineCard[]) => {
    try {
      if (!title || !outlines || outlines.length === 0) {
        return { status: 400, error: 'Title and outlines are required.' };
      }
  
      const allOutlines = outlines.map((outline) => outline.title);
  
      const checkUser = await onAuthenticateUser();
  
      if (checkUser.status !== 200 || !checkUser.user) {
        return { status: 403, error: 'User not authenticated' };
      }
  
      const project = await client.project.create({
        data: {
          title,
          outlines: allOutlines,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: checkUser.user.id,
        },
      });
  
      if (!project) {
        return { status: 500, error: 'Failed to create project' };
      }
  
      return { status: 200, data: project };
    } catch (error) {
      console.error('ERROR', error);
      return { status: 500, error: 'Internal server error' };
    }
  };

  export const getProjectById = async (projectId: string) => {
    try{
        const checkUser = await onAuthenticateUser()
        if(checkUser.status !== 200 || !checkUser.user){
            return {status : 403, error : 'User not authenticated' }
        }

        const project = await client.project.findFirst({
            where: { id: projectId },
        })

        if(!project){
            return { status:404, error: 'Project not found' }
        }

        return { ststus: 200, data: project }

    } catch (error) {
        console.log('🔴 ERROR', error);
        return { status: 500 , error:'Intenal Server Error'};
    }
  }

  export const updateSlides = async (projectId: string, slides: JsonValue) => {
    try {
        if (!projectId || !slides) {
            return { status: 400, error: 'Project ID and slides are required.' };
        }

        const updatedProject = await client.project.update({
            where: { id: projectId },
            data: { slides },
        })

        if (!updatedProject) {
            return { status: 500, error: 'Failed to update slides' };
        }
        return { status: 200, data: updatedProject }
    } catch (error) {
        console.log('🔴 ERROR', error);
        return { status: 500, error: 'Internal server error' };
    }
  }

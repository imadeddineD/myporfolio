import React from 'react'

import { projectsData } from '@/lib/data';
import Container from '@/components/Container';
import Gallery from '@/components/Gallery';
import Info from '@/components/Info';
import Galleries from '@/components/Slider';

interface ProductPageProps {
    params: {
      projectId: string;
    },}

const page : React.FC<ProductPageProps> = async ({ 
    params
   }) => {
    const myProject = projectsData.filter(project => project.id === params.projectId)
  return (
    <>
    <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">{myProject[0]?.title}</h1>
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Galleries images={myProject[0]?.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={myProject[0]} />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default page
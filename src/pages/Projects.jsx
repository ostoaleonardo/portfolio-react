import { Cursor, Navbar, ProjectCard, Transition } from '../components'
import { projects } from '../constants'

const Projects = () => {
    return (
        <>
            <Transition />
            <main className='min-h-screen flex flex-col p-6 sm:px-12'>
                <Navbar />
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-20 place-items-center'>
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                        />
                    ))}
                </div>
            </main>
            <Cursor />
        </>
    )
}

export default Projects
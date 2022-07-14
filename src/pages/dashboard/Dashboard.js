import { useState } from 'react'
import { useCollection } from '../../hooks/useCollection'
import { ProjectList } from '../../components/ProjectList'
import { ProjectFilter } from './ProjectFilter'

import './Dashboard.css'

export const Dashboard = () => {
  const { documents, error } = useCollection('projects')
  const [currentFilter, setCurrentFilter] = useState('all')

  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter)
  }

  return (
    <div>
      <h2 className='page-title'>Dashboard</h2>
      {error && <p className='error'>{error}</p>}
      {documents && <ProjectFilter
        currentFilter={currentFilter}
        changeFilter={changeFilter} />
      }
      {documents && <ProjectList projects={documents} />}
    </div>
  )
}

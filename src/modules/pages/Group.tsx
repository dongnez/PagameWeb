import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const Group = () => {
 	const {id}=	useParams() 
	 const customUrl = `pagame://group/${id}/`

	useEffect(() => {
			window.location.href = customUrl
	}, []) 
  
	
  return (
	<div>
		<p className='text-white text-lg'>Group {id}</p>
		<button onClick={()=>window.location.href = customUrl} className='text-blue-500'>Abre la app</button>
	</div>
  )
}

import React from 'react'

const Equipements = ({ dataLogement }) => {
   return (
      <ul>
         {dataLogement.equipments.map((equipment, index) => (
            <li key={`${equipment} - ${index}`}>{equipment}</li>
         ))}
      </ul>
   )
}

export default Equipements

import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 'soi', text: 'Soi', value: 'soi' },
  { key: 'professionnelle', text: 'Professionnelle', value: 'professionnelle' },
  { key: 'conjoints', text: 'Conjoints', value: 'conjoints' },
  { key: 'famille', text: 'Famille', value: 'famille' },
]

const MultipleSelector = () => (
  <Dropdown placeholder='Choisissez un type de relation' fluid multiple selection options={options} />
)

export default MultipleSelector

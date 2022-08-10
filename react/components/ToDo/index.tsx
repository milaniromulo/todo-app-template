// import React, { memo } from 'react'
import React from 'react'
import { defineMessages } from 'react-intl'

import styles from './styles.css'

interface Props {
  active: boolean
}

const ToDo = ({ active }: Props) => {
  return <div className={styles.toDo}>{active && 'APP'}</div>
}

// const MemoizedHighlightSlide = memo(HighlightSlide)

const messages = defineMessages({
  title: {
    id: 'admin/editor.to-do.title',
    defaultMessage: '',
  },
  activation: {
    id: 'admin/editor.to-do.activation',
    defaultMessage: '',
  },
})

const defaultProps = {
  active: true,
}

ToDo.defaultProps = defaultProps

ToDo.schema = {
  title: messages.title.id,
  type: 'object',
  properties: {
    active: {
      type: 'boolean',
      title: messages.activation.id,
      default: defaultProps.active,
    },
  },
}

export default ToDo

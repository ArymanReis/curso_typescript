import React from 'react'

type Props = {

  name: string
}

const TwoComponents = (props: Props) => {
  return (
    <div>
      <p>Meu segundo componente</p>
      <p>O nome dele é {props.name}</p>
    </div>
  )
}

export default TwoComponents;